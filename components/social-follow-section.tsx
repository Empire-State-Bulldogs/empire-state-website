"use client"

import { Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function SocialFollowSection() {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

    return (
        <section ref={ref} className="py-16 md:py-24 bg-background overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {/* Instagram Section */}
                    <div
                        className={`relative group bg-card rounded-3xl p-8 md:p-12 border border-border overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 ${isVisible ? "scroll-fade-up" : "opacity-0"}`}
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                            <Instagram size={120} />
                        </div>

                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                                <Instagram size={32} className="text-white" />
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-card-foreground">Follow Us on Instagram</h2>
                            <p className="text-lg text-muted-foreground mb-8 max-w-md">
                                Get daily updates, see our latest litters, and join our growing community of Frenchie lovers. Don't miss out on the cuteness overload!
                            </p>

                            <Button asChild size="lg" className="bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:opacity-90 text-white border-0 py-6 px-8 text-lg rounded-xl">
                                <a href="https://www.instagram.com/bankroll_bop93/" target="_blank" rel="noopener noreferrer">
                                    @bankroll_bop93
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* TikTok Section */}
                    <div
                        className={`relative group bg-card rounded-3xl p-8 md:p-12 border border-border overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 ${isVisible ? "scroll-fade-up delay-200" : "opacity-0"}`}
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                            <svg
                                role="img"
                                viewBox="0 0 24 24"
                                className="w-[120px] h-[120px] fill-current"
                            >
                                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.01.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.59-1.01V14.5c.01 2.13-.6 4.29-2.12 5.81-1.56 1.56-3.8 2.22-5.96 1.88-2.13-.33-4.14-1.78-5.11-3.72-1.2-2.38-.85-5.46 1.05-7.51 1.25-1.37 3.07-2.07 4.91-2.02V13c-1.14-.04-2.33.66-2.82 1.66-.49 1.02-.27 2.33.56 3.14.83.82 2.17.9 3.11.23.82-.58 1.14-1.6 1.14-2.58V0c-.01 0-.01.01 0 .02z" />
                            </svg>
                        </div>

                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center mb-6 shadow-lg shadow-black/20">
                                <svg
                                    role="img"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 fill-white"
                                >
                                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.01.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.59-1.01V14.5c.01 2.13-.6 4.29-2.12 5.81-1.56 1.56-3.8 2.22-5.96 1.88-2.13-.33-4.14-1.78-5.11-3.72-1.2-2.38-.85-5.46 1.05-7.51 1.25-1.37 3.07-2.07 4.91-2.02V13c-1.14-.04-2.33.66-2.82 1.66-.49 1.02-.27 2.33.56 3.14.83.82 2.17.9 3.11.23.82-.58 1.14-1.6 1.14-2.58V0c-.01 0-.01.01 0 .02z" />
                                </svg>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-card-foreground">Catch Us on TikTok</h2>
                            <p className="text-lg text-muted-foreground mb-8 max-w-md">
                                Experience the Empire State Bulldogs life in motion. Funny moments, training tips, and behind-the-scenes vibes you won't find anywhere else.
                            </p>

                            <Button asChild size="lg" className="bg-black hover:bg-zinc-800 text-white border-0 py-6 px-8 text-lg rounded-xl shadow-lg shadow-black/10">
                                <a href="https://www.tiktok.com/@bankrollbop" target="_blank" rel="noopener noreferrer">
                                    Follow @bankrollbop
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
