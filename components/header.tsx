"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  Play, Pause, SkipForward, SkipBack,
  Phone, ChevronDown, Plus, Instagram,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMusic, songs as musicSongs } from "@/context/music-context"
import { MarqueeText } from "@/components/marquee-text"
import { ExpandedPlayer } from "@/components/expanded-player"
import { MobilePlayer } from "@/components/mobile-player"
import { cn } from "@/lib/utils"

// Header, rebuilt.
//
// Two problems with the old one. The logo was rendered at 40px: it is a
// detailed square badge with small type inside, so at that size it read as a
// smudge and the brand name never appeared at all. And the nav was seven flat
// links, which left /faq, /health-guarantee, /breeding-policies and the King
// Simba page unreachable from anywhere in the header.
//
// So: the mark now sits beside a real wordmark, and the deeper pages hang off
// two dropdowns instead of being dropped.

type NavChild = { href: string; label: string; note?: string }
type NavItem = { href: string; label: string; children?: NavChild[] }

const NAV: NavItem[] = [
  { href: "/", label: "Home" },
  {
    href: "/studs",
    label: "Studs",
    children: [
      { href: "/studs", label: "Stud Services", note: "Overview and fees" },
      { href: "/studs/king-simba", label: "King Simba", note: "Our lilac stud" },
    ],
  },
  { href: "/puppies", label: "Puppies" },
  { href: "/gallery", label: "Gallery" },
  {
    href: "/about",
    label: "About",
    children: [
      { href: "/about", label: "Our Story" },
      { href: "/locations", label: "Nationwide Locations" },
      { href: "/health-guarantee", label: "Health Guarantee" },
      { href: "/breeding-policies", label: "Breeding Policies" },
      { href: "/faq", label: "FAQ" },
      { href: "/shipping", label: "Shipping Info" },
    ],
  },
  { href: "/contact", label: "Contact" },
]

const SOCIALS = [
  { href: "https://www.instagram.com/bankroll_bop93/", label: "Instagram", Icon: Instagram },
  {
    href: "https://www.tiktok.com/@bankrollbop",
    label: "TikTok",
    Icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.74a4.85 4.85 0 0 1-1.01-.05Z" />
      </svg>
    ),
  },
]

const PHONE = "518-917-3429"
const PHONE_HREF = "tel:5189173429"
const BAR_H = 72

function Wordmark({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="flex items-center gap-2.5 shrink-0 group"
      aria-label="Empire State Bulldogs, home"
    >
      <Image
        src="/images/logo.png"
        alt=""
        aria-hidden="true"
        width={512}
        height={512}
        priority
        sizes="48px"
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl border border-primary/20 bg-background p-0.5 group-hover:scale-105 transition-transform duration-300"
      />
      {/* The badge alone was unreadable at header scale, so the name is set as
          type beside it and does the identifying. */}
      <span className="leading-[1.05]">
        <span className="block text-[13px] sm:text-sm font-black uppercase tracking-[0.08em] text-foreground">
          Empire State
        </span>
        <span className="block text-[13px] sm:text-sm font-black uppercase tracking-[0.28em] text-primary">
          Bulldogs
        </span>
      </span>
    </Link>
  )
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState<string | null>(null)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [isMobilePlayerOpen, setIsMobilePlayerOpen] = useState(false)
  const pathname = usePathname()

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const scrollY = useRef(0)

  const {
    isPlaying, togglePlay, nextTrack, prevTrack,
    currentTrackIndex, isExpanded, setIsExpanded,
  } = useMusic()

  const currentTrack = musicSongs[currentTrackIndex]

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
    setMobileSection(null)
  }, [])

  // A route change closes every layer. A menu left open across a navigation is
  // the most common way a header feels broken.
  useEffect(() => {
    closeMenu()
    setOpenMenu(null)
  }, [pathname, closeMenu])

  // Lock the page behind the mobile sheet. position:fixed is the only lock
  // iOS Safari honours, and it needs the scroll offset restored by hand.
  useEffect(() => {
    if (!isMenuOpen) return
    scrollY.current = window.scrollY
    const { body } = document
    const prev = { position: body.style.position, top: body.style.top, width: body.style.width }
    body.style.position = "fixed"
    body.style.top = `-${scrollY.current}px`
    body.style.width = "100%"
    return () => {
      body.style.position = prev.position
      body.style.top = prev.top
      body.style.width = prev.width
      window.scrollTo(0, scrollY.current)
    }
  }, [isMenuOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return
      if (isMenuOpen) {
        closeMenu()
        toggleRef.current?.focus()
      }
      setOpenMenu(null)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isMenuOpen, closeMenu])

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120)
  }
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center gap-4" style={{ height: BAR_H }}>
            <Wordmark onClick={closeMenu} />

            {/* ── Desktop nav ── */}
            <nav className="hidden lg:flex items-center ml-4" aria-label="Main">
              {NAV.map((item) => {
                const open = openMenu === item.label
                const active = isActive(item.href)
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => {
                      cancelClose()
                      setOpenMenu(item.label)
                    }}
                    onMouseLeave={scheduleClose}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-1 px-3.5 text-[15px] font-bold transition-colors",
                        active ? "text-primary" : "text-foreground/80 hover:text-foreground",
                      )}
                      style={{ height: BAR_H }}
                      aria-expanded={item.children ? open : undefined}
                    >
                      {item.label}
                      {item.children && (
                        <ChevronDown
                          size={14}
                          className={cn("transition-transform duration-200", open && "rotate-180")}
                          aria-hidden="true"
                        />
                      )}
                    </Link>

                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute left-3.5 right-3.5 bottom-3 h-0.5 bg-primary origin-left transition-transform duration-200",
                        active || open ? "scale-x-100" : "scale-x-0",
                      )}
                    />

                    {item.children && open && (
                      <div
                        className="absolute left-0 top-full min-w-[260px] rounded-xl border border-border bg-card shadow-2xl shadow-black/40 overflow-hidden"
                        onMouseEnter={cancelClose}
                        onMouseLeave={scheduleClose}
                      >
                        <ul className="py-2">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className="block px-4 py-2.5 hover:bg-primary/10 transition-colors group"
                              >
                                <span className="block text-[14px] font-bold text-foreground group-hover:text-primary transition-colors">
                                  {child.label}
                                </span>
                                {child.note && (
                                  <span className="block text-xs text-muted-foreground mt-0.5">
                                    {child.note}
                                  </span>
                                )}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )
              })}
            </nav>

            {/* ── Right cluster ── */}
            <div className="ml-auto flex items-center gap-1 sm:gap-2">
              {/* Compact player. Hidden on small screens, where the tap targets
                  would crowd out the menu button. */}
              <div className="hidden md:flex items-center gap-1 rounded-full border border-border bg-card/60 px-2 py-1.5">
                <button
                  onClick={prevTrack}
                  className="p-1.5 rounded-full hover:bg-primary/15 transition-all active:scale-90"
                  aria-label="Previous track"
                >
                  <SkipBack size={14} className="text-primary" />
                </button>
                <button
                  onClick={togglePlay}
                  className="w-8 h-8 flex items-center justify-center bg-primary rounded-full shadow-md shadow-primary/30 hover:bg-primary/90 transition-all active:scale-90"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying
                    ? <Pause size={13} className="text-white fill-white" />
                    : <Play size={13} className="text-white fill-white ml-0.5" />}
                </button>
                <button
                  onClick={nextTrack}
                  className="p-1.5 rounded-full hover:bg-primary/15 transition-all active:scale-90"
                  aria-label="Next track"
                >
                  <SkipForward size={14} className="text-primary" />
                </button>
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="flex items-center gap-1.5 pl-2 pr-1 border-l border-border ml-1"
                  aria-label="Open player"
                >
                  <MarqueeText
                    active={isPlaying}
                    className="hidden lg:block w-[110px] text-left text-[12px] font-semibold text-foreground"
                  >
                    {currentTrack.title}
                  </MarqueeText>
                  <ChevronDown
                    size={13}
                    className={cn("text-primary shrink-0 transition-transform", isExpanded && "rotate-180")}
                  />
                </button>
              </div>

              <a
                href={PHONE_HREF}
                className="hidden xl:flex items-center gap-2 px-3 py-2 shrink-0 text-foreground/80 hover:text-primary transition-colors"
              >
                <Phone size={16} aria-hidden="true" />
                <span className="font-bold text-sm tabular-nums whitespace-nowrap">{PHONE}</span>
              </a>

              <Button
                asChild
                className="hidden sm:inline-flex rounded-xl bg-primary text-white font-black px-5 hover:bg-primary/90"
              >
                <Link href="/contact">Contact</Link>
              </Button>

              {/* Mobile: the phone number matters more than a Contact link on a
                  device that can dial it. */}
              <a
                href={PHONE_HREF}
                className="sm:hidden grid place-items-center w-11 h-11 rounded-xl text-primary"
                aria-label={`Call ${PHONE}`}
              >
                <Phone size={20} />
              </a>

              {/* Hamburger: three bars folding into an X, drawn from spans so
                  the two states are one object moving rather than a swap. */}
              <button
                ref={toggleRef}
                onClick={() => setIsMenuOpen((v) => !v)}
                className="lg:hidden relative grid place-items-center w-11 h-11 text-foreground"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-nav"
              >
                <span className="relative block w-[22px] h-[14px]" aria-hidden="true">
                  <span className={cn(
                    "absolute left-0 block h-[2px] w-full bg-current transition-all duration-300 ease-out",
                    isMenuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0",
                  )} />
                  <span className={cn(
                    "absolute left-0 top-1/2 -translate-y-1/2 block h-[2px] w-full bg-current transition-all duration-200",
                    isMenuOpen ? "opacity-0 scale-x-0" : "opacity-100",
                  )} />
                  <span className={cn(
                    "absolute left-0 block h-[2px] w-full bg-current transition-all duration-300 ease-out",
                    isMenuOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0",
                  )} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile sheet ──
          Kept mounted and translated so it animates open and shut; a sheet
          that only animates in feels like it snaps closed. */}
      <div
        id="mobile-nav"
        className={cn(
          "lg:hidden fixed inset-x-0 bottom-0 z-40 bg-background overflow-y-auto overscroll-contain transition-transform duration-300 ease-out",
          isMenuOpen ? "translate-y-0" : "-translate-y-full pointer-events-none",
        )}
        style={{ top: BAR_H }}
        aria-hidden={!isMenuOpen}
      >
        <nav className="px-5 py-6" aria-label="Mobile">
          <ul>
            {NAV.map((item) => {
              const expanded = mobileSection === item.label
              return (
                <li key={item.label} className="border-b border-border">
                  <div className="flex items-stretch">
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className={cn(
                        "flex-1 py-4 text-xl font-black",
                        isActive(item.href) ? "text-primary" : "text-foreground",
                      )}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <button
                        onClick={() => setMobileSection(expanded ? null : item.label)}
                        className="grid place-items-center w-12 shrink-0 text-muted-foreground active:text-primary"
                        aria-label={`${expanded ? "Collapse" : "Expand"} ${item.label}`}
                        aria-expanded={expanded}
                      >
                        <Plus
                          size={20}
                          className={cn("transition-transform duration-300", expanded && "rotate-45")}
                          aria-hidden="true"
                        />
                      </button>
                    )}
                  </div>

                  {/* Grid-rows animates to the real height without measuring. */}
                  {item.children && (
                    <div className={cn(
                      "grid transition-all duration-300 ease-out",
                      expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}>
                      <ul className="overflow-hidden">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={closeMenu}
                              className="block py-2.5 pl-4 border-l-2 border-primary/40 text-[15px] font-semibold text-muted-foreground active:text-primary"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                        <li className="h-3" aria-hidden="true" />
                      </ul>
                    </div>
                  )}
                </li>
              )
            })}
          </ul>

          <a
            href={PHONE_HREF}
            className="mt-7 flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-primary text-white font-black uppercase tracking-wider"
          >
            <Phone size={18} aria-hidden="true" />
            {PHONE}
          </a>

          <div className="mt-5 flex justify-center gap-3">
            {SOCIALS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-secondary grid place-items-center text-primary active:bg-primary/20"
                aria-label={label}
              >
                <Icon className="w-5 h-5" aria-hidden="true" />
              </a>
            ))}
          </div>

          {/* Player controls live in the sheet on mobile, where they are cut
              from the bar to keep the tap targets from crowding. */}
          <div className="mt-7 pt-6 border-t border-border md:hidden">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
              Now Playing
            </p>
            <button
              onClick={() => {
                closeMenu()
                setIsMobilePlayerOpen(true)
              }}
              className="mt-2 w-full text-left"
            >
              <MarqueeText active={isPlaying} className="text-lg font-bold text-foreground">
                {currentTrack.title}
              </MarqueeText>
            </button>
            <div className="mt-3 flex items-center gap-3">
              <button onClick={prevTrack} className="p-2.5 rounded-full bg-secondary text-primary" aria-label="Previous track">
                <SkipBack size={18} />
              </button>
              <button
                onClick={togglePlay}
                className="w-12 h-12 grid place-items-center bg-primary rounded-full text-white shadow-lg shadow-primary/30"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause size={18} className="fill-white" /> : <Play size={18} className="fill-white ml-0.5" />}
              </button>
              <button onClick={nextTrack} className="p-2.5 rounded-full bg-secondary text-primary" aria-label="Next track">
                <SkipForward size={18} />
              </button>
            </div>
          </div>

          <div className="h-[env(safe-area-inset-bottom)] min-h-8" aria-hidden="true" />
        </nav>
      </div>

      {/* Both manage their own visibility from music context; ExpandedPlayer
          in particular must stay mounted so its open/close animates. */}
      <ExpandedPlayer />
      <MobilePlayer isOpen={isMobilePlayerOpen} onClose={() => setIsMobilePlayerOpen(false)} />
    </>
  )
}
