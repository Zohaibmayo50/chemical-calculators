import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Gay-Lussac\'s Law | Pâ‚/Tâ‚ = Pâ‚‚/Tâ‚‚ | Pressure-Temperature Relationship',
  description: 'Master Gay-Lussac\'s Law (Pâ‚/Tâ‚ = Pâ‚‚/Tâ‚‚) for gas pressure-temperature calculations at constant volume. Includes examples and calculator links.',
  keywords: 'gay lussacs law, pressure temperature, gas laws, direct relationship, P1/T1 P2/T2, kelvin temperature',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/gay-lussacs-law',
  },
};

export default function GayLussacsLawPage() {
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
            <span className="text-gray-600 dark:text-gray-400">Gay-Lussac's Law</span>
          </nav>

          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Gay-Lussac's Law
          </h1>

          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            <strong>Gay-Lussac's Law</strong> states that pressure and temperature are directly proportional at constant volume. 
            Heat a gas in a fixed container and its pressure increases proportionally.
          </p>

          {/* Formula Block */}
          <div className="my-12 p-8 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">Gay-Lussac's Law</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center">
              <p className="text-6xl font-bold text-gray-900 dark:text-white mb-2">
                Pâ‚ / Tâ‚ = Pâ‚‚ / Tâ‚‚
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Initial pressure / initial temperature = Final pressure / final temperature
              </p>
            </div>
          </div>

          {/* Critical Warning */}
          <div className="mb-12 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
            <h3 className="font-bold text-red-900 dark:text-red-100 mb-2 text-xl">âš ï¸ CRITICAL: Temperature MUST Be in Kelvin!</h3>
            <p className="text-red-800 dark:text-red-200 mb-3">
              ALWAYS convert Â°C or Â°F to Kelvin before using Gay-Lussac's Law. Using Celsius will give completely wrong answers!
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-mono text-lg">
                K = Â°C + 273.15
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Example: 25Â°C = 298.15 K (often rounded to 298 K)
              </p>
            </div>
          </div>

          {/* Key Concept */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-orange-900 dark:text-orange-100 mb-4">
                The Direct Relationship
              </h2>
              <div className="space-y-4 text-orange-800 dark:text-orange-200">
                <p className="text-lg">
                  <strong>P âˆ T</strong> (at constant V and n)
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Double the temperature (K) â†’ pressure doubles</li>
                  <li>Halve the temperature (K) â†’ pressure halves</li>
                  <li>Heat a gas in rigid container â†’ pressure rises</li>
                  <li>Cool a gas in rigid container â†’ pressure drops</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Variable Definitions */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Variable Definitions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-orange-600 dark:text-orange-400 mb-2">Pâ‚ = Initial Pressure</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Common Units:</strong> atm, mmHg, torr, kPa, Pa, bar, psi
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Pressure before the temperature change
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-orange-600 dark:text-orange-400 mb-2">Tâ‚ = Initial Temperature</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> K (Kelvin) - MUST USE KELVIN!
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Temperature before the change
                </p>
                <p className="text-red-600 dark:text-red-400 text-sm mt-2 font-bold">
                  âŒ Do NOT use Â°C or Â°F directly!
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-orange-600 dark:text-orange-400 mb-2">Pâ‚‚ = Final Pressure</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> Same as Pâ‚
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Pressure after the temperature change
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-orange-600 dark:text-orange-400 mb-2">Tâ‚‚ = Final Temperature</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> K (Kelvin) - MUST USE KELVIN!
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Temperature after the change
                </p>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 border-l-4 border-yellow-500">
                <h3 className="font-bold text-yellow-900 dark:text-yellow-100 mb-2">âš ï¸ Constant Conditions</h3>
                <p className="text-yellow-800 dark:text-yellow-200">
                  <strong>Volume (V)</strong> must remain constant<br />
                  <strong>Amount of gas (n)</strong> must remain constant<br />
                  Container must be rigid (cannot expand)
                </p>
              </div>
            </div>
          </section>

          {/* Rearranged Forms */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Rearranged Forms</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-6">
                <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Find Pâ‚‚:</h3>
                <p className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-2">
                  Pâ‚‚ = Pâ‚Tâ‚‚ / Tâ‚
                </p>
                <p className="text-sm">Most common use!</p>
              </div>

              <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-6">
                <h3 className="font-bold text-purple-900 dark:text-purple-100 mb-3">Find Tâ‚‚:</h3>
                <p className="text-3xl font-bold text-purple-800 dark:text-purple-200">
                  Tâ‚‚ = Pâ‚‚Tâ‚ / Pâ‚
                </p>
              </div>

              <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-6">
                <h3 className="font-bold text-green-900 dark:text-green-100 mb-3">Find Pâ‚:</h3>
                <p className="text-3xl font-bold text-green-800 dark:text-green-200">
                  Pâ‚ = Pâ‚‚Tâ‚ / Tâ‚‚
                </p>
              </div>

              <div className="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-6">
                <h3 className="font-bold text-orange-900 dark:text-orange-100 mb-3">Find Tâ‚:</h3>
                <p className="text-3xl font-bold text-orange-800 dark:text-orange-200">
                  Tâ‚ = Pâ‚Tâ‚‚ / Pâ‚‚
                </p>
              </div>
            </div>
          </section>

          {/* Example */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Step-by-Step Example</h2>
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Problem: A gas in a rigid container has pressure 2.50 atm at 25Â°C. If heated to 100Â°C, what is the new pressure?
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-2">Given:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Pâ‚ = 2.50 atm</li>
                    <li>Tâ‚ = 25Â°C = 298 K</li>
                    <li>Tâ‚‚ = 100Â°C = 373 K</li>
                    <li>Find: Pâ‚‚</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 1: Convert to Kelvin</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    Tâ‚ = 25 + 273 = 298 K<br />
                    Tâ‚‚ = 100 + 273 = 373 K
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 2: Write Gay-Lussac's Law</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    Pâ‚/Tâ‚ = Pâ‚‚/Tâ‚‚
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 3: Rearrange to solve for Pâ‚‚</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    Pâ‚‚ = Pâ‚Tâ‚‚ / Tâ‚
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 4: Substitute values</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    Pâ‚‚ = (2.50 atm)(373 K) / (298 K)
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 5: Calculate</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    Pâ‚‚ = 932.5 atmÂ·K / 298 K = 3.13 atm
                  </p>
                </div>

                <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg">
                  <p className="font-bold text-green-900 dark:text-green-100 mb-2">
                    Answer: Pâ‚‚ = 3.13 atm
                  </p>
                  <p className="text-sm">
                    âœ… Makes sense: Temperature increased by 25%, pressure increased by 25%
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
                <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-3">ðŸš— Car Tires</h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  Drive on hot pavement â†’ tire heats up â†’ pressure increases â†’ check tire pressure when cool!
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-6">
                <h3 className="font-bold text-green-900 dark:text-green-100 mb-3">ðŸ”¥ Pressure Cookers</h3>
                <p className="text-green-800 dark:text-green-200 text-sm">
                  Heat sealed pot â†’ temperature rises â†’ pressure builds up â†’ cooks food faster at higher pressure
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-6">
                <h3 className="font-bold text-purple-900 dark:text-purple-100 mb-3">ðŸ’£ Spray Cans</h3>
                <p className="text-purple-800 dark:text-purple-200 text-sm">
                  Warning: "Do not heat" - hot can = high pressure = explosion risk!
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg p-6">
                <h3 className="font-bold text-orange-900 dark:text-orange-100 mb-3">ðŸ§ª Laboratory</h3>
                <p className="text-orange-800 dark:text-orange-200 text-sm">
                  Autoclave sterilization: high temperature creates high pressure to kill microorganisms
                </p>
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
                  THE #1 MISTAKE! Temperature MUST be in Kelvin. Using Â°C gives completely wrong answers. Always convert: K = Â°C + 273.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">âŒ Volume not constant</h3>
                <p className="text-red-800 dark:text-red-200">
                  Gay-Lussac's Law ONLY works when volume is constant (rigid container). If V changes, use the Combined Gas Law instead.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">âŒ Unit mismatches</h3>
                <p className="text-red-800 dark:text-red-200">
                  Pâ‚ and Pâ‚‚ must be in the same units. Tâ‚ and Tâ‚‚ must BOTH be in Kelvin. Convert before calculating!
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">âŒ Not checking your answer</h3>
                <p className="text-red-800 dark:text-red-200">
                  If temperature increases, pressure MUST increase. If temperature decreases, pressure MUST decrease. Verify your answer makes physical sense!
                </p>
              </div>
            </div>
          </section>

          {/* Related Calculators */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Related Calculators</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/" className="block p-6 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Gay-Lussac's Law Calculator</h3>
                <p>Calculate Pâ‚, Tâ‚, Pâ‚‚, or Tâ‚‚</p>
              </Link>

              <Link href="/physical-chemistry-calculators/combined-gas-law-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Combined Gas Law</h3>
                <p className="text-gray-600 dark:text-gray-400">When V also changes</p>
              </Link>

              <Link href="/physical-chemistry-calculators/ideal-gas-law-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Ideal Gas Law</h3>
                <p className="text-gray-600 dark:text-gray-400">PV = nRT calculations</p>
              </Link>

              <Link href="/" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Temperature Converter</h3>
                <p className="text-gray-600 dark:text-gray-400">Â°C â†” K â†” Â°F conversion</p>
              </Link>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What is Gay-Lussac's Law?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Pâ‚/Tâ‚ = Pâ‚‚/Tâ‚‚ at constant volume. Pressure and temperature are directly proportional - when one goes up, the other goes up.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Why must temperature be in Kelvin?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Gay-Lussac's Law requires an absolute temperature scale. 0 K is absolute zero - no molecular motion. Using Â°C would incorrectly suggest zero pressure at 0Â°C!
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Why does this happen?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Higher temperature = faster molecular motion = molecules hit walls harder and more often. In a rigid container, this increased kinetic energy shows up as higher pressure.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">How is this different from Charles's Law?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Charles's Law: V and T (P constant) - container can expand. Gay-Lussac's: P and T (V constant) - rigid container. Different conditions!
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What happens if the container isn't rigid?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  If volume can change, use Charles's Law (constant P) or Combined Gas Law (P, V, and T all change). Gay-Lussac's only works for rigid containers.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-between">
              <Link href="/chemistry-formulas" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                â† Back to All Formulas
              </Link>
              <Link href="/chemistry-formulas/normality-formula" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                Next: Normality Formula â†’
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
            "headline": "Gay Lussacs Law",
            "description": "Gay Lussacs Law on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/gay-lussacs-law",
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
                "name": "Gay Lussacs Law",
                "item": "https://chemsolved.com/chemistry-formulas/gay-lussacs-law"
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