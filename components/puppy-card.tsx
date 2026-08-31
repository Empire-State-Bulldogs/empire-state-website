"use client"

import { useState, useRef } from "react"
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
  const touchStart = useRef<{ x: number; y: number } | null>(null)
  const count = puppy.photos.length

  // The dots were 10px targets, which is a hard thing to hit on a phone. The
  // photo itself is now swipeable, and the dots get 44px buttons around them.
  function onTouchStart(e: React.TouchEvent) {
    const t = e.touches[0]
    touchStart.current = { x: t.clientX, y: t.clientY }
  }
  function onTouchEnd(e: React.TouchEvent) {
    const start = touchStart.current
    if (!start || count < 2) return
    touchStart.current = null
    const t = e.changedTouches[0]
    const dx = t.clientX - start.x
    const dy = t.clientY - start.y
    // Horizontal intent only, so a vertical scroll still scrolls the page.
    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return
    setActive((i) => (i + (dx < 0 ? 1 : -1) + count) % count)
  }

  return (
    <article className="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 group flex flex-col">
      <div
        className="relative aspect-square overflow-hidden bg-muted touch-pan-y select-none"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
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
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex items-center rounded-full bg-background/60 px-1 backdrop-blur-sm">
            {puppy.photos.map((p, i) => (
              <button
                key={p.src}
                onClick={() => setActive(i)}
                aria-label={`View photo ${i + 1} of ${puppy.name}`}
                aria-current={active === i}
                className="grid h-11 w-6 place-items-center focus-visible:outline-none"
              >
                <span
                  className={cn(
                    "block h-2 rounded-full transition-all",
                    active === i ? "w-5 bg-primary" : "w-2 bg-white/50",
                  )}
                />
              </button>
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
