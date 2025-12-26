import React from 'react';
import IntegratedRateLawCalculator from '@/components/calculators/IntegratedRateLawCalculator';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: 'Integrated Rate Law Calculator - Zero, First & Second Order Kinetics',
  description: 'Calculate concentration vs time for zero, first, and second order reactions. Determine rate constants, half-lives, and reaction progress with instant calculations.',
  keywords: ['integrated rate law', 'reaction kinetics', 'zero order', 'first order', 'second order', 'half-life', 'rate constant', 'chemical kinetics', 'concentration'],
};

export default function IntegratedRateLawCalculatorPage() {  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-4">
            Integrated Rate Law Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Calculate concentration, time, and rate constants for different reaction orders
          </p>
        </div>

        <IntegratedRateLawCalculator />

        {/* Educational Content */}
        <div className="mt-12 space-y-8 text-gray-800 dark:text-gray-200">
          {/* What are Integrated Rate Laws */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              What are Integrated Rate Laws?
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-4">
                <strong>Integrated rate laws</strong> are mathematical equations that relate the concentration of a 
                reactant to time. Unlike differential rate laws (which express rate as a function of concentration), 
                integrated rate laws allow us to predict concentrations at any point in time.
              </p>
              <p className="leading-relaxed mb-4">
                The form of the integrated rate law depends on the <strong>order of the reaction</strong> with 
                respect to the reactant. The three most common cases are:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li><strong>Zero order:</strong> Rate is independent of concentration</li>
                <li><strong>First order:</strong> Rate is directly proportional to concentration</li>
                <li><strong>Second order:</strong> Rate is proportional to concentration squared</li>
              </ul>
              <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 mt-6">
                <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Key Concept:</p>
                <p className="text-blue-800 dark:text-blue-200">
                  Integrated rate laws are derived by integrating the differential rate law. They provide a direct 
                  relationship between concentration and time, making them extremely useful for experimental kinetics 
                  and predicting reaction progress.
                </p>
              </div>
            </div>
          </section>

          {/* The Three Orders */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              The Three Reaction Orders
            </h2>
            <div className="prose dark:prose-invert max-w-none space-y-6">
              {/* Zero Order */}
              <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">
                  Zero Order Reactions
                </h3>
                <div className="space-y-3">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <p className="font-semibold mb-2">Differential Rate Law:</p>
                    <p className="font-mono text-xl">Rate = k</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <p className="font-semibold mb-2">Integrated Rate Law:</p>
                    <p className="font-mono text-xl">[A] = [A]₀ - kt</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      (Linear decrease in concentration with time)
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <p className="font-semibold mb-2">Half-Life:</p>
                    <p className="font-mono text-xl">t½ = [A]₀ / (2k)</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      (Decreases as reaction proceeds - depends on initial concentration)
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <p className="font-semibold mb-2">Graphical Analysis:</p>
                    <p className="text-blue-800 dark:text-blue-200">
                      Plot <strong>[A] vs t</strong> → straight line with slope = -k
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <p className="font-semibold mb-2">Examples:</p>
                    <ul className="list-disc list-inside space-y-1 text-blue-800 dark:text-blue-200">
                      <li>Photochemical reactions (constant light intensity)</li>
                      <li>Enzyme-catalyzed reactions at high substrate concentration</li>
                      <li>Surface-catalyzed reactions when surface is saturated</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* First Order */}
              <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-4">
                  First Order Reactions
                </h3>
                <div className="space-y-3">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <p className="font-semibold mb-2">Differential Rate Law:</p>
                    <p className="font-mono text-xl">Rate = k[A]</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <p className="font-semibold mb-2">Integrated Rate Law:</p>
                    <p className="font-mono text-xl">ln[A] = ln[A]₀ - kt</p>
                    <p className="font-mono text-lg mt-1">or  [A] = [A]₀e^(-kt)</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      (Exponential decrease in concentration with time)
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <p className="font-semibold mb-2">Half-Life:</p>
                    <p className="font-mono text-xl">t½ = ln(2) / k = 0.693 / k</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      (Constant - independent of concentration!)
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <p className="font-semibold mb-2">Graphical Analysis:</p>
                    <p className="text-green-800 dark:text-green-200">
                      Plot <strong>ln[A] vs t</strong> → straight line with slope = -k
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <p className="font-semibold mb-2">Examples:</p>
                    <ul className="list-disc list-inside space-y-1 text-green-800 dark:text-green-200">
                      <li>Radioactive decay (all radioactive nuclei)</li>
                      <li>Decomposition of N₂O₅, H₂O₂</li>
                      <li>Many unimolecular gas-phase reactions</li>
                      <li>Enzyme reactions at low substrate concentration</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Second Order */}
              <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-4">
                  Second Order Reactions
                </h3>
                <div className="space-y-3">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <p className="font-semibold mb-2">Differential Rate Law:</p>
                    <p className="font-mono text-xl">Rate = k[A]²</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <p className="font-semibold mb-2">Integrated Rate Law:</p>
                    <p className="font-mono text-xl">1/[A] = 1/[A]₀ + kt</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      (Reciprocal of concentration increases linearly with time)
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <p className="font-semibold mb-2">Half-Life:</p>
                    <p className="font-mono text-xl">t½ = 1 / (k[A]₀)</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      (Increases as reaction proceeds - depends on initial concentration)
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <p className="font-semibold mb-2">Graphical Analysis:</p>
                    <p className="text-purple-800 dark:text-purple-200">
                      Plot <strong>1/[A] vs t</strong> → straight line with slope = k
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <p className="font-semibold mb-2">Examples:</p>
                    <ul className="list-disc list-inside space-y-1 text-purple-800 dark:text-purple-200">
                      <li>Dimerization reactions (2A → A₂)</li>
                      <li>Gas-phase reactions: NO₂ → NO + O</li>
                      <li>Many bimolecular reactions when [A] = [B]</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Comparison Table */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Comparison of Reaction Orders
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30">
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold">
                      Property
                    </th>
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-center font-semibold">
                      Zero Order
                    </th>
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-center font-semibold">
                      First Order
                    </th>
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-center font-semibold">
                      Second Order
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">
                      Rate Law
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center font-mono">
                      Rate = k
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center font-mono">
                      Rate = k[A]
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center font-mono">
                      Rate = k[A]²
                    </td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700/50">
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">
                      Integrated Form
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center font-mono">
                      [A] = [A]₀ - kt
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center font-mono">
                      ln[A] = ln[A]₀ - kt
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center font-mono">
                      1/[A] = 1/[A]₀ + kt
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">
                      Half-Life
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center font-mono">
                      [A]₀/(2k)
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center font-mono">
                      0.693/k
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center font-mono">
                      1/(k[A]₀)
                    </td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700/50">
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">
                      Linear Plot
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                      [A] vs t
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                      ln[A] vs t
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                      1/[A] vs t
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">
                      Slope of Plot
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                      -k
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                      -k
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                      +k
                    </td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700/50">
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">
                      Units of k
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                      M·s⁻¹
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                      s⁻¹
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                      M⁻¹·s⁻¹
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">
                      t½ Dependence
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                      Decreases
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                      Constant
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                      Increases
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Worked Example */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Worked Example: First Order Reaction
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Problem:</h4>
                  <p>
                    The decomposition of N₂O₅ is first order with k = 5.7 × 10⁻⁴ s⁻¹. If the initial concentration 
                    is 0.100 M, what will be the concentration after 2000 seconds?
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">Given Information:</h4>
                  <ul className="space-y-1">
                    <li>Reaction order: First order</li>
                    <li>[A]₀ = 0.100 M</li>
                    <li>k = 5.7 × 10⁻⁴ s⁻¹</li>
                    <li>t = 2000 s</li>
                    <li>Find: [A] at t = 2000 s</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">Solution:</h4>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-200 dark:border-gray-600 space-y-3">
                    <div>
                      <p className="font-semibold">Step 1: Write the integrated rate law for first order</p>
                      <p className="font-mono">[A] = [A]₀ e^(-kt)</p>
                    </div>

                    <div>
                      <p className="font-semibold">Step 2: Substitute values</p>
                      <p className="font-mono">[A] = (0.100 M) × e^(-(5.7×10⁻⁴ s⁻¹)(2000 s))</p>
                    </div>

                    <div>
                      <p className="font-semibold">Step 3: Calculate the exponent</p>
                      <p className="font-mono">-kt = -(5.7×10⁻⁴)(2000) = -1.14</p>
                    </div>

                    <div>
                      <p className="font-semibold">Step 4: Calculate e^(-1.14)</p>
                      <p className="font-mono">e^(-1.14) = 0.3198</p>
                    </div>

                    <div>
                      <p className="font-semibold">Step 5: Calculate final concentration</p>
                      <p className="font-mono">[A] = (0.100 M)(0.3198) = 0.0320 M</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg border-l-4 border-green-500">
                  <p className="font-semibold text-green-900 dark:text-green-100">Answer:</p>
                  <p className="text-green-800 dark:text-green-200">
                    After 2000 seconds, the concentration will be <strong>0.0320 M</strong>, which is about 32% of 
                    the original concentration.
                  </p>
                  <p className="text-green-700 dark:text-green-300 mt-2 text-sm">
                    Note: The half-life for this reaction is t½ = 0.693/k = 0.693/(5.7×10⁻⁴) = 1216 s. 
                    Since 2000 s is slightly more than one half-life, having about 32% remaining (slightly less than 50%) makes sense.
                  </p>
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
                  1. Drug Pharmacokinetics
                </h3>
                <p className="text-blue-800 dark:text-blue-200">
                  Most drug metabolism follows first-order kinetics. Integrated rate laws help determine dosing 
                  schedules, predict drug concentrations in blood over time, and calculate how long it takes for 
                  a drug to be eliminated from the body.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-3">
                  2. Radioactive Dating
                </h3>
                <p className="text-green-800 dark:text-green-200">
                  Radioactive decay is first-order. Carbon-14 dating uses the integrated rate law to determine 
                  the age of archaeological artifacts. By measuring remaining C-14 and knowing its half-life 
                  (5,730 years), we can calculate the age of organic materials.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-3">
                  3. Environmental Chemistry
                </h3>
                <p className="text-purple-800 dark:text-purple-200">
                  Degradation of pollutants often follows first-order kinetics. Integrated rate laws predict how 
                  long it takes for pesticide residues, pharmaceutical contaminants, or oil spills to degrade to 
                  safe levels in soil and water.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-900 dark:text-orange-100 mb-3">
                  4. Food Science
                </h3>
                <p className="text-orange-800 dark:text-orange-200">
                  Food spoilage reactions (vitamin degradation, flavor loss, color changes) often follow first-order 
                  kinetics. Integrated rate laws help determine shelf life, optimal storage conditions, and 
                  expiration dates for food products.
                </p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-teal-900 dark:text-teal-100 mb-3">
                  5. Chemical Engineering
                </h3>
                <p className="text-teal-800 dark:text-teal-200">
                  Industrial reactor design requires integrated rate laws to determine reactor size, residence time, 
                  and optimal operating conditions. Engineers use these equations to scale up processes from 
                  laboratory to production scale.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-yellow-900 dark:text-yellow-100 mb-3">
                  6. Atmospheric Chemistry
                </h3>
                <p className="text-yellow-800 dark:text-yellow-200">
                  Ozone depletion, greenhouse gas reactions, and smog formation all involve reactions with specific 
                  rate laws. Integrated rate laws help model atmospheric changes and predict future concentrations 
                  of important atmospheric species.
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
                <div className="bg-primary-50 dark:bg-primary-900/30 p-6 rounded-lg border-l-4 border-primary-500">
                  <h3 className="text-xl font-semibold text-primary-900 dark:text-primary-100 mb-3">
                    Step 1: Identify the Reaction Order
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-primary-800 dark:text-primary-200">
                    <li>Given explicitly in the problem</li>
                    <li>Determined from rate law (check exponent on [A])</li>
                    <li>Found from experimental data using graphical method</li>
                    <li>Inferred from units of rate constant k</li>
                  </ul>
                </div>

                <div className="bg-secondary-50 dark:bg-secondary-900/30 p-6 rounded-lg border-l-4 border-secondary-500">
                  <h3 className="text-xl font-semibold text-secondary-900 dark:text-secondary-100 mb-3">
                    Step 2: Write the Appropriate Integrated Rate Law
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-secondary-800 dark:text-secondary-200">
                    <li>Zero order: [A] = [A]₀ - kt</li>
                    <li>First order: ln[A] = ln[A]₀ - kt  or  [A] = [A]₀e^(-kt)</li>
                    <li>Second order: 1/[A] = 1/[A]₀ + kt</li>
                  </ul>
                </div>

                <div className="bg-tertiary-50 dark:bg-tertiary-900/30 p-6 rounded-lg border-l-4 border-tertiary-500">
                  <h3 className="text-xl font-semibold text-tertiary-900 dark:text-tertiary-100 mb-3">
                    Step 3: Identify Known and Unknown Variables
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-tertiary-800 dark:text-tertiary-200">
                    <li>[A]₀ = initial concentration</li>
                    <li>[A] = concentration at time t</li>
                    <li>k = rate constant</li>
                    <li>t = time</li>
                    <li>Determine which three you know and which one you need to find</li>
                  </ul>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">
                    Step 4: Substitute and Solve
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-blue-800 dark:text-blue-200">
                    <li>Plug in known values into the integrated rate law</li>
                    <li>Rearrange to solve for the unknown</li>
                    <li>Be careful with units - they must be consistent</li>
                    <li>For first order with ln: use natural log (ln), not log₁₀</li>
                  </ul>
                </div>

                <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-3">
                    Step 5: Check Your Answer
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-green-800 dark:text-green-200">
                    <li>[A] should be less than [A]₀ (concentration decreases)</li>
                    <li>Time should be positive</li>
                    <li>Rate constant k should be positive</li>
                    <li>Compare to half-life if known: does the answer make sense?</li>
                    <li>Check units of final answer</li>
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
                  ❌ Using log₁₀ Instead of ln for First Order
                </h3>
                <p className="text-red-800 dark:text-red-200 mb-2">
                  The integrated rate law for first order uses <strong>natural logarithm (ln)</strong>, not log base 10.
                </p>
                <p className="text-sm text-red-700 dark:text-red-300">
                  <strong>Correct:</strong> ln[A] = ln[A]₀ - kt
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
                  ❌ Forgetting e^x When Solving First Order
                </h3>
                <p className="text-red-800 dark:text-red-200 mb-2">
                  After calculating ln[A], you must use e^x to get back to [A].
                </p>
                <p className="text-sm text-red-700 dark:text-red-300">
                  <strong>Correct:</strong> If ln[A] = -1.5, then [A] = e^(-1.5) = 0.223, not -1.5
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
                  ❌ Incorrect Sign in Rate Law
                </h3>
                <p className="text-red-800 dark:text-red-200 mb-2">
                  For zero order: [A] = [A]₀ <strong>minus</strong> kt (not plus). For second order: 1/[A] = 1/[A]₀ <strong>plus</strong> kt.
                </p>
                <p className="text-sm text-red-700 dark:text-red-300">
                  <strong>Remember:</strong> Concentration always decreases, but the mathematical form varies by order.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
                  ❌ Inconsistent Units
                </h3>
                <p className="text-red-800 dark:text-red-200 mb-2">
                  If k is in s⁻¹, time must be in seconds. If k is in min⁻¹, time must be in minutes.
                </p>
                <p className="text-sm text-red-700 dark:text-red-300">
                  <strong>Correct approach:</strong> Convert all units to match before calculating.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
                  ❌ Confusing [A] and [A]₀
                </h3>
                <p className="text-red-800 dark:text-red-200 mb-2">
                  [A]₀ is <strong>always</strong> the initial concentration (at t=0). [A] is the concentration at time t.
                </p>
                <p className="text-sm text-red-700 dark:text-red-300">
                  <strong>Remember:</strong> The subscript 0 means "initial" or "at time zero".
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
                  ❌ Wrong Equation for Reaction Order
                </h3>
                <p className="text-red-800 dark:text-red-200 mb-2">
                  Using a first-order equation for a second-order reaction (or vice versa) will give completely wrong results.
                </p>
                <p className="text-sm text-red-700 dark:text-red-300">
                  <strong>Correct approach:</strong> Always verify the reaction order before choosing the equation.
                </p>
              </div>
            </div>
          </section>

          {/* Quick Reference */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Quick Reference Guide
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-blue-900 dark:text-blue-100">Zero Order</h3>
                <div className="space-y-2 text-sm">
                  <p className="font-mono">[A] = [A]₀ - kt</p>
                  <p className="font-mono">t½ = [A]₀/(2k)</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
                    Plot [A] vs t → line<br/>
                    Slope = -k<br/>
                    Units: M·s⁻¹
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-green-900 dark:text-green-100">First Order</h3>
                <div className="space-y-2 text-sm">
                  <p className="font-mono">[A] = [A]₀e^(-kt)</p>
                  <p className="font-mono">t½ = 0.693/k</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
                    Plot ln[A] vs t → line<br/>
                    Slope = -k<br/>
                    Units: s⁻¹
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-purple-900 dark:text-purple-100">Second Order</h3>
                <div className="space-y-2 text-sm">
                  <p className="font-mono">1/[A] = 1/[A]₀ + kt</p>
                  <p className="font-mono">t½ = 1/(k[A]₀)</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
                    Plot 1/[A] vs t → line<br/>
                    Slope = k<br/>
                    Units: M⁻¹·s⁻¹
                  </p>
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
                        href="/kinetics-calculators/reaction-order-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Reaction Order Calculator</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/kinetics-calculators/collision-theory-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Collision Theory Calculator</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/chemical-reaction-calculators/radioactive-decay-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Radioactive Decay Calculator</span>
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
                          href="/chemistry-formulas/integrated-rate-laws"
                          className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                        >
                          <span>→</span>
                          <span>Integrated Rate Laws</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/chemistry-formulas/rate-law"
                          className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                        >
                          <span>→</span>
                          <span>Rate Law Formula</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <a
                      href="/kinetics-calculators"
                      className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      All Kinetics Calculators →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      </div>
      <Footer />
    </>
  );
}