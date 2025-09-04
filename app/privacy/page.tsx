import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Farouk Chebaiki",
  description:
    "How farouk.uk handles analytics, email communications, GDPR and US privacy rights, retention, and more.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="container mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-16">
        {/* Header */}
        <header className="mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Last updated: <time dateTime="2025-09-03">September 3, 2025</time>
          </p>
        </header>

        {/* Quick summary / TOC */}
        <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
          <p className="text-sm text-muted-foreground">
            This page explains what data this site collects, why, and how you
            can exercise your privacy rights (GDPR/EEA, UK, and US CCPA/CPRA).
          </p>
          <nav className="mt-4 grid gap-2 text-sm">
            <a className="hover:underline underline-offset-4" href="#who">
              Who I am
            </a>
            <a className="hover:underline underline-offset-4" href="#scope">
              Scope
            </a>
            <a
              className="hover:underline underline-offset-4"
              href="#collection"
            >
              What data I collect
            </a>
            <a className="hover:underline underline-offset-4" href="#analytics">
              Analytics used
            </a>
            <a className="hover:underline underline-offset-4" href="#email">
              Email communication
            </a>
            <a
              className="hover:underline underline-offset-4"
              href="#legal-bases"
            >
              Legal bases (GDPR)
            </a>
            <a
              className="hover:underline underline-offset-4"
              href="#rights-gdpr"
            >
              Your rights — GDPR/EEA & UK
            </a>
            <a
              className="hover:underline underline-offset-4"
              href="#rights-ccpa"
            >
              Your rights — US (CCPA/CPRA)
            </a>
            <a className="hover:underline underline-offset-4" href="#retention">
              Data retention
            </a>
            <a className="hover:underline underline-offset-4" href="#transfers">
              International transfers
            </a>
            <a className="hover:underline underline-offset-4" href="#security">
              Data security
            </a>
            <a className="hover:underline underline-offset-4" href="#children">
              Children’s privacy
            </a>
            <a className="hover:underline underline-offset-4" href="#dnt">
              Do Not Track
            </a>
            <a className="hover:underline underline-offset-4" href="#changes">
              Changes
            </a>
            <a className="hover:underline underline-offset-4" href="#contact">
              Contact
            </a>
          </nav>
        </div>

        <Separator />

        {/* Who */}
        <Section id="who" title="Who I am">
          <p>
            This is the personal portfolio website of{" "}
            <strong>Farouk Mohamed Chebaiki</strong>, a freelance Full-Stack
            Developer. The purpose of this site is to showcase my work and make
            it easy to get in touch. You can reach me at{" "}
            <a
              className="underline underline-offset-4"
              href="mailto:me@farouk.uk"
            >
              me@farouk.uk
            </a>
            .
          </p>
        </Section>

        <Separator />

        {/* Scope */}
        <Section id="scope" title="Scope of this policy">
          <p>
            This policy applies to <strong>farouk.uk</strong> and its sub-pages.
            It covers analytics captured by this site and any information you
            choose to send me by email or direct message.
          </p>
        </Section>

        <Separator />

        {/* Collection */}
        <Section id="collection" title="What data I collect">
          <h3 className="text-lg font-semibold">No accounts, no cookies</h3>
          <p className="mt-2 text-muted-foreground">
            I do <strong>not</strong> run user accounts, contact forms,
            comments, or trackers that fingerprint you. I do{" "}
            <strong>not</strong> use advertising cookies.
          </p>

          <h3 className="mt-6 text-lg font-semibold">
            Technical/usage data (automatic)
          </h3>
          <p className="mt-2 text-muted-foreground">
            The site collects high-level, privacy-respecting metrics via the
            analytics services listed below (page views, device type, referrers,
            etc.). These are aggregated and not used to identify you.
          </p>
        </Section>

        <Separator />

        {/* Analytics */}
        <Section id="analytics" title="Analytics used">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold">
                Cloudflare Web Analytics
              </h3>
              <p className="mt-2 text-muted-foreground">
                Cloudflare Web Analytics provides anonymous metrics without
                cookies or fingerprinting (e.g., page views, referrers, device
                types). This helps me understand site usage and performance
                without tracking individual users.
              </p>
              <p className="mt-2">
                Privacy policy:{" "}
                <a
                  className="underline underline-offset-4"
                  href="https://www.cloudflare.com/privacypolicy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  cloudflare.com/privacypolicy
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Vercel Analytics</h3>
              <p className="mt-2 text-muted-foreground">
                Vercel Analytics provides aggregated traffic and performance
                insights. It does not create user profiles. I use it to ensure
                pages are fast and stable and to understand general visit
                patterns.
              </p>
              <p className="mt-2">
                Privacy policy:{" "}
                <a
                  className="underline underline-offset-4"
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  vercel.com/legal/privacy-policy
                </a>
              </p>
            </div>
          </div>
        </Section>

        <Separator />

        {/* Email + Contact form */}
        <Section id="email" title="Email and contact form">
          <p>
            If you email me or use the contact form on this site, I will see
            your name, email address, and the contents of your message. I use
            this only to respond to your inquiry.
          </p>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-muted-foreground">
            <li>
              <strong>What’s collected:</strong> name, email, message, and
              optional subject.
            </li>
            <li>
              <strong>How it’s processed:</strong> the form submits to my server
              which forwards your message to my inbox using an email service
              (Resend). I do not persist your message in a site database.
            </li>
            <li>
              <strong>Anti‑spam:</strong> I use a hidden honeypot field and may
              add additional protections (e.g., rate limiting or CAPTCHA) to
              prevent abuse.
            </li>
            <li>
              <strong>Third parties:</strong> email delivery is handled by
              Resend. See Resend’s policy for details on processing and
              retention.
            </li>
            <li>
              <strong>Retention:</strong> messages remain in my email inbox as
              needed to manage the conversation or comply with legal
              obligations. You can request deletion at any time.
            </li>
          </ul>
        </Section>

        <Separator />

        {/* Legal bases */}
        <Section id="legal-bases" title="Legal bases (GDPR)">
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>
              <strong>Legitimate interests</strong> — to measure site
              performance and improve content using privacy-respecting
              analytics.
            </li>
            <li>
              <strong>Consent</strong> — when you choose to contact me and share
              information voluntarily.
            </li>
            <li>
              <strong>Legal obligation</strong> — if I need to retain
              communications to comply with applicable law.
            </li>
          </ul>
        </Section>

        <Separator />

        {/* Rights — GDPR/UK */}
        <Section id="rights-gdpr" title="Your rights — GDPR (EEA) & UK">
          <p className="text-muted-foreground">
            If you are located in the European Economic Area or the United
            Kingdom, you have the right to:
          </p>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Access the personal data I hold about you</li>
            <li>Request correction or deletion of your data</li>
            <li>Object to or restrict processing</li>
            <li>Data portability where applicable</li>
          </ul>
          <p className="mt-3">
            To exercise these rights, email{" "}
            <a
              className="underline underline-offset-4"
              href="mailto:me@farouk.uk"
            >
              me@farouk.uk
            </a>
            .
          </p>
        </Section>

        <Separator />

        {/* Rights — US */}
        <Section id="rights-ccpa" title="Your rights — US (CCPA/CPRA)">
          <p className="text-muted-foreground">
            If you are a resident of California, you may have the right to:
          </p>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Know the categories of data collected and the purposes</li>
            <li>Request access to and deletion of personal information</li>
            <li>Opt out of the sale or sharing of personal information</li>
            <li>Non-discrimination for exercising your rights</li>
          </ul>
          <p className="mt-3 text-muted-foreground">
            This site does not sell or share your personal information as
            defined by the CCPA/CPRA. To submit a request, contact{" "}
            <a
              className="underline underline-offset-4"
              href="mailto:me@farouk.uk"
            >
              me@farouk.uk
            </a>
            .
          </p>
        </Section>

        <Separator />

        {/* Retention */}
        <Section id="retention" title="Data retention">
          <p className="text-muted-foreground">
            Analytics data is retained according to each provider’s default
            retention settings and is aggregated (non-identifying). Emails you
            send me may be kept as long as needed to handle your inquiry,
            resolve issues, or comply with legal requirements. You can ask me to
            delete your messages at any time.
          </p>
        </Section>

        <Separator />

        {/* Transfers */}
        <Section id="transfers" title="International transfers">
          <p className="text-muted-foreground">
            My site is deployed on global infrastructure (Vercel/Cloudflare).
            Data may be processed in data centers outside your country. Where
            applicable, I rely on the providers’ transfer safeguards and
            standard contractual clauses.
          </p>
        </Section>

        <Separator />

        {/* Security */}
        <Section id="security" title="Data security">
          <p className="text-muted-foreground">
            I take reasonable technical and organizational measures to protect
            any data within my control. No method of transmission or storage is
            100% secure, but I aim to use reputable providers and minimize the
            data I handle.
          </p>
        </Section>

        <Separator />

        {/* Children */}
        <Section id="children" title="Children’s privacy">
          <p className="text-muted-foreground">
            This site is not intended for children under 13 (or the applicable
            minimum age in your jurisdiction). I do not knowingly collect
            personal information from children.
          </p>
        </Section>

        <Separator />

        {/* DNT */}
        <Section id="dnt" title="Do Not Track (DNT)">
          <p className="text-muted-foreground">
            Browsers may offer a Do Not Track setting. Because my analytics are
            already privacy-respecting and aggregate-only, this site does not
            change behavior in response to DNT signals.
          </p>
        </Section>

        <Separator />

        {/* Changes */}
        <Section id="changes" title="Changes to this policy">
          <p className="text-muted-foreground">
            I may update this policy to reflect changes in technology,
            regulations, or my practices. Updates will be posted on this page
            with a revised date.
          </p>
        </Section>

        <Separator />

        {/* Contact */}
        <Section id="contact" title="Contact">
          <p>
            If you have questions or requests about this policy, email{" "}
            <a
              className="underline underline-offset-4"
              href="mailto:me@farouk.uk"
            >
              me@farouk.uk
            </a>
            . I aim to respond promptly.
          </p>
        </Section>
      </section>
    </main>
  );
}

/* ---------- Small helpers for spacing & consistency ---------- */

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-8 sm:py-10">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="mt-3 space-y-3 text-[0.975rem]/7">{children}</div>
    </section>
  );
}

function Separator() {
  return <div className="my-8 sm:my-10 border-t border-border" />;
}
