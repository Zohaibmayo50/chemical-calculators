import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Dipole Moment Formula',
  description: 'Calculate molecular dipole moment using μ = q × d.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/dipole-moment-formula',
  },
  keywords: 'dipole moment, polarity, charge separation, debye',
}

export default function DipoleMomentFormulaPage() {
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
            <li className="text-gray-900">Dipole Moment Formula</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Dipole Moment Formula</h1>
          <p className="text-lg opacity-90">Measure of molecular polarity</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Understanding Dipole Moment</h2>
          <p className="text-gray-700 mb-4">
            The dipole moment (μ) is a fundamental molecular property that quantifies the separation of positive and negative electrical charges within a molecule. First introduced by physicist Peter Debye in 1912, the dipole moment concept revolutionized our understanding of molecular polarity, intermolecular forces, and chemical reactivity. Molecules with high dipole moments exhibit strong polarity, leading to elevated boiling points, increased solubility in polar solvents like water, and enhanced chemical reactivity in polar environments.
          </p>
          <p className="text-gray-700 mb-4">
            Dipole moments arise when atoms with different electronegativities form covalent bonds, creating partial positive (δ⁺) and partial negative (δ⁻) charges. For instance, in HCl, chlorine's higher electronegativity pulls electron density away from hydrogen, creating a dipole pointing from H⁺ᵟ to Cl⁻ᵟ. The magnitude and direction of this dipole determine many physical and chemical properties, from microwave absorption in rotational spectroscopy to drug-receptor interactions in pharmaceutical design.
          </p>
          <p className="text-gray-700">
            For polyatomic molecules, the overall dipole moment is the vector sum of individual bond dipoles. Molecular geometry plays a critical role: linear CO₂ has zero dipole moment despite polar C=O bonds because the two bond dipoles cancel due to symmetry. In contrast, bent H₂O has a large dipole moment (1.85 D) because the two O-H bond dipoles add constructively. This vector nature makes dipole moment predictions more complex but also more informative about three-dimensional molecular structure.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Formula &amp; Units</h2>
          <div className="bg-cyan-50 border-l-4 border-cyan-500 p-4 mb-4 text-center">
            <p className="text-3xl font-bold text-cyan-700 mb-3">μ = q × d</p>
            <p className="text-sm text-gray-600">Vector quantity pointing from positive to negative charge</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700 mb-4">
            <div className="bg-cyan-50 p-3 rounded">
              <p><strong>μ</strong> = dipole moment (C·m or Debye)</p>
            </div>
            <div className="bg-cyan-50 p-3 rounded">
              <p><strong>q</strong> = magnitude of charge (Coulombs)</p>
            </div>
            <div className="bg-cyan-50 p-3 rounded">
              <p><strong>d</strong> = distance between charges (meters)</p>
            </div>
            <div className="bg-cyan-50 p-3 rounded">
              <p><strong>1 Debye (D)</strong> = 3.336 × 10⁻³⁰ C·m</p>
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded p-4">
            <p className="font-semibold text-blue-800 mb-2">Important Notes:</p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Dipole moment is a vector: magnitude AND direction matter</li>
              <li>Direction: from positive charge to negative charge (convention)</li>
              <li>For bond dipoles: arrow points toward more electronegative atom</li>
              <li>Typical molecular dipoles: 0-11 D (water = 1.85 D, HCl = 1.08 D)</li>
              <li>μ = 0 for homonuclear diatomics (H₂, N₂, O₂) and symmetric molecules (CH₄, CO₂)</li>
            </ul>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example</h2>
          <p className="text-gray-700 mb-3"><strong>Given:</strong> q = 1.6 × 10⁻¹⁹ C (electron charge), d = 1.0 × 10⁻¹⁰ m.</p>
          <div className="space-y-2 text-gray-700">
            <p>μ = (1.6 × 10⁻¹⁹) × (1.0 × 10⁻¹⁰) = 1.6 × 10⁻²⁹ C·m</p>
            <p>μ = (1.6 × 10⁻²⁹) / (3.336 × 10⁻³⁰) ≈ 4.8 D</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: μ ≈ 4.8 D</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Mistakes</h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Ignoring vector nature</h3>
              <p>For polyatomic molecules, sum bond dipoles as vectors.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Symmetry cancellation</h3>
              <p>Symmetric molecules like CO₂ have μ = 0 despite polar bonds.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">FAQ</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold">What molecules have zero dipole moment?</h3>
              <p>Homonuclear diatomics (H₂, O₂) and symmetric structures (CH₄, CO₂, BF₃).</p>
            </div>
            <div>
              <h3 className="font-semibold">How does polarity affect solubility?</h3>
              <p>Higher μ generally means better solubility in polar solvents like water.</p>
            </div>
          </div>
        </section>

        {/* Related Calculators */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/physical-chemistry-calculators/dipole-moment-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Dipole Moment Calculator</h3>
              <p className="text-sm text-gray-600">Calculate μ = q × d instantly</p>
            </a>
            <a href="/molecular-structure-calculators/molecular-geometry-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Molecular Geometry Calculator</h3>
              <p className="text-sm text-gray-600">Predict molecular shapes and polarity</p>
            </a>
            <a href="/chemistry-formulas/vsepr-theory" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">VSEPR Theory</h3>
              <p className="text-sm text-gray-600">Understand molecular geometry</p>
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
            "headline": "Dipole Moment Formula",
            "description": "Dipole Moment Formula on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/dipole-moment-formula",
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
                "name": "Dipole Moment Formula",
                "item": "https://chemsolved.com/chemistry-formulas/dipole-moment-formula"
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
