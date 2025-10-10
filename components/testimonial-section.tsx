"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Riya Sharma",
    title: "Interior Designer",
    image: "/test1.png",
    quote:
      "PUSHAAN Tea has become a perfect part of my morning routine. Every cup brings a unique touch of freshness and flavor.",
  },
  {
    id: 2,
    name: "Amit Verma",
    title: "Software Engineer",
    image: "/test3.png",
    quote:
      "I’ve been drinking green tea for a long time, but the taste and aroma of PUSHAAN feel truly natural and soothing. Highly recommended!",
  },
  {
    id: 3,
    name: "Neha Patil",
    title: "Yoga Instructor",
    image: "/test2.png",
    quote:
      "Having a cup of PUSHAAN Tea after my morning yoga feels like a peaceful moment. It’s perfectly balanced — both organic and refreshing.",
  },
  {
    id: 4,
    name: "Rahul Mehta",
    title: "Business Consultant",
    image: "/rahul-mehta.png",
    quote:
      "I’m a tea lover, and PUSHAAN’s teas have truly impressed me. Both the quality and packaging are absolutely premium.",
  },
  {
    id: 5,
    name: "Anjali Nair",
    title: "Nutrition Expert",
    image: "/test4.png",
    quote:
      "PUSHAAN Tea is the perfect choice for healthy living. With natural ingredients and a balanced flavor, it’s now an essential part of my daily routine.",
  },
]

export function TestimonialSection() {
  const [index, setIndex] = useState(0)

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  // Show 3 testimonials at a time
  const visibleTestimonials = [
    testimonials[index],
    testimonials[(index + 1) % testimonials.length],
    testimonials[(index + 2) % testimonials.length],
  ]

  return (
    <section className="py-16 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
            Trusted by Tea Lovers
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from tea lovers across India who made PUSHAAN part of their daily wellness ritual.
          </p>
        </motion.div>

        {/* Sliding Testimonials */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            key={index}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {visibleTestimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="h-full p-6 bg-card border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary" />
                </div>
                <blockquote className="text-card-foreground mb-6 leading-relaxed">
                  “{testimonial.quote}”
                </blockquote>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image || "/placeholder.svg?height=60&width=60"}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <h4 className="font-semibold text-card-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </Card>
            ))}
          </motion.div>
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
              <div className="text-3xl font-bold text-primary mb-2">1L+</div>
              <p className="text-muted-foreground">Khush Customers</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary mb-2">4.9★</div>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary mb-2">30+</div>
              <p className="text-muted-foreground">Cities Served</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
