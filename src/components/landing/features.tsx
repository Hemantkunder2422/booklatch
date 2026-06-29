import {
  Users,
  CalendarCheck,
  Bell,
  CreditCard,
  CalendarRange,
  Tag,
  FileText,
  UserCog,
  MessageSquareHeart,
  BarChart3,
} from "lucide-react"
import { SectionHeading } from "./section-heading"
import { Stagger, StaggerItem } from "./reveal"
import { SpotlightCard } from "./spotlight-card"
import { cn } from "@/lib/utils"

const FEATURES = [
  {
    icon: Users,
    title: "Customer tracking & CRM",
    desc: "A unified profile for every customer — history, preferences, lifetime value and notes, always at your fingertips.",
    span: "lg:col-span-2",
    accent: "from-sky-500/20 to-transparent",
  },
  {
    icon: CalendarCheck,
    title: "One-tap booking confirmation",
    desc: "Approve, hold or decline requests instantly. Customers get notified the second you do.",
    accent: "from-emerald-500/20 to-transparent",
  },
  {
    icon: Bell,
    title: "Smart notifications",
    desc: "Automated email & SMS reminders for deposits, balances and event-day logistics.",
    accent: "from-amber-500/20 to-transparent",
  },
  {
    icon: CreditCard,
    title: "Payments & deposits",
    desc: "Collect deposits and balances online with cards, wallets and bank transfers — settled fast.",
    accent: "from-primary/25 to-transparent",
  },
  {
    icon: CalendarRange,
    title: "Calendars & individual spaces",
    desc: "Manage every room, hall and outdoor space on one drag-and-drop calendar. Zero double-bookings.",
    span: "lg:col-span-2",
    accent: "from-violet-500/20 to-transparent",
  },
  {
    icon: Tag,
    title: "Dynamic pricing control",
    desc: "Set seasonal rates, peak-day premiums, add-ons and packages — full control over every price.",
    accent: "from-rose-500/20 to-transparent",
  },
  {
    icon: FileText,
    title: "Invoicing & contracts",
    desc: "Generate branded invoices and contracts in a click, track what's paid and auto-chase what's due.",
    accent: "from-teal-500/20 to-transparent",
  },
  {
    icon: UserCog,
    title: "Staff management",
    desc: "Roles, permissions and shift assignments so your whole team stays in sync on every event.",
    accent: "from-indigo-500/20 to-transparent",
  },
  {
    icon: MessageSquareHeart,
    title: "Enquiry inbox",
    desc: "Capture every enquiry from web, phone and socials in one shared inbox and reply in seconds.",
    accent: "from-fuchsia-500/20 to-transparent",
  },
  {
    icon: BarChart3,
    title: "Bookings & revenue analytics",
    desc: "Real-time dashboards for occupancy, revenue, conversion and forecasting — know your numbers.",
    span: "lg:col-span-2",
    accent: "from-primary/25 to-transparent",
  },
]

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Everything in one place"
          title={
            <>
              The complete toolkit to run a{" "}
              <span className="text-primary">modern venue</span>
            </>
          }
          description="Stop juggling spreadsheets, inboxes and payment links. BookLatch brings every part of your venue business into one beautiful workspace."
        />

        <Stagger className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <StaggerItem key={f.title} className={cn(f.span)}>
              <SpotlightCard className="h-full">
                <div
                  className={cn(
                    "pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-linear-to-br opacity-0 blur-2xl transition-opacity duration-500 group-hover/spot:opacity-100",
                    f.accent
                  )}
                />
                <div className="relative p-6">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-brand-violet to-brand-fuchsia text-white shadow-lg shadow-primary/25 transition-transform duration-300 group-hover/spot:scale-110">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold tracking-tight">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                </div>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
