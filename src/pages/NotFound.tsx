import { Link } from 'react-router-dom'
import { Seo } from '@/components/Seo'
import { ButtonLink } from '@/components/ui/Button'
import { LogoMark } from '@/components/Logo'
import { nav } from '@/data/site'

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found"
        description="The page you are looking for could not be found."
        path="/404"
      />
      <section className="container-page grid min-h-[70vh] place-items-center py-16 text-center">
        <div className="max-w-md">
          <LogoMark className="text-maroon/25 mx-auto h-16 w-16" />
          <p className="font-display text-maroon mt-6 text-6xl font-bold">404</p>
          <h1 className="mt-3 text-2xl font-bold">This package took a wrong turn</h1>
          <p className="text-muted mt-3 text-sm">
            The page you are looking for does not exist or has moved. Try one of these instead.
          </p>
          <ul className="mt-6 flex flex-wrap justify-center gap-2">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="border-maroon/20 text-maroon hover:bg-maroon hover:text-cream inline-block rounded-full border px-4 py-1.5 text-sm transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-7">
            <ButtonLink to="/" size="lg">
              Back to Home
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
