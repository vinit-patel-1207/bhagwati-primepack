import type { CatalogItem } from './catalog'

// "10x12", "10 × 12" and "10X12" should all find the same size row.
const norm = (s: string) => s.toLowerCase().replace(/×/g, 'x').replace(/\s+/g, '')

/** Same idea for catalogue items: free text over name, copy, specs and size rows. */
export function filterCatalog(
  all: readonly CatalogItem[],
  query: string,
  category: string | null,
): CatalogItem[] {
  const q = norm(query)
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
    ].some((t) => t && norm(t).includes(q))
  })
}