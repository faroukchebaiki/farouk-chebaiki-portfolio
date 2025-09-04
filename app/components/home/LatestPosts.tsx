// src/components/home/LatestPosts.tsx
"use client";

import * as React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { siteConfig } from "@/lib/site";
import SlideOver from "../projects/SlideOver";
import ArticleView from "../blog/ArticleView";

type DevToPost = {
  id: number;
  title: string;
  description: string;
  url: string;
  cover_image: string | null;
  published_timestamp: string;
};

export default function LatestPosts() {
  const [posts, setPosts] = React.useState<DevToPost[]>([]);
  const [open, setOpen] = React.useState(false);
  const [activeId, setActiveId] = React.useState<number | null>(null);
  const router = useRouter();

  React.useEffect(() => {
    let aborted = false;
    const run = async () => {
      try {
        const res = await fetch(
          `https://dev.to/api/articles?username=${encodeURIComponent(siteConfig.devtoUsername ?? "")}&per_page=3`,
          { cache: "no-store" }
        );
        const data: DevToPost[] = res.ok ? await res.json() : [];
        if (!aborted) setPosts(data);
      } catch {
        if (!aborted) setPosts([]);
      }
    };
    run();
    return () => { aborted = true; };
  }, []);

  const isDesktop = () => typeof window !== "undefined" && window.matchMedia("(min-width: 1024px)").matches; // lg

  const onOpen = (id: number) => {
    if (isDesktop()) {
      router.push(`/blog/${id}`);
    } else {
      setActiveId(id);
      setOpen(true);
    }
  };
  const onClose = () => setOpen(false);

  if (!posts.length) return null;

  return (
    <section className="border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h2 className="text-2xl font-semibold">Latest Posts</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <button
              key={p.id}
              onClick={() => onOpen(p.id)}
              className="text-left rounded-xl border border-border bg-card text-card-foreground p-5 hover:bg-accent hover:text-accent-foreground transition"
            >
              {p.cover_image && (
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-border">
                  <Image
                    src={p.cover_image}
                    alt={p.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              )}
              <h3 className="mt-4 font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
            </button>
          ))}
        </div>

        {/* Mobile slide-over */}
        <div className="lg:hidden">
          <SlideOver open={open} onClose={onClose} widthClass="w-full md:w-[85%]">
            {activeId ? <ArticleView id={activeId} onClose={onClose} /> : null}
          </SlideOver>
        </div>
      </div>
    </section>
  );
}
