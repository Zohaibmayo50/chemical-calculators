import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Nuclear Binding Energy',
  description: 'Calculate nuclear binding energy (E = Δmc²) from mass defect. Understand nuclear stability, Einstein\'s mass-energy equivalence, and binding energy per nucleon.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/nuclear-binding-energy',
  },
  keywords: 'nuclear binding energy, mass defect, Einstein equation, nuclear stability',
}

export default function NuclearBindingEnergyPage() {
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
            <li className="text-gray-900">Nuclear Binding Energy</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Nuclear Binding Energy</h1>
          <p className="text-lg opacity-90">Energy required to disassemble a nucleus</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Formula</h2>
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-red-700">E = Δm × c²</p>
            <p className="text-lg text-red-700 mt-2">Δm = (Z m<sub>p</sub> + N m<sub>n</sub> - M<sub>nucleus</sub>)</p>
          </div>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
            <li><strong>E</strong> = binding energy (J)</li>
            <li><strong>Δm</strong> = mass defect (kg)</li>
            <li><strong>c</strong> = speed of light (3.0 × 10⁸ m/s)</li>
            <li><strong>Z</strong> = number of protons</li>
            <li><strong>N</strong> = number of neutrons</li>
            <li><strong>m<sub>p</sub></strong> = proton mass (1.007276 u)</li>
            <li><strong>m<sub>n</sub></strong> = neutron mass (1.008665 u)</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example: Helium-4</h2>
          <p className="text-gray-700 mb-3"><strong>Given:</strong> Z = 2, N = 2, M<sub>nucleus</sub> = 4.0015 u.</p>
          <div className="space-y-2 text-gray-700">
            <p>Δm = 2(1.007276) + 2(1.008665) - 4.0015 = 0.0304 u</p>
            <p>Convert to kg: 0.0304 u × (1.66054 × 10⁻²⁷ kg/u) = 5.05 × 10⁻²⁹ kg</p>
            <p>E = (5.05 × 10⁻²⁹) × (3.0 × 10⁸)² ≈ 4.5 × 10⁻¹² J</p>
            <p>In MeV: 4.5 × 10⁻¹² / (1.602 × 10⁻¹³) ≈ 28.3 MeV</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: E ≈ 28.3 MeV (or ≈ 7.1 MeV/nucleon)</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Notes</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Higher binding energy per nucleon = more stable nucleus.</li>
            <li>Fe-56 has maximum binding energy per nucleon (≈8.8 MeV/nucleon).</li>
            <li>Fusion of light nuclei and fission of heavy nuclei both release energy.</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/nuclear-calculators/nuclear-binding-energy-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Nuclear Binding Energy Calculator</h3>
              <p className="text-sm text-gray-600">Calculate E from mass defect</p>
            </a>
            <a href="/chemistry-formulas/nuclear-chemistry-formula" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Nuclear Chemistry Formula</h3>
              <p className="text-sm text-gray-600">Radioactive decay and reactions</p>
            </a>
            <a href="/nuclear-calculators" className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">All Nuclear Calculators</h3>
              <p className="text-sm opacity-90">Explore all nuclear chemistry tools</p>
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
            "headline": "Nuclear Binding Energy",
            "description": "Nuclear Binding Energy on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/nuclear-binding-energy",
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
                "name": "Nuclear Binding Energy",
                "item": "https://chemsolved.com/chemistry-formulas/nuclear-binding-energy"
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
