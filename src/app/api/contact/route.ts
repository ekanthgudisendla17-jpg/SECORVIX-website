// Contact form: emails each enquiry to the SECORVIX inbox over SMTP.
//   POST /api/contact/  { firstName, lastName, email, phone, company, interest, message, website }
//
// Set these in GoDaddy → Manage Secrets (never commit them):
//   SMTP_USER   mailbox used to send, e.g. contact@secorvix-ai.com
//   SMTP_PASS   that mailbox's password
//   SMTP_HOST   optional, default smtpout.secureserver.net (GoDaddy email)
//   SMTP_PORT   optional, default 465
//   CONTACT_TO  optional, default contact@secorvix-ai.com

import nodemailer from "nodemailer";

export const dynamic = "force-dynamic";

const CONTACT_TO = process.env.CONTACT_TO || "contact@secorvix-ai.com";
const FALLBACK = `Sorry, your message could not be sent. Please email us at ${CONTACT_TO}.`;

// Simple per-visitor limit: 5 enquiries per hour.
const LIMIT = 5;
const WINDOW_MS = 60 * 60 * 1000;
const recent = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const hits = (recent.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.set(ip, hits);
  if (recent.size > 5000) recent.clear();
  return hits.length >= LIMIT;
}

function field(input: Record<string, unknown>, key: string, max: number, oneLine = true): string {
  const raw = typeof input[key] === "string" ? (input[key] as string) : "";
  const value = oneLine ? raw.replace(/[\r\n\t]+/g, " ") : raw;
  return value.trim().slice(0, max);
}

function fail(message: string, status = 400) {
  return Response.json({ ok: false, error: message }, { status });
}

export async function POST(request: Request) {
  let input: Record<string, unknown>;
  try {
    input = await request.json();
  } catch {
    return fail("Please fill in every field.");
  }

  // Honeypot field: real visitors never see or fill it.
  if (field(input, "website", 200) !== "") return Response.json({ ok: true });

  const ip =
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    "unknown";
  if (rateLimited(ip)) {
    return fail("You have sent several enquiries recently. Please try again later or email us directly.", 429);
  }

  const first = field(input, "firstName", 80);
  const last = field(input, "lastName", 80);
  const email = field(input, "email", 200);
  const phone = field(input, "phone", 30);
  const company = field(input, "company", 150);
  const interest = field(input, "interest", 80);
  const message = field(input, "message", 5000, false);

  if (!first || !last || !company || !interest || !message) return fail("Please fill in every field.");
  if (!/^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]+$/.test(email)) return fail("Please enter a valid email address.");
  const digits = phone.replace(/\D/g, "");
  if (!/^[0-9+()\-\s]{7,20}$/.test(phone) || digits.length < 7 || digits.length > 15) {
    return fail("Please enter a valid phone number.");
  }

  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!user || !pass) {
    console.error("Contact form: SMTP_USER / SMTP_PASS secrets are not set.");
    return fail(FALLBACK, 500);
  }

  const port = Number(process.env.SMTP_PORT || 465);
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtpout.secureserver.net",
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const sent = new Date().toUTCString();
  const text =
    "New enquiry from secorvix-ai.com\n\n" +
    `Name:      ${first} ${last}\n` +
    `Email:     ${email}\n` +
    `Phone:     ${phone}\n` +
    `Company:   ${company}\n` +
    `Interest:  ${interest}\n\n` +
    `Message:\n${message}\n\n` +
    `-- Sent ${sent}\n`;

  try {
    await transporter.sendMail({
      from: { name: "SECORVIX Website", address: user },
      to: CONTACT_TO,
      replyTo: { name: `${first} ${last}`, address: email },
      subject: `Website enquiry: ${interest} - ${company}`,
      text,
    });
  } catch (err) {
    console.error("Contact form: email failed:", err instanceof Error ? err.message : err);
    return fail(FALLBACK, 500);
  }

  recent.set(ip, [...(recent.get(ip) || []), Date.now()]);
  return Response.json({ ok: true });
}
