import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/lib/site";
import GitHubContributions from "../components/about/GitHubContributions";
import ContactStrip from "../components/home/ContactStrip";

export const metadata: Metadata = {
  title: "About — Farouk Chebaiki",
  description:
    "Farouk Mohamed Chebaiki — Full Stack Developer passionate about building efficient, scalable, and secure web applications.",
  openGraph: {
    title: "About — Farouk Chebaiki",
    description:
      "Full Stack Developer passionate about building efficient, scalable, and secure web applications.",
    url: "https://www.farouk.uk/about",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About — Farouk Chebaiki",
    description:
      "Full Stack Developer passionate about building efficient, scalable, and secure web applications.",
  },
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const background = siteConfig.about?.background ?? [];

  return (
    <main className="bg-background text-foreground">
      {/* ===== Hero ===== */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 grid gap-8 lg:grid-cols-[320px_1fr]">
          {/* Photo */}
          <div className="relative h-56 w-56 lg:h-72 lg:w-72 overflow-hidden rounded-2xl border border-border bg-card">
            {/* TODO: Replace with your portrait */}
            <Image
              src="/profile.png"
              alt="Farouk Chebaiki portrait"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Intro */}
          <div>
            <p className="text-sm text-muted-foreground">About</p>
            <h1 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">
              {siteConfig.about?.heroGreeting}
            </h1>
            <p className="mt-2 text-base sm:text-lg text-muted-foreground">
              {siteConfig.about?.heroTagline}
            </p>
            {siteConfig.about?.intro?.map((para, i) => (
              <p
                key={para}
                className={`max-w-2xl text-base sm:text-lg text-muted-foreground ${i === 0 ? "mt-4" : "mt-3"}`}
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ===== What I Do / Stack ===== */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">What I do</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl">
              End‑to‑end product work — from data models and APIs to clean, responsive UIs
              — with performance and security top of mind.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              {siteConfig.about?.whatIDo?.map((item) => (
                <li key={item.title}>
                  <span className="font-medium text-foreground">{item.title}</span>{" "}
                  {item.body}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Stack</h3>
            <ul className="mt-4 flex flex-wrap gap-3 text-sm text-muted-foreground">
              {siteConfig.about?.stack?.map((it) => (
                <li
                  key={it.name}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5"
                  title={it.name}
                >
                  {/* Use <img> for external SVG logos to avoid Next Image SVG restrictions */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={it.img}
                    alt=""
                    width={20}
                    height={20}
                    loading="lazy"
                    decoding="async"
                    className="select-none"
                  />
                  <span>{it.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== Background (Timeline) ===== */}
      <section className="border-b border-border bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.08),_transparent_55%)]">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <h2 className="text-2xl font-semibold">Background</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            A concise professional timeline covering engineering, software, and academic milestones.
          </p>

          <ol className="mt-6 relative border-s border-border pl-6" aria-label="Timeline">
            {background.map((item, index) => (
              <li
                key={`${item.title}-${item.period}`}
                className={index === background.length - 1 ? "ms-4" : "mb-8 ms-4"}
              >
                <span className="absolute -start-1.5 mt-1 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
                <div className="rounded-2xl border border-border bg-card/95 p-4 shadow-sm backdrop-blur-sm sm:p-5">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <h3 className="font-semibold leading-snug">{item.title}</h3>
                    <span className="inline-flex w-fit rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                  {item.bullets?.length ? (
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Removed: My Philosophy, Currently Exploring, and 2025 Goals as requested */}

      {/* ===== Contributions ===== */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <GitHubContributions username={siteConfig.githubUsername ?? ""} />
        </div>
      </section>

      {/* ===== Contact CTA (reused from Home) ===== */}
      <ContactStrip />
    </main>
  );
}
