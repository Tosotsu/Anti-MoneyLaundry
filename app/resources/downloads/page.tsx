import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { FileText, Download, Search } from "lucide-react"

const downloadResources = [
  {
    icon: <FileText className="h-10 w-10 text-accent" />,
    title: "AML Policy Template",
    description: "A comprehensive template for creating your AML policy documentation.",
    category: "Templates",
    downloadLink: "#",
  },
  {
    icon: <FileText className="h-10 w-10 text-accent" />,
    title: "Customer Due Diligence Form",
    description: "Standard form for conducting customer due diligence procedures.",
    category: "Forms",
    downloadLink: "#",
  },
  {
    icon: <FileText className="h-10 w-10 text-accent" />,
    title: "AML Risk Assessment Guide",
    description: "Step-by-step guide for conducting an effective AML risk assessment.",
    category: "Guides",
    downloadLink: "#",
  },
  {
    icon: <FileText className="h-10 w-10 text-accent" />,
    title: "AML Compliance Checklist",
    description: "Comprehensive checklist to ensure your AML program covers all necessary areas.",
    category: "Checklists",
    downloadLink: "#",
  },
  {
    icon: <FileText className="h-10 w-10 text-accent" />,
    title: "Suspicious Activity Report Template",
    description: "Template for documenting and reporting suspicious activities.",
    category: "Templates",
    downloadLink: "#",
  },
  {
    icon: <FileText className="h-10 w-10 text-accent" />,
    title: "AML Training Materials",
    description: "Training materials for educating staff on AML compliance requirements.",
    category: "Training",
    downloadLink: "#",
  },
  {
    icon: <FileText className="h-10 w-10 text-accent" />,
    title: "AML Regulatory Updates - Q1 2023",
    description: "Summary of recent regulatory changes affecting AML compliance.",
    category: "Updates",
    downloadLink: "#",
  },
  {
    icon: <FileText className="h-10 w-10 text-accent" />,
    title: "Transaction Monitoring Procedures",
    description: "Guidelines for implementing effective transaction monitoring.",
    category: "Procedures",
    downloadLink: "#",
  },
  {
    icon: <FileText className="h-10 w-10 text-accent" />,
    title: "AML Case Studies",
    description: "Real-world case studies of AML compliance challenges and solutions.",
    category: "Case Studies",
    downloadLink: "#",
  },
]

export default function DownloadsPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">AML Compliance Downloads</h2>
        <p className="text-lg text-gray-600 mb-6">
          Access our comprehensive collection of AML compliance resources, including templates, guides, checklists, and
          more.
        </p>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input placeholder="Search resources..." className="pl-10" />
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        <Button variant="outline" className="rounded-full">
          All Resources
        </Button>
        <Button variant="outline" className="rounded-full">
          Templates
        </Button>
        <Button variant="outline" className="rounded-full">
          Guides
        </Button>
        <Button variant="outline" className="rounded-full">
          Checklists
        </Button>
        <Button variant="outline" className="rounded-full">
          Forms
        </Button>
        <Button variant="outline" className="rounded-full">
          Training
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {downloadResources.map((resource, index) => (
          <Card key={index} className="h-full service-card">
            <CardHeader>
              <div className="mb-2">{resource.icon}</div>
              <div className="inline-block bg-accent/10 text-accent px-2 py-1 rounded-full text-xs font-medium mb-2">
                {resource.category}
              </div>
              <CardTitle>{resource.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{resource.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Link href={resource.downloadLink} className="group inline-flex items-center text-accent font-medium">
                Download
                <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button variant="outline" className="rounded-full">
          Load More Resources
        </Button>
      </div>

      <div className="mt-16 bg-accent/10 rounded-lg p-8 text-center">
        <h3 className="text-xl md:text-2xl font-bold mb-4">Need Custom AML Resources?</h3>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Our team can create customized AML compliance resources tailored to your specific business needs.
        </p>
        <Button className="bg-accent hover:bg-accent/90">Contact Us</Button>
      </div>
    </div>
  )
}

