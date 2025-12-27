import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Root Mean Square Speed | ChemCalc',
  description: 'Calculate RMS speed of gas molecules: v_rms = √(3RT/M).',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/rms-speed',
  },
  keywords: 'rms speed, kinetic molecular theory, gas velocity, Maxwell-Boltzmann',
}

export default function RmsSpeedPage() {
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
            <li className="text-gray-900">Root Mean Square Speed</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-sky-600 to-blue-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Root Mean Square Speed</h1>
          <p className="text-lg opacity-90">Average molecular speed in gases</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Formula</h2>
          <div className="bg-sky-50 border-l-4 border-sky-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-sky-700">v<sub>rms</sub> = √(3RT / M)</p>
          </div>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
            <li><strong>v<sub>rms</sub></strong> = root mean square speed (m/s)</li>
            <li><strong>R</strong> = gas constant (8.314 J·mol⁻¹·K⁻¹)</li>
            <li><strong>T</strong> = absolute temperature (K)</li>
            <li><strong>M</strong> = molar mass (kg/mol)</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example: O₂ at 25°C</h2>
          <p className="text-gray-700 mb-3"><strong>Given:</strong> M(O₂) = 32 g/mol = 0.032 kg/mol, T = 298 K.</p>
          <div className="space-y-2 text-gray-700">
            <p>v<sub>rms</sub> = √[(3 × 8.314 × 298) / 0.032]</p>
            <p>v<sub>rms</sub> = √(7434 / 0.032) = √232,312</p>
            <p>v<sub>rms</sub> ≈ 482 m/s</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: v<sub>rms</sub> ≈ 482 m/s</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Notes</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Lighter molecules move faster at same temperature.</li>
            <li>Higher temperature = higher v<sub>rms</sub>.</li>
            <li>Related to kinetic energy: KE<sub>avg</sub> = ½ m v<sub>rms</sub>² = (3/2) k<sub>B</sub>T.</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/gas-laws-calculators/kinetic-molecular-theory-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Kinetic Molecular Theory Calculator</h3>
              <p className="text-sm text-gray-600">Calculate molecular speeds</p>
            </a>
            <a href="/gas-laws-calculators/grahams-law-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Graham's Law Calculator</h3>
              <p className="text-sm text-gray-600">Calculate diffusion rates</p>
            </a>
            <a href="/gas-laws-calculators" className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">All Gas Laws Calculators</h3>
              <p className="text-sm opacity-90">Explore all gas law tools</p>
            </a>
            <a href="/chemistry-formulas/grahams-law" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Graham's Law</h3>
              <p className="text-sm text-gray-600">Effusion and diffusion</p>
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
            "headline": "Rms Speed",
            "description": "Rms Speed on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/rms-speed",
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
                "name": "Rms Speed",
                "item": "https://chemsolved.com/chemistry-formulas/rms-speed"
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
