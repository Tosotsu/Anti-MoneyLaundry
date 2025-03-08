import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Download, Search, Calendar } from "lucide-react"

const publications = [
  {
    title: "The Evolution of AML Compliance: Trends and Challenges",
    description:
      "A comprehensive analysis of the evolving landscape of AML compliance, including emerging trends and challenges.",
    category: "White Paper",
    date: "June 2023",
    author: "Dr. Sarah Johnson",
    image: "/placeholder.svg?height=300&width=400",
    downloadLink: "#",
  },
  {
    title: "Implementing a Risk-Based Approach to AML Compliance",
    description: "A practical guide to implementing a risk-based approach to AML compliance in your organization.",
    category: "Guide",
    date: "May 2023",
    author: "Michael Chen, CAMS",
    image: "/placeholder.svg?height=300&width=400",
    downloadLink: "#",
  },
  {
    title: "The Role of Technology in Modern AML Compliance",
    description: "An exploration of how technology is transforming AML compliance and enhancing effectiveness.",
    category: "Research Paper",
    date: "April 2023",
    author: "Emma Rodriguez, Ph.D.",
    image: "/placeholder.svg?height=300&width=400",
    downloadLink: "#",
  },
  {
    title: "Global AML Regulatory Landscape: A Comparative Analysis",
    description:
      "A comparative analysis of AML regulations across different jurisdictions and their implications for businesses.",
    category: "Research Paper",
    date: "March 2023",
    author: "David Thompson, J.D.",
    image: "/placeholder.svg?height=300&width=400",
    downloadLink: "#",
  },
  {
    title: "Enhancing Transaction Monitoring Effectiveness",
    description:
      "Best practices for enhancing the effectiveness of transaction monitoring systems in detecting suspicious activities.",
    category: "Guide",
    date: "February 2023",
    author: "Lisa Wang, CAMS",
    image: "/placeholder.svg?height=300&width=400",
    downloadLink: "#",
  },
  {
    title: "The Future of AML Compliance: Predictions for the Next Decade",
    description:
      "Expert predictions on how AML compliance will evolve over the next decade and what businesses should prepare for.",
    category: "White Paper",
    date: "January 2023",
    author: "Prof. James Wilson",
    image: "/placeholder.svg?height=300&width=400",
    downloadLink: "#",
  },
  {
    title: "Building an Effective AML Training Program",
    description:
      "A comprehensive guide to developing and implementing an effective AML training program for your staff.",
    category: "Guide",
    date: "December 2022",
    author: "Alexandra Brown, CAMS",
    image: "/placeholder.svg?height=300&width=400",
    downloadLink: "#",
  },
  {
    title: "The Impact of Cryptocurrencies on AML Compliance",
    description: "An analysis of how cryptocurrencies are impacting AML compliance and what businesses need to know.",
    category: "Research Paper",
    date: "November 2022",
    author: "Dr. Robert Lee",
    image: "/placeholder.svg?height=300&width=400",
    downloadLink: "#",
  },
  {
    title: "AML Compliance for Fintech Companies: A Practical Guide",
    description:
      "A practical guide to AML compliance specifically tailored for fintech companies and their unique challenges.",
    category: "Guide",
    date: "October 2022",
    author: "Jennifer Martinez, CAMS",
    image: "/placeholder.svg?height=300&width=400",
    downloadLink: "#",
  },
]

export default function PublicationsPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">AML Compliance Publications</h2>
        <p className="text-lg text-gray-600 mb-6">
          Research papers, articles, and publications on AML compliance, regulatory updates, and industry best
          practices.
        </p>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input placeholder="Search publications..." className="pl-10" />
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        <Button variant="outline" className="rounded-full">
          All Publications
        </Button>
        <Button variant="outline" className="rounded-full">
          White Papers
        </Button>
        <Button variant="outline" className="rounded-full">
          Research Papers
        </Button>
        <Button variant="outline" className="rounded-full">
          Guides
        </Button>
        <Button variant="outline" className="rounded-full">
          Articles
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {publications.map((publication, index) => (
          <Card key={index} className="h-full service-card">
            <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
              <Image
                src={publication.image || "/placeholder.svg"}
                alt={publication.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <div className="inline-block bg-accent/10 text-accent px-2 py-1 rounded-full text-xs font-medium">
                  {publication.category}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="mr-1 h-4 w-4" />
                  {publication.date}
                </div>
              </div>
              <CardTitle>{publication.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-2">{publication.description}</CardDescription>
              <p className="text-sm text-gray-500">By {publication.author}</p>
            </CardContent>
            <CardFooter>
              <Link href={publication.downloadLink} className="group inline-flex items-center text-accent font-medium">
                Download
                <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button variant="outline" className="rounded-full">
          Load More Publications
        </Button>
      </div>

      <div className="mt-16 bg-accent/10 rounded-lg p-8 text-center">
        <h3 className="text-xl md:text-2xl font-bold mb-4">Subscribe to Our Publications</h3>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Stay updated with our latest research papers, articles, and publications on AML compliance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <Input placeholder="Your email address" className="bg-white" />
          <Button className="bg-accent hover:bg-accent/90">Subscribe</Button>
        </div>
      </div>
    </div>
  )
}

