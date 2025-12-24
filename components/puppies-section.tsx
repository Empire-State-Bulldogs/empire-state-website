"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Check } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const puppies = [
  {
    name: "Luna",
    gender: "Female",
    color: "Blue",
    age: "10 weeks",
    status: "Available",
    description: "Playful and affectionate with beautiful markings.",
    image: "/fresh1.jpg",
  },
  {
    name: "Max",
    gender: "Male",
    color: "Fawn",
    age: "9 weeks",
    status: "Available",
    description: "Calm temperament, perfect for families.",
    image: "/fresh2.jpg",
  },
  {
    name: "Bella",
    gender: "Female",
    color: "Brindle",
    age: "11 weeks",
    status: "Reserved",
    description: "Stunning coat pattern, very social personality.",
    image: "/fresh3.jpg",
  },
]

const includes = [
  "Up-to-date vaccinations",
  "Deworming completed",
  "Veterinary health check",
  "Health guarantee",
  "Microchipped",
  "Starter puppy kit",
  "Lifetime breeder support",
  "Registration papers",
]

export function PuppiesSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  const pawEmojis = Array.from({ length: 7 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3.5 + Math.random() * 2,
    rotation: Math.random() * 360,
  }))

  return (
    <section ref={ref} id="puppies" className="py-16 md:py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {pawEmojis.map((emoji) => (
          <div
            key={emoji.id}
            className="float-emoji spin-slow"
            style={{
              left: `${emoji.left}%`,
              top: `${emoji.top}%`,
              animationDelay: `${emoji.delay}s`,
              animationDuration: `${emoji.duration}s`,
              transform: `rotate(${emoji.rotation}deg)`,
              fontSize: "2rem",
            }}
          >
            🐾
          </div>
        ))}
      </div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-12 md:mb-16 ${isVisible ? "scroll-fade-up" : "opacity-0"}`}>
          <span className="text-primary text-sm md:text-base font-semibold uppercase tracking-wider">
            Available Now
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 text-card-foreground">
            Find Your Perfect Companion
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Each of our puppies is raised with love, professional care, and early socialization to ensure they&apos;re
            ready for their forever homes.
          </p>
        </div>

        {/* Puppies Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-12 md:mb-16">
          {puppies.map((puppy, i) => (
            <Card
              key={puppy.name}
              className={`bg-secondary border-border overflow-hidden hover:border-primary/50 hover-lift transition-all duration-300 group ${
                isVisible ? `scroll-fade-up delay-${i * 100}` : "opacity-0"
              }`}
            >
              <div className="relative aspect-square bg-muted">
                <Image
                  src={puppy.image || "/placeholder.svg"}
                  alt={puppy.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 md:top-4 md:right-4">
                  <Badge
                    className={`text-xs md:text-sm ${
                      puppy.status === "Available"
                        ? "bg-primary text-primary-foreground"
                        : "bg-accent text-accent-foreground"
                    }`}
                  >
                    {puppy.status}
                  </Badge>
                </div>
                <button
                  className="absolute top-3 left-3 md:top-4 md:left-4 w-8 h-8 md:w-10 md:h-10 rounded-full bg-background/80 flex items-center justify-center hover:bg-background hover:scale-110 transition-all"
                  aria-label={`Save ${puppy.name} to favorites`}
                >
                  <Heart className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                </button>
              </div>
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl md:text-2xl font-bold text-card-foreground">{puppy.name}</h3>
                  <span className="text-xs md:text-sm text-muted-foreground">{puppy.age}</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3 mb-3 flex-wrap">
                  <Badge variant="outline" className="text-xs">
                    {puppy.gender}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {puppy.color}
                  </Badge>
                </div>
                <p className="text-sm md:text-base text-muted-foreground mb-4">{puppy.description}</p>
                <Button
                  asChild
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-sm md:text-base hover-lift"
                >
                  <Link href="#contact">Inquire About {puppy.name}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* What's Included */}
        <div
          className={`bg-secondary rounded-xl md:rounded-2xl p-6 md:p-12 border border-border ${isVisible ? "scroll-fade-up delay-200" : "opacity-0"}`}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center text-card-foreground">
            Every Puppy Includes
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {includes.map((item, i) => (
              <div
                key={item}
                className={`flex items-center gap-3 p-4 bg-card rounded-lg hover:bg-card/90 hover:scale-105 transition-all duration-300 ${isVisible ? `scroll-slide-right delay-${i * 50}` : "opacity-0"}`}
              >
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-base text-card-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
