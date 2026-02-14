import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Theoretical Yield Formula',
  description: 'Calculate theoretical yield from stoichiometry and limiting reactants. Determine maximum product amounts, predict reaction efficiency, and plan chemical syntheses.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/theoretical-yield-formula',
  },
  keywords: 'theoretical yield, stoichiometry, limiting reactant, maximum product',
}

export default function TheoreticalYieldFormulaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <nav className="text-sm breadcrumbs mb-8">
          <ul className="flex space-x-2 text-gray-600">
            <li><a href="/" className="hover:text-blue-600">Home</a></li>
            <li><span className="mx-2">/</span></li>
            <li><a href="/chemistry-formulas" className="hover:text-blue-600">Chemistry Formulas</a></li>
            <li><span className="mx-2">/</span></li>
            <li className="text-gray-900">Theoretical Yield Formula</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Theoretical Yield Formula</h1>
          <p className="text-lg opacity-90">Maximum product from stoichiometry</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Understanding Theoretical Yield</h2>
          <p className="text-gray-700 mb-4">
            Theoretical yield represents the maximum amount of product that can be formed in a chemical reaction based on stoichiometric calculations. This value assumes perfect conditions: complete reaction of all limiting reactant, no side reactions, no product loss during isolation, and 100% conversion efficiency. In reality, actual yields are always lower due to incomplete reactions, competing processes, measurement errors, and practical limitations in laboratory or industrial settings.
          </p>
          <p className="text-gray-700 mb-4">
            The calculation of theoretical yield is fundamental to quantitative chemistry and industrial process optimization. It provides a benchmark against which actual experimental results are compared, helping chemists assess reaction efficiency, identify procedural problems, and optimize reaction conditions. In pharmaceutical manufacturing, theoretical yield calculations guide production planning and cost estimation. In research laboratories, they help scientists evaluate synthetic routes and troubleshoot experimental procedures.
          </p>
          <p className="text-gray-700 mb-4">
            Understanding theoretical yield requires mastery of stoichiometry, limiting reactant identification, and mole-to-mass conversions. The limiting reactant—the reactant that is completely consumed first—determines the maximum product formation. Other reactants present in excess remain partially unreacted. By combining balanced chemical equations with molar mass data, chemists can predict product quantities with precision, enabling rational design of experiments and industrial processes.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">The Formula</h2>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-green-700">Theoretical Yield = n<sub>LR</sub> × (stoich. ratio) × M<sub>product</sub></p>
          </div>
          <p className="text-gray-700 mb-4">Calculate maximum product from limiting reactant using stoichiometric relationships.</p>
          
          <div className="mt-4 space-y-3">
            <div className="flex items-start">
              <span className="font-semibold text-gray-800 min-w-[160px]">n<sub>LR</sub>:</span>
              <span className="text-gray-700">Moles of limiting reactant available (mol)</span>
            </div>
            <div className="flex items-start">
              <span className="font-semibold text-gray-800 min-w-[160px]">Stoich. ratio:</span>
              <span className="text-gray-700">Mole ratio of product to limiting reactant from balanced equation (dimensionless)</span>
            </div>
            <div className="flex items-start">
              <span className="font-semibold text-gray-800 min-w-[160px]">M<sub>product</sub>:</span>
              <span className="text-gray-700">Molar mass of desired product (g/mol)</span>
            </div>
            <div className="flex items-start">
              <span className="font-semibold text-gray-800 min-w-[160px]">Theoretical Yield:</span>
              <span className="text-gray-700">Maximum mass of product obtainable (grams)</span>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
            <h3 className="font-semibold text-blue-900 mb-2">Key Steps:</h3>
            <ol className="list-decimal pl-5 text-gray-700 space-y-1">
              <li>Write and balance the chemical equation</li>
              <li>Convert given quantities to moles</li>
              <li>Identify the limiting reactant</li>
              <li>Use stoichiometry to find moles of product from limiting reactant</li>
              <li>Convert moles of product to mass</li>
            </ol>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Step-by-Step Example</h2>
          <p className="text-gray-700 mb-3"><strong>Problem:</strong> What is the theoretical yield of NH₃ when 10.0 mol N₂ reacts with 20.0 mol H₂?</p>
          <p className="text-gray-700 mb-4"><strong>Reaction:</strong> N₂(g) + 3H₂(g) → 2NH₃(g)</p>
          <p className="text-gray-700 mb-4"><strong>Given:</strong> n(N₂) = 10.0 mol, n(H₂) = 20.0 mol, M(NH₃) = 17.03 g/mol</p>
          
          <div className="bg-gray-50 p-4 rounded mb-4">
            <p className="font-semibold text-gray-800 mb-2">Step 1: Verify Balanced Equation</p>
            <p className="text-gray-700">The equation N₂ + 3H₂ → 2NH₃ is balanced with mole ratio 1:3:2</p>
          </div>

          <div className="bg-gray-50 p-4 rounded mb-4">
            <p className="font-semibold text-gray-800 mb-2">Step 2: Identify Limiting Reactant</p>
            <p className="text-gray-700 mb-2">For N₂: 10.0 mol N₂ requires 10.0 × 3 = 30.0 mol H₂ (but only 20.0 mol available)</p>
            <p className="text-gray-700">For H₂: 20.0 mol H₂ requires 20.0 / 3 = 6.67 mol N₂ (have 10.0 mol available)</p>
            <p className="text-gray-700 mt-2 font-semibold">H₂ is the limiting reactant (insufficient for all N₂)</p>
          </div>

          <div className="bg-gray-50 p-4 rounded mb-4">
            <p className="font-semibold text-gray-800 mb-2">Step 3: Calculate Moles of Product</p>
            <p className="text-gray-700">From stoichiometry: 3 mol H₂ produces 2 mol NH₃</p>
            <p className="text-gray-700 mt-2">n(NH₃) = 20.0 mol H₂ × (2 mol NH₃ / 3 mol H₂) = 13.33 mol NH₃</p>
          </div>

          <div className="bg-gray-50 p-4 rounded mb-4">
            <p className="font-semibold text-gray-800 mb-2">Step 4: Convert to Mass</p>
            <p className="text-gray-700">Theoretical yield = 13.33 mol × 17.03 g/mol = 227.1 g NH₃</p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: 227.1 g NH₃ (theoretical maximum)</p>
            <p className="text-sm text-gray-600 mt-1">Excess N₂: 10.0 - 6.67 = 3.33 mol remain unreacted</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Key Applications</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Pharmaceutical Manufacturing</h3>
            <p className="text-gray-700">
              Drug synthesis requires precise theoretical yield calculations for quality control, production planning, and regulatory compliance. Knowing expected product quantities helps pharmaceutical companies optimize reaction conditions, estimate raw material costs, and detect synthesis problems early in development.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Industrial Chemical Production</h3>
            <p className="text-gray-700">
              Large-scale chemical plants use theoretical yield calculations to maximize efficiency and minimize waste. In ammonia production via the Haber process, operators calculate theoretical yields to determine optimal reactant ratios, reduce energy consumption, and improve economic viability.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">3. Laboratory Research</h3>
            <p className="text-gray-700">
              Research chemists use theoretical yields to evaluate reaction success, compare synthetic routes, and publish reproducible procedures. When actual yields fall significantly below theoretical values, scientists investigate side reactions, purification losses, or experimental errors.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">4. Environmental Chemistry</h3>
            <p className="text-gray-700">
              In waste treatment and pollution control, theoretical yield calculations help engineers design reactors for neutralization reactions, predict byproduct formation, and ensure compliance with environmental regulations for chemical disposal.
            </p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Yield Comparison Table</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">Reaction Type</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Typical % Yield Range</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Factors Affecting Yield</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Simple synthesis</td>
                  <td className="border border-gray-300 px-4 py-2">70-95%</td>
                  <td className="border border-gray-300 px-4 py-2">Purity, temperature control</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Complex organic</td>
                  <td className="border border-gray-300 px-4 py-2">40-70%</td>
                  <td className="border border-gray-300 px-4 py-2">Side reactions, purification</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Multi-step synthesis</td>
                  <td className="border border-gray-300 px-4 py-2">10-50%</td>
                  <td className="border border-gray-300 px-4 py-2">Cumulative losses each step</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Precipitation</td>
                  <td className="border border-gray-300 px-4 py-2">85-98%</td>
                  <td className="border border-gray-300 px-4 py-2">Solubility, filtration technique</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Gas phase</td>
                  <td className="border border-gray-300 px-4 py-2">60-90%</td>
                  <td className="border border-gray-300 px-4 py-2">Equilibrium, catalyst efficiency</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Mistakes to Avoid</h2>
          <div className="space-y-4">
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="font-semibold text-red-900 mb-2">Mistake 1: Not Identifying Limiting Reactant</h3>
              <p className="text-gray-700">Always calculate which reactant is completely consumed first. Using excess reactant quantities leads to overestimated theoretical yields that don't match reality.</p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="font-semibold text-red-900 mb-2">Mistake 2: Using Wrong Stoichiometric Ratio</h3>
              <p className="text-gray-700">Verify the balanced equation carefully. For N₂ + 3H₂ → 2NH₃, the ratio is 2 mol NH₃ per 3 mol H₂, not 1:1. Incorrect ratios produce completely wrong yield predictions.</p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="font-semibold text-red-900 mb-2">Mistake 3: Confusing Theoretical and Actual Yield</h3>
              <p className="text-gray-700">Theoretical yield is the calculated maximum; actual yield is what you obtain experimentally. Never expect to achieve 100% of theoretical yield in real experiments.</p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="font-semibold text-red-900 mb-2">Mistake 4: Unit Conversion Errors</h3>
              <p className="text-gray-700">Ensure consistent units throughout. Convert grams to moles before applying stoichiometry, then convert back to grams for the final answer.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/stoichiometry-calculators/theoretical-yield-calculator" className="block p-4 bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg hover:shadow-lg transition-all border border-green-200">
              <h3 className="font-semibold text-green-700 mb-2">Theoretical Yield Calculator</h3>
              <p className="text-sm text-gray-600">Calculate maximum product</p>
            </a>
            <a href="/stoichiometry-calculators/limiting-reactant-calculator" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <h3 className="font-semibold text-blue-600 mb-2">Limiting Reactant</h3>
              <p className="text-sm text-gray-600">Find limiting reagent</p>
            </a>
            <a href="/stoichiometry-calculators" className="block p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-all">
              <h3 className="font-semibold mb-2">Stoichiometry Calculators</h3>
              <p className="text-sm text-white/90">All stoichiometry tools</p>
            </a>
            <a href="/theoretical-yield-vs-percent-yield" className="block p-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all">
              <h3 className="font-semibold mb-2">Theoretical vs Percent Yield</h3>
              <p className="text-sm text-white/90">Compare yield concepts</p>
            </a>
          </div>
        </section>
      
      {/* Structured Data - EducationalArticle */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": "Theoretical Yield Formula",
            "description": "Theoretical Yield Formula on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/theoretical-yield-formula",
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
                "name": "Theoretical Yield Formula",
                "item": "https://chemsolved.com/chemistry-formulas/theoretical-yield-formula"
              }
            ]
          })
        }}
      />
      </main>
      <Footer />
    </div>
  )
}
