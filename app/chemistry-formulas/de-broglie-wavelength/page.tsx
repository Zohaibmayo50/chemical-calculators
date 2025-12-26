import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'De Broglie Wavelength Formula | ChemCalc',
  description: 'Calculate wavelength of matter waves using λ = h / p.',
  alternates: {
    canonical: 'https://chemicalcalculators.com/chemistry-formulas/de-broglie-wavelength',
  },
  keywords: 'de Broglie wavelength, matter waves, momentum, quantum mechanics',
}

export default function DeBroglieWavelengthPage() {
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
            <li className="text-gray-900">De Broglie Wavelength</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">De Broglie Wavelength</h1>
          <p className="text-lg opacity-90">Wavelength associated with a moving particle</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Formula</h2>
          <div className="bg-violet-50 border-l-4 border-violet-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-violet-700">λ = h / p</p>
            <p className="text-lg text-violet-700 mt-2">p = m v</p>
          </div>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
            <li><strong>λ</strong> = wavelength (m)</li>
            <li><strong>h</strong> = Planck constant (6.626 × 10⁻³⁴ J·s)</li>
            <li><strong>p</strong> = momentum (kg·m/s)</li>
            <li><strong>m</strong> = mass (kg)</li>
            <li><strong>v</strong> = velocity (m/s)</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example</h2>
          <p className="text-gray-700 mb-3"><strong>Given:</strong> electron, m = 9.109 × 10⁻³¹ kg, v = 1.0 × 10⁶ m/s.</p>
          <div className="space-y-2 text-gray-700">
            <p>p = (9.109 × 10⁻³¹) × (1.0 × 10⁶) = 9.109 × 10⁻²⁵ kg·m/s</p>
            <p>λ = (6.626 × 10⁻³⁴) / (9.109 × 10⁻²⁵) ≈ 7.27 × 10⁻¹⁰ m = 0.727 nm</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: λ ≈ 0.727 nm</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Mistakes</h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Unit conversion errors</h3>
              <p>Keep SI units: mass in kg, velocity in m/s, wavelength in m.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Using energy instead of momentum</h3>
              <p>For KE given, compute v first, then p = mv.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">FAQ</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold">Does this apply to macroscopic objects?</h3>
              <p>Yes, but wavelength is immeasurably small for large masses.</p>
            </div>
            <div>
              <h3 className="font-semibold">What if relativistic speeds?</h3>
              <p>Use relativistic momentum p = γ m v where γ = 1/√(1 - v²/c²).</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/quantum-and-atomic-structure-calculators/de-broglie-wavelength-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">De Broglie Wavelength Calculator</h3>
              <p className="text-sm text-gray-600">Calculate matter wave properties</p>
            </a>
            <a href="/quantum-and-atomic-structure-calculators/wavelength-energy-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Wavelength-Energy Calculator</h3>
              <p className="text-sm text-gray-600">Photon energy calculations</p>
            </a>
            <a href="/chemistry-formulas/heisenberg-uncertainty" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Heisenberg Uncertainty Principle</h3>
              <p className="text-sm text-gray-600">Position-momentum limits</p>
            </a>
            <a href="/chemistry-formulas/planck-equation" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Planck Equation</h3>
              <p className="text-sm text-gray-600">E = hν formula</p>
            </a>
            <a href="/quantum-and-atomic-structure-calculators" className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">All Quantum & Atomic Structure Calculators</h3>
              <p className="text-sm opacity-90">Explore all quantum and atomic tools</p>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
