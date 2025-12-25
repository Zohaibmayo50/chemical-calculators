import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: "Raoult's Law Calculator & Formula | ChemCalc",
  description: "Learn Raoult's law for vapor pressure of solutions with worked examples, assumptions, and common pitfalls.",
  keywords: "raoults law, vapor pressure lowering, ideal solutions, mole fraction, chemistry calculator",
}

export default function RaoultsLaw() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb Navigation */}
        <nav className="text-sm breadcrumbs mb-8">
          <ul className="flex space-x-2 text-gray-600">
            <li><a href="/" className="hover:text-blue-600">Home</a></li>
            <li><span className="mx-2">/</span></li>
            <li><a href="/chemistry-formulas" className="hover:text-blue-600">Chemistry Formulas</a></li>
            <li><span className="mx-2">/</span></li>
            <li className="text-gray-900">Raoult's Law</li>
          </ul>
        </nav>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-4">Raoult's Law</h1>
          <p className="text-xl opacity-90">Vapor pressure of an ideal solution equals mole fraction times pure component pressure</p>
        </div>

        {/* Formula Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Raoult's Law Formula</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <div className="text-center space-y-1">
              <div className="text-2xl font-bold text-blue-700">Psolution = Xsolvent * P°solvent</div>
              <div className="text-sm text-gray-700">For each volatile component i: P_i = X_i * P°_i</div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="font-semibold mb-2">Variables</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Psolution = vapor pressure of solution</li>
                <li>Xsolvent = mole fraction of solvent</li>
                <li>P°solvent = vapor pressure of pure solvent</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Assumptions</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Ideal solution behavior</li>
                <li>Volatile solvent (or component) obeys Raoult's law</li>
                <li>No strong solute-solvent interactions beyond ideality</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Step-by-Step Example */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Step-by-Step Example</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded p-4 mb-6">
            <p className="font-semibold">Problem:</p>
            <p>What is the vapor pressure of a solution made by dissolving 20.0 g NaCl in 180.0 g water at 25 C? P°water = 23.8 mmHg.</p>
          </div>
          <div className="space-y-4 text-gray-800">
            <div>
              <h3 className="font-semibold">1) Moles</h3>
              <p>NaCl moles = 20.0 g / 58.44 = 0.342 mol; water moles = 180.0 g / 18.02 = 9.99 mol.</p>
            </div>
            <div>
              <h3 className="font-semibold">2) Mole fraction of water</h3>
              <div className="bg-gray-50 p-3 rounded">
                <p>Xwater = 9.99 / (9.99 + 0.342) = 0.967</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold">3) Vapor pressure</h3>
              <div className="bg-gray-50 p-3 rounded">
                <p>Psolution = 0.967 * 23.8 mmHg = 23.0 mmHg</p>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded p-4">
              <p className="font-semibold">Answer:</p>
              <p>The solution vapor pressure is 23.0 mmHg (ideal assumption).</p>
            </div>
          </div>
        </div>

        {/* Common Mistakes */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Mistakes to Avoid</h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-red-700">Using mass fraction</h3>
                <p>Always use mole fractions, not mass fractions.</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-red-700">Nonvolatile solutes</h3>
                <p>Only volatile components contribute to vapor pressure.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-red-700">Non-ideal solutions</h3>
                <p>Strong interactions cause deviations; activity coefficients needed.</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-red-700">Temperature mismatch</h3>
                <p>Use P° at the same temperature as the solution.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Calculators */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <a href="/chemistry-formulas/mole-fraction-formula" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <h3 className="font-semibold text-blue-600 mb-2">Mole Fraction</h3>
              <p className="text-sm text-gray-600">X = moles component / total</p>
            </a>
            <a href="/chemistry-formulas/osmotic-pressure" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <h3 className="font-semibold text-blue-600 mb-2">Osmotic Pressure</h3>
              <p className="text-sm text-gray-600">Π = iMRT</p>
            </a>
            <a href="/chemistry-formulas/freezing-point-depression" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <h3 className="font-semibold text-blue-600 mb-2">Freezing Point Depression</h3>
              <p className="text-sm text-gray-600">ΔTf = i Kf m</p>
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Frequently Asked Questions</h2>
          <div className="space-y-4 text-gray-800">
            <div>
              <h3 className="font-semibold text-lg">When does Raoult's law fail?</h3>
              <p>For strong solute-solvent interactions, electrolytes at higher concentration, or hydrogen bonding systems.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Does salt lower vapor pressure?</h3>
              <p>Yes, nonvolatile solutes lower vapor pressure proportionally to solvent mole fraction.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">What about multiple volatile components?</h3>
              <p>Apply P_i = X_i P°_i for each component and sum to total pressure.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
