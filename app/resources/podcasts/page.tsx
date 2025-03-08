import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Headphones, Play, Search, Clock } from "lucide-react"

const podcasts = [
  {
    title: "The AML Compliance Landscape in 2023",
    description: "A discussion on the current state of AML compliance and what to expect in the coming year.",
    category: "Industry Trends",
    duration: "45:20",
    host: "Sarah Johnson",
    guest: "Michael Chen, CAMS",
    image: "/placeholder.svg?height=300&width=400",
    listenLink: "#",
  },
  {
    title: "Implementing Effective Transaction Monitoring",
    description:
      "Expert insights on implementing effective transaction monitoring systems to detect suspicious activities.",
    category: "Best Practices",
    duration: "38:15",
    host: "Sarah Johnson",
    guest: "Emma Rodriguez, CAMS",
    image: "/placeholder.svg?height=300&width=400",
    listenLink: "#",
  },
  {
    title: "The Role of AI in AML Compliance",
    description: "A deep dive into how artificial intelligence is transforming AML compliance processes.",
    category: "Technology",
    duration: "42:30",
    host: "Sarah Johnson",
    guest: "Dr. David Thompson",
    image: "/placeholder.svg?height=300&width=400",
    listenLink: "#",
  },
  {
    title: "Navigating Global AML Regulations",
    description: "Expert guidance on navigating the complex landscape of global AML regulations.",
    category: "Regulatory",
    duration: "50:45",
    host: "Sarah Johnson",
    guest: "Lisa Wang, J.D.",
    image: "/placeholder.svg?height=300&width=400",
    listenLink: "#",
  },
  {
    title: "Building a Culture of Compliance",
    description: "Strategies for building a strong culture of compliance within your organization.",
    category: "Compliance Culture",
    duration: "36:20",
    host: "Sarah Johnson",
    guest: "James Wilson, CAMS",
    image: "/placeholder.svg?height=300&width=400",
    listenLink: "#",
  },
  {
    title: "AML Compliance for Cryptocurrency Businesses",
    description: "Specific guidance on AML compliance for businesses operating in the cryptocurrency space.",
    category: "Cryptocurrency",
    duration: "48:10",
    host: "Sarah Johnson",
    guest: "Alexandra Brown, CAMS",
    image: "/placeholder.svg?height=300&width=400",
    listenLink: "#",
  },
  {
    title: "Effective AML Risk Assessment Strategies",
    description:
      "Expert insights on conducting effective AML risk assessments to identify and mitigate potential risks.",
    category: "Risk Management",
    duration: "40:25",
    host: "Sarah Johnson",
    guest: "Dr. Robert Lee",
    image: "/placeholder.svg?height=300&width=400",
    listenLink: "#",
  },
  {
    title: "AML Compliance Challenges for Fintech Companies",
    description:
      "A discussion on the unique AML compliance challenges faced by fintech companies and strategies to address them.",
    category: "Fintech",
    duration: "44:15",
    host: "Sarah Johnson",
    guest: "Jennifer Martinez, CAMS",
    image: "/placeholder.svg?height=300&width=400",
    listenLink: "#",
  },
  {
    title: "The Future of AML Compliance",
    description:
      "Expert predictions on how AML compliance will evolve in the future and what businesses should prepare for.",
    category: "Future Trends",
    duration: "52:30",
    host: "Sarah Johnson",
    guest: "Prof. William Anderson",
    image: "/placeholder.svg?height=300&width=400",
    listenLink: "#",
  },
]

export default function PodcastsPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">AML Compliance Podcasts</h2>
        <p className="text-lg text-gray-600 mb-6">
          Listen to expert discussions on AML compliance, trends, challenges, and best practices.
        </p>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input placeholder="Search podcasts..." className="pl-10" />
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        <Button variant="outline" className="rounded-full">
          All Episodes
        </Button>
        <Button variant="outline" className="rounded-full">
          Industry Trends
        </Button>
        <Button variant="outline" className="rounded-full">
          Best Practices
        </Button>
        <Button variant="outline" className="rounded-full">
          Technology
        </Button>
        <Button variant="outline" className="rounded-full">
          Regulatory
        </Button>
        <Button variant="outline" className="rounded-full">
          Risk Management
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {podcasts.map((podcast, index) => (
          <Card key={index} className="h-full service-card">
            <div className="relative h-48 w-full overflow-hidden rounded-t-lg group">
              <Image
                src={podcast.image || "/placeholder.svg"}
                alt={podcast.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 rounded-full p-3">
                  <Play className="h-8 w-8 text-accent" />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                {podcast.duration}
              </div>
            </div>
            <CardHeader>
              <div className="inline-block bg-accent/10 text-accent px-2 py-1 rounded-full text-xs font-medium mb-2">
                {podcast.category}
              </div>
              <CardTitle>{podcast.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-2">{podcast.description}</CardDescription>
              <p className="text-sm text-gray-500">Host: {podcast.host}</p>
              <p className="text-sm text-gray-500">Guest: {podcast.guest}</p>
            </CardContent>
            <CardFooter>
              <Link href={podcast.listenLink} className="group inline-flex items-center text-accent font-medium">
                Listen Now
                <Headphones className="ml-2 h-4 w-4" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button variant="outline" className="rounded-full">
          Load More Episodes
        </Button>
      </div>

      <div className="mt-16 bg-accent/10 rounded-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4">Subscribe to Our Podcast</h3>
            <p className="text-lg mb-6">
              Never miss an episode of our AML compliance podcast. Subscribe on your favorite platform.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" className="bg-white">
                <Image
                  src="/placeholder.svg?height=24&width=24"
                  alt="Apple Podcasts"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                Apple Podcasts
              </Button>
              <Button variant="outline" className="bg-white">
                <Image
                  src="/placeholder.svg?height=24&width=24"
                  alt="Spotify"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                Spotify
              </Button>
              <Button variant="outline" className="bg-white">
                <Image
                  src="/placeholder.svg?height=24&width=24"
                  alt="Google Podcasts"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                Google Podcasts
              </Button>
            </div>
          </div>
          <div className="relative h-64 w-full rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="AML Compliance Podcast"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-primary/10" />
          </div>
        </div>
      </div>
    </div>
  )
}

