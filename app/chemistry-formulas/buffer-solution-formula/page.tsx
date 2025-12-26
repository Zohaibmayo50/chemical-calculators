import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Buffer Solution Formula | pH Calculation & Buffer Capacity',
  description: 'Calculate buffer pH using Henderson-Hasselbalch equation. Understand buffer capacity, composition, and resistance to pH change.',
  alternates: {
    canonical: 'https://chemicalcalculators.com/chemistry-formulas/buffer-solution-formula',
  },
  keywords: ['buffer solution', 'buffer capacity', 'henderson hasselbalch', 'weak acid buffer', 'conjugate base', 'pH buffer', 'buffer system']
};

export default function BufferSolutionFormulaPage() {
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
            <span className="text-gray-900 dark:text-white font-medium">Buffer Solution</span>
          </nav>
        </div>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
            <h1 className="text-5xl font-bold mb-4 text-center">Buffer Solution Formula</h1>
            <p className="text-xl text-center text-teal-100">
              Solutions that resist pH changes when small amounts of acid or base are added
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-l-4 border-indigo-500">
            <h2 className="text-3xl font-bold mb-6">Henderson-Hasselbalch Equation</h2>
            
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/30 dark:to-cyan-900/30 rounded-xl p-8 mb-6">
              <div className="text-center">
                <div className="inline-block bg-white dark:bg-gray-700 rounded-lg p-6">
                  <p className="text-4xl font-mono font-bold text-teal-900 dark:text-teal-300 mb-4">pH = pKₐ + log([A⁻]/[HA])</p>
                  <p className="text-xl text-gray-600 dark:text-gray-400">For acidic buffers</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/30 dark:to-blue-900/30 rounded-xl p-8">
              <div className="text-center">
                <div className="inline-block bg-white dark:bg-gray-700 rounded-lg p-6">
                  <p className="text-4xl font-mono font-bold text-cyan-900 dark:text-cyan-300 mb-4">pOH = pKբ + log([BH⁺]/[B])</p>
                  <p className="text-xl text-gray-600 dark:text-gray-400">For basic buffers</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Buffer Components</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-teal-50 dark:bg-teal-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-teal-900 dark:text-teal-300 mb-2">Acidic Buffer</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">Weak acid + conjugate base (salt)</p>
                <p className="text-sm font-mono">Example: CH₃COOH + CH₃COONa</p>
              </div>
              <div className="bg-cyan-50 dark:bg-cyan-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-cyan-900 dark:text-cyan-300 mb-2">Basic Buffer</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">Weak base + conjugate acid (salt)</p>
                <p className="text-sm font-mono">Example: NH₃ + NH₄Cl</p>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">Buffer Capacity Formula</h3>
              <div className="bg-white dark:bg-gray-700 rounded-lg p-4 font-mono text-center mb-4">
                β = Δn(acid or base) / ΔpH
              </div>
              <p className="text-gray-700 dark:text-gray-300">Higher capacity = better resistance to pH change</p>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Examples</h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-teal-900 dark:text-teal-300 mb-4">Example 1: Acetate Buffer pH</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Given:</strong> 0.10 M CH₃COOH and 0.15 M CH₃COONa (pKₐ = 4.76)</p>
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">pH = pKₐ + log([A⁻]/[HA])</p>
                  <p className="ml-6">pH = 4.76 + log(0.15/0.10)</p>
                  <p className="ml-6">pH = 4.76 + log(1.5)</p>
                  <p className="ml-6">pH = 4.76 + 0.18</p>
                  <p className="ml-6 font-bold text-green-600">pH = 4.94</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">Example 2: Ammonia Buffer</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Given:</strong> 0.20 M NH₃ and 0.20 M NH₄Cl (pKբ = 4.75)</p>
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">pOH = pKբ + log([BH⁺]/[B])</p>
                  <p className="ml-6">pOH = 4.75 + log(0.20/0.20)</p>
                  <p className="ml-6">pOH = 4.75 + 0 = 4.75</p>
                  <p className="ml-6">pH = 14 - 4.75</p>
                  <p className="ml-6 font-bold text-green-600">pH = 9.25</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Buffer Effectiveness</h2>
            
            <div className="space-y-4">
              <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4">
                <h3 className="font-bold text-green-900 dark:text-green-300 mb-2">✓ Best When [A⁻]/[HA] = 1</h3>
                <p className="text-gray-700 dark:text-gray-300">pH = pKₐ (maximum buffer capacity)</p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4">
                <h3 className="font-bold text-green-900 dark:text-green-300 mb-2">✓ Effective Range: pH = pKₐ ± 1</h3>
                <p className="text-gray-700 dark:text-gray-300">Ratio of [A⁻]/[HA] between 10:1 and 1:10</p>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4">
                <h3 className="font-bold text-yellow-900 dark:text-yellow-300 mb-2">⚠️ Higher Concentrations = Higher Capacity</h3>
                <p className="text-gray-700 dark:text-gray-300">More concentrated buffers resist pH change better</p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Related Tools</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/acid-base-calculators/buffer-solution-calculator" className="block p-6 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Buffer Calculator</h3>
                <p className="text-teal-100">Calculate buffer pH</p>
              </Link>
              <Link href="/chemistry-formulas/henderson-hasselbalch-equation" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Henderson-Hasselbalch</h3>
                <p className="text-gray-600 dark:text-gray-400">Detailed equation explanation</p>
              </Link>
              <Link href="/acid-base-calculators/buffer-capacity-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Buffer Capacity</h3>
                <p className="text-gray-600 dark:text-gray-400">Calculate resistance to pH change</p>
              </Link>
              <Link href="/chemistry-formulas/ph-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">pH Formula</h3>
                <p className="text-gray-600 dark:text-gray-400">Basic pH calculations</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
