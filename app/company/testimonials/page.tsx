import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Quote, Play } from "lucide-react"

const testimonials = [
  {
    quote:
      "Implementing their AML compliance solutions has transformed our risk management approach. We now have confidence in our ability to detect and prevent financial crime.",
    author: "Sarah Johnson",
    position: "Compliance Officer",
    company: "Global Financial Services",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "The AML training provided to our team was exceptional. The content was relevant, engaging, and has significantly improved our compliance procedures.",
    author: "Michael Chen",
    position: "Head of Risk",
    company: "Eastern Bank",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "Their business risk assessment identified vulnerabilities we weren't aware of. The remediation plan they provided was clear, actionable, and effective.",
    author: "Emma Rodriguez",
    position: "CEO",
    company: "Fintech Innovations",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "The AML policy documentation they developed for us was comprehensive and tailored to our specific business needs. It has helped us meet regulatory requirements with confidence.",
    author: "David Thompson",
    position: "Chief Compliance Officer",
    company: "Investment Partners",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "Their in-house AML compliance team setup was seamless. They provided expert guidance throughout the process and continue to support us as we grow.",
    author: "Lisa Wang",
    position: "Operations Director",
    company: "Global Payments Inc.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "The annual AML risk assessment they conducted for us was thorough and identified key areas for improvement. Their recommendations were practical and effective.",
    author: "James Wilson",
    position: "Risk Manager",
    company: "Pacific Insurance Group",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "Their AML software selection service saved us time and money. They helped us find the right solution for our specific needs and supported us through implementation.",
    author: "Alexandra Brown",
    position: "Technology Director",
    company: "Digital Banking Solutions",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "The AML health check they conducted revealed critical gaps in our compliance program. Their remediation plan was comprehensive and has significantly improved our AML controls.",
    author: "Robert Lee",
    position: "Compliance Manager",
    company: "Regional Credit Union",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "Their cryptocurrency AML compliance expertise was invaluable as we navigated the complex regulatory landscape. They helped us implement robust controls while maintaining operational efficiency.",
    author: "Jennifer Martinez",
    position: "Compliance Officer",
    company: "Digital Asset Exchange",
    image: "/placeholder.svg?height=100&width=100",
  },
]

const videoTestimonials = [
  {
    title: "How AML Compliance Solutions Transformed Our Risk Management",
    client: "Global Financial Services",
    thumbnail: "/placeholder.svg?height=300&width=400",
    videoLink: "#",
  },
  {
    title: "Implementing Effective AML Controls with Expert Guidance",
    client: "Eastern Bank",
    thumbnail: "/placeholder.svg?height=300&width=400",
    videoLink: "#",
  },
  {
    title: "Our Journey to AML Compliance Excellence",
    client: "Fintech Innovations",
    thumbnail: "/placeholder.svg?height=300&width=400",
    videoLink: "#",
  },
]

export default function TestimonialsPage() {
  return (
    <>
      <div className="container py-12">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h1>
          <p className="text-lg text-gray-600">
            Hear from businesses that have transformed their AML compliance with our solutions.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full service-card">
                <CardHeader>
                  <Quote className="h-10 w-10 text-primary/20" />
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="italic text-gray-600">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Video Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoTestimonials.map((video, index) => (
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
                </div>
                <CardHeader>
                  <CardTitle>{video.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">Client: {video.client}</CardDescription>
                  <Button className="mt-4 bg-accent hover:bg-accent/90">Watch Video</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="h-full service-card">
              <CardHeader>
                <CardTitle>Global Bank Transforms AML Compliance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  A major international bank was struggling with an inefficient AML compliance program that resulted in
                  high false positives and significant operational costs. We helped them implement a comprehensive AML
                  solution that reduced false positives by 60% and improved operational efficiency.
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold">Results:</p>
                    <ul className="list-disc pl-5 text-sm text-gray-600">
                      <li>60% reduction in false positives</li>
                      <li>40% improvement in operational efficiency</li>
                      <li>Enhanced regulatory compliance</li>
                    </ul>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90">Read Full Story</Button>
                </div>
              </CardContent>
            </Card>
            <Card className="h-full service-card">
              <CardHeader>
                <CardTitle>Fintech Startup Builds Robust AML Framework</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  A growing fintech company needed to implement an AML compliance framework from the ground up to meet
                  regulatory requirements and support their rapid growth. We developed a tailored AML program that
                  enabled them to scale while maintaining compliance.
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold">Results:</p>
                    <ul className="list-disc pl-5 text-sm text-gray-600">
                      <li>Successful regulatory approval</li>
                      <li>Scalable compliance framework</li>
                      <li>Efficient onboarding process</li>
                    </ul>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90">Read Full Story</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Share Your Experience</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            We'd love to hear about your experience working with our AML compliance team.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            Submit Your Testimonial
          </Button>
        </div>
      </div>
    </>
  )
}

