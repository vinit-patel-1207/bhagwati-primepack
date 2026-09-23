import type { LucideIcon } from 'lucide-react'
import {
  ShoppingCart,
  Store,
  ShoppingBasket,
  Pill,
  Truck,
  Factory,
  HardHat,
  Landmark,
  Boxes,
  BuildingComplex,
} from 'lucide-react'

export type Industry = {
  slug: string
  name: string
  summary: string
  needs: string[]
  recommended: string[]
  icon: LucideIcon
}

export const industries: Industry[] = [
  {
    slug: 'e-commerce',
    name: 'E-Commerce',
    summary:
      'Fast, safe and reliable shipping solutions that keep dispatch moving and returns down.',
    needs: [
      'High daily dispatch volume',
      'Damage and pilferage in transit',
      'Courier weight slabs',
      'Brand experience at unboxing',
    ],
    recommended: ['courier-mailing-bags', 'bubble-packaging', 'kraft-packaging', 'shipping-labels'],
    icon: ShoppingCart,
  },
  {
    slug: 'retail',
    name: 'Retail',
    summary: 'Attractive and durable packaging for shelf, counter and last-mile retail delivery.',
    needs: ['Presentation at point of sale', 'Mixed basket sizes', 'Seasonal volume spikes'],
    recommended: ['kraft-packaging', 'corrugated-boxes', 'packaging-tapes', 'custom-packaging'],
    icon: Store,
  },
  {
    slug: 'fmcg',
    name: 'FMCG',
    summary: 'Packaging for consumer goods and food-adjacent products moving at high turnover.',
    needs: [
      'Fast-moving repeat volumes',
      'Consistent carton sizing',
      'Secondary and transit packaging',
    ],
    recommended: ['corrugated-boxes', 'packaging-tapes', 'kraft-packaging'],
    icon: ShoppingBasket,
  },
  {
    slug: 'pharmaceuticals',
    name: 'Pharmaceuticals',
    summary:
      'Safe and compliant packaging where traceability and tamper evidence are non-negotiable.',
    needs: ['Tamper evidence', 'Batch traceability', 'Protection for fragile primary packs'],
    recommended: [
      'tamper-evident-packaging',
      'bubble-packaging',
      'corrugated-boxes',
      'shipping-labels',
    ],
    icon: Pill,
  },
  {
    slug: 'logistics',
    name: 'Logistics',
    summary:
      'Strong packaging for supply chain efficiency across hubs, sorters and long-haul lanes.',
    needs: ['Rough handling across hubs', 'Label scannability', 'Palletised load stability'],
    recommended: ['packaging-tapes', 'shipping-labels', 'industrial-packaging', 'corrugated-boxes'],
    icon: Truck,
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    summary: 'Industrial-grade packaging solutions for components, spares and finished goods.',
    needs: [
      'Heavy and sharp-edged loads',
      'Corrosion on metal parts',
      'Long storage before dispatch',
    ],
    recommended: ['industrial-packaging', 'corrugated-boxes', 'packaging-tapes'],
    icon: Factory,
  },
  {
    slug: 'industrial',
    name: 'Industrial',
    summary: 'Heavy-duty and custom packaging built around awkward shapes and high unit weights.',
    needs: ['Non-standard dimensions', 'High unit weight', 'Export-grade transit protection'],
    recommended: ['industrial-packaging', 'custom-packaging', 'corrugated-boxes'],
    icon: HardHat,
  },
  {
    slug: 'banking',
    name: 'Banking / Confidential Documents',
    summary: 'Secure and confidential packaging with a verifiable chain of custody.',
    needs: ['Evidence of tampering', 'Serial-number tracking', 'Confidentiality in transit'],
    recommended: ['tamper-evident-packaging', 'shipping-labels', 'courier-mailing-bags'],
    icon: Landmark,
  },
  {
    slug: 'wholesale-distribution',
    name: 'Wholesale & Distribution',
    summary: 'Bulk packaging and consumables supplied on a planned replenishment cycle.',
    needs: ['Large repeat volumes', 'Consistent pricing', 'Predictable stock availability'],
    recommended: ['corrugated-boxes', 'packaging-tapes', 'industrial-packaging'],
    icon: Boxes,
  },
  {
    slug: 'corporate-institutional',
    name: 'Corporate & Institutional',
    summary: 'Branded and bulk packaging for offices, campuses and institutional despatch.',
    needs: ['Branded presentation', 'Bulk internal despatch', 'Document security'],
    recommended: ['custom-packaging', 'tamper-evident-packaging', 'kraft-packaging'],
    icon: BuildingComplex,
  },
]

export const industryBySlug = (slug: string) => industries.find((i) => i.slug === slug)
