import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Molar Volume Formula',
  description: 'Calculate molar volume at STP (22.4 L/mol). Apply ideal gas law, Avogadro\'s principle, and gas stoichiometry for standard temperature and pressure conditions.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/molar-volume-formula',
  },
  keywords: 'molar volume, STP, ideal gas, Avogadro, 22.4 L, gas stoichiometry',
}

export default function MolarVolumeFormulaPage() {
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
            <li className="text-gray-900">Molar Volume Formula</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-sky-600 to-blue-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Molar Volume Formula</h1>
          <p className="text-lg opacity-90">Volume occupied by one mole of gas</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Formula</h2>
          <div className="bg-sky-50 border-l-4 border-sky-500 p-4 mb-4">
            <p className="text-2xl font-bold text-sky-700 text-center">V<sub>m</sub> = 22.4 L/mol (at STP)</p>
            <p className="text-gray-700 mt-3 text-center">V = n Ã— V<sub>m</sub></p>
          </div>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700 mt-4">
            <li><strong>V<sub>m</sub></strong> = molar volume</li>
            <li><strong>STP</strong> = 273.15 K, 1 atm</li>
            <li><strong>V</strong> = total volume (L)</li>
            <li><strong>n</strong> = number of moles</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Derivation from Ideal Gas Law</h2>
          <div className="space-y-2 text-gray-700">
            <p>PV = nRT</p>
            <p>At STP: P = 1 atm, T = 273.15 K, R = 0.08206 LÂ·atm/(molÂ·K)</p>
            <p>V/n = RT/P = (0.08206 Ã— 273.15) / 1 = 22.4 L/mol</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example</h2>
          <p className="text-gray-700 mb-3"><strong>Problem:</strong> What volume does 3.5 moles of Nâ‚‚ occupy at STP?</p>
          <div className="space-y-2 text-gray-700">
            <p>V = n Ã— V<sub>m</sub> = 3.5 mol Ã— 22.4 L/mol = 78.4 L</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: 78.4 L</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Important Notes</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Valid for ideal gases only; real gases deviate at high P or low T</li>
            <li>At non-STP conditions, use full ideal gas law PV = nRT</li>
            <li>All ideal gases have same molar volume at same T and P (Avogadro's hypothesis)</li>
            <li>Modern STP sometimes uses 273.15 K and 1 bar (100 kPa) â†’ V<sub>m</sub> â‰ˆ 22.7 L/mol</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/physical-chemistry-calculators/ideal-gas-law-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Ideal Gas Law Calculator</h3>
              <p className="text-sm text-gray-600">Calculate PV = nRT</p>
            </a>
            <a href="/chemistry-formulas/gas-stoichiometry-formula" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Gas Stoichiometry Calculator</h3>
              <p className="text-sm text-gray-600">Calculate gas volumes in reactions</p>
            </a>
            <a href="/physical-chemistry-calculators" className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">All Gas Laws Calculators</h3>
              <p className="text-sm opacity-90">Explore all gas law tools</p>
            </a>
            <a href="/chemistry-formulas/avogadros-law" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Avogadro's Law</h3>
              <p className="text-sm text-gray-600">V/n relationship</p>
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
            "headline": "Molar Volume Formula",
            "description": "Molar Volume Formula on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/molar-volume-formula",
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
                "name": "Molar Volume Formula",
                "item": "https://chemsolved.com/chemistry-formulas/molar-volume-formula"
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
