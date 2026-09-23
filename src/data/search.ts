import type { Product } from './products'

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
