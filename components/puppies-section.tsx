"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { PuppyCard } from "@/components/puppy-card"
import { availablePuppies } from "@/lib/puppy-data"

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
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

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
        <div className={`text-center mb-20 md:mb-32 ${isVisible ? "scroll-fade-up" : "opacity-0"}`}>
          <span className="text-primary text-xl md:text-2xl font-black tracking-widest mb-6 block capitalize">
            our available puppies
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mt-4 mb-8 text-card-foreground leading-[1.1] tracking-tight capitalize">
            find your new <br className="hidden md:block" /> <span className="text-primary italic">best friend</span>
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto text-pretty font-medium leading-relaxed">
            Our puppies are raised in a loving home environment, ensuring they are well-socialized and ready for their forever families.
          </p>
        </div>

        {/* Available Now */}
        <div className={`max-w-7xl mx-auto mb-16 ${isVisible ? "scroll-fade-up" : "opacity-0"}`}>
          <div className="text-center mb-10">
            <Badge className="bg-primary text-white px-5 py-2 text-base md:text-lg font-black rounded-xl uppercase tracking-wider mb-4">
              Available Now
            </Badge>
            <h3 className="text-3xl md:text-5xl font-black text-card-foreground tracking-tight leading-tight">
              Meet Our Fluffy Frenchies
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {availablePuppies.map((puppy) => (
              <PuppyCard key={puppy.id} puppy={puppy} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Button
              asChild
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 px-10 py-6 text-lg md:text-xl font-black rounded-2xl shadow-xl shadow-primary/30"
            >
              <Link href="/puppies">See All Puppy Details</Link>
            </Button>
          </div>
        </div>

        {/* Next Litter — Coming Soon */}
        <div className={`max-w-4xl mx-auto mb-20 ${isVisible ? "scroll-fade-up delay-100" : "opacity-0"}`}>
          <Card className="bg-secondary border-border overflow-hidden hover:border-primary/50 transition-all duration-300 group flex flex-col sm:flex-row sm:items-center">
            <div className="w-full sm:w-[38%] shrink-0 p-5 sm:p-6">
              <div className="relative aspect-square w-full bg-muted overflow-hidden rounded-3xl ring-1 ring-border">
                <Image
                  src="/images/coming_soon.jpg"
                  alt="Next litter of French Bulldog puppies coming soon at Empire State Bulldogs"
                  fill
                  sizes="(max-width: 640px) 100vw, 38vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
            <div className="text-center sm:text-left p-6 sm:p-8 flex flex-col justify-center flex-1">
              <div className="sm:inline-block">
                <Badge variant="secondary" className="bg-accent text-white mb-4 px-4 py-1.5 text-sm md:text-base font-black rounded-xl uppercase tracking-wider">
                  Dropping Soon
                </Badge>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-card-foreground mb-3 tracking-tight leading-tight">
                Next Litter On The Way
              </h3>
              <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed font-medium">
                Another litter is in preparation. Join the waitlist and get first pick before they&apos;re listed.
              </p>
              <div>
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90 px-8 py-5 text-base md:text-lg font-black rounded-2xl shadow-xl shadow-primary/30"
                >
                  <Link href="#contact">Join The Waitlist</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* What's Included */}
        <div
          className={`bg-secondary rounded-xl md:rounded-2xl p-6 md:p-12 border border-border ${isVisible ? "scroll-fade-up delay-200" : "opacity-0"}`}
        >
          <h3 className="text-4xl md:text-6xl font-black mb-12 text-center text-card-foreground tracking-tight leading-tight capitalize">
            every puppy includes
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {includes.map((item, i) => (
              <div
                key={item}
                className={`flex items-center gap-5 p-6 md:p-8 bg-card rounded-2xl hover:bg-card/90 hover:scale-[1.03] transition-all duration-300 border border-border shadow-lg ${isVisible ? `scroll-slide-right delay-${i * 50}` : "opacity-0"}`}
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Check className="w-6 h-6 text-primary stroke-[3px]" />
                </div>
                <span className="text-xl md:text-2xl font-black text-card-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
