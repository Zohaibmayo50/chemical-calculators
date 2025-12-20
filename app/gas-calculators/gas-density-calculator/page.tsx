import React from 'react';
import GasDensityCalculator from '@/components/calculators/GasDensityCalculator';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gas Density Calculator - Ideal Gas Law & Molar Mass',
  description: 'Calculate gas density, molar mass, pressure, or temperature using the ideal gas law. Determine molecular weight from density measurements.',
  keywords: ['gas density', 'molar mass', 'ideal gas law', 'molecular weight', 'gas calculator', 'chemistry', 'STP', 'D=PM/RT'],
};

export default function GasDensityCalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-4">
            Gas Density Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Calculate density, molar mass, pressure, or temperature using D = PM/RT
          </p>
        </div>

        <GasDensityCalculator />

        {/* Educational Content */}
        <div className="mt-12 space-y-8 text-gray-800 dark:text-gray-200">
          {/* What is Gas Density */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              What is Gas Density?
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-4">
                <strong>Gas density</strong> is the mass of gas per unit volume, typically expressed in grams per 
                liter (g/L). Unlike solids and liquids, gas density is highly dependent on temperature and pressure 
                because gases are compressible and expand to fill their containers.
              </p>
              <p className="leading-relaxed mb-4">
                Key properties of gas density:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li><strong>Pressure-dependent:</strong> Higher pressure increases density (more molecules in same volume)</li>
                <li><strong>Temperature-dependent:</strong> Higher temperature decreases density (molecules spread out)</li>
                <li><strong>Mass-dependent:</strong> Gases with higher molar mass have higher density at same P and T</li>
                <li><strong>Compressible:</strong> Unlike liquids/solids, gas density can vary dramatically with conditions</li>
              </ul>
              <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 mt-6">
                <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Standard Conditions:</p>
                <p className="text-blue-800 dark:text-blue-200">
                  <strong>STP (Standard Temperature and Pressure):</strong> 0°C (273.15 K) and 1 atm<br/>
                  <strong>SATP (Standard Ambient Temperature and Pressure):</strong> 25°C (298.15 K) and 1 bar (~1 atm)<br/>
                  <strong>Molar Volume at STP:</strong> 22.4 L/mol for any ideal gas
                </p>
              </div>
            </div>
          </section>

          {/* Deriving the Formula */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Deriving the Gas Density Formula
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="leading-relaxed mb-4">
                The gas density formula comes from the ideal gas law and the definition of density:
              </p>
              
              <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/30 dark:to-secondary-900/30 p-6 rounded-lg mb-6 space-y-4">
                <div>
                  <p className="font-semibold mb-2">Step 1: Start with the Ideal Gas Law</p>
                  <p className="font-mono text-xl text-center py-2">PV = nRT</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    Where n = number of moles, R = gas constant
                  </p>
                </div>

                <div>
                  <p className="font-semibold mb-2">Step 2: Express Moles in Terms of Mass</p>
                  <p className="font-mono text-lg text-center py-2">n = m/M</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    Where m = mass (g), M = molar mass (g/mol)
                  </p>
                </div>

                <div>
                  <p className="font-semibold mb-2">Step 3: Substitute into Ideal Gas Law</p>
                  <p className="font-mono text-lg text-center py-2">PV = (m/M)RT</p>
                </div>

                <div>
                  <p className="font-semibold mb-2">Step 4: Rearrange to Isolate m/V</p>
                  <p className="font-mono text-lg text-center py-2">m/V = PM/RT</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    Multiply both sides by M/R, divide both sides by T
                  </p>
                </div>

                <div>
                  <p className="font-semibold mb-2">Step 5: Recognize m/V as Density</p>
                  <p className="font-mono text-2xl text-center py-3 bg-white dark:bg-gray-800 rounded-lg">
                    D = PM/RT
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    Where D = density (g/L)
                  </p>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500">
                <p className="font-semibold text-green-900 dark:text-green-100 mb-2">Key Insight:</p>
                <p className="text-green-800 dark:text-green-200">
                  This formula shows that gas density is <strong>directly proportional</strong> to pressure and 
                  molar mass, but <strong>inversely proportional</strong> to temperature. Doubling the pressure 
                  doubles the density; doubling the temperature halves the density (at constant P).
                </p>
              </div>
            </div>
          </section>

          {/* Worked Example */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Worked Example: Identifying an Unknown Gas
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Problem:</h4>
                  <p>
                    An unknown gas has a density of 1.25 g/L at 25°C and 1.00 atm. What is the molar mass 
                    of this gas? Can you identify it?
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">Given:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>D = 1.25 g/L</li>
                    <li>T = 25°C = 298.15 K</li>
                    <li>P = 1.00 atm</li>
                    <li>R = 0.0821 L·atm/(mol·K)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">Solution:</h4>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-200 dark:border-gray-600 space-y-3">
                    <div>
                      <p className="font-semibold">Step 1: Write the formula for molar mass</p>
                      <p className="font-mono">M = DRT/P</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        (Rearranged from D = PM/RT)
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold">Step 2: Substitute known values</p>
                      <p className="font-mono">M = (1.25 g/L × 0.0821 L·atm/(mol·K) × 298.15 K) / 1.00 atm</p>
                    </div>

                    <div>
                      <p className="font-semibold">Step 3: Calculate</p>
                      <p className="font-mono">M = (30.58) / 1.00</p>
                      <p className="font-mono text-lg font-bold">M = 30.58 g/mol</p>
                    </div>

                    <div>
                      <p className="font-semibold">Step 4: Identify the gas</p>
                      <p>
                        A molar mass of approximately 30.6 g/mol is close to <strong>NO (nitric oxide)</strong>, 
                        which has M = 30.01 g/mol, or possibly a mixture of gases.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="font-semibold text-blue-900 dark:text-blue-100">Answer:</p>
                  <p className="text-blue-800 dark:text-blue-200">
                    The molar mass is <strong>30.58 g/mol</strong>, suggesting the unknown gas is likely 
                    <strong> NO (nitric oxide)</strong> or a mixture containing NO.
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
                  1. Gas Identification
                </h3>
                <p className="text-blue-800 dark:text-blue-200">
                  Measuring the density of an unknown gas allows chemists to determine its molar mass and 
                  identify it. This is especially useful in industrial settings where gas mixtures need to 
                  be analyzed or when identifying products of chemical reactions.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-3">
                  2. Hot Air Balloons
                </h3>
                <p className="text-green-800 dark:text-green-200">
                  Hot air balloons work because heated air has lower density than cool air. At higher 
                  temperatures, the same mass of air occupies more volume (D = PM/RT), creating buoyancy. 
                  Pilots control altitude by adjusting air temperature.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-3">
                  3. Air Quality Monitoring
                </h3>
                <p className="text-purple-800 dark:text-purple-200">
                  Environmental scientists use gas density measurements to determine concentrations of 
                  pollutants. Different gases have different densities, affecting how they disperse in the 
                  atmosphere. Heavier gases tend to settle, while lighter ones rise.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-900 dark:text-orange-100 mb-3">
                  4. Scuba Diving
                </h3>
                <p className="text-orange-800 dark:text-orange-200">
                  As divers descend, increased pressure compresses breathing gases, increasing their density. 
                  This affects breathing resistance and gas consumption rates. Understanding gas density helps 
                  calculate air supply requirements at depth.
                </p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-teal-900 dark:text-teal-100 mb-3">
                  5. Chemical Manufacturing
                </h3>
                <p className="text-teal-800 dark:text-teal-200">
                  In industrial processes, gas density calculations are crucial for designing storage tanks, 
                  pipelines, and reaction vessels. Knowing how density changes with temperature and pressure 
                  ensures safe and efficient operations.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-yellow-900 dark:text-yellow-100 mb-3">
                  6. Aviation and Meteorology
                </h3>
                <p className="text-yellow-800 dark:text-yellow-200">
                  Air density affects aircraft lift and engine performance. Pilots must account for temperature 
                  and pressure (altitude) when calculating takeoff distances and climb rates. Weather forecasting 
                  also relies on air density variations.
                </p>
              </div>
            </div>
          </section>

          {/* STP Calculations */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Gas Densities at STP
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="leading-relaxed mb-4">
                At STP (0°C and 1 atm), the density of any gas can be easily calculated from its molar mass:
              </p>
              <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/30 dark:to-secondary-900/30 p-6 rounded-lg mb-6">
                <p className="font-mono text-xl text-center mb-2">
                  D<sub>STP</sub> = M / 22.4 L/mol
                </p>
                <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                  Since at STP, 1 mole of gas occupies 22.4 L
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                  <thead className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
                    <tr>
                      <th className="p-3 text-left">Gas</th>
                      <th className="p-3 text-left">Formula</th>
                      <th className="p-3 text-left">Molar Mass (g/mol)</th>
                      <th className="p-3 text-left">Density at STP (g/L)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="p-3">Hydrogen</td>
                      <td className="p-3 font-mono">H₂</td>
                      <td className="p-3">2.016</td>
                      <td className="p-3 font-semibold">0.090</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="p-3">Helium</td>
                      <td className="p-3 font-mono">He</td>
                      <td className="p-3">4.003</td>
                      <td className="p-3 font-semibold">0.179</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="p-3">Methane</td>
                      <td className="p-3 font-mono">CH₄</td>
                      <td className="p-3">16.04</td>
                      <td className="p-3 font-semibold">0.716</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="p-3">Ammonia</td>
                      <td className="p-3 font-mono">NH₃</td>
                      <td className="p-3">17.03</td>
                      <td className="p-3 font-semibold">0.760</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="p-3">Nitrogen</td>
                      <td className="p-3 font-mono">N₂</td>
                      <td className="p-3">28.01</td>
                      <td className="p-3 font-semibold">1.25</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="p-3">Air (mixture)</td>
                      <td className="p-3 font-mono">-</td>
                      <td className="p-3">28.97</td>
                      <td className="p-3 font-semibold">1.29</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="p-3">Oxygen</td>
                      <td className="p-3 font-mono">O₂</td>
                      <td className="p-3">32.00</td>
                      <td className="p-3 font-semibold">1.43</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="p-3">Argon</td>
                      <td className="p-3 font-mono">Ar</td>
                      <td className="p-3">39.95</td>
                      <td className="p-3 font-semibold">1.78</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="p-3">Carbon Dioxide</td>
                      <td className="p-3 font-mono">CO₂</td>
                      <td className="p-3">44.01</td>
                      <td className="p-3 font-semibold">1.96</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="p-3">Chlorine</td>
                      <td className="p-3 font-mono">Cl₂</td>
                      <td className="p-3">70.90</td>
                      <td className="p-3 font-semibold">3.17</td>
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
                    Step 1: Identify What You're Solving For
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-blue-800 dark:text-blue-200">
                    <li>Density (D)? → Need P, M, and T</li>
                    <li>Molar Mass (M)? → Need D, P, and T</li>
                    <li>Pressure (P)? → Need D, M, and T</li>
                    <li>Temperature (T)? → Need D, M, and P</li>
                  </ul>
                </div>

                <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-3">
                    Step 2: Check Units
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-green-800 dark:text-green-200">
                    <li>Temperature must be in Kelvin (K = °C + 273.15)</li>
                    <li>Pressure typically in atm (1 atm = 101.325 kPa = 760 mmHg)</li>
                    <li>Density in g/L matches R = 0.0821 L·atm/(mol·K)</li>
                    <li>Molar mass in g/mol</li>
                  </ul>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-3">
                    Step 3: Rearrange D = PM/RT
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-purple-800 dark:text-purple-200">
                    <li>For M: M = DRT/P</li>
                    <li>For P: P = DRT/M</li>
                    <li>For T: T = PM/(DR)</li>
                    <li>For D: D = PM/RT</li>
                  </ul>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500">
                  <h3 className="text-xl font-semibold text-orange-900 dark:text-orange-100 mb-3">
                    Step 4: Verify Your Answer
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-orange-800 dark:text-orange-200">
                    <li>Does the density make sense? (Most gases: 0.1-3 g/L at STP)</li>
                    <li>Is the molar mass reasonable? (Common gases: 2-100 g/mol)</li>
                    <li>Are pressure and temperature physically realistic?</li>
                    <li>Check significant figures based on given data</li>
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
                  Temperature MUST be in Kelvin for the gas laws. Using °C will give completely wrong answers.
                </p>
                <p className="text-sm text-red-700 dark:text-red-300">
                  <strong>Correct:</strong> Always convert °C to K by adding 273.15
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
                  ❌ Mismatched Units for R
                </h3>
                <p className="text-red-800 dark:text-red-200 mb-2">
                  Using R = 0.0821 requires P in atm, V in L, and T in K. Don't mix with kPa or other units.
                </p>
                <p className="text-sm text-red-700 dark:text-red-300">
                  <strong>Correct:</strong> R = 0.0821 L·atm/(mol·K) or R = 8.314 J/(mol·K) with consistent units
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
                  ❌ Confusing Molar Mass with Mass
                </h3>
                <p className="text-red-800 dark:text-red-200 mb-2">
                  M is molar mass (g/mol), not the total mass of gas. Molar mass is a property of the substance.
                </p>
                <p className="text-sm text-red-700 dark:text-red-300">
                  <strong>Correct:</strong> Molar mass is from the periodic table (e.g., O₂ = 32.00 g/mol)
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
                  ❌ Forgetting Diatomic Molecules
                </h3>
                <p className="text-red-800 dark:text-red-200 mb-2">
                  H₂, N₂, O₂, F₂, Cl₂, Br₂, I₂ are diatomic. Don't use atomic mass; use molecular mass.
                </p>
                <p className="text-sm text-red-700 dark:text-red-300">
                  <strong>Correct:</strong> M(O₂) = 32.00 g/mol, not 16.00 g/mol
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
                <h3 className="text-lg font-semibold mb-4">Master Formula</h3>
                <div className="space-y-2 text-sm">
                  <p className="font-mono text-2xl text-center py-3 bg-white dark:bg-gray-800 rounded">
                    D = PM/RT
                  </p>
                  <p className="text-center font-semibold">Rearrangements:</p>
                  <p className="font-mono text-center">M = DRT/P</p>
                  <p className="font-mono text-center">P = DRT/M</p>
                  <p className="font-mono text-center">T = PM/(DR)</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-tertiary-50 to-primary-50 dark:from-tertiary-900/20 dark:to-primary-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Standard Conditions</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>STP:</strong></p>
                  <ul className="list-disc list-inside ml-2 mb-3">
                    <li>T = 273.15 K (0°C)</li>
                    <li>P = 1 atm</li>
                    <li>Molar volume = 22.4 L/mol</li>
                  </ul>
                  <p><strong>Room Conditions:</strong></p>
                  <ul className="list-disc list-inside ml-2">
                    <li>T ≈ 298 K (25°C)</li>
                    <li>P = 1 atm</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-secondary-50 to-tertiary-50 dark:from-secondary-900/20 dark:to-tertiary-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Gas Constant (R)</h3>
                <div className="space-y-2 text-sm">
                  <p className="font-mono">R = 0.0821 L·atm/(mol·K)</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                    (Use with P in atm, V in L)
                  </p>
                  <p className="font-mono">R = 8.314 J/(mol·K)</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    (Use with P in Pa, V in m³)
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-tertiary-50 dark:from-primary-900/20 dark:to-tertiary-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Unit Conversions</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>Temperature:</strong></p>
                  <p className="font-mono mb-2">K = °C + 273.15</p>
                  <p><strong>Pressure:</strong></p>
                  <p className="text-xs">1 atm = 101.325 kPa</p>
                  <p className="text-xs">1 atm = 760 mmHg (torr)</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
