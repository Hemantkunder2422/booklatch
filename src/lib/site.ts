export const siteConfig = {
  name: "BookLatch",
  // Legal operating company behind the BookLatch product.
  company: "Tinnovation",
  url: "https://booklatch.com",
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "https://app.booklatch.com",
  title: "BookLatch — Venue Management Software for Modern Venues",
  description:
    "BookLatch is the all-in-one venue management platform. Track customers, confirm bookings, take payments, manage calendars and spaces, send invoices, run your team and grow revenue — beautifully.",
  tagline: "Run your venue from one beautiful dashboard.",
  contact: {
    email: "support@booklatch.com",
    // Raw number used for tel:/wa.me links, plus a formatted display version.
    phone: "+919321427557",
    phoneDisplay: "+91 93214 27557",
    whatsapp: "919321427557",
    address: "Mangalore, Karnataka, India",
  },
  // Update these to your real profiles — they power the Knowledge Panel via sameAs.
  social: {
    twitter: "https://twitter.com/booklatch",
    linkedin: "https://www.linkedin.com/company/booklatch",
    instagram: "https://www.instagram.com/booklatch",
    facebook: "https://www.facebook.com/booklatch",
  },
} as const

export const sameAs = Object.values(siteConfig.social)
