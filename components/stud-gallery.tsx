"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface StudGalleryProps {
  photos: readonly { readonly src: string; readonly alt: string }[]
  name: string
}

/** Hero photo gallery — click or hover a thumbnail to switch the main image. */
export function StudGallery({ photos, name }: StudGalleryProps) {
  const [active, setActive] = useState(0)

  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl opacity-40 pointer-events-none" />

      {/* Main image */}
      <div className="relative aspect-square rounded-2xl overflow-hidden border border-border shadow-2xl shadow-black/30">
        <Image
          src={photos[active].src}
          alt={photos[active].alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          priority
        />
      </div>

      {/* Thumbnails */}
      <div className="relative flex gap-2 sm:gap-3 mt-3 justify-center flex-wrap">
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            onClick={() => setActive(i)}
            onMouseEnter={() => setActive(i)}
            aria-label={`View photo ${i + 1} of ${name}`}
            aria-current={active === i}
            className={cn(
              "relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0",
              active === i
                ? "border-primary scale-105 shadow-lg shadow-primary/30"
                : "border-border opacity-60 hover:opacity-100",
            )}
          >
            <Image src={photo.src} alt={photo.alt} fill sizes="64px" className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}
