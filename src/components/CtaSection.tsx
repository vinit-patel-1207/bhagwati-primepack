import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { ButtonLink } from './ui/Button'
import { Img, PhotoPlaceholder } from './Img'
import { BotanicalWatermark } from './PageHero'
import { img } from '@/data/images'

/**
 * Full-bleed maroon CTA band that sits directly on top of the footer,
 * with botanical line-art in both corners — as in Design.png.
 */
export function CtaSection({
  title = 'Looking for the Right Packaging Solution?',
  body = 'Get in touch with our team for the best packaging products and bulk pricing.',
  primary = { label: 'Get a Quote', to: '/contact' },
  secondary = { label: 'Contact Us', to: '/contact#form' },
}: {
  title?: string
  body?: string
  primary?: { label: string; to: string }
  secondary?: { label: string; to: string } | null
}) {
  return (
    <section className="bg-maroon text-cream relative overflow-hidden">
      <BotanicalWatermark className="text-cream -top-10 -left-10 h-72 w-72 opacity-[0.12]" />
      <BotanicalWatermark className="text-cream top-auto -right-10 -bottom-10 left-auto h-72 w-72 scale-x-[-1] opacity-[0.12]" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="container-page relative py-14 text-center"
      >
        <h2 className="text-cream text-2xl font-bold sm:text-3xl">{title}</h2>
        <p className="text-cream/75 mx-auto mt-3 max-w-xl text-sm">{body}</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <ButtonLink to={primary.to} variant="light">
            {primary.label}
          </ButtonLink>
          {secondary && (
            <ButtonLink to={secondary.to} variant="outline-light">
              {secondary.label}
            </ButtonLink>
          )}
        </div>
      </motion.div>
    </section>
  )
}

/**
 * Maroon banner with the photo bleeding in from the right —
 * the "Your Packaging Partner for a Better Tomorrow" strip on the About page.
 */
export function CtaBanner({
  title,
  action,
}: {
  title: ReactNode
  action: { label: string; to: string }
}) {
  return (
    <section className="bg-maroon-dark relative overflow-hidden">
      <div className="absolute inset-y-0 right-0 w-full sm:w-3/5">
        <Img
          src={img.ctaBanner.src}
          alt={img.ctaBanner.alt}
          className="absolute inset-0 h-full w-full"
          fallback={<PhotoPlaceholder label={img.ctaBanner.alt} />}
        />
        <div
          aria-hidden="true"
          className="from-maroon-dark via-maroon-dark/85 absolute inset-0 bg-gradient-to-r to-transparent"
        />
      </div>

      <div className="container-page relative py-14 sm:py-16">
        <div className="max-w-md">
          <h2 className="text-cream font-display text-2xl leading-tight font-bold sm:text-3xl">
            {title}
          </h2>
          <span aria-hidden="true" className="bg-gold-light/70 mt-4 block h-px w-28" />
          <ButtonLink to={action.to} variant="light" className="mt-6">
            {action.label}
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
