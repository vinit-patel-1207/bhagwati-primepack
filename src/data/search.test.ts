import { strict as assert } from 'node:assert'
import test from 'node:test'
import { filterProducts } from './search.ts'
import { products } from './products.ts'
import { industries } from './industries.ts'

test('empty query returns the whole catalogue', () => {
  assert.equal(filterProducts(products, '', null).length, products.length)
  assert.equal(filterProducts(products, '   ', null).length, products.length)
})

test('query matches name, spec text and industry tags, case-insensitively', () => {
  const kraft = filterProducts(products, 'KRAFT', null).map((p) => p.slug)
  assert.ok(kraft.includes('kraft-packaging'))
  // Spec text counts too: bubble mailers list a kraft lining.
  assert.ok(kraft.includes('bubble-packaging'))

  // "BOPP" only appears in the tape specs, not in any name or summary.
  assert.deepEqual(
    filterProducts(products, 'bopp', null).map((p) => p.slug),
    ['packaging-tapes'],
  )
  // bestFor tags are searchable.
  assert.ok(filterProducts(products, 'pharmaceuticals', null).length > 0)
})

test('category filter pins one product and intersects with the query', () => {
  assert.deepEqual(
    filterProducts(products, '', 'bubble-packaging').map((p) => p.slug),
    ['bubble-packaging'],
  )
  // Filter and query must agree, otherwise nothing matches.
  assert.equal(filterProducts(products, 'bopp', 'bubble-packaging').length, 0)
  assert.equal(filterProducts(products, 'bubble', 'bubble-packaging').length, 1)
})

test('no match returns empty rather than everything', () => {
  assert.deepEqual(filterProducts(products, 'zzzznotathing', null), [])
})

test('every industry recommendation points at a real product slug', () => {
  const slugs = new Set(products.map((p) => p.slug))
  for (const industry of industries) {
    for (const rec of industry.recommended) {
      assert.ok(slugs.has(rec), `${industry.slug} recommends unknown product "${rec}"`)
    }
  }
})
