"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryImages = [
  {
    id: 1,
    src: "/tea-plantation-workers-picking-leaves-in-mountains.jpg",
    alt: "Tea plantation workers picking fresh tea leaves in the mountains",
    category: "plantation",
    title: "Tea Garden Workers",
    description:
      "Our dedicated tea garden workers carefully hand-picking the finest tea leaves in the Himalayan foothills.",
  },
  {
    id: 2,
    src: "/premium-tea-collection-display-with-elegant-packaging.jpg",
    alt: "Premium tea collection with elegant packaging",
    category: "products",
    title: "Premium Collection",
    description: "Our award-winning tea collection featuring elegant packaging and the finest quality teas.",
  },
  {
    id: 3,
    src: "/traditional-tea-ceremony-with-vahdam-teas.jpg",
    alt: "Traditional tea ceremony with VAHDAM teas",
    category: "ceremony",
    title: "Tea Ceremony",
    description: "Experience the art of traditional tea brewing with our premium tea selections.",
  },
  {
    id: 4,
    src: "/lush-green-tea-plantation-landscape-aerial-view.jpg",
    alt: "Lush green tea plantation landscape from aerial view",
    category: "plantation",
    title: "Tea Gardens",
    description: "Breathtaking aerial view of our lush tea gardens nestled in the pristine mountain valleys.",
  },
  {
    id: 5,
    src: "/artisanal-tea-processing-and-packaging-facility.jpg",
    alt: "Artisanal tea processing and packaging facility",
    category: "processing",
    title: "Tea Processing",
    description: "State-of-the-art processing facility where tradition meets modern technology.",
  },
  {
    id: 6,
    src: "/colorful-spice-and-tea-blend-ingredients.jpg",
    alt: "Colorful spice and tea blend ingredients",
    category: "ingredients",
    title: "Natural Ingredients",
    description: "Vibrant display of natural spices and herbs that create our signature tea blends.",
  },
  {
    id: 7,
    src: "/elegant-tea-tasting-setup-with-multiple-varieties.jpg",
    alt: "Elegant tea tasting setup with multiple varieties",
    category: "tasting",
    title: "Tea Tasting",
    description: "Professional tea tasting setup showcasing the diverse flavors and aromas of our teas.",
  },
  {
    id: 8,
    src: "/sustainable-farming-practices-in-tea-gardens.jpg",
    alt: "Sustainable farming practices in tea gardens",
    category: "sustainability",
    title: "Sustainable Farming",
    description: "Our commitment to sustainable and eco-friendly farming practices in tea cultivation.",
  },
  {
    id: 9,
    src: "/tea-master-examining-quality-of-tea-leaves.jpg",
    alt: "Tea master examining quality of tea leaves",
    category: "quality",
    title: "Quality Control",
    description: "Our expert tea masters ensuring the highest quality standards for every batch.",
  },
]

const categories = [
  "all",
  "plantation",
  "products",
  "ceremony",
  "processing",
  "ingredients",
  "tasting",
  "sustainability",
  "quality",
]

export function GalleryContent() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages =
    selectedCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return

    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage)
    let newIndex

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0
    }

    setSelectedImage(filteredImages[newIndex].id)
  }

  const selectedImageData = selectedImage ? galleryImages.find((img) => img.id === selectedImage) : null

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-[#00492C] to-[#00492C]/90">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Gallery</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Discover the beauty behind our teas - from garden to cup, explore the journey of VAHDAM through stunning
              visuals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`capitalize ${
                  selectedCategory === category
                    ? "bg-[#00492C] hover:bg-[#00492C]/90 text-white"
                    : "text-[#00492C] border-[#00492C] hover:bg-[#00492C] hover:text-white"
                }`}
              >
                {category === "all" ? "All Images" : category.replace("-", " ")}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(image.id)}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-4">
                        <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                        <p className="text-sm">{image.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && selectedImageData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
              >
                <X className="h-6 w-6" />
              </Button>

              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigateImage("prev")}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigateImage("next")}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
              >
                <ChevronRight className="h-8 w-8" />
              </Button>

              {/* Image */}
              <img
                src={selectedImageData.src || "/placeholder.svg"}
                alt={selectedImageData.alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white rounded-b-lg">
                <h3 className="text-2xl font-bold mb-2">{selectedImageData.title}</h3>
                <p className="text-lg opacity-90">{selectedImageData.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
