import { CalendarRange, Send, Wallet } from "lucide-react"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"

const STEPS = [
  {
    icon: CalendarRange,
    step: "01",
    title: "Set up your spaces",
    desc: "Add your rooms, halls and outdoor areas, set pricing rules and connect your calendar in minutes.",
  },
  {
    icon: Send,
    step: "02",
    title: "Capture & confirm bookings",
    desc: "Enquiries land in one inbox. Confirm with a tap and BookLatch notifies the customer automatically.",
  },
  {
    icon: Wallet,
    step: "03",
    title: "Get paid & grow",
    desc: "Collect deposits and balances online, send invoices, and watch revenue climb on live dashboards.",
  },
]

export function HowItWorks() {
  return (
    <section id="how" className="relative border-y border-border/50 bg-muted/20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="How it works"
          title="From enquiry to paid in three steps"
          description="No migrations, no manuals. Most venues are live on BookLatch the same afternoon."
        />

        <div className="relative mt-16 grid gap-8 md:grid-cols-3">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block"
          />
          {STEPS.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.12}>
              <div className="relative text-center">
                <div className="mx-auto grid h-18 w-18 place-items-center">
                  <div className="relative grid h-16 w-16 place-items-center rounded-2xl border border-border/60 bg-card shadow-lg">
                    <s.icon className="h-7 w-7 text-primary" />
                    <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow">
                      {i + 1}
                    </span>
                  </div>
                </div>
                <h3 className="mt-5 font-display text-xl font-bold tracking-tight">{s.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
