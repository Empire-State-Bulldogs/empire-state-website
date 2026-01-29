"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users } from "lucide-react"

const dogbones = [
  { id: 1, top: "10%", left: "5%", delay: 0, duration: 8 },
  { id: 2, top: "20%", right: "8%", delay: 1, duration: 10 },
  { id: 3, top: "45%", left: "12%", delay: 0.5, duration: 12 },
  { id: 4, top: "60%", right: "10%", delay: 1.5, duration: 9 },
  { id: 5, bottom: "15%", left: "8%", delay: 0.8, duration: 11 },
  { id: 6, bottom: "25%", right: "5%", delay: 1.2, duration: 13 },
  { id: 7, top: "75%", left: "50%", delay: 0.3, duration: 10 },
]

export function EventsSection() {
  return (
    <section id="events" className="py-16 md:py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <style>{`
          @keyframes dogboneFloat1 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-30px) rotate(5deg); } }
          @keyframes dogboneFloat2 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(20px) rotate(-8deg); } }
          @keyframes dogboneFloat3 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-25px) rotate(12deg); } }
          @keyframes dogboneFloat4 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(25px) rotate(-10deg); } }
          @keyframes dogboneFloat5 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-20px) rotate(7deg); } }
          @keyframes dogboneFloat6 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(30px) rotate(-15deg); } }
          @keyframes dogboneFloat7 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-15px) rotate(10deg); } }
          .dogbone { position: absolute; width: 60px; height: 60px; }
        `}</style>
        {dogbones.map((bone) => (
          <div
            key={bone.id}
            className="dogbone"
            style={{
              top: bone.top,
              bottom: bone.bottom,
              left: bone.left,
              right: bone.right,
              animation: `dogboneFloat${bone.id} ${bone.duration}s ease-in-out infinite`,
              animationDelay: `${bone.delay}s`,
            }}
          >
            <Image
              src="/images/dogbone.png"
              alt="dogbone"
              width={60}
              height={60}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <span className="text-primary text-base md:text-lg font-semibold uppercase tracking-wider">Events</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 text-card-foreground">Coming Soon</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            We're planning some exciting events, shows, and workshops! Check back soon for announcements about upcoming
            opportunities to connect with our community and meet the bulldogs.
          </p>
        </div>

        <Card className="bg-secondary border-border mb-8 md:mb-12">
          <CardContent className="p-8 md:p-12 text-center">
            <div className="mb-4">
              <Users className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto mb-4" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-card-foreground">Events Coming Soon</h3>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-xl mx-auto">
              We're planning exciting meetups, dog shows, and workshops! To stay updated on upcoming events, follow us
              on social media or reach out directly.
            </p>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 text-base md:text-lg">
              <Link href="#contact">Contact Us for Event Updates</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Stay Connected CTA */}
        <div className="bg-primary/10 rounded-lg md:rounded-2xl p-6 md:p-12 text-center border border-primary/20">
          <Users className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-card-foreground">Stay Connected</h3>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-6">
            Follow us on social media for event updates, puppy announcements, and behind-the-scenes content from Empire
            State Bulldogs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 text-base md:text-lg">
              <Link href="https://www.instagram.com/bankroll_bop93/" target="_blank">
                Follow on Instagram
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 bg-transparent text-base md:text-lg"
            >
              <Link href="https://www.tiktok.com/@bankrollbop" target="_blank">
                Follow on TikTok
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
