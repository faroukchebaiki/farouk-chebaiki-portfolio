"use client";

import * as React from "react";
import { ArrowLeft } from "lucide-react";
import ArticleBody from "./ArticleBody";

type DevToArticleFull = {
  id: number;
  title: string;
  description: string;
  url: string;
  cover_image: string | null;
  body_html: string;
  reading_time_minutes: number;
  readable_publish_date: string;
};

export default function ArticleView({
  id,
  onClose,
}: {
  id: number;
  onClose: () => void;
}) {
  const [data, setData] = React.useState<DevToArticleFull | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const ctrl = new AbortController();
    const run = async () => {
      try {
        setError(null);
        setData(null);
        const res = await fetch(`https://dev.to/api/articles/${id}`, {
          signal: ctrl.signal,
        });
        if (!res.ok) throw new Error(`Failed to load article: ${res.status}`);
        const json: DevToArticleFull = await res.json();
        setData(json);
      } catch (e: unknown) {
        if (e instanceof DOMException && e.name === "AbortError") return;
        const msg = e instanceof Error ? e.message : "Failed to fetch";
        setError(msg);
      }
    };
    run();
    return () => ctrl.abort();
  }, [id]);

  if (error) return <div className="p-4 text-sm text-destructive">{error}</div>;
  if (!data) {
    return (
      <div className="p-4">
        <div className="h-6 w-3/4 rounded bg-muted animate-pulse" />
        <div className="mt-4 h-4 w-1/2 rounded bg-muted animate-pulse" />
        <div className="mt-6 space-y-2">
          {["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8"].map((k) => (
            <div
              key={k}
              className="h-3 w-full rounded bg-muted animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col">
      {/* Top bar */}
      <div className="flex items-center gap-3 border-b border-border px-3 py-2">
        <button
          type="button"
          onClick={onClose}
          className="inline-flex items-center gap-2 rounded-md border border-border px-2 py-1 text-sm hover:bg-accent hover:text-accent-foreground transition"
          aria-label="Go back"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>
        <h2 className="ml-1 line-clamp-1 text-base font-semibold">
          {data.title}
        </h2>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto">
        {data.cover_image && (
          <div
            className="aspect-[16/9] w-full bg-center bg-cover"
            style={{ backgroundImage: `url(${data.cover_image})` }}
          />
        )}
        <div className="px-4 py-5 sm:px-6">
          <ArticleBody html={data.body_html} originalUrl={data.url} />
        </div>
      </div>
    </div>
  );
}
