// src/components/home/TechStack.tsx
"use client";

import * as React from "react";
import { ArrowLeftRight, Pause, Play } from "lucide-react";

type StackItem = {
  name: string;
  // Prefer lucide icons when possible
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  // If a brand logo is needed, drop an SVG or PNG under public/icons/stack and set img
  img?: string; // e.g. "/icons/stack/react.svg"
};

const STACK: StackItem[] = [
  // Use Simple Icons CDN for recognizable brand marks
  { name: "TypeScript", img: "https://cdn.simpleicons.org/typescript" },
  { name: "React", img: "https://cdn.simpleicons.org/react" },
  { name: "Next.js", img: "https://cdn.simpleicons.org/nextdotjs" },
  { name: "Tailwind CSS", img: "https://cdn.simpleicons.org/tailwindcss" },
  { name: "shadcn/ui", img: "https://cdn.simpleicons.org/shadcnui" },
  { name: "Node.js", img: "https://cdn.simpleicons.org/nodedotjs" },
  { name: "Express", img: "https://cdn.simpleicons.org/express/ffffff" },
  { name: "PostgreSQL", img: "https://cdn.simpleicons.org/postgresql" },
  { name: "MongoDB", img: "https://cdn.simpleicons.org/mongodb" },
  { name: "Redis", img: "https://cdn.simpleicons.org/redis" },
  { name: "Firebase", img: "https://cdn.simpleicons.org/firebase" },
  { name: "Linux", img: "https://cdn.simpleicons.org/linux" },
  { name: "Docker", img: "https://cdn.simpleicons.org/docker" },
  { name: "Podman", img: "https://cdn.simpleicons.org/podman" },
  { name: "Cloudflare", img: "https://cdn.simpleicons.org/cloudflare" },
  { name: "Nginx", img: "https://cdn.simpleicons.org/nginx" },
  { name: "Git", img: "https://cdn.simpleicons.org/git" },
  { name: "Postman", img: "https://cdn.simpleicons.org/postman" },
];

function Row({ items, size = 40 }: { items: StackItem[]; size?: number }) {
  return (
    <div className="flex items-center gap-4 pr-4">
      {items.map((it, i) => (
        <div
          key={`${it.name}-${i}`}
          className="
            inline-flex items-center gap-3 rounded-2xl border border-border bg-card
            px-4 py-3 text-sm text-card-foreground
            shadow-sm
          "
          title={it.name}
        >
          {it.img ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={it.img}
              alt=""
              className="select-none"
              style={{ height: size, width: size }}
            />
          ) : it.Icon ? (
            <it.Icon className="" style={{ height: size, width: size }} />
          ) : null}
          <span className="whitespace-nowrap">{it.name}</span>
        </div>
      ))}
    </div>
  );
}

export default function TechStack() {
  // Duplicate items for seamless marquee
  const items = React.useMemo(() => [...STACK, ...STACK], []);
  const [paused, setPaused] = React.useState(false);
  const [reverse, setReverse] = React.useState(false);
  const [dragging, setDragging] = React.useState(false);
  const [offset, setOffset] = React.useState(0);
  const dragStartRef = React.useRef<{ x: number; baseOffset: number } | null>(
    null,
  );
  const onTogglePause = () => setPaused((p) => !p);
  const onToggleReverse = () => setReverse((r) => !r);
  const onPointerDown: React.PointerEventHandler<HTMLDivElement> = (e) => {
    if (e.button !== 0 && e.pointerType === "mouse") return;
    setDragging(true);
    setPaused(true);
    dragStartRef.current = { x: e.clientX, baseOffset: offset };
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {}
  };
  const onPointerMove: React.PointerEventHandler<HTMLDivElement> = (e) => {
    if (!dragging || !dragStartRef.current) return;
    const dx = e.clientX - dragStartRef.current.x;
    setOffset(dragStartRef.current.baseOffset + dx);
  };
  const endDrag = (el?: HTMLDivElement, id?: number) => {
    setDragging(false);
    setTimeout(() => setPaused(false), 60);
    if (el && id !== undefined) {
      try {
        el.releasePointerCapture(id);
      } catch {}
    }
  };
  const onPointerUp: React.PointerEventHandler<HTMLDivElement> = (e) =>
    endDrag(e.currentTarget, e.pointerId);
  const onPointerCancel: React.PointerEventHandler<HTMLDivElement> = (e) =>
    endDrag(e.currentTarget, e.pointerId);
  return (
    <section className="border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 py-10">
        <h2 className="text-xl font-semibold">Tech Stack</h2>
        <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
          Full‑stack developer focused on scalable, high‑performance apps with
          clean architecture, security, and efficient DX — working across
          Next.js, React, Node.js, and containerized backends while exploring
          AI‑driven automation.
        </p>

        {/* Marquee rail */}
        <div className="mt-6 overflow-hidden">
          <div className="relative">
            {/* gradient masks left/right for polish with subtle blur */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background via-background/80 to-transparent backdrop-blur-sm" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background via-background/80 to-transparent backdrop-blur-sm" />

            {/* Controls */}
            <div className="absolute right-2 -top-10 flex items-center gap-2">
              <button
                type="button"
                onClick={onToggleReverse}
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-2 py-1 text-xs hover:bg-accent"
                title="Reverse direction"
              >
                <ArrowLeftRight className="h-3.5 w-3.5" />
                Reverse
              </button>
              <button
                type="button"
                onClick={onTogglePause}
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-2 py-1 text-xs hover:bg-accent"
                title={paused ? "Play" : "Pause"}
              >
                {paused ? (
                  <Play className="h-3.5 w-3.5" />
                ) : (
                  <Pause className="h-3.5 w-3.5" />
                )}
                {paused ? "Play" : "Pause"}
              </button>
            </div>

            {/* Wrapper applies manual translate while dragging; inner continues anim */}
            <div
              className={`relative ${dragging ? "cursor-grabbing" : "cursor-grab"}`}
              style={{
                transform: `translateX(${offset}px)`,
                touchAction: "pan-y" as React.CSSProperties["touchAction"],
              }}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerCancel}
            >
              <button
                type="button"
                className={`flex w-max will-change-transform ${reverse ? "animate-marquee-reverse" : "animate-marquee"} ${paused ? "pause-animation" : ""}`}
                onClick={onTogglePause}
                aria-label="Tech logos marquee"
              >
                <Row items={items} size={56} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
