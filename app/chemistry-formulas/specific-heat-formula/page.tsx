import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Specific Heat Formula | q = mcΔT | Heat Capacity Calculations',
  description: 'Master the specific heat formula (q = mcΔT) for calculating heat transfer. Includes examples and calorimetry calculator links.',
  keywords: 'specific heat, heat capacity, calorimetry, q=mcat, temperature change, enthalpy',
};

export default function SpecificHeatFormulaPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <nav className="mb-8 text-sm">
            <Link href="/" className="text-primary-600 dark:text-primary-400 hover:underline">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/chemistry-formulas" className="text-primary-600 dark:text-primary-400 hover:underline">Chemistry Formulas</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600 dark:text-gray-400">Specific Heat Formula</span>
          </nav>

          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Specific Heat Formula
          </h1>

          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            The <strong>specific heat equation</strong> (q = mcΔT) calculates heat energy transferred during temperature changes. 
            It's essential for calorimetry, thermodynamics, and understanding how substances store thermal energy.
          </p>

          {/* Formula Block */}
          <div className="my-12 p-8 bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">The Specific Heat Formula</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center">
              <p className="text-6xl font-bold text-gray-900 dark:text-white mb-2">
                q = mcΔT
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Heat = mass × specific heat × temperature change
              </p>
            </div>
          </div>

          {/* Variable Definitions */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Variable Definitions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">q = Heat Energy</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> J (joules), kJ (kilojoules), cal (calories)
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Amount of thermal energy transferred
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  • Positive q = heat absorbed (endothermic)<br />
                  • Negative q = heat released (exothermic)
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">m = Mass</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> g (grams) or kg (kilograms)
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Amount of substance being heated or cooled
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">c = Specific Heat Capacity</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> J/(g·°C) or J/(g·K)
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Heat needed to raise 1 gram by 1°C
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  💡 Unique property of each substance
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">ΔT = Temperature Change</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> °C or K (same magnitude)
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Formula:</strong> ΔT = T<sub>final</sub> - T<sub>initial</sub>
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  • Positive ΔT = temperature increase<br />
                  • Negative ΔT = temperature decrease
                </p>
              </div>
            </div>
          </section>

          {/* Common Specific Heats */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Common Specific Heat Values</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
                <thead className="bg-gradient-to-r from-red-600 to-pink-600 text-white">
                  <tr>
                    <th className="p-4 text-left">Substance</th>
                    <th className="p-4 text-left">c [J/(g·°C)]</th>
                    <th className="p-4 text-left">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr className="bg-blue-50 dark:bg-blue-900/20">
                    <td className="p-4 font-bold">Water</td>
                    <td className="p-4 font-bold">4.184</td>
                    <td className="p-4">Highest of common liquids</td>
                  </tr>
                  <tr>
                    <td className="p-4">Ice</td>
                    <td className="p-4">2.09</td>
                    <td className="p-4">Solid H₂O</td>
                  </tr>
                  <tr>
                    <td className="p-4">Steam</td>
                    <td className="p-4">2.01</td>
                    <td className="p-4">Water vapor</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700/30">
                    <td className="p-4">Aluminum</td>
                    <td className="p-4">0.897</td>
                    <td className="p-4">Metal</td>
                  </tr>
                  <tr>
                    <td className="p-4">Iron</td>
                    <td className="p-4">0.449</td>
                    <td className="p-4">Metal</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700/30">
                    <td className="p-4">Copper</td>
                    <td className="p-4">0.385</td>
                    <td className="p-4">Metal</td>
                  </tr>
                  <tr>
                    <td className="p-4">Gold</td>
                    <td className="p-4">0.129</td>
                    <td className="p-4">Metal (low c)</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700/30">
                    <td className="p-4">Ethanol</td>
                    <td className="p-4">2.44</td>
                    <td className="p-4">Liquid alcohol</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
              💡 Water has an unusually high specific heat - it takes lots of energy to heat water!
            </p>
          </section>

          {/* Rearranged Forms */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Rearranged Forms</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-6">
                <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Find heat (q):</h3>
                <p className="text-2xl font-bold text-blue-800 dark:text-blue-200">
                  q = mcΔT
                </p>
              </div>

              <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-6">
                <h3 className="font-bold text-purple-900 dark:text-purple-100 mb-3">Find mass (m):</h3>
                <p className="text-2xl font-bold text-purple-800 dark:text-purple-200">
                  m = q / (cΔT)
                </p>
              </div>

              <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-6">
                <h3 className="font-bold text-green-900 dark:text-green-100 mb-3">Find specific heat (c):</h3>
                <p className="text-2xl font-bold text-green-800 dark:text-green-200">
                  c = q / (mΔT)
                </p>
              </div>

              <div className="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-6">
                <h3 className="font-bold text-orange-900 dark:text-orange-100 mb-3">Find ΔT:</h3>
                <p className="text-2xl font-bold text-orange-800 dark:text-orange-200">
                  ΔT = q / (mc)
                </p>
              </div>
            </div>
          </section>

          {/* Example */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Step-by-Step Example</h2>
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Problem: How much heat is needed to raise 250 g of water from 20°C to 80°C? (c<sub>water</sub> = 4.184 J/g·°C)
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-2">Given:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>m = 250 g</li>
                    <li>c = 4.184 J/(g·°C)</li>
                    <li>T<sub>initial</sub> = 20°C</li>
                    <li>T<sub>final</sub> = 80°C</li>
                    <li>Find: q</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 1: Calculate ΔT</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    ΔT = T<sub>final</sub> - T<sub>initial</sub> = 80°C - 20°C = 60°C
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 2: Write the formula</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    q = mcΔT
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 3: Substitute values</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    q = (250 g)(4.184 J/g·°C)(60°C)
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 4: Calculate</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    q = 62,760 J = 62.8 kJ
                  </p>
                </div>

                <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg">
                  <p className="font-bold text-green-900 dark:text-green-100">
                    Answer: 62.8 kJ of heat energy needed
                  </p>
                  <p className="text-sm mt-2">
                    Positive q means heat must be added to raise temperature.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Common Mistakes</h2>
            <div className="space-y-4">
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Wrong ΔT direction</h3>
                <p className="text-red-800 dark:text-red-200">
                  ΔT = final - initial, NOT initial - final. Sign matters! Heating gives positive ΔT, cooling gives negative.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Unit mismatches</h3>
                <p className="text-red-800 dark:text-red-200">
                  If c is in J/(g·°C), mass must be in grams and ΔT in °C. If c is in J/(kg·K), use kg and K.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Using wrong specific heat value</h3>
                <p className="text-red-800 dark:text-red-200">
                  Ice, water, and steam have different specific heats! Use the correct value for the substance's state.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Confusing with phase changes</h3>
                <p className="text-red-800 dark:text-red-200">
                  q = mcΔT is for temperature changes ONLY. Phase changes (melting, boiling) use q = mΔH instead.
                </p>
              </div>
            </div>
          </section>

          {/* Related Calculators */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Related Calculators</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/thermodynamics-calculators/specific-heat-calculator" className="block p-6 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Specific Heat Calculator</h3>
                <p>Calculate q, m, c, or ΔT</p>
              </Link>

              <Link href="/thermodynamics-calculators/calorimetry-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Calorimetry Calculator</h3>
                <p className="text-gray-600 dark:text-gray-400">Heat transfer calculations</p>
              </Link>

              <Link href="/thermodynamics-calculators/heat-capacity-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Heat Capacity</h3>
                <p className="text-gray-600 dark:text-gray-400">C = mc calculations</p>
              </Link>

              <Link href="/thermodynamics-calculators/enthalpy-reaction-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Enthalpy Calculator</h3>
                <p className="text-gray-600 dark:text-gray-400">ΔH for reactions</p>
              </Link>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What is specific heat?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Specific heat (c) is the energy needed to raise 1 gram of a substance by 1°C. It's a property unique to each material.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Why does water have such high specific heat?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Hydrogen bonding in water requires lots of energy to break. This makes water an excellent temperature buffer and coolant.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Can I use °C or K for ΔT?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Yes! A change of 1°C equals a change of 1 K, so ΔT has the same numerical value in both units.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What's the difference between q and Q?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Lowercase q is typically heat transfer, uppercase Q sometimes represents total heat or charge. Context matters, but both can represent heat.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">How is this different from heat capacity?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Specific heat (c) is per gram. Heat capacity (C) is for the entire object: C = mc. If you know the total mass, C = total heat per degree.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-between">
              <Link href="/chemistry-formulas" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                ← Back to All Formulas
              </Link>
              <Link href="/chemistry-formulas/beers-law" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                Next: Beer's Law →
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
