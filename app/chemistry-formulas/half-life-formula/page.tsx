import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Half-Life Formula | N(t) = N₀(½)^(t/t₁/₂) | Radioactive Decay',
  description: 'Master the half-life formula for radioactive decay and first-order kinetics. Includes examples and decay calculator links.',
  keywords: 'half-life, radioactive decay, first order kinetics, exponential decay, nuclear chemistry',
};

export default function HalfLifeFormulaPage() {
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
            <span className="text-gray-600 dark:text-gray-400">Half-Life Formula</span>
          </nav>

          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Half-Life Formula
          </h1>

          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            <strong>Half-life</strong> (t<sub>½</sub>) is the time required for half of a substance to decay. 
            It applies to radioactive decay, first-order reactions, and drug metabolism.
          </p>

          {/* Formula Block */}
          <div className="my-12 p-8 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">Half-Life Formulas</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 space-y-6">
              <div className="text-center pb-4 border-b border-gray-300 dark:border-gray-600">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Amount Remaining:</p>
                <p className="text-4xl font-bold text-gray-900 dark:text-white">
                  N(t) = N₀ × (½)<sup>t/t₁/₂</sup>
                </p>
              </div>
              <div className="text-center pb-4 border-b border-gray-300 dark:border-gray-600">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Exponential Form:</p>
                <p className="text-4xl font-bold text-gray-900 dark:text-white">
                  N(t) = N₀ × e<sup>-kt</sup>
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Half-Life from Rate Constant:</p>
                <p className="text-4xl font-bold text-gray-900 dark:text-white">
                  t<sub>½</sub> = 0.693 / k
                </p>
              </div>
            </div>
          </div>

          {/* Variable Definitions */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Variable Definitions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-violet-600 dark:text-violet-400 mb-2">N(t) = Amount at Time t</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> g, mol, atoms, Bq, Ci, or any amount unit
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Amount of substance remaining after time t
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-violet-600 dark:text-violet-400 mb-2">N₀ = Initial Amount</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> Same as N(t)
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Starting amount at t = 0
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-violet-600 dark:text-violet-400 mb-2">t<sub>½</sub> = Half-Life</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> s, min, h, days, years (time units)
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Time for N to decrease to ½N₀
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  💡 Independent of starting amount for first-order decay
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-violet-600 dark:text-violet-400 mb-2">k = Decay Constant</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> 1/time (s⁻¹, min⁻¹, etc.)
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Relationship:</strong> k = 0.693 / t<sub>½</sub> = ln(2) / t<sub>½</sub>
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-violet-600 dark:text-violet-400 mb-2">t = Elapsed Time</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> Same as t<sub>½</sub>
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Time since decay started
                </p>
              </div>
            </div>
          </section>

          {/* Half-Life Pattern */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">The Half-Life Pattern</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
                <thead className="bg-gradient-to-r from-violet-600 to-purple-600 text-white">
                  <tr>
                    <th className="p-4 text-left">Time Elapsed</th>
                    <th className="p-4 text-left">Fraction Remaining</th>
                    <th className="p-4 text-left">Percent Remaining</th>
                    <th className="p-4 text-left">Amount (if N₀=100)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr className="bg-green-50 dark:bg-green-900/20">
                    <td className="p-4 font-bold">0 half-lives</td>
                    <td className="p-4">1/1</td>
                    <td className="p-4">100%</td>
                    <td className="p-4">100</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold">1 half-life</td>
                    <td className="p-4">1/2</td>
                    <td className="p-4">50%</td>
                    <td className="p-4">50</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold">2 half-lives</td>
                    <td className="p-4">1/4</td>
                    <td className="p-4">25%</td>
                    <td className="p-4">25</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold">3 half-lives</td>
                    <td className="p-4">1/8</td>
                    <td className="p-4">12.5%</td>
                    <td className="p-4">12.5</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold">4 half-lives</td>
                    <td className="p-4">1/16</td>
                    <td className="p-4">6.25%</td>
                    <td className="p-4">6.25</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold">n half-lives</td>
                    <td className="p-4">(1/2)<sup>n</sup></td>
                    <td className="p-4">100/(2<sup>n</sup>)%</td>
                    <td className="p-4">100/(2<sup>n</sup>)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Example */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Step-by-Step Example</h2>
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Problem: Carbon-14 has t<sub>½</sub> = 5,730 years. If a fossil has 25% of original C-14, how old is it?
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-2">Given:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>t<sub>½</sub> = 5,730 years</li>
                    <li>N(t) / N₀ = 0.25 (25% remaining)</li>
                    <li>Find: t (age)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 1: Recognize the pattern</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    25% = 1/4 = (1/2)² → 2 half-lives have passed
                  </p>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    t = 2 × t<sub>½</sub> = 2 × 5,730 = 11,460 years
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Alternative: Using the formula</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded text-sm">
                    N(t) = N₀ × (1/2)<sup>t/t₁/₂</sup><br />
                    0.25N₀ = N₀ × (1/2)<sup>t/5730</sup><br />
                    0.25 = (1/2)<sup>t/5730</sup><br />
                    (1/2)² = (1/2)<sup>t/5730</sup><br />
                    2 = t/5730<br />
                    t = 11,460 years
                  </p>
                </div>

                <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg">
                  <p className="font-bold text-green-900 dark:text-green-100">
                    Answer: The fossil is 11,460 years old
                  </p>
                  <p className="text-sm mt-2">
                    After 1 half-life: 50% remains. After 2 half-lives: 25% remains.
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
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Thinking 2 half-lives = 0% remaining</h3>
                <p className="text-red-800 dark:text-red-200">
                  Never reaches zero! After n half-lives, (1/2)ⁿ remains. It approaches zero but never gets there.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Using wrong base in exponent</h3>
                <p className="text-red-800 dark:text-red-200">
                  It's (1/2)^(t/t₁/₂), NOT 2^(t/t₁/₂). Half, not double!
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Mismatched time units</h3>
                <p className="text-red-800 dark:text-red-200">
                  t and t<sub>½</sub> MUST use the same units. If t<sub>½</sub> is in years, t must be in years too.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Confusing 0.693 and 0.6931</h3>
                <p className="text-red-800 dark:text-red-200">
                  0.693 is ln(2) rounded. For precise work, use ln(2) = 0.6931 or your calculator's ln function.
                </p>
              </div>
            </div>
          </section>

          {/* Related Calculators */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Related Calculators</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/kinetics-calculators/half-life-calculator" className="block p-6 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Half-Life Calculator</h3>
                <p>Calculate decay instantly</p>
              </Link>

              <Link href="/chemical-reaction-calculators/radioactive-decay-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Radioactive Decay</h3>
                <p className="text-gray-600 dark:text-gray-400">Nuclear decay calculations</p>
              </Link>

              <Link href="/kinetics-calculators/first-order-kinetics-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">First-Order Kinetics</h3>
                <p className="text-gray-600 dark:text-gray-400">Rate constant & concentration</p>
              </Link>

              <Link href="/kinetics-calculators/carbon-dating-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Carbon Dating</h3>
                <p className="text-gray-600 dark:text-gray-400">C-14 age determination</p>
              </Link>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What is half-life?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  The time required for half of a substance to decay. After one half-life, 50% remains; after two, 25% remains, and so on.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Does half-life depend on starting amount?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  No! For first-order decay, half-life is constant regardless of amount. Whether you start with 1g or 1000g, half-life is the same.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What is the relationship between k and t<sub>½</sub>?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  t<sub>½</sub> = 0.693/k or k = 0.693/t<sub>½</sub>. They're inversely related. Faster decay (larger k) means shorter half-life.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">How many half-lives until it's all gone?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Theoretically never! It approaches zero exponentially but never reaches it. After 10 half-lives, less than 0.1% remains.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Can half-life be used for zero-order or second-order reactions?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  These formulas are for first-order only. Zero-order and second-order reactions have different half-life equations that DO depend on concentration.
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
