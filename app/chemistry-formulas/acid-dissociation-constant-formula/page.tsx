import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Acid Dissociation Constant Formula | Ka, pKa & pH Calculations',
  description: 'Acid dissociation constant (Ka), pKa, pH calculations for weak acids and bases, and acid-base equilibria.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/acid-dissociation-constant-formula',
  },
  keywords: ['acid dissociation constant', 'Ka', 'pKa', 'weak acid', 'pH calculation', 'acid equilibrium']
};

export default function AcidDissociationConstantFormulaPage() {
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
            <span className="text-gray-900 dark:text-white font-medium">Acid Dissociation Constant</span>
          </nav>
        </div>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
            <h1 className="text-5xl font-bold mb-4 text-center">Acid Dissociation Constant</h1>
            <p className="text-xl text-center text-cyan-100">
              Ka, pKa, and Weak Acid/Base Equilibria
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-l-4 border-indigo-500">
            <h2 className="text-3xl font-bold mb-6">Acid Dissociation Constant (K<sub>a</sub>)</h2>
            
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/30 dark:to-blue-900/30 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-cyan-900 dark:text-cyan-300 mb-4">Definition</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Equilibrium constant for the dissociation of a weak acid in water
              </p>
              
              <div className="bg-white dark:bg-gray-700 rounded p-6 my-4">
                <p className="text-center mb-4 font-mono">HA + Hâ‚‚O â‡Œ Hâ‚ƒOâº + Aâ»</p>
                <p className="text-3xl font-bold text-center mt-6">K<sub>a</sub> = [Hâ‚ƒOâº][Aâ»] / [HA]</p>
              </div>
              
              <div className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>HA</strong> = weak acid</p>
                <p><strong>Aâ»</strong> = conjugate base</p>
                <p><strong>Hâ‚ƒOâº</strong> = hydronium ion (or Hâº)</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-4">pK<sub>a</sub> Definition</h3>
              <div className="bg-white dark:bg-gray-700 rounded p-6 my-4">
                <p className="text-3xl font-bold text-center">pK<sub>a</sub> = -log(K<sub>a</sub>)</p>
                <p className="text-xl font-bold text-center mt-4">K<sub>a</sub> = 10<sup>-pKa</sup></p>
              </div>
              
              <div className="mt-4 space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                <p><strong>Low pK<sub>a</sub></strong> (0-5): Strong acid</p>
                <p><strong>Medium pK<sub>a</sub></strong> (5-10): Moderate acid</p>
                <p><strong>High pK<sub>a</sub></strong> (&gt;10): Weak acid</p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Base Dissociation Constant (K<sub>b</sub>)</h2>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-4">Weak Base Equilibrium</h3>
              
              <div className="bg-white dark:bg-gray-700 rounded p-6 my-4">
                <p className="text-center mb-4 font-mono">B + Hâ‚‚O â‡Œ BHâº + OHâ»</p>
                <p className="text-3xl font-bold text-center mt-6">K<sub>b</sub> = [BHâº][OHâ»] / [B]</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-amber-900 dark:text-amber-300 mb-4">Relationship: K<sub>a</sub> and K<sub>b</sub></h3>
              <div className="bg-white dark:bg-gray-700 rounded p-6 my-4">
                <p className="text-3xl font-bold text-center">K<sub>a</sub> Ã— K<sub>b</sub> = K<sub>w</sub></p>
                <p className="text-xl text-center mt-4">K<sub>a</sub> Ã— K<sub>b</sub> = 1.0 Ã— 10<sup>-14</sup> (at 25Â°C)</p>
              </div>
              <div className="mt-4 text-gray-700 dark:text-gray-300">
                <p className="text-center">Also:</p>
                <p className="text-xl font-bold text-center mt-2">pK<sub>a</sub> + pK<sub>b</sub> = 14.00</p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">pH Calculations for Weak Acids</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">ICE Table Method</h3>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4">For HA â‡Œ Hâº + Aâ»:</p>
                
                <div className="overflow-x-auto mb-4">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-700">
                        <th className="border border-gray-300 dark:border-gray-600 p-2"></th>
                        <th className="border border-gray-300 dark:border-gray-600 p-2">[HA]</th>
                        <th className="border border-gray-300 dark:border-gray-600 p-2">[Hâº]</th>
                        <th className="border border-gray-300 dark:border-gray-600 p-2">[Aâ»]</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 p-2 font-bold">Initial</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">C</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">0</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">0</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 p-2 font-bold">Change</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">-x</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">+x</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">+x</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 p-2 font-bold">Equilibrium</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">C - x</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">x</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">x</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="bg-white dark:bg-gray-700 rounded p-4 my-4">
                  <p className="text-xl font-bold text-center">K<sub>a</sub> = xÂ² / (C - x)</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-4">Simplification (5% Rule)</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  If C/K<sub>a</sub> &gt; 100, then x &lt;&lt; C, so (C - x) â‰ˆ C
                </p>
                
                <div className="bg-white dark:bg-gray-700 rounded p-4 my-4">
                  <p className="text-2xl font-bold text-center mb-4">K<sub>a</sub> â‰ˆ xÂ² / C</p>
                  <p className="text-2xl font-bold text-center mt-4">x = âˆš(K<sub>a</sub> Ã— C)</p>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  Then: pH = -log(x)
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-4">Percent Dissociation</h3>
                <div className="bg-white dark:bg-gray-700 rounded p-4 my-4">
                  <p className="text-2xl font-bold text-center">% dissociation = (x / C) Ã— 100%</p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                  Typical weak acids: 1-10% dissociation
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Common pK<sub>a</sub> Values</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/50 dark:to-blue-900/50">
                    <th className="p-3 text-left font-bold">Acid</th>
                    <th className="p-3 text-left font-bold">Formula</th>
                    <th className="p-3 text-left font-bold">pK<sub>a</sub></th>
                    <th className="p-3 text-left font-bold">K<sub>a</sub></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="p-3">Hydrochloric acid</td>
                    <td className="p-3 font-mono">HCl</td>
                    <td className="p-3">-7</td>
                    <td className="p-3">~10â· (strong)</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="p-3">Sulfuric acid (1st)</td>
                    <td className="p-3 font-mono">Hâ‚‚SOâ‚„</td>
                    <td className="p-3">-3</td>
                    <td className="p-3">~10Â³ (strong)</td>
                  </tr>
                  <tr>
                    <td className="p-3">Phosphoric acid (1st)</td>
                    <td className="p-3 font-mono">Hâ‚ƒPOâ‚„</td>
                    <td className="p-3">2.15</td>
                    <td className="p-3">7.1 Ã— 10â»Â³</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="p-3">Acetic acid</td>
                    <td className="p-3 font-mono">CHâ‚ƒCOOH</td>
                    <td className="p-3">4.75</td>
                    <td className="p-3">1.8 Ã— 10â»âµ</td>
                  </tr>
                  <tr>
                    <td className="p-3">Carbonic acid (1st)</td>
                    <td className="p-3 font-mono">Hâ‚‚COâ‚ƒ</td>
                    <td className="p-3">6.35</td>
                    <td className="p-3">4.5 Ã— 10â»â·</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="p-3">Hydrocyanic acid</td>
                    <td className="p-3 font-mono">HCN</td>
                    <td className="p-3">9.21</td>
                    <td className="p-3">6.2 Ã— 10â»Â¹â°</td>
                  </tr>
                  <tr>
                    <td className="p-3">Ammonium ion</td>
                    <td className="p-3 font-mono">NHâ‚„âº</td>
                    <td className="p-3">9.25</td>
                    <td className="p-3">5.6 Ã— 10â»Â¹â°</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="p-3">Water</td>
                    <td className="p-3 font-mono">Hâ‚‚O</td>
                    <td className="p-3">15.7</td>
                    <td className="p-3">2.0 Ã— 10â»Â¹â¶</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Worked Examples</h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">Example 1: Calculate pH of Weak Acid</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> Calculate pH of 0.10 M acetic acid (K<sub>a</sub> = 1.8 Ã— 10â»âµ).</p>
                  
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">Check: C/K<sub>a</sub> = 0.10/(1.8Ã—10â»âµ) = 5,556 &gt; 100 âœ“ (can use simplification)</p>
                  <p className="ml-6 mt-2">x = âˆš(K<sub>a</sub> Ã— C)</p>
                  <p className="ml-6">x = âˆš(1.8Ã—10â»âµ Ã— 0.10)</p>
                  <p className="ml-6">x = âˆš(1.8Ã—10â»â¶)</p>
                  <p className="ml-6">x = 1.34Ã—10â»Â³ M = [Hâº]</p>
                  <p className="ml-6 mt-2">pH = -log(1.34Ã—10â»Â³)</p>
                  
                  <p className="ml-6 font-bold text-green-600 text-xl mt-4">pH = 2.87</p>
                  
                  <p className="mt-4 text-sm">Check: % dissociation = (1.34Ã—10â»Â³/0.10) Ã— 100% = 1.34% &lt; 5% âœ“</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-4">Example 2: Calculate K<sub>a</sub> from pH</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> A 0.50 M weak acid has pH = 2.70. Calculate K<sub>a</sub>.</p>
                  
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">pH = 2.70 â†’ [Hâº] = 10â»Â²Â·â·â° = 2.0 Ã— 10â»Â³ M</p>
                  <p className="ml-6">From ICE table: [Hâº] = [Aâ»] = x = 2.0 Ã— 10â»Â³</p>
                  <p className="ml-6">[HA] = 0.50 - 0.002 â‰ˆ 0.50 M</p>
                  <p className="ml-6 mt-2">K<sub>a</sub> = [Hâº][Aâ»] / [HA]</p>
                  <p className="ml-6">K<sub>a</sub> = (2.0Ã—10â»Â³)Â² / 0.50</p>
                  <p className="ml-6">K<sub>a</sub> = (4.0Ã—10â»â¶) / 0.50</p>
                  
                  <p className="ml-6 font-bold text-green-600 text-xl mt-4">K<sub>a</sub> = 8.0 Ã— 10â»â¶</p>
                  <p className="ml-6 mt-2">pK<sub>a</sub> = -log(8.0Ã—10â»â¶) = 5.10</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-4">Example 3: K<sub>a</sub> and K<sub>b</sub> Relationship</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> NHâ‚ƒ has K<sub>b</sub> = 1.8 Ã— 10â»âµ. What is K<sub>a</sub> for NHâ‚„âº?</p>
                  
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">K<sub>a</sub> Ã— K<sub>b</sub> = K<sub>w</sub></p>
                  <p className="ml-6">K<sub>a</sub> = K<sub>w</sub> / K<sub>b</sub></p>
                  <p className="ml-6">K<sub>a</sub> = (1.0Ã—10â»Â¹â´) / (1.8Ã—10â»âµ)</p>
                  
                  <p className="ml-6 font-bold text-green-600 text-xl mt-4">K<sub>a</sub>(NHâ‚„âº) = 5.6 Ã— 10â»Â¹â°</p>
                  <p className="ml-6 mt-2">pK<sub>a</sub> + pK<sub>b</sub> = 9.25 + 4.75 = 14.00 âœ“</p>
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
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Using Simplification When Invalid</h3>
                  <p className="text-gray-700 dark:text-gray-300">Always check C/K<sub>a</sub> &gt; 100 before simplifying!</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">âš ï¸</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Confusing K<sub>a</sub> and pK<sub>a</sub></h3>
                  <p className="text-gray-700 dark:text-gray-300">Lower pK<sub>a</sub> = stronger acid (higher K<sub>a</sub>)!</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">âš ï¸</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Forgetting Equilibrium</h3>
                  <p className="text-gray-700 dark:text-gray-300">For weak acids, [Hâº] â‰  initial concentration!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Related Tools</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/chemistry-formulas/ph-formula" className="block p-6 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">pH Calculator</h3>
                <p className="text-cyan-100">pH and pOH calculations</p>
              </Link>
              <Link href="/chemistry-formulas/buffer-solution-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Buffer Solutions</h3>
                <p className="text-gray-600 dark:text-gray-400">Henderson-Hasselbalch</p>
              </Link>
              <Link href="/" className="block p-6 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">All Acid-Base Calculators</h3>
                <p className="text-white/90">Explore all acid-base tools</p>
              </Link>
              <Link href="/chemistry-formulas/equilibrium-constant" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Equilibrium Constant</h3>
                <p className="text-gray-600 dark:text-gray-400">General K calculations</p>
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
            "headline": "Acid Dissociation Constant Formula",
            "description": "Acid Dissociation Constant Formula on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/acid-dissociation-constant-formula",
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
                "name": "Acid Dissociation Constant Formula",
                "item": "https://chemsolved.com/chemistry-formulas/acid-dissociation-constant-formula"
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
