import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Instagram, Phone, Camera, Sparkles } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gallery | Empire State Bulldogs Photos & Videos",
  description: "Browse our gallery of stunning French Bulldog photos. See King Simba, our puppies, and the Empire State Bulldogs lifestyle in Albany, NY.",
}

// Add a placeholder for Fresh7
const Fresh7_PATH = "/images/fresh7.jpg"

// Define specific spans for a "hip" asymmetrical look
const galleryItems = [
  { src: "/images/simba1.jpg", label: "King Simba", span: "md:col-span-2 md:row-span-2" }, // Large square
  { src: "/images/puppy1-1.jpg", label: "Puppy Life", span: "col-span-1 row-span-1" },
  { src: Fresh7_PATH, label: "Fresh Drops", span: "col-span-1 row-span-1" },
  { src: "/images/simba2.jpg", label: "The Legend", span: "md:col-span-1 md:row-span-2" }, // Tall
  { src: "/images/puppy2-1.jpg", label: "New Litters", span: "col-span-1 row-span-1" },
  { src: "/images/fam1.jpg", label: "ESB Family", span: "md:col-span-2 md:row-span-1" }, // Wide
  { src: "/images/puppy3-1.jpg", label: "Adorable", span: "col-span-1 row-span-1" },
  { src: "/images/simba3.jpg", label: "King Simba", span: "col-span-1 row-span-1" },
  { src: "/images/fresh1.jpg", label: "Lifestyle", span: "md:col-span-2 md:row-span-2" }, // Large square
  { src: "/images/puppy4-1.jpg", label: "Puppy Dreams", span: "col-span-1 row-span-1" },
  { src: "/images/simba4.jpg", label: "Blue Fawn", span: "col-span-1 row-span-1" },
  { src: "/images/fresh2.jpg", label: "Vibe", span: "md:col-span-1 md:row-span-2" }, // Tall
  { src: "/images/puppy5-1.jpg", label: "Playtime", span: "col-span-1 row-span-1" },
  { src: "/images/fam2.jpg", label: "Tradition", span: "md:col-span-2 md:row-span-1" }, // Wide
  { src: "/images/simba5.jpg", label: "Champion", span: "col-span-1 row-span-1" },
  { src: "/images/fresh3.jpg", label: "Albany NY", span: "col-span-1 row-span-1" },
  { src: "/images/fresh4.jpg", label: "Behind Scenes", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/fresh5.jpg", label: "Details", span: "col-span-1 row-span-1" },
  { src: "/images/coming_soon.jpg", label: "Next Drop", span: "md:col-span-1 md:row-span-1" },
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
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-foreground leading-[0.95] tracking-tighter">
            BIG EMPIRE<br />
            <span className="text-primary text-stroke-primary text-transparent md:text-white md:text-stroke-0">VIBRATIONS</span>
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

      {/* BIG COLLAGE GRID */}
      <section className="py-8 md:py-16 bg-background">
        <div className="container mx-auto px-2 md:px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[300px] gap-2 md:gap-4 max-w-[1600px] mx-auto">
            {galleryItems.map((item, i) => (
              <div 
                key={i} 
                className={`group relative overflow-hidden rounded-2xl md:rounded-[2rem] bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 shadow-xl hover:shadow-primary/20 ${item.span}`}
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 md:p-10 translate-y-4 group-hover:translate-y-0 text-white">
                    <span className="text-primary font-black uppercase tracking-[0.2em] text-xs mb-1">ESB Archive</span>
                    <h3 className="text-xl md:text-3xl font-black leading-none uppercase tracking-tighter">{item.label}</h3>
                </div>

                {/* Counter Badge */}
                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-2 py-1 rounded-md text-[10px] font-bold text-white/70 border border-white/10 group-hover:border-primary/40 transition-colors">
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
