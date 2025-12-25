"use client"

import Image from "next/image"
import { BackgroundElements } from "@/components/background-elements"

const galleryImages = [
  { src: "/images/fresh1.jpg", alt: "French Bulldog Stud" },
  { src: "/images/fresh2.jpg", alt: "Playful Frenchie Puppy" },
  { src: "/images/fresh3.jpg", alt: "Dog Show Event" },
  { src: "/images/fresh4.jpg", alt: "Happy Owner with Frenchie" },
]

export function GallerySection() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-background scattered-background">
      <BackgroundElements />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <span className="text-primary text-base md:text-lg font-semibold uppercase tracking-wider">Gallery</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 text-foreground">
            Our Beautiful Bulldogs
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Browse through photos of our studs, puppies, and the Empire State Bulldogs lifestyle.
          </p>
        </div>

        {/* Removed lightbox functionality and state */}
        <div className="flex gap-3 md:gap-4 justify-center flex-wrap">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative rounded-lg md:rounded-xl overflow-hidden group flex-shrink-0 w-48 md:w-56 h-auto"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={300}
                height={400}
                className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
