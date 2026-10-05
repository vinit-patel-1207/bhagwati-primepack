import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Search, X } from 'lucide-react'
import { Logo } from './Logo'
import { ButtonLink } from './ui/Button'
import { nav } from '@/data/site'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the menu whenever the route changes, including on back/forward.
  // Adjusted during render rather than in an effect, so the menus never paint open
  // on the new page. See react.dev "Adjusting state when a prop changes".
  const [lastPath, setLastPath] = useState(pathname)
  if (lastPath !== pathname) {
    setLastPath(pathname)
    setMobileOpen(false)
  }

  // Drawer: Escape closes it, and the page behind does not scroll while it is open.
  useEffect(() => {
    if (!mobileOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMobileOpen(false)
    document.addEventListener('keydown', onKey)
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
    }
  }, [mobileOpen])

  // Active item carries a short maroon underline, as in the comp.
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative py-2 text-sm font-medium transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:bg-maroon after:transition-all ${
      isActive ? 'text-maroon after:w-full' : 'text-ink hover:text-maroon after:w-0'
    }`

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
          scrolled
            ? 'border-maroon/10 bg-cream-light/95 supports-[backdrop-filter]:bg-cream-light/80 backdrop-blur'
            : 'bg-cream-light border-transparent'
        }`}
      >
        <div className="container-page flex h-[72px] items-center justify-between gap-4">
          <Link to="/" aria-label={`${'Bhagwati Primepack'} — home`}>
            <Logo />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/products"
              className="text-maroon hover:bg-maroon/8 hidden h-9 w-9 items-center justify-center rounded-full transition-colors lg:flex"
              aria-label="Search products"
            >
              <Search className="h-4 w-4" aria-hidden="true" />
            </Link>
            <ButtonLink to="/contact" size="sm" className="max-lg:hidden">
              Get a Quote
            </ButtonLink>
            <button
              type="button"
              className="text-maroon grid h-10 w-10 place-items-center rounded-full lg:hidden"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Rendered outside <header>: its backdrop-blur would otherwise become the
        containing block for these fixed elements. */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
            className="fixed inset-0 z-[60] bg-black/40 lg:hidden"
          />
        )}
        {mobileOpen && (
          <motion.nav
            key="drawer"
            id="mobile-nav"
            aria-label="Mobile"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="bg-cream-light fixed inset-y-0 right-0 z-[61] flex w-[min(20rem,85vw)] flex-col overflow-y-auto shadow-[-12px_0_40px_rgba(0,0,0,0.18)] lg:hidden"
          >
            <div className="border-maroon/10 flex h-[72px] shrink-0 items-center justify-between border-b px-5">
              <span className="text-maroon-dark font-display text-lg font-semibold">Menu</span>
              <button
                type="button"
                className="text-maroon grid h-10 w-10 place-items-center rounded-full"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                autoFocus
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <ul className="flex flex-col px-5 py-3">
              {nav.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      `border-maroon/8 block border-b py-3.5 text-base font-medium ${
                        isActive ? 'text-maroon' : 'text-ink'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li className="pt-5">
                <ButtonLink to="/contact" className="w-full">
                  Get a Quote
                </ButtonLink>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}