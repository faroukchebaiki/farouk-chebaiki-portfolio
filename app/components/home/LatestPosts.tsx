// app/components/home/LatestPosts.tsx
// Server component — data fetched at build / revalidated hourly on the server.
// No client JS bundle for the data layer; eliminates the client-side waterfall.
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

type DevToPost = {
  id: number;
  title: string;
  description: string;
  url: string;
  cover_image: string | null;
  published_timestamp: string;
};

async function getLatestPosts(): Promise<DevToPost[]> {
  try {
    const res = await fetch(
      `https://dev.to/api/articles?username=${encodeURIComponent(
        siteConfig.devtoUsername ?? "",
      )}&per_page=3`,
      {
        // ISR: revalidate every hour (matches page.tsx revalidate = 3600)
        next: { revalidate: 3600 },
      },
    );
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export default async function LatestPosts() {
  const posts = await getLatestPosts();

  if (!posts.length) return null;

  return (
    <section className="border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h2 className="text-2xl font-semibold">Latest Posts</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.id}
              href={`/blog/${p.id}`}
              className="cursor-pointer block text-left rounded-xl border border-border bg-card text-card-foreground p-5 hover:bg-accent hover:text-accent-foreground transition"
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
