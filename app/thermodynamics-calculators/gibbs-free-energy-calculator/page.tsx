import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GibbsFreeEnergyCalculator from '@/components/calculators/GibbsFreeEnergyCalculator';

export const metadata: Metadata = {
  title: 'Gibbs Free Energy Calculator | ΔG = ΔH - TΔS | Spontaneity Predictor',
  description: 'Calculate Gibbs free energy (ΔG) and predict reaction spontaneity from enthalpy, entropy, and temperature. Determine thermodynamic favorability.',
};

export default function GibbsFreeEnergyCalculatorPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <nav className="flex items-center gap-2 text-sm animate-fade-in">
            <Link 
              href="/" 
              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
            >
              Home
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link 
              href="/thermodynamics-calculators" 
              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
            >
              Thermodynamics Calculators
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-500 dark:text-gray-400">Gibbs Free Energy Calculator</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-6 mb-4 animate-fade-in">
            Gibbs Free Energy Calculator
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in animation-delay-100">
            Calculate Gibbs free energy and predict reaction spontaneity using ΔG = ΔH - TΔS
          </p>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Calculator */}
              <GibbsFreeEnergyCalculator />

              {/* Educational Content */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 animate-slide-in-up animation-delay-200">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Understanding Gibbs Free Energy
                </h2>
                
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    Gibbs free energy (ΔG) is one of the most important concepts in thermodynamics, 
                    determining whether a chemical reaction will occur spontaneously. It combines 
                    enthalpy (heat content) and entropy (disorder) to predict the thermodynamic 
                    favorability of reactions under constant temperature and pressure.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    The Gibbs Free Energy Equation
                  </h3>
                  
                  <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg mb-6">
                    <p className="text-center text-2xl font-mono text-gray-900 dark:text-white mb-2">
                      ΔG = ΔH - TΔS
                    </p>
                    <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                      Gibbs-Helmholtz equation
                    </p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="border-l-4 border-primary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">ΔG = Gibbs free energy change (kJ/mol)</p>
                      <p className="text-gray-600 dark:text-gray-400">Determines spontaneity: negative = spontaneous</p>
                    </div>
                    
                    <div className="border-l-4 border-primary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">ΔH = Enthalpy change (kJ/mol)</p>
                      <p className="text-gray-600 dark:text-gray-400">Heat absorbed or released: negative for exothermic reactions</p>
                    </div>

                    <div className="border-l-4 border-primary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">T = Temperature (K)</p>
                      <p className="text-gray-600 dark:text-gray-400">Absolute temperature in Kelvin</p>
                    </div>

                    <div className="border-l-4 border-primary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">ΔS = Entropy change (J/(mol·K))</p>
                      <p className="text-gray-600 dark:text-gray-400">Change in disorder: positive for increasing randomness</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Spontaneity Prediction
                  </h3>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
                    <div className="space-y-4">
                      <div className="border-l-4 border-green-500 pl-4">
                        <p className="font-semibold text-gray-900 dark:text-white mb-2">ΔG &lt; 0 (Negative)</p>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          <strong>Spontaneous reaction</strong> - Thermodynamically favorable<br/>
                          Reaction proceeds forward without external energy input<br/>
                          Products are more stable than reactants
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-yellow-500 pl-4">
                        <p className="font-semibold text-gray-900 dark:text-white mb-2">ΔG = 0 (Zero)</p>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          <strong>At equilibrium</strong> - No net change<br/>
                          Forward and reverse reactions occur at equal rates<br/>
                          ΔG° = -RT ln(K)
                        </p>
                      </div>

                      <div className="border-l-4 border-red-500 pl-4">
                        <p className="font-semibold text-gray-900 dark:text-white mb-2">ΔG &gt; 0 (Positive)</p>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          <strong>Non-spontaneous reaction</strong> - Thermodynamically unfavorable<br/>
                          Requires external energy input to proceed<br/>
                          Reverse reaction is spontaneous
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Practical Example
                  </h3>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">
                      Formation of Water
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      2H₂(g) + O₂(g) → 2H₂O(l)
                    </p>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li><strong>ΔH =</strong> -571.6 kJ/mol (exothermic)</li>
                      <li><strong>ΔS =</strong> -326.8 J/(mol·K) (decrease in disorder)</li>
                      <li><strong>T =</strong> 298.15 K (25°C)</li>
                    </ul>
                    <p className="mt-4 text-gray-700 dark:text-gray-300">
                      ΔG = -571.6 - (298.15 × -326.8 / 1000)<br/>
                      ΔG = -571.6 - (-97.5)<br/>
                      ΔG = -571.6 + 97.5<br/>
                      ΔG = <strong>-474.1 kJ/mol</strong>
                    </p>
                    <p className="mt-2 text-sm text-green-600 dark:text-green-400 font-semibold">
                      ΔG &lt; 0: The formation of water is spontaneous despite the decrease in entropy!
                    </p>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Temperature Dependence
                  </h3>

                  <div className="overflow-x-auto mb-6">
                    <table className="min-w-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg">
                      <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>
                          <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900 dark:text-white">ΔH</th>
                          <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900 dark:text-white">ΔS</th>
                          <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900 dark:text-white">ΔG</th>
                          <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900 dark:text-white">Spontaneity</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm text-gray-700 dark:text-gray-300">
                        <tr className="border-t border-gray-200 dark:border-gray-600">
                          <td className="px-4 py-2">Negative</td>
                          <td className="px-4 py-2">Positive</td>
                          <td className="px-4 py-2">Always negative</td>
                          <td className="px-4 py-2 text-green-600 dark:text-green-400">Always spontaneous</td>
                        </tr>
                        <tr className="border-t border-gray-200 dark:border-gray-600">
                          <td className="px-4 py-2">Positive</td>
                          <td className="px-4 py-2">Negative</td>
                          <td className="px-4 py-2">Always positive</td>
                          <td className="px-4 py-2 text-red-600 dark:text-red-400">Never spontaneous</td>
                        </tr>
                        <tr className="border-t border-gray-200 dark:border-gray-600">
                          <td className="px-4 py-2">Negative</td>
                          <td className="px-4 py-2">Negative</td>
                          <td className="px-4 py-2">Temperature dependent</td>
                          <td className="px-4 py-2 text-blue-600 dark:text-blue-400">Spontaneous at low T</td>
                        </tr>
                        <tr className="border-t border-gray-200 dark:border-gray-600">
                          <td className="px-4 py-2">Positive</td>
                          <td className="px-4 py-2">Positive</td>
                          <td className="px-4 py-2">Temperature dependent</td>
                          <td className="px-4 py-2 text-blue-600 dark:text-blue-400">Spontaneous at high T</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Key Concepts
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        🔥 Enthalpy-Driven
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Exothermic reactions (ΔH &lt; 0) tend to be spontaneous
                      </p>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        🎲 Entropy-Driven
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Reactions increasing disorder (ΔS &gt; 0) are favored
                      </p>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        🌡️ Temperature Effect
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        TΔS term increases with temperature
                      </p>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        ⚖️ Equilibrium
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        ΔG° = -RT ln(K) relates G to equilibrium constant
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Applications
                  </h3>
                  
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-primary-600 dark:text-primary-400 mt-1">⚗️</span>
                      <div>
                        <strong>Chemical Synthesis:</strong> Predict which reactions will occur spontaneously and optimize conditions
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-600 dark:text-primary-400 mt-1">💊</span>
                      <div>
                        <strong>Biochemistry:</strong> Understand metabolism, ATP hydrolysis, and coupled reactions in cells
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-600 dark:text-primary-400 mt-1">🔋</span>
                      <div>
                        <strong>Electrochemistry:</strong> Calculate cell potentials from ΔG = -nFE
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-600 dark:text-primary-400 mt-1">🏭</span>
                      <div>
                        <strong>Industrial Processes:</strong> Design efficient chemical plants (Haber, contact processes)
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-600 dark:text-primary-400 mt-1">🌡️</span>
                      <div>
                        <strong>Phase Transitions:</strong> Predict melting, boiling, and sublimation temperatures
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-600 dark:text-primary-400 mt-1">🔬</span>
                      <div>
                        <strong>Materials Science:</strong> Design new materials with desired thermodynamic properties
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Quick Reference */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 animate-slide-in-up animation-delay-300">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="text-2xl">⚡</span>
                    Quick Reference
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Units:</p>
                      <p className="text-gray-600 dark:text-gray-400">kJ/mol, J/(mol·K), K</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Formula:</p>
                      <p className="text-gray-600 dark:text-gray-400">ΔG = ΔH - TΔS</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Spontaneity:</p>
                      <p className="text-gray-600 dark:text-gray-400">ΔG &lt; 0: spontaneous<br/>ΔG &gt; 0: non-spontaneous</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Standard T:</p>
                      <p className="text-gray-600 dark:text-gray-400">298.15 K (25°C)</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Level:</p>
                      <p className="text-gray-600 dark:text-gray-400">College Chemistry</p>
                    </div>
                  </div>
                </div>

                {/* Related Calculators */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 animate-slide-in-up animation-delay-400">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="text-2xl">🔗</span>
                    Related Calculators
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <Link 
                        href="/thermodynamics-calculators/boiling-point-elevation-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                      >
                        Boiling Point Elevation
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/thermodynamics-calculators/freezing-point-depression-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                      >
                        Freezing Point Depression
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/chemical-reaction-calculators/equilibrium-constant-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                      >
                        Equilibrium Constant
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/electrochemistry-calculators/nernst-equation-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                      >
                        Nernst Equation
                      </Link>
                    </li>
                  </ul>
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <span className="text-2xl">📐</span>
                      Related Formulas
                    </h3>
                    <ul className="space-y-3">
                      <li>
                        <Link 
                          href="/chemistry-formulas/gibbs-free-energy-formula"
                          className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                        >
                          Gibbs Free Energy Formula
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="/chemistry-formulas/entropy-formula"
                          className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                        >
                          Entropy Formula
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <ul className="space-y-3 mt-6">
                    <li>
                      <Link 
                        href="/thermodynamics-calculators"
                        className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors font-semibold"
                      >
                        All Thermodynamics Calculators →
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Where It's Used */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 animate-slide-in-up animation-delay-500">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="text-2xl">🎯</span>
                    Where It&apos;s Used
                  </h3>
                  <ul className="space-y-4 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="text-xl">⚗️</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Chemical Synthesis</p>
                        <p className="text-gray-600 dark:text-gray-400">Predicting reaction feasibility</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">💊</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Biochemistry</p>
                        <p className="text-gray-600 dark:text-gray-400">Metabolic pathway analysis</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">🏭</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Industrial Chemistry</p>
                        <p className="text-gray-600 dark:text-gray-400">Process optimization</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">🔋</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Electrochemistry</p>
                        <p className="text-gray-600 dark:text-gray-400">Battery and fuel cell design</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
