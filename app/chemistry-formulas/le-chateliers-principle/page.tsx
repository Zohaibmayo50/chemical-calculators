import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Le Chatelier\'s Principle',
  description: 'Predict how equilibrium shifts in response to stress (concentration, pressure, temperature).',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/le-chateliers-principle',
  },
  keywords: 'Le Chatelier principle, equilibrium shift, stress, concentration, pressure, temperature',
}

export default function LeChateliersPrinciplePage() {
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
            <li className="text-gray-900">Le Chatelier's Principle</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Le Chatelier's Principle</h1>
          <p className="text-lg opacity-90">Equilibrium response to external stress</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Principle</h2>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-4">
            <p className="text-lg font-semibold text-amber-700">If a system at equilibrium is disturbed, it shifts to counteract the disturbance</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Three Types of Stress</h2>
          <div className="space-y-4 text-gray-700">
            <div className="bg-amber-50 p-4 rounded">
              <h3 className="font-bold text-amber-700 mb-2">1. Concentration Change</h3>
              <p>Add reactant → shifts right (toward products)</p>
              <p>Add product → shifts left (toward reactants)</p>
              <p>Remove species → shifts to replace it</p>
            </div>
            <div className="bg-amber-50 p-4 rounded">
              <h3 className="font-bold text-amber-700 mb-2">2. Pressure/Volume Change (gases)</h3>
              <p>Increase pressure (decrease V) → shifts to side with fewer gas molecules</p>
              <p>Decrease pressure (increase V) → shifts to side with more gas molecules</p>
            </div>
            <div className="bg-amber-50 p-4 rounded">
              <h3 className="font-bold text-amber-700 mb-2">3. Temperature Change</h3>
              <p>Raise T → shifts in endothermic direction (absorbs heat)</p>
              <p>Lower T → shifts in exothermic direction (releases heat)</p>
              <p>Note: This changes K value</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example: N₂ + 3H₂ ⇌ 2NH₃ (ΔH &lt; 0, exothermic)</h2>
          <div className="space-y-2 text-gray-700">
            <p><strong>Add N₂:</strong> Shifts right → more NH₃ produced</p>
            <p><strong>Increase pressure:</strong> Shifts right (4 mol gas → 2 mol gas)</p>
            <p><strong>Increase temperature:</strong> Shifts left (endothermic direction)</p>
            <p><strong>Remove NH₃:</strong> Shifts right → produces more NH₃</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Important Notes</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Catalyst does NOT shift equilibrium; only speeds up reaching equilibrium</li>
            <li>Concentration and pressure changes don't change K; temperature does</li>
            <li>Inert gas addition at constant V has no effect</li>
            <li>Only gases count for pressure/volume effects</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/chemical-equilibrium-calculators/equilibrium-constant-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Equilibrium Constant Calculator</h3>
              <p className="text-sm text-gray-600">Calculate K from concentrations</p>
            </a>
            <a href="/chemical-equilibrium-calculators/reaction-quotient-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Reaction Quotient Calculator</h3>
              <p className="text-sm text-gray-600">Predict shift direction</p>
            </a>
            <a href="/chemistry-formulas/equilibrium-constant" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Equilibrium Constant Formula</h3>
              <p className="text-sm text-gray-600">K expression and calculations</p>
            </a>
            <a href="/chemistry-formulas/reaction-quotient" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Reaction Quotient Formula</h3>
              <p className="text-sm text-gray-600">Q vs K comparison</p>
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
            "headline": "Le Chateliers Principle",
            "description": "Le Chateliers Principle on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/le-chateliers-principle",
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
                "name": "Le Chateliers Principle",
                "item": "https://chemsolved.com/chemistry-formulas/le-chateliers-principle"
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
