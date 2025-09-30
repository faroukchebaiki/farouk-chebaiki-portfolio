import Image from "next/image";
import { siteConfig } from "@/lib/site";
import BackgroundParticles from "./HeroParticles";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-transparent min-h-[calc(100vh-3rem)] flex items-start justify-center text-center pt-28 sm:pt-32 md:pt-36">
      <BackgroundParticles />

      <div className="relative z-10 px-4 sm:px-6 flex flex-col items-center">
        {/* Bigger profile photo */}
        <div className="mb-6 relative w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44">
          <Image
            src={siteConfig.hero?.profileImage ?? "/profile.png"}
            alt={`${siteConfig.brandName} profile photo`}
            fill
            priority
            sizes="(max-width: 768px) 10rem, (max-width: 1024px) 11rem, 12rem"
            className="rounded-full object-cover ring-2 ring-emerald-300/40 shadow-lg"
          />
        </div>

        <p className="text-base text-muted-foreground">
          {siteConfig.hero?.subheading}
        </p>

        <h1 className="mt-2 text-xl sm:text-3xl md:text-4xl tracking-tight lg:max-w-[50%]">
          <HeroHeading text={siteConfig.hero?.heading ?? ""} />
        </h1>
      </div>
    </section>
  );
}

function HeroHeading({ text }: { text: string }) {
  const highlight = "Full-Stack Dev";
  const breakBefore = "user-friendly";

  // Normalize various hyphen/dash characters to plain '-' for matching,
  // while preserving original text for rendering.
  const normalize = (s: string) =>
    s.replace(/[\u2010\u2011\u2012\u2013\u2014]/g, "-");
  const findIndexNormalized = (source: string, needle: string) => {
    const normSource = normalize(source);
    const normNeedle = normalize(needle);
    const idx = normSource.indexOf(normNeedle);
    if (idx < 0) return -1;
    // Map index in normalized string back to original string index
    let count = 0;
    for (let i = 0; i < source.length; i++) {
      const ch = source[i];
      const contributes = /[\u2010\u2011\u2012\u2013\u2014]/.test(ch) ? 1 : 1;
      // both original and normalized advance by 1 char; mapping is 1:1 length
      // because we replace single code points with single '-'
      if (count === idx) return i;
      count += contributes;
    }
    return -1;
  };

  // Insert line break before the chosen phrase
  const breakIdx = findIndexNormalized(text, breakBefore);
  const first = breakIdx >= 0 ? text.slice(0, breakIdx) : text;
  const second = breakIdx >= 0 ? text.slice(breakIdx) : "";

  const renderWithHighlight = (chunk: string) => {
    const hiIdx = findIndexNormalized(chunk, highlight);
    if (hiIdx < 0) return chunk;
    const pre = chunk.slice(0, hiIdx);
    const hi = chunk.slice(hiIdx, hiIdx + highlight.length);
    const post = chunk.slice(hiIdx + highlight.length);
    return (
      <>
        {pre}
        <span className="font-semibold" style={{ color: "#00ED64" }}>
          {hi}
        </span>
        {post}
      </>
    );
  };

  return (
    <>
      {renderWithHighlight(first)}
      {second ? (
        <>
          {/* Force a break on small screens only; let larger screens wrap naturally */}
          <br className="sm:hidden" />
          {renderWithHighlight(second)}
        </>
      ) : null}
    </>
  );
}
