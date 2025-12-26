import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MolecularWeightCalculator from '@/components/calculators/MolecularWeightCalculator';

export const metadata: Metadata = {
  title: 'Molecular Weight Calculator | Molar Mass Calculator | Formula Weight',
  description: 'Calculate molecular weight and molar mass from chemical formulas. Get composition breakdown and percent composition for any molecule.',
};

export default function MolecularWeightCalculatorPage() {
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
            <Link href="/stoichiometry-calculators" className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors">
              Stoichiometry Calculators
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-500 dark:text-gray-400">Molecular Weight Calculator</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-6 mb-4 animate-fade-in">
            Molecular Weight Calculator
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in animation-delay-100">
            Calculate molecular weight and molar mass from chemical formulas
          </p>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 space-y-8">
              <MolecularWeightCalculator />

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 animate-slide-in-up animation-delay-200">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Understanding Molecular Weight
                </h2>
                
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    Molecular weight (also called molar mass or formula weight) is the sum of the atomic masses 
                    of all atoms in a molecule. It&apos;s expressed in grams per mole (g/mol) and is essential for 
                    converting between mass and moles in chemistry calculations.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    How to Calculate Molecular Weight
                  </h3>

                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      <strong>Example: Water (H₂O)</strong>
                    </p>

                    <div className="space-y-3 text-gray-700 dark:text-gray-300">
                      <p><strong>Step 1:</strong> Identify elements and their quantities</p>
                      <ul className="list-disc list-inside ml-4">
                        <li>Hydrogen (H): 2 atoms</li>
                        <li>Oxygen (O): 1 atom</li>
                      </ul>

                      <p className="mt-3"><strong>Step 2:</strong> Find atomic masses</p>
                      <ul className="list-disc list-inside ml-4">
                        <li>H: 1.008 g/mol</li>
                        <li>O: 16.00 g/mol</li>
                      </ul>

                      <p className="mt-3"><strong>Step 3:</strong> Calculate total mass</p>
                      <div className="font-mono bg-white dark:bg-gray-600 p-3 rounded">
                        MW = (2 × 1.008) + (1 × 16.00)<br />
                        MW = 2.016 + 16.00<br />
                        <span className="text-tertiary-600 dark:text-tertiary-400 font-bold">MW = 18.016 g/mol</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Common Molecular Weights
                  </h3>

                  <div className="overflow-x-auto mb-6">
                    <table className="min-w-full border border-gray-300 dark:border-gray-600">
                      <thead className="bg-gray-100 dark:bg-gray-700">
                        <tr>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Compound</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Formula</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">MW (g/mol)</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        <tr><td className="border px-4 py-2">Water</td><td className="border px-4 py-2">H₂O</td><td className="border px-4 py-2">18.02</td></tr>
                        <tr className="bg-gray-50 dark:bg-gray-700/50"><td className="border px-4 py-2">Carbon Dioxide</td><td className="border px-4 py-2">CO₂</td><td className="border px-4 py-2">44.01</td></tr>
                        <tr><td className="border px-4 py-2">Sodium Chloride</td><td className="border px-4 py-2">NaCl</td><td className="border px-4 py-2">58.44</td></tr>
                        <tr className="bg-gray-50 dark:bg-gray-700/50"><td className="border px-4 py-2">Glucose</td><td className="border px-4 py-2">C₆H₁₂O₆</td><td className="border px-4 py-2">180.16</td></tr>
                        <tr><td className="border px-4 py-2">Sulfuric Acid</td><td className="border px-4 py-2">H₂SO₄</td><td className="border px-4 py-2">98.08</td></tr>
                        <tr className="bg-gray-50 dark:bg-gray-700/50"><td className="border px-4 py-2">Caffeine</td><td className="border px-4 py-2">C₈H₁₀N₄O₂</td><td className="border px-4 py-2">194.19</td></tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Using Molecular Weight in Calculations
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Mass to Moles</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 font-mono">
                        moles = mass (g) / MW (g/mol)
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        Example: 36 g H₂O = 36 / 18.02 = 2.0 moles
                      </p>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Moles to Mass</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 font-mono">
                        mass (g) = moles × MW (g/mol)
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        Example: 0.5 mol CO₂ = 0.5 × 44.01 = 22 g
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Applications
                  </h3>
                  
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">⚖️</span>
                      <div>
                        <strong>Stoichiometry:</strong> Converting between mass and moles in chemical equations
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🧪</span>
                      <div>
                        <strong>Solution Preparation:</strong> Calculating mass needed for specific molar concentrations
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🔬</span>
                      <div>
                        <strong>Analytical Chemistry:</strong> Determining composition and purity of compounds
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">💊</span>
                      <div>
                        <strong>Pharmaceuticals:</strong> Drug dosage calculations and formulation
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
                    <span className="text-2xl">⚖️</span>
                    Quick Reference
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Units:</p>
                      <p className="text-gray-600 dark:text-gray-400">g/mol or amu/molecule</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Formula:</p>
                      <p className="text-gray-600 dark:text-gray-400">Sum of atomic masses</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">1 mole:</p>
                      <p className="text-gray-600 dark:text-gray-400">6.022 × 10²³ molecules</p>
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
                      <Link href="/stoichiometry-calculators/stoichiometry-calculator" className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors">
                        Stoichiometry Calculator
                      </Link>
                    </li>
                    <li>
                      <Link href="/stoichiometry-calculators/empirical-formula-calculator" className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors">
                        Empirical Formula
                      </Link>
                    </li>
                    <li>
                      <Link href="/concentration-and-solution-calculators/molarity-calculator" className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors">
                        Molarity Calculator
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
                        <Link href="/chemistry-formulas/molecular-weight-formula" className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors">
                          Molecular Weight Formula
                        </Link>
                      </li>
                      <li>
                        <Link href="/chemistry-formulas/molecular-weight-formula" className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors">
                          Molar Mass Formula
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <ul className="space-y-3 mt-6">
                    <li>
                      <Link href="/stoichiometry-calculators" className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors font-semibold">
                        All Stoichiometry Calculators →
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
                      <span className="text-xl">🧪</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Lab Work</p>
                        <p className="text-gray-600 dark:text-gray-400">Solution preparation</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">⚖️</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Stoichiometry</p>
                        <p className="text-gray-600 dark:text-gray-400">Mass-mole conversions</p>
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
