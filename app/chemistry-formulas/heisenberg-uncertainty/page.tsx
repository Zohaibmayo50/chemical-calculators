import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Heisenberg Uncertainty Principle | ChemCalc',
  description: 'Understand Δx Δp ≥ h/(4π) and the fundamental limit on precision.',
  keywords: 'Heisenberg uncertainty, quantum mechanics, position momentum',
}

export default function HeisenbergUncertaintyPage() {
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
            <li className="text-gray-900">Heisenberg Uncertainty Principle</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Heisenberg Uncertainty Principle</h1>
          <p className="text-lg opacity-90">Fundamental limit on measurement precision</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Formula</h2>
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-indigo-700">Δx · Δp ≥ h / (4π)</p>
            <p className="text-lg text-indigo-700 mt-2">or Δx · Δp ≥ ℏ / 2</p>
          </div>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
            <li><strong>Δx</strong> = uncertainty in position</li>
            <li><strong>Δp</strong> = uncertainty in momentum</li>
            <li><strong>h</strong> = Planck constant (6.626 × 10⁻³⁴ J·s)</li>
            <li><strong>ℏ</strong> = h/(2π) (reduced Planck)</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example</h2>
          <p className="text-gray-700 mb-3"><strong>Given:</strong> Δx = 1.0 × 10⁻¹⁰ m (atomic scale).</p>
          <div className="space-y-2 text-gray-700">
            <p>Δp ≥ (6.626 × 10⁻³⁴) / (4π × 1.0 × 10⁻¹⁰) kg·m/s</p>
            <p>Δp ≥ 5.27 × 10⁻²⁵ kg·m/s</p>
            <p>For electron (m = 9.109 × 10⁻³¹ kg), Δv ≥ Δp/m ≈ 5.8 × 10⁵ m/s.</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: Δv ≥ 5.8 × 10⁵ m/s</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Notes</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Not due to measurement imperfections; fundamental property of nature.</li>
            <li>Also applies to energy-time: ΔE Δt ≥ ℏ/2.</li>
            <li>Macroscopic objects: h very small, so uncertainties negligible.</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/quantum-and-atomic-structure-calculators/heisenberg-uncertainty-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Heisenberg Uncertainty Calculator</h3>
              <p className="text-sm text-gray-600">Calculate Δx and Δp limits</p>
            </a>
            <a href="/quantum-and-atomic-structure-calculators/de-broglie-wavelength-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">De Broglie Wavelength Calculator</h3>
              <p className="text-sm text-gray-600">Matter wave calculations</p>
            </a>
            <a href="/chemistry-formulas/de-broglie-wavelength" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">De Broglie Wavelength Formula</h3>
              <p className="text-sm text-gray-600">λ = h/p for matter waves</p>
            </a>
            <a href="/chemistry-formulas/planck-equation" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Planck Equation</h3>
              <p className="text-sm text-gray-600">E = hν photon energy</p>
            </a>
            <a href="/quantum-calculators/heisenberg-uncertainty-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Heisenberg Uncertainty Calculator</h3>
              <p className="text-sm text-gray-600">Automated Δx and Δp calculations</p>
            </a>
            <a href="/quantum-calculators" className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">All Quantum Calculators</h3>
              <p className="text-sm opacity-90">Explore all quantum mechanics tools</p>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
