import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Combined Gas Law | Pâ‚Vâ‚/Tâ‚ = Pâ‚‚Vâ‚‚/Tâ‚‚ | Gas Calculations',
  description: 'Master the combined gas law relating pressure, volume, and temperature. Includes examples and gas law calculator links.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/combined-gas-law',
  },
  keywords: 'combined gas law, gas laws, pressure volume temperature, PVT, ideal gas',
};

export default function CombinedGasLawPage() {
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
            <span className="text-gray-600 dark:text-gray-400">Combined Gas Law</span>
          </nav>

          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Combined Gas Law
          </h1>

          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            The <strong>combined gas law</strong> relates pressure, volume, and temperature of a fixed amount of gas. 
            It combines Boyle's, Charles's, and Gay-Lussac's laws into one powerful equation.
          </p>

          {/* Formula Block */}
          <div className="my-12 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">The Combined Gas Law</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center">
              <p className="text-6xl font-bold text-gray-900 dark:text-white mb-2">
                Pâ‚Vâ‚/Tâ‚ = Pâ‚‚Vâ‚‚/Tâ‚‚
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                For a fixed amount of gas
              </p>
            </div>
          </div>

          {/* Variable Definitions */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Variable Definitions</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">Pâ‚ = Initial Pressure</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> atm, mmHg, Pa, kPa, torr
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">Pâ‚‚ = Final Pressure</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> Same as Pâ‚
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-2">Vâ‚ = Initial Volume</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> L, mL, mÂ³, cmÂ³
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-2">Vâ‚‚ = Final Volume</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> Same as Vâ‚
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">Tâ‚ = Initial Temperature</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> Kelvin (K) â€” MUST use Kelvin!
                </p>
                <p className="text-red-600 dark:text-red-400 text-sm mt-2">
                  âš ï¸ Never use Â°C or Â°F
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">Tâ‚‚ = Final Temperature</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> Kelvin (K)
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                  K = Â°C + 273.15
                </p>
              </div>
            </div>
          </section>

          {/* When to Use */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">When to Use Combined Gas Law</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-6">
                <h3 className="font-bold text-green-900 dark:text-green-100 mb-3">âœ… Use When:</h3>
                <ul className="space-y-2 text-green-800 dark:text-green-200 text-sm">
                  <li>â€¢ Amount of gas is constant (n fixed)</li>
                  <li>â€¢ Both P, V, and T change</li>
                  <li>â€¢ Comparing two states</li>
                </ul>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/30 rounded-lg p-6">
                <h3 className="font-bold text-yellow-900 dark:text-yellow-100 mb-3">âš¡ Reduces To:</h3>
                <ul className="space-y-2 text-yellow-800 dark:text-yellow-200 text-sm">
                  <li>â€¢ <strong>Boyle's:</strong> T constant â†’ Pâ‚Vâ‚ = Pâ‚‚Vâ‚‚</li>
                  <li>â€¢ <strong>Charles's:</strong> P constant â†’ Vâ‚/Tâ‚ = Vâ‚‚/Tâ‚‚</li>
                  <li>â€¢ <strong>Gay-Lussac's:</strong> V constant â†’ Pâ‚/Tâ‚ = Pâ‚‚/Tâ‚‚</li>
                </ul>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 rounded-lg p-6">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-3">âŒ Don't Use If:</h3>
                <ul className="space-y-2 text-red-800 dark:text-red-200 text-sm">
                  <li>â€¢ Amount of gas changes</li>
                  <li>â€¢ Need to find moles (n)</li>
                  <li>â€¢ Use Ideal Gas Law instead</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Rearranged Forms */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Rearranged Forms</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-6">
                <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Solve for Pâ‚‚:</h3>
                <p className="text-2xl font-bold text-blue-800 dark:text-blue-200">
                  Pâ‚‚ = Pâ‚Vâ‚Tâ‚‚ / (Vâ‚‚Tâ‚)
                </p>
              </div>

              <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-6">
                <h3 className="font-bold text-purple-900 dark:text-purple-100 mb-3">Solve for Vâ‚‚:</h3>
                <p className="text-2xl font-bold text-purple-800 dark:text-purple-200">
                  Vâ‚‚ = Pâ‚Vâ‚Tâ‚‚ / (Pâ‚‚Tâ‚)
                </p>
              </div>

              <div className="bg-indigo-100 dark:bg-indigo-900/30 rounded-lg p-6">
                <h3 className="font-bold text-indigo-900 dark:text-indigo-100 mb-3">Solve for Tâ‚‚:</h3>
                <p className="text-2xl font-bold text-indigo-800 dark:text-indigo-200">
                  Tâ‚‚ = Pâ‚‚Vâ‚‚Tâ‚ / (Pâ‚Vâ‚)
                </p>
              </div>

              <div className="bg-cyan-100 dark:bg-cyan-900/30 rounded-lg p-6">
                <h3 className="font-bold text-cyan-900 dark:text-cyan-100 mb-3">General Form:</h3>
                <p className="text-xl font-bold text-cyan-800 dark:text-cyan-200">
                  PV / T = constant
                </p>
              </div>
            </div>
          </section>

          {/* Example */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Step-by-Step Example</h2>
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Problem: A gas at 2.0 atm, 5.0 L, and 25Â°C is heated to 100Â°C and compressed to 3.0 L. Find the final pressure.
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-2">Given:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Pâ‚ = 2.0 atm</li>
                    <li>Vâ‚ = 5.0 L</li>
                    <li>Tâ‚ = 25Â°C</li>
                    <li>Vâ‚‚ = 3.0 L</li>
                    <li>Tâ‚‚ = 100Â°C</li>
                    <li>Find: Pâ‚‚</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 1: Convert temperatures to Kelvin</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    Tâ‚ = 25 + 273.15 = 298 K<br />
                    Tâ‚‚ = 100 + 273.15 = 373 K
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 2: Rearrange for Pâ‚‚</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    Pâ‚‚ = Pâ‚Vâ‚Tâ‚‚ / (Vâ‚‚Tâ‚)
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 3: Substitute values</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    Pâ‚‚ = (2.0 atm)(5.0 L)(373 K) / [(3.0 L)(298 K)]
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 4: Calculate</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    Pâ‚‚ = 3730 / 894 = 4.17 atm
                  </p>
                </div>

                <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg">
                  <p className="font-bold text-green-900 dark:text-green-100">
                    Answer: Pâ‚‚ = 4.2 atm
                  </p>
                  <p className="text-sm mt-2">Pressure increased because: volume decreased (compression) AND temperature increased (heating).</p>
                </div>
              </div>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Common Mistakes</h2>
            <div className="space-y-4">
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">âŒ Using Celsius instead of Kelvin</h3>
                <p className="text-red-800 dark:text-red-200">
                  Temperature MUST be in Kelvin! Using Â°C gives completely wrong answers. Always convert: K = Â°C + 273.15
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">âŒ Mismatched pressure units</h3>
                <p className="text-red-800 dark:text-red-200">
                  Pâ‚ and Pâ‚‚ must have the same units. Convert before calculating (e.g., all atm or all kPa).
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">âŒ Mismatched volume units</h3>
                <p className="text-red-800 dark:text-red-200">
                  Vâ‚ and Vâ‚‚ must have the same units. If one is mL and other is L, convert first!
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">âŒ Assuming moles are constant when they're not</h3>
                <p className="text-red-800 dark:text-red-200">
                  Combined gas law only works when amount of gas is FIXED. If gas leaks or is added, use ideal gas law instead.
                </p>
              </div>
            </div>
          </section>

          {/* Related Calculators */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Related Calculators</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/physical-chemistry-calculators/combined-gas-law-calculator" className="block p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Combined Gas Law Calculator</h3>
                <p>Calculate P, V, or T changes</p>
              </Link>

              <Link href="/physical-chemistry-calculators/ideal-gas-law-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Ideal Gas Law</h3>
                <p className="text-gray-600 dark:text-gray-400">PV = nRT with moles</p>
              </Link>

              <Link href="/" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Boyle's Law</h3>
                <p className="text-gray-600 dark:text-gray-400">P-V relationship (T constant)</p>
              </Link>

              <Link href="/" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Charles's Law</h3>
                <p className="text-gray-600 dark:text-gray-400">V-T relationship (P constant)</p>
              </Link>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What is the combined gas law?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Pâ‚Vâ‚/Tâ‚ = Pâ‚‚Vâ‚‚/Tâ‚‚. It relates pressure, volume, and temperature for a fixed amount of gas, combining three simpler gas laws.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">When do I use combined gas law vs ideal gas law?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Use combined gas law when moles (n) are constant and you're comparing two states. Use ideal gas law when n varies or you need to find n.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Why must temperature be in Kelvin?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Gas laws assume absolute temperature scale. Celsius can be negative, which would give impossible negative volume/pressure ratios.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What happens if one variable stays constant?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  The equation simplifies: constant T â†’ Boyle's Law, constant P â†’ Charles's Law, constant V â†’ Gay-Lussac's Law.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Do pressure and volume units matter?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Units must be consistent (Pâ‚ and Pâ‚‚ same units, Vâ‚ and Vâ‚‚ same units), but they cancel out, so any units work if matched.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-between">
              <Link href="/chemistry-formulas" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                â† Back to All Formulas
              </Link>
              <Link href="/chemistry-formulas/daltons-law" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                Next: Dalton's Law â†’
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
            "headline": "Combined Gas Law",
            "description": "Combined Gas Law on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/combined-gas-law",
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
                "name": "Combined Gas Law",
                "item": "https://chemsolved.com/chemistry-formulas/combined-gas-law"
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
