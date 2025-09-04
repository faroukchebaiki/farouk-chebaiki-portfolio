import type { Metadata } from "next";
import Hero from "./components/home/Hero";
import FeaturedProjects from "./components/home/FeaturedProjects";
import LatestPosts from "./components/home/LatestPosts";
import TechStack from "./components/home/TechStack";
import ContactStrip from "./components/home/ContactStrip";
import { siteConfig } from "@/lib/site";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Home",
  description:
    "Full‑stack developer crafting user‑friendly, secure, and performant web apps with Next.js, React, and Node.js.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Farouk Chebaiki — Full Stack Developer",
    url: siteConfig.siteUrl,
    images: [
      { url: "/profile.png", width: 512, height: 512, alt: "Farouk Chebaiki" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Farouk Chebaiki — Full Stack Developer",
    images: [
      { url: "/profile.png", alt: "Farouk Chebaiki" },
    ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          }),
        }}
      />
    </main>
  );
}
