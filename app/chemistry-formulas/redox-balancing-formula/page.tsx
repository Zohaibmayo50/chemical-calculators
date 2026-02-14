import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Redox Balancing Formula | Half-Reaction Method Guide',
  description: 'Balance redox equations using the half-reaction method. Complete guide to balancing complex redox reactions in acidic and basic solutions.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/redox-balancing-formula',
  },
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
            <span>â†’</span>
            <Link href="/chemistry-formulas">Chemistry Formulas</Link>
            <span>â†’</span>
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
                    <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-2">Balance Oxygen with Hâ‚‚O</h3>
                    <p className="text-gray-700 dark:text-gray-300">Add Hâ‚‚O molecules to balance oxygen atoms</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/30 dark:to-blue-900/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-cyan-600">4</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-cyan-900 dark:text-cyan-300 mb-2">Balance Hydrogen with Hâº</h3>
                    <p className="text-gray-700 dark:text-gray-300">Add Hâº ions to balance hydrogen atoms</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-amber-600">5</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-amber-900 dark:text-amber-300 mb-2">Balance Charge with eâ»</h3>
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
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">Balance: Crâ‚‚Oâ‚‡Â²â» + FeÂ²âº â†’ CrÂ³âº + FeÂ³âº (acidic)</h3>
              
              <div className="space-y-6 text-gray-700 dark:text-gray-300">
                <div>
                  <p className="font-bold text-lg mb-2">Step 1: Split into half-reactions</p>
                  <div className="ml-6 space-y-1 font-mono text-sm bg-white dark:bg-gray-700 p-4 rounded">
                    <p>Reduction: Crâ‚‚Oâ‚‡Â²â» â†’ CrÂ³âº</p>
                    <p>Oxidation: FeÂ²âº â†’ FeÂ³âº</p>
                  </div>
                </div>

                <div>
                  <p className="font-bold text-lg mb-2">Step 2: Balance atoms except O, H</p>
                  <div className="ml-6 space-y-1 font-mono text-sm bg-white dark:bg-gray-700 p-4 rounded">
                    <p>Crâ‚‚Oâ‚‡Â²â» â†’ <span className="text-blue-600 font-bold">2</span>CrÂ³âº (balance Cr)</p>
                    <p>FeÂ²âº â†’ FeÂ³âº (already balanced)</p>
                  </div>
                </div>

                <div>
                  <p className="font-bold text-lg mb-2">Step 3: Balance O with Hâ‚‚O</p>
                  <div className="ml-6 space-y-1 font-mono text-sm bg-white dark:bg-gray-700 p-4 rounded">
                    <p>Crâ‚‚Oâ‚‡Â²â» â†’ 2CrÂ³âº + <span className="text-green-600 font-bold">7Hâ‚‚O</span> (7 O on left, 7 on right)</p>
                    <p>FeÂ²âº â†’ FeÂ³âº (no O, skip)</p>
                  </div>
                </div>

                <div>
                  <p className="font-bold text-lg mb-2">Step 4: Balance H with Hâº</p>
                  <div className="ml-6 space-y-1 font-mono text-sm bg-white dark:bg-gray-700 p-4 rounded">
                    <p><span className="text-purple-600 font-bold">14Hâº</span> + Crâ‚‚Oâ‚‡Â²â» â†’ 2CrÂ³âº + 7Hâ‚‚O (14 H on each side)</p>
                    <p>FeÂ²âº â†’ FeÂ³âº (no H, skip)</p>
                  </div>
                </div>

                <div>
                  <p className="font-bold text-lg mb-2">Step 5: Balance charge with eâ»</p>
                  <div className="ml-6 space-y-3 font-mono text-sm bg-white dark:bg-gray-700 p-4 rounded">
                    <div>
                      <p className="mb-1">Reduction half:</p>
                      <p className="ml-4">Left: 14(+1) + (-2) = +12</p>
                      <p className="ml-4">Right: 2(+3) = +6</p>
                      <p className="ml-4">Need <span className="text-red-600 font-bold">6eâ»</span> on left:</p>
                      <p className="text-red-600 font-bold mt-2">6eâ» + 14Hâº + Crâ‚‚Oâ‚‡Â²â» â†’ 2CrÂ³âº + 7Hâ‚‚O</p>
                    </div>
                    <div className="pt-3 border-t border-gray-300 dark:border-gray-600">
                      <p className="mb-1">Oxidation half:</p>
                      <p className="ml-4">Left: +2, Right: +3</p>
                      <p className="ml-4">Need <span className="text-red-600 font-bold">1eâ»</span> on right:</p>
                      <p className="text-red-600 font-bold mt-2">FeÂ²âº â†’ FeÂ³âº + 1eâ»</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="font-bold text-lg mb-2">Step 6: Equalize electrons (LCM = 6)</p>
                  <div className="ml-6 space-y-2 font-mono text-sm bg-white dark:bg-gray-700 p-4 rounded">
                    <p>6eâ» + 14Hâº + Crâ‚‚Oâ‚‡Â²â» â†’ 2CrÂ³âº + 7Hâ‚‚O (Ã—1)</p>
                    <p className="text-amber-600 font-bold">[FeÂ²âº â†’ FeÂ³âº + 1eâ»] Ã— 6</p>
                    <p className="mt-2">6FeÂ²âº â†’ 6FeÂ³âº + 6eâ»</p>
                  </div>
                </div>

                <div>
                  <p className="font-bold text-lg mb-2">Step 7: Add and cancel</p>
                  <div className="ml-6 space-y-2 font-mono text-sm bg-white dark:bg-gray-700 p-4 rounded">
                    <p className="line-through text-gray-400">6eâ»</p>
                    <p>14Hâº + Crâ‚‚Oâ‚‡Â²â» + 6FeÂ²âº â†’ 2CrÂ³âº + 7Hâ‚‚O + 6FeÂ³âº <span className="line-through text-gray-400">+ 6eâ»</span></p>
                  </div>
                </div>

                <div className="bg-green-100 dark:bg-green-900/30 rounded-xl p-6">
                  <p className="font-bold text-xl text-green-900 dark:text-green-300 mb-3">Final Balanced Equation:</p>
                  <p className="font-mono text-lg">14Hâº + Crâ‚‚Oâ‚‡Â²â» + 6FeÂ²âº â†’ 2CrÂ³âº + 7Hâ‚‚O + 6FeÂ³âº</p>
                  
                  <div className="mt-4 pt-4 border-t border-green-300 dark:border-green-700">
                    <p className="font-bold mb-2">Verification:</p>
                    <p className="ml-4">Cr: 2 = 2 âœ“</p>
                    <p className="ml-4">O: 7 = 7 âœ“</p>
                    <p className="ml-4">H: 14 = 14 âœ“</p>
                    <p className="ml-4">Fe: 6 = 6 âœ“</p>
                    <p className="ml-4">Charge: 14 + (-2) + 6(2) = 12 + 6 = +24; 2(3) + 6(3) = 6 + 18 = +24 âœ“</p>
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
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">Extra Step: Neutralize Hâº with OHâ»</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p>1. Add <strong>OHâ»</strong> to both sides equal to the number of Hâº</p>
                  <p>2. Combine Hâº + OHâ» â†’ Hâ‚‚O on the side with Hâº</p>
                  <p>3. Cancel excess Hâ‚‚O from both sides</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-4">Example: Convert to Basic</h3>
                <div className="space-y-3 font-mono text-sm">
                  <p className="text-gray-700 dark:text-gray-300">Acidic form:</p>
                  <p className="bg-white dark:bg-gray-700 p-3 rounded">4Hâº + MnOâ‚„â» + 3eâ» â†’ MnOâ‚‚ + 2Hâ‚‚O</p>
                  
                  <p className="text-gray-700 dark:text-gray-300 mt-4">Add 4OHâ» to each side:</p>
                  <p className="bg-white dark:bg-gray-700 p-3 rounded">4Hâº + 4OHâ» + MnOâ‚„â» + 3eâ» â†’ MnOâ‚‚ + 2Hâ‚‚O + 4OHâ»</p>
                  
                  <p className="text-gray-700 dark:text-gray-300 mt-4">Combine Hâº + OHâ» â†’ Hâ‚‚O:</p>
                  <p className="bg-white dark:bg-gray-700 p-3 rounded">4Hâ‚‚O + MnOâ‚„â» + 3eâ» â†’ MnOâ‚‚ + 2Hâ‚‚O + 4OHâ»</p>
                  
                  <p className="text-gray-700 dark:text-gray-300 mt-4">Cancel 2Hâ‚‚O:</p>
                  <p className="bg-green-100 dark:bg-green-900/30 p-3 rounded font-bold">2Hâ‚‚O + MnOâ‚„â» + 3eâ» â†’ MnOâ‚‚ + 4OHâ»</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Another Complete Example</h2>
            
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-amber-900 dark:text-amber-300 mb-4">Balance: MnOâ‚„â» + SOâ‚ƒÂ²â» â†’ MnOâ‚‚ + SOâ‚„Â²â» (basic)</h3>
              
              <div className="space-y-5 text-gray-700 dark:text-gray-300">
                <div>
                  <p className="font-bold mb-2">Half-reactions (acidic first):</p>
                  <div className="ml-6 space-y-3 font-mono text-sm bg-white dark:bg-gray-700 p-4 rounded">
                    <div>
                      <p className="text-purple-600">Reduction:</p>
                      <p>MnOâ‚„â» â†’ MnOâ‚‚</p>
                      <p>4Hâº + MnOâ‚„â» â†’ MnOâ‚‚ + 2Hâ‚‚O</p>
                      <p className="text-red-600 font-bold">3eâ» + 4Hâº + MnOâ‚„â» â†’ MnOâ‚‚ + 2Hâ‚‚O</p>
                    </div>
                    <div className="pt-3 border-t border-gray-300 dark:border-gray-600">
                      <p className="text-blue-600">Oxidation:</p>
                      <p>SOâ‚ƒÂ²â» â†’ SOâ‚„Â²â»</p>
                      <p>Hâ‚‚O + SOâ‚ƒÂ²â» â†’ SOâ‚„Â²â» + 2Hâº</p>
                      <p className="text-red-600 font-bold">Hâ‚‚O + SOâ‚ƒÂ²â» â†’ SOâ‚„Â²â» + 2Hâº + 2eâ»</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="font-bold mb-2">Equalize electrons (LCM = 6):</p>
                  <div className="ml-6 space-y-2 font-mono text-sm bg-white dark:bg-gray-700 p-4 rounded">
                    <p>[3eâ» + 4Hâº + MnOâ‚„â» â†’ MnOâ‚‚ + 2Hâ‚‚O] Ã— 2</p>
                    <p>[Hâ‚‚O + SOâ‚ƒÂ²â» â†’ SOâ‚„Â²â» + 2Hâº + 2eâ»] Ã— 3</p>
                  </div>
                </div>

                <div>
                  <p className="font-bold mb-2">Combined (acidic):</p>
                  <div className="ml-6 font-mono text-sm bg-white dark:bg-gray-700 p-4 rounded">
                    <p>8Hâº + 2MnOâ‚„â» + 3SOâ‚ƒÂ²â» â†’ 2MnOâ‚‚ + 3SOâ‚„Â²â» + 4Hâ‚‚O + 6Hâº</p>
                    <p className="mt-2">Simplify (cancel 6Hâº):</p>
                    <p className="font-bold text-blue-600 mt-1">2Hâº + 2MnOâ‚„â» + 3SOâ‚ƒÂ²â» â†’ 2MnOâ‚‚ + 3SOâ‚„Â²â» + Hâ‚‚O</p>
                  </div>
                </div>

                <div>
                  <p className="font-bold mb-2">Convert to basic (add 2OHâ»):</p>
                  <div className="ml-6 font-mono text-sm bg-white dark:bg-gray-700 p-4 rounded">
                    <p>2Hâº + 2OHâ» + 2MnOâ‚„â» + 3SOâ‚ƒÂ²â» â†’ 2MnOâ‚‚ + 3SOâ‚„Â²â» + Hâ‚‚O + 2OHâ»</p>
                    <p className="mt-2">2Hâ‚‚O + 2MnOâ‚„â» + 3SOâ‚ƒÂ²â» â†’ 2MnOâ‚‚ + 3SOâ‚„Â²â» + Hâ‚‚O + 2OHâ»</p>
                  </div>
                </div>

                <div className="bg-green-100 dark:bg-green-900/30 rounded-xl p-6">
                  <p className="font-bold text-xl text-green-900 dark:text-green-300 mb-2">Final (cancel 1Hâ‚‚O):</p>
                  <p className="font-mono text-lg">Hâ‚‚O + 2MnOâ‚„â» + 3SOâ‚ƒÂ²â» â†’ 2MnOâ‚‚ + 3SOâ‚„Â²â» + 2OHâ»</p>
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
                <span className="text-2xl">âš ï¸</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Forgetting to Balance Atoms First</h3>
                  <p className="text-gray-700 dark:text-gray-300">Always balance Crâ‚‚Oâ‚‡Â²â» â†’ <strong>2</strong>CrÂ³âº before adding Hâ‚‚O!</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">âš ï¸</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Wrong Electron Count</h3>
                  <p className="text-gray-700 dark:text-gray-300">Calculate charge on BOTH sides carefully. Many errors here!</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">âš ï¸</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Not Equalizing Electrons</h3>
                  <p className="text-gray-700 dark:text-gray-300">Find LCM of electron counts before adding half-reactions!</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4">
                <span className="text-2xl">ðŸ’¡</span>
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
              <Link href="/electrochemistry-calculators/redox-balancing-calculator" className="block p-6 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Redox Balancing Calculator</h3>
                <p className="text-orange-100">Automated balancing</p>
              </Link>
              <Link href="/electrochemistry-calculators/oxidation-number-calculator" className="block p-6 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Oxidation Number Calculator</h3>
                <p className="text-orange-100">Assign oxidation states</p>
              </Link>
              <Link href="/chemistry-formulas/oxidation-number-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Oxidation Number</h3>
                <p className="text-gray-600 dark:text-gray-400">Assign oxidation states</p>
              </Link>
              <Link href="/chemistry-formulas/cell-potential-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Cell Potential</h3>
                <p className="text-gray-600 dark:text-gray-400">Electrochemistry</p>
              </Link>
              <Link href="/chemistry-formulas/nernst-equation" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Nernst Equation</h3>
                <p className="text-gray-600 dark:text-gray-400">Non-standard conditions</p>
              </Link>
              <Link href="/electrochemistry-calculators" className="block p-6 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">All Redox Calculators</h3>
                <p className="text-gray-100">Explore all redox chemistry tools</p>
              </Link>
            </div>
          </div>
        </section>
      
      {/* Structured Data - EducationalArticle */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": "Redox Balancing Formula",
            "description": "Redox Balancing Formula on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/redox-balancing-formula",
            "author": {
              "@type": "Person",
              "name": "Muhammad Zohaib",
              "jobTitle": "Chemist"
            },
            "publisher": {
              "@type": "EducationalOrganization",
              "name": "ChemSolved",
              "url": "https://chemsolved.com"
            },
            "educationalLevel": "University",
            "educationalUse": "Reference"
          })
        }}
      />
      {/* Structured Data - BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://chemsolved.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Redox Balancing Formula",
                "item": "https://chemsolved.com/chemistry-formulas/redox-balancing-formula"
              }
            ]
          })
        }}
      />
      </main>
      <Footer />
    </>
  );
}
