"use client";

import { useState } from "react";
import { btnPrimary, EmailAddress, PhoneWithText } from "@/components/ui";
import { FRIENDLY_LEAD_ERROR, parseLead, type LeadField } from "@/lib/lead";

type DealType = "buyer" | "seller" | "buyer,seller";

const fieldClass =
  "mt-1 w-full rounded-xl border border-line bg-white px-3 py-3 text-base text-ink shadow-sm";

export function LeadForm({
  sourcePage,
  idPrefix,
  defaultDeal,
  heading = "Send a note",
  intro = "Tell Sanjeev what you are looking for. This form goes to his BoldTrail contact list. If it cannot be sent, call or email and he will help you directly.",
}: {
  sourcePage: string;
  idPrefix: string;
  defaultDeal?: DealType;
  heading?: string;
  intro?: string;
}) {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const [fields, setFields] = useState<Partial<Record<LeadField, string>>>({});

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      message: String(data.get("message") ?? ""),
      sourcePage: String(data.get("sourcePage") ?? ""),
      dealType: String(data.get("dealType") ?? ""),
      company_website: String(data.get("company_website") ?? ""),
    };
    const parsed = parseLead(payload);
    if (!parsed.ok) {
      setFields(parsed.fields);
      setError(parsed.error);
      setDone(false);
      return;
    }
    setSubmitting(true);
    setError("");
    setFields({});
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = (await response.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
        fields?: Partial<Record<LeadField, string>>;
      } | null;
      if (!response.ok || !result?.ok) {
        setError(result?.error || FRIENDLY_LEAD_ERROR);
        setFields(result?.fields ?? {});
        setDone(false);
        return;
      }
      setDone(true);
      form.reset();
    } catch {
      setError(FRIENDLY_LEAD_ERROR);
      setDone(false);
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div role="status" className="rounded-3xl border border-line bg-white p-6 sm:p-8">
        <h2 className="text-3xl text-navy">Thank you</h2>
        <p className="mt-3 text-lg leading-relaxed text-slate">
          Sanjeev received your note and will be in touch. If you would rather talk now, call <PhoneWithText /> or email <EmailAddress />.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="relative rounded-3xl border border-line bg-white p-6 shadow-sm sm:p-8">
      <h2 className="text-3xl text-navy">{heading}</h2>
      <p className="mt-3 text-base leading-relaxed text-slate">{intro}</p>
      {error ? (
        <div role="alert" className="mt-4 rounded-2xl bg-sand px-4 py-3 text-sm leading-relaxed text-ink">
          <p>{error}</p>
          <p className="mt-2">
            Call <PhoneWithText /> or email <EmailAddress />.
          </p>
        </div>
      ) : null}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-navy sm:col-span-2">
          Full name
          <input name="name" autoComplete="name" required className={fieldClass} />
          {fields.name ? <span className="mt-1 block font-medium text-orange-deep">{fields.name}</span> : null}
        </label>
        <label className="block text-sm font-semibold text-navy">
          Email
          <input name="email" type="email" autoComplete="email" required className={fieldClass} />
          {fields.email ? <span className="mt-1 block font-medium text-orange-deep">{fields.email}</span> : null}
        </label>
        <label className="block text-sm font-semibold text-navy">
          Phone
          <input name="phone" type="tel" autoComplete="tel" required className={fieldClass} />
          {fields.phone ? <span className="mt-1 block font-medium text-orange-deep">{fields.phone}</span> : null}
        </label>
        <fieldset className="sm:col-span-2">
          <legend className="text-sm font-semibold text-navy">I am interested in</legend>
          <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            {(
              [
                ["buyer", "Buying"],
                ["seller", "Selling"],
                ["buyer,seller", "Buying and selling"],
              ] as const
            ).map(([value, label]) => (
              <label key={value} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-4 py-2">
                <input
                  type="radio"
                  name="dealType"
                  value={value}
                  defaultChecked={defaultDeal === value}
                  required
                />
                {label}
              </label>
            ))}
          </div>
          {fields.dealType ? <span className="mt-1 block text-sm font-medium text-orange-deep">{fields.dealType}</span> : null}
        </fieldset>
        <label className="block text-sm font-semibold text-navy sm:col-span-2">
          Message
          <textarea name="message" required rows={5} className={fieldClass} />
          {fields.message ? <span className="mt-1 block font-medium text-orange-deep">{fields.message}</span> : null}
        </label>
      </div>
      <input type="hidden" name="sourcePage" value={sourcePage} />
      <div className="absolute left-[-9999px] h-0 overflow-hidden" aria-hidden="true">
        <label htmlFor={`${idPrefix}-company`}>Company website</label>
        <input id={`${idPrefix}-company`} name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <button type="submit" className={`${btnPrimary} mt-6`} disabled={submitting}>
        {submitting ? "Sending…" : "Send message"}
      </button>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        By sending this form you are asking Sanjeev to contact you about your question. It is not stored on this website.
      </p>
    </form>
  );
}
