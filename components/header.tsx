"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Menu, X, Play, Pause, SkipForward, SkipBack,
  Phone, ChevronDown, ChevronUp, Home, Info,
  Crown, Heart, Camera, Mail, BookOpen, Shield, HelpCircle, Instagram, MapPin
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMusic, songs as musicSongs } from "@/context/music-context"
import { ExpandedPlayer } from "@/components/expanded-player"
import { MobilePlayer } from "@/components/mobile-player"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: Info },
  { href: "/studs", label: "Stud Services", icon: Crown },
  { href: "/puppies", label: "Puppies", icon: Heart },
  { href: "/gallery", label: "Gallery", icon: Camera },
  { href: "/locations", label: "Locations", icon: MapPin },
  { href: "/contact", label: "Contact", icon: Mail },
]

const extraLinks = [
  { href: "/studs/king-simba", label: "King Simba", icon: Crown },
  { href: "/health-guarantee", label: "Health Guarantee", icon: Shield },
  { href: "/breeding-policies", label: "Breeding Policies", icon: BookOpen },
  { href: "/faq", label: "FAQ", icon: HelpCircle },
]

function TikTokIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.74a4.85 4.85 0 0 1-1.01-.05Z" />
    </svg>
  )
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobilePlayerOpen, setIsMobilePlayerOpen] = useState(false)
  const pathname = usePathname()

  const {
    isPlaying,
    togglePlay,
    nextTrack,
    prevTrack,
    currentTrackIndex,
    isExpanded,
    setIsExpanded
  } = useMusic()

  const currentTrack = musicSongs[currentTrackIndex]

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <MobilePlayer isOpen={isMobilePlayerOpen} onClose={() => setIsMobilePlayerOpen(false)} />

      <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-xl border-b border-border/50 shadow-sm">
        <div className="container mx-auto px-3 md:px-4">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* ── MOBILE ── */}
            <Link href="/" className="flex lg:hidden items-center gap-2 shrink-0" onClick={closeMenu}>
              <img src="/images/logo.png" alt="Empire State Bulldogs" className="h-10 w-auto" />
            </Link>

            {/* Mobile Center: integrated radio bar */}
            <div className="flex lg:hidden flex-1 items-center justify-center gap-1 px-2">
              <button onClick={prevTrack} className="p-2 hover:bg-primary/15 rounded-full transition-all active:scale-90" aria-label="Previous">
                <SkipBack size={15} className="text-primary" />
              </button>
              <button
                onClick={togglePlay}
                className="w-9 h-9 flex items-center justify-center bg-primary hover:bg-primary/90 rounded-full transition-all shadow-md shadow-primary/30 active:scale-90"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause size={15} className="text-white fill-white" /> : <Play size={15} className="text-white fill-white ml-0.5" />}
              </button>
              <button onClick={nextTrack} className="p-2 hover:bg-primary/15 rounded-full transition-all active:scale-90" aria-label="Next">
                <SkipForward size={15} className="text-primary" />
              </button>
              <button
                onClick={() => setIsMobilePlayerOpen(true)}
                className="flex items-center gap-1.5 ml-1 max-w-[145px] group"
                aria-label="Open player"
              >
                <div className="flex flex-col items-start overflow-hidden">
                  <span className="text-[11px] font-black uppercase tracking-widest text-primary leading-none">now playing</span>
                  <span className="text-[15px] font-bold text-foreground truncate w-full leading-snug capitalize tracking-tight">{currentTrack.title}</span>
                </div>
                <div className={cn("flex gap-0.5 items-end h-4 shrink-0 ml-1", !isPlaying && "opacity-30")}>
                  <div className={cn("w-0.5 h-1.5 bg-primary rounded-full", isPlaying && "animate-music-bar-1")} />
                  <div className={cn("w-0.5 h-2.5 bg-primary rounded-full", isPlaying && "animate-music-bar-2")} />
                  <div className={cn("w-0.5 h-1 bg-primary rounded-full", isPlaying && "animate-music-bar-3")} />
                </div>
                <ChevronDown size={14} className="text-primary shrink-0" />
              </button>
            </div>

            {/* Mobile Right: hamburger */}
            <button
              className="flex lg:hidden text-foreground p-2 transition-all active:scale-90 shrink-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-7 h-7 flex items-center justify-center">
                <X size={26} className={cn("absolute transition-all duration-300", isMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-50")} />
                <Menu size={26} className={cn("absolute transition-all duration-300", isMenuOpen ? "opacity-0 -rotate-90 scale-50" : "opacity-100 rotate-0 scale-100")} />
              </div>
            </button>

            {/* ── DESKTOP ── */}
            <div className="hidden lg:flex w-full justify-between items-center gap-4">
              {/* Left Side: Logo & Socials */}
              <div className="flex shrink-0 items-center gap-4">
                <Link href="/" className="flex items-center gap-2">
                  <img src="/images/logo.png" alt="Empire State Bulldogs" className="h-[2.75rem] w-auto" />
                </Link>
                <div className="hidden xl:flex items-center gap-2">
                  <Link href="https://www.instagram.com/bankroll_bop93/" target="_blank" className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 hover:scale-110 transition-all">
                    <Instagram size={16} />
                  </Link>
                  <Link href="https://www.tiktok.com/@bankrollbop" target="_blank" className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 hover:scale-110 transition-all">
                    <TikTokIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Center: Evenly Spaced Nav Links */}
              <nav className="flex-1 flex items-center justify-evenly max-w-3xl mx-auto px-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-2 py-2 text-lg xl:text-xl font-black rounded-lg transition-all hover:text-primary whitespace-nowrap capitalize tracking-tight",
                      pathname === link.href ? "text-primary bg-primary/10" : "text-muted-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Right Side: Radio & Contact */}
              <div className="flex shrink-0 items-center justify-end gap-3 z-10">
              {/* Mini radio */}
              <div className="flex items-center gap-1.5 bg-primary/5 rounded-full px-3 py-1.5 border border-primary/10">
                <button onClick={prevTrack} className="p-1 hover:bg-primary/20 rounded-full transition-all hover:scale-110">
                  <SkipBack size={14} className="text-primary" />
                </button>
                <button onClick={togglePlay} className="w-7 h-7 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center shadow-md shadow-primary/30 hover:scale-110 transition-all">
                  {isPlaying ? <Pause size={12} className="text-white fill-white" /> : <Play size={12} className="text-white fill-white ml-0.5" />}
                </button>
                <button onClick={nextTrack} className="p-1 hover:bg-primary/20 rounded-full transition-all hover:scale-110">
                  <SkipForward size={14} className="text-primary" />
                </button>
                <div className="w-px h-4 bg-primary/20 mx-1" />
                <button onClick={() => setIsExpanded(!isExpanded)} className="flex items-center gap-1.5 group max-w-[110px]">
                  <span className="text-[10px] text-foreground truncate hidden xl:block">{currentTrack.title}</span>
                  {isExpanded ? <ChevronUp size={14} className="text-primary shrink-0" /> : <ChevronDown size={14} className="text-primary shrink-0" />}
                </button>
              </div>

              <div className="flex gap-2">
                <Button asChild variant="outline" size="icon" className="border-primary text-primary hover:bg-primary/10 rounded-xl w-10 h-10 hidden xl:flex">
                  <a href="tel:5189173429">
                    <Phone size={18} />
                  </a>
                </Button>
                <Button asChild className="bg-primary text-white hover:bg-primary/90 rounded-xl h-10 px-6 text-lg font-black shadow-lg shadow-primary/20 capitalize tracking-tight">
                  <Link href="/contact">contact</Link>
                </Button>
              </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── MOBILE MENU ── */}
        <div className={cn(
          "lg:hidden overflow-hidden transition-all duration-400 ease-out",
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="bg-background/98 backdrop-blur-xl border-t border-border px-4 pt-4 pb-8">
            {/* Main nav */}
            <div className="space-y-1 mb-6">
              {navLinks.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={cn(
                    "flex items-center gap-4 px-4 py-4 rounded-2xl text-base font-bold transition-all duration-200 group",
                    pathname === link.href
                      ? "bg-primary/15 text-primary"
                      : "text-foreground hover:bg-card hover:text-primary"
                  )}
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
                    pathname === link.href ? "bg-primary text-white" : "bg-card text-primary group-hover:bg-primary/20"
                  )}>
                    <link.icon size={24} />
                  </div>
                  <span className="text-3xl font-black capitalize tracking-tight">{link.label}</span>
                  {pathname === link.href && <div className="ml-auto w-3 h-3 rounded-full bg-primary" />}
                </Link>
              ))}
            </div>

            {/* More links */}
            <div className="border-t border-border pt-8 mb-10">
              <p className="text-sm font-black text-muted-foreground mb-6 px-4 capitalize tracking-tight">more info</p>
              <div className="grid grid-cols-2 gap-3">
                {extraLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="flex flex-col items-center gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:bg-primary/5 transition-all text-center group"
                  >
                    <link.icon size={28} className="text-primary" />
                    <span className="text-base font-black text-foreground group-hover:text-primary leading-tight capitalize tracking-tight">{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Social + contact */}
            <div className="border-t border-border pt-8 mb-10">
              <p className="text-sm font-black text-muted-foreground mb-6 px-4 capitalize tracking-tight">connect</p>
              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="https://www.instagram.com/bankroll_bop93/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600/20 to-pink-500/10 border border-purple-500/20 hover:from-purple-600/30 hover:to-pink-500/20 transition-all"
                  onClick={closeMenu}
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-foreground">Instagram</span>
                </Link>
                <Link
                  href="https://www.tiktok.com/@bankrollbop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-black/30 to-gray-800/20 border border-white/10 hover:from-black/40 transition-all"
                  onClick={closeMenu}
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-gray-900 to-black rounded-lg flex items-center justify-center shrink-0">
                    <TikTokIcon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-bold text-foreground">TikTok</span>
                </Link>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="space-y-3">
              <Button asChild className="w-full bg-primary text-white hover:bg-primary/90 py-6 text-base font-bold rounded-2xl shadow-xl shadow-primary/20">
                <a href="tel:5189173429" className="flex items-center justify-center gap-2">
                  <Phone size={18} /> Call Us: 518-917-3429
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full border-2 border-primary text-primary hover:bg-primary/10 py-6 text-base font-bold rounded-2xl">
                <Link href="/puppies" onClick={closeMenu}>
                  View Available Puppies
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <ExpandedPlayer />
      </header>
    </>
  )
}
