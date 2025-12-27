import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Calorimetry Formula | ChemCalc',
  description: 'Calculate heat transfer: q = mcΔT for temperature changes.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/calorimetry-formula',
  },
  keywords: 'calorimetry, heat capacity, specific heat, temperature, thermal energy',
}

export default function CalorimetryFormulaPage() {
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
            <li className="text-gray-900">Calorimetry Formula</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Calorimetry Formula</h1>
          <p className="text-lg opacity-90">Measure heat transfer in chemical processes</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Formula</h2>
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-red-700">q = m c ΔT</p>
          </div>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
            <li><strong>q</strong> = heat absorbed or released (J)</li>
            <li><strong>m</strong> = mass (g)</li>
            <li><strong>c</strong> = specific heat capacity (J·g⁻¹·°C⁻¹)</li>
            <li><strong>ΔT</strong> = T<sub>final</sub> - T<sub>initial</sub> (°C or K)</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Specific Heats</h2>
          <div className="grid md:grid-cols-3 gap-4 text-gray-700">
            <div className="bg-gray-50 p-3 rounded">
              <p className="font-semibold">Water: 4.184 J·g⁻¹·°C⁻¹</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="font-semibold">Aluminum: 0.897 J·g⁻¹·°C⁻¹</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="font-semibold">Copper: 0.385 J·g⁻¹·°C⁻¹</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example</h2>
          <p className="text-gray-700 mb-3"><strong>Given:</strong> Heat 50.0 g water from 20°C to 80°C.</p>
          <div className="space-y-2 text-gray-700">
            <p>m = 50.0 g, c = 4.184 J·g⁻¹·°C⁻¹, ΔT = 80 - 20 = 60°C</p>
            <p>q = 50.0 × 4.184 × 60 = 12,552 J ≈ 12.6 kJ</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: q ≈ 12.6 kJ required</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Notes</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Positive q: heat absorbed (endothermic); negative q: heat released (exothermic).</li>
            <li>In isolated system: q<sub>hot</sub> + q<sub>cold</sub> = 0.</li>
            <li>Phase changes require separate calculation using ΔH<sub>fusion</sub> or ΔH<sub>vaporization</sub>.</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/thermodynamics-calculators/calorimetry-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Calorimetry Calculator</h3>
              <p className="text-sm text-gray-600">Calculate heat transfer</p>
            </a>
            <a href="/thermodynamics-calculators/specific-heat-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Specific Heat Calculator</h3>
              <p className="text-sm text-gray-600">Find specific heat capacity</p>
            </a>
            <a href="/thermodynamics-calculators" className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">All Thermodynamics Calculators</h3>
              <p className="text-sm opacity-90">Explore all thermodynamics tools</p>
            </a>
            <a href="/chemistry-formulas/specific-heat-formula" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Specific Heat Formula</h3>
              <p className="text-sm text-gray-600">Formula details</p>
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
            "headline": "Calorimetry Formula",
            "description": "Calorimetry Formula on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/calorimetry-formula",
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
                "name": "Calorimetry Formula",
                "item": "https://chemsolved.com/chemistry-formulas/calorimetry-formula"
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
