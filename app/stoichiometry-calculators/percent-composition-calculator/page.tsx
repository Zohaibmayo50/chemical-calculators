import React from 'react';
import PercentCompositionCalculator from '@/components/calculators/PercentCompositionCalculator';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: 'Percent Composition Calculator - Mass Percent of Elements in Compounds',
  description: 'Calculate the mass percent composition of elements in chemical compounds. Determine the percentage by mass of each element with instant calculations and detailed breakdowns.',
  keywords: ['percent composition', 'mass percent', 'elemental analysis', 'molar mass', 'stoichiometry', 'chemistry calculator', 'empirical formula', 'chemical composition'],
};

export default function PercentCompositionCalculatorPage() {  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-4">
            Percent Composition Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Calculate the mass percent of each element in a chemical compound
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <PercentCompositionCalculator />
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Related Calculators
              </h2>
              <div className="space-y-3">
                <a href="/stoichiometry-calculators/molecular-weight-calculator" className="block p-3 bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/50 rounded-lg transition-colors">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100">Molecular Weight</h3>
                  <p className="text-sm text-blue-700 dark:text-blue-300">Calculate molar mass</p>
                </a>
                <a href="/stoichiometry-calculators/empirical-formula-calculator" className="block p-3 bg-green-50 dark:bg-green-900/30 hover:bg-green-100 dark:hover:bg-green-900/50 rounded-lg transition-colors">
                  <h3 className="font-semibold text-green-900 dark:text-green-100">Empirical Formula</h3>
                  <p className="text-sm text-green-700 dark:text-green-300">Find simplest ratio</p>
                </a>
                <a href="/stoichiometry-calculators/molecular-formula-calculator" className="block p-3 bg-purple-50 dark:bg-purple-900/30 hover:bg-purple-100 dark:hover:bg-purple-900/50 rounded-lg transition-colors">
                  <h3 className="font-semibold text-purple-900 dark:text-purple-100">Molecular Formula</h3>
                  <p className="text-sm text-purple-700 dark:text-purple-300">Determine actual formula</p>
                </a>
                <a href="/stoichiometry-calculators/stoichiometry-calculator" className="block p-3 bg-orange-50 dark:bg-orange-900/30 hover:bg-orange-100 dark:hover:bg-orange-900/50 rounded-lg transition-colors">
                  <h3 className="font-semibold text-orange-900 dark:text-orange-100">Stoichiometry</h3>
                  <p className="text-sm text-orange-700 dark:text-orange-300">Reaction calculations</p>
                </a>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Related Formulas</h3>
                <div className="space-y-3">
                  <a href="/chemistry-formulas/percent-composition-formula" className="block p-3 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">Percent Composition Formula</h3>
                  </a>
                  <a href="/chemistry-formulas/empirical-formula" className="block p-3 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">Empirical Formula</h3>
                  </a>
                </div>
              </div>
              <div className="mt-4">
                <a href="/stoichiometry-calculators" className="block p-3 bg-primary-50 dark:bg-primary-900/20 hover:bg-primary-100 dark:hover:bg-primary-900/30 rounded-lg transition-colors">
                  <p className="font-semibold text-primary-700 dark:text-primary-300">All Stoichiometry Calculators →</p>
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Quick Tips
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Percentages must add up to 100%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Use accurate atomic masses for precision</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Check your chemical formula is correct</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Useful for determining empirical formulas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Educational Content */}
        <div className="mt-12 space-y-8 text-gray-800 dark:text-gray-200">
          {/* What is Percent Composition */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              What is Percent Composition?
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-4">
                <strong>Percent composition</strong> (also called mass percent or percentage composition) tells you the 
                percentage by mass of each element in a chemical compound. It answers the question: "What fraction of 
                the compound's mass comes from each element?"
              </p>
              <p className="leading-relaxed mb-4">
                This fundamental concept in chemistry is essential for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Determining empirical and molecular formulas from experimental data</li>
                <li>Analyzing the purity of chemical samples</li>
                <li>Performing stoichiometric calculations</li>
                <li>Understanding nutrient content in food and fertilizers</li>
                <li>Quality control in pharmaceutical and industrial chemistry</li>
                <li>Environmental analysis and pollution monitoring</li>
              </ul>
              <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 mt-6">
                <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Key Concept:</p>
                <p className="text-blue-800 dark:text-blue-200">
                  The percent composition of an element in a compound is the mass of that element divided by 
                  the total mass of the compound, multiplied by 100%. The sum of all percentages must equal 100%.
                </p>
              </div>
            </div>
          </section>

          {/* The Formula */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              The Formula
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <div className="bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 p-6 rounded-lg mb-6">
                <p className="text-2xl text-center font-mono mb-2">
                  % composition = (mass of element / molar mass of compound) × 100%
                </p>
                <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
                  Or more specifically:
                </p>
                <p className="text-xl text-center font-mono mt-2">
                  % X = [(n × atomic mass of X) / molar mass of compound] × 100%
                </p>
                <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
                  where n = number of atoms of element X in the formula
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Step-by-Step Procedure:</h3>
              <ol className="list-decimal list-inside space-y-3 ml-4">
                <li>
                  <strong>Write the chemical formula:</strong> Identify all elements and their subscripts
                </li>
                <li>
                  <strong>Find atomic masses:</strong> Look up the atomic mass of each element from the periodic table
                </li>
                <li>
                  <strong>Calculate molar mass:</strong> Sum the masses of all atoms in the formula
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>For each element: multiply atomic mass by the number of atoms</li>
                    <li>Add all contributions together</li>
                  </ul>
                </li>
                <li>
                  <strong>Calculate element mass contribution:</strong> For each element, multiply its atomic mass by how many times it appears
                </li>
                <li>
                  <strong>Compute percentage:</strong> Divide element mass by molar mass, multiply by 100%
                </li>
                <li>
                  <strong>Verify:</strong> Check that all percentages sum to 100% (within rounding error)
                </li>
              </ol>
            </div>
          </section>

          {/* Worked Example */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Worked Example: Water (H₂O)
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Step 1: Identify the formula</h4>
                  <p className="font-mono text-xl">H₂O</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Contains: 2 hydrogen atoms, 1 oxygen atom
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">Step 2: Get atomic masses</h4>
                  <ul className="space-y-1">
                    <li>Hydrogen (H): 1.008 amu</li>
                    <li>Oxygen (O): 16.00 amu</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">Step 3: Calculate molar mass</h4>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-200 dark:border-gray-600">
                    <p>Mass of H: 2 × 1.008 = 2.016 g/mol</p>
                    <p>Mass of O: 1 × 16.00 = 16.00 g/mol</p>
                    <p className="font-semibold mt-2 pt-2 border-t border-gray-300 dark:border-gray-600">
                      Total molar mass = 2.016 + 16.00 = 18.016 g/mol
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">Step 4: Calculate percentages</h4>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-200 dark:border-gray-600 space-y-3">
                    <div>
                      <p className="font-semibold">Hydrogen:</p>
                      <p className="font-mono">% H = (2.016 / 18.016) × 100% = 11.19%</p>
                    </div>
                    <div>
                      <p className="font-semibold">Oxygen:</p>
                      <p className="font-mono">% O = (16.00 / 18.016) × 100% = 88.81%</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">Step 5: Verify</h4>
                  <p className="font-mono">11.19% + 88.81% = 100.00% ✓</p>
                </div>

                <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg border-l-4 border-green-500">
                  <p className="font-semibold text-green-900 dark:text-green-100">Result:</p>
                  <p className="text-green-800 dark:text-green-200">
                    Water is 11.19% hydrogen and 88.81% oxygen by mass. This means that in any sample of pure water, 
                    about 11% of the mass comes from hydrogen and 89% from oxygen.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* More Complex Example */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Complex Example: Glucose (C₆H₁₂O₆)
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Given Information</h4>
                  <ul className="space-y-1">
                    <li>Formula: C₆H₁₂O₆</li>
                    <li>Contains: 6 carbon, 12 hydrogen, 6 oxygen atoms</li>
                    <li>Atomic masses: C = 12.01 amu, H = 1.008 amu, O = 16.00 amu</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">Calculate Molar Mass</h4>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-200 dark:border-gray-600">
                    <p>Carbon: 6 × 12.01 = 72.06 g/mol</p>
                    <p>Hydrogen: 12 × 1.008 = 12.096 g/mol</p>
                    <p>Oxygen: 6 × 16.00 = 96.00 g/mol</p>
                    <p className="font-semibold mt-2 pt-2 border-t border-gray-300 dark:border-gray-600">
                      Total = 72.06 + 12.096 + 96.00 = 180.156 g/mol
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">Calculate Percent Composition</h4>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-200 dark:border-gray-600 space-y-2">
                    <p className="font-mono">% C = (72.06 / 180.156) × 100% = 40.00%</p>
                    <p className="font-mono">% H = (12.096 / 180.156) × 100% = 6.71%</p>
                    <p className="font-mono">% O = (96.00 / 180.156) × 100% = 53.29%</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      Check: 40.00 + 6.71 + 53.29 = 100.00% ✓
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Interpretation:</p>
                  <p className="text-blue-800 dark:text-blue-200">
                    Glucose is 40% carbon, 6.71% hydrogen, and 53.29% oxygen by mass. This tells us that 
                    more than half of glucose's mass comes from oxygen atoms, despite having equal numbers of 
                    carbon and oxygen atoms (both 6). This is because oxygen atoms are heavier than carbon atoms.
                  </p>
                </div>
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
                  1. Empirical Formula Determination
                </h3>
                <p className="text-blue-800 dark:text-blue-200">
                  Given experimental mass percentages from combustion analysis or other techniques, chemists can 
                  work backwards to determine the empirical formula of an unknown compound. This is crucial in 
                  identifying new compounds and verifying synthesis products.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-3">
                  2. Fertilizer Analysis
                </h3>
                <p className="text-green-800 dark:text-green-200">
                  Fertilizer labels show N-P-K ratios (nitrogen-phosphorus-potassium). Percent composition calculations 
                  help convert between elemental percentages and compound percentages. For example, calculating the 
                  actual nitrogen content in ammonium nitrate (NH₄NO₃) which is 35% nitrogen by mass.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-3">
                  3. Pharmaceutical Quality Control
                </h3>
                <p className="text-purple-800 dark:text-purple-200">
                  Drug manufacturers use percent composition to verify the purity of pharmaceutical compounds. 
                  Deviations from expected values can indicate contamination or improper synthesis. For instance, 
                  aspirin (C₉H₈O₄) should be 60.00% carbon, 4.48% hydrogen, and 35.52% oxygen.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-900 dark:text-orange-100 mb-3">
                  4. Nutritional Analysis
                </h3>
                <p className="text-orange-800 dark:text-orange-200">
                  Food scientists calculate the elemental composition of nutrients. For example, determining iron 
                  content in iron supplements: FeSO₄ (ferrous sulfate) is 36.76% iron by mass, while Fe₂O₃ 
                  (ferric oxide) is 69.94% iron, making it a more concentrated iron source.
                </p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-teal-900 dark:text-teal-100 mb-3">
                  5. Environmental Monitoring
                </h3>
                <p className="text-teal-800 dark:text-teal-200">
                  Environmental chemists use percent composition to track pollutants. For example, measuring sulfur 
                  content in sulfur dioxide (SO₂): 50.05% sulfur. This helps calculate total sulfur emissions from 
                  industrial sources and assess environmental impact.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-yellow-900 dark:text-yellow-100 mb-3">
                  6. Ore Analysis
                </h3>
                <p className="text-yellow-800 dark:text-yellow-200">
                  Mining engineers calculate metal content in ores. For example, hematite (Fe₂O₃) contains 69.94% 
                  iron, while magnetite (Fe₃O₄) contains 72.36% iron. This helps determine which ore is more 
                  economically valuable to extract and process.
                </p>
              </div>
            </div>
          </section>

          {/* Problem-Solving Strategy */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Problem-Solving Strategy
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <div className="space-y-6">
                <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">
                    Forward Direction: Formula → Percent Composition
                  </h3>
                  <ol className="list-decimal list-inside space-y-2 text-blue-800 dark:text-blue-200">
                    <li>Write the chemical formula and count atoms of each element</li>
                    <li>Look up atomic masses from the periodic table</li>
                    <li>Calculate molar mass: Σ(atoms × atomic mass)</li>
                    <li>For each element: % = (element mass / molar mass) × 100%</li>
                    <li>Verify: sum of all percentages = 100%</li>
                  </ol>
                </div>

                <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-3">
                    Reverse Direction: Percent Composition → Empirical Formula
                  </h3>
                  <ol className="list-decimal list-inside space-y-2 text-green-800 dark:text-green-200">
                    <li>Assume 100 g sample (makes percentages = masses in grams)</li>
                    <li>Convert mass of each element to moles (mass / atomic mass)</li>
                    <li>Divide all mole values by the smallest number of moles</li>
                    <li>If needed, multiply by small integer to get whole number ratios</li>
                    <li>Write empirical formula using whole number subscripts</li>
                  </ol>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-3">
                    Tips for Success
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-purple-800 dark:text-purple-200">
                    <li>Always use accurate atomic masses (at least 2 decimal places)</li>
                    <li>Keep extra significant figures during calculations, round only at the end</li>
                    <li>Double-check that percentages sum to 100% (±0.5% acceptable for rounding)</li>
                    <li>For polyatomic ions in parentheses: multiply subscript outside by atoms inside</li>
                    <li>Use dimensional analysis to track units throughout calculations</li>
                  </ul>
                </div>
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
                  ❌ Forgetting to Multiply by Subscripts
                </h3>
                <p className="text-red-800 dark:text-red-200 mb-2">
                  In H₂SO₄, the hydrogen mass is 2 × 1.008 = 2.016 g/mol, NOT just 1.008 g/mol.
                </p>
                <p className="text-sm text-red-700 dark:text-red-300">
                  <strong>Correct approach:</strong> Always multiply atomic mass by the number of atoms.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
                  ❌ Ignoring Parentheses
                </h3>
                <p className="text-red-800 dark:text-red-200 mb-2">
                  In Ca(OH)₂, there are 2 oxygen atoms and 2 hydrogen atoms (not 1 of each).
                </p>
                <p className="text-sm text-red-700 dark:text-red-300">
                  <strong>Correct approach:</strong> Multiply everything inside parentheses by the outside subscript.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
                  ❌ Rounding Too Early
                </h3>
                <p className="text-red-800 dark:text-red-200 mb-2">
                  Rounding intermediate values can cause your final percentages to not sum to 100%.
                </p>
                <p className="text-sm text-red-700 dark:text-red-300">
                  <strong>Correct approach:</strong> Keep at least 4-5 significant figures until the final answer.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
                  ❌ Using Incorrect Atomic Masses
                </h3>
                <p className="text-red-800 dark:text-red-200 mb-2">
                  Confusing atomic number with atomic mass (e.g., using 6 instead of 12.01 for carbon).
                </p>
                <p className="text-sm text-red-700 dark:text-red-300">
                  <strong>Correct approach:</strong> Always use atomic mass (decimal number) from periodic table.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
                  ❌ Forgetting to Multiply by 100
                </h3>
                <p className="text-red-800 dark:text-red-200 mb-2">
                  Calculating 0.40 instead of 40% (missing the × 100 step).
                </p>
                <p className="text-sm text-red-700 dark:text-red-300">
                  <strong>Correct approach:</strong> Always convert decimal to percentage by multiplying by 100.
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
                <h3 className="text-lg font-semibold mb-4">Basic Formula</h3>
                <div className="space-y-2 font-mono text-sm">
                  <p>% element = (mass of element / molar mass) × 100%</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-4">
                    where mass of element = n × atomic mass<br/>
                    and n = number of atoms
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-tertiary-50 to-primary-50 dark:from-tertiary-900/20 dark:to-primary-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Example Compounds</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>H₂O:</strong> 11.19% H, 88.81% O</p>
                  <p><strong>CO₂:</strong> 27.29% C, 72.71% O</p>
                  <p><strong>NaCl:</strong> 39.34% Na, 60.66% Cl</p>
                  <p><strong>H₂SO₄:</strong> 2.06% H, 32.69% S, 65.25% O</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-secondary-50 to-tertiary-50 dark:from-secondary-900/20 dark:to-tertiary-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Verification Check</h3>
                <p className="text-sm mb-2">Sum of all percentages must equal:</p>
                <p className="text-2xl font-bold text-center">100%</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                  (within ±0.5% for rounding errors)
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-tertiary-50 dark:from-primary-900/20 dark:to-tertiary-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Common Units</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>Atomic mass:</strong> amu or g/mol</p>
                  <p><strong>Molar mass:</strong> g/mol</p>
                  <p><strong>Percent:</strong> % (dimensionless)</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                    Note: amu and g/mol are numerically equal
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Practice Problems */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Practice Problems
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Problem 1: Ammonia (NH₃)</h3>
                <p className="mb-2">Calculate the percent composition of ammonia.</p>
                <details className="mt-4">
                  <summary className="cursor-pointer text-primary-600 dark:text-primary-400 font-semibold">
                    Show Solution
                  </summary>
                  <div className="mt-4 pl-4 border-l-4 border-primary-500 space-y-2">
                    <p>Molar mass = (1×14.01) + (3×1.008) = 17.034 g/mol</p>
                    <p>% N = (14.01 / 17.034) × 100% = 82.24%</p>
                    <p>% H = (3.024 / 17.034) × 100% = 17.76%</p>
                    <p className="text-green-600 dark:text-green-400">Check: 82.24 + 17.76 = 100.00% ✓</p>
                  </div>
                </details>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Problem 2: Calcium Carbonate (CaCO₃)</h3>
                <p className="mb-2">Find the mass percent of each element in limestone (calcium carbonate).</p>
                <details className="mt-4">
                  <summary className="cursor-pointer text-primary-600 dark:text-primary-400 font-semibold">
                    Show Solution
                  </summary>
                  <div className="mt-4 pl-4 border-l-4 border-primary-500 space-y-2">
                    <p>Molar mass = (1×40.08) + (1×12.01) + (3×16.00) = 100.09 g/mol</p>
                    <p>% Ca = (40.08 / 100.09) × 100% = 40.04%</p>
                    <p>% C = (12.01 / 100.09) × 100% = 12.00%</p>
                    <p>% O = (48.00 / 100.09) × 100% = 47.96%</p>
                    <p className="text-green-600 dark:text-green-400">Check: 40.04 + 12.00 + 47.96 = 100.00% ✓</p>
                  </div>
                </details>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Problem 3: Reverse Problem</h3>
                <p className="mb-2">
                  A compound contains 40.00% C, 6.71% H, and 53.29% O by mass. What is the empirical formula?
                </p>
                <details className="mt-4">
                  <summary className="cursor-pointer text-primary-600 dark:text-primary-400 font-semibold">
                    Show Solution
                  </summary>
                  <div className="mt-4 pl-4 border-l-4 border-primary-500 space-y-2">
                    <p>Assume 100 g sample:</p>
                    <p>Moles C = 40.00 g / 12.01 g/mol = 3.331 mol</p>
                    <p>Moles H = 6.71 g / 1.008 g/mol = 6.657 mol</p>
                    <p>Moles O = 53.29 g / 16.00 g/mol = 3.331 mol</p>
                    <p>Divide by smallest (3.331):</p>
                    <p>C: 3.331/3.331 = 1, H: 6.657/3.331 = 2, O: 3.331/3.331 = 1</p>
                    <p className="text-green-600 dark:text-green-400 font-semibold">
                      Empirical formula: CH₂O (formaldehyde family)
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </section>
        </div>
      </div>      </div>
      <Footer />
    </>
  );
}