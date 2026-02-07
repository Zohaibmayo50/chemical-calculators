import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: "Hess's Law",
  description: "Calculate reaction enthalpy by summing enthalpy changes of intermediate steps.",
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/hess-law',
  },
  keywords: "Hess law, enthalpy, thermochemistry, reaction pathways",
}

export default function HessLawPage() {
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
            <li className="text-gray-900">Hess's Law</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Hess's Law</h1>
          <p className="text-lg opacity-90">Enthalpy is a state function</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Principle</h2>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-amber-700">ΔH<sub>total</sub> = ΔH₁ + ΔH₂ + ΔH₃ + ...</p>
          </div>
          <p className="text-gray-700">The total enthalpy change is independent of pathway; sum intermediate steps to find overall ΔH.</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example</h2>
          <p className="text-gray-700 mb-3"><strong>Find ΔH for:</strong> C(s) + ½O₂(g) → CO(g)</p>
          <div className="space-y-2 text-gray-700 mb-4">
            <p><strong>Given reactions:</strong></p>
            <p>(1) C(s) + O₂(g) → CO₂(g); ΔH₁ = -393.5 kJ</p>
            <p>(2) CO(g) + ½O₂(g) → CO₂(g); ΔH₂ = -283.0 kJ</p>
          </div>
          <div className="space-y-2 text-gray-700">
            <p>Reverse reaction (2): CO₂(g) → CO(g) + ½O₂(g); ΔH = +283.0 kJ</p>
            <p>Add to (1): C(s) + O₂(g) → CO₂(g) then CO₂(g) → CO(g) + ½O₂(g)</p>
            <p>Net: C(s) + ½O₂(g) → CO(g)</p>
            <p>ΔH = -393.5 + 283.0 = -110.5 kJ</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: ΔH = -110.5 kJ</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Tips</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Reverse a reaction: change sign of ΔH.</li>
            <li>Multiply reaction by factor: multiply ΔH by same factor.</li>
            <li>Cancel species appearing on both sides when summing.</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/thermodynamics-calculators/enthalpy-reaction-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Enthalpy Reaction Calculator</h3>
              <p className="text-sm text-gray-600">Calculate reaction enthalpy</p>
            </a>
            <a href="/thermodynamics-calculators/gibbs-free-energy-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Gibbs Free Energy Calculator</h3>
              <p className="text-sm text-gray-600">Calculate ΔG from ΔH and ΔS</p>
            </a>
            <a href="/thermodynamics-calculators" className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">All Thermodynamics Calculators</h3>
              <p className="text-sm opacity-90">Explore all thermodynamics tools</p>
            </a>
            <a href="/chemistry-formulas/enthalpy-formula" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Enthalpy Formula</h3>
              <p className="text-sm text-gray-600">Standard heats of formation</p>
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
            "headline": "Hess Law",
            "description": "Hess Law on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/hess-law",
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
                "name": "Hess Law",
                "item": "https://chemsolved.com/chemistry-formulas/hess-law"
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
