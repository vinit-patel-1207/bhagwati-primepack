import { useRouteError } from 'react-router-dom'
import { ButtonLink } from './ui/Button'

/**
 * Catches a route-level failure — most often a lazy chunk that 404s because the
 * site was redeployed while the tab was open. Without this the page goes blank.
 */
export function RouteError() {
  const error = useRouteError()
  const isChunkError =
    error instanceof Error &&
    /dynamically imported module|Importing a module script/i.test(error.message)

  return (
    <section className="container-page py-20">
      <div className="max-w-xl">
        <div className="border-maroon/70 border-t-2 pt-3">
          <p className="spec text-maroon">Sheet unavailable</p>
        </div>
        <h1 className="mt-6 text-[clamp(1.8rem,4.5vw,3rem)] leading-[0.98]">
          This sheet
          <br />
          did not load
        </h1>
        <p className="text-ink measure mt-6 text-sm leading-relaxed">
          {isChunkError
            ? 'The site was updated while this page was open, so part of it is now out of date. Reloading will fetch the current version.'
            : 'Something went wrong loading this page. Reloading usually clears it.'}
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="bg-maroon text-cream hover:bg-maroon-dark inline-flex items-center rounded-[2px] px-7 py-3.5 text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition-colors"
          >
            Reload
          </button>
          <ButtonLink to="/" size="lg" variant="outline">
            Back to home
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
