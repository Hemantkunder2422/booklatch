import { SiteHeader } from "./site-header"
import { SiteFooter } from "./site-footer"

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main id="content" className="relative pb-24 pt-32 sm:pt-36">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72">
          <div className="absolute inset-0 bg-brand-radial opacity-40" />
          <div className="absolute inset-0 bg-grid mask-fade-b opacity-30" />
        </div>
        {children}
      </main>
      <SiteFooter />
    </>
  )
}
