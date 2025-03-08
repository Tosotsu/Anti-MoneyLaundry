import type React from "react"
export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      <div className="bg-accent/10 py-12">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold">AML Compliance Resources</h1>
          <p className="text-lg text-gray-600 mt-2">Access our comprehensive library of AML compliance resources</p>
        </div>
      </div>
      {children}
    </div>
  )
}

