import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Clausius-Clapeyron Equation Calculator & Formula | ChemCalc',
  description: 'Learn the Clausius-Clapeyron equation with step-by-step vapor pressure calculations and examples.',
  alternates: {
    canonical: 'https://chemicalcalculators.com/chemistry-formulas/clausius-clapeyron-equation',
  },
  keywords: 'clausius clapeyron equation, vapor pressure, enthalpy of vaporization, phase transitions, chemistry calculator, thermodynamics',
}

export default function ClausiusClapeyronEquation() {
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
            <li className="text-gray-900">Clausius-Clapeyron Equation</li>
          </ul>
        </nav>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-4">Clausius-Clapeyron Equation</h1>
          <p className="text-xl opacity-90">Relating vapor pressure to temperature for phase transitions</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">The Clausius-Clapeyron Equation</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-700 mb-2">ln(P2/P1) = (DeltaHvap/R)(1/T1 - 1/T2)</div>
              <p className="text-gray-700">For liquid-vapor equilibrium</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Variables:</h3>
              <ul className="space-y-2">
                <li><strong>P1, P2</strong> = Vapor pressures at T1 and T2</li>
                <li><strong>T1, T2</strong> = Temperatures (Kelvin)</li>
                <li><strong>DeltaHvap</strong> = Enthalpy of vaporization (J/mol)</li>
                <li><strong>R</strong> = Gas constant (8.314 J/mol·K)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Applications:</h3>
              <ul className="space-y-2">
                <li>• Vapor pressure calculations</li>
                <li>• Boiling point estimation</li>
                <li>• Phase diagram construction</li>
                <li>• Distillation process design</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Alternative Forms</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Linear Form:</h3>
              <div className="bg-gray-50 p-4 rounded">
                <p className="text-lg font-mono">ln(P) = -DeltaHvap/RT + C</p>
                <p className="text-sm text-gray-600 mt-2">Plot ln(P) vs 1/T; slope = -DeltaHvap/R</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Two-Point Form:</h3>
              <div className="bg-gray-50 p-4 rounded">
                <p className="text-lg font-mono">ln(P2/P1) = (DeltaHvap/R)(1/T1 - 1/T2)</p>
                <p className="text-sm text-gray-600 mt-2">Most common for comparing two temperatures</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Step-by-Step Example</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded p-4 mb-6">
            <p className="font-semibold">Problem:</p>
            <p>The vapor pressure of water is 23.8 mmHg at 25 C. If DeltaHvap = 40.7 kJ/mol, what is the vapor pressure at 40 C?</p>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">1) Known values</h3>
              <ul className="ml-4 space-y-1">
                <li>P1 = 23.8 mmHg</li>
                <li>T1 = 25 C = 298.15 K</li>
                <li>T2 = 40 C = 313.15 K</li>
                <li>DeltaHvap = 40.7 kJ/mol = 40700 J/mol</li>
                <li>R = 8.314 J/mol·K</li>
                <li>P2 = ?</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg">2) Apply the equation</h3>
              <div className="bg-gray-50 p-3 rounded">
                <p>ln(P2/P1) = (DeltaHvap/R)(1/T1 - 1/T2)</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg">3) Temperature term</h3>
              <div className="bg-gray-50 p-3 rounded">
                <p>1/T1 - 1/T2 = 1/298.15 - 1/313.15 = 0.000161 K^-1</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg">4) Compute ln(P2/P1)</h3>
              <div className="bg-gray-50 p-3 rounded">
                <p>ln(P2/P1) = (40700/8.314) x 0.000161 = 0.788</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg">5) Solve for P2</h3>
              <div className="bg-gray-50 p-3 rounded">
                <p>P2/P1 = e^0.788 = 2.20</p>
                <p>P2 = 2.20 x 23.8 mmHg = 52.4 mmHg</p>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded p-4">
              <p className="font-semibold">Answer:</p>
              <p>The vapor pressure of water at 40 C is about 52.4 mmHg.</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Key Assumptions and Limits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Assumptions:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• DeltaHvap roughly constant over range</li>
                <li>• Vapor behaves ideally</li>
                <li>• Liquid volume negligible vs vapor</li>
                <li>• System at equilibrium</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Less Accurate When:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Very large temperature spans</li>
                <li>• Near critical temperature</li>
                <li>• High pressures (non-ideal vapor)</li>
                <li>• DeltaHvap strongly temperature dependent</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common DeltaHvap Values</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 p-3 text-left">Substance</th>
                  <th className="border border-gray-300 p-3 text-center">DeltaHvap (kJ/mol)</th>
                  <th className="border border-gray-300 p-3 text-center">Boiling Point (C)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3">Water (H2O)</td>
                  <td className="border border-gray-300 p-3 text-center">40.7</td>
                  <td className="border border-gray-300 p-3 text-center">100.0</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">Ethanol (C2H5OH)</td>
                  <td className="border border-gray-300 p-3 text-center">38.6</td>
                  <td className="border border-gray-300 p-3 text-center">78.4</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Benzene (C6H6)</td>
                  <td className="border border-gray-300 p-3 text-center">30.7</td>
                  <td className="border border-gray-300 p-3 text-center">80.1</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">Acetone (C3H6O)</td>
                  <td className="border border-gray-300 p-3 text-center">29.1</td>
                  <td className="border border-gray-300 p-3 text-center">56.1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Mistakes to Avoid</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-red-700">Temperature units</h3>
                <p className="text-gray-700">Always use Kelvin, not Celsius.</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-red-700">Energy units</h3>
                <p className="text-gray-700">If R is in J/mol·K, use DeltaHvap in J/mol.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-red-700">Log type</h3>
                <p className="text-gray-700">Use natural log (ln), not log10.</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-red-700">Order of temperatures</h3>
                <p className="text-gray-700">Use (1/T1 - 1/T2) exactly; reversing changes the sign.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <a href="/chemistry-formulas/arrhenius-equation" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <h3 className="font-semibold text-blue-600 mb-2">Arrhenius Equation</h3>
              <p className="text-sm text-gray-600">Temperature-rate relationships</p>
            </a>
            <a href="/chemistry-formulas/ideal-gas-law" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <h3 className="font-semibold text-blue-600 mb-2">Ideal Gas Law</h3>
              <p className="text-sm text-gray-600">PV = nRT calculations</p>
            </a>
            <a href="/thermodynamics-calculators" className="block p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">All Thermodynamics Calculators</h3>
              <p className="text-sm opacity-90">Explore all thermodynamics tools</p>
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">When is the equation most accurate?</h3>
              <p className="text-gray-700">Over moderate temperature ranges away from the critical point.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Can I use it for sublimation?</h3>
              <p className="text-gray-700">Yes, replace DeltaHvap with Deltasub for solid-to-vapor transitions.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">How to get DeltaHvap experimentally?</h3>
              <p className="text-gray-700">Measure vapor pressures at different T, plot ln(P) vs 1/T, slope = -DeltaHvap/R.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Why assume constant DeltaHvap?</h3>
              <p className="text-gray-700">It simplifies math; DeltaHvap changes slowly over small temperature ranges.</p>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}