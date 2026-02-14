import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Degree of Unsaturation',
  description: 'Calculate degree of unsaturation (DBE) to determine rings and double bonds in organic molecules. Use (2C+2+N-H-X)/2 formula for structural analysis.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/degree-of-unsaturation',
  },
  keywords: 'degree of unsaturation, index of hydrogen deficiency, rings, double bonds',
}

export default function DegreeOfUnsaturationPage() {
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
            <li className="text-gray-900">Degree of Unsaturation</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Degree of Unsaturation</h1>
          <p className="text-lg opacity-90">Count rings + double bonds from formula</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Understanding Degree of Unsaturation</h2>
          <p className="text-gray-700 mb-4">
            The degree of unsaturation (DU), also called the index of hydrogen deficiency (IHD) or double bond equivalents (DBE), indicates the number of rings and multiple bonds in an organic molecule. Each ring or π bond (double bond) counts as one degree of unsaturation, while each triple bond counts as two.
          </p>
          <p className="text-gray-700 mb-4">
            This calculation is essential in structure elucidation, particularly when combined with spectroscopic data (NMR, IR, MS). By knowing the molecular formula, chemists can immediately determine how many unsaturations exist, guiding interpretation of spectra and narrowing possible structures.
          </p>
          <p className="text-gray-700">
            The formula accounts for different element valencies: carbon and silicon contribute positively (valence 4), hydrogen and halogens contribute negatively (valence 1), nitrogen contributes positively (valence 3), while oxygen and sulfur are ignored (valence 2 doesn't affect hydrogen deficiency).
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Formula</h2>
          <div className="bg-fuchsia-50 border-l-4 border-fuchsia-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-fuchsia-700">DU = (2C + 2 + N - H - X) / 2</p>
          </div>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
            <li><strong>DU</strong> = degree of unsaturation</li>
            <li><strong>C</strong> = number of carbons</li>
            <li><strong>N</strong> = number of nitrogens</li>
            <li><strong>H</strong> = number of hydrogens</li>
            <li><strong>X</strong> = number of halogens (F, Cl, Br, I)</li>
            <li>O and S ignored (valence = 2)</li>
          </ul>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
            <p className="font-semibold text-blue-800 mb-2">Alternative Formula:</p>
            <p className="text-gray-700">For compounds with Si, P, or other elements: DU = (2C + 2 + N - H - X + P) / 2</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Detailed Example: C₆H₆ (Benzene)</h2>
          <p className="text-gray-700 mb-3"><strong>Given:</strong> benzene, C₆H₆.</p>
          <div className="space-y-2 text-gray-700 bg-gray-50 p-4 rounded">
            <p><strong>Step 1:</strong> Identify element counts: C=6, H=6, N=0, X=0</p>
            <p><strong>Step 2:</strong> Apply formula: DU = (2×6 + 2 + 0 - 6 - 0) / 2</p>
            <p><strong>Step 3:</strong> Calculate: DU = (12 + 2 - 6) / 2 = 8 / 2 = 4</p>
            <p><strong>Step 4:</strong> Interpret: Benzene has 3 double bonds + 1 ring = 4 degrees of unsaturation</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: DU = 4</p>
            <p className="text-sm text-gray-600 mt-2">This matches benzene's structure: resonance-stabilized ring with three π bonds.</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Interpreting DU Values</h2>
          <div className="space-y-3">
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-semibold text-gray-800 mb-2">DU = 0</p>
              <p className="text-gray-700">Saturated hydrocarbon with single bonds only (e.g., alkanes, cycloalkanes counting ring cancels unsaturation)</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-semibold text-gray-800 mb-2">DU = 1</p>
              <p className="text-gray-700">One double bond OR one ring (e.g., cyclohexane, ethene)</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-semibold text-gray-800 mb-2">DU = 2</p>
              <p className="text-gray-700">Two double bonds, one triple bond, two rings, or one ring + one double bond</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-semibold text-gray-800 mb-2">DU = 4</p>
              <p className="text-gray-700">Typically indicates benzene ring (3 double bonds + 1 ring)</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-semibold text-gray-800 mb-2">DU ≥ 5</p>
              <p className="text-gray-700">Multiple aromatic rings or extensive unsaturation</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Structure Elucidation Strategy</h2>
          <div className="space-y-3 text-gray-700">
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-gray-800 mb-2">Step 1: Calculate DU</h3>
              <p>Use molecular formula to determine total unsaturations.</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-gray-800 mb-2">Step 2: Check IR Spectrum</h3>
              <p>Look for C=O (1700 cm⁻¹), C=C (1650 cm⁻¹), C≡C (2100-2260 cm⁻¹), or aromatic C=C (1450-1600 cm⁻¹).</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-gray-800 mb-2">Step 3: Analyze ¹H NMR</h3>
              <p>Aromatic signals (6.5-8 ppm) indicate benzene ring (DU=4). Vinyl signals (4.5-6 ppm) suggest C=C.</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-gray-800 mb-2">Step 4: Use ¹³C NMR</h3>
              <p>Count sp² carbons (100-220 ppm) vs sp³ carbons (0-100 ppm) to confirm unsaturations.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Examples</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-gray-700">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left">Compound</th>
                  <th className="px-4 py-2 text-left">Formula</th>
                  <th className="px-4 py-2 text-left">DU</th>
                  <th className="px-4 py-2 text-left">Structure Features</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="px-4 py-2">Ethene</td>
                  <td className="px-4 py-2">C₂H₄</td>
                  <td className="px-4 py-2">1</td>
                  <td className="px-4 py-2">One C=C double bond</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Acetylene</td>
                  <td className="px-4 py-2">C₂H₂</td>
                  <td className="px-4 py-2">2</td>
                  <td className="px-4 py-2">One C≡C triple bond</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Cyclohexane</td>
                  <td className="px-4 py-2">C₆H₁₂</td>
                  <td className="px-4 py-2">1</td>
                  <td className="px-4 py-2">One ring</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Toluene</td>
                  <td className="px-4 py-2">C₇H₈</td>
                  <td className="px-4 py-2">4</td>
                  <td className="px-4 py-2">Benzene ring</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Naphthalene</td>
                  <td className="px-4 py-2">C₁₀H₈</td>
                  <td className="px-4 py-2">7</td>
                  <td className="px-4 py-2">Two fused benzene rings</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Important Notes</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Each ring or double bond counts as 1 DU; each triple bond counts as 2 DU.</li>
            <li>Useful in structure elucidation from molecular formula + NMR/IR data.</li>
            <li>Always round to nearest integer; non-integer suggests formula error.</li>
            <li>Radicals and carbenes change the calculation—consult advanced references for these cases.</li>
            <li>Halogens are treated like hydrogens in the formula (same valence contribution).</li>
            <li>DU cannot be negative; if calculation yields negative value, recheck molecular formula.</li>
          </ul>
        </section>

        {/* Related Calculators */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/organic-chemistry-calculators/degree-unsaturation-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Degree of Unsaturation Calculator</h3>
              <p className="text-sm text-gray-600">Calculate rings + double bonds instantly</p>
            </a>
            <a href="/organic-chemistry-calculators/nmr-chemical-shift-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">NMR Chemical Shift Calculator</h3>
              <p className="text-sm text-gray-600">Structure elucidation tool</p>
            </a>
            <a href="/chemistry-formulas/nmr-chemical-shift-formula" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">NMR Chemical Shift Formula</h3>
              <p className="text-sm text-gray-600">¹H & ¹³C NMR spectroscopy</p>
            </a>
            <a href="/organic-chemistry-calculators" className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">All Organic Chemistry Calculators</h3>
              <p className="text-sm opacity-90">Explore all organic chemistry tools</p>
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
            "headline": "Degree Of Unsaturation",
            "description": "Degree Of Unsaturation on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/degree-of-unsaturation",
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
                "name": "Degree Of Unsaturation",
                "item": "https://chemsolved.com/chemistry-formulas/degree-of-unsaturation"
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
