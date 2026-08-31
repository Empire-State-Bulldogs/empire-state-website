import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FaqAccordion } from "@/components/faq-accordion"
import type { Metadata } from "next"
import { PageHero, PageBody } from "@/components/page-hero"

export const metadata: Metadata = {
    title: "French Bulldog Puppy FAQ",
    description: "Answers about Empire State Bulldogs puppies, AKC registration, health guarantees, shipping, meeting parents, and King Simba stud services.",
    alternates: {
        canonical: "/faq/",
    },
}

const faqs = [
    {
        question: "Do your puppies come with health guarantees?",
        answer: "Yes, all our puppies come with a comprehensive 1-year health guarantee against congenital and hereditary issues. We pride ourselves on the health and quality of our breeding program."
    },
    {
        question: "Are the puppies AKC registered?",
        answer: "Most of our puppies are AKC registered. Registration details are provided with each specific puppy listing."
    },
    {
        question: "Do you ship nationwide?",
        answer: "Yes! We offer nationwide shipping via professional flight nannies or climate-controlled ground transport. Your puppy's safety and comfort are our top priorities."
    },
    {
        question: "Can I meet the parents?",
        answer: "Absolutely. We encourage prospective owners to meet the parents (if available on-site) and see our breeding facility. Quality and transparency are core to our values."
    },
    {
        question: "What is your stud service process?",
        answer: "Our stud services, featuring the world-famous King Simba, include artificial insemination and progesterone testing guidance to ensure a successful breeding."
    }
]

export default function FAQPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: faqs.map((faq) => ({
                            "@type": "Question",
                            name: faq.question,
                            acceptedAnswer: {
                                "@type": "Answer",
                                text: faq.answer,
                            },
                        })),
                    }),
                }}
            />
            <Header />
            <PageHero
                eyebrow="Support"
                title="Frequently Asked Questions"
                intro="Answers on health guarantees, registration, shipping and visiting our dogs."
            />
            <PageBody>
                <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-pretty">
                    Everything you need to know about our puppies, breeding program, and services.
                </p>

                <div className="max-w-3xl mx-auto">
                    <FaqAccordion faqs={faqs} />
                </div>
            </PageBody>
            <Footer />
        </main>
    )
}
