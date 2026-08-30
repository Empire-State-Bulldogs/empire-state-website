import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Plane, Truck, Globe } from "lucide-react"
import type { Metadata } from "next"

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
            <div className="container mx-auto px-4 py-32 md:py-40">
                <div className="text-center mb-16">
                    <div className="flex justify-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <Plane className="w-6 h-6 text-primary" />
                        </div>
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <Truck className="w-6 h-6 text-primary" />
                        </div>
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <Globe className="w-6 h-6 text-primary" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Nationwide Delivery</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                        Safe and stress-free transport for your new family member, wherever you are in the USA.
                    </p>
                </div>

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
            </div>
            <Footer />
        </main>
    )
}
