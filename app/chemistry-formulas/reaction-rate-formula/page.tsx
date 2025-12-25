import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Reaction Rate Formula | Rate Law & Kinetics',
  description: 'Calculate reaction rates using rate laws. Understand rate constants, reaction orders, and concentration-time relationships.',
  keywords: ['reaction rate', 'rate law', 'rate constant', 'reaction order', 'chemical kinetics', 'concentration', 'rate equation']
};

export default function ReactionRateFormulaPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <nav className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <Link href="/">Home</Link>
            <span>→</span>
            <Link href="/chemistry-formulas">Chemistry Formulas</Link>
            <span>→</span>
            <span className="text-gray-900 dark:text-white font-medium">Reaction Rate</span>
          </nav>
        </div>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 rounded-3xl p-12 text-white shadow-2xl">
            <h1 className="text-5xl font-bold mb-4 text-center">Reaction Rate Formula</h1>
            <p className="text-xl text-center text-green-100">
              Quantifying how fast reactant concentrations change over time
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-l-4 border-green-500">
            <h2 className="text-3xl font-bold mb-6">Rate Definitions</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-xl p-8">
                <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-4">Average Rate</h3>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6">
                  <p className="text-3xl font-mono font-bold text-green-900 dark:text-green-300 text-center mb-4">
                    Rate = -Δ[A] / Δt
                  </p>
                  <p className="text-sm text-center text-gray-600 dark:text-gray-400">Change in concentration over time interval</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-xl p-8">
                <h3 className="text-xl font-bold text-emerald-900 dark:text-emerald-300 mb-4">Instantaneous Rate</h3>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center">
                  <p className="text-3xl font-mono font-bold text-emerald-900 dark:text-emerald-300 mb-4">
                    Rate = -d[A] / dt
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Rate at specific moment (tangent slope)</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/30 dark:to-cyan-900/30 rounded-xl p-8">
                <h3 className="text-xl font-bold text-teal-900 dark:text-teal-300 mb-4">For Reaction: aA + bB → cC + dD</h3>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center">
                  <p className="text-xl font-mono font-bold text-teal-900 dark:text-teal-300">
                    Rate = -(1/a)d[A]/dt = -(1/b)d[B]/dt = (1/c)d[C]/dt = (1/d)d[D]/dt
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Rate Law</h2>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-8 mb-6">
              <div className="text-center mb-6">
                <div className="inline-block bg-white dark:bg-gray-700 rounded-lg p-6">
                  <p className="text-4xl font-mono font-bold text-green-900 dark:text-green-300 mb-4">
                    Rate = k[A]ᵐ[B]ⁿ
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
                  <h4 className="font-bold text-green-900 dark:text-green-300 mb-2">k (Rate Constant)</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Temperature-dependent constant</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Units depend on overall order</p>
                </div>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
                  <h4 className="font-bold text-emerald-900 dark:text-emerald-300 mb-2">m, n (Reaction Orders)</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Determined experimentally</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Usually 0, 1, or 2</p>
                </div>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
                  <h4 className="font-bold text-teal-900 dark:text-teal-300 mb-2">Overall Order</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Sum: m + n</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Affects rate constant units</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-blue-900 dark:text-blue-300 mb-4">Rate Constant Units by Order</h3>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Zero order (0):</strong> M/s or mol/(L·s)</p>
                <p><strong>First order (1):</strong> s⁻¹ or 1/s</p>
                <p><strong>Second order (2):</strong> M⁻¹s⁻¹ or L/(mol·s)</p>
                <p><strong>Third order (3):</strong> M⁻²s⁻¹ or L²/(mol²·s)</p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Reaction Order Effects</h2>
            
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-red-900 dark:text-red-300 mb-3">Zero Order (m = 0)</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">Rate = k (independent of [A])</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Doubling [A] has NO effect on rate</p>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-900 dark:text-green-300 mb-3">First Order (m = 1)</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">Rate = k[A]</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Doubling [A] doubles the rate</p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-blue-900 dark:text-blue-300 mb-3">Second Order (m = 2)</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">Rate = k[A]²</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Doubling [A] quadruples the rate (2² = 4×)</p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Worked Examples</h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-4">Example 1: Determining Rate from Data</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> [A] changes from 0.100 M to 0.085 M in 30 seconds. Find average rate.</p>
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">Δ[A] = 0.085 - 0.100 = -0.015 M</p>
                  <p className="ml-6">Δt = 30 s</p>
                  <p className="ml-6">Rate = -Δ[A]/Δt = -(-0.015)/30</p>
                  <p className="ml-6 font-bold text-green-600">Rate = 5.0 × 10⁻⁴ M/s</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">Example 2: Using Rate Law</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> Rate = k[A]²[B], k = 0.50 M⁻²s⁻¹. Find rate when [A] = 0.20 M, [B] = 0.30 M.</p>
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">Rate = 0.50 × (0.20)² × (0.30)</p>
                  <p className="ml-6">Rate = 0.50 × 0.04 × 0.30</p>
                  <p className="ml-6 font-bold text-green-600">Rate = 6.0 × 10⁻³ M/s</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-4">Example 3: Effect of Concentration Change</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> Rate = k[A]²[B]. How does rate change if [A] triples and [B] doubles?</p>
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">Original: Rate₁ = k[A]²[B]</p>
                  <p className="ml-6">New: Rate₂ = k(3[A])²(2[B]) = k × 9[A]² × 2[B] = 18k[A]²[B]</p>
                  <p className="ml-6">Rate₂/Rate₁ = 18</p>
                  <p className="ml-6 font-bold text-green-600">Rate increases by factor of 18</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Common Mistakes</h2>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Confusing Order with Stoichiometry</h3>
                  <p className="text-gray-700 dark:text-gray-300">For 2A → B, rate law is NOT necessarily Rate = k[A]². Orders are determined experimentally!</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Wrong Sign for Reactants</h3>
                  <p className="text-gray-700 dark:text-gray-300">Rate = -Δ[A]/Δt (negative because [A] decreases). Make rate positive!</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4">
                <span className="text-2xl">💡</span>
                <div>
                  <h3 className="font-bold text-yellow-900 dark:text-yellow-300 mb-2">Initial Rate Method</h3>
                  <p className="text-gray-700 dark:text-gray-300">Compare experiments where only one concentration changes to find orders</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4">
                <span className="text-2xl">💡</span>
                <div>
                  <h3 className="font-bold text-yellow-900 dark:text-yellow-300 mb-2">Rate vs Rate Constant</h3>
                  <p className="text-gray-700 dark:text-gray-300">Rate changes with concentration. k only changes with temperature.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Related Tools</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/kinetics-calculators/reaction-rate-calculator" className="block p-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Reaction Rate Calculator</h3>
                <p className="text-green-100">Calculate rates from data</p>
              </Link>
              <Link href="/chemistry-formulas/rate-law" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Rate Law Formula</h3>
                <p className="text-gray-600 dark:text-gray-400">Detailed rate law explanation</p>
              </Link>
              <Link href="/kinetics-calculators/integrated-rate-law-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Integrated Rate Laws</h3>
                <p className="text-gray-600 dark:text-gray-400">Concentration vs time</p>
              </Link>
              <Link href="/kinetics-calculators/reaction-order-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Reaction Order</h3>
                <p className="text-gray-600 dark:text-gray-400">Determine order from data</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
