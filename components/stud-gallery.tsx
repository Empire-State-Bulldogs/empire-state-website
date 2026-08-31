"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface StudGalleryProps {
  photos: readonly { readonly src: string; readonly alt: string }[]
  name: string
}

/**
 * Photo gallery for a dog.
 *
 * The thumbnails were 56px squares with a 2px border, so on a phone the real
 * target was under the 44px minimum and picking a specific one took aim. Now
 * the main image is swipeable, there are dot indicators showing where you are
 * in the set, and the thumbnails are large enough to hit. Arrows appear on
 * pointer devices, where there is nothing to swipe with.
 */
export function StudGallery({ photos, name }: StudGalleryProps) {
  const [active, setActive] = useState(0)
  const [hint, setHint] = useState(true)
  const touchStart = useRef<{ x: number; y: number } | null>(null)
  const count = photos.length

  const step = useCallback(
    (dir: 1 | -1) => setActive((i) => (i + dir + count) % count),
    [count],
  )

  // The swipe hint is only useful until the first interaction; after that it
  // is noise sitting on top of the photograph.
  const dismissHint = useCallback(() => setHint(false), [])

  useEffect(() => {
    const t = setTimeout(() => setHint(false), 4000)
    return () => clearTimeout(t)
  }, [])

  function onTouchStart(e: React.TouchEvent) {
    const t = e.touches[0]
    touchStart.current = { x: t.clientX, y: t.clientY }
  }

  function onTouchEnd(e: React.TouchEvent) {
    const start = touchStart.current
    if (!start) return
    touchStart.current = null
    const t = e.changedTouches[0]
    const dx = t.clientX - start.x
    const dy = t.clientY - start.y
    // Only treat it as a swipe if it is mostly horizontal, so a vertical
    // scroll that starts on the image still scrolls the page.
    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return
    dismissHint()
    step(dx < 0 ? 1 : -1)
  }

  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl opacity-40 pointer-events-none" />

      {/* Main image */}
      <div
        className="relative aspect-square rounded-2xl overflow-hidden border border-border shadow-2xl shadow-black/30 touch-pan-y select-none"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        role="group"
        aria-roledescription="carousel"
        aria-label={`Photos of ${name}`}
      >
        {photos.map((photo, i) => (
          <Image
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={i === 0}
            // All frames stay mounted and cross-fade, so a swipe does not
            // flash an empty box while the next file decodes.
            className={cn(
              "object-cover transition-opacity duration-300",
              i === active ? "opacity-100" : "opacity-0",
            )}
            aria-hidden={i !== active}
          />
        ))}

        {/* Arrows: pointer devices have nothing to swipe with. */}
        <button
          onClick={() => step(-1)}
          aria-label="Previous photo"
          className="hidden md:grid absolute left-3 top-1/2 -translate-y-1/2 h-11 w-11 place-items-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <ChevronLeft size={22} aria-hidden="true" />
        </button>
        <button
          onClick={() => step(1)}
          aria-label="Next photo"
          className="hidden md:grid absolute right-3 top-1/2 -translate-y-1/2 h-11 w-11 place-items-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <ChevronRight size={22} aria-hidden="true" />
        </button>

        {/* Swipe affordance, mobile only, until the first interaction. */}
        {hint && count > 1 && (
          <div className="md:hidden pointer-events-none absolute inset-x-0 bottom-16 flex justify-center">
            <span className="flex items-center gap-2 rounded-full bg-black/60 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
              <ChevronLeft size={14} className="animate-pulse" aria-hidden="true" />
              Swipe
              <ChevronRight size={14} className="animate-pulse" aria-hidden="true" />
            </span>
          </div>
        )}

        {/* Dots: where you are in the set, and a target in their own right.
            The dot is small but its button is 44px tall. */}
        {count > 1 && (
          <div className="absolute inset-x-0 bottom-0 flex justify-center gap-1 bg-gradient-to-t from-black/60 to-transparent pt-8">
            {photos.map((photo, i) => (
              <button
                key={photo.src}
                onClick={() => {
                  dismissHint()
                  setActive(i)
                }}
                aria-label={`Go to photo ${i + 1} of ${count}`}
                aria-current={active === i}
                className="grid h-11 w-7 place-items-center focus-visible:outline-none"
              >
                <span
                  className={cn(
                    "block h-2 rounded-full transition-all",
                    active === i ? "w-6 bg-primary" : "w-2 bg-white/50",
                  )}
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Thumbnails. Bigger targets, and no hover-to-switch: on a trackpad
          that made the main image change as the pointer merely crossed the
          strip. */}
      <div className="mt-3 flex flex-wrap justify-center gap-2 sm:gap-3">
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            onClick={() => {
              dismissHint()
              setActive(i)
            }}
            aria-label={`View photo ${i + 1} of ${name}`}
            aria-current={active === i}
            className={cn(
              "relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border-2 transition-all sm:h-20 sm:w-20",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              active === i
                ? "border-primary shadow-lg shadow-primary/30"
                : "border-border opacity-60 hover:opacity-100",
            )}
          >
            <Image src={photo.src} alt="" aria-hidden="true" fill sizes="80px" className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}
