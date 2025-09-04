// src/components/home/ContactStrip.tsx
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function ContactStrip() {
  return (
    <section>
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="rounded-2xl border border-border bg-card text-card-foreground p-7 sm:p-8 text-center">
          {/* Availability pill */}
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span className="text-foreground/90">
              {siteConfig.contactCta?.availability}
            </span>
          </div>

          <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">
            {siteConfig.contactCta?.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            {siteConfig.contactCta?.description}
          </p>

          <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
            {siteConfig.contactCta?.primary && (
              <Link
                href={siteConfig.contactCta.primary.href}
                className="inline-flex items-center rounded-lg bg-primary text-primary-foreground px-5 py-2.5 hover:bg-accent hover:text-accent-foreground transition"
              >
                {siteConfig.contactCta.primary.label}
              </Link>
            )}
            {siteConfig.contactCta?.secondary && (
              <Link
                href={siteConfig.contactCta.secondary.href}
                className="inline-flex items-center rounded-lg border border-border px-5 py-2.5 hover:bg-accent hover:text-accent-foreground transition"
              >
                {siteConfig.contactCta.secondary.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
