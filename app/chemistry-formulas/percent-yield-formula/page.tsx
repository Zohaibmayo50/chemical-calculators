import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Percent Yield Formula | % Yield = (Actual/Theoretical) × 100',
  description: 'Calculate reaction efficiency with the percent yield formula. Includes examples, definitions, and links to stoichiometry calculators.',
  keywords: 'percent yield formula, reaction efficiency, actual yield, theoretical yield, stoichiometry',
};

export default function PercentYieldFormulaPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <nav className="mb-8 text-sm">
            <Link href="/" className="text-primary-600 dark:text-primary-400 hover:underline">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/chemistry-formulas" className="text-primary-600 dark:text-primary-400 hover:underline">Chemistry Formulas</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600 dark:text-gray-400">Percent Yield Formula</span>
          </nav>

          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Percent Yield Formula
          </h1>

          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            <strong>Percent yield</strong> measures the efficiency of a chemical reaction by comparing the actual amount 
            of product obtained to the theoretical maximum possible. It's essential for evaluating reaction success in labs and industry.
          </p>

          {/* Formula Block */}
          <div className="my-12 p-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">The Percent Yield Formula</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center">
              <p className="text-5xl font-bold text-gray-900 dark:text-white mb-2">
                % Yield = (Actual / Theoretical) × 100
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Efficiency of a chemical reaction
              </p>
            </div>
          </div>

          {/* Variable Definitions */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Variable Definitions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-orange-600 dark:text-orange-400 mb-2">% Yield = Percent Yield</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> % (percentage)
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Range:</strong> 0% to ~100% (over 100% indicates experimental error)
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Meaning:</strong> Efficiency of the reaction
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-orange-600 dark:text-orange-400 mb-2">Actual Yield</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> g, kg, mol (must match theoretical yield units)
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Meaning:</strong> Amount of product actually obtained from experiment
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                  📊 Measured in the lab
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-orange-600 dark:text-orange-400 mb-2">Theoretical Yield</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> g, kg, mol (must match actual yield units)
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Meaning:</strong> Maximum amount of product possible based on stoichiometry
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                  🧮 Calculated from balanced equation and limiting reactant
                </p>
              </div>
            </div>
          </section>

          {/* Rearranged Forms */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Rearranged Forms</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-orange-50 dark:bg-orange-900/30 rounded-lg p-6 border-2 border-orange-500">
                <h3 className="text-lg font-bold text-orange-900 dark:text-orange-100 mb-3">Find Actual Yield</h3>
                <p className="text-2xl font-bold text-orange-800 dark:text-orange-200 mb-2">
                  Actual = (% Yield × Theoretical) / 100
                </p>
                <p className="text-sm text-orange-700 dark:text-orange-300">
                  Predict actual product amount
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 rounded-lg p-6 border-2 border-red-500">
                <h3 className="text-lg font-bold text-red-900 dark:text-red-100 mb-3">Find Theoretical Yield</h3>
                <p className="text-2xl font-bold text-red-800 dark:text-red-200 mb-2">
                  Theoretical = (Actual × 100) / % Yield
                </p>
                <p className="text-sm text-red-700 dark:text-red-300">
                  Calculate theoretical from actual
                </p>
              </div>
            </div>
          </section>

          {/* Example */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Step-by-Step Example</h2>
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Problem: A reaction should produce 50.0 g of product. You obtain 42.3 g. What is the percent yield?
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-2">Given:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Theoretical yield = 50.0 g</li>
                    <li>Actual yield = 42.3 g</li>
                    <li>% Yield = ?</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 1: Write the formula</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    % Yield = (Actual / Theoretical) × 100
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 2: Substitute values</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    % Yield = (42.3 g / 50.0 g) × 100
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 3: Calculate</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    % Yield = 0.846 × 100 = 84.6%
                  </p>
                </div>

                <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg border-l-4 border-green-500">
                  <p className="font-bold text-green-900 dark:text-green-100">
                    Answer: 84.6% — This is a good yield for most reactions!
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Not 100%? */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Why Is Percent Yield Less Than 100%?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-6">
                <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-3">🧪 Incomplete Reactions</h3>
                <p className="text-blue-800 dark:text-blue-200">
                  Many reactions don't go to 100% completion. Equilibrium may favor reactants.
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/30 rounded-lg p-6">
                <h3 className="font-bold text-purple-900 dark:text-purple-100 mb-3">⚗️ Side Reactions</h3>
                <p className="text-purple-800 dark:text-purple-200">
                  Competing reactions may form unwanted products, reducing main product yield.
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-6">
                <h3 className="font-bold text-green-900 dark:text-green-100 mb-3">💧 Product Loss</h3>
                <p className="text-green-800 dark:text-green-200">
                  Some product sticks to glassware, is lost during transfer, or evaporates.
                </p>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/30 rounded-lg p-6">
                <h3 className="font-bold text-orange-900 dark:text-orange-100 mb-3">🔬 Purification</h3>
                <p className="text-orange-800 dark:text-orange-200">
                  Impure products must be purified, which reduces the final amount recovered.
                </p>
              </div>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Common Mistakes</h2>
            <div className="space-y-4">
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Swapping actual and theoretical yields</h3>
                <p className="text-red-800 dark:text-red-200">
                  Actual (what you got) goes in the numerator. Theoretical (calculated maximum) goes in denominator.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Mismatched units</h3>
                <p className="text-red-800 dark:text-red-200">
                  Both yields must be in the same units! Can't divide grams by moles.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Forgetting to multiply by 100</h3>
                <p className="text-red-800 dark:text-red-200">
                  0.846 is NOT the percent yield. Multiply by 100 to get 84.6%.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Getting over 100%</h3>
                <p className="text-red-800 dark:text-red-200">
                  If you get over 100%, you likely have impure product, measurement error, or wrong theoretical yield calculation.
                </p>
              </div>
            </div>
          </section>

          {/* Related Calculators */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Related Calculators</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/stoichiometry-calculators/percent-yield-calculator" className="block p-6 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Percent Yield Calculator</h3>
                <p>Calculate % yield instantly</p>
              </Link>

              <Link href="/stoichiometry-calculators/theoretical-yield-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Theoretical Yield</h3>
                <p className="text-gray-600 dark:text-gray-400">Calculate maximum product</p>
              </Link>

              <Link href="/stoichiometry-calculators/limiting-reactant-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Limiting Reactant</h3>
                <p className="text-gray-600 dark:text-gray-400">Find limiting reagent</p>
              </Link>

              <Link href="/stoichiometry-calculators/stoichiometry-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Stoichiometry</h3>
                <p className="text-gray-600 dark:text-gray-400">Mole-to-mole conversions</p>
              </Link>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What is the percent yield formula?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  % Yield = (Actual Yield / Theoretical Yield) × 100. It measures reaction efficiency as a percentage.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What is a good percent yield?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  80-90% is excellent. 70-80% is good. Below 50% suggests problems. Industrial processes aim for over 90%.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Can percent yield be over 100%?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  No! Over 100% indicates error: impure product, wet product, wrong theoretical calculation, or measurement mistakes.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">How do I find theoretical yield?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Use stoichiometry: Find limiting reactant, convert to moles, use mole ratio from balanced equation, convert to desired units.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What's the difference between actual and theoretical yield?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Theoretical = calculated maximum from stoichiometry. Actual = what you actually got in the lab. Actual is usually less.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-between">
              <Link href="/chemistry-formulas" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                ← Back to All Formulas
              </Link>
              <Link href="/chemistry-formulas/molecular-weight-formula" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                Next: Molecular Weight →
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
