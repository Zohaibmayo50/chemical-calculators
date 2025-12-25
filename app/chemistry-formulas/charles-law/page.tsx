import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Charles\'s Law | V₁/T₁ = V₂/T₂ | Volume-Temperature Relationship',
  description: 'Master Charles\'s Law (V₁/T₁ = V₂/T₂) for gas volume-temperature calculations at constant pressure. Includes examples and calculator links.',
  keywords: 'charles law, volume temperature, gas laws, direct relationship, V1/T1 V2/T2, kelvin temperature',
};

export default function CharlesLawPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="mb-8 text-sm">
            <Link href="/" className="text-primary-600 dark:text-primary-400 hover:underline">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/chemistry-formulas" className="text-primary-600 dark:text-primary-400 hover:underline">Chemistry Formulas</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600 dark:text-gray-400">Charles's Law</span>
          </nav>

          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Charles's Law
          </h1>

          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            <strong>Charles's Law</strong> states that volume and temperature are directly proportional at constant pressure. 
            Heat a gas and it expands; cool it and it contracts.
          </p>

          {/* Formula Block */}
          <div className="my-12 p-8 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">Charles's Law</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center">
              <p className="text-6xl font-bold text-gray-900 dark:text-white mb-2">
                V₁ / T₁ = V₂ / T₂
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Initial volume / initial temperature = Final volume / final temperature
              </p>
            </div>
          </div>

          {/* Critical Warning */}
          <div className="mb-12 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
            <h3 className="font-bold text-red-900 dark:text-red-100 mb-2 text-xl">⚠️ CRITICAL: Temperature MUST Be in Kelvin!</h3>
            <p className="text-red-800 dark:text-red-200 mb-3">
              ALWAYS convert °C or °F to Kelvin before using Charles's Law. Using Celsius will give completely wrong answers!
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-mono text-lg">
                K = °C + 273.15
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Example: 25°C = 298.15 K (often rounded to 298 K)
              </p>
            </div>
          </div>

          {/* Key Concept */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-teal-900 dark:text-teal-100 mb-4">
                The Direct Relationship
              </h2>
              <div className="space-y-4 text-teal-800 dark:text-teal-200">
                <p className="text-lg">
                  <strong>V ∝ T</strong> (at constant P and n)
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Double the temperature (K) → volume doubles</li>
                  <li>Halve the temperature (K) → volume halves</li>
                  <li>Heat a gas → it expands</li>
                  <li>Cool a gas → it contracts</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Variable Definitions */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Variable Definitions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-teal-600 dark:text-teal-400 mb-2">V₁ = Initial Volume</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Common Units:</strong> L, mL, cm³, m³
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Volume before the temperature change
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-teal-600 dark:text-teal-400 mb-2">T₁ = Initial Temperature</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> K (Kelvin) - MUST USE KELVIN!
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Temperature before the change
                </p>
                <p className="text-red-600 dark:text-red-400 text-sm mt-2 font-bold">
                  ❌ Do NOT use °C or °F directly!
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-teal-600 dark:text-teal-400 mb-2">V₂ = Final Volume</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> Same as V₁
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Volume after the temperature change
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-teal-600 dark:text-teal-400 mb-2">T₂ = Final Temperature</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> K (Kelvin) - MUST USE KELVIN!
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Temperature after the change
                </p>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 border-l-4 border-yellow-500">
                <h3 className="font-bold text-yellow-900 dark:text-yellow-100 mb-2">⚠️ Constant Conditions</h3>
                <p className="text-yellow-800 dark:text-yellow-200">
                  <strong>Pressure (P)</strong> must remain constant<br />
                  <strong>Amount of gas (n)</strong> must remain constant<br />
                  No gas can enter or leave the system
                </p>
              </div>
            </div>
          </section>

          {/* Rearranged Forms */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Rearranged Forms</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-6">
                <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Find V₂:</h3>
                <p className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-2">
                  V₂ = V₁T₂ / T₁
                </p>
                <p className="text-sm">Most common use!</p>
              </div>

              <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-6">
                <h3 className="font-bold text-purple-900 dark:text-purple-100 mb-3">Find T₂:</h3>
                <p className="text-3xl font-bold text-purple-800 dark:text-purple-200">
                  T₂ = V₂T₁ / V₁
                </p>
              </div>

              <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-6">
                <h3 className="font-bold text-green-900 dark:text-green-100 mb-3">Find V₁:</h3>
                <p className="text-3xl font-bold text-green-800 dark:text-green-200">
                  V₁ = V₂T₁ / T₂
                </p>
              </div>

              <div className="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-6">
                <h3 className="font-bold text-orange-900 dark:text-orange-100 mb-3">Find T₁:</h3>
                <p className="text-3xl font-bold text-orange-800 dark:text-orange-200">
                  T₁ = V₁T₂ / V₂
                </p>
              </div>
            </div>
          </section>

          {/* Example */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Step-by-Step Example</h2>
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Problem: A balloon has volume 2.50 L at 20°C. If heated to 80°C at constant pressure, what is its new volume?
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-2">Given:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>V₁ = 2.50 L</li>
                    <li>T₁ = 20°C = 293 K</li>
                    <li>T₂ = 80°C = 353 K</li>
                    <li>Find: V₂</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 1: Convert to Kelvin</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    T₁ = 20 + 273 = 293 K<br />
                    T₂ = 80 + 273 = 353 K
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 2: Write Charles's Law</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    V₁/T₁ = V₂/T₂
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 3: Rearrange to solve for V₂</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    V₂ = V₁T₂ / T₁
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 4: Substitute values</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    V₂ = (2.50 L)(353 K) / (293 K)
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 5: Calculate</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    V₂ = 882.5 L·K / 293 K = 3.01 L
                  </p>
                </div>

                <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg">
                  <p className="font-bold text-green-900 dark:text-green-100 mb-2">
                    Answer: V₂ = 3.01 L
                  </p>
                  <p className="text-sm">
                    ✅ Makes sense: Temperature increased by 20%, volume increased by 20%
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Real World Applications */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Real-World Applications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-6">
                <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-3">🎈 Hot Air Balloons</h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  Heat the air inside → volume tries to expand → since balloon is open, air escapes → lower density → balloon rises!
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-6">
                <h3 className="font-bold text-green-900 dark:text-green-100 mb-3">❄️ Balloon in Winter</h3>
                <p className="text-green-800 dark:text-green-200 text-sm">
                  Take balloon from warm house to cold outdoors → temperature drops → volume decreases → balloon deflates
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-6">
                <h3 className="font-bold text-purple-900 dark:text-purple-100 mb-3">🏀 Basketball Pressure</h3>
                <p className="text-purple-800 dark:text-purple-200 text-sm">
                  Cold ball feels flat (V decreased), warm ball feels firm (V increased) - though pressure also changes
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg p-6">
                <h3 className="font-bold text-orange-900 dark:text-orange-100 mb-3">🔥 Fire Piston</h3>
                <p className="text-orange-800 dark:text-orange-200 text-sm">
                  Compress air rapidly → temperature skyrockets (adiabatic) → demonstrates inverse of Charles's Law
                </p>
              </div>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Common Mistakes</h2>
            <div className="space-y-4">
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Using Celsius instead of Kelvin</h3>
                <p className="text-red-800 dark:text-red-200">
                  THE #1 MISTAKE! Temperature MUST be in Kelvin. Using °C gives completely wrong answers. Always convert: K = °C + 273.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Pressure not constant</h3>
                <p className="text-red-800 dark:text-red-200">
                  Charles's Law ONLY works when pressure is constant. If P changes, use the Combined Gas Law instead.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Unit mismatches</h3>
                <p className="text-red-800 dark:text-red-200">
                  V₁ and V₂ must be in the same units. T₁ and T₂ must BOTH be in Kelvin. Convert before calculating!
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Not checking your answer</h3>
                <p className="text-red-800 dark:text-red-200">
                  If temperature increases, volume MUST increase. If temperature decreases, volume MUST decrease. Verify your answer makes physical sense!
                </p>
              </div>
            </div>
          </section>

          {/* Related Calculators */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Related Calculators</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/gas-laws-calculators/charles-law-calculator" className="block p-6 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Charles's Law Calculator</h3>
                <p>Calculate V₁, T₁, V₂, or T₂</p>
              </Link>

              <Link href="/gas-laws-calculators/combined-gas-law-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Combined Gas Law</h3>
                <p className="text-gray-600 dark:text-gray-400">When P also changes</p>
              </Link>

              <Link href="/gas-laws-calculators/ideal-gas-law-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Ideal Gas Law</h3>
                <p className="text-gray-600 dark:text-gray-400">PV = nRT calculations</p>
              </Link>

              <Link href="/general-chemistry-calculators/temperature-converter" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Temperature Converter</h3>
                <p className="text-gray-600 dark:text-gray-400">°C ↔ K ↔ °F conversion</p>
              </Link>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What is Charles's Law?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  V₁/T₁ = V₂/T₂ at constant pressure. Volume and temperature are directly proportional - when one goes up, the other goes up.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Why must temperature be in Kelvin?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Charles's Law requires an absolute temperature scale. 0 K is absolute zero - no molecular motion. Using °C would incorrectly suggest gas has zero volume at 0°C!
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Why does this happen?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Higher temperature = faster molecular motion = molecules hit walls harder and more often. At constant pressure, container must expand to accommodate the increased kinetic energy.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What happens at absolute zero (0 K)?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Theoretically, volume would be zero. In reality, gases liquefy or solidify before reaching 0 K, so the law breaks down at very low temperatures.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">How is this different from Boyle's Law?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Boyle's Law: P and V (T constant) - inverse relationship. Charles's Law: V and T (P constant) - direct relationship. Different variables!
                </p>
              </div>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-between">
              <Link href="/chemistry-formulas" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                ← Back to All Formulas
              </Link>
              <Link href="/chemistry-formulas/mass-percent-formula" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                Next: Mass Percent →
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
