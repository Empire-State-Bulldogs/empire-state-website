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
      className="relative min-h-screen flex items-center justify-center pt-12 md:pt-16 overflow-hidden"
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
      <div className="relative z-10 container mx-auto px-3 sm:px-4 py-8 md:py-12 text-center flex flex-col items-center justify-center">
        {/* Logo */}
        <div className={`flex justify-center mb-3 sm:mb-4 md:mb-6 ${isVisible ? "scroll-scale-in" : "opacity-0"}`}>
          <Image
            src="/logomain.png"
            alt="Empire State Bulldogs"
            width={200}
            height={200}
            className="drop-shadow-2xl w-44 sm:w-48 md:w-56 lg:w-64 h-auto"
            priority
          />
        </div>

        {/* Headline */}
        <h1
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-4 text-balance px-2 ${isVisible ? "scroll-fade-up delay-100" : "opacity-0"}`}
        >
          <span className="text-foreground">New York's Premier</span>
          <br />
          <span className="text-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">French Bulldogs</span>
        </h1>

        <p
          className={`text-base sm:text-lg md:text-lg lg:text-xl text-white max-w-md sm:max-w-xl md:max-w-2xl mx-auto mb-4 sm:mb-5 md:mb-6 text-pretty px-5 sm:px-6 md:px-3 py-4 sm:py-4 md:py-2 rounded-2xl md:rounded-3xl text-stroke ${isVisible ? "scroll-fade-up delay-200" : "opacity-0"}`}
          style={{
            background: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(4px)",
          }}
        >
          A lifestyle brand dedicated to breeding excellence, professional care, and building a passionate community of
          dog lovers in Albany, NY and beyond.
        </p>

        {/* Trust Badges */}
        <div
          className={`flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-5 sm:mb-6 md:mb-8 px-2 ${isVisible ? "scroll-fade-up delay-300" : "opacity-0"}`}
        >
          <div className="flex items-center gap-2 text-sm sm:text-base md:text-base text-white text-stroke hover:scale-110 transition-transform duration-300">
            <MapPin className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
            <span>Albany, NY</span>
          </div>
          <div className="flex items-center gap-2 text-sm sm:text-base md:text-base text-white text-stroke hover:scale-110 transition-transform duration-300">
            <Award className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 text-accent flex-shrink-0" />
            <span>Health Guaranteed</span>
          </div>
          <div className="flex items-center gap-2 text-sm sm:text-base md:text-base text-white text-stroke hover:scale-110 transition-transform duration-300">
            <Heart className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 text-accent flex-shrink-0" />
            <span>Family Raised</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-row flex-wrap gap-3 sm:gap-3 justify-center mb-5 sm:mb-6 md:mb-8 w-full sm:w-auto max-w-md sm:max-w-none px-2 sm:px-0 ${isVisible ? "scroll-fade-up delay-400" : "opacity-0"}`}
        >
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover-lift text-base sm:text-lg flex-1 sm:flex-initial min-w-[140px]"
          >
            <Link href="#studs">View Our Studs</Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover-lift text-base sm:text-lg flex-1 sm:flex-initial min-w-[140px]"
          >
            <Link href="#puppies">Available Puppies</Link>
          </Button>
        </div>

        {/* Social Links */}
        <div
          className={`flex justify-center gap-3 sm:gap-4 md:gap-6 ${isVisible ? "scroll-fade-up delay-500" : "opacity-0"}`}
        >
          {socialLinks.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 hover:scale-110 transition-all duration-300 hover-lift flex-shrink-0"
              aria-label={social.label}
            >
              {React.createElement(social.icon, {
                className: "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary",
              })}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
