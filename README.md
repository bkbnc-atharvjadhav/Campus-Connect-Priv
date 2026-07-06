# Campus Connect — Marketing Website

A premium, multi-page SaaS marketing website for Campus Connect, the AI-powered campus
operating system. Built with React, TypeScript, Tailwind CSS and Framer Motion, following a
single consistent design system across every page.

## Getting Started

```bash
npm install
npm run dev
```

The site runs at `http://localhost:5173`.

To build for production:

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/
    layout/     Navbar, Footer, Layout, LegalLayout
    ui/         Design-system primitives (Button, GlassCard, Section, PageHero, etc.)
    sections/   Reusable page sections (CTASection)
  data/         Shared content (nav links, core modules)
  lib/          SEO utilities (document head / Open Graph / JSON-LD)
  pages/        One file per route (Home, Platform, Solutions, About, Careers,
                Contact, BookDemo, Security, Press, Privacy, Terms, Cookies, NotFound)
```

## Design System

- **Colors:** Primary `#2563EB`, Secondary `#4F46E5`, Accent `#06B6D4`, Dark `#0B1120`
- **Type:** Manrope (display, 600–800) + Inter (body, 400–600)
- **Components:** Glassmorphism cards, 24px card radius, 16px button radius, soft shadows,
  gradient borders, subtle mesh-gradient backgrounds
- **Motion:** Framer Motion scroll reveals, staggered card entrances, hover lift, a fixed
  scroll-progress bar, and a reduced-motion fallback in `index.css`

## Notes & Next Steps

- The spec referenced an "existing homepage" — since no file for it was provided, `Home.tsx`
  was built from scratch using the exact design tokens and section list from the brief so it's
  ready to swap for your real homepage, or to keep as-is.
- Forms (Contact, Book Demo) are front-end only; wire the `onSubmit` handlers up to your
  backend, form service, or Calendly embed.
- Replace the Google Maps and Calendly placeholders with real embeds when you have API keys.
- Founder/team images are placeholders (icon avatars) — drop in real photos when ready.
- Run `npm install` on your machine to fetch dependencies — this environment has no network
  access, so packages could not be pre-installed here.
