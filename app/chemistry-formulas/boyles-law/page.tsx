import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Boyle\'s Law | P₁V₁ = P₂V₂ | Pressure-Volume Relationship',
  description: 'Master Boyle\'s Law (P₁V₁ = P₂V₂) for gas pressure-volume calculations at constant temperature. Includes examples and calculator links.',
  keywords: 'boyles law, pressure volume, gas laws, inverse relationship, P1V1 P2V2',
};

export default function BoylesLawPage() {
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
            <span className="text-gray-600 dark:text-gray-400">Boyle's Law</span>
          </nav>

          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Boyle's Law
          </h1>

          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            <strong>Boyle's Law</strong> states that pressure and volume are inversely proportional at constant temperature. 
            When you compress a gas (decrease volume), its pressure increases proportionally.
          </p>

          {/* Formula Block */}
          <div className="my-12 p-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">Boyle's Law</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center">
              <p className="text-6xl font-bold text-gray-900 dark:text-white mb-2">
                P₁V₁ = P₂V₂
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Initial pressure × initial volume = Final pressure × final volume
              </p>
            </div>
          </div>

          {/* Key Concept */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">
                The Inverse Relationship
              </h2>
              <div className="space-y-4 text-blue-800 dark:text-blue-200">
                <p className="text-lg">
                  <strong>P ∝ 1/V</strong> (at constant T and n)
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Double the pressure → volume cuts in half</li>
                  <li>Halve the pressure → volume doubles</li>
                  <li>Compress a gas → pressure rises</li>
                  <li>Expand a gas → pressure drops</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Variable Definitions */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Variable Definitions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">P₁ = Initial Pressure</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Common Units:</strong> atm, mmHg, torr, kPa, Pa, bar, psi
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Pressure before the change
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">V₁ = Initial Volume</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Common Units:</strong> L, mL, cm³, m³
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Volume before the change
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">P₂ = Final Pressure</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> Same as P₁
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Pressure after the change
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">V₂ = Final Volume</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> Same as V₁
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Volume after the change
                </p>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 border-l-4 border-yellow-500">
                <h3 className="font-bold text-yellow-900 dark:text-yellow-100 mb-2">⚠️ Constant Conditions</h3>
                <p className="text-yellow-800 dark:text-yellow-200">
                  <strong>Temperature (T)</strong> must remain constant<br />
                  <strong>Amount of gas (n)</strong> must remain constant<br />
                  No gas can enter or leave the system
                </p>
              </div>
            </div>
          </section>

          {/* Rearranged Forms */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Rearranged Forms</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-6">
                <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Find P₂:</h3>
                <p className="text-3xl font-bold text-blue-800 dark:text-blue-200">
                  P₂ = P₁V₁ / V₂
                </p>
              </div>

              <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-6">
                <h3 className="font-bold text-purple-900 dark:text-purple-100 mb-3">Find V₂:</h3>
                <p className="text-3xl font-bold text-purple-800 dark:text-purple-200">
                  V₂ = P₁V₁ / P₂
                </p>
              </div>

              <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-6">
                <h3 className="font-bold text-green-900 dark:text-green-100 mb-3">Find P₁:</h3>
                <p className="text-3xl font-bold text-green-800 dark:text-green-200">
                  P₁ = P₂V₂ / V₁
                </p>
              </div>

              <div className="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-6">
                <h3 className="font-bold text-orange-900 dark:text-orange-100 mb-3">Find V₁:</h3>
                <p className="text-3xl font-bold text-orange-800 dark:text-orange-200">
                  V₁ = P₂V₂ / P₁
                </p>
              </div>
            </div>
          </section>

          {/* Example */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Step-by-Step Example</h2>
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Problem: A gas at 1.50 atm occupies 6.00 L. If compressed to 2.00 L at constant temperature, what is the new pressure?
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-2">Given:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>P₁ = 1.50 atm</li>
                    <li>V₁ = 6.00 L</li>
                    <li>V₂ = 2.00 L</li>
                    <li>Find: P₂</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 1: Write Boyle's Law</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    P₁V₁ = P₂V₂
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 2: Rearrange to solve for P₂</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    P₂ = P₁V₁ / V₂
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 3: Substitute values</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    P₂ = (1.50 atm)(6.00 L) / (2.00 L)
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 4: Calculate</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    P₂ = 9.00 atm·L / 2.00 L = 4.50 atm
                  </p>
                </div>

                <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg">
                  <p className="font-bold text-green-900 dark:text-green-100 mb-2">
                    Answer: P₂ = 4.50 atm
                  </p>
                  <p className="text-sm">
                    ✅ Makes sense: Volume decreased by 1/3, so pressure increased by 3×
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Real World Applications */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Real-World Applications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-6">
                <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-3">🫁 Breathing</h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  Diaphragm expands lungs → volume increases → pressure drops → air rushes in
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-6">
                <h3 className="font-bold text-green-900 dark:text-green-100 mb-3">💉 Syringes</h3>
                <p className="text-green-800 dark:text-green-200 text-sm">
                  Pull plunger → volume increases → pressure drops → liquid drawn in
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-6">
                <h3 className="font-bold text-purple-900 dark:text-purple-100 mb-3">🎈 Balloons</h3>
                <p className="text-purple-800 dark:text-purple-200 text-sm">
                  Squeeze balloon → volume decreases → internal pressure increases
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg p-6">
                <h3 className="font-bold text-orange-900 dark:text-orange-100 mb-3">🤿 Scuba Diving</h3>
                <p className="text-orange-800 dark:text-orange-200 text-sm">
                  Ascend from depth → external pressure decreases → air in lungs expands (must exhale!)
                </p>
              </div>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Common Mistakes</h2>
            <div className="space-y-4">
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Temperature not constant</h3>
                <p className="text-red-800 dark:text-red-200">
                  Boyle's Law ONLY works when temperature is constant. If T changes, use the Combined Gas Law instead.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Unit mismatches</h3>
                <p className="text-red-800 dark:text-red-200">
                  P₁ and P₂ must be in the same units. V₁ and V₂ must be in the same units. Convert before calculating!
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Flipping the relationship</h3>
                <p className="text-red-800 dark:text-red-200">
                  It's P₁V₁ = P₂V₂, NOT P₁V₂ = P₂V₁. Initial with initial, final with final.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Not checking your answer</h3>
                <p className="text-red-800 dark:text-red-200">
                  If volume decreases, pressure MUST increase. If volume increases, pressure MUST decrease. Verify your answer makes physical sense!
                </p>
              </div>
            </div>
          </section>

          {/* Related Calculators */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Related Calculators</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/gas-laws-calculators/boyles-law-calculator" className="block p-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Boyle's Law Calculator</h3>
                <p>Calculate P₁, V₁, P₂, or V₂</p>
              </Link>

              <Link href="/gas-laws-calculators/combined-gas-law-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Combined Gas Law</h3>
                <p className="text-gray-600 dark:text-gray-400">When T also changes</p>
              </Link>

              <Link href="/gas-laws-calculators/ideal-gas-law-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Ideal Gas Law</h3>
                <p className="text-gray-600 dark:text-gray-400">PV = nRT calculations</p>
              </Link>

              <Link href="/gas-laws-calculators/gas-density-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Gas Density</h3>
                <p className="text-gray-600 dark:text-gray-400">How pressure affects density</p>
              </Link>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What is Boyle's Law?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  P₁V₁ = P₂V₂ at constant temperature. Pressure and volume are inversely proportional - when one goes up, the other goes down.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Why does this happen?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Gas molecules collide with container walls. Smaller volume = more collisions per area = higher pressure. Same number of molecules, less space!
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">When does Boyle's Law NOT work?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  At very high pressures (molecules too close), very low temperatures (gas liquefies), or when temperature changes during compression.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Can I use any pressure units?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Yes, as long as P₁ and P₂ use the SAME units. atm, kPa, mmHg, psi - all work! Same rule for volume units.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">How is this different from the Ideal Gas Law?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Boyle's Law is a special case of PV=nRT when n and T are constant. It's simpler when you only care about P and V changes.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-between">
              <Link href="/chemistry-formulas" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                ← Back to All Formulas
              </Link>
              <Link href="/chemistry-formulas/charles-law" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                Next: Charles's Law →
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
            "headline": "Boyles Law",
            "description": "Boyles Law on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/boyles-law",
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
                "name": "Boyles Law",
                "item": "https://chemsolved.com/chemistry-formulas/boyles-law"
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
