import { Shield, Stethoscope, Users, Trophy } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Shield,
    title: "Health Guaranteed",
    description: "All puppies come with up-to-date vaccinations, deworming, and comprehensive health guarantees.",
  },
  {
    icon: Stethoscope,
    title: "Veterinary Care",
    description: "Professional veterinary oversight ensures the highest standards of health and well-being.",
  },
  {
    icon: Users,
    title: "Community Focused",
    description: "Join our passionate community of dog lovers through events, shows, and meetups.",
  },
  {
    icon: Trophy,
    title: "Breeding Excellence",
    description: "We specialize in French Bulldogs with exceptional lineage, temperament, and conformation.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">About Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-card-foreground">
            More Than a Breeder — A Lifestyle Brand
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Empire State Bulldogs is dedicated to the highest standards of dog care, breeding excellence, and community
            engagement. Based in Albany, NY, we serve dog lovers within a 500-mile radius.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-card-foreground">Our Story</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              What started as a passion for French Bulldogs has grown into New York State&apos;s premier breeding
              program. We believe every puppy deserves the best start in life, which is why we invest in professional
              veterinary care, nutrition, and early socialization.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Our commitment goes beyond breeding — we&apos;re building a community. From dog shows and breeder events
              to community meetups, Empire State Bulldogs brings together people who share our love for these incredible
              companions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you&apos;re looking for your next family member, seeking stud services, or want to connect with
              fellow enthusiasts, you&apos;ve found your home.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-secondary rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Mile Service Radius</div>
            </div>
            <div className="bg-secondary rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Health Guaranteed</div>
            </div>
            <div className="bg-secondary rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Lifetime Support</div>
            </div>
            <div className="bg-secondary rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-accent mb-2">5★</div>
              <div className="text-sm text-muted-foreground">Customer Reviews</div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-secondary border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2 text-card-foreground">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
