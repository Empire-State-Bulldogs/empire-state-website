"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Copy, Check } from "lucide-react"
import { BackgroundElements } from "@/components/background-elements"

export function ContactSection() {
  const email = "hello@empirestatebulldogs.com"
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-24 bg-background scattered-background">
      <BackgroundElements />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-base md:text-xl font-semibold uppercase tracking-wider">Contact Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 text-foreground">Let&apos;s Connect</h2>
          <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Whether you&apos;re interested in a puppy, stud services, or just want to learn more about Empire State
            Bulldogs, we&apos;d love to hear from you.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-card border-border overflow-hidden rounded-2xl shadow-2xl shadow-primary/10">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <Mail className="w-10 h-10 text-primary" />
              </div>

              <h3 className="text-2xl md:text-4xl font-bold mb-4 text-foreground">Send Us an Email</h3>
              <p className="text-muted-foreground mb-8 text-xl">
                The fastest way to get in touch with our team for inquiries and support.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="flex items-center gap-3 bg-secondary px-6 py-4 rounded-xl border border-border w-full sm:w-auto overflow-hidden">
                  <span className="text-foreground font-medium truncate">{email}</span>
                </div>

                <div className="flex gap-4 w-full sm:w-auto">
                  <Button
                    onClick={copyToClipboard}
                    className="flex-1 sm:flex-none bg-secondary hover:bg-secondary/80 text-foreground border border-border h-14 px-6 rounded-xl transition-all"
                  >
                    {copied ? (
                      <>
                        <Check className="w-5 h-5 mr-2 text-green-500" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-5 h-5 mr-2" />
                        Copy
                      </>
                    )}
                  </Button>

                  <Button asChild className="flex-1 sm:flex-none bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 rounded-xl shadow-lg shadow-primary/20">
                    <a href={`mailto:${email}`}>
                      Email Now
                    </a>
                  </Button>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-border/50 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-bold text-foreground mb-2">Location</h4>
                  <p className="text-muted-foreground">Albany, NY & Beyond</p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Response Time</h4>
                  <p className="text-muted-foreground">Usually within 24 hours</p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Service Area</h4>
                  <p className="text-muted-foreground">Nationwide Shipping Available</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
