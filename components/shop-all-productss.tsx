"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface Product {
  id: number;
  title: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  quantity: number;
}

const products: Product[] = [
  // --- AM Brand ---
  {
    id: 1,
    title: "AM",
    name: "AM Premium Green Tea 250g (Small)",
    description: "Loose Leaf | 250g Pack | 100 Cups",
    price: 360,
    originalPrice: 480,
    rating: 4.6,
    reviews: 290,
    image: "/am250g.jpg",
    category: "green-tea",
    quantity: 8,
  },
  {
    id: 2,
    title: "AM",
    name: "AM Premium Green Tea 500g(Medium)",
    description: "Loose Leaf | 500g Pack | 200 Cups",
    price: 650,
    originalPrice: 850,
    rating: 4.7,
    reviews: 510,
    image: "/am250g.jpg",
    category: "green-tea",
    quantity: 4,
  },
  {
    id: 3,
    title: "AM",
    name: "AM  Premium  Green  Tea  1Kg (Bag)",
    description: "Loose Leaf | 1Kg Box | 400 Cups",
    price: 1200,
    originalPrice: 1500,
    rating: 4.8,
    reviews: 980,
    image: "am1kg.jpg",
    category: "green-tea",
    quantity: 5,
  },
  {
    id: 4,
    title: "AM",
    name: "AM Premium Green Tea 1Kg (Pouch)",
    description: "Loose Leaf | 1Kg Pouch | 400 Cups",
    price: 1180,
    originalPrice: 1480,
    rating: 4.7,
    reviews: 910,
    image: "am1kg.jpg",
    category: "green-tea",
    quantity: 5,
  },

  // --- RR Brand ---
  {
    id: 5,
    title: "RR",
    name: "RR Strong Assam Black Tea 250g (Small)",
    description: "CTC Granules | 250g Pack | 100 Cups",
    price: 320,
    originalPrice: 390,
    rating: 4.6,
    reviews: 260,
    image: "/rr1kg.jpg",
    category: "black-tea",
    quantity: 15,
  },
  {
    id: 6,
    title: "RR",
    name: "RR Strong Assam Black Tea 500g (Medium)",
    description: "CTC Granules | 500g Pack | 200 Cups",
    price: 260,
    originalPrice: 750,
    rating: 4.8,
    reviews: 390,
    image: "/rr500g.jpg",
    category: "black-tea",
    quantity: 5,
  },
  {
    id: 7,
    title: "RR",
    name: "RR Strong Assam Black Tea 1Kg (Bag)",
    description: "CTC Granules | 1Kg Box | 400 Cups",
    price: 1200,
    originalPrice: 1400,
    rating: 4.7,
    reviews: 520,
    image: "/rr1kg.jpg",
    category: "black-tea",
    quantity: 3,
  },
  {
    id: 8,
    title: "RR",
    name: "RR Strong Assam Black Tea  1Kg (Pouch)",
    description: "TC Granules | 1Kg Pouch | 400 Cups",
    price: 1150,
    originalPrice: 1350,
    rating: 4.6,
    reviews: 410,
    image: "/rr1kg.jpg",
    category: "black-tea",
    quantity: 3,
  },

  // --- UP_Divine Brand ---
  {
    id: 9,
    title: "UP_Divine",
    name: "UP Divine Herbal Tea 250gm (Small)",
    description: "Strong & Refreshing Blend | 250g Pack | 100 Cups",
    price: 350,
    originalPrice: 420,
    rating: 4.7,
    reviews: 210,
    image: "/up250g.jpg",
    category: "black-tea",
    quantity: 12,
  },
  {
    id: 10,
    title: "UP_Divine",
    name: "UP Divine Herbal Tea 500g (Medium)",
    description: "Herbal Blend | 500g Pack | 200 Cups",
    price: 700,
    originalPrice: 880,
    rating: 4.8,
    reviews: 670,
    image: "/up500g.jpg",
    category: "herbal-tea",
    quantity: 6,
  },
  {
    id: 11,
    title: "UP_Divine",
    name: "UP Divine Herbal Tea 1Kg (Box)",
    description: "Strong & Refreshing Blend | 1Kg Box | 400 Cups",
    price: 1250,
    originalPrice: 1450,
    rating: 4.7,
    reviews: 320,
    image: "/up500g.jpg",
    category: "herbal-tea",
    quantity: 2,
  },
  {
    id: 12,
    title: "UP_Divine",
    name: "UP Divine Herbal Tea 1Kg (Pouch)",
    description: "Herbal Blend | 1kg (Pouch) | 400 Cups",
    price: 1200,
    originalPrice: 1300,
    rating: 4.6,
    reviews: 180,
    image: "/up500g.jpg",
    category: "herbal-tea",
    quantity: 4,
  },

  // --- Shree Kadak Brand ---
  {
    id: 13,
    title: "Shree Kadak",
    name: "Shree Kadak Masala Chai 250g (small)",
    description: "Masala Blend | 250g Pack | 100 Cups",
    price: 1150,
    originalPrice: 1400,
    rating: 4.9,
    reviews: 1540,
    image: "/ctc1kg.jpg",
    category: "masala-tea",
    quantity: 4,
  },
  {
    id: 14,
    title: "Shree Kadak",
    name: "Shree Kadak Masala Chai 500g (Medium)",
    description: "Masala Blend | 500g Pack | 200 Cups",
    price: 620,
    originalPrice: 800,
    rating: 4.8,
    reviews: 920,
    image: "/ctc1kg.jpg",
    category: "masala-tea",
    quantity: 4,
  },
  {
    id: 15,
    title: "Shree Kadak",
    name: "Shree Kadak Masala Chai 1kg",
    description: "Masala Blend | 1kgg Pack | 400 Cups",
    price: 340,
    originalPrice: 430,
    rating: 4.7,
    reviews: 450,
    image: "/ctc1kg.jpg",
    category: "masala-tea",
    quantity: 4,
  },
  {
    id: 16,
    title: "Shree Kadak",
    name: "Shree Kadak Masala Chai 1kg",
    description: "Masala Blend | 100g Pack | 40 Cups",
    price: 170,
    originalPrice: 220,
    rating: 4.6,
    reviews: 210,
    image: "/ctc1kg.jpg",
    category: "masala-tea",
    quantity: 4,
  },
];

export function ShopAllProductss() {
  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [sortBy, setSortBy] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);
  const [viewAll, setViewAll] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  // Filtered Products by Brand and Price
  const filteredProducts = products.filter(
    (p) =>
      (!selectedBrand || p.title === selectedBrand) &&
      p.price >= priceRange[0] &&
      p.price <= priceRange[1]
  );

  const productsPerPage = 4;
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;

  const currentProducts = viewAll
    ? filteredProducts
    : filteredProducts.slice(startIndex, startIndex + productsPerPage);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#00492C] pt-20 pb-8">
        <div className="container mx-auto px-4"></div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-700 mb-4">
              All Products
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our signature tea collections across premium brands.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}

            {/* Products Grid */}
            <div className="lg:w-full">
              <div className="flex items-center justify-between mb-8">
                <p className="text-gray-600">
                  Showing {currentProducts.length} of {filteredProducts.length}{" "}
                  products
                </p>

                <div className="flex items-center gap-2">
                  <span className="text-amber-700 font-medium">Sort By:</span>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="price-low">
                        Price: Low to High
                      </SelectItem>
                      <SelectItem value="price-high">
                        Price: High to Low
                      </SelectItem>
                      <SelectItem value="rating">Rating</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
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
                        <span className="ml-2 text-sm text-gray-600">
                          {product.reviews} reviews
                        </span>
                      </div>

                      <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {product.description}
                      </p>
                      <p className="text-gray-600 mb-4">
                        quantity: {product.quantity}
                      </p>

                      <div className="flex items-center mb-4">
                        <span className="text-xl font-bold text-gray-900">
                          ₹ {product.price}
                        </span>
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

              {/* Pagination */}
              {!viewAll && totalPages > 1 && (
                <div className="flex items-center justify-center gap-4">
                  <Button
                    variant="outline"
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className="flex items-center gap-2"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Previous
                  </Button>

                  {[...Array(totalPages)].map((_, i) => (
                    <Button
                      key={i + 1}
                      variant={currentPage === i + 1 ? "default" : "outline"}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`w-10 h-10 ${
                        currentPage === i + 1
                          ? "bg-[#00492C] hover:bg-[#00492C]/90"
                          : ""
                      }`}
                    >
                      {i + 1}
                    </Button>
                  ))}

                  <Button
                    variant="outline"
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className="flex items-center gap-2"
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}

              {/* View All / Show Less */}
              <div className="text-center mt-8">
                {!viewAll ? (
                  <Button
                    variant="outline"
                    onClick={() => setViewAll(true)}
                    className="text-[#00492C] border-[#00492C] hover:bg-[#00492C] hover:text-white bg-transparent"
                  >
                    VIEW ALL
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    onClick={() => {
                      setViewAll(false);
                      setCurrentPage(1);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="text-[#00492C] border-[#00492C] hover:bg-[#00492C] hover:text-white bg-transparent"
                  >
                    SHOW LESS
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
