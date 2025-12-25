import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Enthalpy of Reaction Formula | Calculate ΔH°rxn from ΔH°f',
  description: 'Calculate reaction enthalpy using standard enthalpies of formation. ΔH°rxn = Σ(ΔH°f products) - Σ(ΔH°f reactants).',
  keywords: ['enthalpy of reaction', 'heat of reaction', 'standard enthalpy', 'enthalpy of formation', 'thermochemistry', 'ΔHrxn', 'ΔHf']
};

export default function EnthalpyReactionFormulaPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <nav className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <Link href="/">Home</Link>
            <span>→</span>
            <Link href="/chemistry-formulas">Chemistry Formulas</Link>
            <span>→</span>
            <span className="text-gray-900 dark:text-white font-medium">Enthalpy of Reaction</span>
          </nav>
        </div>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 rounded-3xl p-12 text-white shadow-2xl">
            <h1 className="text-5xl font-bold mb-4 text-center">Enthalpy of Reaction Formula</h1>
            <p className="text-xl text-center text-orange-100">
              Calculate heat change using standard enthalpies of formation
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-l-4 border-orange-500">
            <h2 className="text-3xl font-bold mb-6">Main Formula</h2>
            
            <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/30 dark:to-red-900/30 rounded-xl p-8">
              <div className="bg-white dark:bg-gray-700 rounded-lg p-8 text-center">
                <p className="text-4xl font-mono font-bold text-orange-900 dark:text-orange-300 mb-6">
                  ΔH°<sub>rxn</sub> = Σn·ΔH°<sub>f</sub>(products) - Σn·ΔH°<sub>f</sub>(reactants)
                </p>
                <div className="text-lg text-gray-700 dark:text-gray-300 space-y-2">
                  <p>ΔH°<sub>rxn</sub> = standard enthalpy of reaction (kJ/mol)</p>
                  <p>ΔH°<sub>f</sub> = standard enthalpy of formation (kJ/mol)</p>
                  <p>n = stoichiometric coefficient</p>
                  <p>Σ = sum of all species</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">Standard conditions: 25°C (298 K), 1 atm</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-900 dark:text-green-300 mb-3">Products (Subtract From)</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <li>• Use ΔH°<sub>f</sub> values from tables</li>
                  <li>• Multiply by coefficients</li>
                  <li>• Sum all products</li>
                  <li>• Positive contribution</li>
                </ul>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-blue-900 dark:text-blue-300 mb-3">Reactants (Subtract)</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <li>• Use ΔH°<sub>f</sub> values from tables</li>
                  <li>• Multiply by coefficients</li>
                  <li>• Sum all reactants</li>
                  <li>• Negative contribution</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Common ΔH°<sub>f</sub> Values (kJ/mol)</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                <h3 className="font-bold text-blue-900 dark:text-blue-300 mb-4 text-center">Important Elements</h3>
                <table className="w-full text-sm">
                  <tbody className="text-gray-700 dark:text-gray-300">
                    <tr><td>H₂(g)</td><td className="text-right font-mono font-bold text-green-600">0</td></tr>
                    <tr><td>O₂(g)</td><td className="text-right font-mono font-bold text-green-600">0</td></tr>
                    <tr><td>N₂(g)</td><td className="text-right font-mono font-bold text-green-600">0</td></tr>
                    <tr><td>C (graphite)</td><td className="text-right font-mono font-bold text-green-600">0</td></tr>
                    <tr><td>Br₂(l)</td><td className="text-right font-mono font-bold text-green-600">0</td></tr>
                    <tr><td className="pt-2 text-xs italic" colSpan={2}>Elements in standard state = 0</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6">
                <h3 className="font-bold text-purple-900 dark:text-purple-300 mb-4 text-center">Common Compounds</h3>
                <table className="w-full text-sm">
                  <tbody className="text-gray-700 dark:text-gray-300">
                    <tr><td>H₂O(l)</td><td className="text-right font-mono">-285.8</td></tr>
                    <tr><td>H₂O(g)</td><td className="text-right font-mono">-241.8</td></tr>
                    <tr><td>CO₂(g)</td><td className="text-right font-mono">-393.5</td></tr>
                    <tr><td>CO(g)</td><td className="text-right font-mono">-110.5</td></tr>
                    <tr><td>NH₃(g)</td><td className="text-right font-mono">-45.9</td></tr>
                    <tr><td>CH₄(g)</td><td className="text-right font-mono">-74.6</td></tr>
                    <tr><td>C₂H₅OH(l)</td><td className="text-right font-mono">-277.6</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-pink-50 dark:bg-pink-900/20 rounded-xl p-6">
                <h3 className="font-bold text-pink-900 dark:text-pink-300 mb-4 text-center">Ionic Compounds</h3>
                <table className="w-full text-sm">
                  <tbody className="text-gray-700 dark:text-gray-300">
                    <tr><td>NaCl(s)</td><td className="text-right font-mono">-411.2</td></tr>
                    <tr><td>CaO(s)</td><td className="text-right font-mono">-635.1</td></tr>
                    <tr><td>Fe₂O₃(s)</td><td className="text-right font-mono">-824.2</td></tr>
                    <tr><td>Al₂O₃(s)</td><td className="text-right font-mono">-1675.7</td></tr>
                    <tr><td>MgO(s)</td><td className="text-right font-mono">-601.6</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-6">
                <h3 className="font-bold text-amber-900 dark:text-amber-300 mb-4 text-center">Acids & Bases</h3>
                <table className="w-full text-sm">
                  <tbody className="text-gray-700 dark:text-gray-300">
                    <tr><td>HCl(g)</td><td className="text-right font-mono">-92.3</td></tr>
                    <tr><td>H₂SO₄(l)</td><td className="text-right font-mono">-814.0</td></tr>
                    <tr><td>HNO₃(l)</td><td className="text-right font-mono">-174.1</td></tr>
                    <tr><td>NaOH(s)</td><td className="text-right font-mono">-425.6</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Interpreting ΔH°<sub>rxn</sub></h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-4">ΔH° &lt; 0 (Negative)</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p className="font-bold text-green-600 text-lg">Exothermic Reaction</p>
                  <ul className="space-y-2 ml-6 list-disc">
                    <li>Heat released to surroundings</li>
                    <li>Products lower enthalpy than reactants</li>
                    <li>Thermodynamically favorable</li>
                    <li>Temperature increases</li>
                    <li>Example: Combustion reactions</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-900 dark:text-red-300 mb-4">ΔH° &gt; 0 (Positive)</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p className="font-bold text-red-600 text-lg">Endothermic Reaction</p>
                  <ul className="space-y-2 ml-6 list-disc">
                    <li>Heat absorbed from surroundings</li>
                    <li>Products higher enthalpy than reactants</li>
                    <li>Requires energy input</li>
                    <li>Temperature decreases</li>
                    <li>Example: Photosynthesis, decomposition</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Worked Examples</h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-orange-900 dark:text-orange-300 mb-4">Example 1: Combustion of Methane</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p className="font-mono bg-white dark:bg-gray-700 p-2 rounded">CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l)</p>
                  <p className="mt-4"><strong>Given ΔH°<sub>f</sub> values:</strong></p>
                  <p className="ml-6">CH₄(g) = -74.6 kJ/mol</p>
                  <p className="ml-6">O₂(g) = 0 kJ/mol (element)</p>
                  <p className="ml-6">CO₂(g) = -393.5 kJ/mol</p>
                  <p className="ml-6">H₂O(l) = -285.8 kJ/mol</p>
                  
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6"><strong>Products:</strong></p>
                  <p className="ml-12">1×(-393.5) + 2×(-285.8)</p>
                  <p className="ml-12">= -393.5 - 571.6 = -965.1 kJ</p>
                  
                  <p className="ml-6"><strong>Reactants:</strong></p>
                  <p className="ml-12">1×(-74.6) + 2×(0)</p>
                  <p className="ml-12">= -74.6 kJ</p>
                  
                  <p className="ml-6 mt-4"><strong>Calculate ΔH°<sub>rxn</sub>:</strong></p>
                  <p className="ml-12">ΔH° = -965.1 - (-74.6)</p>
                  <p className="ml-12">ΔH° = -965.1 + 74.6</p>
                  <p className="ml-6 font-bold text-green-600 text-xl mt-4">
                    ΔH°<sub>rxn</sub> = -890.5 kJ/mol (Highly Exothermic!)
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">Example 2: Formation of Ammonia</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p className="font-mono bg-white dark:bg-gray-700 p-2 rounded">N₂(g) + 3H₂(g) → 2NH₃(g)</p>
                  <p className="mt-4"><strong>Given:</strong></p>
                  <p className="ml-6">N₂(g) = 0 kJ/mol</p>
                  <p className="ml-6">H₂(g) = 0 kJ/mol</p>
                  <p className="ml-6">NH₃(g) = -45.9 kJ/mol</p>
                  
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">Products: 2×(-45.9) = -91.8 kJ</p>
                  <p className="ml-6">Reactants: 0 + 0 = 0 kJ</p>
                  <p className="ml-6">ΔH° = -91.8 - 0 = -91.8 kJ/mol</p>
                  <p className="ml-6 font-bold text-green-600 text-xl mt-4">
                    ΔH°<sub>rxn</sub> = -91.8 kJ/mol (Exothermic)
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-4">Example 3: Decomposition of Calcium Carbonate</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p className="font-mono bg-white dark:bg-gray-700 p-2 rounded">CaCO₃(s) → CaO(s) + CO₂(g)</p>
                  <p className="mt-4"><strong>Given:</strong></p>
                  <p className="ml-6">CaCO₃(s) = -1206.9 kJ/mol</p>
                  <p className="ml-6">CaO(s) = -635.1 kJ/mol</p>
                  <p className="ml-6">CO₂(g) = -393.5 kJ/mol</p>
                  
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">Products: -635.1 + (-393.5) = -1028.6 kJ</p>
                  <p className="ml-6">Reactants: -1206.9 kJ</p>
                  <p className="ml-6">ΔH° = -1028.6 - (-1206.9)</p>
                  <p className="ml-6">ΔH° = -1028.6 + 1206.9</p>
                  <p className="ml-6 font-bold text-red-600 text-xl mt-4">
                    ΔH°<sub>rxn</sub> = +178.3 kJ/mol (Endothermic)
                  </p>
                  <p className="ml-6 text-sm text-blue-600 mt-2">
                    Requires heat to decompose limestone!
                  </p>
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
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Reversing Products and Reactants</h3>
                  <p className="text-gray-700 dark:text-gray-300">It's PRODUCTS - REACTANTS, not REACTANTS - PRODUCTS! Order matters.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Forgetting Stoichiometric Coefficients</h3>
                  <p className="text-gray-700 dark:text-gray-300">For 2H₂O, multiply ΔH°f by 2! Coefficients are critical.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Assuming Elements Have ΔH°f ≠ 0</h3>
                  <p className="text-gray-700 dark:text-gray-300">Elements in standard state ALWAYS have ΔH°f = 0 by definition!</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Using Wrong State</h3>
                  <p className="text-gray-700 dark:text-gray-300">H₂O(l) ≠ H₂O(g). Phase matters! Check (s), (l), (g), or (aq).</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4">
                <span className="text-2xl">💡</span>
                <div>
                  <h3 className="font-bold text-yellow-900 dark:text-yellow-300 mb-2">Standard State Reference</h3>
                  <p className="text-gray-700 dark:text-gray-300">O₂(g), N₂(g), H₂(g), C(graphite), Br₂(l), I₂(s), Hg(l) at 25°C, 1 atm all have ΔH°f = 0</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Related Tools</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/thermodynamics-calculators/enthalpy-reaction-calculator" className="block p-6 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Enthalpy Calculator</h3>
                <p className="text-orange-100">Automated ΔH calculations</p>
              </Link>
              <Link href="/chemistry-formulas/bond-energy-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Bond Energy</h3>
                <p className="text-gray-600 dark:text-gray-400">Alternative ΔH method</p>
              </Link>
              <Link href="/chemistry-formulas/hess-law" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Hess's Law</h3>
                <p className="text-gray-600 dark:text-gray-400">Multi-step reactions</p>
              </Link>
              <Link href="/chemistry-formulas/gibbs-free-energy" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Gibbs Free Energy</h3>
                <p className="text-gray-600 dark:text-gray-400">ΔG = ΔH - TΔS</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
