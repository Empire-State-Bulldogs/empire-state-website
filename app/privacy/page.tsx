import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import type { Metadata } from "next"
import { PageHero, PageBody } from "@/components/page-hero"

export const metadata: Metadata = {
    alternates: {
        canonical: "/privacy/",
    },
    title: "Privacy Policy",
    description: "Read the Empire State Bulldogs privacy policy and learn how contact information is collected, used, and protected.",
}

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Header />
            <PageHero
                eyebrow="Legal"
                title="Privacy Policy"
            />
            <PageBody>
                <div className="max-w-4xl mx-auto">
                    <Card className="bg-card border-border rounded-2xl overflow-hidden shadow-xl">
                        <CardContent className="p-8 md:p-12 prose prose-invert max-w-none">
                            <p className="text-muted-foreground mb-8">Last Updated: January 14, 2026</p>

                            <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                            <p className="text-muted-foreground mb-6">
                                When you visit Empire State Bulldogs or contact us via email, we may collect personal information such as your name, email address, and phone number to provide our services and communicate with you.
                            </p>

                            <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
                            <p className="text-muted-foreground mb-6">
                                We use your information to respond to inquiries about puppies and stud services, process transactions, send occasional updates, and improve our website experience. We do not sell your personal information to third parties.
                            </p>

                            <h2 className="text-2xl font-bold mb-4">3. Data Security</h2>
                            <p className="text-muted-foreground mb-6">
                                We implement industry-standard security measures to protect your personal data. However, no method of transmission over the internet is 100% secure.
                            </p>

                            <h2 className="text-2xl font-bold mb-4">4. Cookies</h2>
                            <p className="text-muted-foreground mb-6">
                                Our website may use cookies to enhance user experience and analyze site traffic via services like Google Analytics.
                            </p>

                            <h2 className="text-2xl font-bold mb-4">5. Contact Us</h2>
                            <p className="text-muted-foreground">
                                If you have any questions about this Privacy Policy, please contact us at hello@empirestatebulldogs.com.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </PageBody>
            <Footer />
        </main>
    )
}
