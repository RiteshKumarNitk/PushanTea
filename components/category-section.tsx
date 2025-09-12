"use client"

import { motion } from "framer-motion"

const categories = [
  {
    id: 1,
    title: "GIFTS",
    image: "/elegant-tea-gift-sets-with-premium-packaging-and-t.jpg",
    description: "Curated gift sets for tea lovers",
  },
  {
    id: 2,
    title: "TEAS",
    image: "/premium-tea-packages-with-colorful-boxes-and-a-cer.jpg",
    description: "Premium loose leaf and tea bags",
  },
  {
    id: 3,
    title: "SAMPLERS",
    image: "/tea-sampler-collection-with-various-colorful-tea-p.jpg",
    description: "Try our bestselling blends",
  },
]

export function CategorySection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-amber-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-wider text-gray-800 mb-2 font-medium">SOMETHING FOR EVERYONE</p>
          <h2 className="text-4xl md:text-5xl font-bold text-amber-700 text-balance">Shop by Category</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="text-center">
                <div className="relative w-72 h-72 mx-auto mb-8 rounded-full overflow-hidden bg-[#00492C] shadow-2xl">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 tracking-wide">{category.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
