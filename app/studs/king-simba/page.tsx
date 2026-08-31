import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { StudGallery } from "@/components/stud-gallery"
import { ServiceSelector } from "@/components/service-selector"
import Link from "next/link"
import {
  Crown, Phone, ArrowRight, Dna, ShieldCheck, Package,
  Check, AlertTriangle, ChevronRight, Clock,
} from "lucide-react"
import type { Metadata } from "next"
import {
  stud, studStats, dnaPanel, healthClearances, hasPlaceholderResults,
  servicePaths, breederBoxContents, processSteps, studFaq, DEPOSIT_AMOUNT,
} from "@/lib/stud-data"

export const metadata: Metadata = {
  title: "King Simba — French Bulldog Stud Service",
  description:
    `Book King Simba, our flagship French Bulldog stud in Albany, NY. Shipped Breeder Box or live cover, $${DEPOSIT_AMOUNT} booking deposit, full DNA color panel and health clearances.`,
  alternates: { canonical: "/studs/king-simba/" },
  openGraph: {
    title: "King Simba — French Bulldog Stud Service | Empire State Bulldogs",
    description:
      `Flagship French Bulldog stud in Albany, NY. Shipped Breeder Box or live cover. $${DEPOSIT_AMOUNT} non-refundable booking deposit.`,
    url: "https://www.empirestatebulldogs.com/studs/king-simba/",
    type: "website",
    images: [{ url: "/images/simba1.jpg", width: 1200, height: 1200, alt: "King Simba, French Bulldog stud at Empire State Bulldogs in Albany NY" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "King Simba — French Bulldog Stud Service",
    description: `Book our flagship French Bulldog stud. Shipped or live cover. $${DEPOSIT_AMOUNT} booking deposit.`,
    images: ["/images/simba1.jpg"],
  },
}

/** Small chip marking a value that has not yet been confirmed by lab paperwork. */
function PendingChip() {
  return (
    <span className="ml-2 inline-flex items-center rounded-md bg-accent/15 border border-accent/30 px-1.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-accent align-middle">
      Pending
    </span>
  )
}

export default function KingSimbaPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: studFaq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.empirestatebulldogs.com/studs/king-simba/#service",
    name: `${stud.name} — ${stud.breed} Stud Service`,
    serviceType: "Dog stud service",
    description:
      `Stud service with ${stud.name}, a ${stud.breed} at Empire State Bulldogs in ${stud.location}. Available as a chilled shipped Breeder Box or as an in-person live cover.`,
    image: `https://www.empirestatebulldogs.com${stud.photos[0].src}`,
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://www.empirestatebulldogs.com/#business",
      name: "Empire State Bulldogs",
      telephone: "+1-518-917-3429",
      address: { "@type": "PostalAddress", addressLocality: "Albany", addressRegion: "NY", addressCountry: "US" },
    },
    areaServed: { "@type": "Country", name: "United States" },
    offers: servicePaths.map((p) => ({
      "@type": "Offer",
      name: p.name,
      description: p.summary,
      price: DEPOSIT_AMOUNT,
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: DEPOSIT_AMOUNT,
        priceCurrency: "USD",
        valueAddedTaxIncluded: false,
        description: `Non-refundable booking deposit to reserve a slot. Remaining stud fee quoted on inquiry and due before service.`,
      },
      availability: "https://schema.org/LimitedAvailability",
      url: `https://www.empirestatebulldogs.com/studs/king-simba/#${p.id}`,
    })),
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.empirestatebulldogs.com/" },
      { "@type": "ListItem", position: 2, name: "Stud Services", item: "https://www.empirestatebulldogs.com/studs/" },
      { "@type": "ListItem", position: 3, name: stud.name, item: "https://www.empirestatebulldogs.com/studs/king-simba/" },
    ],
  }

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Header />

      {/* ─────────── HERO ─────────── */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 bg-background overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 20% 40%, hsl(var(--primary)) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(var(--accent)) 0%, transparent 50%)" }}
        />
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-8 flex justify-center">
            <ol className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground flex-wrap justify-center">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li aria-hidden="true"><ChevronRight className="w-3.5 h-3.5" /></li>
              <li><Link href="/studs" className="hover:text-primary transition-colors">Stud Services</Link></li>
              <li aria-hidden="true"><ChevronRight className="w-3.5 h-3.5" /></li>
              <li><span className="text-foreground font-bold" aria-current="page">{stud.name}</span></li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
            <StudGallery photos={stud.photos} name={stud.name} />

            <div>
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-5 text-sm px-4 py-1.5 inline-flex items-center gap-2">
                <Crown className="w-3.5 h-3.5" /> {stud.tagline}
              </Badge>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 text-foreground leading-[1.05]">
                {stud.name}
              </h1>
              <p className="text-primary text-base sm:text-lg font-bold mb-6 uppercase tracking-widest">
                {stud.breed} · {stud.location}
              </p>

              {/* Stats grid */}
              <dl className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-7">
                {studStats.map((s) => (
                  <div key={s.label} className="bg-card border border-border rounded-xl p-3">
                    <dt className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">{s.label}</dt>
                    <dd className="text-sm sm:text-base font-bold text-foreground leading-tight">
                      {s.value}{s.placeholder && <PendingChip />}
                    </dd>
                  </div>
                ))}
              </dl>

              {/* Deposit price block */}
              <div className="bg-gradient-to-br from-primary/15 via-card to-accent/10 border border-primary/25 rounded-2xl p-5 mb-6">
                <p className="text-xs font-black uppercase tracking-widest text-primary mb-1">Booking Deposit</p>
                <div className="flex items-baseline gap-2 mb-2 flex-wrap">
                  <span className="text-4xl sm:text-5xl font-black text-foreground">${DEPOSIT_AMOUNT}</span>
                  <span className="text-sm text-muted-foreground font-bold">non-refundable</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Reserves your slot in the book and is credited toward your stud fee. The remaining balance is quoted
                  on inquiry and is due in full before service.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 flex-1 py-6 rounded-2xl shadow-xl shadow-primary/30 text-base font-black">
                  <Link href="#book" className="flex items-center justify-center gap-2">
                    Book King Simba <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 flex-1 py-6 rounded-2xl text-base font-black">
                  <a href="tel:5189173429" className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" /> 518-917-3429
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── GENETICS & CLEARANCES ─────────── */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">The Paperwork</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2 text-foreground">Genetics &amp; Clearances</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto text-sm sm:text-base">
              Serious breeders ask for the panel before they ask for the price. Here it is.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-5 max-w-6xl mx-auto">
            {/* DNA panel */}
            <div className="bg-background rounded-2xl border border-border p-5 sm:p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Dna className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground leading-tight">DNA Color Panel</h3>
                  <p className="text-xs text-muted-foreground">What he carries and what he can produce</p>
                </div>
              </div>
              <ul className="space-y-2">
                {dnaPanel.map((row) => (
                  <li key={row.locus} className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 py-2.5 border-b border-border/60 last:border-0">
                    <span className="text-sm font-bold text-foreground">{row.locus}</span>
                    <span className="font-mono text-sm text-primary font-bold">
                      {row.result}{row.placeholder && <PendingChip />}
                    </span>
                    <span className="text-xs text-muted-foreground w-full">{row.note}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Health clearances */}
            <div className="bg-background rounded-2xl border border-border p-5 sm:p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground leading-tight">Health Clearances</h3>
                  <p className="text-xs text-muted-foreground">Full reports sent to every booked breeder</p>
                </div>
              </div>
              <ul className="space-y-2">
                {healthClearances.map((row) => (
                  <li key={row.test} className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 py-2.5 border-b border-border/60 last:border-0">
                    <span className="text-sm font-bold text-foreground">{row.test}</span>
                    <span className="text-sm text-primary font-bold">
                      {row.result}{row.placeholder && <PendingChip />}
                    </span>
                    <span className="text-xs text-muted-foreground w-full">{row.note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {hasPlaceholderResults && (
            <div className="max-w-6xl mx-auto mt-5">
              <div className="flex gap-3 items-start bg-accent/8 border border-accent/25 rounded-2xl p-4">
                <AlertTriangle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="font-black text-accent">Values marked Pending are awaiting final lab documentation.</span>{" "}
                  They are shown as expected results and should not be relied on as confirmed until we send you the
                  signed reports. Ask us for the current paperwork before you book — we will send exactly what we have.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ─────────── TWO SERVICE PATHS ─────────── */}
      <section id="book" className="py-16 bg-background border-b border-border scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Two Ways to Breed</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2 text-foreground">Choose Your Service</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto text-sm sm:text-base">
              Both paths take the same ${DEPOSIT_AMOUNT} non-refundable booking deposit. The remaining balance is always
              paid in full before service.
            </p>
          </div>

          <ServiceSelector />
        </div>
      </section>

      {/* ─────────── BREEDER BOX ─────────── */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-4 text-sm px-4 py-1.5 inline-flex items-center gap-2">
                <Package className="w-3.5 h-3.5" /> Shipped Nationwide
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4 leading-tight">
                The Breeder Box
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-4">
                Too far to drive? We collect with a reproductive veterinarian, extend and chill the sample, and
                overnight it straight to your vet&apos;s clinic in an insulated box built to hold temperature in transit.
              </p>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                Chilled semen has to be used the day it lands, so the ship date is set by your dam&apos;s progesterone
                numbers — not by the calendar. Your vet inseminates on the window, and we stay reachable the whole time.
              </p>
            </div>

            <div className="bg-background rounded-2xl border border-border p-5 sm:p-7">
              <p className="text-xs font-black text-primary uppercase tracking-widest mb-4">What&apos;s In The Box</p>
              <ul className="space-y-2.5">
                {breederBoxContents.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-primary stroke-[3px]" />
                    </div>
                    <span className="text-sm sm:text-base font-bold text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── PROCESS ─────────── */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Start to Finish</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2 text-foreground">How It Works</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {processSteps.map((s) => (
              <div key={s.num} className="bg-card rounded-2xl border border-border p-6 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-lg font-black text-primary">{s.num}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto leading-relaxed">
            <span className="font-black text-foreground">We breed on real progesterone numbers.</span> Not day counts,
            not guesses. Send us the values from your reproductive vet as they come in and we&apos;ll set the window
            together.
          </p>
        </div>
      </section>

      {/* ─────────── FAQ ─────────── */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Before You Book</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2 text-foreground">Stud Service FAQ</h2>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
            {studFaq.map((f) => (
              <div key={f.q} className="p-5 sm:p-6 bg-background rounded-2xl border border-border hover:border-primary/30 transition-colors">
                <h3 className="font-bold text-foreground text-base sm:text-lg mb-2 leading-snug">{f.q}</h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── FINAL CTA ─────────── */}
      <section className="py-20 bg-gradient-to-br from-primary/20 via-background to-accent/10">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Badge className="bg-accent/20 text-accent border-accent/30 mb-5 text-sm px-4 py-1.5 inline-flex items-center gap-2">
            <Clock className="w-3.5 h-3.5" /> Limited Book
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4 leading-tight">
            Simba&apos;s Book Is Limited
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            We cap how many females he covers each season so every breeding gets proper timing and follow-through.
            Slots are held in the order deposits clear.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 px-8 py-6 text-base sm:text-lg shadow-xl shadow-primary/30 rounded-2xl font-black">
              <Link href="#book" className="flex items-center gap-2">
                Reserve a Slot <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 px-8 py-6 text-base sm:text-lg rounded-2xl font-black">
              <a href="tel:5189173429" className="flex items-center gap-2">
                <Phone className="w-5 h-5" /> 518-917-3429
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
