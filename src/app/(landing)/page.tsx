import { HeroSection } from "./_sections/HeroSection/HeroSection"
import { ProblemsSection } from "./_sections/ProblemSection/ProblemsSection"
import { HowItWorksSection } from "./_sections/HowItWorksSection/HowItWorksSection"
import { FeaturesSection } from "./_sections/FeaturesSection/FeaturesSection"
import { EarlyAccessSection } from "./_sections/EarlyAccessSection/EarlyAccessSection"
import { CTASection } from "./_sections/CTASection/CTASection"
import { ShareSection } from "./_sections/ShareSection/ShareSection"
import { Header } from "./_components/Header"
import { Footer } from "./_components/Footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ProblemsSection />
      <HowItWorksSection />
      <FeaturesSection />
      <EarlyAccessSection />
      <CTASection />
      <ShareSection />
      <Footer />
    </div>
  )
}
