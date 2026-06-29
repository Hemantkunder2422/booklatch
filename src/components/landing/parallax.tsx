"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react"

/**
 * Subtle scroll-linked vertical parallax. Keeps range small for a refined,
 * professional feel (Linear/Stripe-style) rather than a heavy effect.
 */
export function Parallax({
  children,
  className,
  range = 40,
}: {
  children: React.ReactNode
  className?: string
  range?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [range, -range])

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}
