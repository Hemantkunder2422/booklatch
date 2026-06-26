"use client"

import { motion } from "motion/react"
import {
  BarChart3,
  CalendarDays,
  CreditCard,
  LayoutDashboard,
  Users,
  Settings,
  Bell,
  Search,
  TrendingUp,
  CheckCircle2,
} from "lucide-react"

const NAV = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: CalendarDays, label: "Calendar" },
  { icon: Users, label: "Customers" },
  { icon: CreditCard, label: "Payments" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Settings, label: "Settings" },
]

const KPIS = [
  { label: "Revenue", value: "$84,210", delta: "+18%", tone: "text-emerald-500" },
  { label: "Bookings", value: "326", delta: "+12%", tone: "text-emerald-500" },
  { label: "Occupancy", value: "78%", delta: "+6%", tone: "text-emerald-500" },
]

const BOOKINGS = [
  { name: "Aurora Wedding", space: "Grand Hall", time: "Sat · 6:00 PM", status: "Confirmed", tone: "bg-emerald-500/15 text-emerald-500" },
  { name: "TechCorp Gala", space: "Skyline Terrace", time: "Fri · 7:30 PM", status: "Paid", tone: "bg-primary/15 text-primary" },
  { name: "Mehta Reception", space: "Garden Pavilion", time: "Sun · 5:00 PM", status: "Pending", tone: "bg-amber-500/15 text-amber-500" },
]

// area chart points
const POINTS = [12, 26, 18, 34, 28, 46, 40, 58, 52, 70, 64, 82]

function SparkArea() {
  const w = 320
  const h = 96
  const max = Math.max(...POINTS)
  const step = w / (POINTS.length - 1)
  const coords = POINTS.map((p, i) => [i * step, h - (p / max) * (h - 12) - 6])
  const line = coords.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ")
  const area = `${line} L${w},${h} L0,${h} Z`

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-24 w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#grad)" />
      <motion.path
        d={line}
        fill="none"
        stroke="var(--primary)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
      />
    </svg>
  )
}

function MiniCalendar() {
  const booked = new Set([4, 9, 12, 17, 18, 23, 27])
  const today = 18
  return (
    <div className="grid grid-cols-7 gap-1.5">
      {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
        <div key={i} className="text-center text-[10px] font-medium text-muted-foreground">
          {d}
        </div>
      ))}
      {Array.from({ length: 30 }).map((_, i) => {
        const day = i + 1
        const isBooked = booked.has(day)
        const isToday = day === today
        return (
          <div
            key={day}
            className={[
              "grid aspect-square place-items-center rounded-md text-[10px] font-medium",
              isToday
                ? "bg-primary text-primary-foreground"
                : isBooked
                  ? "bg-primary/15 text-primary"
                  : "text-muted-foreground/80 hover:bg-accent/60",
            ].join(" ")}
          >
            {day}
          </div>
        )
      })}
    </div>
  )
}

export function AppPreview() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border/70 bg-card shadow-2xl shadow-black/20 ring-1 ring-black/5">
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-border/60 bg-muted/40 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400/80" />
        <span className="h-3 w-3 rounded-full bg-amber-400/80" />
        <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
        <div className="mx-auto flex w-72 max-w-[55%] items-center gap-2 rounded-md bg-background/70 px-3 py-1 text-xs text-muted-foreground">
          <Search className="h-3 w-3" /> app.booklatch.com/dashboard
        </div>
      </div>

      <div className="grid grid-cols-12">
        {/* sidebar */}
        <aside className="col-span-3 hidden flex-col gap-1 border-r border-border/60 bg-muted/20 p-3 md:flex">
          {NAV.map((n) => (
            <div
              key={n.label}
              className={[
                "flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm",
                n.active ? "bg-primary/10 font-medium text-primary" : "text-muted-foreground",
              ].join(" ")}
            >
              <n.icon className="h-4 w-4" />
              {n.label}
            </div>
          ))}
          <div className="mt-auto rounded-xl bg-linear-to-br from-primary/15 to-primary/5 p-3">
            <p className="text-xs font-medium">Pro plan</p>
            <p className="mt-1 text-[11px] text-muted-foreground">Unlimited spaces & staff</p>
          </div>
        </aside>

        {/* main */}
        <div className="col-span-12 space-y-4 p-4 md:col-span-9 md:p-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-display text-base font-bold">Good evening, Maya 👋</h3>
              <p className="text-xs text-muted-foreground">Here&apos;s what&apos;s happening at The Atrium today.</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative grid h-8 w-8 place-items-center rounded-lg border border-border/60">
                <Bell className="h-4 w-4 text-muted-foreground" />
                <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
              </div>
              <div className="h-8 w-8 rounded-full bg-linear-to-br from-brand-violet to-brand-fuchsia" />
            </div>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-3 gap-3">
            {KPIS.map((k) => (
              <div key={k.label} className="rounded-xl border border-border/60 bg-background/60 p-3">
                <p className="text-[11px] text-muted-foreground">{k.label}</p>
                <p className="mt-1 font-display text-lg font-bold tracking-tight">{k.value}</p>
                <p className={`mt-0.5 inline-flex items-center gap-1 text-[11px] ${k.tone}`}>
                  <TrendingUp className="h-3 w-3" />
                  {k.delta}
                </p>
              </div>
            ))}
          </div>

          <div className="grid gap-4 lg:grid-cols-5">
            {/* chart */}
            <div className="rounded-xl border border-border/60 bg-background/60 p-3 lg:col-span-3">
              <div className="mb-1 flex items-center justify-between">
                <p className="text-xs font-medium">Revenue · last 12 weeks</p>
                <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-500">
                  +24%
                </span>
              </div>
              <SparkArea />
            </div>
            {/* calendar */}
            <div className="rounded-xl border border-border/60 bg-background/60 p-3 lg:col-span-2">
              <p className="mb-2 text-xs font-medium">June</p>
              <MiniCalendar />
            </div>
          </div>

          {/* bookings */}
          <div className="rounded-xl border border-border/60 bg-background/60 p-3">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-xs font-medium">Upcoming bookings</p>
              <span className="text-[11px] text-primary">View all</span>
            </div>
            <div className="space-y-2">
              {BOOKINGS.map((b) => (
                <div key={b.name} className="flex items-center gap-3 rounded-lg border border-border/50 bg-card/50 px-3 py-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs font-medium">{b.name}</p>
                    <p className="truncate text-[11px] text-muted-foreground">
                      {b.space} · {b.time}
                    </p>
                  </div>
                  <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${b.tone}`}>
                    {b.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
