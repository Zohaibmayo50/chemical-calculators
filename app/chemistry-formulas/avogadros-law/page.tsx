import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Avogadro\'s Law | ChemCalc',
  description: 'Volume-mole relationship for gases: V/n = constant at constant T and P.',
  keywords: 'Avogadro law, gas volume, moles, ideal gas, gas laws',
}

export default function AvogadrosLawPage() {
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
            <li className="text-gray-900">Avogadro's Law</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-lime-600 to-green-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Avogadro's Law</h1>
          <p className="text-lg opacity-90">Equal volumes contain equal numbers of molecules</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Formula</h2>
          <div className="bg-lime-50 border-l-4 border-lime-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-lime-700">V / n = constant</p>
            <p className="text-xl text-lime-700 mt-3">V₁ / n₁ = V₂ / n₂</p>
          </div>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700 mt-4">
            <li><strong>V</strong> = volume (L)</li>
            <li><strong>n</strong> = number of moles</li>
            <li><strong>Constant</strong> = at fixed T and P</li>
            <li>Volume directly proportional to moles</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Key Principle</h2>
          <div className="bg-lime-50 p-4 rounded">
            <p className="text-gray-700">At constant temperature and pressure, doubling the number of gas molecules doubles the volume.</p>
            <p className="text-gray-700 mt-2 font-semibold">V ∝ n (when T and P are constant)</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example</h2>
          <p className="text-gray-700 mb-3"><strong>Problem:</strong> A balloon contains 2.0 mol of He at 5.0 L. If 3.0 mol more He is added at same T and P, what is the new volume?</p>
          <div className="space-y-2 text-gray-700">
            <p>n₁ = 2.0 mol, V₁ = 5.0 L</p>
            <p>n₂ = 2.0 + 3.0 = 5.0 mol, V₂ = ?</p>
            <p>V₁/n₁ = V₂/n₂</p>
            <p>V₂ = V₁ × (n₂/n₁) = 5.0 × (5.0/2.0) = 12.5 L</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: 12.5 L</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Applications</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Explains why balloons expand when inflated with more gas</li>
            <li>Basis for molar volume concept (22.4 L/mol at STP)</li>
            <li>Supports atomic theory: gases consist of discrete particles</li>
            <li>Combined with other gas laws forms ideal gas law: PV = nRT</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  )
}
