"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, Users } from "lucide-react"

const events = [
  {
    title: "Empire State Bulldogs Meet & Greet",
    date: "January 15, 2026",
    time: "2:00 PM - 5:00 PM",
    location: "Albany, NY",
    type: "Community",
    description:
      "Join us for our monthly community meetup! Meet fellow Frenchie lovers, socialize your dogs, and enjoy refreshments.",
  },
  {
    title: "French Bulldog Specialty Show",
    date: "February 8, 2026",
    time: "9:00 AM - 6:00 PM",
    location: "Syracuse, NY",
    type: "Dog Show",
    description:
      "Watch top French Bulldogs compete and learn from breed experts. Great opportunity to see breeding quality in action.",
  },
  {
    title: "Puppy Socialization Workshop",
    date: "February 22, 2026",
    time: "11:00 AM - 1:00 PM",
    location: "Albany, NY",
    type: "Workshop",
    description:
      "Learn essential socialization techniques for your new puppy. Led by experienced trainers and breeders.",
  },
]

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
            <Image src="/dogbone.png" alt="dogbone" width={60} height={60} className="w-full h-full object-contain" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <span className="text-primary text-base md:text-lg font-semibold uppercase tracking-wider">Events</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 text-card-foreground">
            Join Our Community
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Connect with fellow dog lovers at our upcoming events, shows, and workshops throughout New York State.
          </p>
        </div>

        {/* Events List */}
        <div className="grid gap-4 md:gap-6 mb-8 md:mb-12">
          {events.map((event) => (
            <Card key={event.title} className="bg-secondary border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-col lg:flex-row lg:items-center gap-4 md:gap-6">
                  {/* Date Badge */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-lg md:rounded-xl flex flex-col items-center justify-center">
                      <Calendar className="w-5 h-5 md:w-6 md:h-6 text-primary mb-1" />
                      <span className="text-base md:text-lg text-primary font-medium">
                        {event.date.split(",")[0].split(" ")[0]}
                      </span>
                      <span className="text-lg md:text-2xl font-bold text-primary">
                        {event.date.split(",")[0].split(" ")[1]}
                      </span>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 md:gap-4 mb-2">
                      <h3 className="text-xl md:text-2xl font-bold text-card-foreground">{event.title}</h3>
                      <Badge variant="outline" className="text-base md:text-lg text-primary border-primary shrink-0">
                        {event.type}
                      </Badge>
                    </div>
                    <p className="text-base md:text-lg text-muted-foreground mb-3 md:mb-4">{event.description}</p>
                    <div className="flex flex-wrap gap-3 md:gap-4 text-base md:text-lg text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex-shrink-0">
                    <Button
                      asChild
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary/10 bg-primary text-white text-base md:text-lg w-full md:w-auto"
                    >
                      <Link href="#contact">RSVP</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Video Section */}
        <div className="bg-secondary rounded-lg md:rounded-2xl p-6 md:p-8 border border-border mb-8 md:mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-card-foreground text-center">
            Watch Our Latest Highlights
          </h3>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {[1, 2, 3, 4, 5, 6, 7].map((videoNum) => (
              <div key={videoNum} className="w-[calc(50%-6px)] md:w-[calc(25%-12px)] lg:w-[calc(25%-12px)]">
                <div className="relative bg-background rounded-lg overflow-hidden">
                  <div className="relative w-full aspect-[9/16] bg-background">
                    <video
                      className="w-full h-full object-cover"
                      controls
                      controlsList="nodownload"
                      suppressHydrationWarning
                      onError={() => console.log("[v0] Video error: freshvid" + videoNum)}
                      onLoadedMetadata={() => console.log("[v0] Video loaded: freshvid" + videoNum)}
                    >
                      <source src={`/freshvid${videoNum}.mp4`} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join Community CTA */}
        <div className="bg-primary/10 rounded-lg md:rounded-2xl p-6 md:p-12 text-center border border-primary/20">
          <Users className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-card-foreground">Stay Connected</h3>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-6">
            Follow us on social media for event updates, puppy announcements, and behind-the-scenes content from Empire
            State Bulldogs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 text-base md:text-lg">
              <Link href="https://www.instagram.com/EmpireStateBulldogs" target="_blank">
                Follow on Instagram
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 bg-transparent text-base md:text-lg"
            >
              <Link href="https://www.facebook.com/EmpireStateBulldogs" target="_blank">
                Join on Facebook
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
