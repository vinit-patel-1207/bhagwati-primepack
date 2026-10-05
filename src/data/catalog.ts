// Generated from the reference catalogue crawl; edit freely by hand.
// Each item belongs to a category in ./products.ts and carries its own size chart.

export type SizeRow = {
  code?: string
  size: string
  variant?: string
  thickness?: string
  /** Pack quantities (pieces / rolls) the item is sold in. */
  packs: number[]
}

export type CatalogItem = {
  slug: string
  name: string
  /** Slug of the parent category in products.ts. */
  category: string
  summary: string
  description: string
  features: string[]
  specs: { label: string; value: string }[]
  images: string[]
  sizes: SizeRow[]
}

export const catalog: CatalogItem[] = [
  {
    slug: 'myntra-barcode-poly-bags',
    name: 'Myntra Barcode Poly Bags',
    category: 'courier-mailing-bags',
    summary: 'Barcoded MPP-series bags to Myntra dispatch spec',
    description:
      'Opaque co-extruded poly bags printed with the MPP-series barcode Myntra requires on seller dispatches. White outside, black inside, with a permanent self-seal strip that tears the film if anyone tries to reopen it.',
    features: [
      'Pre-printed MPP size barcode',
      'White/black co-extruded, fully opaque',
      'Permanent hot-melt seal — tamper evident',
      'Waterproof and tear resistant',
    ],
    specs: [
      {
        label: 'Thickness',
        value: '52 micron',
      },
      {
        label: 'Material',
        value: 'Co-extruded LDPE',
      },
      {
        label: 'Closure',
        value: 'Permanent self-adhesive',
      },
      {
        label: 'Print',
        value: 'Myntra MPP barcode',
      },
    ],
    images: [
      '/images/catalog/myntra-barcode-poly-bags-1.jpg',
      '/images/catalog/myntra-barcode-poly-bags-2.jpg',
      '/images/catalog/myntra-barcode-poly-bags-3.jpg',
      '/images/catalog/myntra-barcode-poly-bags-4.jpg',
    ],
    sizes: [
      {
        code: 'MPP1',
        size: '6.5 × 7.5 in',
        packs: [500, 1000, 2000, 2500, 5000, 10000, 20000, 50000, 100000],
      },
      {
        code: 'MPP2',
        size: '8 × 10 in',
        packs: [500, 1000, 2000, 2500, 5000, 10000, 20000, 50000, 100000],
      },
      {
        code: 'MPP2.5A',
        size: '8.5 × 11.5 in',
        packs: [500, 1000, 2000, 2500, 5000, 10000, 20000, 50000, 100000],
      },
      {
        code: 'MPP2.5B',
        size: '9.5 × 12.5 in',
        packs: [500, 1000, 2000, 2500, 5000, 10000, 20000, 50000, 100000],
      },
      {
        code: 'MPP3',
        size: '10 × 14 in',
        packs: [500, 1000, 2000, 2500, 5000, 10000, 20000, 50000, 100000],
      },
      {
        code: 'MPP4',
        size: '11.5 × 14 in',
        packs: [500, 1000, 2000, 2500, 5000, 10000, 20000, 50000, 100000],
      },
      {
        code: 'MPP5',
        size: '14 × 16 in',
        packs: [500, 1000, 2000, 2500, 5000, 10000, 20000, 50000, 100000],
      },
      {
        code: 'MPP6',
        size: '15 × 17.5 in',
        packs: [500, 1000, 2000, 2500, 5000, 10000, 20000, 50000, 100000],
      },
      {
        code: 'MPP7',
        size: '17 × 20 in',
        packs: [500, 1000, 2000, 2500, 5000, 10000, 20000, 50000, 100000],
      },
      {
        code: 'MPP8',
        size: '19 × 22 in',
        packs: [500, 1000, 2000, 2500, 5000, 10000, 20000, 50000, 100000],
      },
      {
        code: 'MPP9',
        size: '23 × 31 in',
        packs: [500, 1000, 2000, 2500, 5000, 10000, 20000, 50000, 100000],
      },
    ],
  },
  {
    slug: 'shopsy-security-bags',
    name: 'Shopsy Security Bags',
    category: 'courier-mailing-bags',
    summary: 'Double-seal SSB bags for Shopsy sellers',
    description:
      'SSB-series security bags with a double seal strip — one to close the order, a second to reseal returns — sized to the Shopsy dispatch chart.',
    features: [
      'Double seal: dispatch + return',
      'SSB size codes printed',
      'Opaque, waterproof film',
      'Tamper-evident adhesive',
    ],
    specs: [
      {
        label: 'Thickness',
        value: '52 micron',
      },
      {
        label: 'Material',
        value: 'Co-extruded LDPE',
      },
      {
        label: 'Closure',
        value: 'Double permanent seal',
      },
    ],
    images: [
      '/images/catalog/shopsy-security-bags-1.jpg',
      '/images/catalog/shopsy-security-bags-2.jpg',
      '/images/catalog/shopsy-security-bags-3.jpg',
      '/images/catalog/shopsy-security-bags-4.jpg',
    ],
    sizes: [
      {
        code: 'SSB0',
        size: '6 × 7 in',
        packs: [500, 1000, 5000, 10000, 25000, 50000],
      },
      {
        code: 'SSB1',
        size: '8.5 × 11 in',
        packs: [500, 1000, 5000, 10000, 25000, 50000],
      },
      {
        code: 'SSB2',
        size: '10 × 13 in',
        packs: [500, 1000, 5000, 10000, 25000, 50000],
      },
      {
        code: 'SSB3',
        size: '12.5 × 15 in',
        packs: [500, 1000, 5000, 10000, 25000, 50000],
      },
      {
        code: 'SSB3',
        size: '14 × 18 in',
        packs: [500, 1000, 5000, 10000, 25000, 50000],
      },
      {
        code: 'SSB4',
        size: '16 × 20 in',
        packs: [500, 1000, 5000, 10000, 25000, 50000],
      },
      {
        code: 'SSB5',
        size: '20 × 23 in',
        packs: [500, 1000, 5000, 10000, 25000, 50000],
      },
    ],
  },
  {
    slug: 'meesho-transparent-bags-no-pod',
    name: 'Meesho Transparent Poly Bags (No POD)',
    category: 'courier-mailing-bags',
    summary: 'Clear TP-series bags, no document pocket',
    description:
      'Transparent TP-series poly bags for Meesho orders. Contents and the invoice stay visible through the film, so checks at pickup are quick, and the permanent seal shows if the bag is opened.',
    features: [
      'Crystal-clear film for visible contents',
      'Meesho TP size codes',
      'Permanent tamper-evident seal',
      'Lightweight — keeps courier slab low',
    ],
    specs: [
      {
        label: 'Thickness',
        value: '52 micron',
      },
      {
        label: 'Material',
        value: 'Transparent LDPE',
      },
      {
        label: 'Closure',
        value: 'Permanent self-adhesive',
      },
      {
        label: 'POD pocket',
        value: 'No',
      },
    ],
    images: [
      '/images/catalog/meesho-transparent-bags-no-pod-1.jpg',
      '/images/catalog/meesho-transparent-bags-no-pod-2.jpg',
      '/images/catalog/meesho-transparent-bags-no-pod-3.jpg',
      '/images/catalog/meesho-transparent-bags-no-pod-4.jpg',
    ],
    sizes: [
      {
        code: 'TP1',
        size: '6.5 × 8 in',
        packs: [25, 100, 500, 1000, 5000, 10000, 25000, 50000],
      },
      {
        code: 'TP2',
        size: '8 × 10 in',
        packs: [25, 100, 500, 1000, 5000, 10000, 25000, 50000],
      },
      {
        code: 'TP3',
        size: '8 × 12 in',
        packs: [25, 100, 500, 1000, 5000, 10000, 25000, 50000],
      },
      {
        code: 'TP4',
        size: '10 × 12 in',
        packs: [25, 100, 500, 1000, 5000, 10000, 25000, 50000],
      },
      {
        code: 'TP5',
        size: '10 × 14 in',
        packs: [25, 100, 500, 1000, 5000, 10000, 25000, 50000],
      },
      {
        code: 'TP0',
        size: '12 × 14 in',
        packs: [25, 100, 500, 1000, 5000, 10000, 25000, 50000],
      },
      {
        code: 'TP6',
        size: '12.5 × 16 in',
        packs: [25, 100, 500, 1000, 5000, 10000, 25000, 50000],
      },
      {
        code: 'TP7',
        size: '14 × 18 in',
        packs: [25, 100, 500, 1000, 5000, 10000, 25000, 50000],
      },
      {
        code: 'TP8',
        size: '16 × 20 in',
        packs: [25, 100, 500, 1000, 5000, 10000, 25000, 50000],
      },
      {
        code: 'TP9',
        size: '24 × 26 in',
        packs: [25, 100, 500, 1000, 5000, 10000, 25000, 50000],
      },
      {
        code: 'TP10',
        size: '10 × 13 in',
        packs: [500, 1000, 5000, 10000, 25000, 50000],
      },
      {
        code: 'TP11',
        size: '18 × 22 in',
        packs: [500, 1000, 5000, 10000, 25000, 50000],
      },
      {
        code: 'TP12',
        size: '20 × 23 in',
        packs: [500, 1000, 5000, 10000, 25000, 50000],
      },
      {
        code: 'TP13',
        size: '22 × 24 in',
        packs: [500, 1000, 5000, 10000, 25000, 50000],
      },
      {
        code: 'TP14',
        size: '8 × 16 in',
        packs: [500, 1000, 5000, 10000, 25000, 50000],
      },
      {
        code: 'TP15',
        size: '9 × 12 in',
        packs: [500, 1000, 5000, 10000, 25000, 50000],
      },
      {
        code: 'TP16',
        size: '12 × 15 in',
        packs: [500, 1000, 5000, 10000, 25000, 50000],
      },
      {
        code: 'TP17',
        size: '10 × 16 in',
        packs: [500, 1000, 5000, 10000, 25000, 50000],
      },
      {
        code: 'TP18',
        size: '9 × 19 in',
        packs: [500, 1000, 5000, 10000, 25000, 50000],
      },
    ],
  },
  {
    slug: 'meesho-transparent-bags-with-pod',
    name: 'Meesho Transparent Poly Bags (With POD)',
    category: 'courier-mailing-bags',
    summary: 'Clear TP-series bags with POD jacket',
    description:
      'The transparent TP-series bag with a self-adhesive POD jacket on the front for the invoice or shipping label, so paperwork stays dry and readable.',
    features: [
      'Self-adhesive POD jacket on front',
      'Clear film, contents visible',
      'Permanent tamper-evident seal',
      'Meesho TP size codes',
    ],
    specs: [
      {
        label: 'Thickness',
        value: '52 micron',
      },
      {
        label: 'Material',
        value: 'Transparent LDPE',
      },
      {
        label: 'Closure',
        value: 'Permanent self-adhesive',
      },
      {
        label: 'POD pocket',
        value: 'Yes (SK POD)',
      },
    ],
    images: [
      '/images/catalog/meesho-transparent-bags-with-pod-1.jpg',
      '/images/catalog/meesho-transparent-bags-with-pod-2.jpg',
      '/images/catalog/meesho-transparent-bags-with-pod-3.jpg',
      '/images/catalog/meesho-transparent-bags-with-pod-4.jpg',
    ],
    sizes: [
      {
        code: 'TP1',
        size: '6.5 × 8 in',
        packs: [500, 1000, 5000, 10000],
      },
      {
        code: 'TP2',
        size: '8 × 10 in',
        packs: [500, 1000, 5000, 10000],
      },
      {
        code: 'TP4',
        size: '10 × 12 in',
        packs: [500, 1000, 5000, 10000],
      },
      {
        code: 'TP5',
        size: '10 × 14 in',
        packs: [500, 1000, 5000, 10000],
      },
      {
        code: 'TP6',
        size: '12.5 × 16 in',
        packs: [500, 1000, 5000, 10000],
      },
      {
        code: 'TP7',
        size: '14 × 18 in',
        packs: [500, 1000, 5000, 10000],
      },
      {
        code: 'TP8',
        size: '16 × 20 in',
        packs: [500, 1000, 5000, 10000],
      },
    ],
  },
  {
    slug: 'meesho-opaque-bags-with-pod',
    name: 'Meesho Opaque Poly Bags (With POD)',
    category: 'courier-mailing-bags',
    summary: 'White/black NP-series bags with POD jacket',
    description:
      'Opaque white-outside, black-inside NP-series courier bags with a POD jacket. Nothing shows through, the label sits in its own pocket and the permanent seal flags any tampering.',
    features: [
      '100% opaque white/black film',
      'POD jacket for invoice',
      'Permanent tamper-evident seal',
      'NP size codes for Meesho',
    ],
    specs: [
      {
        label: 'Thickness',
        value: '52 micron',
      },
      {
        label: 'Material',
        value: 'Co-extruded LDPE',
      },
      {
        label: 'Closure',
        value: 'Permanent self-adhesive',
      },
      {
        label: 'POD pocket',
        value: 'Yes',
      },
    ],
    images: [
      '/images/catalog/meesho-opaque-bags-with-pod-1.jpg',
      '/images/catalog/meesho-opaque-bags-with-pod-2.jpg',
      '/images/catalog/meesho-opaque-bags-with-pod-3.jpg',
      '/images/catalog/meesho-opaque-bags-with-pod-4.jpg',
    ],
    sizes: [
      {
        code: 'NP1',
        size: '6.5 × 8 in',
        packs: [1000, 5000, 10000],
      },
      {
        code: 'NP2',
        size: '8 × 10 in',
        packs: [1000, 5000, 10000],
      },
      {
        code: 'NP4',
        size: '10 × 12 in',
        packs: [1000, 5000, 10000],
      },
      {
        code: 'NP5',
        size: '10 × 14 in',
        packs: [1000, 5000, 10000],
      },
      {
        code: 'NP0',
        size: '12 × 14 in',
        packs: [1000, 5000, 10000],
      },
      {
        code: 'NP6',
        size: '12.5 × 16 in',
        packs: [1000, 5000, 10000],
      },
      {
        code: 'NP7',
        size: '14 × 18 in',
        packs: [1000, 5000, 10000],
      },
    ],
  },
  {
    slug: 'meesho-opaque-bags-no-pod',
    name: 'Meesho Opaque Poly Bags (No POD)',
    category: 'courier-mailing-bags',
    summary: 'White/black NP-series bags, no pocket',
    description:
      'NP-series opaque courier bags without a document pocket — the most economical way to ship Meesho orders privately and securely.',
    features: [
      '100% opaque white/black film',
      'Permanent tamper-evident seal',
      'NP size codes for Meesho',
      'Waterproof, tear resistant',
    ],
    specs: [
      {
        label: 'Thickness',
        value: '52 micron',
      },
      {
        label: 'Material',
        value: 'Co-extruded LDPE',
      },
      {
        label: 'Closure',
        value: 'Permanent self-adhesive',
      },
      {
        label: 'POD pocket',
        value: 'No',
      },
    ],
    images: [
      '/images/catalog/meesho-opaque-bags-no-pod-1.jpg',
      '/images/catalog/meesho-opaque-bags-no-pod-2.jpg',
      '/images/catalog/meesho-opaque-bags-no-pod-3.jpg',
      '/images/catalog/meesho-opaque-bags-no-pod-4.jpg',
    ],
    sizes: [
      {
        code: 'NP1',
        size: '6.5 × 8 in',
        packs: [100, 500, 1000, 5000, 10000, 25000, 50000],
      },
      {
        code: 'NP2',
        size: '8 × 10 in',
        packs: [100, 500, 1000, 5000, 10000, 25000, 50000],
      },
      {
        code: 'NP3',
        size: '8 × 12 in',
        packs: [100, 500, 1000, 5000, 10000, 25000, 50000],
      },
      {
        code: 'NP4',
        size: '10 × 12 in',
        packs: [100, 500, 1000, 5000, 10000, 25000, 50000],
      },
      {
        code: 'NP5',
        size: '10 × 14 in',
        packs: [100, 500, 1000, 5000, 10000, 25000, 50000],
      },
      {
        code: 'NP0',
        size: '12 × 14 in',
        packs: [100, 500, 1000, 5000, 10000, 25000, 50000],
      },
      {
        code: 'NP6',
        size: '12.5 × 16 in',
        packs: [100, 500, 1000, 5000, 10000, 25000, 50000],
      },
      {
        code: 'NP7',
        size: '14 × 18 in',
        packs: [100, 500, 1000, 5000, 10000, 25000, 50000],
      },
      {
        code: 'NP8',
        size: '16 × 20 in',
        packs: [100, 500, 1000, 5000, 10000, 25000, 50000],
      },
      {
        code: 'NP9',
        size: '24 × 26 in',
        packs: [100, 500, 1000, 5000, 10000, 25000, 50000],
      },
      {
        code: 'NP10',
        size: '10 × 13 in',
        packs: [500, 1000, 5000, 10000, 25000, 50000],
      },
      {
        code: 'NP11',
        size: '18 × 22 in',
        packs: [500, 1000, 5000, 10000, 25000, 50000],
      },
      {
        code: 'NP12',
        size: '20 × 23 in',
        packs: [500, 1000, 5000, 10000, 25000, 50000],
      },
      {
        code: 'NP13',
        size: '22 × 24 in',
        packs: [500, 1000, 5000, 10000, 25000, 50000],
      },
      {
        code: 'NP17',
        size: '10 × 16 in',
        packs: [500, 1000, 5000, 10000, 25000, 50000],
      },
      {
        code: 'NP18',
        size: '9 × 19 in',
        packs: [500, 1000, 5000, 10000, 25000, 50000],
      },
    ],
  },
  {
    slug: 'meesho-bopp-tape',
    name: 'Meesho Printed BOPP Tape',
    category: 'packaging-tapes',
    summary: 'Meesho-printed 48 mm carton tape',
    description:
      'BOPP self-adhesive tape printed for Meesho seller cartons. Strong acrylic adhesive, clean unwind and a printed finish that makes repacking obvious.',
    features: [
      'Meesho print',
      '48 mm × 65 m roll',
      'Strong acrylic adhesive',
      'Smooth, quiet unwind',
    ],
    specs: [
      {
        label: 'Material',
        value: 'BOPP film',
      },
      {
        label: 'Adhesive',
        value: 'Water-based acrylic',
      },
    ],
    images: [
      '/images/catalog/meesho-bopp-tape-1.jpg',
      '/images/catalog/meesho-bopp-tape-2.jpg',
      '/images/catalog/meesho-bopp-tape-3.jpg',
    ],
    sizes: [
      {
        size: '48 mm × 65 m',
        packs: [12, 36, 72, 144],
      },
    ],
  },
  {
    slug: 'meesho-thermal-labels',
    name: 'Meesho Direct Thermal Labels',
    category: 'shipping-labels',
    summary: '4×6 top-coated labels for Meesho manifests',
    description:
      'Top-coated direct thermal 4 × 6 in labels that print the Meesho shipping label crisply on any desktop thermal printer — no ribbon, no ink, and smudge resistant.',
    features: [
      'Top-coated: smudge & moisture resistant',
      'No ribbon or ink needed',
      'Permanent adhesive',
      'Fits standard desktop thermal printers',
    ],
    specs: [
      {
        label: 'Type',
        value: 'Direct thermal, top coated',
      },
      {
        label: 'Format',
        value: 'Roll',
      },
      {
        label: 'Adhesive',
        value: 'Permanent',
      },
    ],
    images: [
      '/images/catalog/meesho-thermal-labels-1.jpg',
      '/images/catalog/meesho-thermal-labels-2.jpg',
      '/images/catalog/meesho-thermal-labels-3.jpg',
    ],
    sizes: [
      {
        size: '4 × 6 in (100 × 150 mm)',
        variant: '400 labels / roll',
        packs: [10, 30, 60, 120, 180],
      },
    ],
  },
  {
    slug: 'meesho-level-4-security-bags',
    name: 'Level 4 Security Bags',
    category: 'tamper-evident-packaging',
    summary: 'Lip-to-lip high-security bags',
    description:
      'Non-printed Level 4 security bags with lip-to-lip closure — the seal covers the full mouth of the bag, so there is no gap to slip contents in or out.',
    features: [
      'Lip-to-lip full-width seal',
      'Level 4 tamper evidence',
      'Opaque, non-printed',
      'For high-value consignments',
    ],
    specs: [
      {
        label: 'Thickness',
        value: '52 micron',
      },
      {
        label: 'Series',
        value: 'EP5.2',
      },
      {
        label: 'Material',
        value: 'Co-extruded LDPE',
      },
      {
        label: 'Closure',
        value: 'Lip-to-lip permanent seal',
      },
    ],
    images: [
      '/images/catalog/meesho-level-4-security-bags-1.jpg',
      '/images/catalog/meesho-level-4-security-bags-2.jpg',
      '/images/catalog/meesho-level-4-security-bags-3.jpg',
      '/images/catalog/meesho-level-4-security-bags-4.jpg',
    ],
    sizes: [
      {
        size: '10 × 13 in',
        packs: [100, 200],
      },
      {
        size: '14 × 18 in',
        packs: [100, 200],
      },
    ],
  },
  {
    slug: 'meesho-barcoded-boxes',
    name: 'Meesho Barcoded Corrugated Boxes',
    category: 'corrugated-boxes',
    summary: 'EC-series printed cartons for Meesho',
    description:
      'Corrugated shipper boxes printed with the Meesho EC-series barcode. Rigid 3-ply board protects fragile and boxed goods, delivered flat to save storage space.',
    features: [
      'Meesho EC barcode printed',
      '3-ply corrugated board',
      'Supplied flat, quick to erect',
      'Sizes in inch and cm',
    ],
    specs: [
      {
        label: 'Material',
        value: '3-ply corrugated kraft',
      },
      {
        label: 'Supplied',
        value: 'Flat-packed',
      },
    ],
    images: [
      '/images/catalog/meesho-barcoded-boxes-1.jpg',
      '/images/catalog/meesho-barcoded-boxes-2.jpg',
      '/images/catalog/meesho-barcoded-boxes-3.jpg',
      '/images/catalog/meesho-barcoded-boxes-4.jpg',
    ],
    sizes: [
      {
        code: 'EC1',
        size: '5 × 4.5 × 3.5 in (12.7 × 11.5 × 8.9 cm)',
        packs: [5000, 10000],
      },
      {
        code: 'EC13',
        size: '8 × 5 × 2.5 in (20.3 × 12.7 × 6.4 cm)',
        packs: [5000, 10000],
      },
      {
        code: 'EC16',
        size: '4.5 × 4.5 × 1.5 in (11.5 × 11.5 × 3.8 cm)',
        packs: [5000, 10000],
      },
      {
        code: 'EC21',
        size: '4 × 4 × 4 in (10.2 × 10.2 × 10.2 cm)',
        packs: [5000, 10000],
      },
      {
        code: 'EC23',
        size: '6 × 5 × 5 in (15.25 × 12.7 × 12.7 cm)',
        packs: [5000, 10000],
      },
      {
        code: 'EC24',
        size: '10 × 4 × 4 in (25.4 × 10.2 × 10.2 cm)',
        packs: [5000, 10000],
      },
      {
        code: 'EC25',
        size: '8 × 5 × 5 in (20.3 × 12.7 × 12.7 cm)',
        packs: [5000, 10000],
      },
      {
        code: 'EC26',
        size: '10 × 6 × 5 in (25.4 × 15.3 × 12.7 cm)',
        packs: [5000, 10000],
      },
      {
        code: 'EC27',
        size: '9 × 6 × 6 in (22.9 × 15.3 × 15.3 cm)',
        packs: [5000, 10000],
      },
      {
        code: 'EC6',
        size: '7 × 4 × 2 in (17.8 × 10.2 × 5.1 cm)',
        packs: [5000, 10000],
      },
      {
        code: 'EC62',
        size: '5 × 4 × 1.5 in (12.7 × 10.2 × 3.8 cm)',
        packs: [5000, 10000],
      },
      {
        code: 'EC63',
        size: '2 × 2 × 6 in (5.1 × 5.1 × 15.3 cm)',
        packs: [5000, 10000],
      },
      {
        code: 'EC64',
        size: '4.5 × 1.5 × 8.5 in (11.5 × 3.8 × 21.6 cm)',
        packs: [5000, 10000],
      },
      {
        code: 'EC65',
        size: '3 × 3 × 10 in (7.6 × 7.6 × 25.4 cm)',
        packs: [5000, 10000],
      },
      {
        code: 'EC7',
        size: '7 × 4 × 3.5 in (17.8 × 10.2 × 8.9 cm)',
        packs: [5000, 10000],
      },
      {
        size: '7.5 × 4.5 × 3.5 in (19 × 11.5 × 8.9 cm)',
        packs: [5000, 10000],
      },
    ],
  },
  {
    slug: 'flipkart-opaque-nsb-bags',
    name: 'Flipkart Opaque Security Bags (NSB)',
    category: 'courier-mailing-bags',
    summary: 'Barcoded NSB-series lip-closure bags',
    description:
      'Opaque NSB-series security bags with the Flipkart barcode and lip closure, sized to Flipkart’s dispatch chart. Includes long-format NSB1.5 for slim items.',
    features: [
      'Flipkart NSB barcode printed',
      'Lip closure, tamper evident',
      'Opaque white/black film',
      'Long-format sizes available',
    ],
    specs: [
      {
        label: 'Thickness',
        value: '52 micron',
      },
      {
        label: 'Material',
        value: 'Co-extruded LDPE',
      },
      {
        label: 'Closure',
        value: 'Lip closure',
      },
    ],
    images: [
      '/images/catalog/flipkart-opaque-nsb-bags-1.jpg',
      '/images/catalog/flipkart-opaque-nsb-bags-2.jpg',
      '/images/catalog/flipkart-opaque-nsb-bags-3.jpg',
      '/images/catalog/flipkart-opaque-nsb-bags-4.jpg',
    ],
    sizes: [
      {
        code: 'NSB0',
        size: '6.3 × 7.6 in',
        packs: [500, 2000, 5000, 10000, 50000, 100000],
      },
      {
        code: 'NSB1',
        size: '8.5 × 11 in',
        packs: [500, 2000, 5000, 10000, 50000, 100000],
      },
      {
        code: 'NSB1.5',
        size: '5 × 20 in',
        packs: [500, 2000, 5000, 10000, 50000, 100000],
      },
      {
        code: 'NSB2',
        size: '10 × 13 in',
        packs: [500, 2000, 5000, 10000, 50000, 100000],
      },
      {
        code: 'NSB2.5',
        size: '5 × 27 in',
        packs: [500, 2000, 5000, 10000, 50000, 100000],
      },
      {
        code: 'NSB3',
        size: '12.5 × 15 in',
        packs: [500, 2000, 5000, 10000, 50000, 100000],
      },
      {
        code: 'NSB3.5',
        size: '14 × 18 in',
        packs: [500, 2000, 5000, 10000, 50000, 100000],
      },
      {
        code: 'NSB4',
        size: '16 × 20 in',
        packs: [500, 2000, 5000, 10000, 50000, 100000],
      },
      {
        code: 'NSB5',
        size: '20 × 23 in',
        packs: [500, 2000, 5000, 10000, 50000, 100000],
      },
      {
        code: 'NSB6',
        size: '25 × 28 in',
        packs: [500, 2000, 5000, 10000, 50000, 100000],
      },
      {
        code: 'NSB7',
        size: '7 × 25 in',
        packs: [500, 2000, 5000, 10000, 50000, 100000],
      },
    ],
  },
  {
    slug: 'flipkart-corrugated-boxes',
    name: 'Flipkart Corrugated Boxes',
    category: 'corrugated-boxes',
    summary: 'A/B-series cartons to Flipkart spec',
    description:
      'Corrugated cartons in Flipkart’s A and B series dimensions, made from sturdy kraft board for safe last-mile delivery.',
    features: [
      'Flipkart A/B size codes',
      'Sturdy corrugated kraft',
      'Supplied flat',
      'Sizes in inch and cm',
    ],
    specs: [
      {
        label: 'Material',
        value: 'Corrugated kraft',
      },
      {
        label: 'Supplied',
        value: 'Flat-packed',
      },
    ],
    images: [
      '/images/catalog/flipkart-corrugated-boxes-1.jpg',
      '/images/catalog/flipkart-corrugated-boxes-2.jpg',
      '/images/catalog/flipkart-corrugated-boxes-3.jpg',
      '/images/catalog/flipkart-corrugated-boxes-4.jpg',
    ],
    sizes: [
      {
        code: 'A3',
        size: '5.3 × 5.3 × 5.3 in (13.5 × 13.5 × 13.5 cm)',
        packs: [500],
      },
      {
        code: 'B0',
        size: '7.5 × 4.5 × 3.5 in (19 × 11.5 × 8.9 cm)',
        packs: [1000, 5000, 10000],
      },
      {
        code: 'B01',
        size: '8 × 7 × 5 in (20.3 × 17.8 × 12.7 cm)',
        packs: [5000, 10000],
      },
      {
        code: 'B28',
        size: '8.5 × 6 × 3 in (21.6 × 15.3 × 7.6 cm)',
        packs: [5000, 10000],
      },
      {
        size: '9 × 6 × 4.5 in (22.86 × 15.24 × 11.43 cm)',
        packs: [1000, 5000, 10000],
      },
      {
        size: '12.5 × 9 × 2.5 in (31.75 × 22.86 × 6.35 cm)',
        packs: [1000, 5000, 10000],
      },
      {
        size: '14.5 × 5 × 4 in (36.83 × 12.7 × 10.16 cm)',
        packs: [1000, 5000, 10000],
      },
      {
        size: '7.5 × 4 × 2.5 in (19.05 × 10.16 × 6.35 cm)',
        packs: [1000, 5000, 10000],
      },
      {
        size: '10 × 4.5 × 3 in (25.40 × 11.43 × 7.62 cm)',
        packs: [1000, 5000, 10000],
      },
      {
        size: '8 × 5 × 4 in (20.32 × 12.70 × 10.16 cm)',
        packs: [1000, 5000, 10000],
      },
    ],
  },
  {
    slug: 'flipkart-transparent-tsb-bags',
    name: 'Flipkart Transparent Bags (TSB)',
    category: 'courier-mailing-bags',
    summary: 'Clear TSB-series lip-closure bags',
    description:
      'Transparent TSB-series bags with lip closure for Flipkart sellers, ideal where contents need to be visible at pickup.',
    features: [
      'Flipkart TSB size codes',
      'Clear film',
      'Lip closure, tamper evident',
      'Waterproof',
    ],
    specs: [
      {
        label: 'Thickness',
        value: '52 micron',
      },
      {
        label: 'Material',
        value: 'Transparent LDPE',
      },
      {
        label: 'Closure',
        value: 'Lip closure',
      },
    ],
    images: [
      '/images/catalog/flipkart-transparent-tsb-bags-1.jpg',
      '/images/catalog/flipkart-transparent-tsb-bags-2.jpg',
      '/images/catalog/flipkart-transparent-tsb-bags-3.jpg',
      '/images/catalog/flipkart-transparent-tsb-bags-4.jpg',
    ],
    sizes: [
      {
        code: 'TSB0',
        size: '6.3 × 7.6 in',
        packs: [500, 2500, 5000, 10000, 50000, 100000],
      },
      {
        code: 'TSB1',
        size: '8.5 × 11 in',
        packs: [500, 1000, 2000, 10000, 50000, 100000],
      },
      {
        code: 'TSB2',
        size: '10 × 13 in',
        packs: [500, 1000, 5000, 10000, 25000, 100000],
      },
      {
        code: 'TSB3',
        size: '12.5 × 15 in',
        packs: [500, 1000, 5000, 10000, 25000, 50000, 100000],
      },
      {
        code: 'TSB3',
        size: '14 × 18 in',
        packs: [500, 1000, 5000, 10000, 25000, 50000, 100000],
      },
      {
        code: 'TSB4',
        size: '16 × 20 in',
        packs: [500, 1000, 5000, 10000, 25000, 50000, 100000],
      },
      {
        code: 'TSB5',
        size: '20 × 23 in',
        packs: [500, 1000, 5000, 10000, 25000, 50000, 100000],
      },
    ],
  },
  {
    slug: 'flipkart-branded-tape',
    name: 'Flipkart Branded Tape',
    category: 'packaging-tapes',
    summary: 'Blue and “Fragile” orange printed tape',
    description:
      'Flipkart-printed BOPP tape in standard blue and orange “Fragile” versions, so cartons are sealed to marketplace standards and handled with care.',
    features: [
      'Blue standard & orange Fragile',
      '48 mm × 65 m roll',
      'Strong acrylic adhesive',
      'Shows evidence of resealing',
    ],
    specs: [
      {
        label: 'Material',
        value: 'BOPP film',
      },
      {
        label: 'Adhesive',
        value: 'Water-based acrylic',
      },
    ],
    images: [
      '/images/catalog/flipkart-branded-tape-1.jpg',
      '/images/catalog/flipkart-branded-tape-2.jpg',
      '/images/catalog/flipkart-branded-tape-3.jpg',
      '/images/catalog/flipkart-branded-tape-4.jpg',
    ],
    sizes: [
      {
        size: '48 mm × 65 m',
        variant: 'Blue',
        packs: [12, 36, 72, 144],
      },
      {
        size: '48 mm × 65 m',
        variant: 'Fragile Orange',
        packs: [12, 36, 72, 144],
      },
    ],
  },
  {
    slug: 'amazon-nm-bubble-bags',
    name: 'Amazon Seller Flex Bubble Bags (NM)',
    category: 'bubble-packaging',
    summary: 'Bubble-lined NM-series bags',
    description:
      'Amazon Seller Flex NM-series mailers lined with air bubble, for electronics, cosmetics and other fragile goods that need cushioning without a box.',
    features: [
      'Air-bubble cushioning inside',
      'NM series sizes',
      'Permanent seal',
      'Lighter than a carton',
    ],
    specs: [
      {
        label: 'Material',
        value: 'Poly outer + bubble liner',
      },
      {
        label: 'Closure',
        value: 'Permanent self-adhesive',
      },
    ],
    images: [
      '/images/catalog/amazon-nm-bubble-bags-1.jpg',
      '/images/catalog/amazon-nm-bubble-bags-2.jpg',
      '/images/catalog/amazon-nm-bubble-bags-3.jpg',
      '/images/catalog/amazon-nm-bubble-bags-4.jpg',
    ],
    sizes: [
      {
        code: 'NM1',
        size: '12.5 × 9.85 in',
        packs: [500, 1000, 2000, 5000],
      },
      {
        code: 'NM2',
        size: '16 × 10.65 in',
        packs: [500, 1000, 2000, 5000],
      },
      {
        code: 'NM4',
        size: '9.85 × 5.9 in',
        packs: [500, 1000, 2000, 5000],
      },
    ],
  },
  {
    slug: 'amazon-bopp-tape',
    name: 'Amazon BOPP Tape',
    category: 'packaging-tapes',
    summary: 'White, black and Prime printed tape',
    description:
      'Amazon-printed BOPP tape in white, black-transparent and Prime variants, in 48 mm and 72 mm widths for Seller Flex and Easy Ship cartons.',
    features: [
      'White, black & Prime variants',
      '48 mm and 72 mm widths',
      '65 m rolls',
      'Strong acrylic adhesive',
    ],
    specs: [
      {
        label: 'Material',
        value: 'BOPP film',
      },
      {
        label: 'Adhesive',
        value: 'Water-based acrylic',
      },
    ],
    images: [
      '/images/catalog/amazon-bopp-tape-1.jpg',
      '/images/catalog/amazon-bopp-tape-2.jpg',
      '/images/catalog/amazon-bopp-tape-3.jpg',
      '/images/catalog/amazon-bopp-tape-4.jpg',
    ],
    sizes: [
      {
        size: '48 mm × 65 m',
        variant: 'White',
        packs: [12, 15, 36, 72, 144],
      },
      {
        size: '48 mm × 65 m',
        variant: 'Black Transparent',
        packs: [12, 36, 72, 144],
      },
      {
        size: '72 mm × 65 m',
        variant: 'Prime',
        packs: [24, 48, 96],
      },
    ],
  },
  {
    slug: 'amazon-np-flex-bags',
    name: 'Amazon Seller Flex Bags (NP)',
    category: 'courier-mailing-bags',
    summary: 'NP-series poly bags to Seller Flex spec',
    description:
      'Opaque NP-series courier bags in the sizes Amazon Seller Flex uses, with a permanent tamper-evident seal.',
    features: [
      'Amazon NP size series',
      'Opaque white/black film',
      'Permanent seal',
      'Waterproof, tear resistant',
    ],
    specs: [
      {
        label: 'Thickness',
        value: '52 micron',
      },
      {
        label: 'Material',
        value: 'Co-extruded LDPE',
      },
      {
        label: 'Closure',
        value: 'Permanent self-adhesive',
      },
    ],
    images: [
      '/images/catalog/amazon-np-flex-bags-1.jpg',
      '/images/catalog/amazon-np-flex-bags-2.jpg',
      '/images/catalog/amazon-np-flex-bags-3.jpg',
      '/images/catalog/amazon-np-flex-bags-4.jpg',
    ],
    sizes: [
      {
        code: 'NP5',
        size: '10.65 × 7.10 in',
        packs: [100, 500, 1000, 5000, 10000, 25000, 50000, 100000],
      },
      {
        code: 'NP6',
        size: '10.85 × 14.20 in',
        packs: [100, 500, 1000, 5000, 10000, 25000, 50000, 100000],
      },
      {
        code: 'NP7',
        size: '17.5 × 12.20 in',
        packs: [100, 500, 1000, 5000, 10000, 25000, 50000, 100000],
      },
      {
        code: 'NP8',
        size: '16 × 20.90 in',
        packs: [100, 500, 1000, 5000, 10000, 25000, 50000, 100000],
      },
      {
        code: 'NP9',
        size: '25.5 × 20.90 in',
        packs: [100, 500, 1000, 5000, 10000, 25000, 50000, 100000],
      },
    ],
  },
  {
    slug: 'amazon-courier-bags-no-pocket',
    name: 'Amazon Courier Bags (No Pocket)',
    category: 'courier-mailing-bags',
    summary: 'Pocket-less bags for Amazon dispatch',
    description:
      'Amazon-style courier bags without a document pocket, for sellers who stick the label directly on the film.',
    features: [
      'No POD pocket — label direct',
      'Opaque film',
      'Permanent seal',
      'Common Amazon sizes',
    ],
    specs: [
      {
        label: 'Thickness',
        value: '52 micron',
      },
      {
        label: 'Material',
        value: 'Co-extruded LDPE',
      },
      {
        label: 'Closure',
        value: 'Permanent self-adhesive',
      },
      {
        label: 'POD pocket',
        value: 'No',
      },
    ],
    images: [
      '/images/catalog/amazon-courier-bags-no-pocket-1.jpg',
      '/images/catalog/amazon-courier-bags-no-pocket-2.jpg',
      '/images/catalog/amazon-courier-bags-no-pocket-3.jpg',
      '/images/catalog/amazon-courier-bags-no-pocket-4.jpg',
    ],
    sizes: [
      {
        size: '6 × 8 in',
        packs: [500, 1000, 5000, 10000],
      },
      {
        size: '8 × 11 in',
        packs: [500, 1000, 5000, 10000],
      },
      {
        size: '10 × 12 in',
        packs: [500, 1000, 5000, 10000],
      },
      {
        size: '12 × 14 in',
        packs: [500, 1000, 5000, 10000],
      },
      {
        size: '12.5 × 16 in',
        packs: [500, 1000, 5000, 10000],
      },
      {
        size: '14 × 17 in',
        packs: [500, 1000, 5000, 10000],
      },
      {
        size: '17 × 19 in',
        packs: [500, 1000, 5000, 10000],
      },
      {
        size: '21 × 23 in',
        packs: [500, 1000, 5000, 10000],
      },
    ],
  },
  {
    slug: 'plain-courier-bags-60-micron',
    name: 'Plain Courier Bags 60 Micron (No POD)',
    category: 'courier-mailing-bags',
    summary: 'Heavier 60 µm film for bulky items',
    description:
      'Our heavier-gauge plain courier bag: 60 micron co-extruded film for heavier or sharp-edged contents, with a permanent seal and no branding.',
    features: [
      'Thicker 60 micron film',
      'Unbranded — any marketplace',
      'Permanent tamper-evident seal',
      'White outside, black inside',
    ],
    specs: [
      {
        label: 'Thickness',
        value: '60 micron',
      },
      {
        label: 'Series',
        value: 'EP6',
      },
      {
        label: 'Material',
        value: 'Co-extruded LDPE',
      },
      {
        label: 'Closure',
        value: 'Permanent self-adhesive',
      },
      {
        label: 'POD pocket',
        value: 'No',
      },
    ],
    images: [
      '/images/catalog/plain-courier-bags-60-micron-1.jpg',
      '/images/catalog/plain-courier-bags-60-micron-2.jpg',
      '/images/catalog/plain-courier-bags-60-micron-3.jpg',
      '/images/catalog/plain-courier-bags-60-micron-4.jpg',
    ],
    sizes: [
      {
        size: '6.5 × 8 in + 1.5 in flap',
        packs: [500, 1000, 2000, 2500, 10000],
      },
      {
        size: '8 × 10 in + 2 in flap',
        packs: [500, 1000, 2000, 10000],
      },
      {
        size: '10 × 12 in + 2 in flap',
        packs: [500, 1000, 10000],
      },
      {
        size: '10 × 14 in + 2 in flap',
        packs: [500, 1000, 2000, 10000],
      },
      {
        size: '12 × 14 in + 2 in flap',
        packs: [500, 1000, 2000, 10000],
      },
      {
        size: '12 × 16 in + 2 in flap',
        packs: [500, 1000, 2000, 10000],
      },
      {
        size: '14 × 17 in + 2 in flap',
        packs: [500, 1000, 2000, 10000],
      },
      {
        size: '15 × 19 in + 2 in flap',
        packs: [500, 1000, 2000, 10000],
      },
      {
        size: '16 × 20 in + 2 in flap',
        packs: [500, 1000, 2000, 10000],
      },
      {
        size: '18 × 22 in + 2 in flap',
        packs: [500, 1000, 2000, 10000],
      },
      {
        size: '20 × 23 in + 2 in flap',
        packs: [500, 1000, 2000, 10000],
      },
      {
        size: '25 × 28 in + 2 in flap',
        packs: [500, 1000, 2000],
      },
      {
        size: '30 × 34 in + 2 in flap',
        packs: [500, 1000, 2000, 10000],
      },
    ],
  },
  {
    slug: 'plain-courier-bags-50-micron',
    name: 'Plain Courier Bags 50 Micron (No POD)',
    category: 'courier-mailing-bags',
    summary: 'Everyday unbranded courier bags',
    description:
      'The everyday unbranded courier bag — 50 micron co-extruded film, flap with permanent hot-melt seal, sized from small accessories up to apparel bundles.',
    features: [
      'Unbranded — any courier/marketplace',
      'White outside, black inside',
      'Permanent tamper-evident seal',
      'Flap sized for easy packing',
    ],
    specs: [
      {
        label: 'Thickness',
        value: '52 micron',
      },
      {
        label: 'Series',
        value: 'EP5',
      },
      {
        label: 'Material',
        value: 'Co-extruded LDPE',
      },
      {
        label: 'Closure',
        value: 'Permanent self-adhesive',
      },
      {
        label: 'POD pocket',
        value: 'No',
      },
    ],
    images: [
      '/images/catalog/plain-courier-bags-50-micron-1.jpg',
      '/images/catalog/plain-courier-bags-50-micron-2.jpg',
      '/images/catalog/plain-courier-bags-50-micron-3.jpg',
      '/images/catalog/plain-courier-bags-50-micron-4.jpg',
    ],
    sizes: [
      {
        size: '6.5 × 8 in + 1.5 in flap',
        packs: [500, 1000, 2000, 2500, 10000],
      },
      {
        size: '8 × 10 in + 2 in flap',
        packs: [500, 1000, 2000, 10000],
      },
      {
        size: '10 × 12 in + 2 in flap',
        packs: [500, 1000, 2000, 10000],
      },
      {
        size: '10 × 14 in + 2 in flap',
        packs: [500, 1000, 2000, 10000],
      },
      {
        size: '12 × 14 in + 2 in flap',
        packs: [500, 1000, 2000, 10000],
      },
      {
        size: '12 × 16 in + 2 in flap',
        packs: [500, 1000, 2000, 10000],
      },
      {
        size: '14 × 16 in + 2 in flap',
        packs: [500, 1000, 2000, 10000],
      },
      {
        size: '14 × 17 in + 2 in flap',
        packs: [500, 1000, 2000, 10000],
      },
      {
        size: '15 × 19 in + 2 in flap',
        packs: [500, 1000, 2000, 10000],
      },
      {
        size: '16 × 20 in + 2 in flap',
        packs: [500, 1000, 2000, 10000],
      },
      {
        size: '18 × 22 in + 2 in flap',
        packs: [500, 1000, 2000, 10000],
      },
      {
        size: '22 × 24 in + 2 in flap',
        packs: [500, 1000, 2000, 10000],
      },
      {
        size: '25 × 28 in + 2 in flap',
        packs: [500, 1000, 2000, 10000],
      },
      {
        size: '30 × 34 in + 2 in flap',
        packs: [500, 1000, 2000, 10000],
      },
    ],
  },
  {
    slug: 'plain-courier-bags-with-pod',
    name: 'Plain Courier Bags With POD (50 Micron)',
    category: 'courier-mailing-bags',
    summary: 'Unbranded bags with document pocket',
    description:
      'Plain 50 micron courier bags with a self-adhesive POD jacket on the front to hold the invoice and shipping label.',
    features: [
      'Self-adhesive POD jacket',
      'Unbranded',
      'Permanent tamper-evident seal',
      'Opaque, waterproof',
    ],
    specs: [
      {
        label: 'Thickness',
        value: '52 micron',
      },
      {
        label: 'Series',
        value: 'EP5',
      },
      {
        label: 'Material',
        value: 'Co-extruded LDPE',
      },
      {
        label: 'Closure',
        value: 'Permanent self-adhesive',
      },
      {
        label: 'POD pocket',
        value: 'Yes (SK POD)',
      },
    ],
    images: [
      '/images/catalog/plain-courier-bags-with-pod-1.jpg',
      '/images/catalog/plain-courier-bags-with-pod-2.jpg',
      '/images/catalog/plain-courier-bags-with-pod-3.jpg',
      '/images/catalog/plain-courier-bags-with-pod-4.jpg',
    ],
    sizes: [
      {
        size: '6.5 × 8 in + 1.5 in flap',
        packs: [100, 500, 1000, 2000, 2500, 10000, 25000, 50000, 100000],
      },
      {
        size: '8 × 10 in + 2 in flap',
        packs: [100, 500, 1000, 2000, 10000, 25000, 50000, 100000],
      },
      {
        size: '10 × 12 in + 2 in flap',
        packs: [100, 500, 1000, 2000, 10000, 25000, 50000, 100000],
      },
      {
        size: '10 × 14 in + 2 in flap',
        packs: [100, 500, 1000, 2000, 10000, 25000, 50000, 100000],
      },
      {
        size: '12 × 14 in + 2 in flap',
        packs: [100, 500, 1000, 2000, 10000, 25000, 50000, 100000],
      },
      {
        size: '12 × 16 in + 2 in flap',
        packs: [100, 500, 1000, 2000, 10000, 25000, 50000, 100000],
      },
      {
        size: '14 × 16 in + 2 in flap',
        packs: [100, 500, 1000, 2000, 10000, 25000, 50000, 100000],
      },
      {
        size: '14 × 17 in + 2 in flap',
        packs: [100, 500, 1000, 2000, 10000, 25000, 50000, 100000],
      },
      {
        size: '14 × 18 in + 2 in flap',
        packs: [100, 500, 1000, 2000, 10000, 25000, 50000, 100000],
      },
      {
        size: '15 × 19 in + 2 in flap',
        packs: [100, 500, 1000, 2000, 10000, 25000, 50000, 100000],
      },
      {
        size: '16 × 20 in + 2 in flap',
        packs: [100, 500, 1000, 2000, 10000, 25000, 50000, 100000],
      },
      {
        size: '18 × 22 in + 2 in flap',
        packs: [100, 500, 1000, 2000, 10000, 25000, 50000, 100000],
      },
      {
        size: '22 × 24 in + 2 in flap',
        packs: [100, 500, 1000, 2000, 10000, 25000, 50000, 100000],
      },
      {
        size: '25 × 28 in + 2 in flap',
        packs: [100, 500, 1000, 2000, 10000, 25000, 50000, 100000],
      },
      {
        size: '30 × 34 in + 2 in flap',
        packs: [100, 500, 1000, 2000, 10000, 25000, 50000, 100000],
      },
    ],
  },
  {
    slug: 'bubble-pouches',
    name: 'Bubble Pouches',
    category: 'bubble-packaging',
    summary: '60 GSM bubble-out bags with self seal',
    description:
      'Pouches made entirely of 60 GSM bubble film with a self-adhesive closure — slip the item in, seal, then pack into a courier bag or box.',
    features: [
      '60 GSM air bubble film',
      'Self-adhesive tape closure',
      'Reusable cushioning',
      'Inner wrap for fragile items',
    ],
    specs: [
      {
        label: 'Thickness',
        value: '60 GSM',
      },
      {
        label: 'Material',
        value: 'LDPE bubble film',
      },
      {
        label: 'Closure',
        value: 'Self-adhesive tape',
      },
    ],
    images: ['/images/catalog/bubble-pouches-1.webp'],
    sizes: [
      {
        size: '4 × 6 in + 1.5 in flap',
        packs: [500, 1000, 5000, 10000],
      },
      {
        size: '5 × 7 in + 1.5 in flap',
        packs: [500, 1000, 5000, 10000],
      },
      {
        size: '6.5 × 8 in + 1.5 in flap',
        packs: [500, 1000, 5000, 10000],
      },
      {
        size: '8 × 10 in + 1.5 in flap',
        packs: [500, 1000, 5000, 10000],
      },
      {
        size: '10 × 12 in + 1.5 in flap',
        packs: [500, 1000, 5000, 10000],
      },
      {
        size: '10 × 14 in + 1.5 in flap',
        packs: [500, 1000, 5000, 10000],
      },
      {
        size: '12 × 16 in + 2 in flap',
        packs: [500, 1000, 5000, 10000],
      },
      {
        size: '14 × 17 in + 2 in flap',
        packs: [500, 1000, 5000, 10000],
      },
    ],
  },
  {
    slug: 'bubble-courier-bags-no-pod',
    name: 'Bubble-Lined Courier Bags (No POD)',
    category: 'bubble-packaging',
    summary: 'Courier bag outer, bubble inner',
    description:
      'Opaque poly courier bag with a bonded air-bubble liner, so fragile items are cushioned and secured in one step.',
    features: [
      'Bonded bubble liner',
      'Opaque poly outer',
      'Permanent seal',
      'No separate wrap needed',
    ],
    specs: [
      {
        label: 'Thickness',
        value: '60 micron',
      },
      {
        label: 'Material',
        value: 'Poly outer + bubble liner',
      },
      {
        label: 'Closure',
        value: 'Permanent self-adhesive',
      },
      {
        label: 'POD pocket',
        value: 'No',
      },
    ],
    images: [
      '/images/catalog/bubble-courier-bags-no-pod-1.jpg',
      '/images/catalog/bubble-courier-bags-no-pod-2.jpg',
      '/images/catalog/bubble-courier-bags-no-pod-3.jpg',
      '/images/catalog/bubble-courier-bags-no-pod-4.jpg',
    ],
    sizes: [
      {
        size: '5 × 7 in',
        packs: [1000, 10000, 25000, 50000],
      },
      {
        size: '6.5 × 8 in',
        packs: [1000, 10000, 25000, 50000],
      },
      {
        size: '8 × 10 in',
        packs: [500, 1000, 10000, 25000, 50000],
      },
      {
        size: '10 × 12 in',
        packs: [500, 1000, 10000, 25000, 50000],
      },
      {
        size: '10 × 14 in',
        packs: [500, 1000, 10000, 25000, 50000],
      },
      {
        size: '12 × 14 in',
        packs: [500, 1000, 10000, 25000, 50000],
      },
      {
        size: '12 × 16 in',
        packs: [200, 1000, 10000, 25000, 50000],
      },
      {
        size: '14 × 18 in',
        packs: [200, 1000, 10000],
      },
      {
        size: '15 × 19 in',
        packs: [200, 1000, 10000],
      },
      {
        size: '18 × 22 in',
        packs: [200, 1000, 10000],
      },
    ],
  },
  {
    slug: 'metallic-foil-bubble-mailers',
    name: 'Premium Metallic Foil Bubble Mailers',
    category: 'bubble-packaging',
    summary: 'Silver foil mailers, 140 GSM',
    description:
      'Premium silver metallic foil mailers with bubble lining — a gift-grade unboxing look with real protection, at 140 GSM total thickness.',
    features: [
      'Metallic silver PET finish',
      '140 GSM total (PET + LDPE + bubble)',
      'Premium unboxing',
      'Permanent seal',
    ],
    specs: [
      {
        label: 'Thickness',
        value: '60 micron',
      },
      {
        label: 'Material',
        value: 'Silver PET / LDPE / bubble',
      },
      {
        label: 'Closure',
        value: 'Permanent self-adhesive',
      },
    ],
    images: [
      '/images/catalog/metallic-foil-bubble-mailers-1.jpg',
      '/images/catalog/metallic-foil-bubble-mailers-2.jpg',
      '/images/catalog/metallic-foil-bubble-mailers-3.jpg',
      '/images/catalog/metallic-foil-bubble-mailers-4.jpg',
    ],
    sizes: [
      {
        size: '6 × 8 in',
        packs: [500, 1000, 5000],
      },
      {
        size: '8 × 10 in',
        packs: [500, 1000, 5000],
      },
      {
        size: '10 × 12 in',
        packs: [500, 1000, 5000],
      },
      {
        size: '10 × 14 in',
        packs: [500, 1000, 5000],
      },
      {
        size: '12 × 16 in',
        packs: [500, 1000, 5000],
      },
    ],
  },
  {
    slug: 'kraft-bubble-mailers',
    name: 'Kraft Paper Bubble Mailers',
    category: 'kraft-packaging',
    summary: 'Golden-yellow kraft with bubble lining',
    description:
      'Golden-yellow kraft paper envelopes lined with bubble — the classic padded mailer for books, jewellery, accessories and electronics.',
    features: [
      '100 GSM kraft outer',
      '50 GSM bubble lining',
      'Self-seal flap',
      'Printable surface',
    ],
    specs: [
      {
        label: 'Thickness',
        value: '100 GSM paper/50 GSM bubble',
      },
      {
        label: 'Material',
        value: 'Kraft paper + bubble',
      },
      {
        label: 'Closure',
        value: 'Self-adhesive flap',
      },
    ],
    images: [
      '/images/catalog/kraft-bubble-mailers-1.jpg',
      '/images/catalog/kraft-bubble-mailers-2.jpg',
      '/images/catalog/kraft-bubble-mailers-3.jpg',
      '/images/catalog/kraft-bubble-mailers-4.jpg',
    ],
    sizes: [
      {
        size: '5 × 7 in',
        thickness: '100 GSM paper/50 GSM bubble',
        packs: [1000],
      },
      {
        size: '6.5 × 8 in',
        thickness: '100 GSM paper/50 GSM bubble',
        packs: [500],
      },
      {
        size: '8 × 10 in',
        thickness: '100 GSM paper/50 GSM bubble',
        packs: [500],
      },
      {
        size: '10 × 12 in',
        thickness: '100 GSM paper/50 GSM bubble',
        packs: [250],
      },
      {
        size: '10 × 14 in',
        thickness: '100 GSM paper/50 GSM bubble',
        packs: [200],
      },
      {
        size: '12 × 14 in',
        thickness: '60 micron/260 Gauge Bubble',
        packs: [200],
      },
      {
        size: '12 × 16 in',
        thickness: '100 GSM paper/50 GSM bubble',
        packs: [200],
      },
    ],
  },
  {
    slug: 'bubble-courier-bags-with-pod',
    name: 'Bubble-Lined Courier Bags (With POD)',
    category: 'bubble-packaging',
    summary: 'Bubble-lined bags with POD jacket',
    description:
      'Our bubble-lined courier bag with a POD jacket on the front: cushioning, privacy and a dry place for the invoice.',
    features: [
      '260-gauge bubble liner',
      'POD jacket for documents',
      'Opaque poly outer',
      'Permanent seal',
    ],
    specs: [
      {
        label: 'Thickness',
        value: '60 micron/260 Gauge Bubble',
      },
      {
        label: 'Material',
        value: 'Poly outer + bubble liner',
      },
      {
        label: 'Closure',
        value: 'Permanent self-adhesive',
      },
      {
        label: 'POD pocket',
        value: 'Yes',
      },
    ],
    images: [
      '/images/catalog/bubble-courier-bags-with-pod-1.jpg',
      '/images/catalog/bubble-courier-bags-with-pod-2.jpg',
      '/images/catalog/bubble-courier-bags-with-pod-3.jpg',
      '/images/catalog/bubble-courier-bags-with-pod-4.jpg',
    ],
    sizes: [
      {
        size: '6.5 × 8 in',
        packs: [1000, 5000, 10000, 25000, 50000],
      },
      {
        size: '8 × 10 in',
        packs: [500, 5000, 10000, 25000, 50000],
      },
      {
        size: '10 × 12 in',
        packs: [500, 5000, 10000, 25000, 50000],
      },
      {
        size: '10 × 14 in',
        packs: [500, 5000, 10000, 25000, 50000],
      },
      {
        size: '12 × 14 in',
        packs: [500, 5000, 10000, 25000, 50000],
      },
      {
        size: '12 × 16 in',
        packs: [200, 5000, 10000, 25000, 50000],
      },
      {
        size: '14 × 18 in',
        packs: [200, 5000, 10000],
      },
      {
        size: '15 × 19 in',
        packs: [200, 5000, 10000],
      },
      {
        size: '18 × 22 in',
        packs: [200, 5000, 10000],
      },
    ],
  },
  {
    slug: 'kraft-paper-courier-bags',
    name: 'Kraft Paper Courier Bags (Plastic Free)',
    category: 'kraft-packaging',
    summary: '100% paper tamper-proof courier bags',
    description:
      'Plastic-free tamper-proof courier bags made of strong kraft paper — recyclable, compliant with plastic bans, and still secure for dispatch.',
    features: [
      '100% plastic free',
      'Tamper-proof seal',
      'Recyclable & biodegradable',
      'Strong kraft paper',
    ],
    specs: [
      {
        label: 'Material',
        value: 'Kraft paper',
      },
      {
        label: 'Closure',
        value: 'Tamper-proof adhesive',
      },
    ],
    images: [
      '/images/catalog/kraft-paper-courier-bags-1.jpg',
      '/images/catalog/kraft-paper-courier-bags-2.jpg',
      '/images/catalog/kraft-paper-courier-bags-3.jpg',
      '/images/catalog/kraft-paper-courier-bags-4.jpg',
    ],
    sizes: [
      {
        code: 'EP1',
        size: '6.5 × 8 in + 1.5 in flap',
        packs: [500, 1000, 5000, 10000],
      },
      {
        code: 'EP2.5',
        size: '8.7 × 11.1 in + 2 in flap',
        packs: [500, 1000, 5000, 10000],
      },
      {
        code: 'EP2',
        size: '10 × 13.2 in + 2 in flap',
        packs: [500, 1000, 5000, 10000],
      },
      {
        code: 'EP3',
        size: '12.8 × 15.5 in + 2 in flap',
        packs: [500, 1000, 5000, 10000],
      },
    ],
  },
  {
    slug: 'blue-courier-bags',
    name: 'Blue Courier Bags With POD',
    category: 'courier-mailing-bags',
    summary: 'Coloured courier bags — blue',
    description:
      'Blue courier bags with POD jacket — colour-code your shipments or simply stand out from white bags on the delivery van.',
    features: ['Blue coloured film', 'POD jacket', 'Permanent seal', 'Opaque'],
    specs: [
      {
        label: 'Thickness',
        value: '52 micron',
      },
      {
        label: 'Series',
        value: 'EP5',
      },
      {
        label: 'Colour',
        value: 'Blue',
      },
      {
        label: 'Material',
        value: 'Co-extruded LDPE',
      },
      {
        label: 'POD pocket',
        value: 'Yes',
      },
    ],
    images: [
      '/images/catalog/blue-courier-bags-1.jpg',
      '/images/catalog/blue-courier-bags-2.jpg',
      '/images/catalog/blue-courier-bags-3.jpg',
      '/images/catalog/blue-courier-bags-4.jpg',
    ],
    sizes: [
      {
        size: '6.5 × 8 in',
        packs: [1000],
      },
      {
        size: '8 × 10 in',
        packs: [1000],
      },
      {
        size: '10 × 12 in',
        packs: [1000],
      },
      {
        size: '10 × 14 in',
        packs: [1000],
      },
      {
        size: '12 × 14 in',
        packs: [1000],
      },
      {
        size: '12 × 16 in',
        packs: [1000],
      },
    ],
  },
  {
    slug: 'green-courier-bags',
    name: 'Green Courier Bags With POD',
    category: 'courier-mailing-bags',
    summary: 'Coloured courier bags — green',
    description:
      'Green courier bags with POD jacket for brands that want their parcel recognised on sight.',
    features: ['Green coloured film', 'POD jacket', 'Permanent seal', 'Opaque'],
    specs: [
      {
        label: 'Thickness',
        value: '52 micron',
      },
      {
        label: 'Series',
        value: 'EP5',
      },
      {
        label: 'Colour',
        value: 'Green',
      },
      {
        label: 'Material',
        value: 'Co-extruded LDPE',
      },
      {
        label: 'POD pocket',
        value: 'Yes',
      },
    ],
    images: [
      '/images/catalog/green-courier-bags-1.jpg',
      '/images/catalog/green-courier-bags-2.jpg',
      '/images/catalog/green-courier-bags-3.jpg',
      '/images/catalog/green-courier-bags-4.jpg',
    ],
    sizes: [
      {
        size: '6.5 × 8 in',
        packs: [1000],
      },
      {
        size: '8 × 10 in',
        packs: [1000],
      },
      {
        size: '10 × 12 in',
        packs: [1000],
      },
      {
        size: '10 × 14 in',
        packs: [1000],
      },
      {
        size: '12 × 14 in',
        packs: [1000],
      },
      {
        size: '12 × 16 in',
        packs: [1000],
      },
    ],
  },
  {
    slug: 'pink-courier-bags',
    name: 'Pink Courier Bags With POD',
    category: 'courier-mailing-bags',
    summary: 'Coloured courier bags — pink/purple',
    description:
      'Pink-purple courier bags with POD jacket — popular with fashion, beauty and gifting brands.',
    features: ['Pink/purple coloured film', 'POD jacket', 'Permanent seal', 'Opaque'],
    specs: [
      {
        label: 'Thickness',
        value: '52 micron',
      },
      {
        label: 'Series',
        value: 'EP5',
      },
      {
        label: 'Colour',
        value: 'Pink / purple',
      },
      {
        label: 'Material',
        value: 'Co-extruded LDPE',
      },
      {
        label: 'POD pocket',
        value: 'Yes',
      },
    ],
    images: [
      '/images/catalog/pink-courier-bags-1.jpg',
      '/images/catalog/pink-courier-bags-2.jpg',
      '/images/catalog/pink-courier-bags-3.jpg',
      '/images/catalog/pink-courier-bags-4.jpg',
    ],
    sizes: [
      {
        size: '6.5 × 8 in',
        packs: [1000],
      },
      {
        size: '8 × 10 in',
        packs: [1000],
      },
      {
        size: '10 × 12 in',
        packs: [1000],
      },
      {
        size: '10 × 14 in',
        packs: [1000],
      },
      {
        size: '12 × 14 in',
        packs: [1000],
      },
      {
        size: '12 × 16 in',
        packs: [1000],
      },
    ],
  },
  {
    slug: 'yellow-courier-bags',
    name: 'Yellow Courier Bags With POD',
    category: 'courier-mailing-bags',
    summary: 'Coloured courier bags — yellow',
    description:
      'High-visibility yellow courier bags with POD jacket, easy to spot in sorting and on doorsteps.',
    features: ['Yellow coloured film', 'POD jacket', 'Permanent seal', 'Opaque'],
    specs: [
      {
        label: 'Thickness',
        value: '52 micron',
      },
      {
        label: 'Series',
        value: 'EP5',
      },
      {
        label: 'Colour',
        value: 'Yellow',
      },
      {
        label: 'Material',
        value: 'Co-extruded LDPE',
      },
      {
        label: 'POD pocket',
        value: 'Yes',
      },
    ],
    images: [
      '/images/catalog/yellow-courier-bags-1.jpg',
      '/images/catalog/yellow-courier-bags-2.jpg',
      '/images/catalog/yellow-courier-bags-3.jpg',
      '/images/catalog/yellow-courier-bags-4.jpg',
    ],
    sizes: [
      {
        size: '6.5 × 8 in',
        packs: [1000],
      },
      {
        size: '8 × 10 in',
        packs: [1000],
      },
      {
        size: '10 × 12 in',
        packs: [1000],
      },
      {
        size: '10 × 14 in',
        packs: [1000],
      },
      {
        size: '12 × 14 in',
        packs: [1000],
      },
      {
        size: '12 × 16 in',
        packs: [1000],
      },
    ],
  },
  {
    slug: 'red-courier-bags',
    name: 'Red Courier Bags With POD',
    category: 'courier-mailing-bags',
    summary: 'Coloured courier bags — red',
    description:
      'Red courier bags with POD jacket — bold colour for priority, festive or branded dispatches.',
    features: ['Red coloured film', 'POD jacket', 'Permanent seal', 'Opaque'],
    specs: [
      {
        label: 'Thickness',
        value: '52 micron',
      },
      {
        label: 'Series',
        value: 'EP5',
      },
      {
        label: 'Colour',
        value: 'Red',
      },
      {
        label: 'Material',
        value: 'Co-extruded LDPE',
      },
      {
        label: 'POD pocket',
        value: 'Yes',
      },
    ],
    images: [
      '/images/catalog/red-courier-bags-1.jpg',
      '/images/catalog/red-courier-bags-2.jpg',
      '/images/catalog/red-courier-bags-3.jpg',
      '/images/catalog/red-courier-bags-4.jpg',
    ],
    sizes: [
      {
        size: '6.5 × 8 in',
        packs: [1000],
      },
      {
        size: '8 × 10 in',
        packs: [1000],
      },
      {
        size: '10 × 12 in',
        packs: [1000],
      },
      {
        size: '10 × 14 in',
        packs: [1000],
      },
      {
        size: '12 × 14 in',
        packs: [1000],
      },
      {
        size: '12 × 16 in',
        packs: [1000],
      },
    ],
  },
  {
    slug: 'black-courier-bags',
    name: 'Black Courier Bags With POD',
    category: 'courier-mailing-bags',
    summary: 'Coloured courier bags — black',
    description:
      'All-black courier bags with POD jacket — a premium, discreet look that hides dirt in transit.',
    features: ['Black coloured film', 'POD jacket', 'Permanent seal', 'Fully opaque'],
    specs: [
      {
        label: 'Thickness',
        value: '52 micron',
      },
      {
        label: 'Series',
        value: 'EP5',
      },
      {
        label: 'Colour',
        value: 'Black',
      },
      {
        label: 'Material',
        value: 'Co-extruded LDPE',
      },
      {
        label: 'POD pocket',
        value: 'Yes',
      },
    ],
    images: [
      '/images/catalog/black-courier-bags-1.jpg',
      '/images/catalog/black-courier-bags-2.jpg',
      '/images/catalog/black-courier-bags-3.jpg',
      '/images/catalog/black-courier-bags-4.jpg',
    ],
    sizes: [
      {
        size: '6.5 × 8 in',
        packs: [1000],
      },
      {
        size: '8 × 10 in',
        packs: [1000],
      },
      {
        size: '10 × 12 in',
        packs: [1000],
      },
      {
        size: '10 × 14 in',
        packs: [1000],
      },
      {
        size: '12 × 14 in',
        packs: [1000],
      },
      {
        size: '12 × 16 in',
        packs: [1000],
      },
    ],
  },
  {
    slug: 'corrugated-carton-boxes',
    name: 'Corrugated Carton Boxes',
    category: 'corrugated-boxes',
    summary: 'EC-series plain shipping cartons',
    description:
      'Plain brown corrugated shipping cartons in a wide EC-series size range — from small accessory boxes to large multi-item shippers.',
    features: [
      'Wide EC size range',
      'Brown kraft corrugated',
      'Supplied flat',
      'Sizes in inch and cm',
    ],
    specs: [
      {
        label: 'Material',
        value: 'Corrugated kraft',
      },
      {
        label: 'Supplied',
        value: 'Flat-packed',
      },
    ],
    images: [
      '/images/catalog/corrugated-carton-boxes-1.jpg',
      '/images/catalog/corrugated-carton-boxes-2.jpg',
      '/images/catalog/corrugated-carton-boxes-3.jpg',
      '/images/catalog/corrugated-carton-boxes-4.jpg',
    ],
    sizes: [
      {
        code: 'EC12',
        size: '7.2 × 4.5 × 7 in (18.29 × 11.43 × 17.78 cm)',
        packs: [500],
      },
      {
        code: 'EC18',
        size: '9 × 7 × 3 in (22.9 × 17.8 × 7.6 cm)',
        packs: [5000, 10000],
      },
      {
        code: 'EC19',
        size: '9 × 8 × 8 in (22.9 × 20.3 × 20.3 cm)',
        packs: [500, 1000, 5000, 10000],
      },
      {
        code: 'EC23',
        size: '6 × 5 × 5 in (15.25 × 12.7 × 12.7 cm)',
        packs: [5000, 10000],
      },
      {
        code: 'EC24',
        size: '10 × 4 × 4 in (25.4 × 10.2 × 10.2 cm)',
        packs: [5000, 10000],
      },
      {
        code: 'EC25',
        size: '8 × 5 × 5 in (20.3 × 12.7 × 12.7 cm)',
        packs: [5000, 10000],
      },
      {
        code: 'EC31',
        size: '10 × 6 × 2 in (25.4 × 15.3 × 5.1 cm)',
        packs: [5000, 10000],
      },
      {
        code: 'EC32',
        size: '8 × 4 × 8 in (20.3 × 10.2 × 20.3 cm)',
        packs: [1000, 5000, 10000],
      },
      {
        code: 'EC33',
        size: '9 × 5 × 2 in (22.86 × 12.70 × 5.08 cm)',
        packs: [5000],
      },
      {
        code: 'EC34',
        size: '8 × 6 × 6 in (20.3 × 15.3 × 15.3 cm)',
        packs: [5000, 10000],
      },
      {
        code: 'EC35',
        size: '8 × 8 × 5.5 in (20.3 × 20.3 × 14 cm)',
        packs: [5000, 10000],
      },
      {
        code: 'EC42',
        size: '9 × 1 × 13.5 in (22.8 × 2.54 × 34.29 cm)',
        packs: [5000],
      },
      {
        code: 'EC44',
        size: '5 × 3 × 6.25 in (12.7 × 7.6 × 15.9 cm)',
        packs: [5000, 10000],
      },
      {
        code: 'EC5',
        size: '6 × 4.5 × 3.5 in (15.3 × 11.5 × 8.9 cm)',
        packs: [500, 1000, 5000, 10000],
      },
      {
        code: 'EC59',
        size: '6 × 4.2 × 4 in (15.3 × 10.7 × 10.2 cm)',
        packs: [1000, 5000, 10000],
      },
      {
        code: 'EC62',
        size: '5 × 4 × 1.5 in (12.7 × 10.2 × 3.8 cm)',
        packs: [200, 500, 1000, 5000, 10000],
      },
      {
        code: 'EC63',
        size: '2 × 2 × 6 in (5.1 × 5.1 × 15.3 cm)',
        packs: [1000, 5000, 10000],
      },
      {
        code: 'EC64',
        size: '4.5 × 1.5 × 8.5 in (11.5 × 3.8 × 21.6 cm)',
        packs: [1000, 5000, 10000],
      },
      {
        code: 'EC65',
        size: '3 × 3 × 10 in (7.6 × 7.6 × 25.4 cm)',
        packs: [5000, 10000],
      },
      {
        code: 'EC66',
        size: '2 × 2 × 24 in (5.08 × 5.08 × 60.96 cm)',
        packs: [5000, 10000],
      },
      {
        code: 'EC67',
        size: '2.5 × 2.5 × 24 in (6.35 × 6.25 × 60.96 cm)',
        packs: [5000, 10000],
      },
      {
        code: 'EC68',
        size: '2.5 × 2 × 24 in (6.35 × 5.08 × 60.96 cm)',
        packs: [5000, 10000],
      },
      {
        code: 'EC69',
        size: '4 × 1.5 × 24 in (10.16 × 3.81 × 60.96 cm)',
        packs: [5000, 10000],
      },
      {
        code: 'EC70',
        size: '4 × 1.5 × 11 in (10.16 × 3.81 × 27.94 cm)',
        packs: [5000, 10000],
      },
      {
        code: 'EC71',
        size: '4 × 3 × 10 in (10.16 × 7.62 × 25.4 cm)',
        packs: [5000, 10000],
      },
      {
        code: 'NC4',
        size: '7 × 4 × 4 in (17.8 × 10.2 × 10.2 cm)',
        packs: [5000],
      },
      {
        code: 'NC5',
        size: '9.5 × 6 × 3 in (24.13 × 15.24 × 7.62 cm)',
        packs: [5000],
      },
      {
        code: 'NC8',
        size: '11.5 × 5.5 × 5 in (29.21 × 13.97 × 12.70 cm)',
        packs: [5000],
      },
      {
        code: 'NC9',
        size: '12.5 × 6.5 × 6 in (31.75 × 16.51 × 15.24 cm)',
        packs: [5000],
      },
      {
        code: 'EC41',
        size: '10.5 × 1 × 10.5 in (26.7 × 2.6 × 26.7 cm)',
        packs: [5000],
      },
      {
        code: 'EC43',
        size: '5.5 × 5.5 × 6 in (14 × 14 × 15.3 cm)',
        packs: [5000, 10000],
      },
      {
        code: 'EC45',
        size: '6.7 × 4.55 × 2.35 in (17 × 11.5 × 6 cm)',
        packs: [5000],
      },
      {
        code: 'EC61',
        size: '9 × 6 × 2.5 in (22.9 × 15.3 × 6.4 cm)',
        packs: [5000, 10000],
      },
      {
        code: 'EC1',
        size: '5 × 4.5 × 3.5 in (12.7 × 11.5 × 8.9 cm)',
        packs: [200, 500, 1000, 5000, 10000],
      },
      {
        code: 'EC2',
        size: '7 × 5.25 × 4.25 in (17.8 × 13.5 × 10.8 cm)',
        packs: [200, 500, 1000, 5000, 10000],
      },
      {
        code: 'EC3',
        size: '9 × 6 × 3 in (22.9 × 15.3 × 7.6 cm)',
        packs: [200, 500, 1000, 5000, 10000],
      },
      {
        code: 'EC4',
        size: '8 × 5 × 2 in (20.3 × 12.7 × 5.1 cm)',
        packs: [5000, 10000],
      },
      {
        code: 'EC6',
        size: '7 × 4 × 2 in (17.8 × 10.2 × 5.1 cm)',
        packs: [200, 500, 1000, 5000, 10000],
      },
      {
        code: 'EC7',
        size: '7 × 4 × 3.5 in (17.8 × 10.2 × 8.9 cm)',
        packs: [1000, 5000, 10000],
      },
      {
        code: 'EC10',
        size: '8 × 4 in',
        packs: [500, 5000],
      },
      {
        code: 'EC13',
        size: '8 × 5 × 2.5 in (20.3 × 12.7 × 6.4 cm)',
        packs: [200, 500, 1000, 5000, 10000],
      },
      {
        code: 'EC16',
        size: '4.5 × 4.5 × 1.5 in (11.5 × 11.5 × 3.8 cm)',
        packs: [200, 500, 1000, 5000, 10000],
      },
      {
        code: 'EC17',
        size: '9 × 6 × 2 in (22.9 × 15.3 × 5.1 cm)',
        packs: [5000, 10000],
      },
      {
        code: 'EC21',
        size: '4 × 4 × 4 in (10.2 × 10.2 × 10.2 cm)',
        packs: [200, 500, 1000, 5000, 10000],
      },
      {
        code: 'B0',
        size: '7.5 × 4.5 × 3.5 in (19 × 11.5 × 8.9 cm)',
        packs: [200, 500, 1000, 5000, 10000],
      },
      {
        code: 'B01',
        size: '8 × 7 × 5 in (20.3 × 17.8 × 12.7 cm)',
        packs: [200, 500, 1000, 5000, 10000],
      },
      {
        code: 'B28',
        size: '8.5 × 6 × 3 in (21.6 × 15.3 × 7.6 cm)',
        packs: [500, 1000, 5000, 10000],
      },
      {
        code: 'A3',
        size: '5.3 × 5.3 × 5.3 in (13.5 × 13.5 × 13.5 cm)',
        packs: [500],
      },
    ],
  },
  {
    slug: 'amazon-corrugated-boxes',
    name: 'Amazon Corrugated Boxes',
    category: 'corrugated-boxes',
    summary: 'NC-series cartons for Amazon sellers',
    description:
      'Corrugated cartons in Amazon’s NC-series sizes for Seller Flex and Easy Ship dispatches.',
    features: [
      'Amazon NC size codes',
      'Sturdy corrugated board',
      'Supplied flat',
      'Sizes in inch and cm',
    ],
    specs: [
      {
        label: 'Material',
        value: 'Corrugated kraft',
      },
      {
        label: 'Supplied',
        value: 'Flat-packed',
      },
    ],
    images: [
      '/images/catalog/amazon-corrugated-boxes-1.jpg',
      '/images/catalog/amazon-corrugated-boxes-2.jpg',
      '/images/catalog/amazon-corrugated-boxes-3.jpg',
      '/images/catalog/amazon-corrugated-boxes-4.jpg',
    ],
    sizes: [
      {
        code: 'NC4',
        size: '7 × 4 × 4 in (17.8 × 10.2 × 10.2 cm)',
        packs: [1000, 5000],
      },
      {
        code: 'NC5',
        size: '9.5 × 6 × 3 in (24.1 × 15.2 × 7.6 cm)',
        packs: [1000, 5000],
      },
      {
        code: 'NC8',
        size: '12.5 × 6.5 × 6 in (29.21 × 13.97 × 12.70 cm)',
        packs: [5000],
      },
      {
        code: 'NC9',
        size: '12.5 × 6.5 × 6 in (31.8 × 16.5 × 15.2 cm)',
        packs: [5000],
      },
      {
        size: '7.09 × 5.51 × 2.76 in (18 × 14 × 7 cm)',
        packs: [5000],
      },
      {
        size: '9.84 × 5.90 × 3.54 in (25 × 15 × 9 cm)',
        packs: [5000],
      },
      {
        size: '10.98 × 7.87 × 3.77 in (28 × 20 × 9.6 cm)',
        packs: [5000],
      },
      {
        size: '12 × 9.84 × 2.75 in (30.5 × 25 × 7 cm)',
        packs: [5000],
      },
    ],
  },
  {
    slug: 'direct-thermal-labels',
    name: 'Direct Thermal Shipping Labels',
    category: 'shipping-labels',
    summary: 'Top-coated rolls: 3×5, 4×4, 4×6',
    description:
      'Top-coated direct thermal label rolls in 3 × 5, 4 × 4 and 4 × 6 in, including high-volume 2000-label rolls for industrial printers.',
    features: [
      'Top-coated, smudge resistant',
      'No ribbon or ink',
      'Desktop & industrial rolls',
      'Permanent adhesive',
    ],
    specs: [
      {
        label: 'Type',
        value: 'Direct thermal, top coated',
      },
      {
        label: 'Format',
        value: 'Roll',
      },
      {
        label: 'Adhesive',
        value: 'Permanent',
      },
    ],
    images: [
      '/images/catalog/direct-thermal-labels-1.jpg',
      '/images/catalog/direct-thermal-labels-2.jpg',
      '/images/catalog/direct-thermal-labels-3.jpg',
      '/images/catalog/direct-thermal-labels-4.jpg',
    ],
    sizes: [
      {
        size: '3 × 5 in (76 × 127 mm)',
        variant: '400 labels / roll',
        packs: [10],
      },
      {
        size: '3 × 5 in (76 × 127 mm)',
        variant: '500 labels / roll',
        packs: [10, 30, 60, 120],
      },
      {
        size: '4 × 4 in (100 × 100 mm)',
        variant: '500 labels / roll',
        packs: [10, 30, 60, 120, 180],
      },
      {
        size: '4 × 6 in (100 × 150 mm)',
        variant: '2000 labels / roll',
        packs: [4, 8, 16, 32],
      },
      {
        size: '4 × 6 in (100 × 150 mm)',
        variant: '400 labels / roll',
        packs: [10, 30, 60, 120, 180],
      },
      {
        size: '4 × 6 in (100 × 150 mm)',
        packs: [4, 8, 16, 32],
      },
      {
        size: '3 × 5 in',
        variant: '400 labels / roll',
        packs: [10, 30],
      },
      {
        size: '4 × 6 in',
        variant: '400 labels / roll',
        packs: [10, 30],
      },
      {
        size: '76 × 127 in',
        packs: [10, 30, 60, 120],
      },
    ],
  },
  {
    slug: 'plain-bopp-tape',
    name: 'Plain BOPP Tape',
    category: 'packaging-tapes',
    summary: 'Brown and transparent, 48/72 mm',
    description:
      'Plain brown and transparent 40 micron BOPP tape in 48 mm and 72 mm widths, 65 m rolls, sold by the carton.',
    features: ['Brown & transparent', '40 micron BOPP', '48 mm and 72 mm widths', '65 m per roll'],
    specs: [
      {
        label: 'Material',
        value: 'BOPP film, 40 micron',
      },
      {
        label: 'Adhesive',
        value: 'Water-based acrylic',
      },
      {
        label: 'Length',
        value: '65 m / roll',
      },
    ],
    images: [
      '/images/catalog/plain-bopp-tape-1.jpg',
      '/images/catalog/plain-bopp-tape-2.jpg',
      '/images/catalog/plain-bopp-tape-3.jpg',
      '/images/catalog/plain-bopp-tape-4.jpg',
    ],
    sizes: [
      {
        size: '72 mm × 65 m',
        variant: 'Brown',
        packs: [48, 144],
      },
      {
        size: '48 mm × 65 m',
        variant: 'Brown',
        packs: [72, 144],
      },
      {
        size: '72 mm × 65 m',
        variant: 'Transparent',
        packs: [48],
      },
      {
        size: '48 mm × 65 m',
        variant: 'Transparent',
        packs: [72, 144],
      },
      {
        size: '24 mm × 65 m',
        variant: 'Transparent',
        packs: [144],
      },
    ],
  },
  {
    slug: 'jiomart-jiffy-bags',
    name: 'JioMart Poly Jiffy Bags',
    category: 'courier-mailing-bags',
    summary: 'Barcoded 120 µm jiffy bags',
    description:
      'Heavy 120 micron barcoded poly jiffy bags in the JMD P1 size for JioMart dispatch.',
    features: ['120 micron heavy-duty film', 'Barcoded for JioMart', 'Permanent seal', 'Opaque'],
    specs: [
      {
        label: 'Thickness',
        value: '120 micron',
      },
      {
        label: 'Series',
        value: 'JMD P1',
      },
      {
        label: 'Material',
        value: 'LDPE, 120 micron',
      },
      {
        label: 'Closure',
        value: 'Permanent self-adhesive',
      },
    ],
    images: [
      '/images/catalog/jiomart-jiffy-bags-1.jpg',
      '/images/catalog/jiomart-jiffy-bags-2.jpg',
    ],
    sizes: [
      {
        size: '240 × 290 mm + 40 mm flap',
        packs: [500],
      },
    ],
  },
  {
    slug: 'gold-loan-tamper-evident-pouches',
    name: 'Gold Loan Tamper Evident Pouches',
    category: 'tamper-evident-packaging',
    summary: 'Jewellery-loan envelopes for banks & NBFCs',
    description:
      'Gold loan and jewellery loan envelopes designed for banks and NBFCs to store and audit pledged valuables. 120 micron film, lip closure and audit panel; any attempt to open leaves visible evidence.',
    features: [
      '120 micron heavy film',
      'Lip closure with audit panel',
      'Irreversible tamper evidence',
      'Serial numbering on request',
    ],
    specs: [
      {
        label: 'Thickness',
        value: '120 micron',
      },
      {
        label: 'Material',
        value: 'LDPE, 120 micron',
      },
      {
        label: 'Closure',
        value: 'Lip closure (AUDIT-2)',
      },
    ],
    images: [
      '/images/catalog/gold-loan-tamper-evident-pouches-1.jpg',
      '/images/catalog/gold-loan-tamper-evident-pouches-2.jpg',
      '/images/catalog/gold-loan-tamper-evident-pouches-3.jpg',
      '/images/catalog/gold-loan-tamper-evident-pouches-4.jpg',
    ],
    sizes: [
      {
        size: '5 × 7 in + 1 in flap',
        packs: [1000, 5000],
      },
      {
        size: '6.5 × 11 in + 1 in flap',
        packs: [1000, 5000],
      },
    ],
  },
  {
    slug: 'pizza-type-boxes',
    name: 'Pizza-Type Corrugated Boxes',
    category: 'corrugated-boxes',
    summary: 'Die-cut fold-lock mailer boxes',
    description:
      'Die-cut pizza-style mailer boxes that fold and lock without tape — a neat, premium unboxing for apparel, cosmetics and gifts.',
    features: [
      'Fold-lock, no tape needed',
      'Die-cut brown corrugated',
      'Premium unboxing',
      'Sizes in inch and cm',
    ],
    specs: [
      {
        label: 'Material',
        value: 'E-flute corrugated kraft',
      },
      {
        label: 'Style',
        value: 'Roll-end tuck front',
      },
    ],
    images: [
      '/images/catalog/pizza-type-boxes-1.jpg',
      '/images/catalog/pizza-type-boxes-2.jpg',
      '/images/catalog/pizza-type-boxes-3.jpg',
      '/images/catalog/pizza-type-boxes-4.jpg',
    ],
    sizes: [
      {
        code: 'EC36',
        size: '4 × 4 × 1.5 in (10.16 × 10.16 × 3.81 cm)',
        packs: [500, 1000, 5000, 10000],
      },
      {
        code: 'EC37',
        size: '6 × 4 × 2 in (15.24 × 10.16 × 5.08 cm)',
        packs: [500, 1000, 5000, 10000],
      },
      {
        code: 'EC38',
        size: '4.2 × 3 × 1 in (10.67 × 7.62 × 2.54 cm)',
        packs: [1000, 5000, 10000],
      },
      {
        code: 'EC47',
        size: '7 × 7 × 2 in (17.78 × 17.78 × 5.08 cm)',
        packs: [1000, 5000, 10000],
      },
      {
        code: 'EC49',
        size: '9.75 × 9.75 × 2 in (24.77 × 24.77 × 5.08 cm)',
        packs: [1000, 5000, 10000],
      },
      {
        code: 'EC60',
        size: '6.5 × 3 × 2.25 in (16.51 × 7.62 × 5.72 cm)',
        packs: [1000, 5000, 10000],
      },
      {
        code: 'EC60',
        size: '6.5 × 3 × 2.25 in (16.51 × 7.62 × 5.72 cm)',
        packs: [5000, 10000],
      },
      {
        code: 'EC36',
        size: '4 × 4 × 1.5 in (10.16 × 10.16 × 3.81 cm)',
        packs: [500, 1000, 5000, 10000],
      },
      {
        code: 'EC37',
        size: '6 × 4 × 2 in (15.24 × 10.16 × 5.08 cm)',
        packs: [500, 1000, 5000, 10000],
      },
      {
        code: 'EC38',
        size: '4.2 × 3 × 1 in (10.67 × 7.62 × 2.54 cm)',
        packs: [1000, 5000, 10000],
      },
      {
        code: 'EC47',
        size: '7 × 7 × 2 in (17.78 × 17.78 × 5.08 cm)',
        packs: [1000, 5000, 10000],
      },
      {
        code: 'EC49',
        size: '9.75 × 9.75 × 2 in (24.77 × 24.77 × 5.08 cm)',
        packs: [1000, 5000, 10000],
      },
    ],
  },
  {
    slug: 'industrial-packaging-supplies',
    name: 'Industrial Packaging Supplies',
    category: 'industrial-packaging',
    summary: 'Stretch film, strapping, VCI and liners',
    description:
      'Stretch film, PP/PET strapping, VCI film and heavy-duty pallet liners for palletised loads and machined parts that have to survive long-haul handling. Supplied to your load size and machine spec.',
    features: [
      'Manual & machine stretch film',
      'PP and PET strapping',
      'VCI film for metal parts',
      'Heavy-duty pallet liners',
    ],
    specs: [
      {
        label: 'Supply',
        value: 'Made to order',
      },
    ],
    images: ['/images/products/industrial-packaging.svg'],
    sizes: [],
  },
  {
    slug: 'custom-branded-packaging',
    name: 'Custom Branded Packaging',
    category: 'custom-packaging',
    summary: 'Your artwork, your dimensions',
    description:
      'Branded courier bags, tapes, labels and cartons produced to your artwork, dimensions and material brief — from a first sample through to scheduled production runs.',
    features: [
      'Made to your dimensions',
      'Brand printing and finishes',
      'Sampling before production',
      'Scheduled repeat runs',
    ],
    specs: [
      {
        label: 'Supply',
        value: 'Made to order',
      },
    ],
    images: ['/images/products/custom-packaging.svg'],
    sizes: [],
  },
]

export const catalogBySlug = (slug: string) => catalog.find((c) => c.slug === slug)
