# Image slots

Every image on the site reads from a fixed path under `public/images/`. Drop a file at the
path and it appears on the next reload — no code change. Until a file exists, `<Img>` renders
a branded cream placeholder, so nothing breaks.

**Every slot is currently filled** with a vector illustration (`.svg`) drawn in the brand
palette, courier-bag forward to match the core business. No panel is blank. To move a slot to
photography, drop the `.webp` in beside it and change that one extension in
`src/data/images.ts` — the prompts below still describe what each slot should show. The
`.svg` extension is what the site asks for today, so the `.webp` filenames in the tables
below are the _target_ names once photography replaces the drawings.

Slot paths are declared in `src/data/images.ts`.

## Format

- **WebP**, quality ~80.
- Sizes below are the minimum; larger is fine, the browser scales down.
- Keep everything on the same warm cream backdrop so the set reads as one shoot.

## House style (prepend to every prompt)

> Professional commercial product photography for a premium Indian packaging supplier.
> Warm cream background (#F7EEDB), soft diffused daylight from the upper left, gentle contact
> shadows, shallow depth of field, muted natural palette of kraft brown, cream and white with
> deep maroon accents. Clean, uncluttered, editorial. No text, no logos, no brand names,
> no watermarks, no people's faces in close-up.

## Slots

| File                          | Size      | Prompt                                                                                                                                                                                                                                                                                                 |
| ----------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `images/hero-packaging.webp`  | 1600×1200 | A grouped arrangement of packaging: a large kraft carton, a roll of bubble wrap standing upright, two kraft bubble mailers, a white and a black poly courier bag, three tape rolls, a label roll, and a small potted plant at the right edge. Shot straight on, everything standing on a pale surface. |
| `images/about-hero.webp`      | 1400×1000 | Three stacked kraft corrugated cartons of different sizes on a light wooden shelf, a leafy potted plant behind them, soft curtain-filtered daylight, calm and airy.                                                                                                                                    |
| `images/products-hero.webp`   | 1400×1000 | Two kraft cartons stacked with a white poly mailer leaning against them, a tall green plant behind and a small succulent in front, pale studio backdrop.                                                                                                                                               |
| `images/industries-hero.webp` | 1400×800  | Wide shot of a bright packing area: workers in aprons sealing kraft cartons along a long bench, seen from mid-distance, faces not in focus.                                                                                                                                                            |
| `images/contact-hero.webp`    | 1400×800  | A packing station corner: sealed kraft cartons, two tape rolls on their side, paper bags and a clipboard, warm light from a window at the right.                                                                                                                                                       |
| `images/trusted-partner.webp` | 1000×1000 | Square crop. A delivery worker in a plain uniform lifting a stack of taped kraft cartons onto a hand trolley outside a shuttered warehouse, greenery behind.                                                                                                                                           |
| `images/warehouse.webp`       | 1400×1050 | Interior of a tidy distribution warehouse, kraft cartons stacked on pallets and steel racking receding into the background, overhead lighting.                                                                                                                                                         |
| `images/cta-banner.webp`      | 1600×700  | Wide banner. A loose group of sealed kraft cartons of mixed sizes with a potted plant at the right, lit warmly, plenty of empty space on the left third for text overlay.                                                                                                                              |

## Product cards — `public/images/products/<slug>.svg`

**These nine are already drawn** as brand-palette vector pack-shots (1200×900), so every
product card has art today. To replace one with photography, drop the `.webp` in beside it and
switch the extension in `productImage()` in `src/data/images.ts` — prompts below still apply.

1200×900 (4:3). Single product group floating on the cream backdrop, centred, generous margin.

| File                            | Prompt                                                                                        |
| ------------------------------- | --------------------------------------------------------------------------------------------- |
| `courier-mailing-bags.webp`     | One white and one black poly courier bag, slightly overlapping, standing upright.             |
| `tamper-evident-packaging.webp` | A black security courier bag and a clear tamper-evident pouch with a visible seal strip.      |
| `bubble-packaging.webp`         | Three golden-kraft bubble mailers fanned out flat, quilted bubble texture catching the light. |
| `kraft-packaging.webp`          | Two kraft paper mailers and a folded kraft paper wrap, natural brown, matte finish.           |
| `corrugated-boxes.webp`         | A large and a small kraft corrugated carton, closed and taped, three-quarter view.            |
| `packaging-tapes.webp`          | Three rolls of brown BOPP packing tape stacked in a loose pyramid.                            |
| `shipping-labels.webp`          | A roll of blank white thermal labels and a short fanfold stack beside a small carton.         |
| `industrial-packaging.webp`     | A roll of clear stretch film, a coil of strapping and a heavy-duty liner on a pallet corner.  |
| `custom-packaging.webp`         | An open kraft carton with tissue and a branded-blank kraft mailer beside it, unboxing feel.   |

## Industry tiles — `public/images/industries/<slug>.webp`

1200×900 (4:3). Scene photography rather than pack shots; keep the warm palette.

| File                           | Prompt                                                                           |
| ------------------------------ | -------------------------------------------------------------------------------- |
| `e-commerce.webp`              | Kraft parcels stacked on a small electric trolley in a fulfilment aisle.         |
| `retail.webp`                  | Kraft shopping bags and small cartons arranged on a retail counter with a plant. |
| `fmcg.webp`                    | Workers packing consumer-goods cartons at a bench in a bright facility.          |
| `pharmaceuticals.webp`         | Sealed white cartons and tamper-evident pouches on a clean clinical bench.       |
| `logistics.webp`               | Cartons stacked on pallets beside a loading bay, forklift out of focus behind.   |
| `manufacturing.webp`           | Industrial workbench with machined parts being wrapped in protective film.       |
| `industrial.webp`              | Heavy strapped cartons on a pallet in a factory yard.                            |
| `banking.webp`                 | Sealed tamper-evident document pouches on a desk with a ledger.                  |
| `wholesale-distribution.webp`  | Long aisle of bulk cartons on racking in a wholesale warehouse.                  |
| `corporate-institutional.webp` | Neat stack of plain branded-blank cartons in an office mail room.                |

## Also needed

- `public/og-image.png` — 1200×630. Social share card: the hero arrangement on cream with room
  at the left for the wordmark. Referenced by the SEO tags in `src/components/Seo.tsx`.

## Checking your work

After dropping files in, run `npm run check:images` to list which slots are still empty.
