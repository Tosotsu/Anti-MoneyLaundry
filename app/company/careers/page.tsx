import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MapPin, Briefcase, Search } from "lucide-react"

const openPositions = [
  {
    title: "Senior AML Compliance Consultant",
    location: "New York, NY",
    type: "Full-time",
    description:
      "We're seeking an experienced AML compliance consultant to join our team and provide expert guidance to our clients.",
    requirements: [
      "Minimum 5 years of experience in AML compliance",
      "CAMS certification or equivalent",
      "Strong knowledge of global AML regulations",
      "Excellent communication and client management skills",
    ],
    applyLink: "#",
  },
  {
    title: "AML Technology Specialist",
    location: "London, UK",
    type: "Full-time",
    description: "Join our technology team to help clients implement and optimize AML technology solutions.",
    requirements: [
      "Experience with AML technology solutions",
      "Strong technical background",
      "Understanding of transaction monitoring systems",
      "Excellent problem-solving skills",
    ],
    applyLink: "#",
  },
  {
    title: "AML Training Specialist",
    location: "Singapore",
    type: "Full-time",
    description:
      "Develop and deliver AML training programs for our clients' staff to ensure compliance with regulations.",
    requirements: [
      "Experience in developing and delivering training programs",
      "Strong knowledge of AML regulations",
      "Excellent presentation and communication skills",
      "CAMS certification preferred",
    ],
    applyLink: "#",
  },
  {
    title: "Cryptocurrency AML Consultant",
    location: "Remote",
    type: "Full-time",
    description:
      "Provide AML compliance guidance to cryptocurrency businesses navigating the evolving regulatory landscape.",
    requirements: [
      "Experience in cryptocurrency compliance",
      "Understanding of blockchain technology",
      "Knowledge of global cryptocurrency regulations",
      "Strong analytical skills",
    ],
    applyLink: "#",
  },
  {
    title: "AML Policy Writer",
    location: "New York, NY",
    type: "Full-time",
    description: "Develop comprehensive AML policies and procedures for our clients to ensure regulatory compliance.",
    requirements: [
      "Experience in writing AML policies and procedures",
      "Strong knowledge of AML regulations",
      "Excellent writing and communication skills",
      "Attention to detail",
    ],
    applyLink: "#",
  },
  {
    title: "AML Risk Assessment Specialist",
    location: "Sydney, Australia",
    type: "Full-time",
    description:
      "Conduct AML risk assessments for our clients to identify and mitigate potential money laundering risks.",
    requirements: [
      "Experience in conducting risk assessments",
      "Strong analytical skills",
      "Knowledge of risk assessment methodologies",
      "Understanding of global AML regulations",
    ],
    applyLink: "#",
  },
]

export default function CareersPage() {
  return (
    <>
      <div className="container py-12">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Careers at AML Compliance</h1>
          <p className="text-lg text-gray-600">
            Join our team of AML compliance experts and help businesses navigate the complex world of anti-money
            laundering regulations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">Why Join Our Team?</h2>
            <p className="text-lg text-gray-600">
              At AML Compliance, we're dedicated to helping businesses combat money laundering and financial crime. Join
              our team and be part of making a difference.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold">Challenging Work</h3>
                  <p className="text-gray-600">
                    Work on complex AML compliance challenges for clients across various industries.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold">Professional Growth</h3>
                  <p className="text-gray-600">
                    Continuous learning and development opportunities to enhance your skills and expertise.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold">Collaborative Environment</h3>
                  <p className="text-gray-600">Work with a team of experts who are passionate about AML compliance.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold">Global Opportunities</h3>
                  <p className="text-gray-600">
                    Opportunities to work with clients worldwide and potentially relocate to our global offices.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl">
            <Image src="/placeholder.svg?height=800&width=800" alt="Join Our Team" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/10" />
          </div>
        </div>

        <div className="mb-16">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Open Positions</h2>
            <div className="relative mt-4 md:mt-0">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input placeholder="Search positions..." className="pl-10 w-full md:w-64" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="h-full service-card">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="inline-block bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                      {position.type}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="mr-1 h-4 w-4" />
                      {position.location}
                    </div>
                  </div>
                  <CardTitle>{position.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">{position.description}</CardDescription>
                  <div className="space-y-2">
                    <h4 className="font-medium">Requirements:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                      {position.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href={position.applyLink} className="w-full">
                    <Button className="w-full bg-primary hover:bg-primary/90">Apply Now</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Hiring Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-t-4 border-t-primary">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <CardTitle>Application Review</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We review your application and resume to assess your qualifications and experience.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-t-primary">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <CardTitle>Initial Interview</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  A phone or video interview to discuss your experience, skills, and career goals.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-t-primary">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <CardTitle>Technical Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  A technical assessment to evaluate your knowledge and expertise in AML compliance.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-t-primary">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <span className="text-xl font-bold text-primary">4</span>
                </div>
                <CardTitle>Final Interview</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  A final interview with senior team members to discuss the role in detail and answer any questions.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-accent text-accent-foreground rounded-lg p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Don't See a Position That Fits?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            We're always looking for talented professionals to join our team. Send us your resume and we'll keep it on
            file for future opportunities.
          </p>
          <Button size="lg" className="bg-white text-accent hover:bg-white/90">
            Submit Your Resume
          </Button>
        </div>
      </div>
    </>
  )
}

