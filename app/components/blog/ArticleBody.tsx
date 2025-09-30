"use client";

import { ExternalLink } from "lucide-react";
import * as React from "react";

export default function ArticleBody({
  html,
  originalUrl,
}: {
  html: string;
  originalUrl: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);

  // biome-ignore lint/correctness/useExhaustiveDependencies: rerun on HTML changes to rehydrate embeds and code blocks
  React.useEffect(() => {
    const root = ref.current;
    if (!root) return;

    // Make iframes (e.g., YouTube) responsive
    const iframes = Array.from(root.querySelectorAll("iframe"));
    for (const el of iframes) {
      el.setAttribute("width", "100%");
      const wrapper = document.createElement("div");
      wrapper.className =
        "my-6 w-full overflow-hidden rounded-lg border border-border aspect-video";
      el.parentNode?.insertBefore(wrapper, el);
      wrapper.appendChild(el);
    }

    // Fix copy button: attach to a wrapper OUTSIDE the scrollable <pre>
    const pres = Array.from(root.querySelectorAll("pre"));
    pres.forEach((pre) => {
      // If already processed, skip
      if ((pre.parentElement as HTMLElement)?.classList?.contains("__codewrap"))
        return;

      // 1) Create wrapper
      const wrap = document.createElement("div");
      wrap.className = "__codewrap relative my-6";

      // 2) Insert wrapper before pre, then move pre inside
      pre.parentNode?.insertBefore(wrap, pre);
      wrap.appendChild(pre);

      // 3) Style pre to scroll horizontally
      pre.classList.add(
        "rounded-lg",
        "border",
        "border-border",
        "bg-card",
        "overflow-x-auto",
        "p-4",
      );

      // 4) Create copy button pinned to wrapper (not pre)
      const btn = document.createElement("button");
      btn.className = [
        "__copy-btn",
        "absolute right-2 top-2 z-10",
        "inline-flex items-center gap-1 rounded-md",
        "border border-border bg-card/85 backdrop-blur px-2 py-1 text-xs",
        "hover:bg-accent hover:text-accent-foreground",
        "transition",
        "opacity-90 hover:opacity-100",
      ].join(" ");

      btn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
        </svg>
        <span>Copy</span>
      `;

      btn.onclick = async () => {
        try {
          const code = pre.querySelector("code");
          const text = code?.textContent ?? "";
          await navigator.clipboard.writeText(text);
          btn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 6 9 17l-5-5"/>
            </svg>
            <span>Copied</span>
          `;
          setTimeout(() => {
            btn.innerHTML = `
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
              </svg>
              <span>Copy</span>
            `;
          }, 1200);
        } catch {
          btn.innerHTML = `<span>Failed</span>`;
          setTimeout(() => {
            btn.innerHTML = `<span>Copy</span>`;
          }, 1200);
        }
      };

      wrap.appendChild(btn);
    });
  }, [html]);

  return (
    <>
      <article
        ref={ref}
        className="
          mt-5
          prose prose-neutral dark:prose-invert max-w-none

          /* Headings larger with spacing */
          [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:text-2xl sm:[&_h2]:text-3xl [&_h2]:font-semibold
          [&_h3]:mt-7 [&_h3]:mb-2 [&_h3]:text-xl sm:[&_h3]:text-2xl [&_h3]:font-semibold

          /* Paragraph & list rhythm */
          [&_p]:my-4 [&_ul]:my-4 [&_ol]:my-4 [&_li]:my-1.5

          /* Images */
          [&_img]:my-6 [&_img]:rounded-lg [&_img]:border [&_img]:border-border

          /* Tables */
          [&_table]:my-6 [&_table]:w-full [&_table]:border-collapse
          [&_th]:border [&_th]:border-border [&_td]:border [&_td]:border-border
          [&_th]:bg-muted/60 [&_th]:p-2 [&_td]:p-2

          /* Links */
          [&_a]:underline [&_a]:underline-offset-4
        "
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <div className="mt-8 border-t border-border pt-4">
        <a
          href={originalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-primary-foreground hover:bg-accent hover:text-accent-foreground transition"
        >
          Read on DEV.to
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </>
  );
}
