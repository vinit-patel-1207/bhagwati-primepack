// Contact-form delivery. Two channels, one shared body:
//   email    → Web3Forms (no backend needed on a static site)
//   whatsapp → wa.me deep link built from the same text (see whatsapp.ts)

const ENDPOINT = 'https://api.web3forms.com/submit'

export type Enquiry = {
  name: string
  company: string
  email: string
  phone: string
  /** Display names, not slugs. */
  category: string
  product?: string
  quantity?: string
  message: string
}

/** Human-readable enquiry body; blank optional fields are left out. */
export function enquiryText(e: Enquiry): string {
  const lines: [string, string | undefined][] = [
    ['Name', e.name],
    ['Company', e.company],
    ['Email', e.email],
    ['Phone', e.phone],
    ['Category', e.category],
    ['Product', e.product],
    ['Quantity', e.quantity],
  ]
  const details = lines
    .filter(([, v]) => v?.trim())
    .map(([label, v]) => `${label}: ${v!.trim()}`)
    .join('\n')
  return `${details}\n\nMessage:\n${e.message.trim()}`
}

/**
 * Posts the enquiry to Web3Forms, which forwards it to the inbox registered
 * with the access key. Throws on transport failure or a rejected submission so
 * the form can keep the visitor's input and offer the fallbacks.
 */
export async function sendEnquiry(e: Enquiry): Promise<void> {
  const accessKey = import.meta.env.WEB3FORMS_KEY
  if (!accessKey) throw new Error('form is not configured')

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `New enquiry — ${e.product || e.category} — ${e.name}`,
      from_name: e.name,
      replyto: e.email,
      message: enquiryText(e),
    }),
  })

  // Web3Forms answers 200 with { success: false } for a bad key, so check both.
  const data = (await res.json().catch(() => null)) as {
    success?: boolean
    message?: string
  } | null
  if (!res.ok || !data?.success) throw new Error(data?.message || `status ${res.status}`)
}