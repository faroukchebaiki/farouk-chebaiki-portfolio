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
            <span className="text-foreground/90">Available for freelance or roles</span>
          </div>

          <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">Let’s build something.</h2>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            I’m available for select freelance projects or a full‑time position. If you’re hiring or need help shipping a product, I’d love to chat.
          </p>

          <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-primary text-primary-foreground px-5 py-2.5 hover:bg-accent hover:text-accent-foreground transition"
            >
              Contact me
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center rounded-lg border border-border px-5 py-2.5 hover:bg-accent hover:text-accent-foreground transition"
            >
              See Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
