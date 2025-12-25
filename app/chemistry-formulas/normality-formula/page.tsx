import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Normality Formula | ChemCalc',
  description: 'Learn how to calculate normality (equivalents per liter) with worked examples and common pitfalls.',
  keywords: 'normality formula, equivalents per liter, chemistry concentration, normal solution',
}

export default function NormalityFormulaPage() {
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
            <li className="text-gray-900">Normality Formula</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Normality Formula</h1>
          <p className="text-lg opacity-90">Express solution concentration as equivalents per liter</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Definition</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <p className="text-2xl font-bold text-blue-700 text-center">N = equivalents of solute / liters of solution</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Variables</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>N</strong> = normality (eq/L)</li>
                <li><strong>equivalents</strong> = moles × n-factor</li>
                <li><strong>V</strong> = volume of solution (L)</li>
                <li><strong>n-factor</strong> = reactive capacity per mole (acid/base/redox)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Quick Uses</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Acid-base titrations with polyvalent species</li>
                <li>Redox reactions using equivalents of electrons</li>
                <li>Precipitation reactions with ionic charge balance</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">How to Calculate</h2>
          <ol className="list-decimal ml-6 space-y-2 text-gray-700">
            <li>Identify the reaction and determine the n-factor (protons, electrons, or charge exchanged).</li>
            <li>Compute equivalents = moles of solute × n-factor.</li>
            <li>Measure or convert solution volume to liters.</li>
            <li>Divide equivalents by liters to get N (eq/L).</li>
          </ol>
          <p className="text-sm text-gray-600 mt-3">For acids/bases: n-factor = number of H+ donated/accepted per formula unit. For redox: n-factor = electrons transferred per formula unit.</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Worked Example</h2>
          <p className="text-gray-700 mb-3"><strong>Problem:</strong> Find the normality of 0.50 M H2SO4 for an acid-base titration (assume both protons react).</p>
          <div className="space-y-3 text-gray-700">
            <p>1) n-factor for H2SO4 = 2 (two acidic hydrogens).</p>
            <p>2) Equivalents per liter = 0.50 mol/L × 2 = 1.00 eq/L.</p>
            <p>3) Normality N = 1.00 eq/L.</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: 1.00 N</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Pitfalls</h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Wrong n-factor</h3>
              <p>Match n-factor to the actual reaction stoichiometry, not just the formula.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Volume units</h3>
              <p>Use liters, not mL; divide by 1000 if needed.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Assuming full dissociation</h3>
              <p>Polyprotic acids may donate fewer protons depending on pH and reaction context.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Mixing M and N</h3>
              <p>Normality depends on reaction; 1 M is not always 1 N.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">FAQ</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold">Is normality still commonly used?</h3>
              <p>It appears in titration contexts, but molarity is generally preferred. Use N when equivalents simplify calculations.</p>
            </div>
            <div>
              <h3 className="font-semibold">How do I find n-factor in redox?</h3>
              <p>Balance the half-reaction and count electrons transferred per formula unit.</p>
            </div>
            <div>
              <h3 className="font-semibold">Can I convert between M and N?</h3>
              <p>Yes: N = M × n-factor for the specific reaction.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
