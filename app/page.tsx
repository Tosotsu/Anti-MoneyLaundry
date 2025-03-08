"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Shield,
  FileText,
  Users,
  BookOpen,
  Search,
  BarChart,
  CheckCircle,
  TrendingUp,
  ArrowRight,
  Download,
  ImageIcon,
  Video,
  Calendar,
  Award,
  NewspaperIcon as Publication,
  Headphones,
} from "lucide-react"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const services = [
  {
    icon: <FileText className="h-10 w-10 text-primary" />,
    title: "AML Policy Documentation",
    description: "Comprehensive documentation to ensure your business meets all regulatory requirements.",
    href: "/services/aml-policy-documentation",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "In-house AML Compliance",
    description: "Set up and manage your own in-house AML compliance department with our expert guidance.",
    href: "/services/in-house-aml-compliance",
  },
  {
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    title: "AML Training",
    description: "Specialized training programs for your staff to ensure compliance with AML regulations.",
    href: "/services/aml-training",
  },
  {
    icon: <Search className="h-10 w-10 text-primary" />,
    title: "AML Software Selection",
    description: "Expert advice on selecting the right AML software solutions for your business needs.",
    href: "/services/aml-software-selection",
  },
  {
    icon: <BarChart className="h-10 w-10 text-primary" />,
    title: "Annual AML Risk Assessment",
    description: "Comprehensive annual risk assessments to identify and mitigate potential AML risks.",
    href: "/services/annual-aml-risk-assessment",
  },
  {
    icon: <CheckCircle className="h-10 w-10 text-primary" />,
    title: "AML Health Check",
    description: "Thorough review of your existing AML procedures to ensure compliance and effectiveness.",
    href: "/services/aml-health-check",
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    title: "Business Risk Assessment",
    description: "Identify and assess potential business risks related to money laundering and financial crime.",
    href: "/services/business-risk-assessment",
  },
]

const resources = [
  {
    icon: <Download className="h-10 w-10 text-accent" />,
    title: "Downloads",
    description: "Access our library of AML compliance templates, checklists, and guides.",
    href: "/resources/downloads",
  },
  {
    icon: <ImageIcon className="h-10 w-10 text-accent" />,
    title: "Illustrations",
    description: "Visual guides and infographics explaining complex AML concepts and processes.",
    href: "/resources/illustrations",
  },
  {
    icon: <Video className="h-10 w-10 text-accent" />,
    title: "AML Videos",
    description: "Educational videos on AML compliance, regulations, and best practices.",
    href: "/resources/aml-videos",
  },
  {
    icon: <Calendar className="h-10 w-10 text-accent" />,
    title: "AML Compliance Calendar",
    description: "Stay on top of important AML compliance dates and deadlines.",
    href: "/resources/aml-compliance-calendar",
  },
  {
    icon: <Award className="h-10 w-10 text-accent" />,
    title: "AML Success Stories",
    description: "Real-world examples of successful AML compliance implementation and risk mitigation.",
    href: "/resources/aml-success-stories",
  },
  {
    icon: <Publication className="h-10 w-10 text-accent" />,
    title: "Publications",
    description: "Research papers, articles, and publications on AML compliance and regulatory updates.",
    href: "/resources/publications",
  },
  {
    icon: <Headphones className="h-10 w-10 text-accent" />,
    title: "Podcasts",
    description: "Listen to expert discussions on AML compliance, trends, and challenges.",
    href: "/resources/podcasts",
  },
]

const testimonials = [
  {
    quote:
      "Implementing their AML compliance solutions has transformed our risk management approach. We now have confidence in our ability to detect and prevent financial crime.",
    author: "Sarah Johnson",
    position: "Compliance Officer, Global Financial Services",
  },
  {
    quote:
      "The AML training provided to our team was exceptional. The content was relevant, engaging, and has significantly improved our compliance procedures.",
    author: "Michael Chen",
    position: "Head of Risk, Eastern Bank",
  },
  {
    quote:
      "Their business risk assessment identified vulnerabilities we weren't aware of. The remediation plan they provided was clear, actionable, and effective.",
    author: "Emma Rodriguez",
    position: "CEO, Fintech Innovations",
  },
]

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const servicesRef = useRef(null)
  const resourcesRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)

  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.2 })
  const isResourcesInView = useInView(resourcesRef, { once: true, amount: 0.2 })
  const isAboutInView = useInView(aboutRef, { once: true, amount: 0.2 })
  const isContactInView = useInView(contactRef, { once: true, amount: 0.2 })

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="relative hero-gradient py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center" />
        </div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
                Trusted AML Compliance Solutions
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Protect Your Business from Financial Crime
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-xl">
                Comprehensive anti-money laundering compliance solutions designed to safeguard your business and meet
                regulatory requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Get Started
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-2xl">
                <Image src="/placeholder.svg?height=800&width=800" alt="AML Compliance" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/10" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <Shield className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-bold">100% Compliant</p>
                    <p className="text-sm text-gray-500">With global regulations</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-16 md:py-24">
        <div className="container">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            animate={isServicesInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our AML Compliance Services</h2>
            <p className="text-lg text-gray-600">
              Comprehensive solutions to help your business navigate the complex world of anti-money laundering
              compliance.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate={isServicesInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="h-full service-card border-t-4 border-t-primary">
                  <CardHeader>
                    <div className="mb-2">{service.icon}</div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Link href={service.href} className="group inline-flex items-center text-primary font-medium">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate={isAboutInView ? "visible" : "hidden"}
              variants={fadeIn}
              className="relative"
            >
              <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=1000&width=1000"
                  alt="About AML Compliance"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5" />
              </div>
              <div className="absolute -top-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <p className="text-4xl font-bold text-primary">15+</p>
                <p className="text-gray-600">Years of Experience</p>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                <p className="text-4xl font-bold text-accent">500+</p>
                <p className="text-gray-600">Clients Worldwide</p>
              </div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial="hidden"
              animate={isAboutInView ? "visible" : "hidden"}
              variants={fadeIn}
            >
              <div className="inline-block bg-accent/10 text-accent px-4 py-1 rounded-full text-sm font-medium">
                Why Choose Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Expert AML Compliance Solutions for Your Business</h2>
              <p className="text-lg text-gray-600">
                With over 15 years of experience in anti-money laundering compliance, we provide tailored solutions to
                businesses of all sizes across multiple industries.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Expert team of certified AML professionals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Customized solutions tailored to your specific business needs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Up-to-date with the latest regulatory requirements</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Comprehensive approach to AML risk management</span>
                </li>
              </ul>
              <Button className="bg-accent hover:bg-accent/90">Learn More About Us</Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg opacity-90">
              Hear from businesses that have transformed their AML compliance with our solutions.
            </p>
          </div>

          <div className="relative h-[250px] max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="absolute inset-0 flex flex-col items-center justify-center text-center p-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: currentTestimonial === index ? 1 : 0,
                  scale: currentTestimonial === index ? 1 : 0.9,
                  zIndex: currentTestimonial === index ? 10 : 0,
                }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-xl md:text-2xl italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="opacity-80">{testimonial.position}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full mx-1 ${currentTestimonial === index ? "bg-white" : "bg-white/30"}`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section ref={resourcesRef} className="py-16 md:py-24">
        <div className="container">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            animate={isResourcesInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AML Compliance Resources</h2>
            <p className="text-lg text-gray-600">
              Access our comprehensive library of resources to enhance your understanding of AML compliance.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate={isResourcesInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {resources.map((resource, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="h-full service-card border-t-4 border-t-accent">
                  <CardHeader>
                    <div className="mb-2">{resource.icon}</div>
                    <CardTitle>{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{resource.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Link href={resource.href} className="group inline-flex items-center text-accent font-medium">
                      Explore
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            initial="hidden"
            animate={isContactInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <div className="space-y-6">
              <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
                Get in Touch
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Enhance Your AML Compliance?</h2>
              <p className="text-lg text-gray-600">
                Contact our team of experts today to discuss how we can help your business meet its AML compliance
                obligations.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Expert Consultation</h3>
                    <p className="text-gray-600">Schedule a free consultation with our AML experts</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Tailored Solutions</h3>
                    <p className="text-gray-600">Customized AML compliance solutions for your business</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Ongoing Support</h3>
                    <p className="text-gray-600">Continuous support and updates on regulatory changes</p>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you shortly.</CardDescription>
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
                    <label htmlFor="company" className="text-sm font-medium">
                      Company
                    </label>
                    <Input id="company" placeholder="Your Company" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea id="message" placeholder="How can we help you?" rows={4} />
                  </div>
                  <Button className="w-full bg-accent hover:bg-accent/90">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-accent text-accent-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Strengthen Your AML Compliance?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Take the first step towards comprehensive AML compliance for your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-accent hover:bg-white/90">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

