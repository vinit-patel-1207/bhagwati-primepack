import type { CatalogItem, SizeRow } from '@/data/catalog'
import { quoteLink } from '@/data/whatsapp'

export function WhatsAppIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`${className} fill-current`} aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2m0 1.8a8.2 8.2 0 1 1-4.2 15.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 0 1 12 3.8m-3.7 4c-.2 0-.5.1-.7.4-.3.3-.9.9-.9 2.1s.9 2.4 1 2.6c.2.2 1.8 2.8 4.4 3.8 2.2.9 2.6.7 3.1.6.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2l-.6-.3-1.6-.8c-.2-.1-.4-.1-.6.1l-.8 1c-.2.2-.3.2-.5.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.5-1.9-.2-.2 0-.4.1-.5l.4-.5.3-.5v-.5l-.7-1.6c-.2-.4-.4-.4-.6-.4z" />
    </svg>
  )
}

/**
 * "Quote on WhatsApp" for one catalogue item (or one of its sizes). Opens
 * wa.me with the product, size, thickness, page link and photo pre-filled.
 * Icon-only round button; `big` for the product page header.
 */
export function WhatsAppQuote({
  item,
  size,
  big = false,
}: {
  item: CatalogItem
  size?: SizeRow
  big?: boolean
}) {
  const what = [item.name, size?.code, size?.size].filter(Boolean).join(' ')
  return (
    <a
      href={quoteLink(item, size)}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`Ask for a quote on WhatsApp: ${what}`}
      title="Ask for a quote on WhatsApp"
      className={`inline-grid shrink-0 place-items-center rounded-full bg-[#25D366] text-white transition-transform hover:scale-110 ${
        big ? 'h-12 w-12' : 'h-9 w-9'
      }`}
    >
      <WhatsAppIcon className={big ? 'h-6 w-6' : 'h-4.5 w-4.5'} />
    </a>
  )
}
