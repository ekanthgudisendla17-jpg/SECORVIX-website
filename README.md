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
| `src/app/lib/posts.ts` | Blog articles (add a new object to publish a post) |
| `src/app/components/` | Navbar, Footer, shared UI (hero, section header, CTA) |
| `public/images/` | Photography (Unsplash License — free for commercial use) |
| `public/.htaccess` | Copied to the web root on every build |

`sitemap.xml` and `robots.txt` are generated from `src/app/sitemap.ts` and `src/app/robots.ts`.

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and uploads `out/` to the cPanel `public_html` folder over FTPS. Credentials are stored as the repository secrets `FTP_SERVER`, `FTP_USERNAME` and `FTP_PASSWORD`.
