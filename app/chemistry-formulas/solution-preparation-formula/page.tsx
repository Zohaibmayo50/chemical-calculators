import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Solution Preparation Formula | Molarity & Dilution Calculations',
  description: 'Prepare solutions with precise concentrations. Calculate mass, volume, and dilutions for accurate solution preparation.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/solution-preparation-formula',
  },
  keywords: ['solution preparation', 'molarity', 'dilution', 'M1V1=M2V2', 'concentration', 'mass per volume']
};

export default function SolutionPreparationFormulaPage() {
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
            <span className="text-gray-900 dark:text-white font-medium">Solution Preparation</span>
          </nav>
        </div>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
            <h1 className="text-5xl font-bold mb-4 text-center">Solution Preparation Formula</h1>
            <p className="text-xl text-center text-cyan-100">
              Calculate mass and volume requirements for preparing solutions of precise concentration
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-l-4 border-indigo-500">
            <h2 className="text-3xl font-bold mb-6">Key Formulas</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-900/30 dark:to-teal-900/30 rounded-xl p-8">
                <h3 className="text-xl font-bold text-cyan-900 dark:text-cyan-300 mb-4">Molarity (M)</h3>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center">
                  <p className="text-3xl font-mono font-bold text-cyan-900 dark:text-cyan-300">M = n / V</p>
                  <p className="text-lg mt-2 text-gray-700 dark:text-gray-300">
                    M = moles solute / liters solution
                  </p>
                  <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
                    Units: mol/L (M)
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-900/30 dark:to-emerald-900/30 rounded-xl p-8">
                <h3 className="text-xl font-bold text-teal-900 dark:text-teal-300 mb-4">Mass from Molarity</h3>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center">
                  <p className="text-3xl font-mono font-bold text-teal-900 dark:text-teal-300">mass = M Ã— V Ã— MM</p>
                  <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
                    M (mol/L) Ã— V (L) Ã— MM (g/mol) = mass (g)
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/30 dark:to-green-900/30 rounded-xl p-8">
                <h3 className="text-xl font-bold text-emerald-900 dark:text-emerald-300 mb-4">Dilution Formula</h3>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center">
                  <p className="text-3xl font-mono font-bold text-emerald-900 dark:text-emerald-300">Mâ‚Vâ‚ = Mâ‚‚Vâ‚‚</p>
                  <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
                    Initial concentration Ã— initial volume = final concentration Ã— final volume
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Preparation Procedures</h2>
            
            <div className="space-y-6">
              <div className="bg-cyan-50 dark:bg-cyan-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-cyan-900 dark:text-cyan-300 mb-4">From Solid Solute</h3>
                <ol className="space-y-3 text-gray-700 dark:text-gray-300 list-decimal ml-6">
                  <li><strong>Calculate mass:</strong> mass = M Ã— V Ã— MM</li>
                  <li><strong>Weigh solute:</strong> Use analytical balance</li>
                  <li><strong>Dissolve:</strong> Add some solvent, stir until dissolved</li>
                  <li><strong>Transfer:</strong> Pour into volumetric flask</li>
                  <li><strong>Rinse:</strong> Rinse weighing container, add to flask</li>
                  <li><strong>Fill to mark:</strong> Add solvent until meniscus at calibration line</li>
                  <li><strong>Mix:</strong> Invert flask several times</li>
                </ol>
              </div>

              <div className="bg-teal-50 dark:bg-teal-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-teal-900 dark:text-teal-300 mb-4">By Dilution (from Stock Solution)</h3>
                <ol className="space-y-3 text-gray-700 dark:text-gray-300 list-decimal ml-6">
                  <li><strong>Calculate volume:</strong> Vâ‚ = Mâ‚‚Vâ‚‚ / Mâ‚</li>
                  <li><strong>Measure stock:</strong> Use pipette or graduated cylinder</li>
                  <li><strong>Transfer:</strong> Pour into volumetric flask</li>
                  <li><strong>Add solvent:</strong> Fill to mark (not before!)</li>
                  <li><strong>Mix thoroughly:</strong> Invert multiple times</li>
                </ol>
              </div>

              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-emerald-900 dark:text-emerald-300 mb-4">From Concentrated Acid</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p className="font-bold text-red-600">âš ï¸ SAFETY: Always add acid to water, never water to acid!</p>
                  <ol className="space-y-2 list-decimal ml-6 mt-4">
                    <li>Calculate volume of concentrated acid needed</li>
                    <li>Add ~50% of final volume of water to flask</li>
                    <li>Slowly add concentrated acid while stirring</li>
                    <li>Allow to cool (dilution is exothermic!)</li>
                    <li>Fill to mark with water</li>
                    <li>Mix thoroughly</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Worked Examples</h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-cyan-900 dark:text-cyan-300 mb-4">Example 1: Preparing from Solid</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> Prepare 500 mL of 0.100 M NaCl solution</p>
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6"><strong>Given:</strong></p>
                  <p className="ml-12">M = 0.100 M</p>
                  <p className="ml-12">V = 500 mL = 0.500 L</p>
                  <p className="ml-12">MM(NaCl) = 58.44 g/mol</p>
                  <p className="ml-6 mt-4"><strong>Calculate mass:</strong></p>
                  <p className="ml-12">mass = M Ã— V Ã— MM</p>
                  <p className="ml-12">mass = 0.100 Ã— 0.500 Ã— 58.44</p>
                  <p className="ml-12">mass = 2.92 g</p>
                  <p className="ml-6 font-bold text-green-600 text-xl mt-4">
                    Weigh 2.92 g NaCl, dissolve in water, dilute to 500 mL
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-teal-900 dark:text-teal-300 mb-4">Example 2: Dilution</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> Prepare 250 mL of 0.50 M HCl from 6.0 M stock</p>
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">Use Mâ‚Vâ‚ = Mâ‚‚Vâ‚‚</p>
                  <p className="ml-6">Mâ‚ = 6.0 M (stock)</p>
                  <p className="ml-6">Mâ‚‚ = 0.50 M (desired)</p>
                  <p className="ml-6">Vâ‚‚ = 250 mL (final volume)</p>
                  <p className="ml-6 mt-4">Vâ‚ = Mâ‚‚Vâ‚‚ / Mâ‚</p>
                  <p className="ml-6">Vâ‚ = (0.50)(250) / 6.0</p>
                  <p className="ml-6">Vâ‚ = 20.8 mL</p>
                  <p className="ml-6 font-bold text-green-600 text-xl mt-4">
                    Measure 20.8 mL of 6.0 M HCl, dilute to 250 mL
                  </p>
                  <p className="ml-6 text-sm text-blue-600 mt-2">
                    (Add acid to ~200 mL water, then dilute to 250 mL)
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">Example 3: Hydrated Salt</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> Prepare 100 mL of 0.200 M CuSOâ‚„ from CuSOâ‚„Â·5Hâ‚‚O</p>
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">MM(CuSOâ‚„Â·5Hâ‚‚O) = 249.68 g/mol</p>
                  <p className="ml-6">M = 0.200 M</p>
                  <p className="ml-6">V = 0.100 L</p>
                  <p className="ml-6 mt-4">mass = M Ã— V Ã— MM</p>
                  <p className="ml-6">mass = 0.200 Ã— 0.100 Ã— 249.68</p>
                  <p className="ml-6">mass = 5.00 g</p>
                  <p className="ml-6 font-bold text-green-600 text-xl mt-4">
                    Use 5.00 g CuSOâ‚„Â·5Hâ‚‚O (not anhydrous CuSOâ‚„!)
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-4">Example 4: Serial Dilution</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> Prepare 1.0 mM solution from 1.0 M stock</p>
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">Direct dilution: 1000Ã— dilution needed</p>
                  <p className="ml-6">For 100 mL: need 0.1 mL stock (too small to measure accurately!)</p>
                  <p className="ml-6 mt-4"><strong>Better approach - two steps:</strong></p>
                  <p className="ml-12"><strong>Step 1:</strong> 1.0 M â†’ 0.010 M (100Ã— dilution)</p>
                  <p className="ml-16">1.0 mL stock + 99 mL water = 100 mL of 0.010 M</p>
                  <p className="ml-12"><strong>Step 2:</strong> 0.010 M â†’ 0.001 M (10Ã— dilution)</p>
                  <p className="ml-16">10 mL of 0.010 M + 90 mL water = 100 mL of 1.0 mM</p>
                  <p className="ml-6 font-bold text-green-600 mt-4">
                    Serial dilution gives better accuracy for large dilutions
                  </p>
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
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Adding Solvent to Solute to Reach Volume</h3>
                  <p className="text-gray-700 dark:text-gray-300">WRONG! Final volume includes solute volume. Must dilute TO the mark.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">âš ï¸</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Using mL in Molarity Formula</h3>
                  <p className="text-gray-700 dark:text-gray-300">M = mol/L requires liters! Convert mL to L first (Ã·1000)</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">âš ï¸</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Ignoring Water of Hydration</h3>
                  <p className="text-gray-700 dark:text-gray-300">Use formula mass of hydrated form (e.g., CuSOâ‚„Â·5Hâ‚‚O not CuSOâ‚„)</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">âš ï¸</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Adding Water to Concentrated Acid</h3>
                  <p className="text-gray-700 dark:text-gray-300">DANGEROUS! Always add acid to water slowly. "Do like you oughta, add acid to water"</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4">
                <span className="text-2xl">ðŸ’¡</span>
                <div>
                  <h3 className="font-bold text-yellow-900 dark:text-yellow-300 mb-2">Use Volumetric Glassware</h3>
                  <p className="text-gray-700 dark:text-gray-300">For accurate solutions, use volumetric flasks and pipettes, not beakers or Erlenmeyer flasks</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Related Tools</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/concentration-and-solution-calculators/solution-preparation-calculator" className="block p-6 bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Solution Preparation Calculator</h3>
                <p className="text-cyan-100">Automated mass calculations</p>
              </Link>
              <Link href="/chemistry-formulas/molarity-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Molarity</h3>
                <p className="text-gray-600 dark:text-gray-400">Concentration calculations</p>
              </Link>
              <Link href="/chemistry-formulas/dilution-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Dilution</h3>
                <p className="text-gray-600 dark:text-gray-400">Mâ‚Vâ‚ = Mâ‚‚Vâ‚‚</p>
              </Link>
              <Link href="/chemistry-formulas/mass-percent-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Mass Percent</h3>
                <p className="text-gray-600 dark:text-gray-400">Concentration by mass</p>
              </Link>
              <Link href="/concentration-and-solution-calculators" className="block p-6 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Concentration & Solution Calculators</h3>
                <p className="text-white/90">All concentration tools</p>
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
            "headline": "Solution Preparation Formula",
            "description": "Solution Preparation Formula on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/solution-preparation-formula",
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
                "name": "Solution Preparation Formula",
                "item": "https://chemsolved.com/chemistry-formulas/solution-preparation-formula"
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
