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

const infoSections = [
 {
  id: 1,
  title: "Rooted in the Tea Gardens",
  description: `Pushaan Tea begins its journey right here, in the heart of lush green tea gardens where skilled hands carefully pluck the finest leaves. These gardens are more than just fields — they are home to traditions, families, and generations who dedicate their lives to nurturing tea. At Pushaan, we believe in honoring their hard work by ensuring fair practices, sustainable growth, and unwavering quality. Every packet of Pushaan Tea you hold carries with it the essence of these gardens, the smiles of the people behind it, and the purity of nature itself.`,
  image: "/factory.jpg",
  reverse: false,
}
,
  {
    id: 2,
    title: "Machinery",
    description: `Our high-tech machinery is at the heart of our production process. We use precision-engineered equipment for withering, rolling, drying, and blending, which allows us to maintain uniform quality across every batch. The machines are regularly inspected and maintained to guarantee optimal performance, reducing waste and preserving the integrity of the tea leaves. Automation in certain processes ensures speed without compromising quality, while sensitive stages are carefully handled by skilled technicians to maintain the traditional touch that makes our teas unique.`,
    image: "/machinery.jpg",
    reverse: true,
  },
  {
    id: 3,
    title: "Storage",
    description: `Proper storage is crucial to preserving the freshness, aroma, and flavor of our teas. Our storage facilities are climate-controlled to maintain optimal temperature and humidity, preventing any deterioration. Each type of tea has its dedicated storage section, clearly labeled and monitored to ensure batch traceability. We follow strict hygiene protocols, and storage areas are routinely sanitized. Additionally, we use eco-friendly, airtight packaging materials that maintain tea quality from our factory to your cup.`,
    image: "/storage.jpg",
    reverse: false,
  },
  {
    id: 4,
    title: "Hygiene & Working",
    description: `Hygiene and cleanliness are at the core of our production process. All staff are trained in proper food handling and hygiene practices. Our working areas are regularly sanitized, and machinery is cleaned multiple times a day to prevent contamination. Protective clothing, gloves, and masks are mandatory for all personnel in production zones. We follow strict international standards for workplace safety and hygiene, ensuring that every product leaving our factory is safe, high-quality, and prepared with care. Employee wellness programs ensure a healthy and motivated workforce, further contributing to quality and consistency.`,
    image: "/working.jpg",
    reverse: true,
  },
]


export function CategorySection() {
  return (
    <section className="bg-gradient-to-b from-white to-amber-50/30">
      {/* ======= Category Section ======= */}
      <div className="py-16 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-wider text-gray-800 mb-2 font-medium">SOMETHING FOR EVERYONE</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-amber-700 font-[Inter]">
            Shop by Category
          </h2>
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
                <div className="relative w-72 h-96 mx-auto mb-8 overflow-hidden bg-[#00492C] shadow-2xl rounded-t-full">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 tracking-wide">{category.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ======= Info Sections Below Category ======= */}
      <div className="py-20 container mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {infoSections.map((section, index) => (
          <motion.div
            key={section.id}
            className={`flex flex-col md:flex-row items-center gap-12 ${section.reverse ? "md:flex-row-reverse" : ""}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Content */}
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-extrabold text-amber-700 mb-4 font-[Inter]">
                {section.title}
              </h3>
              <p className="text-gray-800 text-lg md:text-xl">{section.description}</p>
            </div>

            {/* Image */}
            <div className="md:w-1/2">
              <div className="relative w-full h-96 md:h-[500px] overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={section.image || "/placeholder.svg"}
                  alt={section.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
