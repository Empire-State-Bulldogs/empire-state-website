import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Check } from "lucide-react"

const puppies = [
  {
    name: "Luna",
    gender: "Female",
    color: "Blue",
    age: "10 weeks",
    status: "Available",
    description: "Playful and affectionate with beautiful markings.",
  },
  {
    name: "Max",
    gender: "Male",
    color: "Fawn",
    age: "9 weeks",
    status: "Available",
    description: "Calm temperament, perfect for families.",
  },
  {
    name: "Bella",
    gender: "Female",
    color: "Brindle",
    age: "11 weeks",
    status: "Reserved",
    description: "Stunning coat pattern, very social personality.",
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
  return (
    <section id="puppies" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Available Now</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-card-foreground">Find Your Perfect Companion</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Each of our puppies is raised with love, professional care, and early socialization to ensure they&apos;re
            ready for their forever homes.
          </p>
        </div>

        {/* Puppies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {puppies.map((puppy) => (
            <Card
              key={puppy.name}
              className="bg-secondary border-border overflow-hidden hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="relative aspect-square bg-muted">
                <Image
                  src={`/placeholder.svg?height=400&width=400&query=adorable ${puppy.color} french bulldog puppy cute photo`}
                  alt={puppy.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge
                    className={
                      puppy.status === "Available"
                        ? "bg-primary text-primary-foreground"
                        : "bg-accent text-accent-foreground"
                    }
                  >
                    {puppy.status}
                  </Badge>
                </div>
                <button
                  className="absolute top-4 left-4 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors"
                  aria-label={`Save ${puppy.name} to favorites`}
                >
                  <Heart className="w-5 h-5 text-accent" />
                </button>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-card-foreground">{puppy.name}</h3>
                  <span className="text-sm text-muted-foreground">{puppy.age}</span>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="outline" className="text-xs">
                    {puppy.gender}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {puppy.color}
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{puppy.description}</p>
                <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="#contact">Inquire About {puppy.name}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* What's Included */}
        <div className="bg-secondary rounded-2xl p-8 md:p-12 border border-border">
          <h3 className="text-2xl font-bold mb-8 text-center text-card-foreground">Every Puppy Includes</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {includes.map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 bg-card rounded-lg">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm text-card-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
