import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CategorySection } from "@/components/category-section"
import { ProductSection } from "@/components/product-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { StorySection } from "@/components/story-section"
import { EnvironmentalSection } from "@/components/environmental-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <CategorySection />
      <ProductSection />
      <TestimonialSection />
      <StorySection />
      <EnvironmentalSection />
      <Footer />
    </main>
  )
}
