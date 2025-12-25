import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Freezing Point Depression Calculator & Formula | ChemCalc',
  description: 'Calculate freezing point depression using ΔTf = i Kf m with examples, units, and common pitfalls.',
  keywords: 'freezing point depression, delta Tf, colligative properties, Kf, molality, chemistry calculator',
}

export default function FreezingPointDepression() {
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
            <li className="text-gray-900">Freezing Point Depression</li>
          </ul>
        </nav>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-sky-600 to-indigo-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-4">Freezing Point Depression</h1>
          <p className="text-xl opacity-90">Lowering a solvent's freezing point by adding solute</p>
        </div>

        {/* Formula Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">The Formula</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <div className="text-center space-y-1">
              <div className="text-2xl font-bold text-blue-700">ΔTf = i Kf m</div>
              <div className="text-sm text-gray-700">Tf,solution = Tf,pure - ΔTf</div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="font-semibold mb-2">Variables</h3>
              <ul className="space-y-2 text-gray-700">
                <li>ΔTf = freezing point lowering (C)</li>
                <li>i = van't Hoff factor</li>
                <li>Kf = cryoscopic constant (C·kg/mol)</li>
                <li>m = molality (mol solute / kg solvent)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Typical Kf Values</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Water: 1.86 C·kg/mol</li>
                <li>Benzene: 5.12 C·kg/mol</li>
                <li>Acetic acid: 3.90 C·kg/mol</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Step-by-Step Example */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Step-by-Step Example</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded p-4 mb-6">
            <p className="font-semibold">Problem:</p>
            <p>What is the freezing point of a solution made by dissolving 0.500 mol NaCl in 1.00 kg water? (Assume i = 1.9, Kf water = 1.86 C·kg/mol)</p>
          </div>
          <div className="space-y-4 text-gray-800">
            <div>
              <h3 className="font-semibold">1) Molality</h3>
              <p>m = 0.500 mol / 1.00 kg = 0.500 m</p>
            </div>
            <div>
              <h3 className="font-semibold">2) Calculate ΔTf</h3>
              <div className="bg-gray-50 p-3 rounded">
                <p>ΔTf = i Kf m = 1.9 × 1.86 × 0.500 = 1.77 C</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold">3) New freezing point</h3>
              <div className="bg-gray-50 p-3 rounded">
                <p>Tf,solution = 0.00 C - 1.77 C = -1.77 C</p>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded p-4">
              <p className="font-semibold">Answer:</p>
              <p>The solution freezes at -1.77 C (ideal assumption).</p>
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
                <p>Electrolytes dissociate; include the van't Hoff factor.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-red-700">Wrong units</h3>
                <p>Keep Kf in C·kg/mol and m in mol/kg.</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-red-700">Non-ideal behavior</h3>
                <p>At high concentration, i is lower than the ideal integer.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Calculators */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <a href="/chemistry-formulas/boiling-point-elevation" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <h3 className="font-semibold text-blue-600 mb-2">Boiling Point Elevation</h3>
              <p className="text-sm text-gray-600">ΔTb = i Kb m</p>
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
              <h3 className="font-semibold text-lg">What is i for NaCl?</h3>
              <p>Ideal i = 2, but effective i is typically 1.8-1.9 at moderate concentration.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Why use molality?</h3>
              <p>Molality is temperature independent; molarity changes with thermal expansion.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Does this work for nonelectrolytes?</h3>
              <p>Yes, with i = 1 for nonelectrolytes like glucose.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
