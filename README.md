# India GCC Show 2027

Marketing site for **India GCC Show 2027** (8-9 June 2027, Bengaluru).
Built with Next.js 16 (App Router, Cache Components, Turbopack), React 19, Tailwind CSS v4, Motion and Zod.

Layout and navigation follow rakisummit.com (two-tier header, centred nav with dropdowns, card footer).
Section patterns borrow from londonbiotechshow.com (hero stat strip, numbered sector cards, profile ticker, FAQ).
Colours come from the official logo.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (static prerender of every route)
npm run start
npm run lint
```

> Don't run `npm run build` while `npm run dev` is running. They share `.next/` and can corrupt each other's cache.

Optional env: `NEXT_PUBLIC_SITE_URL=https://your-domain` (used for canonical URLs, sitemap and Open Graph).

## Folder structure

```
public/
  brand/                      Official logo (web copy) + GCC mark
    source/                   Untouched original logo artwork
  images/                     Section photography (WebP)
  videos/                     Hero background loop

src/
  app/                        Routes (App Router)
    layout.tsx                Fonts, metadata, header, footer
    page.tsx                  Home page (composes the home sections)
    globals.css               Design tokens (@theme) + brand utilities
    not-found.tsx, sitemap.ts, robots.ts, icon.png, apple-icon.png
    about/ conference/ exhibition/ sponsors/ partners/ news/ contact/ ...
                              One folder per page. Unbuilt pages render <UnderConstruction />

  config/                     Single source of truth
    site.ts                   Event facts, contact details, socials, header partners, stats
    routes.ts                 Route registry (path, title, description, live/building)
    navigation.ts             Main nav, footer columns, legal links

  content/
    home.ts                   All home-page copy (edit text here, not in components)

  components/
    layout/                   header/ (top bar, nav, dropdown, mobile menu), footer/, social-rail
    sections/home/            One file per home-page section
    ui/                       Primitives: button, container, section-heading, accordion, marquee
    motion/                   Reveal / RevealGroup / CountUp animation helpers
    shared/                   Logo, ribbon motif, social icons, under-construction, JSON-LD

  hooks/                      useCountdown, useScrolled
  lib/                        utils (cn), seo (pageMetadata), validations/ (zod schemas)
  server/actions/             Server actions for forms (register interest, newsletter)
```

## Common tasks

| Task | Where |
| --- | --- |
| Change colours / fonts | `src/app/globals.css` `@theme` block. Components only use tokens (`bg-navy`, `text-saffron`, ...). |
| Update dates, venue, email, phone, WhatsApp | `src/config/site.ts` (`EVENT`, `CONTACT`). Empty values show "to be announced". |
| Show social icons (floating rail + footer) | Fill the `href`s in `SOCIAL_LINKS` in `src/config/site.ts`. |
| Show sponsor logos in the header (like "Hosted By") | Add logos to `public/partners/` and list them in `HEADER_PARTNERS`. Replaces the event-facts strip. |
| Edit home page text | `src/content/home.ts` |
| Build a real page | Replace the `<UnderConstruction />` in `src/app/<route>/page.tsx`, then set that route's `status` to `"live"` in `src/config/routes.ts`. It will then appear in the sitemap and become indexable. |
| Add a nav item | Add it to `ROUTES`, then reference it in `MAIN_NAV` / `FOOTER_COLUMNS`. |
| Wire the forms to a CRM | `src/server/actions/forms.ts` (see the `TODO(integration)`). Submissions are only validated and logged for now. |

## Enquiry links

"Exhibitor Enquiry", "Speaker Enquiry", "Request Brochure" and similar links point to `/#register-<role>`.
They scroll to the Register Interest form on the home page with the "I am a" field preselected (see `interestLink()` in `config/routes.ts`).

## Content still to confirm

- Venue name (`EVENT.venue`)
- Public contact email, phone and WhatsApp (`CONTACT`)
- Social profile URLs (`SOCIAL_LINKS`)
- Delegate pass pricing (FAQ answer in `content/home.ts`)
- Speakers and partner logos (sections show "announcing soon" slots until then)

## Media credits

- Photos: Pexels (free licence). Hero video: Mixkit "Audience raise hands at business conference" (Mixkit free licence).
  Swap in real event photography when available (same file names in `public/images/`).
