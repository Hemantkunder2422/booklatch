"use client"

import * as React from "react"
import { motion } from "motion/react"
import { Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "./section-heading"
import { Stagger, StaggerItem } from "./reveal"
import { cn } from "@/lib/utils"

type Plan = {
  name: string
  tagline: string
  monthly: number
  yearly: number
  features: string[]
  featured?: boolean
}

const PLANS: Plan[] = [
  {
    name: "Starter",
    tagline: "For new & boutique venues",
    monthly: 0,
    yearly: 0,
    features: [
      "1 space & calendar",
      "Up to 50 bookings / mo",
      "Online payments",
      "Customer profiles",
      "Email notifications",
    ],
  },
  {
    name: "Growth",
    tagline: "For busy multi-space venues",
    monthly: 49,
    yearly: 39,
    featured: true,
    features: [
      "Unlimited spaces & calendars",
      "Unlimited bookings",
      "Invoicing & contracts",
      "SMS + email automations",
      "Dynamic pricing & packages",
      "Up to 10 staff seats",
      "Analytics & forecasting",
    ],
  },
  {
    name: "Enterprise",
    tagline: "For groups & large estates",
    monthly: 149,
    yearly: 119,
    features: [
      "Everything in Growth",
      "Multi-location management",
      "Unlimited staff seats",
      "Advanced roles & permissions",
      "API & integrations",
      "Dedicated success manager",
    ],
  },
]

export function Pricing() {
  const [yearly, setYearly] = React.useState(true)

  return (
    <section id="pricing" className="relative border-y border-border/50 bg-muted/20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple pricing that scales with you"
          description="Start free, upgrade when you grow. No setup fees, no contracts, cancel anytime."
        />

        <div className="mt-8 flex items-center justify-center gap-3">
          <span className={cn("text-sm font-medium", !yearly && "text-foreground", yearly && "text-muted-foreground")}>
            Monthly
          </span>
          <button
            role="switch"
            aria-checked={yearly}
            aria-label="Toggle yearly billing"
            onClick={() => setYearly((v) => !v)}
            className={cn(
              "relative h-7 w-12 rounded-full border border-border/60 transition-colors",
              yearly ? "bg-primary" : "bg-muted"
            )}
          >
            <span
              className={cn(
                "absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all",
                yearly ? "left-[1.6rem]" : "left-0.5"
              )}
            />
          </button>
          <span className={cn("text-sm font-medium", yearly && "text-foreground", !yearly && "text-muted-foreground")}>
            Yearly
            <span className="ml-1.5 rounded-full bg-emerald-500/15 px-2 py-0.5 text-xs font-semibold text-emerald-500">
              Save 20%
            </span>
          </span>
        </div>

        <Stagger className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
          {PLANS.map((p) => {
            const price = yearly ? p.yearly : p.monthly
            return (
              <StaggerItem key={p.name} className="h-full">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className={cn(
                    "relative flex h-full flex-col rounded-3xl border p-7 backdrop-blur",
                    p.featured
                      ? "border-primary/50 bg-card shadow-2xl shadow-primary/15 ring-1 ring-primary/30"
                      : "border-border/60 bg-card/60"
                  )}
                >
                  {p.featured && (
                    <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow">
                      <Sparkles className="h-3 w-3" /> Most popular
                    </span>
                  )}
                  <h3 className="font-display text-xl font-bold">{p.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
                  <div className="mt-5 flex items-end gap-1">
                    <span className="font-display text-4xl font-extrabold tracking-tight">${price}</span>
                    <span className="mb-1 text-sm text-muted-foreground">/mo</span>
                  </div>
                  {yearly && p.monthly > 0 && (
                    <p className="mt-1 text-xs text-muted-foreground">billed annually</p>
                  )}

                  <Button
                    className={cn("mt-6 w-full rounded-full", !p.featured && "bg-foreground text-background hover:bg-foreground/90")}
                    variant={p.featured ? "default" : "default"}
                    asChild
                  >
                    <a href="#cta">{p.monthly === 0 ? "Start for free" : "Start free trial"}</a>
                  </Button>

                  <ul className="mt-7 space-y-3 text-sm">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <span className="mt-0.5 grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                          <Check className="h-3 w-3" />
                        </span>
                        <span className="text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
