"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Oprah Winfrey",
    title: "Media Mogul & Philanthropist",
    image: "/oprah-winfrey-portrait.jpg",
    quote:
      "VAHDAM Teas has become my go-to for premium quality teas. The freshness and flavor are unmatched, and I love supporting their direct-trade mission.",
    featured: true,
  },
  {
    id: 2,
    name: "Ellen DeGeneres",
    title: "Television Host & Comedian",
    image: "/ellen-degeneres-portrait.jpg",
    quote:
      "I'm obsessed with VAHDAM's tea collection! The quality is exceptional and knowing that it supports tea growers directly makes every cup even more special.",
    featured: false,
  },
  {
    id: 3,
    name: "Mariah Carey",
    title: "Singer & Songwriter",
    image: "/mariah-carey-portrait.jpg",
    quote:
      "VAHDAM Teas brings the authentic taste of India to my daily routine. The premium quality and ethical sourcing make it my favorite tea brand.",
    featured: false,
  },
]

export function TestimonialSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">LOVED BY CELEBRITIES</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">What They're Saying</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Discover why celebrities and tea lovers worldwide choose VAHDAM for their daily tea ritual
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`${testimonial.featured ? "lg:col-span-1 lg:row-span-1" : ""}`}
            >
              <Card
                className={`h-full p-6 bg-card border border-border hover:shadow-lg transition-all duration-300 ${
                  testimonial.featured ? "lg:p-8" : ""
                }`}
              >
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary" />
                </div>

                {/* Testimonial Quote */}
                <blockquote className="text-card-foreground mb-6 leading-relaxed">"{testimonial.quote}"</blockquote>

                {/* Celebrity Info */}
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img
                      src={testimonial.image || "/placeholder.svg?height=60&width=60"}
                      alt={testimonial.name}
                      className="w-15 h-15 rounded-full object-cover border-2 border-primary/20"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary mb-2">1M+</div>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary mb-2">4.8★</div>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <p className="text-muted-foreground">Countries Served</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
