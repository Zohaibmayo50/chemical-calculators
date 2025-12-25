import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Combustion Analysis Formula | Empirical Formula from CxHyOz',
  description: 'Determine empirical formulas from combustion analysis data. Calculate C, H, O composition from CO₂ and H₂O masses.',
  keywords: ['combustion analysis', 'empirical formula', 'hydrocarbon combustion', 'elemental analysis', 'CO2 H2O', 'CHO composition']
};

export default function CombustionFormulaPage() {
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
            <span className="text-gray-900 dark:text-white font-medium">Combustion Analysis</span>
          </nav>
        </div>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
            <h1 className="text-5xl font-bold mb-4 text-center">Combustion Analysis Formula</h1>
            <p className="text-xl text-center text-red-100">
              Determine empirical formula from combustion products CO₂ and H₂O
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-l-4 border-indigo-500">
            <h2 className="text-3xl font-bold mb-6">Combustion Reactions</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/30 dark:to-orange-900/30 rounded-xl p-8">
                <h3 className="text-xl font-bold text-red-900 dark:text-red-300 mb-4">General Combustion</h3>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6">
                  <p className="text-2xl font-mono font-bold text-red-900 dark:text-red-300 text-center mb-4">
                    CₓHᵧOᵤ + O₂ → xCO₂ + (y/2)H₂O
                  </p>
                  <p className="text-sm text-center text-gray-600 dark:text-gray-400">All C → CO₂, all H → H₂O</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/30 dark:to-amber-900/30 rounded-xl p-8">
                <h3 className="text-xl font-bold text-orange-900 dark:text-orange-300 mb-4">Key Calculation Steps</h3>
                <div className="space-y-4">
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
                    <p className="font-bold text-orange-900 dark:text-orange-300 mb-2">1. Mass of Carbon from CO₂</p>
                    <p className="font-mono text-center">m(C) = m(CO₂) × (12.01/44.01)</p>
                  </div>
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
                    <p className="font-bold text-orange-900 dark:text-orange-300 mb-2">2. Mass of Hydrogen from H₂O</p>
                    <p className="font-mono text-center">m(H) = m(H₂O) × (2.02/18.02)</p>
                  </div>
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
                    <p className="font-bold text-orange-900 dark:text-orange-300 mb-2">3. Mass of Oxygen (by difference)</p>
                    <p className="font-mono text-center">m(O) = m(sample) - m(C) - m(H)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Molar Mass Ratios</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-red-900 dark:text-red-300 mb-2">CO₂ → C</h3>
                <p className="text-gray-700 dark:text-gray-300">Molar mass: 44.01 g/mol</p>
                <p className="text-sm font-mono mt-2">12.01 g C per 44.01 g CO₂</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Ratio: 12.01/44.01 = 0.2729</p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-orange-900 dark:text-orange-300 mb-2">H₂O → H</h3>
                <p className="text-gray-700 dark:text-gray-300">Molar mass: 18.02 g/mol</p>
                <p className="text-sm font-mono mt-2">2.02 g H per 18.02 g H₂O</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Ratio: 2.02/18.02 = 0.1121</p>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-amber-900 dark:text-amber-300 mb-2">Oxygen</h3>
                <p className="text-gray-700 dark:text-gray-300">Atomic mass: 16.00 g/mol</p>
                <p className="text-sm font-mono mt-2">By difference</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Not from combustion products</p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Worked Examples</h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-900 dark:text-red-300 mb-4">Example 1: Hydrocarbon (C and H only)</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> Combustion of 1.000 g hydrocarbon produces 3.067 g CO₂ and 1.254 g H₂O. Find empirical formula.</p>
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6"><strong>Step 1:</strong> Mass of C from CO₂</p>
                  <p className="ml-12">m(C) = 3.067 × (12.01/44.01) = 0.8369 g</p>
                  <p className="ml-6"><strong>Step 2:</strong> Mass of H from H₂O</p>
                  <p className="ml-12">m(H) = 1.254 × (2.02/18.02) = 0.1406 g</p>
                  <p className="ml-6"><strong>Step 3:</strong> Check: 0.8369 + 0.1406 = 0.9775 ≈ 1.000 ✓</p>
                  <p className="ml-6"><strong>Step 4:</strong> Convert to moles</p>
                  <p className="ml-12">n(C) = 0.8369/12.01 = 0.06969 mol</p>
                  <p className="ml-12">n(H) = 0.1406/1.008 = 0.1395 mol</p>
                  <p className="ml-6"><strong>Step 5:</strong> Find simplest ratio (divide by smallest)</p>
                  <p className="ml-12">C: 0.06969/0.06969 = 1</p>
                  <p className="ml-12">H: 0.1395/0.06969 = 2.00</p>
                  <p className="ml-6 font-bold text-green-600 text-xl mt-4">Empirical Formula: CH₂</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">Example 2: Compound with Oxygen</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> 2.000 g of CₓHᵧOᵤ produces 2.933 g CO₂ and 1.800 g H₂O. Find empirical formula.</p>
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">m(C) = 2.933 × (12.01/44.01) = 0.8004 g</p>
                  <p className="ml-6">m(H) = 1.800 × (2.02/18.02) = 0.2018 g</p>
                  <p className="ml-6">m(O) = 2.000 - 0.8004 - 0.2018 = 0.9978 g</p>
                  <p className="ml-6 mt-4">n(C) = 0.8004/12.01 = 0.06665 mol</p>
                  <p className="ml-6">n(H) = 0.2018/1.008 = 0.2002 mol</p>
                  <p className="ml-6">n(O) = 0.9978/16.00 = 0.06236 mol</p>
                  <p className="ml-6 mt-4">Divide by 0.06236 (smallest):</p>
                  <p className="ml-12">C: 0.06665/0.06236 = 1.07 ≈ 1</p>
                  <p className="ml-12">H: 0.2002/0.06236 = 3.21 ≈ 3</p>
                  <p className="ml-12">O: 0.06236/0.06236 = 1</p>
                  <p className="ml-6 font-bold text-green-600 text-xl mt-4">Empirical Formula: CH₃O</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-4">Example 3: Molecular Formula (with Molar Mass)</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> Empirical formula is CH₂, molar mass is 84 g/mol. Find molecular formula.</p>
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">Empirical formula mass = 12.01 + 2(1.008) = 14.03 g/mol</p>
                  <p className="ml-6">n = 84/14.03 = 5.99 ≈ 6</p>
                  <p className="ml-6 font-bold text-green-600 text-xl mt-4">Molecular Formula: C₆H₁₂</p>
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
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Using Entire CO₂ Mass as Carbon</h3>
                  <p className="text-gray-700 dark:text-gray-300">Must multiply by 12.01/44.01 to get just carbon mass</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Forgetting Oxygen by Difference</h3>
                  <p className="text-gray-700 dark:text-gray-300">Oxygen in compound ≠ oxygen in products (some O₂ added in combustion)</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4">
                <span className="text-2xl">💡</span>
                <div>
                  <h3 className="font-bold text-yellow-900 dark:text-yellow-300 mb-2">Empirical vs Molecular</h3>
                  <p className="text-gray-700 dark:text-gray-300">Combustion gives empirical formula. Need molar mass to find molecular formula.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4">
                <span className="text-2xl">💡</span>
                <div>
                  <h3 className="font-bold text-yellow-900 dark:text-yellow-300 mb-2">Rounding Ratios</h3>
                  <p className="text-gray-700 dark:text-gray-300">If ratio is 1.33, multiply all by 3. If 1.5, multiply by 2. If 1.25, multiply by 4.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Related Tools</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/stoichiometry-calculators/combustion-calculator" className="block p-6 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Combustion Calculator</h3>
                <p className="text-red-100">Automated empirical formula</p>
              </Link>
              <Link href="/chemistry-formulas/empirical-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Empirical Formula</h3>
                <p className="text-gray-600 dark:text-gray-400">From percent composition</p>
              </Link>
              <Link href="/stoichiometry-calculators" className="block p-6 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">All Stoichiometry Calculators</h3>
                <p className="text-white/90">Explore all stoichiometry tools</p>
              </Link>
              <Link href="/mole-vs-molar-mass" className="block p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-700 shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-2">Mole vs Molar Mass</h3>
                <p className="text-gray-600 dark:text-gray-400">Understand the difference</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
