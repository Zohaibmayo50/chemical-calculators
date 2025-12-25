import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Percent Composition Formula | ChemCalc',
  description: 'Calculate percent composition of elements in a compound by mass with examples and common pitfalls.',
  keywords: 'percent composition formula, elemental percent, stoichiometry, composition by mass',
}

export default function PercentCompositionFormulaPage() {
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
            <li className="text-gray-900">Percent Composition Formula</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Percent Composition Formula</h1>
          <p className="text-lg opacity-90">Elemental makeup of a compound by mass percentage</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Definition</h2>
          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-orange-700">% element = (mass of element in 1 mol compound / molar mass of compound) × 100</p>
          </div>
          <p className="text-gray-700">For formula calculations, use atomic masses and subscript counts to find element mass per mole of compound.</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Steps</h2>
          <ol className="list-decimal ml-6 space-y-2 text-gray-700">
            <li>Compute molar mass of the compound (sum atomic masses × counts).</li>
            <li>For each element, compute its mass contribution (atomic mass × count).</li>
            <li>Divide element mass by total molar mass and multiply by 100%.</li>
          </ol>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example: H2SO4</h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div className="bg-gray-50 p-4 rounded">
              <p><strong>MM:</strong> 2(1.008) + 32.06 + 4(16.00) = 98.08 g/mol</p>
              <p className="mt-2"><strong>H:</strong> 2(1.008) = 2.016 g → 2.016/98.08 × 100 ≈ 2.06%</p>
              <p><strong>S:</strong> 32.06 g → 32.06/98.08 × 100 ≈ 32.7%</p>
              <p><strong>O:</strong> 4(16.00) = 64.00 g → 64.00/98.08 × 100 ≈ 65.3%</p>
            </div>
            <div className="bg-green-50 p-4 rounded border border-green-200">
              <p className="font-semibold">Check: 2.06% + 32.7% + 65.3% ≈ 100%</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-3">Round at the end to avoid cumulative errors.</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Pitfalls</h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Atomic mass precision</h3>
              <p>Use appropriate significant figures; keep extra decimals during calculation.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Forgetting subscripts</h3>
              <p>Multiply each element\'s atomic mass by its subscript count in the formula.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Rounding to 100%</h3>
              <p>Small rounding differences are normal; adjust one element slightly if necessary.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Hydrates and mixtures</h3>
              <p>Include waters of hydration or specify which compound mass basis is used.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">FAQ</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold">Can percent composition be by atoms instead?</h3>
              <p>Yes, but standard practice is by mass. Atom percent is used in materials contexts.</p>
            </div>
            <div>
              <h3 className="font-semibold">How to handle unknown formulas?</h3>
              <p>If only mass percentages are given, derive the empirical formula first, then compare to molar mass for molecular formula.</p>
            </div>
            <div>
              <h3 className="font-semibold">What about solutions?</h3>
              <p>Use mass percent formula (m_solute/m_solution × 100) for solutions rather than formula-based composition.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/stoichiometry-calculators/molecular-weight-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Molecular Weight Calculator</h3>
              <p className="text-sm text-gray-600">Calculate molar mass from formula</p>
            </a>
            <a href="/stoichiometry-calculators/empirical-formula-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Empirical Formula Calculator</h3>
              <p className="text-sm text-gray-600">Derive empirical formula from composition</p>
            </a>
            <a href="/stoichiometry-calculators" className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">All Stoichiometry Calculators</h3>
              <p className="text-sm opacity-90">Explore all stoichiometry tools</p>
            </a>
            <a href="/mole-vs-molar-mass" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Mole vs Molar Mass</h3>
              <p className="text-sm text-gray-600">Understand the difference</p>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
