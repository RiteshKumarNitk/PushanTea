"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Chamomile Mint Citrus Green Tea, 50 Count",
    image: "/chamomile-mint-citrus-green-tea-package.jpg",
    rating: 4.8,
    reviews: 29,
    price: 600,
    originalPrice: null,
    teaBags: "50 Cups",
    label: null,
  },
  {
    id: 2,
    name: "Turmeric Ashwagandha Herbal Tea Tisane, 50 Count",
    image: "/turmeric-ashwagandha-herbal-tea-package.jpg",
    rating: 4.9,
    reviews: 777,
    price: 600,
    originalPrice: null,
    teaBags: "50 Cups",
    label: null,
  },
  {
    id: 3,
    name: "Darjeeling Summer Black Tea, 50 Count",
    image: "/darjeeling-summer-black-tea-package.jpg",
    rating: 4.8,
    reviews: 80,
    price: 650,
    originalPrice: null,
    teaBags: "50 Cups",
    label: null,
  },
  {
    id: 4,
    name: "Classic English Breakfast Black Tea, 50 Count",
    image: "/classic-english-breakfast-black-tea-package.jpg",
    rating: 4.9,
    reviews: 25,
    price: 999,
    originalPrice: null,
    teaBags: "250 Cups",
    label: "Loose Leaf",
  },
]

export function ProductSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">DISCOVER YOUR FAVORITE</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-balance">Shop by Product</h2>

          {/* Category Tabs */}
          <div className="flex justify-center space-x-8 mb-8">
            <button className="text-foreground font-semibold border-b-2 border-primary pb-2">BEST SELLERS</button>
            <button className="text-muted-foreground hover:text-foreground transition-colors pb-2">
              WEBSITE EXCLUSIVE
            </button>
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="overflow-hidden bg-card border border-border hover:shadow-lg transition-all duration-300">
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden">
                  {product.label && (
                    <div className="absolute top-2 left-2 z-10 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                      {product.label}
                    </div>
                  )}
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Product Info */}
                <div className="p-4">
                  {/* Rating */}
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground ml-2">{product.reviews} reviews</span>
                  </div>

                  {/* Product Name */}
                  <h3 className="font-semibold text-card-foreground mb-2 text-sm leading-tight">{product.name}</h3>

                  {/* Tea Bags Info */}
                  <p className="text-xs text-muted-foreground mb-3">Tea Bags | {product.teaBags}</p>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-foreground">₹ {product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">₹ {product.originalPrice}</span>
                      )}
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" size="sm">
                    ADD TO CART
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="px-8 bg-transparent">
            VIEW ALL
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
