import type { LucideIcon } from 'lucide-react'
import { Img, PhotoPlaceholder } from './Img'
import { productImage } from '@/data/images'

/**
 * Product shot for a catalogue card: photo on a soft cream field, matching
 * the floating pack-shots in Design.png. Falls back to a branded icon tile
 * until `public/images/products/<slug>.webp` exists.
 */
export function ProductVisual({
  slug,
  name,
  icon: Icon,
  className = 'aspect-[4/3]',
}: {
  slug: string
  name: string
  icon: LucideIcon
  className?: string
}) {
  const photo = productImage(slug, name)
  return (
    <div className={`bg-cream w-full overflow-hidden ${className}`}>
      <Img
        src={photo.src}
        alt={photo.alt}
        className="h-full w-full"
        fallback={
          <PhotoPlaceholder
            label={`${name} — illustration`}
            icon={<Icon className="h-12 w-12" strokeWidth={1.4} aria-hidden="true" />}
          />
        }
      />
    </div>
  )
}
