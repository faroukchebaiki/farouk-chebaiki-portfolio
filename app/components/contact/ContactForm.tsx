"use client";

import * as React from "react";

export default function ContactForm() {
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = React.useState<string | null>(null);
  const [emailValid, setEmailValid] = React.useState(true);
  const emailRef = React.useRef<HTMLInputElement>(null);

  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const emailVal = String(data.get("email") || "");
    const isValid = EMAIL_RE.test(emailVal);
    setEmailValid(isValid);
    if (!isValid) {
      emailRef.current?.focus();
      setStatus("idle");
      setError("Please enter a valid email address.");
      return;
    }
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      subject: String(data.get("subject") || ""),
      message: String(data.get("message") || ""),
      consent: data.get("consent") === "on",
      honey: String(data.get("honey") || ""),
    };
    setStatus("loading");
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) throw new Error(json.error || `Failed (${res.status})`);
      setStatus("success");
      form.reset();
      setEmailValid(true);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* honeypot */}
      <input type="text" name="honey" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label className="block text-sm mb-1">Name</label>
          <input
            name="name"
            required
            maxLength={120}
            className="w-full rounded-lg border border-border bg-background px-3 py-2"
          />
        </div>
        <div className="sm:col-span-1">
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            ref={emailRef}
            onChange={(e) => setEmailValid(EMAIL_RE.test(e.target.value))}
            aria-invalid={!emailValid}
            className={`w-full rounded-lg bg-background px-3 py-2 border ${
              emailValid ? "border-border" : "border-destructive focus:outline-destructive"
            }`}
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm mb-1">Subject (optional)</label>
          <input
            name="subject"
            maxLength={200}
            className="w-full rounded-lg border border-border bg-background px-3 py-2"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm mb-1">Message</label>
          <textarea
            name="message"
            required
            rows={6}
            maxLength={6000}
            className="w-full rounded-lg border border-border bg-background px-3 py-2"
          />
        </div>
      </div>

      <div className="flex items-start gap-2 text-sm">
        <input id="consent" name="consent" type="checkbox" required className="mt-1" />
        <label htmlFor="consent" className="text-muted-foreground">
          I consent to be contacted regarding my inquiry.
        </label>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center rounded-lg bg-primary text-primary-foreground px-4 py-2 hover:bg-accent hover:text-accent-foreground transition disabled:opacity-50"
        >
          {status === "loading" ? "Sending…" : "Send"}
        </button>
        {status === "success" && (
          <span className="text-sm text-emerald-600 dark:text-emerald-400">Sent. I’ll get back to you soon.</span>
        )}
        {status === "error" && (
          <span className="text-sm text-destructive">{error}</span>
        )}
      </div>
    </form>
  );
}
