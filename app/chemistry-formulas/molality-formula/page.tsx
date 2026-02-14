import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Molality Formula | m = n/kg_solvent | Concentration Calculation',
  description: 'Master the molality formula (m = n/kg_solvent) for concentration calculations. Includes examples and concentration calculator links.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/molality-formula',
  },
  keywords: 'molality, molality formula, concentration, colligative properties, moles per kilogram',
};

export default function MolalityFormulaPage() {
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
            <span className="text-gray-600 dark:text-gray-400">Molality Formula</span>
          </nav>

          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Molality Formula
          </h1>

          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            <strong>Molality</strong> (m) measures concentration as moles of solute per kilogram of solvent. 
            Unlike molarity, molality is temperature-independent and essential for colligative property calculations.
          </p>

          {/* Formula Block */}
          <div className="my-12 p-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">The Molality Formula</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center">
              <p className="text-6xl font-bold text-gray-900 dark:text-white mb-2">
                m = n / kg<sub>solvent</sub>
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Moles per kilogram of solvent
              </p>
            </div>
          </div>

          {/* Variable Definitions */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Variable Definitions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2">m = Molality</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> mol/kg or m (lowercase m)
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Concentration of solute
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                  âš ï¸ Don't confuse lowercase m (molality) with uppercase M (molarity)
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2">n = Moles of Solute</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> mol
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Formula:</strong> n = mass / molar mass
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Amount of dissolved substance
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2">kg<sub>solvent</sub> = Mass of Solvent</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> kg (kilograms)
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Mass of SOLVENT only, NOT solution
                </p>
                <p className="text-red-600 dark:text-red-400 text-sm mt-2">
                  âš ï¸ Must be in kg! Convert grams to kg by dividing by 1000
                </p>
              </div>
            </div>
          </section>

          {/* Molality vs Molarity */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Molality vs Molarity</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
                <thead className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
                  <tr>
                    <th className="p-4 text-left">Property</th>
                    <th className="p-4 text-left">Molality (m)</th>
                    <th className="p-4 text-left">Molarity (M)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="p-4 font-bold">Formula</td>
                    <td className="p-4">mol / kg solvent</td>
                    <td className="p-4">mol / L solution</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700/30">
                    <td className="p-4 font-bold">Temperature Effect</td>
                    <td className="p-4 text-green-600 dark:text-green-400">Independent</td>
                    <td className="p-4 text-orange-600 dark:text-orange-400">Dependent</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold">Uses</td>
                    <td className="p-4">Colligative properties</td>
                    <td className="p-4">Reactions, dilutions</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700/30">
                    <td className="p-4 font-bold">Denominator</td>
                    <td className="p-4">Solvent mass (kg)</td>
                    <td className="p-4">Solution volume (L)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold">Symbol</td>
                    <td className="p-4">m (lowercase)</td>
                    <td className="p-4">M (uppercase)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Rearranged Forms */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Rearranged Forms</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-6">
                <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Solve for moles:</h3>
                <p className="text-2xl font-bold text-blue-800 dark:text-blue-200">
                  n = m Ã— kg<sub>solvent</sub>
                </p>
              </div>

              <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-6">
                <h3 className="font-bold text-purple-900 dark:text-purple-100 mb-3">Solve for solvent mass:</h3>
                <p className="text-2xl font-bold text-purple-800 dark:text-purple-200">
                  kg<sub>solvent</sub> = n / m
                </p>
              </div>

              <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-6 md:col-span-2">
                <h3 className="font-bold text-green-900 dark:text-green-100 mb-3">From mass of solute:</h3>
                <p className="text-2xl font-bold text-green-800 dark:text-green-200">
                  m = (g<sub>solute</sub> / MM) / kg<sub>solvent</sub>
                </p>
                <p className="text-sm text-green-700 dark:text-green-300 mt-2">
                  Where MM = molar mass of solute
                </p>
              </div>
            </div>
          </section>

          {/* Example */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Step-by-Step Example</h2>
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Problem: Calculate the molality when 23.0 g NaCl is dissolved in 500 g water. (NaCl MM = 58.44 g/mol)
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-2">Given:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Mass of NaCl (solute) = 23.0 g</li>
                    <li>Mass of water (solvent) = 500 g</li>
                    <li>Molar mass of NaCl = 58.44 g/mol</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 1: Convert solvent mass to kg</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    kg<sub>solvent</sub> = 500 g Ã· 1000 = 0.500 kg
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 2: Calculate moles of solute</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    n = 23.0 g Ã· 58.44 g/mol = 0.394 mol
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 3: Calculate molality</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    m = n / kg<sub>solvent</sub> = 0.394 mol / 0.500 kg = 0.788 mol/kg
                  </p>
                </div>

                <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg">
                  <p className="font-bold text-green-900 dark:text-green-100">
                    Answer: 0.788 m or 0.788 mol/kg
                  </p>
                  <p className="text-sm mt-2">This solution has 0.788 moles of NaCl per kilogram of water.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Common Mistakes</h2>
            <div className="space-y-4">
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">âŒ Using solution mass instead of solvent mass</h3>
                <p className="text-red-800 dark:text-red-200">
                  Denominator is SOLVENT mass only, NOT total solution. Don't include the solute in the denominator!
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">âŒ Forgetting to convert grams to kilograms</h3>
                <p className="text-red-800 dark:text-red-200">
                  Solvent mass MUST be in kg. If given in g, divide by 1000. Missing this makes your answer 1000Ã— too small!
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">âŒ Confusing m (molality) with M (molarity)</h3>
                <p className="text-red-800 dark:text-red-200">
                  Molality (m) = mol/kg solvent. Molarity (M) = mol/L solution. They're different units!
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">âŒ Using grams instead of moles for solute</h3>
                <p className="text-red-800 dark:text-red-200">
                  Must convert solute mass to moles using molar mass before calculating molality.
                </p>
              </div>
            </div>
          </section>

          {/* When to Use Molality */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">When to Use Molality</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-6">
                <h3 className="font-bold text-green-900 dark:text-green-100 mb-3">âœ… Use Molality For:</h3>
                <ul className="space-y-2 text-green-800 dark:text-green-200">
                  <li>â€¢ Boiling point elevation (Î”Tb = KbÂ·m)</li>
                  <li>â€¢ Freezing point depression (Î”Tf = KfÂ·m)</li>
                  <li>â€¢ Osmotic pressure calculations</li>
                  <li>â€¢ Any temperature-varying conditions</li>
                  <li>â€¢ Colligative properties</li>
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-6">
                <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-3">âœ“ Advantages:</h3>
                <ul className="space-y-2 text-blue-800 dark:text-blue-200">
                  <li>â€¢ Temperature-independent</li>
                  <li>â€¢ Doesn't change with heating/cooling</li>
                  <li>â€¢ More accurate for non-aqueous solvents</li>
                  <li>â€¢ Easy to prepare without volumetric glassware</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Related Calculators */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Related Calculators</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/concentration-and-solution-calculators/molality-calculator" className="block p-6 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Molality Calculator</h3>
                <p>Calculate molality instantly</p>
              </Link>

              <Link href="/concentration-and-solution-calculators/molarity-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Molarity Calculator</h3>
                <p className="text-gray-600 dark:text-gray-400">Calculate M = n/V</p>
              </Link>

              <Link href="/concentration-and-solution-calculators/concentration-converter" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Concentration Converter</h3>
                <p className="text-gray-600 dark:text-gray-400">Convert between units</p>
              </Link>

              <Link href="/thermodynamics-calculators/freezing-point-depression-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Freezing Point Depression</h3>
                <p className="text-gray-600 dark:text-gray-400">Use molality for Î”Tf</p>
              </Link>
            </div>
          </section>

          {/* Related Calculators */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Related Calculators</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/concentration-and-solution-calculators/molality-calculator" className="block bg-gradient-to-r from-primary-50 to-primary-100 dark:from-gray-700 dark:to-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow border-2 border-primary-200 dark:border-primary-700">
                <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-2">Molality Calculator</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">Calculate molality from moles and mass</p>
              </Link>
              <Link href="/thermodynamics-calculators/freezing-point-depression-calculator" className="block bg-gradient-to-r from-accent-50 to-accent-100 dark:from-gray-700 dark:to-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow border-2 border-accent-200 dark:border-accent-700">
                <h3 className="text-xl font-bold text-accent-700 dark:text-accent-400 mb-2">Freezing Point Depression</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">Apply molality to colligative properties</p>
              </Link>
              <Link href="/concentration-and-solution-calculators" className="block bg-gradient-to-r from-secondary-50 to-secondary-100 dark:from-gray-700 dark:to-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow border-2 border-secondary-200 dark:border-secondary-700">
                <h3 className="text-xl font-bold text-secondary-700 dark:text-secondary-400 mb-2">Concentration & Solution Calculators</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">Explore all concentration tools</p>
              </Link>
              <Link href="/molarity-vs-molality" className="block bg-gradient-to-r from-purple-50 to-indigo-100 dark:from-gray-700 dark:to-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow border-2 border-purple-200 dark:border-purple-700">
                <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400 mb-2">Molarity vs Molality</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">Compare concentration units</p>
              </Link>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What is molality?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Molality (m) = moles of solute / kg of solvent. It's a concentration unit that doesn't change with temperature.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">How is molality different from molarity?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Molality uses kg of solvent (mass), molarity uses liters of solution (volume). Molality is temperature-independent.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Why use kg instead of g?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Standard SI unit for molality is mol/kg. Using kg gives convenient numbers (usually 0.1-10 m range).
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">When should I use molality instead of molarity?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Use molality for colligative properties (boiling/freezing point changes) or when temperature varies significantly.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Can molality be greater than molarity?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Yes! For aqueous solutions, molality is usually slightly higher than molarity because 1 L water weighs less than 1 kg.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-between">
              <Link href="/chemistry-formulas" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                â† Back to All Formulas
              </Link>
              <Link href="/chemistry-formulas/mass-percent-formula" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                Next: Mass Percent â†’
              </Link>
            </div>
          </div>
        </div>
      {/* Structured Data - EducationalArticle */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": "Molality Formula",
            "description": "Molality Formula on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/molality-formula",
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
                "name": "Molality Formula",
                "item": "https://chemsolved.com/chemistry-formulas/molality-formula"
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
