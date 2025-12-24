"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#studs", label: "Stud Services" },
  { href: "#puppies", label: "Puppies" },
  { href: "#gallery", label: "Gallery" },
  { href: "#events", label: "Events" },
  { href: "#contact", label: "Contact" },
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
          <nav className="lg:hidden py-6 px-4 border-t border-border animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col gap-4 items-center text-center">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xl md:text-2xl font-medium text-muted-foreground hover:text-primary transition-all duration-300 py-3 hover:scale-110 animate-in fade-in slide-in-from-left-4"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 mt-4 w-full text-lg py-6 animate-in fade-in slide-in-from-left-4"
                style={{ animationDelay: `${navLinks.length * 50}ms` }}
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
