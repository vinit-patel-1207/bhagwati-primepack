import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { Img, PhotoPlaceholder } from './Img'
import { BadgeSeal } from './BadgeSeal'
import type { ImgSlot } from '@/data/images'

/**
 * Inner-page hero: copy on a cream field at left, photo bleeding off the right.
 * Matches the About / Products / Industries / Contact banner in Design.png.
 */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  seal = false,
  children,
}: {
  eyebrow: string
  title: ReactNode
  subtitle?: string
  image: ImgSlot
  seal?: boolean
  children?: ReactNode
}) {
  return (
    <section className="bg-cream-light pt-4 pb-2 sm:pt-6">
      <div className="container-page">
        <div className="bg-cream relative grid overflow-hidden rounded-2xl lg:grid-cols-[1.05fr_1fr]">
          <BotanicalWatermark />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 px-6 py-10 sm:px-10 sm:py-14 lg:py-16"
          >
            <p className="eyebrow mb-3">{eyebrow}</p>
            <h1 className="text-3xl leading-[1.12] font-bold sm:text-4xl">{title}</h1>
            {subtitle && (
              <p className="text-muted mt-4 max-w-md text-sm sm:text-base">{subtitle}</p>
            )}
            {children && <div className="mt-7">{children}</div>}
          </motion.div>

          <div className="relative min-h-[220px] lg:min-h-[320px]">
            <Img
              src={image.src}
              alt={image.alt}
              loading="eager"
              className="absolute inset-0 h-full w-full"
              fallback={<PhotoPlaceholder label={image.alt} />}
            />
            {/* Feathers the photo into the cream panel, as in the comp. */}
            <div
              aria-hidden="true"
              className="from-cream pointer-events-none absolute inset-0 bg-gradient-to-r via-transparent to-transparent"
            />
            {seal && <BadgeSeal className="absolute top-5 right-5 hidden sm:grid" />}
          </div>
        </div>
      </div>
    </section>
  )
}

/** One leaf, drawn from its stem attachment point outwards along +x. */
const LEAF = 'M0 0c17-2 32-12 42-30C22-33 6-20 0 0Z'
const LEAF_RIB = 'M2 -2c14-3 27-11 36-24'

/**
 * Faint botanical frond used behind cream and maroon panels throughout the comp.
 *
 * Every leaf hangs off a node that sits *on* the stem curve and is rotated to
 * follow it, so the sprig reads as one plant — the leaves used to be drawn at
 * fixed coordinates that missed the stem entirely.
 */
const FROND = [
  { x: 97, y: 160, angle: -16, scale: 1 },
  { x: 93, y: 128, angle: -23, scale: 0.9 },
  { x: 88, y: 98, angle: -30, scale: 0.8 },
  { x: 82, y: 70, angle: -37, scale: 0.68 },
  { x: 75, y: 45, angle: -44, scale: 0.55 },
  { x: 68, y: 24, angle: -52, scale: 0.4 },
] as const

export function BotanicalWatermark({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 200"
      className={`pointer-events-none absolute -top-6 -left-8 h-56 w-56 opacity-[0.07] ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M100 196c-2-40-6-74-12-104C83 66 77 40 68 14" />
      {FROND.map(({ x, y, angle, scale }) => (
        <g key={`${x}-${y}`} transform={`translate(${x} ${y})`}>
          <g transform={`rotate(${angle}) scale(${scale})`}>
            <path d={LEAF} />
            <path d={LEAF_RIB} strokeWidth={1.2} />
          </g>
          <g transform={`scale(-1 1) rotate(${angle}) scale(${scale})`}>
            <path d={LEAF} />
            <path d={LEAF_RIB} strokeWidth={1.2} />
          </g>
        </g>
      ))}
      <path d="M68 14c4-6 9-9 15-9-1 7-6 11-15 9Z" />
    </svg>
  )
}
