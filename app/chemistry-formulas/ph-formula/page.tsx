import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'pH Formula | pH = -log[H⁺] | Calculate Solution Acidity',
  description: 'Learn the pH formula (pH = -log[H⁺]) with clear explanations, examples, and pOH calculations. Master acid-base chemistry.',
  keywords: 'pH formula, acidity, pH calculation, hydrogen ion concentration, acid base chemistry',
};

export default function PHFormulaPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="mb-8 text-sm">
            <Link href="/" className="text-primary-600 dark:text-primary-400 hover:underline">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/chemistry-formulas" className="text-primary-600 dark:text-primary-400 hover:underline">Chemistry Formulas</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600 dark:text-gray-400">pH Formula</span>
          </nav>

          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            pH Formula
          </h1>

          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            The <strong>pH formula</strong> measures the acidity or basicity of a solution on a scale from 0 to 14. 
            pH is one of the most important measurements in chemistry, biology, environmental science, and medicine.
          </p>

          {/* Formula Block */}
          <div className="my-12 p-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">The pH Formula</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center">
              <p className="text-5xl font-bold text-gray-900 dark:text-white mb-2">
                pH = -log[H⁺]
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Negative logarithm of hydrogen ion concentration
              </p>
            </div>
          </div>

          {/* Variable Definitions */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Variable Definitions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-2">pH = Power of Hydrogen</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> Unitless (dimensionless)
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Range:</strong> 0 (most acidic) to 14 (most basic)
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Neutral:</strong> pH = 7 at 25°C
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-2">[H⁺] = Hydrogen Ion Concentration</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> M (mol/L or molar)
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Meaning:</strong> Concentration of H⁺ ions in solution
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                  💡 Also written as [H₃O⁺] (hydronium ion)
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-2">log = Logarithm (base 10)</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  The common logarithm, not natural log (ln)
                </p>
              </div>
            </div>
          </section>

          {/* pH Scale */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">The pH Scale</h2>
            <div className="bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 rounded-xl p-6">
              <div className="grid grid-cols-3 gap-4 text-center text-white font-bold">
                <div className="bg-red-600/80 rounded-lg p-4">
                  <p className="text-2xl mb-2">pH 0-6</p>
                  <p className="text-sm">ACIDIC</p>
                  <p className="text-xs mt-2">More H⁺ ions</p>
                </div>
                <div className="bg-green-600/80 rounded-lg p-4">
                  <p className="text-2xl mb-2">pH 7</p>
                  <p className="text-sm">NEUTRAL</p>
                  <p className="text-xs mt-2">Equal H⁺ and OH⁻</p>
                </div>
                <div className="bg-blue-600/80 rounded-lg p-4">
                  <p className="text-2xl mb-2">pH 8-14</p>
                  <p className="text-sm">BASIC</p>
                  <p className="text-xs mt-2">More OH⁻ ions</p>
                </div>
              </div>
            </div>
          </section>

          {/* Rearranged Forms */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Related Formulas</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-6 border-2 border-blue-500">
                <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-3">Find [H⁺] from pH</h3>
                <p className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-2">[H⁺] = 10<sup>-pH</sup></p>
                <p className="text-sm text-blue-700 dark:text-blue-300">Reverse calculation</p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/30 rounded-lg p-6 border-2 border-purple-500">
                <h3 className="text-lg font-bold text-purple-900 dark:text-purple-100 mb-3">pOH Formula</h3>
                <p className="text-2xl font-bold text-purple-800 dark:text-purple-200 mb-2">pOH = -log[OH⁻]</p>
                <p className="text-sm text-purple-700 dark:text-purple-300">For bases</p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-6 border-2 border-green-500">
                <h3 className="text-lg font-bold text-green-900 dark:text-green-100 mb-3">pH + pOH Relationship</h3>
                <p className="text-2xl font-bold text-green-800 dark:text-green-200 mb-2">pH + pOH = 14</p>
                <p className="text-sm text-green-700 dark:text-green-300">At 25°C</p>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/30 rounded-lg p-6 border-2 border-orange-500">
                <h3 className="text-lg font-bold text-orange-900 dark:text-orange-100 mb-3">Find pH from pOH</h3>
                <p className="text-2xl font-bold text-orange-800 dark:text-orange-200 mb-2">pH = 14 - pOH</p>
                <p className="text-sm text-orange-700 dark:text-orange-300">Quick conversion</p>
              </div>
            </div>
          </section>

          {/* Example */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Step-by-Step Example</h2>
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Problem: What is the pH of a solution with [H⁺] = 1.0 × 10⁻³ M?
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-2">Step 1: Write the formula</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    pH = -log[H⁺]
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 2: Substitute the value</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    pH = -log(1.0 × 10⁻³)
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 3: Calculate</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    pH = -(-3) = 3
                  </p>
                </div>

                <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg border-l-4 border-green-500">
                  <p className="font-bold text-green-900 dark:text-green-100">
                    Answer: pH = 3 (acidic solution)
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Common Mistakes</h2>
            <div className="space-y-4">
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Forgetting the negative sign</h3>
                <p className="text-red-800 dark:text-red-200">
                  It's -log[H⁺], not just log[H⁺]. The negative makes pH values positive.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Using natural log (ln) instead of log</h3>
                <p className="text-red-800 dark:text-red-200">
                  pH uses log base 10, not ln (natural log). Make sure your calculator is in log mode.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Confusing acidic and basic</h3>
                <p className="text-red-800 dark:text-red-200">
                  Lower pH = more acidic. Higher pH = more basic. pH 7 is neutral.
                </p>
              </div>
            </div>
          </section>

          {/* Related Calculators */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Related Calculators</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/atomic-structure-calculators/ph-calculator" className="block p-6 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">pH Calculator</h3>
                <p>Calculate pH from [H⁺] or vice versa</p>
              </Link>

              <Link href="/atomic-structure-calculators/henderson-hasselbalch-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Henderson-Hasselbalch</h3>
                <p className="text-gray-600 dark:text-gray-400">Calculate buffer pH</p>
              </Link>

              <Link href="/acid-base-calculators/titration-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Titration Calculator</h3>
                <p className="text-gray-600 dark:text-gray-400">pH changes during titration</p>
              </Link>

              <Link href="/acid-base-calculators/buffer-capacity-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Buffer Capacity</h3>
                <p className="text-gray-600 dark:text-gray-400">Measure pH resistance</p>
              </Link>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What is the pH formula?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  pH = -log[H⁺], where [H⁺] is the hydrogen ion concentration in mol/L. It measures acidity on a 0-14 scale.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Why is the pH scale 0 to 14?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  At 25°C, water's ion product is 10⁻¹⁴. Since pH + pOH = 14, the practical range is 0-14, though values outside this range exist for very strong acids/bases.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">How do I calculate pH without a calculator?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  For powers of 10: If [H⁺] = 10⁻ⁿ, then pH = n. Example: [H⁺] = 10⁻⁵ → pH = 5.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What is the difference between pH and pOH?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  pH measures [H⁺] while pOH measures [OH⁻]. They're related: pH + pOH = 14 at 25°C.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Why is pH 7 neutral?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Pure water has [H⁺] = [OH⁻] = 10⁻⁷ M at 25°C, giving pH = -log(10⁻⁷) = 7.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-between">
              <Link href="/chemistry-formulas" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                ← Back to All Formulas
              </Link>
              <Link href="/chemistry-formulas/henderson-hasselbalch-equation" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                Next: Henderson-Hasselbalch →
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
