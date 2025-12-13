Farouk Chebaiki — Portfolio (Next.js)
====================================

Clean, fast, and accessible developer portfolio built with Next.js 16 (App Router), React 19, Tailwind CSS v4, and TypeScript. Includes projects, an About page with a contributions heatmap, a DEV.to-powered blog, and a contact form powered by Resend.

- Live: https://www.farouk.uk
- License: MIT

Features
- App Router with per‑page SEO metadata, OG/Twitter cards, sitemap and robots
- Fully responsive UI, light/dark theme via next-themes and CSS tokens
- Projects grid with featured project, slide‑over detail view, and badges
- DEV.to blog integration with infinite scroll + mobile slide‑over reader
- About page with GitHub contributions heatmap and responsive layout
- Tech stack marquee with draggable/pause/reverse controls
- Contact form API route with basic validation and Resend email delivery
- Analytics via @vercel/analytics and performance via @vercel/speed-insights

Stack
- Next.js 16 (Turbopack), React 19, TypeScript
- Tailwind CSS v4 + CSS variables theme in `app/globals.css`
- lucide-react icons, Radix UI primitives (popover), class-variance-authority
- Biome for linting/formatting

Project Structure
- `app/`: routes and page layouts (App Router)
  - `/` home: Hero, FeaturedProjects, LatestPosts, TechStack, ContactStrip
  - `/about`: intro, timeline, and GitHub contributions heatmap
  - `/projects`: projects grid + slide‑over detail panel
  - `/blog`: DEV.to list with infinite scroll, `/blog/[id]` article page
  - `/contact`: contact details and CTA
  - `/privacy`, `/sitemap.xml`, `/robots.txt`
- `app/components/`: UI blocks (home, projects, blog, about, navbar, footer)
- `components/ui/`: small reusable UI primitives (Button, Popover)
- `lib/site.ts`: central content/config (brand, socials, about, projects)
- `public/`: static assets (e.g., `profile.png`, project images)
- `next.config.ts`: image domains and Next.js settings

Quick Start
1) Prereqs
- Node.js 20.9+ (or 22+). Package manager: npm, pnpm, or yarn.

2) Install & run
```bash
# install deps
npm i # or: pnpm i / yarn

# start dev server
npm run dev

# build and run production
npm run build && npm run start
```

Configuration (Edit These First)
- `lib/site.ts`: update everything under `siteConfig`.
  - `brandName`, `email`, `social` links
  - `hero` heading/subheading/profile image
  - `contactCta` copy and links
  - `about` intro, what I do, and `stack` icons list
    - For icons you can use `https://cdn.simpleicons.org/<name>` URLs or drop SVG/PNG files under `public/icons/stack` and reference them as `/icons/stack/<file>.svg`.
  - `projects`: list of projects. Put thumbnails under `public/images/projects/` and point `image` to that path.

- `next.config.ts`: remote image domains for Next/Image.
  - Add any new external image hosts here when using `<Image />`.
  - For small SVG brand icons use plain `<img />` instead of `<Image />` to avoid SVG restrictions. This repo already does that for stack logos.

- Theming: `app/globals.css`
  - Theme tokens live as CSS variables under `:root` (light) and `.dark` (dark).
  - Tailwind v4 maps tokens via `@theme inline`. Change colors once, classes update everywhere.

Blog (DEV.to Integration)
- Set your DEV.to username in `lib/site.ts` → `devtoUsername`.
- The blog list fetches from `https://dev.to/api/articles` and supports infinite scroll.
- Desktop opens `/blog/[id]` pages; mobile uses a slide‑over reader.

Contact Form (Resend)
- API route: `app/api/contact/route.ts`.
- Required environment variables (set locally and in your host, e.g., Vercel):
  - `RESEND_API_KEY` — your Resend API key
  - `RESEND_FROM` — verified sender (e.g., "Portfolio <noreply@yourdomain>")
  - `RESEND_TO` — where to receive form submissions
- Behavior: validates fields, honeypot to deter bots, sends both text and HTML.

Developer Tips (for Junior Contributors)
- Client vs Server Components
  - If a component uses state, effects, `window`, or browser‑only libraries, add `"use client"` at the top.
  - The DEV.to blog list and contributions heatmap are client components.

- Images
  - Use Next `<Image />` for photos and remote images (configure hosts in `next.config.ts`).
  - Use `<img />` for tiny SVG logos (e.g., Simple Icons) to keep it simple.

- Styling & Theme
  - Prefer Tailwind utility classes. Theme tokens: `bg-background`, `text-foreground`, `border-border`, `bg-card`, `text-muted-foreground`, etc.
  - Dark mode is controlled by the `.dark` class via next-themes. Tokens automatically adapt.

- Content Updates
  - Edit `lib/site.ts` only — it drives About, Projects, and global metadata.
  - Add project images to `public/images/projects/`.

- Lint/Format
```bash
npm run lint    # biome check
npm run format  # biome format --write
```

Deploy (Vercel Recommended)
1) Push to GitHub.
2) Import the repo in Vercel.
3) Add environment variables for the contact form.
4) Set a production domain (optional). Vercel will provide preview URLs for PRs.

Troubleshooting
- Icons not showing on About/Tech Stack
  - Prefer `<img src="https://cdn.simpleicons.org/..." />`. For `<Image />` + external SVGs you must set `images.dangerouslyAllowSVG: true` and a strict CSP.

- External images 404 in Next/Image
  - Add the host to `remotePatterns` in `next.config.ts`, then rebuild.

- DEV.to rate limits or CORS
  - The blog uses client‑side fetch to DEV.to. If you see transient errors, retry or switch networks; the UI shows an error message when fetch fails.

- Contact form returns "Email is not configured"
  - Ensure `RESEND_API_KEY`, `RESEND_FROM`, and `RESEND_TO` are set in your environment or Vercel project settings.

Contributing
- Issues: please file clear, reproducible reports.
- PRs: fork → feature branch → small, focused changes.
- Before pushing: run `npm run lint` and `npm run format`.
- For UI changes, attach screenshots (light/dark) when possible.

License
- MIT © 2025 Farouk Chebaiki — see `LICENSE` for details.
