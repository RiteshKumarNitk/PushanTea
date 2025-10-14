"use client"

import Slider from "react-slick"
import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  { id: 1, name: "Riya Sharma", title: "Interior Designer", image: "/test1.png", quote: "PUSHAAN Tea has become a perfect part of my morning routine. Every cup brings a unique touch of freshness and flavor." },
  { id: 2, name: "Arpita Verma", title: "Software Engineer", image: "/test3.png", quote: "I’ve been drinking green tea for a long time, but the taste and aroma of PUSHAAN feel truly natural and soothing. Highly recommended!" },
  { id: 3, name: "Nilesh Patil", title: "Yoga Instructor", image: "/test2.png", quote: "Having a cup of PUSHAAN Tea after my morning yoga feels like a peaceful moment. It’s perfectly balanced — both organic and refreshing." },
  { id: 4, name: "Rahul Mehta", title: "Business Consultant", image: "/rahul-mehta.png", quote: "I’m a tea lover, and PUSHAAN’s teas have truly impressed me. Both the quality and packaging are absolutely premium." },
  { id: 5, name: "Anjali Nair", title: "Nutrition Expert", image: "/test4.png", quote: "PUSHAAN Tea is the perfect choice for healthy living. With natural ingredients and a balanced flavor, it’s now an essential part of my daily routine." },
]

export function TestimonialSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  }

  return (
    <section className="py-16 bg-amber-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wider text-black mb-2">Trusted by Tea Lovers</p>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">What Our Customers Say</h2>
          <p className="text-lg text-black max-w-2xl mx-auto">Hear from tea lovers across India who made PUSHAAN part of their daily wellness ritual.</p>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {testimonials.map((t) => (
            <div key={t.id} className="px-2">
              <Card className="h-full p-6 bg-white border border-green-200 rounded-lg">
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-green-900" />
                </div>
                <blockquote className="text-green-900 mb-6 leading-relaxed">“{t.quote}”</blockquote>
                <div className="flex items-center space-x-4">
                  <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover border-2 border-green-200" />
                  <div>
                    <h4 className="font-semibold text-green-900">{t.name}</h4>
                    <p className="text-sm text-green-700">{t.title}</p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}
