import type React from "react"
export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      <div className="bg-secondary/10 py-12">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold">About Our Company</h1>
          <p className="text-lg text-gray-600 mt-2">Learn more about our AML compliance expertise and team</p>
        </div>
      </div>
      {children}
    </div>
  )
}

