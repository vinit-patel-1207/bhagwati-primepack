import { useState, type ReactNode } from 'react'

/**
 * An <img> that degrades to `fallback` when the file is not there yet.
 *
 * Every photo slot on the site points at a path under `public/images/`.
 * Until the real (AI-generated or photographed) asset is dropped in, the
 * fallback renders, so the layout is never broken by a missing file.
 * See IMAGES.md for the slot list and the generation prompts.
 */
export function Img({
  src,
  alt,
  className = '',
  imgClassName = '',
  fallback,
  loading = 'lazy',
  sizes,
}: {
  src: string
  alt: string
  className?: string
  imgClassName?: string
  fallback: ReactNode
  loading?: 'lazy' | 'eager'
  sizes?: string
}) {
  const [failed, setFailed] = useState(false)

  if (failed) return <div className={className}>{fallback}</div>

  return (
    <img
      src={src}
      alt={alt}
      sizes={sizes}
      loading={loading}
      decoding="async"
      onError={() => setFailed(true)}
      className={`${className} ${imgClassName} object-cover`}
    />
  )
}

/** Branded stand-in used while a photo slot is empty. */
export function PhotoPlaceholder({
  label,
  icon,
  className = '',
}: {
  label: string
  icon?: ReactNode
  className?: string
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`bg-cream relative grid h-full w-full place-items-center overflow-hidden ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'radial-gradient(circle at 22% 18%, rgba(192,141,85,0.22), transparent 46%), radial-gradient(circle at 82% 82%, rgba(107,44,31,0.14), transparent 50%)',
        }}
      />
      {icon && <div className="text-maroon/60 relative">{icon}</div>}
    </div>
  )
}
