import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Linkedin, Twitter, Mail } from "lucide-react"

const leadershipTeam = [
  {
    name: "Sarah Johnson",
    position: "Chief Executive Officer",
    bio: "Sarah has over 20 years of experience in financial compliance and has led numerous successful AML implementation projects for global financial institutions.",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "#",
    twitter: "#",
    email: "sarah.johnson@example.com",
  },
  {
    name: "Michael Chen",
    position: "Chief Compliance Officer",
    bio: "Michael is a certified AML specialist with extensive experience in developing and implementing AML compliance programs for financial institutions worldwide.",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "#",
    twitter: "#",
    email: "michael.chen@example.com",
  },
  {
    name: "Emma Rodriguez",
    position: "Director of Consulting Services",
    bio: "Emma leads our consulting services team, bringing over 15 years of experience in AML compliance consulting for various industries.",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "#",
    twitter: "#",
    email: "emma.rodriguez@example.com",
  },
  {
    name: "David Thompson",
    position: "Head of Technology Solutions",
    bio: "David specializes in AML technology solutions and has helped numerous organizations implement effective transaction monitoring systems.",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "#",
    twitter: "#",
    email: "david.thompson@example.com",
  },
]

const expertTeam = [
  {
    name: "Lisa Wang",
    position: "Senior AML Consultant",
    bio: "Lisa specializes in AML risk assessments and has worked with clients across banking, fintech, and cryptocurrency sectors.",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "#",
  },
  {
    name: "James Wilson",
    position: "AML Training Specialist",
    bio: "James develops and delivers comprehensive AML training programs tailored to the specific needs of our clients.",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "#",
  },
  {
    name: "Alexandra Brown",
    position: "Regulatory Compliance Expert",
    bio: "Alexandra has deep expertise in global AML regulations and helps clients navigate the complex regulatory landscape.",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "#",
  },
  {
    name: "Robert Lee",
    position: "Transaction Monitoring Specialist",
    bio: "Robert specializes in designing and optimizing transaction monitoring systems to effectively detect suspicious activities.",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "#",
  },
  {
    name: "Jennifer Martinez",
    position: "Fintech Compliance Consultant",
    bio: "Jennifer focuses on AML compliance solutions specifically tailored for fintech companies and their unique challenges.",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "#",
  },
  {
    name: "William Anderson",
    position: "Cryptocurrency AML Expert",
    bio: "William specializes in AML compliance for cryptocurrency businesses, helping them navigate the evolving regulatory landscape.",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "#",
  },
  {
    name: "Sophia Lee",
    position: "Due Diligence Specialist",
    bio: "Sophia specializes in customer due diligence procedures and helps clients implement effective KYC processes.",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "#",
  },
  {
    name: "Daniel Kim",
    position: "AML Technology Consultant",
    bio: "Daniel helps clients select and implement the right AML technology solutions to meet their specific needs.",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "#",
  },
]

export default function OurTeamPage() {
  return (
    <>
      <div className="container py-12">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h1>
          <p className="text-lg text-gray-600">
            Meet our team of AML compliance experts dedicated to helping businesses navigate the complex world of
            anti-money laundering regulations.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadershipTeam.map((member, index) => (
              <Card key={index} className="h-full service-card">
                <div className="relative h-64 w-full overflow-hidden rounded-t-lg">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="text-accent font-medium">{member.position}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{member.bio}</p>
                </CardContent>
                <CardFooter className="flex justify-center space-x-4">
                  <a href={member.linkedin} className="text-gray-500 hover:text-accent">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a href={member.twitter} className="text-gray-500 hover:text-accent">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a href={`mailto:${member.email}`} className="text-gray-500 hover:text-accent">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Expert Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertTeam.map((member, index) => (
              <Card key={index} className="h-full service-card">
                <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="text-accent font-medium">{member.position}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{member.bio}</p>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <a href={member.linkedin} className="text-gray-500 hover:text-accent">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            We're always looking for talented professionals to join our team of AML compliance experts.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            View Career Opportunities
          </Button>
        </div>
      </div>
    </>
  )
}

