"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Award, Heart, Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function HeroSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 })

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/EmpireStateBulldogs",
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/EmpireStateBulldogs",
      label: "Instagram",
    },
    {
      icon: Twitter,
      href: "https://x.com/Empire_State_Bulldogs",
      label: "X (Twitter)",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@EmpireStateBulldogs",
      label: "YouTube",
    },
  ]

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/herobg.jpg"
          alt="NYC Skyline with fireworks"
          fill
          className="object-cover object-right-top sm:object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-20 text-center">
        {/* Logo */}
        <div className={`flex justify-center mb-6 md:mb-8 ${isVisible ? "scroll-scale-in" : "opacity-0"}`}>
          <Image
            src="/logomain.png"
            alt="Empire State Bulldogs"
            width={200}
            height={200}
            className="drop-shadow-2xl w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64"
            priority
          />
        </div>

        {/* Headline */}
        <h1
          className={`text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 text-balance ${isVisible ? "scroll-fade-up delay-100" : "opacity-0"}`}
        >
          <span className="text-foreground">New York&apos;s Premier</span>
          <br />
          <span className="text-primary">French Bulldog</span>
          <span className="text-foreground"> Breeder</span>
        </h1>

        {/* Subheadline */}
        <p
          className={`text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 md:mb-8 text-pretty ${isVisible ? "scroll-fade-up delay-200" : "opacity-0"}`}
        >
          A lifestyle brand dedicated to breeding excellence, professional care, and building a passionate community of
          dog lovers in Albany, NY and beyond.
        </p>

        {/* Trust Badges */}
        <div
          className={`flex flex-wrap justify-center gap-3 md:gap-6 mb-8 md:mb-10 ${isVisible ? "scroll-fade-up delay-300" : "opacity-0"}`}
        >
          <div className="flex items-center gap-2 text-sm md:text-base text-muted-foreground hover:scale-110 transition-transform duration-300">
            <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            <span>Albany, NY</span>
          </div>
          <div className="flex items-center gap-2 text-sm md:text-base text-muted-foreground hover:scale-110 transition-transform duration-300">
            <Award className="w-4 h-4 md:w-5 md:h-5 text-accent" />
            <span>Health Guaranteed</span>
          </div>
          <div className="flex items-center gap-2 text-sm md:text-base text-muted-foreground hover:scale-110 transition-transform duration-300">
            <Heart className="w-4 h-4 md:w-5 md:h-5 text-accent" />
            <span>Family Raised</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-2 md:gap-3 justify-center mb-8 md:mb-10 max-w-xs sm:max-w-none mx-auto ${isVisible ? "scroll-fade-up delay-400" : "opacity-0"}`}
        >
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover-lift">
            <Link href="#studs">View Our Studs</Link>
          </Button>
          <Button asChild size="lg" className="border-2 border-primary bg-primary/10 text-primary hover-lift">
            <Link href="#puppies">Available Puppies</Link>
          </Button>
        </div>

        <div className={`flex justify-center gap-4 md:gap-6 ${isVisible ? "scroll-fade-up delay-500" : "opacity-0"}`}>
          {socialLinks.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 hover:scale-110 transition-all duration-300 hover-lift"
              aria-label={social.label}
            >
              {React.createElement(social.icon, {
                className: "w-6 h-6 md:w-7 md:h-7 text-primary",
              })}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
