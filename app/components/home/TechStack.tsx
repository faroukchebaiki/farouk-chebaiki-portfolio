// src/components/home/TechStack.tsx
export default function TechStack() {
  return (
    <section className="border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 py-10">
        <h2 className="text-xl font-semibold">Tech Stack</h2>
        <ul className="mt-4 flex flex-wrap gap-2 text-sm text-muted-foreground">
          <li className="rounded-full border border-border px-3 py-1 bg-card">Next.js</li>
          <li className="rounded-full border border-border px-3 py-1 bg-card">TypeScript</li>
          <li className="rounded-full border border-border px-3 py-1 bg-card">Tailwind v4</li>
          <li className="rounded-full border border-border px-3 py-1 bg-card">shadcn/ui</li>
        </ul>
      </div>
    </section>
  );
}
