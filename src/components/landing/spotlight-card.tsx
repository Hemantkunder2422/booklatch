"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type SpotlightCardProps = React.HTMLAttributes<HTMLDivElement> & {
  /** Radius of the cursor glow in pixels */
  radius?: number
}

/**
 * Linear-style interactive card: a soft brand-tinted glow follows the cursor,
 * and a gradient hairline border lights up on hover.
 */
export function SpotlightCard({
  children,
  className,
  radius = 360,
  ...props
}: SpotlightCardProps) {
  const ref = React.useRef<HTMLDivElement>(null)

  const onMouseMove = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`)
    el.style.setProperty("--my", `${e.clientY - rect.top}px`)
  }, [])

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      className={cn(
        "group/spot relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 backdrop-blur transition-colors duration-300 hover:border-transparent",
        className
      )}
      {...props}
    >
      {/* gradient-lit border on hover */}
      <div className="gradient-ring pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100" />
      {/* cursor-follow glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
        style={{
          background: `radial-gradient(${radius}px circle at var(--mx, 50%) var(--my, 0%), color-mix(in oklch, var(--brand-violet) 16%, transparent), transparent 70%)`,
        }}
      />
      <div className="relative">{children}</div>
    </div>
  )
}
