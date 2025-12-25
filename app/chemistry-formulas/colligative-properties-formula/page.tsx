import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Colligative Properties Formula | Boiling Point, Freezing Point, Osmotic Pressure',
  description: 'Complete guide to colligative properties: boiling point elevation, freezing point depression, vapor pressure lowering, and osmotic pressure.',
  keywords: ['colligative properties', 'boiling point elevation', 'freezing point depression', 'osmotic pressure', 'vapor pressure lowering', 'Raoult law']
};

export default function ColligativePropertiesFormulaPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <nav className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <Link href="/">Home</Link>
            <span>→</span>
            <Link href="/chemistry-formulas">Chemistry Formulas</Link>
            <span>→</span>
            <span className="text-gray-900 dark:text-white font-medium">Colligative Properties</span>
          </nav>
        </div>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 rounded-3xl p-12 text-white shadow-2xl">
            <h1 className="text-5xl font-bold mb-4 text-center">Colligative Properties</h1>
            <p className="text-xl text-center text-blue-100">
              Properties that depend only on the number of solute particles, not their identity
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-l-4 border-blue-500">
            <h2 className="text-3xl font-bold mb-6">The Four Colligative Properties</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-300 mb-4">1. Vapor Pressure Lowering</h3>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 mb-4">
                  <p className="text-3xl font-bold text-center text-purple-700 dark:text-purple-300 mb-3">
                    P<sub>solution</sub> = χ<sub>solvent</sub> × P°<sub>solvent</sub>
                  </p>
                  <p className="text-center text-gray-600 dark:text-gray-400">Raoult's Law</p>
                </div>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>ΔP = P° - P = χ<sub>solute</sub> × P°</strong></p>
                  <p className="text-sm">χ = mole fraction, P° = vapor pressure of pure solvent</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/30 dark:to-orange-900/30 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-red-900 dark:text-red-300 mb-4">2. Boiling Point Elevation</h3>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 mb-4">
                  <p className="text-3xl font-bold text-center text-red-700 dark:text-red-300 mb-3">
                    ΔT<sub>b</sub> = K<sub>b</sub> × m × i
                  </p>
                </div>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Where:</strong></p>
                  <ul className="ml-6 space-y-1">
                    <li>• ΔT<sub>b</sub> = boiling point elevation (°C)</li>
                    <li>• K<sub>b</sub> = ebullioscopic constant (°C·kg/mol)</li>
                    <li>• m = molality (mol/kg)</li>
                    <li>• i = van't Hoff factor (# of particles per formula unit)</li>
                  </ul>
                  <p className="mt-3 text-sm font-bold">K<sub>b</sub>(H₂O) = 0.512 °C·kg/mol</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-300 mb-4">3. Freezing Point Depression</h3>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 mb-4">
                  <p className="text-3xl font-bold text-center text-blue-700 dark:text-blue-300 mb-3">
                    ΔT<sub>f</sub> = K<sub>f</sub> × m × i
                  </p>
                </div>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Where:</strong></p>
                  <ul className="ml-6 space-y-1">
                    <li>• ΔT<sub>f</sub> = freezing point depression (°C)</li>
                    <li>• K<sub>f</sub> = cryoscopic constant (°C·kg/mol)</li>
                    <li>• m = molality (mol/kg)</li>
                    <li>• i = van't Hoff factor</li>
                  </ul>
                  <p className="mt-3 text-sm font-bold">K<sub>f</sub>(H₂O) = 1.86 °C·kg/mol</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-green-900 dark:text-green-300 mb-4">4. Osmotic Pressure</h3>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 mb-4">
                  <p className="text-3xl font-bold text-center text-green-700 dark:text-green-300 mb-3">
                    Π = MRT × i
                  </p>
                </div>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Where:</strong></p>
                  <ul className="ml-6 space-y-1">
                    <li>• Π = osmotic pressure (atm)</li>
                    <li>• M = molarity (mol/L)</li>
                    <li>• R = 0.0821 L·atm/(mol·K)</li>
                    <li>• T = temperature (K)</li>
                    <li>• i = van't Hoff factor</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Van't Hoff Factor (i)</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50">
                    <th className="p-3 text-left font-bold">Solute Type</th>
                    <th className="p-3 text-left font-bold">Example</th>
                    <th className="p-3 text-center font-bold">i (ideal)</th>
                    <th className="p-3 text-left font-bold">Explanation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="p-3">Non-electrolyte</td>
                    <td className="p-3 font-mono">C₆H₁₂O₆, C₁₂H₂₂O₁₁</td>
                    <td className="p-3 text-center font-bold text-green-600">1</td>
                    <td className="p-3 text-sm">Doesn't dissociate</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="p-3">Strong electrolyte (1:1)</td>
                    <td className="p-3 font-mono">NaCl, HCl, KBr</td>
                    <td className="p-3 text-center font-bold text-blue-600">2</td>
                    <td className="p-3 text-sm">2 ions per formula unit</td>
                  </tr>
                  <tr>
                    <td className="p-3">Strong electrolyte (1:2)</td>
                    <td className="p-3 font-mono">CaCl₂, Na₂SO₄</td>
                    <td className="p-3 text-center font-bold text-purple-600">3</td>
                    <td className="p-3 text-sm">3 ions per formula unit</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="p-3">Strong electrolyte (2:3)</td>
                    <td className="p-3 font-mono">Al₂(SO₄)₃</td>
                    <td className="p-3 text-center font-bold text-red-600">5</td>
                    <td className="p-3 text-sm">2 Al³⁺ + 3 SO₄²⁻</td>
                  </tr>
                  <tr>
                    <td className="p-3">Weak electrolyte</td>
                    <td className="p-3 font-mono">CH₃COOH</td>
                    <td className="p-3 text-center font-bold text-amber-600">1 &lt; i &lt; 2</td>
                    <td className="p-3 text-sm">Partial dissociation</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Worked Examples</h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">Example 1: Freezing Point Depression</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> What is the freezing point of a solution containing 25.0 g of glucose (C₆H₁₂O₆) in 150 g of water?</p>
                  
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">Step 1: Calculate moles of glucose</p>
                  <p className="ml-12">Molar mass = 180.16 g/mol</p>
                  <p className="ml-12">moles = 25.0 g ÷ 180.16 g/mol = 0.1388 mol</p>
                  
                  <p className="ml-6 mt-3">Step 2: Calculate molality</p>
                  <p className="ml-12">m = 0.1388 mol ÷ 0.150 kg = 0.925 mol/kg</p>
                  
                  <p className="ml-6 mt-3">Step 3: Calculate ΔT<sub>f</sub></p>
                  <p className="ml-12">ΔT<sub>f</sub> = K<sub>f</sub> × m × i</p>
                  <p className="ml-12">ΔT<sub>f</sub> = 1.86 °C·kg/mol × 0.925 mol/kg × 1</p>
                  <p className="ml-12">ΔT<sub>f</sub> = 1.72 °C</p>
                  
                  <p className="ml-6 font-bold text-green-600 text-xl mt-4">Freezing point = 0°C - 1.72°C = -1.72°C</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-4">Example 2: Boiling Point with Electrolyte</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> Calculate the boiling point of a solution of 10.0 g NaCl in 200 g of water.</p>
                  
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">Step 1: Calculate molality</p>
                  <p className="ml-12">Molar mass NaCl = 58.44 g/mol</p>
                  <p className="ml-12">moles = 10.0 g ÷ 58.44 g/mol = 0.171 mol</p>
                  <p className="ml-12">m = 0.171 mol ÷ 0.200 kg = 0.855 mol/kg</p>
                  
                  <p className="ml-6 mt-3">Step 2: Determine i for NaCl</p>
                  <p className="ml-12">NaCl → Na⁺ + Cl⁻ (i = 2)</p>
                  
                  <p className="ml-6 mt-3">Step 3: Calculate ΔT<sub>b</sub></p>
                  <p className="ml-12">ΔT<sub>b</sub> = 0.512 °C·kg/mol × 0.855 mol/kg × 2</p>
                  <p className="ml-12">ΔT<sub>b</sub> = 0.876 °C</p>
                  
                  <p className="ml-6 font-bold text-green-600 text-xl mt-4">Boiling point = 100°C + 0.876°C = 100.88°C</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-4">Example 3: Osmotic Pressure</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> Calculate the osmotic pressure of a 0.100 M glucose solution at 25°C.</p>
                  
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">Π = MRT × i</p>
                  <p className="ml-6">Π = (0.100 mol/L)(0.0821 L·atm/mol·K)(298 K)(1)</p>
                  <p className="ml-6">Π = 2.45 atm</p>
                  
                  <p className="ml-6 font-bold text-green-600 text-xl mt-4">Π = 2.45 atm</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Common Constants</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-red-900 dark:text-red-300 mb-3">K<sub>b</sub> Values</h3>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <p>Water: 0.512 °C·kg/mol</p>
                  <p>Benzene: 2.53 °C·kg/mol</p>
                  <p>Chloroform: 3.63 °C·kg/mol</p>
                  <p>Acetic acid: 3.07 °C·kg/mol</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-blue-900 dark:text-blue-300 mb-3">K<sub>f</sub> Values</h3>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <p>Water: 1.86 °C·kg/mol</p>
                  <p>Benzene: 5.12 °C·kg/mol</p>
                  <p>Cyclohexane: 20.0 °C·kg/mol</p>
                  <p>Camphor: 37.7 °C·kg/mol</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Common Mistakes</h2>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Using Molarity Instead of Molality</h3>
                  <p className="text-gray-700 dark:text-gray-300">ΔT<sub>b</sub> and ΔT<sub>f</sub> use molality (mol/kg), NOT molarity!</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Forgetting van't Hoff Factor</h3>
                  <p className="text-gray-700 dark:text-gray-300">Electrolytes dissociate! NaCl has i=2, not i=1.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Wrong Temperature Units</h3>
                  <p className="text-gray-700 dark:text-gray-300">Osmotic pressure uses Kelvin, not Celsius!</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4">
                <span className="text-2xl">💡</span>
                <div>
                  <h3 className="font-bold text-yellow-900 dark:text-yellow-300 mb-2">Memory Aid</h3>
                  <p className="text-gray-700 dark:text-gray-300">Colligative = collective effect of particles, regardless of identity</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Related Tools</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/solution-calculators/colligative-properties-calculator" className="block p-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Colligative Properties Calculator</h3>
                <p className="text-blue-100">Automated calculations</p>
              </Link>
              <Link href="/chemistry-formulas/boiling-point-elevation" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Boiling Point Elevation</h3>
                <p className="text-gray-600 dark:text-gray-400">Detailed guide</p>
              </Link>
              <Link href="/chemistry-formulas/freezing-point-depression" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Freezing Point Depression</h3>
                <p className="text-gray-600 dark:text-gray-400">Detailed guide</p>
              </Link>
              <Link href="/chemistry-formulas/osmotic-pressure" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Osmotic Pressure</h3>
                <p className="text-gray-600 dark:text-gray-400">Detailed guide</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
