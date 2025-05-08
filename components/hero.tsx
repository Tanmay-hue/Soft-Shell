import Link from "next/link"

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Maximize the Value of Your Unused Software Licenses
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            SoftSell helps businesses recover costs by selling unused or surplus software licenses quickly and securely.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#contact"
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-md font-medium text-lg transition-colors"
            >
              Get a Quote
            </Link>
            <Link
              href="#contact"
              className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-3 rounded-md font-medium text-lg transition-colors"
            >
              Sell My Licenses
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
