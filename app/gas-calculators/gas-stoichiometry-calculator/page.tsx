import GasStoichiometryCalculator from '@/components/calculators/GasStoichiometryCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata = {
  title: 'Gas Stoichiometry Calculator | Chemistry Calculators',
  description: 'Calculate gas volumes, masses, and moles using the ideal gas law combined with stoichiometry. Perfect for chemistry students and professionals.',
  keywords: 'gas stoichiometry, ideal gas law, PV=nRT, molar volume, STP, gas calculations, chemistry calculator',
};

export default function GasStoichiometryCalculatorPage() {  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-tertiary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Gas Stoichiometry Calculator
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Combine the ideal gas law with stoichiometry to solve gas-related problems
          </p>
        </div>

        <GasStoichiometryCalculator />

        {/* Educational Content */}
        <div className="mt-12 space-y-8">
          {/* What is Gas Stoichiometry? */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              What is Gas Stoichiometry?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Gas stoichiometry combines the <strong>ideal gas law</strong> (PV = nRT) with stoichiometric principles 
              from balanced chemical equations. This allows us to relate the volume of gases to the amounts (moles, mass) 
              of reactants and products in chemical reactions.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">The Ideal Gas Law:</h3>
              <p className="text-blue-800 dark:text-blue-200 font-mono text-lg mb-2">
                PV = nRT
              </p>
              <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                <li>• <strong>P</strong> = Pressure (atm, Pa, mmHg)</li>
                <li>• <strong>V</strong> = Volume (L, m³)</li>
                <li>• <strong>n</strong> = Moles (mol)</li>
                <li>• <strong>R</strong> = Gas constant (0.0821 L·atm/(mol·K) or 8.314 J/(mol·K))</li>
                <li>• <strong>T</strong> = Temperature (K)</li>
              </ul>
            </div>
          </section>

          {/* Standard Temperature and Pressure */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Standard Conditions
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">STP (Standard Temperature & Pressure)</h3>
                <ul className="text-green-800 dark:text-green-200 space-y-1">
                  <li>• Temperature: 0°C (273.15 K)</li>
                  <li>• Pressure: 1 atm (101.325 kPa)</li>
                  <li>• <strong>1 mole of any gas = 22.4 L</strong></li>
                </ul>
                <p className="text-sm text-green-700 dark:text-green-300 mt-2">
                  This is the IUPAC standard reference point
                </p>
              </div>
              
              <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Room Conditions</h3>
                <ul className="text-purple-800 dark:text-purple-200 space-y-1">
                  <li>• Temperature: 25°C (298.15 K)</li>
                  <li>• Pressure: 1 atm</li>
                  <li>• <strong>1 mole of gas ≈ 24.5 L</strong></li>
                </ul>
                <p className="text-sm text-purple-700 dark:text-purple-300 mt-2">
                  Common laboratory conditions
                </p>
              </div>
            </div>
          </section>

          {/* Example Problems */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Example Problems
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-tertiary-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Example 1: Finding Gas Volume at STP
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Problem:</strong> What volume of CO₂ gas is produced when 8.8 g of CO₂ is formed at STP?
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg space-y-2">
                  <p className="font-mono text-sm text-gray-800 dark:text-gray-200">
                    Given: mass = 8.8 g, M(CO₂) = 44.01 g/mol
                  </p>
                  <p className="font-mono text-sm text-gray-800 dark:text-gray-200">
                    Step 1: n = mass / M = 8.8 / 44.01 = 0.200 mol
                  </p>
                  <p className="font-mono text-sm text-gray-800 dark:text-gray-200">
                    Step 2: At STP, V = n × 22.4 L/mol = 0.200 × 22.4 = 4.48 L
                  </p>
                  <p className="font-semibold text-tertiary-600 dark:text-tertiary-400">
                    Answer: 4.48 L of CO₂
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-secondary-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Example 2: Stoichiometry with Gases
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Problem:</strong> How many liters of O₂ at STP are needed to react with 2.5 L of H₂?
                  <br />
                  Reaction: 2H₂ + O₂ → 2H₂O
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg space-y-2">
                  <p className="font-mono text-sm text-gray-800 dark:text-gray-200">
                    From equation: 2 mol H₂ requires 1 mol O₂
                  </p>
                  <p className="font-mono text-sm text-gray-800 dark:text-gray-200">
                    At same T and P: Volume ratio = Mole ratio
                  </p>
                  <p className="font-mono text-sm text-gray-800 dark:text-gray-200">
                    V(O₂) = V(H₂) × (1 mol O₂ / 2 mol H₂) = 2.5 × (1/2) = 1.25 L
                  </p>
                  <p className="font-semibold text-secondary-600 dark:text-secondary-400">
                    Answer: 1.25 L of O₂
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-primary-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Example 3: Non-STP Conditions
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Problem:</strong> Calculate the volume of 0.5 mol of N₂ at 25°C and 2 atm.
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg space-y-2">
                  <p className="font-mono text-sm text-gray-800 dark:text-gray-200">
                    Given: n = 0.5 mol, T = 298 K, P = 2 atm, R = 0.0821 L·atm/(mol·K)
                  </p>
                  <p className="font-mono text-sm text-gray-800 dark:text-gray-200">
                    PV = nRT
                  </p>
                  <p className="font-mono text-sm text-gray-800 dark:text-gray-200">
                    V = nRT/P = (0.5 × 0.0821 × 298) / 2 = 6.13 L
                  </p>
                  <p className="font-semibold text-primary-600 dark:text-primary-400">
                    Answer: 6.13 L of N₂
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Avogadro's Law */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Avogadro's Law and Gas Volumes
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Avogadro's Law</strong> states that equal volumes of all gases at the same temperature and pressure 
              contain the same number of molecules (or moles).
            </p>
            <div className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg mb-4">
              <p className="text-indigo-800 dark:text-indigo-200 font-mono text-lg mb-2">
                V₁/n₁ = V₂/n₂ (at constant T and P)
              </p>
              <p className="text-sm text-indigo-700 dark:text-indigo-300">
                This means volume ratios equal mole ratios for gases under the same conditions
              </p>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              This is extremely useful in stoichiometry because you can directly use volume ratios from balanced 
              equations when working with gases at the same temperature and pressure.
            </p>
          </section>

          {/* Molar Volume Table */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Molar Volume at Different Conditions
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th className="px-4 py-2 text-left text-gray-900 dark:text-white">Conditions</th>
                    <th className="px-4 py-2 text-left text-gray-900 dark:text-white">Temperature (K)</th>
                    <th className="px-4 py-2 text-left text-gray-900 dark:text-white">Pressure (atm)</th>
                    <th className="px-4 py-2 text-left text-gray-900 dark:text-white">Molar Volume (L/mol)</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="px-4 py-2">STP (IUPAC)</td>
                    <td className="px-4 py-2">273.15</td>
                    <td className="px-4 py-2">1.000</td>
                    <td className="px-4 py-2 font-semibold">22.414</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="px-4 py-2">Room Temperature</td>
                    <td className="px-4 py-2">298.15</td>
                    <td className="px-4 py-2">1.000</td>
                    <td className="px-4 py-2 font-semibold">24.465</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="px-4 py-2">High Pressure</td>
                    <td className="px-4 py-2">298.15</td>
                    <td className="px-4 py-2">2.000</td>
                    <td className="px-4 py-2 font-semibold">12.232</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="px-4 py-2">High Temperature</td>
                    <td className="px-4 py-2">373.15</td>
                    <td className="px-4 py-2">1.000</td>
                    <td className="px-4 py-2 font-semibold">30.620</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Real-World Applications */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Real-World Applications
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">🏭 Industrial Processes</h3>
                <ul className="text-sm text-yellow-800 dark:text-yellow-200 space-y-1">
                  <li>• Haber process (NH₃ production): N₂ + 3H₂ → 2NH₃</li>
                  <li>• Calculating reactant volumes for chemical plants</li>
                  <li>• Designing reactor sizes and gas storage systems</li>
                  <li>• Optimizing fuel-air mixtures in combustion</li>
                </ul>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-red-900 dark:text-red-100 mb-2">🔬 Laboratory Work</h3>
                <ul className="text-sm text-red-800 dark:text-red-200 space-y-1">
                  <li>• Gas collection experiments</li>
                  <li>• Determining yields of gaseous products</li>
                  <li>• Calibrating gas syringes and volumetric equipment</li>
                  <li>• Preparing specific gas concentrations</li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">🌱 Environmental Science</h3>
                <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                  <li>• Calculating CO₂ emissions from combustion</li>
                  <li>• Measuring air pollutant concentrations</li>
                  <li>• Greenhouse gas inventories</li>
                  <li>• Atmospheric chemistry modeling</li>
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">⚕️ Medical Applications</h3>
                <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                  <li>• Anesthetic gas delivery systems</li>
                  <li>• Oxygen therapy calculations</li>
                  <li>• Respiratory gas exchange analysis</li>
                  <li>• Scuba diving gas mixtures (nitrox, trimix)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Important Notes */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Important Considerations
            </h2>
            <div className="space-y-4">
              <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">⚠️ Ideal Gas Assumptions</h3>
                <p className="text-sm text-orange-800 dark:text-orange-200">
                  The ideal gas law assumes:
                </p>
                <ul className="text-sm text-orange-800 dark:text-orange-200 space-y-1 mt-2">
                  <li>• Gas particles have no volume</li>
                  <li>• No intermolecular forces between particles</li>
                  <li>• Perfectly elastic collisions</li>
                  <li>• Random motion</li>
                </ul>
                <p className="text-sm text-orange-700 dark:text-orange-300 mt-2">
                  Real gases deviate from ideal behavior at high pressures and low temperatures. 
                  Use the Van der Waals equation for more accurate calculations under these conditions.
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">📏 Unit Consistency</h3>
                <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-1">
                  <li>• Always use Kelvin for temperature (K = °C + 273.15)</li>
                  <li>• Match R constant with your units (0.0821 L·atm/(mol·K) or 8.314 J/(mol·K))</li>
                  <li>• Convert all measurements to compatible units before calculating</li>
                  <li>• Check significant figures based on given data</li>
                </ul>
              </div>

              <div className="bg-teal-50 dark:bg-teal-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-teal-900 dark:text-teal-100 mb-2">🔄 Stoichiometric Coefficients</h3>
                <p className="text-sm text-teal-800 dark:text-teal-200">
                  Always balance your chemical equation first! The mole ratios from the balanced equation 
                  are critical for accurate stoichiometric calculations. For gases at the same T and P, 
                  volume ratios equal mole ratios.
                </p>
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
                        href="/gas-calculators/gas-density-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Gas Density Calculator</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/stoichiometry-calculators/limiting-reactant-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Limiting Reactant Calculator</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/physical-chemistry-calculators/van-der-waals-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Van der Waals Calculator</span>
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
                          href="/chemistry-formulas/gas-stoichiometry-formula"
                          className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                        >
                          <span>→</span>
                          <span>Gas Stoichiometry Formula</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/chemistry-formulas/ideal-gas-law"
                          className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                        >
                          <span>→</span>
                          <span>Ideal Gas Law</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <a
                      href="/gas-calculators"
                      className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      All Gas Calculators →
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