import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Oxidation Number Rules | ChemCalc',
  description: 'Determine oxidation states using systematic rules for redox chemistry.',
  alternates: {
    canonical: 'https://chemicalcalculators.com/chemistry-formulas/oxidation-number-rules',
  },
  keywords: 'oxidation number, oxidation state, redox, reduction, rules',
}

export default function OxidationNumberPage() {
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
            <li className="text-gray-900">Oxidation Number Rules</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Oxidation Number Rules</h1>
          <p className="text-lg opacity-90">Assign oxidation states systematically</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Priority Rules (Apply in Order)</h2>
          <ol className="list-decimal pl-6 space-y-3 text-gray-700">
            <li><strong>Free elements:</strong> Oxidation number = 0 (e.g., Na, O₂, Cl₂)</li>
            <li><strong>Monatomic ions:</strong> Oxidation number = ion charge (e.g., Na⁺ = +1, Cl⁻ = -1)</li>
            <li><strong>Fluorine:</strong> Always -1 in compounds</li>
            <li><strong>Oxygen:</strong> Usually -2 (exceptions: peroxides -1, OF₂ +2)</li>
            <li><strong>Hydrogen:</strong> +1 with nonmetals, -1 with metals (hydrides)</li>
            <li><strong>Group 1 metals:</strong> Always +1</li>
            <li><strong>Group 2 metals:</strong> Always +2</li>
            <li><strong>Sum rule:</strong> Sum of all oxidation numbers = overall charge</li>
          </ol>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example: H₂SO₄</h2>
          <div className="space-y-2 text-gray-700">
            <p>Compound is neutral, so sum = 0.</p>
            <p>H: +1 (rule 5) → 2 H = +2 total</p>
            <p>O: -2 (rule 4) → 4 O = -8 total</p>
            <p>Let S = x: 2(+1) + x + 4(-2) = 0</p>
            <p>2 + x - 8 = 0 → x = +6</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: S has oxidation number +6</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Mistakes</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Forgetting peroxide exception (H₂O₂: O is -1, not -2).</li>
            <li>Not accounting for overall charge in polyatomic ions.</li>
            <li>Applying rules out of priority order.</li>
          </ul>
        </section>

        {/* Related Calculators */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/redox-calculators/oxidation-number-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Oxidation Number Calculator</h3>
              <p className="text-sm text-gray-600">Calculate oxidation states automatically</p>
            </a>
            <a href="/redox-calculators/redox-balancing-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Redox Balancing Calculator</h3>
              <p className="text-sm text-gray-600">Balance redox equations</p>
            </a>
            <a href="/chemistry-formulas/nernst-equation" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Nernst Equation</h3>
              <p className="text-sm text-gray-600">Electrochemistry & redox potential</p>
            </a>
            <a href="/redox-calculators" className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">All Redox Calculators</h3>
              <p className="text-sm opacity-90">Explore all redox chemistry tools</p>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
