import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Theoretical Yield Formula',
  description: 'Calculate maximum product from stoichiometry and limiting reactant.',
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
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Concept</h2>
          <p className="text-gray-700 mb-4">Theoretical yield = moles of limiting reactant × (mole ratio product/reactant) × molar mass of product.</p>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-green-700">Theoretical Yield = n<sub>LR</sub> × (stoich. ratio) × M<sub>product</sub></p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example</h2>
          <p className="text-gray-700 mb-3"><strong>Reaction:</strong> N₂ + 3H₂ → 2NH₃</p>
          <p className="text-gray-700 mb-3"><strong>Given:</strong> 10 mol N₂, 20 mol H₂; M(NH₃) = 17 g/mol.</p>
          <div className="space-y-2 text-gray-700">
            <p>Check limiting reactant: N₂ needs 30 mol H₂ (have 20), so H₂ is limiting.</p>
            <p>n(NH₃) from H₂ = 20 mol H₂ × (2 NH₃ / 3 H₂) = 13.33 mol NH₃</p>
            <p>Theoretical yield = 13.33 mol × 17 g/mol ≈ 226.7 g</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: ≈ 226.7 g NH₃</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Mistakes</h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Not identifying limiting reactant</h3>
              <p>Always determine which reactant runs out first.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Using wrong stoichiometric ratio</h3>
              <p>Check balanced equation carefully for mole ratios.</p>
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
