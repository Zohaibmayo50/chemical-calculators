import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Reaction Quotient (Q) | ChemCalc',
  description: 'Write the reaction quotient and compare Q to K to predict reaction direction.',
  keywords: 'reaction quotient, Q vs K, chemical equilibrium direction',
}

export default function ReactionQuotientPage() {
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
            <li className="text-gray-900">Reaction Quotient (Q)</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Reaction Quotient (Q)</h1>
          <p className="text-lg opacity-90">Compare Q with K to predict shift</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Definition</h2>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-emerald-700">For aA + bB ⇌ cC + dD:</p>
            <p className="text-xl text-emerald-700">Q = ([C]^c [D]^d) / ([A]^a [B]^b)</p>
          </div>
          <p className="text-gray-700">Same form as Kc but using current (not equilibrium) activities/concentrations. For gases, use partial pressures to write Qp.</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Direction Prediction</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Q &lt; K: reaction shifts right (toward products)</li>
            <li>Q = K: at equilibrium</li>
            <li>Q &gt; K: reaction shifts left (toward reactants)</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example</h2>
          <p className="text-gray-700 mb-3"><strong>Given:</strong> A ⇌ B, K = 2.0; at some time [A]=0.50 M, [B]=0.60 M.</p>
          <div className="space-y-2 text-gray-700">
            <p>Q = [B]/[A] = 0.60/0.50 = 1.2; Q &lt; K so reaction proceeds to the right.</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: Shifts toward products</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">FAQ</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold">Do solids or liquids appear in Q?</h3>
              <p>No; activity is 1 for pure solids/liquids. Include only species with variable activity.</p>
            </div>
            <div>
              <h3 className="font-semibold">How does stoichiometry affect Q?</h3>
              <p>Exponents in Q come from stoichiometric coefficients in the balanced equation.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
