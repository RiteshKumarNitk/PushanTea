"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Leaf, Recycle, TreePine, Droplets, Sun, Globe } from "lucide-react"


export function EnvironmentalSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-green-50/50 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <p className="text-sm uppercase tracking-wider text-[#00492C] mb-2">SUSTAINABILITY</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Brewing a Better Future for Our Planet
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our commitment to environmental stewardship goes beyond great tea. We're dedicated to sustainable practices
            that protect our planet and support the communities that grow our teas.
          </p>
        </motion.div>

        {/* Main Environmental Promise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-12 text-white mb-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/tea-plantation-aerial.jpg')] bg-cover bg-center opacity-20" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Carbon Neutral by 2025</h3>
              <p className="text-[#00492C]/10 mb-6 leading-relaxed">
                We're on a mission to achieve complete carbon neutrality across our entire supply chain by 2025. From
                farm to cup, every step of our process is being optimized for minimal environmental impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg" className="bg-white text-[#00492C]/70 hover:bg-green-50">
                  View Our Progress
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  Sustainability Report
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold mb-1">85%</div>
                <p className="text-sm text-white">Carbon Reduction</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold mb-1">2025</div>
                <p className="text-sm text-white">Net Zero Target</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold mb-1">100%</div>
                <p className="text-sm text-white">Renewable Energy</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold mb-1">50K+</div>
                <p className="text-sm  text-white">Trees Planted</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Initiatives Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >


         
        </motion.div>

        {/* Call to Action */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-muted/30 rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Join Our Sustainability Journey</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every cup of PUSHAAN tea you enjoy contributes to our environmental initiatives. Together, we can create a
            more sustainable future for tea and our planet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="[bg-[#00492C]/60 hover:bg-[#00492C]/70">
              Learn More About Our Impact
            </Button>
            <Button variant="outline" size="lg">
              Download Sustainability Report
            </Button>
          </div>
        </motion.div> */}

      
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="py-20 container mx-auto px-4 sm:px-6 lg:px-8"
>
  <div className="flex flex-col md:flex-row items-center gap-12">
    {/* Content */}
    <div className="md:w-1/2 text-center md:text-left">
      <h3 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
        Our Global Footprint
      </h3>
      <p className="text-muted-foreground text-lg md:text-xl mb-4 leading-relaxed">
        PUSHAAN Tea has a growing presence across the globe. Our factories and production units are strategically
        located in key tea-growing regions to ensure quality and freshness. This map highlights the locations of
        our main facilities, helping you understand how we deliver sustainable, high-quality tea from farm to cup.
      </p>
      <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
        Each facility follows strict sustainability and quality standards, ensuring that our environmental and social
        commitments are met wherever we operate.
      </p>
    </div>

    {/* Image */}
    <div className="md:w-1/2">
      <div className="relative w-full h-96 md:h-[500px] overflow-hidden rounded-3xl shadow-2xl">
        <img
          src="/map.jpg"
          alt="PUSHAAN Tea Factory Locations"
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
    </div>
  </div>
</motion.div>

      </div>
    </section>
  )
}
