"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

const products = [
  {
    id: 1,
    name: "Chamomile Mint Citrus Green Tea",
    description: "Tea Bags | 50 Cups",
    price: 600,
    originalPrice: 800,
    rating: 4.8,
    reviews: 29,
    image: "/chamomile-mint-citrus-green-tea-package.jpg",
    category: "green-tea",
  },
  {
    id: 2,
    name: "Turmeric Ashwagandha Herbal Tea Tisane",
    description: "Tea Bags | 50 Cups",
    price: 600,
    originalPrice: 750,
    rating: 4.9,
    reviews: 7777,
    image: "/turmeric-ashwagandha-herbal-tea-package.jpg",
    category: "herbal-tea",
  },
  {
    id: 3,
    name: "Darjeeling Summer Black Tea",
    description: "Tea Bags | 50 Cups",
    price: 650,
    originalPrice: 850,
    rating: 4.7,
    reviews: 80,
    image: "/darjeeling-summer-black-tea-package.jpg",
    category: "black-tea",
  },
  {
    id: 4,
    name: "Classic English Breakfast Black Tea",
    description: "Loose Leaf | 250 Cups",
    price: 999,
    originalPrice: 1200,
    rating: 4.8,
    reviews: 25,
    image: "/english-breakfast-black-tea-package.jpg",
    category: "black-tea",
  },
  {
    id: 5,
    name: "Earl Grey Black Tea",
    description: "Tea Bags | 50 Cups",
    price: 550,
    originalPrice: 700,
    rating: 4.6,
    reviews: 156,
    image: "/earl-grey-black-tea-package.jpg",
    category: "black-tea",
  },
  {
    id: 6,
    name: "Himalayan Green Tea",
    description: "Loose Leaf | 200 Cups",
    price: 750,
    originalPrice: 950,
    rating: 4.9,
    reviews: 342,
    image: "/himalayan-green-tea-package.jpg",
    category: "green-tea",
  },
]

export function ShopAllProducts() {
  const [priceRange, setPriceRange] = useState([0, 3000])
  const [sortBy, setSortBy] = useState("featured")
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 4

  const totalPages = Math.ceil(products.length / productsPerPage)
  const startIndex = (currentPage - 1) * productsPerPage
  const currentProducts = products.slice(startIndex, startIndex + productsPerPage)

  return (
    <div className="min-h-screen">
      {/* Hero Section with Products Display */}
      <div className="bg-[#00492C] pt-20 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: item * 0.1 }}
                className="w-20 h-24 md:w-24 md:h-28 lg:w-28 lg:h-32"
              >
                <img
                  src={`/vahdam-tea-product-.jpg?height=120&width=100&query=vahdam tea product ${item}`}
                  alt={`Tea Product ${item}`}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-700 mb-4">All Products</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore a wide selection of teas & spices, from authentic blends to single-origin spices.
            </p>
          </div>

          {/* Filters and Sort */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="lg:w-1/4">
              <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-24">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Filters</h3>

                {/* Price Filter */}
                <div className="mb-8">
                  <h4 className="text-lg font-medium text-gray-800 mb-4">Price</h4>
                  <div className="space-y-4">
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={3000}
                      min={0}
                      step={50}
                      className="w-full"
                    />
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>₹ {priceRange[0]}</span>
                      <span>to</span>
                      <span>₹ {priceRange[1]}</span>
                    </div>
                  </div>
                </div>

                {/* Category Filter */}
                <div className="mb-8">
                  <h4 className="text-lg font-medium text-gray-800 mb-4">Category</h4>
                  <div className="space-y-2">
                    {["Black Tea", "Green Tea", "Herbal Tea", "Chai Tea", "Oolong Tea"].map((category) => (
                      <label key={category} className="flex items-center">
                        <input type="checkbox" className="mr-2 accent-[#00492C]" />
                        <span className="text-gray-600">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:w-3/4">
              {/* Sort Controls */}
              <div className="flex items-center justify-between mb-8">
                <p className="text-gray-600">
                  Showing {startIndex + 1}-{Math.min(startIndex + productsPerPage, products.length)} of{" "}
                  {products.length} products
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-amber-700 font-medium">Sort By:</span>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Rating</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 mb-12">
                {currentProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="aspect-square p-6 bg-gray-50">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="p-6">
                      {/* Rating */}
                      <div className="flex items-center mb-3">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="ml-2 text-sm text-gray-600">{product.reviews} reviews</span>
                      </div>

                      {/* Product Info */}
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                      <p className="text-gray-600 mb-4">{product.description}</p>

                      {/* Price */}
                      <div className="flex items-center mb-4">
                        <span className="text-xl font-bold text-gray-900">₹ {product.price}</span>
                        {product.originalPrice && (
                          <span className="ml-2 text-sm text-gray-500 line-through">₹ {product.originalPrice}</span>
                        )}
                      </div>

                      {/* Add to Cart Button */}
                      <Button className="w-full bg-[#00492C] hover:bg-[#00492C]/90 text-white font-medium py-3">
                        ADD TO CART
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center gap-4">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="flex items-center gap-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </Button>

                <div className="flex items-center gap-2">
                  {[...Array(totalPages)].map((_, i) => (
                    <Button
                      key={i + 1}
                      variant={currentPage === i + 1 ? "default" : "outline"}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`w-10 h-10 ${currentPage === i + 1 ? "bg-[#00492C] hover:bg-[#00492C]/90" : ""}`}
                    >
                      {i + 1}
                    </Button>
                  ))}
                </div>

                <Button
                  variant="outline"
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-2"
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              {/* View All Button */}
              <div className="text-center mt-8">
                <Button
                  variant="outline"
                  className="text-[#00492C] border-[#00492C] hover:bg-[#00492C] hover:text-white bg-transparent"
                >
                  VIEW ALL
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
