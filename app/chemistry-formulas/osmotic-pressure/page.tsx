import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Osmotic Pressure Calculator & Formula | ChemCalc',
  description: 'Calculate osmotic pressure using Π = i M R T with examples, assumptions, and common pitfalls.',
  keywords: 'osmotic pressure, pi = iMRT, van hoff factor, solutions, semipermeable membrane, chemistry calculator',
}

export default function OsmoticPressure() {
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
            <li className="text-gray-900">Osmotic Pressure</li>
          </ul>
        </nav>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-indigo-700 to-blue-700 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-4">Osmotic Pressure</h1>
          <p className="text-xl opacity-90">Pressure required to stop solvent flow across a semipermeable membrane</p>
        </div>

        {/* Formula Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">The Formula</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <div className="text-center space-y-1">
              <div className="text-2xl font-bold text-blue-700">Π = i M R T</div>
              <div className="text-sm text-gray-700">Use T in Kelvin; R = 0.08206 L·atm/mol·K (or 8.314 J/mol·K with Pa)</div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="font-semibold mb-2">Variables</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Π = osmotic pressure</li>
                <li>i = van't Hoff factor</li>
                <li>M = molarity (mol/L)</li>
                <li>R = gas constant</li>
                <li>T = temperature (K)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">When to Use</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Determining molar mass from osmotic pressure</li>
                <li>Biological membranes and cells</li>
                <li>Reverse osmosis and water purification</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Step-by-Step Example */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Step-by-Step Example</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded p-4 mb-6">
            <p className="font-semibold">Problem:</p>
            <p>Calculate the osmotic pressure of 0.20 M glucose solution at 25 C. (Assume i = 1)</p>
          </div>
          <div className="space-y-4 text-gray-800">
            <div>
              <h3 className="font-semibold">1) Convert temperature</h3>
              <p>T = 25 + 273.15 = 298.15 K</p>
            </div>
            <div>
              <h3 className="font-semibold">2) Apply Π = i M R T</h3>
              <div className="bg-gray-50 p-3 rounded">
                <p>Π = 1 × 0.20 mol/L × 0.08206 L·atm/mol·K × 298.15 K</p>
                <p>Π = 4.89 atm</p>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded p-4">
              <p className="font-semibold">Answer:</p>
              <p>Osmotic pressure is 4.89 atm.</p>
            </div>
          </div>
        </div>

        {/* Common Mistakes */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Mistakes to Avoid</h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-red-700">Using Celsius</h3>
                <p>Always convert temperature to Kelvin.</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-red-700">Wrong R value</h3>
                <p>Match R units to pressure units (atm vs Pa).</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-red-700">Ignoring i</h3>
                <p>Electrolytes have i greater than 1; nonelectrolytes use i = 1.</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-red-700">High concentration</h3>
                <p>At higher M, deviations from ideal behavior occur; use activity coefficients.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Calculators */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <a href="/chemistry-formulas/freezing-point-depression" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <h3 className="font-semibold text-blue-600 mb-2">Freezing Point Depression</h3>
              <p className="text-sm text-gray-600">ΔTf = i Kf m</p>
            </a>
            <a href="/chemistry-formulas/boiling-point-elevation" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <h3 className="font-semibold text-blue-600 mb-2">Boiling Point Elevation</h3>
              <p className="text-sm text-gray-600">ΔTb = i Kb m</p>
            </a>
            <a href="/chemistry-formulas/molarity-formula" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <h3 className="font-semibold text-blue-600 mb-2">Molarity</h3>
              <p className="text-sm text-gray-600">M = moles / volume</p>
            </a>
            <a href="/concentration-and-solution-calculators" className="block p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-all">
              <h3 className="font-semibold mb-2">Concentration Calculators</h3>
              <p className="text-sm text-white/90">All concentration tools</p>
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Frequently Asked Questions</h2>
          <div className="space-y-4 text-gray-800">
            <div>
              <h3 className="font-semibold text-lg">What is i for NaCl?</h3>
              <p>Ideal i = 2; effective i about 1.8-1.9 at moderate concentration.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Can osmotic pressure find molar mass?</h3>
              <p>Yes, solve for M from Π = iMRT then back-calculate moles and molar mass.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Does membrane type matter?</h3>
              <p>Must be semipermeable to solvent only; otherwise measured Π is lower.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
