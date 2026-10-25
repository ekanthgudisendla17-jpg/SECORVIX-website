"use client";

import { useState } from "react";
import { Card, inputClass, primaryButton, useAdmin } from "../AdminShell";
import { api, type User } from "../api";

export default function AccountPage() {
  const { user, setUser } = useAdmin();
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<{ ok: boolean; text: string } | null>(null);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    if (data.newPassword !== data.confirmPassword) {
      setMessage({ ok: false, text: "The new passwords do not match." });
      return;
    }

    setBusy(true);
    setMessage(null);
    try {
      const res = await api<{ user: User }>("auth.php?action=account", { body: data });
      setUser(res.user);
      setMessage({ ok: true, text: "Account updated." });
      form.reset();
    } catch (err) {
      setMessage({ ok: false, text: (err as Error).message });
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="mx-auto max-w-xl">
      <h1 className="text-2xl font-semibold tracking-tight">Account</h1>
      <p className="mt-1 text-sm text-black/55">Your name is used as the default author on new posts.</p>

      <form onSubmit={submit} className="mt-6 space-y-4">
        <Card title="Profile">
          <div className="space-y-3">
            <label className="block">
              <span className="mb-1.5 block text-xs font-medium text-black/60">Name</span>
              <input name="name" defaultValue={user.name} required className={inputClass} />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs font-medium text-black/60">Sign-in email</span>
              <input name="email" type="email" defaultValue={user.email} required className={inputClass} />
            </label>
          </div>
        </Card>

        <Card title="Change password">
          <div className="space-y-3">
            <label className="block">
              <span className="mb-1.5 block text-xs font-medium text-black/60">New password (at least 10 characters)</span>
              <input name="newPassword" type="password" autoComplete="new-password" minLength={10} className={inputClass} />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs font-medium text-black/60">Confirm new password</span>
              <input name="confirmPassword" type="password" autoComplete="new-password" className={inputClass} />
            </label>
            <p className="text-xs text-black/45">Leave both empty to keep your current password.</p>
          </div>
        </Card>

        <Card>
          <label className="block">
            <span className="mb-1.5 block text-xs font-medium text-black/60">Current password (required to save changes)</span>
            <input name="currentPassword" type="password" autoComplete="current-password" required className={inputClass} />
          </label>
          {message && (
            <p className={`mt-3 rounded-lg px-3 py-2 text-sm ${message.ok ? "bg-emerald-50 text-emerald-800" : "bg-red-50 text-red-700"}`}>{message.text}</p>
          )}
          <button type="submit" disabled={busy} className={`${primaryButton} mt-4 w-full`}>
            {busy ? "Saving…" : "Save changes"}
          </button>
        </Card>
      </form>
    </div>
  );
}
