import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, CheckSquare, FileText, Shield, ArrowRight } from "lucide-react"

export default function AMLHealthCheckPage() {
  return (
    <>
      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold">AML Health Check</h1>
            <p className="text-lg text-gray-600">
              A thorough review of your existing AML procedures to ensure compliance and effectiveness in combating
              money laundering risks.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Comprehensive assessment of your AML program</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Identification of strengths and areas for improvement</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Detailed report with practical recommendations</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Action plan for enhancing your AML compliance</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Request a Health Check
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                Download Sample Report
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl">
              <Image src="/placeholder.svg?height=800&width=800" alt="AML Health Check" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/10" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-12">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Health Check Process</h2>
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
                  We conduct an initial assessment of your AML program, including policies, procedures, and controls.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-t-primary">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <CardTitle>In-depth Review</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We perform a detailed review of your AML processes, testing their effectiveness and compliance with
                  regulations.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-t-primary">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <CardTitle>Findings & Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We provide a detailed report of our findings, including strengths and areas for improvement.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-t-primary">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <span className="text-xl font-bold text-primary">4</span>
                </div>
                <CardTitle>Action Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We develop a practical action plan to address identified issues and enhance your AML compliance.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Areas Covered in Our Health Check</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <FileText className="h-8 w-8 text-primary mb-2" />
              <CardTitle>AML Policies & Procedures</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Review of your AML policies and procedures to ensure they are comprehensive, up-to-date, and compliant
                with regulations.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CheckSquare className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Customer Due Diligence</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Assessment of your customer due diligence processes, including customer identification, verification,
                and risk profiling.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Shield className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Transaction Monitoring</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Evaluation of your transaction monitoring systems and processes for identifying suspicious activities.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <FileText className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Suspicious Activity Reporting</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Review of your processes for identifying, investigating, and reporting suspicious activities.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CheckSquare className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Staff Training</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Assessment of your AML training program to ensure staff have the necessary knowledge and skills.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Shield className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Record Keeping</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Review of your record-keeping practices to ensure compliance with regulatory requirements.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="bg-primary text-primary-foreground py-12">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Benefits of an AML Health Check</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Regular health checks are essential for maintaining an effective AML compliance program.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Identify Vulnerabilities</h3>
              <p className="opacity-90">
                Identify potential vulnerabilities in your AML program before they become significant issues.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Regulatory Compliance</h3>
              <p className="opacity-90">
                Ensure your AML program meets current regulatory requirements and expectations.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Program Enhancement</h3>
              <p className="opacity-90">
                Identify opportunities to enhance the effectiveness and efficiency of your AML program.
              </p>
            </div>
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
              <CardTitle>Annual AML Risk Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-4">
                Comprehensive annual risk assessments to identify and mitigate potential AML risks.
              </CardDescription>
              <Link
                href="/services/annual-aml-risk-assessment"
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
        </div>
      </div>
    </>
  )
}

