import type { Metadata } from "next";
import ProjectsGrid, { type Project } from "../components/projects/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects — Farouk Chebaiki",
  description: "Selected work and experiments.",
};

const projects: Project[] = [
  {
    id: "featured-1",
    title: "Featured Project — Portfolio v2",
    short: "My theme-aware portfolio with Next.js, Tailwind v4 tokens, shadcn/ui, and OGL particles.",
    long: `A fully token-driven portfolio. System dark/light, custom drawer, animated hero particles with OGL. Focus on performance, accessibility and DX.`,
    image: "/images/projects/image.png", // TODO: replace
    stack: ["Next.js", "TypeScript", "Tailwind v4", "shadcn/ui", "OGL"],
    github: "https://github.com/faroukchebaiki/farouk-chebaiki-portfolio",
    live: "https://www.farouk.uk",
    featured: true,
  },
  {
    id: "proj-2",
    title: "Task Manager",
    short: "Tasks, labels, filters — clean architecture.",
    long: `A productivity app with server components, optimistic UI and stable API layer.`,
    image: "/images/projects/image.png",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
    github: "https://github.com/faroukchebaiki/task-manager",
    live: "#",
  },
  {
    id: "proj-3",
    title: "Crypto Payment API",
    short: "Minimal payment rails with webhooks.",
    long: `Thin API for crypto payments with secure webhooks and good DX.`,
    image: "/images/projects/image.png",
    stack: ["Node.js", "Express", "tRPC"],
    github: "https://github.com/faroukchebaiki/crypto-payment-api",
    live: "#",
  },
  {
    id: "proj-4",
    title: "Clothing E-commerce",
    short: "Headless shop demo.",
    long: `Headless approach with a clean UI and fast navigation.`,
    image: "/images/projects/image.png",
    stack: ["Next.js", "Tailwind", "Payload CMS"],
    github: "https://github.com/faroukchebaiki/clothing-e-commerce",
    live: "#",
  },
];

export default function ProjectsPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="container mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <header className="mb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Projects</h1>
          <p className="mt-2 text-muted-foreground">Selected work. Click a card for details.</p>
        </header>

        <ProjectsGrid projects={projects} />
      </section>
    </main>
  );
}
