import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EnthalpyReactionCalculator from '@/components/calculators/EnthalpyReactionCalculator';

export const metadata: Metadata = {
  title: 'Enthalpy of Reaction Calculator | ΔH Calculator | Heat of Reaction',
  description: 'Calculate enthalpy of reaction using formation enthalpies or bond energies. Determine if reactions are exothermic or endothermic.',
};

export default function EnthalpyReactionCalculatorPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-tertiary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <nav className="flex items-center gap-2 text-sm animate-fade-in">
            <Link href="/" className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors">
              Home
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/thermodynamics-calculators" className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors">
              Thermodynamics Calculators
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-500 dark:text-gray-400">Enthalpy of Reaction Calculator</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-6 mb-4 animate-fade-in">
            Enthalpy of Reaction Calculator
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in animation-delay-100">
            Calculate heat of reaction using formation enthalpies or bond energies
          </p>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 space-y-8">
              <EnthalpyReactionCalculator />

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 animate-slide-in-up animation-delay-200">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Understanding Enthalpy of Reaction
                </h2>
                
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    Enthalpy of reaction (ΔH°<sub>rxn</sub>) is the heat absorbed or released during a chemical reaction 
                    at constant pressure. It&apos;s a key thermodynamic property that determines whether reactions release 
                    or absorb energy.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Methods to Calculate ΔH°<sub>rxn</sub>
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Method 1: Formation Enthalpies</h4>
                      <div className="font-mono bg-white dark:bg-gray-600 p-3 rounded mb-2">
                        ΔH°<sub>rxn</sub> = Σn·ΔH°<sub>f</sub>(products) - Σm·ΔH°<sub>f</sub>(reactants)
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Sum of formation enthalpies of products minus sum of formation enthalpies of reactants, 
                        each multiplied by stoichiometric coefficients.
                      </p>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Method 2: Bond Energies</h4>
                      <div className="font-mono bg-white dark:bg-gray-600 p-3 rounded mb-2">
                        ΔH°<sub>rxn</sub> = Σ(Bonds Broken) - Σ(Bonds Formed)
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Energy required to break bonds minus energy released when forming bonds.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Example: Combustion of Methane
                  </h3>

                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      <strong>Reaction:</strong> CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l)
                    </p>

                    <div className="space-y-3 text-gray-700 dark:text-gray-300">
                      <p><strong>Given ΔH°<sub>f</sub> values (kJ/mol):</strong></p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>CH₄(g): -74.8</li>
                        <li>O₂(g): 0 (element in standard state)</li>
                        <li>CO₂(g): -393.5</li>
                        <li>H₂O(l): -285.8</li>
                      </ul>

                      <p className="mt-4"><strong>Calculation:</strong></p>
                      <div className="font-mono bg-white dark:bg-gray-600 p-3 rounded">
                        ΔH°<sub>rxn</sub> = [1(-393.5) + 2(-285.8)] - [1(-74.8) + 2(0)]<br />
                        ΔH°<sub>rxn</sub> = [-393.5 - 571.6] - [-74.8]<br />
                        ΔH°<sub>rxn</sub> = -965.1 + 74.8<br />
                        <span className="text-red-600 dark:text-red-400 font-bold">ΔH°<sub>rxn</sub> = -890.3 kJ/mol</span>
                      </div>

                      <p className="mt-3 text-sm text-red-600 dark:text-red-400">
                        <strong>Exothermic:</strong> 890.3 kJ of heat released per mole of CH₄ burned
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Common Standard Formation Enthalpies
                  </h3>

                  <div className="overflow-x-auto mb-6">
                    <table className="min-w-full border border-gray-300 dark:border-gray-600">
                      <thead className="bg-gray-100 dark:bg-gray-700">
                        <tr>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Substance</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">ΔH°<sub>f</sub> (kJ/mol)</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">State</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        <tr><td className="border px-4 py-2">H₂O</td><td className="border px-4 py-2">-285.8</td><td className="border px-4 py-2">liquid</td></tr>
                        <tr className="bg-gray-50 dark:bg-gray-700/50"><td className="border px-4 py-2">H₂O</td><td className="border px-4 py-2">-241.8</td><td className="border px-4 py-2">gas</td></tr>
                        <tr><td className="border px-4 py-2">CO₂</td><td className="border px-4 py-2">-393.5</td><td className="border px-4 py-2">gas</td></tr>
                        <tr className="bg-gray-50 dark:bg-gray-700/50"><td className="border px-4 py-2">NH₃</td><td className="border px-4 py-2">-45.9</td><td className="border px-4 py-2">gas</td></tr>
                        <tr><td className="border px-4 py-2">CH₄</td><td className="border px-4 py-2">-74.8</td><td className="border px-4 py-2">gas</td></tr>
                        <tr className="bg-gray-50 dark:bg-gray-700/50"><td className="border px-4 py-2">NaCl</td><td className="border px-4 py-2">-411.2</td><td className="border px-4 py-2">solid</td></tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Applications
                  </h3>
                  
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🔥</span>
                      <div>
                        <strong>Energy Production:</strong> Calculating heat output from fuels and combustion
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🏭</span>
                      <div>
                        <strong>Industrial Processes:</strong> Designing energy-efficient chemical plants
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🌡️</span>
                      <div>
                        <strong>Thermal Management:</strong> Predicting temperature changes in reactors
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">♻️</span>
                      <div>
                        <strong>Environmental Science:</strong> Understanding energy flows in ecosystems
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 animate-slide-in-up animation-delay-300">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="text-2xl">🌡️</span>
                    Quick Reference
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Exothermic:</p>
                      <p className="text-gray-600 dark:text-gray-400">ΔH &lt; 0 (heat released)</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Endothermic:</p>
                      <p className="text-gray-600 dark:text-gray-400">ΔH &gt; 0 (heat absorbed)</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Elements:</p>
                      <p className="text-gray-600 dark:text-gray-400">ΔH°<sub>f</sub> = 0 in standard state</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 animate-slide-in-up animation-delay-400">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="text-2xl">🔗</span>
                    Related Calculators
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/thermodynamics-calculators/gibbs-free-energy-calculator" className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors">
                        Gibbs Free Energy
                      </Link>
                    </li>
                    <li>
                      <Link href="/stoichiometry-calculators/stoichiometry-calculator" className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors">
                        Stoichiometry Calculator
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors font-semibold">
                        View All Calculators →
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 animate-slide-in-up animation-delay-500">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="text-2xl">🎯</span>
                    Where It&apos;s Used
                  </h3>
                  <ul className="space-y-4 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="text-xl">🔥</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Combustion</p>
                        <p className="text-gray-600 dark:text-gray-400">Fuel energy calculations</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">🏭</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Industry</p>
                        <p className="text-gray-600 dark:text-gray-400">Process optimization</p>
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
