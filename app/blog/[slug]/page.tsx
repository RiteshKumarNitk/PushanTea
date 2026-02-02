// app/blog/[slug]/page.jsx

import { notFound } from "next/navigation"
import Header from "@/components/Header"
import { Footer } from "@/components/footer"
const blogPosts = [
  {
    id: 1,
    title: "The Health Benefits of Green Tea",
    content: `
Green tea is rich in antioxidants known as catechins. It boosts brain function, helps with fat loss, and may lower the risk of some cancers.

### Detailed Benefits:
- Antioxidant-rich
- Supports brain health
- May reduce risk of cancer

### How to Consume:
Drink 2-3 cups daily for best results.
    `,
    image: "/assets/tea/tea5.jpg",
    slug: "health-benefits-of-green-tea",
  },
  {
    id: 2,
    title: "How to Brew the Perfect Cup of Tea",
    content: `Use fresh water, heat to the correct temperature, and steep for 2-3 minutes.`,
    image: "/assets/tea/tea2.avif",
    slug: "how-to-brew-perfect-tea",
  },
  {
    id: 3,
    title: "Exploring Herbal Teas and Their Benefits",
    content: `
# Exploring Herbal Teas and Their Benefits

Herbal teas like chamomile, mint, and hibiscus are caffeine-free and offer many benefits.

## Benefits:
- Calming
- Healing
- Energizing
`,
    image: "/assets/tea/teafarming.jpg",
    slug: "herbal-teas-benefits",
  },
]

export default function BlogPostPage({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) return notFound()

  return (
    <div className="bg-white text-gray-800">
      <Header />

      <div className="max-w-4xl mx-auto px-4 py-10">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">{post.content}</p>
      </div>

      <Footer />
    </div>
  )
}
export async function generateStaticParams() {
  return blogPosts.map(post => ({
    slug: post.slug,
  }))
}