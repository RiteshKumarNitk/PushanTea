"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

interface Product {
  id: number
  title: string
  name: string
  description: string
  price: number
  originalPrice: number
  rating: number
  reviews: number
  image: string
  category: string
}

const brandHeadings: Record<string, string> = {
  AM: "Amchi Mumbai",
  RR: "Rajasthan Royal",
  UP_Divine: "UP Divine",
  "Shree Kadak": "Shree Kadak",
  MP:"Mast Punjabi",
  upcoming:"upcoming"
}

const brandImages: Record<string, string> = {
  AM: "/amscene.jpg",
  RR: "/rrscene.jpg",
  UP_Divine: "upscene.jpg",
  "Shree Kadak": "/brands/shree-kadak-banner.jpg",
  MP: "/brands/mast-punjabi-banner.jpg",
  upcoming: "/upcoming.jpg",
};


const brandStyles: Record<string, string> = {
  AM: "bg-blue-50",
  RR: "bg-pink-50",
  UP_Divine: "bg-green-50",
  "Shree Kadak": "bg-yellow-50",
  upcoming:"upcoming"
}

const products: Product[] = [
  // --- AM Brand ---
  { id: 1, title: "AM", name: "AM Premium Green Tea 1kg", description: "Loose Leaf | 1kg Pack | 400 Cups", price: 1200, originalPrice: 1500, rating: 4.8, reviews: 980, image: "/am1kg.jpg", category: "green-tea" },
  { id: 2, title: "AM", name: "AM Premium Green Tea 500g", description: "Loose Leaf | 500g Pack | 200 Cups", price: 650, originalPrice: 850, rating: 4.7, reviews: 510, image: "/am500g.jpg", category: "green-tea" },
  { id: 3, title: "AM", name: "AM Premium Green Tea 250g", description: "Loose Leaf | 250g Pack | 100 Cups", price: 360, originalPrice: 480, rating: 4.6, reviews: 290, image: "/am250g.jpg", category: "green-tea" },
  { id: 4, title: "AM", name: "AM Premium Green Tea 100g", description: "Loose Leaf | 100g Pack | 40 Cups", price: 160, originalPrice: 220, rating: 4.5, reviews: 120, image: "/am-premium-green-tea-100g.jpg", category: "green-tea" },

  // --- RR Brand ---
  { id: 5, title: "RR", name: "RR Strong Assam Black Tea 1kg", description: "CTC Granules | 1kg Pack | 400 Cups", price: 1100, originalPrice: 1350, rating: 4.9, reviews: 1250, image: "/rr1kg.jpg", category: "black-tea" },
  { id: 6, title: "RR", name: "RR Strong Assam Black Tea 500g", description: "CTC Granules | 500g Pack | 200 Cups", price: 580, originalPrice: 750, rating: 4.8, reviews: 830, image: "/rr500g.jpg", category: "black-tea" },
  { id: 7, title: "RR", name: "RR Strong Assam Black Tea 250g", description: "CTC Granules | 250g Pack | 100 Cups", price: 320, originalPrice: 400, rating: 4.7, reviews: 460, image: "/rr250g.jpg", category: "black-tea" },
  { id: 8, title: "RR", name: "RR Strong Assam Black Tea 100g", description: "CTC Granules | 100g Pack | 40 Cups", price: 150, originalPrice: 200, rating: 4.6, reviews: 200, image: "/rr-strong-assam-black-tea-100g.jpg", category: "black-tea" },

  // --- UP_Divine Brand ---
  { id: 9, title: "UP_Divine", name: "UP Divine Herbal Tea 1kg", description: "Herbal Blend | 1kg Pack | 400 Cups", price: 1300, originalPrice: 1600, rating: 4.9, reviews: 1120, image: "/up1kg.jpg", category: "herbal-tea" },
  { id: 10, title: "UP_Divine", name: "UP Divine Herbal Tea 500g", description: "Herbal Blend | 500g Pack | 200 Cups", price: 700, originalPrice: 880, rating: 4.8, reviews: 670, image: "/up500g.jpg", category: "herbal-tea" },
  { id: 11, title: "UP_Divine", name: "UP Divine Herbal Tea 250g", description: "Herbal Blend | 250g Pack | 100 Cups", price: 380, originalPrice: 480, rating: 4.7, reviews: 320, image: "/up-divine-herbal-tea-250g.jpg", category: "herbal-tea" },
  { id: 12, title: "UP_Divine", name: "UP Divine Herbal Tea 100g", description: "Herbal Blend | 100g Pack | 40 Cups", price: 180, originalPrice: 230, rating: 4.6, reviews: 180, image: "/up-divine-herbal-tea-100g.jpg", category: "herbal-tea" },

  // --- Shree Kadak Brand ---
  { id: 13, title: "Shree Kadak", name: "Shree Kadak Masala Chai 1kg", description: "Masala Blend | 1kg Pack | 400 Cups", price: 1150, originalPrice: 1400, rating: 4.9, reviews: 1540, image: "/ctc1kg.jpg", category: "masala-tea" },
  { id: 14, title: "Shree Kadak", name: "Shree Kadak Masala Chai 500g", description: "Masala Blend | 500g Pack | 200 Cups", price: 620, originalPrice: 800, rating: 4.8, reviews: 920, image: "/ctc1kg.jpg", category: "masala-tea" },
  { id: 15, title: "Shree Kadak", name: "Shree Kadak Masala Chai 250g", description: "Masala Blend | 250g Pack | 100 Cups", price: 340, originalPrice: 430, rating: 4.7, reviews: 450, image: "/ctc1kg.jpg", category: "masala-tea" },
  { id: 16, title: "Shree Kadak", name: "Shree Kadak Masala Chai 100g", description: "Masala Blend | 100g Pack | 40 Cups", price: 170, originalPrice: 220, rating: 4.6, reviews: 210, image: "/ctc1kg.jpg", category: "masala-tea" },

  { id: 17, title: "MP", name: "Mast Punjabi Chai 1kg", description: "Masala Blend | 1kg Pack | 400 Cups", price: 1150, originalPrice: 1400, rating: 4.9, reviews: 1540, image: "/ctckg.jpg", category: "masala-tea" },
  { id: 18, title: "MP", name: "Mast Punjabi Chai 500g", description: "Masala Blend | 500g Pack | 200 Cups", price: 620, originalPrice: 800, rating: 4.8, reviews: 920, image: "/shree-kadak-masala-chai-500g.jpg", category: "masala-tea" },
  { id: 19, title: "MP", name: "Mast Punjabi Chai 250g", description: "Masala Blend | 250g Pack | 100 Cups", price: 340, originalPrice: 430, rating: 4.7, reviews: 450, image: "/mp250g.jpg", category: "masala-tea" },
  { id: 20, title: "MP", name: "Mast Punjabi Chai 100g", description: "Masala Blend | 100g Pack | 40 Cups", price: 170, originalPrice: 220, rating: 4.6, reviews: 210, image: "/shree-kadak-masala-chai-100g.jpg", category: "masala-tea" },
  
  //upcoming
  { id: 21, title: "upcoming", name: "Green Tea 1kg", description: "Masala Blend | 1kg Pack | 400 Cups", price: 1150, originalPrice: 1400, rating: 4.9, reviews: 1540, image: "/green1kg.jpg", category: "masala-tea" },
  { id: 22, title: "upcoming", name: "Masala Tea 1kg", description: "Masala Blend | 500g Pack | 200 Cups", price: 620, originalPrice: 800, rating: 4.8, reviews: 920, image: "/masala1kg.jpg", category: "masala-tea" },
  { id: 23, title: "upcoming", name: "Lemon Tea 1kg", description: "Masala Blend | 250g Pack | 100 Cups", price: 340, originalPrice: 430, rating: 4.7, reviews: 450, image: "/lemon1kg.jpg", category: "masala-tea" },
  { id: 24, title: "upcoming", name: "Black Tea 1kg", description: "Masala Blend | 100g Pack | 40 Cups", price: 170, originalPrice: 220, rating: 4.6, reviews: 210, image: "/black1kg.jpg", category: "masala-tea" },
]

export function ShopAllProducts() {
  const [priceRange, setPriceRange] = useState([0, 3000])
  const [sortBy, setSortBy] = useState("featured")
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null)

  const brandRefs = {
    AM: useRef<HTMLDivElement>(null),
    RR: useRef<HTMLDivElement>(null),
    UP_Divine: useRef<HTMLDivElement>(null),
    "Shree Kadak": useRef<HTMLDivElement>(null),
    MP: useRef<HTMLDivElement>(null),
    upcoming: useRef<HTMLDivElement>(null),
  }

  useEffect(() => {
    if (selectedBrand && selectedBrand !== "All") {
      brandRefs[selectedBrand as keyof typeof brandRefs]?.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    } else if (selectedBrand === "All") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [selectedBrand])

  const filteredProducts = products.filter(
    (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
  )

  const currentProducts = filteredProducts

  return (
    <div className="min-h-screen">
      <div className="bg-[#00492C] pt-20 pb-8">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-700 mb-4">All Products</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our signature tea collections across premium brands.
            </p>
        <div className="container mx-auto px-4"></div>
      </div>

      <div className="bg-white py-12">
        <div className="container mx-auto">
          
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-24">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Filters</h3>

                <div className="mb-8">
                  <h4 className="text-lg font-medium text-gray-800 mb-4">Price</h4>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={3000}
                    min={0}
                    step={50}
                    className="w-full"
                  />
                  <div className="flex items-center justify-between text-sm text-gray-600 mt-2">
                    <span>₹ {priceRange[0]}</span>
                    <span>to</span>
                    <span>₹ {priceRange[1]}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-4">Brand</h4>
                  {["All", "AM", "RR", "UP_Divine", "Shree Kadak","MP"].map((brand) => (
                    <label key={brand} className="flex items-center mb-2 cursor-pointer">
                      <input
                        type="radio"
                        checked={selectedBrand === brand}
                        onChange={() => setSelectedBrand(brand)}
                        className="mr-2 accent-[#00492C]"
                      />
                      <span className="text-gray-700">{brand}</span>
                    </label>
                  ))}
                </div>

                 <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-4"> Upcoming Brand</h4>
                  {["Black Tea", "Green Tea", "Lemon Tea","Masala Tea"].map((brand) => (
                    <label key={brand} className="flex items-center mb-2 cursor-pointer">
                      <input
                        type="radio"
                        checked={selectedBrand === brand}
                        onChange={() => setSelectedBrand(brand)}
                        className="mr-2 accent-[#00492C]"
                      />
                      <span className="text-gray-700">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Products */}
            <div className="lg:w-3/4">
              {["AM", "RR", "UP_Divine", "Shree Kadak","MP","upcoming"].map((brand) => {
                const brandProducts = currentProducts.filter((p) => p.title === brand)
                if (brandProducts.length === 0) return null

                return (
                  <div key={brand} ref={brandRefs[brand as keyof typeof brandRefs]} className="mb-16">
                   <div className="flex justify-center mb-8">
  <img
    src={brandImages[brand]}
    alt={brandHeadings[brand]}
    className="w-full max-w-3xl rounded-lg shadow-md object-cover"
  />
</div>



                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                      {brandProducts.map((product) => (
                        <motion.div
                          key={product.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                          <div className="aspect-square p-3 bg-gray-50">
                            <img
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              className="w-full h-full object-contain"
                            />
                          </div>

                          <div className="p-6">
                            <div className="flex items-center mb-3">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < Math.floor(product.rating)
                                      ? "text-yellow-400 fill-current"
                                      : "text-gray-300"
                                  }`}
                                />
                              ))}
                              <span className="ml-2 text-xs text-gray-600">
                                {product.reviews} reviews
                              </span>
                            </div>

                            <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2">
                              {product.name}
                            </h3>

                            <div className="flex items-center mb-4">
                              <span className="text-sm font-bold text-gray-900">₹ {product.price}</span>
                              <span className="ml-2 text-sm text-gray-500 line-through">
                                ₹ {product.originalPrice}
                              </span>
                            </div>

                            <Button className="w-full bg-[#00492C] hover:bg-[#00492C]/90 text-white font-medium py-3">
                              ADD TO CART
                            </Button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

