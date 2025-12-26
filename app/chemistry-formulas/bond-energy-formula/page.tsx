import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Bond Energy Formula | Calculate Enthalpy from Bond Energies',
  description: 'Calculate reaction enthalpy using bond energies. ΔH = Σ(bonds broken) - Σ(bonds formed). Estimate heat of reaction from bond strengths.',
  alternates: {
    canonical: 'https://chemicalcalculators.com/chemistry-formulas/bond-energy-formula',
  },
  keywords: ['bond energy', 'bond dissociation energy', 'enthalpy', 'reaction energy', 'bond breaking', 'bond formation', 'endothermic', 'exothermic']
};

export default function BondEnergyFormulaPage() {
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
            <span className="text-gray-900 dark:text-white font-medium">Bond Energy</span>
          </nav>
        </div>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 rounded-3xl p-12 text-white shadow-2xl">
            <h1 className="text-5xl font-bold mb-4 text-center">Bond Energy Formula</h1>
            <p className="text-xl text-center text-amber-100">
              Calculate reaction enthalpy from the energy required to break and form bonds
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-l-4 border-amber-500">
            <h2 className="text-3xl font-bold mb-6">Main Formula</h2>
            
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 rounded-xl p-8">
              <div className="bg-white dark:bg-gray-700 rounded-lg p-8 text-center">
                <p className="text-4xl font-mono font-bold text-amber-900 dark:text-amber-300 mb-4">
                  ΔH<sub>rxn</sub> = Σ(BE<sub>broken</sub>) - Σ(BE<sub>formed</sub>)
                </p>
                <div className="text-lg text-gray-700 dark:text-gray-300 space-y-2 mt-6">
                  <p>ΔH<sub>rxn</sub> = enthalpy change of reaction (kJ/mol)</p>
                  <p>BE = bond energy (kJ/mol)</p>
                  <p>Σ = sum of all bonds</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-red-900 dark:text-red-300 mb-3">Bonds Broken (Reactants)</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <li>• Requires energy input</li>
                  <li>• Endothermic process</li>
                  <li>• Positive contribution to ΔH</li>
                  <li>• Count all bonds in reactants</li>
                </ul>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-900 dark:text-green-300 mb-3">Bonds Formed (Products)</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <li>• Releases energy</li>
                  <li>• Exothermic process</li>
                  <li>• Negative contribution to ΔH</li>
                  <li>• Count all bonds in products</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Common Bond Energies</h2>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
                <h3 className="font-bold text-blue-900 dark:text-blue-300 mb-3 text-center">Single Bonds</h3>
                <table className="w-full text-sm">
                  <tbody className="text-gray-700 dark:text-gray-300">
                    <tr><td>H-H</td><td className="text-right font-mono">436 kJ/mol</td></tr>
                    <tr><td>C-H</td><td className="text-right font-mono">413 kJ/mol</td></tr>
                    <tr><td>C-C</td><td className="text-right font-mono">347 kJ/mol</td></tr>
                    <tr><td>C-O</td><td className="text-right font-mono">358 kJ/mol</td></tr>
                    <tr><td>O-H</td><td className="text-right font-mono">463 kJ/mol</td></tr>
                    <tr><td>N-H</td><td className="text-right font-mono">391 kJ/mol</td></tr>
                    <tr><td>Cl-Cl</td><td className="text-right font-mono">243 kJ/mol</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4">
                <h3 className="font-bold text-purple-900 dark:text-purple-300 mb-3 text-center">Double Bonds</h3>
                <table className="w-full text-sm">
                  <tbody className="text-gray-700 dark:text-gray-300">
                    <tr><td>C=C</td><td className="text-right font-mono">614 kJ/mol</td></tr>
                    <tr><td>C=O</td><td className="text-right font-mono">799 kJ/mol</td></tr>
                    <tr><td>O=O</td><td className="text-right font-mono">498 kJ/mol</td></tr>
                    <tr><td>N=N</td><td className="text-right font-mono">418 kJ/mol</td></tr>
                    <tr><td>C=N</td><td className="text-right font-mono">615 kJ/mol</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-pink-50 dark:bg-pink-900/20 rounded-xl p-4">
                <h3 className="font-bold text-pink-900 dark:text-pink-300 mb-3 text-center">Triple Bonds</h3>
                <table className="w-full text-sm">
                  <tbody className="text-gray-700 dark:text-gray-300">
                    <tr><td>C≡C</td><td className="text-right font-mono">839 kJ/mol</td></tr>
                    <tr><td>N≡N</td><td className="text-right font-mono">945 kJ/mol</td></tr>
                    <tr><td>C≡N</td><td className="text-right font-mono">891 kJ/mol</td></tr>
                    <tr><td>C≡O</td><td className="text-right font-mono">1072 kJ/mol</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 text-center italic">
              Note: These are average values. Actual bond energies vary with molecular environment.
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Interpreting ΔH<sub>rxn</sub></h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-900 dark:text-red-300 mb-4">ΔH &gt; 0 (Positive)</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p className="font-bold text-red-600">Endothermic Reaction</p>
                  <ul className="space-y-2 ml-6 list-disc">
                    <li>More energy to break bonds than released forming bonds</li>
                    <li>Absorbs heat from surroundings</li>
                    <li>Feels cold</li>
                    <li>Example: N₂ + O₂ → 2NO</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-4">ΔH &lt; 0 (Negative)</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p className="font-bold text-green-600">Exothermic Reaction</p>
                  <ul className="space-y-2 ml-6 list-disc">
                    <li>More energy released forming bonds than required to break bonds</li>
                    <li>Releases heat to surroundings</li>
                    <li>Feels hot</li>
                    <li>Example: CH₄ + 2O₂ → CO₂ + 2H₂O</li>
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
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-amber-900 dark:text-amber-300 mb-4">Example 1: H₂ + Cl₂ → 2HCl</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6"><strong>Bonds Broken (Reactants):</strong></p>
                  <p className="ml-12">1 × H-H = 1 × 436 = 436 kJ</p>
                  <p className="ml-12">1 × Cl-Cl = 1 × 243 = 243 kJ</p>
                  <p className="ml-12 font-bold">Total broken = 679 kJ</p>
                  
                  <p className="ml-6 mt-4"><strong>Bonds Formed (Products):</strong></p>
                  <p className="ml-12">2 × H-Cl = 2 × 431 = 862 kJ</p>
                  <p className="ml-12 font-bold">Total formed = 862 kJ</p>
                  
                  <p className="ml-6 mt-4"><strong>Calculate ΔH:</strong></p>
                  <p className="ml-12">ΔH = 679 - 862 = -183 kJ/mol</p>
                  <p className="ml-6 font-bold text-green-600 text-xl mt-4">
                    ΔH = -183 kJ/mol (Exothermic)
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">Example 2: CH₄ + 2O₂ → CO₂ + 2H₂O</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Solution:</strong></p>
                  <p className="ml-6"><strong>Bonds Broken:</strong></p>
                  <p className="ml-12">CH₄: 4 × C-H = 4 × 413 = 1652 kJ</p>
                  <p className="ml-12">2O₂: 2 × O=O = 2 × 498 = 996 kJ</p>
                  <p className="ml-12 font-bold">Total = 2648 kJ</p>
                  
                  <p className="ml-6 mt-4"><strong>Bonds Formed:</strong></p>
                  <p className="ml-12">CO₂: 2 × C=O = 2 × 799 = 1598 kJ</p>
                  <p className="ml-12">2H₂O: 4 × O-H = 4 × 463 = 1852 kJ</p>
                  <p className="ml-12 font-bold">Total = 3450 kJ</p>
                  
                  <p className="ml-6 mt-4"><strong>Calculate ΔH:</strong></p>
                  <p className="ml-12">ΔH = 2648 - 3450 = -802 kJ/mol</p>
                  <p className="ml-6 font-bold text-green-600 text-xl mt-4">
                    ΔH = -802 kJ/mol (Highly Exothermic - Combustion!)
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-4">Example 3: N₂ + O₂ → 2NO</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Solution:</strong></p>
                  <p className="ml-6"><strong>Bonds Broken:</strong></p>
                  <p className="ml-12">1 × N≡N = 945 kJ</p>
                  <p className="ml-12">1 × O=O = 498 kJ</p>
                  <p className="ml-12 font-bold">Total = 1443 kJ</p>
                  
                  <p className="ml-6 mt-4"><strong>Bonds Formed:</strong></p>
                  <p className="ml-12">2 × N=O = 2 × 607 = 1214 kJ</p>
                  <p className="ml-12 font-bold">Total = 1214 kJ</p>
                  
                  <p className="ml-6 mt-4"><strong>Calculate ΔH:</strong></p>
                  <p className="ml-12">ΔH = 1443 - 1214 = +229 kJ/mol</p>
                  <p className="ml-6 font-bold text-red-600 text-xl mt-4">
                    ΔH = +229 kJ/mol (Endothermic)
                  </p>
                  <p className="ml-6 text-sm text-blue-600 mt-2">
                    Breaking strong N≡N triple bond requires high energy!
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
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Reversing the Formula</h3>
                  <p className="text-gray-700 dark:text-gray-300">It's BROKEN - FORMED, not FORMED - BROKEN! Breaking requires energy (+), forming releases energy (-).</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Counting Bonds Incorrectly</h3>
                  <p className="text-gray-700 dark:text-gray-300">CH₄ has FOUR C-H bonds, not one! Draw Lewis structures to count accurately.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Using Single Bond Energy for Double/Triple Bonds</h3>
                  <p className="text-gray-700 dark:text-gray-300">C=C (614) ≠ 2×C-C (694). Multiple bonds have different energies than multiples of single bonds.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4">
                <span className="text-2xl">💡</span>
                <div>
                  <h3 className="font-bold text-yellow-900 dark:text-yellow-300 mb-2">Bond Energy vs. Standard Enthalpy</h3>
                  <p className="text-gray-700 dark:text-gray-300">Bond energies give estimates. For accurate ΔH°, use ΔH°f values (formation enthalpies).</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Related Tools</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/thermodynamics-calculators/bond-energy-calculator" className="block p-6 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Bond Energy Calculator</h3>
                <p className="text-amber-100">Automated ΔH calculations</p>
              </Link>
              <Link href="/chemistry-formulas/enthalpy-reaction-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Enthalpy of Reaction</h3>
                <p className="text-gray-600 dark:text-gray-400">ΔH from formation enthalpies</p>
              </Link>
              <Link href="/chemistry-formulas/hess-law" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Hess's Law</h3>
                <p className="text-gray-600 dark:text-gray-400">Multi-step enthalpy</p>
              </Link>
              <Link href="/chemistry-formulas/lewis-structure" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Lewis Structures</h3>
                <p className="text-gray-600 dark:text-gray-400">Draw bonds to count them</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
