"use client";

import Image from "next/image";
import * as React from "react";
import type { Project } from "./ProjectsGrid";

/** Clickable project card */
export default function ProjectCard({
  project,
  onClick,
  featured = false,
}: {
  project: Project;
  onClick?: () => void;
  featured?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        group w-full text-left cursor-pointer
        overflow-hidden rounded-2xl border border-border bg-card
        transition
        hover:shadow-lg hover:-translate-y-0.5
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50
        ${featured ? "sm:flex sm:gap-6" : ""}
      `}
    >
      {/* Image */}
      <div
        className={`
          relative overflow-hidden
          ${featured ? "sm:w-[48%] lg:w-[40%]" : ""}
          aspect-[16/9]
        `}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-300 group-hover:scale-[1.03]"
          sizes={
            featured
              ? "(max-width: 1024px) 100vw, 40vw"
              : "(max-width: 1024px) 100vw, 33vw"
          }
        />
      </div>

      {/* Content */}
      <div className={`p-4 ${featured ? "sm:flex-1 sm:p-6" : ""}`}>
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{project.short}</p>

        {/* Stack badges */}
        <ul className="mt-3 flex flex-wrap gap-2">
          {project.stack.slice(0, 6).map((t) => (
            <li
              key={t}
              className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted-foreground"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-4 text-sm text-muted-foreground">
          <span className="inline-block rounded-md bg-accent px-2 py-1 text-accent-foreground">
            View details →
          </span>
        </div>
      </div>
    </button>
  );
}
