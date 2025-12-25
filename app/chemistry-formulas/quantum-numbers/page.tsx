import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Quantum Numbers Formula | n, l, ml, ms Electron Configuration',
  description: 'Learn quantum numbers: principal (n), angular momentum (l), magnetic (ml), and spin (ms). Understand electron configuration and orbital designation.',
  keywords: ['quantum numbers', 'principal quantum number', 'angular momentum', 'magnetic quantum number', 'spin quantum number', 'electron orbitals', 'quantum mechanics']
};

export default function QuantumNumbersPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Breadcrumb */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <nav className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <Link href="/" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Home
            </Link>
            <span>→</span>
            <Link href="/chemistry-formulas" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Chemistry Formulas
            </Link>
            <span>→</span>
            <span className="text-gray-900 dark:text-white font-medium">Quantum Numbers</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 rounded-3xl p-12 text-white shadow-2xl">
            <h1 className="text-5xl font-bold mb-4 text-center">Quantum Numbers</h1>
            <p className="text-xl text-center text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Four quantum numbers (n, l, m<sub>l</sub>, m<sub>s</sub>) uniquely describe each electron in an atom
            </p>
          </div>
        </section>

        {/* Four Quantum Numbers */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-l-4 border-purple-500">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">The Four Quantum Numbers</h2>
            
            <div className="space-y-6">
              <div className="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-300 mb-4">1. Principal Quantum Number (n)</h3>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-4 mb-4">
                  <p className="font-mono text-lg text-center">n = 1, 2, 3, 4, ...</p>
                </div>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Determines electron shell and energy level</li>
                  <li>• Positive integers only</li>
                  <li>• Larger n → higher energy, farther from nucleus</li>
                  <li>• Corresponds to periods in periodic table</li>
                </ul>
              </div>

              <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-300 mb-4">2. Angular Momentum Quantum Number (l)</h3>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-4 mb-4">
                  <p className="font-mono text-lg text-center">l = 0, 1, 2, ... (n-1)</p>
                </div>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Determines orbital shape (subshell)</li>
                  <li>• l = 0 (s), 1 (p), 2 (d), 3 (f)</li>
                  <li>• Values from 0 to (n-1)</li>
                  <li>• Each subshell has characteristic shape</li>
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-300 mb-4">3. Magnetic Quantum Number (m<sub>l</sub>)</h3>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-4 mb-4">
                  <p className="font-mono text-lg text-center">m<sub>l</sub> = -l, ..., 0, ..., +l</p>
                </div>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Determines orbital orientation in space</li>
                  <li>• Values from -l to +l (including 0)</li>
                  <li>• Total of (2l + 1) orbitals per subshell</li>
                  <li>• Example: p has 3 orbitals (p<sub>x</sub>, p<sub>y</sub>, p<sub>z</sub>)</li>
                </ul>
              </div>

              <div className="bg-cyan-50 dark:bg-cyan-900/30 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-cyan-900 dark:text-cyan-300 mb-4">4. Spin Quantum Number (m<sub>s</sub>)</h3>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-4 mb-4">
                  <p className="font-mono text-lg text-center">m<sub>s</sub> = +½ or -½</p>
                </div>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Determines electron spin direction</li>
                  <li>• Only two values: +½ (↑) or -½ (↓)</li>
                  <li>• Pauli Exclusion Principle: no two electrons can have identical quantum numbers</li>
                  <li>• Maximum 2 electrons per orbital (opposite spins)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Quantum Number Rules */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Allowed Values & Relationships</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-purple-100 dark:bg-purple-900/30">
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Shell (n)</th>
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Subshell (l)</th>
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Designation</th>
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">m<sub>l</sub> values</th>
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Orbitals</th>
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Max e⁻</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">1</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">0</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono">1s</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">0</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">1</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">2</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700/50">
                    <td className="border border-gray-300 dark:border-gray-600 p-3" rowSpan={2}>2</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">0</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono">2s</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">0</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">1</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">2</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700/50">
                    <td className="border border-gray-300 dark:border-gray-600 p-3">1</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono">2p</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">-1, 0, +1</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">3</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">6</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3" rowSpan={3}>3</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">0</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono">3s</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">0</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">1</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">2</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">1</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono">3p</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">-1, 0, +1</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">3</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">6</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">2</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono">3d</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">-2, -1, 0, +1, +2</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">5</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">10</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Examples */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Worked Examples</h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-4">Example 1: Valid Quantum Number Set?</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Given:</strong> n=3, l=2, m<sub>l</sub>=0, m<sub>s</sub>=+½</p>
                  <p className="ml-6"><strong>Check n:</strong> n=3 ✓ (positive integer)</p>
                  <p className="ml-6"><strong>Check l:</strong> l=2, must be 0 to n-1 (0 to 2) ✓</p>
                  <p className="ml-6"><strong>Check m<sub>l</sub>:</strong> m<sub>l</sub>=0, must be -l to +l (-2 to +2) ✓</p>
                  <p className="ml-6"><strong>Check m<sub>s</sub>:</strong> m<sub>s</sub>=+½ ✓</p>
                  <p className="mt-4"><strong className="text-green-600 dark:text-green-400">Valid set! Represents 3d orbital electron</strong></p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">Example 2: Invalid Quantum Numbers</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Given:</strong> n=2, l=2, m<sub>l</sub>=-1, m<sub>s</sub>=-½</p>
                  <p className="ml-6"><strong>Check l:</strong> l=2 but n=2, so l can only be 0 or 1 ✗</p>
                  <p className="mt-4"><strong className="text-red-600 dark:text-red-400">Invalid! l cannot equal n</strong></p>
                  <p className="mt-2 text-sm italic">For n=2, maximum l=1 (2p orbital is highest)</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-4">Example 3: Electron in 4f Orbital</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Determine possible quantum numbers for 4f:</strong></p>
                  <p className="ml-6">n = 4 (fourth shell)</p>
                  <p className="ml-6">l = 3 (f orbital)</p>
                  <p className="ml-6">m<sub>l</sub> = -3, -2, -1, 0, +1, +2, +3 (7 orbitals)</p>
                  <p className="ml-6">m<sub>s</sub> = +½ or -½</p>
                  <p className="mt-4"><strong>Total electrons in 4f:</strong> 7 orbitals × 2 electrons = 14 electrons maximum</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Common Mistakes</h2>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Setting l ≥ n</h3>
                  <p className="text-gray-700 dark:text-gray-300">Remember: l can only be 0 to (n-1), never equal to or greater than n</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Wrong m<sub>l</sub> Range</h3>
                  <p className="text-gray-700 dark:text-gray-300">m<sub>l</sub> must be between -l and +l; for l=2, m<sub>l</sub> cannot be 3</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Forgetting Pauli Exclusion</h3>
                  <p className="text-gray-700 dark:text-gray-300">No two electrons can have all four identical quantum numbers</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4">
                <span className="text-2xl">💡</span>
                <div>
                  <h3 className="font-bold text-yellow-900 dark:text-yellow-300 mb-2">Remember Letter Designations</h3>
                  <p className="text-gray-700 dark:text-gray-300">l = 0→s, 1→p, 2→d, 3→f, 4→g, 5→h (sharp, principal, diffuse, fundamental)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Calculators */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Related Tools</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/quantum-calculators/quantum-numbers-calculator" className="block p-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Quantum Numbers Calculator</h3>
                <p className="text-purple-100">Validate quantum number sets</p>
              </Link>

              <Link href="/chemistry-formulas/electron-configuration" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Electron Configuration</h3>
                <p className="text-gray-600 dark:text-gray-400">Apply quantum numbers to atoms</p>
              </Link>

              <Link href="/chemistry-formulas/bohr-model" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Bohr Model</h3>
                <p className="text-gray-600 dark:text-gray-400">Energy levels and shells</p>
              </Link>

              <Link href="/atomic-structure-calculators" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Atomic Structure Tools</h3>
                <p className="text-gray-600 dark:text-gray-400">All atomic calculators</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
