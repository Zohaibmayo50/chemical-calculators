import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Dilution Formula | M₁V₁ = M₂V₂ | Calculate Solution Dilutions',
  description: 'Learn the dilution formula (M₁V₁ = M₂V₂) for preparing dilute solutions. Includes step-by-step examples and calculator links.',
  keywords: 'dilution formula, M1V1 = M2V2, dilution equation, solution preparation, chemistry dilution',
};

export default function DilutionFormulaPage() {
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
            <span className="text-gray-600 dark:text-gray-400">Dilution Formula</span>
          </nav>

          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Dilution Formula
          </h1>

          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            The <strong>dilution formula</strong> (M₁V₁ = M₂V₂) is used to calculate how to prepare a less concentrated 
            solution from a more concentrated stock solution. It's one of the most practical formulas in chemistry labs.
          </p>

          {/* Formula Block */}
          <div className="my-12 p-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">The Dilution Formula</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center">
              <p className="text-5xl font-bold text-gray-900 dark:text-white mb-2">
                M₁V₁ = M₂V₂
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Moles before = Moles after
              </p>
            </div>
          </div>

          {/* Variable Definitions */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Variable Definitions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">M₁ = Initial Molarity</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> M or mol/L
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  The concentration of the concentrated stock solution
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">V₁ = Initial Volume</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> L or mL (must match V₂)
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Volume of concentrated solution needed
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">M₂ = Final Molarity</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> M or mol/L
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  The desired concentration after dilution
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">V₂ = Final Volume</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> L or mL (must match V₁)
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Total volume of diluted solution
                </p>
              </div>
            </div>
          </section>

          {/* Rearranged Forms */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Rearranged Forms</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-3">Find V₁ (volume needed)</h3>
                <p className="text-2xl font-bold mb-2">V₁ = (M₂ × V₂) / M₁</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Most common use case</p>
              </div>

              <div className="bg-cyan-50 dark:bg-cyan-900/30 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-3">Find M₂ (final concentration)</h3>
                <p className="text-2xl font-bold mb-2">M₂ = (M₁ × V₁) / V₂</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Check dilution result</p>
              </div>
            </div>
          </section>

          {/* Example */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Step-by-Step Example</h2>
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Problem: How much 6.0 M HCl do you need to make 500 mL of 1.5 M HCl?
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-2">Given:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>M₁ = 6.0 M (concentrated)</li>
                    <li>M₂ = 1.5 M (diluted)</li>
                    <li>V₂ = 500 mL (final volume)</li>
                    <li>V₁ = ? (volume needed)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Solution:</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded mb-2">
                    M₁V₁ = M₂V₂
                  </p>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded mb-2">
                    (6.0 M)(V₁) = (1.5 M)(500 mL)
                  </p>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded mb-2">
                    V₁ = (1.5 M × 500 mL) / 6.0 M = 125 mL
                  </p>
                </div>

                <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg">
                  <p className="font-bold">
                    Answer: Take 125 mL of 6.0 M HCl and add water to make 500 mL total
                  </p>
                  <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">
                    ⚠️ Always add acid to water, never water to acid!
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
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Mixing volume units</h3>
                <p className="text-red-800 dark:text-red-200">
                  V₁ and V₂ must be in the same units! Use both in mL or both in L.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Adding V₁ volume of water instead of diluting to V₂</h3>
                <p className="text-red-800 dark:text-red-200">
                  V₂ is the TOTAL final volume, not the amount of water to add. Add water until you reach V₂.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Confusing M₁ and M₂</h3>
                <p className="text-red-800 dark:text-red-200">
                  M₁ is always the more concentrated solution. M₂ is always less concentrated.
                </p>
              </div>
            </div>
          </section>

          {/* Related Calculators */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Related Calculators</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/concentration-and-solution-calculators/dilution-calculator" className="block p-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Dilution Calculator</h3>
                <p>Calculate M₁V₁ = M₂V₂ instantly</p>
              </Link>

              <Link href="/concentration-and-solution-calculators/molarity-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Molarity Calculator</h3>
                <p className="text-gray-600 dark:text-gray-400">Calculate concentration before dilution</p>
              </Link>

              <Link href="/concentration-and-solution-calculators/solution-preparation-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Solution Preparation</h3>
                <p className="text-gray-600 dark:text-gray-400">Plan solution preparation steps</p>
              </Link>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What is the dilution formula?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  M₁V₁ = M₂V₂, where M₁ and V₁ are the molarity and volume of the concentrated solution, 
                  and M₂ and V₂ are the molarity and volume of the diluted solution.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Can I use mL in the dilution formula?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Yes! As long as V₁ and V₂ are in the same units. You can use mL, L, or any volume unit.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Why does the dilution formula work?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  The number of moles of solute stays constant during dilution. Since n = M × V, 
                  and n₁ = n₂, then M₁V₁ = M₂V₂.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-between">
              <Link href="/chemistry-formulas" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                ← Back to All Formulas
              </Link>
              <Link href="/chemistry-formulas/molality-formula" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                Next Formula →
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
