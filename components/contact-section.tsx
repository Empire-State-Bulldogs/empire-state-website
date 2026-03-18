"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Copy, Check, Phone } from "lucide-react"
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
        <div className="text-center mb-20 md:mb-32">
          <span className="text-primary text-xl md:text-2xl font-black tracking-tight mb-6 block lowercase">
            get in touch
          </span>
          <h2 className="text-6xl md:text-8xl lg:text-[9rem] font-black mt-4 mb-10 text-foreground leading-[1.1] tracking-tight italic lowercase">
            let&apos;s connect
          </h2>
          <p className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground max-w-5xl mx-auto text-pretty font-medium leading-[1.4]">
            Whether you&apos;re interested in a puppy, stud services, or just want to learn more about Empire State
            Bulldogs, we&apos;d love to hear from you.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-card border-border overflow-hidden rounded-2xl shadow-2xl shadow-primary/10">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-[2rem] flex items-center justify-center mx-auto mb-10 border border-primary/20 shadow-xl shadow-primary/10">
                <Mail className="w-12 h-12 text-primary" />
              </div>

              <h3 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-foreground tracking-tight leading-tight lowercase">send us an email</h3>
              <p className="text-muted-foreground mb-12 text-2xl font-medium leading-relaxed max-w-2xl mx-auto">
                The fastest way to get in touch with our team for inquiries and support.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                {/* Email Column */}
                <div className="flex-1 w-full space-y-4">
                  <div className="flex items-center gap-4 bg-secondary px-8 py-6 rounded-2xl border border-border overflow-hidden">
                    <Mail className="w-6 h-6 text-primary shrink-0" />
                    <span className="text-foreground font-black text-xl truncate">{email}</span>
                  </div>
                  <div className="flex gap-6">
                    <Button
                      onClick={copyToClipboard}
                      className="flex-1 bg-secondary hover:bg-secondary/80 text-foreground border border-border h-16 rounded-2xl transition-all font-black text-lg"
                    >
                      {copied ? (
                        <><Check className="w-5 h-5 mr-3 text-green-500" />Copied</>
                      ) : (
                        <><Copy className="w-5 h-5 mr-3" />Copy</>
                      )}
                    </Button>
                    <Button asChild className="flex-1 bg-primary text-white hover:bg-primary/90 h-16 rounded-2xl font-black text-lg">
                      <a href={`mailto:${email}`}>Email Now</a>
                    </Button>
                  </div>
                </div>

                {/* Phone Column */}
                <div className="flex-1 w-full space-y-4">
                  <div className="flex items-center gap-4 bg-secondary px-8 py-6 rounded-2xl border border-border overflow-hidden">
                    <Phone className="w-6 h-6 text-primary shrink-0" />
                    <span className="text-foreground font-black text-xl truncate">518-917-3429</span>
                  </div>
                  <Button asChild size="lg" className="w-full bg-primary text-white hover:bg-primary/90 h-16 rounded-2xl shadow-xl shadow-primary/30 font-black text-xl">
                    <a href="tel:5189173429" className="flex items-center justify-center gap-3">
                      <Phone className="w-5 h-5 fill-white" />
                      Call Now
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
