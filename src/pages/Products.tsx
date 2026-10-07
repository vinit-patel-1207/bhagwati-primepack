import { useDeferredValue, useId, useMemo, useState } from 'react'
import { Search, X } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import { Seo } from '@/components/Seo'
import { PageHero } from '@/components/PageHero'
import { CatalogCard } from '@/components/CatalogCard'
import { RevealGroup } from '@/components/ui/Reveal'
import { CtaSection } from '@/components/CtaSection'
import { products } from '@/data/products'
import { catalog } from '@/data/catalog'
import { filterCatalog } from '@/data/search'
import { img } from '@/data/images'
import { site } from '@/data/site'

const countFor = (slug: string) => catalog.filter((c) => c.category === slug).length

export default function Products() {
  // Marketplace links on the homepage prefill this search from the URL.
  const [params, setParams] = useSearchParams()
  // Live search: results follow the box as you type (deferred so typing stays smooth).
  const [query, setQuery] = useState(() => params.get('q') ?? '')
  const deferredQuery = useDeferredValue(query)
  // Category lives in the URL so footer/home links and shares land pre-filtered.
  const category = params.get('category') ?? ''
  const setCategory = (slug: string) =>
    setParams(slug ? { category: slug } : {}, { replace: true, preventScrollReset: true })
  const searchId = useId()
  const categoryId = useId()

  const results = useMemo(
    () => filterCatalog(catalog, deferredQuery, category || null),
    [deferredQuery, category],
  )

  return (
    <>
      <Seo
        title="Packaging Products"
        description="Courier bags, tamper evident packaging, bubble and kraft mailers, corrugated boxes, tapes, labels, industrial and custom packaging — supplied in bulk across India."
        path="/products"
      />

      <PageHero
        eyebrow="Our Products"
        title={
          <>
            Quality Packaging
            <br />
            for Every Industry
          </>
        }
        subtitle="Explore our wide range of packaging products designed to protect, store and deliver your valuable goods."
        image={img.heroProducts}
      />

      {/* Product search with the category filter beside it. */}
      <div className="container-page pt-8">
        <div
          role="search"
          className="border-maroon/10 flex items-center gap-2 rounded-2xl border bg-white p-2 shadow-[0_1px_2px_rgba(75,64,58,0.04)]"
        >
          <div className="relative min-w-0 flex-1">
            <Search
              className="text-muted pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2"
              aria-hidden="true"
            />
            <label htmlFor={searchId} className="sr-only">
              Search products
            </label>
            <input
              id={searchId}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products…"
              className="placeholder:text-muted/70 w-full rounded-lg bg-transparent py-2.5 pr-9 pl-9 text-sm focus:outline-none"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                aria-label="Clear search"
                className="text-muted hover:text-maroon absolute top-1/2 right-1.5 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            )}
          </div>

          <span aria-hidden="true" className="bg-maroon/10 h-7 w-px shrink-0" />
          <label htmlFor={categoryId} className="sr-only">
            Category
          </label>
          <select
            id={categoryId}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="text-ink w-[42%] shrink-0 truncate rounded-lg bg-transparent py-2.5 pl-2 text-sm sm:w-64"
          >
            <option value="">All Products ({catalog.length})</option>
            {products.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.name} ({countFor(p.slug)})
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="container-page py-10">
        <div>
          <p className="text-muted mb-5 text-sm" role="status" aria-live="polite">
            Showing {results.length} product{results.length === 1 ? '' : 's'}
            {deferredQuery.trim() && <> for “{deferredQuery.trim()}”</>}
          </p>

          {results.length === 0 ? (
            <div className="card-surface p-10 text-center">
              <p className="text-muted text-sm">
                No products match that search. Try a different term, or{' '}
                <Link to="/contact" className="text-maroon font-semibold hover:underline">
                  tell us what you need
                </Link>{' '}
                — we also make packaging to specification.
              </p>
            </div>
          ) : (
            <RevealGroup
              key={`${deferredQuery}-${category}`}
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {results.map((c) => (
                <CatalogCard key={c.slug} item={c} />
              ))}
            </RevealGroup>
          )}
        </div>
      </div>

      <CtaSection
        title="Need packaging made to your specification?"
        body={`Send ${site.name} your dimensions, material and volume — we will come back with options, samples and a price.`}
        primary={{ label: 'Request a Quote', to: '/contact' }}
        secondary={{ label: 'View Industries', to: '/industries' }}
      />
    </>
  )
}