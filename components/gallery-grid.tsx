"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export type GalleryItem = {
  src: string
  alt: string
}

// The gallery grid, with a lightbox.
//
// The previous version put a numbered badge on all 27 tiles, a gradient
// caption reading "ESB Archive" plus a label over each one on hover, and a
// permanent 15% grayscale on the photographs. That is a lot of furniture in
// front of the only thing anyone came to look at. Here the photographs carry
// themselves: no numbers, no captions, no filter, and clicking one opens it
// full size, which is what the hover state was gesturing at anyway.
//
// The alt text still describes each dog, so screen readers and image search
// keep everything the visible captions used to say.
export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [open, setOpen] = useState<number | null>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)

  const close = useCallback(() => {
    setOpen(null)
    // Send focus back to the tile that opened it, not the top of the page.
    triggerRef.current?.focus()
  }, [])

  const step = useCallback(
    (dir: 1 | -1) => {
      setOpen((i) => (i === null ? i : (i + dir + items.length) % items.length))
    },
    [items.length],
  )

  useEffect(() => {
    if (open === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowRight") step(1)
      if (e.key === "ArrowLeft") step(-1)
    }
    window.addEventListener("keydown", onKey)

    // Lock the page behind the lightbox without losing scroll position.
    const y = window.scrollY
    const { body } = document
    const prev = { position: body.style.position, top: body.style.top, width: body.style.width }
    body.style.position = "fixed"
    body.style.top = `-${y}px`
    body.style.width = "100%"

    closeRef.current?.focus()

    return () => {
      window.removeEventListener("keydown", onKey)
      body.style.position = prev.position
      body.style.top = prev.top
      body.style.width = prev.width
      window.scrollTo(0, y)
    }
  }, [open, close, step])

  const current = open === null ? null : items[open]

  return (
    <>
      {/* Masonry via CSS columns: the photographs are a mix of portrait and
          landscape, so letting each keep its own aspect ratio reads better
          than cropping everything to a square. */}
      <div className="columns-2 md:columns-3 xl:columns-4 gap-3 md:gap-4 [column-fill:_balance]">
        {items.map((item, i) => (
          <button
            key={item.src}
            type="button"
            onClick={(e) => {
              triggerRef.current = e.currentTarget
              setOpen(i)
            }}
            className="group mb-3 md:mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl bg-card ring-1 ring-border/60 transition-all duration-300 hover:ring-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={`View larger: ${item.alt}`}
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              decoding="async"
              className="block h-auto w-full transition-transform duration-500 group-hover:scale-[1.04]"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 p-4 sm:p-8"
          onClick={close}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <X size={22} aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              step(-1)
            }}
            aria-label="Previous photo"
            className="absolute left-2 sm:left-5 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <ChevronLeft size={26} aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              step(1)
            }}
            aria-label="Next photo"
            className="absolute right-2 sm:right-5 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <ChevronRight size={26} aria-hidden="true" />
          </button>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={current.src}
            alt={current.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
          />
        </div>
      )}
    </>
  )
}
