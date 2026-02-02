"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"

// Import leaflet map dynamically to avoid SSR issues
const FranchiseeMap = dynamic(() => import("./franchisee-map").then((mod) => mod.default), {
  ssr: false,
  loading: () => <div className="w-full h-[420px] bg-gray-100 animate-pulse rounded-3xl" />
});

export function EnvironmentalSection() {
  return (
    <section className="py-12 bg-gradient-to-b from-green-50/50 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Global Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-muted/30 rounded-2xl p-6 md:p-10 mb-10"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Our Global Impact
            </h3>
            <p className="text-muted-foreground">Making a difference, one cup at a time</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">100K+</div>
              <p className="text-muted-foreground text-sm">Tea Growers Supported</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">100+</div>
              <p className="text-muted-foreground text-sm">Countries Served</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">5M+</div>
              <p className="text-muted-foreground text-sm">Cups Enjoyed Daily</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">₹50Cr+</div>
              <p className="text-muted-foreground text-sm">Paid to Growers</p>
            </div>
          </div>
        </motion.div>

        {/* Franchisee Network Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-10"
        >
          {/* Text Section */}
          <div className="w-full text-center max-w-4xl">
            <h3 className="text-4xl md:text-5xl font-extrabold text-[#00492C] mb-6">
              Our Franchisee Network
            </h3>
            <p className="text-muted-foreground text-lg md:text-xl mb-6 leading-relaxed">
              Experience the PUSHAAN legacy at any of our outlets. We are rapidly expanding across mainland India
              with a strong network of 150+ dedicated franchisees delivering field-fresh tea to your doorstep.
            </p>
          </div>

          {/* Fully Enhanced Map - Now with more space */}
          <div className="w-full h-[500px] md:h-[650px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 ring-1 ring-gray-200">
            <FranchiseeMap />
          </div>
        </motion.div>

      </div>
    </section>
  )
}

{/* Header */ }
{/* <motion.div
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
{/* <motion.div
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
        </motion.div> */}

{/* Initiatives Grid */ }
{/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >


         
        </motion.div> */}

{/* Call to Action */ }
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
