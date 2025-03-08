import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Users, Building, ArrowRight } from "lucide-react"

export default function InHouseAMLCompliancePage() {
  return (
    <>
      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold">In-house AML Compliance</h1>
            <p className="text-lg text-gray-600">
              Set up and manage your own in-house AML compliance department with our expert guidance and support.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Customized compliance department structure based on your business needs</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Staff recruitment and training support</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Implementation of effective AML policies and procedures</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Ongoing advisory and support services</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Request a Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=800"
                alt="In-house AML Compliance"
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
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our In-house AML Compliance Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-t-4 border-t-primary">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <CardTitle>Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We assess your current compliance structure, business needs, and regulatory requirements.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-t-primary">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <CardTitle>Design</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We design a customized compliance department structure tailored to your specific business needs.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-t-primary">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <CardTitle>Implementation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We help you implement the compliance department, including staff recruitment and training.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-t-primary">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <span className="text-xl font-bold text-primary">4</span>
                </div>
                <CardTitle>Ongoing Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We provide ongoing advisory and support services to ensure your compliance department operates
                  effectively.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Key Components of Our In-house AML Compliance Service
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <Users className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Team Structure & Roles</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                We help you define the optimal team structure and roles for your in-house AML compliance department.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Building className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Policies & Procedures</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                We develop comprehensive AML policies and procedures tailored to your business and regulatory
                requirements.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Users className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Staff Recruitment</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                We assist with recruiting qualified compliance professionals with the right skills and experience.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Users className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Training Programs</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                We provide comprehensive training programs for your compliance staff to ensure they have the necessary
                knowledge and skills.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Building className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Technology Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                We help you select and implement the right AML technology solutions for your compliance department.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Users className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Ongoing Advisory</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                We provide ongoing advisory services to help your compliance department stay up-to-date with regulatory
                changes.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="bg-primary text-primary-foreground py-12">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Set Up Your In-house AML Compliance Department?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Contact us today to discuss how we can help you establish an effective in-house AML compliance function.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Request a Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Related Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>AML Policy Documentation</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-4">
                Comprehensive documentation to ensure your business meets all regulatory requirements.
              </CardDescription>
              <Link
                href="/services/aml-policy-documentation"
                className="group inline-flex items-center text-primary font-medium"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>AML Training</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-4">
                Specialized training programs for your staff to ensure compliance with AML regulations.
              </CardDescription>
              <Link href="/services/aml-training" className="group inline-flex items-center text-primary font-medium">
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>AML Health Check</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-4">
                Thorough review of your existing AML procedures to ensure compliance and effectiveness.
              </CardDescription>
              <Link
                href="/services/aml-health-check"
                className="group inline-flex items-center text-primary font-medium"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}

