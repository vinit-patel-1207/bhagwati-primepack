import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Logo } from './Logo'
import { nav, site } from '@/data/site'
import { products } from '@/data/products'
import { industries } from '@/data/industries'

// lucide-react v1 dropped brand glyphs, so the social marks are inline paths.
const socials = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/',
    path: 'M14 8.5h2V6h-2c-1.9 0-3 1.4-3 3.2V11H9v2.5h2V20h2.5v-6.5h2L16 11h-2.5V9.4c0-.6.2-.9.9-.9z',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/',
    path: 'M8.5 4h7A4.5 4.5 0 0 1 20 8.5v7a4.5 4.5 0 0 1-4.5 4.5h-7A4.5 4.5 0 0 1 4 15.5v-7A4.5 4.5 0 0 1 8.5 4m0 1.7A2.8 2.8 0 0 0 5.7 8.5v7a2.8 2.8 0 0 0 2.8 2.8h7a2.8 2.8 0 0 0 2.8-2.8v-7a2.8 2.8 0 0 0-2.8-2.8zM12 8.3a3.7 3.7 0 1 1 0 7.4 3.7 3.7 0 0 1 0-7.4m0 1.7a2 2 0 1 0 0 4 2 2 0 0 0 0-4m4.2-2.3a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    path: 'M6.2 4.5a1.7 1.7 0 1 1 0 3.4 1.7 1.7 0 0 1 0-3.4M4.8 9.3h2.8V20H4.8zM9.7 9.3h2.7v1.5c.4-.8 1.5-1.7 3-1.7 2.4 0 3.6 1.5 3.6 4.2V20h-2.8v-6c0-1.5-.5-2.3-1.7-2.3-1.1 0-1.9.8-1.9 2.3v6H9.7z',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/',
    path: 'M21.2 8.2a2.4 2.4 0 0 0-1.7-1.7C18 6.1 12 6.1 12 6.1s-6 0-7.5.4A2.4 2.4 0 0 0 2.8 8.2 25 25 0 0 0 2.4 12a25 25 0 0 0 .4 3.8 2.4 2.4 0 0 0 1.7 1.7c1.5.4 7.5.4 7.5.4s6 0 7.5-.4a2.4 2.4 0 0 0 1.7-1.7 25 25 0 0 0 .4-3.8 25 25 0 0 0-.4-3.8M10.1 14.9V9.1L15.1 12z',
  },
]

export function Footer() {
  return (
    <footer className="bg-maroon-dark text-cream/75">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,0.8fr)_1.1fr]">
        <div>
          <Logo tone="light" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Your trusted partner for quality packaging products and solutions. We serve businesses
            across multiple industries with reliable supply and dedicated support.
          </p>
          <p className="text-gold-light mt-4 text-[0.65rem] font-medium tracking-[0.22em]">
            PACK SMART <span aria-hidden="true">•</span> SHIP BETTER
          </p>
        </div>

        <FooterCol title="Quick Links">
          {nav.map((item) => (
            <FooterLink key={item.to} to={item.to}>
              {item.label}
            </FooterLink>
          ))}
        </FooterCol>

        <FooterCol title="Products">
          {products.slice(0, 6).map((p) => (
            <FooterLink key={p.slug} to={`/products?category=${p.slug}`}>
              {p.name}
            </FooterLink>
          ))}
        </FooterCol>

        <FooterCol title="Industries">
          {industries.slice(0, 6).map((i) => (
            <FooterLink key={i.slug} to={`/industries#${i.slug}`}>
              {i.name}
            </FooterLink>
          ))}
        </FooterCol>

        <div>
          <FooterHeading>Contact Us</FooterHeading>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex items-start gap-2.5">
              <Phone className="text-gold-light mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <a href={`tel:${site.phoneHref}`} className="hover:text-cream">
                {site.phone}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="text-gold-light mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <a href={`mailto:${site.email}`} className="hover:text-cream break-all">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="text-gold-light mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <address className="not-italic">
                {site.address.line1}
                <br />
                {site.address.line2}
              </address>
            </li>
          </ul>

          <ul className="mt-5 flex items-center gap-2">
            {socials.map(({ label, path, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="border-cream/25 hover:bg-cream hover:text-maroon-dark grid h-8 w-8 place-items-center rounded-full border transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                    <path d={path} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-cream/15 border-t">
        <div className="container-page flex flex-col gap-3 py-5 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <ul className="flex items-center gap-3">
            <li>
              <Link to="/privacy-policy" className="hover:text-cream">
                Privacy Policy
              </Link>
            </li>
            <li aria-hidden="true" className="text-cream/30">
              |
            </li>
            <li>
              <Link to="/terms" className="hover:text-cream">
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

function FooterHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-cream mb-4 text-sm font-semibold tracking-wider uppercase">{children}</h2>
  )
}

function FooterCol({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <FooterHeading>{title}</FooterHeading>
      <ul className="flex flex-col gap-2.5 text-sm">{children}</ul>
    </div>
  )
}

function FooterLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <li>
      <Link to={to} className="hover:text-cream transition-colors">
        {children}
      </Link>
    </li>
  )
}
