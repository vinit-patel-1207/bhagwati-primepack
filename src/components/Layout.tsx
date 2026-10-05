import { Suspense, useEffect } from 'react'
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

function HashFocus() {
  const { hash } = useLocation()
  useEffect(() => {
    if (!hash) return
    const el = document.querySelector(hash)
    if (el instanceof HTMLElement) el.scrollIntoView({ block: 'start' })
  }, [hash])
  return null
}

export function Layout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="flex-1">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <ScrollRestoration />
      <HashFocus />
    </div>
  )
}

export function PageLoader() {
  return (
    <div className="grid min-h-[60vh] place-items-center" role="status" aria-live="polite">
      <span className="border-maroon/20 border-t-maroon h-8 w-8 animate-spin rounded-full border-2" />
      <span className="sr-only">Loading…</span>
    </div>
  )
}
