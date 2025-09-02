import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Farouk Chebaiki",
  description:
    "Farouk Mohamed Chebaiki — Full Stack Developer passionate about building efficient, scalable, and secure web applications.",
  openGraph: {
    title: "About — Farouk Chebaiki",
    description:
      "Full Stack Developer passionate about building efficient, scalable, and secure web applications.",
    url: "https://www.farouk.uk/about",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About — Farouk Chebaiki",
    description:
      "Full Stack Developer passionate about building efficient, scalable, and secure web applications.",
  },
};

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      {/* ===== Hero ===== */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 grid gap-8 lg:grid-cols-[320px_1fr]">
          {/* Photo */}
          <div className="relative h-56 w-56 lg:h-72 lg:w-72 overflow-hidden rounded-2xl border border-border bg-card">
            {/* TODO: Replace with your portrait */}
            <Image
              src="/profile.png"
              alt="Farouk Chebaiki portrait"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Intro */}
          <div>
            <p className="text-sm text-muted-foreground">About</p>
            <h1 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">
              Farouk Mohamed Chebaiki
            </h1>
            <p className="mt-4 max-w-2xl text-base sm:text-lg text-muted-foreground">
              I’m a Full Stack Developer passionate about building efficient and
              scalable web applications. I specialize in{" "}
              <strong>Next.js</strong>, <strong>React</strong>, and{" "}
              <strong>Tailwind CSS</strong> for crafting intuitive user
              experiences, combined with <strong>Node.js</strong>,{" "}
              <strong>Express</strong>, and <strong>tRPC</strong> to ensure
              powerful and reliable backend systems.
            </p>
            <p className="mt-3 max-w-2xl text-base sm:text-lg text-muted-foreground">
              Beyond web development, I focus on system security, DevOps, and
              performance optimization. I work with{" "}
              <strong>containerization</strong> (Podman, Docker),{" "}
              <strong>system administration</strong> (Ubuntu Server), and
              backend solutions like Firebase and Payload CMS to build scalable
              and secure infrastructures.
            </p>
            <p className="mt-3 max-w-2xl text-base sm:text-lg text-muted-foreground">
              I believe that great software is more than just code—it’s about
              efficiency, security, and maintainability. Whether working on
              frontend interfaces, backend architectures, or deployment
              pipelines, I prioritize clean architecture, scalability, and a
              seamless user experience.
            </p>
          </div>
        </div>
      </section>

      {/* ===== What I Do / Stack ===== */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">What I do</h2>
            <p className="mt-3 text-muted-foreground">
              I design and ship end-to-end web applications—from data models and
              APIs to clean, responsive UIs—always balancing performance,
              security, and maintainability.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              <li>• Build modern full-stack apps with Next.js & React</li>
              <li>• Secure backend APIs with Node.js, Express, tRPC</li>
              <li>• Containerization with Podman & Docker</li>
              <li>• System administration with Ubuntu Server</li>
              <li>• CMS & backend integrations (Firebase, Payload)</li>
              <li>• Performance tuning & DevOps automation</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Stack</h3>
            <ul className="mt-4 flex flex-wrap gap-2 text-sm text-muted-foreground">
              {[
                "Next.js",
                "React",
                "Tailwind CSS",
                "TypeScript",
                "Node.js",
                "Express",
                "tRPC",
                "Podman",
                "Docker",
                "Ubuntu Server",
                "Firebase",
                "Payload CMS",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-card px-3 py-1"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== Principles ===== */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">Principles</h2>
            <ul className="mt-4 space-y-3 text-muted-foreground">
              <li>• Efficiency: fast systems that scale</li>
              <li>• Security: protect data and infrastructure</li>
              <li>• Maintainability: clean, predictable architecture</li>
              <li>• UX first: seamless, intuitive interfaces</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Beyond Code</h3>
            <p className="mt-3 text-muted-foreground">
              I enjoy exploring new technologies, contributing to open source,
              and sharing knowledge. Outside of coding, I’m active in learning
              about system security, automation, and optimization.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Contact Info ===== */}
      <section>
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h2 className="text-xl font-semibold">Let’s connect</h2>
            <p className="mt-2 text-muted-foreground">
              If you’re interested in collaborating, building something new, or
              just sharing ideas, reach out anytime.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                Email:{" "}
                <a
                  href="mailto:me@farouk.uk"
                  className="underline underline-offset-4"
                >
                  me@farouk.uk
                </a>
              </li>
              <li>
                X:{" "}
                <a
                  href="https://x.com/faroukchebaiki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4"
                >
                  @faroukchebaiki
                </a>
              </li>
              <li>
                GitHub:{" "}
                <a
                  href="https://github.com/faroukchebaiki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4"
                >
                  faroukchebaiki
                </a>
              </li>
              <li>
                Telegram/WhatsApp:{" "}
                <a
                  href="https://wa.me/213657613894"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4"
                >
                  +213657613894
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
