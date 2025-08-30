import type { Metadata } from "next";
import {Roboto_Mono} from "next/font/google";
import "./globals.css";

import Navbar from "./Components/NavBar";

import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';


const bodyFont = Roboto_Mono({
  weight: ["400", "600", "700"],
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
        className={`${bodyFont.className} antialiased`}
      >
          <Navbar />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}