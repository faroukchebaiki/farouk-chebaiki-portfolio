import type { Metadata } from "next";
import {
  UnifrakturMaguntia,  // For the logo
  Gilda_Display,       // For titles
  Roboto_Mono          // For the rest (body text)
} from "next/font/google";
import "./globals.css";

import Navbar from "./Components/NavBar";

import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

// Logo font
const logoFont = UnifrakturMaguntia({
  weight: "400",           // Only one weight available for this font
  subsets: ["latin"],
  display: "swap",         // Prevent layout shift on load
});

// Titles font
const titleFont = Gilda_Display({
  weight: "400",           // This font has only one weight
  subsets: ["latin"],
  display: "swap",
});

// Body text font
const bodyFont = Roboto_Mono({
  weight: ["400", "600", "700"],  // Multiple weights available
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "farouk chebaiki - Full Stack Developer",
  description: "Welcome to Farouk Chebaiki&apos;s portfolio. Explore my projects, skills, and experiences in web development and design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // Apply fonts globally here:
        className={`${logoFont.className} ${titleFont.className} ${bodyFont.className} antialiased`}
      >
          <Navbar />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}