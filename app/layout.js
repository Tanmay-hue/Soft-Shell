import "./globals.css"
import { Inter } from "next/font/google"
import { NavbarSection } from "@/components/ui/navbar-section"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "SoftSell - Maximize the Value of Your Software Licenses",
  description:
    "SoftSell helps businesses recover costs by selling unused or surplus software licenses quickly and securely.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <NavbarSection />
        {children}
      </body>
    </html>
  )
}
