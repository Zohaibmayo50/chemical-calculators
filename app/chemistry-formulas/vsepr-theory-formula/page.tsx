import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'VSEPR Theory Formula | Molecular Geometry Prediction',
  description: 'VSEPR theory for predicting molecular geometry, bond angles, and electron domain arrangements.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/vsepr-theory-formula',
  },
  keywords: ['VSEPR theory', 'molecular geometry', 'electron geometry', 'bond angles', 'Lewis structures']
};

export default function VSEPRTheoryFormulaPage() {
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
            <span className="text-gray-900 dark:text-white font-medium">VSEPR Theory</span>
          </nav>
        </div>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600 rounded-3xl p-12 text-white shadow-2xl">
            <h1 className="text-5xl font-bold mb-4 text-center">VSEPR Theory Formula</h1>
            <p className="text-xl text-center text-violet-100">
              Valence Shell Electron Pair Repulsion Theory
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-l-4 border-violet-500">
            <h2 className="text-3xl font-bold mb-6">VSEPR Principle</h2>
            
            <div className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/30 dark:to-purple-900/30 rounded-xl p-6 mb-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong>Core Concept:</strong> Electron pairs around a central atom repel each other and arrange themselves to minimize repulsion, achieving maximum distance from each other.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-3">1. Draw Lewis Structure</h3>
                <p className="text-gray-700 dark:text-gray-300">Determine total valence electrons and draw bonds</p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-3">2. Count Electron Domains</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  â€¢ Bonding domains: Single, double, or triple bonds (each counts as ONE)<br />
                  â€¢ Lone pairs: Non-bonding electron pairs
                </p>
              </div>

              <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-300 mb-3">3. Determine Electron Geometry</h3>
                <p className="text-gray-700 dark:text-gray-300">Based on total number of electron domains</p>
              </div>

              <div className="bg-pink-50 dark:bg-pink-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-pink-900 dark:text-pink-300 mb-3">4. Determine Molecular Geometry</h3>
                <p className="text-gray-700 dark:text-gray-300">Based on bonding domains only (ignore lone pairs for shape name)</p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Electron Domain Geometries</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-3">2 Electron Domains</h3>
                <p className="text-gray-700 dark:text-gray-300"><strong>Electron Geometry:</strong> Linear</p>
                <p className="text-gray-700 dark:text-gray-300"><strong>Bond Angle:</strong> 180Â°</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Example: BeClâ‚‚, COâ‚‚</p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-3">3 Electron Domains</h3>
                <p className="text-gray-700 dark:text-gray-300"><strong>Electron Geometry:</strong> Trigonal Planar</p>
                <p className="text-gray-700 dark:text-gray-300"><strong>Bond Angle:</strong> 120Â°</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Example: BFâ‚ƒ, SOâ‚ƒ</p>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Related Calculators</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <a href="/atomic-structure-calculators/lewis-structure-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-blue-900 mb-2">Lewis Structure Calculator</h3>
                <p className="text-sm text-gray-600">Draw Lewis structures</p>
              </a>
              <a href="/atomic-structure-calculators/hybridization-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-blue-900 mb-2">Hybridization Calculator</h3>
                <p className="text-sm text-gray-600">Determine orbital hybridization</p>
              </a>
              <a href="/chemistry-formulas/lewis-structure" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-green-900 mb-2">Lewis Structure Formula</h3>
                <p className="text-sm text-gray-600">Electron dot structures</p>
              </a>
              <a href="/atomic-structure-calculators" className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-semibold mb-2">All Atomic Structure Calculators</h3>
                <p className="text-sm opacity-90">Explore all molecular structure tools</p>
              </a>
            </div>
          </div>
        </section>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-3">4 Electron Domains</h3>
                <p className="text-gray-700 dark:text-gray-300"><strong>Electron Geometry:</strong> Tetrahedral</p>
                <p className="text-gray-700 dark:text-gray-300"><strong>Bond Angle:</strong> 109.5Â°</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Example: CHâ‚„, NHâ‚„âº</p>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-orange-900 dark:text-orange-300 mb-3">5 Electron Domains</h3>
                <p className="text-gray-700 dark:text-gray-300"><strong>Electron Geometry:</strong> Trigonal Bipyramidal</p>
                <p className="text-gray-700 dark:text-gray-300"><strong>Bond Angles:</strong> 90Â°, 120Â°, 180Â°</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Example: PClâ‚…, AsFâ‚…</p>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-900 dark:text-red-300 mb-3">6 Electron Domains</h3>
                <p className="text-gray-700 dark:text-gray-300"><strong>Electron Geometry:</strong> Octahedral</p>
                <p className="text-gray-700 dark:text-gray-300"><strong>Bond Angle:</strong> 90Â°, 180Â°</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Example: SFâ‚†, PFâ‚†â»</p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Molecular Geometries with Lone Pairs</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-violet-100 to-purple-100 dark:from-violet-900/50 dark:to-purple-900/50">
                    <th className="p-3 text-left font-bold">Domains</th>
                    <th className="p-3 text-left font-bold">Bonding</th>
                    <th className="p-3 text-left font-bold">Lone Pairs</th>
                    <th className="p-3 text-left font-bold">Molecular Shape</th>
                    <th className="p-3 text-left font-bold">Bond Angle</th>
                    <th className="p-3 text-left font-bold">Example</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="p-3">2</td>
                    <td className="p-3">2</td>
                    <td className="p-3">0</td>
                    <td className="p-3 font-bold">Linear</td>
                    <td className="p-3">180Â°</td>
                    <td className="p-3">COâ‚‚</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="p-3">3</td>
                    <td className="p-3">3</td>
                    <td className="p-3">0</td>
                    <td className="p-3 font-bold">Trigonal Planar</td>
                    <td className="p-3">120Â°</td>
                    <td className="p-3">BFâ‚ƒ</td>
                  </tr>
                  <tr>
                    <td className="p-3">3</td>
                    <td className="p-3">2</td>
                    <td className="p-3">1</td>
                    <td className="p-3 font-bold">Bent</td>
                    <td className="p-3">&lt;120Â°</td>
                    <td className="p-3">SOâ‚‚</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="p-3">4</td>
                    <td className="p-3">4</td>
                    <td className="p-3">0</td>
                    <td className="p-3 font-bold">Tetrahedral</td>
                    <td className="p-3">109.5Â°</td>
                    <td className="p-3">CHâ‚„</td>
                  </tr>
                  <tr>
                    <td className="p-3">4</td>
                    <td className="p-3">3</td>
                    <td className="p-3">1</td>
                    <td className="p-3 font-bold">Trigonal Pyramidal</td>
                    <td className="p-3">~107Â°</td>
                    <td className="p-3">NHâ‚ƒ</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="p-3">4</td>
                    <td className="p-3">2</td>
                    <td className="p-3">2</td>
                    <td className="p-3 font-bold">Bent</td>
                    <td className="p-3">~104.5Â°</td>
                    <td className="p-3">Hâ‚‚O</td>
                  </tr>
                  <tr>
                    <td className="p-3">5</td>
                    <td className="p-3">5</td>
                    <td className="p-3">0</td>
                    <td className="p-3 font-bold">Trigonal Bipyramidal</td>
                    <td className="p-3">90Â°, 120Â°</td>
                    <td className="p-3">PClâ‚…</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="p-3">5</td>
                    <td className="p-3">4</td>
                    <td className="p-3">1</td>
                    <td className="p-3 font-bold">See-Saw</td>
                    <td className="p-3">&lt;120Â°, &lt;90Â°</td>
                    <td className="p-3">SFâ‚„</td>
                  </tr>
                  <tr>
                    <td className="p-3">5</td>
                    <td className="p-3">3</td>
                    <td className="p-3">2</td>
                    <td className="p-3 font-bold">T-Shaped</td>
                    <td className="p-3">&lt;90Â°</td>
                    <td className="p-3">ClFâ‚ƒ</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="p-3">5</td>
                    <td className="p-3">2</td>
                    <td className="p-3">3</td>
                    <td className="p-3 font-bold">Linear</td>
                    <td className="p-3">180Â°</td>
                    <td className="p-3">XeFâ‚‚</td>
                  </tr>
                  <tr>
                    <td className="p-3">6</td>
                    <td className="p-3">6</td>
                    <td className="p-3">0</td>
                    <td className="p-3 font-bold">Octahedral</td>
                    <td className="p-3">90Â°</td>
                    <td className="p-3">SFâ‚†</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="p-3">6</td>
                    <td className="p-3">5</td>
                    <td className="p-3">1</td>
                    <td className="p-3 font-bold">Square Pyramidal</td>
                    <td className="p-3">&lt;90Â°</td>
                    <td className="p-3">BrFâ‚…</td>
                  </tr>
                  <tr>
                    <td className="p-3">6</td>
                    <td className="p-3">4</td>
                    <td className="p-3">2</td>
                    <td className="p-3 font-bold">Square Planar</td>
                    <td className="p-3">90Â°</td>
                    <td className="p-3">XeFâ‚„</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Bond Angle Modifications</h2>
            
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-900 dark:text-red-300 mb-3">Lone Pair Repulsion</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong>Repulsion Strength:</strong> LP-LP &gt; LP-BP &gt; BP-BP
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Lone pairs occupy more space than bonding pairs, compressing bond angles
                </p>
                <div className="mt-3 p-4 bg-white dark:bg-gray-700 rounded">
                  <p className="font-mono text-sm">
                    CHâ‚„: 109.5Â° (no LP)<br />
                    NHâ‚ƒ: 107Â° (1 LP)<br />
                    Hâ‚‚O: 104.5Â° (2 LP)
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-3">Multiple Bonds</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Double and triple bonds contain more electron density, slightly repel other bonds more
                </p>
                <div className="mt-3 p-4 bg-white dark:bg-gray-700 rounded">
                  <p className="font-mono text-sm">
                    Hâ‚‚CO (formaldehyde): H-C-H angle &lt; 120Â°
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-3">Electronegativity Effects</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  More electronegative substituents attract bonding electrons, slightly reducing bond angles
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Worked Examples</h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">Example 1: Hâ‚‚O (Water)</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Step 1:</strong> Draw Lewis structure</p>
                  <p className="ml-6">O has 6 valence eâ», each H has 1 â†’ total = 8 eâ»</p>
                  
                  <p className="mt-4"><strong>Step 2:</strong> Count electron domains around O</p>
                  <p className="ml-6">2 bonding domains (O-H bonds)</p>
                  <p className="ml-6">2 lone pairs</p>
                  <p className="ml-6 font-bold">Total = 4 electron domains</p>
                  
                  <p className="mt-4"><strong>Step 3:</strong> Electron geometry</p>
                  <p className="ml-6 font-bold">Tetrahedral</p>
                  
                  <p className="mt-4"><strong>Step 4:</strong> Molecular geometry (2 bonds, 2 LP)</p>
                  <p className="ml-6 font-bold text-green-600 text-xl">Bent, ~104.5Â°</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-4">Example 2: SFâ‚„ (Sulfur Tetrafluoride)</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Step 1:</strong> Lewis structure</p>
                  <p className="ml-6">S has 6 valence eâ», each F has 7 â†’ S forms 4 bonds, 1 LP remains</p>
                  
                  <p className="mt-4"><strong>Step 2:</strong> Count electron domains</p>
                  <p className="ml-6">4 bonding domains (S-F bonds)</p>
                  <p className="ml-6">1 lone pair</p>
                  <p className="ml-6 font-bold">Total = 5 electron domains</p>
                  
                  <p className="mt-4"><strong>Step 3:</strong> Electron geometry</p>
                  <p className="ml-6 font-bold">Trigonal Bipyramidal</p>
                  
                  <p className="mt-4"><strong>Step 4:</strong> Lone pair placement</p>
                  <p className="ml-6">Lone pairs prefer equatorial positions (less repulsion)</p>
                  
                  <p className="mt-4"><strong>Step 5:</strong> Molecular geometry (4 bonds, 1 LP)</p>
                  <p className="ml-6 font-bold text-green-600 text-xl">See-Saw shape</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-4">Example 3: XeFâ‚„ (Xenon Tetrafluoride)</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Step 1:</strong> Lewis structure</p>
                  <p className="ml-6">Xe has 8 valence eâ», forms 4 bonds, 2 LP remain</p>
                  
                  <p className="mt-4"><strong>Step 2:</strong> Count electron domains</p>
                  <p className="ml-6">4 bonding domains</p>
                  <p className="ml-6">2 lone pairs</p>
                  <p className="ml-6 font-bold">Total = 6 electron domains</p>
                  
                  <p className="mt-4"><strong>Step 3:</strong> Electron geometry</p>
                  <p className="ml-6 font-bold">Octahedral</p>
                  
                  <p className="mt-4"><strong>Step 4:</strong> Lone pair placement</p>
                  <p className="ml-6">2 LP occupy opposite positions (trans)</p>
                  
                  <p className="mt-4"><strong>Step 5:</strong> Molecular geometry (4 bonds, 2 LP)</p>
                  <p className="ml-6 font-bold text-green-600 text-xl">Square Planar, 90Â°</p>
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
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Forgetting Lone Pairs</h3>
                  <p className="text-gray-700 dark:text-gray-300">Always count ALL electron domains, not just bonds!</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">âš ï¸</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Multiple Bonds = Multiple Domains</h3>
                  <p className="text-gray-700 dark:text-gray-300">Double and triple bonds count as ONE electron domain!</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">âš ï¸</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Confusing Electron vs Molecular Geometry</h3>
                  <p className="text-gray-700 dark:text-gray-300">Electron geometry uses all domains; molecular shape ignores LP positions!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Related Tools</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/chemistry-formulas/lewis-structure" className="block p-6 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Lewis Structures</h3>
                <p className="text-violet-100">Draw electron arrangements</p>
              </Link>
              <Link href="/chemistry-formulas/vsepr-theory" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Molecular Geometry</h3>
                <p className="text-gray-600 dark:text-gray-400">Shape predictions</p>
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
            "headline": "Vsepr Theory Formula",
            "description": "Vsepr Theory Formula on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/vsepr-theory-formula",
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
                "name": "Vsepr Theory Formula",
                "item": "https://chemsolved.com/chemistry-formulas/vsepr-theory-formula"
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
