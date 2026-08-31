"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Crown, MapPin, Star, Clock, ArrowRight } from "lucide-react"
import { stud } from "@/lib/stud-data"

const simbaPhotos = stud.photos

const studs = [
  {
    name: "King Simba",
    title: `Flagship ${stud.breed} Stud`,
    description:
      "Our premier stud — thick bone, compact structure, and the easy temperament the breed is known for. Available for shipped Breeder Box service or in-person live cover.",
    traits: ["Health Tested", "Proven Sire", "Shipped Or Live Cover"],
    color: "Lilac Fawn",
    available: true,
    featured: true,
    href: "/studs/king-simba",
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
          <span className="text-primary text-xl md:text-2xl font-black tracking-tight mb-6 block capitalize">our stud services</span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mt-4 mb-8 text-foreground leading-[1.1] tracking-tight capitalize">
            Meet the New York <br className="hidden md:block" /> <span className="text-primary italic">champions</span>
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto text-pretty font-medium leading-[1.4]">
            Our carefully selected studs represent the finest in French Bulldog breeding. Each male is health tested and
            chosen for exceptional structure, genetics, and temperament.
          </p>
        </div>

        {/* Studs Grid */}
        <div className="grid grid-cols-1 gap-12 md:gap-16 mb-20 max-w-6xl mx-auto">
          {studs.map((item) => (
            <Card
              key={item.name}
              className={`bg-card border-border overflow-hidden hover:border-primary/50 transition-all duration-300 flex flex-col xl:flex-row ${item.featured ? "ring-2 ring-primary shadow-2xl shadow-primary/10" : ""} ${item.comingSoon ? "opacity-75" : ""}`}
            >
              <div className="relative aspect-square xl:aspect-auto xl:w-[40%] bg-secondary shrink-0 overflow-hidden">
                <Image
                  src={
                    item.featured
                      ? simbaPhotos[activeSimbaPhoto].src
                      : "/images/coming_soon.jpg"
                  }
                  alt={
                    item.featured
                      ? simbaPhotos[activeSimbaPhoto].alt
                      : "Next stud joining the Empire State Bulldogs breeding program — coming soon"
                  }
                  fill
                  sizes="(max-width: 1280px) 100vw, 40vw"
                  className="object-contain p-4 transition-all duration-500 rounded-2xl"
                  priority={item.featured}
                />
                {item.featured && (
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
                          aria-label={`View photo ${idx + 1} of King Simba`}
                          aria-current={activeSimbaPhoto === idx}
                          className={`relative w-6 h-6 rounded-full overflow-hidden border-2 transition-all ${activeSimbaPhoto === idx ? "border-primary scale-110" : "border-transparent opacity-70 hover:opacity-100"
                            }`}
                        >
                          <Image
                            src={photo.src}
                            alt={photo.alt}
                            fill
                            sizes="24px"
                            className="object-cover rounded-full"
                          />
                        </button>
                      ))}
                    </div>
                  </>
                )}
                {item.comingSoon && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-accent text-accent-foreground">
                      <Clock className="w-3 h-3 mr-1" />
                      Coming Soon
                    </Badge>
                  </div>
                )}
                {item.available && !item.comingSoon && (
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-background/80 text-primary border-primary">
                      Available
                    </Badge>
                  </div>
                )}
              </div>
              <CardContent className="p-8 md:p-10 xl:p-12 flex flex-col justify-center flex-1">
                <div className="flex items-center gap-4 mb-3">
                  <h3 className="text-4xl lg:text-5xl font-black text-card-foreground tracking-tight capitalize">{item.name}</h3>
                  {item.featured && <Star className="w-6 h-6 md:w-8 md:h-8 text-accent fill-accent" />}
                </div>
                <p className="text-primary text-xl md:text-2xl font-black mb-4 italic capitalize">{item.title}</p>
                <p className="text-lg lg:text-xl text-muted-foreground mb-6 leading-relaxed font-medium">{item.description}</p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {item.traits.map((trait) => (
                    <Badge key={trait} variant="secondary" className="text-sm md:text-lg px-4 py-2 font-bold rounded-xl">
                      {trait}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-2xl md:text-3xl text-muted-foreground border-t border-border pt-8">
                  <span className="font-black text-foreground">Color:</span>
                  <span className="font-medium italic">{item.color}</span>
                </div>
                {item.href && (
                  <Button
                    asChild
                    size="lg"
                    className="mt-8 w-full sm:w-auto self-start bg-primary text-white hover:bg-primary/90 px-10 py-6 text-lg md:text-xl font-black rounded-2xl shadow-xl shadow-primary/30"
                  >
                    <Link href={item.href} className="flex items-center justify-center gap-2">
                      View Full Profile &amp; Book <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Info */}
        <div className="bg-card rounded-2xl p-8 md:p-12 border border-border">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-4xl md:text-6xl lg:text-7xl font-black mb-10 text-card-foreground tracking-tight leading-tight capitalize">the stud service process</h3>
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
