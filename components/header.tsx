"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#studs", label: "Stud Services" },
  { href: "#puppies", label: "Puppies" },
  { href: "#gallery", label: "Gallery" },
  { href: "#events", label: "Events" },
  { href: "#contact", label: "Contact" },
]

const socialLinks = [
  { href: "https://www.facebook.com/EmpireStateBulldogs", icon: Facebook, label: "Facebook" },
  { href: "https://www.instagram.com/EmpireStateBulldogs", icon: Instagram, label: "Instagram" },
  { href: "https://x.com/Empire_State_Bulldogs", icon: Twitter, label: "X" },
  { href: "https://www.youtube.com/@EmpireStateBulldogs", icon: Youtube, label: "YouTube" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-lg md:text-2xl lg:text-4xl font-bold text-foreground">
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

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>

          <button
            className="lg:hidden text-foreground p-2 transition-transform duration-300 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
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

              <div className="flex gap-6 justify-center pt-4 border-t border-border mt-4 w-full">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
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
                      <Icon size={28} />
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
