import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Hybridization Rules',
  description: 'Determine sp, sp², sp³, and other hybrid orbitals from molecular geometry.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/hybridization',
  },
  keywords: 'hybridization, sp, sp2, sp3, VSEPR, molecular geometry',
}

export default function HybridizationPage() {
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
            <li className="text-gray-900">Hybridization Rules</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Hybridization Rules</h1>
          <p className="text-lg opacity-90">Determine hybrid orbital types</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Understanding Hybridization</h2>
          <p className="text-gray-700 mb-4">
            Hybridization is a theoretical concept in valence bond theory that explains molecular geometry by proposing that atomic orbitals mix to form new hybrid orbitals with specific spatial arrangements. Introduced by Linus Pauling in the 1930s, hybridization theory resolved the puzzle of how carbon forms four equivalent bonds in methane despite having only two unpaired electrons in its ground state. The theory proposes that one 2s and three 2p orbitals combine to form four equivalent sp³ hybrid orbitals, each capable of forming a sigma bond with hydrogen atoms in a tetrahedral arrangement at 109.5° angles.
          </p>
          <p className="text-gray-700 mb-4">
            The type of hybridization (sp, sp², sp³, sp³d, sp³d²) correlates directly with the steric number—the sum of bonding electron pairs and lone pairs on the central atom. This steric number approach, combined with VSEPR (Valence Shell Electron Pair Repulsion) theory, allows chemists to predict both electron geometry (determined by hybridization) and molecular geometry (the actual shape considering lone pairs). For example, water has sp³ hybridization (steric number 4), but its molecular geometry is bent rather than tetrahedral because two of the four hybrid orbitals contain lone pairs instead of bonding pairs.
          </p>
          <p className="text-gray-700">
            Understanding hybridization is essential for predicting bond angles, explaining molecular shapes, understanding reactivity patterns in organic chemistry, and interpreting spectroscopic data. Different hybridizations produce characteristic bond angles: sp = 180° (linear), sp² = 120° (trigonal planar), sp³ = 109.5° (tetrahedral). In organic chemistry, recognizing that carbon in alkanes uses sp³ hybridization, alkenes use sp², and alkynes use sp hybridization helps explain differences in reactivity, bond strength, and acidity. The concept also extends to coordination chemistry where transition metals use d-orbitals in hybridization schemes like sp³d² (octahedral) and sp³d (trigonal bipyramidal).
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Steric Number Method</h2>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
            <p className="text-lg font-semibold text-green-700">Steric Number = (bonding pairs) + (lone pairs)</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-semibold">SN = 2 → sp (linear)</p>
              <p>Example: CO₂, BeCl₂</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-semibold">SN = 3 → sp² (trigonal planar)</p>
              <p>Example: BF₃, CH₂=CH₂</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-semibold">SN = 4 → sp³ (tetrahedral)</p>
              <p>Example: CH₄, NH₃, H₂O</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-semibold">SN = 5 → sp³d (trigonal bipyramidal)</p>
              <p>Example: PCl₅</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-semibold">SN = 6 → sp³d² (octahedral)</p>
              <p>Example: SF₆</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Additional Example: SO₂</h2>
          <div className="space-y-3 text-gray-700">
            <p><strong>Step 1:</strong> Draw Lewis structure — S has 2 bonding regions (to O atoms) and 1 lone pair</p>
            <p><strong>Step 2:</strong> Count bonding regions: 2 (double bonds count as ONE region)</p>
            <p><strong>Step 3:</strong> Count lone pairs on central S: 1</p>
            <p><strong>Step 4:</strong> Steric number = 2 + 1 = 3</p>
            <p><strong>Step 5:</strong> SN = 3 → sp² hybridization</p>
            <p><strong>Note:</strong> Electron geometry is trigonal planar, but molecular geometry is bent (~119°) due to lone pair repulsion.</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: sp² hybridization, bent molecular geometry</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Key Concepts</h2>
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded">
              <h3 className="font-semibold text-green-900 mb-2">Bond Angles &amp; Hybridization</h3>
              <p className="text-gray-700">sp = 180°, sp² = 120°, sp³ = 109.5°, sp³d = 90°/120°, sp³d² = 90°. Lone pairs compress bond angles slightly (H₂O: 104.5° instead of 109.5°).</p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h3 className="font-semibold text-green-900 mb-2">Multiple Bonds</h3>
              <p className="text-gray-700">Double/triple bonds count as ONE bonding region. Sigma bonds use hybrid orbitals; pi bonds use unhybridized p orbitals. sp² has one unhybridized p; sp has two.</p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h3 className="font-semibold text-green-900 mb-2">Organic Chemistry Applications</h3>
              <p className="text-gray-700">Alkanes (C-C): sp³. Alkenes (C=C): sp². Alkynes (C≡C): sp. Hybridization affects acidity: sp &gt; sp² &gt; sp³ (more s character = more acidic).</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Mistakes</h2>
          <div className="space-y-3">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Counting multiple bonds as multiple regions</h3>
              <p className="text-gray-700">A double bond (C=O) counts as ONE bonding region, not two. Only count the number of atoms bonded, not the number of bonds.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Confusing electron geometry with molecular geometry</h3>
              <p className="text-gray-700">Hybridization predicts electron geometry. Molecular geometry considers only atom positions, affected by lone pairs.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Forgetting lone pairs in steric number</h3>
              <p className="text-gray-700">BOTH bonding pairs AND lone pairs count toward steric number. NH₃: 3 bonds + 1 lone pair = SN 4 (sp³).</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Quick Tips</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Multiple bonds (double, triple) count as ONE bonding region.</li>
            <li>Lone pairs on central atom count toward steric number.</li>
            <li>Hybridization = electron geometry; molecular geometry considers lone pairs.</li>
          </ul>
        </section>

        {/* Related Calculators */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/atomic-structure-calculators/hybridization-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Hybridization Calculator</h3>
              <p className="text-sm text-gray-600">Determine sp, sp², sp³ orbitals</p>
            </a>
            <a href="/atomic-structure-calculators/lewis-structure-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Lewis Structure Calculator</h3>
              <p className="text-sm text-gray-600">Draw molecular structures</p>
            </a>
            <a href="/chemistry-formulas/vsepr-theory" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">VSEPR Theory</h3>
              <p className="text-sm text-gray-600">Molecular geometry prediction</p>
            </a>
            <a href="/atomic-structure-calculators" className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">All Atomic Structure Calculators</h3>
              <p className="text-sm opacity-90">Explore all molecular structure tools</p>
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
            "headline": "Hybridization",
            "description": "Hybridization on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/hybridization",
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
                "name": "Hybridization",
                "item": "https://chemsolved.com/chemistry-formulas/hybridization"
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
