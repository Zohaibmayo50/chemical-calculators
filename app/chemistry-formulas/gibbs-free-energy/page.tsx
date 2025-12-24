import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Gibbs Free Energy | ΔG = ΔH - TΔS | Reaction Spontaneity',
  description: 'Master Gibbs free energy (ΔG = ΔH - TΔS) to predict reaction spontaneity. Includes examples and thermodynamics calculator links.',
  keywords: 'Gibbs free energy, delta G, spontaneity, enthalpy, entropy, thermodynamics',
};

export default function GibbsFreeEnergyPage() {
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
            <span className="text-gray-600 dark:text-gray-400">Gibbs Free Energy</span>
          </nav>

          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Gibbs Free Energy
          </h1>

          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            <strong>Gibbs free energy</strong> (ΔG) determines whether a reaction is spontaneous. It combines 
            enthalpy and entropy to predict if a reaction will occur without external energy input.
          </p>

          {/* Formula Block */}
          <div className="my-12 p-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">Gibbs Free Energy Equation</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center">
              <p className="text-6xl font-bold text-gray-900 dark:text-white mb-2">
                ΔG = ΔH - TΔS
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Free energy change determines spontaneity
              </p>
            </div>
          </div>

          {/* Variable Definitions */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Variable Definitions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">ΔG = Gibbs Free Energy Change</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> J/mol or kJ/mol
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Meaning:</strong> Energy available to do work
                </p>
                <div className="mt-3 space-y-1 text-sm">
                  <p className="text-green-700 dark:text-green-300">✓ ΔG &lt; 0 → Spontaneous (exergonic)</p>
                  <p className="text-gray-600 dark:text-gray-400">• ΔG = 0 → Equilibrium</p>
                  <p className="text-red-700 dark:text-red-300">✗ ΔG &gt; 0 → Non-spontaneous (endergonic)</p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">ΔH = Enthalpy Change</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> J/mol or kJ/mol
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Meaning:</strong> Heat absorbed or released
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                  ΔH &lt; 0 = exothermic (releases heat)
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">T = Temperature</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> Kelvin (K) — MUST use Kelvin!
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Conversion:</strong> K = °C + 273.15
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">ΔS = Entropy Change</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> J/(mol·K)
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Meaning:</strong> Change in disorder
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                  ⚠️ Often in J/(mol·K) while ΔH is in kJ/mol — convert units!
                </p>
              </div>
            </div>
          </section>

          {/* Spontaneity Predictions */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Predicting Spontaneity</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
                <thead className="bg-gradient-to-r from-red-500 to-orange-500 text-white">
                  <tr>
                    <th className="p-4 text-left">ΔH</th>
                    <th className="p-4 text-left">ΔS</th>
                    <th className="p-4 text-left">ΔG</th>
                    <th className="p-4 text-left">Spontaneity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr className="bg-green-50 dark:bg-green-900/20">
                    <td className="p-4">Negative (-)</td>
                    <td className="p-4">Positive (+)</td>
                    <td className="p-4 font-bold text-green-600">Always negative</td>
                    <td className="p-4 font-bold text-green-600">Always spontaneous at all T</td>
                  </tr>
                  <tr>
                    <td className="p-4">Negative (-)</td>
                    <td className="p-4">Negative (-)</td>
                    <td className="p-4">Negative at low T</td>
                    <td className="p-4">Spontaneous at low temperature</td>
                  </tr>
                  <tr>
                    <td className="p-4">Positive (+)</td>
                    <td className="p-4">Positive (+)</td>
                    <td className="p-4">Negative at high T</td>
                    <td className="p-4">Spontaneous at high temperature</td>
                  </tr>
                  <tr className="bg-red-50 dark:bg-red-900/20">
                    <td className="p-4">Positive (+)</td>
                    <td className="p-4">Negative (-)</td>
                    <td className="p-4 font-bold text-red-600">Always positive</td>
                    <td className="p-4 font-bold text-red-600">Never spontaneous</td>
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
                Problem: Is a reaction spontaneous at 298 K if ΔH = -75 kJ/mol and ΔS = -120 J/(mol·K)?
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-2">Given:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>ΔH = -75 kJ/mol</li>
                    <li>ΔS = -120 J/(mol·K)</li>
                    <li>T = 298 K</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 1: Convert units</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    ΔH and TΔS must have same units. Convert ΔS to kJ/(mol·K):
                  </p>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    ΔS = -120 J/(mol·K) × (1 kJ / 1000 J) = -0.120 kJ/(mol·K)
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 2: Calculate TΔS</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    TΔS = 298 K × (-0.120 kJ/(mol·K)) = -35.8 kJ/mol
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 3: Calculate ΔG</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    ΔG = ΔH - TΔS = -75 - (-35.8) = -39.2 kJ/mol
                  </p>
                </div>

                <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg">
                  <p className="font-bold text-green-900 dark:text-green-100">
                    Answer: ΔG = -39.2 kJ/mol (negative)
                  </p>
                  <p className="text-sm mt-2">✓ Spontaneous! Exothermic overcomes negative entropy.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Common Mistakes</h2>
            <div className="space-y-4">
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Mismatched units</h3>
                <p className="text-red-800 dark:text-red-200">
                  ΔH is often in kJ/mol while ΔS is in J/(mol·K). Convert ΔS to kJ/(mol·K) or ΔH to J/mol!
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Forgetting the minus sign</h3>
                <p className="text-red-800 dark:text-red-200">
                  It's ΔG = ΔH - TΔS, not ΔG = ΔH + TΔS. The minus is crucial!
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Using Celsius instead of Kelvin</h3>
                <p className="text-red-800 dark:text-red-200">
                  Temperature MUST be in Kelvin. Convert °C to K by adding 273.15.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Confusing spontaneous with fast</h3>
                <p className="text-red-800 dark:text-red-200">
                  ΔG &lt; 0 means thermodynamically favorable, NOT necessarily fast. Kinetics is separate!
                </p>
              </div>
            </div>
          </section>

          {/* Related Calculators */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Related Calculators</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/thermodynamics-calculators/gibbs-free-energy-calculator" className="block p-6 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Gibbs Free Energy Calculator</h3>
                <p>Calculate ΔG and predict spontaneity</p>
              </Link>

              <Link href="/thermodynamics-calculators/enthalpy-reaction-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Enthalpy Calculator</h3>
                <p className="text-gray-600 dark:text-gray-400">Calculate ΔH for reactions</p>
              </Link>

              <Link href="/thermodynamics-calculators/entropy-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Entropy Calculator</h3>
                <p className="text-gray-600 dark:text-gray-400">Calculate ΔS for reactions</p>
              </Link>

              <Link href="/chemical-reaction-calculators/equilibrium-constant-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Equilibrium Constant</h3>
                <p className="text-gray-600 dark:text-gray-400">ΔG° = -RT ln K</p>
              </Link>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What is Gibbs free energy?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  ΔG = ΔH - TΔS. It predicts reaction spontaneity. ΔG &lt; 0 means spontaneous, ΔG &gt; 0 means non-spontaneous.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What does ΔG &lt; 0 mean?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Negative ΔG means the reaction is thermodynamically favorable (spontaneous) and can occur without external energy input.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">How do temperature changes affect ΔG?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Temperature affects the TΔS term. High T favors positive ΔS reactions, low T favors negative ΔH reactions.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What is the relationship between ΔG and equilibrium?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  ΔG° = -RT ln K. When ΔG = 0, the system is at equilibrium. ΔG° relates to the equilibrium constant K.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Why are units important in this equation?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  ΔH and TΔS must have matching units (both kJ/mol or both J/mol). ΔS is often given in J/(mol·K), requiring conversion.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-between">
              <Link href="/chemistry-formulas" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                ← Back to All Formulas
              </Link>
              <Link href="/chemistry-formulas/enthalpy-formula" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                Next: Enthalpy →
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
