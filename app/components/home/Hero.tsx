import Image from "next/image";
import BackgroundParticles from "./HeroParticles";
import { siteConfig } from "@/lib/site";

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

        <h1 className="mt-2 text-xl sm:text-3xl md:text-4xl tracking-tight">
          <HeroHeading text={siteConfig.hero?.heading ?? ""} />
        </h1>
      </div>
    </section>
  );
}

function HeroHeading({ text }: { text: string }) {
  const highlight = "Full-Stack Dev";
  const breakBefore = "user-friendly";

  // Insert line break before the chosen phrase
  const breakIdx = text.indexOf(breakBefore);
  const first = breakIdx >= 0 ? text.slice(0, breakIdx) : text;
  const second = breakIdx >= 0 ? text.slice(breakIdx) : "";

  const renderWithHighlight = (chunk: string) => {
    const hiIdx = chunk.indexOf(highlight);
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
          <br />
          {renderWithHighlight(second)}
        </>
      ) : null}
    </>
  );
}
