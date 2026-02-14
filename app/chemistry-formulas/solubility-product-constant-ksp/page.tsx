import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Solubility Product Constant (Ksp)',
  description: 'Calculate solubility product constant (Ksp) for sparingly soluble salts. Predict precipitation, determine ion concentrations, and understand equilibrium solubility.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/solubility-product-constant-ksp',
  },
  keywords: 'Ksp, solubility product, equilibrium, ionic compounds, precipitation',
}

export default function KspPage() {
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
            <li className="text-gray-900">Solubility Product Constant (Ksp)</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Solubility Product Constant (Ksp)</h1>
          <p className="text-lg opacity-90">Equilibrium of dissolution for sparingly soluble salts</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Understanding Solubility Product Constant (K<sub>sp</sub>)</h2>
          <p className="text-gray-700 mb-4">
            The solubility product constant (K<sub>sp</sub>) is a special type of equilibrium constant that describes the dissolution equilibrium of sparingly soluble ionic compounds. When an ionic solid like silver chloride (AgCl) is placed in water, it establishes an equilibrium between the solid phase and dissolved ions: AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq). The K<sub>sp</sub> expression includes only the dissolved ions, not the solid, because the activity of a pure solid is defined as unity. This concept is fundamental to analytical chemistry, environmental chemistry, geochemistry, and pharmaceutical science where controlling precipitation and dissolution is essential.
          </p>
          <p className="text-gray-700 mb-4">
            The magnitude of K<sub>sp</sub> indicates relative solubility: smaller K<sub>sp</sub> values correspond to less soluble compounds. For example, AgCl has K<sub>sp</sub> = 1.8 × 10⁻¹⁰, making it quite insoluble, while PbCl₂ has K<sub>sp</sub> = 1.7 × 10⁻⁵, making it moderately soluble. However, comparing K<sub>sp</sub> values directly only works for compounds with the same stoichiometry (same number of ions). A compound like Ag₂CrO₄ (K<sub>sp</sub> = 1.1 × 10⁻¹²) might seem more soluble than AgCl based on K<sub>sp</sub> alone, but calculating actual molar solubility reveals the truth.
          </p>
          <p className="text-gray-700">
            K<sub>sp</sub> calculations have numerous practical applications: predicting whether precipitation will occur when solutions are mixed (compare reaction quotient Q to K<sub>sp</sub>), optimizing conditions for quantitative precipitation in gravimetric analysis, understanding scale formation in pipes and boilers, predicting mineral dissolution in natural waters, designing drug formulations where solubility affects bioavailability, and treating heavy metal contamination by inducing controlled precipitation. The common ion effect—where adding an ion already present in the equilibrium decreases solubility—is a key principle in analytical separations and water treatment processes.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Definition</h2>
          <p className="text-gray-700 mb-4">For a salt A_aB_b ⇌ a A⁺ + b B⁻, Ksp = [A⁺]^a [B⁻]^b at equilibrium. Activity may be used for high ionic strength.</p>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-emerald-700">Ksp = Π [ion]^stoichiometric coefficient</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Detailed Example: PbCl₂ Solubility</h2>
          <p className="text-gray-700 mb-3"><strong>Problem:</strong> Calculate the molar solubility of PbCl₂ if K<sub>sp</sub> = 1.7 × 10⁻⁵.</p>
          
          <div className="bg-gray-50 p-4 rounded mb-3">
            <p className="font-semibold text-gray-800 mb-2">Step 1: Write dissolution equation</p>
            <p className="text-gray-700">PbCl₂(s) ⇌ Pb²⁺(aq) + 2Cl⁻(aq)</p>
          </div>

          <div className="bg-gray-50 p-4 rounded mb-3">
            <p className="font-semibold text-gray-800 mb-2">Step 2: Write K<sub>sp</sub> expression</p>
            <p className="text-gray-700">K<sub>sp</sub> = [Pb²⁺][Cl⁻]²</p>
          </div>

          <div className="bg-gray-50 p-4 rounded mb-3">
            <p className="font-semibold text-gray-800 mb-2">Step 3: Define solubility (s)</p>
            <p className="text-gray-700">If s moles of PbCl₂ dissolve per liter:</p>
            <p className="text-gray-700">[Pb²⁺] = s and [Cl⁻] = 2s</p>
          </div>

          <div className="bg-gray-50 p-4 rounded mb-3">
            <p className="font-semibold text-gray-800 mb-2">Step 4: Substitute and solve</p>
            <p className="text-gray-700">1.7 × 10⁻⁵ = (s)(2s)² = 4s³</p>
            <p className="text-gray-700">s³ = (1.7 × 10⁻⁵)/4 = 4.25 × 10⁻⁶</p>
            <p className="text-gray-700">s = ∛(4.25 × 10⁻⁶) ≈ 1.62 × 10⁻² M</p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded p-4">
            <p className="font-semibold">Answer: Molar solubility of PbCl₂ ≈ 0.0162 M or 16.2 mM</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Key Concepts</h2>
          <div className="space-y-4">
            <div className="bg-emerald-50 p-4 rounded">
              <h3 className="font-semibold text-emerald-900 mb-2">Common Ion Effect</h3>
              <p className="text-gray-700">Adding a common ion decreases solubility. For AgCl, adding NaCl (source of Cl⁻) shifts equilibrium left, reducing [Ag⁺] and precipitating more AgCl. Used in analytical separations.</p>
            </div>

            <div className="bg-emerald-50 p-4 rounded">
              <h3 className="font-semibold text-emerald-900 mb-2">Precipitation Predictions</h3>
              <p className="text-gray-700">Calculate Q (reaction quotient) from initial concentrations. If Q &gt; K<sub>sp</sub>, precipitation occurs; if Q &lt; K<sub>sp</sub>, more solid can dissolve; if Q = K<sub>sp</sub>, system is at equilibrium.</p>
            </div>

            <div className="bg-emerald-50 p-4 rounded">
              <h3 className="font-semibold text-emerald-900 mb-2">pH Effects on Solubility</h3>
              <p className="text-gray-700">Sparingly soluble hydroxides (Mg(OH)₂) become more soluble as pH decreases because H⁺ reacts with OH⁻, shifting equilibrium. Carbonates and sulfides also show pH-dependent solubility.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Mistakes</h2>
          <div className="space-y-3">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Comparing K<sub>sp</sub> values with different stoichiometry</h3>
              <p className="text-gray-700">K<sub>sp</sub> alone doesn't determine relative solubility unless compounds have same ion ratio. Must calculate actual molar solubility.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Forgetting stoichiometric coefficients</h3>
              <p className="text-gray-700">In PbCl₂: [Cl⁻] = 2s, not s. The coefficient matters both in concentration and in the exponent of K<sub>sp</sub>.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Including solid in K<sub>sp</sub> expression</h3>
              <p className="text-gray-700">Pure solids have activity = 1 and don't appear in equilibrium expressions.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Notes</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Common ion effect reduces solubility: presence of shared ions shifts equilibrium.</li>
            <li>Complexation and pH changes can alter apparent solubility.</li>
            <li>Use activities for concentrated solutions; γ &lt; 1 lowers effective concentration.</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/equilibrium-calculators/solubility-product-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Solubility Product Calculator</h3>
              <p className="text-sm text-gray-600">Calculate Ksp and solubility</p>
            </a>
            <a href="/" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Equilibrium Constant Calculator</h3>
              <p className="text-sm text-gray-600">Calculate K from concentrations</p>
            </a>
            <a href="/chemistry-formulas/common-ion-effect" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Common Ion Effect</h3>
              <p className="text-sm text-gray-600">Shared ions affect solubility</p>
            </a>
            <a href="/chemistry-formulas/equilibrium-constant" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Equilibrium Constant Formula</h3>
              <p className="text-sm text-gray-600">K expression and calculations</p>
            </a>
            <a href="/" className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">All Chemical Equilibrium Calculators</h3>
              <p className="text-sm opacity-90">Explore all equilibrium tools and calculators</p>
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
            "headline": "Solubility Product Constant Ksp",
            "description": "Solubility Product Constant Ksp on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/solubility-product-constant-ksp",
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
                "name": "Solubility Product Constant Ksp",
                "item": "https://chemsolved.com/chemistry-formulas/solubility-product-constant-ksp"
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
