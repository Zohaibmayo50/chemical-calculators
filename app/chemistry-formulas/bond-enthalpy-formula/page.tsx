import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Bond Enthalpy Formula | ChemCalc',
  description: 'Calculate reaction enthalpy from bond energies: ΔH = Σ(bonds broken) - Σ(bonds formed).',
  alternates: {
    canonical: 'https://chemicalcalculators.com/chemistry-formulas/bond-enthalpy-formula',
  },
  keywords: 'bond enthalpy, bond energy, reaction enthalpy, bond dissociation',
}

export default function BondEnthalpyFormulaPage() {
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
            <li className="text-gray-900">Bond Enthalpy Formula</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Bond Enthalpy Formula</h1>
          <p className="text-lg opacity-90">Estimate reaction enthalpy from bond energies</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Formula</h2>
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-red-700">ΔH<sub>rxn</sub> = Σ(bonds broken) - Σ(bonds formed)</p>
          </div>
          <p className="text-gray-700">Breaking bonds requires energy (+); forming bonds releases energy (-).</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Bond Energies (kJ/mol)</h2>
          <div className="grid md:grid-cols-3 gap-4 text-gray-700">
            <div className="bg-gray-50 p-3 rounded">
              <p className="font-semibold">C-H: 413</p>
              <p className="font-semibold">C-C: 348</p>
              <p className="font-semibold">C=C: 614</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="font-semibold">O-H: 463</p>
              <p className="font-semibold">C=O: 799</p>
              <p className="font-semibold">O=O: 498</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="font-semibold">N-H: 391</p>
              <p className="font-semibold">N≡N: 945</p>
              <p className="font-semibold">H-H: 436</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example: CH₄ + 2O₂ → CO₂ + 2H₂O</h2>
          <div className="space-y-3 text-gray-700">
            <p><strong>Bonds broken:</strong> 4 C-H (4×413) + 2 O=O (2×498) = 1652 + 996 = 2648 kJ</p>
            <p><strong>Bonds formed:</strong> 2 C=O (2×799) + 4 O-H (4×463) = 1598 + 1852 = 3450 kJ</p>
            <p>ΔH<sub>rxn</sub> = 2648 - 3450 = -802 kJ/mol</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: ΔH ≈ -802 kJ/mol (exothermic)</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Notes</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Bond energies are average values; actual values vary by molecular environment.</li>
            <li>More accurate than bond energies: use standard enthalpies of formation.</li>
            <li>Useful for estimating ΔH when thermodynamic data unavailable.</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/thermodynamics-calculators/enthalpy-reaction-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Enthalpy Reaction Calculator</h3>
              <p className="text-sm text-gray-600">Calculate reaction enthalpy</p>
            </a>
            <a href="/thermodynamics-calculators/gibbs-free-energy-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Gibbs Free Energy Calculator</h3>
              <p className="text-sm text-gray-600">Calculate ΔG from ΔH and ΔS</p>
            </a>
            <a href="/thermodynamics-calculators" className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">All Thermodynamics Calculators</h3>
              <p className="text-sm opacity-90">Explore all thermodynamics tools</p>
            </a>
            <a href="/chemistry-formulas/hess-law" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Hess's Law</h3>
              <p className="text-sm text-gray-600">Alternative enthalpy calculation</p>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
