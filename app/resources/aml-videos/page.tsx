import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Play, ArrowRight, Search } from "lucide-react"

const videos = [
  {
    title: "Introduction to AML Compliance",
    description: "An overview of anti-money laundering compliance and why it's important for businesses.",
    category: "Fundamentals",
    duration: "15:32",
    videoLink: "#",
    thumbnail: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Customer Due Diligence Explained",
    description: "A detailed explanation of customer due diligence procedures and requirements.",
    category: "Procedures",
    duration: "12:45",
    videoLink: "#",
    thumbnail: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Transaction Monitoring Best Practices",
    description: "Learn about best practices for monitoring transactions to identify suspicious activities.",
    category: "Best Practices",
    duration: "18:20",
    videoLink: "#",
    thumbnail: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "AML Risk Assessment Methodology",
    description: "A step-by-step guide to conducting an effective AML risk assessment.",
    category: "Risk Management",
    duration: "20:15",
    videoLink: "#",
    thumbnail: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Suspicious Activity Reporting",
    description: "Learn about the requirements and procedures for reporting suspicious activities.",
    category: "Procedures",
    duration: "14:50",
    videoLink: "#",
    thumbnail: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "AML Regulatory Updates 2023",
    description: "An overview of recent regulatory changes affecting AML compliance.",
    category: "Regulatory",
    duration: "22:10",
    videoLink: "#",
    thumbnail: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Building an Effective AML Compliance Program",
    description: "Learn how to build and implement an effective AML compliance program for your business.",
    category: "Implementation",
    duration: "25:30",
    videoLink: "#",
    thumbnail: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "AML Technology Solutions",
    description: "An overview of technology solutions for enhancing AML compliance.",
    category: "Technology",
    duration: "16:45",
    videoLink: "#",
    thumbnail: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "AML Training for Staff",
    description: "Guidance on providing effective AML training for your staff.",
    category: "Training",
    duration: "19:20",
    videoLink: "#",
    thumbnail: "/placeholder.svg?height=300&width=400",
  },
]

export default function AMLVideosPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">AML Compliance Videos</h2>
        <p className="text-lg text-gray-600 mb-6">
          Educational videos on AML compliance, regulations, and best practices to enhance your understanding.
        </p>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input placeholder="Search videos..." className="pl-10" />
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        <Button variant="outline" className="rounded-full">
          All Videos
        </Button>
        <Button variant="outline" className="rounded-full">
          Fundamentals
        </Button>
        <Button variant="outline" className="rounded-full">
          Procedures
        </Button>
        <Button variant="outline" className="rounded-full">
          Best Practices
        </Button>
        <Button variant="outline" className="rounded-full">
          Risk Management
        </Button>
        <Button variant="outline" className="rounded-full">
          Regulatory
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <Card key={index} className="h-full service-card">
            <div className="relative h-48 w-full overflow-hidden rounded-t-lg group">
              <Image
                src={video.thumbnail || "/placeholder.svg"}
                alt={video.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 rounded-full p-3">
                  <Play className="h-8 w-8 text-accent" />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                {video.duration}
              </div>
            </div>
            <CardHeader>
              <div className="inline-block bg-accent/10 text-accent px-2 py-1 rounded-full text-xs font-medium mb-2">
                {video.category}
              </div>
              <CardTitle>{video.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{video.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Link href={video.videoLink} className="group inline-flex items-center text-accent font-medium">
                Watch Video
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button variant="outline" className="rounded-full">
          Load More Videos
        </Button>
      </div>

      <div className="mt-16 bg-accent/10 rounded-lg p-8 text-center">
        <h3 className="text-xl md:text-2xl font-bold mb-4">Subscribe to Our Video Channel</h3>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Stay updated with our latest AML compliance videos by subscribing to our channel.
        </p>
        <Button className="bg-accent hover:bg-accent/90">Subscribe Now</Button>
      </div>
    </div>
  )
}

