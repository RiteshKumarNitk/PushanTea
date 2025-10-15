"use client"

import { X } from "lucide-react"
import { motion } from "framer-motion"

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 p-4"
        >
          <div className="flex justify-between items-center border-b pb-2 mb-4">
            <h2 className="text-lg font-bold text-[#00492C]">Your Cart</h2>
            <button onClick={onClose}>
              <X className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          {/* Dummy products for frontend */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Chamomile Tea</p>
                <p className="text-sm text-gray-500">₹200</p>
              </div>
              <span className="text-sm">x1</span>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Turmeric & Spice</p>
                <p className="text-sm text-gray-500">₹350</p>
              </div>
              <span className="text-sm">x2</span>
            </div>
          </div>

          {/* Checkout button */}
          <div className="mt-6">
            <button className="w-full bg-[#00492C] text-white py-2 rounded-lg hover:bg-green-900 transition">
              Checkout
            </button>
          </div>
        </motion.div>
      )}
    </>
  )
}
