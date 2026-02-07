import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Planck Equation',
  description: 'Relate photon energy and frequency using E = hν.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/planck-equation',
  },
  keywords: 'Planck equation, photon energy, frequency, quantum mechanics, wavelength',
}

export default function PlanckEquationPage() {
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
            <li className="text-gray-900">Planck Equation</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Planck Equation</h1>
          <p className="text-lg opacity-90">Energy quantization of light</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Formula</h2>
          <div className="bg-violet-50 border-l-4 border-violet-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-violet-700">E = h ν</p>
            <p className="text-lg text-violet-700 mt-2">ν = c / λ</p>
          </div>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
            <li><strong>E</strong> = photon energy (J)</li>
            <li><strong>h</strong> = Planck constant (6.626 × 10⁻³⁴ J·s)</li>
            <li><strong>ν</strong> = frequency (Hz or s⁻¹)</li>
            <li><strong>c</strong> = speed of light (3.0 × 10⁸ m/s)</li>
            <li><strong>λ</strong> = wavelength (m)</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Alternative Form</h2>
          <div className="bg-violet-50 p-4 rounded text-center">
            <p className="text-xl font-semibold text-violet-700">E = h c / λ</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example</h2>
          <p className="text-gray-700 mb-3"><strong>Given:</strong> λ = 500 nm (green light).</p>
          <div className="space-y-2 text-gray-700">
            <p>λ = 500 × 10⁻⁹ m</p>
            <p>E = (6.626 × 10⁻³⁴ × 3.0 × 10⁸) / (500 × 10⁻⁹) J</p>
            <p>E ≈ 3.98 × 10⁻¹⁹ J</p>
            <p>In eV: E = (3.98 × 10⁻¹⁹) / (1.602 × 10⁻¹⁹) ≈ 2.48 eV</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: E ≈ 3.98 × 10⁻¹⁹ J ≈ 2.48 eV</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Applications</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Photoelectric effect: photon must have E ≥ work function.</li>
            <li>Spectroscopy: ΔE of transitions = hν of absorbed/emitted photon.</li>
            <li>Higher frequency (shorter λ) = higher energy photon.</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/quantum-and-atomic-structure-calculators/wavelength-energy-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Wavelength-Energy Calculator</h3>
              <p className="text-sm text-gray-600">Calculate photon properties</p>
            </a>
            <a href="/quantum-and-atomic-structure-calculators/bohr-model-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Bohr Model Calculator</h3>
              <p className="text-sm text-gray-600">Energy level transitions</p>
            </a>
            <a href="/chemistry-formulas/wavelength-energy-relationship" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Wavelength-Energy Relationship</h3>
              <p className="text-sm text-gray-600">E = hc/λ formula</p>
            </a>
            <a href="/chemistry-formulas/de-broglie-wavelength" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">De Broglie Wavelength</h3>
              <p className="text-sm text-gray-600">Matter wave properties</p>
            </a>
            <a href="/quantum-and-atomic-structure-calculators" className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
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
            "headline": "Planck Equation",
            "description": "Planck Equation on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/planck-equation",
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
                "name": "Planck Equation",
                "item": "https://chemsolved.com/chemistry-formulas/planck-equation"
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
