import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Le Chatelier\'s Principle | ChemCalc',
  description: 'Predict how equilibrium shifts in response to stress (concentration, pressure, temperature).',
  keywords: 'Le Chatelier principle, equilibrium shift, stress, concentration, pressure, temperature',
}

export default function LeChateliersPrinciplePage() {
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
            <li className="text-gray-900">Le Chatelier's Principle</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Le Chatelier's Principle</h1>
          <p className="text-lg opacity-90">Equilibrium response to external stress</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Principle</h2>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-4">
            <p className="text-lg font-semibold text-amber-700">If a system at equilibrium is disturbed, it shifts to counteract the disturbance</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Three Types of Stress</h2>
          <div className="space-y-4 text-gray-700">
            <div className="bg-amber-50 p-4 rounded">
              <h3 className="font-bold text-amber-700 mb-2">1. Concentration Change</h3>
              <p>Add reactant → shifts right (toward products)</p>
              <p>Add product → shifts left (toward reactants)</p>
              <p>Remove species → shifts to replace it</p>
            </div>
            <div className="bg-amber-50 p-4 rounded">
              <h3 className="font-bold text-amber-700 mb-2">2. Pressure/Volume Change (gases)</h3>
              <p>Increase pressure (decrease V) → shifts to side with fewer gas molecules</p>
              <p>Decrease pressure (increase V) → shifts to side with more gas molecules</p>
            </div>
            <div className="bg-amber-50 p-4 rounded">
              <h3 className="font-bold text-amber-700 mb-2">3. Temperature Change</h3>
              <p>Raise T → shifts in endothermic direction (absorbs heat)</p>
              <p>Lower T → shifts in exothermic direction (releases heat)</p>
              <p>Note: This changes K value</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example: N₂ + 3H₂ ⇌ 2NH₃ (ΔH &lt; 0, exothermic)</h2>
          <div className="space-y-2 text-gray-700">
            <p><strong>Add N₂:</strong> Shifts right → more NH₃ produced</p>
            <p><strong>Increase pressure:</strong> Shifts right (4 mol gas → 2 mol gas)</p>
            <p><strong>Increase temperature:</strong> Shifts left (endothermic direction)</p>
            <p><strong>Remove NH₃:</strong> Shifts right → produces more NH₃</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Important Notes</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Catalyst does NOT shift equilibrium; only speeds up reaching equilibrium</li>
            <li>Concentration and pressure changes don't change K; temperature does</li>
            <li>Inert gas addition at constant V has no effect</li>
            <li>Only gases count for pressure/volume effects</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  )
}
