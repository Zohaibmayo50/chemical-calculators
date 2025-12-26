import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Degree of Unsaturation Formula | DBE & IHD Calculator Guide',
  description: 'Calculate degree of unsaturation (DBE, IHD) from molecular formula. Determine rings and double bonds in organic molecules.',
  alternates: {
    canonical: 'https://chemicalcalculators.com/chemistry-formulas/degree-unsaturation-formula',
  },
  keywords: ['degree of unsaturation', 'DBE', 'IHD', 'double bond equivalent', 'index of hydrogen deficiency', 'rings plus double bonds']
};

export default function DegreeUnsaturationFormulaPage() {
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
            <span className="text-gray-900 dark:text-white font-medium">Degree of Unsaturation</span>
          </nav>
        </div>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
            <h1 className="text-5xl font-bold mb-4 text-center">Degree of Unsaturation</h1>
            <p className="text-xl text-center text-teal-100">
              Calculate rings + double bonds from molecular formula (DBE/IHD)
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-l-4 border-indigo-500">
            <h2 className="text-3xl font-bold mb-6">The Formula</h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-xl p-8">
              <div className="text-center mb-6">
                <p className="text-4xl font-bold text-blue-900 dark:text-blue-300 mb-4">
                  DBE = C - H/2 + N/2 + 1
                </p>
                <p className="text-gray-600 dark:text-gray-400">or equivalently:</p>
                <p className="text-3xl font-bold text-teal-700 dark:text-teal-300 mt-2">
                  DBE = (2C + 2 + N - H - X)/2
                </p>
              </div>

              <div className="space-y-3 text-gray-700 dark:text-gray-300 mt-6">
                <p><strong>Where:</strong></p>
                <ul className="ml-6 space-y-2">
                  <li><strong>DBE</strong> = Degree of unsaturation (Double Bond Equivalent)</li>
                  <li><strong>C</strong> = Number of carbon atoms</li>
                  <li><strong>H</strong> = Number of hydrogen atoms (and D, T)</li>
                  <li><strong>N</strong> = Number of nitrogen atoms (trivalent)</li>
                  <li><strong>X</strong> = Number of halogens (F, Cl, Br, I)</li>
                  <li><strong>O, S</strong> = Ignored (divalent atoms don't affect count)</li>
                </ul>
              </div>

              <div className="mt-6 pt-6 border-t border-blue-200 dark:border-blue-800">
                <p className="font-bold text-lg text-blue-900 dark:text-blue-300 mb-3">Alternative Names:</p>
                <ul className="ml-6 space-y-1 text-gray-700 dark:text-gray-300">
                  <li>• <strong>IHD</strong>: Index of Hydrogen Deficiency</li>
                  <li>• <strong>Rings + Double Bonds</strong></li>
                  <li>• <strong>Degree of Deficiency</strong></li>
                  <li>• <strong>Unsaturation Number</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Interpretation of DBE Value</h2>
            
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-3">DBE = 0</h3>
                <p className="text-gray-700 dark:text-gray-300">Saturated, acyclic compound</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Example: C₄H₁₀ (butane) - no rings, no double bonds</p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-3">DBE = 1</h3>
                <p className="text-gray-700 dark:text-gray-300">One ring OR one double bond</p>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                  <p>• Cyclohexane (C₆H₁₂) - one ring</p>
                  <p>• 1-Hexene (C₆H₁₂) - one C=C</p>
                  <p>• Formaldehyde (CH₂O) - one C=O</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-3">DBE = 2</h3>
                <p className="text-gray-700 dark:text-gray-300">Two rings/double bonds OR one triple bond</p>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                  <p>• Bicyclo[2.2.1]heptane - two rings</p>
                  <p>• 1,3-Butadiene (C₄H₆) - two C=C</p>
                  <p>• Acetylene (C₂H₂) - one C≡C (counts as 2)</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-amber-900 dark:text-amber-300 mb-3">DBE = 4</h3>
                <p className="text-gray-700 dark:text-gray-300">Aromatic ring (benzene = 3 double bonds + 1 ring)</p>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                  <p>• Benzene (C₆H₆) - aromatic ring</p>
                  <p>• Toluene (C₇H₈) - benzene ring</p>
                  <p>• Aniline (C₆H₇N) - benzene ring</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/30 dark:to-rose-900/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-900 dark:text-red-300 mb-3">Counting Rules</h3>
                <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                  <li>• Each <strong>ring</strong> = 1 DBE</li>
                  <li>• Each <strong>C=C</strong> or <strong>C=O</strong> = 1 DBE</li>
                  <li>• Each <strong>C≡C</strong> or <strong>C≡N</strong> = 2 DBE</li>
                  <li>• <strong>Benzene ring</strong> = 4 DBE (1 ring + 3 double bonds)</li>
                </ul>
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
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Counting Oxygen</h3>
                  <p className="text-gray-700 dark:text-gray-300">Oxygen is IGNORED! Don't subtract or add O to the formula.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Treating X like C</h3>
                  <p className="text-gray-700 dark:text-gray-300">Halogens (F, Cl, Br, I) count like H, not C! Subtract them.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Negative DBE</h3>
                  <p className="text-gray-700 dark:text-gray-300">If DBE &lt; 0, you made an error! Recheck the formula.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4">
                <span className="text-2xl">💡</span>
                <div>
                  <h3 className="font-bold text-yellow-900 dark:text-yellow-300 mb-2">Pro Tip</h3>
                  <p className="text-gray-700 dark:text-gray-300">DBE can help deduce structure from molecular formula + spectroscopy!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Related Tools</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/organic-chemistry-calculators/degree-unsaturation-calculator" className="block p-6 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">DBE Calculator</h3>
                <p className="text-teal-100">Automated calculations</p>
              </Link>
              <Link href="/organic-chemistry-calculators/nmr-chemical-shift-calculator" className="block p-6 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">NMR Chemical Shift Calculator</h3>
                <p className="text-teal-100">Predict NMR spectra</p>
              </Link>
              <Link href="/chemistry-formulas/molecular-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Molecular Formula</h3>
                <p className="text-gray-600 dark:text-gray-400">From empirical formula</p>
              </Link>
              <Link href="/chemistry-formulas/empirical-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Empirical Formula</h3>
                <p className="text-gray-600 dark:text-gray-400">Simplest ratio</p>
              </Link>
              <Link href="/chemistry-formulas/stereochemistry-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Stereochemistry</h3>
                <p className="text-gray-600 dark:text-gray-400">R/S configuration</p>
              </Link>
              <Link href="/organic-chemistry-calculators" className="block p-6 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">All Organic Chemistry Calculators</h3>
                <p className="text-gray-100">Explore all organic chemistry tools</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
