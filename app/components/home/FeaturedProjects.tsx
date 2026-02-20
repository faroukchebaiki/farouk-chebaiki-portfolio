"use client";

// src/components/home/FeaturedProjects.tsx
import * as React from "react";
import Image from "next/image";
import { Github, Link as LinkIcon, X } from "lucide-react";
import { siteConfig, mapProjectsForGrid } from "@/lib/site";
import ProjectCard from "../projects/ProjectCard";
import SlideOver from "../projects/SlideOver";
import type { Project } from "../projects/ProjectsGrid";

const all = mapProjectsForGrid(siteConfig.projects) as Project[];
const projects = all.slice(0, 3);

export default function FeaturedProjects() {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState<Project | null>(null);

  const onOpen = (p: Project) => {
    setActive(p);
    setOpen(true);
  };
  const onClose = () => setOpen(false);

  return (
    <section className="border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h2 className="text-2xl font-semibold">Featured Projects</h2>

        {/* Cards */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} onClick={() => onOpen(p)} />
          ))}
        </div>

        {/* Slide-over detail panel (reused like Projects) */}
        <SlideOver open={open} onClose={onClose}>
          {active && (
            <article className="flex h-full flex-col">
              {/* Header */}
              <div className="flex items-start justify-between border-b border-border p-4">
                <div>
                  <h2 className="text-xl font-semibold">{active.title}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{active.short}</p>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border hover:bg-accent transition"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-card">
                  <Image
                    src={active.image}
                    alt={active.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                <p className="text-[0.975rem]/7 text-muted-foreground">{active.long}</p>

                {/* Stack badges */}
                <ul className="mt-1 flex flex-wrap gap-2">
                  {active.stack.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                {/* Highlights / Features */}
                {active.highlights && active.highlights.length > 0 && (
                  <div className="mt-4">
                    <h3 className="text-base font-semibold">Features</h3>
                    <ul className="mt-2 list-disc pl-6 space-y-1 text-sm text-foreground/90">
                      {active.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Pages */}
                {active.pages && active.pages.length > 0 && (
                  <div className="mt-4">
                    <h3 className="text-base font-semibold">Pages</h3>
                    <ul className="mt-2 list-disc pl-6 space-y-1 text-sm text-foreground/90">
                      {active.pages.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Footer actions */}
              <div className="border-t border-border p-4 flex items-center gap-3">
                {active.github && (
                  <a
                    href={active.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 hover:bg-accent hover:text-accent-foreground transition"
                  >
                    <Github className="h-4 w-4" />
                    <span>GitHub</span>
                  </a>
                )}
                {active.live && (
                  <a
                    href={active.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-primary-foreground hover:bg-accent hover:text-accent-foreground transition"
                  >
                    <LinkIcon className="h-4 w-4" />
                    <span>Live</span>
                  </a>
                )}
              </div>
            </article>
          )}
        </SlideOver>
      </div>
    </section>
  );
}
