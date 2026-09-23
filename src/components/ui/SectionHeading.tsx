import type { ReactNode } from 'react'

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  action,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  action?: ReactNode
}) {
  const centered = align === 'center'
  // Two distinct layouts rather than one row layout overridden by centring
  // classes — `sm:flex-row` and `sm:flex-col` are the same property, so the
  // override never reliably won and centred headings stayed left-aligned.
  return (
    <div
      className={
        centered
          ? 'mb-8 flex flex-col items-center gap-3 text-center'
          : 'mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between'
      }
    >
      <div className={centered ? 'mx-auto max-w-2xl' : 'max-w-2xl'}>
        {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
        <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
        {subtitle && <p className="text-muted mt-2 text-sm sm:text-base">{subtitle}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
}
