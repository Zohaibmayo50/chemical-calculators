import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Common Ion Effect | ChemCalc',
  description: 'Understand how adding a common ion suppresses solubility and shifts equilibrium.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/common-ion-effect',
  },
  keywords: 'common ion effect, solubility, equilibrium, Le Chatelier, precipitation',
}

export default function CommonIonEffectPage() {
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
            <li className="text-gray-900">Common Ion Effect</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Common Ion Effect</h1>
          <p className="text-lg opacity-90">How shared ions affect equilibrium and solubility</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Principle</h2>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 mb-4">
            <p className="text-lg font-semibold text-emerald-700">Adding an ion already present in equilibrium decreases solubility of a salt</p>
            <p className="text-gray-700 mt-2">Applies Le Chatelier's Principle: equilibrium shifts to consume added ion</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example: AgCl Solubility</h2>
          <div className="bg-gray-50 p-4 rounded mb-3">
            <p className="font-semibold text-gray-800">AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq)</p>
            <p className="text-gray-700">K<sub>sp</sub> = [Ag⁺][Cl⁻] = 1.8 × 10⁻¹⁰</p>
          </div>
          <div className="space-y-2 text-gray-700">
            <p><strong>Scenario 1:</strong> AgCl in pure water</p>
            <p>Let s = solubility → [Ag⁺] = [Cl⁻] = s</p>
            <p>s² = 1.8 × 10⁻¹⁰ → s = 1.3 × 10⁻⁵ M</p>
            <p className="mt-4"><strong>Scenario 2:</strong> AgCl in 0.1 M NaCl solution</p>
            <p>[Cl⁻] ≈ 0.1 M (common ion from NaCl)</p>
            <p>[Ag⁺] × 0.1 = 1.8 × 10⁻¹⁰ → [Ag⁺] = 1.8 × 10⁻⁹ M</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Result: Solubility decreases from 1.3 × 10⁻⁵ M to 1.8 × 10⁻⁹ M</p>
            <p className="text-gray-700">~10,000 times less soluble!</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Applications</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li><strong>Buffer solutions:</strong> Common ion suppresses ionization of weak acid/base</li>
            <li><strong>Precipitation:</strong> Add common ion to force precipitation</li>
            <li><strong>Qualitative analysis:</strong> Separate ions by selective precipitation</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Key Points</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Common ion must be from strong electrolyte (fully dissociated)</li>
            <li>Effect is most dramatic when common ion concentration is much larger than solubility</li>
            <li>K<sub>sp</sub> value doesn't change; only solubility decreases</li>
            <li>Equilibrium shifts left (toward solid) when common ion added</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/chemical-equilibrium-calculators/solubility-product-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Solubility Product Calculator</h3>
              <p className="text-sm text-gray-600">Calculate Ksp and solubility</p>
            </a>
            <a href="/chemical-equilibrium-calculators/equilibrium-constant-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Equilibrium Constant Calculator</h3>
              <p className="text-sm text-gray-600">Calculate K from concentrations</p>
            </a>
            <a href="/chemistry-formulas/solubility-product-constant-ksp" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Solubility Product Ksp Formula</h3>
              <p className="text-sm text-gray-600">Ksp equilibrium expression</p>
            </a>
            <a href="/chemistry-formulas/le-chateliers-principle" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Le Chatelier's Principle</h3>
              <p className="text-sm text-gray-600">Equilibrium shifts and stress</p>
            </a>
            <a href="/chemical-equilibrium-calculators" className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">All Chemical Equilibrium Calculators</h3>
              <p className="text-sm opacity-90">Explore all equilibrium tools and calculators</p>
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
            "headline": "Common Ion Effect",
            "description": "Common Ion Effect on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/common-ion-effect",
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
                "name": "Common Ion Effect",
                "item": "https://chemsolved.com/chemistry-formulas/common-ion-effect"
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
