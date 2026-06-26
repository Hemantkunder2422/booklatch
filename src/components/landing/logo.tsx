import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2 font-display font-extrabold tracking-tight", className)}>
      <span
        aria-hidden
        className="relative grid h-8 w-8 place-items-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/30"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 4h11a3 3 0 0 1 3 3v13l-4-2.2L11 20l-4-2.2L5 20z" />
          <path d="M9 9h6" />
        </svg>
      </span>
      <span className="text-lg">
        Book<span className="text-primary">Latch</span>
      </span>
    </span>
  )
}
