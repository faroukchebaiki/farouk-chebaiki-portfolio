import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { siteConfig } from "@/lib/site";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import { ThemeProvider } from "./components/theme-provider";

const bodyFont = Roboto_Mono({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl ?? "https://www.farouk.uk"),
  title: {
    default: "Farouk Chebaiki — Full Stack Developer",
    template: "%s — Farouk Chebaiki",
  },
  description:
    "Portfolio of Farouk Chebaiki: Full‑stack developer focused on user‑friendly, secure, and high‑performance web apps.",
  keywords: [
    "Farouk Chebaiki",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Farouk Chebaiki", url: siteConfig.siteUrl }],
  creator: "Farouk Chebaiki",
  publisher: "Farouk Chebaiki",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteConfig.siteUrl,
    siteName: "Farouk Chebaiki",
    title: "Farouk Chebaiki — Full Stack Developer",
    description:
      "Full‑stack dev building user‑friendly, secure, high‑performance web applications.",
    locale: "en_GB",
    images: [{ url: "/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Farouk Chebaiki — Full Stack Developer",
    description:
      "Full‑stack dev building user‑friendly, secure, high‑performance web applications.",
    creator: "@faroukchebaiki",
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } }
    : {}),
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={bodyFont.variable} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
