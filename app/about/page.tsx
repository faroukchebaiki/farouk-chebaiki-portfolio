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
              End‑to‑end product work — from data models and APIs to clean,
              responsive UIs — with performance and security top of mind.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              {siteConfig.about?.whatIDo?.map((item) => (
                <li key={item.title}>
                  <span className="font-medium text-foreground">
                    {item.title}
                  </span>{" "}
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
      <section className="border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <h2 className="text-2xl font-semibold">Background</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            A quick timeline from most recent to earliest milestones.
          </p>

          <ol
            className="mt-6 relative border-s border-border pl-6"
            aria-label="Timeline"
          >
            {/* 2022 – Present */}
            <li className="mb-8 ms-4">
              <span className="absolute -start-1.5 mt-1 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
              <div className="rounded-xl border border-border bg-card p-4 sm:p-5">
                <h3 className="font-semibold">
                  💻 2022 – Present — Web Development Journey
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Transitioned into software development through online
                  bootcamps and self‑learning.
                </p>
                <div className="mt-3 text-sm text-muted-foreground space-y-2">
                  <div>
                    <span className="text-foreground font-medium">
                      Zero To Mastery Academy (ZTM)
                    </span>{" "}
                    — completed multiple courses focusing on:
                  </div>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Full Stack Web Development (Next.js, React, Node.js,
                      Express)
                    </li>
                    <li>System Design, Security, and DevOps fundamentals</li>
                    <li>Projects‑driven learning with real‑world practices</li>
                  </ul>
                </div>
                <div className="mt-3">
                  <h4 className="text-sm font-semibold">
                    Selected personal projects
                  </h4>
                  <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>🛒 Clothing E‑Commerce Platform (Next.js + MongoDB)</li>
                    <li>🔐 Crypto Payment API (Express + PostgreSQL)</li>
                    <li>✅ Task Manager App (React + Redis)</li>
                    <li>🌐 Personal Portfolio (Next.js + Tailwind CSS)</li>
                  </ul>
                </div>
              </div>
            </li>

            {/* 2023 — Military Service */}
            <li className="mb-8 ms-4">
              <span className="absolute -start-1.5 mt-1 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
              <div className="rounded-xl border border-border bg-card p-4 sm:p-5">
                <h3 className="font-semibold">🎖️ 2023 — Military Service</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Served one year in the Algerian National Service — gained
                  resilience, teamwork, adaptability, and discipline.
                </p>
              </div>
            </li>

            {/* 2020 – 2022 — Master's */}
            <li className="mb-8 ms-4">
              <span className="absolute -start-1.5 mt-1 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
              <div className="rounded-xl border border-border bg-card p-4 sm:p-5">
                <h3 className="font-semibold">
                  🎓 2020 – 2022 — Master’s in Process Engineering of Materials
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  University of Saida — focused on efficiency, optimization, and
                  scalability; principles I now apply in software architecture.
                </p>
              </div>
            </li>

            {/* 2017 – 2020 — Bachelor's */}
            <li className="mb-8 ms-4">
              <span className="absolute -start-1.5 mt-1 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
              <div className="rounded-xl border border-border bg-card p-4 sm:p-5">
                <h3 className="font-semibold">
                  🎓 2017 – 2020 — Bachelor’s in Process Engineering
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  University of Saida — developed strong analytical and
                  problem‑solving skills.
                </p>
              </div>
            </li>

            {/* 2018 — High School */}
            <li className="ms-4">
              <span className="absolute -start-1.5 mt-1 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
              <div className="rounded-xl border border-border bg-card p-4 sm:p-5">
                <h3 className="font-semibold">
                  🎓 2018 — High School Graduation
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Science stream, Saida, Algeria — foundation in math, physics,
                  and problem‑solving.
                </p>
              </div>
            </li>
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
