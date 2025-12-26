import { Metadata } from 'next';
import RaoultsLawCalculator from '@/components/calculators/RaoultsLawCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: "Raoult's Law Calculator | Vapor Pressure | Ideal Solutions",
  description: "Calculate partial vapor pressure and vapor pressure lowering using Raoult's Law. Perfect for colligative properties, ideal solutions, and solution chemistry.",
  keywords: ['raoults law', 'vapor pressure', 'colligative properties', 'ideal solutions', 'mole fraction', 'vapor pressure lowering', 'solution chemistry', 'partial pressure'],
};

export default function RaoultsLawCalculatorPage() {  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Raoult&apos;s Law Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Calculate vapor pressure of solutions and understand colligative properties using Raoult&apos;s Law
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <RaoultsLawCalculator />
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Understanding Raoult&apos;s Law
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300">
                  Raoult&apos;s Law states that the partial vapor pressure of a solvent in an ideal solution
                  is equal to the vapor pressure of the pure solvent multiplied by its mole fraction in the solution.
                </p>
                <div className="my-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <p className="font-semibold text-blue-900 dark:text-blue-100">P<sub>A</sub> = χ<sub>A</sub> × P°<sub>A</sub></p>
                  <ul className="text-sm mt-2 space-y-1 text-blue-800 dark:text-blue-200">
                    <li>P<sub>A</sub> = partial vapor pressure of component A</li>
                    <li>χ<sub>A</sub> = mole fraction of A</li>
                    <li>P°<sub>A</sub> = vapor pressure of pure A</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Vapor Pressure Lowering
              </h3>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  When a non-volatile solute is added to a solvent, the vapor pressure decreases:
                </p>
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg mb-3">
                  <p className="font-mono text-sm">ΔP = P° - P<sub>solution</sub></p>
                  <p className="font-mono text-sm">ΔP = χ<sub>solute</sub> × P°</p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  The decrease is proportional to the mole fraction of solute, making it a colligative property.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Where It&apos;s Used
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-tertiary-500 mr-2">•</span>
                  <span className="text-sm"><strong>Distillation:</strong> Separating liquid mixtures based on vapor pressure differences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tertiary-500 mr-2">•</span>
                  <span className="text-sm"><strong>Solution Properties:</strong> Predicting boiling point elevation and freezing point depression</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tertiary-500 mr-2">•</span>
                  <span className="text-sm"><strong>Pharmaceutical:</strong> Drug formulation and stability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tertiary-500 mr-2">•</span>
                  <span className="text-sm"><strong>Food Science:</strong> Preservation and concentration processes</span>
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
                  A solution contains 0.100 mol of glucose dissolved in 0.900 mol of water at 25°C.
                  What is the vapor pressure of water in the solution? (P° = 23.8 mmHg)
                </p>
              </div>

              <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <div>
                  <p className="font-semibold mb-1">Step 1: Calculate mole fraction of water</p>
                  <p className="font-mono bg-gray-50 dark:bg-gray-700 p-2 rounded">
                    χ<sub>water</sub> = 0.900 / (0.900 + 0.100) = 0.900
                  </p>
                </div>

                <div>
                  <p className="font-semibold mb-1">Step 2: Apply Raoult&apos;s Law</p>
                  <p className="font-mono bg-gray-50 dark:bg-gray-700 p-2 rounded">
                    P = 0.900 × 23.8 mmHg = 21.42 mmHg
                  </p>
                </div>

                <div>
                  <p className="font-semibold mb-1">Step 3: Calculate vapor pressure lowering</p>
                  <p className="font-mono bg-gray-50 dark:bg-gray-700 p-2 rounded">
                    ΔP = 23.8 - 21.42 = 2.38 mmHg
                  </p>
                </div>

                <div className="p-3 bg-tertiary-50 dark:bg-tertiary-900/30 rounded-lg">
                  <p className="font-semibold text-tertiary-900 dark:text-tertiary-100">Result:</p>
                  <p className="text-tertiary-800 dark:text-tertiary-200">
                    The vapor pressure of water is lowered by 2.38 mmHg due to the dissolved glucose.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ideal vs. Non-Ideal Solutions
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-300 dark:border-gray-600">
                    <th className="text-left py-2 text-gray-900 dark:text-white">Type</th>
                    <th className="text-left py-2 text-gray-900 dark:text-white">Behavior</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 font-semibold">Ideal</td>
                    <td className="py-2">Follows Raoult&apos;s Law exactly</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 font-semibold">Positive Deviation</td>
                    <td className="py-2">P &gt; predicted (weaker interactions)</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 font-semibold">Negative Deviation</td>
                    <td className="py-2">P &lt; predicted (stronger interactions)</td>
                  </tr>
                </tbody>
              </table>

              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Examples of Ideal Solutions:</p>
                <ul className="space-y-1 text-sm text-blue-800 dark:text-blue-200">
                  <li>• Benzene + Toluene</li>
                  <li>• Hexane + Heptane</li>
                  <li>• Ethanol + Methanol</li>
                  <li>• Any solution of similar molecules</li>
                </ul>
              </div>

              <div className="mt-3 p-4 bg-orange-50 dark:bg-orange-900/30 rounded-lg">
                <p className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Non-Ideal Behavior:</p>
                <ul className="space-y-1 text-sm text-orange-800 dark:text-orange-200">
                  <li>• Acetone + Chloroform (negative deviation)</li>
                  <li>• Ethanol + Water (positive deviation)</li>
                  <li>• Any solution with very different molecules</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Common Solvent Vapor Pressures
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                  <th className="text-left py-3 text-gray-900 dark:text-white">Solvent</th>
                  <th className="text-center py-3 text-gray-900 dark:text-white">20°C (mmHg)</th>
                  <th className="text-center py-3 text-gray-900 dark:text-white">25°C (mmHg)</th>
                  <th className="text-center py-3 text-gray-900 dark:text-white">30°C (mmHg)</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 dark:text-gray-300">
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 font-semibold">Water</td>
                  <td className="text-center py-3">17.5</td>
                  <td className="text-center py-3">23.8</td>
                  <td className="text-center py-3">31.8</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 font-semibold">Ethanol</td>
                  <td className="text-center py-3">44.6</td>
                  <td className="text-center py-3">59.0</td>
                  <td className="text-center py-3">78.8</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 font-semibold">Benzene</td>
                  <td className="text-center py-3">74.7</td>
                  <td className="text-center py-3">95.1</td>
                  <td className="text-center py-3">118.2</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 font-semibold">Acetone</td>
                  <td className="text-center py-3">184.8</td>
                  <td className="text-center py-3">229.5</td>
                  <td className="text-center py-3">282.7</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 font-semibold">Methanol</td>
                  <td className="text-center py-3">94.0</td>
                  <td className="text-center py-3">126.8</td>
                  <td className="text-center py-3">167.0</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 font-semibold">Diethyl Ether</td>
                  <td className="text-center py-3">440.0</td>
                  <td className="text-center py-3">534.0</td>
                  <td className="text-center py-3">647.0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-tertiary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Related Colligative Properties
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Boiling Point Elevation</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                ΔT<sub>b</sub> = K<sub>b</sub> × m × i
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                Solutions boil at higher temperatures than pure solvents
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Freezing Point Depression</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                ΔT<sub>f</sub> = K<sub>f</sub> × m × i
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                Solutions freeze at lower temperatures than pure solvents
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Osmotic Pressure</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Π = MRT
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                Pressure required to prevent osmosis across a membrane
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
                  href="/solution-calculators/colligative-properties-calculator"
                  className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                >
                  <span>→</span>
                  <span>Colligative Properties</span>
                </a>
              </li>
              <li>
                <a
                  href="/solution-calculators/osmotic-pressure-calculator"
                  className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                >
                  <span>→</span>
                  <span>Osmotic Pressure Calculator</span>
                </a>
              </li>
              <li>
                <a
                  href="/physical-chemistry-calculators/activity-coefficient-calculator"
                  className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                >
                  <span>→</span>
                  <span>Activity Coefficient</span>
                </a>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                📐 Related Formulas
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/chemistry-formulas/raoults-law"
                    className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                  >
                    <span>→</span>
                    <span>Raoult's Law Formula</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/chemistry-formulas/vapor-pressure-formula"
                    className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                  >
                    <span>→</span>
                    <span>Vapor Pressure Formula</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <a
                href="/physical-chemistry-calculators"
                className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
              >
                All Physical Chemistry Calculators →
              </a>
            </div>
          </div>
        </div>
      </div>      </div>
      <Footer />
    </>
  );
}