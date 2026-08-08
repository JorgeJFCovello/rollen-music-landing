# CLAUDE.md

This file provides guidance for working in this repository.

## Project overview

A static landing page for the music artist **Rollen**. It's a marketing/bio page — no backend, no CMS, no forms. The site is built as a Next.js app but compiled to plain static HTML/CSS/JS via static export, so it can be hosted on any static host (Netlify, GitHub Pages, S3, Cloudflare Pages, etc.).

## Tech stack

- **Next.js (App Router)** — statically exported (`output: "export"` in `next.config.ts`), so there is no server runtime, API routes, or SSR at deploy time.
- **TypeScript** — all components are `.tsx`.
- **React** — function components only.
- **Tailwind CSS** — utility classes for all styling; no CSS Modules or styled-components.

## Folder structure

```
src/
├── app/
│   ├── layout.tsx      # root HTML shell, global metadata, imports globals.css
│   ├── page.tsx         # home page — composes section components in order
│   └── globals.css      # Tailwind import, any global styles
└── components/
    ├── Hero.tsx          # top-of-page hero (artist name/tagline)
    ├── Music.tsx         # streaming links / release embeds
    ├── Bio.tsx           # artist bio copy
    └── Socials.tsx       # social links (Instagram, Spotify, YouTube, TikTok)

public/
└── images/               # static assets (photos, logos) referenced via /images/...
```

- `src/app/` is Next.js App Router territory — routing and page composition only. This is a single-page site, so `page.tsx` just renders the section components in order.
- `src/components/` holds the actual page sections. Each file is a self-contained section; edit the section's content and layout there.
- `public/` is served as-is at the site root (e.g. `public/images/logo.png` → `/images/logo.png`).

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to /out
```

There is no `npm start` / server deploy target — `next start` is unused since the site is statically exported. Deploy the contents of `/out` directly.

## Current page sections (in order)

1. **Hero** — artist name and tagline (placeholder content, no real copy yet)
2. **Music** — placeholder for streaming embeds/release links
3. **Bio** — placeholder for artist bio text
4. **Socials** — placeholder list of social platforms

No Tour or Contact sections by design — this site intentionally omits them.
