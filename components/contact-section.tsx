"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react"
import { BackgroundElements } from "@/components/background-elements"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  return (
    <section id="contact" className="py-24 bg-background scattered-background">
      <BackgroundElements />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-base md:text-lg font-semibold uppercase tracking-wider">Contact Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-foreground">Let&apos;s Connect</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Whether you&apos;re interested in a puppy, stud services, or just want to learn more about Empire State
            Bulldogs, we&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6 lg:col-span-1">
            <Card className="bg-card border-border">
              <CardContent className="p-6 flex flex-col sm:flex-row lg:flex-col items-center sm:items-start lg:items-start gap-4 text-center sm:text-left lg:text-left">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-1">Location</h4>
                  <p className="text-muted-foreground text-base md:text-lg">Albany, New York</p>
                  <p className="text-muted-foreground text-base md:text-lg">Serving a 500-mile radius</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6 flex flex-col sm:flex-row lg:flex-col items-center sm:items-start lg:items-start gap-4 text-center sm:text-left lg:text-left">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-1">Email</h4>
                  <a
                    href="mailto:info@empirestatebulldogs.com"
                    className="text-primary text-base md:text-lg hover:underline"
                  >
                    info@empirestatebulldogs.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6 flex flex-col sm:flex-row lg:flex-col items-center sm:items-start lg:items-start gap-4 text-center sm:text-left lg:text-left">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-1">Phone</h4>
                  <a href="tel:+15185551234" className="text-primary text-base md:text-lg hover:underline">
                    (518) 555-1234
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6 flex flex-col sm:flex-row lg:flex-col items-center sm:items-start lg:items-start gap-4 text-center sm:text-left lg:text-left">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-1">Response Time</h4>
                  <p className="text-muted-foreground text-base md:text-lg">We typically respond within 24 hours</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 bg-card border-border">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-card-foreground text-center md:text-left">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-card-foreground">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-secondary border-border text-card-foreground placeholder:text-muted-foreground"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-card-foreground">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-secondary border-border text-card-foreground placeholder:text-muted-foreground"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-card-foreground">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-secondary border-border text-card-foreground placeholder:text-muted-foreground"
                      placeholder="(555) 555-5555"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-card-foreground">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="bg-secondary border-border text-card-foreground placeholder:text-muted-foreground"
                      placeholder="Puppy Inquiry, Stud Service, etc."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-card-foreground">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="bg-secondary border-border text-card-foreground placeholder:text-muted-foreground resize-none"
                    placeholder="Tell us about what you're looking for..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
