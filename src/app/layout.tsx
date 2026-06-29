import type { Metadata, Viewport } from "next"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { siteConfig } from "@/lib/site"

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

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s · BookLatch",
  },
  description: siteConfig.description,
  keywords: [
    "BookLatch",
    "venue management software",
    "booking management system",
    "event space booking",
    "venue scheduling software",
    "venue CRM",
    "venue invoicing",
    "booking calendar software",
  ],
  authors: [{ name: "BookLatch", url: siteConfig.url }],
  creator: "BookLatch",
  publisher: "BookLatch",
  applicationName: "BookLatch",
  category: "technology",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: "BookLatch",
    title: siteConfig.title,
    description:
      "Run your entire venue from one beautiful dashboard: bookings, payments, calendars, invoicing, staff and analytics.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@booklatch",
    creator: "@booklatch",
    title: "BookLatch — Venue Management Software",
    description:
      "Run your entire venue from one beautiful dashboard: bookings, payments, calendars, invoicing, staff and analytics.",
  },
  appleWebApp: {
    capable: true,
    title: "BookLatch",
    statusBarStyle: "black-translucent",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo192.png",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    // Paste the token Google Search Console gives you (or set GOOGLE_SITE_VERIFICATION).
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: {
      // Meta Business Manager → Brand Safety → Domains → "Add a meta-tag".
      // Paste the code into NEXT_PUBLIC_FACEBOOK_DOMAIN_VERIFICATION.
      "facebook-domain-verification":
        process.env.NEXT_PUBLIC_FACEBOOK_DOMAIN_VERIFICATION ?? "",
    },
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1726" },
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
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${inter.variable} ${display.variable}`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
          >
            Skip to content
          </a>
          {children}
          {/* Film grain — subtle texture that removes gradient banding */}
          <div
            aria-hidden
            className="bg-noise pointer-events-none fixed inset-0 z-[60] opacity-[0.04] mix-blend-soft-light dark:opacity-[0.06]"
          />
          <Toaster richColors position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  )
}
