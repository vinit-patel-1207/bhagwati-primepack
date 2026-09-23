import { Seo } from '@/components/Seo'
import { site } from '@/data/site'

/**
 * The footer links to both of these, so they exist as real routes rather than
 * dead links. The privacy page describes what this site actually does; the
 * terms page is a stub until the client supplies their trading terms.
 */

function LegalShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="container-page py-14">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold">{title}</h1>
        <div className="text-muted mt-6 flex flex-col gap-4 text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  )
}

export function PrivacyPolicy() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description={`How ${site.name} handles the information you submit through this website.`}
        path="/privacy-policy"
      />
      <LegalShell title="Privacy Policy">
        <p>
          This page describes how {site.name} handles information submitted through this website.
        </p>
        <h2 className="text-ink mt-2 text-base font-semibold">What we collect</h2>
        <p>
          The enquiry form on our contact page collects your name, company name, email address,
          phone number, the product you are interested in, an optional quantity and your message. We
          collect this only when you choose to submit the form.
        </p>
        <h2 className="text-ink mt-2 text-base font-semibold">How we use it</h2>
        <p>
          We use these details solely to respond to your enquiry — to prepare a quotation, arrange
          samples and follow up about your requirement. We do not sell your details to third
          parties.
        </p>
        <h2 className="text-ink mt-2 text-base font-semibold">Cookies and tracking</h2>
        <p>
          This website does not set advertising or tracking cookies. If analytics are added later,
          this page will be updated to say so before they go live.
        </p>
        <h2 className="text-ink mt-2 text-base font-semibold">Contact</h2>
        <p>
          To ask what we hold about you, or to have it deleted, email{' '}
          <a href={`mailto:${site.email}`} className="text-maroon font-medium hover:underline">
            {site.email}
          </a>{' '}
          or call{' '}
          <a href={`tel:${site.phoneHref}`} className="text-maroon font-medium hover:underline">
            {site.phone}
          </a>
          .
        </p>
        <p className="text-xs">
          This notice reflects how the website is built. It is not legal advice — have it reviewed
          before launch.
        </p>
      </LegalShell>
    </>
  )
}

export function Terms() {
  return (
    <>
      <Seo
        title="Terms & Conditions"
        description={`Terms and conditions for trading with ${site.name}.`}
        path="/terms"
      />
      <LegalShell title="Terms &amp; Conditions">
        <p>
          Our trading terms — covering quotations, minimum order quantities, lead times, delivery,
          payment and returns — are being finalised and will be published here.
        </p>
        <p>
          In the meantime, the terms that apply to any order are the ones stated on the quotation
          and invoice issued for that order. For a copy before you order, contact us at{' '}
          <a href={`mailto:${site.email}`} className="text-maroon font-medium hover:underline">
            {site.email}
          </a>{' '}
          or{' '}
          <a href={`tel:${site.phoneHref}`} className="text-maroon font-medium hover:underline">
            {site.phone}
          </a>
          .
        </p>
      </LegalShell>
    </>
  )
}
