import Image from "next/image"
import Link from "next/link"
import { Instagram, Phone, MapPin } from "lucide-react"
import { W7StationTag } from "./w7-station-tag"

// Footer, rebuilt around a real grid.
//
// The previous version stacked everything down a single centred column: a
// 320px logo, then the name, then a paragraph, then socials, then the phone,
// and only then the links. That pushed the actual navigation most of a screen
// below the fold and left the three link columns floating in whitespace with
// nothing tying them together.
//
// This puts the brand in a left-hand identity column and the links in a
// three-column block beside it, so the whole footer reads as one band. On
// mobile it collapses to brand first, then a two-up link grid, which keeps
// the links reachable instead of stranding them under a full-width logo.

const footerLinks = {
  explore: [
    { label: "About Us", href: "/about" },
    { label: "Stud Services", href: "/studs" },
    { label: "King Simba Stud", href: "/studs/king-simba" },
    { label: "Available Puppies", href: "/puppies" },
    { label: "Nationwide Locations", href: "/locations" },
    { label: "Gallery", href: "/gallery" },
  ],
  support: [
    // These pointed at /#contact and /#about, which only work from the home
    // page; the real pages exist, so link them directly.
    { label: "Contact Us", href: "/contact" },
    { label: "FAQ", href: "/faq" },
    { label: "Health Guarantee", href: "/health-guarantee" },
    { label: "Shipping Info", href: "/shipping" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Breeding Policies", href: "/breeding-policies" },
  ],
}

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/bankroll_bop93/",
    label: "Instagram",
  },
  {
    icon: (props: React.SVGProps<SVGSVGElement>) => (
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
    ),
    href: "https://www.tiktok.com/@bankrollbop",
    label: "TikTok",
  },
]

function LinkColumn({
  heading,
  links,
}: {
  heading: string
  links: { label: string; href: string }[]
}) {
  return (
    <div>
      <h3 className="text-xs font-black uppercase tracking-[0.18em] text-primary">
        {heading}
      </h3>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-[15px] text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  // Deliberately a constant, not new Date(): this renders on the server at
  // build time and again on the client, and a value that can differ between
  // the two is exactly what triggers a hydration mismatch.
  const year = 2026

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8 pt-14 pb-8 lg:pt-20 lg:pb-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-20">
          {/* ── Identity ── */}
          <div>
            <Link href="/" className="inline-flex items-center gap-4 group">
              <Image
                src="/images/logo.png"
                alt="Empire State Bulldogs"
                width={512}
                height={512}
                sizes="112px"
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl border border-primary/15 bg-background p-1.5 shadow-lg shadow-primary/10 group-hover:scale-105 transition-transform duration-300"
              />
              <span className="text-2xl sm:text-[1.75rem] font-black leading-[1.05] text-foreground capitalize tracking-tight">
                empire state
                <br />
                bulldogs
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
              New York&apos;s premier French Bulldog breeder and lifestyle
              brand.
            </p>

            {/* Contact: the two things a visitor actually needs from a footer. */}
            <div className="mt-7 space-y-3">
              <a
                href="tel:5189173429"
                className="flex items-center gap-3 text-xl font-black text-primary hover:text-primary/80 transition-colors"
              >
                <Phone size={18} className="shrink-0" aria-hidden="true" />
                518-917-3429
              </a>
              <p className="flex items-center gap-3 text-[15px] text-muted-foreground">
                <MapPin size={18} className="shrink-0" aria-hidden="true" />
                Albany, New York
              </p>
            </div>

            <div className="mt-7 flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center text-primary hover:bg-primary/20 hover:scale-105 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>

          {/* ── Navigation ── */}
          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:gap-x-8"
          >
            <LinkColumn heading="Explore" links={footerLinks.explore} />
            <LinkColumn heading="Support" links={footerLinks.support} />
            {/* Legal is the shortest column, so on a two-up mobile grid it
                spans the full width rather than leaving a ragged gap. */}
            <div className="col-span-2 sm:col-span-1">
              <LinkColumn heading="Legal" links={footerLinks.legal} />
            </div>
          </nav>
        </div>

        {/* ── Bottom rail ── */}
        <div className="mt-14 pt-7 border-t border-border">
          <div className="flex flex-col-reverse items-center gap-6 sm:flex-row sm:justify-between">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              &copy; {year} Empire State Bulldogs. All rights reserved.
            </p>
            <p className="text-sm italic text-muted-foreground text-center sm:text-right">
              Proudly serving New York State and beyond
            </p>
          </div>
          <W7StationTag />
        </div>
      </div>
    </footer>
  )
}
