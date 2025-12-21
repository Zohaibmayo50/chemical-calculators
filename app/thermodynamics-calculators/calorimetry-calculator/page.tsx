import { Metadata } from 'next';
import CalorimetryCalculator from '@/components/calculators/CalorimetryCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: "Calorimetry Calculator | Heat Capacity | q=mcΔT",
  description: "Calculate heat transfer using q=mcΔT. Essential for thermochemistry, specific heat determination, and energy calculations.",
  keywords: ['calorimetry', 'specific heat', 'heat capacity', 'temperature change', 'thermochemistry', 'q=mcΔT', 'energy transfer'],
};

export default function CalorimetryCalculatorPage() {  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Calorimetry Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Calculate heat transfer and temperature changes using the fundamental equation q = mcΔT
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CalorimetryCalculator />
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Understanding Calorimetry
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300">
                  Calorimetry measures heat transfer during physical and chemical processes using the relationship
                  between heat energy, mass, specific heat, and temperature change.
                </p>
                <div className="my-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <p className="font-semibold text-blue-900 dark:text-blue-100">q = mcΔT</p>
                  <ul className="text-sm mt-2 space-y-1 text-blue-800 dark:text-blue-200">
                    <li>q = heat energy (J)</li>
                    <li>m = mass (g)</li>
                    <li>c = specific heat capacity (J/(g·°C))</li>
                    <li>ΔT = T<sub>final</sub> - T<sub>initial</sub> (°C)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Sign Conventions
              </h3>
              <div className="prose dark:prose-invert max-w-none">
                <div className="space-y-3">
                  <div className="p-3 bg-red-50 dark:bg-red-900/30 rounded-lg">
                    <p className="font-semibold text-red-900 dark:text-red-100 text-sm">q &gt; 0 (Positive)</p>
                    <p className="text-xs text-red-800 dark:text-red-200 mt-1">
                      Heat absorbed, endothermic<br/>
                      Temperature increases
                    </p>
                  </div>
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                    <p className="font-semibold text-blue-900 dark:text-blue-100 text-sm">q &lt; 0 (Negative)</p>
                    <p className="text-xs text-blue-800 dark:text-blue-200 mt-1">
                      Heat released, exothermic<br/>
                      Temperature decreases
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Where It&apos;s Used
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-tertiary-500 mr-2">•</span>
                  <span className="text-sm"><strong>Food Science:</strong> Measuring caloric content</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tertiary-500 mr-2">•</span>
                  <span className="text-sm"><strong>Chemistry:</strong> Determining heat of reactions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tertiary-500 mr-2">•</span>
                  <span className="text-sm"><strong>Engineering:</strong> Cooling and heating system design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tertiary-500 mr-2">•</span>
                  <span className="text-sm"><strong>Materials:</strong> Identifying unknown substances</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Example Calculation
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg mb-4">
                <p className="font-semibold text-gray-900 dark:text-white mb-2">Problem:</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  How much heat is required to raise the temperature of 250 g of water from 20°C to 100°C?
                  (c<sub>water</sub> = 4.184 J/(g·°C))
                </p>
              </div>

              <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <div>
                  <p className="font-semibold mb-1">Given:</p>
                  <p className="font-mono bg-gray-50 dark:bg-gray-700 p-2 rounded">
                    m = 250 g<br />
                    c = 4.184 J/(g·°C)<br />
                    T<sub>i</sub> = 20°C, T<sub>f</sub> = 100°C
                  </p>
                </div>

                <div>
                  <p className="font-semibold mb-1">Calculate ΔT:</p>
                  <p className="font-mono bg-gray-50 dark:bg-gray-700 p-2 rounded">
                    ΔT = 100 - 20 = 80°C
                  </p>
                </div>

                <div>
                  <p className="font-semibold mb-1">Apply q = mcΔT:</p>
                  <p className="font-mono bg-gray-50 dark:bg-gray-700 p-2 rounded">
                    q = (250)(4.184)(80)<br />
                    q = 83,680 J = 83.7 kJ
                  </p>
                </div>

                <div className="p-3 bg-tertiary-50 dark:bg-tertiary-900/30 rounded-lg">
                  <p className="font-semibold text-tertiary-900 dark:text-tertiary-100">Result:</p>
                  <p className="text-tertiary-800 dark:text-tertiary-200">
                    83.7 kJ of heat is required. This is endothermic (q &gt; 0) because temperature increases.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Specific Heat Capacities
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                Specific heat is the energy needed to raise 1 g by 1°C:
              </p>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-300 dark:border-gray-600">
                    <th className="text-left py-2 text-gray-900 dark:text-white">Substance</th>
                    <th className="text-center py-2 text-gray-900 dark:text-white">c (J/(g·°C))</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 font-semibold">Water (l)</td>
                    <td className="text-center py-2">4.184</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 font-semibold">Ice</td>
                    <td className="text-center py-2">2.09</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 font-semibold">Steam</td>
                    <td className="text-center py-2">2.01</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 font-semibold">Ethanol</td>
                    <td className="text-center py-2">2.44</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 font-semibold">Aluminum</td>
                    <td className="text-center py-2">0.897</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 font-semibold">Copper</td>
                    <td className="text-center py-2">0.385</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 font-semibold">Iron</td>
                    <td className="text-center py-2">0.449</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 font-semibold">Gold</td>
                    <td className="text-center py-2">0.129</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
                Water has one of the highest specific heats, making it excellent for temperature regulation.
              </p>
            </div>
          </div>

          {/* Related Calculators */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mt-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              🔗 Related Calculators
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/thermodynamics-calculators/specific-heat-calculator"
                  className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                >
                  <span>→</span>
                  <span>Specific Heat Calculator</span>
                </a>
              </li>
              <li>
                <a
                  href="/thermodynamics-calculators/bond-energy-calculator"
                  className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                >
                  <span>→</span>
                  <span>Bond Energy Calculator</span>
                </a>
              </li>
              <li>
                <a
                  href="/thermodynamics-calculators/hess-law-calculator"
                  className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                >
                  <span>→</span>
                  <span>Hess's Law Calculator</span>
                </a>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <a
                href="/calculators"
                className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
              >
                View All Calculators →
              </a>
            </div>
          </div>
        </div>
      </div>      </div>
      <Footer />
    </>
  );
}