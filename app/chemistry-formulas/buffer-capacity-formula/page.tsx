import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Buffer Capacity Formula',
  description: 'Calculate buffer capacity (beta) with step-by-step guidance and practical examples.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/buffer-capacity-formula',
  },
  keywords: 'buffer capacity, beta formula, buffer strength, acid base chemistry',
}

export default function BufferCapacityFormulaPage() {
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
            <li className="text-gray-900">Buffer Capacity</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Buffer Capacity Formula</h1>
          <p className="text-lg opacity-90">Quantify how much acid or base a buffer can absorb per pH change</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Definition</h2>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-green-700">beta = delta n / delta pH</p>
            <p className="text-gray-700">delta n = moles of strong acid or base added</p>
          </div>
          <p className="text-gray-700">Units are typically mol per pH unit per liter of buffer (mol/L·pH).</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">How to Determine beta</h2>
          <ol className="list-decimal ml-6 space-y-2 text-gray-700">
            <li>Measure initial pH of the buffer (pH1).</li>
            <li>Add a known small amount of strong acid or base (delta n, in moles).</li>
            <li>Measure new pH (pH2).</li>
            <li>Compute delta pH = |pH2 - pH1|.</li>
            <li>beta = delta n / delta pH.</li>
          </ol>
          <p className="text-sm text-gray-600 mt-3">For theoretical estimates near pKa: beta ≈ 2.303 * C_total * (Ka*[H+] / (Ka + [H+])^2)</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example</h2>
          <p className="text-gray-700 mb-3"><strong>Problem:</strong> A 0.20 L buffer shows pH drop from 7.40 to 7.20 after adding 0.0010 mol HCl. Find beta (per liter).</p>
          <div className="space-y-3 text-gray-700">
            <p>1) delta pH = 0.20</p>
            <p>2) beta (for the sample) = 0.0010 mol / 0.20 = 0.0050 mol per pH unit</p>
            <p>3) Per liter: divide by volume 0.20 L → 0.025 mol/(L·pH)</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: beta ≈ 0.025 mol per liter per pH unit</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Pitfalls</h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Too large additions</h3>
              <p>Adding too much acid/base invalidates linear approximation; use small delta pH.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Not normalizing to volume</h3>
              <p>Report capacity per liter so buffers can be compared.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Ignoring temperature</h3>
              <p>Buffer pKa and capacity shift with temperature; note conditions.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Far from pKa</h3>
              <p>Capacity is maximum near pH ≈ pKa; drops when pH is far from pKa.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">FAQ</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold">Does buffer capacity differ for acid vs base additions?</h3>
              <p>Yes, but near pKa the capacity is similar; away from pKa it can be asymmetric.</p>
            </div>
            <div>
              <h3 className="font-semibold">How to increase capacity?</h3>
              <p>Increase buffer concentration and keep pH close to pKa.</p>
            </div>
            <div>
              <h3 className="font-semibold">What about polyprotic buffers?</h3>
              <p>Consider the relevant pKa near your working pH; capacity will vary between pKa values.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/acid-base-calculators/buffer-capacity-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Buffer Capacity Calculator</h3>
              <p className="text-sm text-gray-600">Calculate buffer capacity</p>
            </a>
            <a href="/acid-base-calculators/henderson-hasselbalch-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Henderson-Hasselbalch Calculator</h3>
              <p className="text-sm text-gray-600">Calculate buffer pH</p>
            </a>
            <a href="/acid-base-calculators" className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">All Acid-Base Calculators</h3>
              <p className="text-sm opacity-90">Explore all acid-base tools</p>
            </a>
            <a href="/chemistry-formulas/buffer-solution-formula" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Buffer Solution Formula</h3>
              <p className="text-sm text-gray-600">Henderson-Hasselbalch equation</p>
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
            "headline": "Buffer Capacity Formula",
            "description": "Buffer Capacity Formula on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/buffer-capacity-formula",
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
                "name": "Buffer Capacity Formula",
                "item": "https://chemsolved.com/chemistry-formulas/buffer-capacity-formula"
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
