"use client";

import dynamic from "next/dynamic";
import * as React from "react";

// react-github-calendar is client-only; load dynamically to avoid SSR issues
const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  { ssr: false },
);

export default function GitHubContributions({
  username,
}: {
  username: string;
}) {
  // Responsive sizing for the calendar blocks
  const [blockSize, setBlockSize] = React.useState<number>(12);
  const [blockMargin, setBlockMargin] = React.useState<number>(3);
  const [fontSize, setFontSize] = React.useState<number>(12);
  const [color, setColor] = React.useState<string>("#22c55e"); // fallback: emerald-500
  const [scheme, setScheme] = React.useState<"light" | "dark" | undefined>(
    undefined,
  );
  const currentYear = new Date().getFullYear();
  const years = React.useMemo(() => {
    const start = 2022;
    return Array.from({ length: currentYear - start + 1 }, (_, i) => start + i);
  }, [currentYear]);
  const [year, setYear] = React.useState<number>(currentYear);

  React.useEffect(() => {
    // Try to read a primary brand color from CSS variables if present
    try {
      const root = getComputedStyle(document.documentElement);
      // Common variable names to probe
      const candidates = [
        "--primary",
        "--color-primary",
        "--colors-primary",
        "--accent",
        "--brand",
      ];
      for (const c of candidates) {
        const v = root.getPropertyValue(c).trim();
        if (v) {
          setColor(v);
          break;
        }
      }
    } catch {
      // ignore CSS variable lookup issues (e.g., server render)
    }
    try {
      const isDark = document.documentElement.classList.contains("dark");
      setScheme(isDark ? "dark" : "light");
    } catch {
      // ignore theme detection errors in non-browser contexts
    }
    // Set responsive sizes
    const applySizes = () => {
      const w = typeof window !== "undefined" ? window.innerWidth : 1024;
      if (w < 380) {
        setBlockSize(5);
        setBlockMargin(1);
        setFontSize(10);
      } else if (w < 480) {
        setBlockSize(6);
        setBlockMargin(2);
        setFontSize(11);
      } else if (w < 640) {
        setBlockSize(8);
        setBlockMargin(2);
        setFontSize(11);
      } else if (w < 768) {
        setBlockSize(10);
        setBlockMargin(3);
        setFontSize(12);
      } else {
        setBlockSize(12);
        setBlockMargin(3);
        setFontSize(12);
      }
    };
    applySizes();
    const onResize = () => applySizes();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="block w-full max-w-[900px] rounded-2xl border border-border bg-card p-4 sm:p-6 mx-auto">
      <h3 className="text-lg font-semibold">Open Source & Contributions</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Highlights from my public GitHub activity.
      </p>
      {/* Year selector */}
      <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-sm">
        {years.map((y) => (
          <button
            key={y}
            type="button"
            onClick={() => setYear(y)}
            className={`rounded-md border px-2.5 py-1 transition ${
              year === y
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card text-foreground border-border hover:bg-accent hover:text-accent-foreground"
            }`}
            aria-pressed={year === y}
          >
            {y}
          </button>
        ))}
      </div>
      <div className="mt-4 overflow-x-auto">
        <div className="min-w-max mx-auto">
          <GitHubCalendar
            username={username}
            fontSize={fontSize}
            blockSize={blockSize}
            blockMargin={blockMargin}
            colorScheme={scheme}
            theme={{
              light: ["#e5e7eb", color], // from gray-200 to brand
              dark: ["#1f2937", color], // from gray-800 to brand
            }}
            year={year}
          />
        </div>
      </div>
    </div>
  );
}
