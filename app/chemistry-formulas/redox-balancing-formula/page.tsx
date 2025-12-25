import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Redox Balancing Formula | Half-Reaction Method Guide',
  description: 'Balance redox equations using the half-reaction method. Complete guide to balancing complex redox reactions in acidic and basic solutions.',
  keywords: ['redox balancing', 'half-reaction method', 'oxidation-reduction', 'electron transfer', 'balancing equations']
};

export default function RedoxBalancingFormulaPage() {
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
            <span className="text-gray-900 dark:text-white font-medium">Redox Balancing</span>
          </nav>
        </div>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
            <h1 className="text-5xl font-bold mb-4 text-center">Redox Balancing Formula</h1>
            <p className="text-xl text-center text-orange-100">
              Master the half-reaction method for balancing complex redox equations
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-l-4 border-indigo-500">
            <h2 className="text-3xl font-bold mb-6">Half-Reaction Method (Acidic Solution)</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-blue-600">1</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-2">Split into Half-Reactions</h3>
                    <p className="text-gray-700 dark:text-gray-300">Separate the oxidation and reduction processes</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Identify which species is oxidized and which is reduced by assigning oxidation numbers</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-purple-600">2</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-2">Balance Atoms (Except O and H)</h3>
                    <p className="text-gray-700 dark:text-gray-300">Balance all elements except oxygen and hydrogen</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-green-600">3</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-2">Balance Oxygen with H₂O</h3>
                    <p className="text-gray-700 dark:text-gray-300">Add H₂O molecules to balance oxygen atoms</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/30 dark:to-blue-900/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-cyan-600">4</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-cyan-900 dark:text-cyan-300 mb-2">Balance Hydrogen with H⁺</h3>
                    <p className="text-gray-700 dark:text-gray-300">Add H⁺ ions to balance hydrogen atoms</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-amber-600">5</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-amber-900 dark:text-amber-300 mb-2">Balance Charge with e⁻</h3>
                    <p className="text-gray-700 dark:text-gray-300">Add electrons to balance the total charge</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Electrons added to the more positive side</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/30 dark:to-rose-900/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-pink-600">6</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-pink-900 dark:text-pink-300 mb-2">Equalize Electrons</h3>
                    <p className="text-gray-700 dark:text-gray-300">Multiply each half-reaction to equalize electron transfer</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-indigo-600">7</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-300 mb-2">Add Half-Reactions</h3>
                    <p className="text-gray-700 dark:text-gray-300">Combine the two half-reactions and cancel common terms</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Electrons should cancel out completely</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-900/30 dark:to-slate-900/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-gray-600">8</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-300 mb-2">Verify</h3>
                    <p className="text-gray-700 dark:text-gray-300">Check that atoms and charges balance on both sides</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Worked Example (Acidic Solution)</h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">Balance: Cr₂O₇²⁻ + Fe²⁺ → Cr³⁺ + Fe³⁺ (acidic)</h3>
              
              <div className="space-y-6 text-gray-700 dark:text-gray-300">
                <div>
                  <p className="font-bold text-lg mb-2">Step 1: Split into half-reactions</p>
                  <div className="ml-6 space-y-1 font-mono text-sm bg-white dark:bg-gray-700 p-4 rounded">
                    <p>Reduction: Cr₂O₇²⁻ → Cr³⁺</p>
                    <p>Oxidation: Fe²⁺ → Fe³⁺</p>
                  </div>
                </div>

                <div>
                  <p className="font-bold text-lg mb-2">Step 2: Balance atoms except O, H</p>
                  <div className="ml-6 space-y-1 font-mono text-sm bg-white dark:bg-gray-700 p-4 rounded">
                    <p>Cr₂O₇²⁻ → <span className="text-blue-600 font-bold">2</span>Cr³⁺ (balance Cr)</p>
                    <p>Fe²⁺ → Fe³⁺ (already balanced)</p>
                  </div>
                </div>

                <div>
                  <p className="font-bold text-lg mb-2">Step 3: Balance O with H₂O</p>
                  <div className="ml-6 space-y-1 font-mono text-sm bg-white dark:bg-gray-700 p-4 rounded">
                    <p>Cr₂O₇²⁻ → 2Cr³⁺ + <span className="text-green-600 font-bold">7H₂O</span> (7 O on left, 7 on right)</p>
                    <p>Fe²⁺ → Fe³⁺ (no O, skip)</p>
                  </div>
                </div>

                <div>
                  <p className="font-bold text-lg mb-2">Step 4: Balance H with H⁺</p>
                  <div className="ml-6 space-y-1 font-mono text-sm bg-white dark:bg-gray-700 p-4 rounded">
                    <p><span className="text-purple-600 font-bold">14H⁺</span> + Cr₂O₇²⁻ → 2Cr³⁺ + 7H₂O (14 H on each side)</p>
                    <p>Fe²⁺ → Fe³⁺ (no H, skip)</p>
                  </div>
                </div>

                <div>
                  <p className="font-bold text-lg mb-2">Step 5: Balance charge with e⁻</p>
                  <div className="ml-6 space-y-3 font-mono text-sm bg-white dark:bg-gray-700 p-4 rounded">
                    <div>
                      <p className="mb-1">Reduction half:</p>
                      <p className="ml-4">Left: 14(+1) + (-2) = +12</p>
                      <p className="ml-4">Right: 2(+3) = +6</p>
                      <p className="ml-4">Need <span className="text-red-600 font-bold">6e⁻</span> on left:</p>
                      <p className="text-red-600 font-bold mt-2">6e⁻ + 14H⁺ + Cr₂O₇²⁻ → 2Cr³⁺ + 7H₂O</p>
                    </div>
                    <div className="pt-3 border-t border-gray-300 dark:border-gray-600">
                      <p className="mb-1">Oxidation half:</p>
                      <p className="ml-4">Left: +2, Right: +3</p>
                      <p className="ml-4">Need <span className="text-red-600 font-bold">1e⁻</span> on right:</p>
                      <p className="text-red-600 font-bold mt-2">Fe²⁺ → Fe³⁺ + 1e⁻</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="font-bold text-lg mb-2">Step 6: Equalize electrons (LCM = 6)</p>
                  <div className="ml-6 space-y-2 font-mono text-sm bg-white dark:bg-gray-700 p-4 rounded">
                    <p>6e⁻ + 14H⁺ + Cr₂O₇²⁻ → 2Cr³⁺ + 7H₂O (×1)</p>
                    <p className="text-amber-600 font-bold">[Fe²⁺ → Fe³⁺ + 1e⁻] × 6</p>
                    <p className="mt-2">6Fe²⁺ → 6Fe³⁺ + 6e⁻</p>
                  </div>
                </div>

                <div>
                  <p className="font-bold text-lg mb-2">Step 7: Add and cancel</p>
                  <div className="ml-6 space-y-2 font-mono text-sm bg-white dark:bg-gray-700 p-4 rounded">
                    <p className="line-through text-gray-400">6e⁻</p>
                    <p>14H⁺ + Cr₂O₇²⁻ + 6Fe²⁺ → 2Cr³⁺ + 7H₂O + 6Fe³⁺ <span className="line-through text-gray-400">+ 6e⁻</span></p>
                  </div>
                </div>

                <div className="bg-green-100 dark:bg-green-900/30 rounded-xl p-6">
                  <p className="font-bold text-xl text-green-900 dark:text-green-300 mb-3">Final Balanced Equation:</p>
                  <p className="font-mono text-lg">14H⁺ + Cr₂O₇²⁻ + 6Fe²⁺ → 2Cr³⁺ + 7H₂O + 6Fe³⁺</p>
                  
                  <div className="mt-4 pt-4 border-t border-green-300 dark:border-green-700">
                    <p className="font-bold mb-2">Verification:</p>
                    <p className="ml-4">Cr: 2 = 2 ✓</p>
                    <p className="ml-4">O: 7 = 7 ✓</p>
                    <p className="ml-4">H: 14 = 14 ✓</p>
                    <p className="ml-4">Fe: 6 = 6 ✓</p>
                    <p className="ml-4">Charge: 14 + (-2) + 6(2) = 12 + 6 = +24; 2(3) + 6(3) = 6 + 18 = +24 ✓</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-l-4 border-blue-500">
            <h2 className="text-3xl font-bold mb-6">Basic Solution Method</h2>
            
            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                For reactions in <strong>basic solution</strong>, follow all acidic steps, then add one final step:
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">Extra Step: Neutralize H⁺ with OH⁻</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p>1. Add <strong>OH⁻</strong> to both sides equal to the number of H⁺</p>
                  <p>2. Combine H⁺ + OH⁻ → H₂O on the side with H⁺</p>
                  <p>3. Cancel excess H₂O from both sides</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-4">Example: Convert to Basic</h3>
                <div className="space-y-3 font-mono text-sm">
                  <p className="text-gray-700 dark:text-gray-300">Acidic form:</p>
                  <p className="bg-white dark:bg-gray-700 p-3 rounded">4H⁺ + MnO₄⁻ + 3e⁻ → MnO₂ + 2H₂O</p>
                  
                  <p className="text-gray-700 dark:text-gray-300 mt-4">Add 4OH⁻ to each side:</p>
                  <p className="bg-white dark:bg-gray-700 p-3 rounded">4H⁺ + 4OH⁻ + MnO₄⁻ + 3e⁻ → MnO₂ + 2H₂O + 4OH⁻</p>
                  
                  <p className="text-gray-700 dark:text-gray-300 mt-4">Combine H⁺ + OH⁻ → H₂O:</p>
                  <p className="bg-white dark:bg-gray-700 p-3 rounded">4H₂O + MnO₄⁻ + 3e⁻ → MnO₂ + 2H₂O + 4OH⁻</p>
                  
                  <p className="text-gray-700 dark:text-gray-300 mt-4">Cancel 2H₂O:</p>
                  <p className="bg-green-100 dark:bg-green-900/30 p-3 rounded font-bold">2H₂O + MnO₄⁻ + 3e⁻ → MnO₂ + 4OH⁻</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Another Complete Example</h2>
            
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-amber-900 dark:text-amber-300 mb-4">Balance: MnO₄⁻ + SO₃²⁻ → MnO₂ + SO₄²⁻ (basic)</h3>
              
              <div className="space-y-5 text-gray-700 dark:text-gray-300">
                <div>
                  <p className="font-bold mb-2">Half-reactions (acidic first):</p>
                  <div className="ml-6 space-y-3 font-mono text-sm bg-white dark:bg-gray-700 p-4 rounded">
                    <div>
                      <p className="text-purple-600">Reduction:</p>
                      <p>MnO₄⁻ → MnO₂</p>
                      <p>4H⁺ + MnO₄⁻ → MnO₂ + 2H₂O</p>
                      <p className="text-red-600 font-bold">3e⁻ + 4H⁺ + MnO₄⁻ → MnO₂ + 2H₂O</p>
                    </div>
                    <div className="pt-3 border-t border-gray-300 dark:border-gray-600">
                      <p className="text-blue-600">Oxidation:</p>
                      <p>SO₃²⁻ → SO₄²⁻</p>
                      <p>H₂O + SO₃²⁻ → SO₄²⁻ + 2H⁺</p>
                      <p className="text-red-600 font-bold">H₂O + SO₃²⁻ → SO₄²⁻ + 2H⁺ + 2e⁻</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="font-bold mb-2">Equalize electrons (LCM = 6):</p>
                  <div className="ml-6 space-y-2 font-mono text-sm bg-white dark:bg-gray-700 p-4 rounded">
                    <p>[3e⁻ + 4H⁺ + MnO₄⁻ → MnO₂ + 2H₂O] × 2</p>
                    <p>[H₂O + SO₃²⁻ → SO₄²⁻ + 2H⁺ + 2e⁻] × 3</p>
                  </div>
                </div>

                <div>
                  <p className="font-bold mb-2">Combined (acidic):</p>
                  <div className="ml-6 font-mono text-sm bg-white dark:bg-gray-700 p-4 rounded">
                    <p>8H⁺ + 2MnO₄⁻ + 3SO₃²⁻ → 2MnO₂ + 3SO₄²⁻ + 4H₂O + 6H⁺</p>
                    <p className="mt-2">Simplify (cancel 6H⁺):</p>
                    <p className="font-bold text-blue-600 mt-1">2H⁺ + 2MnO₄⁻ + 3SO₃²⁻ → 2MnO₂ + 3SO₄²⁻ + H₂O</p>
                  </div>
                </div>

                <div>
                  <p className="font-bold mb-2">Convert to basic (add 2OH⁻):</p>
                  <div className="ml-6 font-mono text-sm bg-white dark:bg-gray-700 p-4 rounded">
                    <p>2H⁺ + 2OH⁻ + 2MnO₄⁻ + 3SO₃²⁻ → 2MnO₂ + 3SO₄²⁻ + H₂O + 2OH⁻</p>
                    <p className="mt-2">2H₂O + 2MnO₄⁻ + 3SO₃²⁻ → 2MnO₂ + 3SO₄²⁻ + H₂O + 2OH⁻</p>
                  </div>
                </div>

                <div className="bg-green-100 dark:bg-green-900/30 rounded-xl p-6">
                  <p className="font-bold text-xl text-green-900 dark:text-green-300 mb-2">Final (cancel 1H₂O):</p>
                  <p className="font-mono text-lg">H₂O + 2MnO₄⁻ + 3SO₃²⁻ → 2MnO₂ + 3SO₄²⁻ + 2OH⁻</p>
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
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Forgetting to Balance Atoms First</h3>
                  <p className="text-gray-700 dark:text-gray-300">Always balance Cr₂O₇²⁻ → <strong>2</strong>Cr³⁺ before adding H₂O!</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Wrong Electron Count</h3>
                  <p className="text-gray-700 dark:text-gray-300">Calculate charge on BOTH sides carefully. Many errors here!</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Not Equalizing Electrons</h3>
                  <p className="text-gray-700 dark:text-gray-300">Find LCM of electron counts before adding half-reactions!</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4">
                <span className="text-2xl">💡</span>
                <div>
                  <h3 className="font-bold text-yellow-900 dark:text-yellow-300 mb-2">Always Verify Final Answer</h3>
                  <p className="text-gray-700 dark:text-gray-300">Check: atoms balanced? Charges balanced? Electrons cancelled?</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Related Tools</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/redox-calculators/redox-balancing-calculator" className="block p-6 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Redox Balancing Calculator</h3>
                <p className="text-orange-100">Automated balancing</p>
              </Link>
              <Link href="/redox-calculators/oxidation-number-calculator" className="block p-6 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Oxidation Number Calculator</h3>
                <p className="text-orange-100">Assign oxidation states</p>
              </Link>
              <Link href="/chemistry-formulas/oxidation-number-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Oxidation Number</h3>
                <p className="text-gray-600 dark:text-gray-400">Assign oxidation states</p>
              </Link>
              <Link href="/chemistry-formulas/cell-potential" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Cell Potential</h3>
                <p className="text-gray-600 dark:text-gray-400">Electrochemistry</p>
              </Link>
              <Link href="/chemistry-formulas/nernst-equation" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Nernst Equation</h3>
                <p className="text-gray-600 dark:text-gray-400">Non-standard conditions</p>
              </Link>
              <Link href="/redox-calculators" className="block p-6 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">All Redox Calculators</h3>
                <p className="text-gray-100">Explore all redox chemistry tools</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
