import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Instagram, Phone, Camera, Sparkles } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
    alternates: {
        canonical: "/gallery/",
    },
  title: "Frenchie Photo & Video Gallery",
  description: "Browse our gallery of stunning French Bulldog photos. See King Simba, our puppies, and the Empire State Bulldogs lifestyle in Albany, NY.",
}

/**
 * Masonry gallery. `label` is the hover caption; `alt` is what screen readers and
 * image search actually read, so it describes the dog rather than the vibe.
 */
const galleryItems = [
  { src: "/images/fluffy-french-bulldog-puppy-lilac-merle-albany-ny-1.jpg", label: "Lilac Merle", alt: "Lilac merle fluffy French Bulldog puppy with blue eyes, available in Albany NY" },
  { src: "/images/simba1.jpg", label: "King Simba", alt: "King Simba, lilac French Bulldog stud, sitting on grass in Albany NY" },
  { src: "/images/fluffy-french-bulldog-puppy-black-tan-albany-ny-1.jpg", label: "Black & Tan Fluffy", alt: "Black and tan fluffy French Bulldog puppy with tan points lying on grass" },
  { src: "/images/fresh7.jpg", label: "Fresh Drops", alt: "French Bulldog from Empire State Bulldogs in Albany, NY" },
  { src: "/images/fluffy-french-bulldog-puppy-chocolate-albany-ny-1.jpg", label: "Chocolate Fluffy", alt: "Rich chocolate fluffy French Bulldog puppy with tongue out on grass" },
  { src: "/images/simba2.jpg", label: "The Legend", alt: "King Simba French Bulldog stud showing head structure and rope" },
  { src: "/images/fluffy-french-bulldog-puppy-chocolate-tan-albany-ny-1.jpg", label: "Chocolate & Tan", alt: "Chocolate and tan fluffy French Bulldog puppy sitting on hardwood floor" },
  { src: "/images/fam1.jpg", label: "ESB Family", alt: "The Empire State Bulldogs family with their dogs" },
  { src: "/images/fluffy-french-bulldog-puppy-lilac-merle-albany-ny-2.jpg", label: "Merle Coat", alt: "Lilac merle fluffy French Bulldog puppy in profile showing merle coat pattern" },
  { src: "/images/puppy1-1.jpg", label: "Puppy Life", alt: "Lilac tan French Bulldog puppy placed by Empire State Bulldogs" },
  { src: "/images/simba3.jpg", label: "Show Ready", alt: "King Simba stacked on show turf showing thick bone and compact build" },
  { src: "/images/fluffy-french-bulldog-puppy-black-tan-albany-ny-2.jpg", label: "Tan Points", alt: "Black and tan long-haired French Bulldog puppy facing the camera" },
  { src: "/images/fresh1.jpg", label: "Lifestyle", alt: "Empire State Bulldogs French Bulldog in Albany, NY" },
  { src: "/images/puppy2-1.jpg", label: "New Litters", alt: "Blue fawn French Bulldog puppy from a past Empire State Bulldogs litter" },
  { src: "/images/fluffy-french-bulldog-puppy-chocolate-tan-albany-ny-2.jpg", label: "Cream Paws", alt: "Chocolate fluffy French Bulldog puppy with light tan points sitting upright" },
  { src: "/images/simba4.jpg", label: "Lilac Fawn", alt: "King Simba lilac French Bulldog stud profile view" },
  { src: "/images/puppy3-1.jpg", label: "Adorable", alt: "Chocolate French Bulldog puppy raised in Albany, NY" },
  { src: "/images/fresh2.jpg", label: "Vibe", alt: "French Bulldog from the Empire State Bulldogs program" },
  { src: "/images/fluffy-french-bulldog-puppy-lilac-merle-albany-ny-3.jpg", label: "Blue Eyes", alt: "Lilac merle long-haired French Bulldog puppy sitting, Albany NY" },
  { src: "/images/puppy4-1.jpg", label: "Puppy Dreams", alt: "Cream French Bulldog puppy from Empire State Bulldogs" },
  { src: "/images/fam2.jpg", label: "Tradition", alt: "Empire State Bulldogs family tradition photo with their bulldogs" },
  { src: "/images/simba5.jpg", label: "Champion", alt: "King Simba handled at the Liberty State Dog Show" },
  { src: "/images/puppy5-1.jpg", label: "Playtime", alt: "Brindle French Bulldog puppy placed in a loving home" },
  { src: "/images/fresh3.jpg", label: "Albany NY", alt: "Empire State Bulldogs Frenchie lifestyle photo in Albany NY" },
  { src: "/images/fresh4.jpg", label: "Behind Scenes", alt: "French Bulldog raised by Empire State Bulldogs" },
  { src: "/images/fresh5.jpg", label: "Details", alt: "Empire State Bulldogs French Bulldog portrait" },
  { src: "/images/coming_soon.jpg", label: "Next Drop", alt: "Next litter of French Bulldog puppies coming soon at Empire State Bulldogs" },
]

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* HERO */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-background overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, hsl(var(--primary)) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(var(--accent)) 0%, transparent 50%)'}} />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 rounded-full px-5 py-2 text-sm font-black uppercase tracking-widest mb-8">
            <Sparkles className="w-4 h-4" />
            Vibe Check
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-foreground leading-[1.2] tracking-tight capitalize">
            big empire<br />
            <span className="text-primary">vibrations</span>
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
            Not just dogs — a legacy. Check out the latest heat from the Empire State Bulldogs vault. Roots in Albany, reaching nationwide.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
             <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 px-8 py-7 text-xl font-black shadow-2xl shadow-primary/40 rounded-2xl">
              <Link href="https://www.instagram.com/bankroll_bop93/" target="_blank" className="flex items-center gap-3">
                <Instagram className="w-6 h-6" /> FOLLOW THE HYPE
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background px-8 py-7 text-xl font-black rounded-2xl transition-all">
              <Link href="/contact">GET IN TOUCH</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* BIG MASONRY GALLERY */}
      <section className="py-8 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 max-w-[1600px] mx-auto">
            {galleryItems.map((item, i) => (
              <div 
                key={i} 
                className="group relative overflow-hidden rounded-2xl md:rounded-[2rem] bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 shadow-xl hover:shadow-primary/20 break-inside-avoid shadow-black/30"
              >
                {/* Standard img tag allows intrinsic aspect ratio mapping perfectly for masonry */}
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-auto block transition-transform duration-700 group-hover:scale-110 grayscale-[15%] group-hover:grayscale-0"
                  loading="lazy"
                  decoding="async"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 md:p-8 translate-y-4 group-hover:translate-y-0 text-white pointer-events-none">
                    <span className="text-primary font-black uppercase tracking-[0.2em] text-xs mb-1">ESB Archive</span>
                    <h2 className="text-xl md:text-2xl font-black leading-none uppercase tracking-tighter">{item.label}</h2>
                </div>

                {/* Counter Badge */}
                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-2 py-1 rounded-md text-[10px] font-bold text-white/70 border border-white/10 group-hover:border-primary/40 transition-colors pointer-events-none z-10">
                    {i + 1 < 10 ? `0${i + 1}` : i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM BANNER */}
      <section className="py-20 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-center md:text-left">
                  <h2 className="text-4xl md:text-6xl font-black text-foreground mb-4 uppercase tracking-tighter">Stay Connected</h2>
                  <p className="text-xl text-muted-foreground max-w-lg font-medium">We drop fresh content daily. Don't miss the next lineage update or puppy reveal.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                  <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-black px-10 py-8 text-xl rounded-2xl">
                      <Link href="https://www.instagram.com/bankroll_bop93/" target="_blank">INSTAGRAM FEED</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-2 border-primary text-primary font-black px-10 py-8 text-xl rounded-2xl">
                      <a href="tel:5189173429">CALL THE BOPS</a>
                  </Button>
              </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
