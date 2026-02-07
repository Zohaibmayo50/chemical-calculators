import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Formal Charge Formula',
  description: 'Calculate formal charge: FC = V - N - B/2 for Lewis structures.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/formal-charge-formula',
  },
  keywords: 'formal charge, Lewis structure, valence electrons, bonding',
}

export default function FormalChargeFormulaPage() {
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
            <li className="text-gray-900">Formal Charge Formula</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Formal Charge Formula</h1>
          <p className="text-lg opacity-90">Determine charge distribution in molecules</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Formula</h2>
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-indigo-700">FC = V - N - B/2</p>
          </div>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
            <li><strong>FC</strong> = formal charge</li>
            <li><strong>V</strong> = valence electrons in free atom</li>
            <li><strong>N</strong> = non-bonding electrons (lone pairs)</li>
            <li><strong>B</strong> = bonding electrons (shared)</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example: CO</h2>
          <p className="text-gray-700 mb-3"><strong>Lewis structure:</strong> :C≡O:</p>
          <div className="space-y-2 text-gray-700">
            <p><strong>Carbon:</strong> V = 4, N = 2 (one lone pair), B = 6 (triple bond)</p>
            <p>FC(C) = 4 - 2 - 6/2 = 4 - 2 - 3 = -1</p>
            <p><strong>Oxygen:</strong> V = 6, N = 2 (one lone pair), B = 6 (triple bond)</p>
            <p>FC(O) = 6 - 2 - 6/2 = 6 - 2 - 3 = +1</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: FC(C) = -1, FC(O) = +1</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Tips</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Sum of all formal charges = overall molecular charge.</li>
            <li>Best structures minimize formal charges and place negative FC on more electronegative atoms.</li>
            <li>Count each bond electron once when determining B (e.g., double bond = 4 bonding electrons).</li>
          </ul>
        </section>

        {/* Related Calculators */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/atomic-structure-calculators/formal-charge-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Formal Charge Calculator</h3>
              <p className="text-sm text-gray-600">Calculate FC = V - N - B/2</p>
            </a>
            <a href="/atomic-structure-calculators/lewis-structure-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Lewis Structure Calculator</h3>
              <p className="text-sm text-gray-600">Draw Lewis structures</p>
            </a>
            <a href="/chemistry-formulas/lewis-structure" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Lewis Structure Formula</h3>
              <p className="text-sm text-gray-600">Electron dot structures</p>
            </a>
            <a href="/atomic-structure-calculators" className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">All Atomic Structure Calculators</h3>
              <p className="text-sm opacity-90">Explore all molecular structure tools</p>
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
            "headline": "Formal Charge Formula",
            "description": "Formal Charge Formula on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/formal-charge-formula",
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
                "name": "Formal Charge Formula",
                "item": "https://chemsolved.com/chemistry-formulas/formal-charge-formula"
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
