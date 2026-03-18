"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Crown, MapPin, Star, Clock } from "lucide-react"

const simbaPhotos = [
  "/images/simba1.jpg",
  "/images/simba2.jpg",
  "/images/simba3.jpg",
  "/images/simba4.jpg",
  "/images/simba5.jpg",
]

const studs = [
  {
    name: "King Simba",
    title: "Flagship Stud",
    description:
      "Our premier stud with exceptional lineage, champion bloodlines, and proven track record. Known for producing healthy, well-tempered puppies with outstanding conformation.",
    traits: ["Champion Bloodline", "Health Tested", "Proven Sire"],
    color: "Blue Fawn",
    available: true,
    featured: true,
  },
  {
    name: "Coming Soon",
    title: "Next Generation Stud",
    description:
      "We're preparing our next champion stud to join our breeding program. Stay tuned for an exciting addition to our exceptional lineup.",
    traits: ["TBA", "In Development", "Future Champion"],
    color: "TBA",
    available: false,
    comingSoon: true,
  },
]

export function StudServicesSection() {
  const [activeSimbaPhoto, setActiveSimbaPhoto] = useState(0)

  const steakEmojis = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
    rotation: Math.random() * 360,
  }))

  return (
    <section id="studs" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {steakEmojis.map((emoji) => (
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
            🥩
          </div>
        ))}
      </div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24 md:mb-32">
          <span className="text-primary text-xl md:text-2xl font-black tracking-tight mb-6 block lowercase">our stud services</span>
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black mt-4 mb-10 text-foreground leading-[1.1] tracking-tight lowercase">
            Meet the New York <br className="hidden md:block" /> <span className="text-primary italic">champions</span>
          </h2>
          <p className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground max-w-5xl mx-auto text-pretty font-medium leading-[1.4]">
            Our carefully selected studs represent the finest in French Bulldog breeding. Each male is health tested,
            AKC registered, and selected for exceptional genetics and temperament.
          </p>
        </div>

        {/* Studs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12 justify-items-center max-w-4xl mx-auto">
          {studs.map((stud) => (
            <Card
              key={stud.name}
              className={`bg-card border-border overflow-hidden hover:border-primary/50 transition-all duration-300 ${stud.featured ? "ring-2 ring-primary" : ""} ${stud.comingSoon ? "opacity-75" : ""}`}
            >
              <div className="relative aspect-square bg-secondary">
                <Image
                  src={
                    stud.featured
                      ? simbaPhotos[activeSimbaPhoto]
                      : stud.comingSoon
                        ? "/images/coming_soon.jpg"
                        : `/placeholder.svg?height=400&width=400&query=handsome ${stud.color} french bulldog portrait professional photo`
                  }
                  alt={stud.name}
                  fill
                  className="object-contain p-4 transition-all duration-500 rounded-2xl"
                  priority={stud.featured}
                />
                {stud.featured && (
                  <>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground">
                        <Crown className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                    {/* Tiny Slideshow Thumbnails */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-background/40 backdrop-blur-sm p-1.5 rounded-full z-20">
                      {simbaPhotos.map((photo, idx) => (
                        <button
                          key={idx}
                          onMouseEnter={() => setActiveSimbaPhoto(idx)}
                          onClick={() => setActiveSimbaPhoto(idx)}
                          className={`relative w-8 h-8 rounded-full overflow-hidden border-2 transition-all ${activeSimbaPhoto === idx ? "border-primary scale-110" : "border-transparent opacity-70 hover:opacity-100"
                            }`}
                        >
                          <Image
                            src={photo}
                            alt={`Simba ${idx + 1}`}
                            fill
                            className="object-cover rounded-full"
                          />
                        </button>
                      ))}
                    </div>
                  </>
                )}
                {stud.comingSoon && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-accent text-accent-foreground">
                      <Clock className="w-3 h-3 mr-1" />
                      Coming Soon
                    </Badge>
                  </div>
                )}
                {stud.available && !stud.comingSoon && (
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-background/80 text-primary border-primary">
                      Available
                    </Badge>
                  </div>
                )}
              </div>
              <CardContent className="p-10 md:p-14">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-4xl md:text-6xl font-black text-card-foreground tracking-tight lowercase">{stud.name}</h3>
                  {stud.featured && <Star className="w-8 h-8 md:w-10 md:h-10 text-accent fill-accent" />}
                </div>
                <p className="text-primary text-2xl md:text-3xl font-black mb-6 italic lowercase">{stud.title}</p>
                <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 leading-relaxed font-medium">{stud.description}</p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {stud.traits.map((trait) => (
                    <Badge key={trait} variant="secondary" className="text-sm md:text-lg px-4 py-2 font-bold rounded-xl">
                      {trait}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-2xl md:text-3xl text-muted-foreground border-t border-border pt-8">
                  <span className="font-black text-foreground">Color:</span>
                  <span className="font-medium italic">{stud.color}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Info */}
        <div className="bg-card rounded-2xl p-8 md:p-12 border border-border">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-4xl md:text-6xl lg:text-7xl font-black mb-10 text-card-foreground tracking-tight leading-tight lowercase">the stud service process</h3>
              <ul className="space-y-6 text-muted-foreground">
                <li className="flex items-start gap-5">
                  <span className="w-10 h-10 rounded-2xl bg-primary text-white text-xl font-black flex items-center justify-center shrink-0 mt-1 shadow-lg shadow-primary/20">
                    1
                  </span>
                  <span className="text-2xl md:text-3xl font-medium leading-snug">
                    Contact us to discuss your breeding goals and review our available studs
                  </span>
                </li>
                <li className="flex items-start gap-5">
                  <span className="w-10 h-10 rounded-2xl bg-primary text-white text-xl font-black flex items-center justify-center shrink-0 mt-1 shadow-lg shadow-primary/20">
                    2
                  </span>
                  <span className="text-2xl md:text-3xl font-medium leading-snug">Provide health clearances and registration for your female</span>
                </li>
                <li className="flex items-start gap-5">
                  <span className="w-10 h-10 rounded-2xl bg-primary text-white text-xl font-black flex items-center justify-center shrink-0 mt-1 shadow-lg shadow-primary/20">
                    3
                  </span>
                  <span className="text-2xl md:text-3xl font-medium leading-snug">
                    Schedule breeding appointment — we travel across NY State and beyond
                  </span>
                </li>
                <li className="flex items-start gap-5">
                  <span className="w-10 h-10 rounded-2xl bg-primary text-white text-xl font-black flex items-center justify-center shrink-0 mt-1 shadow-lg shadow-primary/20">
                    4
                  </span>
                  <span className="text-2xl md:text-3xl font-medium leading-snug">Receive ongoing support throughout your breeding journey</span>
                </li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 text-lg text-muted-foreground mb-4">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Traveling throughout New York State & beyond</span>
              </div>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="#contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
