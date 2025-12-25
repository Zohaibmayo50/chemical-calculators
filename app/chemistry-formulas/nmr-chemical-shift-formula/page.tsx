import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'NMR Chemical Shift Formula | ¹H & ¹³C NMR Reference Guide',
  description: 'Understand NMR chemical shifts for ¹H and ¹³C nuclei. Predict chemical shifts based on electron-withdrawing groups and molecular structure.',
  keywords: ['NMR', 'chemical shift', 'proton NMR', 'carbon NMR', 'spectroscopy', 'ppm', 'shielding', 'deshielding']
};

export default function NMRChemicalShiftFormulaPage() {
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
            <span className="text-gray-900 dark:text-white font-medium">NMR Chemical Shift</span>
          </nav>
        </div>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 rounded-3xl p-12 text-white shadow-2xl">
            <h1 className="text-5xl font-bold mb-4 text-center">NMR Chemical Shift</h1>
            <p className="text-xl text-center text-purple-100">
              Understanding ¹H and ¹³C NMR spectroscopy: chemical shifts, shielding, and structure determination
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-l-4 border-indigo-500">
            <h2 className="text-3xl font-bold mb-6">Chemical Shift Formula</h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl p-8">
              <div className="text-center mb-6">
                <p className="text-4xl font-bold text-blue-900 dark:text-blue-300 mb-4">
                  δ = (ν<sub>sample</sub> - ν<sub>ref</sub>) / ν<sub>spectrometer</sub> × 10⁶
                </p>
              </div>

              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p><strong>Where:</strong></p>
                <ul className="ml-6 space-y-2">
                  <li><strong>δ</strong> = Chemical shift in ppm (parts per million)</li>
                  <li><strong>ν<sub>sample</sub></strong> = Frequency of sample signal (Hz)</li>
                  <li><strong>ν<sub>ref</sub></strong> = Frequency of reference signal (Hz)</li>
                  <li><strong>ν<sub>spectrometer</sub></strong> = Operating frequency of NMR (Hz)</li>
                </ul>
              </div>

              <div className="mt-6 pt-6 border-t border-blue-200 dark:border-blue-800">
                <p className="font-bold text-lg text-blue-900 dark:text-blue-300 mb-3">Standard References:</p>
                <ul className="ml-6 space-y-1 text-gray-700 dark:text-gray-300">
                  <li>• <strong>¹H NMR</strong>: TMS (tetramethylsilane, (CH₃)₄Si) = 0.00 ppm</li>
                  <li>• <strong>¹³C NMR</strong>: TMS = 0.00 ppm</li>
                  <li>• <strong>Other solvents</strong>: CDCl₃ (7.26 ppm for ¹H, 77.0 ppm for ¹³C)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">¹H NMR Chemical Shift Ranges</h2>
            
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-xl p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-green-900 dark:text-green-300">Alkyl C-H</h3>
                  <span className="text-2xl font-bold text-green-600">0.8-1.5 ppm</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">RCH₃, R₂CH₂, R₃CH</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Highly shielded, upfield</p>
              </div>

              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/30 dark:to-blue-900/30 rounded-xl p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-cyan-900 dark:text-cyan-300">Allylic C-H</h3>
                  <span className="text-2xl font-bold text-cyan-600">1.6-2.0 ppm</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">C-CH₂-C=C</p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300">Alpha to C=O</h3>
                  <span className="text-2xl font-bold text-purple-600">2.0-2.5 ppm</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">O=C-CH₂-R, O=C-CH₃</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Deshielded by carbonyl</p>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 rounded-xl p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-amber-900 dark:text-amber-300">Alkyl halide C-H</h3>
                  <span className="text-2xl font-bold text-amber-600">3.0-4.0 ppm</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">R-CH₂-Cl, R-CH₂-Br</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Halogen withdraws electrons</p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300">Ether/Alcohol C-H</h3>
                  <span className="text-2xl font-bold text-blue-600">3.3-4.0 ppm</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">R-O-CH₂-R, R-CH₂-OH</p>
              </div>

              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/30 dark:to-cyan-900/30 rounded-xl p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-teal-900 dark:text-teal-300">Vinylic C-H</h3>
                  <span className="text-2xl font-bold text-teal-600">4.6-6.0 ppm</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">R₂C=CH₂, RC=CH-R</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Alkene protons</p>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-xl p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-300">Aromatic C-H</h3>
                  <span className="text-2xl font-bold text-indigo-600">6.5-8.5 ppm</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">Benzene ring protons</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Ring current effect, deshielded</p>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/30 dark:to-rose-900/30 rounded-xl p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-red-900 dark:text-red-300">Aldehyde C-H</h3>
                  <span className="text-2xl font-bold text-red-600">9.0-10.0 ppm</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">R-CHO</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Very deshielded, downfield</p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/30 dark:to-amber-900/30 rounded-xl p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-yellow-900 dark:text-yellow-300">Carboxylic acid O-H</h3>
                  <span className="text-2xl font-bold text-yellow-600">10-13 ppm</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">R-COOH</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Extremely deshielded, broad peak</p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">¹³C NMR Chemical Shift Ranges</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-900 dark:text-green-300 mb-3">Aliphatic C</h3>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <p>CH₃: 10-30 ppm</p>
                  <p>CH₂: 20-40 ppm</p>
                  <p>CH: 30-50 ppm</p>
                  <p>Quaternary C: 30-40 ppm</p>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-blue-900 dark:text-blue-300 mb-3">C-O, C-N</h3>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <p>C-O (ether/alcohol): 50-90 ppm</p>
                  <p>C-N (amine): 30-65 ppm</p>
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-purple-900 dark:text-purple-300 mb-3">sp² Carbons</h3>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <p>Alkene C=C: 100-150 ppm</p>
                  <p>Aromatic C: 110-160 ppm</p>
                  <p>Nitrile C≡N: 115-125 ppm</p>
                </div>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-red-900 dark:text-red-300 mb-3">Carbonyl C=O</h3>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <p>Ketone/Aldehyde: 190-220 ppm</p>
                  <p>Ester: 160-180 ppm</p>
                  <p>Carboxylic acid: 170-185 ppm</p>
                  <p>Amide: 160-180 ppm</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Shielding vs Deshielding</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-4">Shielding (Upfield, Lower δ)</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Cause:</strong> Electron density around nucleus increases</p>
                  <p><strong>Effect:</strong> Nucleus experiences weaker applied field</p>
                  <p><strong>Result:</strong> Signal appears at lower ppm (right side of spectrum)</p>
                  <p className="text-sm text-blue-600 mt-3">
                    <strong>Example:</strong> Si(CH₃)₄ (TMS) has 12 equivalent H's at 0 ppm - most shielded
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-900 dark:text-red-300 mb-4">Deshielding (Downfield, Higher δ)</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Cause:</strong> Electron density around nucleus decreases</p>
                  <p><strong>Effect:</strong> Nucleus experiences stronger applied field</p>
                  <p><strong>Result:</strong> Signal appears at higher ppm (left side of spectrum)</p>
                  <p className="text-sm text-blue-600 mt-3">
                    <strong>Factors causing deshielding:</strong>
                  </p>
                  <ul className="ml-6 space-y-1 text-sm">
                    <li>• Electron-withdrawing groups (O, N, Cl, Br)</li>
                    <li>• Aromatic ring current</li>
                    <li>• C=O groups (carbonyl)</li>
                    <li>• sp² hybridization (alkene, aromatic)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Worked Examples</h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">Example 1: Ethyl Acetate (CH₃COOCH₂CH₃)</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p className="font-bold">¹H NMR Predictions:</p>
                  <table className="w-full mt-2 text-sm">
                    <tbody>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="p-2 font-mono">CH₃CO-</td>
                        <td className="p-2">~2.0 ppm</td>
                        <td className="p-2">Singlet (3H)</td>
                        <td className="p-2 text-xs">Alpha to C=O</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="p-2 font-mono">-OCH₂-</td>
                        <td className="p-2">~4.1 ppm</td>
                        <td className="p-2">Quartet (2H)</td>
                        <td className="p-2 text-xs">Adjacent to O</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-mono">-CH₃</td>
                        <td className="p-2">~1.2 ppm</td>
                        <td className="p-2">Triplet (3H)</td>
                        <td className="p-2 text-xs">Alkyl CH₃</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-4">Example 2: Benzaldehyde (C₆H₅CHO)</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p className="font-bold">¹H NMR Predictions:</p>
                  <table className="w-full mt-2 text-sm">
                    <tbody>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="p-2 font-mono">-CHO</td>
                        <td className="p-2">~9.9 ppm</td>
                        <td className="p-2">Singlet (1H)</td>
                        <td className="p-2 text-xs">Aldehyde proton</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-mono">Ar-H</td>
                        <td className="p-2">~7.5-8.0 ppm</td>
                        <td className="p-2">Multiplet (5H)</td>
                        <td className="p-2 text-xs">Aromatic</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-4">Example 3: 2-Propanol ((CH₃)₂CHOH)</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p className="font-bold">¹H NMR Predictions:</p>
                  <table className="w-full mt-2 text-sm">
                    <tbody>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="p-2 font-mono">(CH₃)₂-</td>
                        <td className="p-2">~1.2 ppm</td>
                        <td className="p-2">Doublet (6H)</td>
                        <td className="p-2 text-xs">Coupled to CH</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="p-2 font-mono">-CH-</td>
                        <td className="p-2">~4.0 ppm</td>
                        <td className="p-2">Septet (1H)</td>
                        <td className="p-2 text-xs">Adjacent to OH</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-mono">-OH</td>
                        <td className="p-2">~2-3 ppm</td>
                        <td className="p-2">Broad singlet (1H)</td>
                        <td className="p-2 text-xs">Exchangeable</td>
                      </tr>
                    </tbody>
                  </table>
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
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Confusing Upfield/Downfield</h3>
                  <p className="text-gray-700 dark:text-gray-300">Downfield = higher δ (left), deshielded. Upfield = lower δ (right), shielded.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Ignoring Integration</h3>
                  <p className="text-gray-700 dark:text-gray-300">Peak area tells you # of equivalent protons! Always check integration.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Forgetting OH/NH Exchange</h3>
                  <p className="text-gray-700 dark:text-gray-300">O-H and N-H peaks are broad and variable (D₂O exchange test confirms).</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4">
                <span className="text-2xl">💡</span>
                <div>
                  <h3 className="font-bold text-yellow-900 dark:text-yellow-300 mb-2">Pro Tip: n+1 Rule</h3>
                  <p className="text-gray-700 dark:text-gray-300">Splitting pattern = n+1, where n = # of adjacent equivalent H's.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Related Tools</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/spectroscopy-calculators/nmr-calculator" className="block p-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">NMR Predictor</h3>
                <p className="text-purple-100">Predict chemical shifts</p>
              </Link>
              <Link href="/chemistry-formulas/degree-unsaturation-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Degree of Unsaturation</h3>
                <p className="text-gray-600 dark:text-gray-400">DBE calculations</p>
              </Link>
              <Link href="/chemistry-formulas/stereochemistry-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Stereochemistry</h3>
                <p className="text-gray-600 dark:text-gray-400">R/S configuration</p>
              </Link>
              <Link href="/chemistry-formulas/molecular-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Molecular Formula</h3>
                <p className="text-gray-600 dark:text-gray-400">Structure determination</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
