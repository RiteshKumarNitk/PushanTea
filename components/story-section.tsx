"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, Users, Leaf, Award } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Direct Trade",
    description:
      "We work directly with tea growers, ensuring fair prices and sustainable livelihoods for farming communities.",
  },
  {
    icon: Users,
    title: "Community Impact",
    description:
      "Supporting over 100,000 tea growers and their families across India through our direct-trade initiatives.",
  },
  {
    icon: Leaf,
    title: "Freshness Guarantee",
    description:
      "Garden-fresh teas shipped directly from source within 24-72 hours of production for maximum freshness.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "Award-winning teas sourced from the finest tea gardens in India, carefully curated for exceptional taste.",
  },
]

export function StorySection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Story Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto mb-16">
          {/* Story Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">OUR STORY</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                From Garden to Cup, Revolutionizing Tea
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2015 by Bala Sarda, PUSHAN Teas was born from a simple yet powerful vision: to make the
                world's finest teas accessible globally while ensuring tea growers receive fair compensation for their
                exceptional produce.
              </p>

              <p>
                Our journey began in the lush tea gardens of India, where we discovered that despite producing the
                world's finest teas, local growers were receiving only a fraction of the value their teas commanded in
                international markets.
              </p>

              <p>
                Today, we're proud to be India's first digitally native, global tea brand, shipping garden-fresh teas to
                over 100 countries while directly impacting the lives of more than 100,000 tea growers and their
                families.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Learn Our Story
              </Button>
              <Button variant="outline" size="lg">
                Meet Our Growers
              </Button>
            </div>
          </motion.div>

          {/* Founder Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="../public/assets/products/divineproduct.png"
                alt="Bala Sarda, Founder of PUSHAN Teas in tea garden"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-semibold mb-1">Bala Sarda</h3>
                <p className="text-sm opacity-90">Founder & CEO, PUSHAN Teas</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Our Core Values</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every cup of PUSHAN tea represents our commitment to quality, sustainability, and social impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full bg-card border border-border hover:shadow-lg transition-all duration-300 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-card-foreground mb-3">{value.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 bg-muted/30 rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Our Global Impact</h3>
            <p className="text-muted-foreground">Making a difference, one cup at a time</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100K+</div>
              <p className="text-muted-foreground">Tea Growers Supported</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100+</div>
              <p className="text-muted-foreground">Countries Served</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5M+</div>
              <p className="text-muted-foreground">Cups Enjoyed Daily</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">₹50Cr+</div>
              <p className="text-muted-foreground">Paid to Growers</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
