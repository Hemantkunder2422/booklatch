"use client"

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts"

const REVENUE = [
  { m: "Jan", v: 32 },
  { m: "Feb", v: 41 },
  { m: "Mar", v: 38 },
  { m: "Apr", v: 55 },
  { m: "May", v: 61 },
  { m: "Jun", v: 72 },
  { m: "Jul", v: 84 },
]

const BOOKINGS = [
  { d: "Mon", v: 8 },
  { d: "Tue", v: 12 },
  { d: "Wed", v: 9 },
  { d: "Thu", v: 15 },
  { d: "Fri", v: 22 },
  { d: "Sat", v: 28 },
  { d: "Sun", v: 19 },
]

function ChartTip({ active, payload, suffix = "" }: any) {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-lg border border-border/70 bg-popover px-3 py-1.5 text-xs shadow-lg">
      <span className="font-semibold">
        {payload[0].value}
        {suffix}
      </span>
    </div>
  )
}

export function RevenueChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={REVENUE} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity={0.4} />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="m"
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
        />
        <Tooltip content={<ChartTip suffix="k" />} cursor={{ stroke: "var(--border)" }} />
        <Area type="monotone" dataKey="v" stroke="var(--primary)" strokeWidth={2.5} fill="url(#rev)" />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export function BookingsChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={BOOKINGS} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
        <XAxis
          dataKey="d"
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
        />
        <Tooltip content={<ChartTip />} cursor={{ fill: "var(--accent)", opacity: 0.4 }} />
        <Bar dataKey="v" radius={[6, 6, 0, 0]} fill="var(--primary)" />
      </BarChart>
    </ResponsiveContainer>
  )
}
