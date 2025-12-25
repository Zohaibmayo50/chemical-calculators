import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Titration Formula | Acid-Base Neutralization & Equivalence Point',
  description: 'Master titration calculations using M₁V₁ = M₂V₂ and stoichiometry. Calculate unknown concentrations, equivalence points, and titrant volumes.',
  keywords: ['titration formula', 'acid base titration', 'equivalence point', 'M1V1=M2V2', 'neutralization', 'titrant', 'analyte', 'burette']
};

export default function TitrationFormulaPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <nav className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <Link href="/">Home</Link>
            <span>→</span>
            <Link href="/chemistry-formulas">Chemistry Formulas</Link>
            <span>→</span>
            <span className="text-gray-900 dark:text-white font-medium">Titration Formula</span>
          </nav>
        </div>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
            <h1 className="text-5xl font-bold mb-4 text-center">Titration Formula</h1>
            <p className="text-xl text-center text-pink-100">
              Quantitative analysis technique to determine unknown concentration using neutralization reaction
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-l-4 border-indigo-500">
            <h2 className="text-3xl font-bold mb-6">Titration Formulas</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/30 dark:to-rose-900/30 rounded-xl p-8">
                <h3 className="text-xl font-bold text-pink-900 dark:text-pink-300 mb-4">For 1:1 Reactions (e.g., HCl + NaOH)</h3>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center">
                  <p className="text-3xl font-mono font-bold text-pink-900 dark:text-pink-300">M₁V₁ = M₂V₂</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-rose-50 to-red-50 dark:from-rose-900/30 dark:to-red-900/30 rounded-xl p-8">
                <h3 className="text-xl font-bold text-rose-900 dark:text-rose-300 mb-4">General Stoichiometric Formula</h3>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center">
                  <p className="text-3xl font-mono font-bold text-rose-900 dark:text-rose-300">n₁M₁V₁ = n₂M₂V₂</p>
                </div>
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">where n is the stoichiometric coefficient</p>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/30 dark:to-orange-900/30 rounded-xl p-8">
                <h3 className="text-xl font-bold text-red-900 dark:text-red-300 mb-4">Moles at Equivalence Point</h3>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center">
                  <p className="text-2xl font-mono font-bold text-red-900 dark:text-red-300">moles acid = moles base</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Variables Explained</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-pink-50 dark:bg-pink-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-pink-900 dark:text-pink-300 mb-2">M₁ (Molarity of acid)</h3>
                <p className="text-gray-700 dark:text-gray-300">Concentration of analyte (unknown) in mol/L</p>
              </div>
              <div className="bg-rose-50 dark:bg-rose-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-rose-900 dark:text-rose-300 mb-2">V₁ (Volume of acid)</h3>
                <p className="text-gray-700 dark:text-gray-300">Volume of analyte solution in mL or L</p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-red-900 dark:text-red-300 mb-2">M₂ (Molarity of base)</h3>
                <p className="text-gray-700 dark:text-gray-300">Concentration of titrant (known) in mol/L</p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-orange-900 dark:text-orange-300 mb-2">V₂ (Volume of base)</h3>
                <p className="text-gray-700 dark:text-gray-300">Volume of titrant added at equivalence point</p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Worked Examples</h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-pink-900 dark:text-pink-300 mb-4">Example 1: Simple 1:1 Titration</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> 25.0 mL of HCl is titrated with 0.100 M NaOH. It takes 30.5 mL of NaOH to reach equivalence. Find [HCl].</p>
                  <p className="mt-4"><strong>Reaction:</strong> HCl + NaOH → NaCl + H₂O (1:1 ratio)</p>
                  <p><strong>Given:</strong></p>
                  <p className="ml-6">V₁ (HCl) = 25.0 mL</p>
                  <p className="ml-6">M₂ (NaOH) = 0.100 M</p>
                  <p className="ml-6">V₂ (NaOH) = 30.5 mL</p>
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">M₁V₁ = M₂V₂</p>
                  <p className="ml-6">M₁(25.0) = (0.100)(30.5)</p>
                  <p className="ml-6">M₁ = 3.05 / 25.0</p>
                  <p className="ml-6 font-bold text-green-600">M₁ = 0.122 M HCl</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">Example 2: 1:2 Stoichiometry</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O</p>
                  <p>20.0 mL of H₂SO₄ requires 35.0 mL of 0.150 M NaOH. Find [H₂SO₄].</p>
                  <p className="mt-4"><strong>Solution using n₁M₁V₁ = n₂M₂V₂:</strong></p>
                  <p className="ml-6">n₁ = 1 (H₂SO₄), n₂ = 2 (NaOH)</p>
                  <p className="ml-6">(1)M₁(20.0) = (2)(0.150)(35.0)</p>
                  <p className="ml-6">M₁(20.0) = 10.5</p>
                  <p className="ml-6 font-bold text-green-600">M₁ = 0.525 M H₂SO₄</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-4">Example 3: Finding Volume Required</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> What volume of 0.200 M HCl neutralizes 40.0 mL of 0.150 M KOH?</p>
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">M₁V₁ = M₂V₂</p>
                  <p className="ml-6">(0.200)V₁ = (0.150)(40.0)</p>
                  <p className="ml-6">V₁ = 6.00 / 0.200</p>
                  <p className="ml-6 font-bold text-green-600">V₁ = 30.0 mL HCl needed</p>
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
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Ignoring Stoichiometry</h3>
                  <p className="text-gray-700 dark:text-gray-300">Must use n₁M₁V₁ = n₂M₂V₂ when mole ratio ≠ 1:1</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Unit Inconsistency</h3>
                  <p className="text-gray-700 dark:text-gray-300">Both volumes must be in same units (both mL or both L)</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Wrong Equivalence Point Volume</h3>
                  <p className="text-gray-700 dark:text-gray-300">Use volume at equivalence point, not endpoint (indicator may change slightly before/after)</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4">
                <span className="text-2xl">💡</span>
                <div>
                  <h3 className="font-bold text-yellow-900 dark:text-yellow-300 mb-2">Polyprotic Acids</h3>
                  <p className="text-gray-700 dark:text-gray-300">H₂SO₄, H₃PO₄ have multiple H⁺ - check which H⁺ is being neutralized</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Related Tools</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/acid-base-calculators/titration-calculator" className="block p-6 bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Titration Calculator</h3>
                <p className="text-pink-100">Calculate unknown concentrations</p>
              </Link>
              <Link href="/chemistry-formulas/ph-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">pH Formula</h3>
                <p className="text-gray-600 dark:text-gray-400">pH during titration</p>
              </Link>
              <Link href="/chemistry-formulas/henderson-hasselbalch-equation" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Henderson-Hasselbalch</h3>
                <p className="text-gray-600 dark:text-gray-400">Buffer pH calculations</p>
              </Link>
              <Link href="/acid-base-calculators/titration-curve-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Titration Curve</h3>
                <p className="text-gray-600 dark:text-gray-400">Visualize pH changes</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
