import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Transition State Theory Formula | Activated Complex & Eyring Equation',
  description: 'Transition state theory, activated complex, Eyring equation, activation energy, and reaction coordinate diagrams.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/transition-state-theory-formula',
  },
  keywords: ['transition state theory', 'activated complex', 'Eyring equation', 'activation energy', 'reaction coordinate']
};

export default function TransitionStateTheoryFormulaPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <nav className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <Link href="/">Home</Link>
            <span>â†’</span>
            <Link href="/chemistry-formulas">Chemistry Formulas</Link>
            <span>â†’</span>
            <span className="text-gray-900 dark:text-white font-medium">Transition State Theory</span>
          </nav>
        </div>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
            <h1 className="text-5xl font-bold mb-4 text-center">Transition State Theory</h1>
            <p className="text-xl text-center text-red-100">
              Activated Complex Theory & Reaction Dynamics
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-l-4 border-indigo-500">
            <h2 className="text-3xl font-bold mb-6">Core Concepts</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/30 dark:to-rose-900/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-900 dark:text-red-300 mb-3">Transition State (Activated Complex)</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  A high-energy, unstable arrangement of atoms at the peak of the reaction coordinate, denoted â€¡
                </p>
                <div className="bg-white dark:bg-gray-700 rounded p-4 font-mono text-center">
                  Reactants â†’ [Transition State]â€¡ â†’ Products
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-3">Activation Energy (E<sub>a</sub> or Î”Gâ€¡)</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  The minimum energy required to reach the transition state
                </p>
                <div className="bg-white dark:bg-gray-700 rounded p-4 my-3">
                  <p className="text-sm"><strong>Arrhenius:</strong> E<sub>a</sub> (energy barrier)</p>
                  <p className="text-sm"><strong>TST:</strong> Î”Gâ€¡ (free energy of activation)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Eyring Equation</h2>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-4">The Fundamental Equation of TST</h3>
              <div className="bg-white dark:bg-gray-700 rounded p-6 my-4">
                <p className="text-3xl font-bold text-center mb-4">k = (Îº k<sub>B</sub>T / h) Ã— e<sup>-Î”Gâ€¡/RT</sup></p>
              </div>
              
              <div className="space-y-3 text-gray-700 dark:text-gray-300 mt-6">
                <p><strong>k</strong> = rate constant (sâ»Â¹ or Mâ»Â¹sâ»Â¹)</p>
                <p><strong>Îº</strong> = transmission coefficient (usually â‰ˆ 1)</p>
                <p><strong>k<sub>B</sub></strong> = Boltzmann constant = 1.381 Ã— 10â»Â²Â³ J/K</p>
                <p><strong>h</strong> = Planck's constant = 6.626 Ã— 10â»Â³â´ JÂ·s</p>
                <p><strong>T</strong> = temperature (K)</p>
                <p><strong>Î”Gâ€¡</strong> = Gibbs free energy of activation (J/mol)</p>
                <p><strong>R</strong> = gas constant = 8.314 J/(molÂ·K)</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">Alternative Forms</h3>
              
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-700 rounded p-4">
                  <p className="font-bold mb-2">Using entropy and enthalpy:</p>
                  <p className="text-2xl font-bold text-center my-3">k = (Îº k<sub>B</sub>T / h) Ã— e<sup>Î”Sâ€¡/R</sup> Ã— e<sup>-Î”Hâ€¡/RT</sup></p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Since Î”Gâ€¡ = Î”Hâ€¡ - TÎ”Sâ€¡</p>
                </div>

                <div className="bg-white dark:bg-gray-700 rounded p-4">
                  <p className="font-bold mb-2">Logarithmic form:</p>
                  <p className="text-lg font-bold text-center my-3">ln(k/T) = ln(Îºk<sub>B</sub>/h) + Î”Sâ€¡/R - Î”Hâ€¡/RT</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Useful for Eyring plots</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Activation Parameters</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-3">Î”Hâ€¡ (Enthalpy of Activation)</h3>
                <div className="bg-white dark:bg-gray-700 rounded p-4 my-3">
                  <p className="text-xl font-bold text-center">Î”Hâ€¡ = E<sub>a</sub> - RT</p>
                </div>
                <p className="text-gray-700 dark:text-gray-300">Energy difference between reactants and transition state</p>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-amber-900 dark:text-amber-300 mb-3">Î”Sâ€¡ (Entropy of Activation)</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Change in disorder when forming transition state
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Î”Sâ€¡ &gt; 0:</strong> Transition state is more disordered (rare)</p>
                  <p><strong>Î”Sâ€¡ &lt; 0:</strong> Transition state is more ordered (common - molecules come together)</p>
                  <p><strong>Î”Sâ€¡ â‰ˆ 0:</strong> Little change in disorder</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-300 mb-3">Î”Gâ€¡ (Gibbs Free Energy of Activation)</h3>
                <div className="bg-white dark:bg-gray-700 rounded p-4 my-3">
                  <p className="text-xl font-bold text-center">Î”Gâ€¡ = Î”Hâ€¡ - TÎ”Sâ€¡</p>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Overall barrier to reaction; determines rate constant
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Eyring Plot</h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">Determining Activation Parameters Experimentally</h3>
              
              <div className="bg-white dark:bg-gray-700 rounded p-6 my-4">
                <p className="text-xl font-bold text-center mb-4">ln(k/T) vs (1/T)</p>
                <p className="text-center mt-4">Slope = -Î”Hâ€¡/R</p>
                <p className="text-center">Intercept = ln(Îºk<sub>B</sub>/h) + Î”Sâ€¡/R</p>
              </div>
              
              <div className="mt-6 space-y-3 text-gray-700 dark:text-gray-300">
                <p><strong>Method:</strong></p>
                <p className="ml-6">1. Measure rate constant k at various temperatures</p>
                <p className="ml-6">2. Plot ln(k/T) vs 1/T</p>
                <p className="ml-6">3. Extract Î”Hâ€¡ from slope</p>
                <p className="ml-6">4. Extract Î”Sâ€¡ from intercept</p>
                <p className="ml-6">5. Calculate Î”Gâ€¡ = Î”Hâ€¡ - TÎ”Sâ€¡</p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Reaction Coordinate Diagram</h2>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-4">Energy Profile</h3>
              
              <div className="bg-white dark:bg-gray-700 rounded p-6 my-4">
                <pre className="text-sm font-mono overflow-x-auto">
{`    Energy
      â†‘
      |         [â€¡]  â† Transition State
      |        /  \\
      |       /    \\
      |      /      \\
      |  R  /        \\  P
      |    /          \\
      |___/_______Î”G___\\______â†’
           Reaction Coordinate
`}
                </pre>
              </div>
              
              <div className="space-y-3 text-gray-700 dark:text-gray-300 mt-4">
                <p><strong>Key Features:</strong></p>
                <p className="ml-6">â€¢ <strong>R:</strong> Reactants (initial state)</p>
                <p className="ml-6">â€¢ <strong>[â€¡]:</strong> Transition state (highest energy)</p>
                <p className="ml-6">â€¢ <strong>P:</strong> Products (final state)</p>
                <p className="ml-6">â€¢ <strong>Î”Gâ€¡:</strong> Activation barrier (R to â€¡)</p>
                <p className="ml-6">â€¢ <strong>Î”G:</strong> Overall reaction free energy (R to P)</p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Worked Examples</h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">Example 1: Calculate Rate Constant from Î”Gâ€¡</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> Calculate k at 298 K if Î”Gâ€¡ = 85 kJ/mol (assume Îº = 1).</p>
                  
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">k = (k<sub>B</sub>T/h) Ã— e<sup>-Î”Gâ€¡/RT</sup></p>
                  <p className="ml-6">k<sub>B</sub>/h = (1.381Ã—10â»Â²Â³)/(6.626Ã—10â»Â³â´) = 2.084Ã—10Â¹â° sâ»Â¹Kâ»Â¹</p>
                  <p className="ml-6">Î”Gâ€¡ = 85,000 J/mol</p>
                  <p className="ml-6 mt-2">k = (2.084Ã—10Â¹â°)(298) Ã— e<sup>-85000/(8.314Ã—298)</sup></p>
                  <p className="ml-6">k = 6.21Ã—10Â¹Â² Ã— e<sup>-34.31</sup></p>
                  <p className="ml-6">k = 6.21Ã—10Â¹Â² Ã— 1.08Ã—10â»Â¹âµ</p>
                  
                  <p className="ml-6 font-bold text-green-600 text-xl mt-4">k = 6.7Ã—10â»Â³ sâ»Â¹</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-4">Example 2: Calculate Î”Gâ€¡ Components</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> A reaction has Î”Hâ€¡ = 75 kJ/mol and Î”Sâ€¡ = -45 J/(molÂ·K). Calculate Î”Gâ€¡ at 300 K.</p>
                  
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">Î”Gâ€¡ = Î”Hâ€¡ - TÎ”Sâ€¡</p>
                  <p className="ml-6">Î”Gâ€¡ = 75,000 J/mol - (300 K)(-45 J/(molÂ·K))</p>
                  <p className="ml-6">Î”Gâ€¡ = 75,000 + 13,500</p>
                  
                  <p className="ml-6 font-bold text-green-600 text-xl mt-4">Î”Gâ€¡ = 88.5 kJ/mol</p>
                  
                  <p className="mt-4 text-sm"><strong>Note:</strong> Negative Î”Sâ€¡ indicates a more ordered transition state (common for bimolecular reactions).</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-4">Example 3: Relationship to Arrhenius</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> If E<sub>a</sub> = 90 kJ/mol, what is Î”Hâ€¡ at 298 K?</p>
                  
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">Î”Hâ€¡ = E<sub>a</sub> - RT</p>
                  <p className="ml-6">Î”Hâ€¡ = 90,000 - (8.314)(298)</p>
                  <p className="ml-6">Î”Hâ€¡ = 90,000 - 2,478</p>
                  
                  <p className="ml-6 font-bold text-green-600 text-xl mt-4">Î”Hâ€¡ = 87.5 kJ/mol</p>
                  
                  <p className="mt-4 text-sm"><strong>Note:</strong> Î”Hâ€¡ and E<sub>a</sub> differ by ~2.5 kJ/mol at room temperature.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">TST vs Arrhenius</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-red-100 to-pink-100 dark:from-red-900/50 dark:to-pink-900/50">
                    <th className="p-3 text-left font-bold">Aspect</th>
                    <th className="p-3 text-left font-bold">Arrhenius</th>
                    <th className="p-3 text-left font-bold">TST (Eyring)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="p-3 font-bold">Equation</td>
                    <td className="p-3 font-mono">k = Ae<sup>-Ea/RT</sup></td>
                    <td className="p-3 font-mono">k = (k<sub>B</sub>T/h)e<sup>-Î”Gâ€¡/RT</sup></td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="p-3 font-bold">Barrier</td>
                    <td className="p-3">E<sub>a</sub> (energy)</td>
                    <td className="p-3">Î”Gâ€¡ (free energy)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Pre-exponential</td>
                    <td className="p-3">A (empirical)</td>
                    <td className="p-3">k<sub>B</sub>T/h (theoretical)</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="p-3 font-bold">Entropy</td>
                    <td className="p-3">Not explicit</td>
                    <td className="p-3">Î”Sâ€¡ (explicit)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Plot</td>
                    <td className="p-3">ln k vs 1/T</td>
                    <td className="p-3">ln(k/T) vs 1/T</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Common Mistakes</h2>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">âš ï¸</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Confusing E<sub>a</sub> and Î”Gâ€¡</h3>
                  <p className="text-gray-700 dark:text-gray-300">E<sub>a</sub> is energy; Î”Gâ€¡ is free energy (includes entropy!)</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">âš ï¸</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Wrong Units</h3>
                  <p className="text-gray-700 dark:text-gray-300">Î”Hâ€¡ in J/mol, Î”Sâ€¡ in J/(molÂ·K) - watch conversion!</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">âš ï¸</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Forgetting Temperature Dependence</h3>
                  <p className="text-gray-700 dark:text-gray-300">k<sub>B</sub>T/h term makes TST temperature-dependent even without exponential!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Related Tools</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/chemical-reaction-calculators/arrhenius-calculator" className="block p-6 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Arrhenius Equation Calculator</h3>
                <p className="text-red-100">Calculate activation energy</p>
              </Link>
              <Link href="/chemical-reaction-calculators" className="block p-6 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Reaction Rate Calculator</h3>
                <p className="text-red-100">Kinetics calculations</p>
              </Link>
              <Link href="/chemistry-formulas/reaction-rate-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Reaction Rate</h3>
                <p className="text-gray-600 dark:text-gray-400">Kinetics fundamentals</p>
              </Link>
              <Link href="/chemistry-formulas/gibbs-free-energy-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Gibbs Free Energy</h3>
                <p className="text-gray-600 dark:text-gray-400">Thermodynamics</p>
              </Link>
              <Link href="/chemistry-formulas/rate-law" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Rate Law</h3>
                <p className="text-gray-600 dark:text-gray-400">Kinetics fundamentals</p>
              </Link>
              <Link href="/chemical-reaction-calculators" className="block p-6 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">All Kinetics Calculators</h3>
                <p className="text-gray-100">Explore all chemical kinetics tools</p>
              </Link>
            </div>
          </div>
        </section>
      
      {/* Structured Data - EducationalArticle */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": "Transition State Theory Formula",
            "description": "Transition State Theory Formula on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/transition-state-theory-formula",
            "author": {
              "@type": "Person",
              "name": "Muhammad Zohaib",
              "jobTitle": "Chemist"
            },
            "publisher": {
              "@type": "EducationalOrganization",
              "name": "ChemSolved",
              "url": "https://chemsolved.com"
            },
            "educationalLevel": "University",
            "educationalUse": "Reference"
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
                "name": "Transition State Theory Formula",
                "item": "https://chemsolved.com/chemistry-formulas/transition-state-theory-formula"
              }
            ]
          })
        }}
      />
      </main>
      <Footer />
    </>
  );
}
