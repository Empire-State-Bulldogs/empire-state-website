"use client"

import { useEffect } from "react"

export function InstagramGallery() {
  useEffect(() => {
    // Load Instagram's embed script
    const script = document.createElement("script")
    script.src = "//www.instagram.com/embed.js"
    script.async = true
    document.body.appendChild(script)

    // If Instagram is already loaded, process embeds
    if ((window as any).instgrm) {
      ;(window as any).instgrm.Embeds.process()
    }

    return () => {
      // Cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return (
    <section id="instagram" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary text-xs md:text-sm font-semibold uppercase tracking-wider">Follow Us</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2 mb-4 text-foreground">Instagram Feed</h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto text-pretty">
            Stay updated with the latest from Empire State Bulldogs on Instagram
          </p>
          <a
            href="https://www.instagram.com/bankroll_bop93/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
          >
            Visit Our Instagram
          </a>
        </div>

        {/* Instagram Embed */}
        <div className="flex justify-center">
          <iframe
            src="https://www.instagram.com/bankroll_bop93/embed"
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
            allowTransparency
            className="max-w-md md:max-w-2xl"
          />
        </div>
      </div>
    </section>
  )
}
