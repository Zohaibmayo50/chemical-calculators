import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Solubility Product Constant (Ksp)',
  description: 'Ksp expresses the equilibrium solubility of sparingly soluble salts.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/solubility-product-constant-ksp',
  },
  keywords: 'Ksp, solubility product, equilibrium, ionic compounds, precipitation',
}

export default function KspPage() {
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
            <li className="text-gray-900">Solubility Product Constant (Ksp)</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Solubility Product Constant (Ksp)</h1>
          <p className="text-lg opacity-90">Equilibrium of dissolution for sparingly soluble salts</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Definition</h2>
          <p className="text-gray-700 mb-4">For a salt A_aB_b ⇌ a A⁺ + b B⁻, Ksp = [A⁺]^a [B⁻]^b at equilibrium. Activity may be used for high ionic strength.</p>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-emerald-700">Ksp = Π [ion]^stoichiometric coefficient</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example: AgCl</h2>
          <p className="text-gray-700 mb-3">AgCl(s) ⇌ Ag⁺ + Cl⁻; Ksp = [Ag⁺][Cl⁻] = s × s = s².</p>
          <p className="text-gray-700">If Ksp(AgCl) = 1.8 × 10⁻¹⁰, then s = √Ksp ≈ 1.34 × 10⁻⁵ M.</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Notes</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Common ion effect reduces solubility: presence of shared ions shifts equilibrium.</li>
            <li>Complexation and pH changes can alter apparent solubility.</li>
            <li>Use activities for concentrated solutions; γ &lt; 1 lowers effective concentration.</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/equilibrium-calculators/solubility-product-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Solubility Product Calculator</h3>
              <p className="text-sm text-gray-600">Calculate Ksp and solubility</p>
            </a>
            <a href="/" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Equilibrium Constant Calculator</h3>
              <p className="text-sm text-gray-600">Calculate K from concentrations</p>
            </a>
            <a href="/chemistry-formulas/common-ion-effect" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Common Ion Effect</h3>
              <p className="text-sm text-gray-600">Shared ions affect solubility</p>
            </a>
            <a href="/chemistry-formulas/equilibrium-constant" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Equilibrium Constant Formula</h3>
              <p className="text-sm text-gray-600">K expression and calculations</p>
            </a>
            <a href="/" className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">All Chemical Equilibrium Calculators</h3>
              <p className="text-sm opacity-90">Explore all equilibrium tools and calculators</p>
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
            "headline": "Solubility Product Constant Ksp",
            "description": "Solubility Product Constant Ksp on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/solubility-product-constant-ksp",
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
                "name": "Solubility Product Constant Ksp",
                "item": "https://chemsolved.com/chemistry-formulas/solubility-product-constant-ksp"
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
