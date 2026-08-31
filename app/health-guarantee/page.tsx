import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { ShieldCheck } from "lucide-react"
import type { Metadata } from "next"
import { PageHero, PageBody } from "@/components/page-hero"

export const metadata: Metadata = {
    alternates: {
        canonical: "/health-guarantee/",
    },
    title: "Puppy Health Guarantee",
    description: "Review the Empire State Bulldogs puppy health guarantee, veterinary examination requirements, coverage, and buyer responsibilities.",
}

export default function HealthGuaranteePage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Header />
            <PageHero
                eyebrow="Our Promise"
                title="Health Guarantee"
                intro="Our commitment to the health and well-being of every puppy that leaves our home."
            />
            <PageBody>
                <div className="max-w-4xl mx-auto">
                    <Card className="bg-card border-border rounded-2xl overflow-hidden shadow-xl mb-12">
                        <CardContent className="p-8 md:p-12 space-y-8">
                            <section>
                                <h2 className="text-2xl font-bold mb-4">1-Year Genetic Guarantee</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Every Empire State Bulldogs puppy comes with a one-year guarantee against life-threatening congenital or hereditary defects. We conduct rigorous health testing on all our breeding stock to ensure the highest quality genetics.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">Initial Veterinary Check</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Before going to their new home, each puppy is thoroughly examined by a licensed veterinarian. They will be up-to-date on all age-appropriate vaccinations and deworming treatments.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">Your Responsibility</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    To maintain this guarantee, the buyer must have the puppy examined by a licensed veterinarian within 48-72 hours of receiving the puppy. Regular veterinary care, proper nutrition, and a safe environment are essential for your puppy&apos;s health.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">What is Covered</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    This guarantee covers severe, life-threatening genetic conditions of the heart, liver, kidneys, and other major organs. It does not cover common puppy issues such as kennel cough, parasites, or minor environmental allergies.
                                </p>
                            </section>

                            <div className="pt-8 border-t border-border/50 text-center">
                                <p className="font-semibold text-primary italic">
                                    At Empire State Bulldogs, we believe in breeding for health first.
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
