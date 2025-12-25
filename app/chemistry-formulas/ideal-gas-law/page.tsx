import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Ideal Gas Law | PV = nRT | Gas Equation Explained',
  description: 'Master the ideal gas law (PV = nRT) with clear variable definitions, rearrangements, and examples. Essential for gas calculations.',
  keywords: 'ideal gas law, PV = nRT, gas equation, pressure volume temperature, chemistry gas laws',
};

export default function IdealGasLawPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <nav className="mb-8 text-sm">
            <Link href="/" className="text-primary-600 dark:text-primary-400 hover:underline">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/chemistry-formulas" className="text-primary-600 dark:text-primary-400 hover:underline">Chemistry Formulas</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600 dark:text-gray-400">Ideal Gas Law</span>
          </nav>

          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Ideal Gas Law
          </h1>

          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            The <strong>ideal gas law</strong> (PV = nRT) is the fundamental equation relating pressure, volume, temperature, 
            and amount of gas. It combines Boyle's, Charles's, and Avogadro's laws into one powerful formula.
          </p>

          {/* Formula Block */}
          <div className="my-12 p-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">The Ideal Gas Law</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center">
              <p className="text-6xl font-bold text-gray-900 dark:text-white mb-2">
                PV = nRT
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Pressure × Volume = Moles × Gas Constant × Temperature
              </p>
            </div>
          </div>

          {/* Variable Definitions */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Variable Definitions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">P = Pressure</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> atm, Pa, kPa, mmHg, torr
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Standard:</strong> 1 atm = 101.325 kPa = 760 mmHg
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">V = Volume</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> L (liters), m³, mL
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Standard:</strong> 22.4 L at STP for 1 mole of gas
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">n = Moles of Gas</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> mol
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Find from:</strong> n = mass / molar mass
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">R = Gas Constant</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Values depend on units:</strong>
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>0.08206 L·atm/(mol·K) — most common</li>
                  <li>8.314 J/(mol·K) — SI units</li>
                  <li>62.36 L·mmHg/(mol·K)</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">T = Temperature</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> Kelvin (K) — MUST use Kelvin!
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Conversion:</strong> K = °C + 273.15
                </p>
                <p className="text-red-600 dark:text-red-400 font-semibold mt-2">
                  ⚠️ Never use Celsius or Fahrenheit in this formula
                </p>
              </div>
            </div>
          </section>

          {/* Rearranged Forms */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Rearranged Forms</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-3">Find Pressure</h3>
                <p className="text-2xl font-bold mb-2">P = nRT / V</p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/30 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-3">Find Volume</h3>
                <p className="text-2xl font-bold mb-2">V = nRT / P</p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-3">Find Moles</h3>
                <p className="text-2xl font-bold mb-2">n = PV / RT</p>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/30 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-3">Find Temperature</h3>
                <p className="text-2xl font-bold mb-2">T = PV / nR</p>
              </div>
            </div>
          </section>

          {/* Example */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Step-by-Step Example</h2>
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Problem: What volume does 2.0 moles of N₂ gas occupy at 25°C and 1.0 atm?
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-2">Given:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>n = 2.0 mol</li>
                    <li>T = 25°C = 298 K</li>
                    <li>P = 1.0 atm</li>
                    <li>R = 0.08206 L·atm/(mol·K)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 1: Rearrange for V</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    PV = nRT  →  V = nRT / P
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 2: Substitute values</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    V = (2.0 mol × 0.08206 L·atm/(mol·K) × 298 K) / 1.0 atm
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 3: Calculate</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    V = 48.9 L
                  </p>
                </div>

                <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg">
                  <p className="font-bold">Answer: 48.9 L</p>
                </div>
              </div>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Common Mistakes</h2>
            <div className="space-y-4">
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Using °C instead of Kelvin</h3>
                <p className="text-red-800 dark:text-red-200">
                  ALWAYS convert to Kelvin! K = °C + 273.15. This is the #1 mistake.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Mismatching R value and units</h3>
                <p className="text-red-800 dark:text-red-200">
                  If P is in atm and V in L, use R = 0.08206 L·atm/(mol·K). Match your R to your units!
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Forgetting to convert mass to moles</h3>
                <p className="text-red-800 dark:text-red-200">
                  n is moles, not grams. Use n = mass / molar mass first.
                </p>
              </div>
            </div>
          </section>

          {/* Related Calculators */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Related Calculators</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/physical-chemistry-calculators/ideal-gas-law-calculator" className="block p-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Ideal Gas Law Calculator</h3>
                <p>Calculate PV = nRT instantly</p>
              </Link>

              <Link href="/physical-chemistry-calculators/combined-gas-law-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Combined Gas Law</h3>
                <p className="text-gray-600 dark:text-gray-400">P₁V₁/T₁ = P₂V₂/T₂</p>
              </Link>

              <Link href="/gas-laws-calculators" className="block p-6 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">All Gas Laws Calculators</h3>
                <p className="text-white/90">Explore all gas law tools</p>
              </Link>

              <Link href="/gas-calculators/gas-density-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Gas Density</h3>
                <p className="text-gray-600 dark:text-gray-400">Calculate gas density</p>
              </Link>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What is the ideal gas law?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  PV = nRT relates pressure, volume, moles, and temperature for ideal gases. It assumes gas particles don't interact and have no volume.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">When can I use the ideal gas law?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Works best at low pressure and high temperature. Real gases deviate at high pressure or low temperature.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What is R and what value should I use?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  R = 0.08206 L·atm/(mol·K) for atm and liters. Use R = 8.314 J/(mol·K) for SI units. Match R to your pressure and volume units.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What is STP in the ideal gas law?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  STP = Standard Temperature and Pressure = 0°C (273 K) and 1 atm. At STP, 1 mole of gas = 22.4 L.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-between">
              <Link href="/chemistry-formulas" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                ← Back to All Formulas
              </Link>
              <Link href="/chemistry-formulas/combined-gas-law" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                Next: Combined Gas Law →
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
