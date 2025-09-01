// src/components/home/FeaturedProjects.tsx
import Link from "next/link";

const projects = [
  { title: "Project One", desc: "Short description", href: "/projects#one" },
  { title: "Project Two", desc: "Short description", href: "/projects#two" },
  { title: "Project Three", desc: "Short description", href: "/projects#three" },
];

export default function FeaturedProjects() {
  return (
    <section className="border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h2 className="text-2xl font-semibold">Featured Projects</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className="group rounded-xl border border-border bg-card text-card-foreground p-5 hover:bg-accent hover:text-accent-foreground transition"
            >
              <h3 className="font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground group-hover:text-accent-foreground/90">
                {p.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
