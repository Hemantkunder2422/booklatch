import {
  Building2,
  CheckCircle2,
  CreditCard,
  Instagram,
  Globe,
  Phone,
  Plus,
  Search,
  Send,
} from "lucide-react"

function MockFrame({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border/70 bg-card shadow-2xl shadow-black/10 ring-1 ring-black/5">
      <div className="flex items-center gap-2 border-b border-border/60 bg-muted/40 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        <span className="ml-2 truncate text-[11px] text-muted-foreground">{label}</span>
      </div>
      {children}
    </div>
  )
}

/* ───────────────────────── Calendar / scheduling ───────────────────────── */

const WEEK = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
const EVENTS: Record<number, { label: string; tone: string }[]> = {
  0: [{ label: "Tasting · Garden", tone: "bg-brand-teal/20 text-brand-teal" }],
  1: [{ label: "Corporate · Terrace", tone: "bg-sky-500/20 text-sky-500" }],
  2: [
    { label: "Viewing · Hall", tone: "bg-amber-500/20 text-amber-600" },
    { label: "Setup · Garden", tone: "bg-brand-teal/20 text-brand-teal" },
  ],
  4: [{ label: "Gala · Terrace", tone: "bg-sky-500/20 text-sky-500" }],
  5: [
    { label: "Wedding · Grand Hall", tone: "bg-primary/20 text-primary" },
    { label: "Reception · Garden", tone: "bg-brand-fuchsia/20 text-brand-fuchsia" },
  ],
  6: [{ label: "Brunch · Terrace", tone: "bg-sky-500/20 text-sky-500" }],
}

export function CalendarMockup() {
  return (
    <MockFrame label="app.booklatch.com/calendar">
      <div className="p-4 sm:p-5">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="font-display text-sm font-bold">March 2026</p>
            <p className="text-[11px] text-muted-foreground">3 spaces · 8 bookings this week</p>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="hidden rounded-lg border border-border/60 p-0.5 text-[10px] sm:flex">
              <span className="rounded-md px-2 py-1 text-muted-foreground">Day</span>
              <span className="rounded-md bg-primary px-2 py-1 font-medium text-primary-foreground">
                Week
              </span>
              <span className="rounded-md px-2 py-1 text-muted-foreground">Month</span>
            </div>
            <span className="inline-flex items-center gap-1 rounded-lg bg-primary px-2.5 py-1.5 text-[11px] font-medium text-primary-foreground">
              <Plus className="h-3 w-3" /> New
            </span>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-1.5">
          {WEEK.map((d, i) => (
            <div key={d} className="text-center">
              <p className="text-[10px] font-medium text-muted-foreground">{d}</p>
              <p
                className={`mx-auto mt-1 grid h-6 w-6 place-items-center rounded-full text-[11px] font-semibold ${
                  i === 5 ? "bg-primary text-primary-foreground" : "text-foreground/70"
                }`}
              >
                {10 + i}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-2 grid grid-cols-7 gap-1.5">
          {WEEK.map((_, i) => (
            <div
              key={i}
              className="min-h-[88px] space-y-1 rounded-lg border border-border/40 bg-background/40 p-1"
            >
              {(EVENTS[i] ?? []).map((e) => (
                <div
                  key={e.label}
                  className={`rounded-md px-1.5 py-1 text-[9px] font-medium leading-tight ${e.tone}`}
                >
                  {e.label}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </MockFrame>
  )
}

/* ───────────────────────── Enquiry inbox ───────────────────────── */

const ENQUIRIES = [
  { name: "Olivia Bennett", snippet: "Is the Grand Hall free on June 14?", Icon: Instagram, time: "2m", color: "text-brand-fuchsia", active: true, unread: true },
  { name: "Marcus Lee", snippet: "Corporate offsite for 80 guests…", Icon: Globe, time: "18m", color: "text-sky-500", unread: true },
  { name: "Priya Sharma", snippet: "Catering options for the Terrace?", Icon: Phone, time: "1h", color: "text-emerald-500" },
  { name: "James Carter", snippet: "Thanks — deposit just sent!", Icon: Globe, time: "3h", color: "text-sky-500" },
]

export function InboxMockup() {
  return (
    <MockFrame label="app.booklatch.com/enquiries">
      <div className="grid grid-cols-12">
        <div className="col-span-12 border-b border-border/60 p-3 sm:col-span-5 sm:border-b-0 sm:border-r">
          <div className="mb-2 flex items-center gap-2 rounded-lg bg-background/70 px-2.5 py-1.5 text-[11px] text-muted-foreground">
            <Search className="h-3 w-3" /> Search enquiries
          </div>
          <div className="space-y-1">
            {ENQUIRIES.map((e) => (
              <div
                key={e.name}
                className={`flex items-start gap-2 rounded-lg p-2 ${
                  e.active ? "bg-primary/10" : "hover:bg-accent/50"
                }`}
              >
                <e.Icon className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${e.color}`} />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="truncate text-[11px] font-semibold">{e.name}</p>
                    <span className="shrink-0 text-[9px] text-muted-foreground">{e.time}</span>
                  </div>
                  <p className="truncate text-[10px] text-muted-foreground">{e.snippet}</p>
                </div>
                {e.unread && <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />}
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12 flex flex-col p-3 sm:col-span-7">
          <div className="flex items-center gap-2 border-b border-border/50 pb-2">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-linear-to-br from-brand-violet to-brand-fuchsia text-[10px] font-bold text-white">
              OB
            </span>
            <div>
              <p className="text-[11px] font-semibold">Olivia Bennett</p>
              <p className="text-[9px] text-muted-foreground">via Instagram · new lead</p>
            </div>
          </div>
          <div className="flex-1 space-y-2 py-3">
            <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-muted px-3 py-1.5 text-[10px]">
              Hi! Is the Grand Hall available on June 14 for ~120 guests?
            </div>
            <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-primary px-3 py-1.5 text-[10px] text-primary-foreground">
              Yes it is! I&apos;ve pencilled you in and sent a quote 🎉
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-border/60 bg-background/70 px-3 py-1.5">
            <span className="flex-1 text-[10px] text-muted-foreground">Write a reply…</span>
            <span className="grid h-6 w-6 place-items-center rounded-lg bg-primary text-primary-foreground">
              <Send className="h-3 w-3" />
            </span>
          </div>
        </div>
      </div>
    </MockFrame>
  )
}

/* ───────────────────────── Invoice / payments ───────────────────────── */

const LINES = [
  { item: "Grand Hall hire · 8 hrs", amt: "$3,200" },
  { item: "Catering · 120 guests", amt: "$5,400" },
  { item: "AV & lighting package", amt: "$1,150" },
]

export function InvoiceMockup() {
  return (
    <MockFrame label="app.booklatch.com/invoices/INV-1042">
      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-linear-to-br from-brand-violet to-brand-fuchsia text-white">
              <Building2 className="h-4 w-4" />
            </span>
            <div>
              <p className="font-display text-sm font-bold">Invoice INV-1042</p>
              <p className="text-[10px] text-muted-foreground">Aurora Wedding · June 14, 2026</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2.5 py-1 text-[10px] font-semibold text-emerald-500">
            <CheckCircle2 className="h-3 w-3" /> Paid
          </span>
        </div>

        <div className="mt-4 space-y-1.5">
          {LINES.map((l) => (
            <div
              key={l.item}
              className="flex items-center justify-between rounded-lg border border-border/40 bg-background/40 px-3 py-2"
            >
              <span className="text-[11px] text-muted-foreground">{l.item}</span>
              <span className="text-[11px] font-medium">{l.amt}</span>
            </div>
          ))}
        </div>

        <div className="mt-3 flex items-center justify-between rounded-xl bg-primary/10 px-3 py-2.5">
          <span className="text-[11px] font-semibold">Total</span>
          <span className="font-display text-base font-bold">$9,750</span>
        </div>

        <div className="mt-3 flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/5 px-3 py-2">
          <CreditCard className="h-3.5 w-3.5 text-emerald-500" />
          <span className="text-[10px] text-muted-foreground">
            Paid in full via card · settled to your account
          </span>
        </div>
      </div>
    </MockFrame>
  )
}
