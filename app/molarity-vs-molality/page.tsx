import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ComparisonTable from '@/components/ComparisonTable';

export const metadata: Metadata = {
  title: 'Molarity vs Molality: Key Differences & When to Use Each | Chemistry Guide',
  description: 'Understand the crucial differences between molarity (M) and molality (m). Learn formulas, temperature dependence, units, and when to use each concentration measure.',
  keywords: ['molarity vs molality', 'molarity molality difference', 'concentration units', 'molar concentration', 'molal concentration', 'temperature dependent concentration']
};

export default function MolarityVsMolalityPage() {
  const comparisonRows = [
    {
      aspect: 'Definition',
      entity1: 'Moles of solute per liter of solution',
      entity2: 'Moles of solute per kilogram of solvent'
    },
    {
      aspect: 'Formula',
      entity1: 'M = n / V',
      entity2: 'm = n / mass of solvent (kg)'
    },
    {
      aspect: 'Units',
      entity1: 'mol/L or M (molar)',
      entity2: 'mol/kg or m (molal)'
    },
    {
      aspect: 'Temperature Dependence',
      entity1: 'Temperature-dependent (volume changes with temperature)',
      entity2: 'Temperature-independent (mass does not change)'
    },
    {
      aspect: 'Typical Use Cases',
      entity1: 'Laboratory work, stoichiometry, titrations',
      entity2: 'Colligative properties, boiling/freezing point calculations'
    },
    {
      aspect: 'Measurement Basis',
      entity1: 'Based on solution volume',
      entity2: 'Based on solvent mass'
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Breadcrumb */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <nav className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <Link href="/" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Home
            </Link>
            <span>→</span>
            <span className="text-gray-900 dark:text-white font-medium">Molarity vs Molality</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
            <h1 className="text-5xl font-bold mb-6 text-center">Molarity vs Molality</h1>
            <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Understanding the critical differences between these two concentration measures is essential for accurate chemistry calculations and choosing the right method for your experiments.
            </p>
          </div>
        </section>

        {/* Quick Summary Table */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Quick Comparison</h2>
          <ComparisonTable 
            entity1Name="Molarity (M)"
            entity2Name="Molality (m)"
            rows={comparisonRows}
          />
        </section>

        {/* What Is Molarity? */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">What Is Molarity?</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-primary-600 dark:text-primary-400">Molarity (M)</strong> is the most commonly used unit of concentration in chemistry. It expresses the number of moles of solute dissolved in one liter of total solution.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              The formula for molarity is: <strong>M = n / V</strong>, where <em>n</em> is the number of moles of solute and <em>V</em> is the volume of solution in liters.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/concentration-and-solution-calculators/molarity-calculator"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-md"
              >
                Molarity Calculator
              </Link>
              <Link 
                href="/chemistry-formulas/molarity-formula"
                className="inline-flex items-center px-6 py-3 bg-secondary-600 text-white font-semibold rounded-lg hover:bg-secondary-700 transition-colors shadow-md"
              >
                Molarity Formula
              </Link>
            </div>
          </div>
        </section>

        {/* What Is Molality? */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">What Is Molality?</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-primary-600 dark:text-primary-400">Molality (m)</strong> is a concentration unit that expresses the number of moles of solute per kilogram of solvent (not solution). Unlike molarity, molality is independent of temperature.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              The formula for molality is: <strong>m = n / mass of solvent (kg)</strong>, where <em>n</em> is the number of moles of solute and the mass is measured in kilograms of pure solvent.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/concentration-and-solution-calculators/molality-calculator"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-md"
              >
                Molality Calculator
              </Link>
              <Link 
                href="/chemistry-formulas/molality-formula"
                className="inline-flex items-center px-6 py-3 bg-secondary-600 text-white font-semibold rounded-lg hover:bg-secondary-700 transition-colors shadow-md"
              >
                Molality Formula
              </Link>
            </div>
          </div>
        </section>

        {/* Key Differences Explained */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Key Differences Explained</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-primary-600 pl-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Temperature Dependence</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  The most critical difference is that <strong>molarity changes with temperature</strong> because liquids expand when heated, increasing volume. Molality remains constant because mass doesn't change with temperature, making it ideal for thermodynamic calculations.
                </p>
              </div>

              <div className="border-l-4 border-secondary-600 pl-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Measurement Basis</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Molarity is based on <strong>solution volume</strong> (solute + solvent), while molality is based on <strong>solvent mass only</strong>. This makes molality more precise for concentrated solutions where the solute significantly affects volume.
                </p>
              </div>

              <div className="border-l-4 border-indigo-600 pl-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Practical Measurement</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Molarity requires volumetric glassware (volumetric flasks, graduated cylinders), while molality requires only a balance to measure mass. Molality can be more convenient when volumetric equipment is unavailable.
                </p>
              </div>

              <div className="border-l-4 border-purple-600 pl-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Calculation Complexity</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Molarity calculations are generally simpler for dilutions and stoichiometry. Molality requires knowing the solvent mass separately, which can be less intuitive but is necessary for colligative property calculations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* When to Use Each */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">When to Use Each</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-primary-700 dark:text-primary-300 mb-4">Use Molarity When:</h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span>Performing titrations and volumetric analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span>Working with aqueous solutions at constant temperature</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span>Calculating stoichiometry in reactions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span>Preparing solutions in the laboratory</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span>Temperature is not a critical variable</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-secondary-700 dark:text-secondary-300 mb-4">Use Molality When:</h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-secondary-600 mr-2">✓</span>
                    <span>Calculating colligative properties (boiling point, freezing point)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-600 mr-2">✓</span>
                    <span>Working with solutions at varying temperatures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-600 mr-2">✓</span>
                    <span>Dealing with concentrated solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-600 mr-2">✓</span>
                    <span>Temperature independence is required</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-600 mr-2">✓</span>
                    <span>Precise thermodynamic calculations are needed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Common Confusions */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Common Confusions</h2>
            
            <div className="space-y-6">
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-red-800 dark:text-red-300 mb-2">❌ Mistake: Using Volume of Solvent Instead of Solution</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  For molarity, use the <strong>total solution volume</strong>, not just the solvent volume. The solute contributes to the total volume.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-red-800 dark:text-red-300 mb-2">❌ Mistake: Confusing Mass of Solution with Mass of Solvent</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  For molality, use only the <strong>mass of pure solvent</strong>, not the total solution mass. This is a common error that significantly affects calculations.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-red-800 dark:text-red-300 mb-2">❌ Mistake: Using Molarity for Colligative Properties</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Colligative property formulas require <strong>molality, not molarity</strong>. Using molarity will give incorrect results for freezing point depression and boiling point elevation.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-red-800 dark:text-red-300 mb-2">❌ Mistake: Assuming They're Interchangeable in Dilute Solutions</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  While molarity and molality are similar in very dilute aqueous solutions, they should not be treated as equivalent. Always use the appropriate measure for your specific calculation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Calculators */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Related Calculators</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link 
                href="/concentration-and-solution-calculators/molarity-calculator"
                className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow border-2 border-primary-200 dark:border-primary-800 hover:border-primary-400"
              >
                <h3 className="text-xl font-bold text-primary-700 dark:text-primary-300 mb-2">Molarity Calculator</h3>
                <p className="text-gray-600 dark:text-gray-400">Calculate molar concentration of solutions</p>
              </Link>
              
              <Link 
                href="/concentration-and-solution-calculators/molality-calculator"
                className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow border-2 border-secondary-200 dark:border-secondary-800 hover:border-secondary-400"
              >
                <h3 className="text-xl font-bold text-secondary-700 dark:text-secondary-300 mb-2">Molality Calculator</h3>
                <p className="text-gray-600 dark:text-gray-400">Calculate molal concentration for colligative properties</p>
              </Link>

              <Link 
                href="/concentration-and-solution-calculators"
                className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow border-2 border-indigo-200 dark:border-indigo-800 hover:border-indigo-400"
              >
                <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-300 mb-2">All Concentration Calculators</h3>
                <p className="text-gray-600 dark:text-gray-400">Explore all solution concentration tools</p>
              </Link>

              <Link 
                href="/concentration-and-solution-calculators/dilution-calculator"
                className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow border-2 border-purple-200 dark:border-purple-800 hover:border-purple-400"
              >
                <h3 className="text-xl font-bold text-purple-700 dark:text-purple-300 mb-2">Dilution Calculator</h3>
                <p className="text-gray-600 dark:text-gray-400">Calculate solution dilutions using molarity</p>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Is molarity the same as molality?</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  No, molarity and molality are different. Molarity is moles per liter of solution, while molality is moles per kilogram of solvent. They have different units, formulas, and applications.
                </p>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Which is more accurate, molarity or molality?</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Neither is inherently more accurate—they serve different purposes. Molality is more accurate for temperature-dependent studies because it doesn't change with temperature. Molarity is more practical for laboratory work and reactions at constant temperature.
                </p>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Which concentration measure depends on temperature?</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Molarity is temperature-dependent because volume changes with temperature. Molality is temperature-independent because mass doesn't change with temperature.
                </p>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Can you convert between molarity and molality?</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Yes, but you need to know the solution density and solvent molecular weight. The conversion is not straightforward and requires additional information beyond just the concentration values.
                </p>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Why use molality instead of molarity for colligative properties?</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Colligative properties depend on the number of particles and temperature effects. Since molality doesn't change with temperature, it provides consistent results for freezing point depression, boiling point elevation, and osmotic pressure calculations.
                </p>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Are molarity and molality approximately equal for dilute solutions?</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  For very dilute aqueous solutions, molarity and molality are numerically similar because 1 liter of water weighs approximately 1 kg. However, this approximation breaks down for concentrated solutions or non-aqueous solvents.
                </p>
              </div>

              <div className="pb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Which is easier to measure in the lab?</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Molarity is generally easier because it uses volumetric glassware (volumetric flasks, pipettes), which is standard in most labs. Molality requires weighing the solvent separately, which can be more time-consuming but doesn't require specialized glassware.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
