import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ComparisonTable from '@/components/ComparisonTable';

export const metadata: Metadata = {
  title: 'Mass Percent vs Mole Fraction: Key Differences & Conversions | Chemistry Guide',
  description: 'Compare mass percent and mole fraction concentration units. Learn definitions, formulas, conversions, and when to use each in chemistry calculations.',
  keywords: ['mass percent vs mole fraction', 'weight percent', 'mole fraction', 'concentration units', 'composition', 'solution chemistry']
};

export default function MassPercentVsMoleFractionPage() {
  const comparisonRows = [
    {
      aspect: 'Definition',
      entity1: 'Mass of component divided by total mass × 100',
      entity2: 'Moles of component divided by total moles'
    },
    {
      aspect: 'Formula',
      entity1: '(mass of component / total mass) × 100%',
      entity2: 'χ = moles of component / total moles'
    },
    {
      aspect: 'Units',
      entity1: 'Percentage (%) or dimensionless fraction',
      entity2: 'Dimensionless (0 to 1)'
    },
    {
      aspect: 'Symbol',
      entity1: '% or w/w',
      entity2: 'χ (chi) or X'
    },
    {
      aspect: 'Sum of All Components',
      entity1: 'Equals 100%',
      entity2: 'Equals 1.0'
    },
    {
      aspect: 'Typical Use Cases',
      entity1: 'Commercial products, alloys, percent composition',
      entity2: 'Vapor pressure, Raoult\'s law, ideal gas mixtures'
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
            <span className="text-gray-900 dark:text-white font-medium">Mass Percent vs Mole Fraction</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
            <h1 className="text-5xl font-bold mb-6 text-center">Mass Percent vs Mole Fraction</h1>
            <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Understanding when to use mass-based versus mole-based composition is critical for accurate chemistry calculations, especially in solutions and gas mixtures.
            </p>
          </div>
        </section>

        {/* Quick Summary Table */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Quick Comparison</h2>
          <ComparisonTable 
            entity1Name="Mass Percent (%)"
            entity2Name="Mole Fraction (χ)"
            rows={comparisonRows}
          />
        </section>

        {/* What Is Mass Percent? */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">What Is Mass Percent?</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-primary-600 dark:text-primary-400">Mass percent (mass %)</strong>, also called weight percent, expresses the concentration of a component as a percentage of the total mass. It answers the question: "What percentage of the total mass does this component contribute?"
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              The formula is: <strong>Mass % = (mass of component / total mass) × 100%</strong>
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              For example: A solution with 10 g of salt in 90 g of water has a mass percent of (10 / 100) × 100% = 10% salt by mass.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/concentration-and-solution-calculators/mass-percent-calculator"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-md"
              >
                Mass Percent Calculator
              </Link>
              <Link 
                href="/chemistry-formulas/mass-percent-formula"
                className="inline-flex items-center px-6 py-3 bg-secondary-600 text-white font-semibold rounded-lg hover:bg-secondary-700 transition-colors shadow-md"
              >
                Mass Percent Formula
              </Link>
            </div>
          </div>
        </section>

        {/* What Is Mole Fraction? */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">What Is Mole Fraction?</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-primary-600 dark:text-primary-400">Mole fraction (χ)</strong> expresses the ratio of moles of one component to the total moles of all components in a mixture. It's a dimensionless number between 0 and 1.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              The formula is: <strong>χ = moles of component / total moles of all components</strong>
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              For example: In a mixture of 2 moles of nitrogen and 3 moles of oxygen, the mole fraction of nitrogen is 2 / (2 + 3) = 0.4.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/concentration-and-solution-calculators/mole-fraction-calculator"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-md"
              >
                Mole Fraction Calculator
              </Link>
              <Link 
                href="/chemistry-formulas/mole-fraction-formula"
                className="inline-flex items-center px-6 py-3 bg-secondary-600 text-white font-semibold rounded-lg hover:bg-secondary-700 transition-colors shadow-md"
              >
                Mole Fraction Formula
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
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Basis of Measurement</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>Mass percent</strong> is based on mass (grams, kilograms, etc.), which is easy to measure with a balance. <strong>Mole fraction</strong> is based on moles, which requires knowing molecular masses and performing conversions.
                </p>
              </div>

              <div className="border-l-4 border-secondary-600 pl-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Range and Expression</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Mass percent ranges from 0% to 100% and is expressed as a percentage. Mole fraction ranges from 0 to 1 and is dimensionless. The sum of all mass percents equals 100%, while the sum of all mole fractions equals 1.0.
                </p>
              </div>

              <div className="border-l-4 border-indigo-600 pl-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Molecular Weight Dependency</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Mass percent doesn't directly account for differences in molecular weight—equal masses of different substances are treated equally. Mole fraction accounts for molecular weight because it's based on particle count (moles).
                </p>
              </div>

              <div className="border-l-4 border-purple-600 pl-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Practical Conversion</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Converting between them requires molecular masses. You can't directly convert 10% mass to mole fraction without knowing what substances are involved and their molar masses.
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
                <h3 className="text-2xl font-bold text-primary-700 dark:text-primary-300 mb-4">Use Mass Percent When:</h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span>Describing commercial products (e.g., 70% isopropyl alcohol)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span>Working with alloys and mixtures by weight</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span>Calculating percent composition of compounds</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span>Preparing solutions without mole calculations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span>Industrial and manufacturing contexts</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-secondary-700 dark:text-secondary-300 mb-4">Use Mole Fraction When:</h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-secondary-600 mr-2">✓</span>
                    <span>Applying Raoult's law for vapor pressure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-600 mr-2">✓</span>
                    <span>Calculating partial pressures in gas mixtures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-600 mr-2">✓</span>
                    <span>Working with ideal gas law applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-600 mr-2">✓</span>
                    <span>Analyzing chemical equilibrium compositions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-600 mr-2">✓</span>
                    <span>Dealing with mole-based thermodynamic equations</span>
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
                <h3 className="text-xl font-bold text-red-800 dark:text-red-300 mb-2">❌ Mistake: Assuming They're Proportional</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  A substance with 50% mass does <strong>not</strong> necessarily have a mole fraction of 0.5. They're only equal when all components have the same molar mass, which is rare.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-red-800 dark:text-red-300 mb-2">❌ Mistake: Converting Without Molar Mass</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  You cannot convert between mass percent and mole fraction without knowing the molar masses of all components. Both require this information for accurate conversion.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-red-800 dark:text-red-300 mb-2">❌ Mistake: Using Mass Percent in Raoult's Law</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Raoult's law requires <strong>mole fraction</strong>, not mass percent. Using mass percent will give completely incorrect vapor pressure calculations.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-red-800 dark:text-red-300 mb-2">❌ Mistake: Forgetting Mole Fractions Must Sum to 1</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  In any mixture, the sum of all mole fractions must equal exactly 1.0 (or mass percents must sum to 100%). If they don't, there's an error in your calculation.
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
                href="/concentration-and-solution-calculators/mass-percent-calculator"
                className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow border-2 border-primary-200 dark:border-primary-800 hover:border-primary-400"
              >
                <h3 className="text-xl font-bold text-primary-700 dark:text-primary-300 mb-2">Mass Percent Calculator</h3>
                <p className="text-gray-600 dark:text-gray-400">Calculate mass percentage of components</p>
              </Link>
              
              <Link 
                href="/concentration-and-solution-calculators/mole-fraction-calculator"
                className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow border-2 border-secondary-200 dark:border-secondary-800 hover:border-secondary-400"
              >
                <h3 className="text-xl font-bold text-secondary-700 dark:text-secondary-300 mb-2">Mole Fraction Calculator</h3>
                <p className="text-gray-600 dark:text-gray-400">Calculate mole fraction in mixtures</p>
              </Link>

              <Link 
                href="/concentration-and-solution-calculators"
                className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow border-2 border-indigo-200 dark:border-indigo-800 hover:border-indigo-400"
              >
                <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-300 mb-2">All Concentration Calculators</h3>
                <p className="text-gray-600 dark:text-gray-400">Explore all composition tools</p>
              </Link>

              <Link 
                href="/stoichiometry-calculators/percent-composition-calculator"
                className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow border-2 border-purple-200 dark:border-purple-800 hover:border-purple-400"
              >
                <h3 className="text-xl font-bold text-purple-700 dark:text-purple-300 mb-2">Percent Composition Calculator</h3>
                <p className="text-gray-600 dark:text-gray-400">Find elemental composition of compounds</p>
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
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">What is the difference between mass percent and mole fraction?</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Mass percent is based on mass ratios (component mass / total mass × 100%), while mole fraction is based on mole ratios (component moles / total moles). One uses weight, the other uses particle count.
                </p>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">How do you convert mass percent to mole fraction?</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Convert mass to moles using molar mass for each component, then calculate mole fraction. For example: assume 100 g total, convert each component's mass to moles, then divide component moles by total moles.
                </p>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Which is better: mass percent or mole fraction?</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Neither is universally "better"—they serve different purposes. Mass percent is simpler and practical for everyday use. Mole fraction is essential for theoretical calculations like vapor pressure and partial pressures.
                </p>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Can mole fraction be greater than 1?</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  No. Mole fraction ranges from 0 to 1. A value greater than 1 indicates a calculation error. The sum of all mole fractions in a mixture must equal exactly 1.0.
                </p>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">When are mass percent and mole fraction equal?</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  They're numerically similar (not equal) only when all components have identical molar masses. This is extremely rare in practice, so they should not be assumed equivalent.
                </p>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Is mass percent the same as weight percent?</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Yes, mass percent and weight percent (w/w%) are the same thing. "Weight percent" is the older term, while "mass percent" is more scientifically accurate since it's based on mass, not weight (which depends on gravity).
                </p>
              </div>

              <div className="pb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Which is used in Raoult's law?</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Raoult's law uses <strong>mole fraction</strong>, not mass percent. The equation is P = χ × P°, where χ is the mole fraction of the component and P° is the pure component's vapor pressure.
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
