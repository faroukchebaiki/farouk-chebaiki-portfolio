import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { siteConfig } from "@/lib/site";

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
    images: [
      { url: "/profile.png", width: 512, height: 512, alt: "Farouk Chebaiki" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Farouk Chebaiki — Full Stack Developer",
    description:
      "Full‑stack dev building user‑friendly, secure, high‑performance web applications.",
    creator: "@faroukchebaiki",
    images: [
      { url: "/profile.png", alt: "Farouk Chebaiki" },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={bodyFont.variable} suppressHydrationWarning>
      <body className={`antialiased`}>
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
