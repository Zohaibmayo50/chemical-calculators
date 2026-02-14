import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Molarity Formula | M = n/V | Chemistry Equation Explained',
  description: 'Learn the molarity formula (M = n/V) with clear variable definitions, step-by-step examples, and rearranged forms. Master molar concentration calculations.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/molarity-formula',
  },
  keywords: 'molarity formula, molar concentration, M = n/V, chemistry formula, solution concentration, moles per liter',
};

export default function MolarityFormulaPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm">
            <Link href="/" className="text-primary-600 dark:text-primary-400 hover:underline">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/chemistry-formulas" className="text-primary-600 dark:text-primary-400 hover:underline">Chemistry Formulas</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600 dark:text-gray-400">Molarity Formula</span>
          </nav>

          {/* Main Title */}
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Molarity Formula
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              <strong>Molarity</strong> is the most common unit of concentration in chemistry. It measures the number 
              of moles of solute dissolved per liter of solution. Molarity is essential for stoichiometric calculations, 
              dilutions, and preparing solutions in laboratory settings.
            </p>

            {/* Formula Block */}
            <div className="my-12 p-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl shadow-xl">
              <h2 className="text-3xl font-bold text-white mb-4 text-center">The Molarity Formula</h2>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center">
                <p className="text-5xl font-bold text-gray-900 dark:text-white mb-2">
                  M = n / V
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  Molarity equals moles divided by volume
                </p>
              </div>
            </div>

            {/* Variable Definitions */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Variable Definitions</h2>
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2">M = Molarity</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Units:</strong> mol/L (moles per liter) or M (molar)
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Meaning:</strong> The concentration of solute in the solution
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2">n = Moles of Solute</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Units:</strong> mol (moles)
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Meaning:</strong> The amount of substance dissolved in the solution
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                    💡 To find moles: n = mass / molar mass
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2">V = Volume of Solution</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Units:</strong> L (liters)
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Meaning:</strong> The total volume of the solution (not just solvent)
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                    ⚠️ Convert mL to L by dividing by 1000
                  </p>
                </div>
              </div>
            </section>

            {/* Rearranged Forms */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Rearranged Forms</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                The molarity formula can be rearranged to solve for different variables depending on what you know:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-6 border-2 border-blue-500">
                  <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-3">Find Moles</h3>
                  <p className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-2">n = M × V</p>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Use when you know molarity and volume
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-6 border-2 border-green-500">
                  <h3 className="text-lg font-bold text-green-900 dark:text-green-100 mb-3">Find Volume</h3>
                  <p className="text-2xl font-bold text-green-800 dark:text-green-200 mb-2">V = n / M</p>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Use when you know moles and molarity
                  </p>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/30 rounded-lg p-6 border-2 border-purple-500">
                  <h3 className="text-lg font-bold text-purple-900 dark:text-purple-100 mb-3">Find Molarity</h3>
                  <p className="text-2xl font-bold text-purple-800 dark:text-purple-200 mb-2">M = n / V</p>
                  <p className="text-sm text-purple-700 dark:text-purple-300">
                    The original formula
                  </p>
                </div>
              </div>
            </section>

            {/* Step-by-Step Example */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Step-by-Step Example</h2>
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-8 border-2 border-yellow-400 dark:border-yellow-600">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Problem: What is the molarity of a solution containing 5.85 g of NaCl in 250 mL of water?
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Step 1: Convert mass to moles</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Molar mass of NaCl = 58.5 g/mol
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 font-mono bg-white dark:bg-gray-800 p-3 rounded mt-2">
                      n = 5.85 g ÷ 58.5 g/mol = 0.100 mol
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Step 2: Convert mL to L</h4>
                    <p className="text-gray-700 dark:text-gray-300 font-mono bg-white dark:bg-gray-800 p-3 rounded">
                      V = 250 mL ÷ 1000 = 0.250 L
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Step 3: Calculate molarity</h4>
                    <p className="text-gray-700 dark:text-gray-300 font-mono bg-white dark:bg-gray-800 p-3 rounded">
                      M = n / V = 0.100 mol / 0.250 L = 0.400 M
                    </p>
                  </div>

                  <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg border-l-4 border-green-500">
                    <p className="font-bold text-green-900 dark:text-green-100">
                      Answer: The molarity is 0.400 M (or 0.400 mol/L)
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Where This Formula Is Used */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Where This Formula Is Used</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">🎓 Education</h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>High school chemistry courses</li>
                    <li>College general chemistry</li>
                    <li>AP Chemistry exams</li>
                    <li>Stoichiometry problems</li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">🔬 Laboratory</h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Preparing standard solutions</li>
                    <li>Titration calculations</li>
                    <li>Analytical chemistry</li>
                    <li>Quality control testing</li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">🏭 Industry</h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Pharmaceutical manufacturing</li>
                    <li>Chemical production</li>
                    <li>Water treatment</li>
                    <li>Food and beverage processing</li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">🧪 Research</h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Biochemistry experiments</li>
                    <li>Material science</li>
                    <li>Environmental testing</li>
                    <li>Medical research</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Common Mistakes */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Common Mistakes to Avoid</h2>
              <div className="space-y-4">
                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                  <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Using mL instead of L</h3>
                  <p className="text-red-800 dark:text-red-200">
                    Always convert volume to liters! 250 mL = 0.250 L, not 250 L
                  </p>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                  <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Confusing mass with moles</h3>
                  <p className="text-red-800 dark:text-red-200">
                    Don't plug grams directly into the formula. Convert to moles first using molar mass.
                  </p>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                  <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Using solvent volume instead of solution volume</h3>
                  <p className="text-red-800 dark:text-red-200">
                    V is the total solution volume, not just the volume of water added. The final volume may differ!
                  </p>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                  <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Forgetting significant figures</h3>
                  <p className="text-red-800 dark:text-red-200">
                    Your answer should have the same number of significant figures as your least precise measurement.
                  </p>
                </div>
              </div>
            </section>

            {/* Related Calculators */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Related Calculators</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Use these interactive calculators to apply the molarity formula:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/concentration-and-solution-calculators/molarity-calculator" className="block p-6 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                  <h3 className="text-xl font-bold mb-2">Molarity Calculator</h3>
                  <p className="text-primary-100">Calculate molarity from mass, moles, or volume</p>
                </Link>

                <Link href="/concentration-and-solution-calculators/dilution-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Dilution Calculator</h3>
                  <p className="text-gray-600 dark:text-gray-400">Calculate dilution using M₁V₁ = M₂V₂</p>
                </Link>

                <Link href="/concentration-and-solution-calculators/concentration-converter" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Concentration Converter</h3>
                  <p className="text-gray-600 dark:text-gray-400">Convert between molarity and other units</p>
                </Link>

                <Link href="/concentration-and-solution-calculators/solution-preparation-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Solution Preparation</h3>
                  <p className="text-gray-600 dark:text-gray-400">Calculate how to prepare solutions</p>
                </Link>
              </div>

              <div className="mt-6 text-center">
                <Link href="/concentration-and-solution-calculators" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                  View All Concentration Calculators →
                </Link>
              </div>
            </section>

            {/* FAQs */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">What is the molarity formula?</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    The molarity formula is M = n / V, where M is molarity (mol/L), n is moles of solute, and V is volume 
                    of solution in liters. It calculates the concentration of a solution.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">What units are used in the molarity formula?</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Molarity (M) is expressed in mol/L or M. Moles (n) are in mol, and volume (V) must be in liters (L). 
                    Always convert mL to L by dividing by 1000.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Can the molarity formula be rearranged?</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Yes! You can rearrange it to n = M × V (to find moles) or V = n / M (to find volume). The rearrangement 
                    depends on which variable you're solving for.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">How do I convert grams to moles for the molarity formula?</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Divide the mass in grams by the molar mass: n = mass (g) / molar mass (g/mol). For example, 
                    10 g of NaCl (58.5 g/mol) = 10 / 58.5 = 0.171 mol.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">What's the difference between molarity and molality?</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Molarity (M) uses liters of solution, while molality (m) uses kilograms of solvent. Molarity changes 
                    with temperature because volume changes, but molality doesn't.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Why is molarity the most common concentration unit?</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Molarity is easy to measure (volume is simpler than mass), directly relates to stoichiometry, and 
                    works well for most laboratory calculations and reactions in solution.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">How do you dilute a solution using molarity?</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Use the dilution formula M₁V₁ = M₂V₂, where subscript 1 is the concentrated solution and subscript 2 
                    is the diluted solution. This formula derives from the molarity formula.
                  </p>
                </div>
              </div>
            </section>

            {/* Related Calculators Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Related Calculators</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Use these calculators to apply the molarity formula in practical chemistry problems:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <Link 
                  href="/concentration-and-solution-calculators/molarity-calculator"
                  className="block bg-gradient-to-r from-primary-50 to-primary-100 dark:from-gray-700 dark:to-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow border-2 border-primary-200 dark:border-primary-700"
                >
                  <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-2">Molarity Calculator</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Calculate molarity from moles and volume</p>
                </Link>
                <Link 
                  href="/concentration-and-solution-calculators/dilution-calculator"
                  className="block bg-gradient-to-r from-accent-50 to-accent-100 dark:from-gray-700 dark:to-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow border-2 border-accent-200 dark:border-accent-700"
                >
                  <h3 className="text-xl font-bold text-accent-700 dark:text-accent-400 mb-2">Dilution Calculator</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Apply M₁V₁ = M₂V₂ for dilutions</p>
                </Link>
                <Link 
                  href="/concentration-and-solution-calculators"
                  className="block bg-gradient-to-r from-secondary-50 to-secondary-100 dark:from-gray-700 dark:to-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow border-2 border-secondary-200 dark:border-secondary-700"
                >
                  <h3 className="text-xl font-bold text-secondary-700 dark:text-secondary-400 mb-2">Concentration & Solution Calculators</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Explore all concentration calculators</p>
                </Link>
                <Link 
                  href="/molarity-vs-molality"
                  className="block bg-gradient-to-r from-purple-50 to-indigo-100 dark:from-gray-700 dark:to-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow border-2 border-purple-200 dark:border-purple-700"
                >
                  <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400 mb-2">Molarity vs Molality</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Compare molarity with molality</p>
                </Link>
              </div>
            </section>

            {/* Bottom Navigation */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center">
                <Link href="/chemistry-formulas" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                  ← Back to All Formulas
                </Link>
                <Link href="/chemistry-formulas/molality-formula" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                  Next: Molality Formula →
                </Link>
              </div>
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
            "headline": "Molarity Formula",
            "description": "Molarity Formula on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/molarity-formula",
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
                "name": "Molarity Formula",
                "item": "https://chemsolved.com/chemistry-formulas/molarity-formula"
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
