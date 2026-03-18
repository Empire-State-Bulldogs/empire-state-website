"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const puppyData = [
  { id: 1, name: "Puppy 1", photos: ["/images/puppy1-1.jpg"], color: "Lilac Tan" },
  { id: 2, name: "Puppy 2", photos: ["/images/puppy2-1.jpg"], color: "Blue Fawn" },
  { id: 3, name: "Puppy 3", photos: ["/images/puppy3-1.jpg", "/images/puppy3-2.jpg"], color: "Chocolate" },
  { id: 4, name: "Puppy 4", photos: ["/images/puppy4-1.jpg"], color: "Cream" },
  { id: 5, name: "Puppy 5", photos: ["/images/puppy5-1.jpg"], color: "Brindle" },
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
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })
  const [activePhotos, setActivePhotos] = useState<Record<number, number>>({
    1: 0, 2: 0, 3: 0, 4: 0, 5: 0
  })

  const pawEmojis = Array.from({ length: 7 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3.5 + Math.random() * 2,
    rotation: Math.random() * 360,
  }))

  const handlePhotoChange = (puppyId: number, photoIdx: number) => {
    setActivePhotos(prev => ({ ...prev, [puppyId]: photoIdx }))
  }

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

        {/* Puppies Grid - Coming Soon */}
        <div className="max-w-6xl mx-auto mb-20">
          <Card className={`bg-secondary border-border overflow-hidden hover:border-primary/50 transition-all duration-300 group flex flex-col xl:flex-row xl:items-center shadow-2xl shadow-primary/5 ${isVisible ? "scroll-fade-up" : "opacity-0"}`}>
            <div className="w-full xl:w-[40%] shrink-0">
              <div className="relative aspect-square w-full bg-muted flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/coming_soon.jpg"
                  alt="New Puppies Coming Soon"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
            <div className="text-center md:text-left p-8 md:p-10 xl:p-14 flex flex-col justify-center flex-1">
              <div className="md:inline-block">
                <Badge variant="secondary" className="bg-primary text-white mb-6 px-4 py-1.5 text-lg md:text-xl font-black rounded-xl italic capitalize">
                  dropping soon!
                </Badge>
              </div>
              <h3 className="text-4xl md:text-5xl xl:text-6xl font-black text-card-foreground mb-6 tracking-tight leading-tight capitalize">
                new puppies <br /> coming soon
              </h3>
              <p className="text-lg md:text-xl xl:text-2xl text-muted-foreground mb-10 leading-relaxed font-medium">
                We have an incredible new litter in preparation. These purebred Frenchies will be dropping soon—check back to find your perfect match.
              </p>
              <div>
                <Button
                  asChild
                  size="lg"
                  className="w-full md:w-auto bg-primary text-white hover:bg-primary/90 px-12 py-7 text-xl md:text-2xl font-black rounded-[1.5rem] shadow-xl shadow-primary/30 capitalize tracking-tight"
                >
                  <Link href="#contact">inquire early</Link>
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
