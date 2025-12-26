import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Bohr Model Formula | ChemCalc',
  description: 'Energy levels and radius of hydrogen-like atoms: E = -13.6 Z²/n².',
  alternates: {
    canonical: 'https://chemicalcalculators.com/chemistry-formulas/bohr-model',
  },
  keywords: 'Bohr model, hydrogen atom, energy levels, atomic radius, quantum',
}

export default function BohrModelPage() {
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
            <li className="text-gray-900">Bohr Model Formula</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Bohr Model Formula</h1>
          <p className="text-lg opacity-90">Quantized energy levels in hydrogen-like atoms</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Energy Levels</h2>
          <div className="bg-teal-50 border-l-4 border-teal-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-teal-700">E<sub>n</sub> = -13.6 eV × Z² / n²</p>
          </div>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
            <li><strong>E<sub>n</sub></strong> = energy of level n (eV)</li>
            <li><strong>Z</strong> = atomic number (1 for H)</li>
            <li><strong>n</strong> = principal quantum number (1, 2, 3...)</li>
            <li>Negative sign: electron is bound to nucleus</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Orbital Radius</h2>
          <div className="bg-teal-50 p-4 rounded text-center">
            <p className="text-xl font-semibold text-teal-700">r<sub>n</sub> = a₀ n² / Z</p>
            <p className="text-gray-700 mt-2">a₀ = 0.529 Å (Bohr radius)</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example: Hydrogen n = 2</h2>
          <div className="space-y-2 text-gray-700">
            <p>E₂ = -13.6 × 1² / 2² = -13.6 / 4 = -3.4 eV</p>
            <p>r₂ = 0.529 × 2² / 1 = 0.529 × 4 = 2.116 Å</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: E₂ = -3.4 eV, r₂ = 2.12 Å</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Transition Energy</h2>
          <p className="text-gray-700 mb-3">ΔE = E<sub>final</sub> - E<sub>initial</sub> = -13.6 Z² (1/n<sub>f</sub>² - 1/n<sub>i</sub>²)</p>
          <p className="text-gray-700">Photon emitted if n<sub>f</sub> &lt; n<sub>i</sub>; absorbed if n<sub>f</sub> &gt; n<sub>i</sub>.</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/quantum-and-atomic-structure-calculators/bohr-model-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Bohr Model Calculator</h3>
              <p className="text-sm text-gray-600">Calculate energy levels and transitions</p>
            </a>
            <a href="/quantum-and-atomic-structure-calculators/wavelength-energy-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Wavelength-Energy Calculator</h3>
              <p className="text-sm text-gray-600">Convert between wavelength and energy</p>
            </a>
            <a href="/chemistry-formulas/rydberg-equation" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Rydberg Equation</h3>
              <p className="text-sm text-gray-600">Hydrogen spectral lines</p>
            </a>
            <a href="/chemistry-formulas/planck-equation" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Planck Equation</h3>
              <p className="text-sm text-gray-600">E = hν photon energy</p>
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
