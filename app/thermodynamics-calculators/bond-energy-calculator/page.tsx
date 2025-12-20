import React from 'react';
import BondEnergyCalculator from '@/components/calculators/BondEnergyCalculator';

export const metadata = {
  title: 'Bond Energy Calculator | ChemCalc',
  description: 'Calculate reaction enthalpy (ΔH) from bond energies. Use bond dissociation energies to determine whether reactions are exothermic or endothermic.',
  keywords: 'bond energy, bond dissociation energy, enthalpy, reaction energy, exothermic, endothermic, thermodynamics, chemistry calculator',
};

export default function BondEnergyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-tertiary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Bond Energy Calculator
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Calculate the enthalpy change of chemical reactions using bond dissociation energies. 
              Determine if reactions release or absorb energy.
            </p>
          </div>

          {/* Calculator Component */}
          <BondEnergyCalculator />

          {/* Educational Content */}
          <div className="mt-12 prose prose-lg dark:prose-invert max-w-none">
            {/* What is Bond Energy */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                What is Bond Energy?
              </h2>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg mb-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <strong>Bond energy</strong> (also called bond dissociation energy) is the amount of 
                  energy required to break one mole of a particular bond in gaseous molecules under 
                  standard conditions. It is always a positive value because breaking bonds requires 
                  energy input—it's an endothermic process.
                </p>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 mb-4">
                  <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-2">
                    Key Formula
                  </h3>
                  <div className="font-mono text-lg text-gray-800 dark:text-gray-200">
                    ΔH<sub>rxn</sub> = Σ(Bonds Broken) - Σ(Bonds Formed)
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Where bond energies for bonds broken contribute positively, and bonds formed 
                    contribute negatively to the overall enthalpy change.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">
                      Breaking Bonds ⬆️
                    </h4>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• Requires energy input</li>
                      <li>• Endothermic process</li>
                      <li>• Positive contribution (+)</li>
                      <li>• Occurs in reactants</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                      Forming Bonds ⬇️
                    </h4>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• Releases energy</li>
                      <li>• Exothermic process</li>
                      <li>• Negative contribution (-)</li>
                      <li>• Occurs in products</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Common Bond Energies Table */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Common Bond Energies
              </h2>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Bond energies are typically measured in kilojoules per mole (kJ/mol). Here are some 
                commonly used values:
              </p>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-6">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gradient-to-r from-primary-500 to-secondary-500">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                          Bond Type
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                          Energy (kJ/mol)
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                          Category
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                      <tr className="bg-blue-50 dark:bg-blue-900/20">
                        <td className="px-6 py-4 whitespace-nowrap font-mono text-sm text-gray-900 dark:text-white">H-H</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">436</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">Hydrogen bonds</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap font-mono text-sm text-gray-900 dark:text-white">C-H</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">413</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">Carbon-hydrogen</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-700/50">
                        <td className="px-6 py-4 whitespace-nowrap font-mono text-sm text-gray-900 dark:text-white">C-C</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">347</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">Single carbon bond</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap font-mono text-sm text-gray-900 dark:text-white">C=C</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">614</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">Double carbon bond</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-700/50">
                        <td className="px-6 py-4 whitespace-nowrap font-mono text-sm text-gray-900 dark:text-white">C≡C</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">839</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">Triple carbon bond</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap font-mono text-sm text-gray-900 dark:text-white">C-O</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">358</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">Single carbon-oxygen</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-700/50">
                        <td className="px-6 py-4 whitespace-nowrap font-mono text-sm text-gray-900 dark:text-white">C=O</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">799</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">Double carbon-oxygen</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap font-mono text-sm text-gray-900 dark:text-white">O-H</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">463</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">Oxygen-hydrogen</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-700/50">
                        <td className="px-6 py-4 whitespace-nowrap font-mono text-sm text-gray-900 dark:text-white">O=O</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">498</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">Double oxygen bond</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap font-mono text-sm text-gray-900 dark:text-white">N-H</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">391</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">Nitrogen-hydrogen</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-700/50">
                        <td className="px-6 py-4 whitespace-nowrap font-mono text-sm text-gray-900 dark:text-white">N≡N</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">945</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">Triple nitrogen bond</td>
                      </tr>
                      <tr className="bg-yellow-50 dark:bg-yellow-900/20">
                        <td className="px-6 py-4 whitespace-nowrap font-mono text-sm text-gray-900 dark:text-white">H-Cl</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">431</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">Hydrogen halide</td>
                      </tr>
                      <tr className="bg-yellow-50 dark:bg-yellow-900/20">
                        <td className="px-6 py-4 whitespace-nowrap font-mono text-sm text-gray-900 dark:text-white">Cl-Cl</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">242</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">Chlorine molecule</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4">
                <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
                  ⚠️ Important Note
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Bond energies are <strong>average values</strong> measured across many compounds. 
                  The actual energy of a specific bond can vary slightly depending on the molecular 
                  environment. This is why bond energy calculations give approximate values.
                </p>
              </div>
            </section>

            {/* Bond Strength Trends */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Bond Strength Trends
              </h2>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg mb-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg">
                    <div className="text-4xl mb-2">💪</div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                      Triple Bonds
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Strongest bonds
                    </p>
                    <div className="font-mono text-sm space-y-1">
                      <div>N≡N: 945 kJ/mol</div>
                      <div>C≡C: 839 kJ/mol</div>
                      <div>C≡N: 891 kJ/mol</div>
                    </div>
                  </div>

                  <div className="text-center p-4 bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 rounded-lg">
                    <div className="text-4xl mb-2">💫</div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                      Double Bonds
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Intermediate strength
                    </p>
                    <div className="font-mono text-sm space-y-1">
                      <div>C=O: 799 kJ/mol</div>
                      <div>C=C: 614 kJ/mol</div>
                      <div>O=O: 498 kJ/mol</div>
                    </div>
                  </div>

                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg">
                    <div className="text-4xl mb-2">🔗</div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                      Single Bonds
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Weakest bonds
                    </p>
                    <div className="font-mono text-sm space-y-1">
                      <div>O-H: 463 kJ/mol</div>
                      <div>C-H: 413 kJ/mol</div>
                      <div>C-C: 347 kJ/mol</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">
                    Why Bond Order Matters
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Triple bonds are stronger because they have three shared electron pairs, double 
                    bonds have two, and single bonds have one. More shared electrons = more 
                    electrostatic attraction = more energy needed to break the bond.
                  </p>
                </div>
              </div>
            </section>

            {/* Worked Example */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Worked Example: Methane Combustion
              </h2>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Problem
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Calculate the enthalpy change for the complete combustion of methane:
                  </p>
                  <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg font-mono text-center text-lg mb-4">
                    CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(g)
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Step 1: Identify bonds in reactants (bonds to break)
                    </h4>
                    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>CH₄: 4 × C-H bonds</span>
                          <span className="font-mono">4 × 413 = 1,652 kJ/mol</span>
                        </div>
                        <div className="flex justify-between">
                          <span>2O₂: 2 × O=O bonds</span>
                          <span className="font-mono">2 × 498 = 996 kJ/mol</span>
                        </div>
                        <div className="border-t border-red-300 dark:border-red-700 pt-2 flex justify-between font-semibold">
                          <span>Total bonds broken:</span>
                          <span className="font-mono">+2,648 kJ/mol</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Step 2: Identify bonds in products (bonds to form)
                    </h4>
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>CO₂: 2 × C=O bonds</span>
                          <span className="font-mono">2 × 799 = 1,598 kJ/mol</span>
                        </div>
                        <div className="flex justify-between">
                          <span>2H₂O: 4 × O-H bonds</span>
                          <span className="font-mono">4 × 463 = 1,852 kJ/mol</span>
                        </div>
                        <div className="border-t border-green-300 dark:border-green-700 pt-2 flex justify-between font-semibold">
                          <span>Total bonds formed:</span>
                          <span className="font-mono">-3,450 kJ/mol</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Step 3: Calculate ΔH<sub>rxn</sub>
                    </h4>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <div className="space-y-2 font-mono text-sm">
                        <div>ΔH<sub>rxn</sub> = Bonds Broken - Bonds Formed</div>
                        <div>ΔH<sub>rxn</sub> = 2,648 - 3,450</div>
                        <div className="text-xl font-bold text-blue-900 dark:text-blue-100">
                          ΔH<sub>rxn</sub> = -802 kJ/mol
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Step 4: Interpret the result
                    </h4>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        ΔH<sub>rxn</sub> = <strong>-802 kJ/mol</strong> (negative value)
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                        ✅ This is an <strong>exothermic reaction</strong>. The combustion of methane 
                        releases 802 kJ of energy per mole of methane burned. More energy is released 
                        when forming the C=O and O-H bonds in products than is required to break the 
                        C-H and O=O bonds in reactants.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Applications */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Applications of Bond Energy Calculations
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="text-4xl mb-3">🔥</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Fuel Efficiency
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Comparing the energy output of different fuels (gasoline, methane, hydrogen) 
                    helps determine which is most efficient for various applications. Bond energy 
                    calculations predict how much energy is released during combustion.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="text-4xl mb-3">⚗️</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Chemical Synthesis
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Industrial chemists use bond energies to predict if a synthetic pathway will 
                    require energy input (endothermic) or release energy (exothermic). This guides 
                    reaction design and safety protocols.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="text-4xl mb-3">🌱</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Biochemistry & Metabolism
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Biological processes like cellular respiration and photosynthesis involve 
                    breaking and forming bonds. Understanding bond energies helps explain how 
                    organisms store and release energy from glucose and ATP.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="text-4xl mb-3">🛡️</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Materials Science
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Predicting the stability and decomposition temperatures of polymers, 
                    pharmaceuticals, and explosives requires knowledge of bond strengths. Stronger 
                    bonds mean more stable materials.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="text-4xl mb-3">🌍</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Environmental Chemistry
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Bond energies help model atmospheric chemistry, including ozone depletion and 
                    greenhouse gas formation. Understanding C-Cl bond breaking in CFCs explains 
                    their role in stratospheric ozone destruction.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="text-4xl mb-3">💊</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Drug Design
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Pharmaceutical chemists design drugs with specific bond strengths to ensure 
                    they're stable during storage but can be metabolized in the body. Bond energies 
                    predict drug stability and half-life.
                  </p>
                </div>
              </div>
            </section>

            {/* Limitations and Considerations */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Limitations and Important Considerations
              </h2>

              <div className="space-y-4">
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
                  <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
                    ⚠️ Average Values
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Bond energies are <strong>average values</strong> measured from many different 
                    molecules. The actual bond strength in a specific molecule can vary by ±10-50 kJ/mol 
                    depending on the molecular environment and neighboring atoms.
                  </p>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded">
                  <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">
                    🚫 Gaseous Molecules Only
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Bond energy calculations assume all substances are in the <strong>gaseous state</strong>. 
                    For reactions involving liquids or solids, you must account for phase changes 
                    (vaporization, sublimation) separately using enthalpies of formation instead.
                  </p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                    📊 Approximate Results
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Because bond energies are averages, calculated ΔH values are <strong>estimates</strong>. 
                    They're usually within 5-10% of experimental values. For precise measurements, use 
                    calorimetry or standard enthalpies of formation.
                  </p>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded">
                  <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">
                    🔬 Polyatomic Molecules
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    For large molecules with multiple bond types, carefully count each type of bond. 
                    For example, glucose (C₆H₁₂O₆) has 5 C-C bonds, 7 C-H bonds, 7 C-O bonds, and 5 O-H bonds. 
                    Drawing the structural formula helps avoid counting errors.
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded">
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                    ✅ When to Use Bond Energies
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Bond energy calculations are ideal for:<br/>
                    • Quick estimates of reaction enthalpy<br/>
                    • Comparing different reaction pathways<br/>
                    • Understanding energy changes at the molecular level<br/>
                    • Educational purposes to visualize bond breaking/forming<br/>
                    <br/>
                    For accurate research or industrial applications, use standard enthalpies of formation 
                    or perform calorimetry experiments.
                  </p>
                </div>
              </div>
            </section>

            {/* Problem-Solving Strategy */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Problem-Solving Strategy
              </h2>

              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 shadow-lg">
                <ol className="space-y-4">
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Write and Balance the Equation
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Ensure the chemical equation is balanced. Bond energies depend on stoichiometry.
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Draw Structural Formulas
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Sketch all molecules showing every bond. This prevents missing or double-counting bonds.
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        List Bonds Broken (Reactants)
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Count each type of bond in the reactants and multiply by bond energy. Sum for total energy input (+).
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        List Bonds Formed (Products)
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Count each type of bond in the products and multiply by bond energy. Sum for total energy released (-).
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                      5
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Calculate ΔH<sub>rxn</sub>
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Apply the formula: ΔH<sub>rxn</sub> = Σ(Bonds Broken) - Σ(Bonds Formed)
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                      6
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Interpret the Sign
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Negative ΔH = exothermic (energy released). Positive ΔH = endothermic (energy absorbed).
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </section>

            {/* Quick Reference */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Quick Reference Guide
              </h2>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Key Formulas
                    </h4>
                    <div className="space-y-2 text-sm font-mono bg-gray-100 dark:bg-gray-900 p-4 rounded">
                      <div>ΔH<sub>rxn</sub> = Σ(Bonds Broken) - Σ(Bonds Formed)</div>
                      <div>ΔH<sub>rxn</sub> &lt; 0 → Exothermic</div>
                      <div>ΔH<sub>rxn</sub> &gt; 0 → Endothermic</div>
                      <div>ΔH<sub>rxn</sub> = 0 → Thermoneutral</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Sign Conventions
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <span className="text-red-500">+</span>
                        <span className="text-gray-700 dark:text-gray-300">
                          Bonds broken (reactants): energy input
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-500">-</span>
                        <span className="text-gray-700 dark:text-gray-300">
                          Bonds formed (products): energy released
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-blue-500">⚡</span>
                        <span className="text-gray-700 dark:text-gray-300">
                          Overall negative ΔH: net energy released
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-orange-500">🔥</span>
                        <span className="text-gray-700 dark:text-gray-300">
                          Overall positive ΔH: net energy absorbed
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
