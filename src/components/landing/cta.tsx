"use client"

import * as React from "react"
import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"

export function CTA() {
  const [email, setEmail] = React.useState("")

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      toast.error("Please enter a valid email address.")
      return
    }
    toast.success("You're on the list! Check your inbox to get started.")
    setEmail("")
  }

  return (
    <section id="cta" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-linear-to-br from-card to-card/40 px-6 py-16 text-center shadow-2xl sm:px-16"
        >
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="bg-aurora animate-aurora absolute -top-24 left-1/2 h-80 w-[50rem] -translate-x-1/2 rounded-full opacity-40 blur-3xl" />
            <div className="absolute inset-0 bg-grid opacity-30" />
          </div>

          <h2 className="mx-auto max-w-2xl font-display text-3xl font-extrabold tracking-tight text-balance sm:text-5xl">
            Give your venue the platform it deserves
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-lg text-muted-foreground">
            Start free in minutes. Bring your bookings, payments and team together — and fall in
            love with running your venue again.
          </p>

          <form
            onSubmit={onSubmit}
            className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@yourvenue.com"
              aria-label="Email address"
              className="h-12 flex-1 rounded-full border border-border/60 bg-background/80 px-5 text-sm shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
            <Button
              type="submit"
              size="lg"
              className="group h-12 rounded-full bg-linear-to-r from-brand-violet via-brand-indigo to-brand-fuchsia px-7 text-white shadow-lg shadow-primary/30 transition-opacity hover:opacity-95"
            >
              Get started
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
          </form>
          <p className="mt-4 text-xs text-muted-foreground">
            Free trial · Custom pricing built around your venue ·{" "}
            <a href="#cta" className="font-medium text-primary hover:underline">
              Talk to our team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
