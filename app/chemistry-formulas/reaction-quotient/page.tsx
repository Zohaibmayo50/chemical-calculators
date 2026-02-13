import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Reaction Quotient (Q)',
  description: 'Write the reaction quotient and compare Q to K to predict reaction direction.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/reaction-quotient',
  },
  keywords: 'reaction quotient, Q vs K, chemical equilibrium direction',
}

export default function ReactionQuotientPage() {
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
            <li className="text-gray-900">Reaction Quotient (Q)</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Reaction Quotient (Q)</h1>
          <p className="text-lg opacity-90">Compare Q with K to predict shift</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Understanding the Reaction Quotient</h2>
          <p className="text-gray-700 mb-4">
            The reaction quotient (Q) is a mathematical expression that describes the relative amounts of products and reactants at any point during a chemical reaction, not just at equilibrium. While the equilibrium constant K describes the ratio of products to reactants at equilibrium, Q provides a snapshot of the reaction composition at any moment in time. This distinction is crucial for predicting reaction behavior: by comparing Q to K, chemists can determine whether a reaction will proceed forward (toward products), reverse (toward reactants), or remain at equilibrium.
          </p>
          <p className="text-gray-700 mb-4">
            The reaction quotient is calculated using the same mathematical form as the equilibrium constant expression, raising product concentrations (or activities) to their stoichiometric coefficients and dividing by reactant concentrations raised to their respective stoichiometric coefficients. However, Q uses current or initial concentrations rather than equilibrium values. This makes Q a dynamic quantity that changes as the reaction progresses, eventually converging to the value of K when equilibrium is reached. The relationship between Q and K is fundamental to Le Chatelier's principle and helps explain how systems respond to stress.
          </p>
          <p className="text-gray-700">
            In industrial and laboratory settings, the reaction quotient is invaluable for process control and optimization. By monitoring Q throughout a reaction, chemists can determine how close the system is to equilibrium and make real-time adjustments to improve yield. For example, in continuous flow reactors, maintaining Q less than K ensures that the forward reaction continues to produce products efficiently. Understanding Q also helps predict precipitation in analytical chemistry, optimize buffer systems in biochemistry, and design efficient separation processes in chemical engineering.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Definition</h2>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-emerald-700">For aA + bB ⇌ cC + dD:</p>
            <p className="text-xl text-emerald-700">Q = ([C]^c [D]^d) / ([A]^a [B]^b)</p>
          </div>
          <p className="text-gray-700">Same form as Kc but using current (not equilibrium) activities/concentrations. For gases, use partial pressures to write Qp.</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Direction Prediction Table</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead className="bg-emerald-100">
                <tr>
                  <th className="px-4 py-3 border-b border-gray-300 text-left font-semibold text-gray-700">Condition</th>
                  <th className="px-4 py-3 border-b border-gray-300 text-left font-semibold text-gray-700">Q vs K</th>
                  <th className="px-4 py-3 border-b border-gray-300 text-left font-semibold text-gray-700">Reaction Direction</th>
                  <th className="px-4 py-3 border-b border-gray-300 text-left font-semibold text-gray-700">Result</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 border-b border-gray-200">Too few products</td>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-blue-700">Q &lt; K</td>
                  <td className="px-4 py-3 border-b border-gray-200">Forward (→)</td>
                  <td className="px-4 py-3 border-b border-gray-200">Forms more products</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 border-b border-gray-200">At equilibrium</td>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-green-700">Q = K</td>
                  <td className="px-4 py-3 border-b border-gray-200">No net change</td>
                  <td className="px-4 py-3 border-b border-gray-200">System remains balanced</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 border-b border-gray-200">Too many products</td>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-red-700">Q &gt; K</td>
                  <td className="px-4 py-3 border-b border-gray-200">Reverse (←)</td>
                  <td className="px-4 py-3 border-b border-gray-200">Forms more reactants</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Worked Example: More Complex System</h2>
          <p className="text-gray-700 mb-3"><strong>Given:</strong> 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), K<sub>p</sub> = 4.0 × 10² at 1000 K</p>
          <p className="text-gray-700 mb-3"><strong>Initial pressures:</strong> P<sub>SO₂</sub> = 0.50 atm, P<sub>O₂</sub> = 0.30 atm, P<sub>SO₃</sub> = 0.10 atm</p>
          
          <div className="bg-gray-50 p-4 rounded mb-3">
            <p className="font-semibold text-gray-800 mb-2">Step 1: Write Q<sub>p</sub> expression</p>
            <p className="text-gray-700">Q<sub>p</sub> = (P<sub>SO₃</sub>)² / [(P<sub>SO₂</sub>)² × P<sub>O₂</sub>]</p>
          </div>

          <div className="bg-gray-50 p-4 rounded mb-3">
            <p className="font-semibold text-gray-800 mb-2">Step 2: Substitute values</p>
            <p className="text-gray-700">Q<sub>p</sub> = (0.10)² / [(0.50)² × 0.30]</p>
            <p className="text-gray-700">Q<sub>p</sub> = 0.01 / (0.25 × 0.30) = 0.01 / 0.075 ≈ 0.133</p>
          </div>

          <div className="bg-gray-50 p-4 rounded mb-3">
            <p className="font-semibold text-gray-800 mb-2">Step 3: Compare Q to K</p>
            <p className="text-gray-700">Q<sub>p</sub> = 0.133 &lt;&lt; K<sub>p</sub> = 400</p>
            <p className="text-gray-700">Since Q &lt; K, reaction shifts forward</p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded p-4">
            <p className="font-semibold">Answer: Reaction proceeds to the right, converting SO₂ and O₂ into SO₃ until equilibrium is reached.</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Key Applications</h2>
          
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded">
              <h3 className="font-semibold text-blue-900 mb-2">Precipitation Prediction</h3>
              <p className="text-gray-700">Calculate Q for an ionic product and compare to K<sub>sp</sub>. If Q &gt; K<sub>sp</sub>, precipitation occurs.</p>
            </div>

            <div className="bg-blue-50 p-4 rounded">
              <h3 className="font-semibold text-blue-900 mb-2">Process Optimization</h3>
              <p className="text-gray-700">Monitor Q in real-time to adjust concentrations, temperature, or pressure to maximize product yield in industrial reactors.</p>
            </div>

            <div className="bg-blue-50 p-4 rounded">
              <h3 className="font-semibold text-blue-900 mb-2">Biological Systems</h3>
              <p className="text-gray-700">Calculate Q for biochemical reactions (like ATP hydrolysis) to determine if reactions are thermodynamically favorable under cellular conditions.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Mistakes</h2>
          <div className="space-y-3">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Including pure solids or liquids in Q</h3>
              <p className="text-gray-700">Remember: activities of pure solids and liquids are unity (1), so they don't appear in Q or K expressions.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Using molarity when partial pressures are needed</h3>
              <p className="text-gray-700">For gas-phase reactions, use Q<sub>p</sub> with partial pressures, not Q<sub>c</sub> with concentrations, unless specifically required.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Forgetting stoichiometric coefficients</h3>
              <p className="text-gray-700">Always raise concentrations to the power of their stoichiometric coefficients from the balanced equation.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">FAQ</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold">Do solids or liquids appear in Q?</h3>
              <p>No; activity is 1 for pure solids/liquids. Include only species with variable activity.</p>
            </div>
            <div>
              <h3 className="font-semibold">How does stoichiometry affect Q?</h3>
              <p>Exponents in Q come from stoichiometric coefficients in the balanced equation.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Reaction Quotient Calculator</h3>
              <p className="text-sm text-gray-600">Calculate Q and predict direction</p>
            </a>
            <a href="/" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Equilibrium Constant Calculator</h3>
              <p className="text-sm text-gray-600">Calculate K from concentrations</p>
            </a>
            <a href="/chemistry-formulas/equilibrium-constant" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Equilibrium Constant Formula</h3>
              <p className="text-sm text-gray-600">K expression and calculations</p>
            </a>
            <a href="/chemistry-formulas/le-chateliers-principle" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Le Chatelier's Principle</h3>
              <p className="text-sm text-gray-600">Equilibrium shifts and stress</p>
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
            "headline": "Reaction Quotient",
            "description": "Reaction Quotient on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/reaction-quotient",
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
                "name": "Reaction Quotient",
                "item": "https://chemsolved.com/chemistry-formulas/reaction-quotient"
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
