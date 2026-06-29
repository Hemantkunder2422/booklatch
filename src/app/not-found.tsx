import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Logo } from "@/components/landing/logo"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-brand-radial opacity-60" />
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-40" />
      </div>

      <Logo className="text-xl" />

      <p className="mt-10 font-display text-7xl font-extrabold tracking-tight sm:text-8xl">
        <span className="text-gradient-brand">404</span>
      </p>
      <h1 className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl">
        This page took a different booking
      </h1>
      <p className="mx-auto mt-3 max-w-md text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s get you
        back to BookLatch.
      </p>

      <Button asChild className="mt-8 rounded-full">
        <Link href="/">
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
      </Button>
    </main>
  )
}
