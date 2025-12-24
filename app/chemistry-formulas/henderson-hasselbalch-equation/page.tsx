import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Henderson-Hasselbalch Equation | pH = pKa + log([A⁻]/[HA])',
  description: 'Master the Henderson-Hasselbalch equation for buffer pH calculations. Includes derivation, examples, and calculator links.',
  keywords: 'Henderson-Hasselbalch equation, buffer pH, pKa, acid base equilibrium, buffer chemistry',
};

export default function HendersonHasselbalchPage() {
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
            <span className="text-gray-600 dark:text-gray-400">Henderson-Hasselbalch Equation</span>
          </nav>

          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Henderson-Hasselbalch Equation
          </h1>

          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            The <strong>Henderson-Hasselbalch equation</strong> is essential for calculating the pH of buffer solutions. 
            It relates pH to pKa and the ratio of conjugate base to weak acid concentrations.
          </p>

          {/* Formula Block */}
          <div className="my-12 p-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">The Henderson-Hasselbalch Equation</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center">
              <p className="text-5xl font-bold text-gray-900 dark:text-white mb-2">
                pH = pKa + log([A⁻]/[HA])
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Buffer pH from acid-base ratio
              </p>
            </div>
          </div>

          {/* Variable Definitions */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Variable Definitions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">pH = Measure of Acidity</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> Unitless
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  The pH of the buffer solution
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">pKa = Acid Dissociation Constant</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Formula:</strong> pKa = -log(Ka)
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Meaning:</strong> Strength of the weak acid
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                  💡 Lower pKa = stronger acid
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">[A⁻] = Conjugate Base Concentration</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> M (mol/L)
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Concentration of the deprotonated form (base)
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">[HA] = Weak Acid Concentration</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> M (mol/L)
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Concentration of the protonated form (acid)
                </p>
              </div>
            </div>
          </section>

          {/* When to Use */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">When to Use This Equation</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-emerald-50 dark:bg-emerald-900/30 rounded-lg p-6">
                <h3 className="font-bold text-emerald-900 dark:text-emerald-100 mb-3">✅ Good For:</h3>
                <ul className="list-disc list-inside text-emerald-800 dark:text-emerald-200 space-y-2">
                  <li>Buffer solutions</li>
                  <li>Weak acid/conjugate base pairs</li>
                  <li>pH close to pKa (±1 unit)</li>
                  <li>Comparable amounts of acid and base</li>
                </ul>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 rounded-lg p-6">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-3">❌ Not For:</h3>
                <ul className="list-disc list-inside text-red-800 dark:text-red-200 space-y-2">
                  <li>Strong acids or bases</li>
                  <li>Very dilute solutions</li>
                  <li>When [HA] or [A⁻] is very small</li>
                  <li>Non-buffer systems</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Special Cases */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Special Cases</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-6">
                <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-3">When [A⁻] = [HA]</h3>
                <p className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-2">pH = pKa</p>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  log(1) = 0, so pH equals pKa when concentrations are equal
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/30 rounded-lg p-6">
                <h3 className="text-lg font-bold text-purple-900 dark:text-purple-100 mb-3">When [A⁻] &gt; [HA]</h3>
                <p className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-2">pH &gt; pKa</p>
                <p className="text-sm text-purple-700 dark:text-purple-300">
                  More base than acid → more basic solution
                </p>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/30 rounded-lg p-6">
                <h3 className="text-lg font-bold text-orange-900 dark:text-orange-100 mb-3">When [HA] &gt; [A⁻]</h3>
                <p className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-2">pH &lt; pKa</p>
                <p className="text-sm text-orange-700 dark:text-orange-300">
                  More acid than base → more acidic solution
                </p>
              </div>
            </div>
          </section>

          {/* Example */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Step-by-Step Example</h2>
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Problem: Calculate pH of a buffer with 0.10 M acetic acid (pKa = 4.76) and 0.15 M acetate ion.
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-2">Given:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>pKa = 4.76</li>
                    <li>[HA] = 0.10 M (acetic acid)</li>
                    <li>[A⁻] = 0.15 M (acetate)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 1: Write the equation</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    pH = pKa + log([A⁻]/[HA])
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 2: Substitute values</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    pH = 4.76 + log(0.15/0.10)
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 3: Calculate the ratio</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    pH = 4.76 + log(1.5) = 4.76 + 0.18 = 4.94
                  </p>
                </div>

                <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg">
                  <p className="font-bold">Answer: pH = 4.94</p>
                  <p className="text-sm mt-2">Since [A⁻] &gt; [HA], pH is slightly above pKa ✓</p>
                </div>
              </div>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Common Mistakes</h2>
            <div className="space-y-4">
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Flipping the ratio</h3>
                <p className="text-red-800 dark:text-red-200">
                  It's [A⁻]/[HA] (base/acid), NOT [HA]/[A⁻]. Getting this backwards gives wrong pH.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Using Ka instead of pKa</h3>
                <p className="text-red-800 dark:text-red-200">
                  The equation requires pKa, not Ka. If given Ka, calculate pKa = -log(Ka) first.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Using natural log (ln)</h3>
                <p className="text-red-800 dark:text-red-200">
                  Use log (base 10), not ln (natural log). Make sure calculator is in log mode.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Using with strong acids</h3>
                <p className="text-red-800 dark:text-red-200">
                  This equation is ONLY for weak acid/conjugate base buffers. Don't use for HCl, NaOH, etc.
                </p>
              </div>
            </div>
          </section>

          {/* Related Calculators */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Related Calculators</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/atomic-structure-calculators/henderson-hasselbalch-calculator" className="block p-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Henderson-Hasselbalch Calculator</h3>
                <p>Calculate buffer pH instantly</p>
              </Link>

              <Link href="/atomic-structure-calculators/ph-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">pH Calculator</h3>
                <p className="text-gray-600 dark:text-gray-400">General pH calculations</p>
              </Link>

              <Link href="/acid-base-calculators/buffer-capacity-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Buffer Capacity</h3>
                <p className="text-gray-600 dark:text-gray-400">Measure buffer strength</p>
              </Link>

              <Link href="/acid-base-calculators/buffer-solution-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Buffer Solution</h3>
                <p className="text-gray-600 dark:text-gray-400">Prepare buffer solutions</p>
              </Link>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What is the Henderson-Hasselbalch equation?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  pH = pKa + log([A⁻]/[HA]). It calculates buffer pH from the pKa and the ratio of conjugate base to weak acid.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">When do I use Henderson-Hasselbalch?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Use it for buffer solutions containing a weak acid and its conjugate base, when pH is within ±1 of pKa.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What happens when pH equals pKa?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  When pH = pKa, the concentrations of acid and conjugate base are equal ([A⁻] = [HA]). This is the optimal buffering point.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Can I use molar ratios instead of concentrations?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Yes! If the acid and base are in the same solution, you can use mole ratios: pH = pKa + log(moles A⁻/moles HA).
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Why doesn't it work for strong acids?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Strong acids completely dissociate, so there's no equilibrium between HA and A⁻. The equation assumes weak acid equilibrium.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-between">
              <Link href="/chemistry-formulas" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                ← Back to All Formulas
              </Link>
              <Link href="/chemistry-formulas/buffer-capacity-formula" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                Next: Buffer Capacity →
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
