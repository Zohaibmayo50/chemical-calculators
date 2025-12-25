import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Dipole Moment Formula | ChemCalc',
  description: 'Calculate molecular dipole moment using μ = q × d.',
  keywords: 'dipole moment, polarity, charge separation, debye',
}

export default function DipoleMomentFormulaPage() {
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
            <li className="text-gray-900">Dipole Moment Formula</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Dipole Moment Formula</h1>
          <p className="text-lg opacity-90">Measure of molecular polarity</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Formula</h2>
          <div className="bg-cyan-50 border-l-4 border-cyan-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-cyan-700">μ = q × d</p>
          </div>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
            <li><strong>μ</strong> = dipole moment (C·m or D)</li>
            <li><strong>q</strong> = magnitude of charge (C)</li>
            <li><strong>d</strong> = distance between charges (m)</li>
            <li>1 Debye (D) = 3.336 × 10⁻³⁰ C·m</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example</h2>
          <p className="text-gray-700 mb-3"><strong>Given:</strong> q = 1.6 × 10⁻¹⁹ C (electron charge), d = 1.0 × 10⁻¹⁰ m.</p>
          <div className="space-y-2 text-gray-700">
            <p>μ = (1.6 × 10⁻¹⁹) × (1.0 × 10⁻¹⁰) = 1.6 × 10⁻²⁹ C·m</p>
            <p>μ = (1.6 × 10⁻²⁹) / (3.336 × 10⁻³⁰) ≈ 4.8 D</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: μ ≈ 4.8 D</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Mistakes</h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Ignoring vector nature</h3>
              <p>For polyatomic molecules, sum bond dipoles as vectors.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Symmetry cancellation</h3>
              <p>Symmetric molecules like CO₂ have μ = 0 despite polar bonds.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">FAQ</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold">What molecules have zero dipole moment?</h3>
              <p>Homonuclear diatomics (H₂, O₂) and symmetric structures (CH₄, CO₂, BF₃).</p>
            </div>
            <div>
              <h3 className="font-semibold">How does polarity affect solubility?</h3>
              <p>Higher μ generally means better solubility in polar solvents like water.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
