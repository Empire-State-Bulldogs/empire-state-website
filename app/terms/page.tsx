import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Terms of Service",
    description: "The terms and conditions governing use of the Empire State Bulldogs website, puppy inquiries, deposits, and stud service arrangements.",
    alternates: {
        canonical: "/terms/",
    },
}

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Header />
            <div className="container mx-auto px-4 py-32 md:py-40">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">Terms of Service</h1>

                <div className="max-w-4xl mx-auto">
                    <Card className="bg-card border-border rounded-2xl overflow-hidden shadow-xl">
                        <CardContent className="p-8 md:p-12 prose prose-invert max-w-none">
                            <p className="text-muted-foreground mb-8">Last Updated: August 30, 2026</p>

                            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                            <p className="text-muted-foreground mb-6">
                                By accessing and using empirestatebulldogs.com, you agree to be bound by these Terms of Service and all applicable laws and regulations.
                            </p>

                            <h2 className="text-2xl font-bold mb-4">2. Breeding & Sale Services</h2>
                            <p className="text-muted-foreground mb-6">
                                All sales and stud services are subject to individual written contracts. The information on this website does not constitute a binding legal contract for the sale of any animal.
                            </p>

                            <h2 id="deposits" className="text-2xl font-bold mb-4 scroll-mt-28">3. Deposits &amp; Payment</h2>
                            <p className="text-muted-foreground mb-4">
                                A deposit reserves a place on our waitlist or secures a stud service appointment. Deposits are accepted only after you have contacted us directly and we have confirmed availability. Deposit amounts vary by litter and by service and are quoted at the time of inquiry.
                            </p>
                            <p className="text-muted-foreground mb-4">
                                <strong className="text-foreground">Deposits are non-refundable.</strong> A deposit takes a puppy or a breeding slot off the market and out of consideration for other families, which is why it is not returned if you change your mind or become unable to proceed.
                            </p>
                            <p className="text-muted-foreground mb-4">
                                <strong className="text-foreground">Deposits are transferable for 12 months.</strong> If the litter you reserved does not produce a puppy matching your agreed preferences, if we are unable to fulfil your reservation, or if your circumstances change, your deposit may be applied in full to a future litter or breeding appointment within 12 months of the date it was paid. Transfers must be arranged with us in writing.
                            </p>
                            <p className="text-muted-foreground mb-4">
                                <strong className="text-foreground">If we cancel.</strong> In the event we are unable to provide a puppy or stud service and no suitable alternative is available within the 12 month transfer window, your deposit will be refunded in full.
                            </p>
                            <p className="text-muted-foreground mb-4">
                                <strong className="text-foreground">Balance and collection.</strong> The remaining balance is due before a puppy leaves our care, or at the time of service for stud bookings. Payment plans for the balance may be available and are agreed in writing on a case by case basis. Shipping and delivery costs are separate from the purchase price unless expressly stated otherwise.
                            </p>
                            <p className="text-muted-foreground mb-6">
                                Every deposit is confirmed by a written agreement setting out the amount paid, what it reserves, and the transfer window. Where anything in that signed agreement differs from this page, the signed agreement governs.
                            </p>

                            <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
                            <p className="text-muted-foreground mb-6">
                                All content on this site, including images of our dogs and logos, is the property of Empire State Bulldogs and may not be used without express written permission.
                            </p>

                            <h2 className="text-2xl font-bold mb-4">5. Limitation of Liability</h2>
                            <p className="text-muted-foreground mb-6">
                                Empire State Bulldogs shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our website or services.
                            </p>

                            <h2 className="text-2xl font-bold mb-4">6. Governing Law</h2>
                            <p className="text-muted-foreground">
                                These terms are governed by the laws of the State of New York.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <Footer />
        </main>
    )
}
