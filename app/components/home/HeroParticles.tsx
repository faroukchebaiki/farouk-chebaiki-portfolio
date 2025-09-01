"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import Particles from "./Particles";

/** Read a CSS var and fall back to a hex */
function readVar(name: string, fallback: string) {
  if (typeof window === "undefined") return fallback;
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return v || fallback;
}

export default function HeroParticles() {
  const { resolvedTheme } = useTheme(); // "light" | "dark" | undefined
  const isDark = resolvedTheme === "dark";

  // Recompute palette when theme changes
  const particleColors = useMemo(() => {
    // Pull from your tokens to stay on-brand
    if (isDark) {
      // bright on dark
      const accent = "#ffffff";                 // pure white
      const tint  = readVar("--accent", "#a7f3d0"); // soft mint
      return [accent, tint];
    } else {
      // subtle on light
      const ink   = readVar("--primary", "#0f172a"); // slate-900-ish
      const ring  = readVar("--ring", "#64748b");    // slate-500-ish
      return [ink, ring];
    }
  }, [isDark]);

  // Tune rendering params per theme
  const params = useMemo(() => {
    return isDark
      ? {
          additiveBlend: true,     // glow on dark
          brightness: 1.35,
          alphaStrength: 1.0,
          particleBaseSize: 130,
          particleCount: 240,
        }
      : {
          additiveBlend: false,    // no glow on light
          brightness: 0.85,
          alphaStrength: 0.65,
          particleBaseSize: 95,
          particleCount: 180,
        };
  }, [isDark]);

  // Force a rerender client-side once theme is resolved to avoid SSR mismatch
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  if (!ready) return null;

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Particles
        className="h-full w-full"
        particleColors={particleColors}
        particleCount={params.particleCount}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={params.particleBaseSize}
        moveParticlesOnHover
        alphaParticles
        disableRotation={false}
        additiveBlend={params.additiveBlend}
        brightness={params.brightness}
        alphaStrength={params.alphaStrength}
      />
    </div>
  );
}
