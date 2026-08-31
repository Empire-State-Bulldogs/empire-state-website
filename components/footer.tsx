import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"
import { W7StationTag } from "./w7-station-tag"

const footerLinks = {
  explore: [
    { label: "about us", href: "/#about" },
    { label: "stud services", href: "/studs" },
    { label: "king simba stud", href: "/studs/king-simba" },
    { label: "available puppies", href: "/puppies" },
    { label: "nationwide locations", href: "/locations" },
    { label: "gallery", href: "/gallery" },
  ],
  support: [
    { label: "contact us", href: "/#contact" },
    { label: "faq", href: "/faq" },
    { label: "health guarantee", href: "/health-guarantee" },
    { label: "shipping info", href: "/shipping" },
  ],
  legal: [
    { label: "privacy policy", href: "/privacy" },
    { label: "terms of service", href: "/terms" },
    { label: "breeding policies", href: "/breeding-policies" },
  ],
}

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/bankroll_bop93/", label: "instagram" },
  {
    icon: (props: any) => (
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
    ), href: "https://www.tiktok.com/@bankrollbop", label: "tiktok"
  },
]

export function Footer() {
  const year = 2026

  return (
    <footer className="bg-card border-t border-border pt-16 pb-8 md:pt-24 md:pb-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Grid - Centered on all screen sizes */}
        <div className="flex flex-col items-center text-center gap-12 md:gap-16">
          
          {/* Brand/Logo Section */}
          <div className="flex flex-col items-center max-w-xl">
            <Link href="/" className="mb-8 block hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/logo.png"
                alt="Empire State Bulldogs Logo"
                width={120}
                height={120}
                className="rounded-[2.5rem] shadow-2xl shadow-primary/20 bg-background p-2 border border-primary/10"
              />
            </Link>
            <h3 className="text-3xl md:text-5xl font-black mb-6 text-foreground capitalize tracking-tight">empire state bulldogs</h3>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 font-medium leading-relaxed">
              New York&apos;s premier French Bulldog breeder and lifestyle brand, based in Albany, NY.
            </p>
            
            <div className="flex flex-col items-center gap-8">
               <div className="flex gap-6">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 rounded-[1.5rem] bg-secondary flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-8 h-8 text-primary group-hover:text-primary transition-colors" />
                  </Link>
                ))}
              </div>
              <a
                href="tel:5189173429"
                className="text-2xl md:text-3xl font-black text-primary hover:text-primary/80 transition-all hover:scale-105"
              >
                518-917-3429
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 w-full max-w-5xl">
            {/* Explore */}
            <div className="col-span-1">
              <h4 className="text-xl md:text-2xl font-black text-foreground mb-6 capitalize tracking-tight">explore</h4>
              <ul className="space-y-4">
                {footerLinks.explore.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-lg md:text-xl text-muted-foreground hover:text-primary transition-colors font-medium capitalize">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="col-span-1">
              <h4 className="text-xl md:text-2xl font-black text-foreground mb-6 capitalize tracking-tight">support</h4>
              <ul className="space-y-4">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-lg md:text-xl text-muted-foreground hover:text-primary transition-colors font-medium capitalize">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-xl md:text-2xl font-black text-foreground mb-6 capitalize tracking-tight">legal</h4>
              <ul className="space-y-4">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-lg md:text-xl text-muted-foreground hover:text-primary transition-colors font-medium capitalize">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-20 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center text-center gap-6">
            <p className="text-lg md:text-xl text-muted-foreground font-medium capitalize tracking-tight">
              © {year} empire state bulldogs. <br className="md:hidden" /> all rights reserved.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground font-medium capitalize tracking-tight italic">proudly serving new york state and beyond</p>
          </div>
          <W7StationTag />
        </div>
      </div>
    </footer>
  )
}
