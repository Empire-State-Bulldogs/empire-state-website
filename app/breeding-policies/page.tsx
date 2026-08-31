import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Award, FileText } from "lucide-react"
import type { Metadata } from "next"
import { PageHero, PageBody } from "@/components/page-hero"

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
            <PageHero
                eyebrow="Standards"
                title="Breeding Philosophy"
                intro="Ethical standards, genetic excellence, and the relentless pursuit of the perfect French Bulldog."
            />
            <PageBody>
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
            </PageBody>
            <Footer />
        </main>
    )
}
