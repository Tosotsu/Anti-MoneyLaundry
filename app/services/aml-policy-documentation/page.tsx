import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, FileText, Download, ArrowRight } from "lucide-react"

export default function AMLPolicyDocumentationPage() {
  return (
    <>
      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold">AML Policy Documentation</h1>
            <p className="text-lg text-gray-600">
              Comprehensive documentation to ensure your business meets all regulatory requirements for anti-money
              laundering compliance.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Tailored to your specific industry and business needs</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Compliant with the latest regulatory requirements</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Comprehensive risk assessment and management procedures</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Regular updates to reflect changing regulations</span>
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
                Download Sample
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=800"
                alt="AML Policy Documentation"
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
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our AML Policy Documentation Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-t-4 border-t-primary">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <CardTitle>Initial Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We conduct a thorough assessment of your business operations, industry, and specific AML risks.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-t-primary">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <CardTitle>Policy Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Our experts develop comprehensive AML policies tailored to your specific business needs and regulatory
                  requirements.
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
                  We assist with the implementation of the policies, including staff training and system integration.
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
                  Regular reviews and updates to ensure your policies remain compliant with changing regulations.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Key Components of Our AML Policy Documentation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <FileText className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Customer Due Diligence</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Comprehensive procedures for identifying and verifying the identity of customers, including enhanced due
                diligence for high-risk customers.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <FileText className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Risk Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Detailed methodology for assessing and managing money laundering and terrorist financing risks specific
                to your business.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <FileText className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Transaction Monitoring</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Procedures for monitoring transactions to identify suspicious activities and reporting requirements.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <FileText className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Record Keeping</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Guidelines for maintaining appropriate records of customer identification, transactions, and risk
                assessments.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <FileText className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Staff Training</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Requirements for staff training on AML policies, procedures, and regulatory obligations.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <FileText className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Compliance Monitoring</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Procedures for regular review and testing of AML policies and procedures to ensure ongoing compliance.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="bg-primary text-primary-foreground py-12">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Strengthen Your AML Compliance?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Contact us today to discuss your AML policy documentation needs.
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
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Related Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <Download className="h-6 w-6 text-accent mb-2" />
              <CardTitle>AML Policy Template</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-4">
                Download our sample AML policy template to get started with your compliance documentation.
              </CardDescription>
              <Link href="/resources/downloads" className="group inline-flex items-center text-accent font-medium">
                Download
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Download className="h-6 w-6 text-accent mb-2" />
              <CardTitle>AML Risk Assessment Guide</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-4">
                Learn how to conduct an effective AML risk assessment for your business.
              </CardDescription>
              <Link href="/resources/downloads" className="group inline-flex items-center text-accent font-medium">
                Download
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Download className="h-6 w-6 text-accent mb-2" />
              <CardTitle>AML Compliance Checklist</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-4">
                A comprehensive checklist to ensure your AML compliance program covers all necessary areas.
              </CardDescription>
              <Link href="/resources/downloads" className="group inline-flex items-center text-accent font-medium">
                Download
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}

