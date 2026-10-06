# GSMH — gsmh.ca

Bilingual (FR/EN) website for Golden Square Mile Hospitalité. Next.js (App Router), TypeScript, Tailwind CSS. Design: "Maison" (Design 1, chosen by the client on 2026-10-01).

- `/` redirects to `/fr`. Every page exists in French and English: `/fr/principes` ↔ `/en/principles`, etc.
- Old gsmh.ca URLs (`/about`, `/people`, `/contact-us`, …) redirect to the new pages with a single 301 (`lib/redirects.ts`, applied by `proxy.ts`).

## Run it

```bash
npm install
npm run build   # also writes sitemap.xml and robots.txt
npm start       # http://localhost:3000 (or $PORT)
```

On Replit: build command `npm run build`, run command `npm start` (already set in `.replit`).

## How to edit text / photos

| To change… | Edit this file |
|---|---|
| Any sentence on the site (both languages) | `lib/content.ts` — French under `fr`, English under `en`. Change both. |
| Page titles and Google descriptions | `lib/metadata.ts` |
| Address, phone, email, links to Le Pois Penché / Tropé | `lib/site.ts` |
| A photo | Put the new JPEG in `public/images/<page>/`, then change its path (and alt text) in `lib/images.ts` |
| Blog posts listed on /fr/blogue | `lib/blog.ts` — add a line at the top (date, title, link) |
| Page URLs or the menu order | `lib/routes.ts` |
| Colours and fonts | `app/globals.css` (colours) and `app/[lang]/layout.tsx` (fonts) |

After changing a page photo used for social sharing, run `npm run og` to remake the 1200×630 share images in `public/images/og/`.

Photos should be landscape with the subject in the centre: phones crop the sides.

## Where things are

```
app/[lang]/layout.tsx        page frame: fonts, header, footer, intro animation, Organization JSON-LD
app/[lang]/page.tsx          home
app/[lang]/[slug]/page.tsx   every other page (picks the right component from the URL)
components/                  Header, Footer, PageHero, ContactBlock, FaqList, Intro, Motion…
components/pages/            one file per page
lib/                         content, routes, metadata, images, site details, JSON-LD (schema.ts), redirects
```
