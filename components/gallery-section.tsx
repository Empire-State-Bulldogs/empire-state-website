import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { CapitalPattern } from "@/components/capital-pattern"

// A hand-picked preview, one photograph per subject.
//
// Two things were wrong before. It pulled from allPuppyPhotos, which is every
// shot of every puppy, so the first tiles were the same dog two and three
// times over (black-tan-1 and -2, lilac-merle-1, -2 and -3). And a mosaic of
// mixed spans cropped these portrait photos so hard that the tall tiles
// showed a muzzle and the wide ones showed a torso.
//
// So: eight photographs, no repeated dog, on one tile shape that suits a
// portrait crop. Variety comes from the subjects, not from the grid.
const previewPhotos = [
  { src: "/images/fluffy-french-bulldog-puppy-lilac-merle-albany-ny-1.jpg", alt: "Lilac merle fluffy French Bulldog puppy with blue eyes, Albany NY" },
  { src: "/images/simba1.jpg", alt: "King Simba, lilac French Bulldog stud, sitting on grass in Albany NY" },
  { src: "/images/fluffy-french-bulldog-puppy-black-tan-albany-ny-1.jpg", alt: "Black and tan fluffy French Bulldog puppy lying on grass" },
  { src: "/images/fam1.jpg", alt: "The Empire State Bulldogs family with their dogs" },
  { src: "/images/fluffy-french-bulldog-puppy-chocolate-albany-ny-1.jpg", alt: "Chocolate fluffy French Bulldog puppy with tongue out on grass" },
  { src: "/images/simba5.jpg", alt: "King Simba handled at the Liberty State Dog Show" },
  { src: "/images/fluffy-french-bulldog-puppy-chocolate-tan-albany-ny-1.jpg", alt: "Chocolate and tan fluffy French Bulldog puppy on hardwood floor" },
  { src: "/images/puppy2-1.jpg", alt: "Blue fawn French Bulldog puppy from a past Empire State Bulldogs litter" },
]

export function GallerySection() {
  return (
    <section id="gallery" className="relative overflow-hidden bg-background py-16 md:py-24">
      <CapitalPattern variant="grid" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between md:mb-12">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.22em] text-primary">
              Gallery
            </span>
            <h2 className="mt-3 text-3xl font-black capitalize leading-[1.05] tracking-tight text-foreground md:text-5xl">
              Our beautiful bulldogs
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Studs, puppies, and the Empire State Bulldogs lifestyle.
            </p>
          </div>

          <Link
            href="/gallery"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-black uppercase tracking-wider text-primary transition-colors hover:text-primary/80"
          >
            View full gallery
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        {/* One tile shape throughout. 4:5 is close to how these were shot, so
            the crop takes a little off the top and bottom rather than
            reducing a whole dog to a close-up of its face. */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {previewPhotos.map((photo) => (
            <Link
              key={photo.src}
              href="/gallery"
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted/20 ring-1 ring-border/60 transition-all hover:ring-primary/60"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
