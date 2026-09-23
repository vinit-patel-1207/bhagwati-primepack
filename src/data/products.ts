import type { LucideIcon } from 'lucide-react'
import {
  Mail,
  ShieldCheck,
  CircleDashed,
  Leaf,
  Package,
  Tag,
  Barcode,
  Factory,
  Sparkles,
} from 'lucide-react'

export type Product = {
  slug: string
  name: string
  short: string
  description: string
  icon: LucideIcon
  specs: string[]
  bestFor: string[]
}

export const products: Product[] = [
  {
    slug: 'courier-mailing-bags',
    name: 'Courier & Mailing Bags',
    short: 'Secure & durable shipping bags',
    description:
      'Co-extruded poly courier bags with a self-adhesive permanent seal and an opaque body, so contents stay private and dry in transit. Available with or without a document pocket.',
    icon: Mail,
    specs: [
      '50–60 micron co-extruded film',
      'Permanent hot-melt seal strip',
      'Optional POD document pocket',
      'Sizes from 6×8 in to 16×20 in',
    ],
    bestFor: ['E-Commerce', 'Retail', 'Logistics'],
  },
  {
    slug: 'tamper-evident-packaging',
    name: 'Tamper Evident Packaging',
    short: 'Safety & authenticity',
    description:
      'Security bags that show clear, irreversible evidence if opened — void-print seals and serial numbering for a traceable chain of custody.',
    icon: ShieldCheck,
    specs: [
      'VOID-print tamper seal',
      'Sequential serial numbering',
      'Tear-resistant film',
      'Optional barcode panel',
    ],
    bestFor: ['Banking', 'Pharmaceuticals', 'Corporate & Institutional'],
  },
  {
    slug: 'bubble-packaging',
    name: 'Bubble Packaging',
    short: 'Lightweight & protective',
    description:
      'Air-bubble film and bubble-lined mailers that absorb shock without adding weight — the low-cost way to protect fragile items and keep courier slabs down.',
    icon: CircleDashed,
    specs: [
      '10 mm and 25 mm bubble',
      'Rolls and pre-cut pouches',
      'Bubble-lined kraft mailers',
      'Anti-static grade on request',
    ],
    bestFor: ['E-Commerce', 'Electronics', 'Retail'],
  },
  {
    slug: 'kraft-packaging',
    name: 'Kraft Packaging',
    short: 'Eco-friendly & strong',
    description:
      'Recyclable kraft paper mailers, pouches and wraps for brands moving away from plastic without giving up strength or a clean unboxing.',
    icon: Leaf,
    specs: [
      '80–140 GSM virgin kraft',
      'Recyclable and biodegradable',
      'Printable outer surface',
      'Paper or bubble lining',
    ],
    bestFor: ['E-Commerce', 'Retail', 'FMCG'],
  },
  {
    slug: 'corrugated-boxes',
    name: 'Corrugated Boxes',
    short: 'Reliable & sturdy',
    description:
      'Three-ply and five-ply corrugated cartons made to your internal dimensions, with the burst strength matched to the weight you actually ship.',
    icon: Package,
    specs: [
      '3-ply and 5-ply construction',
      'Made to your internal dimensions',
      'Specified bursting strength',
      'Single or multi-colour printing',
    ],
    bestFor: ['Manufacturing', 'Logistics', 'Wholesale & Distribution'],
  },
  {
    slug: 'packaging-tapes',
    name: 'Packaging Tapes',
    short: 'Strong adhesion',
    description:
      'BOPP self-adhesive tapes in clear, brown and custom print, plus specialist tapes for cold storage and heavy cartons.',
    icon: Tag,
    specs: [
      '40–65 micron BOPP',
      'Clear, brown and printed',
      'Widths 48 mm and 72 mm',
      'Low-temperature grade available',
    ],
    bestFor: ['Logistics', 'Manufacturing', 'Retail'],
  },
  {
    slug: 'shipping-labels',
    name: 'Shipping Labels',
    short: 'Clear & professional',
    description:
      'Direct thermal and thermal transfer labels that run clean through desktop and industrial printers, with adhesives chosen for your carton surface.',
    icon: Barcode,
    specs: [
      'Direct thermal & thermal transfer',
      'Fanfold and roll formats',
      'Permanent or removable adhesive',
      'Standard courier sizes in stock',
    ],
    bestFor: ['E-Commerce', 'Logistics', 'Warehousing'],
  },
  {
    slug: 'industrial-packaging',
    name: 'Industrial Packaging',
    short: 'For heavy-duty needs',
    description:
      'Stretch film, strapping, VCI and heavy-duty liners for palletised loads and machined parts that have to survive long-haul handling.',
    icon: Factory,
    specs: [
      'Manual & machine stretch film',
      'PP and PET strapping',
      'VCI film for metal parts',
      'Heavy-duty pallet liners',
    ],
    bestFor: ['Manufacturing', 'Industrial', 'Logistics'],
  },
  {
    slug: 'custom-packaging',
    name: 'Custom Packaging',
    short: 'Built to your specification',
    description:
      'Branded packaging developed to your artwork, dimensions and material brief — from a first sample through to scheduled production runs.',
    icon: Sparkles,
    specs: [
      'Made to your dimensions',
      'Brand printing and finishes',
      'Sampling before production',
      'Scheduled repeat runs',
    ],
    bestFor: ['E-Commerce', 'FMCG', 'Corporate & Institutional'],
  },
]

export const productBySlug = (slug: string) => products.find((p) => p.slug === slug)
