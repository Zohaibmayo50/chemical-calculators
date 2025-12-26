import { Metadata } from 'next';
import DilutionCalculator from '@/components/calculators/DilutionCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: "Dilution Calculator | M1V1=M2V2 | Solution Preparation",
  description: "Calculate solution dilutions using M1V1=M2V2. Essential for laboratory work, stock solutions, and concentration adjustments.",
  keywords: ['dilution calculator', 'M1V1=M2V2', 'solution preparation', 'stock solution', 'concentration', 'dilution factor'],
};

export default function DilutionCalculatorPage() {  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Dilution Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Calculate solution dilutions using the M₁V₁ = M₂V₂ equation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <DilutionCalculator />
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Understanding Dilutions
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300">
                  Dilution reduces the concentration of a solution by adding more solvent.
                  The amount of solute remains constant.
                </p>
                <div className="my-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <p className="font-semibold text-blue-900 dark:text-blue-100">M₁V₁ = M₂V₂</p>
                  <ul className="text-sm mt-2 space-y-1 text-blue-800 dark:text-blue-200">
                    <li>M₁ = initial concentration</li>
                    <li>V₁ = initial volume</li>
                    <li>M₂ = final concentration</li>
                    <li>V₂ = final volume</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Dilution Notation
              </h3>
              <div className="prose dark:prose-invert max-w-none text-sm">
                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <p className="font-semibold mb-1">1:10 Dilution</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      1 part stock + 9 parts solvent = 10 parts total
                    </p>
                  </div>
                  <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <p className="font-semibold mb-1">10x Dilution</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Final volume is 10× the initial volume
                    </p>
                  </div>
                  <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <p className="font-semibold mb-1">10-fold Dilution</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Concentration reduced by factor of 10
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Applications
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-tertiary-500 mr-2">•</span>
                  <span className="text-sm"><strong>Lab Work:</strong> Preparing working solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tertiary-500 mr-2">•</span>
                  <span className="text-sm"><strong>Biology:</strong> Serial dilutions for cell cultures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tertiary-500 mr-2">•</span>
                  <span className="text-sm"><strong>Medicine:</strong> Drug concentration adjustments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tertiary-500 mr-2">•</span>
                  <span className="text-sm"><strong>Industry:</strong> Quality control samples</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Example: Simple Dilution
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="font-semibold mb-2">Problem:</p>
                <p className="text-sm">
                  You have a 2.0 M stock solution of NaCl. How would you prepare 500 mL 
                  of 0.5 M NaCl solution?
                </p>
              </div>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <p className="font-semibold mb-2 text-blue-900 dark:text-blue-100">Solution:</p>
                <div className="text-sm space-y-2 text-blue-800 dark:text-blue-200">
                  <p>Given: M₁ = 2.0 M, M₂ = 0.5 M, V₂ = 500 mL</p>
                  <p>Find: V₁ (volume of stock needed)</p>
                  <p className="mt-2">M₁V₁ = M₂V₂</p>
                  <p>(2.0 M)(V₁) = (0.5 M)(500 mL)</p>
                  <p>V₁ = (0.5 × 500) / 2.0 = <strong>125 mL</strong></p>
                </div>
              </div>

              <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
                <p className="text-sm font-semibold text-green-900 dark:text-green-100 mb-1">Preparation:</p>
                <p className="text-sm text-green-800 dark:text-green-200">
                  1. Measure 125 mL of 2.0 M stock solution<br />
                  2. Add water to bring total volume to 500 mL<br />
                  3. Mix thoroughly
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Example: Serial Dilution
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="font-semibold mb-2">Problem:</p>
                <p className="text-sm">
                  Prepare a 1:1000 dilution of a bacterial culture using serial 1:10 dilutions.
                </p>
              </div>
              
              <div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                <p className="font-semibold mb-2 text-purple-900 dark:text-purple-100">Solution:</p>
                <div className="text-sm space-y-2 text-purple-800 dark:text-purple-200">
                  <p className="font-semibold">Three consecutive 1:10 dilutions:</p>
                  <p>1st: 1 mL culture + 9 mL media = 1:10</p>
                  <p>2nd: 1 mL from 1st + 9 mL media = 1:100</p>
                  <p>3rd: 1 mL from 2nd + 9 mL media = <strong>1:1000</strong></p>
                  <p className="mt-2 text-xs">Total dilution = 10 × 10 × 10 = 1000</p>
                </div>
              </div>

              <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <p className="text-xs text-blue-800 dark:text-blue-200">
                  <strong>Advantage:</strong> Serial dilutions avoid handling very small volumes 
                  that are difficult to measure accurately.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                🔗 Related Calculators
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/concentration-calculators/molarity-calculator"
                    className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                  >
                    <span>→</span>
                    <span>Molarity Calculator</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/solution-calculators/colligative-properties-calculator"
                    className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                  >
                    <span>→</span>
                    <span>Colligative Properties Calculator</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/solution-calculators/solubility-calculator"
                    className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                  >
                    <span>→</span>
                    <span>Solubility Calculator</span>
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
                      href="/chemistry-formulas/dilution-formula"
                      className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                    >
                      <span>→</span>
                      <span>Dilution Formula</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/chemistry-formulas/molarity-formula"
                      className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                    >
                      <span>→</span>
                      <span>Molarity Formula</span>
                    </a>
                  </li>
                </ul>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <a
                  href="/solution-calculators"
                  className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
                >
                  All Solution Calculators →
                </a>
              </div>
            </div>          </div>
        </div>

        <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Dilution Factor Reference
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                  <th className="text-left py-3 text-gray-900 dark:text-white">Dilution Notation</th>
                  <th className="text-center py-3 text-gray-900 dark:text-white">Dilution Factor</th>
                  <th className="text-left py-3 text-gray-900 dark:text-white">Example (1 M stock)</th>
                  <th className="text-left py-3 text-gray-900 dark:text-white">How to Prepare</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 dark:text-gray-300">
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3">1:2</td>
                  <td className="text-center py-3">2×</td>
                  <td className="py-3">0.5 M</td>
                  <td className="py-3">1 part stock + 1 part solvent</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3">1:5</td>
                  <td className="text-center py-3">5×</td>
                  <td className="py-3">0.2 M</td>
                  <td className="py-3">1 part stock + 4 parts solvent</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3">1:10</td>
                  <td className="text-center py-3">10×</td>
                  <td className="py-3">0.1 M</td>
                  <td className="py-3">1 part stock + 9 parts solvent</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3">1:100</td>
                  <td className="text-center py-3">100×</td>
                  <td className="py-3">0.01 M</td>
                  <td className="py-3">1 part stock + 99 parts solvent</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3">1:1000</td>
                  <td className="text-center py-3">1000×</td>
                  <td className="py-3">0.001 M</td>
                  <td className="py-3">1 part stock + 999 parts solvent</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Best Practices for Dilutions
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">✓ Do:</h3>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• Add stock solution to solvent</li>
                  <li>• Use calibrated volumetric flasks</li>
                  <li>• Mix thoroughly after dilution</li>
                  <li>• Label solutions clearly</li>
                  <li>• Use clean glassware</li>
                </ul>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">✗ Don&apos;t:</h3>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• Add solvent to stock (especially acids)</li>
                  <li>• Measure very small volumes (&lt;1 µL)</li>
                  <li>• Assume volumes are additive</li>
                  <li>• Reuse contaminated pipettes</li>
                  <li>• Dilute without mixing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>      </div>
      <Footer />
    </>
  );
}