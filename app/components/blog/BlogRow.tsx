"use client";

import Image from "next/image";
import * as React from "react";
import { Clock, Heart, MessageSquare } from "lucide-react";

export type DevToArticle = {
  id: number;
  title: string;
  description: string;
  cover_image: string | null;
  social_image: string;
  tag_list: string[] | string;
  readable_publish_date: string;
  published_timestamp: string; // ISO
  reading_time_minutes: number;
  public_reactions_count: number;
  comments_count: number;
  url: string;
  user: { name: string; username: string; profile_image: string };
};

export default function BlogRow({
  article,
  onClick,
}: {
  article: DevToArticle;
  onClick?: () => void;
}) {
  const tags =
    Array.isArray(article.tag_list)
      ? article.tag_list
      : (article.tag_list || "")
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean);

  // Ensure the date shows a year (readable_publish_date lacks year sometimes)
  const year = new Date(article.published_timestamp).getFullYear();
  const dateWithYear = `${article.readable_publish_date}, ${year}`;

  return (
    <button
      onClick={onClick}
      className="
        group relative w-full cursor-pointer text-left overflow-hidden rounded-2xl
        border border-border bg-card transition
        hover:-translate-y-0.5 hover:shadow-lg
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50
      "
    >
      {/* subtle hover ring across the whole card */}
      <span
        className="
          pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-accent/0 transition
          group-hover:ring-1 group-hover:ring-accent/30
        "
      />

      <div
        className="
          grid gap-0 sm:gap-5
          sm:grid-cols-[260px_1fr]
          min-h-[12rem] sm:min-h-[14rem]
        "
      >
        {/* Thumb: choose a wide-ish aspect to match DEV.to covers */}
        <div className="relative overflow-hidden">
          <div className="relative h-full w-full sm:h-auto sm:aspect-[18/10] aspect-[16/9]">
            <Image
              src={article.cover_image || article.social_image}
              alt={article.title}
              fill
              className="
                object-cover transition duration-300
                group-hover:scale-[1.03]
              "
              sizes="(max-width: 768px) 100vw, 260px"
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 flex flex-col">
          <div className="flex items-center gap-2 text-[12px] text-muted-foreground">
            <span>{dateWithYear}</span>
            <span>•</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {article.reading_time_minutes} min read
            </span>
          </div>

          <h3 className="mt-1 text-xl font-semibold leading-tight">
            {article.title}
          </h3>

          <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
            {article.description}
          </p>

          {!!tags.length && (
            <ul className="mt-3 flex flex-wrap gap-2">
              {tags.slice(0, 6).map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted-foreground"
                >
                  #{t}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-auto pt-4 flex items-center gap-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Heart className="h-3.5 w-3.5" />
              {article.public_reactions_count}
            </span>
            <span className="inline-flex items-center gap-1">
              <MessageSquare className="h-3.5 w-3.5" />
              {article.comments_count}
            </span>

            <span className="ml-auto inline-block rounded-md bg-accent px-2 py-1 text-accent-foreground">
              Read →
            </span>
          </div>
        </div>
      </div>
    </button>
  );
}
