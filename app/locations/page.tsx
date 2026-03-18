import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { MapPin, Plane, ShieldCheck, Mail } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Service Areas | Empire State Bulldogs Nationwide Delivery",
  description: "Empire State Bulldogs serves a 500-mile radius around Albany NY including NYC, NJ, PA, CT, and MA, plus nationwide flight nanny service to CA, TX, FL, and more.",
  keywords: [
    "french bulldog breeder locations", 
    "french bulldogs Albany NY", 
    "french bulldogs NYC", 
    "frenchie puppies New Jersey", 
    "frenchie puppies Pennsylvania",
    "frenchie puppies Connecticut",
    "frenchie puppies Massachusetts",
    "french bulldogs Los Angeles",
    "french bulldogs Miami",
    "french bulldogs Texas",
    "french bulldogs Chicago",
    "flight nanny french bulldog",
    "nationwide french bulldog delivery"
  ]
}

const localAreas = [
  {
    state: "New York",
    cities: ["Albany", "New York City (NYC)", "Buffalo", "Rochester", "Syracuse", "Yonkers", "White Plains", "Saratoga Springs", "Long Island"],
  },
  {
    state: "New Jersey",
    cities: ["Newark", "Jersey City", "Paterson", "Elizabeth", "Hoboken", "Cherry Hill", "Trenton"],
  },
  {
    state: "Pennsylvania",
    cities: ["Philadelphia", "Pittsburgh", "Allentown", "Erie", "Reading", "Scranton"],
  },
  {
    state: "Connecticut",
    cities: ["Bridgeport", "New Haven", "Stamford", "Hartford", "Waterbury", "Norwalk"],
  },
  {
    state: "Massachusetts",
    cities: ["Boston", "Worcester", "Springfield", "Cambridge", "Lowell", "Brockton"],
  },
]

const nationalAreas = [
  {
    state: "California",
    cities: ["Los Angeles", "San Francisco", "San Diego", "Sacramento", "San Jose", "Beverly Hills"],
  },
  {
    state: "Texas",
    cities: ["Houston", "Austin", "Dallas", "San Antonio", "Fort Worth"],
  },
  {
    state: "Florida",
    cities: ["Miami", "Orlando", "Tampa", "Jacksonville", "Tallahassee", "Boca Raton"],
  },
  {
    state: "Illinois",
    cities: ["Chicago", "Aurora", "Naperville", "Joliet", "Springfield"],
  },
  {
    state: "Georgia",
    cities: ["Atlanta", "Savannah", "Augusta", "Columbus", "Macon"],
  },
]

export default function LocationsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* HERO */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-background overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, hsl(var(--primary)) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(var(--accent)) 0%, transparent 50%)'}} />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 rounded-full px-5 py-2 text-sm font-black uppercase tracking-widest mb-8">
            <MapPin className="w-4 h-4" />
            Nationwide Reach
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-foreground leading-[1.2] tracking-tight capitalize">
            locations we <br className="md:hidden" />
            <span className="text-primary italic">serve</span>
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 font-medium leading-relaxed">
            Based in Albany, NY, Empire State Bulldogs proudly serves the entire Northeast with a tight 500-mile breeding network. Beyond that? Our exclusive flight nanny service brings world-class Frenchies right to your closest major airport anywhere in the USA.
          </p>
        </div>
      </section>

      {/* LOCAL RADIUS (500 MILES) */}
      <section className="py-20 bg-secondary border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6 tracking-tight capitalize">the 500-mile network</h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
              We frequently hand-deliver and arrange meetups throughout New York, New Jersey, Pennsylvania, Connecticut, and Massachusetts. Our stud services are also highly active in these regions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {localAreas.map((area) => (
              <div key={area.state} className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all shadow-lg hover:shadow-primary/5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-3xl font-black text-foreground capitalize tracking-tight">{area.state}</h3>
                </div>
                <ul className="space-y-3">
                  {area.cities.map((city) => (
                     <li key={city} className="flex items-center text-lg md:text-xl font-medium text-muted-foreground before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary before:mr-3">
                       {city}
                     </li>
                  ))}
                  <li className="text-primary font-bold italic pt-2 capitalize">and surrounding areas</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NATIONWIDE DELIVERY & FLIGHT NANNY */}
      <section className="py-20 bg-background border-b border-border/50">
        <div className="container mx-auto px-4">
           <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
             <div className="flex-1 text-center lg:text-left">
               <div className="inline-flex items-center gap-2 bg-accent/10 text-accent border border-accent/20 rounded-full px-5 py-2 text-sm font-black uppercase tracking-widest mb-6">
                 <Plane className="w-4 h-4" />
                 Flight Nanny Delivery
               </div>
               <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6 tracking-tight capitalize">coast to coast <br />delivery</h2>
               <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium mb-8">
                 Don't let distance stop you from finding your absolute dream Frenchie. Our trusted flight nannies fly exclusively in-cabin with your puppy, providing VIP one-on-one care from our arms in Albany directly into yours at your nearest major airport. 
               </p>
               <ul className="space-y-4 mb-8 text-left inline-block lg:block">
                  <li className="flex items-center gap-4 text-xl font-medium"><ShieldCheck className="w-6 h-6 text-primary" /> Safe, in-cabin travel only</li>
                  <li className="flex items-center gap-4 text-xl font-medium"><ShieldCheck className="w-6 h-6 text-primary" /> Continuous health monitoring via nanny</li>
                  <li className="flex items-center gap-4 text-xl font-medium"><ShieldCheck className="w-6 h-6 text-primary" /> Stress-free handover at baggage claim</li>
               </ul>
             </div>

             <div className="flex-1 w-full relative">
                <div className="grid md:grid-cols-2 gap-6">
                  {nationalAreas.map((area) => (
                    <div key={area.state} className="bg-secondary border border-border rounded-xl p-6 hover:border-accent/50 transition-all">
                      <h3 className="text-2xl font-black text-foreground mb-3 capitalize tracking-tight">{area.state}</h3>
                      <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                        {area.cities.join(", ")}
                      </p>
                    </div>
                  ))}
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6 tracking-tight capitalize">ready for your puppy?</h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 font-medium leading-relaxed">
            No matter where you live in the United States, we can make it happen. Reach out to discuss logistics, shipping costs, or meetup availability.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 px-10 py-8 text-xl font-black rounded-[1.5rem] capitalize tracking-tight shadow-xl shadow-primary/20">
               <Link href="/contact">get in touch</Link>
             </Button>
             <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 px-10 py-8 text-xl font-black rounded-[1.5rem] capitalize tracking-tight">
               <a href="mailto:info@empirestatebulldogs.com" className="flex items-center gap-2">
                 <Mail className="w-5 h-5" /> email us
               </a>
             </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
