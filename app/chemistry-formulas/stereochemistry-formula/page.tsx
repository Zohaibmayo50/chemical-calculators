import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Stereochemistry Formula | R/S Configuration & Chirality Guide',
  description: 'Assign R and S configurations using Cahn-Ingold-Prelog priority rules. Master stereochemistry, chirality, and optical activity.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/stereochemistry-formula',
  },
  keywords: ['stereochemistry', 'R S configuration', 'chirality', 'enantiomers', 'diastereomers', 'Cahn Ingold Prelog', 'optical activity']
};

export default function StereochemistryFormulaPage() {
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
            <span className="text-gray-900 dark:text-white font-medium">Stereochemistry</span>
          </nav>
        </div>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
            <h1 className="text-5xl font-bold mb-4 text-center">Stereochemistry</h1>
            <p className="text-xl text-center text-pink-100">
              R/S configuration, chirality, and 3D molecular structure
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-l-4 border-pink-500">
            <h2 className="text-3xl font-bold mb-6">Cahn-Ingold-Prelog Priority Rules</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-blue-600">1</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-2">Higher Atomic Number = Higher Priority</h3>
                    <p className="text-gray-700 dark:text-gray-300">Look at atoms directly attached to chiral center</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      Priority: I (53) &gt; Br (35) &gt; Cl (17) &gt; S (16) &gt; F (9) &gt; O (8) &gt; N (7) &gt; C (6) &gt; H (1)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-purple-600">2</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-2">If Tied, Go to Next Atom</h3>
                    <p className="text-gray-700 dark:text-gray-300">Move outward from chiral center atom by atom</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      Example: -CH₂CH₃ vs -CH₃ → Both start with C, but ethyl has another C while methyl has H
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-green-600">3</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-2">Multiple Bonds Count as Multiple Atoms</h3>
                    <p className="text-gray-700 dark:text-gray-300">C=O treated as C bonded to two O's</p>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                      <p>• C=O → C bonded to (O, O, _)</p>
                      <p>• C≡N → C bonded to (N, N, N)</p>
                      <p>• C=C → each C bonded to (C, C, _)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-amber-600">4</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-amber-900 dark:text-amber-300 mb-2">Isotopes: Higher Mass Number = Higher Priority</h3>
                    <p className="text-gray-700 dark:text-gray-300">Deuterium (²H) &gt; Hydrogen (¹H)</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      Tritium (³H) &gt; Deuterium (²H) &gt; Hydrogen (¹H)

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Related Calculators</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <a href="/organic-chemistry-calculators/stereochemistry-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-blue-900 mb-2">Stereochemistry Calculator</h3>
                <p className="text-sm text-gray-600">Assign R/S configuration</p>
              </a>
              <a href="/organic-chemistry-calculators/nmr-chemical-shift-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-blue-900 mb-2">NMR Chemical Shift Calculator</h3>
                <p className="text-sm text-gray-600">Structure determination</p>
              </a>
              <a href="/chemistry-formulas/degree-of-unsaturation" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-green-900 mb-2">Degree of Unsaturation</h3>
                <p className="text-sm text-gray-600">Molecular formula analysis</p>
              </a>
              <a href="/organic-chemistry-calculators" className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-semibold mb-2">All Organic Chemistry Calculators</h3>
                <p className="text-sm opacity-90">Explore all organic chemistry tools</p>
              </a>
            </div>
          </div>
        </section>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Assigning R/S Configuration</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">Step-by-Step Procedure</h3>
                
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <span className="text-blue-600 font-bold">1.</span>
                    <div>
                      <p className="font-bold text-gray-900 dark:text-gray-100">Identify the chiral center</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Carbon with four different groups attached</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <span className="text-blue-600 font-bold">2.</span>
                    <div>
                      <p className="font-bold text-gray-900 dark:text-gray-100">Assign priorities (1-4)</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Using Cahn-Ingold-Prelog rules, 1 = highest, 4 = lowest</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <span className="text-blue-600 font-bold">3.</span>
                    <div>
                      <p className="font-bold text-gray-900 dark:text-gray-100">Orient molecule</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Put lowest priority (#4) in the back (away from you)</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <span className="text-blue-600 font-bold">4.</span>
                    <div>
                      <p className="font-bold text-gray-900 dark:text-gray-100">Trace 1 → 2 → 3</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        If <strong className="text-green-600">clockwise</strong> = <strong>R</strong> (Rectus, right)<br/>
                        If <strong className="text-purple-600">counterclockwise</strong> = <strong>S</strong> (Sinister, left)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-3">Memory Aid</h3>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong className="text-green-600">R</strong> = <strong>Right</strong> turn (clockwise) 🔄</p>
                  <p><strong className="text-purple-600">S</strong> = <strong>Sinister</strong> (left/counterclockwise) 🔃</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Worked Example</h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">Example: 2-Bromobutane</h3>
              
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <div>
                  <p className="font-bold mb-2">Structure:</p>
                  <p className="font-mono bg-white dark:bg-gray-700 p-3 rounded text-center">
                    CH₃-CHBr-CH₂-CH₃
                  </p>
                </div>

                <div>
                  <p className="font-bold mb-2">Step 1: Identify chiral center</p>
                  <p className="ml-6">C2 (the carbon with Br attached) has 4 different groups:</p>
                  <ul className="ml-12 space-y-1 text-sm">
                    <li>• Br</li>
                    <li>• H</li>
                    <li>• CH₃ (to the left)</li>
                    <li>• CH₂CH₃ (to the right)</li>
                  </ul>
                </div>

                <div>
                  <p className="font-bold mb-2">Step 2: Assign priorities</p>
                  <table className="w-full mt-2 text-sm">
                    <tbody>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="p-2 font-bold text-blue-600">1</td>
                        <td className="p-2">Br</td>
                        <td className="p-2 text-xs">Highest atomic number (35)</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="p-2 font-bold text-purple-600">2</td>
                        <td className="p-2">-CH₂CH₃</td>
                        <td className="p-2 text-xs">C attached to (C, H, H) vs methyl's (H, H, H)</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="p-2 font-bold text-green-600">3</td>
                        <td className="p-2">-CH₃</td>
                        <td className="p-2 text-xs">C attached to (H, H, H)</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-bold text-gray-400">4</td>
                        <td className="p-2">H</td>
                        <td className="p-2 text-xs">Lowest priority</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div>
                  <p className="font-bold mb-2">Step 3: Orient (H to the back)</p>
                  <p className="ml-6 text-sm">Imagine looking at the molecule with H pointing away from you</p>
                </div>

                <div>
                  <p className="font-bold mb-2">Step 4: Trace 1 → 2 → 3</p>
                  <p className="ml-6">Br (1) → CH₂CH₃ (2) → CH₃ (3)</p>
                  <p className="ml-6 mt-2">
                    If clockwise: <span className="font-bold text-green-600 text-xl">(R)-2-bromobutane</span>
                  </p>
                  <p className="ml-6">
                    If counterclockwise: <span className="font-bold text-purple-600 text-xl">(S)-2-bromobutane</span>
                  </p>
                  <p className="ml-6 mt-3 text-sm text-gray-600 dark:text-gray-400">
                    (Actual configuration depends on 3D orientation - both enantiomers exist!)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Types of Stereoisomers</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-3">Enantiomers</h3>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Definition:</strong> Non-superimposable mirror images</p>
                  <p><strong>Properties:</strong></p>
                  <ul className="ml-6 space-y-1 text-sm">
                    <li>• Opposite R/S configurations at all chiral centers</li>
                    <li>• Identical physical properties (mp, bp, density)</li>
                    <li>• Rotate plane-polarized light in opposite directions</li>
                    <li>• Different biological activity (one may be drug, other inactive/toxic)</li>
                  </ul>
                  <p className="text-sm text-blue-600 mt-2">
                    Example: (R)-ibuprofen vs (S)-ibuprofen
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-3">Diastereomers</h3>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Definition:</strong> Stereoisomers that are NOT mirror images</p>
                  <p><strong>Properties:</strong></p>
                  <ul className="ml-6 space-y-1 text-sm">
                    <li>• At least one (but not all) chiral center has opposite configuration</li>
                    <li>• Different physical properties (mp, bp, solubility)</li>
                    <li>• Different chemical reactivity</li>
                    <li>• Can be separated by standard techniques (crystallization, chromatography)</li>
                  </ul>
                  <p className="text-sm text-blue-600 mt-2">
                    Example: (2R,3R)-tartaric acid vs (2R,3S)-tartaric acid
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-amber-900 dark:text-amber-300 mb-3">Meso Compounds</h3>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Definition:</strong> Achiral molecule with chiral centers (internal plane of symmetry)</p>
                  <p><strong>Properties:</strong></p>
                  <ul className="ml-6 space-y-1 text-sm">
                    <li>• Contains 2+ chiral centers but overall achiral</li>
                    <li>• Internal mirror plane cancels optical activity</li>
                    <li>• Does NOT rotate plane-polarized light</li>
                  </ul>
                  <p className="text-sm text-blue-600 mt-2">
                    Example: (2R,3S)-tartaric acid = meso-tartaric acid
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Number of Stereoisomers</h2>
            
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/30 dark:to-blue-900/30 rounded-xl p-6">
              <div className="text-center mb-6">
                <p className="text-4xl font-bold text-cyan-900 dark:text-cyan-300 mb-4">
                  Maximum stereoisomers = 2ⁿ
                </p>
                <p className="text-gray-600 dark:text-gray-400">where n = number of chiral centers</p>
              </div>

              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p><strong>Examples:</strong></p>
                <ul className="ml-6 space-y-2">
                  <li>• 1 chiral center → 2¹ = <strong>2 stereoisomers</strong> (1 pair of enantiomers)</li>
                  <li>• 2 chiral centers → 2² = <strong>4 stereoisomers</strong> (2 pairs of enantiomers, unless meso)</li>
                  <li>• 3 chiral centers → 2³ = <strong>8 stereoisomers</strong></li>
                </ul>

                <div className="mt-4 pt-4 border-t border-cyan-200 dark:border-cyan-800">
                  <p className="font-bold text-red-600">Exception: Meso compounds reduce the count!</p>
                  <p className="text-sm mt-2">
                    If molecule has internal symmetry, actual # &lt; 2ⁿ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Optical Activity</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-3">Specific Rotation [α]</h3>
                <div className="bg-white dark:bg-gray-700 rounded p-4 my-3">
                  <p className="text-center font-mono text-lg">[α] = α / (l × c)</p>
                </div>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <p><strong>α</strong> = observed rotation (degrees)</p>
                  <p><strong>l</strong> = path length (dm)</p>
                  <p><strong>c</strong> = concentration (g/mL)</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-3">Terminology</h3>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <p><strong>(+)</strong> or <strong>d</strong> = dextrorotatory (rotates right)</p>
                  <p><strong>(-)</strong> or <strong>l</strong> = levorotatory (rotates left)</p>
                  <p className="mt-3 pt-3 border-t border-purple-200 dark:border-purple-800">
                    <strong>Important:</strong> (+)/(-) ≠ R/S!<br/>
                    <span className="text-xs">R can be (+) or (-), determined experimentally</span>
                  </p>
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
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Forgetting to Put #4 in Back</h3>
                  <p className="text-gray-700 dark:text-gray-300">If #4 is in front, your R/S assignment will be backwards!</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Confusing R/S with (+)/(-)</h3>
                  <p className="text-gray-700 dark:text-gray-300">R/S is configuration (structure). (+)/(-) is optical rotation (experimental).</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Missing Chiral Centers</h3>
                  <p className="text-gray-700 dark:text-gray-300">A carbon with 2 identical groups is NOT chiral!</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4">
                <span className="text-2xl">💡</span>
                <div>
                  <h3 className="font-bold text-yellow-900 dark:text-yellow-300 mb-2">Pro Tip: Fischer Projections</h3>
                  <p className="text-gray-700 dark:text-gray-300">Vertical lines go back, horizontal lines come forward. Makes R/S easier!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Related Tools</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/organic-calculators/stereochemistry-calculator" className="block p-6 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">R/S Configuration Tool</h3>
                <p className="text-pink-100">Assign configurations</p>
              </Link>
              <Link href="/chemistry-formulas/nmr-chemical-shift-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">NMR Chemical Shift</h3>
                <p className="text-gray-600 dark:text-gray-400">Structure elucidation</p>
              </Link>
              <Link href="/chemistry-formulas/degree-unsaturation-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Degree of Unsaturation</h3>
                <p className="text-gray-600 dark:text-gray-400">DBE calculations</p>
              </Link>
              <Link href="/chemistry-formulas/molecular-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Molecular Formula</h3>
                <p className="text-gray-600 dark:text-gray-400">From empirical formula</p>
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
            "headline": "Stereochemistry Formula",
            "description": "Stereochemistry Formula on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/stereochemistry-formula",
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
                "name": "Stereochemistry Formula",
                "item": "https://chemsolved.com/chemistry-formulas/stereochemistry-formula"
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
