import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: "Faraday's Law of Electrolysis | ChemCalc",
  description: 'Compute mass deposited using m = (Q M) / (n F).',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/faradays-law',
  },
  keywords: 'Faraday law, electrolysis, mass deposited, charge, molar mass, Faraday constant',
}

export default function FaradaysLawPage() {
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
            <li className="text-gray-900">Faraday's Law of Electrolysis</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-sky-600 to-blue-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Faraday's Law of Electrolysis</h1>
          <p className="text-lg opacity-90">Relates electric charge to mass deposited</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Formula</h2>
          <div className="bg-sky-50 border-l-4 border-sky-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-sky-700">m = (Q × M) / (n × F)</p>
          </div>
          <p className="text-gray-700">m: mass deposited (g), Q: charge (C), M: molar mass (g/mol), n: electrons per ion, F: Faraday constant (96485 C/mol).</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example</h2>
          <p className="text-gray-700 mb-3"><strong>Given:</strong> Q = 10,000 C, ion Cu²⁺ (n = 2), M = 63.546 g/mol.</p>
          <div className="space-y-2 text-gray-700">
            <p>m = (10,000 × 63.546) / (2 × 96485) g</p>
            <p>m ≈ (635,460) / 192,970 ≈ 3.29 g</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: ≈ 3.29 g of Cu deposited</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Notes & Pitfalls</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Use correct valence n; for Ag⁺, n = 1; for Al³⁺, n = 3.</li>
            <li>Ensure molar mass M corresponds to the deposited species.</li>
            <li>Account for efficiency if the process is not 100% current efficient.</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/electrochemistry-calculators/electrolysis-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Electrolysis Calculator</h3>
              <p className="text-sm text-gray-600">Calculate mass deposited</p>
            </a>
            <a href="/electrochemistry-calculators/cell-potential-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Cell Potential Calculator</h3>
              <p className="text-sm text-gray-600">Calculate cell potentials</p>
            </a>
            <a href="/electrochemistry-calculators" className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">All Electrochemistry Calculators</h3>
              <p className="text-sm opacity-90">Explore all electrochemistry tools</p>
            </a>
            <a href="/chemistry-formulas/electrolysis-formula" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Electrolysis Formula</h3>
              <p className="text-sm text-gray-600">Electrolysis calculations</p>
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
            "headline": "Faradays Law",
            "description": "Faradays Law on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/faradays-law",
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
                "name": "Faradays Law",
                "item": "https://chemsolved.com/chemistry-formulas/faradays-law"
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
