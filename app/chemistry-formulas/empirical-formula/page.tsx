import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Empirical Formula | Find Simplest Ratio from Percent Composition',
  description: 'Master empirical formula calculations from percent composition. Step-by-step method to find the simplest whole number ratio of elements.',
  keywords: 'empirical formula, percent composition, simplest ratio, molecular formula, combustion analysis',
};

export default function EmpiricalFormulaPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="mb-8 text-sm">
            <Link href="/" className="text-primary-600 dark:text-primary-400 hover:underline">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/chemistry-formulas" className="text-primary-600 dark:text-primary-400 hover:underline">Chemistry Formulas</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600 dark:text-gray-400">Empirical Formula</span>
          </nav>

          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Empirical Formula
          </h1>

          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            The <strong>empirical formula</strong> shows the simplest whole number ratio of elements in a compound. 
            It's determined from percent composition or mass data and represents the most reduced form of the molecular formula.
          </p>

          {/* Method Block */}
          <div className="my-12 p-8 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">Empirical Formula Method</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8">
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-violet-100 dark:bg-violet-900/30 p-4 rounded-lg text-center">
                    <p className="text-xl font-bold text-violet-800 dark:text-violet-200">
                      1. % → grams
                    </p>
                    <p className="text-sm text-violet-700 dark:text-violet-300">
                      Assume 100g sample
                    </p>
                  </div>
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-lg text-center">
                    <p className="text-xl font-bold text-purple-800 dark:text-purple-200">
                      2. grams → moles
                    </p>
                    <p className="text-sm text-purple-700 dark:text-purple-300">
                      n = mass / molar mass
                    </p>
                  </div>
                  <div className="bg-indigo-100 dark:bg-indigo-900/30 p-4 rounded-lg text-center">
                    <p className="text-xl font-bold text-indigo-800 dark:text-indigo-200">
                      3. Divide by smallest
                    </p>
                    <p className="text-sm text-indigo-700 dark:text-indigo-300">
                      Find mole ratios
                    </p>
                  </div>
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg text-center">
                    <p className="text-xl font-bold text-blue-800 dark:text-blue-200">
                      4. Make whole numbers
                    </p>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      Multiply if needed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Concepts */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-violet-900 dark:text-violet-100 mb-4">
                Key Concepts
              </h2>
              <div className="space-y-4 text-violet-800 dark:text-violet-200">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold mb-2">📊 Empirical vs Molecular</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Empirical: simplest ratio (CH₂O)</li>
                      <li>Molecular: actual formula (C₆H₁₂O₆)</li>
                      <li>Molecular = (Empirical) × n</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">🔬 Data Sources</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Percent composition</li>
                      <li>Combustion analysis</li>
                      <li>Mass spectrometry</li>
                      <li>Elemental analysis</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Step-by-Step Method */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Detailed Method</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border-l-4 border-violet-500">
                <h3 className="text-xl font-bold text-violet-600 dark:text-violet-400 mb-2">Step 1: Convert % to grams</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Assume 100.0 g sample, so % = grams
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Example: 40.0% C = 40.0 g C in 100 g sample
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border-l-4 border-purple-500">
                <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-2">Step 2: Convert grams to moles</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Use molar mass: n = mass / molar mass
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Example: 40.0 g C ÷ 12.01 g/mol = 3.33 mol C
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border-l-4 border-indigo-500">
                <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">Step 3: Divide by smallest number of moles</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Find the element with fewest moles, divide all by this number
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  This gives mole ratios (subscripts in formula)
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">Step 4: Convert to whole numbers</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  If ratios aren't whole numbers, multiply all by same factor
                </p>
                <div className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                  <p>• 0.5 → multiply by 2</p>
                  <p>• 0.33 or 0.67 → multiply by 3</p>
                  <p>• 0.25 or 0.75 → multiply by 4</p>
                </div>
              </div>
            </div>
          </section>

          {/* Detailed Example */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Detailed Example</h2>
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Problem: A compound is 40.0% C, 6.7% H, and 53.3% O by mass. Find the empirical formula.
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-2">Given:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>40.0% C</li>
                    <li>6.7% H</li>
                    <li>53.3% O</li>
                    <li>Molar masses: C = 12.01 g/mol, H = 1.008 g/mol, O = 16.00 g/mol</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 1: Assume 100.0 g sample</h4>
                  <div className="font-mono bg-white dark:bg-gray-800 p-3 rounded space-y-1">
                    <p>40.0% C = 40.0 g C</p>
                    <p>6.7% H = 6.7 g H</p>
                    <p>53.3% O = 53.3 g O</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 2: Convert to moles</h4>
                  <div className="font-mono bg-white dark:bg-gray-800 p-3 rounded space-y-1">
                    <p>n<sub>C</sub> = 40.0 g ÷ 12.01 g/mol = <strong>3.33 mol C</strong></p>
                    <p>n<sub>H</sub> = 6.7 g ÷ 1.008 g/mol = <strong>6.65 mol H</strong></p>
                    <p>n<sub>O</sub> = 53.3 g ÷ 16.00 g/mol = <strong>3.33 mol O</strong></p>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 3: Divide by smallest (3.33)</h4>
                  <div className="font-mono bg-white dark:bg-gray-800 p-3 rounded space-y-1">
                    <p>C: 3.33 ÷ 3.33 = <strong>1.00</strong></p>
                    <p>H: 6.65 ÷ 3.33 = <strong>2.00</strong></p>
                    <p>O: 3.33 ÷ 3.33 = <strong>1.00</strong></p>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 4: Ratios are already whole numbers!</h4>
                  <div className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    <p className="text-xl">C : H : O = 1 : 2 : 1</p>
                  </div>
                </div>

                <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg">
                  <p className="font-bold text-green-900 dark:text-green-100 text-xl">
                    Empirical Formula: CH₂O
                  </p>
                  <p className="text-sm mt-2">
                    This is the formula for formaldehyde or sugars like glucose (C₆H₁₂O₆)
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Tricky Example */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Example with Non-Whole Number Ratios</h2>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4">
                Compound: 72.0% C, 12.0% H, 16.0% O
              </h3>
              
              <div className="space-y-4">
                <div className="font-mono bg-white dark:bg-gray-800 p-3 rounded text-sm space-y-1">
                  <p><strong>Step 1-2:</strong> 72.0g C → 6.00 mol, 12.0g H → 11.9 mol, 16.0g O → 1.00 mol</p>
                  <p><strong>Step 3:</strong> Divide by 1.00 (smallest)</p>
                  <p>C: 6.00 ÷ 1.00 = <span className="text-blue-600">6.00</span></p>
                  <p>H: 11.9 ÷ 1.00 = <span className="text-blue-600">11.9 ≈ 12.0</span></p>
                  <p>O: 1.00 ÷ 1.00 = <span className="text-blue-600">1.00</span></p>
                  <p><strong>Step 4:</strong> Already whole numbers!</p>
                </div>
                
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded">
                  <p className="font-bold text-blue-900 dark:text-blue-100">
                    Empirical Formula: C₆H₁₂O
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Common Multipliers Table */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Common Decimal to Whole Number Conversions</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
                <thead className="bg-gradient-to-r from-violet-600 to-purple-600 text-white">
                  <tr>
                    <th className="p-4 text-left">If ratio is...</th>
                    <th className="p-4 text-left">Multiply all by...</th>
                    <th className="p-4 text-left">Example</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="p-4">1.0, 2.0, 3.0</td>
                    <td className="p-4 font-bold">1 (already whole)</td>
                    <td className="p-4">1:2:3 → C₁H₂O₃</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700/30">
                    <td className="p-4">1.0, 1.5, 2.0</td>
                    <td className="p-4 font-bold">2</td>
                    <td className="p-4">2:3:4 → C₂H₃O₄</td>
                  </tr>
                  <tr>
                    <td className="p-4">1.0, 1.33, 1.67</td>
                    <td className="p-4 font-bold">3</td>
                    <td className="p-4">3:4:5 → C₃H₄O₅</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700/30">
                    <td className="p-4">1.0, 1.25, 1.75</td>
                    <td className="p-4 font-bold">4</td>
                    <td className="p-4">4:5:7 → C₄H₅O₇</td>
                  </tr>
                  <tr>
                    <td className="p-4">1.0, 1.2, 1.4</td>
                    <td className="p-4 font-bold">5</td>
                    <td className="p-4">5:6:7 → C₅H₆O₇</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Common Mistakes</h2>
            <div className="space-y-4">
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Using mass instead of moles in ratios</h3>
                <p className="text-red-800 dark:text-red-200">
                  Must convert grams to moles first! Subscripts represent mole ratios, not mass ratios.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Rounding too early</h3>
                <p className="text-red-800 dark:text-red-200">
                  Keep extra decimal places during calculations. Only round at the very end when determining whole numbers.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Not multiplying ALL elements</h3>
                <p className="text-red-800 dark:text-red-200">
                  If you multiply one ratio by 2 to make it whole, you MUST multiply all ratios by 2.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Forgetting to check percent total</h3>
                <p className="text-red-800 dark:text-red-200">
                  Percents should add to 100%. If not, oxygen might be missing or there's an error in the data.
                </p>
              </div>
            </div>
          </section>

          {/* Related Calculators */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Related Calculators</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/stoichiometry-calculators/empirical-formula-calculator" className="block p-6 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Empirical Formula Calculator</h3>
                <p>Enter % composition, get formula instantly</p>
              </Link>

              <Link href="/stoichiometry-calculators/molecular-formula-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Molecular Formula</h3>
                <p className="text-gray-600 dark:text-gray-400">From empirical + molar mass</p>
              </Link>

              <Link href="/stoichiometry-calculators/percent-composition-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Percent Composition</h3>
                <p className="text-gray-600 dark:text-gray-400">Calculate % from formula</p>
              </Link>

              <Link href="/stoichiometry-calculators/combustion-analysis-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Combustion Analysis</h3>
                <p className="text-gray-600 dark:text-gray-400">From CO₂ and H₂O masses</p>
              </Link>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What's the difference between empirical and molecular formula?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Empirical shows the simplest ratio (CH₂O). Molecular shows the actual formula (C₆H₁₂O₆). Molecular = empirical × integer.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Why assume 100g in step 1?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Makes math easy! If it's 40% C, then in 100g there are 40g of C. You can use any mass, but 100g makes percent = grams.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What if I get 1.99 instead of 2.00?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Round to the nearest whole number if it's very close (within ±0.1). 1.99 becomes 2. This accounts for rounding errors in the data.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">How do I know what to multiply by?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Look for common fractions: 0.5 = 1/2 (multiply by 2), 0.33 = 1/3 (multiply by 3), 0.25 = 1/4 (multiply by 4), etc.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Can empirical and molecular formulas be the same?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Yes! For H₂O, CO₂, NH₃, the empirical and molecular formulas are identical because they're already in simplest ratio.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-between">
              <Link href="/chemistry-formulas" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                ← Back to All Formulas
              </Link>
              <Link href="/chemistry-formulas/gay-lussacs-law" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                Next: Gay-Lussac's Law →
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}