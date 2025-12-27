import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Molecular Weight Formula | ChemCalc',
  description: 'Compute molecular weight (molar mass) from atomic masses with step-by-step examples.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/molecular-weight-formula',
  },
  keywords: 'molecular weight formula, molar mass, atomic masses, chemistry calculator',
}

export default function MolecularWeightFormulaPage() {
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
            <li className="text-gray-900">Molecular Weight Formula</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Molecular Weight Formula</h1>
          <p className="text-lg opacity-90">Sum atomic masses to find molar mass (g/mol)</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Formula</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-blue-700">MW = sum(atomic mass of each element × atom count)</p>
          </div>
          <p className="text-gray-700">Atomic masses come from the periodic table and are averaged by natural abundance.</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Step-by-Step</h2>
          <ol className="list-decimal ml-6 space-y-2 text-gray-700">
            <li>Write the molecular formula and count atoms of each element.</li>
            <li>Look up atomic masses (g/mol) for each element.</li>
            <li>Multiply atomic mass by the number of atoms for that element.</li>
            <li>Sum all contributions to get molecular weight (g/mol).</li>
          </ol>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example: Glucose C6H12O6</h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div className="bg-gray-50 p-4 rounded">
              <p><strong>C:</strong> 12.01 g/mol × 6 = 72.06</p>
              <p><strong>H:</strong> 1.008 g/mol × 12 = 12.10</p>
              <p><strong>O:</strong> 16.00 g/mol × 6 = 96.00</p>
            </div>
            <div className="bg-green-50 p-4 rounded border border-green-200">
              <p className="font-semibold">Total MW = 72.06 + 12.10 + 96.00 = 180.16 g/mol</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-3">Report to appropriate significant figures based on atomic masses used.</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Pitfalls</h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Forgetting atom counts</h3>
              <p>Multiply atomic mass by the number of atoms for each element.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Rounding too early</h3>
              <p>Keep a few extra decimals, round at the end.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Mixing formula units</h3>
              <p>Ensure the chemical formula is correct before summing masses.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Isotopic masses</h3>
              <p>Standard tables use average atomic masses; isotopic enrichment changes values.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">FAQ</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold">Is molecular weight the same as molar mass?</h3>
              <p>Yes, both are in g/mol and represent mass per mole of entities.</p>
            </div>
            <div>
              <h3 className="font-semibold">How is formula weight different?</h3>
              <p>Formula weight is used for ionic compounds and computed the same way using formula units.</p>
            </div>
            <div>
              <h3 className="font-semibold">What about hydrates?</h3>
              <p>Include water of hydration atoms in the formula when summing masses.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/stoichiometry-calculators/molecular-weight-calculator" className="block p-4 bg-gradient-to-r from-cyan-50 to-blue-100 rounded-lg hover:shadow-lg transition-all border border-cyan-200">
              <h3 className="font-semibold text-cyan-700 mb-2">Molecular Weight Calculator</h3>
              <p className="text-sm text-gray-600">Calculate molar mass</p>
            </a>
            <a href="/stoichiometry-calculators/empirical-formula-calculator" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <h3 className="font-semibold text-blue-600 mb-2">Empirical Formula</h3>
              <p className="text-sm text-gray-600">Find simplest formula</p>
            </a>
            <a href="/stoichiometry-calculators" className="block p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-all">
              <h3 className="font-semibold mb-2">Stoichiometry Calculators</h3>
              <p className="text-sm text-white/90">All stoichiometry tools</p>
            </a>
            <a href="/mole-vs-molar-mass" className="block p-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all">
              <h3 className="font-semibold mb-2">Mole vs Molar Mass</h3>
              <p className="text-sm text-white/90">Understand the difference</p>
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
            "headline": "Molecular Weight Formula",
            "description": "Molecular Weight Formula on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/molecular-weight-formula",
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
                "name": "Molecular Weight Formula",
                "item": "https://chemsolved.com/chemistry-formulas/molecular-weight-formula"
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
