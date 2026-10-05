import { useId, useMemo, useState } from 'react'
import { ArrowRight, Search } from 'lucide-react'
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

const PER_PAGE = 12

const countFor = (slug: string) => catalog.filter((c) => c.category === slug).length

export default function Products() {
  // `draft` is what is typed; `query` is what has been submitted via Search.
  const [draft, setDraft] = useState('')
  const [query, setQuery] = useState('')
  // Category lives in the URL so nav/footer links and shares land pre-filtered.
  const [params, setParams] = useSearchParams()
  const category = params.get('category') ?? ''
  const setCategory = (slug: string) =>
    setParams(slug ? { category: slug } : {}, { replace: true, preventScrollReset: true })
  const [page, setPage] = useState(1)
  const searchId = useId()
  const categoryId = useId()

  const results = useMemo(() => filterCatalog(catalog, query, category || null), [query, category])

  const pageCount = Math.max(1, Math.ceil(results.length / PER_PAGE))

  // A narrowed result set can leave `page` past the end; clamp it during render
  // rather than in an effect, so we never paint an empty grid for a frame.
  const current = Math.min(page, pageCount)
  const visible = results.slice((current - 1) * PER_PAGE, current * PER_PAGE)

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

      {/* Search row */}
      <div className="container-page pt-8">
        <form
          role="search"
          onSubmit={(e) => {
            e.preventDefault()
            setQuery(draft)
            setPage(1)
          }}
          className="border-maroon/10 flex flex-col gap-3 rounded-2xl border bg-white p-3 shadow-[0_1px_2px_rgba(75,64,58,0.04)] sm:flex-row sm:items-center"
        >
          <div className="relative flex-1">
            <Search
              className="text-muted pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2"
              aria-hidden="true"
            />
            <label htmlFor={searchId} className="sr-only">
              Search products
            </label>
            <input
              id={searchId}
              type="search"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Search products…"
              className="placeholder:text-muted/70 w-full rounded-lg bg-transparent py-2.5 pr-3 pl-10 text-sm focus:outline-none"
            />
          </div>

          <span aria-hidden="true" className="bg-maroon/10 hidden h-7 w-px sm:block" />

          <label htmlFor={categoryId} className="sr-only">
            Filter by category
          </label>
          <select
            id={categoryId}
            value={category}
            onChange={(e) => {
              setCategory(e.target.value)
              setPage(1)
            }}
            className="border-maroon/10 text-ink rounded-lg border px-3.5 py-2.5 text-sm sm:border-0"
          >
            <option value="">All Categories</option>
            {products.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.name}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="bg-maroon text-cream hover:bg-maroon-dark rounded-lg px-7 py-2.5 text-sm font-semibold transition-colors"
          >
            Search
          </button>
        </form>
      </div>

      <div className="container-page grid gap-8 py-10 lg:grid-cols-[230px_1fr]">
        <aside className="border-maroon/10 lg:sticky lg:top-24 lg:self-start lg:border-r lg:pr-6">
          <h2 className="mb-4 text-base font-semibold">Product Categories</h2>
          <ul className="flex flex-col gap-1">
            <li>
              <CategoryLink
                selected={category === ''}
                onClick={() => {
                  setCategory('')
                  setPage(1)
                }}
              >
                All Products ({catalog.length})
              </CategoryLink>
            </li>
            {products.map((p) => {
              const Icon = p.icon
              return (
                <li key={p.slug}>
                  <CategoryLink
                    selected={category === p.slug}
                    onClick={() => {
                      setCategory(category === p.slug ? '' : p.slug)
                      setPage(1)
                    }}
                    icon={
                      <span className="border-maroon/25 text-maroon grid h-6 w-6 shrink-0 place-items-center rounded-full border">
                        <Icon className="h-3 w-3" strokeWidth={1.8} aria-hidden="true" />
                      </span>
                    }
                  >
                    <span className="flex-1">{p.name}</span>
                    <span className="text-muted text-xs">{countFor(p.slug)}</span>
                  </CategoryLink>
                </li>
              )
            })}
          </ul>
        </aside>

        <div>
          <p className="text-muted mb-5 text-sm" role="status" aria-live="polite">
            Showing {visible.length} of {results.length} product{results.length === 1 ? '' : 's'}
            {query && <> for “{query}”</>}
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
            <>
              <RevealGroup
                key={`${query}-${category}-${current}`}
                className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
              >
                {visible.map((c) => (
                  <CatalogCard key={c.slug} item={c} />
                ))}
              </RevealGroup>

              {pageCount > 1 && (
                <nav aria-label="Pagination" className="mt-10 flex justify-center">
                  <ul className="flex items-center gap-2">
                    {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
                      <li key={n}>
                        <button
                          type="button"
                          onClick={() => {
                            setPage(n)
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                          aria-current={n === current ? 'page' : undefined}
                          aria-label={`Page ${n}`}
                          className={`grid h-9 w-9 place-items-center rounded-full border text-sm transition-colors ${
                            n === current
                              ? 'border-maroon bg-maroon text-cream font-semibold'
                              : 'border-maroon/20 text-maroon hover:bg-cream'
                          }`}
                        >
                          {n}
                        </button>
                      </li>
                    ))}
                    <li>
                      <button
                        type="button"
                        onClick={() => setPage(Math.min(pageCount, current + 1))}
                        disabled={current === pageCount}
                        aria-label="Next page"
                        className="border-maroon/20 text-maroon hover:bg-cream grid h-9 w-9 place-items-center rounded-full border transition-colors disabled:opacity-40"
                      >
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </li>
                  </ul>
                </nav>
              )}
            </>
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

function CategoryLink({
  selected,
  onClick,
  icon,
  children,
}: {
  selected: boolean
  onClick: () => void
  icon?: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`flex w-full items-center gap-2.5 rounded-lg px-2 py-2 text-left text-sm transition-colors ${
        selected ? 'text-maroon bg-cream font-semibold' : 'text-ink hover:bg-cream'
      }`}
    >
      {icon}
      {children}
    </button>
  )
}
