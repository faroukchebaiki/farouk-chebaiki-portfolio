import type { Metadata } from "next";
import ContactForm from "../components/contact/ContactForm";
import { siteConfig } from "@/lib/site";
import Link from "next/link";
import { Mail, Twitter, Github, Linkedin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Farouk Chebaiki",
  description: "Get in touch for freelance work or full-time roles.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact — Farouk Chebaiki", url: "/contact" },
  twitter: { title: "Contact — Farouk Chebaiki", card: "summary" },
};

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="container mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <header className="mb-8 sm:mb-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Contact
          </h1>
          <p className="mt-2 text-muted-foreground">
            I’m available for select freelance projects or a full‑time role.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Form */}
          <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
            <ContactForm />
            <p className="mt-4 text-xs text-muted-foreground">
              By submitting, you consent to be contacted regarding your inquiry.
              I don’t store your message on the server; it’s forwarded to my
              inbox. See the{" "}
              <Link href="/privacy" className="underline underline-offset-4">
                Privacy
              </Link>{" "}
              page.
            </p>
          </div>

          {/* Info */}
          <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
            <h2 className="text-xl font-semibold">Direct contact</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Prefer email — I usually reply within 24h. Socials are fine too.
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 text-foreground">
                  <Mail className="h-4 w-4" />
                  Email
                </span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="underline underline-offset-4 text-muted-foreground hover:text-foreground"
                  rel="me"
                >
                  {siteConfig.email}
                </a>
              </li>
              {siteConfig.social.twitter && (
                <li className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 text-foreground">
                    <Twitter className="h-4 w-4" />X / Twitter
                  </span>
                  <a
                    href={siteConfig.social.twitter}
                    target="_blank"
                    rel="me noopener noreferrer"
                    className="underline underline-offset-4 text-muted-foreground hover:text-foreground"
                  >
                    {siteConfig.social.twitter.replace("https://x.com/", "@")}
                  </a>
                </li>
              )}
              {siteConfig.social.github && (
                <li className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 text-foreground">
                    <Github className="h-4 w-4" />
                    GitHub
                  </span>
                  <a
                    href={siteConfig.social.github}
                    target="_blank"
                    rel="me noopener noreferrer"
                    className="underline underline-offset-4 text-muted-foreground hover:text-foreground"
                  >
                    {siteConfig.social.github.replace(
                      "https://github.com/",
                      "",
                    )}
                  </a>
                </li>
              )}
              {siteConfig.social.linkedin && (
                <li className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 text-foreground">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </span>
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="me noopener noreferrer"
                    className="underline underline-offset-4 text-muted-foreground hover:text-foreground"
                  >
                    View profile
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
