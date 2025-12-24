import Link from "next/link"
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

export function EventsSection() {
  return (
    <section id="events" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Events</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-card-foreground">Join Our Community</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Connect with fellow dog lovers at our upcoming events, shows, and workshops throughout New York State.
          </p>
        </div>

        {/* Events List */}
        <div className="grid gap-6 mb-12">
          {events.map((event) => (
            <Card key={event.title} className="bg-secondary border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Date Badge */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-primary/10 rounded-xl flex flex-col items-center justify-center">
                      <Calendar className="w-6 h-6 text-primary mb-1" />
                      <span className="text-xs text-primary font-medium">{event.date.split(",")[0].split(" ")[0]}</span>
                      <span className="text-lg font-bold text-primary">{event.date.split(",")[0].split(" ")[1]}</span>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-xl font-bold text-card-foreground">{event.title}</h3>
                      <Badge variant="outline" className="text-primary border-primary shrink-0">
                        {event.type}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">{event.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
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
                      className="border-primary text-primary hover:bg-primary/10 bg-transparent"
                    >
                      <Link href="#contact">RSVP</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Join Community CTA */}
        <div className="bg-primary/10 rounded-2xl p-8 md:p-12 text-center border border-primary/20">
          <Users className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-card-foreground">Stay Connected</h3>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6">
            Follow us on social media for event updates, puppy announcements, and behind-the-scenes content from Empire
            State Bulldogs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="https://instagram.com" target="_blank">
                Follow on Instagram
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 bg-transparent"
            >
              <Link href="https://facebook.com" target="_blank">
                Join on Facebook
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
