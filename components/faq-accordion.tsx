"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export function FaqAccordion({ faqs }: { faqs: { question: string; answer: string }[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <Card className="bg-card border-border rounded-2xl overflow-hidden shadow-xl">
            <CardContent className="p-0">
                <div className="divide-y divide-border/50">
                    {faqs.map((faq, index) => (
                        <div key={index} className="group">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-primary/5 transition-all outline-none"
                            >
                                <h2 className="text-lg font-semibold group-hover:text-primary transition-colors">
                                    {faq.question}
                                </h2>
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
    )
}
