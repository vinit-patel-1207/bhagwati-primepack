import { lazy, Suspense } from 'react'
import { Clock, Mail, MapPin, Package, Phone } from 'lucide-react'
import { Seo, organizationSchema } from '@/components/Seo'
import { PageHero } from '@/components/PageHero'
import { Reveal } from '@/components/ui/Reveal'
import { ButtonLink } from '@/components/ui/Button'
import { img } from '@/data/images'
import { site } from '@/data/site'

// Keeps react-hook-form + zod out of the shared route chunk.
const ContactForm = lazy(() =>
  import('@/components/ContactForm').then((m) => ({ default: m.ContactForm })),
)

const mapQuery = encodeURIComponent(
  `${site.address.line1}, ${site.address.line2}, ${site.address.country}`,
)

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Us"
        description={`Get a quote from ${site.name}. Call ${site.phone}, email ${site.email} or send us your packaging requirement and we will respond within one working day.`}
        path="/contact"
        schema={organizationSchema}
      />

      <PageHero
        eyebrow="Get in Touch"
        title="We're Here to Help"
        subtitle="Have a question or need a quote? Our team is ready to assist you with your packaging requirements."
        image={img.heroContact}
      />

      <div className="container-page grid gap-8 py-12 lg:grid-cols-[1fr_1.1fr]">
        <Reveal className="flex flex-col gap-5">
          <div className="card-surface p-6">
            <h2 className="text-lg font-semibold">Contact Information</h2>
            <ul className="mt-5 flex flex-col gap-5">
              <InfoRow Icon={Phone} label="Phone">
                <a href={`tel:${site.phoneHref}`} className="hover:text-maroon">
                  {site.phone}
                </a>
                <span className="text-muted block text-xs">{site.hours}</span>
              </InfoRow>
              <InfoRow Icon={Mail} label="Email">
                <a href={`mailto:${site.email}`} className="hover:text-maroon break-all">
                  {site.email}
                </a>
                <span className="text-muted block text-xs">We reply within one working day</span>
              </InfoRow>
              <InfoRow Icon={MapPin} label="Address">
                <address className="not-italic">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                </address>
              </InfoRow>
              <InfoRow Icon={Clock} label="Business Hours">
                {site.hours}
              </InfoRow>
            </ul>
          </div>

          <div className="rounded-card border-maroon/10 overflow-hidden border">
            <iframe
              title={`Map showing the location of ${site.name}`}
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-64 w-full border-0"
            />
          </div>

          <div className="rounded-card bg-cream flex items-start gap-4 p-5">
            <span className="bg-maroon text-cream grid h-10 w-10 shrink-0 place-items-center rounded-full">
              <Package className="h-4.5 w-4.5" strokeWidth={1.6} aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-sm font-semibold">Need a Bulk Order?</h2>
              <p className="text-muted mt-1 text-sm">
                Get special pricing and dedicated support for bulk and repeat orders.
              </p>
              <ButtonLink
                to={`https://wa.me/${site.whatsapp}`}
                size="sm"
                className="mt-3"
                target="_blank"
                rel="noreferrer noopener"
              >
                Request Bulk Pricing
              </ButtonLink>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <Suspense fallback={<div className="card-surface bg-cream/60 h-[640px] animate-pulse" />}>
            <ContactForm />
          </Suspense>
        </Reveal>
      </div>
    </>
  )
}

function InfoRow({
  Icon,
  label,
  children,
}: {
  Icon: typeof Phone
  label: string
  children: React.ReactNode
}) {
  return (
    <li className="flex items-start gap-4">
      <span className="bg-cream text-maroon grid h-10 w-10 shrink-0 place-items-center rounded-full">
        <Icon className="h-4.5 w-4.5" strokeWidth={1.6} aria-hidden="true" />
      </span>
      <div className="text-sm">
        <p className="text-muted text-xs font-semibold tracking-wider uppercase">{label}</p>
        <div className="text-ink mt-0.5">{children}</div>
      </div>
    </li>
  )
}
