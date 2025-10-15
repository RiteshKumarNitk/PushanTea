"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const categories = [
  {
    id: 2,
    title: "Shree Kadak",
    image: "/ctc.jpg",
    description: "18 Count (Pack of 6) | 108 Total Tea Bags",
  },
  {
    id: 2,
    title: "Divine UP",
    image: "/divine_up.jpg",
    description: "18 Count (Pack of 6) | 108 Total Tea Bags",
  },
  {
    id: 3,
    title: "Royal Rajasthan",
    image: "/RR.jpg",
    description: "18 Count (Pack of 6) | 108 Total Tea Bags",
  },
  {
    id: 4,
    title: "Aamchi Mumbai",
    image: "/AM.jpg",
    description: "20 Count (Pack of 6) | 120 Total Tea Bags",
  },
];

const infoSections = [ { 
  id: 1,
   title: "Rooted in the Tea Gardens",
  description: "Pushaan Tea begins its journey right here, in the heart of lush green tea gardens where skilled hands carefully pluck the finest leaves. These gardens are more than just fields — they are home to traditions, families, and generations who dedicate their lives to nurturing tea. At Pushaan, we believe in honoring their hard work by ensuring fair practices, sustainable growth, and unwavering quality. Every packet of Pushaan Tea you hold carries with it the essence of these gardens, the smiles of the people behind it, and the purity of nature itself.",
   image: "/factory.jpg",
    reverse: false,
   } , 
  { id: 2, 
    title: "Machinery",
   description: "Our high-tech machinery is at the heart of our production process. We use precision-engineered equipment for withering, rolling, drying, and blending, which allows us to maintain uniform quality across every batch. The machines are regularly inspected and maintained to guarantee optimal performance, reducing waste and preserving the integrity of the tea leaves. Automation in certain processes ensures speed without compromising quality, while sensitive stages are carefully handled by skilled technicians to maintain the traditional touch that makes our teas unique.", 
  image: "/machinery.png",
  reverse: true,
 },
     
 { 
  id: 3,
  title: "Storage", 
  description: "Proper storage is crucial to preserving the freshness, aroma, and flavor of our teas. Our storage facilities are climate-controlled to maintain optimal temperature and humidity, preventing any deterioration. Each type of tea has its dedicated storage section, clearly labeled and monitored to ensure batch traceability. We follow strict hygiene protocols, and storage areas are routinely sanitized. Additionally, we use eco-friendly, airtight packaging materials that maintain tea quality from our factory to your cup.", 
  image: "/storage1.png",
   reverse: false,
   }, 
   { 
    id: 4,   
    title: "Hygiene & Working",
   description: "Hygiene and cleanliness are at the core of our production process. All staff are trained in proper food handling and hygiene practices. Our working areas are regularly sanitized, and machinery is cleaned multiple times a day to prevent contamination. Protective clothing, gloves, and masks are mandatory for all personnel in production zones. We follow strict international standards for workplace safety and hygiene, ensuring that every product leaving our factory is safe, high-quality, and prepared with care. Employee wellness programs ensure a healthy and motivated workforce, further contributing to quality and consistency.", 
   image: "/working.png", 
   reverse: true,
   }, 
   { 
    id: 5, 
    title: "Testing & Quality", 
    description: "At Pushaan Tea, we believe that great tea deserves great packaging. Our packaging process is designed to lock in freshness and aroma until the very last sip. Each batch undergoes multiple rounds of quality checks to ensure consistency in flavor, color, and fragrance. We use food-grade, eco-friendly materials that not only protect the tea but also reflect our commitment to sustainability. Every pouch and box is sealed with care, ensuring that when you open a pack of Pushaan Tea, you experience purity straight from the source.",
     image: "/testing.png", 
     reverse: false,
     },
     
     
     { id: 6, 
      title: "Trusted by Generations", 
      description: "Pushaan Tea stands as a symbol of trust, purity, and tradition. Over the years, we’ve built lasting relationships with our customers by delivering authentic flavors and uncompromised quality. Families across generations have chosen Pushaan Tea as a part of their daily life — a comforting ritual that brings people together. Our brand’s journey is guided by transparency, integrity, and a deep respect for nature and community. When you choose Pushaan, you choose a heritage of trust that continues to grow, cup after cup.",
       image: "/team.jpg", 
       reverse: true,
       },
       ]

export function CategorySection() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="bg-gradient-to-b from-white to-amber-50/30">

       <div className="w-full">
        <img
          src="/lastimage.jpg"
          alt="Pushan Tea Team"
          className="w-full"
        />
      </div>
      {/* ======= Category Section ======= */}
      <div className="py-16 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-wider text-gray-800 mb-2 font-medium">
            SOMETHING FOR EVERYONE
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-amber-700 font-[Inter]">
            Shop by Category
          </h2>
        </motion.div>

        {/* === Category Slider === */}
        <div className="max-w-7xl mx-auto">
          <Slider {...sliderSettings}>
            {categories.map((category, index) => (
              <div key={category.id} className="px-4">
                <Link href="/shop">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="group cursor-pointer"
                  >
                    <div className="text-center">
                      <div className="relative w-72 h-96 mx-auto mb-8 overflow-hidden bg-[#00492C] shadow-2xl rounded-t-full">
                        <img
                          src={category.image || "/placeholder.svg"}
                          alt={category.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 tracking-wide">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 mt-2 text-sm">
                        {category.description}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* === Our Core Values Heading === */}
      <div className="text-center mb-12">
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Our Core Values
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Every cup of PUSHAAN tea represents our commitment to quality,
          sustainability, and social impact
        </p>
      </div>

      {/* ======= Info Sections Below Category ======= */}
      <div className="py-20 container mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {infoSections.map((section, index) => (
          <motion.div
            key={section.id}
            className={`flex flex-col md:flex-row items-center gap-12 ${
              section.reverse ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Text Content */}
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-bold text-amber-700 mb-4 font-[Inter]">
                {section.title}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed md:text-xl">
                {section.description}
              </p>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2">
              <div className="relative w-full h-80 md:h-[450px] overflow-hidden rounded-2xl bg-gray-100">
                <img
                  src={section.image || "/placeholder.svg"}
                  alt={section.title}
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-700 ease-out hover:scale-[1.03]"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}