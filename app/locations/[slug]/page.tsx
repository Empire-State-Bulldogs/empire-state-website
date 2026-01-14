import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TARGET_CITIES } from "@/lib/cities"
import { SEO_KEYWORDS } from "@/lib/keywords"
import { HeroSection } from "@/components/hero-section"
import { StudServicesSection } from "@/components/stud-services-section"
import { PuppiesSection } from "@/components/puppies-section"
import { GallerySection } from "@/components/gallery-section"
import { ContactSection } from "@/components/contact-section"
import { Metadata } from "next"

export async function generateStaticParams() {
    return TARGET_CITIES.map((city) => ({
        slug: city.slug,
    }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const city = TARGET_CITIES.find((c) => c.slug === params.slug)
    const cityName = city ? `${city.name}, ${city.state}` : "your area"

    return {
        title: `French Bulldog Breeder & Stud Services in ${cityName} | Empire State Bulldogs`,
        description: `Looking for French Bulldog puppies or stud services in ${cityName}? Empire State Bulldogs offers top-quality AKC Frenchies, exotic colors, and world-class genetics near you.`,
        keywords: [
            `french bulldog breeder ${cityName}`,
            `french bulldog puppies for sale in ${cityName}`,
            `frenchie stud service ${cityName}`,
            `best french bulldog breeder ${cityName}`,
            ...SEO_KEYWORDS.core.slice(0, 10)
        ]
    }
}

export default function CityPage({ params }: { params: { slug: string } }) {
    const city = TARGET_CITIES.find((c) => c.slug === params.slug)
    const cityName = city ? `${city.name}, ${city.state}` : "your area"

    return (
        <main className="min-h-screen bg-background">
            <Header />

            {/* City Specific SEO Content Overlay / Notice */}
            <div className="pt-24 pb-8 bg-primary/5 text-center border-b border-primary/10">
                <div className="container mx-auto px-4">
                    <p className="text-primary font-semibold uppercase tracking-widest text-sm">
                        Serving the {cityName} Area
                    </p>
                    <h1 className="text-2xl md:text-3xl font-bold mt-2">
                        Premier French Bulldog Breeder & Stud Services in {cityName}
                    </h1>
                </div>
            </div>

            <HeroSection />

            <div id="about" className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">Quality Genetics, Delivered to {cityName}</h2>
                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
                            Empire State Bulldogs is proud to extend our world-class French Bulldog breeding program to the <strong>{cityName}</strong> community. Whether you are looking for a rare <strong>blue merle</strong>, a <strong>lilac tan</strong>, or a <strong>fluffy Frenchie</strong>, we provide healthy, AKC-registered puppies with nationwide delivery options.
                        </p>
                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                            Our stud services, featuring the legendary <strong>King Simba</strong>, are available for breeders in {cityName} looking to elevate their program with elite genetics and proven structure.
                        </p>
                    </div>
                </div>
            </div>

            <StudServicesSection />
            <PuppiesSection />
            <GallerySection />
            <ContactSection />

            <Footer />
        </main>
    )
}
