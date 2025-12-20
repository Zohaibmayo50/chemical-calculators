import HessLawCalculator from '@/components/calculators/HessLawCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata = {
  title: 'Hess\'s Law Calculator | Chemistry Calculators',
  description: 'Calculate total enthalpy change using Hess\'s Law of Constant Heat Summation. Combine multiple reactions to find unknown ΔH values.',
  keywords: 'Hess law, enthalpy calculation, thermochemistry, heat summation, reaction enthalpy, thermodynamics',
};

export default function HessLawCalculatorPage() {  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-tertiary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Hess's Law Calculator
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Calculate enthalpy changes using the law of constant heat summation
          </p>
        </div>

        <HessLawCalculator />

        {/* Educational Content */}
        <div className="mt-12 space-y-8">
          {/* What is Hess's Law? */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              What is Hess's Law?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Hess's Law</strong> (also known as Hess's Law of Constant Heat Summation) states that 
              the total enthalpy change for a chemical reaction is independent of the pathway taken. In other 
              words, if a reaction can be carried out in a series of steps, the sum of the enthalpy changes 
              for each step equals the enthalpy change for the overall reaction.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mb-4">
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Mathematical Expression:</h3>
              <p className="text-blue-800 dark:text-blue-200 font-mono text-xl mb-3">
                ΔH_total = Σ(coefficient × ΔH_i)
              </p>
              <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                <li>• <strong>ΔH_total</strong> = overall enthalpy change (kJ/mol)</li>
                <li>• <strong>ΔH_i</strong> = enthalpy change for step i</li>
                <li>• <strong>coefficient</strong> = +1 (forward), -1 (reversed), or stoichiometric factor</li>
              </ul>
            </div>
            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
              <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">Why It Works:</h3>
              <p className="text-sm text-green-800 dark:text-green-200">
                Enthalpy (H) is a <strong>state function</strong> - its value depends only on the current 
                state of the system, not on how that state was reached. This is similar to altitude: 
                whether you climb a mountain in one straight path or take a winding trail, the total 
                elevation change is the same.
              </p>
            </div>
          </section>

          {/* Rules for Applying Hess's Law */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Rules for Applying Hess's Law
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  1. Reversing a Reaction
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  When you reverse a chemical equation, change the sign of ΔH.
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  <p className="text-sm text-gray-700 dark:text-gray-300 font-mono">
                    Forward: A → B, ΔH = +50 kJ/mol
                    <br />
                    Reverse: B → A, ΔH = -50 kJ/mol
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  2. Multiplying a Reaction
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  When you multiply all coefficients in an equation by a factor, multiply ΔH by the same factor.
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  <p className="text-sm text-gray-700 dark:text-gray-300 font-mono">
                    1× reaction: H₂ + ½O₂ → H₂O, ΔH = -286 kJ/mol
                    <br />
                    2× reaction: 2H₂ + O₂ → 2H₂O, ΔH = -572 kJ/mol
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  3. Adding Reactions
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  When adding equations, also add their ΔH values. Cancel out species that appear on both sides.
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  <p className="text-sm text-gray-700 dark:text-gray-300 font-mono">
                    Reaction 1: A → B, ΔH₁ = +30 kJ/mol
                    <br />
                    Reaction 2: B → C, ΔH₂ = -20 kJ/mol
                    <br />
                    Overall: A → C, ΔH_total = +10 kJ/mol
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  4. Physical State Matters
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Always pay attention to states of matter (s, l, g, aq) - they affect ΔH values.
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    H₂O(l) → H₂O(g): ΔH = +44 kJ/mol (vaporization)
                    <br />
                    Different states = different enthalpies!
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Example Problem */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Worked Example: Carbon Combustion
            </h2>

            <div className="space-y-4">
              <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
                  Problem:
                </h3>
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                  Calculate the enthalpy of formation of CO₂(g) from C(s) and O₂(g), given:
                </p>
                <ul className="text-sm text-yellow-800 dark:text-yellow-200 mt-2 space-y-1 ml-4">
                  <li>1. C(s) + ½O₂(g) → CO(g), ΔH₁ = -110.5 kJ/mol</li>
                  <li>2. CO(g) + ½O₂(g) → CO₂(g), ΔH₂ = -283.0 kJ/mol</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg space-y-3">
                <h3 className="font-semibold text-gray-900 dark:text-white">Solution:</h3>
                
                <div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    <strong>Step 1:</strong> Identify the target equation
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 font-mono bg-white dark:bg-gray-800 p-2 rounded">
                    C(s) + O₂(g) → CO₂(g)
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    <strong>Step 2:</strong> Add the given reactions
                  </p>
                  <div className="text-sm text-gray-700 dark:text-gray-300 font-mono bg-white dark:bg-gray-800 p-3 rounded space-y-1">
                    <p>C(s) + ½O₂(g) → CO(g)</p>
                    <p>CO(g) + ½O₂(g) → CO₂(g)</p>
                    <p className="border-t border-gray-300 dark:border-gray-600 pt-1">
                      C(s) + O₂(g) → CO₂(g) (CO cancels out)
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    <strong>Step 3:</strong> Apply Hess's Law
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 font-mono bg-white dark:bg-gray-800 p-2 rounded">
                    ΔH_total = ΔH₁ + ΔH₂
                    <br />
                    ΔH_total = -110.5 + (-283.0)
                    <br />
                    <span className="text-tertiary-600 dark:text-tertiary-400 font-bold">
                      ΔH_total = -393.5 kJ/mol
                    </span>
                  </p>
                </div>

                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded">
                  <p className="text-sm text-green-800 dark:text-green-200">
                    <strong>Answer:</strong> The enthalpy of formation of CO₂ is -393.5 kJ/mol. 
                    This matches the standard value! The reaction is highly exothermic.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Applications */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Applications of Hess's Law
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">🔬 Determining Unknown ΔH</h3>
                <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                  <li>• Calculate ΔH for reactions that can't be measured directly</li>
                  <li>• Find enthalpy of formation for unstable compounds</li>
                  <li>• Determine lattice energies using Born-Haber cycles</li>
                  <li>• Calculate bond dissociation energies</li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">⚗️ Industrial Chemistry</h3>
                <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                  <li>• Optimize multi-step synthesis routes</li>
                  <li>• Energy efficiency in chemical plants</li>
                  <li>• Predict heat release in reactions</li>
                  <li>• Design safer chemical processes</li>
                </ul>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">🔋 Energy Storage</h3>
                <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-1">
                  <li>• Battery chemistry optimization</li>
                  <li>• Fuel cell efficiency calculations</li>
                  <li>• Hydrogen storage materials</li>
                  <li>• Renewable energy systems</li>
                </ul>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">🌍 Environmental Science</h3>
                <ul className="text-sm text-orange-800 dark:text-orange-200 space-y-1">
                  <li>• Combustion and pollution analysis</li>
                  <li>• Greenhouse gas formation energies</li>
                  <li>• Atmospheric chemistry modeling</li>
                  <li>• Biofuel energy content prediction</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Born-Haber Cycle */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Special Application: Born-Haber Cycle
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The <strong>Born-Haber cycle</strong> is a special application of Hess's Law used to calculate 
              lattice energies of ionic compounds, which cannot be measured directly.
            </p>
            
            <div className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg mb-4">
              <h3 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">
                Example: Formation of NaCl
              </h3>
              <div className="text-sm text-indigo-800 dark:text-indigo-200 space-y-2">
                <p className="font-mono">
                  1. Na(s) → Na(g) [Sublimation: +108 kJ/mol]
                  <br />
                  2. Na(g) → Na⁺(g) + e⁻ [Ionization: +496 kJ/mol]
                  <br />
                  3. ½Cl₂(g) → Cl(g) [Bond dissociation: +122 kJ/mol]
                  <br />
                  4. Cl(g) + e⁻ → Cl⁻(g) [Electron affinity: -349 kJ/mol]
                  <br />
                  5. Na⁺(g) + Cl⁻(g) → NaCl(s) [Lattice energy: U = ?]
                </p>
                <p className="mt-3">
                  Using Hess's Law and the known formation enthalpy of NaCl (-411 kJ/mol), 
                  we can calculate the lattice energy: U = -787 kJ/mol
                </p>
              </div>
            </div>

            <div className="bg-teal-50 dark:bg-teal-900/30 p-4 rounded-lg">
              <p className="text-sm text-teal-800 dark:text-teal-200">
                <strong>Importance:</strong> Lattice energy indicates the strength of ionic bonding. 
                Higher lattice energy = stronger bonds, higher melting point, lower solubility in water.
              </p>
            </div>
          </section>

          {/* Important Notes */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Important Considerations
            </h2>

            <div className="space-y-4">
              <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
                  ⚠️ Standard Conditions
                </h3>
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                  Hess's Law calculations typically use <strong>standard enthalpy values (ΔH°)</strong> 
                  measured at 25°C (298 K) and 1 atm pressure. Make sure all your ΔH values are under 
                  the same conditions.
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  🎯 Equation Balancing
                </h3>
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  Carefully balance all equations and ensure species cancel correctly. A common mistake 
                  is forgetting to adjust ΔH when multiplying coefficients or reversing reactions.
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                  📊 Sign Conventions
                </h3>
                <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                  <li>• <strong>Negative ΔH:</strong> Exothermic (releases heat)</li>
                  <li>• <strong>Positive ΔH:</strong> Endothermic (absorbs heat)</li>
                  <li>• Reversing reaction flips the sign</li>
                  <li>• Always include units (kJ/mol or kJ)</li>
                </ul>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">
                  🔄 State Functions
                </h3>
                <p className="text-sm text-purple-800 dark:text-purple-200">
                  Hess's Law works because enthalpy is a <strong>state function</strong>. Other state 
                  functions include internal energy (U), entropy (S), and Gibbs free energy (G). 
                  Path-dependent quantities like heat (q) and work (w) do NOT follow Hess's Law.
                </p>
              </div>
            </div>
          </section>

          {/* Tips for Problem Solving */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Problem-Solving Strategy
            </h2>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Write the target equation</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Clearly identify what reaction you're trying to find ΔH for.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Manipulate given equations</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Reverse, multiply, or keep equations as needed to match your target.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Check for cancellations</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Verify that unwanted species cancel when equations are added.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Apply ΔH modifications</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Change signs for reversed reactions, multiply for scaled reactions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold">
                  5
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Sum the ΔH values</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Add all modified ΔH values to get the final answer.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold">
                  6
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Verify and interpret</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Check units, reasonableness, and whether the reaction is exo/endothermic.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>      </div>
      <Footer />
    </>
  );
}