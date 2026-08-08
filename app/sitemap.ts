import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { articles } from "@/content/writing";

const baseUrl = "https://cnaples-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date("2026-08-08");
  return [
    {
      url: baseUrl,
      lastModified: updated,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/writing`,
      lastModified: updated,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...projects.map((project) => ({
      url: `${baseUrl}/work/${project.slug}`,
      lastModified: updated,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...articles.map((article) => ({
      url: `${baseUrl}/writing/${article.slug}`,
      lastModified: new Date(article.publishedAt),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
