"use client"

import { motion, useReducedMotion } from "motion/react"
import { CalendarRange, Check, FileText, MessageSquareHeart } from "lucide-react"
import { SectionHeading } from "./section-heading"
import { Parallax } from "./parallax"
import { CalendarMockup, InboxMockup, InvoiceMockup } from "./product-mockups"

const STEPS = [
  {
    icon: CalendarRange,
    eyebrow: "Calendars & spaces",
    title: "Every space on one drag-and-drop calendar",
    desc: "See all your rooms, halls and outdoor areas at a glance. Move bookings with a drag, block out maintenance, and never double-book again.",
    bullets: ["Multi-space resource view", "Real-time availability", "Zero double-bookings"],
    Mockup: CalendarMockup,
  },
  {
    icon: MessageSquareHeart,
    eyebrow: "Enquiry inbox",
    title: "Turn every enquiry into a booking",
    desc: "Capture leads from your website, Instagram and phone in one shared inbox. Reply in seconds, send quotes, and watch your conversion climb.",
    bullets: ["Web, social & phone in one place", "Quote & reply instantly", "Nothing slips through"],
    Mockup: InboxMockup,
  },
  {
    icon: FileText,
    eyebrow: "Invoicing & payments",
    title: "Send branded invoices, get paid faster",
    desc: "Generate professional invoices in a click, collect deposits and balances online, and let automated reminders chase what's due — so cash lands sooner.",
    bullets: ["One-click branded invoices", "Online deposits & balances", "Automated payment reminders"],
    Mockup: InvoiceMockup,
  },
]

export function ProductTour() {
  const reduce = useReducedMotion()

  return (
    <section id="tour" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Product tour"
          title={
            <>
              One workspace for{" "}
              <span className="text-gradient-brand">every workflow</span>
            </>
          }
          description="From first enquiry to final payment — here's how BookLatch handles the day-to-day of running a venue."
        />

        <div className="mt-20 space-y-24 sm:space-y-32">
          {STEPS.map((s, i) => {
            const flip = i % 2 === 1
            return (
              <div
                key={s.title}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                {/* Copy */}
                <motion.div
                  initial={reduce ? { opacity: 0 } : { opacity: 0, x: flip ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className={flip ? "lg:order-2" : ""}
                >
                  <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                    <s.icon className="h-3.5 w-3.5" />
                    {s.eyebrow}
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-extrabold tracking-tight text-balance sm:text-3xl">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-pretty text-muted-foreground">{s.desc}</p>
                  <ul className="mt-6 space-y-2.5">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2.5 text-sm">
                        <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                          <Check className="h-3 w-3" />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Mockup */}
                <motion.div
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 50, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative ${flip ? "lg:order-1" : ""}`}
                >
                  <div
                    aria-hidden
                    className="bg-aurora animate-aurora absolute -inset-6 -z-10 rounded-[2.5rem] opacity-25 blur-3xl"
                  />
                  <Parallax range={28}>
                    <div className="gradient-ring rounded-2xl">
                      <s.Mockup />
                    </div>
                  </Parallax>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
