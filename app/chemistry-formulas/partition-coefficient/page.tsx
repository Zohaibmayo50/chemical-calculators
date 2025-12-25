import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Partition Coefficient (Kp) | ChemCalc',
  description: 'Kp = [solute in organic] / [solute in aqueous] for extraction equilibrium.',
  keywords: 'partition coefficient, distribution, extraction, log P',
}

export default function PartitionCoefficientPage() {
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
            <li className="text-gray-900">Partition Coefficient</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Partition Coefficient (Kp)</h1>
          <p className="text-lg opacity-90">Distribution between immiscible solvents</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Definition</h2>
          <div className="bg-teal-50 border-l-4 border-teal-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-teal-700">Kp = [solute]<sub>organic</sub> / [solute]<sub>aqueous</sub></p>
          </div>
          <p className="text-gray-700">At equilibrium; often reported as log P. High Kp = solute prefers organic phase.</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example</h2>
          <p className="text-gray-700 mb-3"><strong>Given:</strong> [solute]<sub>organic</sub> = 0.80 M, [solute]<sub>aqueous</sub> = 0.20 M.</p>
          <div className="space-y-2 text-gray-700">
            <p>Kp = 0.80 / 0.20 = 4.0</p>
            <p>log P = log₁₀(4.0) ≈ 0.60</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: Kp = 4.0; log P ≈ 0.60</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Applications</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Liquid-liquid extraction: higher Kp = better extraction efficiency.</li>
            <li>Drug design: log P predicts membrane permeability.</li>
            <li>Environmental chemistry: pollutant distribution between phases.</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  )
}
