import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'PPB Formula | ChemCalc',
  description: 'Parts per billion: ppb = (mass of solute / mass of solution) × 10^9.',
  keywords: 'ppb, parts per billion, concentration, solution',
}

export default function PpbFormulaPage() {
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
            <li className="text-gray-900">PPB Formula</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">PPB Formula</h1>
          <p className="text-lg opacity-90">Ultra-low concentration measurement</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Definition</h2>
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-indigo-700">ppb = (mass_solute / mass_solution) × 10^9</p>
          </div>
          <p className="text-gray-700">For aqueous solutions, ppb ≈ μg/L when density ≈ 1 g/mL.</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example</h2>
          <p className="text-gray-700 mb-3"><strong>Given:</strong> 3.0 μg solute in 1.5 L water.</p>
          <div className="space-y-2 text-gray-700">
            <p>Assuming ρ ≈ 1 g/mL, 1.5 L ≈ 1500 g solution.</p>
            <p>ppb = (3.0 μg / 1500 g) × 10^9 = (3.0 × 10⁻⁶ g / 1500 g) × 10^9 ≈ 2000 ppb</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: ≈ 2000 ppb</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Notes</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>For gases, ppb often refers to volume ratio.</li>
            <li>Check density and units carefully; ppb is very sensitive to unit mistakes.</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  )
}
