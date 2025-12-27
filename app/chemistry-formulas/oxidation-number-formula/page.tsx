import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Oxidation Number Formula | Assign Oxidation States & Rules',
  description: 'Determine oxidation numbers using systematic rules. Identify oxidation and reduction in redox reactions.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/oxidation-number-formula',
  },
  keywords: ['oxidation number', 'oxidation state', 'redox', 'oxidation rules', 'reduction', 'electron transfer']
};

export default function OxidationNumberFormulaPage() {
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
            <span className="text-gray-900 dark:text-white font-medium">Oxidation Number</span>
          </nav>
        </div>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
            <h1 className="text-5xl font-bold mb-4 text-center">Oxidation Number Formula</h1>
            <p className="text-xl text-center text-red-100">
              Systematic rules to assign oxidation states and identify redox reactions
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-l-4 border-indigo-500">
            <h2 className="text-3xl font-bold mb-6">Oxidation Number Rules (in Priority Order)</h2>
            
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-blue-600">1</span>
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-2">Elements in Free State</h3>
                    <p className="text-gray-700 dark:text-gray-300">Oxidation number = <strong className="text-green-600">0</strong></p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Examples: Na, O₂, H₂, Cl₂, P₄, S₈</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-purple-600">2</span>
                  <div>
                    <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-2">Monatomic Ions</h3>
                    <p className="text-gray-700 dark:text-gray-300">Oxidation number = <strong className="text-green-600">charge of ion</strong></p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Examples: Na⁺ = +1, Ca²⁺ = +2, Cl⁻ = -1, S²⁻ = -2</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-green-600">3</span>
                  <div>
                    <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-2">Hydrogen</h3>
                    <p className="text-gray-700 dark:text-gray-300">Usually <strong className="text-green-600">+1</strong></p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Exception: In metal hydrides (NaH, CaH₂), H = -1</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/30 dark:to-blue-900/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-cyan-600">4</span>
                  <div>
                    <h3 className="text-xl font-bold text-cyan-900 dark:text-cyan-300 mb-2">Oxygen</h3>
                    <p className="text-gray-700 dark:text-gray-300">Usually <strong className="text-green-600">-2</strong></p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Exceptions:</p>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 list-disc ml-6 mt-1">
                      <li>In peroxides (H₂O₂, Na₂O₂): O = -1</li>
                      <li>In superoxides (KO₂): O = -½</li>
                      <li>In OF₂: O = +2 (F is more electronegative)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-amber-600">5</span>
                  <div>
                    <h3 className="text-xl font-bold text-amber-900 dark:text-amber-300 mb-2">Group 1 Metals (Alkali)</h3>
                    <p className="text-gray-700 dark:text-gray-300">Always <strong className="text-green-600">+1</strong></p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Li, Na, K, Rb, Cs in compounds</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/30 dark:to-rose-900/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-pink-600">6</span>
                  <div>
                    <h3 className="text-xl font-bold text-pink-900 dark:text-pink-300 mb-2">Group 2 Metals (Alkaline Earth)</h3>
                    <p className="text-gray-700 dark:text-gray-300">Always <strong className="text-green-600">+2</strong></p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Be, Mg, Ca, Sr, Ba in compounds</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-indigo-600">7</span>
                  <div>
                    <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-300 mb-2">Fluorine</h3>
                    <p className="text-gray-700 dark:text-gray-300">Always <strong className="text-green-600">-1</strong></p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Most electronegative element - no exceptions!</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-900/30 dark:to-slate-900/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-gray-600">8</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-300 mb-2">Sum Rule</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">Sum of all oxidation numbers:</p>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• In <strong>neutral compounds</strong> = <span className="font-bold text-green-600">0</span></li>
                      <li>• In <strong>polyatomic ions</strong> = <span className="font-bold text-green-600">charge of ion</span></li>
                    </ul>
                  </div>
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
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">Example 1: H₂SO₄</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Find oxidation number of S</strong></p>
                  <p className="ml-6 mt-4"><strong>Step 1: Assign known values</strong></p>
                  <p className="ml-12">H = +1 (rule 3)</p>
                  <p className="ml-12">O = -2 (rule 4)</p>
                  
                  <p className="ml-6 mt-4"><strong>Step 2: Set up equation</strong></p>
                  <p className="ml-12">2(+1) + S + 4(-2) = 0 (neutral compound)</p>
                  <p className="ml-12">2 + S - 8 = 0</p>
                  <p className="ml-12">S - 6 = 0</p>
                  
                  <p className="ml-6 font-bold text-green-600 text-xl mt-4">S = +6</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-4">Example 2: Cr₂O₇²⁻</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Find oxidation number of Cr</strong></p>
                  <p className="ml-6 mt-4"><strong>Setup:</strong></p>
                  <p className="ml-12">2(Cr) + 7(-2) = -2 (ion charge)</p>
                  <p className="ml-12">2Cr - 14 = -2</p>
                  <p className="ml-12">2Cr = +12</p>
                  <p className="ml-12">Cr = +6</p>
                  
                  <p className="ml-6 font-bold text-green-600 text-xl mt-4">Each Cr = +6</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-4">Example 3: NH₄⁺</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Find oxidation number of N</strong></p>
                  <p className="ml-6 mt-4"><strong>Setup:</strong></p>
                  <p className="ml-12">N + 4(+1) = +1 (ion charge)</p>
                  <p className="ml-12">N + 4 = +1</p>
                  <p className="ml-12">N = -3</p>
                  
                  <p className="ml-6 font-bold text-green-600 text-xl mt-4">N = -3</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-amber-900 dark:text-amber-300 mb-4">Example 4: Fe₃O₄ (Mixed Oxidation States)</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Find average oxidation number of Fe</strong></p>
                  <p className="ml-6 mt-4"><strong>Setup:</strong></p>
                  <p className="ml-12">3(Fe) + 4(-2) = 0</p>
                  <p className="ml-12">3Fe - 8 = 0</p>
                  <p className="ml-12">Fe<sub>avg</sub> = +8/3 = +2.67</p>
                  
                  <p className="ml-6 font-bold text-green-600 mt-4">Average Fe = +8/3</p>
                  <p className="ml-6 text-sm text-blue-600 mt-2">
                    Actually: Fe₃O₄ = FeO·Fe₂O₃ (1 Fe²⁺ and 2 Fe³⁺)
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-900 dark:text-red-300 mb-4">Example 5: Identify Redox Reaction</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p className="font-mono bg-white dark:bg-gray-700 p-2 rounded">Zn + Cu²⁺ → Zn²⁺ + Cu</p>
                  <p className="mt-4"><strong>Assign oxidation numbers:</strong></p>
                  <table className="w-full mt-2 text-sm">
                    <tbody>
                      <tr>
                        <td className="p-2">Zn:</td>
                        <td className="p-2 font-mono">0 → +2</td>
                        <td className="p-2 font-bold text-red-600">Oxidation (loses 2e⁻)</td>
                      </tr>
                      <tr>
                        <td className="p-2">Cu:</td>
                        <td className="p-2 font-mono">+2 → 0</td>
                        <td className="p-2 font-bold text-blue-600">Reduction (gains 2e⁻)</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="ml-6 mt-4"><strong>Conclusion:</strong></p>
                  <p className="ml-12 text-red-600">Zn is <strong>oxidized</strong> (reducing agent)</p>
                  <p className="ml-12 text-blue-600">Cu²⁺ is <strong>reduced</strong> (oxidizing agent)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Common Oxidation States</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-blue-900 dark:text-blue-300 mb-3">Halogens</h3>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <p>F: always -1</p>
                  <p>Cl, Br, I: usually -1</p>
                  <p>Exceptions: +1, +3, +5, +7 in oxoacids/oxoanions</p>
                  <p className="font-mono text-xs">ClO⁻: Cl = +1</p>
                  <p className="font-mono text-xs">ClO₄⁻: Cl = +7</p>
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-purple-900 dark:text-purple-300 mb-3">Transition Metals</h3>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <p>Variable oxidation states</p>
                  <p>Fe: +2, +3 (most common)</p>
                  <p>Cr: +2, +3, +6</p>
                  <p>Mn: +2, +4, +7</p>
                  <p>Cu: +1, +2</p>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-900 dark:text-green-300 mb-3">Non-metals</h3>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <p>N: -3 to +5</p>
                  <p>S: -2, +4, +6</p>
                  <p>P: -3, +3, +5</p>
                  <p>C: -4 to +4</p>
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
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Confusing Oxidation Number with Charge</h3>
                  <p className="text-gray-700 dark:text-gray-300">In H₂O, O has oxidation number -2, but no actual -2 charge! It's a bookkeeping tool.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Forgetting Exceptions for O</h3>
                  <p className="text-gray-700 dark:text-gray-300">In H₂O₂, oxygen is -1 (peroxide), not -2!</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Wrong Sum Value</h3>
                  <p className="text-gray-700 dark:text-gray-300">Sum = 0 for neutral, sum = charge for ions. Don't mix up!</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4">
                <span className="text-2xl">💡</span>
                <div>
                  <h3 className="font-bold text-yellow-900 dark:text-yellow-300 mb-2">OIL RIG Memory Aid</h3>
                  <p className="text-gray-700 dark:text-gray-300">Oxidation Is Loss (of electrons), Reduction Is Gain (of electrons)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Related Tools</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/redox-calculators/oxidation-number-calculator" className="block p-6 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Oxidation Number Calculator</h3>
                <p className="text-red-100">Automated calculations</p>
              </Link>
              <Link href="/redox-calculators/redox-balancing-calculator" className="block p-6 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Redox Balancing Calculator</h3>
                <p className="text-red-100">Balance redox equations</p>
              </Link>
              <Link href="/chemistry-formulas/redox-balancing-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Redox Balancing</h3>
                <p className="text-gray-600 dark:text-gray-400">Balance redox equations</p>
              </Link>
              <Link href="/chemistry-formulas/nernst-equation" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Nernst Equation</h3>
                <p className="text-gray-600 dark:text-gray-400">Cell potential</p>
              </Link>
              <Link href="/chemistry-formulas/cell-potential-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Cell Potential</h3>
                <p className="text-gray-600 dark:text-gray-400">Electrochemistry</p>
              </Link>
              <Link href="/redox-calculators" className="block p-6 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
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
            "headline": "Oxidation Number Formula",
            "description": "Oxidation Number Formula on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/oxidation-number-formula",
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
                "name": "Oxidation Number Formula",
                "item": "https://chemsolved.com/chemistry-formulas/oxidation-number-formula"
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
