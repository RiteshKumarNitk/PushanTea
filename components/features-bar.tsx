"use client"

import { ShieldCheck, Truck, RotateCcw, Headphones } from "lucide-react"
import { motion } from "framer-motion"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const features = [
    {
        icon: ShieldCheck,
        title: "PREMIUM QUALITY",
        subtitle: "100% Quality Guarantee",
    },
    {
        icon: Truck,
        title: "SWIFT SHIPPING",
        subtitle: "Delivering across India",
    },
    {
        icon: RotateCcw,
        title: "EASY RETURN",
        subtitle: "Refer return policy",
    },
    {
        icon: Headphones,
        title: "24/7 SUPPORT",
        subtitle: "Support every time",
    },
]

export function FeaturesBar() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    return (
        <div className="w-full bg-white py-8 lg:py-10 border-y border-gray-100 overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                <Slider {...settings} className="features-slider">
                    {features.map((feature, index) => (
                        <div key={index} className="outline-none">
                            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 py-2">
                                <div className="flex-shrink-0">
                                    <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center ring-1 ring-amber-100/50">
                                        <feature.icon className="w-6 h-6 text-amber-900" strokeWidth={1.5} />
                                    </div>
                                </div>
                                <div className="text-center sm:text-left">
                                    <h3 className="text-[11px] lg:text-xs font-bold text-amber-900 tracking-[0.15em] mb-1">
                                        {feature.title}
                                    </h3>
                                    <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">
                                        {feature.subtitle}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <style jsx global>{`
        .features-slider .slick-track {
          display: flex !important;
          align-items: center !important;
        }
        .features-slider .slick-slide > div {
          display: flex;
          justify-content: center;
        }
      `}</style>
        </div>
    )
}
