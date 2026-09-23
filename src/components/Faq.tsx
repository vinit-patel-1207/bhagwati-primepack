import { Plus } from 'lucide-react'

/** Native <details>/<summary> accordion — keyboard and screen-reader support for free. */
export function Faq({ items }: { items: readonly { q: string; a: string }[] }) {
  return (
    <div className="divide-maroon/10 rounded-card border-maroon/10 divide-y overflow-hidden border bg-white">
      {items.map((item) => (
        <details key={item.q} className="group">
          <summary className="text-maroon-dark flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-sm font-semibold [&::-webkit-details-marker]:hidden">
            {item.q}
            <Plus
              className="text-maroon h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-45"
              aria-hidden="true"
            />
          </summary>
          <p className="text-muted px-5 pb-5 text-sm leading-relaxed">{item.a}</p>
        </details>
      ))}
    </div>
  )
}

export const faqSchema = (items: readonly { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((i) => ({
    '@type': 'Question',
    name: i.q,
    acceptedAnswer: { '@type': 'Answer', text: i.a },
  })),
})
