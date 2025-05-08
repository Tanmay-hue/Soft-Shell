export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">SoftSell</h2>
            <p className="text-gray-400">Maximize the value of your software licenses</p>
          </div>

          <div className="text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} SoftSell. All rights reserved.</p>
            <p className="text-gray-400">A fictional company for demonstration purposes</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
