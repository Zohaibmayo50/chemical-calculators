import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Mole Fraction Formula | χ = n / n_total | Dimensionless Concentration',
  description: 'Master the mole fraction formula (χ = n_i / n_total) for calculating dimensionless concentrations. Includes examples and Raoult\'s Law applications.',
  keywords: 'mole fraction, chi, dimensionless concentration, partial pressure, raoults law, vapor pressure',
};

export default function MoleFractionFormulaPage() {
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
            <span className="text-gray-600 dark:text-gray-400">Mole Fraction Formula</span>
          </nav>

          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Mole Fraction Formula
          </h1>

          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            <strong>Mole fraction</strong> (χ, Greek letter chi) expresses the ratio of moles of one component to total moles in a mixture. 
            It's a dimensionless concentration unit essential for Raoult's Law, Dalton's Law, and colligative properties.
          </p>

          {/* Formula Block */}
          <div className="my-12 p-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">Mole Fraction Formula</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center">
              <p className="text-5xl font-bold text-gray-900 dark:text-white mb-2">
                χ<sub>i</sub> = n<sub>i</sub> / n<sub>total</sub>
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg mt-4">
                Mole fraction of component i = moles of i / total moles
              </p>
            </div>
          </div>

          {/* Key Properties */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-4">
                Key Properties of Mole Fraction
              </h2>
              <div className="space-y-4 text-indigo-800 dark:text-indigo-200">
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Dimensionless:</strong> No units! Pure number between 0 and 1</li>
                  <li><strong>Sum equals 1:</strong> χ₁ + χ₂ + χ₃ + ... = 1.00</li>
                  <li><strong>Independent of temperature:</strong> Unlike molarity, mole fraction doesn't change with temperature</li>
                  <li><strong>Symbol:</strong> χ (chi) or X, with subscript for component</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Variable Definitions */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Variable Definitions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">χ<sub>i</sub> = Mole Fraction of Component i</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> Dimensionless (no units)
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Range: 0 to 1 (or 0% to 100%)
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  💡 Pure substance: χ = 1.00
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">n<sub>i</sub> = Moles of Component i</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> mol
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Number of moles of the specific component
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">n<sub>total</sub> = Total Moles</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Formula:</strong> n<sub>total</sub> = n₁ + n₂ + n₃ + ...
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Sum of moles of all components in the mixture
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  For binary solution: n<sub>total</sub> = n<sub>solute</sub> + n<sub>solvent</sub>
                </p>
              </div>
            </div>
          </section>

          {/* Binary Mixture Formulas */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Binary Mixture (Two Components)</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-6">
                <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Component A:</h3>
                <p className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-3">
                  χ<sub>A</sub> = n<sub>A</sub> / (n<sub>A</sub> + n<sub>B</sub>)
                </p>
              </div>

              <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-6">
                <h3 className="font-bold text-purple-900 dark:text-purple-100 mb-3">Component B:</h3>
                <p className="text-2xl font-bold text-purple-800 dark:text-purple-200 mb-3">
                  χ<sub>B</sub> = n<sub>B</sub> / (n<sub>A</sub> + n<sub>B</sub>)
                </p>
              </div>

              <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-6 md:col-span-2">
                <h3 className="font-bold text-green-900 dark:text-green-100 mb-3">Sum Property:</h3>
                <p className="text-3xl font-bold text-green-800 dark:text-green-200">
                  χ<sub>A</sub> + χ<sub>B</sub> = 1.00
                </p>
                <p className="text-sm mt-2">
                  Therefore: χ<sub>B</sub> = 1 - χ<sub>A</sub>
                </p>
              </div>
            </div>
          </section>

          {/* Example */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Step-by-Step Example</h2>
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Problem: A solution contains 2.0 mol ethanol and 8.0 mol water. Calculate the mole fractions of each.
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-2">Given:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>n<sub>ethanol</sub> = 2.0 mol</li>
                    <li>n<sub>water</sub> = 8.0 mol</li>
                    <li>Find: χ<sub>ethanol</sub> and χ<sub>water</sub></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 1: Calculate total moles</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    n<sub>total</sub> = n<sub>ethanol</sub> + n<sub>water</sub><br />
                    n<sub>total</sub> = 2.0 mol + 8.0 mol = 10.0 mol
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 2: Calculate χ<sub>ethanol</sub></h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    χ<sub>ethanol</sub> = n<sub>ethanol</sub> / n<sub>total</sub><br />
                    χ<sub>ethanol</sub> = 2.0 mol / 10.0 mol = 0.20
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 3: Calculate χ<sub>water</sub></h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    χ<sub>water</sub> = n<sub>water</sub> / n<sub>total</sub><br />
                    χ<sub>water</sub> = 8.0 mol / 10.0 mol = 0.80
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 4: Verify sum = 1</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    χ<sub>ethanol</sub> + χ<sub>water</sub> = 0.20 + 0.80 = 1.00 ✓
                  </p>
                </div>

                <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg">
                  <p className="font-bold text-green-900 dark:text-green-100">
                    Answers: χ<sub>ethanol</sub> = 0.20 (or 20%), χ<sub>water</sub> = 0.80 (or 80%)
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Applications */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Applications of Mole Fraction</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-6">
                <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-3">📊 Dalton's Law</h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm mb-2">
                  Partial pressure: P<sub>i</sub> = χ<sub>i</sub> × P<sub>total</sub>
                </p>
                <p className="text-xs text-blue-700 dark:text-blue-300">
                  Mole fraction determines each gas's contribution to total pressure
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-6">
                <h3 className="font-bold text-purple-900 dark:text-purple-100 mb-3">💧 Raoult's Law</h3>
                <p className="text-purple-800 dark:text-purple-200 text-sm mb-2">
                  Vapor pressure: P = χ<sub>solvent</sub> × P°
                </p>
                <p className="text-xs text-purple-700 dark:text-purple-300">
                  Vapor pressure lowering depends on solvent mole fraction
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-6">
                <h3 className="font-bold text-green-900 dark:text-green-100 mb-3">🧪 Colligative Properties</h3>
                <p className="text-green-800 dark:text-green-200 text-sm">
                  ΔT<sub>f</sub> = K<sub>f</sub> × m × i, where mole fraction relates to molality
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg p-6">
                <h3 className="font-bold text-orange-900 dark:text-orange-100 mb-3">🔬 Phase Diagrams</h3>
                <p className="text-orange-800 dark:text-orange-200 text-sm">
                  Composition axis in binary phase diagrams uses mole fraction
                </p>
              </div>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Common Mistakes</h2>
            <div className="space-y-4">
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Using mass instead of moles</h3>
                <p className="text-red-800 dark:text-red-200">
                  Mole fraction uses MOLES, not grams! Must convert mass to moles using molar mass first.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Forgetting to include all components</h3>
                <p className="text-red-800 dark:text-red-200">
                  n<sub>total</sub> must include ALL components in the mixture, including the solvent!
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Mole fractions not summing to 1</h3>
                <p className="text-red-800 dark:text-red-200">
                  If χ₁ + χ₂ + ... ≠ 1.00, you made a calculation error. Always check this!
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Confusing with mass fraction</h3>
                <p className="text-red-800 dark:text-red-200">
                  Mole fraction = moles/moles. Mass fraction = mass/mass. Different concepts!
                </p>
              </div>
            </div>
          </section>

          {/* Related Calculators */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Related Calculators</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/solution-calculators/mole-fraction-calculator" className="block p-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Mole Fraction Calculator</h3>
                <p>Calculate χ from moles or masses</p>
              </Link>

              <Link href="/gas-laws-calculators/daltons-law-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Dalton's Law</h3>
                <p className="text-gray-600 dark:text-gray-400">Partial pressures from mole fractions</p>
              </Link>

              <Link href="/solution-calculators/raoults-law-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Raoult's Law</h3>
                <p className="text-gray-600 dark:text-gray-400">Vapor pressure calculations</p>
              </Link>

              <Link href="/solution-calculators/concentration-converter" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Concentration Converter</h3>
                <p className="text-gray-600 dark:text-gray-400">Convert χ to other units</p>
              </Link>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What is mole fraction?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  χ = n<sub>i</sub> / n<sub>total</sub>. It's the ratio of moles of one component to total moles in a mixture. Dimensionless, always between 0 and 1.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Why is mole fraction dimensionless?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  It's moles divided by moles - the units cancel! This makes it independent of amount and temperature, unlike molarity.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">How do I convert mass to mole fraction?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  First convert each mass to moles (n = mass / molar mass), then calculate χ = n<sub>i</sub> / (n₁ + n₂ + ...).
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Can mole fraction be expressed as a percent?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Yes! Multiply by 100. χ = 0.25 means 25 mol% (or 25 mole percent). Both forms are used.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">When should I use mole fraction vs molarity?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Use mole fraction for: gas mixtures, vapor pressure, colligative properties. Use molarity for: aqueous solutions, reaction stoichiometry, titrations.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-between">
              <Link href="/chemistry-formulas" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                ← Back to All Formulas
              </Link>
              <Link href="/chemistry-formulas/empirical-formula" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                Next: Empirical Formula →
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
