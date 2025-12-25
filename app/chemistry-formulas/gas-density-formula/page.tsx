import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Gas Density Formula | ChemCalc',
  description: 'Compute density using ρ = (P M) / (R T).',
  keywords: 'gas density, ideal gas, molar mass, pressure, temperature',
}

export default function GasDensityFormulaPage() {
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
            <li className="text-gray-900">Gas Density Formula</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Gas Density Formula</h1>
          <p className="text-lg opacity-90">Ideal gas relation for mass per volume</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Formula</h2>
          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-orange-700">ρ = (P × M) / (R × T)</p>
          </div>
          <p className="text-gray-700">ρ: density, P: pressure, M: molar mass, R: gas constant, T: absolute temperature.</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example</h2>
          <p className="text-gray-700 mb-3"><strong>Given:</strong> CO₂, M = 44.01 g/mol, P = 1.00 atm, T = 298 K, R = 0.082057 L·atm·mol⁻¹·K⁻¹.</p>
          <div className="space-y-2 text-gray-700">
            <p>ρ = (1.00 × 44.01) / (0.082057 × 298) g/L</p>
            <p>ρ ≈ 44.01 / 24.45 ≈ 1.80 g/L</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: ≈ 1.80 g/L</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Notes</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Works best for ideal gases; real gases may deviate at high P/low T.</li>
            <li>Use consistent units; convert M to kg/mol if you want SI density in kg/m³.</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  )
}
