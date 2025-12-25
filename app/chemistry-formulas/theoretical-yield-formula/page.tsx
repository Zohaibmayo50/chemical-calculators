import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Theoretical Yield Formula | ChemCalc',
  description: 'Calculate maximum product from stoichiometry and limiting reactant.',
  keywords: 'theoretical yield, stoichiometry, limiting reactant, maximum product',
}

export default function TheoreticalYieldFormulaPage() {
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
            <li className="text-gray-900">Theoretical Yield Formula</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Theoretical Yield Formula</h1>
          <p className="text-lg opacity-90">Maximum product from stoichiometry</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Concept</h2>
          <p className="text-gray-700 mb-4">Theoretical yield = moles of limiting reactant × (mole ratio product/reactant) × molar mass of product.</p>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-green-700">Theoretical Yield = n<sub>LR</sub> × (stoich. ratio) × M<sub>product</sub></p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example</h2>
          <p className="text-gray-700 mb-3"><strong>Reaction:</strong> N₂ + 3H₂ → 2NH₃</p>
          <p className="text-gray-700 mb-3"><strong>Given:</strong> 10 mol N₂, 20 mol H₂; M(NH₃) = 17 g/mol.</p>
          <div className="space-y-2 text-gray-700">
            <p>Check limiting reactant: N₂ needs 30 mol H₂ (have 20), so H₂ is limiting.</p>
            <p>n(NH₃) from H₂ = 20 mol H₂ × (2 NH₃ / 3 H₂) = 13.33 mol NH₃</p>
            <p>Theoretical yield = 13.33 mol × 17 g/mol ≈ 226.7 g</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: ≈ 226.7 g NH₃</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Mistakes</h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Not identifying limiting reactant</h3>
              <p>Always determine which reactant runs out first.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Using wrong stoichiometric ratio</h3>
              <p>Check balanced equation carefully for mole ratios.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
