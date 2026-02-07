import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Electrolysis Formula | Faraday\'s Laws & Electroplating Calculations',
  description: 'Calculate mass deposited, charge, and current in electrolysis. Faraday\'s laws for electroplating and electrolytic cell calculations.',
  keywords: ['electrolysis', 'Faraday\'s law', 'electroplating', 'coulombs', 'current', 'moles of electrons', 'electrochemistry'],
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/electrolysis-formula',
  },
};

export default function ElectrolysisFormulaPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <nav className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <Link href="/">Home</Link>
            <span>→</span>
            <Link href="/chemistry-formulas">Chemistry Formulas</Link>
            <span>→</span>
            <span className="text-gray-900 dark:text-white font-medium">Electrolysis</span>
          </nav>
        </div>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
            <h1 className="text-5xl font-bold mb-4 text-center">Electrolysis Formula</h1>
            <p className="text-xl text-center text-yellow-100">
              Faraday&apos;s laws: Calculate mass deposited using current, time, and charge
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-l-4 border-indigo-500">
            <h2 className="text-3xl font-bold mb-6">Faraday&apos;s Laws of Electrolysis</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/30 dark:to-amber-900/30 rounded-xl p-8">
                <h3 className="text-xl font-bold text-yellow-900 dark:text-yellow-300 mb-4">Key Formulas</h3>
                <div className="space-y-6">
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-6">
                    <p className="text-3xl font-mono font-bold text-yellow-900 dark:text-yellow-300 text-center mb-2">
                      Q = I × t
                    </p>
                    <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                      Q = charge (coulombs), I = current (amperes), t = time (seconds)
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-700 rounded-lg p-6">
                    <p className="text-3xl font-mono font-bold text-amber-900 dark:text-amber-300 text-center mb-2">
                      moles e⁻ = Q / F
                    </p>
                    <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                      F = 96,485 C/mol (Faraday constant)
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-700 rounded-lg p-6">
                    <p className="text-3xl font-mono font-bold text-orange-900 dark:text-orange-300 text-center mb-2">
                      mass = (Q × MM) / (n × F)
                    </p>
                    <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                      n = electrons per ion, MM = molar mass
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Step-by-Step Calculation</h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6">
              <ol className="space-y-4 text-gray-700 dark:text-gray-300 list-decimal ml-6">
                <li>
                  <strong className="text-blue-900 dark:text-blue-300">Calculate total charge:</strong>
                  <p className="ml-6 mt-1 font-mono">Q = I × t (convert time to seconds!)</p>
                </li>
                <li>
                  <strong className="text-indigo-900 dark:text-indigo-300">Find moles of electrons:</strong>
                  <p className="ml-6 mt-1 font-mono">moles e⁻ = Q / 96,485</p>
                </li>
                <li>
                  <strong className="text-purple-900 dark:text-purple-300">Determine moles of substance:</strong>
                  <p className="ml-6 mt-1">Use stoichiometry from half-reaction</p>
                  <p className="ml-6 mt-1 font-mono">Example: Cu²⁺ + 2e⁻ → Cu, so moles Cu = (moles e⁻)/2</p>
                </li>
                <li>
                  <strong className="text-pink-900 dark:text-pink-300">Calculate mass:</strong>
                  <p className="ml-6 mt-1 font-mono">mass = moles × molar mass</p>
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Common Half-Reactions</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-900 dark:text-green-300 mb-4">Metal Deposition (Cathode)</h3>
                <div className="space-y-2 text-sm font-mono text-gray-700 dark:text-gray-300">
                  <p>Cu²⁺ + 2e⁻ → Cu (n = 2)</p>
                  <p>Ag⁺ + e⁻ → Ag (n = 1)</p>
                  <p>Al³⁺ + 3e⁻ → Al (n = 3)</p>
                  <p>Ni²⁺ + 2e⁻ → Ni (n = 2)</p>
                  <p>Zn²⁺ + 2e⁻ → Zn (n = 2)</p>
                </div>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-orange-900 dark:text-orange-300 mb-4">Gas Evolution</h3>
                <div className="space-y-2 text-sm font-mono text-gray-700 dark:text-gray-300">
                  <p>2H⁺ + 2e⁻ → H₂ (n = 2 per H₂)</p>
                  <p>2H₂O + 2e⁻ → H₂ + 2OH⁻</p>
                  <p>2Cl⁻ → Cl₂ + 2e⁻ (n = 2 per Cl₂)</p>
                  <p>4OH⁻ → O₂ + 2H₂O + 4e⁻</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">(n = electrons per formula unit)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Worked Examples</h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-yellow-900 dark:text-yellow-300 mb-4">Example 1: Copper Electroplating</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> A current of 5.00 A passes through molten CuCl₂ for 2.00 hours. How much Cu is deposited?</p>
                  <p className="mt-4"><strong>Half-reaction:</strong> Cu²⁺ + 2e⁻ → Cu</p>
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6"><strong>Step 1: Calculate charge</strong></p>
                  <p className="ml-12">t = 2.00 h × 3600 s/h = 7200 s</p>
                  <p className="ml-12">Q = I × t = 5.00 × 7200 = 36,000 C</p>
                  
                  <p className="ml-6 mt-4"><strong>Step 2: Moles of electrons</strong></p>
                  <p className="ml-12">moles e⁻ = 36,000 / 96,485 = 0.373 mol</p>
                  
                  <p className="ml-6 mt-4"><strong>Step 3: Moles of Cu</strong></p>
                  <p className="ml-12">moles Cu = 0.373 / 2 = 0.187 mol</p>
                  
                  <p className="ml-6 mt-4"><strong>Step 4: Mass of Cu</strong></p>
                  <p className="ml-12">mass = 0.187 × 63.55 g/mol</p>
                  <p className="ml-6 font-bold text-green-600 text-xl mt-4">mass = 11.9 g Cu</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">Example 2: Silver Plating</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> How long will it take to deposit 10.0 g Ag using a 2.50 A current?</p>
                  <p className="mt-4"><strong>Half-reaction:</strong> Ag⁺ + e⁻ → Ag</p>
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6"><strong>Step 1: Moles of Ag</strong></p>
                  <p className="ml-12">moles Ag = 10.0 / 107.87 = 0.0927 mol</p>
                  
                  <p className="ml-6 mt-4"><strong>Step 2: Moles of electrons needed</strong></p>
                  <p className="ml-12">moles e⁻ = 0.0927 × 1 = 0.0927 mol (n = 1 for Ag)</p>
                  
                  <p className="ml-6 mt-4"><strong>Step 3: Charge needed</strong></p>
                  <p className="ml-12">Q = 0.0927 × 96,485 = 8947 C</p>
                  
                  <p className="ml-6 mt-4"><strong>Step 4: Time required</strong></p>
                  <p className="ml-12">t = Q / I = 8947 / 2.50 = 3579 s</p>
                  <p className="ml-12">t = 3579 / 60 = 59.6 min</p>
                  <p className="ml-6 font-bold text-green-600 text-xl mt-4">t = 59.6 min (about 1.0 hour)</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-4">Example 3: Hydrogen Gas Production</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> What volume of H₂ (at STP) is produced by electrolysis of water using 10.0 A for 30.0 minutes?</p>
                  <p className="mt-4"><strong>Half-reaction:</strong> 2H₂O + 2e⁻ → H₂ + 2OH⁻</p>
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">Q = 10.0 × (30.0 × 60) = 18,000 C</p>
                  <p className="ml-6">moles e⁻ = 18,000 / 96,485 = 0.187 mol</p>
                  <p className="ml-6">moles H₂ = 0.187 / 2 = 0.0933 mol</p>
                  <p className="ml-6">V = 0.0933 × 22.4 L/mol</p>
                  <p className="ml-6 font-bold text-green-600 text-xl mt-4">V = 2.09 L H₂ at STP</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-emerald-900 dark:text-emerald-300 mb-4">Example 4: Current Efficiency</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> Electrolysis should deposit 5.00 g Cu, but only 4.50 g is obtained. Find current efficiency.</p>
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">Current efficiency = (actual mass / theoretical mass) × 100%</p>
                  <p className="ml-6">Efficiency = (4.50 / 5.00) × 100%</p>
                  <p className="ml-6 font-bold text-green-600 text-xl mt-4">Efficiency = 90.0%</p>
                  <p className="ml-6 text-sm text-blue-600 mt-2">Some current may produce side reactions or H₂ evolution</p>
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
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Time in Wrong Units</h3>
                  <p className="text-gray-700 dark:text-gray-300">Q = I × t requires time in SECONDS! Convert hours/minutes to seconds first.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Wrong Electron Count (n)</h3>
                  <p className="text-gray-700 dark:text-gray-300">Cu²⁺ needs 2 electrons, Al³⁺ needs 3. Check the half-reaction!</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Forgetting Faraday Constant</h3>
                  <p className="text-gray-700 dark:text-gray-300">F = 96,485 C/mol (not 96,500!). Use accurate value for precision.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4">
                <span className="text-2xl">💡</span>
                <div>
                  <h3 className="font-bold text-yellow-900 dark:text-yellow-300 mb-2">Multiple Products Possible</h3>
                  <p className="text-gray-700 dark:text-gray-300">In aqueous solutions, water can be reduced (H₂) or oxidized (O₂) instead of intended products!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Related Tools</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/electrochemistry-calculators/electrolysis-calculator" className="block p-6 bg-gradient-to-r from-yellow-600 to-amber-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Electrolysis Calculator</h3>
                <p className="text-yellow-100">Automated mass calculations</p>
              </Link>
              <Link href="/chemistry-formulas/faradays-law" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Faraday&apos;s Law</h3>
                <p className="text-gray-600 dark:text-gray-400">Electromagnetic induction</p>
              </Link>
              <Link href="/chemistry-formulas/nernst-equation" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Nernst Equation</h3>
                <p className="text-gray-600 dark:text-gray-400">Cell potential calculations</p>
              </Link>
              <Link href="/chemistry-formulas/cell-potential" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Cell Potential</h3>
                <p className="text-gray-600 dark:text-gray-400">Voltage from half-cells</p>
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
            "headline": "Electrolysis Formula",
            "description": "Electrolysis Formula on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/electrolysis-formula",
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
                "name": "Electrolysis Formula",
                "item": "https://chemsolved.com/chemistry-formulas/electrolysis-formula"
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
