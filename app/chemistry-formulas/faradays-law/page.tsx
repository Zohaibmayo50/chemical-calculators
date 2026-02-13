import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: "Faraday's Law of Electrolysis",
  description: 'Compute mass deposited using m = (Q M) / (n F).',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/faradays-law',
  },
  keywords: 'Faraday law, electrolysis, mass deposited, charge, molar mass, Faraday constant',
}

export default function FaradaysLawPage() {
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
            <li className="text-gray-900">Faraday's Law of Electrolysis</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-sky-600 to-blue-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Faraday's Law of Electrolysis</h1>
          <p className="text-lg opacity-90">Relates electric charge to mass deposited</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Understanding Faraday's Law of Electrolysis</h2>
          <p className="text-gray-700 mb-4">
            Faraday's law of electrolysis, formulated by Michael Faraday in 1834, establishes a quantitative relationship between the amount of electric charge passed through an electrolytic cell and the mass of substance deposited or dissolved at the electrodes. This fundamental principle revolutionized electrochemistry and laid the groundwork for modern electroplating, metal refining, battery technology, and quantitative electroanalytical chemistry. The law states that the mass of a substance altered at an electrode during electrolysis is directly proportional to the quantity of electricity (charge) passed through the circuit.
          </p>
          <p className="text-gray-700 mb-4">
            The mathematical expression m = (Q × M) / (n × F) elegantly connects electrical and chemical quantities. The Faraday constant (F = 96,485 C/mol) represents the charge carried by one mole of electrons and serves as a bridge between the macroscopic world of grams and amperes and the microscopic world of atoms and electrons. Understanding this relationship allows chemists to precisely control deposition rates in electroplating, calculate current efficiency in industrial electrolysis, and determine the number of electrons transferred in redox reactions through coulometric analysis.
          </p>
          <p className="text-gray-700">
            In practice, Faraday's law has countless applications: from producing pure metals like copper and aluminum through electrorefining, to electroplating jewelry and automotive parts, to manufacturing chemicals like chlorine and sodium hydroxide via the chlor-alkali process. The law also underpins the operation of batteries and fuel cells, where controlled electron transfer generates electrical energy from chemical reactions. Modern applications include nanomaterial synthesis, corrosion protection, and electroanalytical techniques for determining metal concentrations in environmental and biological samples.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Formula</h2>
          <div className="bg-sky-50 border-l-4 border-sky-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-sky-700">m = (Q × M) / (n × F)</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div className="bg-sky-50 p-3 rounded">
              <p><strong>m</strong> = mass deposited (g)</p>
            </div>
            <div className="bg-sky-50 p-3 rounded">
              <p><strong>Q</strong> = total charge (C) = I × t</p>
            </div>
            <div className="bg-sky-50 p-3 rounded">
              <p><strong>M</strong> = molar mass (g/mol)</p>
            </div>
            <div className="bg-sky-50 p-3 rounded">
              <p><strong>n</strong> = electrons per ion</p>
            </div>
            <div className="bg-sky-50 p-3 rounded">
              <p><strong>F</strong> = 96,485 C/mol (Faraday constant)</p>
            </div>
            <div className="bg-sky-50 p-3 rounded">
              <p><strong>I</strong> = current (A), <strong>t</strong> = time (s)</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Detailed Step-by-Step Example</h2>
          <p className="text-gray-700 mb-3"><strong>Problem:</strong> A current of 2.00 A is passed through aqueous CuSO₄ for 30.0 minutes. Calculate the mass of copper deposited at the cathode.</p>
          
          <div className="bg-gray-50 p-4 rounded mb-3">
            <p className="font-semibold text-gray-800 mb-2">Step 1: Identify known values</p>
            <p className="text-gray-700">Current I = 2.00 A</p>
            <p className="text-gray-700">Time t = 30.0 min × 60 s/min = 1800 s</p>
            <p className="text-gray-700">Ion: Cu²⁺, so n = 2 electrons per ion</p>
            <p className="text-gray-700">Molar mass of Cu: M = 63.546 g/mol</p>
            <p className="text-gray-700">Faraday constant: F = 96,485 C/mol</p>
          </div>

          <div className="bg-gray-50 p-4 rounded mb-3">
            <p className="font-semibold text-gray-800 mb-2">Step 2: Calculate total charge (Q)</p>
            <p className="text-gray-700">Q = I × t = 2.00 A × 1800 s = 3600 C</p>
          </div>

          <div className="bg-gray-50 p-4 rounded mb-3">
            <p className="font-semibold text-gray-800 mb-2">Step 3: Apply Faraday's law</p>
            <p className="text-gray-700">m = (Q × M) / (n × F)</p>
            <p className="text-gray-700">m = (3600 C × 63.546 g/mol) / (2 × 96,485 C/mol)</p>
            <p className="text-gray-700">m = 228,765.6 / 192,970 g/mol</p>
            <p className="text-gray-700">m ≈ 1.186 g</p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded p-4">
            <p className="font-semibold">Answer: Approximately 1.19 g of copper is deposited at the cathode.</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Valence States (n values)</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-sky-50 p-3 rounded">
              <p className="font-semibold text-sky-900">n = 1</p>
              <p className="text-gray-700 text-sm">Ag⁺, Na⁺, K⁺, H⁺</p>
            </div>
            <div className="bg-sky-50 p-3 rounded">
              <p className="font-semibold text-sky-900">n = 2</p>
              <p className="text-gray-700 text-sm">Cu²⁺, Zn²⁺, Pb²⁺, Ni²⁺</p>
            </div>
            <div className="bg-sky-50 p-3 rounded">
              <p className="font-semibold text-sky-900">n = 3</p>
              <p className="text-gray-700 text-sm">Al³⁺, Fe³⁺, Cr³⁺, Au³⁺</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Key Applications</h2>
          <div className="space-y-3">
            <div className="bg-blue-50 p-4 rounded">
              <h3 className="font-semibold text-blue-900 mb-2">Electroplating</h3>
              <p className="text-gray-700">Control thickness of metal coatings by calculating mass deposited from current and time. Used in jewelry, automotive parts, and corrosion protection.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded">
              <h3 className="font-semibold text-blue-900 mb-2">Metal Refining</h3>
              <p className="text-gray-700">Purify metals like copper through electrorefining. Impure copper anodes dissolve, and pure copper deposits at cathodes with precise mass control.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded">
              <h3 className="font-semibold text-blue-900 mb-2">Quantitative Analysis</h3>
              <p className="text-gray-700">Coulometry uses Faraday's law to determine metal concentrations by measuring charge required for complete electrodeposition.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Notes &amp; Pitfalls</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Use correct valence n; for Ag⁺, n = 1; for Al³⁺, n = 3.</li>
            <li>Ensure molar mass M corresponds to the deposited species.</li>
            <li>Account for efficiency if the process is not 100% current efficient.</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/electrochemistry-calculators/electrolysis-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Electrolysis Calculator</h3>
              <p className="text-sm text-gray-600">Calculate mass deposited</p>
            </a>
            <a href="/electrochemistry-calculators/cell-potential-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Cell Potential Calculator</h3>
              <p className="text-sm text-gray-600">Calculate cell potentials</p>
            </a>
            <a href="/electrochemistry-calculators" className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">All Electrochemistry Calculators</h3>
              <p className="text-sm opacity-90">Explore all electrochemistry tools</p>
            </a>
            <a href="/chemistry-formulas/electrolysis-formula" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Electrolysis Formula</h3>
              <p className="text-sm text-gray-600">Electrolysis calculations</p>
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
            "headline": "Faradays Law",
            "description": "Faradays Law on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/faradays-law",
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
                "name": "Faradays Law",
                "item": "https://chemsolved.com/chemistry-formulas/faradays-law"
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
