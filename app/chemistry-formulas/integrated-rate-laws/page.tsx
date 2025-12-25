import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Integrated Rate Laws | ChemCalc',
  description: 'Zero, first, and second-order integrated rate law equations with examples and common pitfalls.',
  keywords: 'integrated rate law, zero order, first order, second order, kinetics',
}

export default function IntegratedRateLawsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <nav className="text-sm breadcrumbs mb-8">
          <ul className="flex space-x-2 text-gray-600">
            <li><a href="/" className="hover:text-blue-600">Home</a></li>
            <li><span className="mx-2">/</span></li>
            <li><a href="/chemistry-formulas" className="hover:text-blue-600">Chemistry Formulas</a></li>
            <li><span className="mx-2">/</span></li>
            <li className="text-gray-900">Integrated Rate Laws</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Integrated Rate Laws</h1>
          <p className="text-lg opacity-90">Relate concentration and time for common reaction orders</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Zero Order</h2>
          <div className="bg-gray-50 p-4 rounded text-center">
            <p className="text-lg font-mono">[A]_t = [A]_0 − k t</p>
            <p className="text-sm text-gray-600 mt-2">Linear in time; slope = −k when plotting [A] vs t</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">First Order</h2>
          <div className="bg-gray-50 p-4 rounded text-center">
            <p className="text-lg font-mono">ln([A]_t) = ln([A]_0) − k t</p>
            <p className="text-sm text-gray-600 mt-2">Linear when plotting ln([A]) vs t; slope = −k</p>
          </div>
          <p className="text-sm text-gray-600 mt-2">Half-life: t_1/2 = 0.693/k</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Second Order</h2>
          <div className="bg-gray-50 p-4 rounded text-center">
            <p className="text-lg font-mono">1/[A]_t = 1/[A]_0 + k t</p>
            <p className="text-sm text-gray-600 mt-2">Linear when plotting 1/[A] vs t; slope = k</p>
          </div>
          <p className="text-sm text-gray-600 mt-2">Half-life: t_1/2 = 1/(k [A]_0)</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example (First Order)</h2>
          <p className="text-gray-700 mb-3"><strong>Given:</strong> [A]_0 = 0.100 M, k = 0.050 min^-1, t = 20 min.</p>
          <div className="space-y-2 text-gray-700">
            <p>ln([A]_t) = ln(0.100) − 0.050 × 20 = −2.3026 − 1.0 = −3.3026</p>
            <p>[A]_t = e^(−3.3026) ≈ 0.0367 M</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: [A]_t ≈ 0.0367 M</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Mistakes</h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Wrong linear plot</h3>
              <p>Match the correct linearization to the reaction order.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Unit consistency</h3>
              <p>Use consistent units for k and time; check k dimensions for order.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
