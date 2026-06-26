import type { Metadata, Viewport } from "next"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
})

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700", "800"],
})

const SITE_URL = "https://booklatch.com"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "BookLatch — Venue Management Software for Modern Venues",
    template: "%s · BookLatch",
  },
  description:
    "BookLatch is the all-in-one venue management platform. Track customers, confirm bookings, take payments, manage calendars and spaces, send invoices, run your team and grow revenue — beautifully.",
  keywords: [
    "venue management software",
    "booking management system",
    "event space booking",
    "venue scheduling",
    "venue CRM",
    "venue invoicing",
    "booking calendar software",
  ],
  authors: [{ name: "BookLatch" }],
  creator: "BookLatch",
  applicationName: "BookLatch",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "BookLatch",
    title: "BookLatch — Venue Management Software for Modern Venues",
    description:
      "Run your entire venue from one beautiful dashboard: bookings, payments, calendars, invoicing, staff and analytics.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "BookLatch" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BookLatch — Venue Management Software",
    description:
      "Run your entire venue from one beautiful dashboard: bookings, payments, calendars, invoicing, staff and analytics.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo192.png",
  },
  manifest: "/manifest.json",
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1410" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${display.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster richColors position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  )
}
