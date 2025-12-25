import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Stoichiometry Formula | Mole Ratios & Mass Calculations',
  description: 'Master stoichiometric calculations using balanced equations. Calculate moles, mass, and limiting reagents from chemical reactions.',
  keywords: ['stoichiometry', 'mole ratio', 'balanced equation', 'chemical calculations', 'mass to mole', 'limiting reagent', 'theoretical yield']
};

export default function StoichiometryFormulaPage() {
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
            <span className="text-gray-900 dark:text-white font-medium">Stoichiometry</span>
          </nav>
        </div>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 rounded-3xl p-12 text-white shadow-2xl">
            <h1 className="text-5xl font-bold mb-4 text-center">Stoichiometry Formula</h1>
            <p className="text-xl text-center text-emerald-100">
              Quantitative relationships between reactants and products in chemical reactions
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-l-4 border-emerald-500">
            <h2 className="text-3xl font-bold mb-6">Core Stoichiometric Relationships</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-xl p-8">
                <h3 className="text-xl font-bold text-emerald-900 dark:text-emerald-300 mb-4">Mole Ratio from Balanced Equation</h3>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6">
                  <p className="text-2xl font-mono font-bold text-emerald-900 dark:text-emerald-300 text-center mb-4">
                    aA + bB → cC + dD
                  </p>
                  <p className="text-lg text-center text-gray-600 dark:text-gray-400">
                    n(A)/a = n(B)/b = n(C)/c = n(D)/d
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/30 dark:to-cyan-900/30 rounded-xl p-8">
                <h3 className="text-xl font-bold text-teal-900 dark:text-teal-300 mb-4">Mass to Mole Conversion</h3>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center">
                  <p className="text-3xl font-mono font-bold text-teal-900 dark:text-teal-300">n = m / M</p>
                  <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">moles = mass / molar mass</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/30 dark:to-blue-900/30 rounded-xl p-8">
                <h3 className="text-xl font-bold text-cyan-900 dark:text-cyan-300 mb-4">General Conversion Pathway</h3>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6">
                  <p className="text-center text-gray-700 dark:text-gray-300 font-mono text-sm">
                    mass A → moles A → moles B → mass B
                  </p>
                  <p className="text-center text-gray-600 dark:text-gray-400 text-xs mt-2">
                    (÷M_A) → (×ratio) → (×M_B)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Step-by-Step Process</h2>
            
            <div className="space-y-4">
              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-bold text-emerald-900 dark:text-emerald-300 mb-2">Balance the Chemical Equation</h3>
                    <p className="text-gray-700 dark:text-gray-300">Ensure equal atoms on both sides</p>
                  </div>
                </div>
              </div>

              <div className="bg-teal-50 dark:bg-teal-900/20 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-teal-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-bold text-teal-900 dark:text-teal-300 mb-2">Convert Given Mass to Moles</h3>
                    <p className="text-gray-700 dark:text-gray-300">Use molar mass: n = m/M</p>
                  </div>
                </div>
              </div>

              <div className="bg-cyan-50 dark:bg-cyan-900/20 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-bold text-cyan-900 dark:text-cyan-300 mb-2">Apply Mole Ratio</h3>
                    <p className="text-gray-700 dark:text-gray-300">Use coefficients from balanced equation</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <div>
                    <h3 className="font-bold text-blue-900 dark:text-blue-300 mb-2">Convert Back to Mass (if needed)</h3>
                    <p className="text-gray-700 dark:text-gray-300">Multiply by molar mass: m = n × M</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Worked Examples</h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-emerald-900 dark:text-emerald-300 mb-4">Example 1: Mass-to-Mass Calculation</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> How many grams of H₂O form from 10.0 g H₂?</p>
                  <p className="font-mono bg-white dark:bg-gray-700 p-2 rounded">2H₂ + O₂ → 2H₂O</p>
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6"><strong>Step 1:</strong> Convert H₂ to moles</p>
                  <p className="ml-12">n(H₂) = 10.0 g / 2.02 g/mol = 4.95 mol</p>
                  <p className="ml-6"><strong>Step 2:</strong> Apply mole ratio (2:2 = 1:1)</p>
                  <p className="ml-12">n(H₂O) = 4.95 mol × (2/2) = 4.95 mol</p>
                  <p className="ml-6"><strong>Step 3:</strong> Convert to mass</p>
                  <p className="ml-12">m(H₂O) = 4.95 mol × 18.02 g/mol</p>
                  <p className="ml-12 font-bold text-green-600">m(H₂O) = 89.2 g</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">Example 2: Finding Reactant Mass Needed</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> How much N₂ needed to produce 34.0 g NH₃?</p>
                  <p className="font-mono bg-white dark:bg-gray-700 p-2 rounded">N₂ + 3H₂ → 2NH₃</p>
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">n(NH₃) = 34.0 / 17.03 = 2.00 mol</p>
                  <p className="ml-6">n(N₂) = 2.00 × (1/2) = 1.00 mol</p>
                  <p className="ml-6">m(N₂) = 1.00 × 28.02</p>
                  <p className="ml-6 font-bold text-green-600">m(N₂) = 28.0 g</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-4">Example 3: Combustion Reaction</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> How much O₂ needed to burn 8.00 g CH₄?</p>
                  <p className="font-mono bg-white dark:bg-gray-700 p-2 rounded">CH₄ + 2O₂ → CO₂ + 2H₂O</p>
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">n(CH₄) = 8.00 / 16.04 = 0.499 mol</p>
                  <p className="ml-6">n(O₂) = 0.499 × (2/1) = 0.998 mol</p>
                  <p className="ml-6">m(O₂) = 0.998 × 32.00</p>
                  <p className="ml-6 font-bold text-green-600">m(O₂) = 31.9 g</p>
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
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Unbalanced Equations</h3>
                  <p className="text-gray-700 dark:text-gray-300">Must balance equation first - mole ratios only work with balanced equations</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Wrong Molar Mass</h3>
                  <p className="text-gray-700 dark:text-gray-300">Must account for subscripts: H₂O is 18.02 g/mol, not 17.01</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Inverted Mole Ratio</h3>
                  <p className="text-gray-700 dark:text-gray-300">2H₂ + O₂ → 2H₂O: ratio H₂:O₂ is 2:1, not 1:2</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4">
                <span className="text-2xl">💡</span>
                <div>
                  <h3 className="font-bold text-yellow-900 dark:text-yellow-300 mb-2">Limiting Reagent Scenarios</h3>
                  <p className="text-gray-700 dark:text-gray-300">When both reactants given, identify limiting reagent first</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Related Tools</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/stoichiometry-calculators/stoichiometry-calculator" className="block p-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Stoichiometry Calculator</h3>
                <p className="text-emerald-100">Automated mass and mole calculations</p>
              </Link>
              <Link href="/stoichiometry-calculators/limiting-reactant-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Limiting Reactant</h3>
                <p className="text-gray-600 dark:text-gray-400">Find limiting reagent</p>
              </Link>
              <Link href="/chemistry-formulas/molecular-weight-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Molecular Weight</h3>
                <p className="text-gray-600 dark:text-gray-400">Calculate molar mass</p>
              </Link>
              <Link href="/stoichiometry-calculators/percent-yield-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
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
