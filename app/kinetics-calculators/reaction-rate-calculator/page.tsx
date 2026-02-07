import React from 'react';
import ReactionRateCalculator from '@/components/calculators/ReactionRateCalculator';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: 'Reaction Rate Calculator - Average & Instantaneous Rates',
  description: 'Calculate average and instantaneous reaction rates from concentration vs time data. Determine rate of disappearance, concentration changes, and reaction progress.',
  keywords: ['reaction rate', 'kinetics', 'average rate', 'instantaneous rate', 'concentration', 'rate of reaction', 'chemistry calculator', 'chemical kinetics'],
  alternates: {
    canonical: 'https://chemsolved.com/kinetics-calculators/reaction-rate-calculator',
  },
};

export default function ReactionRateCalculatorPage() {  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-4">
            Reaction Rate Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Calculate average and instantaneous rates from concentration-time data
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ReactionRateCalculator />
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Related Calculators</h3>
              <div className="space-y-3">
                <a href="/kinetics-calculators/arrhenius-equation-calculator" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors">
                  <div className="font-semibold text-gray-900 dark:text-white">Arrhenius Equation</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Calculate activation energy and rate constants</div>
                </a>
                <a href="/kinetics-calculators/reaction-order-calculator" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors">
                  <div className="font-semibold text-gray-900 dark:text-white">Reaction Order</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Determine reaction order from data</div>
                </a>
                <a href="/kinetics-calculators/integrated-rate-law-calculator" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors">
                  <div className="font-semibold text-gray-900 dark:text-white">Integrated Rate Laws</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Calculate concentrations over time</div>
                </a>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">📐 Related Formulas</h3>
                <div className="space-y-3">
                  <a href="/chemistry-formulas/reaction-rate-formula" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors">
                    <div className="font-semibold text-gray-900 dark:text-white">Reaction Rate Formula</div>
                  </a>
                  <a href="/chemistry-formulas/rate-law" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors">
                    <div className="font-semibold text-gray-900 dark:text-white">Rate Law Formula</div>
                  </a>
                </div>
              </div>
              <a href="/kinetics-calculators" className="block mt-4 text-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium">
                All Kinetics Calculators →
              </a>
            </div>
          </div>
        </div>

        {/* Educational Content */}
        <div className="mt-12 space-y-8 text-gray-800 dark:text-gray-200">
          {/* What is Reaction Rate */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              What is Reaction Rate?
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-4">
                <strong>Reaction rate</strong> measures how quickly reactants are consumed or products are formed 
                in a chemical reaction. It quantifies the speed of chemical change and is expressed as the change 
                in concentration per unit time.
              </p>
              <p className="leading-relaxed mb-4">
                Key characteristics of reaction rates:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li><strong>Always positive:</strong> By convention, rates are expressed as positive values</li>
                <li><strong>Units:</strong> Typically M/s, M/min, or mol/(L·s) for concentration-time rates</li>
                <li><strong>Time-dependent:</strong> Most reactions slow down as reactants are consumed</li>
                <li><strong>Temperature-sensitive:</strong> Rates generally increase with temperature</li>
              </ul>
              <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 mt-6">
                <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Key Concept:</p>
                <p className="text-blue-800 dark:text-blue-200">
                  The rate of a reaction can be measured by monitoring the disappearance of a reactant or the 
                  appearance of a product over time. Different species in the same reaction may have different 
                  rates based on their stoichiometric coefficients.
                </p>
              </div>
            </div>
          </section>

          {/* Average vs Instantaneous Rate */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Average vs. Instantaneous Rate
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Average Rate */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">
                    Average Rate
                  </h3>
                  <div className="space-y-3">
                    <p className="text-blue-800 dark:text-blue-200">
                      The rate over a finite time interval. It's the slope of the secant line connecting two 
                      points on the concentration vs. time curve.
                    </p>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded">
                      <p className="font-semibold mb-2">Formula:</p>
                      <p className="font-mono text-xl">Rate = -Δ[A]/Δt</p>
                      <p className="font-mono text-lg mt-1">= -([A]₂ - [A]₁)/(t₂ - t₁)</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-3 rounded">
                      <p className="font-semibold text-sm mb-1">When to use:</p>
                      <ul className="text-sm space-y-1">
                        <li>• Experimental data from discrete time points</li>
                        <li>• Quick estimation of reaction speed</li>
                        <li>• Comparing rates across different time periods</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Instantaneous Rate */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-4">
                    Instantaneous Rate
                  </h3>
                  <div className="space-y-3">
                    <p className="text-green-800 dark:text-green-200">
                      The rate at a specific moment in time. It's the slope of the tangent line to the 
                      concentration vs. time curve at that point.
                    </p>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded">
                      <p className="font-semibold mb-2">Formula:</p>
                      <p className="font-mono text-xl">Rate = -d[A]/dt</p>
                      <p className="text-sm mt-1">(requires calculus)</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-3 rounded">
                      <p className="font-semibold text-sm mb-1">When to use:</p>
                      <ul className="text-sm space-y-1">
                        <li>• Determining rate at exact time t</li>
                        <li>• Rate law determination</li>
                        <li>• Graphical analysis (tangent method)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border-l-4 border-yellow-500 mt-6">
                <p className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Important Note:</p>
                <p className="text-yellow-800 dark:text-yellow-200">
                  As the time interval Δt becomes smaller and smaller (approaches zero), the average rate 
                  approaches the instantaneous rate. Mathematically: instantaneous rate = lim(Δt→0) Δ[A]/Δt
                </p>
              </div>
            </div>
          </section>

          {/* Worked Example */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Worked Example: Decomposition of N₂O₅
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Problem:</h4>
                  <p className="mb-2">
                    The decomposition of N₂O₅ in CCl₄ solution was studied. The following data were obtained:
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-300 dark:border-gray-600">
                          <th className="p-2 text-left">Time (s)</th>
                          <th className="p-2 text-left">[N₂O₅] (M)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td className="p-2">0</td><td className="p-2">0.200</td></tr>
                        <tr><td className="p-2">100</td><td className="p-2">0.180</td></tr>
                        <tr><td className="p-2">200</td><td className="p-2">0.162</td></tr>
                        <tr><td className="p-2">300</td><td className="p-2">0.146</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-3">
                    Calculate the average rate of decomposition during each time interval.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">Solution:</h4>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-200 dark:border-gray-600 space-y-4">
                    <div>
                      <p className="font-semibold">Interval 1: 0-100 s</p>
                      <p className="font-mono">Rate = -Δ[N₂O₅]/Δt = -(0.180 - 0.200)/(100 - 0)</p>
                      <p className="font-mono">Rate = -(-0.020)/100 = 2.0 × 10⁻⁴ M/s</p>
                    </div>

                    <div>
                      <p className="font-semibold">Interval 2: 100-200 s</p>
                      <p className="font-mono">Rate = -(0.162 - 0.180)/(200 - 100)</p>
                      <p className="font-mono">Rate = -(-0.018)/100 = 1.8 × 10⁻⁴ M/s</p>
                    </div>

                    <div>
                      <p className="font-semibold">Interval 3: 200-300 s</p>
                      <p className="font-mono">Rate = -(0.146 - 0.162)/(300 - 200)</p>
                      <p className="font-mono">Rate = -(-0.016)/100 = 1.6 × 10⁻⁴ M/s</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg border-l-4 border-green-500">
                  <p className="font-semibold text-green-900 dark:text-green-100">Observation:</p>
                  <p className="text-green-800 dark:text-green-200">
                    The rate <strong>decreases</strong> as the reaction proceeds: 2.0 × 10⁻⁴ → 1.8 × 10⁻⁴ → 1.6 × 10⁻⁴ M/s. 
                    This is typical for reactions where the rate depends on reactant concentration.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Rate and Stoichiometry */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Rate and Stoichiometry
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="leading-relaxed mb-4">
                For a general reaction: <span className="font-mono">aA + bB → cC + dD</span>
              </p>
              <p className="leading-relaxed mb-4">
                The rates of change for different species are related by stoichiometry:
              </p>
              <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/30 dark:to-secondary-900/30 p-6 rounded-lg mb-6">
                <p className="font-mono text-xl text-center mb-3">
                  Rate = -(1/a)Δ[A]/Δt = -(1/b)Δ[B]/Δt = (1/c)Δ[C]/Δt = (1/d)Δ[D]/Δt
                </p>
                <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                  Negative for reactants (decreasing), positive for products (increasing)
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-3">Example: 2N₂O₅ → 4NO₂ + O₂</h4>
                <div className="space-y-2">
                  <p>If N₂O₅ is disappearing at 2.0 × 10⁻⁴ M/s, then:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Rate of reaction = (1/2) × 2.0 × 10⁻⁴ = 1.0 × 10⁻⁴ M/s</li>
                    <li>NO₂ appears at: (4/2) × 2.0 × 10⁻⁴ = 4.0 × 10⁻⁴ M/s</li>
                    <li>O₂ appears at: (1/2) × 2.0 × 10⁻⁴ = 1.0 × 10⁻⁴ M/s</li>
                  </ul>
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
                  1. Drug Metabolism
                </h3>
                <p className="text-blue-800 dark:text-blue-200">
                  Pharmacologists measure how quickly drugs are metabolized (rate of disappearance from blood). 
                  This determines dosing schedules and drug effectiveness over time.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-3">
                  2. Environmental Chemistry
                </h3>
                <p className="text-green-800 dark:text-green-200">
                  Rates of pollutant degradation help predict how long contaminants persist in water or soil. 
                  Crucial for environmental cleanup and remediation planning.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-3">
                  3. Industrial Production
                </h3>
                <p className="text-purple-800 dark:text-purple-200">
                  Chemical engineers optimize reaction rates to maximize product formation while minimizing 
                  costs. Reaction rates determine reactor size and production capacity.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-900 dark:text-orange-100 mb-3">
                  4. Food Preservation
                </h3>
                <p className="text-orange-800 dark:text-orange-200">
                  Understanding rates of food spoilage (oxidation, bacterial growth) helps determine shelf life 
                  and optimal storage conditions. Temperature control slows reaction rates.
                </p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-teal-900 dark:text-teal-100 mb-3">
                  5. Atmospheric Chemistry
                </h3>
                <p className="text-teal-800 dark:text-teal-200">
                  Rates of ozone formation and depletion in the atmosphere determine air quality. Understanding 
                  these rates is essential for pollution control and climate modeling.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-yellow-900 dark:text-yellow-100 mb-3">
                  6. Enzyme Kinetics
                </h3>
                <p className="text-yellow-800 dark:text-yellow-200">
                  Measuring reaction rates catalyzed by enzymes reveals enzyme efficiency and mechanism. 
                  Critical for drug design, diagnostics, and understanding metabolism.
                </p>
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
                    Step 1: Identify What You're Measuring
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-blue-800 dark:text-blue-200">
                    <li>Reactant disappearance or product formation?</li>
                    <li>Which species are you tracking?</li>
                    <li>What are the units of concentration and time?</li>
                  </ul>
                </div>

                <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-3">
                    Step 2: Choose Average or Instantaneous
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-green-800 dark:text-green-200">
                    <li>Average rate: When you have discrete data points</li>
                    <li>Instantaneous rate: When you need rate at specific time</li>
                    <li>Initial rate: Instantaneous rate at t = 0</li>
                  </ul>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-3">
                    Step 3: Apply the Correct Formula
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-purple-800 dark:text-purple-200">
                    <li>Average: Rate = -Δ[A]/Δt = -([A]₂ - [A]₁)/(t₂ - t₁)</li>
                    <li>For reactants, use negative sign to make rate positive</li>
                    <li>For products, concentration increases, so already positive</li>
                    <li>Account for stoichiometric coefficients if needed</li>
                  </ul>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500">
                  <h3 className="text-xl font-semibold text-orange-900 dark:text-orange-100 mb-3">
                    Step 4: Check Units and Sign
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-orange-800 dark:text-orange-200">
                    <li>Rate should be positive by convention</li>
                    <li>Units typically M/s, M/min, or mol/(L·s)</li>
                    <li>Time units must match (all in s, or all in min, etc.)</li>
                    <li>Does the magnitude make sense for the reaction?</li>
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
                  ❌ Getting a Negative Rate
                </h3>
                <p className="text-red-800 dark:text-red-200 mb-2">
                  Forgetting the negative sign when calculating rate from reactant disappearance.
                </p>
                <p className="text-sm text-red-700 dark:text-red-300">
                  <strong>Correct:</strong> Rate = <strong>-</strong>Δ[A]/Δt (negative sign makes it positive)
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
                  ❌ Inconsistent Time Units
                </h3>
                <p className="text-red-800 dark:text-red-200 mb-2">
                  Mixing seconds and minutes, or using time in hours with concentration change per second.
                </p>
                <p className="text-sm text-red-700 dark:text-red-300">
                  <strong>Correct:</strong> Convert all times to the same unit before calculating
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
                  ❌ Ignoring Stoichiometric Coefficients
                </h3>
                <p className="text-red-800 dark:text-red-200 mb-2">
                  Not dividing by coefficients when relating rates of different species.
                </p>
                <p className="text-sm text-red-700 dark:text-red-300">
                  <strong>Correct:</strong> For 2A → B, if A disappears at 0.4 M/s, B appears at 0.2 M/s
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
                  ❌ Confusing Average and Instantaneous
                </h3>
                <p className="text-red-800 dark:text-red-200 mb-2">
                  Using average rate formula when instantaneous is needed, or vice versa.
                </p>
                <p className="text-sm text-red-700 dark:text-red-300">
                  <strong>Correct:</strong> Read the problem carefully to determine which is requested
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
                <h3 className="text-lg font-semibold mb-4">Key Formulas</h3>
                <div className="space-y-2 text-sm">
                  <p className="font-mono">Average Rate = -Δ[A]/Δt</p>
                  <p className="font-mono">= -([A]₂ - [A]₁)/(t₂ - t₁)</p>
                  <p className="mt-3 font-mono">Instantaneous Rate = -d[A]/dt</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-4">
                    (Negative for reactants,<br/>
                    positive for products)
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-tertiary-50 to-primary-50 dark:from-tertiary-900/20 dark:to-primary-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Common Units</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>Concentration:</strong> M (mol/L)</p>
                  <p><strong>Time:</strong> s, min, h</p>
                  <p><strong>Rate:</strong></p>
                  <ul className="list-disc list-inside ml-2">
                    <li>M/s</li>
                    <li>M/min</li>
                    <li>mol/(L·s)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-secondary-50 to-tertiary-50 dark:from-secondary-900/20 dark:to-tertiary-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Sign Conventions</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>Reactants:</strong> Rate = -Δ[A]/Δt</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">(Negative sign needed)</p>
                  <p className="mt-2"><strong>Products:</strong> Rate = +Δ[P]/Δt</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">(Already positive)</p>
                  <p className="mt-2 font-semibold">All rates are positive!</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-tertiary-50 dark:from-primary-900/20 dark:to-tertiary-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Stoichiometry Factor</h3>
                <div className="space-y-2 text-sm">
                  <p className="font-mono">aA + bB → cC</p>
                  <p className="mt-2">Rate = -(1/a)Δ[A]/Δt</p>
                  <p>= -(1/b)Δ[B]/Δt</p>
                  <p>= (1/c)Δ[C]/Δt</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* Structured Data - SoftwareApplication */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Reaction Rate Calculator",
            "description": "Reaction Rate Calculator on ChemSolved",
            "url": "https://chemsolved.com/kinetics-calculators/reaction-rate-calculator",
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
                "name": "Reaction Rate Calculator",
                "item": "https://chemsolved.com/kinetics-calculators/reaction-rate-calculator"
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