"use client";

import * as React from "react";
import dynamic from "next/dynamic";

// react-github-calendar is client-only; load dynamically to avoid SSR issues
const GitHubCalendar = dynamic(() => import("react-github-calendar"), {
  ssr: false,
});

export default function GitHubContributions({
  username,
}: {
  username: string;
}) {
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
    } catch {}
    try {
      const isDark = document.documentElement.classList.contains("dark");
      setScheme(isDark ? "dark" : "light");
    } catch {}
  }, []);

  return (
    <div className="block w-fit max-w-full rounded-2xl border border-border bg-card p-4 sm:p-6 mx-auto">
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
        <GitHubCalendar
          username={username}
          fontSize={12}
          blockSize={12}
          blockMargin={3}
          colorScheme={scheme}
          theme={{
            light: ["#e5e7eb", color], // from gray-200 to brand
            dark: ["#1f2937", color], // from gray-800 to brand
          }}
          year={year}
        />
      </div>
    </div>
  );
}
