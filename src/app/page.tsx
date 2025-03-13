import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/home/hero-section"
import { CategoriesSection } from "@/components/home/categories-section"
import { ProfessionalsSection } from "@/components/home/professionals-section"
import { HowItWorks } from "@/components/home/how-it-works"
import { CTASection } from "@/components/home/cta-section"
import { categories, professionals, steps } from "@/data/mock-data"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <CategoriesSection categories={categories} />
        <ProfessionalsSection professionals={professionals} />
        <HowItWorks steps={steps} />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

