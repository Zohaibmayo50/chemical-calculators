import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Concentration Converter Formula | Molarity, Molality, PPM, PPB',
  description: 'Convert between concentration units: molarity, molality, mass percent, ppm, ppb, mole fraction, and normality.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/concentration-converter-formula',
  },
  keywords: ['concentration converter', 'molarity', 'molality', 'ppm', 'ppb', 'mass percent', 'mole fraction', 'normality']
};

export default function ConcentrationConverterFormulaPage() {
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
            <span className="text-gray-900 dark:text-white font-medium">Concentration Converter</span>
          </nav>
        </div>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
            <h1 className="text-5xl font-bold mb-4 text-center">Concentration Converter Formula</h1>
            <p className="text-xl text-center text-green-100">
              Convert between molarity, molality, ppm, ppb, mass percent, and more
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-l-4 border-indigo-500">
            <h2 className="text-3xl font-bold mb-6">Concentration Unit Definitions</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-3">Molarity (M)</h3>
                <div className="bg-white dark:bg-gray-700 rounded p-4 my-3">
                  <p className="text-2xl font-bold text-center">M = moles solute / L solution</p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">Temperature-dependent (solution volume changes with T)</p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-3">Molality (m)</h3>
                <div className="bg-white dark:bg-gray-700 rounded p-4 my-3">
                  <p className="text-2xl font-bold text-center">m = moles solute / kg solvent</p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">Temperature-independent (mass doesn't change)</p>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-3">Mass Percent (%)</h3>
                <div className="bg-white dark:bg-gray-700 rounded p-4 my-3">
                  <p className="text-2xl font-bold text-center">% = (mass solute / mass solution) × 100</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-amber-900 dark:text-amber-300 mb-3">Parts Per Million (ppm)</h3>
                <div className="bg-white dark:bg-gray-700 rounded p-4 my-3">
                  <p className="text-2xl font-bold text-center">ppm = (mass solute / mass solution) × 10⁶</p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">For dilute aqueous solutions: 1 ppm ≈ 1 mg/L</p>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/30 dark:to-rose-900/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-900 dark:text-red-300 mb-3">Parts Per Billion (ppb)</h3>
                <div className="bg-white dark:bg-gray-700 rounded p-4 my-3">
                  <p className="text-2xl font-bold text-center">ppb = (mass solute / mass solution) × 10⁹</p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">For dilute aqueous solutions: 1 ppb ≈ 1 μg/L</p>
              </div>

              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/30 dark:to-blue-900/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-cyan-900 dark:text-cyan-300 mb-3">Mole Fraction (χ)</h3>
                <div className="bg-white dark:bg-gray-700 rounded p-4 my-3">
                  <p className="text-2xl font-bold text-center">χ<sub>A</sub> = moles A / total moles</p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">Dimensionless, sum of all χ = 1</p>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-300 mb-3">Normality (N)</h3>
                <div className="bg-white dark:bg-gray-700 rounded p-4 my-3">
                  <p className="text-2xl font-bold text-center">N = equivalents solute / L solution</p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">N = M × n (where n = # of H⁺, OH⁻, or charge)</p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Conversion Formulas</h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">Molarity ↔ Molality</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>M → m:</strong></p>
                  <div className="bg-white dark:bg-gray-700 rounded p-4 font-mono text-sm">
                    m = (M × 1000) / (ρ<sub>soln</sub> × 1000 - M × MM<sub>solute</sub>)
                  </div>
                  
                  <p className="mt-4"><strong>m → M:</strong></p>
                  <div className="bg-white dark:bg-gray-700 rounded p-4 font-mono text-sm">
                    M = (m × ρ<sub>soln</sub> × 1000) / (1000 + m × MM<sub>solute</sub>)
                  </div>
                  
                  <p className="mt-3 text-sm">ρ<sub>soln</sub> = solution density (g/mL), MM = molar mass (g/mol)</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-4">Molarity → ppm</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <div className="bg-white dark:bg-gray-700 rounded p-4 font-mono text-sm">
                    ppm = M × MM<sub>solute</sub>
                  </div>
                  <p className="text-sm">(For dilute aqueous solutions where ρ ≈ 1 g/mL)</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-4">Mass Percent → Molarity</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <div className="bg-white dark:bg-gray-700 rounded p-4 font-mono text-sm">
                    M = (% × ρ<sub>soln</sub> × 10) / MM<sub>solute</sub>
                  </div>
                  <p className="text-sm">ρ<sub>soln</sub> in g/mL, % as decimal (e.g., 10% = 0.10)</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-amber-900 dark:text-amber-300 mb-4">ppm ↔ ppb</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <div className="bg-white dark:bg-gray-700 rounded p-4 font-mono text-sm">
                    1 ppm = 1000 ppb
                  </div>
                  <div className="bg-white dark:bg-gray-700 rounded p-4 font-mono text-sm mt-2">
                    ppb = ppm × 1000
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Worked Examples</h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">Example 1: Molarity to Molality</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> Convert 2.0 M NaCl solution (density = 1.08 g/mL) to molality.</p>
                  
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">MM(NaCl) = 58.44 g/mol</p>
                  <p className="ml-6 mt-2">m = (M × 1000) / (ρ × 1000 - M × MM)</p>
                  <p className="ml-6">m = (2.0 × 1000) / (1.08 × 1000 - 2.0 × 58.44)</p>
                  <p className="ml-6">m = 2000 / (1080 - 116.88)</p>
                  <p className="ml-6">m = 2000 / 963.12</p>
                  
                  <p className="ml-6 font-bold text-green-600 text-xl mt-4">m = 2.08 mol/kg</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-4">Example 2: Mass Percent to Molarity</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> Calculate molarity of 10% (w/w) H₂SO₄ solution (density = 1.07 g/mL).</p>
                  
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">MM(H₂SO₄) = 98.08 g/mol</p>
                  <p className="ml-6">% = 10% = 0.10</p>
                  <p className="ml-6 mt-2">M = (% × ρ × 10) / MM</p>
                  <p className="ml-6">M = (0.10 × 1.07 × 10) / 98.08</p>
                  <p className="ml-6">M = 1.07 / 98.08</p>
                  
                  <p className="ml-6 font-bold text-green-600 text-xl mt-4">M = 1.09 M</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-4">Example 3: Molarity to ppm</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> Convert 0.001 M Ca²⁺ to ppm.</p>
                  
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">MM(Ca) = 40.08 g/mol</p>
                  <p className="ml-6 mt-2">ppm = M × MM</p>
                  <p className="ml-6">ppm = 0.001 mol/L × 40.08 g/mol</p>
                  <p className="ml-6">ppm = 0.04008 g/L = 40.08 mg/L</p>
                  
                  <p className="ml-6 font-bold text-green-600 text-xl mt-4">40.1 ppm Ca²⁺</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Quick Reference Table</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-green-100 to-teal-100 dark:from-green-900/50 dark:to-teal-900/50">
                    <th className="p-3 text-left font-bold">Unit</th>
                    <th className="p-3 text-left font-bold">Symbol</th>
                    <th className="p-3 text-left font-bold">Definition</th>
                    <th className="p-3 text-left font-bold">Use Case</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="p-3">Molarity</td>
                    <td className="p-3 font-mono">M</td>
                    <td className="p-3">mol/L</td>
                    <td className="p-3">Reactions, titrations</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="p-3">Molality</td>
                    <td className="p-3 font-mono">m</td>
                    <td className="p-3">mol/kg</td>
                    <td className="p-3">Colligative properties</td>
                  </tr>
                  <tr>
                    <td className="p-3">Mass %</td>
                    <td className="p-3 font-mono">%</td>
                    <td className="p-3">(g/g) × 100</td>
                    <td className="p-3">Commercial solutions</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="p-3">ppm</td>
                    <td className="p-3 font-mono">ppm</td>
                    <td className="p-3">(mg/kg) or (mg/L)</td>
                    <td className="p-3">Environmental, trace</td>
                  </tr>
                  <tr>
                    <td className="p-3">ppb</td>
                    <td className="p-3 font-mono">ppb</td>
                    <td className="p-3">(μg/kg) or (μg/L)</td>
                    <td className="p-3">Ultra-trace analysis</td>
                  </tr>
                </tbody>
              </table>
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
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Confusing Molarity and Molality</h3>
                  <p className="text-gray-700 dark:text-gray-300">M uses L of solution, m uses kg of solvent!</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Wrong Density Units</h3>
                  <p className="text-gray-700 dark:text-gray-300">Density must be in g/mL for these formulas!</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">ppm Assumptions</h3>
                  <p className="text-gray-700 dark:text-gray-300">ppm ≈ mg/L only for dilute aqueous solutions!</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4">
                <span className="text-2xl">💡</span>
                <div>
                  <h3 className="font-bold text-yellow-900 dark:text-yellow-300 mb-2">Pro Tip</h3>
                  <p className="text-gray-700 dark:text-gray-300">Always check if you need mass of solvent or solution!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Related Tools</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/concentration-and-solution-calculators/concentration-converter" className="block p-6 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Concentration Converter</h3>
                <p className="text-green-100">Automated conversions</p>
              </Link>
              <Link href="/chemistry-formulas/molarity-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Molarity</h3>
                <p className="text-gray-600 dark:text-gray-400">Detailed guide</p>
              </Link>
              <Link href="/chemistry-formulas/molality-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Molality</h3>
                <p className="text-gray-600 dark:text-gray-400">Detailed guide</p>
              </Link>
              <Link href="/chemistry-formulas/ppm-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">PPM/PPB</h3>
                <p className="text-gray-600 dark:text-gray-400">Trace analysis</p>
              </Link>
              <Link href="/concentration-and-solution-calculators" className="block p-6 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">All Concentration Calculators</h3>
                <p className="text-sm opacity-90">Explore all solution and concentration tools</p>
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
            "headline": "Concentration Converter Formula",
            "description": "Concentration Converter Formula on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/concentration-converter-formula",
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
                "name": "Concentration Converter Formula",
                "item": "https://chemsolved.com/chemistry-formulas/concentration-converter-formula"
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
