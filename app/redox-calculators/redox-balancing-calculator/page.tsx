import React from 'react';
import RedoxBalancingCalculator from '@/components/calculators/RedoxBalancingCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata = {
  title: 'Redox Balancing Calculator | ChemCalc',
  description: 'Balance redox reactions using the half-reaction method in acidic, basic, or neutral solutions. Learn step-by-step how to balance oxidation-reduction equations.',
  keywords: 'redox balancing, half-reaction method, oxidation reduction, acidic basic solutions, electron transfer, redox equations, chemistry calculator',
};

export default function RedoxBalancingPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-tertiary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Redox Balancing Calculator
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Balance oxidation-reduction reactions using the half-reaction method for acidic, basic, 
              or neutral solutions. See step-by-step how electrons transfer between species.
            </p>
          </div>

          {/* Calculator Component */}
          <RedoxBalancingCalculator />

          {/* Educational Content */}
          <div className="mt-12 prose prose-lg dark:prose-invert max-w-none">
            {/* What is Redox Balancing */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                What are Redox Reactions?
              </h2>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg mb-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <strong>Redox (reduction-oxidation) reactions</strong> involve the transfer of electrons 
                  between chemical species. One species loses electrons (oxidation) while another gains 
                  electrons (reduction). These reactions are fundamental to energy production, metabolism, 
                  corrosion, and countless chemical processes.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-l-4 border-red-500">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">
                      Oxidation (Loses e⁻)
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                      <strong>OIL:</strong> Oxidation Is Loss (of electrons)
                    </p>
                    <div className="font-mono text-sm bg-white dark:bg-gray-900 p-2 rounded">
                      Fe²⁺ → Fe³⁺ + e⁻
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                      Oxidation state increases: +2 → +3
                    </p>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                      Reduction (Gains e⁻)
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                      <strong>RIG:</strong> Reduction Is Gain (of electrons)
                    </p>
                    <div className="font-mono text-sm bg-white dark:bg-gray-900 p-2 rounded">
                      MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                      Oxidation state decreases: +7 → +2
                    </p>
                  </div>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4">
                  <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">
                    Key Principle
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    In any redox reaction: <strong>Electrons lost in oxidation = Electrons gained in reduction</strong>. 
                    The half-reaction method ensures this balance by multiplying each half-reaction by 
                    appropriate coefficients.
                  </p>
                </div>
              </div>
            </section>

            {/* Half-Reaction Method Steps */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                The Half-Reaction Method (7 Steps)
              </h2>

              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      1
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Separate into Half-Reactions
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                        Identify which species is oxidized (loses e⁻) and which is reduced (gains e⁻). 
                        Write each as a separate half-reaction.
                      </p>
                      <div className="bg-gray-100 dark:bg-gray-900 p-3 rounded font-mono text-sm space-y-1">
                        <div className="text-red-600 dark:text-red-400">Oxidation: Fe²⁺ → Fe³⁺</div>
                        <div className="text-blue-600 dark:text-blue-400">Reduction: MnO₄⁻ → Mn²⁺</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      2
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Balance Atoms (except O and H)
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                        Balance the main elements first. Add coefficients to balance atoms on both sides.
                      </p>
                      <div className="bg-gray-100 dark:bg-gray-900 p-3 rounded font-mono text-sm">
                        <div>MnO₄⁻ → Mn²⁺ <span className="text-green-600">✓ Mn already balanced</span></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      3
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Balance Oxygen with H₂O
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                        Add water molecules to the side that needs oxygen atoms.
                      </p>
                      <div className="bg-gray-100 dark:bg-gray-900 p-3 rounded font-mono text-sm">
                        <div>MnO₄⁻ → Mn²⁺ <span className="text-blue-600">+ 4H₂O</span></div>
                        <div className="text-xs text-gray-500 mt-1">(4 oxygen on left, need 4 on right)</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      4
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Balance Hydrogen
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                        <strong>Acidic:</strong> Add H⁺ to side lacking hydrogen<br/>
                        <strong>Basic:</strong> Add OH⁻ to opposite side, then add H₂O to H side
                      </p>
                      <div className="bg-gray-100 dark:bg-gray-900 p-3 rounded font-mono text-sm space-y-2">
                        <div className="border-b border-gray-300 dark:border-gray-700 pb-2">
                          <div className="text-red-600 dark:text-red-400 font-semibold mb-1">Acidic Solution:</div>
                          <div><span className="text-blue-600">8H⁺ +</span> MnO₄⁻ → Mn²⁺ + 4H₂O</div>
                        </div>
                        <div>
                          <div className="text-blue-600 dark:text-blue-400 font-semibold mb-1">Basic Solution:</div>
                          <div className="text-xs">First balance as acidic, then add OH⁻ to neutralize H⁺</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      5
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Balance Charge with Electrons
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                        Add electrons (e⁻) to make the total charge equal on both sides.
                      </p>
                      <div className="bg-gray-100 dark:bg-gray-900 p-3 rounded font-mono text-sm space-y-2">
                        <div>
                          <div className="text-red-600 dark:text-red-400">Oxidation:</div>
                          <div>Fe²⁺ → Fe³⁺ <span className="text-green-600">+ e⁻</span></div>
                          <div className="text-xs text-gray-500">(Charge: +2 on left, +3 on right → add e⁻ to right)</div>
                        </div>
                        <div>
                          <div className="text-blue-600 dark:text-blue-400">Reduction:</div>
                          <div><span className="text-green-600">5e⁻ +</span> 8H⁺ + MnO₄⁻ → Mn²⁺ + 4H₂O</div>
                          <div className="text-xs text-gray-500">(Charge: +7 on left, +2 on right → add 5e⁻ to left)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      6
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Equalize Electrons
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                        Multiply each half-reaction by coefficients to make electrons lost = electrons gained.
                      </p>
                      <div className="bg-gray-100 dark:bg-gray-900 p-3 rounded font-mono text-sm space-y-2">
                        <div className="text-red-600 dark:text-red-400">
                          <span className="text-purple-600">5 ×</span> (Fe²⁺ → Fe³⁺ + e⁻)
                        </div>
                        <div className="text-blue-600 dark:text-blue-400">
                          <span className="text-purple-600">1 ×</span> (5e⁻ + 8H⁺ + MnO₄⁻ → Mn²⁺ + 4H₂O)
                        </div>
                        <div className="text-xs text-gray-500 mt-2">
                          Now both involve 5 electrons
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      7
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Add and Simplify
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                        Add the two half-reactions together and cancel electrons and any other species 
                        that appear on both sides.
                      </p>
                      <div className="bg-gray-100 dark:bg-gray-900 p-3 rounded font-mono text-sm space-y-2">
                        <div>5Fe²⁺ → 5Fe³⁺ + <s className="text-red-500">5e⁻</s></div>
                        <div><s className="text-red-500">5e⁻</s> + 8H⁺ + MnO₄⁻ → Mn²⁺ + 4H₂O</div>
                        <div className="border-t border-gray-300 dark:border-gray-700 pt-2 mt-2 font-bold text-green-600">
                          5Fe²⁺ + 8H⁺ + MnO₄⁻ → 5Fe³⁺ + Mn²⁺ + 4H₂O
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Acidic vs Basic Solutions */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Acidic vs. Basic Solutions
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-4xl">🔴</div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Acidic Solution
                    </h3>
                  </div>
                  <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                    <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded">
                      <p className="font-semibold mb-1">Use H⁺ and H₂O</p>
                      <p>Balance oxygen with H₂O, then hydrogen with H⁺</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">Example:</p>
                      <div className="bg-gray-100 dark:bg-gray-900 p-2 rounded font-mono text-xs">
                        MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold">Common in:</p>
                      <ul className="list-disc list-inside ml-2 mt-1 space-y-1">
                        <li>Titrations with acids</li>
                        <li>Electrochemical cells</li>
                        <li>Industrial oxidations</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-4xl">🔵</div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Basic Solution
                    </h3>
                  </div>
                  <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded">
                      <p className="font-semibold mb-1">Use OH⁻ and H₂O</p>
                      <p>Balance as acidic first, then add OH⁻ to neutralize H⁺</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">Conversion Process:</p>
                      <div className="bg-gray-100 dark:bg-gray-900 p-2 rounded font-mono text-xs space-y-1">
                        <div>1. Balance as acidic</div>
                        <div>2. Add OH⁻ to neutralize H⁺</div>
                        <div>3. Combine H⁺ + OH⁻ → H₂O</div>
                        <div>4. Cancel H₂O if on both sides</div>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold">Common in:</p>
                      <ul className="list-disc list-inside ml-2 mt-1 space-y-1">
                        <li>Alkaline batteries</li>
                        <li>Bleaching reactions</li>
                        <li>Organic oxidations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Complete Example */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Complete Worked Example
              </h2>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Balance: Fe²⁺ + MnO₄⁻ → Fe³⁺ + Mn²⁺ (acidic solution)
                </h3>

                <div className="space-y-6">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Step 1-2: Half-reactions</p>
                    <div className="font-mono text-sm space-y-1">
                      <div>Oxidation: Fe²⁺ → Fe³⁺</div>
                      <div>Reduction: MnO₄⁻ → Mn²⁺</div>
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Step 3: Balance oxygen with H₂O</p>
                    <div className="font-mono text-sm space-y-1">
                      <div>Oxidation: Fe²⁺ → Fe³⁺ (no oxygen)</div>
                      <div>Reduction: MnO₄⁻ → Mn²⁺ + 4H₂O</div>
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Step 4: Balance hydrogen with H⁺</p>
                    <div className="font-mono text-sm space-y-1">
                      <div>Oxidation: Fe²⁺ → Fe³⁺ (no hydrogen)</div>
                      <div>Reduction: 8H⁺ + MnO₄⁻ → Mn²⁺ + 4H₂O</div>
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Step 5: Balance charge with electrons</p>
                    <div className="font-mono text-sm space-y-1">
                      <div>Oxidation: Fe²⁺ → Fe³⁺ + e⁻</div>
                      <div>Reduction: 5e⁻ + 8H⁺ + MnO₄⁻ → Mn²⁺ + 4H₂O</div>
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Step 6: Equalize electrons (multiply by 5)</p>
                    <div className="font-mono text-sm space-y-1">
                      <div>5Fe²⁺ → 5Fe³⁺ + 5e⁻</div>
                      <div>5e⁻ + 8H⁺ + MnO₄⁻ → Mn²⁺ + 4H₂O</div>
                    </div>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p className="font-semibold text-green-900 dark:text-green-100 mb-2">Step 7: Add and cancel electrons</p>
                    <div className="font-mono text-lg font-bold text-green-800 dark:text-green-200">
                      5Fe²⁺ + MnO₄⁻ + 8H⁺ → 5Fe³⁺ + Mn²⁺ + 4H₂O
                    </div>
                    <div className="mt-3 text-sm space-y-1">
                      <div>✓ Atoms balanced: Fe(5=5), Mn(1=1), O(4=4), H(8=8)</div>
                      <div>✓ Charge balanced: Left = 5(+2) + (-1) + 8(+1) = +17</div>
                      <div className="ml-14">Right = 5(+3) + (+2) = +17 ✓</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Applications */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Applications of Redox Reactions
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="text-4xl mb-3">🔋</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Batteries & Fuel Cells
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Batteries convert chemical energy to electrical energy through redox reactions. 
                    Oxidation occurs at the anode, reduction at the cathode, generating electron flow.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="text-4xl mb-3">🧬</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Biological Systems
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Cellular respiration and photosynthesis are redox processes. Glucose is oxidized 
                    to produce ATP, while photosynthesis reduces CO₂ to sugars using light energy.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="text-4xl mb-3">🏭</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Industrial Chemistry
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Metal extraction, bleaching, water treatment, and chemical synthesis all rely on 
                    redox reactions. Chlorine production and aluminum smelting are major applications.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="text-4xl mb-3">🧪</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Analytical Chemistry
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Redox titrations determine concentrations of unknown solutions. Permanganate, 
                    dichromate, and iodometric titrations are standard analytical techniques.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="text-4xl mb-3">🛡️</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Corrosion & Protection
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Rusting is a redox process where iron is oxidized. Galvanization and cathodic 
                    protection use redox principles to prevent metal corrosion.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="text-4xl mb-3">🌊</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Environmental Processes
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Wastewater treatment, pollutant degradation, and nutrient cycling in ecosystems 
                    involve redox chemistry. Denitrification and nitrogen fixation are redox processes.
                  </p>
                </div>
              </div>
            </section>

            {/* Tips and Tricks */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Tips for Balancing Redox Reactions
              </h2>

              <div className="space-y-4">
                <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded">
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                    ✅ Check Your Work
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    After balancing, verify that: (1) All atoms are balanced, (2) Total charge is equal 
                    on both sides, (3) Electrons cancel completely in the final equation.
                  </p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                    💡 For Basic Solutions
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Always balance as acidic first, then convert by adding OH⁻ equal to the number of H⁺. 
                    Combine H⁺ + OH⁻ → H₂O and cancel water molecules appearing on both sides.
                  </p>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded">
                  <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">
                    🎯 Identify Redox First
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Before balancing, assign oxidation numbers to identify which species are oxidized 
                    and reduced. This helps you write correct half-reactions.
                  </p>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
                  <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
                    ⚠️ Common Pitfall
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Don't forget to multiply ENTIRE half-reactions (including H₂O, H⁺, etc.) when 
                    equalizing electrons. A common mistake is only multiplying the main species.
                  </p>
                </div>
              </div>
            </section>
          </div>
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
                        href="/redox-calculators/oxidation-number-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Oxidation Number Calculator</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/electrochemistry-calculators/cell-potential-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Cell Potential Calculator</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/electrochemistry-calculators/electrolysis-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Electrolysis Calculator</span>
                      </a>
                    </li>
                  </ul>
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <a
                      href="/calculators"
                      className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      View All Calculators →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      </div>
      <Footer />
    </>
  );
}