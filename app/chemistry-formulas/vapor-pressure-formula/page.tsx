import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Vapor Pressure Formula | Clausius-Clapeyron & Raoult\'s Law',
  description: 'Calculate vapor pressure using Clausius-Clapeyron equation. Understand temperature dependence, phase equilibrium, and solution vapor pressure.',
  keywords: ['vapor pressure', 'clausius clapeyron', 'raoults law', 'evaporation', 'boiling point', 'phase equilibrium', 'enthalpy vaporization']
};

export default function VaporPressureFormulaPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <nav className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <Link href="/">Home</Link>
            <span>→</span>
            <Link href="/chemistry-formulas">Chemistry Formulas</Link>
            <span>→</span>
            <span className="text-gray-900 dark:text-white font-medium">Vapor Pressure</span>
          </nav>
        </div>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
            <h1 className="text-5xl font-bold mb-4 text-center">Vapor Pressure Formula</h1>
            <p className="text-xl text-center text-purple-100">
              Pressure exerted by vapor in equilibrium with its liquid phase
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-l-4 border-indigo-500">
            <h2 className="text-3xl font-bold mb-6">Key Formulas</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/30 dark:to-violet-900/30 rounded-xl p-8">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-4">Clausius-Clapeyron Equation</h3>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6">
                  <p className="text-3xl font-mono font-bold text-purple-900 dark:text-purple-300 text-center mb-4">
                    ln(P₂/P₁) = -ΔHᵥₐₚ/R × (1/T₂ - 1/T₁)
                  </p>
                  <p className="text-sm text-center text-gray-600 dark:text-gray-400">Relates vapor pressure to temperature</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-violet-50 to-indigo-50 dark:from-violet-900/30 dark:to-indigo-900/30 rounded-xl p-8">
                <h3 className="text-xl font-bold text-violet-900 dark:text-violet-300 mb-4">Raoult's Law (Ideal Solutions)</h3>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center">
                  <p className="text-3xl font-mono font-bold text-violet-900 dark:text-violet-300">Pₛₒₗᵤₜᵢₒₙ = χₛₒₗᵥₑₙₜ × P°ₛₒₗᵥₑₙₜ</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/30 dark:to-blue-900/30 rounded-xl p-8">
                <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-300 mb-4">Vapor Pressure Lowering</h3>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center">
                  <p className="text-3xl font-mono font-bold text-indigo-900 dark:text-indigo-300">ΔP = χₛₒₗᵤₜₑ × P°ₛₒₗᵥₑₙₜ</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Variables & Constants</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-purple-900 dark:text-purple-300 mb-2">P (Vapor Pressure)</h3>
                <p className="text-gray-700 dark:text-gray-300">Measured in atm, kPa, or mmHg</p>
              </div>
              <div className="bg-violet-50 dark:bg-violet-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-violet-900 dark:text-violet-300 mb-2">T (Temperature)</h3>
                <p className="text-gray-700 dark:text-gray-300">Absolute temperature in Kelvin (K)</p>
              </div>
              <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-indigo-900 dark:text-indigo-300 mb-2">ΔHᵥₐₚ (Heat of Vaporization)</h3>
                <p className="text-gray-700 dark:text-gray-300">Energy to vaporize 1 mol, in kJ/mol</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-blue-900 dark:text-blue-300 mb-2">R (Gas Constant)</h3>
                <p className="text-gray-700 dark:text-gray-300">8.314 J/(mol·K)</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-purple-900 dark:text-purple-300 mb-2">χ (Mole Fraction)</h3>
                <p className="text-gray-700 dark:text-gray-300">Ratio of moles (0 to 1)</p>
              </div>
              <div className="bg-violet-50 dark:bg-violet-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-violet-900 dark:text-violet-300 mb-2">P° (Pure Vapor Pressure)</h3>
                <p className="text-gray-700 dark:text-gray-300">Vapor pressure of pure solvent</p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Worked Examples</h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-4">Example 1: Clausius-Clapeyron Application</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> Water has vapor pressure 23.8 mmHg at 25°C and ΔHᵥₐₚ = 40.7 kJ/mol. Find vapor pressure at 100°C.</p>
                  <p className="mt-4"><strong>Given:</strong></p>
                  <p className="ml-6">P₁ = 23.8 mmHg, T₁ = 298 K</p>
                  <p className="ml-6">T₂ = 373 K, ΔHᵥₐₚ = 40,700 J/mol</p>
                  <p className="ml-6">R = 8.314 J/(mol·K)</p>
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">ln(P₂/23.8) = -40,700/8.314 × (1/373 - 1/298)</p>
                  <p className="ml-6">ln(P₂/23.8) = -4895 × (-0.000675)</p>
                  <p className="ml-6">ln(P₂/23.8) = 3.30</p>
                  <p className="ml-6">P₂/23.8 = e³·³⁰ = 27.1</p>
                  <p className="ml-6 font-bold text-green-600">P₂ = 645 mmHg ≈ 760 mmHg (boiling point!)</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">Example 2: Raoult's Law (Vapor Pressure Lowering)</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> Add 10.0 g glucose (C₆H₁₂O₆, 180 g/mol) to 100 g water. P°(water) = 23.8 mmHg at 25°C. Find new vapor pressure.</p>
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">n(glucose) = 10.0/180 = 0.0556 mol</p>
                  <p className="ml-6">n(water) = 100/18 = 5.56 mol</p>
                  <p className="ml-6">χ(water) = 5.56/(5.56 + 0.0556) = 0.990</p>
                  <p className="ml-6">P(solution) = 0.990 × 23.8</p>
                  <p className="ml-6 font-bold text-green-600">P(solution) = 23.6 mmHg</p>
                  <p className="ml-6 text-blue-600">ΔP = 23.8 - 23.6 = 0.2 mmHg lowering</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-300 mb-4">Example 3: Finding ΔHᵥₐₚ</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> Ethanol has P = 44 mmHg at 20°C and P = 135 mmHg at 40°C. Find ΔHᵥₐₚ.</p>
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">ln(135/44) = -ΔHᵥₐₚ/8.314 × (1/313 - 1/293)</p>
                  <p className="ml-6">1.124 = -ΔHᵥₐₚ/8.314 × (-0.000218)</p>
                  <p className="ml-6">ΔHᵥₐₚ = 1.124 × 8.314 / 0.000218</p>
                  <p className="ml-6 font-bold text-green-600">ΔHᵥₐₚ = 42,900 J/mol = 42.9 kJ/mol</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Common Mistakes</h2>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Forgetting to Convert to Kelvin</h3>
                  <p className="text-gray-700 dark:text-gray-300">T must be in Kelvin: K = °C + 273.15</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Unit Mismatch in ΔHᵥₐₚ</h3>
                  <p className="text-gray-700 dark:text-gray-300">If ΔHᵥₐₚ in kJ/mol, multiply by 1000 to get J/mol for R = 8.314 J/(mol·K)</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4">
                <span className="text-2xl">💡</span>
                <div>
                  <h3 className="font-bold text-yellow-900 dark:text-yellow-300 mb-2">Boiling Point Definition</h3>
                  <p className="text-gray-700 dark:text-gray-300">Liquid boils when vapor pressure = atmospheric pressure (760 mmHg at sea level)</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4">
                <span className="text-2xl">💡</span>
                <div>
                  <h3 className="font-bold text-yellow-900 dark:text-yellow-300 mb-2">Raoult's Law Limitations</h3>
                  <p className="text-gray-700 dark:text-gray-300">Only accurate for ideal solutions; fails for strong solute-solvent interactions</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Related Tools</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/physical-chemistry-calculators/vapor-pressure-calculator" className="block p-6 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Vapor Pressure Calculator</h3>
                <p className="text-purple-100">Calculate vapor pressure at different temperatures</p>
              </Link>
              <Link href="/chemistry-formulas/clausius-clapeyron-equation" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Clausius-Clapeyron</h3>
                <p className="text-gray-600 dark:text-gray-400">Detailed equation explanation</p>
              </Link>
              <Link href="/chemistry-formulas/raoults-law" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Raoult's Law</h3>
                <p className="text-gray-600 dark:text-gray-400">Ideal solution vapor pressure</p>
              </Link>
              <Link href="/thermodynamics-calculators/boiling-point-elevation-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Boiling Point Elevation</h3>
                <p className="text-gray-600 dark:text-gray-400">Colligative property calculations</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
