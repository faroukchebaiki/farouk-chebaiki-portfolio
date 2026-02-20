import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

type DevToLight = {
  id: number;
  published_timestamp: string;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.siteUrl ?? "https://www.farouk.uk";
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/projects`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/blog`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${base}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${base}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // If no DEV.to username, return static sitemap
  const username = siteConfig.devtoUsername?.trim();
  if (!username) return staticEntries;

  try {
    const res = await fetch(
      `https://dev.to/api/articles?username=${encodeURIComponent(username)}&per_page=100`,
      { next: { revalidate: 3600 } },
    );
    if (!res.ok) return staticEntries;
    const posts: DevToLight[] = await res.json();
    const postEntries: MetadataRoute.Sitemap = posts.map((p) => ({
      url: `${base}/blog/${p.id}`,
      lastModified: p.published_timestamp ? new Date(p.published_timestamp) : now,
      changeFrequency: "monthly",
      priority: 0.7,
    }));
    return [...staticEntries, ...postEntries];
  } catch {
    return staticEntries;
  }
}
