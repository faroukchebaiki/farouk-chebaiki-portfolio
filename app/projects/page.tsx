import type { Metadata } from "next";
import { mapProjectsForGrid, siteConfig } from "@/lib/site";
import ProjectsGrid, {
  type Project,
} from "../components/projects/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected work and experiments.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects — Farouk Chebaiki",
    url: "/projects",
  },
  twitter: {
    title: "Projects — Farouk Chebaiki",
    card: "summary_large_image",
  },
};

const projects: Project[] = mapProjectsForGrid(
  siteConfig.projects,
) as Project[];

export default function ProjectsPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="container mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <header className="mb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Projects
          </h1>
          <p className="mt-2 text-muted-foreground">
            Selected work. Click a card for details.
          </p>
        </header>

        <ProjectsGrid projects={projects} />
      </section>
    </main>
  );
}
