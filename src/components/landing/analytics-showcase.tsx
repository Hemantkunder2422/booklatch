"use client"

import dynamic from "next/dynamic"
import { ArrowUpRight, CalendarCheck2, Percent, TrendingUp } from "lucide-react"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"

const ChartFallback = () => (
  <div className="h-full w-full animate-pulse rounded-lg bg-muted/50" />
)

const RevenueChart = dynamic(
  () => import("./analytics-charts").then((m) => m.RevenueChart),
  { ssr: false, loading: ChartFallback }
)
const BookingsChart = dynamic(
  () => import("./analytics-charts").then((m) => m.BookingsChart),
  { ssr: false, loading: ChartFallback }
)

const HIGHLIGHTS = [
  { icon: TrendingUp, label: "Revenue this month", value: "$84,210", delta: "+24%" },
  { icon: CalendarCheck2, label: "Confirmed bookings", value: "326", delta: "+12%" },
  { icon: Percent, label: "Avg. occupancy", value: "78%", delta: "+6%" },
]

export function AnalyticsShowcase() {
  return (
    <section id="analytics" className="relative py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Analytics"
          title="Know your numbers in real time"
          description="Beautiful, actionable dashboards track every booking and every dollar — so you can forecast, price smarter and grow with confidence."
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {/* Revenue area chart */}
          <Reveal className="lg:col-span-2">
            <div className="h-full rounded-2xl border border-border/60 bg-card/60 p-6 backdrop-blur">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Revenue</p>
                  <p className="font-display text-3xl font-bold tracking-tight">$84,210</p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2.5 py-1 text-sm font-semibold text-emerald-500">
                  <ArrowUpRight className="h-4 w-4" /> 24%
                </span>
              </div>
              <div className="mt-4 h-56">
                <RevenueChart />
              </div>
            </div>
          </Reveal>

          {/* Bookings bar chart */}
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-border/60 bg-card/60 p-6 backdrop-blur">
              <p className="text-sm text-muted-foreground">Bookings this week</p>
              <p className="font-display text-3xl font-bold tracking-tight">113</p>
              <div className="mt-4 h-56">
                <BookingsChart />
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {HIGHLIGHTS.map((h, i) => (
            <Reveal key={h.label} delay={i * 0.08}>
              <div className="flex items-center gap-4 rounded-2xl border border-border/60 bg-card/60 p-5 backdrop-blur">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <h.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{h.label}</p>
                  <p className="font-display text-xl font-bold tracking-tight">
                    {h.value}{" "}
                    <span className="text-sm font-semibold text-emerald-500">{h.delta}</span>
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
