import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Formal Charge Formula',
  description: 'Calculate formal charge: FC = V - N - B/2 for Lewis structures.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/formal-charge-formula',
  },
  keywords: 'formal charge, Lewis structure, valence electrons, bonding',
}

export default function FormalChargeFormulaPage() {
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
            <li className="text-gray-900">Formal Charge Formula</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Formal Charge Formula</h1>
          <p className="text-lg opacity-90">Determine charge distribution in molecules</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Understanding Formal Charge</h2>
          <p className="text-gray-700 mb-4">
            Formal charge is a bookkeeping method used to track electron distribution in Lewis structures. It helps determine which resonance structure is most stable and predicts reactive sites in molecules. Unlike oxidation states which assume complete electron transfer, formal charge assumes equal sharing of bonding electrons.
          </p>
          <p className="text-gray-700 mb-4">
            The concept of formal charge was developed to evaluate different Lewis structures for the same molecule. When multiple valid structures exist (resonance), the one with formal charges closest to zero, and negative charges on more electronegative atoms, is typically most stable and best represents the actual electron distribution.
          </p>
          <p className="text-gray-700">
            Formal charge calculations guide chemists in drawing correct Lewis structures, predicting molecular geometry with VSEPR theory, understanding reactivity patterns, and explaining why certain bonding arrangements are preferred over others in organic and inorganic molecules.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Formula</h2>
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-indigo-700">FC = V - N - B/2</p>
          </div>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
            <li><strong>FC</strong> = formal charge on atom</li>
            <li><strong>V</strong> = valence electrons in free atom (group number)</li>
            <li><strong>N</strong> = non-bonding electrons (lone pair electrons)</li>
            <li><strong>B</strong> = bonding electrons (shared electrons in bonds)</li>
          </ul>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
            <p className="font-semibold text-blue-800 mb-2">Alternative Form:</p>
            <p className="text-gray-700">FC = (# valence e⁻) - (# lone pair e⁻) - (# bonds) or</p>
            <p className="text-gray-700">FC = (# valence e⁻) - (# non-bonding e⁻) - (½ × # bonding e⁻)</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Detailed Example: CO (Carbon Monoxide)</h2>
          <p className="text-gray-700 mb-3"><strong>Lewis structure:</strong> :C≡O:</p>
          <div className="space-y-3 text-gray-700 bg-gray-50 p-4 rounded">
            <p><strong>Step 1: Count valence electrons</strong></p>
            <p>Carbon (Group 14): V = 4</p>
            <p>Oxygen (Group 16): V = 6</p>
            
            <p className="mt-3"><strong>Step 2: Analyze Carbon atom</strong></p>
            <p>N = 2 electrons (one lone pair on left)</p>
            <p>B = 6 electrons (triple bond = 3 bonds × 2 electrons)</p>
            <p>FC(C) = 4 - 2 - 6/2 = 4 - 2 - 3 = -1</p>
            
            <p className="mt-3"><strong>Step 3: Analyze Oxygen atom</strong></p>
            <p>N = 2 electrons (one lone pair on right)</p>
            <p>B = 6 electrons (triple bond)</p>
            <p>FC(O) = 6 - 2 - 6/2 = 6 - 2 - 3 = +1</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: FC(C) = -1, FC(O) = +1</p>
            <p className="text-sm text-gray-600 mt-2">Total formal charge: -1 + 1 = 0 (matches neutral molecule)</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Rules for Best Lewis Structures</h2>
          <div className="space-y-3">
            <div className="bg-purple-50 p-4 rounded">
              <h3 className="font-semibold text-purple-900 mb-2">1. Minimize Formal Charges</h3>
              <p className="text-gray-700">Structures with formal charges closest to zero are most stable. Ideal structure has all atoms with FC = 0.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded">
              <h3 className="font-semibold text-blue-900 mb-2">2. Negative Charge on Electronegative Atoms</h3>
              <p className="text-gray-700">When formal charges must exist, place negative charges on more electronegative atoms (O, N, F) and positive charges on less electronegative atoms.</p>
            </div>
            <div className="bg-green-50 p-4 rounded">
              <h3 className="font-semibold text-green-900 mb-2">3. Minimize Charge Separation</h3>
              <p className="text-gray-700">Structures with less charge separation (fewer and smaller formal charges) are more stable than those with large or many formal charges.</p>
            </div>
            <div className="bg-orange-50 p-4 rounded">
              <h3 className="font-semibold text-orange-900 mb-2">4. Adjacent Same Charges Unfavorable</h3>
              <p className="text-gray-700">Avoid structures with like charges on adjacent atoms due to electrostatic repulsion.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Examples</h2>
          <div className="space-y-3 text-gray-700">
            <div className="border-l-4 border-indigo-500 pl-4">
              <h3 className="font-semibold text-gray-800">H₂O (Water)</h3>
              <p>O: FC = 6 - 4 - 4/2 = 0; H: FC = 1 - 0 - 2/2 = 0. All atoms have zero formal charge.</p>
            </div>
            <div className="border-l-4 border-indigo-500 pl-4">
              <h3 className="font-semibold text-gray-800">NH₄⁺ (Ammonium)</h3>
              <p>N: FC = 5 - 0 - 8/2 = +1; H: FC = 0 each. Total = +1 (matches ion charge).</p>
            </div>
            <div className="border-l-4 border-indigo-500 pl-4">
              <h3 className="font-semibold text-gray-800">NO₃⁻ (Nitrate)</h3>
              <p>In best resonance structure: N: FC = +1; two O: FC = 0; one O: FC = -1. Total = -1.</p>
            </div>
            <div className="border-l-4 border-indigo-500 pl-4">
              <h3 className="font-semibold text-gray-800">SO₄²⁻ (Sulfate)</h3>
              <p>S can expand octet. Best structure has S: FC ≈ 0 by forming S=O double bonds.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Important Tips &amp; Common Mistakes</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li><strong>Sum Rule:</strong> Sum of all formal charges must equal overall molecular or ionic charge.</li>
            <li><strong>Valence Electrons:</strong> Use periodic table group number for main group elements (C=4, N=5, O=6, F=7).</li>
            <li><strong>Counting Bonds:</strong> Count each bond stick as 2 electrons. Double bond = 4 electrons, triple = 6 electrons.</li>
            <li><strong>Lone Pairs:</strong> Count all unshared electrons. Each lone pair = 2 electrons.</li>
            <li><strong>Best Structure:</strong> Lowest formal charges doesn't always mean all zeros, but closest to zero with proper electroneg ativity placement.</li>
            <li><strong>Expanded Octets:</strong> Period 3+ elements (P, S, Cl) can have more than 8 electrons, affecting formal charge calculations.</li>
            <li><strong>Not Oxidation States:</strong> Formal charge ≠ oxidation number. Different electron allocation methods.</li>
          </ul>
        </section>

        {/* Related Calculators */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/atomic-structure-calculators/formal-charge-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Formal Charge Calculator</h3>
              <p className="text-sm text-gray-600">Calculate FC = V - N - B/2</p>
            </a>
            <a href="/atomic-structure-calculators/lewis-structure-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Lewis Structure Calculator</h3>
              <p className="text-sm text-gray-600">Draw Lewis structures</p>
            </a>
            <a href="/chemistry-formulas/lewis-structure" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Lewis Structure Formula</h3>
              <p className="text-sm text-gray-600">Electron dot structures</p>
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
            "headline": "Formal Charge Formula",
            "description": "Formal Charge Formula on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/formal-charge-formula",
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
                "name": "Formal Charge Formula",
                "item": "https://chemsolved.com/chemistry-formulas/formal-charge-formula"
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
