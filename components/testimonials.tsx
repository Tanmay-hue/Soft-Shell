export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "SoftSell helped us recover over $50,000 from unused enterprise licenses. The process was seamless and their valuation was better than we expected.",
      name: "Sarah Johnson",
      role: "IT Director",
      company: "TechGrowth Inc.",
    },
    {
      quote:
        "As we transitioned to cloud solutions, we had dozens of perpetual licenses sitting idle. SoftSell made it easy to convert those assets back into capital.",
      name: "Michael Chen",
      role: "CFO",
      company: "Innovate Systems",
    },
  ]

  return (
    <section className="py-16 bg-gray-50" id="testimonials">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Customers Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-6">
                <svg className="h-8 w-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-6">{testimonial.quote}</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-gray-600">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
