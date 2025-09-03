import Image from "next/image";
import BackgroundParticles from "./HeroParticles";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-transparent min-h-[calc(100vh-3rem)] flex items-start justify-center text-center pt-28 sm:pt-32 md:pt-36">
      <BackgroundParticles />

      <div className="relative z-10 px-4 sm:px-6 flex flex-col items-center">
        {/* Bigger profile photo */}
        <div className="mb-6 relative w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44">
          <Image
            src="/profile.png"
            alt="Farouk profile photo"
            fill
            priority
            sizes="(max-width: 768px) 10rem, (max-width: 1024px) 11rem, 12rem"
            className="rounded-full object-cover ring-2 ring-emerald-300/40 shadow-lg"
          />
        </div>

        <p className="text-base text-muted-foreground">
          Hi, I&apos;m{" "}
          <span className="font-bold text-accent-foreground">Farouk</span>
        </p>

        <h1 className="mt-2 text-xl sm:text-3xl md:text-4xl tracking-tight"> a{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-accent-foreground bg-clip-text text-transparent">
            Full-Stack Dev
          </span>{" "}
          focused on building <br />
          user-friendly web applications.
        </h1>
      </div>
    </section>
  );
}
