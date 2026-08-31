"use client"

import Image from "next/image"
import { BackgroundElements } from "@/components/background-elements"

import { allPuppyPhotos } from "@/lib/puppy-data"

const galleryPhotos = [
  // Newest litter first — these are the puppies currently available.
  ...allPuppyPhotos,
  { src: "/images/fresh1.jpg", alt: "Empire State Bulldogs French Bulldog in Albany, NY" },
  { src: "/images/fresh2.jpg", alt: "French Bulldog from the Empire State Bulldogs program" },
  { src: "/images/fresh3.jpg", alt: "Empire State Bulldogs Frenchie lifestyle photo" },
  { src: "/images/fresh4.jpg", alt: "French Bulldog raised by Empire State Bulldogs" },
  { src: "/images/fresh5.jpg", alt: "Empire State Bulldogs French Bulldog portrait" },
  { src: "/images/fresh7.jpg", alt: "French Bulldog from Empire State Bulldogs in Albany, NY" },
  { src: "/images/puppy1-1.jpg", alt: "Lilac tan French Bulldog puppy placed by Empire State Bulldogs" },
  { src: "/images/puppy2-1.jpg", alt: "Blue fawn French Bulldog puppy from a past litter" },
  { src: "/images/puppy3-1.jpg", alt: "Chocolate French Bulldog puppy raised in Albany, NY" },
  { src: "/images/puppy4-1.jpg", alt: "Cream French Bulldog puppy from Empire State Bulldogs" },
  { src: "/images/puppy5-1.jpg", alt: "Brindle French Bulldog puppy placed in a loving home" },
]

export function GallerySection() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-background scattered-background">
      <BackgroundElements />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <span className="text-primary text-base md:text-xl font-semibold uppercase tracking-wider">Gallery</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 text-foreground">
            Our Beautiful Bulldogs
          </h2>
          <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Browse through photos of our studs, puppies, and the Empire State Bulldogs lifestyle.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="flex gap-4 md:gap-6 justify-center flex-wrap max-w-6xl mx-auto">
          {galleryPhotos.map((photo, index) => (
            <div
              key={`${photo.src}-${index}`}
              className="relative rounded-2xl overflow-hidden group flex-shrink-0 w-44 md:w-64 aspect-square bg-muted/20"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 176px, 256px"
                className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
