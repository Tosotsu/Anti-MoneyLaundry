"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Menu, X, Shield, ChevronDown } from "lucide-react"

const servicesItems = [
  { title: "AML Policy Documentation", href: "/services/aml-policy-documentation" },
  { title: "In-house AML Compliance", href: "/services/in-house-aml-compliance" },
  { title: "AML Training", href: "/services/aml-training" },
  { title: "AML Software Selection", href: "/services/aml-software-selection" },
  { title: "Annual AML Risk Assessment", href: "/services/annual-aml-risk-assessment" },
  { title: "AML Health Check", href: "/services/aml-health-check" },
  { title: "Business Risk Assessment", href: "/services/business-risk-assessment" },
]

const resourcesItems = [
  { title: "Downloads", href: "/resources/downloads" },
  { title: "Illustrations", href: "/resources/illustrations" },
  { title: "AML Videos", href: "/resources/aml-videos" },
  { title: "AML Compliance Calendar", href: "/resources/aml-compliance-calendar" },
  { title: "AML Success Stories", href: "/resources/aml-success-stories" },
  { title: "Publications", href: "/resources/publications" },
  { title: "Podcasts", href: "/resources/podcasts" },
]

const companyItems = [
  { title: "About Us", href: "/company/about-us" },
  { title: "Our Team", href: "/company/our-team" },
  { title: "Contact Us", href: "/company/contact-us" },
  { title: "Careers", href: "/company/careers" },
  { title: "Testimonials", href: "/company/testimonials" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Shield className="h-8 w-8 text-primary" />
          <span className="font-bold text-xl">AML Compliance</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {servicesItems.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{item.title}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {resourcesItems.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{item.title}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {companyItems.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{item.title}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Blog</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden lg:block">
          <Button className="bg-accent hover:bg-accent/90">Contact an Expert</Button>
        </div>

        {/* Mobile menu button */}
        <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto">
          <div className="container py-6 space-y-6">
            <Link href="/" className="block py-2 text-lg font-medium border-b" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>

            <div className="space-y-2">
              <div className="flex items-center justify-between border-b pb-2">
                <h3 className="font-medium">Services</h3>
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="pl-4 space-y-2">
                {servicesItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="block py-1 text-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between border-b pb-2">
                <h3 className="font-medium">Resources</h3>
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="pl-4 space-y-2">
                {resourcesItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="block py-1 text-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between border-b pb-2">
                <h3 className="font-medium">Company</h3>
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="pl-4 space-y-2">
                {companyItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="block py-1 text-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/blog"
              className="block py-2 text-lg font-medium border-b"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>

            <Button className="w-full bg-accent hover:bg-accent/90">Contact an Expert</Button>
          </div>
        </div>
      )}
    </header>
  )
}

