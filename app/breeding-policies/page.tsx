import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Award, FileText } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
    alternates: {
        canonical: "/breeding-policies/",
    },
    title: "Breeding Policies & Ethics",
    description: "Learn how Empire State Bulldogs approaches health testing, responsible breeding, approved stud services, and family placement in Albany, NY.",
}

export default function BreedingPoliciesPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Header />
            <div className="container mx-auto px-4 py-32 md:py-40">
                <div className="text-center mb-16">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Heart className="w-10 h-10 text-primary" />
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Breeding Philosophy</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                        Ethical standards, genetic excellence, and the relentless pursuit of the perfect French Bulldog.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-12">
                    <section className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                                <Award className="text-primary" />
                                Quality Over Quantity
                            </h2>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                We are a small-batch, private breeding program. We do not participate in large-scale breeding. Our focus is the health, temperament, and structural integrity of our dogs. Each litter is carefully planned to improve the breed.
                            </p>
                        </div>
                        <div className="bg-secondary rounded-2xl p-8 border border-border">
                            <h3 className="text-xl font-bold mb-4">Our Priorities</h3>
                            <ul className="space-y-3 text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary font-bold">01.</span> Health & Genetic Testing
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary font-bold">02.</span> Structural Soundness
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary font-bold">03.</span> Family-Friendly Temperament
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary font-bold">04.</span> Rare & Exotic Colors
                                </li>
                            </ul>
                        </div>
                    </section>

                    <Card className="bg-card border-border rounded-2xl overflow-hidden shadow-xl">
                        <CardContent className="p-8 md:p-12">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <FileText className="text-primary" />
                                Stud Policies
                            </h2>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                Our stud services featuring King Simba are available to approved females only. We require a recent negative Brucellosis test and current vaccination records. We provide detailed contracts for all breeding services.
                            </p>
                            <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                                <h3 className="font-bold mb-2">Notice to Other Breeders</h3>
                                <p className="text-sm text-muted-foreground italic">
                                    We are committed to the preservation and improvement of the French Bulldog breed. We reserve the right to refuse service to any program that does not meet our ethical standards.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <Footer />
        </main>
    )
}
