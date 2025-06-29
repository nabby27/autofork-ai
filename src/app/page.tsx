import { Header } from "./_components/Header"
import { Hero } from "./_components/Hero"
import { Problem } from "./_components/Problem"
import { HowItWorks } from "./_components/HowItWorks"
import { Features } from "./_components/Features"
import { EarlyAccess } from "./_components/EarlyAccess"
import { CTA } from "./_components/CTA"
import { Footer } from "./_components/Footer"
import { SocialShare } from "./_components/SocialShare"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <EarlyAccess />
      <CTA />
      <SocialShare />
      <Footer />
    </div>
  )
}
