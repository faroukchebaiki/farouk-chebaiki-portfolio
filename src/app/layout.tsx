import type { Metadata } from "next";
import {  Pixelify_Sans } from "next/font/google";
import "./globals.css";

import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';



const PixelifySans = Pixelify_Sans({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "farouk chebaiki - Full Stack Developer",
  description: "Welcome to Farouk Chebaiki's portfolio. Explore my projects, skills, and experiences in web development and design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${PixelifySans.className} antialiased`}
      >
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
