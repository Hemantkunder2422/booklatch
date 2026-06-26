import { Logo } from "./logo"

const COLUMNS = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Calendars", "Payments", "Analytics", "Integrations"],
  },
  {
    title: "Solutions",
    links: ["Wedding venues", "Event spaces", "Studios", "Sports facilities", "Coworking", "Hospitality"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Customers", "Contact", "Press"],
  },
  {
    title: "Resources",
    links: ["Help center", "Guides", "API docs", "Status", "Security", "Changelog"],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-muted/20">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              The all-in-one venue management platform that helps owners book more, get paid faster
              and grow with confidence.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} BookLatch, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <a href="#" className="transition-colors hover:text-foreground">Privacy</a>
            <a href="#" className="transition-colors hover:text-foreground">Terms</a>
            <a href="#" className="transition-colors hover:text-foreground">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
