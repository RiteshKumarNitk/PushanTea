import { Header } from "@/components/header"
import { ShopAllProducts } from "@/components/shop-all-products"
import Footer from "@/components/footer"

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ShopAllProducts />
      <Footer />
    </div>
  )
}
