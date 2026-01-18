"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Menu, XIcon, Facebook, Instagram, Play, Pause, SkipForward, SkipBack, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#studs", label: "Stud Services" },
  { href: "/#puppies", label: "Puppies" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#contact", label: "Contact" },
]

const socialLinks = [
  { href: "https://www.instagram.com/bankroll_bop93/", icon: Instagram, label: "Instagram" },
  {
    href: "https://www.tiktok.com/@bankrollbop?is_from_webapp=1&sender_device=pc", icon: (props: any) => (
      <svg
        role="img"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
      </svg>
    ), label: "TikTok"
  },
]

const songs = [
  { title: "Bulldog Flex Anthem", file: "song1.mp3" },
  { title: "Bulldog Love", file: "song2.mp3" },
  { title: "Empire State Bulldogs", file: "song3.mp3" },
  { title: "Empire State Reign", file: "song4.mp3" },
  { title: "King Simba's Reign", file: "song5.mp3" },
  { title: "Puppy Dreams", file: "song6.mp3" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updatePlayingState = () => {
      setIsPlaying(!audio.paused && !audio.ended)
    }

    const handleError = () => {
      console.log("[v0] Audio error:", audio.error?.message)
      setIsPlaying(false)
    }

    audio.addEventListener("play", updatePlayingState)
    audio.addEventListener("pause", updatePlayingState)
    audio.addEventListener("ended", nextTrack)
    audio.addEventListener("error", handleError)

    return () => {
      audio.removeEventListener("play", updatePlayingState)
      audio.removeEventListener("pause", updatePlayingState)
      audio.removeEventListener("ended", nextTrack)
      audio.removeEventListener("error", handleError)
    }
  }, [])

  const playTrack = (index: number) => {
    setCurrentTrackIndex(index)
    const audio = audioRef.current
    if (!audio) return

    const newSrc = `/music/${songs[index].file}`
    audio.src = newSrc
    audio.load()

    setTimeout(() => {
      const playPromise = audio.play()
      if (playPromise !== undefined) {
        playPromise.catch((error: Error) => {
          console.log("[v0] Audio play error:", error.message)
          setIsPlaying(false)
        })
      }
    }, 100)
  }

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (audio.paused) {
      if (!audio.src) {
        playTrack(currentTrackIndex)
      } else {
        setIsPlaying(true)
        const playPromise = audio.play()
        if (playPromise !== undefined) {
          playPromise.catch((error: Error) => {
            console.log("[v0] Audio play error:", error.message)
            setIsPlaying(false)
          })
        }
      }
    } else {
      audio.pause()
      setIsPlaying(false)
    }
  }

  const nextTrack = () => {
    const newIndex = (currentTrackIndex + 1) % songs.length
    playTrack(newIndex)
  }

  const prevTrack = () => {
    const newIndex = (currentTrackIndex - 1 + songs.length) % songs.length
    playTrack(newIndex)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <audio ref={audioRef} />

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/logomain.png"
              alt="Empire State Bulldogs"
              className="md:hidden h-12 w-auto"
              onError={(e) => console.log("[v0] Logo not found at /logomain.png")}
            />
            <span className="hidden md:block text-lg md:text-2xl lg:text-4xl font-bold text-foreground">
              <span className="block">Empire State Bulldogs</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base md:text-lg font-medium text-muted-foreground hover:text-primary transition-colors hover:scale-110 duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 mr-2">
              <button
                onClick={prevTrack}
                className="p-2 hover:bg-primary/20 rounded-full transition-colors"
                aria-label="Previous track"
              >
                <SkipBack size={18} className="text-primary" />
              </button>

              <button
                onClick={togglePlay}
                className="p-2 bg-primary hover:bg-primary/90 rounded-full transition-colors shadow-lg shadow-primary/40"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <Pause size={18} className="text-white fill-white" />
                ) : (
                  <Play size={18} className="text-white fill-white" />
                )}
              </button>

              <button
                onClick={nextTrack}
                className="p-2 hover:bg-primary/20 rounded-full transition-colors"
                aria-label="Next track"
              >
                <SkipForward size={18} className="text-primary" />
              </button>
            </div>

            <Button asChild variant="outline" className="border-primary border-2 text-primary hover:bg-primary hover:text-primary-foreground hidden xl:flex gap-2 bg-transparent">
              <a href="tel:5189173429" className="flex items-center gap-2">
                <Phone size={18} className="shrink-0" />
                <span className="font-bold">518-917-3429</span>
              </a>
            </Button>

            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>

          {/* Mobile Radio & Menu Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={togglePlay}
              className="p-2 bg-primary hover:bg-primary/90 rounded-full transition-colors shadow-lg shadow-primary/40"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause size={16} className="text-white fill-white" />
              ) : (
                <Play size={16} className="text-white fill-white" />
              )}
            </button>

            <button
              className="text-foreground p-2 transition-transform duration-300 hover:scale-110"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <XIcon size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden py-6 px-4 border-t border-border menu-slide-down">
            <div className="flex flex-col gap-4 items-center text-center">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xl md:text-2xl font-medium text-muted-foreground hover:text-primary transition-all duration-300 py-3 hover:scale-110 menu-item-slide"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <a
                href="tel:5189173429"
                className="text-2xl font-bold text-primary flex items-center gap-3 py-4 menu-item-slide"
                style={{ animationDelay: `${navLinks.length * 50}ms` }}
              >
                <Phone size={24} />
                518-917-3429
              </a>

              <div className="flex gap-6 justify-center pt-4 border-t border-border mt-4 w-full">
                {socialLinks.map((social, index) => {
                  return (
                    <Link
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-accent transition-all duration-300 hover:scale-125 menu-item-slide"
                      style={{ animationDelay: `${(navLinks.length + index) * 50}ms` }}
                      aria-label={social.label}
                    >
                      <social.icon size={28} />
                    </Link>
                  )
                })}
              </div>

              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 mt-4 w-full text-lg py-6 menu-item-slide"
                style={{ animationDelay: `${(navLinks.length + socialLinks.length) * 50}ms` }}
              >
                <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                  Get In Touch
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
