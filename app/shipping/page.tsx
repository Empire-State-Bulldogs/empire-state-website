import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Plane, Truck, Globe } from "lucide-react"
import type { Metadata } from "next"
import { PageHero, PageBody } from "@/components/page-hero"

export const metadata: Metadata = {
    title: "Puppy Shipping & Delivery",
    description: "How we deliver French Bulldog puppies nationwide: flight nanny service, climate-controlled ground transport, and what to expect on delivery day.",
    alternates: {
        canonical: "/shipping/",
    },
}

export default function ShippingPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Header />
            <PageHero
                eyebrow="Delivery"
                title="Shipping Info"
                intro="Flight nanny and climate-controlled ground transport, nationwide."
            />
            <PageBody>
                <div className="max-w-4xl mx-auto grid gap-8">
                    <Card className="bg-card border-border rounded-2xl overflow-hidden shadow-xl">
                        <CardContent className="p-8 md:p-12">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <Plane className="text-primary" />
                                Flight Nanny Service
                            </h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                This is our premier and most popular shipping method. A professional flight nanny will carry your puppy in the cabin of the airplane, providing constant care, attention, and cuddles throughout the journey.
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                <li>Personalized in-cabin care</li>
                                <li>Hand-delivery at your nearest major airport</li>
                                <li>Real-time updates and photos during travel</li>
                                <li>Stress-free experience for the puppy</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="bg-card border-border rounded-2xl overflow-hidden shadow-xl">
                        <CardContent className="p-8 md:p-12">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <Truck className="text-primary" />
                                Ground Transport
                            </h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                For destinations within a reasonable driving distance, we work with trusted pet transport companies that provide climate-controlled vehicles and regularly scheduled stops for exercise and hydration.
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                <li>Door-to-door delivery</li>
                                <li>Climate-controlled environments</li>
                                <li>Professional handlers with animal care experience</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="bg-card border-border rounded-2xl overflow-hidden shadow-xl">
                        <CardContent className="p-8 md:p-12">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <Globe className="text-primary" />
                                Local Pickup
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                You are always welcome to visit us in Albany, NY to pick up your puppy in person! We love meeting our puppies&apos; new families.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </PageBody>
            <Footer />
        </main>
    )
}
