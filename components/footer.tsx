import Link from "next/link"
import { Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8" />
              <span className="font-bold text-xl">AML Compliance</span>
            </div>
            <p className="text-sm opacity-80">
              Professional anti-money laundering compliance solutions for businesses of all sizes.
            </p>
            <div className="flex space-x-4">
              <Link href="https://twitter.com" className="hover:opacity-80 transition-opacity">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://facebook.com" className="hover:opacity-80 transition-opacity">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://linkedin.com" className="hover:opacity-80 transition-opacity">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://instagram.com" className="hover:opacity-80 transition-opacity">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/aml-policy-documentation" className="hover:underline">
                  AML Policy Documentation
                </Link>
              </li>
              <li>
                <Link href="/services/in-house-aml-compliance" className="hover:underline">
                  In-house AML Compliance
                </Link>
              </li>
              <li>
                <Link href="/services/aml-training" className="hover:underline">
                  AML Training
                </Link>
              </li>
              <li>
                <Link href="/services/aml-software-selection" className="hover:underline">
                  AML Software Selection
                </Link>
              </li>
              <li>
                <Link href="/services/annual-aml-risk-assessment" className="hover:underline">
                  Annual AML Risk Assessment
                </Link>
              </li>
              <li>
                <Link href="/services/aml-health-check" className="hover:underline">
                  AML Health Check
                </Link>
              </li>
              <li>
                <Link href="/services/business-risk-assessment" className="hover:underline">
                  Business Risk Assessment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/resources/downloads" className="hover:underline">
                  Downloads
                </Link>
              </li>
              <li>
                <Link href="/resources/illustrations" className="hover:underline">
                  Illustrations
                </Link>
              </li>
              <li>
                <Link href="/resources/aml-videos" className="hover:underline">
                  AML Videos
                </Link>
              </li>
              <li>
                <Link href="/resources/aml-compliance-calendar" className="hover:underline">
                  AML Compliance Calendar
                </Link>
              </li>
              <li>
                <Link href="/resources/aml-success-stories" className="hover:underline">
                  AML Success Stories
                </Link>
              </li>
              <li>
                <Link href="/resources/publications" className="hover:underline">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="/resources/podcasts" className="hover:underline">
                  Podcasts
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Subscribe</h3>
            <p className="text-sm mb-4 opacity-80">Stay updated with the latest in AML compliance</p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-secondary-foreground/10 border-secondary-foreground/20 placeholder:text-secondary-foreground/50"
              />
              <Button className="w-full bg-accent hover:bg-accent/90">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-80">
            &copy; {new Date().getFullYear()} AML Compliance Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-sm hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm hover:underline">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="text-sm hover:underline">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

