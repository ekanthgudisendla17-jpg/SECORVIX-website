"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { Logo } from "../components/ui";
import { api, setUnauthorizedHandler, type PostState, type User } from "./api";

type AdminContext = {
  user: User;
  setUser: (user: User) => void;
  autoPublish: boolean;
};

const Ctx = createContext<AdminContext | null>(null);

export function useAdmin() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useAdmin must be used inside AdminShell");
  return ctx;
}

export const inputClass =
  "w-full rounded-xl border border-black/10 bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-black/35 outline-none transition focus:border-navy focus:ring-4 focus:ring-lavender/30";

export const primaryButton =
  "inline-flex min-h-10 items-center justify-center rounded-xl bg-ink px-4 text-sm font-semibold text-white transition hover:bg-navy disabled:cursor-not-allowed disabled:opacity-50";

export const secondaryButton =
  "inline-flex min-h-10 items-center justify-center rounded-xl border border-black/15 bg-white px-4 text-sm font-semibold text-ink transition hover:border-ink disabled:cursor-not-allowed disabled:opacity-50";

export function Card({ title, children, className = "" }: { title?: string; children: ReactNode; className?: string }) {
  return (
    <section className={`rounded-2xl border border-black/[0.07] bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] ${className}`}>
      {title && <h2 className="mb-4 text-sm font-semibold text-ink">{title}</h2>}
      {children}
    </section>
  );
}

const stateStyles: Record<PostState, string> = {
  published: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  scheduled: "bg-amber-50 text-amber-700 ring-amber-600/20",
  draft: "bg-black/[0.04] text-black/60 ring-black/10",
};

export const stateLabel: Record<PostState, string> = { published: "Published", scheduled: "Scheduled", draft: "Draft" };

export function StatusPill({ state }: { state: PostState }) {
  return <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${stateStyles[state]}`}>{stateLabel[state]}</span>;
}

type Me = { user: User | null; configured: boolean; autoPublish: boolean };

export default function AdminShell({ children }: { children: ReactNode }) {
  const pathname = usePathname().replace(/\/$/, "");
  const [me, setMe] = useState<Me | null>(null);
  const [loadError, setLoadError] = useState("");
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    setUnauthorizedHandler(() => setExpired(true));
    api<Me>("auth.php?action=me")
      .then(setMe)
      .catch((err: Error) => setLoadError(err.message));
    return () => setUnauthorizedHandler(null);
  }, []);

  const setUser = (user: User) => setMe((m) => (m ? { ...m, user } : m));

  const signOut = async () => {
    await api("auth.php?action=logout", { method: "POST" }).catch(() => undefined);
    setMe((m) => (m ? { ...m, user: null } : m));
  };

  let content: ReactNode;
  if (loadError) {
    content = (
      <Centered>
        <Card className="max-w-md text-center">
          <p className="text-base font-semibold text-ink">The blog dashboard is unavailable</p>
          <p className="mt-2 text-sm leading-6 text-black/60">{loadError}</p>
        </Card>
      </Centered>
    );
  } else if (!me) {
    content = (
      <Centered>
        <p className="text-sm text-black/50">Loading…</p>
      </Centered>
    );
  } else if (!me.user) {
    content = (
      <Centered>
        <LoginForm configured={me.configured} onLogin={setUser} />
      </Centered>
    );
  } else {
    const navLink = (href: string, label: string) => (
      <Link href={href} className={`transition hover:text-white ${pathname === href.replace(/\/$/, "") ? "text-white" : "text-white/65"}`}>
        {label}
      </Link>
    );
    content = (
      <Ctx.Provider value={{ user: me.user, setUser, autoPublish: me.autoPublish }}>
        <header className="sticky top-0 z-40 bg-ink">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-6">
            <Link href="/admin/" className="flex items-center gap-3">
              <Logo />
              <span className="rounded-full bg-white/15 px-2.5 py-0.5 text-[11px] font-semibold tracking-wider text-white">BLOG</span>
            </Link>
            <nav className="flex items-center gap-4 text-sm sm:gap-6">
              {navLink("/admin/", "Posts")}
              {navLink("/admin/account/", "Account")}
              <a href="/blog/" target="_blank" rel="noopener" className="hidden text-white/65 transition hover:text-white sm:inline">
                View blog ↗
              </a>
              <button type="button" onClick={signOut} className="text-white/65 transition hover:text-white">
                Sign out
              </button>
            </nav>
          </div>
        </header>
        <main className="mx-auto w-full max-w-7xl flex-1 px-5 py-8 sm:px-6">{children}</main>

        {expired && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-5 backdrop-blur-sm">
            <LoginForm
              configured
              notice="Your session expired. Sign in again to continue — your changes are still here."
              onLogin={(user) => {
                setUser(user);
                setExpired(false);
              }}
            />
          </div>
        )}
      </Ctx.Provider>
    );
  }

  return <div className="flex min-h-screen flex-col bg-[#f3f3f0] text-ink">{content}</div>;
}

function Centered({ children }: { children: ReactNode }) {
  return <div className="flex flex-1 items-center justify-center p-5">{children}</div>;
}

function LoginForm({ configured, notice, onLogin }: { configured: boolean; notice?: string; onLogin: (user: User) => void }) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      const data = await api<{ user: User }>("auth.php?action=login", { body: Object.fromEntries(new FormData(e.currentTarget)) });
      onLogin(data.user);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="w-full max-w-sm">
      <div className="mb-6 flex justify-center rounded-2xl bg-ink py-5">
        <Logo />
      </div>
      <Card>
        <h1 className="text-lg font-semibold text-ink">Sign in to the blog dashboard</h1>
        {notice && <p className="mt-2 rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-800">{notice}</p>}
        {!configured && (
          <p className="mt-2 rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-800">
            Login is not set up yet. Add the ADMIN_EMAIL and ADMIN_PASSWORD secrets in GitHub, then redeploy.
          </p>
        )}
        <form onSubmit={submit} className="mt-5 space-y-4">
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium">Email</span>
            <input name="email" type="email" autoComplete="username" required className={inputClass} />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium">Password</span>
            <input name="password" type="password" autoComplete="current-password" required className={inputClass} />
          </label>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button type="submit" disabled={busy} className={`${primaryButton} w-full`}>
            {busy ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </Card>
    </div>
  );
}
