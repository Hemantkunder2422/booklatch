export const siteConfig = {
  name: "BookLatch",
  url: "https://booklatch.com",
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "https://app.booklatch.com",
  title: "BookLatch — Venue Management Software for Modern Venues",
  description:
    "BookLatch is the all-in-one venue management platform. Track customers, confirm bookings, take payments, manage calendars and spaces, send invoices, run your team and grow revenue — beautifully.",
  tagline: "Run your venue from one beautiful dashboard.",
  // Update these to your real profiles — they power the Knowledge Panel via sameAs.
  social: {
    twitter: "https://twitter.com/booklatch",
    linkedin: "https://www.linkedin.com/company/booklatch",
    instagram: "https://www.instagram.com/booklatch",
    facebook: "https://www.facebook.com/booklatch",
  },
} as const

export const sameAs = Object.values(siteConfig.social)
