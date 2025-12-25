import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Equilibrium Constant (K) | ChemCalc',
  description: 'Learn how to write equilibrium constant expressions and calculate K from concentrations or partial pressures.',
  keywords: 'equilibrium constant, Kc, Kp, reaction quotient, chemical equilibrium',
}

export default function EquilibriumConstantPage() {
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
            <li className="text-gray-900">Equilibrium Constant (K)</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Equilibrium Constant (K)</h1>
          <p className="text-lg opacity-90">Relates products and reactants at equilibrium</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">General Expression</h2>
          <div className="bg-teal-50 border-l-4 border-teal-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-teal-700">For aA + bB ⇌ cC + dD:</p>
            <p className="text-xl text-teal-700">Kc = ([C]^c [D]^d) / ([A]^a [B]^b)</p>
          </div>
          <p className="text-gray-700">Use activities/activities approximated by molar concentrations for dilute solutions. For gases, use partial pressures for Kp.</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Relationship Kp and Kc</h2>
          <div className="bg-gray-50 p-4 rounded text-center">
            <p className="text-lg font-mono">Kp = Kc (RT)^Δn</p>
            <p className="text-sm text-gray-600 mt-2">Δn = moles of gaseous products − moles of gaseous reactants</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example</h2>
          <p className="text-gray-700 mb-3"><strong>Reaction:</strong> N2 + 3 H2 ⇌ 2 NH3; at equilibrium: [N2]=0.10 M, [H2]=0.30 M, [NH3]=0.20 M.</p>
          <div className="space-y-2 text-gray-700">
            <p>Kc = (0.20^2) / (0.10^1 × 0.30^3) = 0.04 / (0.10 × 0.027) ≈ 14.8</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: Kc ≈ 14.8</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Mistakes</h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Including solids/liquids</h3>
              <p>Pure solids and liquids are omitted (activity = 1).</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Wrong exponents</h3>
              <p>Exponents come from balanced equation stoichiometric coefficients.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">FAQ</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold">How does temperature affect K?</h3>
              <p>Use van't Hoff equation; endothermic reactions increase K with temperature.</p>
            </div>
            <div>
              <h3 className="font-semibold">Can K be less than 1?</h3>
              <p>Yes; small K indicates reactants favored at equilibrium.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
