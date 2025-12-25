import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Combustion Analysis Formula | ChemCalc',
  description: 'Determine empirical formula from combustion product masses.',
  keywords: 'combustion analysis, empirical formula, elemental analysis, CHN',
}

export default function CombustionAnalysisPage() {
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
            <li className="text-gray-900">Combustion Analysis</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Combustion Analysis</h1>
          <p className="text-lg opacity-90">Find empirical formula from combustion data</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Method</h2>
          <p className="text-gray-700 mb-4">Burn organic compound; collect CO₂ and H₂O. Calculate moles of C, H, and (if present) O.</p>
          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 space-y-2 text-gray-700">
            <p><strong>moles C</strong> = moles CO₂ (1:1 ratio)</p>
            <p><strong>moles H</strong> = 2 × moles H₂O (2:1 ratio)</p>
            <p><strong>moles O</strong> = (mass sample - mass C - mass H) / 16</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example</h2>
          <p className="text-gray-700 mb-3"><strong>Given:</strong> 1.00 g sample produces 2.20 g CO₂ and 0.90 g H₂O.</p>
          <div className="space-y-2 text-gray-700">
            <p>n(CO₂) = 2.20 / 44 = 0.050 mol → n(C) = 0.050 mol → mass C = 0.050 × 12 = 0.60 g</p>
            <p>n(H₂O) = 0.90 / 18 = 0.050 mol → n(H) = 0.100 mol → mass H = 0.100 × 1 = 0.10 g</p>
            <p>mass O = 1.00 - 0.60 - 0.10 = 0.30 g → n(O) = 0.30 / 16 = 0.01875 mol</p>
            <p>Ratio C:H:O = 0.050 : 0.100 : 0.01875 ÷ 0.01875 = 2.67 : 5.33 : 1 ≈ 8 : 16 : 3</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: Empirical formula C₈H₁₆O₃</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Tips</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Always convert to moles before finding ratio.</li>
            <li>Divide all by smallest mole value to get simplest ratio.</li>
            <li>Multiply by integers if needed to get whole numbers.</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/stoichiometry-calculators/empirical-formula-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Empirical Formula Calculator</h3>
              <p className="text-sm text-gray-600">Calculate empirical formula from composition</p>
            </a>
            <a href="/stoichiometry-calculators/molecular-weight-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Molecular Weight Calculator</h3>
              <p className="text-sm text-gray-600">Calculate molar mass from formula</p>
            </a>
            <a href="/stoichiometry-calculators/combustion-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Combustion Calculator</h3>
              <p className="text-sm text-gray-600">Balance combustion reactions</p>
            </a>
            <a href="/stoichiometry-calculators" className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">All Stoichiometry Calculators</h3>
              <p className="text-sm opacity-90">Explore all stoichiometry tools</p>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
