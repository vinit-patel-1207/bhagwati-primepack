import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Product } from '@/data/products'
import { ProductVisual } from './ProductVisual'
import { revealItem } from './ui/Reveal'

/**
 * Catalogue card from Design.png: pack-shot on cream, then a white panel with
 * the name, the one-line descriptor and the action row.
 *
 * `action="quote"` renders the filled "Request Quote" pill used on the Products
 * page; the default renders the twin circular arrows used on the home grid —
 * filled = open the product, outlined = jump straight to a quote.
 */
export function ProductCard({
  product,
  action = 'arrows',
}: {
  product: Product
  action?: 'arrows' | 'quote'
}) {
  return (
    <motion.article variants={revealItem} className="h-full">
      <div className="group border-maroon/8 flex h-full flex-col overflow-hidden rounded-xl border bg-white/70 shadow-[0_1px_2px_rgba(75,64,58,0.04)] transition-shadow hover:shadow-[0_10px_30px_rgba(75,64,58,0.10)]">
        <ProductVisual slug={product.slug} name={product.name} icon={product.icon} />

        <div className="flex flex-1 flex-col gap-1 bg-white p-4">
          <h3 className="text-base font-semibold">{product.name}</h3>
          <p className="text-muted text-sm">{product.short}</p>

          <div className="mt-auto pt-4">
            {action === 'quote' ? (
              <Link
                to={`/contact?product=${product.slug}`}
                className="bg-maroon text-cream hover:bg-maroon-dark inline-flex items-center gap-1.5 rounded-md px-4 py-2 text-xs font-semibold transition-colors"
              >
                Request Quote
              </Link>
            ) : (
              <div className="flex items-center justify-between">
                <Link
                  to={`/products#${product.slug}`}
                  aria-label={`View ${product.name}`}
                  className="bg-maroon text-cream hover:bg-maroon-dark grid h-9 w-9 place-items-center rounded-full transition-transform group-hover:translate-x-0.5"
                >
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  to={`/contact?product=${product.slug}`}
                  aria-label={`Request a quote for ${product.name}`}
                  className="border-maroon/30 text-maroon hover:bg-maroon hover:text-cream grid h-9 w-9 place-items-center rounded-full border transition-colors"
                >
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}
