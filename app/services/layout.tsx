import type React from "react"
export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      <div className="bg-primary/10 py-12">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold">AML Compliance Services</h1>
          <p className="text-lg text-gray-600 mt-2">Comprehensive anti-money laundering solutions for your business</p>
        </div>
      </div>
      {children}
    </div>
  )
}

