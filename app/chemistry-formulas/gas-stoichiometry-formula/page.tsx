import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Gas Stoichiometry Formula | Molar Volume & Gas Calculations',
  description: 'Calculate stoichiometry involving gases using molar volume at STP and ideal gas law. Convert between mass, moles, and volume.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/gas-stoichiometry-formula',
  },
  keywords: ['gas stoichiometry', 'molar volume', 'STP', 'ideal gas law', 'gas reactions', '22.4 L/mol', 'PV=nRT']
};

export default function GasStoichiometryFormulaPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <nav className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <Link href="/">Home</Link>
            <span>â†’</span>
            <Link href="/chemistry-formulas">Chemistry Formulas</Link>
            <span>â†’</span>
            <span className="text-gray-900 dark:text-white font-medium">Gas Stoichiometry</span>
          </nav>
        </div>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-sky-600 via-blue-600 to-indigo-600 rounded-3xl p-12 text-white shadow-2xl">
            <h1 className="text-5xl font-bold mb-4 text-center">Gas Stoichiometry Formula</h1>
            <p className="text-xl text-center text-sky-100">
              Stoichiometric calculations involving gases using molar volume and ideal gas law
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-l-4 border-sky-500">
            <h2 className="text-3xl font-bold mb-6">Key Formulas</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-sky-50 to-blue-50 dark:from-sky-900/30 dark:to-blue-900/30 rounded-xl p-8">
                <h3 className="text-xl font-bold text-sky-900 dark:text-sky-300 mb-4">Molar Volume at STP</h3>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6">
                  <p className="text-3xl font-mono font-bold text-sky-900 dark:text-sky-300 text-center mb-4">
                    1 mol gas = 22.4 L at STP
                  </p>
                  <p className="text-sm text-center text-gray-600 dark:text-gray-400">STP: 0Â°C (273 K) and 1 atm</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl p-8">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">Ideal Gas Law</h3>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center">
                  <p className="text-3xl font-mono font-bold text-blue-900 dark:text-blue-300">PV = nRT</p>
                  <p className="text-lg mt-4 text-gray-700 dark:text-gray-300">
                    n = PV / RT (for non-STP conditions)
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-xl p-8">
                <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-300 mb-4">Volume-Volume Relationships</h3>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center">
                  <p className="text-2xl font-mono font-bold text-indigo-900 dark:text-indigo-300">
                    Vâ‚/a = Vâ‚‚/b (at same T & P)
                  </p>
                  <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">Gas volumes proportional to mole ratios</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Constants & Conditions</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-sky-50 dark:bg-sky-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-sky-900 dark:text-sky-300 mb-2">STP Conditions</h3>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Temperature:</strong> 0Â°C = 273.15 K</p>
                  <p><strong>Pressure:</strong> 1 atm = 101.325 kPa</p>
                  <p><strong>Molar Volume:</strong> 22.4 L/mol</p>
                </div>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-blue-900 dark:text-blue-300 mb-2">Gas Constant (R)</h3>
                <div className="space-y-2 text-gray-700 dark:text-gray-300 font-mono text-sm">

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Related Calculators</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <a href="/chemistry-formulas/gas-stoichiometry-formula" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-blue-900 mb-2">Gas Stoichiometry Calculator</h3>
                <p className="text-sm text-gray-600">Calculate gas volumes in reactions</p>
              </a>
              <a href="/physical-chemistry-calculators/ideal-gas-law-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-blue-900 mb-2">Ideal Gas Law Calculator</h3>
                <p className="text-sm text-gray-600">PV = nRT calculations</p>
              </a>
              <a href="/chemistry-formulas/ideal-gas-law" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-green-900 mb-2">Ideal Gas Law Formula</h3>
                <p className="text-sm text-gray-600">PV = nRT derivations</p>
              </a>
              <a href="/physical-chemistry-calculators" className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-semibold mb-2">All Gas Calculators</h3>
                <p className="text-sm opacity-90">Explore all gas law tools</p>
              </a>
            </div>
          </div>
        </section>
                  <p>0.0821 LÂ·atm/(molÂ·K)</p>
                  <p>8.314 J/(molÂ·K)</p>
                  <p>8.314 kPaÂ·L/(molÂ·K)</p>
                  <p>62.4 LÂ·mmHg/(molÂ·K)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Worked Examples</h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-sky-50 to-blue-50 dark:from-sky-900/20 dark:to-blue-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-sky-900 dark:text-sky-300 mb-4">Example 1: Volume at STP</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p className="font-mono bg-white dark:bg-gray-700 p-2 rounded">2Hâ‚‚ + Oâ‚‚ â†’ 2Hâ‚‚O</p>
                  <p className="mt-4"><strong>Problem:</strong> What volume of Oâ‚‚ at STP reacts with 10.0 g Hâ‚‚?</p>
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6"><strong>Step 1:</strong> Convert Hâ‚‚ to moles</p>
                  <p className="ml-12">n(Hâ‚‚) = 10.0 / 2.02 = 4.95 mol</p>
                  <p className="ml-6"><strong>Step 2:</strong> Use mole ratio</p>
                  <p className="ml-12">n(Oâ‚‚) = 4.95 Ã— (1/2) = 2.48 mol</p>
                  <p className="ml-6"><strong>Step 3:</strong> Convert to volume at STP</p>
                  <p className="ml-12">V(Oâ‚‚) = 2.48 mol Ã— 22.4 L/mol</p>
                  <p className="ml-6 font-bold text-green-600 text-xl mt-4">V(Oâ‚‚) = 55.5 L at STP</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">Example 2: Non-STP Conditions</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p className="font-mono bg-white dark:bg-gray-700 p-2 rounded">2KClOâ‚ƒ â†’ 2KCl + 3Oâ‚‚</p>
                  <p className="mt-4"><strong>Problem:</strong> 49.0 g KClOâ‚ƒ decomposes. Find V(Oâ‚‚) at 25Â°C and 1.5 atm.</p>
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">n(KClOâ‚ƒ) = 49.0 / 122.55 = 0.400 mol</p>
                  <p className="ml-6">n(Oâ‚‚) = 0.400 Ã— (3/2) = 0.600 mol</p>
                  <p className="ml-6 mt-4">Use PV = nRT:</p>
                  <p className="ml-12">V = nRT/P</p>
                  <p className="ml-12">V = (0.600)(0.0821)(298) / 1.5</p>
                  <p className="ml-12">V = 14.7 / 1.5</p>
                  <p className="ml-6 font-bold text-green-600 text-xl mt-4">V(Oâ‚‚) = 9.8 L</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-4">Example 3: Gas-to-Gas Volume Ratio</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p className="font-mono bg-white dark:bg-gray-700 p-2 rounded">Nâ‚‚ + 3Hâ‚‚ â†’ 2NHâ‚ƒ</p>
                  <p className="mt-4"><strong>Problem:</strong> What volume Hâ‚‚ reacts with 50.0 L Nâ‚‚? (same T & P)</p>
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">At same T & P, volume ratios = mole ratios</p>
                  <p className="ml-6">V(Hâ‚‚)/V(Nâ‚‚) = 3/1</p>
                  <p className="ml-6">V(Hâ‚‚) = 50.0 Ã— (3/1)</p>
                  <p className="ml-6 font-bold text-green-600 text-xl mt-4">V(Hâ‚‚) = 150 L</p>
                  <p className="ml-6 text-sm text-blue-600 mt-2">(No need for PV=nRT when gases are at same conditions!)</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-emerald-900 dark:text-emerald-300 mb-4">Example 4: Mass to Gas Volume</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p className="font-mono bg-white dark:bg-gray-700 p-2 rounded">Câ‚ƒHâ‚ˆ + 5Oâ‚‚ â†’ 3COâ‚‚ + 4Hâ‚‚O</p>
                  <p className="mt-4"><strong>Problem:</strong> 22.0 g propane burns. Find V(COâ‚‚) at STP.</p>
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">n(Câ‚ƒHâ‚ˆ) = 22.0 / 44.10 = 0.499 mol</p>
                  <p className="ml-6">n(COâ‚‚) = 0.499 Ã— (3/1) = 1.50 mol</p>
                  <p className="ml-6">V(COâ‚‚) = 1.50 Ã— 22.4</p>
                  <p className="ml-6 font-bold text-green-600 text-xl mt-4">V(COâ‚‚) = 33.6 L at STP</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Common Mistakes</h2>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">âš ï¸</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Using 22.4 L/mol at Non-STP</h3>
                  <p className="text-gray-700 dark:text-gray-300">22.4 L/mol ONLY valid at STP! Use PV=nRT for other conditions</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">âš ï¸</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Temperature in Celsius</h3>
                  <p className="text-gray-700 dark:text-gray-300">Must use Kelvin in PV=nRT: K = Â°C + 273.15</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">âš ï¸</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Wrong R Value</h3>
                  <p className="text-gray-700 dark:text-gray-300">Match R units with pressure units: 0.0821 for atm, 8.314 for kPa</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4">
                <span className="text-2xl">ðŸ’¡</span>
                <div>
                  <h3 className="font-bold text-yellow-900 dark:text-yellow-300 mb-2">Gas-to-Gas Shortcut</h3>
                  <p className="text-gray-700 dark:text-gray-300">At same T & P, gas volumes are in same ratio as mole coefficients</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-900/20 dark:to-blue-900/20 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Related Tools</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/chemistry-formulas/gas-stoichiometry-formula" className="block p-6 bg-gradient-to-r from-sky-600 to-blue-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Gas Stoichiometry Calculator</h3>
                <p className="text-sky-100">Automated calculations</p>
              </Link>
              <Link href="/chemistry-formulas/ideal-gas-law" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Ideal Gas Law</h3>
                <p className="text-gray-600 dark:text-gray-400">PV=nRT formula</p>
              </Link>
              <Link href="/physical-chemistry-calculators" className="block p-6 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">All Gas Laws Calculators</h3>
                <p className="text-white/90">Explore all gas law tools</p>
              </Link>
              <Link href="/chemistry-formulas/molar-volume-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Molar Volume</h3>
                <p className="text-gray-600 dark:text-gray-400">22.4 L/mol at STP</p>
              </Link>
            </div>
          </div>
        </section>
      
      {/* Structured Data - EducationalArticle */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": "Gas Stoichiometry Formula",
            "description": "Gas Stoichiometry Formula on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/gas-stoichiometry-formula",
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
                "name": "Gas Stoichiometry Formula",
                "item": "https://chemsolved.com/chemistry-formulas/gas-stoichiometry-formula"
              }
            ]
          })
        }}
      />
      </main>
      <Footer />
    </>
  );
}
