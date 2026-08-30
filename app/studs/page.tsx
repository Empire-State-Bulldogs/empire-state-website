import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { Crown, Star, MapPin, Phone, ArrowRight, Shield, Award, Heart, Check, DollarSign, Dna, Eye } from "lucide-react"
import { PayPalDepositButton } from "@/components/paypal-button"
import type { Metadata } from "next"

export const metadata: Metadata = {
    alternates: {
        canonical: "/studs/",
    },
  title: "French Bulldog Stud Services",
  description: "Book a stud service with King Simba. Health tested, AKC registered, champion bloodline French Bulldog stud. Serving NY, CT, MA, and nationwide.",
}

const simbaPhotos = [
  "/images/simba1.jpg",
  "/images/simba2.jpg",
  "/images/simba3.jpg",
  "/images/simba4.jpg",
  "/images/simba5.jpg",
]

const traits = [
  { icon: Dna, label: "Genetics Tested", detail: "Full genetic panel performed — clear on all tested diseases" },
  { icon: Award, label: "OFA Certified", detail: "Hips, patellas, elbows, cardiac & BAER hearing tested" },
  { icon: Eye, label: "Eye Certified", detail: "CAER registered — clear eyes, no hereditary conditions" },
  { icon: Shield, label: "BOAS Evaluated", detail: "Grade 0-1 BOAS — exceptional airway and structure" },
  { icon: Star, label: "Champion Blood", detail: "Multiple generations of title-holding ancestors" },
  { icon: Heart, label: "Proven Sire", detail: "Multiple proven litters with outstanding offspring" },
]

const features = [
  { icon: Shield, title: "Health Tested", desc: "Full panel genetic testing before every breeding. We share all results upfront." },
  { icon: Award, title: "Champion Bloodlines", desc: "King Simba carries documented championship pedigree across 4+ generations." },
  { icon: MapPin, title: "We Travel To You", desc: "We come to your location across NY, CT, MA, NJ and beyond." },
  { icon: Heart, title: "Lifetime Support", desc: "We're your partner throughout the entire breeding journey — not just the appointment." },
]

const steps = [
  { num: "01", title: "Initial Inquiry", desc: "Call or text us to discuss your breeding goals, your female's health, color genetics, and what you hope to produce." },
  { num: "02", title: "Submit Health Clearances", desc: "Provide your female's OFA results, genetic testing, and AKC registration before we confirm the booking." },
  { num: "03", title: "Sign Agreement & Pay Deposit", desc: "A stud service agreement is signed and a deposit secures your slot. Balance due at time of service." },
  { num: "04", title: "Progesterone Timing", desc: "We coordinate with your vet to establish the precise breeding window for maximum conception rates." },
  { num: "05", title: "Breeding Appointment", desc: "Natural tie or surgical AI available. We travel statewide. Chilled or frozen semen shipments also available." },
  { num: "06", title: "Whelping Support", desc: "We're available through whelping, neonatal care, and beyond. We don't disappear after the breeding." },
]

export default function StudsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* HERO */}
      <section className="relative pt-28 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, hsl(var(--primary)) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(var(--accent)) 0%, transparent 50%)'}} />
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="bg-primary/20 text-primary border-primary/30 mb-6 text-sm px-4 py-1.5 inline-flex items-center gap-2">
            <Crown className="w-3.5 h-3.5" />
            Champion Stud Services — Albany, NY
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-foreground leading-[1.05]">
            World-Class<br />
            <span className="text-primary">French Bulldog Studs</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Breed with champions. Our studs carry elite genetics, proven health clearances, and championship bloodlines — designed to elevate your entire breeding program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base sm:text-lg shadow-xl shadow-primary/30 rounded-2xl">
              <a href="tel:5189173429" className="flex items-center gap-2">
                <Phone className="w-5 h-5" /> Call to Book: 518-917-3429
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 px-8 py-6 text-base sm:text-lg rounded-2xl">
              <Link href="#deposit" className="flex items-center gap-2">
                Pay Deposit Online <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
          {/* Trust strip */}
          <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-muted-foreground">
            {["OFA Certified", "DNA Health Tested", "Champion Bloodline", "Available NY Statewide", "Proven Sire"].map((t) => (
              <div key={t} className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-primary" />{t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KING SIMBA HERO */}
      <section className="py-16 md:py-20 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
            {/* Photo mosaic */}
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl opacity-40" />
              <div className="relative grid grid-cols-3 grid-rows-2 gap-2 h-80 sm:h-96 md:h-[480px]">
                <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden">
                  <Image src={simbaPhotos[0]} alt="King Simba" fill className="object-cover" priority />
                </div>
                {simbaPhotos.slice(1, 5).map((photo, i) => (
                  <div key={i} className="relative rounded-xl overflow-hidden">
                    <Image src={photo} alt={`King Simba ${i + 2}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
              <Badge className="absolute top-4 left-4 z-10 bg-primary text-white shadow-xl text-sm px-3 py-1.5">
                <Crown className="w-3.5 h-3.5 mr-1" /> Flagship Stud
              </Badge>
            </div>

            {/* Info */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground">King Simba</h2>
                <Star className="w-7 h-7 text-accent fill-accent shrink-0" />
              </div>
              <p className="text-primary text-lg font-bold mb-2 uppercase tracking-widest">Flagship Champion — Blue Fawn Fluffy Frenchie</p>
              <p className="text-muted-foreground text-lg sm:text-xl mb-6 leading-relaxed">
                King Simba is a powerhouse of genetics and temperament. His offspring consistently excel in conformation, color expression, and personality — producing the rarest color combinations with perfect health profiles.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {traits.map((t) => (
                  <div key={t.label} className="flex gap-3 items-start p-3 bg-background rounded-xl border border-border hover:border-primary/30 transition-colors">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <t.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-base font-bold text-foreground">{t.label}</p>
                      <p className="text-sm text-muted-foreground">{t.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 flex-1 py-5 rounded-xl shadow-xl shadow-primary/30">
                  <a href="tel:5189173429" className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" /> Call to Inquire
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 flex-1 py-5 rounded-xl">
                  <a href="mailto:hello@empirestatebulldogs.com">Email Us</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COLORS WE PRODUCE */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Genetics & Colors</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2 text-foreground">Colors We Produce</h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">King Simba carries rare recessive genes — producing some of the most sought-after Frenchie colors on the market.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {[
              { label: "Lilac Tan", color: "#C8A8C8" },
              { label: "Blue Fawn", color: "#8B9CB5" },
              { label: "Chocolate Tri", color: "#7B4F3A" },
              { label: "Blue Merle", color: "#6B7FA8" },
              { label: "Platinum", color: "#D4D4D4" },
              { label: "Isabella", color: "#C9B89A" },
              { label: "Black & Tan", color: "#2A2A2A" },
              { label: "Exotic Tri", color: "#8B6B8B" },
            ].map((c) => (
              <div key={c.label} className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-sm font-bold text-foreground hover:border-primary/40 transition-colors">
                <div className="w-4 h-4 rounded-full border border-white/20 shadow-sm" style={{ backgroundColor: c.color }} />
                {c.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Why Choose ESB</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2 text-foreground">The ESB Difference</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {features.map((f) => (
              <div key={f.title} className="p-6 bg-background rounded-2xl border border-border hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <f.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-16 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Step by Step</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2 text-foreground">How It Works</h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-3">
            {steps.map((s) => (
              <div key={s.num} className="flex gap-5 p-5 sm:p-6 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all group">
                <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <span className="text-lg font-black text-primary">{s.num}</span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">{s.title}</h3>
                  <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAYPAL DEPOSIT */}
      <section id="deposit" className="py-16 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Secure Your Spot</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2 text-foreground">Book Your Stud Service</h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm sm:text-base">
              Pay your deposit securely online to lock in your breeding date. Contact us first to confirm availability before submitting a deposit.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            <PayPalDepositButton
              label="Stud Service Deposit — Natural Tie"
              description="Secures your breeding appointment with King Simba. Deposit amount discussed upon inquiry. Balance due at time of service."
              noteMessage="Contact us first at 518-917-3429 to confirm availability before paying."
              variant="stud"
            />
            <PayPalDepositButton
              label="Stud Service — AI / Chilled Semen"
              description="For veterinary-assisted AI breeding. Includes coordination, chilled shipment, and full support. Deposit amount provided upon inquiry."
              noteMessage="Progesterone testing and vet coordination required. Call us first."
              variant="stud"
            />
          </div>
          <p className="text-center text-xs text-muted-foreground mt-5">
            All deposits are non-refundable but transferable within 12 months. Full stud service agreement provided upon booking.{" "}
            <Link href="/terms/#deposits" className="underline hover:text-primary">Read the full deposit terms</Link>.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Real Results</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2 text-foreground">What Breeders Say</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              { name: "Sarah M.", location: "Queens, NY", text: "King Simba produced the most stunning lilac tri puppies I've ever seen. Every single one sold before 6 weeks. Will 100% breed back!", stars: 5 },
              { name: "Derek T.", location: "Hartford, CT", text: "Professional, knowledgeable, and the genetic quality is undeniable. My female took on first tie. Highly recommend to any serious breeder.", stars: 5 },
              { name: "Melissa R.", location: "Boston, MA", text: "They drove out to us, were on time, and the follow-up support was incredible. Got a beautiful litter of blue fawns.", stars: 5 },
            ].map((t) => (
              <div key={t.name} className="p-6 bg-card rounded-2xl border border-border">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.stars }).map((_, i) => <Star key={i} className="w-4 h-4 text-accent fill-accent" />)}
                </div>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-4">"{t.text}"</p>
                <div>
                  <p className="font-bold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/20 via-background to-accent/10">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4">
            Ready to Elevate Your Program?
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-8 max-w-xl mx-auto">
            Spots are limited. King Simba's schedule fills fast. Call us today and let's talk about what we can produce together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 px-8 py-6 text-base sm:text-lg shadow-xl shadow-primary/30 rounded-2xl">
              <a href="tel:5189173429" className="flex items-center gap-2">
                <Phone className="w-5 h-5" /> Call 518-917-3429
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 px-8 py-6 text-base sm:text-lg rounded-2xl">
              <Link href="#deposit">Pay Deposit Online</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
