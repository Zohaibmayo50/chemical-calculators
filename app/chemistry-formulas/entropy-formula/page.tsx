import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Entropy Formula: Calculate Reaction Entropy Changes',
  description: 'Calculate reaction entropy changes using standard molar entropies with clear steps and examples.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/entropy-formula',
  },
  keywords: 'entropy formula, delta S, reaction entropy, standard molar entropy, thermodynamics',
}

export default function EntropyFormulaPage() {
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
            <li className="text-gray-900">Entropy Formula</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Entropy Formula</h1>
          <p className="text-lg opacity-90">Use standard molar entropies to find DeltaS of a reaction</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Reaction Entropy</h2>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-purple-700">DeltaS_rxn = sum(n * S°, products) - sum(n * S°, reactants)</p>
          </div>
          <p className="text-gray-700">S° values are standard molar entropies (J/mol·K). Multiply by stoichiometric coefficients n.</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Steps</h2>
          <ol className="list-decimal ml-6 space-y-2 text-gray-700">
            <li>Balance the equation.</li>
            <li>Gather S° values for all species (correct phase).</li>
            <li>Multiply S° by stoichiometric coefficients for products and reactants.</li>
            <li>Products minus reactants gives DeltaS_rxn (J/mol·K).</li>
          </ol>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example: N2 + 3 H2 → 2 NH3(g)</h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div className="bg-gray-50 p-4 rounded">
              <p>S° (J/mol·K): N2 = 191.5, H2 = 130.6, NH3 = 192.5</p>
              <p className="mt-2">Products sum = 2 × 192.5 = 385.0</p>
              <p>Reactants sum = 1 × 191.5 + 3 × 130.6 = 583.3</p>
            </div>
            <div className="bg-green-50 p-4 rounded border border-green-200">
              <p className="font-semibold">DeltaS_rxn = 385.0 - 583.3 = -198.3 J/mol·K</p>
              <p>Entropy decreases (gas moles decrease).</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-3">Negative DeltaS_rxn often corresponds to fewer gas molecules in products.</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Mistakes</h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Phase mix-ups</h3>
              <p>Use S° for the correct phase (g, l, s, aq).</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Unit confusion</h3>
              <p>Keep J/mol·K; convert if tables use different units.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Forgetting coefficients</h3>
              <p>Multiply S° by stoichiometric coefficients before summing.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Sign errors</h3>
              <p>Always do products minus reactants.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">FAQ</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold">Why are elemental S° not zero?</h3>
              <p>Unlike enthalpy, standard molar entropy of elements is nonzero due to disorder at 298 K.</p>
            </div>
            <div>
              <h3 className="font-semibold">Can entropy be negative?</h3>
              <p>Absolute entropy values are positive, but DeltaS for a reaction can be negative.</p>
            </div>
            <div>
              <h3 className="font-semibold">How does temperature affect S°?</h3>
              <p>Tables are usually at 298 K; for other temperatures, use heat capacity data or approximations.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/thermodynamics-calculators/entropy-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Entropy Calculator</h3>
              <p className="text-sm text-gray-600">Calculate reaction entropy</p>
            </a>
            <a href="/thermodynamics-calculators/gibbs-free-energy-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Gibbs Free Energy Calculator</h3>
              <p className="text-sm text-gray-600">Calculate ΔG from ΔH and ΔS</p>
            </a>
            <a href="/thermodynamics-calculators" className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">All Thermodynamics Calculators</h3>
              <p className="text-sm opacity-90">Explore all thermodynamics tools</p>
            </a>
            <a href="/chemistry-formulas/enthalpy-formula" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Enthalpy Formula</h3>
              <p className="text-sm text-gray-600">Calculate ΔH for reactions</p>
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
            "headline": "Entropy Formula",
            "description": "Entropy Formula on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/entropy-formula",
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
                "name": "Entropy Formula",
                "item": "https://chemsolved.com/chemistry-formulas/entropy-formula"
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
