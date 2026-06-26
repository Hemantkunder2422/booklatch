import { Reveal } from "./reveal"
import { cn } from "@/lib/utils"

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("mx-auto max-w-2xl text-center", className)}>
      {eyebrow && (
        <Reveal>
          <span className="inline-flex rounded-full border border-border/70 bg-card/60 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-lg text-muted-foreground">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}
