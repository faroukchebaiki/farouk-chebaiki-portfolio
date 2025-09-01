import type { Metadata } from "next";
import {Roboto_Mono} from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';


const bodyFont = Roboto_Mono({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
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