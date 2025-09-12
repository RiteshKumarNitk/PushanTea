"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Leaf, Recycle, TreePine, Droplets, Sun, Globe } from "lucide-react"

const initiatives = [
  {
    icon: Leaf,
    title: "Carbon Neutral Shipping",
    description: "100% carbon-neutral shipping across all our global deliveries through verified offset programs.",
    metric: "0kg CO₂",
  },
  {
    icon: TreePine,
    title: "Reforestation Program",
    description: "Planting native trees in tea-growing regions to restore biodiversity and combat climate change.",
    metric: "50K+ Trees",
  },
  {
    icon: Recycle,
    title: "Sustainable Packaging",
    description: "Biodegradable tea bags and recyclable packaging materials to minimize environmental impact.",
    metric: "100% Recyclable",
  },
  {
    icon: Droplets,
    title: "Water Conservation",
    description: "Supporting water-efficient farming practices and rainwater harvesting in tea gardens.",
    metric: "30% Less Water",
  },
  {
    icon: Sun,
    title: "Solar-Powered Facilities",
    description: "Transitioning to renewable energy sources across our processing and packaging facilities.",
    metric: "80% Solar",
  },
  {
    icon: Globe,
    title: "Biodiversity Protection",
    description: "Preserving natural habitats and promoting organic farming practices in tea-growing regions.",
    metric: "500+ Species",
  },
]

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
          <p className="text-sm uppercase tracking-wider text-green-600 mb-2">SUSTAINABILITY</p>
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
              <p className="text-green-100 mb-6 leading-relaxed">
                We're on a mission to achieve complete carbon neutrality across our entire supply chain by 2025. From
                farm to cup, every step of our process is being optimized for minimal environmental impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg" className="bg-white text-green-700 hover:bg-green-50">
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
                <p className="text-sm text-green-100">Carbon Reduction</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold mb-1">2025</div>
                <p className="text-sm text-green-100">Net Zero Target</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold mb-1">100%</div>
                <p className="text-sm text-green-100">Renewable Energy</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold mb-1">50K+</div>
                <p className="text-sm text-green-100">Trees Planted</p>
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
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Our Green Initiatives</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive sustainability programs that make a real difference for our planet and communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full bg-card border border-border hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                      <initiative.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-card-foreground mb-2">{initiative.title}</h4>
                      <div className="text-sm font-medium text-green-600 mb-2">{initiative.metric}</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{initiative.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-muted/30 rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Join Our Sustainability Journey</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every cup of VAHDAM tea you enjoy contributes to our environmental initiatives. Together, we can create a
            more sustainable future for tea and our planet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Learn More About Our Impact
            </Button>
            <Button variant="outline" size="lg">
              Download Sustainability Report
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
