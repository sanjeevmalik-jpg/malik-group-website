import { communities } from "./communities";
import { site } from "./site";

export const FRIENDLY_LEAD_ERROR =
  "We could not send your message just now. Please call or email Sanjeev and he will help you directly.";

export const NOTE_PARTIAL_ERROR =
  "Your contact details were saved, but the message could not be attached. Please call or email Sanjeev so he has the full note.";

const dealTypes = ["buyer", "seller", "buyer,seller"] as const;
export type DealType = (typeof dealTypes)[number];

export type LeadField = "name" | "email" | "phone" | "message" | "sourcePage" | "dealType";

export type NormalizedLead = {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  phoneDisplay: string;
  message: string;
  sourcePage: string;
  dealType: DealType;
};

export type ParseResult =
  | { ok: true; spam: true }
  | { ok: true; spam: false; lead: NormalizedLead }
  | { ok: false; error: string; fields: Partial<Record<LeadField, string>> };

const allowedPages = new Set<string>([
  "/",
  "/about",
  "/buy",
  "/sell",
  "/relocation",
  "/communities",
  "/indian-realtor-orlando",
  "/reviews",
  "/contact",
  ...communities.map((community) => `/communities/${community.slug}`),
]);

function asString(value: unknown): string | null {
  return typeof value === "string" ? value : null;
}

export function parseLead(body: unknown): ParseResult {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return {
      ok: false,
      error: "Please check the form and try again.",
      fields: {},
    };
  }

  const record = body as Record<string, unknown>;
  const honeypot = record.company_website;
  if (typeof honeypot === "string" ? honeypot.trim().length > 0 : honeypot != null) {
    return { ok: true, spam: true };
  }

  const fields: Partial<Record<LeadField, string>> = {};
  const name = asString(record.name)?.trim().replace(/\s+/g, " ") ?? "";
  const email = asString(record.email)?.trim().toLowerCase() ?? "";
  const phoneRaw = asString(record.phone)?.trim() ?? "";
  const message = asString(record.message)?.replace(/\u0000/g, "").trim() ?? "";
  const sourcePageRaw = asString(record.sourcePage)?.trim() ?? "";
  const dealTypeRaw = asString(record.dealType)?.trim() ?? "";

  const nameParts = name.split(" ");
  const firstName = nameParts[0] ?? "";
  const lastName = nameParts.slice(1).join(" ");
  const nameOk =
    name.length >= 3 &&
    name.length <= 80 &&
    nameParts.length >= 2 &&
    /^[\p{L}][\p{L}.'’-]*$/u.test(firstName) &&
    /^[\p{L}][\p{L}\s.'’-]*$/u.test(lastName);
  if (!nameOk) {
    fields.name = "Enter your first and last name.";
  }

  if (email.length > 120 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    fields.email = "Enter a valid email address.";
  }

  const digits = phoneRaw.replace(/\D/g, "");
  const national = digits.length === 11 && digits.startsWith("1") ? digits.slice(1) : digits;
  if (!/^[2-9]\d{2}[2-9]\d{6}$/.test(national)) {
    fields.phone = "Enter a 10-digit U.S. phone number.";
  }

  if (message.length < 8 || message.length > 2000) {
    fields.message = "Please add a short message.";
  }

  const sourcePage =
    sourcePageRaw.length > 1 ? sourcePageRaw.replace(/\/+$/, "") : sourcePageRaw;
  if (!allowedPages.has(sourcePage)) {
    fields.sourcePage = "Please use the form on this site, or call or email instead.";
  }

  if (!dealTypes.includes(dealTypeRaw as DealType)) {
    fields.dealType = "Choose buying, selling, or both.";
  }

  if (Object.keys(fields).length > 0) {
    return {
      ok: false,
      error: "Please check the form and try again.",
      fields,
    };
  }

  return {
    ok: true,
    spam: false,
    lead: {
      firstName,
      lastName,
      email,
      phone: Number(national),
      phoneDisplay: national,
      message,
      sourcePage,
      dealType: dealTypeRaw as DealType,
    },
  };
}

export function buildContactPayload(lead: NormalizedLead) {
  return {
    first_name: lead.firstName,
    last_name: lead.lastName,
    email: lead.email,
    cell_phone_1: lead.phone,
    deal_type: lead.dealType,
    source: site.leadSource,
    capture_method: "Website Lead Capture",
  };
}

export function buildNotePayload(lead: NormalizedLead) {
  const interest =
    lead.dealType === "buyer"
      ? "Buying"
      : lead.dealType === "seller"
        ? "Selling"
        : "Buying and selling";

  return {
    title: "Website inquiry",
    details: `Page: ${lead.sourcePage}\nInterest: ${interest}\nPhone: ${lead.phoneDisplay}\nEmail: ${lead.email}\n\n${lead.message}`,
  };
}

export function readContactId(payload: unknown): string | null {
  if (!payload || typeof payload !== "object") return null;
  const record = payload as Record<string, unknown>;
  const data = record.data;
  const contact = record.contact;
  const nestedData =
    data && typeof data === "object" ? (data as Record<string, unknown>) : null;
  const nestedContact =
    nestedData?.contact && typeof nestedData.contact === "object"
      ? (nestedData.contact as Record<string, unknown>)
      : null;
  const contactRecord =
    contact && typeof contact === "object" ? (contact as Record<string, unknown>) : null;

  const candidates = [
    record.id,
    nestedData?.id,
    contactRecord?.id,
    nestedContact?.id,
  ];

  for (const candidate of candidates) {
    if (typeof candidate === "number" && Number.isFinite(candidate)) {
      return String(candidate);
    }
    if (typeof candidate === "string" && /^\d+$/.test(candidate.trim())) {
      return candidate.trim();
    }
  }

  return null;
}
