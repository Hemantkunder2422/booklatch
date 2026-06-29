"use client"

import * as React from "react"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ThemeToggle"
import { Logo } from "./logo"
import { cn } from "@/lib/utils"

const NAV = [
  { label: "Features", href: "/#features" },
  { label: "Product", href: "/#tour" },
  { label: "Analytics", href: "/#analytics" },
  { label: "Reviews", href: "/#reviews" },
  { label: "FAQ", href: "/#faq" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false)
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 transition-all duration-300 sm:px-6",
          scrolled
            ? "my-2 rounded-2xl border border-border/60 bg-background/70 py-2.5 shadow-lg shadow-black/5 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60"
            : "my-3 py-3"
        )}
      >
        <a href="/" aria-label="BookLatch home">
          <Logo />
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent/60 hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <Button variant="ghost" className="hidden rounded-full sm:inline-flex" asChild>
            <a href="#cta">Sign in</a>
          </Button>
          <Button className="hidden rounded-full shadow-md shadow-primary/25 sm:inline-flex" asChild>
            <a href="#cta">Start free</a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full md:hidden"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-3 mt-1 overflow-hidden rounded-2xl border border-border/60 bg-background/90 p-2 shadow-xl backdrop-blur-xl md:hidden"
          >
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground/90 transition-colors hover:bg-accent/60"
              >
                {n.label}
              </a>
            ))}
            <Button className="mt-1 w-full rounded-xl" asChild>
              <a href="#cta" onClick={() => setOpen(false)}>
                Start free
              </a>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
