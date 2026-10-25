import type { MetadataRoute } from "next";
import { getPosts } from "./lib/posts";
import { siteUrl, staticRoutes } from "./lib/site";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: route === "/blog/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));

  const articles: MetadataRoute.Sitemap = (await getPosts()).map((post) => ({
    url: `${siteUrl}/blog/${post.slug}/`,
    lastModified: post.updated || post.date,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...pages, ...articles];
}
