# SECORVIX website

Marketing site for [secorvix-ai.com](https://secorvix-ai.com), built with Next.js (App Router) and Tailwind CSS, hosted on GoDaddy Node.js Hosting.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

## Where things live

| Path | Contents |
|---|---|
| `src/app/lib/site.ts` | Site URL, navigation, **social media links**, sitemap routes |
| `src/app/lib/content.ts` | Principles, capabilities and industries copy |
| `src/app/lib/posts.ts` | Loads published blog posts from the server API at build time |
| `src/app/admin/` | Blog dashboard (`/admin/`): posts list, editor, account |
| `public/api/` | PHP API on cPanel: posts, sign-in, image upload, contact form email |
| `src/app/components/` | Navbar, Footer, shared UI (hero, section header, CTA) |
| `public/images/` | Photography (Unsplash License — free for commercial use) |
| `public/.htaccess` | Copied to the web root on every build |

`sitemap.xml`, `robots.txt` and `llms.txt` (a site summary for AI assistants) are generated on every build from `src/app/sitemap.ts`, `src/app/robots.ts` and `src/app/llms.txt/route.ts`.

## Blog dashboard

Sign in at **https://secorvix-ai.com/admin/**. Posts are stored on the server in `_data/posts.json`; uploaded images go to `uploads/`. Publishing, updating or deleting a live post starts the deploy workflow, so the change is on the site in about 3 minutes. Scheduled posts are picked up by an hourly check.

Forgot the dashboard password? Delete `_data/account.json` in cPanel File Manager; sign-in falls back to the `ADMIN_EMAIL` / `ADMIN_PASSWORD` secrets.

## Contact form

Enquiries are emailed to contact@secorvix-ai.com by `src/app/api/contact/route.ts` over SMTP. Set these in GoDaddy → Manage Secrets:

| Secret | Value |
|---|---|
| `SMTP_USER` | Sending mailbox, e.g. contact@secorvix-ai.com |
| `SMTP_PASS` | That mailbox's password |
| `SMTP_HOST` / `SMTP_PORT` | Optional. Default `smtpout.secureserver.net` / `465` (GoDaddy email). For Microsoft 365: `smtp.office365.com` / `587` |
| `CONTACT_TO` | Optional. Inbox that receives enquiries (default contact@secorvix-ai.com) |

## Deployment

The GoDaddy Node.js app is connected to the `main` branch of this repo:

1. Push changes to `main`.
2. GoDaddy → My Hosting → SECORVIX-website → **Update Preview**, then check the preview link.
3. **Publish to Live** when it looks right.

The blog dashboard and `public/api/*.php` were written for the earlier cPanel hosting and do not run on Node.js hosting. `.github/workflows/deploy.yml` (the old cPanel FTPS deploy) now only runs when started by hand.
