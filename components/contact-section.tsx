"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Copy, Check, Phone, MapPin, Clock, Plane } from "lucide-react"
import { CapitalPattern } from "@/components/capital-pattern"

// Contact block.
//
// The card had an email pill and a phone pill of different heights, three
// buttons at three different widths under them, and `break-all` on the
// address, which split it mid-word as
// "hello@empirestatebull / dogs.com". The headings also ran to 9rem, which
// pushed the actual contact details most of a screen down.
//
// It is now two symmetric columns: each has a label, a value, and one primary
// action, so the two halves mirror each other and every control lines up.
export function ContactSection() {
  const email = "hello@empirestatebulldogs.com"
  const phoneDisplay = "518-917-3429"
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard can be blocked; the address is selectable either way */
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-background py-16 md:py-24">
      <CapitalPattern variant="skyline" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center md:mb-14">
            <span className="text-xs font-black uppercase tracking-[0.22em] text-primary">
              Get in touch
            </span>
            <h2 className="mt-3 text-4xl font-black capitalize leading-[1.05] tracking-tight text-foreground md:text-6xl">
              Let&apos;s connect
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Interested in a puppy, stud services, or just want to learn more?
              We&apos;d love to hear from you.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            {/* Two mirrored columns: label, value, action. */}
            <div className="grid gap-px bg-border md:grid-cols-2">
              {/* Email */}
              <div className="flex flex-col bg-card p-6 md:p-8">
                <div className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-xs font-black uppercase tracking-[0.18em] text-primary">
                    Email
                  </span>
                </div>

                {/* break-words, not break-all: the address wraps at the @ or a
                    dot rather than through the middle of a word. */}
                <a
                  href={`mailto:${email}`}
                  className="mt-4 block break-words text-lg font-black leading-snug text-foreground transition-colors hover:text-primary sm:text-xl"
                >
                  {email}
                </a>

                <div className="mt-auto flex gap-3 pt-6">
                  <Button
                    asChild
                    className="h-12 flex-1 rounded-xl bg-primary text-base font-black text-white hover:bg-primary/90"
                  >
                    <a href={`mailto:${email}`}>Email Now</a>
                  </Button>
                  <Button
                    onClick={copyToClipboard}
                    variant="outline"
                    aria-label={copied ? "Address copied" : "Copy email address"}
                    className="h-12 w-12 shrink-0 rounded-xl border-border bg-secondary p-0 text-foreground hover:bg-secondary/80"
                  >
                    {copied ? (
                      <Check className="h-5 w-5 text-primary" aria-hidden="true" />
                    ) : (
                      <Copy className="h-5 w-5" aria-hidden="true" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col bg-card p-6 md:p-8">
                <div className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-xs font-black uppercase tracking-[0.18em] text-primary">
                    Phone
                  </span>
                </div>

                <a
                  href="tel:5189173429"
                  className="mt-4 block text-2xl font-black tabular-nums leading-snug text-foreground transition-colors hover:text-primary sm:text-3xl"
                >
                  {phoneDisplay}
                </a>

                <div className="mt-auto pt-6">
                  <Button
                    asChild
                    className="h-12 w-full rounded-xl bg-primary text-base font-black text-white hover:bg-primary/90"
                  >
                    <a href="tel:5189173429" className="flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4 fill-white" aria-hidden="true" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Detail rail */}
            <div className="grid gap-px border-t border-border bg-border sm:grid-cols-3">
              {[
                { Icon: MapPin, label: "Location", value: "Albany, NY & beyond" },
                { Icon: Clock, label: "Response time", value: "Usually within 24 hours" },
                { Icon: Plane, label: "Service area", value: "Nationwide shipping" },
              ].map(({ Icon, label, value }) => (
                <div key={label} className="bg-card px-6 py-5">
                  <div className="flex items-center gap-2">
                    <Icon className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-[11px] font-black uppercase tracking-[0.16em] text-muted-foreground">
                      {label}
                    </span>
                  </div>
                  <p className="mt-1.5 text-[15px] font-semibold text-foreground">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
