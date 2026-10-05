import { strict as assert } from 'node:assert'
import test from 'node:test'
import { quoteMessage, quoteLink } from './whatsapp.ts'
import { catalog } from './catalog.ts'
import { products } from './products.ts'

const bags = catalog.find((c) => c.sizes.some((s) => s.code))!

test('size quote carries the item, size row details, page and image', () => {
  const row = bags.sizes.find((s) => s.code)!
  const msg = quoteMessage(bags, row)
  assert.ok(msg.includes(bags.name))
  assert.ok(msg.includes(`Code: ${row.code}`))
  assert.ok(msg.includes(`Size: ${row.size}`))
  assert.ok(msg.includes(`/products/${bags.slug}`))
  assert.ok(msg.includes(`Image: `))
  assert.ok(!msg.includes('undefined'))
})

test('item quote without a size or image stays clean', () => {
  const custom = catalog.find((c) => c.sizes.length === 0)!
  const msg = quoteMessage({ ...custom, images: [] })
  assert.ok(!/undefined|false|Image:|Sizes available/.test(msg))
  assert.ok(quoteLink(custom).startsWith('https://wa.me/'))
})

test('every catalogue item is valid and points at a real category', () => {
  const cats = new Set(products.map((p) => p.slug))
  const slugs = new Set<string>()
  for (const c of catalog) {
    assert.ok(cats.has(c.category), `${c.slug} → unknown category ${c.category}`)
    assert.ok(!slugs.has(c.slug), `duplicate slug ${c.slug}`)
    slugs.add(c.slug)
    for (const s of c.sizes) assert.ok(s.size && s.packs.length, `${c.slug}: empty size row`)
  }
  // every category has at least one item to show
  for (const p of products)
    assert.ok(
      catalog.some((c) => c.category === p.slug),
      p.slug,
    )
})
