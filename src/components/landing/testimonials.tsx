import { Star } from "lucide-react"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"

type Quote = {
  quote: string
  name: string
  role: string
  initials: string
  tone: string
}

const QUOTES: Quote[] = [
  {
    quote:
      "We replaced four different tools with BookLatch. Double-bookings are gone and our deposits clear before the event is even confirmed.",
    name: "Maya Fernandes",
    role: "Owner, The Atrium",
    initials: "MF",
    tone: "from-primary to-rose-500",
  },
  {
    quote:
      "The calendar across all six of our spaces is a game-changer. My team finally sees everything in one place.",
    name: "Daniel Okoye",
    role: "GM, Skyline Events",
    initials: "DO",
    tone: "from-sky-500 to-indigo-500",
  },
  {
    quote:
      "Invoicing used to eat my Sundays. Now it's automatic and clients pay on time. Revenue is up 30% this year.",
    name: "Priya Mehta",
    role: "Founder, Aurora Gardens",
    initials: "PM",
    tone: "from-amber-500 to-rose-500",
  },
  {
    quote:
      "Enquiries from Instagram, our site and phone all land in one inbox. We reply faster and win more bookings.",
    name: "Liam Walsh",
    role: "Director, Urban Loft",
    initials: "LW",
    tone: "from-emerald-500 to-teal-500",
  },
  {
    quote:
      "The analytics tell me exactly which spaces and seasons make money. I price with confidence now.",
    name: "Sofia Rossi",
    role: "Owner, Maison Belle",
    initials: "SR",
    tone: "from-violet-500 to-fuchsia-500",
  },
  {
    quote:
      "Onboarding took an afternoon. It's the rare software my whole team actually enjoys using.",
    name: "Arjun Kapoor",
    role: "Ops Lead, Grand Pavilion",
    initials: "AK",
    tone: "from-rose-500 to-orange-500",
  },
]

export function Testimonials() {
  return (
    <section id="reviews" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Loved by venues"
          title="Owners run calmer, busier venues"
          description="Join 1,400+ venues that switched to BookLatch and never looked back."
        />

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {QUOTES.map((q, i) => (
            <Reveal key={q.name} delay={(i % 3) * 0.08} className="break-inside-avoid">
              <figure className="rounded-2xl border border-border/60 bg-card/60 p-6 backdrop-blur">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="mt-4 text-pretty text-[15px] leading-relaxed text-foreground/90">
                  “{q.quote}”
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span
                    className={`grid h-10 w-10 place-items-center rounded-full bg-linear-to-br ${q.tone} text-sm font-bold text-white`}
                  >
                    {q.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">{q.name}</span>
                    <span className="block text-xs text-muted-foreground">{q.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
