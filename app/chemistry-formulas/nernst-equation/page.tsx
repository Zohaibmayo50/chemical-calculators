import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Nernst Equation | E = E° - (RT/nF)lnQ | Cell Potential',
  description: 'Master the Nernst equation for calculating electrochemical cell potentials under non-standard conditions. Includes examples and calculator links.',
  keywords: 'Nernst equation, cell potential, electrochemistry, redox, galvanic cell, half-cell potential',
};

export default function NernstEquationPage() {
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
            <span className="text-gray-600 dark:text-gray-400">Nernst Equation</span>
          </nav>

          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Nernst Equation
          </h1>

          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            The <strong>Nernst equation</strong> calculates the cell potential under non-standard conditions. 
            It relates electrode potential to temperature, concentration, and the number of electrons transferred.
          </p>

          {/* Formula Block */}
          <div className="my-12 p-8 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">The Nernst Equation</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center">
              <p className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
                E = E° - (RT/nF) ln Q
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
                At 25°C (298 K), simplified form:
              </p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">
                E = E° - (0.0592/n) log Q
              </p>
            </div>
          </div>

          {/* Variable Definitions */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Variable Definitions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">E = Cell Potential</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> Volts (V)
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Cell potential under actual conditions
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">E° = Standard Cell Potential</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> Volts (V)
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Cell potential at standard conditions (1 M, 1 atm, 25°C)
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                  Calculated from E°(cathode) - E°(anode)
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">R = Gas Constant</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Value:</strong> 8.314 J/(mol·K)
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">T = Temperature</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> Kelvin (K)
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Usually 298 K (25°C) for standard temperature
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">n = Moles of Electrons</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> mol e⁻
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Number of electrons transferred in the balanced redox reaction
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">F = Faraday's Constant</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Value:</strong> 96,485 C/mol
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Charge per mole of electrons
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">Q = Reaction Quotient</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Formula:</strong> Q = [products] / [reactants]
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Ratio of concentrations at non-standard conditions
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                  💡 At equilibrium, Q = K and E = 0
                </p>
              </div>
            </div>
          </section>

          {/* Simplified Forms */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Common Forms of the Equation</h2>
            <div className="grid gap-6">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-6">
                <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-3">Natural Logarithm Form</h3>
                <p className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-2">
                  E = E° - (RT/nF) ln Q
                </p>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  General form valid at any temperature
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-6">
                <h3 className="text-lg font-bold text-green-900 dark:text-green-100 mb-3">At 25°C (298 K) with log₁₀</h3>
                <p className="text-2xl font-bold text-green-800 dark:text-green-200 mb-2">
                  E = E° - (0.0592 V / n) log Q
                </p>
                <p className="text-sm text-green-700 dark:text-green-300">
                  Most commonly used form. 0.0592 = (RT ln 10)/F at 298 K
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-6">
                <h3 className="text-lg font-bold text-purple-900 dark:text-purple-100 mb-3">At 25°C with ln</h3>
                <p className="text-2xl font-bold text-purple-800 dark:text-purple-200 mb-2">
                  E = E° - (0.0257 V / n) ln Q
                </p>
                <p className="text-sm text-purple-700 dark:text-purple-300">
                  Using natural log. 0.0257 = RT/F at 298 K
                </p>
              </div>
            </div>
          </section>

          {/* Example */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Step-by-Step Example</h2>
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Problem: Calculate cell potential for Zn²⁺ + Cu → Zn + Cu²⁺ when [Zn²⁺] = 0.10 M and [Cu²⁺] = 2.0 M at 25°C. E° = 1.10 V.
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-2">Given:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>E° = 1.10 V</li>
                    <li>[Zn²⁺] = 0.10 M</li>
                    <li>[Cu²⁺] = 2.0 M</li>
                    <li>n = 2 (2 electrons transferred)</li>
                    <li>T = 298 K (25°C)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 1: Determine n</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    Balanced half-reactions:
                  </p>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded text-sm">
                    Oxidation: Zn → Zn²⁺ + 2e⁻<br />
                    Reduction: Cu²⁺ + 2e⁻ → Cu<br />
                    <strong>n = 2 electrons</strong>
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 2: Calculate Q</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    Q = [products]/[reactants] = [Zn²⁺]/[Cu²⁺]
                  </p>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    Q = 0.10 / 2.0 = 0.05
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 3: Use Nernst equation at 25°C</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    E = E° - (0.0592/n) log Q<br />
                    E = 1.10 - (0.0592/2) log(0.05)<br />
                    E = 1.10 - (0.0296) × (-1.30)<br />
                    E = 1.10 + 0.038 = 1.14 V
                  </p>
                </div>

                <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg">
                  <p className="font-bold text-green-900 dark:text-green-100">
                    Answer: E = 1.14 V
                  </p>
                  <p className="text-sm mt-2">Cell potential is higher than E° because [products] &lt; [reactants], favoring forward reaction.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Common Mistakes</h2>
            <div className="space-y-4">
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Wrong Q calculation</h3>
                <p className="text-red-800 dark:text-red-200">
                  Q uses products over reactants (like equilibrium). Make sure to balance coefficients as exponents!
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Forgetting electrons (n)</h3>
                <p className="text-red-800 dark:text-red-200">
                  Must balance the redox equation to find n. Missing or wrong n completely changes the answer.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Mixing ln and log</h3>
                <p className="text-red-800 dark:text-red-200">
                  Use ln with 0.0257 V or log with 0.0592 V at 25°C. Don't mix them!
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Using wrong temperature constant</h3>
                <p className="text-red-800 dark:text-red-200">
                  0.0592 and 0.0257 are only valid at 25°C (298 K). At other temperatures, use E = E° - (RT/nF) ln Q.
                </p>
              </div>
            </div>
          </section>

          {/* Related Calculators */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Related Calculators</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/redox-calculators/nernst-equation-calculator" className="block p-6 bg-gradient-to-r from-yellow-500 to-amber-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Nernst Equation Calculator</h3>
                <p>Calculate cell potential instantly</p>
              </Link>

              <Link href="/redox-calculators/cell-potential-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Cell Potential Calculator</h3>
                <p className="text-gray-600 dark:text-gray-400">Calculate E° for cells</p>
              </Link>

              <Link href="/electrochemistry-calculators" className="block p-6 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">All Electrochemistry Calculators</h3>
                <p className="text-white/90">Explore all electrochemistry tools</p>
              </Link>

              <Link href="/redox-calculators/redox-balancing-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Redox Balancing</h3>
                <p className="text-gray-600 dark:text-gray-400">Balance redox equations</p>
              </Link>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What is the Nernst equation?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  E = E° - (RT/nF) ln Q. It calculates cell potential at non-standard conditions based on concentration and temperature.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">When do I use 0.0592?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Use E = E° - (0.0592/n) log Q at 25°C (298 K) when using log₁₀. This is the most common simplified form.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">How do I find n (electrons transferred)?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Balance the redox equation by separating into half-reactions. n equals the electrons in each balanced half-reaction.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What happens when E = 0?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  When E = 0, the cell is at equilibrium. No current flows, and Q = K (equilibrium constant).
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What if concentrations increase?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  If product concentrations increase, Q increases, making E smaller. If reactant concentrations increase, Q decreases, making E larger.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-between">
              <Link href="/chemistry-formulas" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                ← Back to All Formulas
              </Link>
              <Link href="/chemistry-formulas/arrhenius-equation" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                Next: Arrhenius Equation →
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
