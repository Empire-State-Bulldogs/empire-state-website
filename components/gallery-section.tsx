"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

const categories = ["All", "Studs", "Puppies", "Events", "Lifestyle"]

const galleryImages = [
  { src: "/placeholder.svg?height=600&width=600", category: "Studs", alt: "French Bulldog Stud" },
  { src: "/placeholder.svg?height=600&width=600", category: "Puppies", alt: "Playful Frenchie Puppy" },
  { src: "/placeholder.svg?height=600&width=600", category: "Events", alt: "Dog Show Event" },
  { src: "/placeholder.svg?height=600&width=600", category: "Lifestyle", alt: "Happy Owner with Frenchie" },
  { src: "/placeholder.svg?height=600&width=600", category: "Studs", alt: "Blue French Bulldog" },
  { src: "/placeholder.svg?height=600&width=600", category: "Puppies", alt: "Adorable Puppy Litter" },
  { src: "/placeholder.svg?height=600&width=600", category: "Lifestyle", alt: "Stylish Frenchie" },
  { src: "/placeholder.svg?height=600&width=600", category: "Events", alt: "Breeder Meetup" },
]

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const filteredImages =
    activeCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Gallery</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-foreground">Our Beautiful Bulldogs</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Browse through photos of our studs, puppies, events, and the Empire State Bulldogs lifestyle.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-primary"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <button
              key={index}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-foreground font-medium text-sm">{image.category}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card flex items-center justify-center hover:bg-secondary transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>
            <div className="relative w-full max-w-4xl aspect-square">
              <Image src={selectedImage || "/placeholder.svg"} alt="Gallery image" fill className="object-contain" />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
