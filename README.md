# Bhagwati Primepack

Marketing website for **Bhagwati Primepack** — premium packaging solutions and supply partner.

Built from `Claude Design.png` (the brief), `Design.png` (the layout comps) and `Logo.jpeg`
(the identity). The comps carry the previous **Bhagwati Trading** name; everything shipped here
is rebranded to **Bhagwati Primepack** per `Logo.jpeg`.

## Stack

React 19 · TypeScript (strict) · Vite 8 · Tailwind CSS v4 · React Router v7 ·
Framer Motion · lucide-react · React Hook Form + Zod

## Commands

```bash
npm install
npm run dev           # http://localhost:5173
npm run build         # typecheck + production build to dist/
npm run preview       # serve the production build
npm run test          # node:test — catalogue search + data integrity
npm run lint          # oxlint
npm run format        # prettier --write .
npm run check:images  # list photo slots that still have no file
```

## Structure

```
src/
  data/          site.ts, products.ts, industries.ts, images.ts — all copy, catalogue and photo paths
  components/    Logo, Navbar, Footer, Layout, Img, cards, form, SEO
  pages/         Home, About, Products, Industries, Contact, Legal, NotFound
  index.css      Tailwind v4 @theme — brand tokens live here, not in a JS config
public/          favicon, robots.txt, sitemap.xml, _redirects, images/
```

Routes: `/`, `/about`, `/products`, `/industries`, `/contact`, `/privacy-policy`, `/terms`,
plus a catch-all 404. Home ships in the main bundle; every other route is code-split, and the
contact form (React Hook Form + Zod, ~36 kB gzip) is split again so only `/contact` pays for it.

## Images

Every photo slot points at a fixed path under `public/images/`. Drop a file there and it
appears — no code change. Until then `<Img>` renders a branded cream placeholder, so the
layout never breaks on a missing file.

**[IMAGES.md](./IMAGES.md) lists all 28 slots with a generation prompt and target size for
each**, plus the shared house-style preamble that keeps the set looking like one shoot.
`npm run check:images` reports which are still empty.

## Brand

Colours are defined once in `src/index.css` under `@theme`:

| Token                 | Hex                   | Use                     |
| --------------------- | --------------------- | ----------------------- |
| `maroon`              | `#6B2C1F`             | Primary                 |
| `maroon-dark`         | `#4A1F17`             | Dark sections, headings |
| `cream`               | `#F7EEDB`             | Section backgrounds     |
| `cream-light`         | `#FCF8F0`             | Page background         |
| `ink`                 | `#4B403A`             | Body text               |
| `muted`               | `#7A6F68`             | Secondary text          |
| `gold` / `gold-light` | `#C08D55` / `#D8AB77` | Logo mark and hairlines |

Gold is **not** in the brief's seven-colour palette — it comes from `Logo.jpeg`, where the
`PRIMEPACK` wordmark and the orbit swoosh are gold. It is scoped to the logo and small accents.
Drop `--color-gold*` from `@theme` if you want a strict seven-colour build.

The logo is vector, not a bitmap: `src/components/Logo.tsx` redraws `Logo.jpeg` as SVG
(`<LogoMark>`, `<Logo>`) so it stays crisp and recolours for maroon sections.
`public/favicon.svg` is the same mark. If the client supplies the original vector artwork,
replace the paths in that one file.

## Before launch

1. **Photography** — all 28 slots are empty; the site currently shows placeholders. See
   [IMAGES.md](./IMAGES.md) and run `npm run check:images`.
2. **Contact details** — `src/data/site.ts` carries placeholder phone, email and address taken
   from the comp. Replace them with the client's verified details; they feed the header, footer,
   contact page, WhatsApp button and the `Organization` JSON-LD.
3. **Form endpoint** — the form POSTs JSON to `VITE_ENQUIRY_ENDPOINT`. Create a `.env.local`
   with e.g. `VITE_ENQUIRY_ENDPOINT=https://formspree.io/f/xxxx`. Until it is set, the form
   validates correctly but shows its error state on submit.
4. **Terms & Conditions** — `/terms` is a stub pending the client's trading terms. `/privacy-policy`
   describes what the site actually does but should still be reviewed before launch.
5. **Domain** — `site.url` in `src/data/site.ts`, plus `public/sitemap.xml` and
   `public/robots.txt`, all assume `https://www.bhagwatiprimepack.in`.
6. **Social links** — the footer icons point at bare platform URLs; swap in the real profiles.

## Notes

- SEO meta is native React 19 document metadata (`<title>`/`<meta>` hoist to `<head>`), so there
  is no Helmet dependency. JSON-LD: `Organization` site-wide, `FAQPage` on the home page.
- Accessibility: skip link, visible focus rings, labelled form fields with `role="alert"` errors,
  `aria-live` regions for search results and submit status, a native `<details>` FAQ accordion,
  and a `prefers-reduced-motion` override that disables all animation.
- `_redirects` covers SPA history fallback on Netlify. On Vercel/Apache/nginx add the equivalent
  rewrite, or deep links such as `/products` will 404 on refresh.
