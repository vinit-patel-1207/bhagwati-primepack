import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Seo } from '@/components/Seo'
import { PageHero } from '@/components/PageHero'
import { IndustryCard } from '@/components/IndustryCard'
import { RevealGroup, revealItem } from '@/components/ui/Reveal'
import { ButtonLink } from '@/components/ui/Button'
import { CtaSection } from '@/components/CtaSection'
import { industries } from '@/data/industries'
import { productBySlug } from '@/data/products'
import { img } from '@/data/images'

export default function Industries() {
  return (
    <>
      <Seo
        title="Industries We Serve"
        description="Packaging solutions for e-commerce, retail, FMCG, pharmaceuticals, logistics, manufacturing, industrial, banking, wholesale and institutional businesses."
        path="/industries"
      />

      <PageHero
        eyebrow="Industries"
        title={
          <>
            Packaging Solutions
            <br />
            for Every Industry
          </>
        }
        subtitle="We serve a wide range of industries with customized packaging solutions tailored to their exact needs."
        image={img.heroIndustries}
      />

      <section className="container-page py-10">
        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <IndustryCard key={industry.slug} industry={industry} />
          ))}
        </RevealGroup>
      </section>

      {/* Detail blocks, anchored so the cards and footer links can deep-link in. */}
      <RevealGroup className="container-page border-maroon/10 flex flex-col gap-5 border-t py-12">
        {industries.map((industry) => {
          const Icon = industry.icon
          return (
            <motion.article
              key={industry.slug}
              id={industry.slug}
              variants={revealItem}
              className="card-surface grid scroll-mt-24 gap-6 p-6 lg:grid-cols-[1.3fr_1fr] lg:p-8"
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="bg-cream text-maroon grid h-11 w-11 shrink-0 place-items-center rounded-full">
                    <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <h2 className="text-lg font-semibold">{industry.name}</h2>
                </div>
                <p className="text-muted mt-3 text-sm leading-relaxed">{industry.summary}</p>

                <h3 className="text-maroon mt-5 text-xs font-semibold tracking-wider uppercase">
                  Common challenges
                </h3>
                <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
                  {industry.needs.map((n) => (
                    <li key={n} className="text-ink flex items-start gap-2 text-sm">
                      <Check
                        className="text-maroon mt-0.5 h-3.5 w-3.5 shrink-0"
                        strokeWidth={2.4}
                        aria-hidden="true"
                      />
                      {n}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-cream rounded-xl p-5">
                <h3 className="text-maroon text-xs font-semibold tracking-wider uppercase">
                  Recommended products
                </h3>
                <ul className="mt-3 flex flex-col gap-2">
                  {industry.recommended.map((slug) => {
                    const product = productBySlug(slug)
                    if (!product) return null
                    return (
                      <li key={slug}>
                        <Link
                          to={`/products#${slug}`}
                          className="group bg-cream-light flex items-center justify-between gap-3 rounded-lg px-3.5 py-2.5 text-sm font-medium transition-colors hover:bg-white"
                        >
                          {product.name}
                          <ArrowRight
                            className="text-maroon h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-0.5"
                            aria-hidden="true"
                          />
                        </Link>
                      </li>
                    )
                  })}
                </ul>
                <ButtonLink
                  to={`/contact?industry=${industry.slug}`}
                  size="sm"
                  className="mt-4 w-full"
                >
                  Get a Quote
                </ButtonLink>
              </div>
            </motion.article>
          )
        })}
      </RevealGroup>

      <CtaSection
        title="Not sure which packaging fits your industry?"
        body="Tell us what you ship, how far it travels and how it is handled. We will recommend the right specification."
        primary={{ label: 'Talk to Our Team', to: '/contact' }}
        secondary={{ label: 'Browse Products', to: '/products' }}
      />
    </>
  )
}
