import Header from "@/components/Header"
import { AboutContent } from "@/components/about-content"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <AboutContent />
      <Footer />
    </div>
  )
}
