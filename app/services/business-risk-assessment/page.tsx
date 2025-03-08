import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, TrendingUp, BarChart, Shield, ArrowRight } from "lucide-react"

export default function BusinessRiskAssessmentPage() {
  return (
    <>
      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold">Business Risk Assessment</h1>
            <p className="text-lg text-gray-600">
              Identify and assess potential business risks related to money laundering and financial crime to protect
              your organization.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Comprehensive assessment of your business risk exposure</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Identification of potential vulnerabilities in your business operations</span>
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
                alt="Business Risk Assessment"
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
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Business Risk Assessment Approach</h2>
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
                  We identify potential risks in your business operations, including money laundering and financial
                  crime risks.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-t-primary">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <CardTitle>Risk Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We analyze identified risks to determine their potential impact and likelihood of occurrence.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-t-primary">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <CardTitle>Risk Evaluation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We evaluate the significance of each risk and prioritize them based on their potential impact.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-t-primary">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <span className="text-xl font-bold text-primary">4</span>
                </div>
                <CardTitle>Risk Mitigation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We develop strategies and recommendations to mitigate identified risks and protect your business.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Key Risk Areas We Assess</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <TrendingUp className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Operational Risks</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Assessment of risks in your business operations that could expose you to money laundering and financial
                crime.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <BarChart className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Customer Risks</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Evaluation of risks associated with your customer base, including high-risk customers and potential
                money laundering risks.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <TrendingUp className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Geographic Risks</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Analysis of risks associated with the geographic locations where your business operates or has
                customers.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <BarChart className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Product/Service Risks</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Assessment of risks associated with your products and services, particularly those that may be
                vulnerable to money laundering.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Shield className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Regulatory Risks</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Evaluation of risks related to regulatory compliance and the potential consequences of non-compliance.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <TrendingUp className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Reputational Risks</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Assessment of risks to your business reputation that could arise from money laundering or financial
                crime issues.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="bg-accent text-accent-foreground py-12">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Benefits of Business Risk Assessment</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            A comprehensive business risk assessment provides numerous benefits for your organization.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Risk Awareness</h3>
              <p className="opacity-90">
                Gain a clear understanding of the risks facing your business and their potential impact.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Proactive Risk Management</h3>
              <p className="opacity-90">
                Address potential risks before they materialize, reducing the likelihood of significant issues.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Resource Optimization</h3>
              <p className="opacity-90">
                Allocate your risk management resources more effectively based on identified priorities.
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

