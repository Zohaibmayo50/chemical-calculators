import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Electron Configuration Rules | ChemCalc',
  description: 'Aufbau principle, Pauli exclusion, and Hund\'s rule for electron arrangement.',
  keywords: 'electron configuration, Aufbau principle, Pauli exclusion, Hund rule, orbital filling',
}

export default function ElectronConfigurationPage() {
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
            <li className="text-gray-900">Electron Configuration Rules</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Electron Configuration Rules</h1>
          <p className="text-lg opacity-90">Principles for filling atomic orbitals</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Three Principles</h2>
          <div className="space-y-4 text-gray-700">
            <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
              <h3 className="font-bold text-blue-700 mb-2">1. Aufbau Principle</h3>
              <p>Fill orbitals from lowest to highest energy: 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p...</p>
            </div>
            <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
              <h3 className="font-bold text-blue-700 mb-2">2. Pauli Exclusion Principle</h3>
              <p>Maximum 2 electrons per orbital with opposite spins (↑↓).</p>
            </div>
            <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
              <h3 className="font-bold text-blue-700 mb-2">3. Hund's Rule</h3>
              <p>Fill degenerate orbitals singly first (all same spin) before pairing.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example: Oxygen (Z = 8)</h2>
          <div className="space-y-2 text-gray-700">
            <p>8 electrons to place:</p>
            <p>1s² 2s² 2p⁴</p>
            <p className="mt-3">2p orbitals: ↑↓ ↑ ↑ (two paired, two unpaired following Hund's rule)</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Orbital Capacity</h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div className="bg-gray-50 p-3 rounded">
              <p className="font-semibold">s orbital: 2 electrons</p>
              <p className="font-semibold">p orbitals: 6 electrons (3 orbitals)</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="font-semibold">d orbitals: 10 electrons (5 orbitals)</p>
              <p className="font-semibold">f orbitals: 14 electrons (7 orbitals)</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/quantum-and-atomic-structure-calculators/electron-configuration-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Electron Configuration Calculator</h3>
              <p className="text-sm text-gray-600">Generate configurations for any element</p>
            </a>
            <a href="/quantum-and-atomic-structure-calculators/quantum-numbers-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Quantum Numbers Calculator</h3>
              <p className="text-sm text-gray-600">Validate quantum number sets</p>
            </a>
            <a href="/chemistry-formulas/quantum-numbers" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Quantum Numbers</h3>
              <p className="text-sm text-gray-600">n, l, m<sub>l</sub>, m<sub>s</sub> explained</p>
            </a>
            <a href="/chemistry-formulas/bohr-model" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Bohr Model</h3>
              <p className="text-sm text-gray-600">Energy levels and shells</p>
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
