import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Bond Enthalpy Formula',
  description: 'Calculate reaction enthalpy from bond energies: ΔH = Σ(bonds broken) - Σ(bonds formed).',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/bond-enthalpy-formula',
  },
  keywords: 'bond enthalpy, bond energy, reaction enthalpy, bond dissociation',
}

export default function BondEnthalpyFormulaPage() {
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
            <li className="text-gray-900">Bond Enthalpy Formula</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Bond Enthalpy Formula</h1>
          <p className="text-lg opacity-90">Estimate reaction enthalpy from bond energies</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Understanding Bond Enthalpy</h2>
          <p className="text-gray-700 mb-4">
            Bond enthalpy (also called bond energy or bond dissociation energy) is the energy required to break one mole of a particular type of bond in gaseous molecules under standard conditions, producing gaseous atoms or radicals. This fundamental thermochemical concept allows chemists to estimate reaction enthalpies (ΔH<sub>rxn</sub>) by considering the energy changes involved in breaking existing bonds in reactants and forming new bonds in products. The basic principle is elegant: breaking bonds requires energy input (endothermic, positive values) while forming bonds releases energy (exothermic, negative values).
          </p>
          <p className="text-gray-700 mb-4">
            Bond enthalpy values are typically reported as average values across many molecules because the exact energy required to break a specific bond depends on its molecular environment. For example, the C-H bond energy in methane (CH₄) differs slightly from that in ethane (C₂H₆) or benzene (C₆H₆) due to differences in neighboring atoms and molecular structure. Despite this limitation, average bond enthalpies provide remarkably useful estimates for predicting reaction energetics, especially when more precise thermodynamic data (like standard enthalpies of formation) are unavailable.
          </p>
          <p className="text-gray-700">
            The bond enthalpy approach is particularly valuable in organic chemistry where countless reaction pathways exist, making it impractical to measure ΔH<sub>rxn</sub> experimentally for every possible transformation. By calculating ΔH<sub>rxn</sub> = Σ(bonds broken) - Σ(bonds formed), chemists can quickly estimate whether a proposed reaction is thermodynamically favorable (exothermic, ΔH &lt; 0) or unfavorable (endothermic, ΔH &gt; 0). This method is also pedagogically powerful, reinforcing the concept that chemical reactions involve rearranging atoms by breaking old bonds and making new ones.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Formula</h2>
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-red-700">ΔH<sub>rxn</sub> = Σ(bonds broken) - Σ(bonds formed)</p>
          </div>
          <p className="text-gray-700">Breaking bonds requires energy (+); forming bonds releases energy (-).</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Bond Energies (kJ/mol)</h2>
          <div className="grid md:grid-cols-3 gap-4 text-gray-700">
            <div className="bg-gray-50 p-3 rounded">
              <p className="font-semibold">C-H: 413</p>
              <p className="font-semibold">C-C: 348</p>
              <p className="font-semibold">C=C: 614</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="font-semibold">O-H: 463</p>
              <p className="font-semibold">C=O: 799</p>
              <p className="font-semibold">O=O: 498</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="font-semibold">N-H: 391</p>
              <p className="font-semibold">N≡N: 945</p>
              <p className="font-semibold">H-H: 436</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example: CH₄ + 2O₂ → CO₂ + 2H₂O</h2>
          <div className="space-y-3 text-gray-700">
            <p><strong>Bonds broken:</strong> 4 C-H (4×413) + 2 O=O (2×498) = 1652 + 996 = 2648 kJ</p>
            <p><strong>Bonds formed:</strong> 2 C=O (2×799) + 4 O-H (4×463) = 1598 + 1852 = 3450 kJ</p>
            <p>ΔH<sub>rxn</sub> = 2648 - 3450 = -802 kJ/mol</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: ΔH ≈ -802 kJ/mol (exothermic)</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Key Concepts</h2>
          <div className="space-y-4">
            <div className="bg-red-50 p-4 rounded">
              <h3 className="font-semibold text-red-900 mb-2">Bond Order &amp; Bond Strength</h3>
              <p className="text-gray-700">Higher bond order = stronger bond = higher bond enthalpy. Single bonds (C-C: 348 kJ/mol) &lt; Double bonds (C=C: 614 kJ/mol) &lt; Triple bonds (C≡C: 839 kJ/mol).</p>
            </div>

            <div className="bg-red-50 p-4 rounded">
              <h3 className="font-semibold text-red-900 mb-2">Limitations of Average Values</h3>
              <p className="text-gray-700">Bond enthalpies are averages. For more accuracy, use standard enthalpies of formation (ΔH<sub>f</sub>°) when available. Typical errors from bond enthalpies: ±10-20 kJ/mol.</p>
            </div>

            <div className="bg-red-50 p-4 rounded">
              <h3 className="font-semibold text-red-900 mb-2">Predicting Exothermic vs Endothermic</h3>
              <p className="text-gray-700">If stronger bonds form than break, reaction is exothermic (ΔH &lt; 0). If weaker bonds form than break, reaction is endothermic (ΔH &gt; 0).</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Mistakes</h2>
          <div className="space-y-3">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Forgetting to count ALL bonds</h3>
              <p className="text-gray-700">In CH₄, there are FOUR C-H bonds to break. Count bonds carefully in structural formulas.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Sign errors</h3>
              <p className="text-gray-700">Bonds broken = positive contribution; bonds formed = negative contribution. Don't flip signs.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Treating diatomic molecules as single atoms</h3>
              <p className="text-gray-700">O₂ requires breaking one O=O bond (498 kJ/mol), not two O atoms.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Notes</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Bond energies are average values; actual values vary by molecular environment.</li>
            <li>More accurate than bond energies: use standard enthalpies of formation.</li>
            <li>Useful for estimating ΔH when thermodynamic data unavailable.</li>
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
            <a href="/chemistry-formulas/hess-law" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Hess's Law</h3>
              <p className="text-sm text-gray-600">Alternative enthalpy calculation</p>
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
            "headline": "Bond Enthalpy Formula",
            "description": "Bond Enthalpy Formula on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/bond-enthalpy-formula",
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
                "name": "Bond Enthalpy Formula",
                "item": "https://chemsolved.com/chemistry-formulas/bond-enthalpy-formula"
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
