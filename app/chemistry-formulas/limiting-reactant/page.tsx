import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Limiting Reactant Formula | Find Which Reactant Runs Out First',
  description: 'Master limiting reactant calculations to determine which reagent limits product formation. Includes step-by-step examples and stoichiometry calculator links.',
  keywords: 'limiting reactant, limiting reagent, excess reactant, stoichiometry, mole ratio, theoretical yield',
};

export default function LimitingReactantPage() {
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
            <span className="text-gray-600 dark:text-gray-400">Limiting Reactant</span>
          </nav>

          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Limiting Reactant Calculations
          </h1>

          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            The <strong>limiting reactant</strong> (or limiting reagent) is the reactant that runs out first in a chemical reaction, 
            determining the maximum amount of product that can form. The other reactant(s) are in excess.
          </p>

          {/* Formula Block */}
          <div className="my-12 p-8 bg-gradient-to-r from-rose-600 to-pink-600 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">Limiting Reactant Method</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8">
              <div className="space-y-4">
                <div className="text-center mb-6">
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">
                    For each reactant, calculate:
                  </p>
                </div>
                <div className="bg-rose-100 dark:bg-rose-900/30 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-rose-800 dark:text-rose-200">
                    Moles of Product = (moles reactant) × (mole ratio)
                  </p>
                </div>
                <div className="text-center mt-4">
                  <p className="text-gray-700 dark:text-gray-300 text-lg">
                    <strong>Limiting reactant</strong> = produces the LEAST product
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Concept */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-rose-900 dark:text-rose-100 mb-4">
                The Sandwich Analogy
              </h2>
              <div className="space-y-4 text-rose-800 dark:text-rose-200">
                <p className="text-lg">
                  Making sandwiches: 2 slices bread + 1 slice cheese → 1 sandwich
                </p>
                <p>
                  You have: <strong>10 slices bread</strong> and <strong>3 slices cheese</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>10 bread slices → can make 5 sandwiches</li>
                  <li>3 cheese slices → can make 3 sandwiches</li>
                  <li><strong>Cheese is limiting!</strong> You can only make 3 sandwiches</li>
                  <li>Leftover: 4 slices of bread (excess reactant)</li>
                </ul>
                <p className="font-bold text-lg mt-4">
                  Same concept applies to chemical reactions!
                </p>
              </div>
            </div>
          </section>

          {/* Step-by-Step Method */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Step-by-Step Method</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">Step 1: Write balanced equation</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Make sure coefficients are correct - they give mole ratios
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border-l-4 border-purple-500">
                <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-2">Step 2: Convert to moles</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Use n = mass / molar mass for each reactant
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-2">Step 3: Calculate product from each reactant</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  For each reactant, use stoichiometry to find how much product it could make
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  n<sub>product</sub> = n<sub>reactant</sub> × (coefficient<sub>product</sub> / coefficient<sub>reactant</sub>)
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border-l-4 border-rose-500">
                <h3 className="text-xl font-bold text-rose-600 dark:text-rose-400 mb-2">Step 4: Identify limiting reactant</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Whichever reactant produces the SMALLEST amount of product is limiting
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border-l-4 border-orange-500">
                <h3 className="text-xl font-bold text-orange-600 dark:text-orange-400 mb-2">Step 5: Use limiting reactant for final answer</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  The limiting reactant determines theoretical yield
                </p>
              </div>
            </div>
          </section>

          {/* Detailed Example */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Detailed Example</h2>
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Problem: 10.0 g Al reacts with 19.0 g O₂. Which is limiting? How much Al₂O₃ forms?
              </h3>
              <p className="text-lg mb-4 font-mono bg-white dark:bg-gray-800 p-3 rounded">
                4 Al + 3 O₂ → 2 Al₂O₃
              </p>
              <p className="mb-6">
                Molar masses: Al = 27.0 g/mol, O₂ = 32.0 g/mol, Al₂O₃ = 102.0 g/mol
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-2">Step 1: Convert to moles</h4>
                  <div className="font-mono bg-white dark:bg-gray-800 p-3 rounded space-y-2">
                    <p>n<sub>Al</sub> = 10.0 g / 27.0 g/mol = 0.370 mol Al</p>
                    <p>n<sub>O₂</sub> = 19.0 g / 32.0 g/mol = 0.594 mol O₂</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 2: Calculate Al₂O₃ from Al</h4>
                  <div className="font-mono bg-white dark:bg-gray-800 p-3 rounded space-y-2">
                    <p>Mole ratio: 2 mol Al₂O₃ / 4 mol Al = 1/2</p>
                    <p>n<sub>Al₂O₃</sub> from Al = 0.370 mol Al × (2 mol Al₂O₃ / 4 mol Al)</p>
                    <p className="font-bold text-blue-600">= 0.185 mol Al₂O₃</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 3: Calculate Al₂O₃ from O₂</h4>
                  <div className="font-mono bg-white dark:bg-gray-800 p-3 rounded space-y-2">
                    <p>Mole ratio: 2 mol Al₂O₃ / 3 mol O₂ = 2/3</p>
                    <p>n<sub>Al₂O₃</sub> from O₂ = 0.594 mol O₂ × (2 mol Al₂O₃ / 3 mol O₂)</p>
                    <p className="font-bold text-purple-600">= 0.396 mol Al₂O₃</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 4: Compare</h4>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <p className="mb-2">Al produces: 0.185 mol Al₂O₃ ← <strong className="text-rose-600">SMALLER</strong></p>
                    <p>O₂ produces: 0.396 mol Al₂O₃</p>
                  </div>
                </div>

                <div className="bg-rose-100 dark:bg-rose-900/30 p-4 rounded-lg border-l-4 border-rose-500">
                  <p className="font-bold text-rose-900 dark:text-rose-100 text-lg mb-2">
                    Al is the limiting reactant!
                  </p>
                  <p className="text-rose-800 dark:text-rose-200">
                    It produces less product, so it runs out first. O₂ is in excess.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 5: Calculate mass of product</h4>
                  <div className="font-mono bg-white dark:bg-gray-800 p-3 rounded space-y-2">
                    <p>Use the limiting reactant result:</p>
                    <p>mass<sub>Al₂O₃</sub> = 0.185 mol × 102.0 g/mol</p>
                    <p className="font-bold text-green-600 text-xl">= 18.9 g Al₂O₃</p>
                  </div>
                </div>

                <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg">
                  <p className="font-bold text-green-900 dark:text-green-100 text-lg">
                    Final Answers:
                  </p>
                  <ul className="list-disc list-inside text-green-800 dark:text-green-200 mt-2">
                    <li>Limiting reactant: Al</li>
                    <li>Excess reactant: O₂</li>
                    <li>Theoretical yield: 18.9 g Al₂O₃</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Common Mistakes</h2>
            <div className="space-y-4">
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Comparing grams instead of moles</h3>
                <p className="text-red-800 dark:text-red-200">
                  You can't just compare masses! Must convert to moles and use mole ratios from balanced equation.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Picking the reactant with fewer moles</h3>
                <p className="text-red-800 dark:text-red-200">
                  The reactant with fewer moles isn't always limiting! Must account for stoichiometry. 1 mol of a 1:10 reactant can still be in excess.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Using unbalanced equation</h3>
                <p className="text-red-800 dark:text-red-200">
                  Mole ratios come from coefficients - equation MUST be balanced first!
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Using excess reactant for final answer</h3>
                <p className="text-red-800 dark:text-red-200">
                  Always use the limiting reactant to calculate theoretical yield. The excess reactant has leftover!
                </p>
              </div>
            </div>
          </section>

          {/* Related Calculators */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Related Calculators</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/stoichiometry-calculators/limiting-reactant-calculator" className="block p-6 bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Limiting Reactant Calculator</h3>
                <p>Find limiting reactant automatically</p>
              </Link>

              <Link href="/stoichiometry-calculators/theoretical-yield-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Theoretical Yield</h3>
                <p className="text-gray-600 dark:text-gray-400">Max product from limiting reactant</p>
              </Link>

              <Link href="/stoichiometry-calculators/percent-yield-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Percent Yield</h3>
                <p className="text-gray-600 dark:text-gray-400">Actual vs theoretical yield</p>
              </Link>

              <Link href="/stoichiometry-calculators/stoichiometry-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">General Stoichiometry</h3>
                <p className="text-gray-600 dark:text-gray-400">Mole ratio calculations</p>
              </Link>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What is the limiting reactant?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  The reactant that gets completely used up first in a reaction, limiting the amount of product that can form. Other reactants are in excess.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">How do I find the limiting reactant?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Calculate how much product each reactant could make. Whichever produces the LEAST amount of product is the limiting reactant.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Why can't I just compare moles directly?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Because reactions use reactants in specific ratios! 2H₂ + O₂ → 2H₂O needs 2:1 ratio. Even if you have 10 mol H₂ and 3 mol O₂, you must check stoichiometry.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What happens to the excess reactant?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Some remains unreacted. You can calculate how much was used and subtract from the starting amount to find leftover excess.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Is limiting reactant the same as theoretical yield?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  No! Limiting reactant is a reactant. Theoretical yield is the maximum product amount, calculated FROM the limiting reactant.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-between">
              <Link href="/chemistry-formulas" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                ← Back to All Formulas
              </Link>
              <Link href="/chemistry-formulas/percent-yield-formula" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                Next: Percent Yield →
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
