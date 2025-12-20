import CombustionCalculator from '@/components/calculators/CombustionCalculator';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Combustion Calculator - ChemCalc',
  description: 'Calculate complete and incomplete combustion reactions. Balance combustion equations, determine products, and calculate energy released.',
  keywords: 'combustion, burning, hydrocarbon, oxygen, CO2, energy, enthalpy, complete combustion, incomplete combustion',
};

export default function CombustionCalculatorPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
              Combustion Reaction Calculator
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Analyze complete and incomplete combustion reactions, balance equations, and calculate products and energy released
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <CombustionCalculator />
            </div>

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Related Calculators
                </h2>
                <div className="space-y-3">
                  <a href="/stoichiometry-calculators/balancing-equations-calculator" className="block p-3 bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/50 rounded-lg transition-colors">
                    <h3 className="font-semibold text-blue-900 dark:text-blue-100">Equation Balancer</h3>
                    <p className="text-sm text-blue-700 dark:text-blue-300">Balance chemical equations</p>
                  </a>
                  <a href="/stoichiometry-calculators/stoichiometry-calculator" className="block p-3 bg-green-50 dark:bg-green-900/30 hover:bg-green-100 dark:hover:bg-green-900/50 rounded-lg transition-colors">
                    <h3 className="font-semibold text-green-900 dark:text-green-100">Stoichiometry</h3>
                    <p className="text-sm text-green-700 dark:text-green-300">Reaction calculations</p>
                  </a>
                  <a href="/thermodynamics-calculators/enthalpy-reaction-calculator" className="block p-3 bg-purple-50 dark:bg-purple-900/30 hover:bg-purple-100 dark:hover:bg-purple-900/50 rounded-lg transition-colors">
                    <h3 className="font-semibold text-purple-900 dark:text-purple-100">Enthalpy of Reaction</h3>
                    <p className="text-sm text-purple-700 dark:text-purple-300">Calculate heat changes</p>
                  </a>
                  <a href="/stoichiometry-calculators/limiting-reactant-calculator" className="block p-3 bg-orange-50 dark:bg-orange-900/30 hover:bg-orange-100 dark:hover:bg-orange-900/50 rounded-lg transition-colors">
                    <h3 className="font-semibold text-orange-900 dark:text-orange-100">Limiting Reactant</h3>
                    <p className="text-sm text-orange-700 dark:text-orange-300">Find limiting reagent</p>
                  </a>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Combustion Types
                </h3>
                <div className="prose dark:prose-invert max-w-none text-sm">
                  <div className="space-y-2">
                    <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
                      <p className="font-semibold text-green-900 dark:text-green-100">Complete</p>
                      <p className="text-xs text-green-700 dark:text-green-300">
                        Produces CO₂ + H₂O (blue flame)
                      </p>
                    </div>
                    <div className="p-3 bg-orange-50 dark:bg-orange-900/30 rounded-lg">
                      <p className="font-semibold text-orange-900 dark:text-orange-100">Incomplete</p>
                      <p className="text-xs text-orange-700 dark:text-orange-300">
                        Produces CO + soot (yellow flame)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              Understanding Combustion Reactions
            </h2>
            
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Combustion is a high-temperature exothermic chemical reaction between a fuel and an oxidant, usually oxygen, producing oxidized products and releasing energy in the form of heat and light. Combustion reactions are fundamental to many everyday processes, from the burning of gasoline in car engines to the metabolism of food in our bodies. Understanding combustion chemistry is essential for energy production, environmental science, and industrial applications.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">
                Complete Combustion
              </h3>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Complete combustion occurs when a hydrocarbon fuel reacts with sufficient oxygen to produce carbon dioxide (CO₂) and water (H₂O) as the only products. This type of combustion releases the maximum possible energy from the fuel and is characterized by a blue flame. The general equation for complete combustion of a hydrocarbon is:
              </p>

              <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
                <p className="text-center text-xl font-semibold text-gray-800 dark:text-white mb-4">
                  CₓHᵧ + (x + y/4)O₂ → xCO₂ + (y/2)H₂O
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Where x and y represent the number of carbon and hydrogen atoms in the hydrocarbon molecule.
                </p>
              </div>

              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Examples of Complete Combustion
              </h4>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg">
                  <h5 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Methane</h5>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                    <strong>Equation:</strong> CH₄ + 2O₂ → CO₂ + 2H₂O
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                    <strong>ΔH°:</strong> -890 kJ/mol
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Natural gas combustion, primary component of household gas
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg">
                  <h5 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Propane</h5>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                    <strong>Equation:</strong> C₃H₈ + 5O₂ → 3CO₂ + 4H₂O
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                    <strong>ΔH°:</strong> -2220 kJ/mol
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Used in portable heaters, grills, and as automotive fuel
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg">
                  <h5 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Ethanol</h5>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                    <strong>Equation:</strong> C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                    <strong>ΔH°:</strong> -1367 kJ/mol
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Biofuel, renewable energy source, fuel additive
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg">
                  <h5 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Octane</h5>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                    <strong>Equation:</strong> 2C₈H₁₈ + 25O₂ → 16CO₂ + 18H₂O
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                    <strong>ΔH°:</strong> -5471 kJ/mol
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Component of gasoline, internal combustion engines
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">
                Incomplete Combustion
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Incomplete combustion occurs when there is insufficient oxygen to allow the fuel to react completely. This produces carbon monoxide (CO), elemental carbon (soot), or both, in addition to carbon dioxide and water. Incomplete combustion is less efficient and potentially dangerous because carbon monoxide is toxic and soot represents unburned fuel.
              </p>

              <div className="bg-yellow-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  Incomplete Combustion Products
                </h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li><strong>Limited O₂:</strong> 2CH₄ + 3O₂ → 2CO + 4H₂O (carbon monoxide formed)</li>
                  <li><strong>Very Limited O₂:</strong> CH₄ + O₂ → C + 2H₂O (soot/carbon formed)</li>
                  <li><strong>Mixed Products:</strong> Often produces a combination of CO₂, CO, C, and H₂O</li>
                </ul>
              </div>

              <div className="bg-red-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  ⚠️ Hazards of Incomplete Combustion
                </h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li><strong>Carbon Monoxide Poisoning:</strong> CO binds to hemoglobin 200× more strongly than O₂, preventing oxygen transport in blood</li>
                  <li><strong>Reduced Efficiency:</strong> Less energy released compared to complete combustion</li>
                  <li><strong>Soot Formation:</strong> Particulate matter causes air pollution and respiratory problems</li>
                  <li><strong>Yellow/Orange Flame:</strong> Indicates incomplete combustion (vs. blue for complete)</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">
                Energy Calculations
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The energy released during combustion is quantified by the enthalpy of combustion (ΔH°ₒₘᵦ), which is the heat released when one mole of a substance undergoes complete combustion under standard conditions. This value is always negative because combustion is exothermic. The total energy released can be calculated using:
              </p>

              <div className="bg-green-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
                <p className="text-center text-xl font-semibold text-gray-800 dark:text-white mb-4">
                  Energy Released = moles of fuel × |ΔH°ₒₘᵦ|
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  The absolute value is used because we're interested in the magnitude of energy released.
                </p>
              </div>

              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Standard Enthalpies of Combustion
              </h4>

              <div className="overflow-x-auto mb-6">
                <table className="min-w-full bg-white dark:bg-gray-700 rounded-lg">
                  <thead className="bg-gray-100 dark:bg-gray-600">
                    <tr>
                      <th className="px-4 py-2 text-left text-gray-800 dark:text-white">Compound</th>
                      <th className="px-4 py-2 text-left text-gray-800 dark:text-white">Formula</th>
                      <th className="px-4 py-2 text-left text-gray-800 dark:text-white">ΔH°ₒₘᵦ (kJ/mol)</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 dark:text-gray-300">
                    <tr className="border-t dark:border-gray-600">
                      <td className="px-4 py-2">Methane</td>
                      <td className="px-4 py-2">CH₄</td>
                      <td className="px-4 py-2">-890</td>
                    </tr>
                    <tr className="border-t dark:border-gray-600">
                      <td className="px-4 py-2">Ethane</td>
                      <td className="px-4 py-2">C₂H₆</td>
                      <td className="px-4 py-2">-1560</td>
                    </tr>
                    <tr className="border-t dark:border-gray-600">
                      <td className="px-4 py-2">Propane</td>
                      <td className="px-4 py-2">C₃H₈</td>
                      <td className="px-4 py-2">-2220</td>
                    </tr>
                    <tr className="border-t dark:border-gray-600">
                      <td className="px-4 py-2">Butane</td>
                      <td className="px-4 py-2">C₄H₁₀</td>
                      <td className="px-4 py-2">-2878</td>
                    </tr>
                    <tr className="border-t dark:border-gray-600">
                      <td className="px-4 py-2">Ethanol</td>
                      <td className="px-4 py-2">C₂H₅OH</td>
                      <td className="px-4 py-2">-1367</td>
                    </tr>
                    <tr className="border-t dark:border-gray-600">
                      <td className="px-4 py-2">Glucose</td>
                      <td className="px-4 py-2">C₆H₁₂O₆</td>
                      <td className="px-4 py-2">-2803</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">
                Balancing Combustion Equations
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Balancing combustion equations follows a systematic approach. For hydrocarbons (CₓHᵧ), the general steps are:
              </p>

              <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300 mb-6">
                <li><strong>Balance carbon atoms:</strong> Place coefficient x before CO₂</li>
                <li><strong>Balance hydrogen atoms:</strong> Place coefficient y/2 before H₂O</li>
                <li><strong>Balance oxygen atoms:</strong> Count oxygen needed and adjust O₂ coefficient</li>
                <li><strong>Clear fractions:</strong> Multiply all coefficients by 2 if necessary</li>
              </ol>

              <div className="bg-purple-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  Example: Balancing Butane Combustion
                </h4>
                <div className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <p><strong>Step 1:</strong> C₄H₁₀ + O₂ → 4CO₂ + H₂O (carbon balanced)</p>
                  <p><strong>Step 2:</strong> C₄H₁₀ + O₂ → 4CO₂ + 5H₂O (hydrogen balanced)</p>
                  <p><strong>Step 3:</strong> C₄H₁₀ + 6.5O₂ → 4CO₂ + 5H₂O (oxygen balanced)</p>
                  <p><strong>Step 4:</strong> 2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O (fractions cleared)</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">
                Applications and Importance
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Energy Production</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Combustion reactions power most of the world's energy infrastructure, from coal power plants to natural gas turbines. Understanding combustion efficiency is crucial for maximizing energy output while minimizing emissions and fuel consumption.
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Transportation</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Internal combustion engines rely on precisely controlled combustion reactions. Modern engines use computer-controlled fuel injection and air-fuel ratio management to ensure complete combustion, improving efficiency and reducing emissions.
                  </p>
                </div>

                <div className="bg-yellow-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Environmental Science</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Combustion is a major source of greenhouse gases (CO₂) and air pollutants (CO, particulates, NOₓ). Understanding combustion chemistry is essential for developing cleaner technologies and carbon capture strategies to mitigate climate change.
                  </p>
                </div>

                <div className="bg-red-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Industrial Processes</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Many industrial processes use combustion for heating, metal processing, and chemical synthesis. Controlling combustion conditions allows industries to optimize product quality, energy efficiency, and safety while minimizing waste and emissions.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">
                Factors Affecting Combustion
              </h3>

              <ul className="space-y-3 text-gray-700 dark:text-gray-300 mb-6">
                <li><strong>Oxygen Availability:</strong> Determines whether combustion is complete or incomplete. Excess oxygen ensures complete combustion, while limited oxygen leads to CO and soot formation.</li>
                <li><strong>Temperature:</strong> Higher temperatures generally increase reaction rates and completeness. Pre-heating fuel and air improves combustion efficiency.</li>
                <li><strong>Fuel-Air Mixing:</strong> Better mixing ensures all fuel molecules have access to oxygen, promoting complete combustion. Turbulence and atomization improve mixing.</li>
                <li><strong>Fuel Composition:</strong> Aromatic hydrocarbons and larger molecules are more prone to incomplete combustion than simple alkanes. Fuel additives can improve combustion characteristics.</li>
                <li><strong>Pressure:</strong> Higher pressure increases the density of reactants, accelerating combustion. This principle is used in diesel engines and gas turbines.</li>
              </ul>

              <div className="bg-indigo-50 dark:bg-gray-700 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  Combustion in Biology
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Cellular respiration is essentially a controlled, low-temperature combustion of glucose. The overall equation is identical to glucose combustion:
                </p>
                <p className="text-center font-mono text-gray-800 dark:text-white mb-3">
                  C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + Energy (ATP)
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  However, instead of releasing all energy as heat at once, cells capture energy gradually through a series of enzyme-catalyzed reactions, storing it in ATP molecules for use in biological processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        <Footer />
    </>
  );
}
