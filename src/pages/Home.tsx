import { motion } from 'framer-motion'
import { Award, Clock, Handshake, Package, ShieldCheck, Truck } from 'lucide-react'
import { JsonLd, Seo, organizationSchema } from '@/components/Seo'
import { ButtonLink } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal, RevealGroup, revealItem } from '@/components/ui/Reveal'
import { ProductCard } from '@/components/ProductCard'
import { CatalogCard } from '@/components/CatalogCard'
import { IndustryTile } from '@/components/IndustryCard'
import { CtaSection } from '@/components/CtaSection'
import { Faq, faqSchema } from '@/components/Faq'
import { Img, PhotoPlaceholder } from '@/components/Img'
import { BadgeSeal } from '@/components/BadgeSeal'
import { BotanicalWatermark } from '@/components/PageHero'
import { products } from '@/data/products'
import { catalogBySlug } from '@/data/catalog'
import { industries } from '@/data/industries'
import { img } from '@/data/images'
import { faqs, site, valueProps } from '@/data/site'

// Home page "Key Products" — swap slugs from src/data/catalog.ts to feature others.
const keyProducts = [
  'plain-courier-bags-with-pod',
  'bubble-courier-bags-with-pod',
  'kraft-paper-courier-bags',
  'corrugated-carton-boxes',
].flatMap((slug) => catalogBySlug(slug) ?? [])

const valueIcons = [Award, Truck, Package, Handshake]

const promises = [
  { Icon: ShieldCheck, title: 'Quality Products', body: 'Always' },
  { Icon: Clock, title: 'On-Time Delivery', body: 'Every Time' },
  { Icon: Handshake, title: 'Customer Satisfaction', body: 'Our Priority' },
]

const process = [
  ['01', 'Share your requirement', 'Tell us sizes, volumes and what you ship.'],
  ['02', 'Get a specification & quote', 'We recommend the right material and price it.'],
  ['03', 'Approve a sample', 'Test fit and strength before committing to volume.'],
  ['04', 'Scheduled supply', 'Planned deliveries so your dispatch line never waits.'],
] as const

export default function Home() {
  return (
    <>
      <Seo
        title="Premium Packaging Solutions & Supply Partner"
        description={site.description}
        path="/"
        schema={organizationSchema}
      />

      <Hero />
      <ValueStrip />

      <section className="container-page border-maroon/10 border-t py-14">
        <SectionHeading
          title="Bestseller Products"
          subtitle="Our most-ordered lines — open any one for the full size chart"
          action={
            <ButtonLink to="/products" variant="ghost" size="sm">
              View All Products →
            </ButtonLink>
          }
        />
        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {keyProducts.map((c) => (
            <CatalogCard key={c.slug} item={c} />
          ))}
        </RevealGroup>
      </section>
      
      <section className="container-page py-14">
        <SectionHeading
          title="Our Product Categories"
          subtitle="Wide range of packaging solutions for every business need"
          action={
            <ButtonLink to="/products" variant="ghost" size="sm">
              View All Products →
            </ButtonLink>
          }
        />
        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 8).map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </RevealGroup>
      </section>

      <TrustedPartner />

      <section className="container-page border-maroon/10 border-t py-14">
        <SectionHeading
          title="Industries We Serve"
          subtitle="Packaging solutions for diverse industry needs"
          action={
            <ButtonLink to="/industries" variant="ghost" size="sm">
              View All Industries →
            </ButtonLink>
          }
        />
        <RevealGroup>
          <ul className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {industries.slice(0, 5).map((i) => (
              <IndustryTile key={i.slug} industry={i} />
            ))}
          </ul>
        </RevealGroup>
      </section>

      <section className="bg-cream py-14">
        <div className="container-page">
          <SectionHeading
            eyebrow="How we work"
            title="A simple process, start to reorder"
            subtitle="From first specification to a repeating supply schedule."
            align="center"
          />
          <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {process.map(([step, title, body]) => (
              <motion.div key={step} variants={revealItem} className="card-surface p-5">
                <span className="font-display text-gold text-2xl font-bold">{step}</span>
                <h3 className="mt-2 text-base font-semibold">{title}</h3>
                <p className="text-muted mt-1 text-sm">{body}</p>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="container-page py-14">
        <SectionHeading
          eyebrow="Questions"
          title="Frequently Asked"
          subtitle="The things businesses ask us most before their first order."
          align="center"
        />
        <div className="mx-auto max-w-3xl">
          <Faq items={faqs} />
        </div>
        <JsonLd schema={faqSchema(faqs)} />
      </section>

      <CtaSection />
    </>
  )
}

function Hero() {
  return (
    <section className="bg-cream relative overflow-hidden">
      <BotanicalWatermark className="text-maroon top-10 -left-10 h-80 w-80" />

      <div className="container-page relative grid items-center gap-8 pt-12 pb-10 lg:grid-cols-[1fr_1.05fr] lg:pt-16 lg:pb-14">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow mb-3">Premium Packaging Solutions</p>
          <h1 className="text-4xl leading-[1.1] font-bold sm:text-5xl">
            Packaging Solutions
            <br />
            That Keep Your
            <br />
            Business Moving
          </h1>
          <p className="text-muted mt-5 max-w-lg text-base leading-relaxed">
            Reliable packaging products for e-commerce, retail, logistics, manufacturing and growing
            businesses.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink to="/products" size="lg">
              Explore Products
            </ButtonLink>
            <ButtonLink to="/contact" size="lg" variant="outline">
              Get a Quote
            </ButtonLink>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          // Image leads when stacked on small screens; desktop keeps copy left, image right.
          className="relative order-first lg:order-0"
        >
          <div className="aspect-[4/3] overflow-hidden rounded-2xl">
            <Img
              src={img.heroHome.src}
              alt={img.heroHome.alt}
              loading="eager"
              className="h-full w-full"
              fallback={<PhotoPlaceholder label={img.heroHome.alt} />}
            />
          </div>
          <div className="absolute -top-3 -right-1 flex items-center gap-3">
            <BadgeSeal />
            <p className="text-maroon hidden text-sm leading-snug font-medium xl:block">
              Quality
              <br />
              Reliability
              <br />
              Partnership
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ValueStrip() {
  return (
    <div className="border-maroon/10 border-y">
      <RevealGroup className="container-page lg:divide-maroon/10 grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x">
        {valueProps.map((v, i) => {
          const Icon = valueIcons[i] ?? Award
          return (
            <motion.div
              key={v.title}
              variants={revealItem}
              className="flex items-center gap-3.5 lg:px-5 lg:first:pl-0 lg:last:pr-0"
            >
              <span className="bg-cream text-maroon grid h-11 w-11 shrink-0 place-items-center rounded-full">
                <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-sm leading-snug font-semibold">{v.title}</h3>
                <p className="text-muted text-xs">{v.body}</p>
              </div>
            </motion.div>
          )
        })}
      </RevealGroup>
    </div>
  )
}

function TrustedPartner() {
  return (
    <section className="container-page py-14">
      <div className="grid items-center gap-8 lg:grid-cols-[0.75fr_1.2fr_0.9fr]">
        <Reveal>
          <div className="aspect-square overflow-hidden rounded-xl">
            <Img
              src={img.partner.src}
              alt={img.partner.alt}
              className="h-full w-full"
              fallback={<PhotoPlaceholder label={img.partner.alt} />}
            />
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="text-2xl font-bold sm:text-3xl">Your Trusted Packaging Partner</h2>
          <p className="text-muted mt-4 text-sm leading-relaxed">
            {site.name} is a leading packaging products supplier, offering high-quality and
            cost-effective solutions for businesses across various industries. We are committed to
            providing reliable products, timely delivery and exceptional customer support.
          </p>
          <ButtonLink to="/about" className="mt-6">
            Know More About Us
          </ButtonLink>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="bg-cream flex flex-col gap-5 rounded-xl p-6">
            {promises.map(({ Icon, title, body }) => (
              <li key={title} className="flex items-center gap-4">
                <span className="border-maroon/25 text-maroon grid h-11 w-11 shrink-0 place-items-center rounded-full border">
                  <Icon className="h-4.5 w-4.5" strokeWidth={1.6} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold">{title}</h3>
                  <p className="text-muted text-xs">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
