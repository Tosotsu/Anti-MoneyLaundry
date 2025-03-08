import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, Download, ArrowRight, Bell } from "lucide-react"

const upcomingDeadlines = [
  {
    title: "Annual AML Risk Assessment",
    description: "Complete your annual AML risk assessment to identify and mitigate potential risks.",
    date: "March 31, 2023",
    category: "Risk Assessment",
    reminderLink: "#",
  },
  {
    title: "AML Policy Review",
    description: "Review and update your AML policies and procedures to ensure compliance with current regulations.",
    date: "April 15, 2023",
    category: "Policy Review",
    reminderLink: "#",
  },
  {
    title: "Staff AML Training",
    description: "Conduct annual AML training for all staff to ensure awareness of compliance requirements.",
    date: "May 30, 2023",
    category: "Training",
    reminderLink: "#",
  },
  {
    title: "Independent AML Audit",
    description: "Arrange for an independent audit of your AML compliance program.",
    date: "June 30, 2023",
    category: "Audit",
    reminderLink: "#",
  },
]

const regulatoryUpdates = [
  {
    title: "New Customer Due Diligence Requirements",
    description: "Updated requirements for customer due diligence procedures, effective July 1, 2023.",
    date: "July 1, 2023",
    category: "Regulatory Update",
    moreInfoLink: "#",
  },
  {
    title: "Enhanced Transaction Monitoring Guidelines",
    description:
      "New guidelines for transaction monitoring and suspicious activity reporting, effective August 15, 2023.",
    date: "August 15, 2023",
    category: "Regulatory Update",
    moreInfoLink: "#",
  },
  {
    title: "Updated AML Risk Assessment Methodology",
    description: "Revised methodology for conducting AML risk assessments, effective September 30, 2023.",
    date: "September 30, 2023",
    category: "Regulatory Update",
    moreInfoLink: "#",
  },
]

export default function AMLComplianceCalendarPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">AML Compliance Calendar</h2>
        <p className="text-lg text-gray-600 mb-6">
          Stay on top of important AML compliance dates and deadlines with our comprehensive compliance calendar.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-primary hover:bg-primary/90">
            <Download className="mr-2 h-4 w-4" />
            Download Full Calendar
          </Button>
          <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
            <Bell className="mr-2 h-4 w-4" />
            Set Up Reminders
          </Button>
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-xl md:text-2xl font-bold mb-6">Upcoming Compliance Deadlines</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingDeadlines.map((deadline, index) => (
            <Card key={index} className="h-full service-card">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="inline-block bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                    {deadline.category}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="mr-1 h-4 w-4" />
                    {deadline.date}
                  </div>
                </div>
                <CardTitle>{deadline.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{deadline.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Link href={deadline.reminderLink} className="group inline-flex items-center text-primary font-medium">
                  Set Reminder
                  <Bell className="ml-2 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-xl md:text-2xl font-bold mb-6">Upcoming Regulatory Updates</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {regulatoryUpdates.map((update, index) => (
            <Card key={index} className="h-full service-card">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="inline-block bg-accent/10 text-accent px-2 py-1 rounded-full text-xs font-medium">
                    {update.category}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="mr-1 h-4 w-4" />
                    Effective: {update.date}
                  </div>
                </div>
                <CardTitle>{update.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{update.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Link href={update.moreInfoLink} className="group inline-flex items-center text-accent font-medium">
                  More Information
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-xl md:text-2xl font-bold mb-6">Quarterly Compliance Tasks</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="h-full service-card">
            <CardHeader>
              <div className="inline-block bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium mb-2">
                Q1 (Jan-Mar)
              </div>
              <CardTitle className="text-lg">First Quarter Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <Calendar className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Review and update AML risk assessment</span>
                </li>
                <li className="flex items-start">
                  <Calendar className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Conduct quarterly transaction monitoring review</span>
                </li>
                <li className="flex items-start">
                  <Calendar className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Update customer due diligence procedures</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="h-full service-card">
            <CardHeader>
              <div className="inline-block bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium mb-2">
                Q2 (Apr-Jun)
              </div>
              <CardTitle className="text-lg">Second Quarter Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <Calendar className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Conduct staff AML training</span>
                </li>
                <li className="flex items-start">
                  <Calendar className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Quarterly transaction monitoring review</span>
                </li>
                <li className="flex items-start">
                  <Calendar className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Review and update AML policies</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="h-full service-card">
            <CardHeader>
              <div className="inline-block bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium mb-2">
                Q3 (Jul-Sep)
              </div>
              <CardTitle className="text-lg">Third Quarter Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <Calendar className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Independent AML audit</span>
                </li>
                <li className="flex items-start">
                  <Calendar className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Quarterly transaction monitoring review</span>
                </li>
                <li className="flex items-start">
                  <Calendar className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Update screening procedures</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="h-full service-card">
            <CardHeader>
              <div className="inline-block bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium mb-2">
                Q4 (Oct-Dec)
              </div>
              <CardTitle className="text-lg">Fourth Quarter Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <Calendar className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Annual AML program review</span>
                </li>
                <li className="flex items-start">
                  <Calendar className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Quarterly transaction monitoring review</span>
                </li>
                <li className="flex items-start">
                  <Calendar className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Plan next year's compliance activities</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-16 bg-accent/10 rounded-lg p-8 text-center">
        <h3 className="text-xl md:text-2xl font-bold mb-4">Need a Customized AML Compliance Calendar?</h3>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Our team can create a customized AML compliance calendar tailored to your specific business needs and
          regulatory requirements.
        </p>
        <Button className="bg-accent hover:bg-accent/90">Contact Us</Button>
      </div>
    </div>
  )
}

