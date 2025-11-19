"use client";

import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";

const Particles = dynamic(() => import("./Particles"), { ssr: false });

/** Read a CSS var and fall back to a hex */
function readVar(name: string, fallback: string) {
  if (typeof window === "undefined") return fallback;
  const v = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
  return v || fallback;
}

export default function HeroParticles() {
  const { resolvedTheme } = useTheme(); // "light" | "dark" | undefined
  const isDark = resolvedTheme === "dark";
  const [shouldRender, setShouldRender] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [density, setDensity] = useState(1);
  const [hoverEnabled, setHoverEnabled] = useState(false);

  // Respect prefers-reduced-motion and schedule the effect after idle
  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReduceMotion(mql.matches);
    updateMotion();
    mql.addEventListener("change", updateMotion);

    if (!mql.matches) {
      const start = () => setShouldRender(true);
      const hasRIC = typeof (window as unknown as { requestIdleCallback?: unknown }).requestIdleCallback === "function";
      const ric = hasRIC
        ? (window as unknown as { requestIdleCallback: typeof requestIdleCallback }).requestIdleCallback(
            start,
            { timeout: 400 },
          )
        : window.setTimeout(start, 220);

      return () => {
        mql.removeEventListener("change", updateMotion);
        if (hasRIC) {
          (window as unknown as { cancelIdleCallback: typeof cancelIdleCallback }).cancelIdleCallback(ric);
        } else {
          clearTimeout(ric);
        }
      };
    }

    return () => {
      mql.removeEventListener("change", updateMotion);
    };
  }, []);

  // Dial down particle density on small screens and only hook hover on fine pointers
  useEffect(() => {
    if (reduceMotion) return;
    const computeDensity = () => {
      const w = typeof window !== "undefined" ? window.innerWidth : 1280;
      if (w < 480) return 0.5;
      if (w < 768) return 0.65;
      if (w < 1024) return 0.8;
      return 1;
    };
    const updateDensity = () => setDensity(computeDensity());
    const pointerQuery = window.matchMedia("(pointer: fine)");
    const updateHover = () => setHoverEnabled(pointerQuery.matches);

    updateDensity();
    updateHover();

    window.addEventListener("resize", updateDensity);
    pointerQuery.addEventListener("change", updateHover);
    return () => {
      window.removeEventListener("resize", updateDensity);
      pointerQuery.removeEventListener("change", updateHover);
    };
  }, [reduceMotion]);

  // Recompute palette when theme changes
  const particleColors = useMemo(() => {
    // Pull from your tokens to stay on-brand
    if (isDark) {
      // bright on dark
      const accent = "#ffffff"; // pure white
      const tint = readVar("--accent", "#a7f3d0"); // soft mint
      return [accent, tint];
    } else {
      // subtle on light
      const ink = readVar("--primary", "#0f172a"); // slate-900-ish
      const ring = readVar("--ring", "#64748b"); // slate-500-ish
      return [ink, ring];
    }
  }, [isDark]);

  // Tune rendering params per theme
  const params = useMemo(() => {
    return isDark
      ? {
          additiveBlend: true, // glow on dark
          brightness: 1.35,
          alphaStrength: 1.0,
          particleBaseSize: 130,
          particleCount: 240,
        }
      : {
          additiveBlend: false, // no glow on light
      brightness: 0.85,
      alphaStrength: 0.65,
      particleBaseSize: 95,
      particleCount: 180,
    };
  }, [isDark, density]);

  const particleCount = Math.max(60, Math.round(params.particleCount * density));
  const particleSize = Math.round(params.particleBaseSize * (0.75 + density * 0.25));
  const showParticles = shouldRender && !reduceMotion;

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {/* Subtle gradient fallback so we still have depth when particles are skipped */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,var(--accent)/10,transparent_30%),radial-gradient(circle_at_80%_30%,var(--primary)/8,transparent_32%)]"
        aria-hidden
      />

      {showParticles ? (
        <Particles
          className="h-full w-full"
          particleColors={particleColors}
          particleCount={particleCount}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={particleSize}
          moveParticlesOnHover={hoverEnabled}
          alphaParticles
          disableRotation={false}
          additiveBlend={params.additiveBlend}
          brightness={params.brightness}
          alphaStrength={params.alphaStrength}
        />
      ) : null}
    </div>
  );
}
