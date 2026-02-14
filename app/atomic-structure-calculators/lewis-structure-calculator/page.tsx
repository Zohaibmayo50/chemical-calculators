import React from 'react';
import LewisStructureCalculator from '@/components/calculators/LewisStructureCalculator';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: 'Lewis Structure Calculator - Valence Electrons & Formal Charge',
  description: 'Calculate valence electrons, bonding pairs, lone pairs, and formal charges for Lewis structures. Determine molecular bonding and electron distribution.',
  keywords: ['Lewis structure', 'valence electrons', 'formal charge', 'bonding pairs', 'lone pairs', 'octet rule', 'chemistry calculator', 'electron dot structure'],
  alternates: {
    canonical: 'https://chemsolved.com/atomic-structure-calculators/lewis-structure-calculator',
  },
};

export default function LewisStructureCalculatorPage() {  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-4">
            Lewis Structure Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Calculate valence electrons, bonding pairs, and formal charges
          </p>
        </div>

        <LewisStructureCalculator />

        {/* Educational Content */}
        <div className="mt-12 space-y-8 text-gray-800 dark:text-gray-200">
          {/* What are Lewis Structures */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              What are Lewis Structures?
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-4">
                <strong>Lewis structures</strong> (also called Lewis dot structures or electron dot structures) are 
                diagrams that show the bonding between atoms of a molecule and the lone pairs of electrons that may exist.
              </p>
              <p className="leading-relaxed mb-4">
                These structures help us:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li><strong>Visualize molecular bonding:</strong> See how atoms share electrons</li>
                <li><strong>Predict molecular shape:</strong> Use VSEPR theory with electron pairs</li>
                <li><strong>Understand reactivity:</strong> Identify sites for chemical reactions</li>
                <li><strong>Calculate formal charges:</strong> Determine most stable structure</li>
              </ul>
              <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 mt-6">
                <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Key Concept:</p>
                <p className="text-blue-800 dark:text-blue-200">
                  In Lewis structures, dots represent valence electrons, lines represent bonds (2 electrons each), 
                  and the arrangement follows the <strong>octet rule</strong> (atoms tend to gain, lose, or share 
                  electrons to have 8 valence electrons).
                </p>
              </div>
            </div>
          </section>

          {/* How to Draw Lewis Structures */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              How to Draw Lewis Structures
            </h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3">
                  Step 1: Count Total Valence Electrons
                </h3>
                <div className="text-blue-800 dark:text-blue-200 space-y-2">
                  <p>Add up valence electrons from all atoms:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Group 1 (H, Li, Na, etc.): 1 electron</li>
                    <li>Group 14 (C, Si, etc.): 4 electrons</li>
                    <li>Group 15 (N, P, etc.): 5 electrons</li>
                    <li>Group 16 (O, S, etc.): 6 electrons</li>
                    <li>Group 17 (F, Cl, Br, I): 7 electrons</li>
                    <li>Group 18 (noble gases): 8 electrons</li>
                  </ul>
                  <p className="mt-3"><strong>For ions:</strong> Add electrons for (-) charge, subtract for (+) charge</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3">
                  Step 2: Arrange Atoms with Central Atom
                </h3>
                <div className="text-green-800 dark:text-green-200 space-y-2">
                  <p>Place least electronegative atom in center (usually):</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>H is always terminal (on the outside)</li>
                    <li>C is often central in organic molecules</li>
                    <li>In acids (HCl, H₂SO₄), H bonds to O, not to central atom</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-3">
                  Step 3: Draw Single Bonds
                </h3>
                <div className="text-purple-800 dark:text-purple-200 space-y-2">
                  <p>Connect each terminal atom to central atom with single bond (2 electrons):</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Each bond uses 2 electrons from the total</li>
                    <li>Subtract bonding electrons from total valence electrons</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-orange-900 dark:text-orange-100 mb-3">
                  Step 4: Distribute Remaining Electrons as Lone Pairs
                </h3>
                <div className="text-orange-800 dark:text-orange-200 space-y-2">
                  <p>Complete octets for terminal atoms first, then central atom:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Place lone pairs (2 electrons each) to satisfy octet rule</li>
                    <li>H only needs 2 electrons (duet rule)</li>
                    <li>If central atom lacks octet, form multiple bonds</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-teal-900 dark:text-teal-100 mb-3">
                  Step 5: Form Multiple Bonds if Needed
                </h3>
                <div className="text-teal-800 dark:text-teal-200 space-y-2">
                  <p>If central atom has fewer than 8 electrons:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Convert lone pairs from terminal atoms into bonding pairs</li>
                    <li>Double bond = 4 electrons (2 bonds)</li>
                    <li>Triple bond = 6 electrons (3 bonds)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-yellow-900 dark:text-yellow-100 mb-3">
                  Step 6: Check Formal Charges
                </h3>
                <div className="text-yellow-800 dark:text-yellow-200 space-y-2">
                  <p>Calculate formal charge for each atom:</p>
                  <p className="font-mono bg-white dark:bg-gray-800 p-2 rounded">
                    FC = V - (L + B/2)
                  </p>
                  <p className="text-sm">V = valence electrons, L = lone pair electrons, B = bonding electrons</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Best structure has formal charges closest to zero</li>
                    <li>Negative charge should be on most electronegative atom</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Worked Example */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Worked Example: Lewis Structure of CO₂
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Problem:</h4>
                  <p>Draw the Lewis structure for carbon dioxide (CO₂).</p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">Solution:</h4>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-200 dark:border-gray-600 space-y-4">
                    <div>
                      <p className="font-semibold">Step 1: Count Valence Electrons</p>
                      <p>C: 4 electrons | O: 6 electrons each</p>
                      <p className="font-mono mt-1">Total = 4 + 2(6) = 16 electrons</p>
                    </div>

                    <div>
                      <p className="font-semibold">Step 2: Arrange Atoms</p>
                      <p>Carbon is less electronegative, so it's central: O-C-O</p>
                    </div>

                    <div>
                      <p className="font-semibold">Step 3: Draw Single Bonds</p>
                      <p>Two C-O bonds: 2 × 2 = 4 electrons used</p>
                      <p className="font-mono mt-1">Remaining: 16 - 4 = 12 electrons</p>
                    </div>

                    <div>
                      <p className="font-semibold">Step 4: Complete Octets</p>
                      <p>Each oxygen gets 6 more electrons (3 lone pairs): 2 × 6 = 12 electrons</p>
                      <p className="mt-2">But now carbon only has 4 electrons! Need to form double bonds.</p>
                    </div>

                    <div>
                      <p className="font-semibold">Step 5: Form Multiple Bonds</p>
                      <p>Convert 2 lone pairs from each oxygen into bonding pairs with carbon.</p>
                      <p className="mt-2">Final structure: O=C=O (two double bonds)</p>
                      <p>Each oxygen has 2 lone pairs, carbon has 8 electrons in bonds.</p>
                    </div>

                    <div>
                      <p className="font-semibold">Step 6: Check Formal Charges</p>
                      <div className="space-y-1 mt-2">
                        <p>Carbon: FC = 4 - (0 + 8/2) = 0</p>
                        <p>Each Oxygen: FC = 6 - (4 + 4/2) = 0</p>
                        <p className="font-semibold">All formal charges are zero ✓</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg border-l-4 border-green-500">
                  <p className="font-semibold text-green-900 dark:text-green-100">Final Answer:</p>
                  <p className="text-green-800 dark:text-green-200">
                    O=C=O with each oxygen having 2 lone pairs. This structure satisfies the octet rule for all 
                    atoms and has zero formal charges on all atoms.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Formal Charge */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Understanding Formal Charge
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="leading-relaxed mb-4">
                <strong>Formal charge</strong> is a way to estimate the distribution of electrical charge within 
                a molecule. It helps determine the most stable Lewis structure when multiple possibilities exist.
              </p>
              
              <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/30 dark:to-secondary-900/30 p-6 rounded-lg mb-6">
                <p className="font-mono text-2xl text-center mb-3">
                  FC = V - (L + B/2)
                </p>
                <div className="text-sm text-center space-y-1">
                  <p><strong>V</strong> = Number of valence electrons in free atom</p>
                  <p><strong>L</strong> = Number of lone pair electrons</p>
                  <p><strong>B</strong> = Number of bonding electrons</p>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border-l-4 border-yellow-500 mb-6">
                <p className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Rules for Best Structure:</p>
                <ul className="list-disc list-inside space-y-2 text-yellow-800 dark:text-yellow-200">
                  <li>Formal charges should be as close to zero as possible</li>
                  <li>Negative formal charges should be on most electronegative atoms</li>
                  <li>Positive formal charges should be on least electronegative atoms</li>
                  <li>Like charges should not be adjacent</li>
                  <li>Sum of formal charges equals total molecular charge</li>
                </ul>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                  <thead className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
                    <tr>
                      <th className="p-3 text-left">Atom</th>
                      <th className="p-3 text-left">Valence (V)</th>
                      <th className="p-3 text-left">Bonds</th>
                      <th className="p-3 text-left">Lone Pairs</th>
                      <th className="p-3 text-left">Formal Charge</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="p-3 font-mono">N in NH₄⁺</td>
                      <td className="p-3">5</td>
                      <td className="p-3">4 (8 e⁻)</td>
                      <td className="p-3">0 (0 e⁻)</td>
                      <td className="p-3 font-bold text-red-600">+1</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="p-3 font-mono">N in NH₃</td>
                      <td className="p-3">5</td>
                      <td className="p-3">3 (6 e⁻)</td>
                      <td className="p-3">1 (2 e⁻)</td>
                      <td className="p-3 font-bold text-green-600">0</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="p-3 font-mono">O in H₂O</td>
                      <td className="p-3">6</td>
                      <td className="p-3">2 (4 e⁻)</td>
                      <td className="p-3">2 (4 e⁻)</td>
                      <td className="p-3 font-bold text-green-600">0</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="p-3 font-mono">C in CO₂</td>
                      <td className="p-3">4</td>
                      <td className="p-3">4 (8 e⁻)</td>
                      <td className="p-3">0 (0 e⁻)</td>
                      <td className="p-3 font-bold text-green-600">0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Exceptions to Octet Rule */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Exceptions to the Octet Rule
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-red-900 dark:text-red-100 mb-3">
                  Incomplete Octets
                </h3>
                <p className="text-red-800 dark:text-red-200 mb-3">
                  Some atoms are stable with fewer than 8 electrons:
                </p>
                <ul className="text-sm space-y-1">
                  <li className="font-mono">• H: 2 electrons (duet)</li>
                  <li className="font-mono">• Be: 4 electrons (BeCl₂)</li>
                  <li className="font-mono">• B: 6 electrons (BF₃)</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">
                  Odd-Electron Molecules
                </h3>
                <p className="text-blue-800 dark:text-blue-200 mb-3">
                  Molecules with odd number of electrons (radicals):
                </p>
                <ul className="text-sm space-y-1">
                  <li className="font-mono">• NO: 11 electrons</li>
                  <li className="font-mono">• NO₂: 17 electrons</li>
                  <li className="font-mono">• ClO₂: 19 electrons</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-3">
                  Expanded Octets
                </h3>
                <p className="text-purple-800 dark:text-purple-200 mb-3">
                  Period 3+ can have more than 8 electrons (use d orbitals):
                </p>
                <ul className="text-sm space-y-1">
                  <li className="font-mono">• PCl₅: 10 electrons on P</li>
                  <li className="font-mono">• SF₆: 12 electrons on S</li>
                  <li className="font-mono">• XeF₄: 12 electrons on Xe</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Applications */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Real-World Applications
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">
                  1. Drug Design
                </h3>
                <p className="text-blue-800 dark:text-blue-200">
                  Understanding Lewis structures helps pharmaceutical chemists predict how drug molecules will interact 
                  with biological targets, design more effective medications, and minimize side effects.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-3">
                  2. Organic Synthesis
                </h3>
                <p className="text-green-800 dark:text-green-200">
                  Chemists use Lewis structures to predict reaction mechanisms, identify reactive sites, and design 
                  synthesis routes for complex organic molecules.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-3">
                  3. Materials Science
                </h3>
                <p className="text-purple-800 dark:text-purple-200">
                  Lewis structures help predict material properties like conductivity, hardness, and reactivity, 
                  guiding the development of polymers, semiconductors, and nanomaterials.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-900 dark:text-orange-100 mb-3">
                  4. Environmental Chemistry
                </h3>
                <p className="text-orange-800 dark:text-orange-200">
                  Understanding molecular structure helps predict pollutant behavior, design remediation strategies, 
                  and develop green chemistry alternatives.
                </p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-teal-900 dark:text-teal-100 mb-3">
                  5. Biochemistry
                </h3>
                <p className="text-teal-800 dark:text-teal-200">
                  Lewis structures explain enzyme mechanisms, protein-ligand interactions, and the behavior of 
                  biological molecules like ATP, DNA, and amino acids.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-yellow-900 dark:text-yellow-100 mb-3">
                  6. Education
                </h3>
                <p className="text-yellow-800 dark:text-yellow-200">
                  Lewis structures are fundamental in chemistry education, helping students visualize bonding 
                  and understand molecular properties from first principles.
                </p>
              </div>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Common Mistakes to Avoid
            </h2>
            <div className="space-y-4">
              <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
                  ❌ Forgetting to Add/Subtract for Ionic Charge
                </h3>
                <p className="text-red-800 dark:text-red-200 mb-2">
                  Ions have different electron counts than neutral molecules.
                </p>
                <p className="text-sm text-red-700 dark:text-red-300">
                  <strong>Correct:</strong> NH₄⁺ has 8 electrons (not 9), OH⁻ has 8 electrons (not 7)
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
                  ❌ Violating the Octet Rule Without Good Reason
                </h3>
                <p className="text-red-800 dark:text-red-200 mb-2">
                  Most atoms follow the octet rule. Exceptions are specific cases.
                </p>
                <p className="text-sm text-red-700 dark:text-red-300">
                  <strong>Correct:</strong> Form multiple bonds if needed to satisfy octets (e.g., O=C=O)
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
                  ❌ Placing H in the Center
                </h3>
                <p className="text-red-800 dark:text-red-200 mb-2">
                  Hydrogen can only form one bond, so it's always terminal.
                </p>
                <p className="text-sm text-red-700 dark:text-red-300">
                  <strong>Correct:</strong> H is always on the outside of the structure
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
                  ❌ Incorrect Formal Charge Calculation
                </h3>
                <p className="text-red-800 dark:text-red-200 mb-2">
                  Remember: FC = V - (L + B/2), where B is total bonding electrons, not bonds.
                </p>
                <p className="text-sm text-red-700 dark:text-red-300">
                  <strong>Correct:</strong> A double bond = 4 bonding electrons, not 2
                </p>
              </div>
            </div>
          </section>

          {/* Quick Reference */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Quick Reference Guide
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Valence Electrons</h3>
                <div className="space-y-1 text-sm">
                  <p>Group 1: 1 electron</p>
                  <p>Group 14: 4 electrons</p>
                  <p>Group 15: 5 electrons</p>
                  <p>Group 16: 6 electrons</p>
                  <p>Group 17: 7 electrons</p>
                  <p>Group 18: 8 electrons</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-tertiary-50 to-primary-50 dark:from-tertiary-900/20 dark:to-primary-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Formal Charge Formula</h3>
                <div className="space-y-2">
                  <p className="font-mono text-center text-xl py-2 bg-white dark:bg-gray-800 rounded">
                    FC = V - (L + B/2)
                  </p>
                  <p className="text-sm text-center">V = valence, L = lone pair e⁻, B = bonding e⁻</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-secondary-50 to-tertiary-50 dark:from-secondary-900/20 dark:to-tertiary-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Bonding Rules</h3>
                <div className="space-y-1 text-sm">
                  <p>Single bond: 2 electrons</p>
                  <p>Double bond: 4 electrons</p>
                  <p>Triple bond: 6 electrons</p>
                  <p>Lone pair: 2 electrons</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-tertiary-50 dark:from-primary-900/20 dark:to-tertiary-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Octet Rule</h3>
                <div className="space-y-1 text-sm">
                  <p>Most atoms: 8 electrons</p>
                  <p>Hydrogen: 2 electrons</p>
                  <p>Period 3+: Can exceed 8</p>
                  <p>Be, B: Often &lt; 8</p>
                </div>
              </div>
            </div>
          </section>
        </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    🔗 Related Calculators
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="/atomic-structure-calculators/formal-charge-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Formal Charge Calculator</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/atomic-structure-calculators/hybridization-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Hybridization Calculator</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/physical-chemistry-calculators\dipole-moment-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Dipole Moment Calculator</span>
                      </a>
                    </li>
                  </ul>
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      📐 Related Formulas
                    </h3>
                    <ul className="space-y-3">
                      <li>
                        <a
                          href="/chemistry-formulas/lewis-structure"
                          className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                        >
                          <span>→</span>
                          <span>Lewis Structure Formula</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/chemistry-formulas/vsepr-theory-formula"
                          className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                        >
                          <span>→</span>
                          <span>VSEPR Theory Formula</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <a
                      href="/atomic-structure-calculators"
                      className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      All Atomic Structure Calculators →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Structured Data - SoftwareApplication */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Lewis Structure Calculator",
            "description": "Lewis Structure Calculator on ChemSolved",
            "url": "https://chemsolved.com/atomic-structure-calculators/lewis-structure-calculator",
            "applicationCategory": "EducationalApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "publisher": {
              "@type": "EducationalOrganization",
              "name": "ChemSolved",
              "url": "https://chemsolved.com"
            }
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
                "name": "Lewis Structure Calculator",
                "item": "https://chemsolved.com/atomic-structure-calculators/lewis-structure-calculator"
              }
            ]
          })
        }}
      />
      </div>
      <Footer />
    </>
  );
}