"use client";

import { useRouter, useSearchParams } from "next/navigation";
import * as React from "react";
import SlideOver from "../projects/SlideOver";
import ArticleView from "./ArticleView";
import BlogRow, { type DevToArticle } from "./BlogRow";
import BlogRowSkeleton from "./BlogRowSkeleton";

const PER_PAGE = 7;

export default function BlogList({ username }: { username: string }) {
  const [articles, setArticles] = React.useState<DevToArticle[] | null>(null);
  const [showSkeleton, setShowSkeleton] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const [hasMore, setHasMore] = React.useState(true);
  const sentinelRef = React.useRef<HTMLDivElement | null>(null);

  // SSR-safe reference to matchMedia without using `any`
  type MM = { matchMedia?: (q: string) => { matches: boolean } };
  const w = globalThis as unknown as MM;

  const router = useRouter();
  const search = useSearchParams();
  const activeId = search.get("id");
  const open = Boolean(activeId);

  const isDesktop = () => Boolean(w.matchMedia?.("(min-width: 1024px)")?.matches); // lg breakpoint

  // Initial load
  React.useEffect(() => {
    // Slight delay before showing skeleton to avoid flicker
    const t = setTimeout(() => setShowSkeleton(true), 300);
    const ctrl = new AbortController();
    const load = async () => {
      try {
        setError(null);
        setLoading(true);
        const url = `https://dev.to/api/articles?username=${encodeURIComponent(
          username,
        )}&page=1&per_page=${PER_PAGE}`;
        const res = await fetch(url, { signal: ctrl.signal });
        if (!res.ok) throw new Error(`Failed to load: ${res.status}`);
        const data: DevToArticle[] = await res.json();
        setArticles(data);
        setHasMore(data.length === PER_PAGE);
        setPage(1);
      } catch (e: unknown) {
        if (e instanceof DOMException && e.name === "AbortError") return;
        const msg = e instanceof Error ? e.message : "Failed to fetch";
        setError(msg);
      } finally {
        setLoading(false);
      }
    };
    load();
    return () => {
      clearTimeout(t);
      ctrl.abort();
    };
  }, [username]);

  const loadMore = React.useCallback(async () => {
    if (loading || !hasMore) return;
    const ctrl = new AbortController();
    try {
      setLoading(true);
      const nextPage = page + 1;
      const url = `https://dev.to/api/articles?username=${encodeURIComponent(
        username,
      )}&page=${nextPage}&per_page=${PER_PAGE}`;
      const res = await fetch(url, { signal: ctrl.signal });
      if (!res.ok) throw new Error(`Failed to load: ${res.status}`);
      const data: DevToArticle[] = await res.json();
      setArticles((prev) => (prev ? [...prev, ...data] : data));
      setHasMore(data.length === PER_PAGE);
      setPage(nextPage);
    } catch (e: unknown) {
      if (e instanceof DOMException && e.name === "AbortError") return;
      const msg = e instanceof Error ? e.message : "Failed to fetch";
      setError(msg);
    } finally {
      setLoading(false);
    }
  }, [loading, hasMore, page, username]);

  // Infinite scroll via IntersectionObserver
  React.useEffect(() => {
    if (!sentinelRef.current) return;
    const el = sentinelRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
          loadMore();
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(el);
    return () => observer.unobserve(el);
  }, [loadMore]);

  const onOpen = (e: React.MouseEvent | undefined, id: number) => {
    if (isDesktop()) {
      // desktop: navigate normally (allow link default)
      return;
    }
    // mobile: open slide-over on the same /blog route
    e?.preventDefault();
    const params = new URLSearchParams(search?.toString());
    params.set("id", String(id));
    router.push(`/blog?${params.toString()}`, { scroll: false });
  };

  const onClose = () => {
    const params = new URLSearchParams(search?.toString());
    params.delete("id");
    router.push(`/blog${params.toString() ? `?${params.toString()}` : ""}`, {
      scroll: false,
    });
  };

  const INIT_KEYS = React.useMemo(
    () => Array.from({ length: PER_PAGE }, (_, i) => `init-${i}`),
    [],
  );
  if (error) {
    return (
      <div className="rounded-2xl border border-border bg-card p-6 text-sm text-destructive">
        {error}
      </div>
    );
  }
  if (!articles) {
    return showSkeleton ? (
      <div className="space-y-5" aria-busy>
        {INIT_KEYS.map((k) => (
          <BlogRowSkeleton key={k} />
        ))}
      </div>
    ) : null;
  }

  return (
    <>
      {/* Vertical stack on all sizes (clean + readable) */}
      <div className="space-y-5 ">
        {articles.map((a) => (
          <BlogRow key={a.id} article={a} onClick={(e) => onOpen(e, a.id)} />
        ))}
        {/* Loading more skeletons */}
        {loading && hasMore && (
          <div className="space-y-5" aria-busy>
            {["more-a", "more-b"].map((k) => (
              <BlogRowSkeleton key={k} />
            ))}
          </div>
        )}
        {/* Load more button */}
        {hasMore && (
          <div className="flex justify-center pt-2">
            <button
              type="button"
              onClick={loadMore}
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-sm hover:bg-accent/10 disabled:opacity-50"
            >
              {loading ? "Loading…" : "Load more"}
            </button>
          </div>
        )}
        {/* Sentinel for infinite scroll */}
        {hasMore && <div ref={sentinelRef} className="h-1" />}
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
