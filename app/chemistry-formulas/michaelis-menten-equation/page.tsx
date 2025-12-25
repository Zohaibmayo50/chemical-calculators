import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: "Michaelis-Menten Equation | ChemCalc",
  description: "Understand v = (Vmax [S])/(Km + [S]) with variable definitions, examples, and common mistakes.",
  keywords: "michaelis menten equation, Vmax, Km, enzyme kinetics",
}

export default function MichaelisMentenEquationPage() {
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
            <li className="text-gray-900">Michaelis-Menten Equation</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-pink-600 to-red-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Michaelis-Menten Equation</h1>
          <p className="text-lg opacity-90">Relates reaction velocity to substrate concentration</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Formula</h2>
          <div className="bg-pink-50 border-l-4 border-pink-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-pink-700">v = (Vmax [S]) / (Km + [S])</p>
          </div>
          <ul className="grid md:grid-cols-2 gap-6 text-gray-700">
            <li><strong>v</strong> = initial reaction velocity</li>
            <li><strong>Vmax</strong> = maximal velocity</li>
            <li><strong>[S]</strong> = substrate concentration</li>
            <li><strong>Km</strong> = substrate concentration at v = Vmax/2</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Lineweaver-Burk (linear)</h2>
          <div className="bg-gray-50 p-4 rounded text-center">
            <p className="text-lg font-mono">1/v = (Km/Vmax)(1/[S]) + 1/Vmax</p>
            <p className="text-sm text-gray-600 mt-2">Slope = Km/Vmax; intercept = 1/Vmax</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example</h2>
          <p className="text-gray-700 mb-3"><strong>Given:</strong> Vmax = 120 µM/min, Km = 30 µM, [S] = 60 µM.</p>
          <div className="space-y-2 text-gray-700">
            <p>v = (120 × 60) / (30 + 60) = 7200 / 90 = 80 µM/min.</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: v = 80 µM/min</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Mistakes</h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Units mismatch</h3>
              <p>Keep consistent units for Vmax, [S], and v.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Km interpretation</h3>
              <p>Km is not always an affinity constant; conditions matter.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">FAQ</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold">Does inhibition change the equation?</h3>
              <p>Competitive/noncompetitive inhibitors alter apparent Km or Vmax; use modified forms accordingly.</p>
            </div>
            <div>
              <h3 className="font-semibold">Can I estimate Km from v vs [S]?</h3>
              <p>Yes; fit data to the hyperbolic equation or use linear transforms.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/chemical-equilibrium-calculators/michaelis-menten-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Michaelis-Menten Calculator</h3>
              <p className="text-sm text-gray-600">Calculate v, Vmax, or Km</p>
            </a>
            <a href="/chemical-equilibrium-calculators/equilibrium-constant-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Equilibrium Constant Calculator</h3>
              <p className="text-sm text-gray-600">Calculate K from concentrations</p>
            </a>
            <a href="/chemistry-formulas/equilibrium-constant" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Equilibrium Constant Formula</h3>
              <p className="text-sm text-gray-600">K expression and calculations</p>
            </a>
            <a href="/chemistry-formulas/integrated-rate-laws" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Integrated Rate Laws</h3>
              <p className="text-sm text-gray-600">Kinetics and concentration</p>
            </a>
            <a href="/chemical-equilibrium-calculators" className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">All Chemical Equilibrium Calculators</h3>
              <p className="text-sm opacity-90">Explore all equilibrium tools and calculators</p>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
