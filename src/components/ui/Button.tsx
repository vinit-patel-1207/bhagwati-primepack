import { Link } from 'react-router-dom'
import type { ComponentProps, ReactNode } from 'react'

type Variant = 'primary' | 'outline' | 'outline-light' | 'ghost' | 'light'
type Size = 'sm' | 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors transition-transform duration-200 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60'

const variants: Record<Variant, string> = {
  primary: 'bg-maroon text-cream hover:bg-maroon-dark',
  outline: 'border border-maroon/30 text-maroon hover:bg-maroon hover:text-cream',
  // Outline for use on maroon: own variant, not `ghost` + text-cream — two
  // text-colour utilities on one element is a coin toss and lost the label.
  'outline-light': 'border border-cream/45 text-cream hover:bg-cream hover:text-maroon-dark',
  ghost: 'text-maroon hover:bg-maroon/8',
  light: 'bg-cream text-maroon-dark hover:bg-white',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-7 py-3 text-base',
}

const cls = (v: Variant, s: Size, extra?: string) =>
  [base, variants[v], sizes[s], extra].filter(Boolean).join(' ')

type CommonProps = { variant?: Variant; size?: Size; className?: string; children: ReactNode }

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...rest
}: CommonProps & ComponentProps<'button'>) {
  return (
    <button className={cls(variant, size, className)} {...rest}>
      {children}
    </button>
  )
}

export function ButtonLink({
  to,
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...rest
}: CommonProps & { to: string } & Omit<ComponentProps<typeof Link>, 'to' | 'className'>) {
  const external = /^(https?:|mailto:|tel:)/.test(to)
  if (external) {
    return (
      <a href={to} className={cls(variant, size, className)} {...(rest as ComponentProps<'a'>)}>
        {children}
      </a>
    )
  }
  return (
    <Link to={to} className={cls(variant, size, className)} {...rest}>
      {children}
    </Link>
  )
}
