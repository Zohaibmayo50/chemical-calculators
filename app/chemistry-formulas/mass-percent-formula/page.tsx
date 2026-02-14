import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Mass Percent Formula | % = (mass part/mass total) Ã— 100',
  description: 'Master the mass percent formula for calculating composition percentages in chemistry. Includes examples and concentration calculator links.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/mass-percent-formula',
  },
  keywords: 'mass percent, percent composition, weight percent, mass fraction, concentration, solution composition',
};

export default function MassPercentFormulaPage() {
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
            <span className="text-gray-600 dark:text-gray-400">Mass Percent Formula</span>
          </nav>

          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Mass Percent Formula
          </h1>

          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            <strong>Mass percent</strong> (also called weight percent or percent composition) expresses the mass of one component 
            as a percentage of the total mass. It's essential for solutions, mixtures, and chemical composition calculations.
          </p>

          {/* Formula Block */}
          <div className="my-12 p-8 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">Mass Percent Formula</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center">
              <p className="text-5xl font-bold text-gray-900 dark:text-white mb-2">
                Mass % = (mass<sub>part</sub> / mass<sub>total</sub>) Ã— 100%
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg mt-4">
                Percentage by mass of a component in a mixture
              </p>
            </div>
          </div>

          {/* Variable Definitions */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Variable Definitions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">Mass % = Mass Percent</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> % (percent) - dimensionless
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  The percentage composition by mass
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  ðŸ’¡ Also called: weight percent, w/w%, percent composition
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">mass<sub>part</sub> = Mass of Component</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> g, kg, mg (any mass unit)
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Mass of the specific component you're interested in
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">mass<sub>total</sub> = Total Mass</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> Same as mass<sub>part</sub>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Total mass of the entire mixture or solution
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  For solutions: mass<sub>total</sub> = mass<sub>solute</sub> + mass<sub>solvent</sub>
                </p>
              </div>
            </div>
          </section>

          {/* Common Uses */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Two Main Applications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">1. Solution Concentration</h3>
                <div className="bg-white dark:bg-gray-800 p-4 rounded mb-3">
                  <p className="text-2xl font-bold text-blue-600 mb-2">
                    % = (m<sub>solute</sub> / m<sub>solution</sub>) Ã— 100%
                  </p>
                </div>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  Example: 10% NaCl solution = 10 g salt per 100 g solution
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-6">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-4">2. Percent Composition</h3>
                <div className="bg-white dark:bg-gray-800 p-4 rounded mb-3">
                  <p className="text-2xl font-bold text-purple-600 mb-2">
                    % = (m<sub>element</sub> / m<sub>compound</sub>) Ã— 100%
                  </p>
                </div>
                <p className="text-purple-800 dark:text-purple-200 text-sm">
                  Example: Hâ‚‚O has 11.2% H and 88.8% O by mass
                </p>
              </div>
            </div>
          </section>

          {/* Rearranged Forms */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Rearranged Forms</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-6">
                <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Find Mass %:</h3>
                <p className="text-2xl font-bold text-blue-800 dark:text-blue-200">
                  % = (m<sub>part</sub> / m<sub>total</sub>) Ã— 100
                </p>
              </div>

              <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-6">
                <h3 className="font-bold text-purple-900 dark:text-purple-100 mb-3">Find m<sub>part</sub>:</h3>
                <p className="text-2xl font-bold text-purple-800 dark:text-purple-200">
                  m<sub>part</sub> = (% Ã— m<sub>total</sub>) / 100
                </p>
              </div>

              <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-6">
                <h3 className="font-bold text-green-900 dark:text-green-100 mb-3">Find m<sub>total</sub>:</h3>
                <p className="text-2xl font-bold text-green-800 dark:text-green-200">
                  m<sub>total</sub> = (m<sub>part</sub> Ã— 100) / %
                </p>
              </div>
            </div>
          </section>

          {/* Example 1: Solution */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Example 1: Solution Concentration</h2>
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Problem: You dissolve 15.0 g of sugar in 135.0 g of water. What is the mass percent of sugar?
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-2">Given:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>mass<sub>sugar</sub> = 15.0 g (solute)</li>
                    <li>mass<sub>water</sub> = 135.0 g (solvent)</li>
                    <li>Find: Mass % sugar</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 1: Calculate total mass</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    mass<sub>total</sub> = mass<sub>sugar</sub> + mass<sub>water</sub><br />
                    mass<sub>total</sub> = 15.0 g + 135.0 g = 150.0 g
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 2: Apply mass percent formula</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    Mass % = (mass<sub>sugar</sub> / mass<sub>total</sub>) Ã— 100%
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 3: Substitute and calculate</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    Mass % = (15.0 g / 150.0 g) Ã— 100%<br />
                    Mass % = 0.100 Ã— 100% = 10.0%
                  </p>
                </div>

                <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg">
                  <p className="font-bold text-green-900 dark:text-green-100">
                    Answer: 10.0% sugar solution
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Example 2: Percent Composition */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Example 2: Percent Composition</h2>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Problem: Find the mass percent of oxygen in Hâ‚‚O. (Molar mass: H = 1.01 g/mol, O = 16.00 g/mol)
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-2">Step 1: Calculate molar mass of Hâ‚‚O</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    M(Hâ‚‚O) = 2(1.01) + 16.00 = 18.02 g/mol
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 2: Mass of oxygen in 1 mole Hâ‚‚O</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    mass<sub>O</sub> = 16.00 g (in 1 mol Hâ‚‚O)
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 3: Apply formula</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    Mass % O = (16.00 / 18.02) Ã— 100%<br />
                    Mass % O = 88.8%
                  </p>
                </div>

                <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg">
                  <p className="font-bold text-green-900 dark:text-green-100">
                    Answer: Water is 88.8% oxygen by mass (and 11.2% hydrogen)
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Common Mistakes</h2>
            <div className="space-y-4">
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">âŒ Using mass of solvent instead of total mass</h3>
                <p className="text-red-800 dark:text-red-200">
                  Denominator must be TOTAL mass (solute + solvent), not just solvent mass!
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">âŒ Forgetting to multiply by 100</h3>
                <p className="text-red-800 dark:text-red-200">
                  Mass percent needs Ã— 100 to convert from decimal to percent. 0.25 = 25%, not 0.25%!
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">âŒ Unit mismatches</h3>
                <p className="text-red-800 dark:text-red-200">
                  mass<sub>part</sub> and mass<sub>total</sub> must use the same units. Both in grams, or both in kg, etc.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">âŒ Confusing with molarity</h3>
                <p className="text-red-800 dark:text-red-200">
                  Mass percent is mass/mass. Molarity is moles/volume. Completely different concentration units!
                </p>
              </div>
            </div>
          </section>

          {/* Related Calculators */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Related Calculators</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/concentration-and-solution-calculators/mass-percent-calculator" className="block p-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Mass Percent Calculator</h3>
                <p>Calculate mass %, mass part, or mass total</p>
              </Link>

              <Link href="/stoichiometry-calculators/percent-composition-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Percent Composition</h3>
                <p className="text-gray-600 dark:text-gray-400">Calculate % of each element</p>
              </Link>

              <Link href="/concentration-and-solution-calculators/concentration-converter" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Concentration Converter</h3>
                <p className="text-gray-600 dark:text-gray-400">Convert between units</p>
              </Link>

              <Link href="/concentration-and-solution-calculators/solution-preparation-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Solution Preparation</h3>
                <p className="text-gray-600 dark:text-gray-400">Prepare % solutions</p>
              </Link>
              <Link href="/concentration-and-solution-calculators" className="block p-6 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Concentration & Solution Calculators</h3>
                <p className="text-white/90">All concentration tools</p>
              </Link>
              <Link href="/mass-percent-vs-mole-fraction" className="block p-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Mass Percent vs Mole Fraction</h3>
                <p className="text-white/90">Compare composition units</p>
              </Link>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What is mass percent?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Mass % = (mass of part / total mass) Ã— 100%. It tells you what percentage of the total mass is made up by a specific component.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">How do I make a 5% solution?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  5% means 5 g solute per 100 g total solution. Dissolve 5 g solute in 95 g solvent to get 100 g of 5% solution.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Is mass percent the same as weight percent?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Yes! They're identical. "Weight percent" is technically incorrect (should be mass), but it's commonly used and means the same thing.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Can mass percent be over 100%?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  No! A part can't be larger than the whole. If you get over 100%, you made a calculation error (probably used wrong total mass).
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">How is this different from volume percent?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Mass % = mass/mass Ã— 100. Volume % = volume/volume Ã— 100. Use mass % for solids in liquids, volume % for liquids in liquids (like alcohol content).
                </p>
              </div>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-between">
              <Link href="/chemistry-formulas" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                â† Back to All Formulas
              </Link>
              <Link href="/chemistry-formulas/mole-fraction-formula" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                Next: Mole Fraction â†’
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
            "headline": "Mass Percent Formula",
            "description": "Mass Percent Formula on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/mass-percent-formula",
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
                "name": "Mass Percent Formula",
                "item": "https://chemsolved.com/chemistry-formulas/mass-percent-formula"
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
