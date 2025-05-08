import { HeroSection } from "@/components/ui/hero-section"
import { HowItWorksSection } from "@/components/ui/how-it-works-section"
import { WhyChooseUsSection } from "@/components/ui/why-choose-us-section"
import { TestimonialsSection } from "@/components/ui/testimonials-section"
import { ContactFormSection } from "@/components/ui/contact-form-section"
import { FooterSection } from "@/components/ui/footer-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <ContactFormSection />
      <FooterSection />
    </main>
  )
}
