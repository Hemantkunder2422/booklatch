const BRANDS = [
  "The Atrium",
  "Skyline Events",
  "Grand Pavilion",
  "Lakeside Hall",
  "Urban Loft",
  "Maison Belle",
  "Riviera Club",
  "Aurora Gardens",
]

export function LogoCloud() {
  return (
    <section className="border-y border-border/50 bg-muted/20 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Trusted by 1,400+ venues, from boutique studios to grand ballrooms
        </p>
        <div className="mask-fade-x relative mt-7 overflow-hidden">
          <div className="animate-marquee flex w-max items-center gap-12 pr-12">
            {[...BRANDS, ...BRANDS].map((b, i) => (
              <span
                key={i}
                className="font-display whitespace-nowrap text-lg font-bold text-foreground/35 transition-colors hover:text-foreground/60"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
