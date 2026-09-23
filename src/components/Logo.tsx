type LogoProps = {
  /** `full` = mark + wordmark, `mark` = monogram only */
  variant?: 'full' | 'mark'
  /** `dark` for light backgrounds, `light` for maroon backgrounds */
  tone?: 'dark' | 'light'
  className?: string
}

/**
 * Bhagwati Primepack identity, redrawn from Logo.jpeg as vector so it stays
 * crisp and can be recoloured for maroon sections.
 * Mark: interlocked B/P monogram, a parcel in the counter, gold orbit swoosh.
 */
export function LogoMark({ className = 'h-10 w-10' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" role="presentation" focusable="false" className={className}>
      {/* B — upper bowl + stem */}
      <path
        d="M20 14h30c13 0 22 8 22 19 0 8-4 14-12 17 9 3 14 9 14 18 0 12-10 20-25 20H36V74h12c6 0 10-3 10-9s-4-9-10-9H36V44h10c6 0 9-3 9-8s-3-8-9-8H34v78H20z"
        fill="currentColor"
      />
      {/* P — descending counterform, gold */}
      <path
        d="M38 62h26c14 0 23 9 23 21s-9 21-23 21H52v-15h11c5 0 8-2 8-6s-3-6-8-6H38z"
        fill="var(--color-gold-light)"
      />
      {/* Parcel resting in the monogram counter */}
      <g>
        <path d="M40 34 58 25l18 9-18 9z" fill="#dcbb92" />
        <path d="M40 34v22l18 9V43z" fill="#c9a173" />
        <path d="M76 34v22l-18 9V43z" fill="#b98f5f" />
        <path d="M58 25v40" stroke="#8d6337" strokeWidth="2.5" opacity=".7" />
        <path d="M40 34h36" stroke="#8d6337" strokeWidth="2.5" opacity=".7" />
      </g>
      {/* Gold orbit swoosh */}
      <path
        d="M96 44c6 9 2 18-13 24-19 7-46 6-63-3C6 59 3 51 10 44c-2 10 5 17 22 22 19 5 42 4 56-3 8-4 11-10 8-19z"
        fill="var(--color-gold)"
      />
    </svg>
  )
}

export function Logo({ variant = 'full', tone = 'dark', className = '' }: LogoProps) {
  const primary = tone === 'dark' ? 'text-maroon-dark' : 'text-cream'
  const gold = tone === 'dark' ? 'text-gold' : 'text-gold-light'

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Circular medallion lockup, matching the header mark in Design.png. */}
      <span
        className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border ${
          tone === 'dark' ? 'border-maroon/20 bg-cream' : 'border-cream/25 bg-cream/10'
        }`}
      >
        <LogoMark className={`ml-2 h-8 w-8 ${primary}`} />
      </span>
      {variant === 'full' && (
        <span className="flex flex-col leading-none">
          <span className={`font-display text-lg font-bold tracking-tight ${primary}`}>
            BHAGWATI
          </span>
          <span className={`text-[0.82rem] font-semibold tracking-[0.2em] ${gold}`}>PRIMEPACK</span>
        </span>
      )}
    </span>
  )
}
