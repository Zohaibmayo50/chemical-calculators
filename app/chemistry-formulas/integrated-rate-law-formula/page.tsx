import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Integrated Rate Law Formula | Zero, First & Second Order Kinetics',
  description: 'Integrated rate laws for zero, first, and second order reactions. Calculate concentration at any time from rate constants.',
  keywords: ['integrated rate law', 'zero order', 'first order', 'second order', 'half-life', 'reaction kinetics', 'concentration vs time']
};

export default function IntegratedRateLawFormulaPage() {
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
            <span className="text-gray-900 dark:text-white font-medium">Integrated Rate Law</span>
          </nav>
        </div>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
            <h1 className="text-5xl font-bold mb-4 text-center">Integrated Rate Law Formula</h1>
            <p className="text-xl text-center text-green-100">
              Calculate concentration as a function of time for different reaction orders
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-l-4 border-indigo-500">
            <h2 className="text-3xl font-bold mb-6">Rate Law Forms</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl p-8">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">Zero Order (n = 0)</h3>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6">
                  <p className="text-3xl font-mono font-bold text-blue-900 dark:text-blue-300 text-center mb-4">
                    [A]<sub>t</sub> = [A]₀ - kt
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300 mt-6">
                    <div>
                      <p className="font-bold mb-2">Characteristics:</p>
                      <ul className="list-disc ml-6 space-y-1">
                        <li>Rate = k (constant)</li>
                        <li>Linear [A] vs t plot</li>
                        <li>t<sub>1/2</sub> = [A]₀/(2k)</li>
                        <li>Units of k: M/s</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold mb-2">Examples:</p>
                      <ul className="list-disc ml-6 space-y-1">
                        <li>Surface reactions</li>
                        <li>Enzyme saturation</li>
                        <li>Photochemical reactions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-xl p-8">
                <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-4">First Order (n = 1)</h3>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6">
                  <p className="text-3xl font-mono font-bold text-green-900 dark:text-green-300 text-center mb-4">
                    ln[A]<sub>t</sub> = ln[A]₀ - kt
                  </p>
                  <p className="text-xl font-mono text-center text-gray-700 dark:text-gray-300 mb-4">
                    or: [A]<sub>t</sub> = [A]₀e<sup>-kt</sup>
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300 mt-6">
                    <div>
                      <p className="font-bold mb-2">Characteristics:</p>
                      <ul className="list-disc ml-6 space-y-1">
                        <li>Rate = k[A]</li>
                        <li>Linear ln[A] vs t plot</li>
                        <li>t<sub>1/2</sub> = 0.693/k (constant!)</li>
                        <li>Units of k: s⁻¹</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold mb-2">Examples:</p>
                      <ul className="list-disc ml-6 space-y-1">
                        <li>Radioactive decay</li>
                        <li>Many decompositions</li>
                        <li>Most common order</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl p-8">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-4">Second Order (n = 2)</h3>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6">
                  <p className="text-3xl font-mono font-bold text-purple-900 dark:text-purple-300 text-center mb-4">
                    1/[A]<sub>t</sub> = 1/[A]₀ + kt
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300 mt-6">
                    <div>
                      <p className="font-bold mb-2">Characteristics:</p>
                      <ul className="list-disc ml-6 space-y-1">
                        <li>Rate = k[A]²</li>
                        <li>Linear 1/[A] vs t plot</li>
                        <li>t<sub>1/2</sub> = 1/(k[A]₀)</li>
                        <li>Units of k: M⁻¹s⁻¹</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold mb-2">Examples:</p>
                      <ul className="list-disc ml-6 space-y-1">
                        <li>Gas phase reactions</li>
                        <li>Dimerization</li>
                        <li>2A → products</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Half-Life Formulas</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-blue-900 dark:text-blue-300 mb-3 text-center">Zero Order</h3>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-4 text-center">
                  <p className="text-2xl font-mono font-bold text-blue-900 dark:text-blue-300">
                    t<sub>1/2</sub> = [A]₀/(2k)
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                    Depends on [A]₀
                  </p>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-900 dark:text-green-300 mb-3 text-center">First Order</h3>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-4 text-center">
                  <p className="text-2xl font-mono font-bold text-green-900 dark:text-green-300">
                    t<sub>1/2</sub> = 0.693/k
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                    Independent of [A]₀
                  </p>
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-purple-900 dark:text-purple-300 mb-3 text-center">Second Order</h3>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-4 text-center">
                  <p className="text-2xl font-mono font-bold text-purple-900 dark:text-purple-300">
                    t<sub>1/2</sub> = 1/(k[A]₀)
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                    Depends on [A]₀
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Worked Examples</h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-4">Example 1: First Order Reaction</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> For a first order reaction with k = 0.0462 s⁻¹, if [A]₀ = 0.500 M, find [A] after 30.0 s.</p>
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">Use: ln[A]<sub>t</sub> = ln[A]₀ - kt</p>
                  <p className="ml-6">ln[A]<sub>t</sub> = ln(0.500) - (0.0462)(30.0)</p>
                  <p className="ml-6">ln[A]<sub>t</sub> = -0.693 - 1.386</p>
                  <p className="ml-6">ln[A]<sub>t</sub> = -2.079</p>
                  <p className="ml-6">[A]<sub>t</sub> = e<sup>-2.079</sup></p>
                  <p className="ml-6 font-bold text-green-600 text-xl mt-4">[A]<sub>t</sub> = 0.125 M</p>
                  <p className="ml-6 mt-4 text-sm text-blue-600"><strong>Check:</strong> t<sub>1/2</sub> = 0.693/0.0462 = 15.0 s</p>
                  <p className="ml-6 text-sm text-blue-600">After 2 half-lives (30 s): 0.500 → 0.250 → 0.125 M ✓</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-4">Example 2: Second Order Reaction</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> For 2NO₂ → 2NO + O₂, k = 0.543 M⁻¹s⁻¹. If [NO₂]₀ = 0.100 M, find [NO₂] after 10.0 s.</p>
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">Use: 1/[A]<sub>t</sub> = 1/[A]₀ + kt</p>
                  <p className="ml-6">1/[NO₂]<sub>t</sub> = 1/0.100 + (0.543)(10.0)</p>
                  <p className="ml-6">1/[NO₂]<sub>t</sub> = 10.0 + 5.43</p>
                  <p className="ml-6">1/[NO₂]<sub>t</sub> = 15.43 M⁻¹</p>
                  <p className="ml-6">[NO₂]<sub>t</sub> = 1/15.43</p>
                  <p className="ml-6 font-bold text-green-600 text-xl mt-4">[NO₂]<sub>t</sub> = 0.0648 M</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">Example 3: Determine Reaction Order</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> Data for decomposition of A:</p>
                  <table className="w-full mt-2 text-sm">
                    <thead className="bg-blue-100 dark:bg-blue-900/30">
                      <tr>
                        <th className="p-2">Time (s)</th>
                        <th className="p-2">[A] (M)</th>
                        <th className="p-2">ln[A]</th>
                        <th className="p-2">1/[A] (M⁻¹)</th>
                      </tr>
                    </thead>
                    <tbody className="font-mono">
                      <tr className="border-t"><td className="p-2">0</td><td className="p-2">1.00</td><td className="p-2">0.000</td><td className="p-2">1.00</td></tr>
                      <tr className="border-t"><td className="p-2">10</td><td className="p-2">0.61</td><td className="p-2">-0.494</td><td className="p-2">1.64</td></tr>
                      <tr className="border-t"><td className="p-2">20</td><td className="p-2">0.37</td><td className="p-2">-0.994</td><td className="p-2">2.70</td></tr>
                      <tr className="border-t"><td className="p-2">30</td><td className="p-2">0.23</td><td className="p-2">-1.470</td><td className="p-2">4.35</td></tr>
                    </tbody>
                  </table>
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">Test for linearity:</p>
                  <p className="ml-6">• [A] vs t: Not linear (curved)</p>
                  <p className="ml-6">• ln[A] vs t: Linear! Slope = -0.0494 s⁻¹</p>
                  <p className="ml-6">• 1/[A] vs t: Not linear</p>
                  <p className="ml-6 font-bold text-green-600 text-xl mt-4">First order, k = 0.0494 s⁻¹</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-amber-900 dark:text-amber-300 mb-4">Example 4: Calculate Half-Life</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> A zero order reaction has k = 0.020 M/s and [A]₀ = 1.50 M. Find t<sub>1/2</sub>.</p>
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">For zero order: t<sub>1/2</sub> = [A]₀/(2k)</p>
                  <p className="ml-6">t<sub>1/2</sub> = 1.50 / (2 × 0.020)</p>
                  <p className="ml-6">t<sub>1/2</sub> = 1.50 / 0.040</p>
                  <p className="ml-6 font-bold text-green-600 text-xl mt-4">t<sub>1/2</sub> = 37.5 s</p>
                  <p className="ml-6 mt-4 text-sm text-blue-600">Note: For zero order, t<sub>1/2</sub> decreases as [A] decreases!</p>
                  <p className="ml-6 text-sm text-blue-600">Second t<sub>1/2</sub> = 0.75/(2×0.020) = 18.75 s</p>
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
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Using Wrong Equation for Order</h3>
                  <p className="text-gray-700 dark:text-gray-300">First order uses ln[A], second order uses 1/[A]. Don't mix them up!</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Forgetting Natural Log</h3>
                  <p className="text-gray-700 dark:text-gray-300">First order: ln[A], not log[A]. Use ln (base e), not log₁₀!</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Assuming Constant Half-Life</h3>
                  <p className="text-gray-700 dark:text-gray-300">Only first order has constant t<sub>1/2</sub>! Zero & second order t<sub>1/2</sub> changes with concentration.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4">
                <span className="text-2xl">💡</span>
                <div>
                  <h3 className="font-bold text-yellow-900 dark:text-yellow-300 mb-2">Graphical Method to Find Order</h3>
                  <p className="text-gray-700 dark:text-gray-300">Plot [A] vs t, ln[A] vs t, and 1/[A] vs t. Whichever is linear tells you the order!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Related Tools</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/kinetics-calculators/integrated-rate-law-calculator" className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-blue-900 mb-2">Integrated Rate Law Calculator</h3>
                <p className="text-sm text-gray-600">Automated calculations</p>
              </Link>
              <Link href="/kinetics-calculators/half-life-calculator" className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-blue-900 mb-2">Half-Life Calculator</h3>
                <p className="text-sm text-gray-600">Time for [A] → [A]/2</p>
              </Link>
              <Link href="/chemistry-formulas/rate-law" className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-green-900 mb-2">Rate Law Formula</h3>
                <p className="text-sm text-gray-600">Differential rate expressions</p>
              </Link>
              <Link href="/chemistry-formulas/half-life-formula" className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-green-900 mb-2">Half-Life Formula</h3>
                <p className="text-sm text-gray-600">t₁/₂ relationships</p>
              </Link>
              <Link href="/chemistry-formulas/arrhenius-equation" className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-green-900 mb-2">Arrhenius Equation</h3>
                <p className="text-sm text-gray-600">Temperature & rate constant</p>
              </Link>
              <Link href="/chemical-kinetics-calculators" className="p-6 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-semibold mb-2">All Chemical Kinetics Calculators</h3>
                <p className="text-sm opacity-90">Explore all kinetics tools and calculators</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
