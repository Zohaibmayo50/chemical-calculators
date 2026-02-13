import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Dalton\'s Law of Partial Pressures | P_total = ΣP_i',
  description: 'Master Dalton\'s Law of partial pressures for gas mixtures. Includes examples and gas law calculator links.',
  keywords: 'Daltons law, partial pressure, gas mixtures, total pressure, mole fraction',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/daltons-law',
  },
};

export default function DaltonsLawPage() {
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
            <span className="text-gray-600 dark:text-gray-400">Dalton's Law</span>
          </nav>

          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Dalton's Law of Partial Pressures
          </h1>

          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            <strong>Dalton's Law</strong> states that the total pressure of a gas mixture equals the sum of the 
            partial pressures of each individual gas. Each gas behaves independently.
          </p>

          {/* Formula Block */}
          <div className="my-12 p-8 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">Dalton's Law</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center">
              <p className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
                P<sub>total</sub> = P₁ + P₂ + P₃ + ...
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
                Or in summation notation:
              </p>
              <p className="text-4xl font-bold text-gray-900 dark:text-white">
                P<sub>total</sub> = ΣP<sub>i</sub>
              </p>
            </div>
          </div>

          {/* Variable Definitions */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Variable Definitions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">P<sub>total</sub> = Total Pressure</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> atm, kPa, mmHg, torr, Pa
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Sum of all partial pressures in the mixture
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">P<sub>i</sub> = Partial Pressure</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> Same as P<sub>total</sub>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Pressure each gas would exert alone
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  💡 P<sub>i</sub> = χ<sub>i</sub> × P<sub>total</sub> (where χ = mole fraction)
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">χ<sub>i</sub> = Mole Fraction</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Formula:</strong> χ<sub>i</sub> = n<sub>i</sub> / n<sub>total</sub>
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Range:</strong> 0 to 1 (unitless)
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                  Fraction of total moles that gas i represents
                </p>
              </div>
            </div>
          </section>

          {/* Key Relationships */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Key Relationships</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-6">
                <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Partial Pressure from Moles:</h3>
                <p className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-2">
                  P<sub>i</sub> = (n<sub>i</sub>/n<sub>total</sub>) × P<sub>total</sub>
                </p>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Using mole fraction
                </p>
              </div>

              <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-6">
                <h3 className="font-bold text-purple-900 dark:text-purple-100 mb-3">Using Ideal Gas Law:</h3>
                <p className="text-2xl font-bold text-purple-800 dark:text-purple-200 mb-2">
                  P<sub>i</sub> = n<sub>i</sub>RT/V
                </p>
                <p className="text-sm text-purple-700 dark:text-purple-300">
                  Each gas independently
                </p>
              </div>

              <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-6">
                <h3 className="font-bold text-green-900 dark:text-green-100 mb-3">Mole Fractions Sum:</h3>
                <p className="text-2xl font-bold text-green-800 dark:text-green-200 mb-2">
                  Σχ<sub>i</sub> = 1
                </p>
                <p className="text-sm text-green-700 dark:text-green-300">
                  All fractions must add to 1
                </p>
              </div>

              <div className="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-6">
                <h3 className="font-bold text-orange-900 dark:text-orange-100 mb-3">Percent by Pressure:</h3>
                <p className="text-2xl font-bold text-orange-800 dark:text-orange-200 mb-2">
                  %P<sub>i</sub> = (P<sub>i</sub>/P<sub>total</sub>) × 100
                </p>
                <p className="text-sm text-orange-700 dark:text-orange-300">
                  Same as mole percent
                </p>
              </div>
            </div>
          </section>

          {/* Example */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Step-by-Step Example</h2>
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Problem: A mixture contains 2.0 mol N₂, 3.0 mol O₂, and 1.0 mol Ar at 5.0 atm total pressure. Find each partial pressure.
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-2">Given:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>n(N₂) = 2.0 mol</li>
                    <li>n(O₂) = 3.0 mol</li>
                    <li>n(Ar) = 1.0 mol</li>
                    <li>P<sub>total</sub> = 5.0 atm</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 1: Calculate total moles</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    n<sub>total</sub> = 2.0 + 3.0 + 1.0 = 6.0 mol
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 2: Calculate mole fractions</h4>
                  <div className="font-mono bg-white dark:bg-gray-800 p-3 rounded space-y-1">
                    <p>χ(N₂) = 2.0 / 6.0 = 0.333</p>
                    <p>χ(O₂) = 3.0 / 6.0 = 0.500</p>
                    <p>χ(Ar) = 1.0 / 6.0 = 0.167</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 3: Calculate partial pressures</h4>
                  <div className="font-mono bg-white dark:bg-gray-800 p-3 rounded space-y-1">
                    <p>P(N₂) = 0.333 × 5.0 = 1.67 atm</p>
                    <p>P(O₂) = 0.500 × 5.0 = 2.50 atm</p>
                    <p>P(Ar) = 0.167 × 5.0 = 0.83 atm</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 4: Verify (check sum)</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    1.67 + 2.50 + 0.83 = 5.00 atm ✓
                  </p>
                </div>

                <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg">
                  <p className="font-bold text-green-900 dark:text-green-100 mb-2">
                    Answers:
                  </p>
                  <ul className="space-y-1 text-green-800 dark:text-green-200">
                    <li>P(N₂) = 1.67 atm</li>
                    <li>P(O₂) = 2.50 atm</li>
                    <li>P(Ar) = 0.83 atm</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Real World Applications */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Real-World Applications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-6">
                <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-3">🌬️ Atmospheric Pressure</h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  Air pressure (1 atm) = P(N₂) + P(O₂) + P(Ar) + P(CO₂) + ...
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-6">
                <h3 className="font-bold text-green-900 dark:text-green-100 mb-3">🫁 Breathing & Diving</h3>
                <p className="text-green-800 dark:text-green-200 text-sm">
                  Oxygen partial pressure determines how much O₂ dissolves in blood
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-6">
                <h3 className="font-bold text-purple-900 dark:text-purple-100 mb-3">⚗️ Gas Collection</h3>
                <p className="text-purple-800 dark:text-purple-200 text-sm">
                  Collected gas over water: P<sub>gas</sub> = P<sub>total</sub> - P<sub>H₂O</sub>
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg p-6">
                <h3 className="font-bold text-orange-900 dark:text-orange-100 mb-3">🏭 Industrial Processes</h3>
                <p className="text-orange-800 dark:text-orange-200 text-sm">
                  Controlling reaction rates by adjusting partial pressures of reactants
                </p>
              </div>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Common Mistakes</h2>
            <div className="space-y-4">
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Forgetting water vapor pressure</h3>
                <p className="text-red-800 dark:text-red-200">
                  When collecting gas over water, must subtract water vapor pressure: P<sub>gas</sub> = P<sub>total</sub> - P<sub>H₂O</sub>
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Using mass instead of moles</h3>
                <p className="text-red-800 dark:text-red-200">
                  Partial pressure depends on MOLES, not mass. Heavier gases don't have higher partial pressures if moles are equal.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Mismatched pressure units</h3>
                <p className="text-red-800 dark:text-red-200">
                  All pressures must use the same units. Can't add atm and kPa directly!
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Assuming gases interact</h3>
                <p className="text-red-800 dark:text-red-200">
                  Dalton's Law assumes ideal behavior - gases don't attract or repel each other. Not accurate for highly polar or reactive gases.
                </p>
              </div>
            </div>
          </section>

          {/* Related Calculators */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Related Calculators</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/physical-chemistry-calculators/daltons-law-calculator" className="block p-6 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Dalton's Law Calculator</h3>
                <p>Calculate partial pressures instantly</p>
              </Link>

              <Link href="/" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Partial Pressure Calculator</h3>
                <p className="text-gray-600 dark:text-gray-400">Find individual gas pressures</p>
              </Link>

              <Link href="/physical-chemistry-calculators/ideal-gas-law-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Ideal Gas Law</h3>
                <p className="text-gray-600 dark:text-gray-400">PV = nRT calculations</p>
              </Link>

              <Link href="/" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Mole Fraction</h3>
                <p className="text-gray-600 dark:text-gray-400">Calculate χ for mixtures</p>
              </Link>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What is Dalton's Law of Partial Pressures?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  P<sub>total</sub> = P₁ + P₂ + P₃ + ... The total pressure of a gas mixture equals the sum of the partial pressures of each component gas.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What is a partial pressure?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  The pressure each gas in a mixture would exert if it alone occupied the entire volume. It depends on the mole fraction.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">How do I find partial pressure from mole fraction?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  P<sub>i</sub> = χ<sub>i</sub> × P<sub>total</sub>, where χ<sub>i</sub> = n<sub>i</sub>/n<sub>total</sub>. Multiply the mole fraction by total pressure.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Does Dalton's Law work for all gases?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  It's most accurate for ideal gases that don't interact. Works well for common gases (N₂, O₂, etc.) at moderate T and P, less accurate for polar or reactive gases.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Why subtract water vapor when collecting gas over water?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Water evaporates into the container, contributing to total pressure. To get just the collected gas pressure: P<sub>gas</sub> = P<sub>total</sub> - P<sub>H₂O</sub>.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-between">
              <Link href="/chemistry-formulas" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                ← Back to All Formulas
              </Link>
              <Link href="/chemistry-formulas/grahams-law" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                Next: Graham's Law →
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
            "headline": "Daltons Law",
            "description": "Daltons Law on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/daltons-law",
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
                "name": "Daltons Law",
                "item": "https://chemsolved.com/chemistry-formulas/daltons-law"
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
