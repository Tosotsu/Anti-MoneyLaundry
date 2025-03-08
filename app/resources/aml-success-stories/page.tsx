import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowRight, Search, Building } from "lucide-react"

const successStories = [
  {
    title: "Global Bank Transforms AML Compliance Program",
    description:
      "How a major international bank revamped its AML compliance program to meet regulatory requirements and improve efficiency.",
    category: "Banking",
    client: "Global Financial Services",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
  },
  {
    title: "Fintech Startup Builds Robust AML Framework",
    description:
      "A case study of how a growing fintech company implemented an effective AML compliance framework from the ground up.",
    category: "Fintech",
    client: "PayTech Solutions",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
  },
  {
    title: "Insurance Company Enhances Risk Assessment Process",
    description:
      "How a leading insurance provider improved its AML risk assessment methodology to better identify and mitigate potential risks.",
    category: "Insurance",
    client: "Secure Insurance Group",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
  },
  {
    title: "Cryptocurrency Exchange Achieves Regulatory Compliance",
    description:
      "A success story of how a cryptocurrency exchange implemented comprehensive AML controls to meet regulatory requirements.",
    category: "Cryptocurrency",
    client: "Digital Asset Exchange",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
  },
  {
    title: "Regional Bank Optimizes Transaction Monitoring",
    description:
      "How a regional bank enhanced its transaction monitoring system to reduce false positives and improve detection of suspicious activities.",
    category: "Banking",
    client: "Eastern Regional Bank",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
  },
  {
    title: "Payment Processor Streamlines Due Diligence",
    description:
      "A case study of how a payment processor streamlined its customer due diligence process while maintaining regulatory compliance.",
    category: "Payments",
    client: "Global Payments Inc.",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
  },
  {
    title: "Investment Firm Implements Effective AML Training",
    description: "How an investment firm developed and implemented an effective AML training program for its staff.",
    category: "Investment",
    client: "Capital Investment Partners",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
  },
  {
    title: "Real Estate Company Mitigates Money Laundering Risks",
    description:
      "A success story of how a real estate company implemented controls to mitigate money laundering risks in property transactions.",
    category: "Real Estate",
    client: "Premier Properties Group",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
  },
  {
    title: "Gaming Operator Enhances AML Compliance",
    description:
      "How a gaming operator enhanced its AML compliance program to meet regulatory requirements and protect its business.",
    category: "Gaming",
    client: "Global Gaming Entertainment",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
  },
]

export default function AMLSuccessStoriesPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">AML Success Stories</h2>
        <p className="text-lg text-gray-600 mb-6">
          Real-world examples of successful AML compliance implementation and risk mitigation across various industries.
        </p>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input placeholder="Search success stories..." className="pl-10" />
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        <Button variant="outline" className="rounded-full">
          All Industries
        </Button>
        <Button variant="outline" className="rounded-full">
          Banking
        </Button>
        <Button variant="outline" className="rounded-full">
          Fintech
        </Button>
        <Button variant="outline" className="rounded-full">
          Insurance
        </Button>
        <Button variant="outline" className="rounded-full">
          Cryptocurrency
        </Button>
        <Button variant="outline" className="rounded-full">
          Real Estate
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {successStories.map((story, index) => (
          <Card key={index} className="h-full service-card">
            <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
              <Image
                src={story.image || "/placeholder.svg"}
                alt={story.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <div className="inline-block bg-accent/10 text-accent px-2 py-1 rounded-full text-xs font-medium">
                  {story.category}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Building className="mr-1 h-4 w-4" />
                  {story.client}
                </div>
              </div>
              <CardTitle>{story.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{story.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Link href={story.link} className="group inline-flex items-center text-accent font-medium">
                Read Full Case Study
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button variant="outline" className="rounded-full">
          Load More Success Stories
        </Button>
      </div>

      <div className="mt-16 bg-primary/10 rounded-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4">Share Your AML Success Story</h3>
            <p className="text-lg mb-6">
              Has your organization successfully implemented or enhanced its AML compliance program? We'd love to
              feature your success story.
            </p>
            <Button className="bg-primary hover:bg-primary/90">Submit Your Story</Button>
          </div>
          <div className="relative h-64 w-full rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Share Your Success Story"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/10" />
          </div>
        </div>
      </div>
    </div>
  )
}

