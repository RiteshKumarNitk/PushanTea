"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Leaf, Heart, Globe, Award, Users, Truck } from "lucide-react"

export function AboutContent() {
  const values = [
    {
      icon: Leaf,
      title: "Sustainability",
      description: "We're committed to sustainable farming practices and carbon-neutral operations.",
    },
    {
      icon: Heart,
      title: "Quality",
      description: "Every tea is carefully sourced from the finest gardens and processed with love.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Bringing authentic Indian teas to tea lovers across 100+ countries worldwide.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Award-winning teas recognized by Oprah, Ellen, and tea connoisseurs globally.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Supporting tea garden communities and empowering local farmers.",
    },
    {
      icon: Truck,
      title: "Direct Trade",
      description: "Farm-to-cup freshness with direct relationships with tea gardens.",
    },
  ]

  const milestones = [
    { year: "2015", event: "VAHDAM founded by Bala Sarda" },
    { year: "2016", event: "First international shipment to USA" },
    { year: "2018", event: "Featured in Oprah's Favorite Things" },
    { year: "2019", event: "Reached 1 million customers globally" },
    { year: "2020", event: "Launched carbon-neutral initiative" },
    { year: "2023", event: "Serving 6+ million customers worldwide" },
  ]

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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Story</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              From a small dream in India to serving millions of tea lovers worldwide, discover the journey of VAHDAM
              Teas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="/bala-sarda-vahdam-founder-portrait.jpg"
                alt="Bala Sarda - Founder of VAHDAM"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#00492C] mb-6">Meet Our Founder</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Bala Sarda, a 4th generation tea entrepreneur, founded VAHDAM in 2015 with a revolutionary vision: to
                make India's finest teas accessible to the world while ensuring freshness and quality at every step.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Coming from a family deeply rooted in the tea industry, Bala witnessed the disconnect between tea
                gardens and consumers. His mission was to bridge this gap by creating a direct-to-consumer brand that
                celebrates India's rich tea heritage.
              </p>
              <Button className="bg-[#00492C] hover:bg-[#00492C]/90 text-white px-8 py-3">
                Learn More About Our Mission
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#00492C] mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do, from sourcing to serving.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#00492C]/10 rounded-lg flex items-center justify-center mr-4">
                    <value.icon className="h-6 w-6 text-[#00492C]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#00492C] mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key milestones that shaped VAHDAM into the global tea brand it is today.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center mb-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold text-[#00492C] mb-2">{milestone.year}</h3>
                    <p className="text-gray-700">{milestone.event}</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-[#00492C] rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-[#00492C] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl max-w-2xl mx-auto">
              Numbers that reflect our commitment to quality, sustainability, and community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "6M+", label: "Happy Customers" },
              { number: "100+", label: "Countries Served" },
              { number: "250K+", label: "5-Star Reviews" },
              { number: "Carbon", label: "Neutral Operations" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#00492C] mb-6">Join Our Tea Journey</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Experience the finest teas from India, delivered fresh to your doorstep. Become part of our global
              tea-loving community.
            </p>
            <Button className="bg-[#00492C] hover:bg-[#00492C]/90 text-white px-8 py-3 text-lg">Shop Our Teas</Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
