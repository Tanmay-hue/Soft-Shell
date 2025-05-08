"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

// Using named export instead of default export
export function NavbarSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              SoftSell
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link href="/#how-it-works" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">
                How It Works
              </Link>
              <Link href="/#why-choose-us" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">
                Why Choose Us
              </Link>
              <Link href="/#testimonials" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">
                Testimonials
              </Link>
              <Link href="/#contact" className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 focus:outline-none">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md">
            <Link
              href="/#how-it-works"
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/#why-choose-us"
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Choose Us
            </Link>
            <Link
              href="/#testimonials"
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="/#contact"
              className="bg-blue-600 text-white hover:bg-blue-700 block px-3 py-2 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
