/**
 * Every image slot on the site, in one place.
 *
 * Paths resolve against `public/`, so `/images/hero-packaging.svg` means
 * `public/images/hero-packaging.svg`. Drop a file at that path and it appears —
 * no code change. Until then `<Img>` renders a branded placeholder.
 *
 * ponytail: every slot ships filled with a vector illustration drawn in the
 * brand palette, so no panel is ever blank. To move a slot to photography,
 * drop the `.webp` in beside it and change the extension on that one line.
 *
 * IMAGES.md holds the generation prompt and target size for each slot.
 */
export const img = {
  heroHome: {
    src: '/images/hero-packaging.svg',
    alt: 'White and black poly courier bags, kraft mailers, a corrugated carton, tape rolls and a roll of bubble wrap arranged together',
  },
  heroAbout: {
    src: '/images/about-hero.svg',
    alt: 'Stacked corrugated cartons and courier bags on a shelf beside a potted plant',
  },
  heroProducts: {
    src: '/images/products-hero.svg',
    alt: 'Poly courier bags, kraft mailers and cartons grouped beside a leafy plant',
  },
  heroIndustries: {
    src: '/images/industries-hero.svg',
    alt: 'Packing bench where staff seal courier bags and cartons for dispatch',
  },
  heroContact: {
    src: '/images/contact-hero.svg',
    alt: 'Packing station with cartons, courier bags, tape rolls and a clipboard ready for dispatch',
  },
  partner: {
    src: '/images/trusted-partner.svg',
    alt: 'Hand trolley loaded with sealed cartons and courier parcels ready for dispatch',
  },
  warehouse: {
    src: '/images/warehouse.svg',
    alt: 'Cartons and courier parcels stacked on pallets across a lit distribution warehouse',
  },
  ctaBanner: {
    src: '/images/cta-banner.svg',
    alt: 'Sealed corrugated cartons and courier parcels grouped beside a potted plant',
  },
} as const

export type ImgSlot = (typeof img)[keyof typeof img]

/** Pack-shot for a product category, by slug. */
export const productImage = (slug: string, name: string) => ({
  src: `/images/products/${slug}.svg`,
  alt: `${name} supplied by Bhagwati Primepack`,
})

/** Scene for an industry, by slug. */
export const industryImage = (slug: string, name: string) => ({
  src: `/images/industries/${slug}.svg`,
  alt: `Packaging in use across the ${name} sector`,
})
