import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Degree of Unsaturation',
  description: 'Calculate rings + double bonds using molecular formula.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/degree-of-unsaturation',
  },
  keywords: 'degree of unsaturation, index of hydrogen deficiency, rings, double bonds',
}

export default function DegreeOfUnsaturationPage() {
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
            <li className="text-gray-900">Degree of Unsaturation</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Degree of Unsaturation</h1>
          <p className="text-lg opacity-90">Count rings + double bonds from formula</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Formula</h2>
          <div className="bg-fuchsia-50 border-l-4 border-fuchsia-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-fuchsia-700">DU = (2C + 2 + N - H - X) / 2</p>
          </div>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
            <li><strong>DU</strong> = degree of unsaturation</li>
            <li><strong>C</strong> = number of carbons</li>
            <li><strong>N</strong> = number of nitrogens</li>
            <li><strong>H</strong> = number of hydrogens</li>
            <li><strong>X</strong> = number of halogens (F, Cl, Br, I)</li>
            <li>O and S ignored (valence = 2)</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example: C₆H₆</h2>
          <p className="text-gray-700 mb-3"><strong>Given:</strong> benzene, C₆H₆.</p>
          <div className="space-y-2 text-gray-700">
            <p>DU = (2×6 + 2 + 0 - 6 - 0) / 2 = (12 + 2 - 6) / 2 = 8 / 2 = 4</p>
            <p>Benzene has 3 double bonds + 1 ring = 4 degrees of unsaturation.</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: DU = 4</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Notes</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Each ring or double bond counts as 1 DU; each triple bond counts as 2 DU.</li>
            <li>Useful in structure elucidation from molecular formula + NMR/IR data.</li>
            <li>Always round to nearest integer; non-integer suggests formula error.</li>
          </ul>
        </section>

        {/* Related Calculators */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/organic-chemistry-calculators/degree-unsaturation-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Degree of Unsaturation Calculator</h3>
              <p className="text-sm text-gray-600">Calculate rings + double bonds instantly</p>
            </a>
            <a href="/organic-chemistry-calculators/nmr-chemical-shift-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">NMR Chemical Shift Calculator</h3>
              <p className="text-sm text-gray-600">Structure elucidation tool</p>
            </a>
            <a href="/chemistry-formulas/nmr-chemical-shift-formula" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">NMR Chemical Shift Formula</h3>
              <p className="text-sm text-gray-600">¹H & ¹³C NMR spectroscopy</p>
            </a>
            <a href="/organic-chemistry-calculators" className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">All Organic Chemistry Calculators</h3>
              <p className="text-sm opacity-90">Explore all organic chemistry tools</p>
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
            "headline": "Degree Of Unsaturation",
            "description": "Degree Of Unsaturation on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/degree-of-unsaturation",
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
                "name": "Degree Of Unsaturation",
                "item": "https://chemsolved.com/chemistry-formulas/degree-of-unsaturation"
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
