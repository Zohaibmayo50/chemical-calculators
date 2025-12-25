import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Ionic Strength Formula | ChemCalc',
  description: 'Calculate ionic strength: I = 1/2 Σ(ci zi²) for electrolyte solutions.',
  keywords: 'ionic strength, electrolyte, activity coefficient, solution chemistry, charge',
}

export default function IonicStrengthFormulaPage() {
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
            <li className="text-gray-900">Ionic Strength Formula</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Ionic Strength Formula</h1>
          <p className="text-lg opacity-90">Measure total ion concentration in solution</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Formula</h2>
          <div className="bg-violet-50 border-l-4 border-violet-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-violet-700">I = 1/2 Σ c<sub>i</sub> z<sub>i</sub>²</p>
          </div>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700 mt-4">
            <li><strong>I</strong> = ionic strength (mol/L)</li>
            <li><strong>c<sub>i</sub></strong> = molar concentration of ion i</li>
            <li><strong>z<sub>i</sub></strong> = charge of ion i</li>
            <li><strong>Σ</strong> = sum over all ions</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example: 0.1 M NaCl</h2>
          <div className="space-y-2 text-gray-700">
            <p>Na⁺: c = 0.1 M, z = +1</p>
            <p>Cl⁻: c = 0.1 M, z = -1</p>
            <p>I = 1/2 [0.1(1)² + 0.1(-1)²]</p>
            <p>= 1/2 [0.1 + 0.1] = 0.1 M</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: I = 0.1 M</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example: 0.1 M CaCl₂</h2>
          <div className="space-y-2 text-gray-700">
            <p>Ca²⁺: c = 0.1 M, z = +2</p>
            <p>Cl⁻: c = 0.2 M (two per formula unit), z = -1</p>
            <p>I = 1/2 [0.1(2)² + 0.2(-1)²]</p>
            <p>= 1/2 [0.4 + 0.2] = 0.3 M</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: I = 0.3 M (note: higher than molarity due to charge)</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Importance</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Used to calculate activity coefficients via Debye-Hückel equation</li>
            <li>Affects solubility, reaction rates, and equilibria</li>
            <li>Higher charge ions contribute more to ionic strength (z² factor)</li>
            <li>For 1:1 electrolyte, I = molarity; for others, I &gt; molarity</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  )
}
