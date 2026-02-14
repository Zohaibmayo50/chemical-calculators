import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Rydberg Equation: Atomic Spectral Lines Calculator',
  description: 'Calculate wavelength of atomic spectral lines using 1/Î» = R(1/nâ‚Â² - 1/nâ‚‚Â²).',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/rydberg-equation',
  },
  keywords: 'Rydberg equation, hydrogen spectrum, atomic emission, spectral lines',
}

export default function RydbergEquationPage() {
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
            <li className="text-gray-900">Rydberg Equation</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Rydberg Equation</h1>
          <p className="text-lg opacity-90">Predict wavelengths of hydrogen spectral lines</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Formula</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-blue-700">1/Î» = R<sub>H</sub> (1/nâ‚Â² - 1/nâ‚‚Â²)</p>
          </div>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
            <li><strong>Î»</strong> = wavelength (m)</li>
            <li><strong>R<sub>H</sub></strong> = Rydberg constant (1.097 Ã— 10â· mâ»Â¹)</li>
            <li><strong>nâ‚</strong> = lower energy level</li>
            <li><strong>nâ‚‚</strong> = higher energy level (nâ‚‚ &gt; nâ‚)</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example: Balmer Series (nâ‚ = 2)</h2>
          <p className="text-gray-700 mb-3"><strong>Find Î» for transition nâ‚‚ = 3 â†’ nâ‚ = 2.</strong></p>
          <div className="space-y-2 text-gray-700">
            <p>1/Î» = (1.097 Ã— 10â·) Ã— (1/2Â² - 1/3Â²)</p>
            <p>1/Î» = (1.097 Ã— 10â·) Ã— (1/4 - 1/9) = (1.097 Ã— 10â·) Ã— (5/36)</p>
            <p>1/Î» â‰ˆ 1.524 Ã— 10â¶ mâ»Â¹</p>
            <p>Î» â‰ˆ 6.56 Ã— 10â»â· m = 656 nm (red line, HÎ±)</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: Î» â‰ˆ 656 nm (visible red)</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Spectral Series</h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div className="bg-gray-50 p-3 rounded">
              <p className="font-semibold">Lyman (nâ‚ = 1): UV</p>
              <p className="font-semibold">Balmer (nâ‚ = 2): Visible</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="font-semibold">Paschen (nâ‚ = 3): IR</p>
              <p className="font-semibold">Brackett (nâ‚ = 4): IR</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Notes</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Strictly valid for hydrogen; modified for other atoms using ZÂ².</li>
            <li>Energy: Î”E = hc/Î» relates wavelength to photon energy.</li>
            <li>nâ‚‚ â†’ nâ‚ transition emits photon; reverse absorbs.</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/atomic-structure-calculators/wavelength-energy-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Wavelength-Energy Calculator</h3>
              <p className="text-sm text-gray-600">Calculate spectral line properties</p>
            </a>
            <a href="/atomic-structure-calculators/bohr-model-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Bohr Model Calculator</h3>
              <p className="text-sm text-gray-600">Energy levels and transitions</p>
            </a>
            <a href="/chemistry-formulas/bohr-model" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Bohr Model Formula</h3>
              <p className="text-sm text-gray-600">E<sub>n</sub> = -13.6 ZÂ²/nÂ²</p>
            </a>
            <a href="/chemistry-formulas/planck-equation" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Planck Equation</h3>
              <p className="text-sm text-gray-600">E = hÎ½ photon energy</p>
            </a>
            <a href="/atomic-structure-calculators" className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">All Quantum & Atomic Structure Calculators</h3>
              <p className="text-sm opacity-90">Explore all quantum and atomic tools</p>
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
            "headline": "Rydberg Equation",
            "description": "Rydberg Equation on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/rydberg-equation",
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
                "name": "Rydberg Equation",
                "item": "https://chemsolved.com/chemistry-formulas/rydberg-equation"
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
