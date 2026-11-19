import { NextResponse } from "next/server";
import {
  buildContactPayload,
  buildNotePayload,
  FRIENDLY_LEAD_ERROR,
  NOTE_PARTIAL_ERROR,
  parseLead,
  readContactId,
} from "@/lib/lead";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const CONTACT_URL = "https://api.kvcore.com/v2/public/contact";

type Upstream = {
  ok: boolean;
  status: number;
  json: unknown;
};

async function kvFetch(url: string, method: "POST" | "PUT", apiKey: string, body: unknown): Promise<Upstream> {
  const response = await fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
    cache: "no-store",
    signal: AbortSignal.timeout(12000),
  });

  const text = await response.text();
  let json: unknown = null;
  if (text) {
    try {
      json = JSON.parse(text) as unknown;
    } catch {
      json = null;
    }
  }

  return { ok: response.ok, status: response.status, json };
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function POST(request: Request) {
  const length = Number(request.headers.get("content-length") ?? "0");
  if (Number.isFinite(length) && length > 20_000) {
    return NextResponse.json(
      { ok: false, error: "Please shorten the message and try again." },
      { status: 400 },
    );
  }

  let body: unknown;
  try {
    const text = await request.text();
    if (text.length > 20_000) {
      return NextResponse.json(
        { ok: false, error: "Please shorten the message and try again." },
        { status: 400 },
      );
    }
    body = text ? (JSON.parse(text) as unknown) : null;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Please check the form and try again." },
      { status: 400 },
    );
  }

  const parsed = parseLead(body);
  if (!parsed.ok) {
    return NextResponse.json(
      { ok: false, error: parsed.error, fields: parsed.fields },
      { status: 400 },
    );
  }
  if (parsed.spam) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.BOLDTRAIL_API_KEY?.trim();
  if (!apiKey) {
    console.error("Lead form is unavailable because BOLDTRAIL_API_KEY is not set.");
    return NextResponse.json({ ok: false, error: FRIENDLY_LEAD_ERROR }, { status: 503 });
  }

  let created: Upstream;
  try {
    created = await kvFetch(CONTACT_URL, "POST", apiKey, buildContactPayload(parsed.lead));
  } catch (error) {
    console.error("BoldTrail create-contact request failed", error instanceof Error ? error.name : "error");
    return NextResponse.json({ ok: false, error: FRIENDLY_LEAD_ERROR }, { status: 502 });
  }

  const contactId = readContactId(created.json);
  if (!created.ok || !contactId) {
    console.error("BoldTrail create-contact was not accepted", created.status);
    return NextResponse.json({ ok: false, error: FRIENDLY_LEAD_ERROR }, { status: 502 });
  }

  const note = buildNotePayload(parsed.lead);
  const noteUrl = `${CONTACT_URL}/${contactId}/action/note`;
  for (let attempt = 0; attempt < 3; attempt += 1) {
    if (attempt > 0) await sleep(800 * attempt);
    try {
      const noted = await kvFetch(noteUrl, "PUT", apiKey, note);
      if (noted.ok) {
        return NextResponse.json({ ok: true });
      }
      console.error("BoldTrail note was not accepted", noted.status);
    } catch (error) {
      console.error("BoldTrail note request failed", error instanceof Error ? error.name : "error");
    }
  }

  return NextResponse.json({ ok: false, error: NOTE_PARTIAL_ERROR }, { status: 502 });
}
