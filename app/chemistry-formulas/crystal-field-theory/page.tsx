import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Crystal Field Theory | ChemCalc',
  description: 'Understand d-orbital splitting and stability of coordination complexes.',
  alternates: {
    canonical: 'https://chemicalcalculators.com/chemistry-formulas/crystal-field-theory',
  },
  keywords: 'crystal field theory, d orbital splitting, coordination chemistry, ligand field',
}

export default function CrystalFieldTheoryPage() {
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
            <li className="text-gray-900">Crystal Field Theory</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Crystal Field Theory</h1>
          <p className="text-lg opacity-90">d-Orbital splitting in coordination complexes</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Octahedral Splitting</h2>
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 mb-4">
            <p className="text-lg font-semibold text-indigo-700">Δ<sub>o</sub> = crystal field splitting energy</p>
            <p className="text-gray-700 mt-2">e<sub>g</sub> orbitals (d<sub>z²</sub>, d<sub>x²-y²</sub>) higher energy</p>
            <p className="text-gray-700">t<sub>2g</sub> orbitals (d<sub>xy</sub>, d<sub>xz</sub>, d<sub>yz</sub>) lower energy</p>
          </div>
          <p className="text-gray-700">Ligands on axes repel e<sub>g</sub> orbitals more than t<sub>2g</sub>.</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Tetrahedral Splitting</h2>
          <div className="bg-indigo-50 p-4 rounded">
            <p className="text-lg font-semibold text-indigo-700">Δ<sub>t</sub> ≈ (4/9) Δ<sub>o</sub></p>
            <p className="text-gray-700 mt-2">Reverse order: e orbitals lower, t₂ orbitals higher</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Spectrochemical Series</h2>
          <p className="text-gray-700 mb-3">Ligands ranked by Δ (weak to strong field):</p>
          <div className="bg-gray-50 p-4 rounded text-center">
            <p className="font-semibold text-gray-800">I⁻ &lt; Br⁻ &lt; Cl⁻ &lt; F⁻ &lt; H₂O &lt; NH₃ &lt; en &lt; NO₂⁻ &lt; CN⁻ &lt; CO</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">High-Spin vs Low-Spin</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li><strong>Weak field (small Δ):</strong> electrons prefer to remain unpaired → high-spin</li>
            <li><strong>Strong field (large Δ):</strong> pairing energy &lt; Δ → electrons pair → low-spin</li>
            <li>Example: [Fe(H₂O)₆]³⁺ high-spin (5 unpaired); [Fe(CN)₆]³⁻ low-spin (1 unpaired)</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Crystal Field Stabilization Energy (CFSE)</h2>
          <p className="text-gray-700">Energy gained by placing electrons in lower orbitals:</p>
          <p className="text-gray-700 mt-2">CFSE = (number in t<sub>2g</sub>) × (-0.4 Δ<sub>o</sub>) + (number in e<sub>g</sub>) × (+0.6 Δ<sub>o</sub>)</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/coordination-chemistry-calculators/crystal-field-splitting-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Crystal Field Splitting Calculator</h3>
              <p className="text-sm text-gray-600">Calculate Δo and electron configurations</p>
            </a>
            <a href="/coordination-chemistry-calculators/ligand-field-stabilization-energy-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">LFSE Calculator</h3>
              <p className="text-sm text-gray-600">Ligand field stabilization energy</p>
            </a>
            <a href="/chemistry-formulas/coordination-chemistry-formula" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Coordination Chemistry Formula</h3>
              <p className="text-sm text-gray-600">Complex ions and ligands</p>
            </a>
            <a href="/coordination-chemistry-calculators" className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">All Coordination Chemistry Calculators</h3>
              <p className="text-sm opacity-90">Explore all coordination chemistry tools</p>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
