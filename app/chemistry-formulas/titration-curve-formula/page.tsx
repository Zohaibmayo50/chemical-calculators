import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Titration Curve Formula | pH vs Volume Graph Analysis',
  description: 'Understand pH changes during titration. Identify equivalence point, buffer regions, and calculate pH at any point on the titration curve.',
  keywords: ['titration curve', 'pH curve', 'equivalence point', 'half-equivalence point', 'buffer region', 'endpoint', 'strong acid', 'weak acid']
};

export default function TitrationCurveFormulaPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-rose-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <nav className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <Link href="/">Home</Link>
            <span>→</span>
            <Link href="/chemistry-formulas">Chemistry Formulas</Link>
            <span>→</span>
            <span className="text-gray-900 dark:text-white font-medium">Titration Curve</span>
          </nav>
        </div>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-rose-600 via-pink-600 to-fuchsia-600 rounded-3xl p-12 text-white shadow-2xl">
            <h1 className="text-5xl font-bold mb-4 text-center">Titration Curve Formula</h1>
            <p className="text-xl text-center text-rose-100">
              Graph of pH vs volume of titrant added - shows equivalence point and buffer regions
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-l-4 border-rose-500">
            <h2 className="text-3xl font-bold mb-6">Key Points on Titration Curve</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-900/30 dark:to-pink-900/30 rounded-xl p-8">
                <h3 className="text-xl font-bold text-rose-900 dark:text-rose-300 mb-4">Equivalence Point</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Point where moles of acid = moles of base (stoichiometric completion)
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
                    <h4 className="font-bold text-rose-900 dark:text-rose-300 mb-2">Strong Acid + Strong Base</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">pH = 7.00 (neutral)</p>
                  </div>
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
                    <h4 className="font-bold text-pink-900 dark:text-pink-300 mb-2">Weak Acid + Strong Base</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">pH &gt; 7 (conjugate base formed)</p>
                  </div>
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
                    <h4 className="font-bold text-fuchsia-900 dark:text-fuchsia-300 mb-2">Strong Acid + Weak Base</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">pH &lt; 7 (conjugate acid formed)</p>
                  </div>
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
                    <h4 className="font-bold text-purple-900 dark:text-purple-300 mb-2">Weak Acid + Weak Base</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">pH depends on Ka and Kb</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-pink-50 to-fuchsia-50 dark:from-pink-900/30 dark:to-fuchsia-900/30 rounded-xl p-8">
                <h3 className="text-xl font-bold text-pink-900 dark:text-pink-300 mb-4">Half-Equivalence Point (Weak Acid/Base)</h3>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center">
                  <p className="text-2xl font-mono font-bold text-pink-900 dark:text-pink-300 mb-2">pH = pKa</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    At V = ½V<sub>eq</sub>: [HA] = [A⁻], maximum buffer capacity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">pH Calculation Formulas</h2>
            
            <div className="space-y-6">
              <div className="bg-rose-50 dark:bg-rose-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-rose-900 dark:text-rose-300 mb-4">Before Equivalence Point (Weak Acid + Strong Base)</h3>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6">
                  <p className="font-mono text-lg text-center mb-4">pH = pKa + log([A⁻]/[HA])</p>
                  <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                    <p>[A⁻] = moles base added / total volume</p>
                    <p>[HA] = (initial moles acid - moles base) / total volume</p>
                  </div>
                </div>
              </div>

              <div className="bg-pink-50 dark:bg-pink-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-pink-900 dark:text-pink-300 mb-4">At Equivalence Point (Weak Acid + Strong Base)</h3>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center">
                  <p className="font-mono text-lg mb-2">pH = 7 + ½(pKa + pKw)</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">or pH = ½(pKw + pKa + log C)</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">C = concentration of conjugate base</p>
                </div>
              </div>

              <div className="bg-fuchsia-50 dark:bg-fuchsia-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-fuchsia-900 dark:text-fuchsia-300 mb-4">After Equivalence Point</h3>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6">
                  <p className="font-mono text-lg text-center mb-4">pH determined by excess base</p>
                  <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                    <p>[OH⁻] = (moles base - moles acid) / total volume</p>
                    <p>pOH = -log[OH⁻]</p>
                    <p>pH = 14 - pOH</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Curve Characteristics</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-blue-900 dark:text-blue-300 mb-4">Strong Acid + Strong Base</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <li>• Low initial pH (&lt;2)</li>
                  <li>• Sharp vertical rise at equivalence</li>
                  <li>• Equivalence point pH = 7.00</li>
                  <li>• Large pH jump (~6 units)</li>
                  <li>• No buffer region</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-purple-900 dark:text-purple-300 mb-4">Weak Acid + Strong Base</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <li>• Higher initial pH (2-6)</li>
                  <li>• Buffer region before equivalence</li>
                  <li>• Equivalence point pH &gt; 7</li>
                  <li>• Smaller pH jump (~3-4 units)</li>
                  <li>• pH = pKa at half-equivalence</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-emerald-900 dark:text-emerald-300 mb-4">Polyprotic Acids</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <li>• Multiple equivalence points</li>
                  <li>• One per ionizable H⁺</li>
                  <li>• Multiple buffer regions</li>
                  <li>• pH = pKa at each half-equivalence</li>
                  <li>• Example: H₂SO₄ has 2 steps</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-amber-900 dark:text-amber-300 mb-4">Indicators</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <li>• Choose indicator with pKa ≈ pH<sub>eq</sub></li>
                  <li>• Color change at pH ≈ pK<sub>In</sub></li>
                  <li>• Strong-strong: phenolphthalein (pH 8-10)</li>
                  <li>• Weak-strong: varies by equivalence pH</li>
                  <li>• Endpoint ≈ equivalence point</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Worked Examples</h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-rose-900 dark:text-rose-300 mb-4">Example 1: Find Equivalence Point Volume</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> 25.0 mL of 0.100 M HCl titrated with 0.100 M NaOH</p>
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">At equivalence: n(HCl) = n(NaOH)</p>
                  <p className="ml-6">M₁V₁ = M₂V₂</p>
                  <p className="ml-6">(0.100)(25.0) = (0.100)(V₂)</p>
                  <p className="ml-6">V₂ = 25.0 mL</p>
                  <p className="ml-6 font-bold text-green-600 text-xl mt-4">Equivalence at 25.0 mL, pH = 7.00</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">Example 2: pH at Half-Equivalence</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> 50.0 mL of 0.10 M acetic acid (Ka = 1.8×10⁻⁵) titrated with 0.10 M NaOH. Find pH at 25.0 mL added.</p>
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">Equivalence volume = 50.0 mL</p>
                  <p className="ml-6">At 25.0 mL: half-equivalence point</p>
                  <p className="ml-6">pH = pKa = -log(1.8×10⁻⁵)</p>
                  <p className="ml-6 font-bold text-green-600 text-xl mt-4">pH = 4.74</p>
                  <p className="ml-6 text-sm text-blue-600 mt-2">This is maximum buffer capacity</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-4">Example 3: pH Before Equivalence</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> Same titration as Example 2. Find pH after 40.0 mL NaOH added.</p>
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">Initial moles CH₃COOH = 0.10 × 0.050 = 0.0050 mol</p>
                  <p className="ml-6">Moles NaOH added = 0.10 × 0.040 = 0.0040 mol</p>
                  <p className="ml-6">Moles CH₃COOH remaining = 0.0050 - 0.0040 = 0.0010 mol</p>
                  <p className="ml-6">Moles CH₃COO⁻ formed = 0.0040 mol</p>
                  <p className="ml-6">Total volume = 50.0 + 40.0 = 90.0 mL</p>
                  <p className="ml-6 mt-4">pH = pKa + log([A⁻]/[HA])</p>
                  <p className="ml-6">pH = 4.74 + log(0.0040/0.0010)</p>
                  <p className="ml-6">pH = 4.74 + log(4.0)</p>
                  <p className="ml-6">pH = 4.74 + 0.60</p>
                  <p className="ml-6 font-bold text-green-600 text-xl mt-4">pH = 5.34</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-emerald-900 dark:text-emerald-300 mb-4">Example 4: pH After Equivalence</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> Same titration. Find pH at 60.0 mL NaOH added.</p>
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">Past equivalence (50.0 mL) by 10.0 mL</p>
                  <p className="ml-6">Excess NaOH = 0.10 × 0.010 = 0.0010 mol</p>
                  <p className="ml-6">Total volume = 50.0 + 60.0 = 110.0 mL</p>
                  <p className="ml-6">[OH⁻] = 0.0010 / 0.110 = 9.1×10⁻³ M</p>
                  <p className="ml-6">pOH = -log(9.1×10⁻³) = 2.04</p>
                  <p className="ml-6">pH = 14 - 2.04</p>
                  <p className="ml-6 font-bold text-green-600 text-xl mt-4">pH = 11.96</p>
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
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Confusing Endpoint with Equivalence Point</h3>
                  <p className="text-gray-700 dark:text-gray-300">Endpoint = indicator color change. Equivalence = stoichiometric completion. Should be close but not identical.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Assuming Weak Acid Equivalence pH = 7</h3>
                  <p className="text-gray-700 dark:text-gray-300">Weak acid + strong base: pH &gt; 7 at equivalence (conjugate base is basic!)</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Forgetting Total Volume</h3>
                  <p className="text-gray-700 dark:text-gray-300">Total volume = initial volume + titrant added. Use this for concentration calculations.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4">
                <span className="text-2xl">💡</span>
                <div>
                  <h3 className="font-bold text-yellow-900 dark:text-yellow-300 mb-2">Buffer Region Shortcut</h3>
                  <p className="text-gray-700 dark:text-gray-300">In buffer region, pH changes slowly. At half-equivalence, pH = pKa exactly.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Related Tools</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/acid-base-calculators/titration-curve-calculator" className="block p-6 bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Titration Curve Calculator</h3>
                <p className="text-rose-100">Plot complete curves</p>
              </Link>
              <Link href="/chemistry-formulas/titration-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Titration Formula</h3>
                <p className="text-gray-600 dark:text-gray-400">M₁V₁ = M₂V₂</p>
              </Link>
              <Link href="/chemistry-formulas/buffer-solution-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Buffer Solutions</h3>
                <p className="text-gray-600 dark:text-gray-400">Henderson-Hasselbalch</p>
              </Link>
              <Link href="/chemistry-formulas/ph-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">pH Formula</h3>
                <p className="text-gray-600 dark:text-gray-400">pH calculations</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
