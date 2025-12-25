import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Molecular Formula | ChemCalc',
  description: 'Determine a compound\'s molecular formula from its empirical formula and molar mass with worked examples.',
  keywords: 'molecular formula, empirical formula, molar mass, stoichiometry',
}

export default function MolecularFormulaPage() {
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
            <li className="text-gray-900">Molecular Formula</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Molecular Formula</h1>
          <p className="text-lg opacity-90">Relate the empirical formula to the true molecular formula</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Formula Relation</h2>
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-indigo-700">Molecular formula = (Empirical formula) × n</p>
            <p className="text-gray-700">n = (molar mass of compound) / (empirical formula mass)</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Steps</h2>
          <ol className="list-decimal ml-6 space-y-2 text-gray-700">
            <li>Find the empirical formula from composition or ratios.</li>
            <li>Compute empirical formula mass (sum atomic masses).</li>
            <li>Measure or obtain compound\'s molar mass (g/mol).</li>
            <li>Compute n = (molar mass) / (empirical mass) and multiply subscripts by n.</li>
          </ol>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example</h2>
          <p className="text-gray-700 mb-3"><strong>Given:</strong> Empirical formula CH2O, molar mass ≈ 180.16 g/mol.</p>
          <div className="space-y-3 text-gray-700">
            <p>1) Empirical mass of CH2O = 12.01 + 2(1.008) + 16.00 = 30.026 g/mol.</p>
            <p>2) n = 180.16 / 30.026 ≈ 6.</p>
            <p>3) Molecular formula = (CH2O) × 6 = C6H12O6.</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: C6H12O6 (glucose)</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Pitfalls</h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Rounding n incorrectly</h3>
              <p>Use nearest whole number; if slightly off, multiply to eliminate fractions (e.g., ×2 or ×3).</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Empirical mass errors</h3>
              <p>Sum atomic masses accurately; keep extra decimals until the end.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Misreading molar mass</h3>
              <p>Use the correct measured molar mass (from MS or other data) for the compound.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Non-integer n</h3>
              <p>If n ≈ 1.5, multiply empirical subscripts by 2 to get integers, then verify with molar mass.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">FAQ</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold">Can empirical and molecular formulas be the same?</h3>
              <p>Yes, when n = 1 (e.g., H2O).</p>
            </div>
            <div>
              <h3 className="font-semibold">What if molar mass is uncertain?</h3>
              <p>Compute n with the best estimate, then check if the resulting molecular mass matches the measured value.</p>
            </div>
            <div>
              <h3 className="font-semibold">How to handle hydrates?</h3>
              <p>Include waters of hydration in empirical and molecular formulas if measuring the hydrate.</p>
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
