"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function FamilySection() {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

    const familyPhotos = [
        { src: "/images/fam1.jpg", alt: "Empire State Bulldogs Family 1" },
        { src: "/images/fam2.jpg", alt: "Empire State Bulldogs Family 2" },
    ]

    return (
        <section ref={ref} id="family" className="py-16 md:py-24 bg-secondary/30 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10 text-center">
                {/* Section Header */}
                <div className={`mb-12 md:mb-16 ${isVisible ? "scroll-fade-up" : "opacity-0"}`}>
                    <span className="text-primary text-base md:text-lg font-semibold uppercase tracking-wider">Family</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 text-foreground">
                        Part of Our Family
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                        Our bulldogs aren't just pets, they're family. We take pride in the bonds we build with our dogs and their new families.
                    </p>
                </div>

                {/* Photos Container */}
                <div className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-5xl mx-auto">
                    {familyPhotos.map((photo, index) => (
                        <div
                            key={index}
                            className={`relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-muted/20 hover:scale-105 transition-transform duration-500 ${isVisible ? "scroll-fade-up" : "opacity-0"
                                }`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            <Image
                                src={photo.src}
                                alt={photo.alt}
                                fill
                                className="object-contain p-2 rounded-2xl transition-transform duration-500"
                            />
                            {index === 0 && (
                                <div className="absolute bottom-2 left-2 z-20 w-32 md:w-40 lg:w-48 transition-transform duration-500 hover:scale-110">
                                    <Image
                                        src="/images/badempirelogotpneon.png"
                                        alt="Empire State Bulldogs Badge"
                                        width={200}
                                        height={200}
                                        className="rotate-[-25deg] drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]"
                                    />
                                </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
