import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Equilibrium Constant (K)',
  description: 'Learn how to write equilibrium constant expressions and calculate K from concentrations or partial pressures.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/equilibrium-constant',
  },
  keywords: 'equilibrium constant, Kc, Kp, reaction quotient, chemical equilibrium',
}

export default function EquilibriumConstantPage() {
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
            <li className="text-gray-900">Equilibrium Constant (K)</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Equilibrium Constant (K)</h1>
          <p className="text-lg opacity-90">Relates products and reactants at equilibrium</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Understanding Equilibrium Constants</h2>
          <p className="text-gray-700 mb-4">
            The equilibrium constant (K) quantifies the balance between products and reactants when a reversible reaction reaches equilibrium. At equilibrium, the forward and reverse reaction rates are equal, resulting in constant concentrations. The magnitude of K indicates whether products or reactants are favored: K &gt; 1 favors products, while K &lt; 1 favors reactants.
          </p>
          <p className="text-gray-700 mb-4">
            Equilibrium constants are temperature-dependent but independent of initial concentrations or the presence of catalysts. Catalysts accelerate the approach to equilibrium but do not change the equilibrium position itself. Each reaction has its own unique K value at a given temperature, making it a characteristic property.
          </p>
          <p className="text-gray-700">
            There are different types of equilibrium constants: Kc (concentration basis), Kp (pressure basis for gases), Ka (acid dissociation), Kb (base dissociation), and Ksp (solubility product). All follow the same fundamental principle of products divided by reactants, each raised to their stoichiometric coefficients.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">General Expression</h2>
          <div className="bg-teal-50 border-l-4 border-teal-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-teal-700">For aA + bB ⇌ cC + dD:</p>
            <p className="text-xl text-teal-700 mt-2">Kc = ([C]^c [D]^d) / ([A]^a [B]^b)</p>
          </div>
          <p className="text-gray-700 mb-3">Use activities/activities approximated by molar concentrations for dilute solutions. For gases, use partial pressures for Kp.</p>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
            <p className="font-semibold text-yellow-800 mb-2">Important Rules:</p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Pure solids and liquids are omitted (activity = 1)</li>
              <li>Aqueous solutions use molar concentrations [M]</li>
              <li>Gas-phase reactions can use Kp with partial pressures</li>
              <li>Exponents must match stoichiometric coefficients</li>
            </ul>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Relationship Between Kp and Kc</h2>
          <div className="bg-gray-50 p-4 rounded ">
            <p className="text-lg font-mono text-center mb-3">Kp = Kc (RT)^Δn</p>
            <div className="text-gray-700">
              <p className="mb-2"><strong>Where:</strong></p>
              <ul className="list-disc pl-5 space-y-1">
                <li>R = gas constant (0.08206 L·atm/mol·K)</li>
                <li>T = absolute temperature (K)</li>
                <li>Δn = (moles gas products) − (moles gas reactants)</li>
              </ul>
              <p className="mt-3 text-sm text-gray-600"><strong>Note:</strong> If Δn = 0, then Kp = Kc</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Worked Example</h2>
          <p className="text-gray-700 mb-3"><strong>Reaction:</strong> N2 + 3 H2 ⇌ 2 NH3</p>
          <p className="text-gray-700 mb-3"><strong>At equilibrium:</strong> [N2]=0.10 M, [H2]=0.30 M, [NH3]=0.20 M.</p>
          <div className="space-y-2 text-gray-700 bg-gray-50 p-4 rounded">
            <p>Kc = [NH3]² / ([N2][H2]³)</p>
            <p>Kc = (0.20)² / ((0.10)(0.30)³)</p>
            <p>Kc = 0.04 / (0.10 × 0.027)</p>
            <p>Kc = 0.04 / 0.0027 ≈ 14.8</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: Kc ≈ 14.8</p>
            <p className="text-sm text-gray-600 mt-2">Since K &gt; 1, products are favored at equilibrium for this ammonia synthesis reaction.</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Temperature Effects and van't Hoff Equation</h2>
          <p className="text-gray-700 mb-3">
            Temperature is the only factor that changes the equilibrium constant value. The van't Hoff equation relates K to temperature:
          </p>
          <div className="bg-blue-50 p-4 rounded mb-3">
            <p className="text-center font-mono">ln(K2/K1) = -(ΔH°/R)(1/T2 - 1/T1)</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Endothermic Reactions (ΔH° &gt; 0)</h3>
              <p>Increasing temperature increases K, favoring products.</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-blue-700">Exothermic Reactions (ΔH° &lt; 0)</h3>
              <p>Increasing temperature decreases K, favoring reactants.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Mistakes</h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Including solids/liquids</h3>
              <p>Pure solids and liquids are omitted (activity = 1). Only include aqueous and gaseous species.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Wrong exponents</h3>
              <p>Exponents come from balanced equation stoichiometric coefficients, not molecular subscripts.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Mixing concentration and pressure</h3>
              <p>Don't mix [M] and atm in the same K expression. Use either Kc or Kp consistently.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Forgetting equilibrium values</h3>
              <p>K expressions require equilibrium concentrations, not initial concentrations.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">FAQ</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold">How does temperature affect K?</h3>
              <p>Use van't Hoff equation; endothermic reactions increase K with temperature.</p>
            </div>
            <div>
              <h3 className="font-semibold">Can K be less than 1?</h3>
              <p>Yes; small K indicates reactants favored at equilibrium.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/chemical-equilibrium-calculators/equilibrium-constant-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Equilibrium Constant Calculator</h3>
              <p className="text-sm text-gray-600">Calculate K from concentrations</p>
            </a>
            <a href="/chemical-equilibrium-calculators/reaction-quotient-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Reaction Quotient Calculator</h3>
              <p className="text-sm text-gray-600">Calculate Q and predict direction</p>
            </a>
            <a href="/chemistry-formulas/reaction-quotient" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Reaction Quotient Formula</h3>
              <p className="text-sm text-gray-600">Q vs K comparison</p>
            </a>
            <a href="/chemistry-formulas/le-chateliers-principle" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Le Chatelier's Principle</h3>
              <p className="text-sm text-gray-600">Equilibrium shifts and stress</p>
            </a>
            <a href="/chemical-equilibrium-calculators" className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
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
            "headline": "Equilibrium Constant",
            "description": "Equilibrium Constant on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/equilibrium-constant",
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
                "name": "Equilibrium Constant",
                "item": "https://chemsolved.com/chemistry-formulas/equilibrium-constant"
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
