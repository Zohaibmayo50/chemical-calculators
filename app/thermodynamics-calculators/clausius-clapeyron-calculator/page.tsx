import React from 'react';
import ClausiusClapeyronCalculator from '@/components/calculators/ClausiusClapeyronCalculator';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Clausius-Clapeyron Calculator - Vapor Pressure & Phase Transitions',
  description: 'Calculate vapor pressure at different temperatures, determine heat of vaporization, and predict boiling points using the Clausius-Clapeyron equation.',
  keywords: ['Clausius-Clapeyron', 'vapor pressure', 'heat of vaporization', 'boiling point', 'phase transition', 'chemistry calculator', 'thermodynamics'],
};

export default function ClausiusClapeyronCalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-4">
            Clausius-Clapeyron Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Calculate vapor pressure, heat of vaporization, and boiling points
          </p>
        </div>

        <ClausiusClapeyronCalculator />

        {/* Educational Content */}
        <div className="mt-12 space-y-8 text-gray-800 dark:text-gray-200">
          {/* What is Clausius-Clapeyron Equation */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              What is the Clausius-Clapeyron Equation?
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-4">
                The <strong>Clausius-Clapeyron equation</strong> describes how the vapor pressure of a substance changes 
                with temperature. It's a fundamental equation in thermodynamics that relates phase equilibrium to temperature 
                and enthalpy changes.
              </p>
              <p className="leading-relaxed mb-4">
                This equation is derived from the more general <strong>Clapeyron equation</strong> with the assumption that 
                the gas phase behaves ideally and the volume of the liquid phase is negligible compared to the gas phase. 
                It's particularly useful for liquid-vapor equilibria.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 mt-6">
                <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Key Concept:</p>
                <p className="text-blue-800 dark:text-blue-200">
                  The equation shows that vapor pressure increases exponentially with temperature. The rate of increase 
                  depends on the <strong>heat of vaporization (ΔH<sub>vap</sub>)</strong> - substances with higher ΔH<sub>vap</sub> 
                  show stronger temperature dependence of vapor pressure.
                </p>
              </div>
            </div>
          </section>

          {/* The Equation Derivation */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              The Clausius-Clapeyron Equation
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/30 dark:to-secondary-900/30 p-6 rounded-lg mb-6">
                <div className="text-center space-y-4">
                  <div>
                    <p className="text-sm mb-2">Differential Form:</p>
                    <p className="font-mono text-2xl">d(ln P) / dT = ΔH<sub>vap</sub> / (R × T²)</p>
                  </div>
                  <div className="border-t-2 border-gray-300 dark:border-gray-600 pt-4">
                    <p className="text-sm mb-2">Integrated Form (Two-Point):</p>
                    <p className="font-mono text-2xl">ln(P₂/P₁) = -(ΔH<sub>vap</sub>/R) × (1/T₂ - 1/T₁)</p>
                  </div>
                </div>
                
                <div className="mt-6 grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold mb-2">Where:</p>
                    <ul className="space-y-1">
                      <li>P = vapor pressure (atm, Pa, mmHg, etc.)</li>
                      <li>T = absolute temperature (K)</li>
                      <li>ΔH<sub>vap</sub> = heat of vaporization (J/mol)</li>
                      <li>R = gas constant = 8.314 J/(mol·K)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Subscripts:</p>
                    <ul className="space-y-1">
                      <li>1 = initial state (known conditions)</li>
                      <li>2 = final state (conditions to find)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border-l-4 border-yellow-500">
                <p className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Important Assumptions:</p>
                <ul className="list-disc list-inside text-yellow-800 dark:text-yellow-200 space-y-1">
                  <li>ΔH<sub>vap</sub> is constant over the temperature range (valid for small ΔT)</li>
                  <li>The gas phase obeys the ideal gas law</li>
                  <li>The molar volume of liquid is negligible compared to gas</li>
                  <li>The system is at equilibrium (liquid and vapor coexist)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Worked Example */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Worked Example: Water Boiling at Altitude
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Problem:</h4>
                  <p>
                    Water boils at 100°C at sea level (1 atm). At what temperature does water boil in Denver, 
                    where atmospheric pressure is approximately 0.82 atm? The heat of vaporization of water is 40.7 kJ/mol.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">Solution:</h4>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-200 dark:border-gray-600 space-y-4">
                    <div>
                      <p className="font-semibold">Step 1: Identify Given Information</p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>P₁ = 1.00 atm (sea level)</li>
                        <li>T₁ = 100°C = 373.15 K</li>
                        <li>P₂ = 0.82 atm (Denver)</li>
                        <li>ΔH<sub>vap</sub> = 40.7 kJ/mol = 40,700 J/mol</li>
                        <li>R = 8.314 J/(mol·K)</li>
                        <li>T₂ = ? (to find)</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-semibold">Step 2: Rearrange Clausius-Clapeyron Equation</p>
                      <p className="font-mono text-sm">ln(P₂/P₁) = -(ΔH<sub>vap</sub>/R) × (1/T₂ - 1/T₁)</p>
                      <p className="mt-2 text-sm">Solve for T₂:</p>
                      <p className="font-mono text-sm">1/T₂ = 1/T₁ + (R/ΔH<sub>vap</sub>) × ln(P₂/P₁)</p>
                    </div>

                    <div>
                      <p className="font-semibold">Step 3: Calculate ln(P₂/P₁)</p>
                      <p className="font-mono text-sm">ln(P₂/P₁) = ln(0.82/1.00)</p>
                      <p className="font-mono text-sm">= ln(0.82)</p>
                      <p className="font-mono text-sm font-bold">= -0.1985</p>
                    </div>

                    <div>
                      <p className="font-semibold">Step 4: Calculate (R/ΔH<sub>vap</sub>) × ln(P₂/P₁)</p>
                      <p className="font-mono text-sm">
                        = (8.314 J/(mol·K) / 40,700 J/mol) × (-0.1985)
                      </p>
                      <p className="font-mono text-sm">
                        = (2.043 × 10⁻⁴ K⁻¹) × (-0.1985)
                      </p>
                      <p className="font-mono text-sm font-bold">
                        = -4.055 × 10⁻⁵ K⁻¹
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold">Step 5: Calculate 1/T₂</p>
                      <p className="font-mono text-sm">1/T₂ = 1/T₁ + (R/ΔH<sub>vap</sub>) × ln(P₂/P₁)</p>
                      <p className="font-mono text-sm">
                        = 1/373.15 + (-4.055 × 10⁻⁵)
                      </p>
                      <p className="font-mono text-sm">
                        = 2.6797 × 10⁻³ - 4.055 × 10⁻⁵
                      </p>
                      <p className="font-mono text-sm font-bold">
                        = 2.6391 × 10⁻³ K⁻¹
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold">Step 6: Calculate T₂</p>
                      <p className="font-mono text-sm">T₂ = 1 / (2.6391 × 10⁻³)</p>
                      <p className="font-mono text-sm font-bold">
                        = 378.9 K = 95.8°C
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg border-l-4 border-green-500">
                  <p className="font-semibold text-green-900 dark:text-green-100">Answer:</p>
                  <p className="text-green-800 dark:text-green-200">
                    Water boils at approximately <strong>95.8°C</strong> in Denver. This is why cooking times are longer 
                    at high altitudes - water boils at a lower temperature, so food cooks more slowly. The ~4°C decrease 
                    corresponds to the ~0.18 atm decrease in atmospheric pressure.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Vapor Pressure Curves */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Understanding Vapor Pressure Curves
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                The Clausius-Clapeyron equation describes vapor pressure curves, which show how a substance's vapor 
                pressure changes with temperature:
              </p>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">Key Characteristics:</h3>
                <div className="space-y-3 text-blue-800 dark:text-blue-200">
                  <div className="flex items-start">
                    <span className="font-bold text-2xl mr-3">1.</span>
                    <div>
                      <p className="font-semibold">Exponential Increase:</p>
                      <p className="text-sm">
                        Vapor pressure increases exponentially with temperature. A small temperature increase causes 
                        a large pressure increase.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="font-bold text-2xl mr-3">2.</span>
                    <div>
                      <p className="font-semibold">Boiling Point Definition:</p>
                      <p className="text-sm">
                        A liquid boils when its vapor pressure equals the external pressure. At 1 atm, this is the 
                        "normal boiling point."
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="font-bold text-2xl mr-3">3.</span>
                    <div>
                      <p className="font-semibold">Substance Dependence:</p>
                      <p className="text-sm">
                        Substances with stronger intermolecular forces have lower vapor pressures at a given temperature 
                        and higher boiling points. This is reflected in higher ΔH<sub>vap</sub> values.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto mb-6">
                <table className="w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                  <thead className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
                    <tr>
                      <th className="p-3 text-left">Substance</th>
                      <th className="p-3 text-left">Normal BP (°C)</th>
                      <th className="p-3 text-left">ΔH<sub>vap</sub> (kJ/mol)</th>
                      <th className="p-3 text-left">IMF Strength</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="p-3">Diethyl ether</td>
                      <td className="p-3">34.6</td>
                      <td className="p-3">26.0</td>
                      <td className="p-3 text-green-600">Weak (dispersion)</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="p-3">Acetone</td>
                      <td className="p-3">56.2</td>
                      <td className="p-3">29.1</td>
                      <td className="p-3 text-yellow-600">Moderate (dipole)</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="p-3">Methanol</td>
                      <td className="p-3">64.7</td>
                      <td className="p-3">35.3</td>
                      <td className="p-3 text-orange-600">Strong (H-bonding)</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="p-3">Ethanol</td>
                      <td className="p-3">78.4</td>
                      <td className="p-3">38.6</td>
                      <td className="p-3 text-orange-600">Strong (H-bonding)</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 bg-blue-50 dark:bg-blue-900/30">
                      <td className="p-3 font-bold">Water</td>
                      <td className="p-3 font-bold">100.0</td>
                      <td className="p-3 font-bold">40.7</td>
                      <td className="p-3 text-red-600 font-bold">Very Strong (H-bonding)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500">
                <p className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Why Water is Special:</p>
                <p className="text-purple-800 dark:text-purple-200">
                  Water has an unusually high ΔH<sub>vap</sub> and boiling point for its molecular weight due to extensive 
                  hydrogen bonding. Each water molecule can form up to 4 H-bonds, creating a strong network that requires 
                  significant energy to overcome during vaporization.
                </p>
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
                  1. Distillation Processes
                </h3>
                <p className="text-blue-800 dark:text-blue-200">
                  Industrial separation of liquids relies on vapor pressure differences. The Clausius-Clapeyron equation 
                  helps design distillation columns, optimize operating conditions, and predict separation efficiency for 
                  petroleum refining, alcohol production, and chemical purification.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-3">
                  2. Meteorology & Weather
                </h3>
                <p className="text-green-800 dark:text-green-200">
                  Understanding water vapor pressure is crucial for weather prediction. The equation explains dew point, 
                  cloud formation, humidity calculations, and why altitude affects weather patterns. It's fundamental to 
                  atmospheric science and climate modeling.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-3">
                  3. Refrigeration & HVAC
                </h3>
                <p className="text-purple-800 dark:text-purple-200">
                  Refrigerants are selected based on their vapor pressure-temperature relationships. The equation helps 
                  design cooling systems, optimize refrigerant choice, and predict system performance. Air conditioning 
                  and heat pumps rely on controlled phase transitions.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-900 dark:text-orange-100 mb-3">
                  4. Food Science & Cooking
                </h3>
                <p className="text-orange-800 dark:text-orange-200">
                  Pressure cookers work by increasing pressure to raise boiling point, cooking food faster. High-altitude 
                  cooking requires adjustments because water boils at lower temperatures. Freeze-drying and vacuum 
                  evaporation use reduced pressure for preservation.
                </p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-teal-900 dark:text-teal-100 mb-3">
                  5. Chemical Engineering
                </h3>
                <p className="text-teal-800 dark:text-teal-200">
                  Design of evaporators, condensers, and heat exchangers requires accurate vapor pressure predictions. 
                  The equation guides reactor design, solvent recovery systems, and crystallization processes in 
                  pharmaceutical and chemical manufacturing.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-yellow-900 dark:text-yellow-100 mb-3">
                  6. Environmental Science
                </h3>
                <p className="text-yellow-800 dark:text-yellow-200">
                  Predicting the evaporation of pollutants, understanding volatile organic compound (VOC) emissions, 
                  and modeling soil moisture dynamics all use the Clausius-Clapeyron relationship. It's essential for 
                  environmental risk assessment and remediation.
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
                    Step 1: Identify Known and Unknown Variables
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-blue-800 dark:text-blue-200">
                    <li>What are you solving for? P₂, T₂, or ΔH<sub>vap</sub>?</li>
                    <li>List all given values with units</li>
                    <li>Determine if normal boiling point data is provided</li>
                  </ul>
                </div>

                <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-3">
                    Step 2: Convert to Proper Units
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-green-800 dark:text-green-200">
                    <li>Temperature: MUST be in Kelvin (K = °C + 273.15)</li>
                    <li>ΔH<sub>vap</sub>: Convert kJ/mol to J/mol (multiply by 1000)</li>
                    <li>Pressure: Keep units consistent (atm, Pa, mmHg, etc.)</li>
                    <li>R = 8.314 J/(mol·K) when using J and K</li>
                  </ul>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-3">
                    Step 3: Apply the Equation
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-purple-800 dark:text-purple-200">
                    <li>Use: ln(P₂/P₁) = -(ΔH<sub>vap</sub>/R) × (1/T₂ - 1/T₁)</li>
                    <li>Rearrange algebraically to solve for the unknown</li>
                    <li>Be careful with signs: note the negative sign in the equation</li>
                  </ul>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500">
                  <h3 className="text-xl font-semibold text-orange-900 dark:text-orange-100 mb-3">
                    Step 4: Calculate and Check
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-orange-800 dark:text-orange-200">
                    <li>Perform calculation with proper significant figures</li>
                    <li>Convert temperature back to °C if needed</li>
                    <li>Check reasonableness: higher T → higher P, lower altitude → higher BP</li>
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
                  ❌ Using Celsius Instead of Kelvin
                </h3>
                <p className="text-red-800 dark:text-red-200 mb-2">
                  The equation requires absolute temperature in Kelvin. Using °C gives completely wrong results.
                </p>
                <p className="text-sm text-red-700 dark:text-red-300">
                  <strong>Correct:</strong> Always convert: K = °C + 273.15
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
                  ❌ Forgetting to Convert ΔH<sub>vap</sub> to J/mol
                </h3>
                <p className="text-red-800 dark:text-red-200 mb-2">
                  ΔH<sub>vap</sub> is often given in kJ/mol but R is in J/(mol·K). Units must match.
                </p>
                <p className="text-sm text-red-700 dark:text-red-300">
                  <strong>Correct:</strong> Multiply kJ/mol by 1000 to get J/mol
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
                  ❌ Incorrectly Calculating (1/T₂ - 1/T₁)
                </h3>
                <p className="text-red-800 dark:text-red-200 mb-2">
                  Order matters! It's (1/T₂ - 1/T₁), NOT (1/(T₂ - T₁)).
                </p>
                <p className="text-sm text-red-700 dark:text-red-300">
                  <strong>Correct:</strong> Calculate 1/T₂ and 1/T₁ separately, then subtract
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
                  ❌ Ignoring the Negative Sign
                </h3>
                <p className="text-red-800 dark:text-red-200 mb-2">
                  The equation has a negative sign: ln(P₂/P₁) = -(ΔH<sub>vap</sub>/R) × (1/T₂ - 1/T₁).
                </p>
                <p className="text-sm text-red-700 dark:text-red-300">
                  <strong>Correct:</strong> Don't drop the negative sign - it's crucial for correct results
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
                <h3 className="text-lg font-semibold mb-4">Key Constants</h3>
                <div className="space-y-2 text-sm">
                  <p>R = 8.314 J/(mol·K)</p>
                  <p>R = 0.08206 L·atm/(mol·K)</p>
                  <p>1 atm = 101.325 kPa = 760 mmHg</p>
                  <p>K = °C + 273.15</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-tertiary-50 to-primary-50 dark:from-tertiary-900/20 dark:to-primary-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Key Formulas</h3>
                <div className="space-y-2 text-sm font-mono">
                  <p>ln(P₂/P₁) = -(ΔH<sub>vap</sub>/R)(1/T₂ - 1/T₁)</p>
                  <p>P₂ = P₁ × exp[-(ΔH<sub>vap</sub>/R)(1/T₂ - 1/T₁)]</p>
                  <p>T₂ = 1/[1/T₁ + (R/ΔH<sub>vap</sub>)ln(P₂/P₁)]</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-secondary-50 to-tertiary-50 dark:from-secondary-900/20 dark:to-tertiary-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Typical ΔH<sub>vap</sub> Values</h3>
                <div className="space-y-2 text-sm">
                  <p>Water: 40.7 kJ/mol</p>
                  <p>Ethanol: 38.6 kJ/mol</p>
                  <p>Acetone: 29.1 kJ/mol</p>
                  <p>Diethyl ether: 26.0 kJ/mol</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-tertiary-50 dark:from-primary-900/20 dark:to-tertiary-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Quick Checks</h3>
                <div className="space-y-2 text-sm">
                  <p>• Higher T → Higher P (always)</p>
                  <p>• BP at 1 atm = normal BP</p>
                  <p>• Lower altitude → Higher P → Higher BP</p>
                  <p>• Stronger IMF → Higher ΔH<sub>vap</sub> → Higher BP</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
