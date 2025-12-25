import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Limiting Reagent Formula | Identify Reactant That Runs Out First',
  description: 'Determine limiting reagents in chemical reactions. Calculate theoretical yield based on the reactant that limits product formation.',
  keywords: ['limiting reagent', 'limiting reactant', 'excess reagent', 'theoretical yield', 'stoichiometry', 'mole ratio']
};

export default function LimitingReagentFormulaPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <nav className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <Link href="/">Home</Link>
            <span>→</span>
            <Link href="/chemistry-formulas">Chemistry Formulas</Link>
            <span>→</span>
            <span className="text-gray-900 dark:text-white font-medium">Limiting Reagent</span>
          </nav>
        </div>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 rounded-3xl p-12 text-white shadow-2xl">
            <h1 className="text-5xl font-bold mb-4 text-center">Limiting Reagent Formula</h1>
            <p className="text-xl text-center text-amber-100">
              The reactant that determines maximum product formed - consumed completely first
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-l-4 border-amber-500">
            <h2 className="text-3xl font-bold mb-6">Concept</h2>
            
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 rounded-xl p-8 mb-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                In reactions with multiple reactants, the <strong className="text-amber-900 dark:text-amber-300">limiting reagent</strong> runs out first and limits product formation.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                The <strong className="text-orange-900 dark:text-orange-300">excess reagent</strong> remains after the reaction is complete.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-amber-900 dark:text-amber-300 mb-3">Limiting Reagent</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 list-disc ml-6">
                  <li>Consumed completely</li>
                  <li>Determines max product</li>
                  <li>Controls theoretical yield</li>
                  <li>Reaction stops when gone</li>
                </ul>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-orange-900 dark:text-orange-300 mb-3">Excess Reagent</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 list-disc ml-6">
                  <li>Some remains unused</li>
                  <li>More than needed</li>
                  <li>Amount left = initial - consumed</li>
                  <li>Can be recovered</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Methods to Identify Limiting Reagent</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-amber-900 dark:text-amber-300 mb-4">Method 1: Mole Ratio Comparison</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Step 1:</strong> Convert all reactant masses to moles</p>
                  <p><strong>Step 2:</strong> Divide each by its stoichiometric coefficient</p>
                  <p><strong>Step 3:</strong> Smallest result = limiting reagent</p>
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-4 mt-4">
                    <p className="font-mono text-center text-lg">
                      For aA + bB → products:<br/>
                      Compare: (moles A)/a vs (moles B)/b
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-orange-900 dark:text-orange-300 mb-4">Method 2: Product Calculation</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Step 1:</strong> Calculate product from each reactant separately</p>
                  <p><strong>Step 2:</strong> Reactant producing LESS product = limiting reagent</p>
                  <p><strong>Step 3:</strong> Use that amount as theoretical yield</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Worked Examples</h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-amber-900 dark:text-amber-300 mb-4">Example 1: Simple Synthesis</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p className="font-mono bg-white dark:bg-gray-700 p-2 rounded">2H₂ + O₂ → 2H₂O</p>
                  <p className="mt-4"><strong>Given:</strong> 4.0 g H₂ and 32.0 g O₂</p>
                  <p className="mt-4"><strong>Solution (Method 1):</strong></p>
                  <p className="ml-6">n(H₂) = 4.0 / 2.02 = 1.98 mol</p>
                  <p className="ml-6">n(O₂) = 32.0 / 32.00 = 1.00 mol</p>
                  <p className="ml-6 mt-4">Divide by coefficients:</p>
                  <p className="ml-12">H₂: 1.98 / 2 = 0.99</p>
                  <p className="ml-12">O₂: 1.00 / 1 = 1.00</p>
                  <p className="ml-6 font-bold text-red-600 mt-4">Limiting Reagent: H₂ (smaller value)</p>
                  <p className="ml-6 mt-4"><strong>Theoretical yield:</strong></p>
                  <p className="ml-12">n(H₂O) = 1.98 mol H₂ × (2 mol H₂O / 2 mol H₂) = 1.98 mol</p>
                  <p className="ml-12">m(H₂O) = 1.98 × 18.02 = 35.7 g</p>
                  <p className="ml-6 font-bold text-green-600">Theoretical Yield: 35.7 g H₂O</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">Example 2: Excess Calculation</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p className="font-mono bg-white dark:bg-gray-700 p-2 rounded">N₂ + 3H₂ → 2NH₃</p>
                  <p className="mt-4"><strong>Given:</strong> 14.0 g N₂ and 6.0 g H₂</p>
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">n(N₂) = 14.0 / 28.02 = 0.500 mol</p>
                  <p className="ml-6">n(H₂) = 6.0 / 2.02 = 2.97 mol</p>
                  <p className="ml-6 mt-4">Check ratios:</p>
                  <p className="ml-12">N₂: 0.500 / 1 = 0.500</p>
                  <p className="ml-12">H₂: 2.97 / 3 = 0.99</p>
                  <p className="ml-6 font-bold text-red-600 mt-4">Limiting Reagent: N₂</p>
                  <p className="ml-6 mt-4"><strong>H₂ consumed:</strong></p>
                  <p className="ml-12">0.500 mol N₂ × (3 mol H₂ / 1 mol N₂) = 1.50 mol H₂</p>
                  <p className="ml-12">= 1.50 × 2.02 = 3.03 g H₂</p>
                  <p className="ml-6 mt-4"><strong>H₂ excess:</strong></p>
                  <p className="ml-12">6.0 - 3.03 = 2.97 g H₂ remains</p>
                  <p className="ml-6 font-bold text-blue-600">Excess H₂: 2.97 g</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-4">Example 3: Method 2 (Product Calculation)</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p className="font-mono bg-white dark:bg-gray-700 p-2 rounded">4Al + 3O₂ → 2Al₂O₃</p>
                  <p className="mt-4"><strong>Given:</strong> 54.0 g Al and 64.0 g O₂</p>
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">n(Al) = 54.0 / 26.98 = 2.00 mol</p>
                  <p className="ml-6">n(O₂) = 64.0 / 32.00 = 2.00 mol</p>
                  <p className="ml-6 mt-4"><strong>From Al:</strong></p>
                  <p className="ml-12">2.00 mol Al × (2 mol Al₂O₃ / 4 mol Al) = 1.00 mol Al₂O₃</p>
                  <p className="ml-6"><strong>From O₂:</strong></p>
                  <p className="ml-12">2.00 mol O₂ × (2 mol Al₂O₃ / 3 mol O₂) = 1.33 mol Al₂O₃</p>
                  <p className="ml-6 font-bold text-red-600 mt-4">Limiting Reagent: Al (produces less product)</p>
                  <p className="ml-6 mt-4">Theoretical yield: 1.00 mol × 101.96 g/mol = 102 g Al₂O₃</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Common Mistakes</h2>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Comparing Masses Instead of Moles</h3>
                  <p className="text-gray-700 dark:text-gray-300">Must convert to moles first - can't compare grams directly!</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Ignoring Stoichiometric Coefficients</h3>
                  <p className="text-gray-700 dark:text-gray-300">For N₂ + 3H₂ → 2NH₃, need 3× more H₂ moles than N₂</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Choosing Largest Value</h3>
                  <p className="text-gray-700 dark:text-gray-300">Limiting reagent gives SMALLEST ratio (n/coefficient), not largest</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4">
                <span className="text-2xl">💡</span>
                <div>
                  <h3 className="font-bold text-yellow-900 dark:text-yellow-300 mb-2">Base Yield on Limiting Reagent</h3>
                  <p className="text-gray-700 dark:text-gray-300">Always calculate theoretical yield using the limiting reagent amount</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Related Tools</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/stoichiometry-calculators/limiting-reagent-calculator" className="block p-6 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Limiting Reagent Calculator</h3>
                <p className="text-amber-100">Automated identification</p>
              </Link>
              <Link href="/chemistry-formulas/stoichiometry-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Stoichiometry</h3>
                <p className="text-gray-600 dark:text-gray-400">Mole ratio calculations</p>
              </Link>
              <Link href="/chemistry-formulas/theoretical-yield-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Theoretical Yield</h3>
                <p className="text-gray-600 dark:text-gray-400">Maximum product calculation</p>
              </Link>
              <Link href="/chemistry-formulas/percent-yield-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Percent Yield</h3>
                <p className="text-gray-600 dark:text-gray-400">Compare actual vs theoretical</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
