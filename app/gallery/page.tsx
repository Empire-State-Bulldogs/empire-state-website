import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { GalleryGrid, type GalleryItem } from "@/components/gallery-grid"
import { Instagram } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  alternates: {
    canonical: "/gallery/",
  },
  title: "Frenchie Photo & Video Gallery",
  description:
    "Browse our gallery of stunning French Bulldog photos. See King Simba, our puppies, and the Empire State Bulldogs lifestyle in Albany, NY.",
}

/**
 * The photographs. `alt` is what screen readers and image search read, so it
 * describes the dog rather than the vibe. The old `label` field fed a hover
 * caption over every tile and is gone with it: the descriptions live in `alt`,
 * where they were doing the real work all along.
 */
const galleryItems: GalleryItem[] = [
  { src: "/images/fluffy-french-bulldog-puppy-lilac-merle-albany-ny-1.jpg", alt: "Lilac merle fluffy French Bulldog puppy with blue eyes, available in Albany NY" },
  { src: "/images/simba1.jpg", alt: "King Simba, lilac French Bulldog stud, sitting on grass in Albany NY" },
  { src: "/images/fluffy-french-bulldog-puppy-black-tan-albany-ny-1.jpg", alt: "Black and tan fluffy French Bulldog puppy with tan points lying on grass" },
  { src: "/images/fresh7.jpg", alt: "French Bulldog from Empire State Bulldogs in Albany, NY" },
  { src: "/images/fluffy-french-bulldog-puppy-chocolate-albany-ny-1.jpg", alt: "Rich chocolate fluffy French Bulldog puppy with tongue out on grass" },
  { src: "/images/simba2.jpg", alt: "King Simba French Bulldog stud showing head structure and rope" },
  { src: "/images/fluffy-french-bulldog-puppy-chocolate-tan-albany-ny-1.jpg", alt: "Chocolate and tan fluffy French Bulldog puppy sitting on hardwood floor" },
  { src: "/images/fam1.jpg", alt: "The Empire State Bulldogs family with their dogs" },
  { src: "/images/fluffy-french-bulldog-puppy-lilac-merle-albany-ny-2.jpg", alt: "Lilac merle fluffy French Bulldog puppy in profile showing merle coat pattern" },
  { src: "/images/puppy1-1.jpg", alt: "Lilac tan French Bulldog puppy placed by Empire State Bulldogs" },
  { src: "/images/simba3.jpg", alt: "King Simba stacked on show turf showing thick bone and compact build" },
  { src: "/images/fluffy-french-bulldog-puppy-black-tan-albany-ny-2.jpg", alt: "Black and tan long-haired French Bulldog puppy facing the camera" },
  { src: "/images/fresh1.jpg", alt: "Empire State Bulldogs French Bulldog in Albany, NY" },
  { src: "/images/puppy2-1.jpg", alt: "Blue fawn French Bulldog puppy from a past Empire State Bulldogs litter" },
  { src: "/images/fluffy-french-bulldog-puppy-chocolate-tan-albany-ny-2.jpg", alt: "Chocolate fluffy French Bulldog puppy with light tan points sitting upright" },
  { src: "/images/simba4.jpg", alt: "King Simba lilac French Bulldog stud profile view" },
  { src: "/images/puppy3-1.jpg", alt: "Chocolate French Bulldog puppy raised in Albany, NY" },
  { src: "/images/fresh2.jpg", alt: "French Bulldog from the Empire State Bulldogs program" },
  { src: "/images/fluffy-french-bulldog-puppy-lilac-merle-albany-ny-3.jpg", alt: "Lilac merle long-haired French Bulldog puppy sitting, Albany NY" },
  { src: "/images/puppy4-1.jpg", alt: "Cream French Bulldog puppy from Empire State Bulldogs" },
  { src: "/images/fam2.jpg", alt: "Empire State Bulldogs family tradition photo with their bulldogs" },
  { src: "/images/simba5.jpg", alt: "King Simba handled at the Liberty State Dog Show" },
  { src: "/images/puppy5-1.jpg", alt: "Brindle French Bulldog puppy placed in a loving home" },
  { src: "/images/fresh3.jpg", alt: "Empire State Bulldogs Frenchie lifestyle photo in Albany NY" },
  { src: "/images/fresh4.jpg", alt: "French Bulldog raised by Empire State Bulldogs" },
  { src: "/images/fresh5.jpg", alt: "Empire State Bulldogs French Bulldog portrait" },
  { src: "/images/coming_soon.jpg", alt: "Next litter of French Bulldog puppies coming soon at Empire State Bulldogs" },
]

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero. Cut back so the photographs start near the top of the page
          instead of after a full screen of heading, paragraph and buttons. */}
      <section className="border-b border-border/50 bg-background pt-28 pb-10 md:pt-36 md:pb-14">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-primary">
              Gallery
            </p>
            <h1 className="mt-4 text-4xl font-black capitalize leading-[1.05] tracking-tight text-foreground md:text-6xl">
              Our dogs, up close
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              King Simba, our fluffy litters, and the families they went home
              to. Rooted in Albany, placed nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* The photographs */}
      <section className="bg-background py-8 md:py-12">
        <div className="container mx-auto max-w-[1500px] px-4">
          <GalleryGrid items={galleryItems} />
        </div>
      </section>

      {/* Closing prompt. One row, in the site palette: the old version used a
          purple-to-pink gradient that appears nowhere else on the site. */}
      <section className="border-t border-border bg-card py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <h2 className="text-3xl font-black uppercase tracking-tight text-foreground md:text-4xl">
                See more day to day
              </h2>
              <p className="mt-3 max-w-lg text-lg text-muted-foreground">
                New litters and lineage updates land on Instagram first.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button
                asChild
                size="lg"
                className="rounded-xl bg-primary px-8 py-6 text-base font-black text-white hover:bg-primary/90"
              >
                <Link
                  href="https://www.instagram.com/bankroll_bop93/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Instagram className="h-5 w-5" aria-hidden="true" />
                  Follow on Instagram
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-xl border-2 border-primary px-8 py-6 text-base font-black text-primary hover:bg-primary/10"
              >
                <a href="tel:5189173429">518-917-3429</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
