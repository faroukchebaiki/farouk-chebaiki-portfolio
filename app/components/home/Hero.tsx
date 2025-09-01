import BackgroundParticles from "./HeroParticles";
export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-transparent min-h-[calc(100vh-3rem)]">
        <BackgroundParticles />
      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <p className="text-sm text-muted-foreground">Full-Stack Developer</p>
        <h1 className="mt-2 text-3xl sm:text-5xl font-bold tracking-tight">
          Farouk Chebaiki
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          I build performant, theme-aware web apps with Next.js, shadcn/ui, and Tailwind v4.
        </p>
        <div className="mt-6 flex gap-3">
          <a
            href="/projects"
            className="inline-flex items-center rounded-lg bg-primary text-primary-foreground px-4 py-2 hover:bg-accent hover:text-accent-foreground transition"
          >
            View Projects
          </a>
          <a
            href="/about"
            className="inline-flex items-center rounded-lg border border-border px-4 py-2 hover:bg-accent hover:text-accent-foreground transition"
          >
            About Me
          </a>
        </div>
      </div>
    </section>
  );
}
