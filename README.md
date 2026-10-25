# SECORVIX website

Marketing site for [secorvix-ai.com](https://secorvix-ai.com), built with Next.js (App Router) and Tailwind CSS, exported as static HTML.

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

Contact form enquiries are emailed to contact@secorvix-ai.com by `public/api/contact.php`.

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and uploads `out/` to the cPanel `public_html` folder over FTPS. Repository secrets:

| Secret | Purpose |
|---|---|
| `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD` | FTPS upload |
| `ADMIN_EMAIL`, `ADMIN_PASSWORD` | First dashboard login (can be changed later under Account) |
| `GH_DISPATCH_TOKEN` | Fine-grained GitHub token with **Actions: Read and write** on this repo, so the dashboard can start a deploy |

The workflow writes `api/config.php` from these secrets during the build; it is never committed.
