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
        <div className={`text-center mb-12 md:mb-16 ${isVisible ? "scroll-fade-up" : "opacity-0"}`}>
          <span className="text-primary text-sm md:text-base font-semibold uppercase tracking-wider">
            Available Puppies
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 text-card-foreground">
            Find Your New Best Friend
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our puppies are raised in a loving home environment, ensuring they are well-socialized and ready for their forever families.
          </p>
        </div>

        {/* Puppies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {puppyData.map((puppy) => (
            <Card
              key={puppy.id}
              className={`bg-secondary border-border overflow-hidden hover:border-primary/50 transition-all duration-300 group ${isVisible ? "scroll-fade-up" : "opacity-0"}`}
            >
              <div className="relative aspect-square bg-muted flex items-center justify-center overflow-hidden">
                <Image
                  src={puppy.photos[activePhotos[puppy.id]] || "/placeholder.svg"}
                  alt={puppy.name}
                  fill
                  className="object-contain p-2 rounded-2xl transition-transform duration-500 group-hover:scale-110"
                />

                {/* Multi-photo indicator/dots */}
                {puppy.photos.length > 1 && (
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-20">
                    {puppy.photos.map((_, idx) => (
                      <button
                        key={idx}
                        onMouseEnter={() => handlePhotoChange(puppy.id, idx)}
                        onClick={() => handlePhotoChange(puppy.id, idx)}
                        className={`w-2 h-2 rounded-full transition-all ${activePhotos[puppy.id] === idx ? "bg-primary scale-125" : "bg-white/50 hover:bg-white"
                          }`}
                        aria-label={`View photo ${idx + 1}`}
                      />
                    ))}
                  </div>
                )}

                <div className="absolute top-2 right-2">
                  <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                    {puppy.color}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="text-xl font-bold text-card-foreground mb-4">{puppy.name}</h3>
                <Button
                  asChild
                  size="sm"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Link href="#contact">Inquire</Link>
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
