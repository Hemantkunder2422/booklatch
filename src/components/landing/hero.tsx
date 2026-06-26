"use client"

import { motion, useReducedMotion } from "motion/react"
import { ArrowRight, CalendarCheck, CreditCard, Sparkles, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AppPreview } from "./app-preview"

const STATS = [
  { value: "12k+", label: "Bookings managed" },
  { value: "$48M", label: "Payments processed" },
  { value: "1,400", label: "Venues onboard" },
  { value: "99.9%", label: "Uptime" },
]

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-36">
      {/* Background layers */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-60" />
        <div className="bg-aurora animate-aurora absolute -top-40 left-1/2 h-[42rem] w-[80rem] -translate-x-1/2 rounded-full opacity-40 blur-3xl" />
        <div className="absolute right-[10%] top-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.a
            href="#features"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="group inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-4 py-1.5 text-sm font-medium shadow-sm backdrop-blur"
          >
            <span className="flex h-5 items-center gap-1 rounded-full bg-primary/15 px-2 text-xs font-semibold text-primary">
              <Sparkles className="h-3 w-3" /> New
            </span>
            Smart calendars + instant payments
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </motion.a>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl"
          >
            Run your venue from
            <span className="relative whitespace-nowrap">
              {" "}
              <span className="bg-gradient-to-r from-primary via-amber-500 to-rose-500 bg-clip-text text-transparent">
                one beautiful
              </span>
            </span>{" "}
            dashboard
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground"
          >
            BookLatch helps venue owners track customers, confirm bookings, take payments,
            manage spaces &amp; calendars, send invoices, run their team and grow revenue —
            all in one delightfully fast platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button size="lg" className="group h-12 rounded-full px-7 text-base shadow-lg shadow-primary/30" asChild>
              <a href="#cta">
                Start free — 14 days
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-12 rounded-full px-7 text-base backdrop-blur" asChild>
              <a href="#how">See how it works</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground"
          >
            <span className="inline-flex items-center gap-1.5">
              <span className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </span>
              4.9/5 from 600+ venues
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CreditCard className="h-4 w-4 text-primary" /> No card required
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarCheck className="h-4 w-4 text-primary" /> Setup in minutes
            </span>
          </motion.div>
        </div>

        {/* App preview */}
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 60, rotateX: 12 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          style={{ perspective: 1200 }}
          className="relative mx-auto mt-16 max-w-6xl"
        >
          <div className="absolute -inset-x-10 -top-10 bottom-0 -z-10 rounded-[2rem] bg-gradient-to-b from-primary/10 to-transparent blur-2xl" />
          <AppPreview />
        </motion.div>

        {/* Stats */}
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="bg-card/60 p-6 text-center backdrop-blur">
              <div className="font-display text-3xl font-bold tracking-tight">{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
