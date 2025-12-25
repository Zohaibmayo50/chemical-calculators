import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Coordination Chemistry Formula | Complex Ions & Ligands',
  description: 'Coordination compounds, complex ions, ligands, coordination number, nomenclature, and crystal field theory.',
  keywords: ['coordination chemistry', 'complex ions', 'ligands', 'coordination number', 'crystal field theory', 'Werner theory']
};

export default function CoordinationChemistryFormulaPage() {
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
            <span className="text-gray-900 dark:text-white font-medium">Coordination Chemistry</span>
          </nav>
        </div>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-amber-600 via-orange-600 to-yellow-600 rounded-3xl p-12 text-white shadow-2xl">
            <h1 className="text-5xl font-bold mb-4 text-center">Coordination Chemistry</h1>
            <p className="text-xl text-center text-amber-100">
              Complex Ions, Ligands, and Coordination Compounds
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-l-4 border-amber-500">
            <h2 className="text-3xl font-bold mb-6">Key Definitions</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-amber-900 dark:text-amber-300 mb-3">Coordination Complex</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  A central metal atom/ion bonded to surrounding molecules or ions (ligands)
                </p>
                <div className="bg-white dark:bg-gray-700 rounded p-4 my-3 font-mono text-center">
                  [Fe(CN)₆]³⁻
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-3">Coordination Number (CN)</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Number of ligand donor atoms directly bonded to the central metal
                </p>
                <div className="bg-white dark:bg-gray-700 rounded p-4 my-3">
                  <p className="text-sm">Common CN values: 2, 4, 6</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-3">Ligand</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  A molecule or ion that donates electron pair(s) to the central metal
                </p>
                <div className="bg-white dark:bg-gray-700 rounded p-4 my-3">
                  <p className="text-sm"><strong>Monodentate:</strong> 1 donor atom (Cl⁻, NH₃, H₂O)</p>
                  <p className="text-sm"><strong>Bidentate:</strong> 2 donor atoms (en, ox²⁻)</p>
                  <p className="text-sm"><strong>Polydentate:</strong> 3+ donor atoms (EDTA⁴⁻)</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-3">Oxidation State</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Charge on the central metal atom in the complex
                </p>
                <div className="bg-white dark:bg-gray-700 rounded p-4 my-3 text-center">
                  [Cr(H₂O)₆]³⁺ → Cr is +3
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Common Ligands</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/50 dark:to-orange-900/50">
                    <th className="p-3 text-left font-bold">Formula</th>
                    <th className="p-3 text-left font-bold">Name</th>
                    <th className="p-3 text-left font-bold">Denticity</th>
                    <th className="p-3 text-left font-bold">Charge</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="p-3 font-mono">H₂O</td>
                    <td className="p-3">Aqua</td>
                    <td className="p-3">Monodentate</td>
                    <td className="p-3">0</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="p-3 font-mono">NH₃</td>
                    <td className="p-3">Ammine</td>
                    <td className="p-3">Monodentate</td>
                    <td className="p-3">0</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono">Cl⁻</td>
                    <td className="p-3">Chloro</td>
                    <td className="p-3">Monodentate</td>
                    <td className="p-3">-1</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="p-3 font-mono">CN⁻</td>
                    <td className="p-3">Cyano</td>
                    <td className="p-3">Monodentate</td>
                    <td className="p-3">-1</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono">OH⁻</td>
                    <td className="p-3">Hydroxo</td>
                    <td className="p-3">Monodentate</td>
                    <td className="p-3">-1</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="p-3 font-mono">CO</td>
                    <td className="p-3">Carbonyl</td>
                    <td className="p-3">Monodentate</td>
                    <td className="p-3">0</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono">en</td>
                    <td className="p-3">Ethylenediamine</td>
                    <td className="p-3">Bidentate</td>
                    <td className="p-3">0</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="p-3 font-mono">ox²⁻</td>
                    <td className="p-3">Oxalato</td>
                    <td className="p-3">Bidentate</td>
                    <td className="p-3">-2</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono">EDTA⁴⁻</td>
                    <td className="p-3">Ethylenediaminetetraacetate</td>
                    <td className="p-3">Hexadentate</td>
                    <td className="p-3">-4</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Nomenclature Rules</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">Naming Coordination Compounds</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>1. Cation before anion</strong> (as with all ionic compounds)</p>
                  <p><strong>2. Ligands in alphabetical order</strong> (ignore prefixes like di-, tri-)</p>
                  <p><strong>3. Use prefixes:</strong></p>
                  <div className="ml-6">
                    <p>• di-, tri-, tetra-, penta-, hexa- for simple ligands</p>
                    <p>• bis-, tris-, tetrakis- for complex ligands (e.g., bis(ethylenediamine))</p>
                  </div>
                  <p className="mt-3"><strong>4. Metal name:</strong></p>
                  <div className="ml-6">
                    <p>• Cationic/neutral complex: use element name</p>
                    <p>• Anionic complex: use -ate suffix (e.g., ferrate, cuprate)</p>
                  </div>
                  <p className="mt-3"><strong>5. Oxidation state in Roman numerals</strong></p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-4">Examples</h3>
                <div className="space-y-3">
                  <div className="bg-white dark:bg-gray-700 rounded p-4">
                    <p className="font-mono text-lg mb-2">[Co(NH₃)₆]Cl₃</p>
                    <p className="text-gray-700 dark:text-gray-300">Hexaamminecobalt(III) chloride</p>
                  </div>
                  <div className="bg-white dark:bg-gray-700 rounded p-4">
                    <p className="font-mono text-lg mb-2">K₄[Fe(CN)₆]</p>
                    <p className="text-gray-700 dark:text-gray-300">Potassium hexacyanoferrate(II)</p>
                  </div>
                  <div className="bg-white dark:bg-gray-700 rounded p-4">
                    <p className="font-mono text-lg mb-2">[Cr(H₂O)₄Cl₂]Cl</p>
                    <p className="text-gray-700 dark:text-gray-300">Tetraaquadichlorochromium(III) chloride</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Crystal Field Theory (CFT)</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-300 mb-3">d-Orbital Splitting</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Ligands create an electrostatic field that splits the five d-orbitals into different energy levels
                </p>
                
                <div className="bg-white dark:bg-gray-700 rounded p-6 my-4">
                  <h4 className="font-bold mb-3">Octahedral (most common)</h4>
                  <div className="space-y-2">
                    <p><strong>Higher energy (e<sub>g</sub>):</strong> d<sub>x²-y²</sub>, d<sub>z²</sub></p>
                    <p><strong>Lower energy (t<sub>2g</sub>):</strong> d<sub>xy</sub>, d<sub>xz</sub>, d<sub>yz</sub></p>
                    <p className="mt-3"><strong>Energy gap:</strong> Δ<sub>o</sub> (crystal field splitting energy)</p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-700 rounded p-6 my-4">
                  <h4 className="font-bold mb-3">Tetrahedral</h4>
                  <div className="space-y-2">
                    <p>Splitting is inverted and smaller: Δ<sub>t</sub> ≈ (4/9)Δ<sub>o</sub></p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-3">Spectrochemical Series</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Ligands ordered by increasing field strength (Δ):
                </p>
                <div className="bg-white dark:bg-gray-700 rounded p-4 font-mono text-center">
                  I⁻ &lt; Br⁻ &lt; Cl⁻ &lt; F⁻ &lt; OH⁻ &lt; H₂O &lt; NH₃ &lt; en &lt; CN⁻ &lt; CO
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                  <strong>Weak field:</strong> Small Δ, high-spin<br />
                  <strong>Strong field:</strong> Large Δ, low-spin
                </p>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-orange-900 dark:text-orange-300 mb-3">High-Spin vs Low-Spin</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  For d⁴, d⁵, d⁶, d⁷ octahedral complexes:
                </p>
                <div className="space-y-3">
                  <p><strong>High-Spin:</strong> Weak field ligands → electrons spread out (Hund's rule)</p>
                  <p><strong>Low-Spin:</strong> Strong field ligands → electrons pair up in lower orbitals</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Worked Examples</h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">Example 1: Determine Oxidation State</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> What is the oxidation state of Fe in [Fe(CN)₆]³⁻?</p>
                  
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">Let x = oxidation state of Fe</p>
                  <p className="ml-6">6 CN⁻ ligands each contribute -1 charge</p>
                  <p className="ml-6">Overall complex charge = -3</p>
                  <p className="ml-6 mt-2">x + 6(-1) = -3</p>
                  <p className="ml-6">x - 6 = -3</p>
                  <p className="ml-6">x = +3</p>
                  
                  <p className="ml-6 font-bold text-green-600 text-xl mt-4">Fe is in +3 oxidation state</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-4">Example 2: Name the Complex</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> Name [Pt(NH₃)₂Cl₂]</p>
                  
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">1. Ligands alphabetically: ammine before chloro</p>
                  <p className="ml-6">2. Count ligands: 2 NH₃ (diammine), 2 Cl⁻ (dichloro)</p>
                  <p className="ml-6">3. Metal: platinum (neutral complex)</p>
                  <p className="ml-6">4. Oxidation state: 0 + 2(0) + 2(-1) = -2, so Pt is +2</p>
                  
                  <p className="ml-6 font-bold text-green-600 text-xl mt-4">Diamminedichloroplatinum(II)</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-4">Example 3: Coordination Number</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> What is the CN of [Co(en)₃]³⁺?</p>
                  
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">en (ethylenediamine) is a bidentate ligand</p>
                  <p className="ml-6">3 en ligands × 2 donor atoms each = 6 donor atoms</p>
                  
                  <p className="ml-6 font-bold text-green-600 text-xl mt-4">CN = 6</p>
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
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Confusing Denticity with Coordination Number</h3>
                  <p className="text-gray-700 dark:text-gray-300">CN counts donor atoms, not ligand molecules!</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Forgetting Charge Balance</h3>
                  <p className="text-gray-700 dark:text-gray-300">Sum of oxidation state + ligand charges must equal overall charge!</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Wrong -ate Suffix</h3>
                  <p className="text-gray-700 dark:text-gray-300">Only use -ate for anionic complexes (e.g., ferrate, not ferrium)!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Related Tools</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/chemistry-formulas/oxidation-number-formula" className="block p-6 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Oxidation Numbers</h3>
                <p className="text-amber-100">Determine oxidation states</p>
              </Link>
              <Link href="/chemistry-formulas/lewis-structure-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Lewis Structures</h3>
                <p className="text-gray-600 dark:text-gray-400">Bonding fundamentals</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
