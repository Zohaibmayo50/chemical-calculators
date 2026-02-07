import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Activity Coefficient (γ)',
  description: 'Understand activity a = γ × [C] for non-ideal solutions.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/activity-coefficient',
  },
  keywords: 'activity coefficient, non-ideal solutions, ionic strength, Debye-Hückel',
}

export default function ActivityCoefficientPage() {
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
            <li className="text-gray-900">Activity Coefficient</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Activity Coefficient (γ)</h1>
          <p className="text-lg opacity-90">Correct concentrations for non-ideal behavior</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Definition</h2>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-amber-700">a = γ × [C]</p>
          </div>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
            <li><strong>a</strong> = activity (effective concentration)</li>
            <li><strong>γ</strong> = activity coefficient (dimensionless)</li>
            <li><strong>[C]</strong> = molar concentration</li>
            <li>γ = 1 for ideal solutions; γ &lt; 1 for ionic solutions</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Debye-Hückel Approximation</h2>
          <p className="text-gray-700 mb-3">For dilute ionic solutions:</p>
          <div className="bg-amber-50 p-4 rounded text-center">
            <p className="text-lg font-semibold text-amber-700">log γ± = -A |z₊z₋| √I</p>
          </div>
          <p className="text-gray-700 mt-3">I = ionic strength; A ≈ 0.51 (25°C, aqueous); z = ion charges.</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example</h2>
          <p className="text-gray-700 mb-3"><strong>Given:</strong> NaCl, I = 0.01 M, z₊ = +1, z₋ = -1.</p>
          <div className="space-y-2 text-gray-700">
            <p>log γ± = -0.51 × 1 × √0.01 = -0.51 × 0.1 = -0.051</p>
            <p>γ± = 10⁻⁰·⁰⁵¹ ≈ 0.89</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: γ± ≈ 0.89</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Notes</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Important for accurate equilibrium calculations in concentrated solutions.</li>
            <li>Debye-Hückel valid only for I &lt; 0.1 M; use extended models for higher I.</li>
            <li>Use activities in thermodynamic expressions; concentrations for kinetics (usually).</li>
          </ul>
        </section>
        {/* Related Calculators */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/physical-chemistry-calculators/activity-coefficient-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Activity Coefficient Calculator</h3>
              <p className="text-sm text-gray-600">Calculate activity coefficients using Debye-Hückel</p>
            </a>
            <a href="/chemistry-formulas/ionic-strength-formula" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Ionic Strength Formula</h3>
              <p className="text-sm text-gray-600">I = ½Σ(c<sub>i</sub>z<sub>i</sub>²) for activity calculations</p>
            </a>
            <a href="/physical-chemistry-calculators" className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">All Physical Chemistry Calculators</h3>
              <p className="text-sm opacity-90">Explore all physical chemistry tools</p>
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
            "headline": "Activity Coefficient",
            "description": "Activity Coefficient on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/activity-coefficient",
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
                "name": "Activity Coefficient",
                "item": "https://chemsolved.com/chemistry-formulas/activity-coefficient"
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
