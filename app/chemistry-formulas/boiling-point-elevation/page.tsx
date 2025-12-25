import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Boiling Point Elevation Calculator & Formula | ChemCalc',
  description: 'Calculate boiling point elevation using ΔTb = i Kb m with examples, assumptions, and common pitfalls.',
  keywords: 'boiling point elevation, delta Tb, colligative properties, Kb, molality, chemistry calculator',
}

export default function BoilingPointElevation() {
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
            <li className="text-gray-900">Boiling Point Elevation</li>
          </ul>
        </nav>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-4">Boiling Point Elevation</h1>
          <p className="text-xl opacity-90">Raising a solvent's boiling point by adding solute</p>
        </div>

        {/* Formula Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">The Formula</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <div className="text-center space-y-1">
              <div className="text-2xl font-bold text-blue-700">ΔTb = i Kb m</div>
              <div className="text-sm text-gray-700">Tb,solution = Tb,pure + ΔTb</div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="font-semibold mb-2">Variables</h3>
              <ul className="space-y-2 text-gray-700">
                <li>ΔTb = boiling point elevation (C)</li>
                <li>i = van't Hoff factor</li>
                <li>Kb = ebullioscopic constant (C·kg/mol)</li>
                <li>m = molality (mol solute / kg solvent)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Typical Kb Values</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Water: 0.512 C·kg/mol</li>
                <li>Ethanol: 1.20 C·kg/mol</li>
                <li>Benzene: 2.53 C·kg/mol</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Step-by-Step Example */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Step-by-Step Example</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded p-4 mb-6">
            <p className="font-semibold">Problem:</p>
            <p>What is the boiling point of a solution made by dissolving 1.00 mol glucose (i = 1) in 2.00 kg water? Kb water = 0.512 C·kg/mol.</p>
          </div>
          <div className="space-y-4 text-gray-800">
            <div>
              <h3 className="font-semibold">1) Molality</h3>
              <p>m = 1.00 mol / 2.00 kg = 0.500 m</p>
            </div>
            <div>
              <h3 className="font-semibold">2) Calculate ΔTb</h3>
              <div className="bg-gray-50 p-3 rounded">
                <p>ΔTb = i Kb m = 1 × 0.512 × 0.500 = 0.256 C</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold">3) New boiling point</h3>
              <div className="bg-gray-50 p-3 rounded">
                <p>Tb,solution = 100.0 C + 0.256 C = 100.26 C</p>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded p-4">
              <p className="font-semibold">Answer:</p>
              <p>The solution boils at 100.26 C (ideal assumption).</p>
            </div>
          </div>
        </div>

        {/* Common Mistakes */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Mistakes to Avoid</h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-red-700">Using molarity</h3>
                <p>Use molality (mol/kg solvent), not molarity.</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-red-700">Ignoring i</h3>
                <p>Include van't Hoff factor for electrolytes.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-red-700">Wrong constants</h3>
                <p>Use Kb for the correct solvent at the given temperature.</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-red-700">High concentration</h3>
                <p>At high m, deviations occur and i drops below ideal.</p>
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
            <a href="/chemistry-formulas/osmotic-pressure" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <h3 className="font-semibold text-blue-600 mb-2">Osmotic Pressure</h3>
              <p className="text-sm text-gray-600">Π = i M R T</p>
            </a>
            <a href="/thermodynamics-calculators" className="block p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">All Thermodynamics Calculators</h3>
              <p className="text-sm opacity-90">Explore all thermodynamics tools</p>
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Frequently Asked Questions</h2>
          <div className="space-y-4 text-gray-800">
            <div>
              <h3 className="font-semibold text-lg">Why use molality instead of molarity?</h3>
              <p>Molality is independent of temperature because mass does not change with thermal expansion.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">What is i for CaCl2?</h3>
              <p>Ideal i = 3, but effective i is typically 2.5-2.7 at moderate concentration.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Does pressure affect ΔTb?</h3>
              <p>For typical lab conditions, pressure effects are negligible; use Kb at the measured pressure.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
