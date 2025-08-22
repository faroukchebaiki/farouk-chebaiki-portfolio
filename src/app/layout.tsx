import type { Metadata } from "next";
import "./globals.css";

import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

import DarkMistBackground from "@/Components/background";
import TransitionProvider from "@/Components/transitionProvider";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased font-[\'Pixelify Sans\',sans-serif]">
        <TransitionProvider>{children}</TransitionProvider>
        <DarkMistBackground blurAmount="15px" color="#5BD124" particleCount={20} speed={0.9} turbulence={2} />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
