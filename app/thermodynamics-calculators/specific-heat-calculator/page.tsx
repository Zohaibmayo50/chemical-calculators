import React from 'react';
import SpecificHeatCalculator from '@/components/calculators/SpecificHeatCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata = {
  title: 'Specific Heat Calculator',
  description: 'Calculate heat transfer using q = mcΔT. Find heat energy, mass, specific heat capacity, or temperature change for any substance.',
  keywords: 'specific heat, heat capacity, calorimetry, heat transfer, temperature change, q = mcΔT, thermodynamics, energy, chemistry calculator',
};

export default function SpecificHeatPage() {  return (
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
              Specific Heat Calculator
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Calculate heat transfer and temperature changes using the specific heat equation q = mcΔT. 
              Perfect for thermodynamics and calorimetry problems.
            </p>
          </div>

          {/* Calculator Component */}
          <SpecificHeatCalculator />

          {/* Educational Content */}
          <div className="mt-12 prose prose-lg dark:prose-invert max-w-none">
            {/* What is Specific Heat */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                What is Specific Heat Capacity?
              </h2>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg mb-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <strong>Specific heat capacity</strong> (often just called "specific heat") is the amount 
                  of energy required to raise the temperature of 1 gram of a substance by 1 degree Celsius 
                  (or 1 Kelvin). It's an intensive property that varies by material and reflects how much 
                  energy a substance can store.
                </p>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 mb-4">
                  <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-2">
                    The Specific Heat Equation
                  </h3>
                  <div className="font-mono text-2xl text-gray-800 dark:text-gray-200 mb-2">
                    q = mcΔT
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <p><strong>q</strong> = heat energy transferred (Joules, J)</p>
                    <p><strong>m</strong> = mass of substance (grams, g)</p>
                    <p><strong>c</strong> = specific heat capacity (J/g·°C)</p>
                    <p><strong>ΔT</strong> = temperature change = T₂ - T₁ (°C or K)</p>
                  </div>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4">
                  <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">
                    Alternative Forms
                  </h4>
                  <div className="space-y-1 font-mono text-sm">
                    <div>m = q / (cΔT) — Calculate mass</div>
                    <div>c = q / (mΔT) — Calculate specific heat</div>
                    <div>ΔT = q / (mc) — Calculate temperature change</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Specific Heat Values Table */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Common Specific Heat Values
              </h2>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Different substances have vastly different specific heats. Water has one of the highest 
                specific heats, which is why it's so effective at regulating temperature and storing thermal energy.
              </p>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-6">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gradient-to-r from-primary-500 to-secondary-500">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                          Substance
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                          Specific Heat (J/g·°C)
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                          Category
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                      <tr className="bg-blue-50 dark:bg-blue-900/20">
                        <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900 dark:text-white">Water (liquid)</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300">4.184</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">Liquids</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">Ice (solid H₂O)</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300">2.09</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">Solids</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-700/50">
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">Steam (water vapor)</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300">2.01</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">Gases</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">Ethanol</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300">2.44</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">Liquids</td>
                      </tr>
                      <tr className="bg-yellow-50 dark:bg-yellow-900/20">
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">Aluminum</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300">0.897</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">Metals</td>
                      </tr>
                      <tr className="bg-yellow-50 dark:bg-yellow-900/20">
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">Iron</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300">0.449</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">Metals</td>
                      </tr>
                      <tr className="bg-yellow-50 dark:bg-yellow-900/20">
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">Copper</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300">0.385</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">Metals</td>
                      </tr>
                      <tr className="bg-yellow-50 dark:bg-yellow-900/20">
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">Silver</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300">0.235</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">Metals</td>
                      </tr>
                      <tr className="bg-yellow-50 dark:bg-yellow-900/20">
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">Gold</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300">0.129</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">Metals</td>
                      </tr>
                      <tr className="bg-yellow-50 dark:bg-yellow-900/20">
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">Lead</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300">0.128</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">Metals</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">Wood</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300">1.76</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">Solids</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-700/50">
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">Concrete</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300">0.88</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">Solids</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-700/50">
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">Glass</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300">0.84</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">Solids</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">Air</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300">1.01</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">Gases</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4">
                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                  💡 Why Water is Special
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Water's high specific heat (4.184 J/g·°C) is about <strong>10 times higher</strong> than 
                  most metals. This is why water is used for cooling systems, climate regulation near oceans, 
                  and as a standard for calorimetry. It takes a lot of energy to change water's temperature!
                </p>
              </div>
            </section>

            {/* Worked Example */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Worked Example: Heating Water
              </h2>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Problem
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    How much energy is required to heat 250 grams of water from 20°C to 100°C?
                  </p>
                  <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg text-sm">
                    <p><strong>Given:</strong></p>
                    <ul className="ml-4 space-y-1">
                      <li>m = 250 g</li>
                      <li>c = 4.184 J/g·°C (specific heat of water)</li>
                      <li>T₁ = 20°C</li>
                      <li>T₂ = 100°C</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Step 1: Calculate temperature change
                    </h4>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg font-mono text-sm">
                      <div>ΔT = T₂ - T₁</div>
                      <div>ΔT = 100°C - 20°C</div>
                      <div className="font-bold">ΔT = 80°C</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Step 2: Apply the specific heat equation
                    </h4>
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg font-mono text-sm space-y-2">
                      <div>q = mcΔT</div>
                      <div>q = (250 g)(4.184 J/g·°C)(80°C)</div>
                      <div>q = 250 × 4.184 × 80</div>
                      <div className="text-xl font-bold text-green-900 dark:text-green-100">
                        q = 83,680 J = 83.68 kJ
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Step 3: Interpret the result
                    </h4>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        ✅ It takes <strong>83.68 kJ</strong> (or 83,680 Joules) of energy to heat 250 grams 
                        of water from 20°C to its boiling point at 100°C. The positive value indicates energy 
                        is absorbed by the water (endothermic process).
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                        💡 <strong>Real-world context:</strong> This is roughly equivalent to the energy 
                        output of a 1000-watt electric kettle running for about 84 seconds.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Sign Convention */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Sign Convention for Heat Transfer
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="text-4xl mb-3 text-center">⬆️</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-center">
                    Positive q (Heating)
                  </h3>
                  <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <p><strong>Meaning:</strong> System absorbs heat</p>
                    <p><strong>Process:</strong> Endothermic</p>
                    <p><strong>Temperature:</strong> Increases (ΔT &gt; 0)</p>
                    <p><strong>Examples:</strong></p>
                    <ul className="ml-4 space-y-1">
                      <li>• Boiling water</li>
                      <li>• Heating a metal</li>
                      <li>• Melting ice</li>
                      <li>• Cooking food</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="text-4xl mb-3 text-center">⬇️</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-center">
                    Negative q (Cooling)
                  </h3>
                  <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <p><strong>Meaning:</strong> System releases heat</p>
                    <p><strong>Process:</strong> Exothermic</p>
                    <p><strong>Temperature:</strong> Decreases (ΔT &lt; 0)</p>
                    <p><strong>Examples:</strong></p>
                    <ul className="ml-4 space-y-1">
                      <li>• Cooling hot coffee</li>
                      <li>• Metal losing heat</li>
                      <li>• Freezing water</li>
                      <li>• Air conditioning</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4">
                <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
                  ⚠️ Important: System vs. Surroundings
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  The sign of q depends on your perspective. If the <strong>system</strong> (the substance 
                  you're tracking) gains heat, q is positive. If it loses heat, q is negative. The 
                  surroundings experience the opposite: when the system gains heat (+q), the surroundings 
                  lose heat (-q).
                </p>
              </div>
            </section>

            {/* Applications */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Applications of Specific Heat
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="text-4xl mb-3">🧪</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Calorimetry
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Calorimeters use the specific heat of water to measure the energy released by chemical 
                    reactions or combustion. By measuring temperature changes in a known mass of water, 
                    chemists can calculate reaction enthalpies.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="text-4xl mb-3">🌡️</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Climate Science
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Water's high specific heat moderates coastal climates. Oceans absorb and release vast 
                    amounts of heat with minimal temperature change, preventing extreme temperature swings 
                    in nearby land areas.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="text-4xl mb-3">🏭</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Industrial Cooling
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Power plants and manufacturing facilities use water for cooling because of its high 
                    specific heat. Water can absorb large amounts of waste heat without experiencing 
                    dangerous temperature increases.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="text-4xl mb-3">🔬</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Material Identification
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    By measuring how much energy is needed to change a material's temperature, scientists 
                    can identify unknown substances. Each material has a unique specific heat "fingerprint."
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="text-4xl mb-3">🍳</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Cooking & Food Science
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Understanding specific heat helps explain cooking times. Foods with high water content 
                    take longer to heat because water's high specific heat requires more energy to raise 
                    its temperature.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="text-4xl mb-3">❄️</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Thermal Energy Storage
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Materials with high specific heats are used in thermal energy storage systems. They 
                    can store large amounts of energy (like solar heat during the day) and release it 
                    slowly when needed (at night).
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
                        Identify What You're Solving For
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Determine which variable you need: q, m, c, or ΔT. This determines which form of 
                        the equation to use.
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        List Known Values
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Write down all given information. Look up the specific heat if it's not provided 
                        (use a table or the calculator's database).
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Check Units
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Ensure mass is in grams, temperature in °C or K, and specific heat in J/g·°C. 
                        Convert if necessary (e.g., kg → g, kJ → J).
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Calculate ΔT = T₂ - T₁
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Always subtract initial from final temperature. Positive ΔT means heating, 
                        negative ΔT means cooling.
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold">
                      5
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Apply the Equation
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Substitute values into q = mcΔT or one of its rearranged forms. Perform the calculation 
                        carefully, keeping track of significant figures.
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold">
                      6
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Interpret the Sign and Magnitude
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Positive q = energy absorbed (heating). Negative q = energy released (cooling). 
                        Check if the magnitude makes sense for the problem.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </section>

            {/* Common Mistakes */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Common Mistakes to Avoid
              </h2>

              <div className="space-y-4">
                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded">
                  <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">
                    ❌ Wrong Temperature Order
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Always use ΔT = T<sub>final</sub> - T<sub>initial</sub>, not the reverse. This ensures 
                    the correct sign for q (positive for heating, negative for cooling).
                  </p>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded">
                  <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">
                    ❌ Unit Inconsistencies
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    If specific heat is in J/g·°C, mass MUST be in grams (not kg). If you use kJ instead 
                    of J, you'll be off by a factor of 1000. Always verify unit compatibility.
                  </p>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded">
                  <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">
                    ❌ Forgetting Phase Changes
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    q = mcΔT only works when there's NO phase change (no melting, freezing, boiling, etc.). 
                    Phase changes require separate heat of fusion/vaporization calculations.
                  </p>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded">
                  <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">
                    ❌ Using Wrong Specific Heat Value
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Make sure you use the specific heat for the correct phase. Water (liquid) = 4.184, 
                    ice (solid) = 2.09, steam (gas) = 2.01 J/g·°C. They're different!
                  </p>
                </div>
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
                      Equation Forms
                    </h4>
                    <div className="space-y-2 text-sm font-mono bg-gray-100 dark:bg-gray-900 p-4 rounded">
                      <div>q = mcΔT</div>
                      <div>m = q / (cΔT)</div>
                      <div>c = q / (mΔT)</div>
                      <div>ΔT = q / (mc)</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Key Relationships
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <span className="text-blue-500">→</span>
                        <span className="text-gray-700 dark:text-gray-300">
                          Higher c = harder to heat/cool
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-500">→</span>
                        <span className="text-gray-700 dark:text-gray-300">
                          More mass = more energy needed
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-purple-500">→</span>
                        <span className="text-gray-700 dark:text-gray-300">
                          Larger ΔT = more energy transferred
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-red-500">→</span>
                        <span className="text-gray-700 dark:text-gray-300">
                          1 calorie = 4.184 J (water context)
                        </span>
                      </div>
                    </div>
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
                        href="/thermodynamics-calculators/calorimetry-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Calorimetry Calculator</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/thermodynamics-calculators/bond-energy-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Bond Energy Calculator</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/thermodynamics-calculators/entropy-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Entropy Calculator</span>
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
                          href="/chemistry-formulas/specific-heat-formula"
                          className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                        >
                          <span>→</span>
                          <span>Specific Heat Formula</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/chemistry-formulas/calorimetry-formula"
                          className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                        >
                          <span>→</span>
                          <span>Calorimetry Formula</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <a
                      href="/thermodynamics-calculators"
                      className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      All Thermodynamics Calculators →
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
            "name": "Specific Heat Calculator",
            "description": "Specific Heat Calculator on ChemSolved",
            "url": "https://chemsolved.com/thermodynamics-calculators/specific-heat-calculator",
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
                "name": "Specific Heat Calculator",
                "item": "https://chemsolved.com/thermodynamics-calculators/specific-heat-calculator"
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