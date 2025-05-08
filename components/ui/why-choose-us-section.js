import { Shield, Clock, BadgeDollarSign, Globe } from "lucide-react"

// Using named export instead of default export
export function WhyChooseUsSection() {
  const reasons = [
    {
      icon: <Shield className="h-10 w-10 text-blue-600" />,
      title: "Secure Transactions",
      description: "End-to-end encryption and secure transfer protocols protect your data.",
    },
    {
      icon: <Clock className="h-10 w-10 text-blue-600" />,
      title: "Fast Processing",
      description: "Get valuations within 24 hours and payment within 3 business days.",
    },
    {
      icon: <BadgeDollarSign className="h-10 w-10 text-blue-600" />,
      title: "Best Market Rates",
      description: "Our extensive network ensures you get the highest value for your licenses.",
    },
    {
      icon: <Globe className="h-10 w-10 text-blue-600" />,
      title: "Global Reach",
      description: "Connect with buyers worldwide to maximize your selling potential.",
    },
  ]

  return (
    <section className="py-16 bg-white" id="why-choose-us">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
