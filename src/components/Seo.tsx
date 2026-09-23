import { site } from '@/data/site'

/**
 * React 19 hoists <title>/<meta>/<link> rendered anywhere in the tree into <head>,
 * so no helmet dependency is needed.
 */
export function Seo({
  title,
  description,
  path,
  schema,
}: {
  title: string
  description: string
  path: string
  schema?: Record<string, unknown>
}) {
  const fullTitle = `${title} | ${site.name}`
  const url = `${site.url}${path}`
  const image = `${site.url}/og-image.png`

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {schema && <JsonLd schema={schema} />}
    </>
  )
}

/** Extra structured data (FAQ, breadcrumbs) without re-declaring page meta. */
export function JsonLd({ schema }: { schema: Record<string, unknown> }) {
  return <script type="application/ld+json">{JSON.stringify(schema)}</script>
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  url: site.url,
  description: site.description,
  email: site.email,
  telephone: site.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.line1,
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    postalCode: '382430',
    addressCountry: 'IN',
  },
}
