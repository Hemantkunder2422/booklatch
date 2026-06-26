import { SiteHeader } from "@/components/landing/site-header"
import { Hero } from "@/components/landing/hero"
import { LogoCloud } from "@/components/landing/logo-cloud"
import { Features } from "@/components/landing/features"
import { HowItWorks } from "@/components/landing/how-it-works"
import { AnalyticsShowcase } from "@/components/landing/analytics-showcase"
import { Pricing } from "@/components/landing/pricing"
import { Testimonials } from "@/components/landing/testimonials"
import { FAQ } from "@/components/landing/faq"
import { CTA } from "@/components/landing/cta"
import { SiteFooter } from "@/components/landing/site-footer"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "BookLatch",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "All-in-one venue management software: track customers, confirm bookings, take payments, manage calendars and spaces, invoicing, staff and analytics.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "612",
  },
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main>
        <Hero />
        <LogoCloud />
        <Features />
        <HowItWorks />
        <AnalyticsShowcase />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <SiteFooter />
    </>
  )
}
