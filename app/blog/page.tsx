// app/blog/page.tsx

import Image from "next/image"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/footer"
 // ✅ Correct path

const blogPosts = [
  {
    id: 1,
    title: "The Health Benefits of Green Tea",
    description:
      "Green tea is packed with antioxidants and nutrients that support brain function, fat loss, and overall wellness.",
    image: "/assets/tea/tea5.jpg",
    slug: "health-benefits-of-green-tea",
  },
  {
    id: 2,
    title: "How to Brew the Perfect Cup of Tea",
    description:
      "Unlock the full flavor of your tea with these essential brewing tips, from temperature to steep time.",
    image: "/assets/tea/tea2.avif",
    slug: "how-to-brew-perfect-tea",
  },
  {
    id: 3,
    title: "Exploring Herbal Teas and Their Benefits",
    description:
      "Discover the calming, healing, and energizing powers of herbal teas like chamomile, mint, and hibiscus.",
    image: "/assets/tea/teafarming.jpg",
    slug: "herbal-teas-benefits",
  },
  
]
// aapka original code, bas responsive classes add ki hain

export default function BlogPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Header */}
      <Header />

      {/* Hero Banner */}
      <section className="bg-[url('/bg/tea-bg.jpg')] bg-cover bg-center text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Welcome to the Pushaan Blog
          </h1>
          <p className="text-base sm:text-lg max-w-2xl mx-auto">
            Discover stories, tea rituals, wellness tips, and more. Your journey to a mindful tea lifestyle begins here.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col"
            >
              <div className="relative w-full h-56 sm:h-48 md:h-56">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h2 className="text-xl font-semibold text-[#00492C] mb-2">{post.title}</h2>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{post.description}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-[#00492C] font-medium text-sm hover:underline mt-auto"
                >
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-[#f7f7f7] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#00492C] mb-4">Stay Connected</h2>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Subscribe to our newsletter for tea tips, exclusive offers, and blog updates.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md border w-full sm:w-auto sm:min-w-[250px]"
            />
            <button
              type="submit"
              className="bg-[#00492C] text-white px-6 py-2 rounded-md hover:bg-[#003a24] transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
