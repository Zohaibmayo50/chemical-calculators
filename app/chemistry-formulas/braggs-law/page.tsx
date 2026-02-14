import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: "Bragg's Law: X-ray Diffraction & Crystal Structure",
  description: 'Master X-ray diffraction using Bragg\'s Law (nÎ» = 2d sinÎ¸). Calculate lattice spacing, determine crystal structures, and understand constructive interference in crystallography.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/braggs-law',
  },
  keywords: 'Bragg law, X-ray diffraction, crystal structure, lattice spacing',
}

export default function BraggsLawPage() {
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
            <li className="text-gray-900">Bragg's Law</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Bragg's Law</h1>
          <p className="text-lg opacity-90">X-ray diffraction from crystal planes</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Formula</h2>
          <div className="bg-teal-50 border-l-4 border-teal-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-teal-700">n Î» = 2 d sin Î¸</p>
          </div>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
            <li><strong>n</strong> = order of diffraction (1, 2, 3...)</li>
            <li><strong>Î»</strong> = X-ray wavelength (m)</li>
            <li><strong>d</strong> = spacing between crystal planes (m)</li>
            <li><strong>Î¸</strong> = angle of incidence</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Understanding Bragg's Law</h2>
          <p className="text-gray-700 mb-4">
            Bragg's Law, formulated by William Henry Bragg and William Lawrence Bragg in 1913, describes the condition for constructive interference when X-rays are scattered by a crystalline material. When X-rays strike crystal planes at specific angles, they reflect and interfere constructively only when the path difference between rays equals an integer multiple of the wavelength.
          </p>
          <p className="text-gray-700 mb-4">
            The law is fundamental to X-ray crystallography, allowing scientists to determine atomic arrangements in crystals. Each set of parallel planes in a crystal has a characteristic spacing (d), and X-rays diffracted from adjacent planes travel different distances. Constructive interference produces detectable diffraction peaks only when the Bragg condition is satisfied.
          </p>
          <p className="text-gray-700">
            The order of diffraction (n) represents how many wavelengths fit into the path difference. First-order diffraction (n=1) is typically strongest, while higher-order reflections (n=2, 3...) become progressively weaker.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Key Concepts</h2>
          <div className="space-y-4 text-gray-700">
            <div className="border-l-4 border-teal-500 pl-4">
              <h3 className="font-semibold text-gray-800 mb-2">Constructive Interference</h3>
              <p>When X-rays from adjacent crystal planes arrive in phase (path difference = nÎ»), their amplitudes add to create strong reflection peaks.</p>
            </div>
            <div className="border-l-4 border-teal-500 pl-4">
              <h3 className="font-semibold text-gray-800 mb-2">Bragg Angle (Î¸)</h3>
              <p>The angle between incident X-ray beam and crystal planes, not the incident surface. Measured from the plane itself rather than the surface normal.</p>
            </div>
            <div className="border-l-4 border-teal-500 pl-4">
              <h3 className="font-semibold text-gray-800 mb-2">Lattice Spacing (d)</h3>
              <p>Distance between parallel crystal planes. Different crystal families (hkl planes) have different d-spacing values, creating unique diffraction patterns.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Worked Example</h2>
          <p className="text-gray-700 mb-3"><strong>Given:</strong> Î» = 1.54 Ã… (Cu KÎ±), Î¸ = 15Â°, n = 1.</p>
          <div className="space-y-2 text-gray-700">
            <p>d = n Î» / (2 sin Î¸)</p>
            <p>d = (1 Ã— 1.54 Ã…) / (2 Ã— sin 15Â°)</p>
            <p>d â‰ˆ 1.54 / (2 Ã— 0.2588) â‰ˆ 2.98 Ã…</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: d â‰ˆ 2.98 Ã…</p>
            <p className="text-sm text-gray-600 mt-2">This spacing is typical for metal crystalline structures and ceramics.</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Applications in Science</h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Materials Science</h3>
              <p className="text-sm">Determine crystal structures, phase composition, grain size, and crystallinity in metals, ceramics, and semiconductors.</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">Structural Biology</h3>
              <p className="text-sm">Solve protein and DNA structures at atomic resolution using synchrotron X-ray sources and cryo-crystallography.</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-900 mb-2">Geology & Mineralogy</h3>
              <p className="text-sm">Identify minerals and determine their crystallographic orientation in rocks and geological samples.</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-semibold text-orange-900 mb-2">Pharmaceutical Industry</h3>
              <p className="text-sm">Analyze drug polymorphs, crystallinity of active ingredients, and quality control of pharmaceutical compounds.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common X-ray Sources</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-gray-700">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left">Source</th>
                  <th className="px-4 py-2 text-left">Wavelength (Ã…)</th>
                  <th className="px-4 py-2 text-left">Application</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="px-4 py-2">Cu KÎ±</td>
                  <td className="px-4 py-2">1.5418</td>
                  <td className="px-4 py-2">Most common for routine analysis</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Mo KÎ±</td>
                  <td className="px-4 py-2">0.7107</td>
                  <td className="px-4 py-2">Protein crystallography</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Co KÎ±</td>
                  <td className="px-4 py-2">1.7902</td>
                  <td className="px-4 py-2">Iron-containing samples</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Synchrotron</td>
                  <td className="px-4 py-2">Variable</td>
                  <td className="px-4 py-2">High-resolution studies</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Practical Tips</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Always convert angles to radians when using calculators without degree mode.</li>
            <li>For powder diffraction, multiple grain orientations produce cone-shaped diffraction patterns captured as rings on detectors.</li>
            <li>Single crystals require careful alignment to obtain diffraction from specific planes.</li>
            <li>Sample preparation is criticalâ€”powder samples should be finely ground for accurate d-spacing measurements.</li>
            <li>Temperature affects lattice spacing; most standard measurements are at room temperature (25Â°C).</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/chemistry-formulas/crystal-field-theory" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Crystal Field Splitting Calculator</h3>
              <p className="text-sm text-gray-600">Calculate d-orbital energy splitting</p>
            </a>
            <a href="/chemistry-formulas/coordination-chemistry-formula" className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">All Coordination Chemistry Calculators</h3>
              <p className="text-sm opacity-90">Explore all coordination chemistry tools</p>
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
            "headline": "Braggs Law",
            "description": "Braggs Law on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/braggs-law",
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
                "name": "Braggs Law",
                "item": "https://chemsolved.com/chemistry-formulas/braggs-law"
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
