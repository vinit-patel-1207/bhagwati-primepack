import { site } from './site.ts'
import type { CatalogItem, SizeRow } from './catalog.ts'

export const whatsappLink = (text: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`

/**
 * Pre-filled quote request for one catalogue item, optionally pinned to a
 * size row. wa.me can't attach files, so the photo goes in as a URL —
 * WhatsApp renders it as a link preview.
 */
export function quoteMessage(item: CatalogItem, size?: SizeRow) {
  const thickness = size?.thickness ?? item.specs.find((s) => s.label === 'Thickness')?.value
  const lines = [
    `Hi ${site.name}, I'd like a quote for:`,
    '',
    `*${item.name}*`,
    size?.code && `Code: ${size.code}`,
    size?.size && `Size: ${size.size}`,
    size?.variant && `Variant: ${size.variant}`,
    thickness && `Thickness: ${thickness}`,
    size?.packs.length &&
      `Pack options: ${size.packs.map((n) => n.toLocaleString('en-IN')).join(' / ')}`,
    !size && item.sizes.length > 0 && `Sizes available: ${item.sizes.length}`,
    '',
    'Quantity required: ',
    'Delivery location: ',
    '',
    `Product: ${site.url}/products/${item.slug}`,
    item.images[0] && `Image: ${site.url}${item.images[0]}`,
  ]
  return lines.filter((l) => l !== undefined && l !== false && l !== 0).join('\n')
}

export const quoteLink = (item: CatalogItem, size?: SizeRow) =>
  whatsappLink(quoteMessage(item, size))
