import type { Metadata } from "next";
import Link from "next/link";
import ArticleBody from "../../components/blog/ArticleBody";

type DevToArticleFull = {
  id: number;
  title: string;
  description: string;
  url: string;
  cover_image: string | null;
  body_html: string;
  reading_time_minutes: number;
  published_timestamp: string;
  readable_publish_date: string;
  tags: string;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  try {
    const res = await fetch(`https://dev.to/api/articles/${id}`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) throw new Error("not found");
    const data: DevToArticleFull = await res.json();
    return {
      title: `${data.title} — Blog`,
      description: data.description || "Article from DEV.to",
      alternates: { canonical: `/blog/${id}` },
      openGraph: {
        title: data.title,
        description: data.description || "",
        url: data.url,
        images: data.cover_image ? [{ url: data.cover_image }] : undefined,
      },
      twitter: {
        card: "summary_large_image",
        title: data.title,
        description: data.description || "",
        images: data.cover_image ? [data.cover_image] : undefined,
      },
    };
  } catch {
    return { title: "Article — Blog" };
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const res = await fetch(`https://dev.to/api/articles/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return (
      <main className="container mx-auto px-4 sm:px-6 py-10">
        <p className="text-muted-foreground">Article not found.</p>
        <Link
          href="/blog"
          className="mt-4 inline-block underline underline-offset-4"
        >
          ← Back to blog
        </Link>
      </main>
    );
  }
  const data: DevToArticleFull = await res.json();
  const year = new Date(data.published_timestamp).getFullYear();
  const dateWithYear = `${data.readable_publish_date}, ${year}`;

  return (
    <main className="bg-background text-foreground">
      <section className="container mx-auto px-4 sm:px-6 py-6 sm:py-10">
        <div className="lg:flex lg:justify-center lg:gap-8">
          {/* Left sticky back button (desktop-only) */}
          <aside className="hidden lg:block sticky top-24 self-start w-36">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card/80 backdrop-blur px-3 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground transition"
            >
              ← Back
            </Link>
          </aside>

          {/* Article column */}
          <div className="w-full max-w-3xl">
            {/* Mobile back button (kept at top) */}
            <div className="sticky top-4 z-30 -ml-1 mb-3 lg:hidden">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card/80 backdrop-blur px-3 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground transition"
              >
                ← Back
              </Link>
            </div>

            <div className="flex items-center justify-end">
              <span className="text-xs text-muted-foreground">
                {dateWithYear}
              </span>
            </div>

            {/* Page-like reading area with side lines */}
            <div className="mt-2 border-x border-border px-5">
              <h1 className="text-[1.9rem] sm:text-[2.2rem] font-bold leading-tight tracking-tight">
                {data.title}
              </h1>

              {data.cover_image && (
                <div
                  className="mt-4 aspect-[16/9] w-full rounded-xl border border-border bg-center bg-cover lg:border-0 lg:rounded-none"
                  style={{ backgroundImage: `url(${data.cover_image})` }}
                />
              )}

              <ArticleBody html={data.body_html} originalUrl={data.url} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
