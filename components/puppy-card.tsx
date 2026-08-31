"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Phone, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Puppy } from "@/lib/puppy-data"

/** One available puppy, with thumbnail switching when it has more than one photo. */
export function PuppyCard({ puppy }: { puppy: Puppy }) {
  const [active, setActive] = useState(0)
  const photo = puppy.photos[active]

  return (
    <article className="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 group flex flex-col">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <Badge className="absolute top-3 left-3 bg-primary text-white shadow-lg px-3 py-1 text-xs font-black uppercase tracking-wider">
          Available
        </Badge>

        {puppy.photos.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 bg-background/60 backdrop-blur-sm p-1.5 rounded-full">
            {puppy.photos.map((p, i) => (
              <button
                key={p.src}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                aria-label={`View photo ${i + 1} of ${puppy.name}`}
                aria-current={active === i}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all",
                  active === i ? "bg-primary scale-125" : "bg-white/50 hover:bg-white/80",
                )}
              />
            ))}
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-xl font-black text-foreground mb-1 leading-tight">{puppy.name}</h3>
        <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">{puppy.coat}</p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{puppy.blurb}</p>

        <div className="flex items-baseline gap-2 mb-4 pt-3 border-t border-border">
          {puppy.price === null ? (
            <span className="text-lg font-black text-foreground">Ask About Availability</span>
          ) : (
            <span className="text-2xl font-black text-foreground">${puppy.price.toLocaleString()}</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Button asChild className="w-full bg-primary text-white hover:bg-primary/90 rounded-xl font-black py-5">
            <a href="tel:5189173429" className="flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" /> Call to Meet
            </a>
          </Button>
          <Button asChild variant="outline" className="w-full border-primary/40 text-primary hover:bg-primary/10 rounded-xl font-bold">
            <Link href="/contact/" className="flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4" /> Ask About {puppy.name.split(" ")[0]}
            </Link>
          </Button>
        </div>
      </div>
    </article>
  )
}
