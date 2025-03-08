import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, BarChart, FileText, Shield, ArrowRight } from "lucide-react"

export default function AnnualAMLRiskAssessmentPage() {
  return (
    <>
      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold">Annual AML Risk Assessment</h1>
            <p className="text-lg text-gray-600">
              Comprehensive annual risk assessments to identify and mitigate potential AML risks in your business
              operations.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Thorough evaluation of your AML risk exposure</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Identification of potential vulnerabilities in your AML controls</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Detailed risk assessment report with findings and recommendations</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Action plan for addressing identified risks</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Request a Risk Assessment
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
              <Image
                src="/placeholder.svg?height=800&width=800"
                alt="Annual AML Risk Assessment"
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
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Risk Assessment Methodology</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-t-4 border-t-primary">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <CardTitle>Risk Identification</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We identify potential AML risks in your business operations, customer base, and geographic exposure.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-t-primary">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <CardTitle>Control Evaluation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We assess the effectiveness of your existing AML controls in mitigating identified risks.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-t-primary">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <CardTitle>Gap Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We identify gaps in your AML controls and areas for improvement.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-t-primary">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <span className="text-xl font-bold text-primary">4</span>
                </div>
                <CardTitle>Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We provide detailed recommendations and an action plan to address identified risks and control gaps.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Key Components of Our Risk Assessment</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <BarChart className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Customer Risk Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Evaluation of your customer base to identify high-risk customers and potential money laundering risks.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <BarChart className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Geographic Risk Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Analysis of your geographic exposure to identify high-risk jurisdictions and associated money laundering
                risks.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <BarChart className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Product/Service Risk Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Evaluation of your products and services to identify those with higher money laundering risks.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <FileText className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Policy & Procedure Review</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Review of your AML policies and procedures to ensure they adequately address identified risks.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Shield className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Control Effectiveness Testing</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Testing of your AML controls to assess their effectiveness in mitigating identified risks.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <FileText className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Regulatory Compliance Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Evaluation of your compliance with applicable AML regulations and requirements.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="bg-accent text-accent-foreground py-12">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Benefits of Annual AML Risk Assessments</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Regular risk assessments are essential for maintaining an effective AML compliance program.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Regulatory Compliance</h3>
              <p className="opacity-90">Ensure compliance with regulatory requirements for regular risk assessments.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Risk Mitigation</h3>
              <p className="opacity-90">
                Identify and address potential AML risks before they become significant issues.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Resource Optimization</h3>
              <p className="opacity-90">Allocate your AML resources more effectively based on identified risks.</p>
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
          <Card>
            <CardHeader>
              <CardTitle>Business Risk Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-4">
                Identify and assess potential business risks related to money laundering and financial crime.
              </CardDescription>
              <Link
                href="/services/business-risk-assessment"
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

