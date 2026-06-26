# BookLatch

The all-in-one **venue management** platform — a high-performance, SEO-optimized marketing site built with **Next.js (App Router)**.

Venue owners can track customers, confirm bookings, send notifications, receive payments, manage calendars & individual spaces, control pricing, invoice, manage staff, handle enquiries, and track bookings & revenue with analytics.

## Tech stack

- **Next.js 15** (App Router) — statically generated (SSG) for excellent Core Web Vitals & SEO
- **React 19**
- **Tailwind CSS v4** with `tw-animate-css`
- **motion** (Framer Motion) for animations
- **Recharts** for analytics charts (lazy-loaded below the fold)
- **shadcn/ui** primitives (new-york) + **lucide-react** icons
- **next-themes** for dark/light mode
- **sonner** for toasts

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

## Scripts

| Command         | Description                         |
| --------------- | ----------------------------------- |
| `npm run dev`   | Start the dev server on port 3000   |
| `npm run build` | Production build (static prerender) |
| `npm run start` | Serve the production build          |
| `npm run lint`  | Lint with `eslint-config-next`      |

## Project structure

```
src/
  app/
    layout.tsx        # Root layout, fonts, SEO metadata, theme provider
    page.tsx          # Landing page (composes the sections + JSON-LD)
    globals.css       # Tailwind v4 theme tokens, animations, utilities
  components/
    landing/          # Hero, Features, Pricing, Analytics, FAQ, etc.
    ui/               # shadcn/ui components (button, accordion, sonner)
    theme-provider.tsx
    ThemeToggle.tsx
  lib/utils.ts        # cn() helper
public/
  robots.txt, sitemap.xml, manifest.json
```

## Adding more UI components

This project keeps only the shadcn/ui components currently in use. Add more anytime:

```bash
npx shadcn@latest add dialog table tabs calendar
```

## SEO & performance

- Statically prerendered home route (`○ Static`) for instant TTFB
- Open Graph + Twitter cards, canonical URL, JSON-LD `SoftwareApplication`
- `robots.txt` and `sitemap.xml` served from `public/`
- Heavy chart library is code-split and lazy-loaded; initial JS kept lean
- Respects `prefers-reduced-motion`

> Note: add an Open Graph image at `public/og.png` (1200×630) for richer social previews.
