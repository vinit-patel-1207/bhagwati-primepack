import { motion } from 'framer-motion'
import { CircleCheck, Eye, Target, Users } from 'lucide-react'
import { Seo } from '@/components/Seo'
import { PageHero } from '@/components/PageHero'
import { Reveal, RevealGroup, revealItem } from '@/components/ui/Reveal'
import { ButtonLink } from '@/components/ui/Button'
import { CtaBanner } from '@/components/CtaSection'
import { Img, PhotoPlaceholder } from '@/components/Img'
import { img } from '@/data/images'
import { journey, site } from '@/data/site'

const pillars = [
  {
    Icon: Target,
    title: 'Our Mission',
    body: 'Deliver superior packaging solutions that help businesses grow.',
  },
  {
    Icon: Eye,
    title: 'Our Vision',
    body: 'To be a leading packaging solutions provider, known for quality and trust.',
  },
  {
    Icon: Users,
    title: 'Our Values',
    body: 'Quality | Integrity | Customer Focus | Long-Term Partnerships',
  },
]

const whyUs = [
  'Wide range of packaging products',
  'Consistent quality and reliability',
  'Competitive pricing',
  'Fast and on-time delivery',
  'Dedicated customer support',
]

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description={`${site.name} is a packaging supplier built on quality, service and long-term business partnerships. Read our story, mission and values.`}
        path="/about"
      />

      <PageHero
        eyebrow="About Us"
        title={
          <>
            Tradition, Trust &amp;
            <br />
            Packaging Excellence
          </>
        }
        subtitle="We are more than just a packaging supplier. We are your long-term business partner, committed to quality, service and sustainable growth."
        image={img.heroAbout}
        seal
      />

      <section className="container-page grid gap-10 py-14 lg:grid-cols-2">
        <Reveal>
          <h2 className="text-2xl font-bold sm:text-3xl">Our Story</h2>
          <div className="text-muted mt-4 flex flex-col gap-4 text-sm leading-relaxed">
            <p>
              With a strong foundation in trust and integrity, {site.name} has grown into a reliable
              name in the packaging industry. We started with a simple vision — to provide
              high-quality packaging products and exceptional service to businesses of all sizes.
            </p>
            <p>
              From a small local supply operation we have grown into a partner serving e-commerce
              sellers, retailers, manufacturers, pharmaceutical firms and logistics operators,
              across courier bags, protective packaging, cartons, tapes, labels and industrial
              consumables.
            </p>
          </div>
          <ButtonLink to="/products" className="mt-6">
            Learn More
          </ButtonLink>
        </Reveal>

        <Reveal delay={0.08}>
          <ul className="bg-cream flex flex-col gap-7 rounded-2xl p-7">
            {pillars.map(({ Icon, title, body }) => (
              <li key={title} className="flex gap-4">
                <span className="border-maroon/25 text-maroon grid h-11 w-11 shrink-0 place-items-center rounded-full border">
                  <Icon className="h-4.5 w-4.5" strokeWidth={1.6} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-maroon text-base font-semibold">{title}</h3>
                  <p className="text-muted mt-1 text-sm leading-relaxed">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="container-page border-maroon/10 grid items-center gap-10 border-t py-14 lg:grid-cols-2">
        <Reveal>
          <div className="aspect-[4/3] overflow-hidden rounded-xl">
            <Img
              src={img.warehouse.src}
              alt={img.warehouse.alt}
              className="h-full w-full"
              fallback={<PhotoPlaceholder label={img.warehouse.alt} />}
            />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="text-2xl font-bold sm:text-3xl">Why Choose Us</h2>
          <ul className="mt-5 flex flex-col gap-3.5">
            {whyUs.map((item) => (
              <li key={item} className="text-ink flex items-start gap-3 text-sm">
                <CircleCheck
                  className="text-maroon mt-0.5 h-4.5 w-4.5 shrink-0"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
          <ButtonLink to="/contact" className="mt-7">
            Get a Quote
          </ButtonLink>
        </Reveal>
      </section>

      <section className="container-page border-maroon/10 border-t py-14">
        <h2 className="mb-10 text-2xl font-bold sm:text-3xl">Our Journey</h2>
        <RevealGroup>
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {journey.map((step) => (
              <motion.li key={step.year} variants={revealItem} className="relative">
                {/* Horizontal rail on wide screens, as in the comp. */}
                <span
                  aria-hidden="true"
                  className="bg-maroon/25 absolute top-[7px] right-0 left-5 hidden h-px lg:block"
                />
                <span
                  aria-hidden="true"
                  className="border-maroon bg-maroon ring-cream-light relative z-10 block h-3.5 w-3.5 rounded-full border-2 ring-3"
                />
                <p className="font-display text-maroon mt-4 text-lg font-bold">{step.year}</p>
                <h3 className="mt-1 text-sm font-semibold">{step.title}</h3>
                <p className="text-muted mt-0.5 text-sm">{step.body}</p>
              </motion.li>
            ))}
          </ol>
        </RevealGroup>
      </section>

      <CtaBanner
        title={
          <>
            Your Packaging Partner
            <br />
            for a Better Tomorrow
          </>
        }
        action={{ label: 'Get in Touch', to: '/contact' }}
      />
    </>
  )
}
