"use client";

import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import BlogRow, { type DevToArticle } from "./BlogRow";
import SlideOver from "../projects/SlideOver";
import ArticleView from "./ArticleView";

export default function BlogList({ username }: { username: string }) {
  const [articles, setArticles] = React.useState<DevToArticle[] | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  const router = useRouter();
  const search = useSearchParams();
  const activeId = search.get("id");
  const open = Boolean(activeId);

  const isDesktop = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(min-width: 1024px)").matches; // lg breakpoint

  React.useEffect(() => {
    const ctrl = new AbortController();
    const run = async () => {
      try {
        setError(null);
        const res = await fetch(
          `https://dev.to/api/articles?username=${encodeURIComponent(username)}`,
          { signal: ctrl.signal }
        );
        if (!res.ok) throw new Error(`Failed to load: ${res.status}`);
        const data: DevToArticle[] = await res.json();
        setArticles(data);
      } catch (e: any) {
        if (e.name !== "AbortError") setError(e.message ?? "Failed to fetch");
      }
    };
    run();
    return () => ctrl.abort();
  }, [username]);

  const onOpen = (id: number) => {
    if (isDesktop()) {
      router.push(`/blog/${id}`, { scroll: true });
    } else {
      const params = new URLSearchParams(search?.toString());
      params.set("id", String(id));
      router.push(`/blog?${params.toString()}`, { scroll: false });
    }
  };

  const onClose = () => {
    const params = new URLSearchParams(search?.toString());
    params.delete("id");
    router.push(`/blog${params.toString() ? `?${params.toString()}` : ""}`, {
      scroll: false,
    });
  };

  if (error) {
    return (
      <div className="rounded-2xl border border-border bg-card p-6 text-sm text-destructive">
        {error}
      </div>
    );
  }

  if (!articles) {
    return (
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="rounded-2xl border border-border bg-card p-4 animate-pulse h-40" />
        ))}
      </div>
    );
  }

  return (
    <>
      {/* Vertical stack on all sizes (clean + readable) */}
      <div className="space-y-5 ">
        {articles.map((a) => (
          <BlogRow key={a.id} article={a} onClick={() => onOpen(a.id)} />
        ))}
      </div>

      {/* Mobile slide-over only (desktop navigates to page) */}
      <div className="lg:hidden">
        <SlideOver open={open} onClose={onClose} widthClass="w-full md:w-[85%]">
          {activeId ? <ArticleView id={Number(activeId)} onClose={onClose} /> : null}
        </SlideOver>
      </div>
    </>
  );
}
