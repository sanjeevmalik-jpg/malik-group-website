import assert from "node:assert/strict";
import test from "node:test";
import { buildContactPayload, buildNotePayload, parseLead, readContactId } from "./lead";

const valid = {
  name: "Asha Patel",
  email: "Asha@Example.com",
  phone: "(321) 555-0148",
  message: "We are hoping to look at homes in Lake Mary.",
  sourcePage: "/contact",
  dealType: "buyer",
  company_website: "",
};

test("accepts a complete lead and normalizes the phone and email", () => {
  const result = parseLead(valid);
  assert.equal(result.ok, true);
  if (!result.ok || result.spam) return;
  assert.equal(result.lead.email, "asha@example.com");
  assert.equal(result.lead.phone, 3215550148);
  assert.equal(result.lead.firstName, "Asha");
  assert.equal(result.lead.lastName, "Patel");
  assert.deepEqual(buildContactPayload(result.lead), {
    first_name: "Asha",
    last_name: "Patel",
    email: "asha@example.com",
    cell_phone_1: 3215550148,
    deal_type: "buyer",
    source: "sanjeevmalik.com website",
    capture_method: "Website Lead Capture",
  });
  assert.match(buildNotePayload(result.lead).details, /Page: \/contact/);
});

test("strips a leading country code", () => {
  const result = parseLead({ ...valid, phone: "+1 407-555-0199" });
  assert.equal(result.ok, true);
  if (!result.ok || result.spam) return;
  assert.equal(result.lead.phone, 4075550199);
});

test("requires a last name, a real email, and a message", () => {
  const result = parseLead({
    ...valid,
    name: "Asha",
    email: "not-an-email",
    message: "Hi",
  });
  assert.equal(result.ok, false);
  if (result.ok) return;
  assert.ok(result.fields.name);
  assert.ok(result.fields.email);
  assert.ok(result.fields.message);
});

test("treats a filled honeypot as spam without a validation error", () => {
  const result = parseLead({ ...valid, name: "", company_website: "https://spam.example" });
  assert.deepEqual(result, { ok: true, spam: true });
});

test("rejects an unknown source page and deal type", () => {
  const result = parseLead({
    ...valid,
    sourcePage: "https://evil.example",
    dealType: "renter",
  });
  assert.equal(result.ok, false);
  if (result.ok) return;
  assert.ok(result.fields.sourcePage);
  assert.ok(result.fields.dealType);
});

test("reads a contact id from the shapes the API may return", () => {
  assert.equal(readContactId({ id: 42 }), "42");
  assert.equal(readContactId({ data: { id: "99" } }), "99");
  assert.equal(readContactId({ contact: { id: 7 } }), "7");
  assert.equal(readContactId({ data: { contact: { id: 8 } } }), "8");
  assert.equal(readContactId({ ok: true }), null);
});
