import type { Metadata } from "next";
import { Suspense } from "react";
import BlogList from "../components/blog/BlogList";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog — Farouk Chebaiki",
  description:
    "Latest posts from my DEV.to — clean, fast, and theme‑aware reading experience.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="container mx-auto px-4 sm:px-6 py-10 sm:py-14 lg:max-w-4xl">
        <header className="mb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Blog
          </h1>
          <p className="mt-2 text-muted-foreground">
            Fresh reads from my DEV.to (
            {siteConfig.devtoUsername ? `@${siteConfig.devtoUsername}` : ""}).
            Dive in.
          </p>
        </header>
        <Suspense
          fallback={<div className="text-muted-foreground">Loading...</div>}
        >
          <BlogList username={siteConfig.devtoUsername ?? ""} />
        </Suspense>
      </section>
    </main>
  );
}
