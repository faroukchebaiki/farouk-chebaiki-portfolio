import type { Metadata } from "next";
import Script from "next/script";
import { siteConfig } from "@/lib/site";
import ContactStrip from "./components/home/ContactStrip";
import FeaturedProjects from "./components/home/FeaturedProjects";
import Hero from "./components/home/Hero";
import LatestPosts from "./components/home/LatestPosts";
import TechStack from "./components/home/TechStack";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Home",
  description:
    "Full‑stack developer crafting user‑friendly, secure, and performant web apps with Next.js, React, and Node.js.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Farouk Chebaiki — Full Stack Developer",
    url: siteConfig.siteUrl,
    images: [{ url: "/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Farouk Chebaiki — Full Stack Developer",
    images: ["/twitter-image"],
  },
};

export default function HomePage() {
  return (
    <main id="main" className="bg-background text-foreground">
      <Hero />
      <FeaturedProjects />
      <LatestPosts />
      <TechStack />
      <ContactStrip />
      {/* JSON-LD: Person */}
      <Script id="jsonld-person" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Farouk Chebaiki",
          url: siteConfig.siteUrl,
          email: siteConfig.email,
          image: `${siteConfig.siteUrl}/profile.png`,
          sameAs: [
            siteConfig.social.github,
            siteConfig.social.twitter,
            siteConfig.social.linkedin,
          ].filter(Boolean),
          jobTitle: "Full Stack Developer",
        })}
      </Script>
      {/* JSON-LD: WebSite (sitelinks eligible) */}
      <Script id="jsonld-website" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          url: siteConfig.siteUrl,
          name: "Farouk Chebaiki",
        })}
      </Script>
    </main>
  );
}
