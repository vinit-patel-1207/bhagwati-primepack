import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Product } from '@/data/products'
import { ProductVisual } from './ProductVisual'
import { revealItem } from './ui/Reveal'

/**
 * Category card from Design.png: pack-shot on cream, then a white panel with
 * the name, the one-line descriptor and an "Explore more" link that opens the
 * catalogue filtered to this category.
 */
export function ProductCard({ product }: { product: Product }) {
  return (
    <motion.article variants={revealItem} className="h-full">
      <Link
        to={`/products?category=${product.slug}`}
        className="group border-maroon/8 flex h-full flex-col overflow-hidden rounded-xl border bg-white/70 shadow-[0_1px_2px_rgba(75,64,58,0.04)] transition-shadow hover:shadow-[0_10px_30px_rgba(75,64,58,0.10)]"
      >
        <ProductVisual slug={product.slug} name={product.name} icon={product.icon} />

        <div className="flex flex-1 flex-col gap-1 bg-white p-4">
          <h3 className="text-base font-semibold">{product.name}</h3>
          <p className="text-muted text-sm">{product.short}</p>

          <span className="text-maroon mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold">
            Explore more
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>
        </div>
      </Link>
    </motion.article>
  )
}
