import { Upload, DollarSign, CheckCircle } from "lucide-react"

// Using named export instead of default export
export function HowItWorksSection() {
  const steps = [
    {
      icon: <Upload className="h-12 w-12 text-blue-600" />,
      title: "Upload License",
      description: "Submit your software license details through our secure portal.",
    },
    {
      icon: <DollarSign className="h-12 w-12 text-blue-600" />,
      title: "Get Valuation",
      description: "Receive a competitive market valuation within 24 hours.",
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-blue-600" />,
      title: "Get Paid",
      description: "Accept our offer and get paid quickly through your preferred method.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50" id="how-it-works">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
