import { useId, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CircleAlert, CircleCheck, LoaderCircle, Send } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import { products } from '@/data/products'
import { site } from '@/data/site'
import { enquiryText, sendEnquiry, type Enquiry } from '@/data/enquiry'
import { whatsappLink } from '@/data/whatsapp'
import { Button } from './ui/Button'
import { WhatsAppIcon } from './WhatsAppQuote'

const schema = z.object({
  name: z.string().trim().min(2, 'Please enter your full name.'),
  company: z.string().trim().min(2, 'Please enter your company name.'),
  email: z.email({ error: 'Please enter a valid email address.' }).trim(),
  phone: z
    .string()
    .trim()
    .regex(/^[+\d][\d\s-]{7,17}$/, 'Please enter a valid phone number.'),
  product: z.string().min(1, 'Please select a product requirement.'),
  quantity: z.string().trim().optional(),
  message: z.string().trim().min(10, 'Please tell us a little more (10 characters minimum).'),
  // Honeypot — bots fill hidden fields, humans do not.
  website: z.string().max(0).optional(),
})

export type EnquiryValues = z.infer<typeof schema>

type Status = 'idle' | 'sending' | 'sent' | 'error'

// Swap the product slug for its display name so the email/WhatsApp body reads well.
const toEnquiry = (v: EnquiryValues): Enquiry => ({
  name: v.name,
  company: v.company,
  email: v.email,
  phone: v.phone,
  quantity: v.quantity,
  message: v.message,
  product:
    v.product === 'multiple'
      ? 'Multiple / not sure yet'
      : (products.find((p) => p.slug === v.product)?.name ?? v.product),
})

export function ContactForm() {
  const [params] = useSearchParams()
  const [status, setStatus] = useState<Status>('idle')
  // Last submitted enquiry: powers the WhatsApp hand-off on success and the fallback on failure.
  const [last, setLast] = useState<Enquiry | null>(null)
  const [sendError, setSendError] = useState('')
  const formId = useId()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EnquiryValues>({
    resolver: zodResolver(schema),
    defaultValues: { product: params.get('product') ?? '', website: '' },
  })

  const onSubmit = async (values: EnquiryValues) => {
    if (values.website) return // honeypot tripped, drop silently
    const enquiry = toEnquiry(values)
    setLast(enquiry)
    setStatus('sending')
    try {
      await sendEnquiry(enquiry)
      setStatus('sent')
      reset({ product: '', website: '' })
    } catch (err) {
      // Keep the filled form so nothing is lost; the banner offers WhatsApp and email instead.
      setSendError(err instanceof Error ? err.message : 'unknown error')
      setStatus('error')
    }
  }

  if (status === 'sent' && last) {
    return (
      <div role="status" aria-live="polite" className="card-surface p-8 text-center">
        <CircleCheck className="text-maroon mx-auto h-12 w-12" aria-hidden="true" />
        <h2 className="mt-4 text-xl font-semibold">Thank you — we have your enquiry</h2>
        <p className="text-muted mx-auto mt-2 max-w-md text-sm">
          We respond within one working day with options, samples and pricing. Want a faster reply?
          Send the same details on WhatsApp.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={whatsappLink(enquiryText(last))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1ebe5a]"
          >
            <WhatsAppIcon /> Send on WhatsApp
          </a>
          <Button variant="outline" onClick={() => setStatus('idle')}>
            Send another enquiry
          </Button>
        </div>
      </div>
    )
  }

  return (
    <form
      id="form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="card-surface flex flex-col gap-4 p-6"
    >
      <h2 className="text-lg font-semibold">Send Us a Message</h2>

      <Field label="Full Name" required error={errors.name?.message} id={`${formId}-name`}>
        <input
          id={`${formId}-name`}
          type="text"
          autoComplete="name"
          aria-invalid={!!errors.name}
          className={inputCls}
          {...register('name')}
        />
      </Field>

      <Field label="Company Name" required error={errors.company?.message} id={`${formId}-company`}>
        <input
          id={`${formId}-company`}
          type="text"
          autoComplete="organization"
          aria-invalid={!!errors.company}
          className={inputCls}
          {...register('company')}
        />
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Email" required error={errors.email?.message} id={`${formId}-email`}>
          <input
            id={`${formId}-email`}
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            className={inputCls}
            {...register('email')}
          />
        </Field>

        <Field label="Phone Number" required error={errors.phone?.message} id={`${formId}-phone`}>
          <input
            id={`${formId}-phone`}
            type="tel"
            autoComplete="tel"
            aria-invalid={!!errors.phone}
            className={inputCls}
            {...register('phone')}
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Product Requirement"
          required
          error={errors.product?.message}
          id={`${formId}-product`}
        >
          <select
            id={`${formId}-product`}
            aria-invalid={!!errors.product}
            className={inputCls}
            {...register('product')}
          >
            <option value="">Select product</option>
            {products.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.name}
              </option>
            ))}
            <option value="multiple">Multiple / not sure yet</option>
          </select>
        </Field>

        <Field label="Approximate Quantity" id={`${formId}-qty`}>
          <input
            id={`${formId}-qty`}
            type="text"
            placeholder="e.g. 5,000 pcs per month"
            className={inputCls}
            {...register('quantity')}
          />
        </Field>
      </div>

      <Field label="Message" required error={errors.message?.message} id={`${formId}-message`}>
        <textarea
          id={`${formId}-message`}
          rows={4}
          aria-invalid={!!errors.message}
          placeholder="Tell us about your requirement — sizes, material and delivery location."
          className={inputCls}
          {...register('message')}
        />
      </Field>

      {/* Honeypot: hidden from users and assistive tech, visible to naive bots. */}
      <div aria-hidden="true" className="hidden">
        <label htmlFor={`${formId}-website`}>Website</label>
        <input id={`${formId}-website`} type="text" tabIndex={-1} {...register('website')} />
      </div>

      <Button type="submit" size="lg" disabled={status === 'sending'} className="mt-1 w-full">
        {status === 'sending' ? (
          <>
            <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" /> Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden="true" /> Send Inquiry
          </>
        )}
      </Button>

      {/* A failed send must never lose the enquiry — offer WhatsApp and email as fallbacks. */}
      {status === 'error' && last && (
        <p
          role="alert"
          className="text-maroon flex items-start gap-2 rounded-lg bg-red-50 p-3 text-sm"
        >
          <CircleAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>
            We could not send your enquiry ({sendError}). Please try again, or reach us directly on{' '}
            <a
              href={whatsappLink(enquiryText(last))}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline"
            >
              WhatsApp
            </a>{' '}
            or{' '}
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent('Packaging enquiry')}&body=${encodeURIComponent(enquiryText(last))}`}
              className="font-semibold underline"
            >
              {site.email}
            </a>
            .
          </span>
        </p>
      )}
    </form>
  )
}

const inputCls =
  'w-full rounded-lg border border-maroon/15 bg-cream-light px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-maroon aria-[invalid=true]:border-maroon'

function Field({
  label,
  id,
  required,
  error,
  children,
}: {
  label: string
  id: string
  required?: boolean
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-ink text-xs font-medium">
        {label}
        {required && (
          <span className="text-maroon" aria-hidden="true">
            {' '}
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <span className="text-maroon text-xs" role="alert">
          {error}
        </span>
      )}
    </div>
  )
}
