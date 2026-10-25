import { readFile } from "node:fs/promises";
import http from "node:http";
import https from "node:https";
import path from "node:path";

// Posts are written in the dashboard (/admin) and stored by the PHP API on the server.
// The deploy workflow sets BLOG_API_URL so every build renders the latest published posts.
// Without it (local development) the bundled seed posts are used.

export type Post = {
  slug: string;
  title: string;
  summary: string;
  html: string;
  category: string;
  tags: string[];
  author: string;
  cover: string;
  date: string; // ISO timestamp
  updated?: string;
  seoTitle: string;
  seoDescription: string;
  readTime: string;
};

const seedFile = path.join(process.cwd(), "public", "api", "seed-posts.json");

function getJson(url: string, headers: Record<string, string>): Promise<{ status: number; body: string }> {
  const client = url.startsWith("https:") ? https : http;
  return new Promise((resolve, reject) => {
    const req = client.get(url, { headers, timeout: 20000 }, (res) => {
      let body = "";
      res.setEncoding("utf8");
      res.on("data", (chunk) => (body += chunk));
      res.on("end", () => resolve({ status: res.statusCode ?? 0, body }));
    });
    req.on("timeout", () => req.destroy(new Error(`Timed out fetching ${url}`)));
    req.on("error", reject);
  });
}

async function readSeed(): Promise<Post[]> {
  const seed = JSON.parse(await readFile(seedFile, "utf8")) as Omit<Post, "readTime">[];
  return seed.map((p) => ({
    ...p,
    readTime: `${Math.max(1, Math.round(p.html.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length / 200))} min read`,
  }));
}

async function loadPosts(): Promise<Post[]> {
  const url = process.env.BLOG_API_URL;
  if (!url) return readSeed();

  const { status, body } = await getJson(url, {
    Accept: "application/json",
    "X-Build-Token": process.env.BLOG_BUILD_TOKEN ?? "",
  });

  // First deploy: the API is not on the server yet, so publish the seed posts.
  if (status === 404) {
    console.warn(`Blog API not found at ${url}; using seed posts.`);
    return readSeed();
  }
  if (status !== 200) {
    throw new Error(`Blog API returned ${status}. Refusing to build without posts.`);
  }
  return (JSON.parse(body) as { posts: Post[] }).posts;
}

let cache: Promise<Post[]> | undefined;

export function getPosts(): Promise<Post[]> {
  cache ??= loadPosts().then((posts) => [...posts].sort((a, b) => b.date.localeCompare(a.date)));
  return cache;
}

export const coverOf = (post: Post) => post.cover || "/images/hero-blog.webp";

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  });
