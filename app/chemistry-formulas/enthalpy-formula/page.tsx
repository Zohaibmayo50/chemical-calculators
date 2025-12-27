import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Enthalpy Formula | ChemCalc',
  description: 'Calculate reaction enthalpy using heats of formation with step-by-step guidance and examples.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/enthalpy-formula',
  },
  keywords: 'enthalpy formula, reaction enthalpy, heats of formation, delta H, thermochemistry',
}

export default function EnthalpyFormulaPage() {
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
            <li className="text-gray-900">Enthalpy Formula</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Enthalpy Formula</h1>
          <p className="text-lg opacity-90">Use standard heats of formation to find reaction enthalpy</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Reaction Enthalpy</h2>
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-red-700">DeltaH_rxn = sum(n * DeltaH_f, products) - sum(n * DeltaH_f, reactants)</p>
          </div>
          <p className="text-gray-700">DeltaH_f values are standard molar enthalpies of formation (kJ/mol). Multiply by stoichiometric coefficients n.</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Steps</h2>
          <ol className="list-decimal ml-6 space-y-2 text-gray-700">
            <li>Balance the chemical equation.</li>
            <li>Look up DeltaH_f for each compound (kJ/mol).</li>
            <li>Multiply DeltaH_f by stoichiometric coefficients for products and reactants.</li>
            <li>Subtract reactant sum from product sum to get DeltaH_rxn.</li>
          </ol>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example: Combustion of CH4</h2>
          <p className="text-gray-700 mb-3">Reaction: CH4 + 2 O2 → CO2 + 2 H2O (l)</p>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div className="bg-gray-50 p-4 rounded">
              <p>DeltaH_f (kJ/mol): CH4 = -74.8, O2 = 0, CO2 = -393.5, H2O(l) = -285.8</p>
              <p className="mt-2">Products sum = 1(-393.5) + 2(-285.8) = -965.1</p>
              <p>Reactants sum = 1(-74.8) + 2(0) = -74.8</p>
            </div>
            <div className="bg-green-50 p-4 rounded border border-green-200">
              <p className="font-semibold">DeltaH_rxn = -965.1 - (-74.8) = -890.3 kJ</p>
              <p>Exothermic (negative sign).</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Mistakes</h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Unbalanced equation</h3>
              <p>DeltaH calculations are invalid if coefficients are wrong.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Sign errors</h3>
              <p>Remember: products minus reactants, not the reverse.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Wrong phase data</h3>
              <p>Use DeltaH_f values for the correct phase (g, l, s, aq).</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Mixing units</h3>
              <p>Keep everything in kJ/mol; convert if needed.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">FAQ</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold">What is standard state?</h3>
              <p>Most tables use 1 bar and 25 C; check the reference conditions.</p>
            </div>
            <div>
              <h3 className="font-semibold">Can I use bond energies instead?</h3>
              <p>Yes for estimates; heats of formation are more accurate for specific reactions.</p>
            </div>
            <div>
              <h3 className="font-semibold">Why is O2 set to zero?</h3>
              <p>Elements in their standard state have DeltaH_f = 0 by definition.</p>
            </div>
          </div>
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
            <a href="/chemistry-formulas/entropy-formula" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Entropy Formula</h3>
              <p className="text-sm text-gray-600">Calculate ΔS for reactions</p>
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
            "headline": "Enthalpy Formula",
            "description": "Enthalpy Formula on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/enthalpy-formula",
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
                "name": "Enthalpy Formula",
                "item": "https://chemsolved.com/chemistry-formulas/enthalpy-formula"
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
