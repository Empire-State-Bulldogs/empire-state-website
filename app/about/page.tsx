import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Shield, Heart, Trophy, Users, MapPin, Phone, ArrowRight, Star, Crown } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Empire State Bulldogs — Albany, NY French Bulldog Breeders",
  description: "Learn about Empire State Bulldogs — NY's premier French Bulldog breeding program. Our story, mission, and commitment to excellence in Albany, NY.",
}

const values = [
  { icon: Shield, title: "Health Above All", desc: "We never cut corners on health testing. Every breeding dog is fully tested before they ever produce a litter. Our puppies' long-term health is our legacy." },
  { icon: Heart, title: "Family First", desc: "Every puppy is raised in our home alongside our family. Early socialization, enrichment, and love are non-negotiable standards — not extras." },
  { icon: Trophy, title: "Breeding Excellence", desc: "We study lineages, color genetics, and conformation rigorously. We are passionate, educated breeders who are constantly improving our program." },
  { icon: Users, title: "Community & Support", desc: "When you get a puppy from us, you join our family. Lifetime breeder support, community events, and a network of ESB families across the country." },
]

const stats = [
  { value: "5+", label: "Years Breeding" },
  { value: "50+", label: "Families Served" },
  { value: "100%", label: "Health Guaranteed" },
  { value: "5★", label: "Average Rating" },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* HERO */}
      <section className="relative pt-28 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-background">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 30% 70%, hsl(var(--primary) / 0.07) 0%, transparent 60%)' }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <span className="text-primary font-bold uppercase tracking-widest text-sm">Our Story</span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mt-3 mb-6 text-foreground leading-tight">
                More Than a Breeder.<br />
                <span className="text-primary">A Lifestyle Brand.</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-5 leading-relaxed">
                Empire State Bulldogs was born from a simple but powerful passion: a love for French Bulldogs that goes beyond the transaction. Based in Albany, NY, we set out to build something different — a breeding program with integrity, a community with heart, and a brand that represents the very best of the Frenchie world.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
                What started as one family's obsession has grown into New York's most trusted Frenchie breeding program, with families from coast to coast proudly calling themselves ESB alumni.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 px-6 py-5 rounded-2xl shadow-xl shadow-primary/30">
                  <Link href="/puppies" className="flex items-center gap-2">
                    See Available Puppies <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 px-6 py-5 rounded-2xl">
                  <a href="tel:5189173429" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Call Us
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/15 rounded-3xl blur-2xl opacity-50" />
              <div className="relative grid grid-cols-2 gap-3">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden row-span-2">
                  <Image src="/images/simba1.jpg" alt="King Simba" fill className="object-cover" />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image src="/images/fam1.jpg" alt="ESB Family" fill className="object-cover" />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image src="/images/fam2.jpg" alt="ESB Family" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-4xl sm:text-5xl font-black text-primary mb-1">{s.value}</p>
                <p className="text-muted-foreground text-sm sm:text-base font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KING SIMBA */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div className="relative">
              <div className="absolute -inset-3 bg-accent/20 rounded-3xl blur-xl opacity-40" />
              <div className="relative rounded-2xl overflow-hidden aspect-square">
                <Image src="/images/simba2.jpg" alt="King Simba" fill className="object-cover" />
              </div>
              <div className="absolute top-4 right-4">
                <div className="bg-primary/90 backdrop-blur text-white px-3 py-1.5 rounded-full text-xs font-black flex items-center gap-1.5">
                  <Crown className="w-3 h-3" /> Flagship Stud
                </div>
              </div>
            </div>
            <div>
              <span className="text-primary font-bold uppercase tracking-widest text-sm">Meet the Star</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2 mb-4 text-foreground">
                King Simba
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg mb-6 leading-relaxed">
                King Simba is the heart and foundation of our program. A champion-lineage French Bulldog with exceptional structure, rare color genetics, and an unmatched temperament — he represents everything ESB stands for.
              </p>
              <p className="text-muted-foreground text-base sm:text-lg mb-8 leading-relaxed">
                His offspring have been placed with families across the US and have gone on to win in the show ring and as beloved companions. Every litter he produces carries on his legacy of excellence.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-accent fill-accent" />)}
                </div>
                <span className="text-muted-foreground text-sm">5-star rated stud across multiple platforms</span>
              </div>
              <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-2xl shadow-xl shadow-primary/30 px-6 py-5">
                <Link href="/studs" className="flex items-center gap-2">
                  Learn About Stud Services <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-16 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">What We Stand For</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2 text-foreground">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {values.map((v) => (
              <div key={v.title} className="flex gap-5 p-6 bg-background rounded-2xl border border-border hover:border-primary/30 transition-colors group">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <v.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="py-16 bg-background border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
          <span className="text-primary font-bold uppercase tracking-widest text-sm">Where We Serve</span>
          <h2 className="text-3xl sm:text-4xl font-black mt-2 mb-4 text-foreground">Albany, NY & Nationwide</h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-8">
            We're based in Albany, NY and serve clients across the entire northeast and beyond. Our stud travels throughout NY, CT, MA, NJ, and PA. Puppies ship nationwide via nanny or cargo.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {["New York", "Connecticut", "Massachusetts", "New Jersey", "Pennsylvania", "Vermont", "Rhode Island", "Nationwide Shipping"].map((s) => (
              <div key={s} className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-primary" />{s}
              </div>
            ))}
          </div>
          <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 px-8 py-5 rounded-2xl shadow-xl shadow-primary/30">
            <Link href="/contact" className="flex items-center gap-2">
              Get In Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
