import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    title: "Understanding the Latest AML Regulations in 2023",
    excerpt:
      "A comprehensive overview of the most significant changes to AML regulations this year and how they impact businesses.",
    date: "June 15, 2023",
    author: "Sarah Johnson",
    category: "Regulatory Updates",
    image: "/placeholder.svg?height=400&width=600",
    slug: "understanding-latest-aml-regulations-2023",
  },
  {
    title: "5 Common AML Compliance Mistakes and How to Avoid Them",
    excerpt: "Learn about the most frequent compliance pitfalls businesses encounter and strategies to prevent them.",
    date: "May 28, 2023",
    author: "Michael Chen",
    category: "Best Practices",
    image: "/placeholder.svg?height=400&width=600",
    slug: "5-common-aml-compliance-mistakes",
  },
  {
    title: "The Role of AI in Modern AML Compliance",
    excerpt: "Exploring how artificial intelligence is transforming anti-money laundering compliance processes.",
    date: "May 12, 2023",
    author: "Emma Rodriguez",
    category: "Technology",
    image: "/placeholder.svg?height=400&width=600",
    slug: "role-of-ai-in-modern-aml-compliance",
  },
  {
    title: "Building an Effective AML Training Program",
    excerpt:
      "A step-by-step guide to developing and implementing an AML training program that engages employees and ensures compliance.",
    date: "April 30, 2023",
    author: "David Thompson",
    category: "Training",
    image: "/placeholder.svg?height=400&width=600",
    slug: "building-effective-aml-training-program",
  },
  {
    title: "Global AML Trends: What to Watch in 2023",
    excerpt:
      "An analysis of emerging global trends in anti-money laundering and what they mean for compliance professionals.",
    date: "April 15, 2023",
    author: "Lisa Wang",
    category: "Industry Trends",
    image: "/placeholder.svg?height=400&width=600",
    slug: "global-aml-trends-2023",
  },
  {
    title: "Case Study: How a Fintech Startup Transformed Their AML Compliance",
    excerpt:
      "A detailed look at how a growing fintech company overhauled their AML processes to meet regulatory requirements.",
    date: "March 28, 2023",
    author: "James Wilson",
    category: "Case Studies",
    image: "/placeholder.svg?height=400&width=600",
    slug: "case-study-fintech-startup-aml-compliance",
  },
]

export default function BlogPage() {
  return (
    <>
      <div className="bg-secondary/10 py-12">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold">AML Compliance Blog</h1>
          <p className="text-lg text-gray-600 mt-2">
            Insights, updates, and best practices for anti-money laundering compliance
          </p>
        </div>
      </div>

      <div className="container py-12">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.map((post, index) => (
                <Card key={index} className="h-full service-card">
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="inline-block bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </div>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                    <CardTitle>{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{post.excerpt}</CardDescription>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">By {post.author}</div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group inline-flex items-center text-primary font-medium"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Button variant="outline">Load More Articles</Button>
            </div>
          </div>

          <div className="md:w-1/4 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Search</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input placeholder="Search articles..." className="pl-10" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="hover:text-primary">
                      Regulatory Updates
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary">
                      Best Practices
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary">
                      Technology
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary">
                      Training
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary">
                      Industry Trends
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary">
                      Case Studies
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Subscribe</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription>Stay updated with our latest articles and AML compliance insights.</CardDescription>
                <Input placeholder="Your email" type="email" />
                <Button className="w-full bg-primary hover:bg-primary/90">Subscribe</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Popular Posts</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li>
                    <Link href="#" className="hover:text-primary text-sm">
                      Understanding the Latest AML Regulations in 2023
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary text-sm">
                      5 Common AML Compliance Mistakes and How to Avoid Them
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary text-sm">
                      The Role of AI in Modern AML Compliance
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}

