import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Users, Award, CheckCircle } from "lucide-react"

export default function AboutUsPage() {
  return (
    <>
      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold">About AML Compliance Solutions</h1>
            <p className="text-lg text-gray-600">
              We are a leading provider of anti-money laundering compliance solutions, dedicated to helping businesses
              navigate the complex world of AML regulations.
            </p>
            <p className="text-lg text-gray-600">
              With over 15 years of experience, our team of certified AML professionals provides tailored solutions to
              businesses of all sizes across multiple industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-primary/90">Meet Our Team</Button>
              <Button
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                Contact Us
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=800"
                alt="About AML Compliance"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/10" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-12">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Mission & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  To provide businesses with the tools, knowledge, and support they need to effectively combat money
                  laundering and financial crime.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  To be the leading provider of innovative AML compliance solutions, setting the standard for excellence
                  in the industry.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Award className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Integrity, excellence, innovation, collaboration, and a commitment to helping our clients succeed in
                  their compliance efforts.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl">
              <Image src="/placeholder.svg?height=800&width=800" alt="Our Expertise" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-primary/10" />
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">Our Expertise</h2>
            <p className="text-lg text-gray-600">
              Our team of certified AML professionals brings extensive experience and expertise to every client
              engagement.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold">Regulatory Compliance</h3>
                  <p className="text-gray-600">Expert knowledge of global AML regulations and requirements.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold">Risk Management</h3>
                  <p className="text-gray-600">Advanced methodologies for identifying and mitigating AML risks.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold">Technology Solutions</h3>
                  <p className="text-gray-600">Expertise in implementing and optimizing AML technology solutions.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold">Training & Education</h3>
                  <p className="text-gray-600">Effective training programs to build a culture of compliance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary text-primary-foreground py-12">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Global Reach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold">500+</div>
              <p className="text-lg">Clients Worldwide</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">30+</div>
              <p className="text-lg">Countries Served</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">15+</div>
              <p className="text-lg">Years of Experience</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">50+</div>
              <p className="text-lg">AML Experts</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Industries We Serve</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Banking & Financial Services</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Comprehensive AML solutions for banks, credit unions, and other financial institutions.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Fintech & Payment Services</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Tailored AML compliance for innovative financial technology companies and payment service providers.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Cryptocurrency & Digital Assets</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Specialized AML solutions for cryptocurrency exchanges, wallet providers, and other digital asset
                businesses.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Insurance</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                AML compliance solutions for insurance companies and brokers.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Real Estate</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                AML compliance for real estate developers, agents, and property management companies.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Gaming & Gambling</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Specialized AML solutions for casinos, online gaming platforms, and gambling operators.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="bg-accent text-accent-foreground py-12">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Enhance Your AML Compliance?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Contact our team today to discuss how we can help your business meet its AML compliance obligations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-accent hover:bg-white/90">
              Contact Us
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Request a Consultation
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

