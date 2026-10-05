import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Check, ChevronRight } from 'lucide-react'
import { Seo } from '@/components/Seo'
import { Img, PhotoPlaceholder } from '@/components/Img'
import { CatalogCard } from '@/components/CatalogCard'
import { WhatsAppQuote } from '@/components/WhatsAppQuote'
import { CtaSection } from '@/components/CtaSection'
import { RevealGroup } from '@/components/ui/Reveal'
import { catalog, catalogBySlug, type CatalogItem } from '@/data/catalog'
import { productBySlug } from '@/data/products'
import { site } from '@/data/site'
import NotFound from './NotFound'

export default function ProductDetail() {
  const { slug = '' } = useParams()
  const item = catalogBySlug(slug)
  if (!item) return <NotFound />
  // key resets the gallery when navigating between related items
  return <Detail key={item.slug} item={item} />
}

function Detail({ item }: { item: CatalogItem }) {
  const category = productBySlug(item.category)
  const [active, setActive] = useState(0)
  const related = catalog
    .filter((c) => c.category === item.category && c.slug !== item.slug)
    .slice(0, 4)

  const hasCode = item.sizes.some((s) => s.code)
  const hasVariant = item.sizes.some((s) => s.variant)
  const hasThickness = item.sizes.some((s) => s.thickness)

  return (
    <>
      <Seo
        title={item.name}
        description={`${item.summary}. ${item.description}`.slice(0, 160)}
        path={`/products/${item.slug}`}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: item.name,
          description: item.description,
          image: item.images.map((src) => `${site.url}${src}`),
          brand: { '@type': 'Brand', name: site.name },
          category: category?.name,
        }}
      />

      <div className="container-page pt-6">
        <nav
          aria-label="Breadcrumb"
          className="text-muted flex flex-wrap items-center gap-1 text-sm"
        >
          <Link to="/products" className="hover:text-maroon">
            Products
          </Link>
          {category && (
            <>
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              <Link to={`/products?category=${category.slug}`} className="hover:text-maroon">
                {category.name}
              </Link>
            </>
          )}
          <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          <span className="text-ink" aria-current="page">
            {item.name}
          </span>
        </nav>
      </div>

      <section className="container-page grid gap-8 py-8 lg:grid-cols-2 lg:gap-12">
        {/* Gallery */}
        <div>
          <div className="border-maroon/10 aspect-square overflow-hidden rounded-2xl border bg-white p-4">
            <Img
              src={item.images[active] ?? ''}
              alt={`${item.name} — photo ${active + 1}`}
              fit="contain"
              loading="eager"
              className="h-full w-full"
              fallback={<PhotoPlaceholder label={item.name} />}
            />
          </div>
          {item.images.length > 1 && (
            <ul className="mt-3 grid grid-cols-4 gap-3">
              {item.images.map((src, i) => (
                <li key={src}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`Show photo ${i + 1}`}
                    aria-pressed={i === active}
                    className={`aspect-square w-full overflow-hidden rounded-lg border bg-white p-1 transition-colors ${
                      i === active ? 'border-maroon' : 'border-maroon/10 hover:border-maroon/40'
                    }`}
                  >
                    <Img src={src} alt="" fit="contain" className="h-full w-full" fallback={null} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Summary */}
        <div>
          {category && <p className="eyebrow mb-2">{category.name}</p>}
          <h1 className="text-3xl leading-tight font-bold sm:text-4xl">{item.name}</h1>
          <p className="text-ink mt-4 leading-relaxed">{item.description}</p>

          <dl className="border-maroon/10 mt-6 grid grid-cols-2 overflow-hidden rounded-xl border bg-white text-sm">
            {item.specs.map((s) => (
              <div key={s.label} className="border-maroon/8 border-b p-3 odd:border-r">
                <dt className="text-muted text-xs">{s.label}</dt>
                <dd className="font-semibold">{s.value}</dd>
              </div>
            ))}
            {item.sizes.length > 0 && (
              <div className="border-maroon/8 border-b p-3 odd:border-r">
                <dt className="text-muted text-xs">Sizes</dt>
                <dd className="font-semibold">{item.sizes.length} in stock range</dd>
              </div>
            )}
          </dl>

          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {item.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <Check className="text-maroon mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppQuote item={item} big />
            <Link
              to={`/contact?category=${item.category}&product=${item.slug}`}
              className="border-maroon/30 text-maroon hover:bg-maroon hover:text-cream inline-flex items-center rounded-full border px-6 py-3 text-base font-semibold transition-colors"
            >
              Request quote by email
            </Link>
          </div>
          <p className="text-muted mt-3 text-xs">
            Custom sizes, printing and branding available on request.
          </p>
        </div>
      </section>

      {/* Size chart */}
      <section className="container-page pb-12" aria-labelledby="size-chart">
        <h2 id="size-chart" className="text-2xl font-bold">
          Size Chart
        </h2>
        {item.sizes.length === 0 ? (
          <p className="card-surface text-muted mt-4 p-6 text-sm">
            Made to order — share your dimensions, material and quantity on WhatsApp and we will
            come back with options and a price.
          </p>
        ) : (
          <>
            <p className="text-muted mt-1 text-sm">
              Tap the WhatsApp icon on any row to ask for a quote on that exact size.
            </p>
            <div className="border-maroon/10 mt-4 overflow-x-auto rounded-xl border bg-white">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead className="bg-cream text-maroon-dark">
                  <tr>
                    {hasCode && <th className="px-4 py-3 font-semibold">Code</th>}
                    <th className="px-4 py-3 font-semibold">Size</th>
                    {hasVariant && <th className="px-4 py-3 font-semibold">Variant</th>}
                    {hasThickness && <th className="px-4 py-3 font-semibold">Thickness</th>}
                    <th className="px-4 py-3 font-semibold">Pack options</th>
                    <th className="px-4 py-3 text-center font-semibold">Quote</th>
                  </tr>
                </thead>
                <tbody>
                  {item.sizes.map((s, i) => (
                    <tr key={i} className="border-maroon/8 hover:bg-cream-light border-t">
                      {hasCode && <td className="px-4 py-3 font-semibold">{s.code}</td>}
                      <td className="px-4 py-3 whitespace-nowrap">{s.size}</td>
                      {hasVariant && <td className="px-4 py-3">{s.variant}</td>}
                      {hasThickness && <td className="px-4 py-3">{s.thickness}</td>}
                      <td className="text-muted px-4 py-3">
                        {s.packs.map((n) => n.toLocaleString('en-IN')).join(' · ')}
                      </td>
                      <td className="px-4 py-2 text-center">
                        <WhatsAppQuote item={item} size={s} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </section>

      {related.length > 0 && (
        <section className="container-page pb-14">
          <h2 className="mb-5 text-2xl font-bold">More in {category?.name}</h2>
          <RevealGroup className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {related.map((c) => (
              <CatalogCard key={c.slug} item={c} />
            ))}
          </RevealGroup>
        </section>
      )}

      <CtaSection
        title="Need a size that isn't listed?"
        body={`Send ${site.name} your dimensions, material and volume — we will come back with options, samples and a price.`}
        primary={{
          label: 'Request a Quote',
          to: `/contact?category=${item.category}&product=${item.slug}`,
        }}
        secondary={{ label: 'All Products', to: '/products' }}
      />
    </>
  )
}