import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Clock, Shield } from "lucide-react"

export default function ContactAnExpertPage() {
  return (
    <>
      <div className="container py-12">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact an AML Compliance Expert</h1>
          <p className="text-lg text-gray-600">
            Get personalized guidance from our team of AML compliance experts to address your specific compliance
            challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          <Card>
            <CardHeader>
              <CardTitle>Request Expert Consultation</CardTitle>
              <CardDescription>
                Fill out the form below to connect with an AML compliance expert who specializes in your area of
                interest.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">
                      First Name
                    </label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">
                      Last Name
                    </label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone
                  </label>
                  <Input id="phone" placeholder="+1 (555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    Company
                  </label>
                  <Input id="company" placeholder="Your Company" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="industry" className="text-sm font-medium">
                    Industry
                  </label>
                  <Select>
                    <SelectTrigger id="industry">
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="banking">Banking</SelectItem>
                      <SelectItem value="fintech">Fintech</SelectItem>
                      <SelectItem value="insurance">Insurance</SelectItem>
                      <SelectItem value="cryptocurrency">Cryptocurrency</SelectItem>
                      <SelectItem value="payments">Payments</SelectItem>
                      <SelectItem value="investment">Investment</SelectItem>
                      <SelectItem value="realestate">Real Estate</SelectItem>
                      <SelectItem value="gaming">Gaming</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="expertise" className="text-sm font-medium">
                    Area of Expertise Needed
                  </label>
                  <Select>
                    <SelectTrigger id="expertise">
                      <SelectValue placeholder="Select area of expertise" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="policy">AML Policy Documentation</SelectItem>
                      <SelectItem value="inhouse">In-house AML Compliance</SelectItem>
                      <SelectItem value="training">AML Training</SelectItem>
                      <SelectItem value="software">AML Software Selection</SelectItem>
                      <SelectItem value="risk">AML Risk Assessment</SelectItem>
                      <SelectItem value="healthcheck">AML Health Check</SelectItem>
                      <SelectItem value="business">Business Risk Assessment</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Tell us about your AML compliance needs
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Please provide details about your specific AML compliance challenges or requirements..."
                    rows={4}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="urgency" className="text-sm font-medium">
                    Urgency
                  </label>
                  <Select>
                    <SelectTrigger id="urgency">
                      <SelectValue placeholder="Select urgency level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="urgent">Urgent - Need assistance immediately</SelectItem>
                      <SelectItem value="high">High - Need assistance within 1-2 days</SelectItem>
                      <SelectItem value="medium">Medium - Need assistance within a week</SelectItem>
                      <SelectItem value="low">Low - Planning for future needs</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="w-full bg-accent hover:bg-accent/90">Request Consultation</Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div className="relative h-[200px] w-full rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="AML Compliance Experts"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-primary/10" />
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Why Consult with Our Experts?</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Specialized Expertise</h3>
                    <p className="text-gray-600">
                      Our team includes certified AML specialists with expertise across various industries and
                      regulatory frameworks.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Tailored Solutions</h3>
                    <p className="text-gray-600">
                      We provide customized guidance and solutions based on your specific business needs and compliance
                      challenges.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Practical Approach</h3>
                    <p className="text-gray-600">
                      Our experts focus on practical, implementable solutions that enhance compliance while supporting
                      your business objectives.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Ongoing Support</h3>
                    <p className="text-gray-600">
                      We provide ongoing support and guidance to help you navigate evolving regulatory requirements and
                      compliance challenges.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Consultation Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-t-4 border-t-accent">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-2">
                  <span className="text-xl font-bold text-accent">1</span>
                </div>
                <CardTitle>Initial Consultation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  A 30-minute call with an AML expert to discuss your specific compliance challenges and needs.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-t-accent">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-2">
                  <span className="text-xl font-bold text-accent">2</span>
                </div>
                <CardTitle>Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Our expert will assess your current compliance situation and identify key areas for improvement.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-t-accent">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-2">
                  <span className="text-xl font-bold text-accent">3</span>
                </div>
                <CardTitle>Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  You'll receive tailored recommendations and a proposed action plan to address your compliance needs.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-t-accent">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-2">
                  <span className="text-xl font-bold text-accent">4</span>
                </div>
                <CardTitle>Implementation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  If you choose to proceed, our experts will work with you to implement the recommended solutions.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <Shield className="h-10 w-10 mb-2" />
              <CardTitle>Emergency Assistance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 opacity-90">
                Need urgent AML compliance assistance? Our experts are available for emergency consultations.
              </p>
              <Button className="w-full bg-white text-primary hover:bg-white/90">Request Emergency Support</Button>
            </CardContent>
          </Card>
          <Card className="bg-accent text-accent-foreground">
            <CardHeader>
              <Clock className="h-10 w-10 mb-2" />
              <CardTitle>Schedule a Call</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 opacity-90">
                Prefer to schedule a specific time to speak with an AML expert? Book a call at your convenience.
              </p>
              <Button className="w-full bg-white text-accent hover:bg-white/90">Schedule a Call</Button>
            </CardContent>
          </Card>
          <Card className="bg-secondary text-secondary-foreground">
            <CardHeader>
              <Shield className="h-10 w-10 mb-2" />
              <CardTitle>Free Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 opacity-90">
                Access our library of free AML compliance resources, including guides, templates, and checklists.
              </p>
              <Button className="w-full bg-white text-secondary hover:bg-white/90">Access Resources</Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Enhance Your AML Compliance?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-600">
            Our team of AML compliance experts is ready to help you navigate the complex world of anti-money laundering
            regulations.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90">
            Contact an Expert Now
          </Button>
        </div>
      </div>
    </>
  )
}

