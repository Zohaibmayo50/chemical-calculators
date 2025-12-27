import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Collision Theory Formula | ChemCalc',
  description: 'Understand reaction rate dependence on collisions, energy, and orientation.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/collision-theory',
  },
  keywords: 'collision theory, reaction rate, activation energy, kinetic molecular theory',
}

export default function CollisionTheoryPage() {
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
            <li className="text-gray-900">Collision Theory</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Collision Theory</h1>
          <p className="text-lg opacity-90">Molecular basis of reaction rates</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Rate Expression</h2>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-purple-700">Rate = Z × f × p</p>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Z</strong> = collision frequency (collisions per second)</li>
            <li><strong>f</strong> = fraction of collisions with E ≥ E<sub>a</sub></li>
            <li><strong>p</strong> = steric factor (proper orientation)</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Three Requirements for Reaction</h2>
          <div className="space-y-3 text-gray-700">
            <div className="bg-purple-50 p-3 rounded">
              <h3 className="font-semibold text-purple-700">1. Molecules must collide</h3>
              <p>Higher concentration or temperature → more collisions → faster rate</p>
            </div>
            <div className="bg-purple-50 p-3 rounded">
              <h3 className="font-semibold text-purple-700">2. Sufficient energy (E ≥ E<sub>a</sub>)</h3>
              <p>f = e^(-E<sub>a</sub>/RT) from Boltzmann distribution</p>
            </div>
            <div className="bg-purple-50 p-3 rounded">
              <h3 className="font-semibold text-purple-700">3. Proper orientation</h3>
              <p>Reactive sites must align; p often &lt; 1 (especially for large molecules)</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Temperature Effect</h2>
          <p className="text-gray-700 mb-3">Increasing T:</p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Increases Z (molecules move faster, collide more often)</li>
            <li>Increases f (larger fraction with E ≥ E<sub>a</sub>)</li>
            <li>Overall: rate typically doubles for every 10°C rise near room temperature</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Connection to Arrhenius Equation</h2>
          <p className="text-gray-700">Collision theory provides molecular interpretation of k = A e^(-E<sub>a</sub>/RT):</p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2 mt-2">
            <li>A (pre-exponential factor) ∝ Z × p</li>
            <li>e^(-E<sub>a</sub>/RT) = f (energy fraction)</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/kinetics-calculators/collision-theory-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Collision Theory Calculator</h3>
              <p className="text-sm text-gray-600">Calculate collision rates and energy</p>
            </a>
            <a href="/kinetics-calculators/arrhenius-equation-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Arrhenius Equation Calculator</h3>
              <p className="text-sm text-gray-600">Temperature-rate relationships</p>
            </a>
            <a href="/chemistry-formulas/arrhenius-equation" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Arrhenius Equation Formula</h3>
              <p className="text-sm text-gray-600">k = Ae^(-Ea/RT)</p>
            </a>
            <a href="/chemistry-formulas/rate-law" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Rate Law Formula</h3>
              <p className="text-sm text-gray-600">Rate expressions and orders</p>
            </a>
            <a href="/chemical-kinetics-calculators" className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">All Chemical Kinetics Calculators</h3>
              <p className="text-sm opacity-90">Explore all kinetics tools and calculators</p>
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
            "headline": "Collision Theory",
            "description": "Collision Theory on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/collision-theory",
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
                "name": "Collision Theory",
                "item": "https://chemsolved.com/chemistry-formulas/collision-theory"
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
