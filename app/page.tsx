import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { StudServicesSection } from "@/components/stud-services-section"
import { PuppiesSection } from "@/components/puppies-section"
import { GallerySection } from "@/components/gallery-section"
import { FamilySection } from "@/components/family-section"
import { ContactSection } from "@/components/contact-section"
import { SocialFollowSection } from "@/components/social-follow-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Build Verification: 2026-01-18-V3 - Manual Sync Check */}
      <Header />
      <HeroSection />
      <SocialFollowSection />
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
