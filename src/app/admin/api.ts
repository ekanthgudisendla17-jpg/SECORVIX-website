// Client for the PHP API in public/api. Used only by the dashboard.

export type User = { name: string; email: string };

export type PostState = "draft" | "scheduled" | "published";

export type AdminPost = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  html: string;
  category: string;
  tags: string[];
  author: string;
  cover: string;
  status: "draft" | "published";
  state: PostState;
  publishAt: string | null;
  createdAt: string;
  updatedAt: string;
  seoTitle: string;
  seoDescription: string;
};

export type PostRow = Pick<AdminPost, "id" | "title" | "slug" | "category" | "cover" | "state" | "publishAt" | "updatedAt">;

export type Rebuild = { triggered: boolean; message: string } | null;

export class ApiError extends Error {
  constructor(message: string, readonly status: number) {
    super(message);
  }
}

let onUnauthorized: (() => void) | null = null;

export function setUnauthorizedHandler(fn: (() => void) | null) {
  onUnauthorized = fn;
}

type Options = { method?: "GET" | "POST"; body?: unknown; form?: FormData };

export async function api<T>(path: string, { method = "GET", body, form }: Options = {}): Promise<T> {
  let res: Response;
  try {
    res = await fetch(`/api/${path}`, {
      method: form || body !== undefined ? "POST" : method,
      credentials: "same-origin",
      headers: {
        "X-Requested-With": "secorvix-admin",
        ...(body !== undefined ? { "Content-Type": "application/json" } : {}),
      },
      body: form ?? (body !== undefined ? JSON.stringify(body) : undefined),
    });
  } catch {
    throw new ApiError("Could not reach the server. Check your internet connection.", 0);
  }

  const data = await res.json().catch(() => null);
  if (!res.ok || data === null) {
    if (res.status === 401 && !path.startsWith("auth.php")) onUnauthorized?.();
    throw new ApiError(data?.error ?? `The dashboard API is not available (HTTP ${res.status}).`, res.status);
  }
  return data as T;
}

export const uploadImage = async (file: File) => {
  const form = new FormData();
  form.append("file", file);
  return (await api<{ url: string }>("upload.php", { form })).url;
};

export function formatDateTime(iso: string | null) {
  if (!iso) return "—";
  return new Date(iso).toLocaleString("en-GB", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
}
