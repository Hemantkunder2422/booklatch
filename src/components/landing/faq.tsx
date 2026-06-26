"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"

const FAQS = [
  {
    q: "How long does it take to get set up?",
    a: "Most venues are live the same day. Add your spaces, set pricing rules and connect payments — there's no migration or training required.",
  },
  {
    q: "Can I manage multiple spaces and locations?",
    a: "Yes. Manage every room, hall and outdoor area on a single calendar, and on Enterprise you can run multiple locations from one account.",
  },
  {
    q: "How do payments and payouts work?",
    a: "Collect deposits and balances online via card, wallet or bank transfer. Funds settle directly to your bank account on a fast, predictable schedule.",
  },
  {
    q: "Does BookLatch handle invoicing and contracts?",
    a: "Absolutely. Generate branded invoices and contracts in a click, track what's paid, and let automated reminders chase outstanding balances for you.",
  },
  {
    q: "Can my team use it with different permissions?",
    a: "Yes. Invite staff, assign roles and shifts, and control exactly what each person can see and do across bookings, payments and settings.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes — the Starter plan is free forever for a single space with up to 50 bookings a month. Upgrade anytime as you grow; no card required to start.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered"
          description="Everything you need to know before you start. Still curious? Reach out any time."
        />
        <Reveal className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-border/60 border-b"
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-[15px] leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
