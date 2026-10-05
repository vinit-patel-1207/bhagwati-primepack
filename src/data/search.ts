import type { Product } from './products'
import type { CatalogItem } from './catalog'

/** Filters the catalogue by free-text query and an optional pinned category slug. */
export function filterProducts(
  all: readonly Product[],
  query: string,
  activeSlug: string | null,
): Product[] {
  const q = query.trim().toLowerCase()
  return all.filter((p) => {
    if (activeSlug && p.slug !== activeSlug) return false
    if (!q) return true
    return (
      p.name.toLowerCase().includes(q) ||
      p.short.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.specs.some((s) => s.toLowerCase().includes(q)) ||
      p.bestFor.some((b) => b.toLowerCase().includes(q))
    )
  })
}

/** Same idea for catalogue items: free text over name, copy, specs and size rows. */
export function filterCatalog(
  all: readonly CatalogItem[],
  query: string,
  category: string | null,
): CatalogItem[] {
  const q = query.trim().toLowerCase()
  return all.filter((c) => {
    if (category && c.category !== category) return false
    if (!q) return true
    return [
      c.name,
      c.summary,
      c.description,
      ...c.features,
      ...c.specs.map((s) => s.value),
      ...c.sizes.flatMap((s) => [s.code, s.size, s.variant]),
    ].some((t) => t?.toLowerCase().includes(q))
  })
}
