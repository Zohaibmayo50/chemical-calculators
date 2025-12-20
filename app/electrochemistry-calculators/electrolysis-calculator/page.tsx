import React from 'react';
import ElectrolysisCalculator from '@/components/calculators/ElectrolysisCalculator';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Electrolysis Calculator - Faraday\'s Laws of Electrolysis',
  description: 'Calculate mass of products, charge, time, or current for electrolysis reactions using Faraday\'s laws. Determine electroplating mass, gas production, and electrolytic cell parameters.',
  keywords: ['electrolysis', 'Faraday\'s law', 'electrochemistry', 'electroplating', 'current', 'charge', 'coulombs', 'electrolytic cell', 'chemistry calculator'],
};

export default function ElectrolysisCalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-4">
            Electrolysis Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Calculate mass, charge, time, or current using Faraday's laws of electrolysis
          </p>
        </div>

        <ElectrolysisCalculator />

        {/* Educational Content */}
        <div className="mt-12 space-y-8 text-gray-800 dark:text-gray-200">
          {/* What is Electrolysis */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              What is Electrolysis?
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-4">
                <strong>Electrolysis</strong> is a chemical process that uses electric current to drive a non-spontaneous 
                redox reaction. It converts electrical energy into chemical energy, splitting compounds into their elements 
                or producing new substances at the electrodes.
              </p>
              <p className="leading-relaxed mb-4">
                Key components of an electrolytic cell:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li><strong>Anode:</strong> Positive electrode where oxidation occurs (electrons leave)</li>
                <li><strong>Cathode:</strong> Negative electrode where reduction occurs (electrons enter)</li>
                <li><strong>Electrolyte:</strong> Ionic solution or molten salt that conducts electricity</li>
                <li><strong>External power source:</strong> Battery or DC power supply that drives the reaction</li>
              </ul>
              <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 mt-6">
                <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Key Concept:</p>
                <p className="text-blue-800 dark:text-blue-200">
                  Electrolysis is the opposite of a galvanic (voltaic) cell. While galvanic cells produce electricity 
                  from spontaneous reactions, electrolytic cells use electricity to force non-spontaneous reactions to occur.
                </p>
              </div>
            </div>
          </section>

          {/* Faraday's Laws */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Faraday's Laws of Electrolysis
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <div className="space-y-6">
                {/* First Law */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">
                    Faraday's First Law
                  </h3>
                  <p className="text-blue-800 dark:text-blue-200 mb-4">
                    The mass of substance deposited or liberated at an electrode during electrolysis is directly 
                    proportional to the quantity of electric charge passed through the electrolyte.
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <p className="font-semibold mb-2">Mathematical Expression:</p>
                    <p className="font-mono text-xl mb-2">m ∝ Q</p>
                    <p className="font-mono text-xl">m = Z × Q</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      where Z = electrochemical equivalent (g/C)
                    </p>
                  </div>
                </div>

                {/* Second Law */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-4">
                    Faraday's Second Law
                  </h3>
                  <p className="text-green-800 dark:text-green-200 mb-4">
                    When the same quantity of electric charge passes through different electrolytes, the masses of 
                    substances deposited are proportional to their equivalent weights (molar mass divided by the 
                    number of electrons transferred).
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <p className="font-semibold mb-2">Mathematical Expression:</p>
                    <p className="font-mono text-xl">m₁/m₂ = (M₁/n₁)/(M₂/n₂)</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      where M = molar mass, n = electrons transferred
                    </p>
                  </div>
                </div>

                {/* Combined Formula */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-4">
                    Combined Formula
                  </h3>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded space-y-3">
                    <div>
                      <p className="font-semibold mb-2">General Equation:</p>
                      <p className="font-mono text-2xl text-center">m = (Q × M) / (n × F)</p>
                    </div>
                    <div className="border-t border-gray-300 dark:border-gray-600 pt-3">
                      <p className="font-semibold mb-2">Where:</p>
                      <ul className="space-y-1">
                        <li><strong>m</strong> = mass deposited/liberated (g)</li>
                        <li><strong>Q</strong> = total electric charge (C) = I × t</li>
                        <li><strong>M</strong> = molar mass (g/mol)</li>
                        <li><strong>n</strong> = number of electrons transferred per ion/molecule</li>
                        <li><strong>F</strong> = Faraday's constant = 96,485 C/mol</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 dark:bg-yellow-900/30 p-3 rounded">
                      <p className="font-semibold text-yellow-900 dark:text-yellow-100 mb-1">
                        Also remember:
                      </p>
                      <p className="font-mono">Q = I × t</p>
                      <p className="text-sm text-yellow-800 dark:text-yellow-200 mt-1">
                        Charge (C) = Current (A) × Time (s)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Worked Example */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Worked Example: Copper Electroplating
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Problem:</h4>
                  <p>
                    A current of 5.0 A is passed through a copper(II) sulfate solution for 1 hour. 
                    How many grams of copper will be deposited at the cathode?
                  </p>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Reaction: Cu²⁺ + 2e⁻ → Cu
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">Given Information:</h4>
                  <ul className="space-y-1">
                    <li>Current (I) = 5.0 A</li>
                    <li>Time (t) = 1 hour = 3600 seconds</li>
                    <li>Molar mass of Cu (M) = 63.55 g/mol</li>
                    <li>Electrons transferred (n) = 2 (Cu²⁺ → Cu)</li>
                    <li>Faraday's constant (F) = 96,485 C/mol</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">Solution:</h4>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-200 dark:border-gray-600 space-y-3">
                    <div>
                      <p className="font-semibold">Step 1: Calculate total charge (Q)</p>
                      <p className="font-mono">Q = I × t</p>
                      <p className="font-mono">Q = 5.0 A × 3600 s = 18,000 C</p>
                    </div>

                    <div>
                      <p className="font-semibold">Step 2: Apply Faraday's law</p>
                      <p className="font-mono">m = (Q × M) / (n × F)</p>
                      <p className="font-mono">m = (18,000 C × 63.55 g/mol) / (2 × 96,485 C/mol)</p>
                    </div>

                    <div>
                      <p className="font-semibold">Step 3: Calculate mass</p>
                      <p className="font-mono">m = 1,143,900 / 192,970</p>
                      <p className="font-mono">m = 5.93 g</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg border-l-4 border-green-500">
                  <p className="font-semibold text-green-900 dark:text-green-100">Answer:</p>
                  <p className="text-green-800 dark:text-green-200">
                    <strong>5.93 grams</strong> of copper will be deposited at the cathode after 1 hour.
                  </p>
                  <p className="text-green-700 dark:text-green-300 mt-2 text-sm">
                    This corresponds to 5.93/63.55 = 0.0933 moles of copper, which required 0.1866 moles of electrons 
                    (2 electrons per copper atom).
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
                  1. Electroplating
                </h3>
                <p className="text-blue-800 dark:text-blue-200">
                  Coating metal objects with a thin layer of another metal (gold, silver, chromium, nickel) for 
                  protection against corrosion or for decorative purposes. Used in jewelry, automotive parts, 
                  and electronics manufacturing.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-3">
                  2. Industrial Chemical Production
                </h3>
                <p className="text-green-800 dark:text-green-200">
                  Large-scale production of chemicals like chlorine and sodium hydroxide (chlor-alkali process), 
                  aluminum (Hall-Héroult process), and hydrogen/oxygen gases. Essential for chemical industry 
                  and manufacturing.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-3">
                  3. Metal Purification
                </h3>
                <p className="text-purple-800 dark:text-purple-200">
                  Refining metals like copper to 99.99% purity through electrorefining. The impure metal is used 
                  as the anode, and pure metal is deposited on the cathode. Critical for electronics requiring 
                  high-purity materials.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-900 dark:text-orange-100 mb-3">
                  4. Water Splitting (Electrolysis of Water)
                </h3>
                <p className="text-orange-800 dark:text-orange-200">
                  Production of hydrogen gas (clean fuel) and oxygen from water using renewable electricity. 
                  Important for hydrogen economy, fuel cells, and sustainable energy storage systems.
                </p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-teal-900 dark:text-teal-100 mb-3">
                  5. Electroforming
                </h3>
                <p className="text-teal-800 dark:text-teal-200">
                  Manufacturing metal parts by electrodeposition on a mold or mandrel, which is later removed. 
                  Used to create intricate shapes, mesh screens, waveguides, and precision metal parts that 
                  would be difficult to machine.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-yellow-900 dark:text-yellow-100 mb-3">
                  6. Anodizing
                </h3>
                <p className="text-yellow-800 dark:text-yellow-200">
                  Creating protective oxide layers on aluminum and other metals through electrolysis. The metal 
                  is made the anode, and oxygen ions form a durable, corrosion-resistant coating. Used in 
                  aerospace, architecture, and consumer products.
                </p>
              </div>
            </div>
          </section>

          {/* Common Electrolysis Reactions */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Common Electrolysis Reactions
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30">
                      <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Substance</th>
                      <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Cathode Reaction (Reduction)</th>
                      <th className="border border-gray-300 dark:border-gray-600 p-3 text-center">n (electrons)</th>
                      <th className="border border-gray-300 dark:border-gray-600 p-3 text-center">M (g/mol)</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 p-3">Copper</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono">Cu²⁺ + 2e⁻ → Cu</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">2</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">63.55</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700/50">
                      <td className="border border-gray-300 dark:border-gray-600 p-3">Silver</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono">Ag⁺ + e⁻ → Ag</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">1</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">107.87</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 p-3">Aluminum</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono">Al³⁺ + 3e⁻ → Al</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">26.98</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700/50">
                      <td className="border border-gray-300 dark:border-gray-600 p-3">Zinc</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono">Zn²⁺ + 2e⁻ → Zn</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">2</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">65.38</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 p-3">Hydrogen</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono">2H₂O + 2e⁻ → H₂ + 2OH⁻</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">2</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">2.016</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700/50">
                      <td className="border border-gray-300 dark:border-gray-600 p-3">Chlorine</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono">2Cl⁻ → Cl₂ + 2e⁻ (anode)</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">2</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">70.90</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 p-3">Oxygen</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono">2H₂O → O₂ + 4H⁺ + 4e⁻ (anode)</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">4</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">32.00</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700/50">
                      <td className="border border-gray-300 dark:border-gray-600 p-3">Gold</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono">Au³⁺ + 3e⁻ → Au</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">196.97</td>
                    </tr>
                  </tbody>
                </table>
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
                    Step 1: Identify the Reaction
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-blue-800 dark:text-blue-200">
                    <li>Write the balanced half-reaction at the electrode</li>
                    <li>Determine the number of electrons (n) transferred per ion/molecule</li>
                    <li>Find the molar mass (M) of the substance being deposited/liberated</li>
                  </ul>
                </div>

                <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-3">
                    Step 2: Calculate Total Charge
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-green-800 dark:text-green-200">
                    <li>Use Q = I × t if current and time are given</li>
                    <li>Ensure time is in seconds (1 hour = 3600 s, 1 min = 60 s)</li>
                    <li>Current should be in amperes (A)</li>
                    <li>Result will be in coulombs (C)</li>
                  </ul>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-3">
                    Step 3: Apply Faraday's Law
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-purple-800 dark:text-purple-200">
                    <li>Use m = (Q × M) / (n × F) to find mass</li>
                    <li>Faraday's constant F = 96,485 C/mol</li>
                    <li>Rearrange the formula if solving for Q, I, or t instead</li>
                    <li>Keep track of units throughout the calculation</li>
                  </ul>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500">
                  <h3 className="text-xl font-semibold text-orange-900 dark:text-orange-100 mb-3">
                    Step 4: Check Your Answer
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-orange-800 dark:text-orange-200">
                    <li>Does the mass make sense given the current and time?</li>
                    <li>Are the units correct? (mass in g, current in A, time in s)</li>
                    <li>Is the number of significant figures appropriate?</li>
                    <li>Can you calculate moles and verify using stoichiometry?</li>
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
                  ❌ Forgetting to Convert Time to Seconds
                </h3>
                <p className="text-red-800 dark:text-red-200 mb-2">
                  Time must be in seconds when using Q = I × t. Don't use minutes or hours directly.
                </p>
                <p className="text-sm text-red-700 dark:text-red-300">
                  <strong>Correct:</strong> 2 hours = 2 × 3600 = 7200 seconds
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
                  ❌ Using Wrong Number of Electrons
                </h3>
                <p className="text-red-800 dark:text-red-200 mb-2">
                  Always check the balanced half-reaction. Cu²⁺ requires 2 electrons, not 1. Al³⁺ requires 3.
                </p>
                <p className="text-sm text-red-700 dark:text-red-300">
                  <strong>Correct:</strong> Write and balance the half-reaction first
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
                  ❌ Confusing Anode and Cathode
                </h3>
                <p className="text-red-800 dark:text-red-200 mb-2">
                  In electrolysis, reduction occurs at the cathode (negative), oxidation at the anode (positive).
                </p>
                <p className="text-sm text-red-700 dark:text-red-300">
                  <strong>Remember:</strong> "RED CAT" (Reduction at Cathode) and "AN OX" (Anode Oxidation)
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
                  ❌ Using Atomic Mass Instead of Molecular Mass for Diatomic Gases
                </h3>
                <p className="text-red-800 dark:text-red-200 mb-2">
                  For Cl₂, use 70.90 g/mol (not 35.45). For H₂, use 2.016 g/mol (not 1.008).
                </p>
                <p className="text-sm text-red-700 dark:text-red-300">
                  <strong>Correct:</strong> Use the molar mass of the actual product formed
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
                  ❌ Mixing Up F and f
                </h3>
                <p className="text-red-800 dark:text-red-200 mb-2">
                  F (capital) is Faraday's constant = 96,485 C/mol. Don't confuse with frequency (f).
                </p>
                <p className="text-sm text-red-700 dark:text-red-300">
                  <strong>Correct:</strong> Always use 96,485 C/mol for Faraday's constant
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
                <h3 className="text-lg font-semibold mb-4">Key Formulas</h3>
                <div className="space-y-2 font-mono text-sm">
                  <p>m = (Q × M) / (n × F)</p>
                  <p>Q = I × t</p>
                  <p>F = 96,485 C/mol</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-4">
                    m = mass (g)<br/>
                    Q = charge (C)<br/>
                    I = current (A)<br/>
                    t = time (s)<br/>
                    M = molar mass (g/mol)<br/>
                    n = electrons transferred
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-tertiary-50 to-primary-50 dark:from-tertiary-900/20 dark:to-primary-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Unit Conversions</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>Time:</strong></p>
                  <p>1 hour = 3600 s</p>
                  <p>1 minute = 60 s</p>
                  <p className="mt-3"><strong>Current:</strong></p>
                  <p>1 A = 1000 mA</p>
                  <p className="mt-3"><strong>Charge:</strong></p>
                  <p>1 C = 1 A·s</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-secondary-50 to-tertiary-50 dark:from-secondary-900/20 dark:to-tertiary-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Common n Values</h3>
                <div className="space-y-1 text-sm">
                  <p>Cu²⁺ → Cu: <strong>n = 2</strong></p>
                  <p>Ag⁺ → Ag: <strong>n = 1</strong></p>
                  <p>Al³⁺ → Al: <strong>n = 3</strong></p>
                  <p>2H₂O → H₂: <strong>n = 2</strong></p>
                  <p>2H₂O → O₂: <strong>n = 4</strong></p>
                  <p>2Cl⁻ → Cl₂: <strong>n = 2</strong></p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-tertiary-50 dark:from-primary-900/20 dark:to-tertiary-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Electrode Mnemonics</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>RED CAT:</strong> Reduction at Cathode</p>
                  <p><strong>AN OX:</strong> Anode Oxidation</p>
                  <p className="mt-3 text-xs text-gray-600 dark:text-gray-400">
                    In electrolysis:<br/>
                    Cathode = negative terminal<br/>
                    Anode = positive terminal
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
