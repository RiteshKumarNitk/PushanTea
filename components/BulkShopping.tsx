"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  brand: string;
  image: string;
  packages: { size: string; price: number }[];
}

const products: Product[] = [
  {
    id: 1,
    brand: "Amchi Mumbai",
    name: "Premium Black Tea",
    image: "/AM.jpg",
    packages: [
      { size: "250g", price: 350 },
      { size: "500g", price: 600 },
      { size: "1Kg (Box)", price: 1100 },
      { size: "1Kg Pouch", price: 950 },
    ],
  },
  {
    id: 2,
    brand: "Rajasthan Royal",
    name: "Royal Masala Tea",
    image: "/RR.jpg",
    packages: [
      { size: "250g", price: 320 },
      { size: "500g", price: 590 },
      { size: "1Kg (Box)", price: 1050 },
      { size: "1Kg Pouch", price: 900 },
    ],
  },
  {
    id: 3,
    brand: "UP Divine",
    name: "Herbal Wellness Tea",
    image: "/divine_up.jpg",
    packages: [
      { size: "250g", price: 400 },
      { size: "500g", price: 700 },
      { size: "1Kg (Box)", price: 1300 },
      { size: "1Kg Pouch", price: 1100 },
    ],
  },
  {
    id: 4,
    brand: "Shree Kadak",
    name: "Kadak Chai Blend",
    image: "/ctc.jpg",
    packages: [
      { size: "250g", price: 340 },
      { size: "500g", price: 620 },
      { size: "1Kg (Box)", price: 1150 },
      { size: "1Kg Pouch", price: 950 },
    ],
  },
];

export default function BulkShopping() {
  const [quantities, setQuantities] = useState<Record<string, Record<string, string>>>(
    () => {
      const initial: Record<string, Record<string, string>> = {};
      products.forEach((p) => {
        initial[p.brand] = {};
        p.packages.forEach((pkg) => (initial[p.brand][pkg.size] = ""));
      });
      return initial;
    }
  );

  const handleChange = (brand: string, size: string, value: string) => {
    setQuantities((prev) => ({
      ...prev,
      [brand]: { ...prev[brand], [size]: value },
    }));
  };

  const calculateGrandTotal = (brand: string) => {
    const product = products.find((p) => p.brand === brand);
    if (!product) return 0;

    return product.packages.reduce((total, pkg) => {
      const qty = parseInt(quantities[brand][pkg.size]) || 0;
      return total + qty * pkg.price;
    }, 0);
  };

  const handleSubmit = async () => {
    console.log("Final Order:", quantities);

    try {
      const res = await fetch("/api/submit-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(quantities),
      });

      if (!res.ok) throw new Error("Failed to submit order");
      alert("Bulk Order submitted successfully!");
    } catch (error) {
      alert("Error submitting order");
      console.error(error);
    }
  };

  return (

    <>

    <div className="bg-gray-50">
      {/* ✅ Full-Width Banner Image */}
      <div className=" pt-16">
        <img
          src="/bulk.png"
          alt="Bulk Orders"
          className="w-full"
        />
      </div>

      {/* ✅ Page Content Section */}
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Top Section: Wholesale Dry Fruits Description */}
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
  Wholesale Tea Supply
</h1>
<p className="text-gray-700 leading-relaxed mb-4">
  Pushan Tea offers an exclusive wholesale program for businesses and distributors who wish to purchase our premium teas in bulk. Whether you run a café, tea shop, hotel, or corporate pantry — we deliver authentic, aromatic blends straight from our tea gardens at the best industry prices.
</p>
<p className="text-gray-700 leading-relaxed">
  From rich Assam and soothing Darjeeling to refreshing Green Tea and signature Pushan Blends — every leaf is handpicked and packed with care to preserve freshness and flavor. Partner with us for bulk orders and experience the purity, consistency, and unmatched taste that Pushan Tea is known for.
</p>

          </div>

          {/* Contact/CTA Section */}
          <div className="bg-white shadow-xl rounded-lg overflow-hidden lg:flex">
            
            {/* Left Side: Call to Action */}
            <div className="bg-[#5a1a1a] text-white p-8 lg:w-1/3 flex flex-col justify-center">
              <h2 className="text-4xl md:text-3xl font-bold leading-tight mb-6">
                Let’s Get the Business Started!
              </h2>
              <h3 className="text-3xl md:text-2xl font-semibold mb-10">
                Reach Out to Us Today
              </h3>
              
              {/* Follow Us Section */}
              <div>
                <p className="text-lg font-semibold mb-4">Follow Us</p>
                <div className="flex space-x-4">
                  <a href="#" className="p-2 border border-white rounded-full hover:bg-white hover:text-[#5a1a1a] transition duration-300"><Facebook className="w-5 h-5" /></a>
                  <a href="#" className="p-2 border border-white rounded-full hover:bg-white hover:text-[#5a1a1a] transition duration-300"><Twitter className="w-5 h-5" /></a>
                  <a href="#" className="p-2 border border-white rounded-full hover:bg-white hover:text-[#5a1a1a] transition duration-300"><Linkedin className="w-5 h-5" /></a>
                  <a href="#" className="p-2 border border-white rounded-full hover:bg-white hover:text-[#5a1a1a] transition duration-300"><Instagram className="w-5 h-5" /></a>
                </div>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="p-8 lg:w-2/3">
              <form className="space-y-6">
                
                {/* Name and Mobile No. */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name *</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your Name"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-[#5a1a1a] focus:border-[#5a1a1a] sm:text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile No. *</label>
                    <input
                      type="tel"
                      name="mobile"
                      id="mobile"
                      placeholder="Mobile No."
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-[#5a1a1a] focus:border-[#5a1a1a] sm:text-sm"
                      required
                    />
                  </div>
                </div>

                {/* Email Id and Subject */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Id *</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email Id"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-[#5a1a1a] focus:border-[#5a1a1a] sm:text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-[#5a1a1a] focus:border-[#5a1a1a] sm:text-sm"
                      required
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#5a1a1a] hover:bg-[#4d1616] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5a1a1a]"
                  >
                    Send Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="min-h-screen bg-gradient-to-b pt-15 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-3">
            Bulk Order With Pushaan Tea
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select quantities for your preferred tea brands and packages. Get
            exclusive bulk discounts and premium packaging options.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute bottom-0 w-full bg-black/60 text-white text-center py-2 font-semibold">
                    {product.brand}
                  </div>
                </div>

                <CardContent className="p-5">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {product.name}
                  </h3>

                  <div className="space-y-3">
                    {product.packages.map((pkg) => (
                      <div
                        key={pkg.size}
                        className="flex justify-between items-center border rounded-lg px-3 py-2"
                      >
                        <div>
                          <p className="font-medium text-gray-700">{pkg.size}</p>
                          <p className="text-sm text-gray-500">₹{pkg.price}</p>
                        </div>

                        <input
                          type="number"
                          min="0"
                          value={quantities[product.brand][pkg.size]}
                          onChange={(e) =>
                            handleChange(product.brand, pkg.size, e.target.value)
                          }
                          className="w-20 border rounded px-2 py-1 text-center"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 font-semibold text-amber-700">
                    Total: ₹{calculateGrandTotal(product.brand)}
                  </div>

                  <Button className="mt-4 w-full bg-amber-700 hover:bg-amber-800 text-white rounded-lg">
                    Add to Bulk Order
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>


        {/* Summary Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">
            🧾 Your Bulk Order Summary
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-lg">
              <thead className="bg-amber-100">
                <tr>
                  <th className="py-3 px-4 text-left">Brand</th>
                  <th className="py-3 px-4 text-left">Package</th>
                  <th className="py-3 px-4 text-center">Quantity</th>
                  <th className="py-3 px-4 text-right">Subtotal (₹)</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) =>
                  product.packages.map((pkg) => {
                    const qty = parseInt(quantities[product.brand][pkg.size]) || 0;
                    if (qty === 0) return null;
                    const subtotal = qty * pkg.price;
                    return (
                      <tr key={`${product.brand}-${pkg.size}`} className="border-t">
                        <td className="py-3 px-4">{product.brand}</td>
                        <td className="py-3 px-4">{pkg.size}</td>
                        <td className="py-3 px-4 text-center">{qty}</td>
                        <td className="py-3 px-4 text-right">₹{subtotal}</td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          {/* Grand Total */}
          <div className="mt-6 flex justify-end text-xl font-semibold text-amber-800">
            Grand Total: ₹
            {products.reduce((grand, product) => {
              return (
                grand +
                product.packages.reduce((total, pkg) => {
                  const qty = parseInt(quantities[product.brand][pkg.size]) || 0;
                  return total + qty * pkg.price;
                }, 0)
              );
            }, 0)}
          </div>

          {/* Submit Button */}
          <div className="text-center mt-8">
            <Button
              onClick={handleSubmit}
              className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-xl text-lg"
            >
              Submit Bulk Order
            </Button>
          </div>
        </div>

      </div>
    </div></>
  );
}
