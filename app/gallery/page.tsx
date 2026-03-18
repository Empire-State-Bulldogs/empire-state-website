import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Instagram, Phone, Camera, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gallery | Empire State Bulldogs Photos & Videos",
  description: "Browse our gallery of stunning French Bulldog photos. See King Simba, our puppies, and the Empire State Bulldogs lifestyle in Albany, NY.",
}

const freshPhotos = [
  "/images/fresh1.jpg",
  "/images/fresh2.jpg",
  "/images/fresh3.jpg",
  "/images/fresh4.jpg",
  "/images/fresh5.jpg",
  "/images/fresh7.jpg",
]

const sectionPhotos = [
  { src: "/images/simba1.jpg", label: "King Simba" },
  { src: "/images/simba2.jpg", label: "King Simba" },
  { src: "/images/puppy1-1.jpg", label: "Puppies" },
  { src: "/images/puppy2-1.jpg", label: "Puppies" },
  { src: "/images/simba3.jpg", label: "King Simba" },
  { src: "/images/puppy3-1.jpg", label: "Puppies" },
  { src: "/images/simba4.jpg", label: "King Simba" },
  { src: "/images/puppy4-1.jpg", label: "Puppies" },
  { src: "/images/simba5.jpg", label: "King Simba" },
  { src: "/images/puppy5-1.jpg", label: "Puppies" },
  { src: "/images/fam1.jpg", label: "Family" },
  { src: "/images/fam2.jpg", label: "Family" },
]

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* HERO */}
      <section className="relative pt-32 pb-16 bg-background overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 rounded-full px-4 py-1.5 text-sm font-bold uppercase tracking-widest mb-6">
            <Camera className="w-4 h-4" />
            Photo Gallery
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-foreground">
            The Empire State<br />
            <span className="text-primary">Bulldog Life</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            A visual journey through our world — champion studs, adorable puppies, and the lifestyle we've built around the finest French Bulldogs in New York.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-4 shadow-xl shadow-primary/30">
            <Link href="https://www.instagram.com/bankroll_bop93/" target="_blank" className="flex items-center gap-2">
              <Instagram className="w-5 h-5" /> Follow on Instagram
            </Link>
          </Button>
        </div>
      </section>

      {/* HERO MOSAIC */}
      <section className="pb-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-6xl mx-auto">
            {sectionPhotos.map((p, i) => (
              <div key={i} className={`relative rounded-2xl overflow-hidden group ${i === 0 || i === 4 ? "row-span-2 aspect-[3/4]" : "aspect-square"}`}>
                <Image
                  src={p.src}
                  alt={p.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <span className="text-white text-xs font-bold uppercase tracking-wider">{p.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIFESTYLE GRID */}
      <section className="py-16 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Fresh Content</span>
            <h2 className="text-3xl md:text-5xl font-black mt-2 text-foreground">Fresh Photo Drops</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {freshPhotos.map((src, i) => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden group relative">
                <Image
                  src={src}
                  alt={`Empire State Bulldogs Photo ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-purple-600/20 via-pink-500/10 to-orange-400/5 rounded-3xl border border-purple-500/20 p-10 md:p-16 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
              <Instagram className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">
              Follow the Empire
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Get daily updates, behind-the-scenes content, and exclusive first looks at new puppies on our Instagram.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white hover:opacity-90 px-8 py-6 text-lg shadow-xl border-0">
                <Link href="https://www.instagram.com/bankroll_bop93/" target="_blank" className="flex items-center gap-2">
                  <Instagram className="w-5 h-5" /> @bankroll_bop93
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg">
                <a href="tel:5189173429" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" /> Contact Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
