import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Industry } from '@/data/industries'
import { Img, PhotoPlaceholder } from './Img'
import { industryImage } from '@/data/images'
import { revealItem } from './ui/Reveal'

/**
 * Industries grid card from the Industries page: circular cream icon,
 * name, two-line summary and a "Learn More" link.
 */
export function IndustryCard({ industry }: { industry: Industry }) {
  const Icon = industry.icon
  return (
    <motion.article variants={revealItem} className="h-full">
      <div className="border-maroon/8 flex h-full flex-col rounded-xl border bg-white p-5 transition-shadow hover:shadow-[0_10px_30px_rgba(75,64,58,0.10)]">
        <div className="flex items-start gap-3.5">
          <span className="bg-cream text-maroon grid h-11 w-11 shrink-0 place-items-center rounded-full">
            <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-sm font-semibold">{industry.name}</h3>
            <p className="text-muted mt-1 text-xs leading-relaxed">{industry.summary}</p>
          </div>
        </div>
        <Link
          to={`/industries#${industry.slug}`}
          className="text-maroon mt-auto inline-flex items-center gap-1.5 pt-5 text-xs font-semibold hover:underline"
        >
          Learn More
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>
    </motion.article>
  )
}

/**
 * Home-page variant: a photo tile with the industry name underneath and
 * no card chrome, exactly as in the "Industries We Serve" strip.
 */
export function IndustryTile({ industry }: { industry: Industry }) {
  const photo = industryImage(industry.slug, industry.name)
  const Icon = industry.icon
  return (
    <motion.li variants={revealItem}>
      <Link to={`/industries#${industry.slug}`} className="group block">
        <div className="aspect-[4/3] overflow-hidden rounded-xl">
          <Img
            src={photo.src}
            alt={photo.alt}
            className="h-full w-full"
            imgClassName="transition-transform duration-500 group-hover:scale-105"
            fallback={
              <PhotoPlaceholder
                label={photo.alt}
                icon={<Icon className="h-10 w-10" strokeWidth={1.4} aria-hidden="true" />}
              />
            }
          />
        </div>
        <p className="group-hover:text-maroon mt-3 text-sm font-medium transition-colors">
          {industry.name}
        </p>
      </Link>
    </motion.li>
  )
}
