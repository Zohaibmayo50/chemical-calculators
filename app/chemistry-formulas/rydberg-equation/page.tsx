import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Rydberg Equation | ChemCalc',
  description: 'Calculate wavelength of atomic spectral lines using 1/λ = R(1/n₁² - 1/n₂²).',
  keywords: 'Rydberg equation, hydrogen spectrum, atomic emission, spectral lines',
}

export default function RydbergEquationPage() {
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
            <li className="text-gray-900">Rydberg Equation</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Rydberg Equation</h1>
          <p className="text-lg opacity-90">Predict wavelengths of hydrogen spectral lines</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Formula</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-blue-700">1/λ = R<sub>H</sub> (1/n₁² - 1/n₂²)</p>
          </div>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
            <li><strong>λ</strong> = wavelength (m)</li>
            <li><strong>R<sub>H</sub></strong> = Rydberg constant (1.097 × 10⁷ m⁻¹)</li>
            <li><strong>n₁</strong> = lower energy level</li>
            <li><strong>n₂</strong> = higher energy level (n₂ &gt; n₁)</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example: Balmer Series (n₁ = 2)</h2>
          <p className="text-gray-700 mb-3"><strong>Find λ for transition n₂ = 3 → n₁ = 2.</strong></p>
          <div className="space-y-2 text-gray-700">
            <p>1/λ = (1.097 × 10⁷) × (1/2² - 1/3²)</p>
            <p>1/λ = (1.097 × 10⁷) × (1/4 - 1/9) = (1.097 × 10⁷) × (5/36)</p>
            <p>1/λ ≈ 1.524 × 10⁶ m⁻¹</p>
            <p>λ ≈ 6.56 × 10⁻⁷ m = 656 nm (red line, Hα)</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: λ ≈ 656 nm (visible red)</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Spectral Series</h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div className="bg-gray-50 p-3 rounded">
              <p className="font-semibold">Lyman (n₁ = 1): UV</p>
              <p className="font-semibold">Balmer (n₁ = 2): Visible</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="font-semibold">Paschen (n₁ = 3): IR</p>
              <p className="font-semibold">Brackett (n₁ = 4): IR</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Notes</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Strictly valid for hydrogen; modified for other atoms using Z².</li>
            <li>Energy: ΔE = hc/λ relates wavelength to photon energy.</li>
            <li>n₂ → n₁ transition emits photon; reverse absorbs.</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  )
}
