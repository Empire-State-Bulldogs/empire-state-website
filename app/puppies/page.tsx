import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { Heart, Phone, Star, ArrowRight, Shield, Check, Clock, DollarSign, Truck, Users } from "lucide-react"
import { PayPalDepositButton } from "@/components/paypal-button"
import { PuppyCard } from "@/components/puppy-card"
import { availablePuppies } from "@/lib/puppy-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
    alternates: {
        canonical: "/puppies/",
    },
  title: "Available Fluffy French Bulldog Puppies",
  description: "Meet our available fluffy French Bulldog puppies in Albany, NY — lilac merle, chocolate, and black & tan long coats. Health tested, vaccinated, 1-year guarantee, nationwide delivery.",
  openGraph: {
    title: "Available Fluffy French Bulldog Puppies | Empire State Bulldogs",
    description: "Meet our available fluffy Frenchie puppies in Albany, NY — lilac merle, chocolate, and black & tan long coats. Nationwide delivery.",
    url: "https://www.empirestatebulldogs.com/puppies/",
    type: "website",
    images: [{ url: "/images/fluffy-french-bulldog-puppy-lilac-merle-albany-ny-1.jpg", width: 960, height: 1280, alt: "Lilac merle fluffy French Bulldog puppy available at Empire State Bulldogs" }],
  },
}

const includes = [
  "Up-to-date vaccinations",
  "Full deworming protocol",
  "Licensed vet health check",
  "1-year health guarantee",
  "Microchipped & registered",
  "Puppy starter pack",
  "Lifetime breeder support",
  "AKC registration papers",
]

const puppyPhotos = [
  { src: "/images/puppy1-1.jpg", alt: "Lilac tan French Bulldog puppy placed by Empire State Bulldogs" },
  { src: "/images/puppy2-1.jpg", alt: "Blue fawn French Bulldog puppy from a past Empire State Bulldogs litter" },
  { src: "/images/puppy3-1.jpg", alt: "Chocolate French Bulldog puppy raised in Albany, NY" },
  { src: "/images/puppy3-2.jpg", alt: "Chocolate French Bulldog puppy playing indoors" },
  { src: "/images/puppy4-1.jpg", alt: "Cream French Bulldog puppy from Empire State Bulldogs" },
  { src: "/images/puppy5-1.jpg", alt: "Brindle French Bulldog puppy placed in a loving home" },
]

const guarantees = [
  { icon: Shield, title: "1-Year Health Guarantee", desc: "Written guarantee covering life-threatening congenital and hereditary defects." },
  { icon: Users, title: "Family Raised", desc: "Every puppy is raised in our home with daily socialization, enrichment, and love." },
  { icon: Truck, title: "Nationwide Delivery", desc: "Safe nanny delivery service or cargo shipping available to any US state." },
  { icon: Heart, title: "Lifetime Support", desc: "We're here for the life of your dog — from puppy questions to senior care advice." },
]

const faq = [
  { q: "What colors do you produce?", a: "We specialize in rare and exotic colors including Lilac Tan, Blue Fawn, Chocolate Tri, Merle, Platinum, and more from King Simba's bloodlines." },
  { q: "Do you ship puppies nationwide?", a: "Yes! We offer nanny flight delivery (safest option) and cargo. Shipping fees vary by location. We've shipped coast to coast." },
  { q: "How do I reserve a puppy?", a: "A deposit holds your spot on the waitlist. Contact us to discuss availability and deposit terms. When a litter is whelped, we'll reach out with photos and help you select your puppy." },
  { q: "What health testing is done?", a: "All breeding dogs are fully health tested: OFA hips, patellas, cardiac, BAER, CAER eyes, and full genetic DNA panels through Embark." },
  { q: "How old are puppies when they go home?", a: "Puppies go home at 8 weeks old minimum — never before. Early socialization at our home is critical to temperament development." },
  { q: "Can I visit to see the puppies?", a: "Absolutely! We welcome visits by appointment. Call or text 518-917-3429 to schedule. We're in Albany, NY." },
  { q: "Do you offer a payment plan?", a: "Yes, we can work with you on payment plans for the remaining balance after deposit. Contact us to discuss your situation." },
  { q: "What is included in the puppy pack?", a: "Each puppy comes with a starter kit including food, a blanket with mom's scent, records folder, toys, and a care guide written by us." },
]

export default function PuppiesPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }

  const listSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Available Fluffy French Bulldog Puppies",
    itemListElement: availablePuppies.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      // Described as the animal itself rather than a retail product listing —
      // keeps rich results without framing the page as an e-commerce sale.
      item: {
        "@type": "Thing",
        name: `${p.name} French Bulldog Puppy`,
        description: p.blurb,
        image: `https://www.empirestatebulldogs.com${p.photos[0].src}`,
        url: "https://www.empirestatebulldogs.com/puppies/#available",
      },
    })),
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.empirestatebulldogs.com/" },
      { "@type": "ListItem", position: 2, name: "Puppies", item: "https://www.empirestatebulldogs.com/puppies/" },
    ],
  }

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />

      {/* HERO */}
      <section className="relative pt-28 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-background">
        <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 80% 20%, hsl(var(--accent) / 0.08) 0%, transparent 60%), radial-gradient(circle at 20% 80%, hsl(var(--primary) / 0.06) 0%, transparent 60%)'}} />
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="bg-accent/20 text-accent border-accent/30 mb-6 text-sm px-4 py-1.5 inline-flex items-center gap-2">
            <Heart className="w-3.5 h-3.5" />
            Fluffy French Bulldog Puppies
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-foreground leading-[1.05]">
            Find Your Perfect<br />
            <span className="text-primary">Fluffy Frenchie</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Born in our home. Raised with love and intention. Every Empire State Bulldog puppy is a living piece of art — rare genetics, outstanding health, and irreplaceable personality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 px-8 py-6 text-base sm:text-lg shadow-xl shadow-primary/30 rounded-2xl">
              <a href="tel:5189173429" className="flex items-center gap-2">
                <Phone className="w-5 h-5" /> Call to Inquire
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 px-8 py-6 text-base sm:text-lg rounded-2xl">
              <Link href="#deposit" className="flex items-center gap-2">
                Join The Waitlist <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-muted-foreground">
            {["AKC Registered", "1-Year Health Guarantee", "Family Raised", "Nationwide Shipping", "Vet Checked"].map((t) => (
              <div key={t} className="flex items-center gap-1.5"><Check className="w-4 h-4 text-primary" />{t}</div>
            ))}
          </div>
        </div>
      </section>

      {/* AVAILABLE NOW */}
      <section id="available" className="py-16 bg-background border-t border-border scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-primary text-white mb-4 px-5 py-2 text-sm font-black uppercase tracking-widest">
              Available Now
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground">Puppies Ready to Reserve</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto text-sm sm:text-base">
              These fluffy Frenchies are with us right now. Reach out to meet them and talk about whether one is the
              right fit — once a pup is matched with a family, we take the listing down the same day.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
            {availablePuppies.map((puppy) => (
              <PuppyCard key={puppy.id} puppy={puppy} />
            ))}
          </div>
        </div>
      </section>

      {/* COMING SOON FEATURE */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-primary/10 via-card to-accent/5 rounded-3xl border border-primary/20 p-6 sm:p-10 md:p-14 grid md:grid-cols-2 gap-10 items-center">
            <div className="relative">
              <div className="absolute -inset-3 bg-primary/20 rounded-3xl blur-xl opacity-50" />
              <div className="relative rounded-2xl overflow-hidden aspect-square">
                <Image src="/images/coming_soon.jpg" alt="New Puppies Coming Soon" fill className="object-cover shadow-2xl" />
              </div>
              <Badge className="absolute top-4 left-4 bg-accent text-white shadow-xl px-4 py-2 text-sm font-bold">
                <Clock className="w-3.5 h-3.5 mr-1" /> Dropping Soon!
              </Badge>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4 leading-tight">
                Next Litter<br />
                <span className="text-primary">On the Way</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg mb-6 leading-relaxed">
                King Simba's next litter is on the way. If you'd like to be considered, join the waitlist and we'll
                reach out with photos when they arrive — waitlist families hear from us first.
              </p>
              <div className="bg-background/60 rounded-2xl p-4 mb-6 border border-border">
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Expected Colors This Litter</p>
                <div className="flex flex-wrap gap-2">
                  {["Lilac Tan", "Blue Fawn", "Chocolate Merle", "Exotic Tri", "Platinum"].map((c) => (
                    <Badge key={c} variant="outline" className="border-primary/30 text-foreground text-xs py-1">{c}</Badge>
                  ))}
                </div>
              </div>
              <div className="bg-background/60 rounded-2xl p-4 mb-6 border border-border">
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">What's Included</p>
                <div className="grid grid-cols-2 gap-y-1.5 gap-x-2">
                  {includes.slice(0, 6).map((item) => (
                    <div key={item} className="flex items-center gap-1.5 text-xs text-foreground">
                      <Check className="w-3 h-3 text-primary shrink-0" />{item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 flex-1 py-5 rounded-xl shadow-xl shadow-primary/30">
                  <a href="tel:5189173429" className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" /> Join the Waitlist
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-accent/10 flex-1 py-5 rounded-xl">
                  <Link href="#deposit">Waitlist Deposit</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Past Litters</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2 text-foreground">Our Babies</h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm sm:text-base">A look at the beautiful puppies we've placed in loving homes across the US.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 max-w-5xl mx-auto">
            {puppyPhotos.map((photo) => (
              <div key={photo.src} className="aspect-square rounded-2xl overflow-hidden group relative">
                <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 rounded-xl">
              <Link href="/gallery" className="flex items-center gap-2">
                View Full Gallery <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* GUARANTEES */}
      <section className="py-16 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Our Promise</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2 text-foreground">The ESB Guarantee</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {guarantees.map((g) => (
              <div key={g.title} className="p-6 bg-background rounded-2xl border border-border hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <g.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{g.title}</h3>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAYPAL DEPOSIT */}
      <section id="deposit" className="py-16 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-primary/20 text-primary border-primary/30 mb-4 px-4 py-1.5 text-sm inline-flex items-center gap-2">
              <DollarSign className="w-3.5 h-3.5" /> Waitlist Deposit
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground">Join The Waitlist</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm sm:text-base">
              A deposit holds your place on the waitlist. Talk to us first so we can confirm what's coming and make
              sure it's a good match before anything is paid.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            <PayPalDepositButton
              label="Puppy Waitlist Deposit"
              description="Holds your spot on our waitlist. You'll receive first selection from the next available litter. Deposit amount discussed upon inquiry."
              noteMessage="Call 518-917-3429 first to confirm litter availability and discuss color preferences."
              variant="puppy"
            />
            <PayPalDepositButton
              label="Priority Deposit — First Pick"
              description="Priority pick of the litter. You select first from all available puppies in the upcoming litter. Reserve your priority spot today."
              noteMessage="Limited spots available. Contact us before submitting to confirm your priority slot."
              variant="puppy"
            />
          </div>
          <p className="text-center text-xs text-muted-foreground mt-5 max-w-lg mx-auto">
            Deposits are non-refundable but fully transferable to a future litter within 12 months. Every placement includes our written health guarantee.{" "}
            <Link href="/terms/#deposits" className="underline hover:text-primary">Read the full deposit terms</Link>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Got Questions?</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2 text-foreground">Frequently Asked</h2>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
            {faq.map((f) => (
              <div key={f.q} className="p-5 bg-background rounded-2xl border border-border hover:border-primary/30 transition-colors">
                <h3 className="font-bold text-foreground text-base sm:text-lg mb-2">{f.q}</h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-accent/10 via-background to-primary/10">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Star className="w-12 h-12 text-accent fill-accent mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4">
            Ready to Meet Your New Best Friend?
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-8 max-w-xl mx-auto">
            Our pups go home with families we've gotten to know. Reach out and let's talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 px-8 py-6 text-base sm:text-lg shadow-xl shadow-primary/30 rounded-2xl">
              <a href="tel:5189173429" className="flex items-center gap-2">
                <Phone className="w-5 h-5" /> 518-917-3429
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-accent/10 px-8 py-6 text-base sm:text-lg rounded-2xl">
              <a href="mailto:hello@empirestatebulldogs.com">Email for Details</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
