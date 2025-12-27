import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Lattice Energy Formula | ChemCalc',
  description: 'Calculate ionic solid stability using Born-Haber cycle and lattice energy.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/lattice-energy',
  },
  keywords: 'lattice energy, Born-Haber cycle, ionic compounds, crystal energy',
}

export default function LatticeEnergyPage() {
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
            <li className="text-gray-900">Lattice Energy</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Lattice Energy</h1>
          <p className="text-lg opacity-90">Energy to separate ionic solid into gaseous ions</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Born-Haber Cycle</h2>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-4 text-center">
            <p className="text-xl font-bold text-purple-700">ΔH<sub>f</sub> = ΔH<sub>sub</sub> + ΔH<sub>ion</sub> + ΔH<sub>diss</sub> + ΔH<sub>EA</sub> + U</p>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li><strong>U</strong> = lattice energy</li>
            <li><strong>ΔH<sub>f</sub></strong> = enthalpy of formation</li>
            <li><strong>ΔH<sub>sub</sub></strong> = sublimation enthalpy</li>
            <li><strong>ΔH<sub>ion</sub></strong> = ionization energy</li>
            <li><strong>ΔH<sub>diss</sub></strong> = bond dissociation</li>
            <li><strong>ΔH<sub>EA</sub></strong> = electron affinity</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Coulomb Estimate</h2>
          <div className="bg-purple-50 p-4 rounded text-center mb-3">
            <p className="text-lg font-semibold text-purple-700">U ∝ (Q₊ × Q₋) / r</p>
          </div>
          <p className="text-gray-700">Higher charges and smaller ionic radii lead to greater lattice energy.</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example: NaCl</h2>
          <p className="text-gray-700 mb-3">Using Born-Haber cycle with experimental data:</p>
          <div className="space-y-2 text-gray-700">
            <p>ΔH<sub>f</sub>(NaCl) = -411 kJ/mol</p>
            <p>ΔH<sub>sub</sub>(Na) = +108 kJ/mol</p>
            <p>IE(Na) = +496 kJ/mol</p>
            <p>½ ΔH<sub>diss</sub>(Cl₂) = +122 kJ/mol</p>
            <p>EA(Cl) = -349 kJ/mol</p>
            <p>U = ΔH<sub>f</sub> - (ΔH<sub>sub</sub> + IE + ½ΔH<sub>diss</sub> + EA)</p>
            <p>U = -411 - (108 + 496 + 122 - 349) ≈ -788 kJ/mol</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: U ≈ -788 kJ/mol (energy released forming lattice)</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Notes</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Higher lattice energy = more stable ionic compound.</li>
            <li>MgO has much higher U than NaCl due to +2/-2 charges.</li>
            <li>Sign convention varies; some define U as energy required (positive).</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/thermodynamics-calculators/lattice-energy-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Lattice Energy Calculator</h3>
              <p className="text-sm text-gray-600">Calculate lattice energy</p>
            </a>
            <a href="/thermodynamics-calculators/enthalpy-reaction-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Enthalpy Reaction Calculator</h3>
              <p className="text-sm text-gray-600">Calculate reaction enthalpy</p>
            </a>
            <a href="/thermodynamics-calculators" className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">All Thermodynamics Calculators</h3>
              <p className="text-sm opacity-90">Explore all thermodynamics tools</p>
            </a>
            <a href="/chemistry-formulas/hess-law" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Hess's Law</h3>
              <p className="text-sm text-gray-600">Born-Haber cycle calculations</p>
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
            "headline": "Lattice Energy",
            "description": "Lattice Energy on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/lattice-energy",
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
                "name": "Lattice Energy",
                "item": "https://chemsolved.com/chemistry-formulas/lattice-energy"
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
