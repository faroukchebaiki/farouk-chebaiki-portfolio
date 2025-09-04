import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  subject?: string;
  message: string;
  consent: boolean;
  honey?: string; // honeypot
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<ContactPayload>;

    const name = (body.name ?? "").trim().slice(0, 120);
    const email = (body.email ?? "").trim().slice(0, 200);
    const subject = (body.subject ?? "").trim().slice(0, 200);
    const message = (body.message ?? "").trim().slice(0, 6000);
    const consent = Boolean(body.consent);
    const honey = (body.honey ?? "").trim();

    if (honey) return NextResponse.json({ ok: true }, { status: 202 });
    if (!name || !email || !message)
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    if (!EMAIL_RE.test(email))
      return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
    if (!consent)
      return NextResponse.json({ ok: false, error: "Consent is required" }, { status: 400 });

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const RESEND_FROM = process.env.RESEND_FROM;
    const RESEND_TO = process.env.RESEND_TO;
    if (!RESEND_API_KEY || !RESEND_FROM || !RESEND_TO)
      return NextResponse.json({ ok: false, error: "Email is not configured" }, { status: 500 });

    const createdAt = new Date().toISOString();

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: RESEND_FROM,
        to: RESEND_TO,
        subject: subject || `New message from ${name}`,
        text: `New contact form submission\n\nName: ${name}\nEmail: ${email}\nWhen: ${createdAt}\n\nMessage:\n${message}`,
        html: `
          <div>
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>When:</strong> ${escapeHtml(createdAt)}</p>
            ${subject ? `<p><strong>Subject:</strong> ${escapeHtml(subject)}</p>` : ""}
            <hr />
            <pre style="white-space:pre-wrap;font-family:ui-monospace, SFMono-Regular, Menlo, monospace">${escapeHtml(message)}</pre>
          </div>
        `,
      }),
      cache: "no-store",
    });

    if (!res.ok)
      return NextResponse.json({ ok: false, error: `Failed to send (${res.status})` }, { status: 502 });

    return NextResponse.json({ ok: true }, { status: 202 });
  } catch {
    return NextResponse.json({ ok: false, error: "Bad request" }, { status: 400 });
  }
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

