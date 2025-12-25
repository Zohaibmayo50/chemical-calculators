import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Solubility Product Constant (Ksp) | ChemCalc',
  description: 'Ksp expresses the equilibrium solubility of sparingly soluble salts.',
  keywords: 'Ksp, solubility product, equilibrium, ionic compounds, precipitation',
}

export default function KspPage() {
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
            <li className="text-gray-900">Solubility Product Constant (Ksp)</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Solubility Product Constant (Ksp)</h1>
          <p className="text-lg opacity-90">Equilibrium of dissolution for sparingly soluble salts</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Definition</h2>
          <p className="text-gray-700 mb-4">For a salt A_aB_b ⇌ a A⁺ + b B⁻, Ksp = [A⁺]^a [B⁻]^b at equilibrium. Activity may be used for high ionic strength.</p>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-emerald-700">Ksp = Π [ion]^stoichiometric coefficient</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example: AgCl</h2>
          <p className="text-gray-700 mb-3">AgCl(s) ⇌ Ag⁺ + Cl⁻; Ksp = [Ag⁺][Cl⁻] = s × s = s².</p>
          <p className="text-gray-700">If Ksp(AgCl) = 1.8 × 10⁻¹⁰, then s = √Ksp ≈ 1.34 × 10⁻⁵ M.</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Notes</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Common ion effect reduces solubility: presence of shared ions shifts equilibrium.</li>
            <li>Complexation and pH changes can alter apparent solubility.</li>
            <li>Use activities for concentrated solutions; γ &lt; 1 lowers effective concentration.</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  )
}
