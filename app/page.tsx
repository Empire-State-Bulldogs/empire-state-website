import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { StudServicesSection } from "@/components/stud-services-section"
import { PuppiesSection } from "@/components/puppies-section"
import { GallerySection } from "@/components/gallery-section"
import { FamilySection } from "@/components/family-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Build Verification: 2026-01-14-V1 */}
      <Header />
      <HeroSection />
      <AboutSection />
      <StudServicesSection />
      <PuppiesSection />
      <GallerySection />
      <FamilySection />
      <ContactSection />
      <Footer />
    </main>
  )
}
