import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Download, Search } from "lucide-react"

const illustrations = [
  {
    title: "AML Compliance Process Flow",
    description: "Visual representation of the AML compliance process from customer onboarding to ongoing monitoring.",
    category: "Process Flows",
    downloadLink: "#",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Customer Due Diligence Workflow",
    description: "Step-by-step illustration of the customer due diligence process.",
    category: "Workflows",
    downloadLink: "#",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Risk-Based Approach Framework",
    description: "Visual guide to implementing a risk-based approach to AML compliance.",
    category: "Frameworks",
    downloadLink: "#",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Transaction Monitoring Process",
    description: "Illustration of the transaction monitoring process for identifying suspicious activities.",
    category: "Process Flows",
    downloadLink: "#",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "AML Risk Assessment Matrix",
    description: "Visual matrix for assessing and categorizing AML risks.",
    category: "Risk Assessment",
    downloadLink: "#",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Suspicious Activity Reporting Workflow",
    description: "Step-by-step illustration of the suspicious activity reporting process.",
    category: "Workflows",
    downloadLink: "#",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "AML Compliance Program Components",
    description: "Visual breakdown of the key components of an effective AML compliance program.",
    category: "Frameworks",
    downloadLink: "#",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Customer Risk Profiling Model",
    description: "Illustration of a customer risk profiling model for AML compliance.",
    category: "Risk Assessment",
    downloadLink: "#",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "AML Regulatory Framework",
    description: "Visual representation of the global AML regulatory framework.",
    category: "Frameworks",
    downloadLink: "#",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function IllustrationsPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">AML Compliance Illustrations</h2>
        <p className="text-lg text-gray-600 mb-6">
          Access our collection of visual guides and infographics explaining complex AML concepts and processes.
        </p>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input placeholder="Search illustrations..." className="pl-10" />
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        <Button variant="outline" className="rounded-full">
          All Illustrations
        </Button>
        <Button variant="outline" className="rounded-full">
          Process Flows
        </Button>
        <Button variant="outline" className="rounded-full">
          Workflows
        </Button>
        <Button variant="outline" className="rounded-full">
          Frameworks
        </Button>
        <Button variant="outline" className="rounded-full">
          Risk Assessment
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {illustrations.map((illustration, index) => (
          <Card key={index} className="h-full service-card">
            <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
              <Image
                src={illustration.image || "/placeholder.svg"}
                alt={illustration.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <CardHeader>
              <div className="inline-block bg-accent/10 text-accent px-2 py-1 rounded-full text-xs font-medium mb-2">
                {illustration.category}
              </div>
              <CardTitle>{illustration.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{illustration.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Link href={illustration.downloadLink} className="group inline-flex items-center text-accent font-medium">
                Download
                <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button variant="outline" className="rounded-full">
          Load More Illustrations
        </Button>
      </div>

      <div className="mt-16 bg-accent/10 rounded-lg p-8 text-center">
        <h3 className="text-xl md:text-2xl font-bold mb-4">Need Custom AML Illustrations?</h3>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Our team can create customized AML illustrations tailored to your specific business needs and processes.
        </p>
        <Button className="bg-accent hover:bg-accent/90">Contact Us</Button>
      </div>
    </div>
  )
}

