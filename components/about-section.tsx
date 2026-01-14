"use client"

import { Shield, Stethoscope, Users, Trophy } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const features = [
  {
    icon: Shield,
    title: "Health Guaranteed",
    description: "All puppies come with up-to-date vaccinations, deworming, and comprehensive health guarantees.",
  },
  {
    icon: Stethoscope,
    title: "Veterinary Care",
    description: "Professional veterinary oversight ensures the highest standards of health and well-being.",
  },
  {
    icon: Users,
    title: "Community Focused",
    description: "Join our passionate community of dog lovers through events, shows, and meetups.",
  },
  {
    icon: Trophy,
    title: "Breeding Excellence",
    description: "We specialize in French Bulldogs with exceptional lineage, temperament, and conformation.",
  },
]

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section ref={ref} id="about" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-12 md:mb-16 ${isVisible ? "scroll-fade-up" : "opacity-0"}`}>
          <span className="text-primary text-base md:text-xl font-semibold uppercase tracking-wider">About Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 text-card-foreground">
            More Than a Breeder — A Lifestyle Brand
          </h2>
          <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Empire State Bulldogs is dedicated to the highest standards of dog care, breeding excellence, and community
            engagement. Based in Albany, NY, we serve dog lovers{" "}
            <span className="text-primary font-semibold">nationwide</span>.
          </p>
        </div>

        {/* Story Section */}
        <div
          className={`grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-20 ${isVisible ? "scroll-fade-up delay-100" : "opacity-0"}`}
        >
          <div className="text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-card-foreground">Our Story</h3>
            <p className="text-lg md:text-2xl text-muted-foreground mb-4 leading-relaxed">
              What started as a passion for French Bulldogs has grown into New York State&apos;s premier breeding
              program. We believe every puppy deserves the best start in life, which is why we invest in professional
              veterinary care, nutrition, and early socialization.
            </p>
            <p className="text-lg md:text-2xl text-muted-foreground mb-4 leading-relaxed">
              Our commitment goes beyond breeding — we&apos;re building a community. From dog shows and breeder events
              to community meetups, Empire State Bulldogs brings together people who share our love for these incredible
              companions.
            </p>
            <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed">
              Whether you&apos;re looking for your next family member, seeking stud services, or want to connect with
              fellow enthusiasts, you&apos;ve found your home.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {[
              { value: "🇺🇸", label: "Nationwide" },
              { value: "100%", label: "Health Guaranteed" },
              { value: "24/7", label: "Lifetime Support" },
              { value: "5★", label: "Customer Reviews" },
            ].map((stat, i) => (
              <div
                key={stat.value}
                className={`bg-secondary rounded-lg md:rounded-xl p-4 md:p-6 text-center hover-lift ${isVisible ? `scroll-scale-in delay-${(i + 1) * 100}` : "opacity-0"
                  }`}
              >
                <div className="text-3xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-lg md:text-xl text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, i) => (
            <Card
              key={feature.title}
              className={`bg-secondary border-border hover:border-primary/50 hover-lift transition-all duration-300 ${isVisible ? `scroll-fade-up delay-${i * 100}` : "opacity-0"
                }`}
            >
              <CardContent className="p-4 md:p-6 text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2 text-xl md:text-2xl text-card-foreground">{feature.title}</h4>
                <p className="text-lg md:text-xl text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
