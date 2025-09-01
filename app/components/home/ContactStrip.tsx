// src/components/home/ContactStrip.tsx
import Link from "next/link";

export default function ContactStrip() {
  return (
    <section>
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="rounded-xl border border-border bg-card text-card-foreground p-5 sm:p-6">
          <h2 className="text-xl font-semibold">Let’s build something.</h2>
          <p className="mt-2 text-muted-foreground">
            I’m open to freelance, collaborations, and full-time roles.
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href="mailto:me@farouk.uk"
              className="inline-flex items-center rounded-lg bg-primary text-primary-foreground px-4 py-2 hover:bg-accent hover:text-accent-foreground transition"
            >
              Email me
            </a>
            <Link
              href="/projects"
              className="inline-flex items-center rounded-lg border border-border px-4 py-2 hover:bg-accent hover:text-accent-foreground transition"
            >
              See Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
