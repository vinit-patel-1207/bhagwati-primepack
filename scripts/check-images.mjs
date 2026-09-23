// Lists which image slots still have no file in public/. See IMAGES.md.
import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

const { img, productImage, industryImage } = await import('../src/data/images.ts')
const { products } = await import('../src/data/products.ts')
const { industries } = await import('../src/data/industries.ts')

const slots = [
  ...Object.values(img).map((s) => s.src),
  ...products.map((p) => productImage(p.slug, p.name).src),
  ...industries.map((i) => industryImage(i.slug, i.name).src),
  '/og-image.png',
]

const missing = slots.filter((s) => !existsSync(join(root, 'public', s)))

if (missing.length === 0) {
  console.log(`All ${slots.length} image slots are filled.`)
} else {
  console.log(`${missing.length} of ${slots.length} image slots are still empty:\n`)
  for (const m of missing) console.log(`  public${m}`)
  console.log('\nPrompts and target sizes: IMAGES.md')
}
