import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Percent Error Formula | ChemCalc',
  description: 'Calculate percent error between experimental and theoretical values.',
  alternates: {
    canonical: 'https://chemicalcalculators.com/chemistry-formulas/percent-error-formula',
  },
  keywords: 'percent error, experimental error, accuracy, theoretical value, chemistry lab',
}

export default function PercentErrorFormulaPage() {
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
            <li className="text-gray-900">Percent Error Formula</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Percent Error Formula</h1>
          <p className="text-lg opacity-90">Measure experimental accuracy</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Formula</h2>
          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-orange-700">% Error = |Experimental - Theoretical| / Theoretical × 100%</p>
          </div>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700 mt-4">
            <li><strong>Experimental value</strong> = measured result</li>
            <li><strong>Theoretical value</strong> = accepted/true value</li>
            <li><strong>Absolute value</strong> = always positive error</li>
            <li><strong>Result</strong> = percent deviation from true value</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example</h2>
          <p className="text-gray-700 mb-3"><strong>Problem:</strong> Theoretical density = 2.70 g/cm³, measured = 2.62 g/cm³</p>
          <div className="space-y-2 text-gray-700">
            <p>% Error = |2.62 - 2.70| / 2.70 × 100%</p>
            <p>= 0.08 / 2.70 × 100%</p>
            <p>= 0.0296 × 100% = 2.96%</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: 2.96% error</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Notes</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Lower percent error = higher accuracy (closer to true value)</li>
            <li>Use absolute value to avoid negative errors</li>
            <li>Different from percent yield (which can be &lt; or &gt; 100%)</li>
            <li>Common in lab reports to assess experimental technique</li>
          </ul>
        </section>

        {/* Related Calculators */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/stoichiometry-calculators/percent-yield-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Percent Yield Calculator</h3>
              <p className="text-sm text-gray-600">Calculate experimental efficiency</p>
            </a>
            <a href="/stoichiometry-calculators/theoretical-yield-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Theoretical Yield Calculator</h3>
              <p className="text-sm text-gray-600">Find expected product amount</p>
            </a>
            <a href="/chemistry-formulas/percent-yield-formula" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Percent Yield Formula</h3>
              <p className="text-sm text-gray-600">(actual/theoretical) × 100%</p>
            </a>
            <a href="/stoichiometry-calculators" className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">All Stoichiometry Calculators</h3>
              <p className="text-sm opacity-90">Explore all calculation tools</p>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
