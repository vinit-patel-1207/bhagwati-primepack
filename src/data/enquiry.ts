// Contact-form delivery. Two channels, one shared body:
//   email    → Web3Forms (no backend needed on a static site)
//   whatsapp → wa.me deep link built from the same text (see whatsapp.ts)
// Explicit .ts extensions so the sibling *.test.ts runs under bare node.

const ENDPOINT = 'https://api.web3forms.com/submit'

export type Enquiry = {
  name: string
  company: string
  email: string
  phone: string
  /** Display name, not the slug. */
  product: string
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
export async function sendEnquiry(
  e: Enquiry,
  // Injectable so the test can run outside Vite (import.meta.env is per-module).
  accessKey = import.meta.env?.VITE_WEB3FORMS_KEY,
  fetchImpl: typeof fetch = fetch,
): Promise<void> {
  if (!accessKey) throw new Error('form is not configured')

  const res = await fetchImpl(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `New enquiry — ${e.product} — ${e.name}`,
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
