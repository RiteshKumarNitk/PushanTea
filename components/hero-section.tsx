"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

import bgVideo from "../public/assets/video/vvv.mp4";

const statsData = [
  "Featured on the Ellen's Show",
  "6 Million Customers",
  "2,50,000+ 4.9 Star Ratings",
  "Oprah's Favorite Things 2018 & 2019",
  "Award Winning Teas",
  "Direct from Source",
  "Carbon Neutral Shipping",
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sBJy17Hsn9CrPuMwJ8AbpJd48coJbV.png"
          alt="Tea plantation workers in the mountains"
          className="w-full h-full object-cover"
        /> */}
        {/* <video
            src={bgVideo}
            controls
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          /> */}
          <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/assets/video/vvv.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center flex-1 flex flex-col justify-center pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-[#fff] font-serif"
          >
            India's Finest Teas
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl mb-8 text-[#fff]/80 font-medium"
          >
            Door Delivered Across India
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-[#00492C] hover:bg-[#00492C]/90 text-white px-8 py-4 text-lg font-semibold rounded-sm transition-all duration-300"
            >
              SHOP NOW
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-0 left-0 right-0 z-10"
      >
        <div className="bg-black/80 backdrop-blur-sm py-4 overflow-hidden">
          <div className="flex animate-scroll">
            {/* First set of stats */}
            <div className="flex items-center gap-8 text-white text-sm font-medium whitespace-nowrap px-8">
              {statsData.map((stat, index) => (
                <div key={index} className="flex items-center gap-8">
                  <span className="font-semibold tracking-wide">{stat}</span>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex items-center gap-8 text-white text-sm font-medium whitespace-nowrap px-8">
              {statsData.map((stat, index) => (
                <div key={`duplicate-${index}`} className="flex items-center gap-8">
                  <span className="font-semibold tracking-wide">{stat}</span>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
