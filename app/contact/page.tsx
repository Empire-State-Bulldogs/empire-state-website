import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock, Instagram, ArrowRight, MessageCircle } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Empire State Bulldogs",
  description: "Get in touch with Empire State Bulldogs. Inquire about puppies, stud services, or just say hello. Based in Albany, NY — serving pet lovers nationwide.",
}

const contactMethods = [
  {
    icon: Phone,
    title: "Call or Text",
    value: "518-917-3429",
    desc: "Available 7 days a week",
    href: "tel:5189173429",
    label: "Call Now",
    gradient: "from-primary/20 to-primary/5",
    border: "border-primary/30",
    iconBg: "bg-primary/20",
    btnClass: "bg-primary text-primary-foreground hover:bg-primary/90",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "hello@empirestatebulldogs.com",
    desc: "Usually reply within 24 hours",
    href: "mailto:hello@empirestatebulldogs.com",
    label: "Send Email",
    gradient: "from-accent/20 to-accent/5",
    border: "border-accent/30",
    iconBg: "bg-accent/20",
    btnClass: "bg-accent text-white hover:bg-accent/90",
  },
  {
    icon: Instagram,
    title: "Instagram DM",
    value: "@bankroll_bop93",
    desc: "Fastest response for quick questions",
    href: "https://www.instagram.com/bankroll_bop93/",
    label: "DM on Instagram",
    gradient: "from-purple-500/20 to-pink-500/10",
    border: "border-purple-500/30",
    iconBg: "bg-gradient-to-br from-purple-600 to-pink-500",
    btnClass: "bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:opacity-90 border-0",
  },
]

const faqs = [
  { q: "Where are you located?", a: "We're based in Albany, NY. We serve clients across the entire state and ship puppies nationwide." },
  { q: "What's the best way to reach you?", a: "Calling or texting 518-917-3429 is the fastest. You can also DM us on Instagram for quick questions." },
  { q: "How do I reserve a puppy or stud service?", a: "Contact us by phone or email. We'll discuss availability, answer your questions, and walk you through the reservation process." },
  { q: "Do you offer in-person visits?", a: "Yes! We welcome visits by appointment. Contact us to schedule a time to meet our dogs in person." },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* HERO */}
      <section className="pt-32 pb-16 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 rounded-full px-4 py-1.5 text-sm font-bold uppercase tracking-widest mb-6">
            <MessageCircle className="w-4 h-4" />
            Get In Touch
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-foreground leading-tight">
            Let&apos;s Connect<br />
            <span className="text-primary">Today</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you&apos;re looking for a puppy, stud services, or just want to learn more — we&apos;re here for you. Don&apos;t be a stranger.
          </p>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="pb-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {contactMethods.map((m) => (
              <div key={m.title} className={`relative p-8 rounded-3xl bg-gradient-to-br ${m.gradient} border ${m.border} hover:-translate-y-1 transition-all duration-300`}>
                <div className={`w-14 h-14 ${m.iconBg} rounded-2xl flex items-center justify-center mb-5 shadow-lg`}>
                  <m.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-black text-foreground mb-1">{m.title}</h3>
                <p className="text-primary font-bold text-lg mb-1 break-all">{m.value}</p>
                <p className="text-muted-foreground text-sm mb-6">{m.desc}</p>
                <Button asChild className={`w-full ${m.btnClass} py-5 text-base font-bold rounded-xl`}>
                  <Link href={m.href} target={m.href.startsWith("http") ? "_blank" : undefined}>
                    {m.label}
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INFO STRIP */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-black text-foreground mb-1">Location</h3>
              <p className="text-muted-foreground">Albany, NY & Beyond<br />Nationwide Shipping</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-black text-foreground mb-1">Response Time</h3>
              <p className="text-muted-foreground">Within 24 hours<br />Usually same day</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-black text-foreground mb-1">Availability</h3>
              <p className="text-muted-foreground">7 Days a Week<br />9am – 8pm EST</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Quick Answers</span>
            <h2 className="text-3xl md:text-5xl font-black mt-2 text-foreground">Common Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="p-6 bg-card border border-border rounded-2xl hover:border-primary/30 transition-colors">
                <h3 className="font-black text-foreground text-lg mb-2">{f.q}</h3>
                <p className="text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/15 via-background to-accent/10">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">
            Don&apos;t Wait — Spots Are Limited
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Our puppies and stud slots fill up fast. Reach out today and let&apos;s make something great happen.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 text-lg shadow-xl shadow-primary/30">
            <a href="tel:5189173429" className="flex items-center gap-2">
              <Phone className="w-5 h-5" /> Call 518-917-3429
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
