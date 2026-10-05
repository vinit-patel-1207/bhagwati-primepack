import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Ruler } from 'lucide-react'
import type { CatalogItem } from '@/data/catalog'
import { productBySlug } from '@/data/products'
import { Img, PhotoPlaceholder } from './Img'
import { WhatsAppQuote } from './WhatsAppQuote'
import { revealItem } from './ui/Reveal'

/** Catalogue item card: photo, name, key spec chips, details + WhatsApp quote. */
export function CatalogCard({ item }: { item: CatalogItem }) {
  const category = productBySlug(item.category)
  const Icon = category?.icon
  const thickness = item.specs.find((s) => s.label === 'Thickness')?.value
  const href = `/products/${item.slug}`

  return (
    <motion.article variants={revealItem} className="h-full">
      <div className="group border-maroon/8 flex h-full flex-col overflow-hidden rounded-xl border bg-white shadow-[0_1px_2px_rgba(75,64,58,0.04)] transition-shadow hover:shadow-[0_10px_30px_rgba(75,64,58,0.10)]">
        <Link
          to={href}
          tabIndex={-1}
          aria-hidden="true"
          className="block aspect-[4/3] overflow-hidden bg-white p-3"
        >
          <Img
            src={item.images[0] ?? ''}
            alt=""
            fit="contain"
            className="h-full w-full"
            imgClassName="transition-transform duration-500 group-hover:scale-105"
            fallback={
              <PhotoPlaceholder
                label={item.name}
                icon={Icon && <Icon className="h-12 w-12" strokeWidth={1.4} aria-hidden="true" />}
              />
            }
          />
        </Link>

        <div className="border-maroon/8 flex flex-1 flex-col gap-1 border-t p-4">
          {category && (
            <p className="text-maroon text-[11px] font-semibold tracking-wider uppercase">
              {category.name}
            </p>
          )}
          <h3 className="text-base leading-snug font-semibold">
            <Link to={href} className="hover:text-maroon">
              {item.name}
            </Link>
          </h3>
          <p className="text-muted text-sm">{item.summary}</p>

          <ul className="mt-2 flex flex-wrap gap-1.5 text-xs">
            {thickness && (
              <li className="bg-cream text-ink rounded-full px-2.5 py-1">{thickness}</li>
            )}
            <li className="bg-cream text-ink inline-flex items-center gap-1 rounded-full px-2.5 py-1">
              <Ruler className="h-3 w-3" aria-hidden="true" />
              {item.sizes.length
                ? `${item.sizes.length} size${item.sizes.length === 1 ? '' : 's'}`
                : 'Made to size'}
            </li>
          </ul>

          <div className="mt-auto flex items-center justify-between gap-2 pt-4">
            <Link
              to={href}
              className="bg-maroon text-cream hover:bg-maroon-dark inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold transition-colors"
            >
              {item.sizes.length ? 'Size chart' : 'Details'}
            </Link>
            <WhatsAppQuote item={item} />
          </div>
        </div>
      </div>
    </motion.article>
  )
}
