import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Combined Gas Law | P₁V₁/T₁ = P₂V₂/T₂ | Gas Calculations',
  description: 'Master the combined gas law relating pressure, volume, and temperature. Includes examples and gas law calculator links.',
  alternates: {
    canonical: 'https://chemicalcalculators.com/chemistry-formulas/combined-gas-law',
  },
  keywords: 'combined gas law, gas laws, pressure volume temperature, PVT, ideal gas',
};

export default function CombinedGasLawPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <nav className="mb-8 text-sm">
            <Link href="/" className="text-primary-600 dark:text-primary-400 hover:underline">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/chemistry-formulas" className="text-primary-600 dark:text-primary-400 hover:underline">Chemistry Formulas</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600 dark:text-gray-400">Combined Gas Law</span>
          </nav>

          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Combined Gas Law
          </h1>

          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            The <strong>combined gas law</strong> relates pressure, volume, and temperature of a fixed amount of gas. 
            It combines Boyle's, Charles's, and Gay-Lussac's laws into one powerful equation.
          </p>

          {/* Formula Block */}
          <div className="my-12 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">The Combined Gas Law</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center">
              <p className="text-6xl font-bold text-gray-900 dark:text-white mb-2">
                P₁V₁/T₁ = P₂V₂/T₂
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                For a fixed amount of gas
              </p>
            </div>
          </div>

          {/* Variable Definitions */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Variable Definitions</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">P₁ = Initial Pressure</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> atm, mmHg, Pa, kPa, torr
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">P₂ = Final Pressure</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> Same as P₁
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-2">V₁ = Initial Volume</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> L, mL, m³, cm³
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-2">V₂ = Final Volume</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> Same as V₁
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">T₁ = Initial Temperature</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> Kelvin (K) — MUST use Kelvin!
                </p>
                <p className="text-red-600 dark:text-red-400 text-sm mt-2">
                  ⚠️ Never use °C or °F
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">T₂ = Final Temperature</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> Kelvin (K)
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                  K = °C + 273.15
                </p>
              </div>
            </div>
          </section>

          {/* When to Use */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">When to Use Combined Gas Law</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-6">
                <h3 className="font-bold text-green-900 dark:text-green-100 mb-3">✅ Use When:</h3>
                <ul className="space-y-2 text-green-800 dark:text-green-200 text-sm">
                  <li>• Amount of gas is constant (n fixed)</li>
                  <li>• Both P, V, and T change</li>
                  <li>• Comparing two states</li>
                </ul>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/30 rounded-lg p-6">
                <h3 className="font-bold text-yellow-900 dark:text-yellow-100 mb-3">⚡ Reduces To:</h3>
                <ul className="space-y-2 text-yellow-800 dark:text-yellow-200 text-sm">
                  <li>• <strong>Boyle's:</strong> T constant → P₁V₁ = P₂V₂</li>
                  <li>• <strong>Charles's:</strong> P constant → V₁/T₁ = V₂/T₂</li>
                  <li>• <strong>Gay-Lussac's:</strong> V constant → P₁/T₁ = P₂/T₂</li>
                </ul>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 rounded-lg p-6">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-3">❌ Don't Use If:</h3>
                <ul className="space-y-2 text-red-800 dark:text-red-200 text-sm">
                  <li>• Amount of gas changes</li>
                  <li>• Need to find moles (n)</li>
                  <li>• Use Ideal Gas Law instead</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Rearranged Forms */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Rearranged Forms</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-6">
                <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Solve for P₂:</h3>
                <p className="text-2xl font-bold text-blue-800 dark:text-blue-200">
                  P₂ = P₁V₁T₂ / (V₂T₁)
                </p>
              </div>

              <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-6">
                <h3 className="font-bold text-purple-900 dark:text-purple-100 mb-3">Solve for V₂:</h3>
                <p className="text-2xl font-bold text-purple-800 dark:text-purple-200">
                  V₂ = P₁V₁T₂ / (P₂T₁)
                </p>
              </div>

              <div className="bg-indigo-100 dark:bg-indigo-900/30 rounded-lg p-6">
                <h3 className="font-bold text-indigo-900 dark:text-indigo-100 mb-3">Solve for T₂:</h3>
                <p className="text-2xl font-bold text-indigo-800 dark:text-indigo-200">
                  T₂ = P₂V₂T₁ / (P₁V₁)
                </p>
              </div>

              <div className="bg-cyan-100 dark:bg-cyan-900/30 rounded-lg p-6">
                <h3 className="font-bold text-cyan-900 dark:text-cyan-100 mb-3">General Form:</h3>
                <p className="text-xl font-bold text-cyan-800 dark:text-cyan-200">
                  PV / T = constant
                </p>
              </div>
            </div>
          </section>

          {/* Example */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Step-by-Step Example</h2>
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Problem: A gas at 2.0 atm, 5.0 L, and 25°C is heated to 100°C and compressed to 3.0 L. Find the final pressure.
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-2">Given:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>P₁ = 2.0 atm</li>
                    <li>V₁ = 5.0 L</li>
                    <li>T₁ = 25°C</li>
                    <li>V₂ = 3.0 L</li>
                    <li>T₂ = 100°C</li>
                    <li>Find: P₂</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 1: Convert temperatures to Kelvin</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    T₁ = 25 + 273.15 = 298 K<br />
                    T₂ = 100 + 273.15 = 373 K
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 2: Rearrange for P₂</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    P₂ = P₁V₁T₂ / (V₂T₁)
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 3: Substitute values</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    P₂ = (2.0 atm)(5.0 L)(373 K) / [(3.0 L)(298 K)]
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 4: Calculate</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    P₂ = 3730 / 894 = 4.17 atm
                  </p>
                </div>

                <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg">
                  <p className="font-bold text-green-900 dark:text-green-100">
                    Answer: P₂ = 4.2 atm
                  </p>
                  <p className="text-sm mt-2">Pressure increased because: volume decreased (compression) AND temperature increased (heating).</p>
                </div>
              </div>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Common Mistakes</h2>
            <div className="space-y-4">
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Using Celsius instead of Kelvin</h3>
                <p className="text-red-800 dark:text-red-200">
                  Temperature MUST be in Kelvin! Using °C gives completely wrong answers. Always convert: K = °C + 273.15
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Mismatched pressure units</h3>
                <p className="text-red-800 dark:text-red-200">
                  P₁ and P₂ must have the same units. Convert before calculating (e.g., all atm or all kPa).
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Mismatched volume units</h3>
                <p className="text-red-800 dark:text-red-200">
                  V₁ and V₂ must have the same units. If one is mL and other is L, convert first!
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Assuming moles are constant when they're not</h3>
                <p className="text-red-800 dark:text-red-200">
                  Combined gas law only works when amount of gas is FIXED. If gas leaks or is added, use ideal gas law instead.
                </p>
              </div>
            </div>
          </section>

          {/* Related Calculators */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Related Calculators</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/gas-laws-calculators/combined-gas-law-calculator" className="block p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Combined Gas Law Calculator</h3>
                <p>Calculate P, V, or T changes</p>
              </Link>

              <Link href="/gas-laws-calculators/ideal-gas-law-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Ideal Gas Law</h3>
                <p className="text-gray-600 dark:text-gray-400">PV = nRT with moles</p>
              </Link>

              <Link href="/gas-laws-calculators/boyles-law-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Boyle's Law</h3>
                <p className="text-gray-600 dark:text-gray-400">P-V relationship (T constant)</p>
              </Link>

              <Link href="/gas-laws-calculators/charles-law-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Charles's Law</h3>
                <p className="text-gray-600 dark:text-gray-400">V-T relationship (P constant)</p>
              </Link>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What is the combined gas law?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  P₁V₁/T₁ = P₂V₂/T₂. It relates pressure, volume, and temperature for a fixed amount of gas, combining three simpler gas laws.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">When do I use combined gas law vs ideal gas law?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Use combined gas law when moles (n) are constant and you're comparing two states. Use ideal gas law when n varies or you need to find n.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Why must temperature be in Kelvin?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Gas laws assume absolute temperature scale. Celsius can be negative, which would give impossible negative volume/pressure ratios.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What happens if one variable stays constant?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  The equation simplifies: constant T → Boyle's Law, constant P → Charles's Law, constant V → Gay-Lussac's Law.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Do pressure and volume units matter?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Units must be consistent (P₁ and P₂ same units, V₁ and V₂ same units), but they cancel out, so any units work if matched.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-between">
              <Link href="/chemistry-formulas" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                ← Back to All Formulas
              </Link>
              <Link href="/chemistry-formulas/daltons-law-formula" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                Next: Dalton's Law →
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
