import type { Metadata } from "next"
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import { PageShell } from "@/components/landing/page-shell"
import { ContactForm } from "@/components/landing/contact-form"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the BookLatch team. Email, call or WhatsApp us, or send a message and we'll get back within one business day.",
  alternates: { canonical: "/contact" },
}

export default function ContactPage() {
  const { contact, company } = siteConfig

  const methods = [
    {
      icon: Mail,
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: contact.phoneDisplay,
      href: `tel:${contact.phone}`,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: contact.phoneDisplay,
      href: `https://wa.me/${contact.whatsapp}`,
    },
    {
      icon: MapPin,
      label: "Address",
      value: contact.address,
    },
  ]

  return (
    <PageShell>
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center">
          <span className="inline-flex rounded-full border border-border/70 bg-card/60 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            Contact us
          </span>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
            Let&apos;s talk about your venue
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-lg text-muted-foreground">
            Questions, demos or custom pricing — reach out and a real person from the {company} team
            will get back to you.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-3">
            {methods.map((m) => {
              const Inner = (
                <div className="flex items-center gap-4 rounded-2xl border border-border/60 bg-card/60 p-5 backdrop-blur transition-colors hover:border-primary/40">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <m.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-muted-foreground">{m.label}</p>
                    <p className="truncate font-medium">{m.value}</p>
                  </div>
                </div>
              )
              return m.href ? (
                <a
                  key={m.label}
                  href={m.href}
                  target={m.href.startsWith("http") ? "_blank" : undefined}
                  rel={m.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block"
                >
                  {Inner}
                </a>
              ) : (
                <div key={m.label}>{Inner}</div>
              )
            })}
          </div>

          <div className="rounded-2xl border border-border/60 bg-card/60 p-6 backdrop-blur sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </PageShell>
  )
}
