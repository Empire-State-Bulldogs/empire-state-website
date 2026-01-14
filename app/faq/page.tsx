"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

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
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Header />
            <div className="container mx-auto px-4 py-32 md:py-40">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8">Frequently Asked Questions</h1>
                <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-pretty">
                    Everything you need to know about our puppies, breeding program, and services.
                </p>

                <div className="max-w-3xl mx-auto">
                    <Card className="bg-card border-border rounded-2xl overflow-hidden shadow-xl">
                        <CardContent className="p-0">
                            <div className="divide-y divide-border/50">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="group">
                                        <button
                                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                            className="w-full flex items-center justify-between p-6 text-left hover:bg-primary/5 transition-all outline-none"
                                        >
                                            <span className="text-lg font-semibold group-hover:text-primary transition-colors">
                                                {faq.question}
                                            </span>
                                            <ChevronDown
                                                className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-primary' : ''}`}
                                            />
                                        </button>
                                        <div
                                            className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                        >
                                            <div className="p-6 pt-0 text-muted-foreground text-base leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <Footer />
        </main>
    )
}
