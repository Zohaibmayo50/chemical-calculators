import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Density Formula | d = m/V | Mass Volume Relationship',
  description: 'Master the density formula (d = m/V) for calculating mass, volume, and density. Includes examples and density calculator links.',
  keywords: 'density, density formula, mass volume, specific gravity, buoyancy',
};

export default function DensityFormulaPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="mb-8 text-sm">
            <Link href="/" className="text-primary-600 dark:text-primary-400 hover:underline">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/chemistry-formulas" className="text-primary-600 dark:text-primary-400 hover:underline">Chemistry Formulas</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600 dark:text-gray-400">Density Formula</span>
          </nav>

          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Density Formula
          </h1>

          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            <strong>Density</strong> is mass per unit volume. It's a fundamental property that helps identify substances 
            and explains why objects sink or float.
          </p>

          {/* Formula Block */}
          <div className="my-12 p-8 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">The Density Formula</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center">
              <p className="text-6xl font-bold text-gray-900 dark:text-white mb-2">
                d = m / V
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Density equals mass divided by volume
              </p>
            </div>
          </div>

          {/* Variable Definitions */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Variable Definitions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-amber-600 dark:text-amber-400 mb-2">d = Density</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Common Units:</strong>
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Solids: g/cm³ or kg/m³</li>
                  <li>Liquids: g/mL (= g/cm³) or kg/L</li>
                  <li>Gases: g/L or kg/m³</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-amber-600 dark:text-amber-400 mb-2">m = Mass</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> g, kg, mg
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Amount of matter in the object
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-amber-600 dark:text-amber-400 mb-2">V = Volume</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> mL, cm³, L, m³
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Space occupied by the object
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                  💡 Note: 1 mL = 1 cm³
                </p>
              </div>
            </div>
          </section>

          {/* Rearranged Forms */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Rearranged Forms</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-6">
                <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Find Density:</h3>
                <p className="text-3xl font-bold text-blue-800 dark:text-blue-200">
                  d = m / V
                </p>
              </div>

              <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-6">
                <h3 className="font-bold text-purple-900 dark:text-purple-100 mb-3">Find Mass:</h3>
                <p className="text-3xl font-bold text-purple-800 dark:text-purple-200">
                  m = d × V
                </p>
              </div>

              <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-6">
                <h3 className="font-bold text-green-900 dark:text-green-100 mb-3">Find Volume:</h3>
                <p className="text-3xl font-bold text-green-800 dark:text-green-200">
                  V = m / d
                </p>
              </div>
            </div>
          </section>

          {/* Common Densities */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Common Substance Densities</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
                <thead className="bg-gradient-to-r from-amber-600 to-orange-600 text-white">
                  <tr>
                    <th className="p-4 text-left">Substance</th>
                    <th className="p-4 text-left">Density (g/cm³)</th>
                    <th className="p-4 text-left">State</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="p-4">Water (4°C)</td>
                    <td className="p-4 font-bold">1.000</td>
                    <td className="p-4">Liquid</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700/30">
                    <td className="p-4">Ice (0°C)</td>
                    <td className="p-4">0.917</td>
                    <td className="p-4">Solid</td>
                  </tr>
                  <tr>
                    <td className="p-4">Aluminum</td>
                    <td className="p-4">2.70</td>
                    <td className="p-4">Solid</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700/30">
                    <td className="p-4">Iron</td>
                    <td className="p-4">7.87</td>
                    <td className="p-4">Solid</td>
                  </tr>
                  <tr>
                    <td className="p-4">Gold</td>
                    <td className="p-4">19.3</td>
                    <td className="p-4">Solid</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700/30">
                    <td className="p-4">Mercury</td>
                    <td className="p-4">13.6</td>
                    <td className="p-4">Liquid</td>
                  </tr>
                  <tr>
                    <td className="p-4">Air (25°C, 1 atm)</td>
                    <td className="p-4">0.00118</td>
                    <td className="p-4">Gas</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Example */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Step-by-Step Example</h2>
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Problem: A metal cube has mass 85.0 g and volume 10.0 cm³. What is its density? Identify the metal.
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-2">Given:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Mass (m) = 85.0 g</li>
                    <li>Volume (V) = 10.0 cm³</li>
                    <li>Find: Density (d)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 1: Write the formula</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    d = m / V
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 2: Substitute values</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    d = 85.0 g / 10.0 cm³
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 3: Calculate</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    d = 8.50 g/cm³
                  </p>
                </div>

                <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg">
                  <p className="font-bold text-green-900 dark:text-green-100 mb-2">
                    Answer: d = 8.50 g/cm³
                  </p>
                  <p className="text-sm">
                    This is close to the density of brass (8.4-8.7 g/cm³) or possibly nickel (8.9 g/cm³).
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Practical Applications */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Why Density Matters</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-6">
                <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-3">⛵ Buoyancy</h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  Objects float if their density is less than the liquid. Ice floats because d(ice) &lt; d(water).
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-6">
                <h3 className="font-bold text-green-900 dark:text-green-100 mb-3">🔬 Identification</h3>
                <p className="text-green-800 dark:text-green-200 text-sm">
                  Density is unique to each substance - helps identify unknown materials.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-6">
                <h3 className="font-bold text-purple-900 dark:text-purple-100 mb-3">🧪 Purity Testing</h3>
                <p className="text-purple-800 dark:text-purple-200 text-sm">
                  Impurities change density - compare measured vs expected values.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg p-6">
                <h3 className="font-bold text-orange-900 dark:text-orange-100 mb-3">⚖️ Unit Conversions</h3>
                <p className="text-orange-800 dark:text-orange-200 text-sm">
                  Convert between mass and volume when density is known.
                </p>
              </div>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Common Mistakes</h2>
            <div className="space-y-4">
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Unit mismatches</h3>
                <p className="text-red-800 dark:text-red-200">
                  If m is in grams, V must be in mL or cm³ to get g/mL or g/cm³. Don't mix kg with mL!
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Flipping the formula</h3>
                <p className="text-red-800 dark:text-red-200">
                  It's d = m/V, NOT d = V/m. Density is mass PER volume, not volume per mass.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Confusing mass and weight</h3>
                <p className="text-red-800 dark:text-red-200">
                  Use mass (g, kg), not weight (N, lbs). Mass is constant; weight varies with gravity.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Forgetting temperature dependence</h3>
                <p className="text-red-800 dark:text-red-200">
                  Density changes with temperature! Hot substances expand (lower density), cold ones contract (higher density).
                </p>
              </div>
            </div>
          </section>

          {/* Related Calculators */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Related Calculators</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/general-chemistry-calculators/density-calculator" className="block p-6 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Density Calculator</h3>
                <p>Calculate d, m, or V instantly</p>
              </Link>

              <Link href="/gas-laws-calculators/gas-density-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Gas Density Calculator</h3>
                <p className="text-gray-600 dark:text-gray-400">Calculate gas density from PV=nRT</p>
              </Link>

              <Link href="/solution-calculators/solution-density-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Solution Density</h3>
                <p className="text-gray-600 dark:text-gray-400">Density of solutions</p>
              </Link>

              <Link href="/general-chemistry-calculators/mass-volume-converter" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Mass-Volume Converter</h3>
                <p className="text-gray-600 dark:text-gray-400">Convert using density</p>
              </Link>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What is density?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  d = m/V. Density is mass per unit volume. It tells you how much matter is packed into a given space.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Why does ice float on water?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Ice has lower density (0.917 g/cm³) than liquid water (1.00 g/cm³). Objects float when less dense than the liquid.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Is 1 g/mL the same as 1 g/cm³?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Yes! 1 mL = 1 cm³ exactly, so g/mL and g/cm³ are interchangeable units.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">How do you measure density experimentally?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Measure mass with a balance. Measure volume by water displacement (for irregular objects) or direct measurement (for regular shapes). Then calculate d = m/V.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Why are gas densities so much smaller?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Gas molecules are far apart with lots of empty space, while solid and liquid molecules are closely packed. This makes gases much less dense.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-between">
              <Link href="/chemistry-formulas" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                ← Back to All Formulas
              </Link>
              <Link href="/chemistry-formulas/specific-heat-formula" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                Next: Specific Heat →
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
