import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Integrated Rate Laws',
  description: 'Zero, first, and second-order integrated rate law equations with examples and common pitfalls.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/integrated-rate-laws',
  },
  keywords: 'integrated rate law, zero order, first order, second order, kinetics',
}

export default function IntegratedRateLawsPage() {
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
            <li className="text-gray-900">Integrated Rate Laws</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Integrated Rate Laws</h1>
          <p className="text-lg opacity-90">Relate concentration and time for common reaction orders</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Understanding Integrated Rate Laws</h2>
          <p className="text-gray-700 mb-4">
            Integrated rate laws are mathematical equations that relate reactant concentrations to time, derived by integrating differential rate laws. While differential rate laws (Rate = k[A]<sup>n</sup>) describe instantaneous rates, integrated rate laws allow chemists to calculate concentrations at any time point or determine how long a reaction takes to reach a certain completion level. This makes them invaluable for practical applications—from predicting medication dosages in pharmacokinetics to calculating radioactive decay timescales in nuclear chemistry.
          </p>
          <p className="text-gray-700 mb-4">
            Each reaction order (zero, first, second) yields a unique integrated form with distinct mathematical behavior and graphical signature. Understanding these patterns is essential for experimental kinetics: by plotting concentration data appropriately (linear vs. time, ln vs. time, or 1/concentration vs. time), chemists can identify reaction order and extract rate constants from slopes. This graphical method, pioneered by physical chemists in the early 20th century, remains standard practice in research laboratories worldwide.
          </p>
          <p className="text-gray-700">
            Integrated rate laws also reveal fundamental insights about half-lives. First-order reactions have constant half-lives independent of initial concentration, explaining radioactive decay consistency and first-pass drug metabolism. Zero-order half-lives depend linearly on initial concentration, while second-order half-lives depend inversely. These relationships are crucial for drug design, environmental remediation, and industrial process optimization where predicting time-dependent behavior is essential.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Zero-Order Reactions</h2>
          <div className="bg-gray-50 border-l-4 border-gray-500 p-4 rounded mb-4">
            <p className="text-2xl font-mono font-bold text-gray-700 text-center mb-2">[A]<sub>t</sub> = [A]<sub>0</sub> − kt</p>
            <p className="text-sm text-gray-600 text-center">Linear decrease with time</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-50 p-3 rounded">
              <p className="font-semibold text-gray-800">Differential Form:</p>
              <p className="text-gray-700">Rate = k (independent of [A])</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="font-semibold text-gray-800">Linear Plot:</p>
              <p className="text-gray-700">[A] vs t → straight line, slope = −k</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="font-semibold text-gray-800">Half-Life:</p>
              <p className="text-gray-700">t<sub>1/2</sub> = [A]<sub>0</sub>/(2k) (depends on [A]<sub>0</sub>!)</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="font-semibold text-gray-800">Units of k:</p>
              <p className="text-gray-700">M/s or mol·L⁻¹·s⁻¹</p>
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded p-4">
            <p className="font-semibold text-blue-800 mb-2">When Does Zero-Order Occur?</p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li><strong>Surface reactions:</strong> When reactant adsorption saturates catalyst surface</li>
              <li><strong>Enzyme kinetics:</strong> At high substrate concentrations (V<sub>max</sub> regime in Michaelis-Menten)</li>
              <li><strong>Photochemical reactions:</strong> Limited by photon flux, not reactant concentration</li>
              <li><em>Example:</em> Alcohol elimination by liver enzymes (~constant 0.015% BAC/hour once saturated)</li>
            </ul>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">First-Order Reactions</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-4">
            <p className="text-2xl font-mono font-bold text-blue-700 text-center mb-2">ln[A]<sub>t</sub> = ln[A]<sub>0</sub> − kt</p>
            <p className="text-sm text-gray-600 text-center">or [A]<sub>t</sub> = [A]<sub>0</sub> e<sup>−kt</sup> (exponential decay)</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-blue-50 p-3 rounded">
              <p className="font-semibold text-blue-800">Differential Form:</p>
              <p className="text-gray-700">Rate = k[A]</p>
            </div>
            <div className="bg-blue-50 p-3 rounded">
              <p className="font-semibold text-blue-800">Linear Plot:</p>
              <p className="text-gray-700">ln[A] vs t → straight line, slope = −k</p>
            </div>
            <div className="bg-blue-50 p-3 rounded">
              <p className="font-semibold text-blue-800">Half-Life:</p>
              <p className="text-gray-700">t<sub>1/2</sub> = 0.693/k = ln2/k (constant!)</p>
            </div>
            <div className="bg-blue-50 p-3 rounded">
              <p className="font-semibold text-blue-800">Units of k:</p>
              <p className="text-gray-700">s⁻¹ or min⁻¹ or hr⁻¹</p>
            </div>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4">
            <p className="font-semibold text-green-800 mb-2">Most Common Reaction Order:</p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li><strong>Radioactive decay:</strong> All isotopes follow first-order kinetics (C-14 dating, medical isotopes)</li>
              <li><strong>Drug elimination:</strong> Many drugs have first-order metabolism (constant percentage removed per hour)</li>
              <li><strong>Unimolecular reactions:</strong> A → products (molecular rearrangements, decompositions)</li>
              <li><em>Example:</em> N₂O₅ → 2NO₂ + ½O₂ has k = 6.2 × 10⁻⁴ s⁻¹ at 65°C, t<sub>1/2</sub> = 1118 s</li>
            </ul>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Second-Order Reactions</h2>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded mb-4">
            <p className="text-2xl font-mono font-bold text-purple-700 text-center mb-2">1/[A]<sub>t</sub> = 1/[A]<sub>0</sub> + kt</p>
            <p className="text-sm text-gray-600 text-center">Reciprocal concentration increases linearly</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-purple-50 p-3 rounded">
              <p className="font-semibold text-purple-800">Differential Form:</p>
              <p className="text-gray-700">Rate = k[A]² or k[A][B]</p>
            </div>
            <div className="bg-purple-50 p-3 rounded">
              <p className="font-semibold text-purple-800">Linear Plot:</p>
              <p className="text-gray-700">1/[A] vs t → straight line, slope = k</p>
            </div>
            <div className="bg-purple-50 p-3 rounded">
              <p className="font-semibold text-purple-800">Half-Life:</p>
              <p className="text-gray-700">t<sub>1/2</sub> = 1/(k[A]<sub>0</sub>) (inversely proportional to [A]<sub>0</sub>)</p>
            </div>
            <div className="bg-purple-50 p-3 rounded">
              <p className="font-semibold text-purple-800">Units of k:</p>
              <p className="text-gray-700">L·mol⁻¹·s⁻¹ or M⁻¹·s⁻¹</p>
            </div>
          </div>
          <div className="bg-orange-50 border border-orange-200 rounded p-4">
            <p className="font-semibold text-orange-800 mb-2">Common Second-Order Cases:</p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li><strong>Bimolecular reactions:</strong> 2A → products or A + B → products (most elementary steps)</li>
              <li><strong>Gas-phase collisions:</strong> 2NO₂ → 2NO + O₂ (k = 0.54 M⁻¹·s⁻¹ at 300°C)</li>
              <li><strong>Radical recombination:</strong> 2R• → R-R (termination steps in polymerization)</li>
              <li><em>Practical Note:</em> Higher initial concentration → shorter half-life (reacts faster when concentrated)</li>
            </ul>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Detailed Example: First-Order Kinetics</h2>
          <p className="text-gray-700 mb-3"><strong>Problem:</strong> Cyclopropane isomerizes to propene (first-order). If [cyclopropane]<sub>0</sub> = 0.100 M, k = 6.0 × 10⁻⁴ s⁻¹, find [cyclopropane] at t = 1000 s.</p>
          <div className="bg-gray-50 p-4 rounded mb-3">
            <p className="font-semibold text-gray-800 mb-2">Method 1: Using ln[A] = ln[A]<sub>0</sub> − kt</p>
            <div className="space-y-2 text-gray-700 ml-4">
              <p>ln[A]<sub>1000</sub> = ln(0.100) − (6.0 × 10⁻⁴)(1000)</p>
              <p>ln[A]<sub>1000</sub> = −2.3026 − 0.60</p>
              <p>ln[A]<sub>1000</sub> = −2.9026</p>
              <p>[A]<sub>1000</sub> = e<sup>−2.9026</sup> = <strong>0.0549 M</strong></p>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded mb-3">
            <p className="font-semibold text-gray-800 mb-2">Method 2: Using [A] = [A]<sub>0</sub> e<sup>−kt</sup></p>
            <div className="space-y-2 text-gray-700 ml-4">
              <p>[A]<sub>1000</sub> = 0.100 × e<sup>−0.60</sup></p>
              <p>[A]<sub>1000</sub> = 0.100 × 0.5488 = <strong>0.0549 M</strong> ✓</p>
            </div>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4">
            <p className="font-semibold text-green-800">Answer: [cyclopropane] = 0.0549 M after 1000 seconds</p>
            <p className="text-gray-700 mt-2">About 55% reacted (45% remaining). Calculate half-life: t<sub>1/2</sub> = 0.693/k = 1155 s, so we're close to one half-life.</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Comparison Table: Reaction Orders</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-indigo-100">
                  <th className="border border-indigo-300 p-3 text-left">Property</th>
                  <th className="border border-indigo-300 p-3 text-left">Zero-Order</th>
                  <th className="border border-indigo-300 p-3 text-left">First-Order</th>
                  <th className="border border-indigo-300 p-3 text-left">Second-Order</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3"><strong>Differential</strong></td>
                  <td className="border border-gray-300 p-3">Rate = k</td>
                  <td className="border border-gray-300 p-3">Rate = k[A]</td>
                  <td className="border border-gray-300 p-3">Rate = k[A]²</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3"><strong>Integrated</strong></td>
                  <td className="border border-gray-300 p-3">[A] = [A]<sub>0</sub> − kt</td>
                  <td className="border border-gray-300 p-3">ln[A] = ln[A]<sub>0</sub> − kt</td>
                  <td className="border border-gray-300 p-3">1/[A] = 1/[A]<sub>0</sub> + kt</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3"><strong>Linear Plot</strong></td>
                  <td className="border border-gray-300 p-3">[A] vs t</td>
                  <td className="border border-gray-300 p-3">ln[A] vs t</td>
                  <td className="border border-gray-300 p-3">1/[A] vs t</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3"><strong>Slope</strong></td>
                  <td className="border border-gray-300 p-3">−k</td>
                  <td className="border border-gray-300 p-3">−k</td>
                  <td className="border border-gray-300 p-3">+k</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3"><strong>Half-Life</strong></td>
                  <td className="border border-gray-300 p-3">[A]<sub>0</sub>/(2k)</td>
                  <td className="border border-gray-300 p-3">0.693/k</td>
                  <td className="border border-gray-300 p-3">1/(k[A]<sub>0</sub>)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3"><strong>t<sub>1/2</sub> depends on</strong></td>
                  <td className="border border-gray-300 p-3">[A]<sub>0</sub></td>
                  <td className="border border-gray-300 p-3">Independent of [A]<sub>0</sub></td>
                  <td className="border border-gray-300 p-3">1/[A]<sub>0</sub></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3"><strong>k units</strong></td>
                  <td className="border border-gray-300 p-3">M/s</td>
                  <td className="border border-gray-300 p-3">s⁻¹</td>
                  <td className="border border-gray-300 p-3">M⁻¹·s⁻¹</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Applications &amp; Real-World Examples</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-indigo-700 mb-2">1. Pharmacokinetics</h3>
              <p className="text-gray-700">Most drugs follow first-order elimination. If a drug has t<sub>1/2</sub> = 6 hours and initial plasma concentration = 100 μg/mL, after 12 hours (2 half-lives): C = 100 × (1/2)² = 25 μg/mL. This predictability guides dosing schedules.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-indigo-700 mb-2">2. Radiocarbon Dating</h3>
              <p className="text-gray-700">C-14 decay is first-order with t<sub>1/2</sub> = 5730 years. Ancient artifacts with 25% of original C-14 are ~11,460 years old (2 half-lives). The constant half-life makes age determination reliable.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-indigo-700 mb-2">3. Atmospheric Ozone Depletion</h3>
              <p className="text-gray-700">CFC decomposition in stratosphere follows first-order kinetics with k ~ 10⁻⁵ s⁻¹, giving t<sub>1/2</sub> ~ 20 hours for key reactions. Integrated rate laws predict ozone hole recovery timescales (decades).</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-indigo-700 mb-2">4. Industrial Reactors</h3>
              <p className="text-gray-700">Batch reactor design uses integrated rate laws to calculate required reaction time for desired conversion. For 95% conversion of second-order reaction: t = (1/(k[A]<sub>0</sub>)) × 19 (solving 1/[A] = 20/[A]<sub>0</sub>).</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Mistakes &amp; Tips</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-3 rounded">
              <h3 className="font-semibold text-red-700 mb-1">Wrong Linear Plot</h3>
              <p className="text-gray-700\">Plot all three ([A] vs t, ln[A] vs t, 1/[A] vs t) and see which is linear! The straight-line plot reveals reaction order. Non-linearity in all three suggests complex kinetics or experimental error.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-3 rounded">
              <h3 className="font-semibold text-red-700 mb-1">Unit Inconsistency</h3>
              <p className="text-gray-700">Check k units match reaction order! First-order k must have time⁻¹ units (s⁻¹, min⁻¹), second-order needs M⁻¹·time⁻¹. Mismatched units mean wrong order or calculation error.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-3 rounded">
              <h3 className="font-semibold text-red-700 mb-1">Natural Log vs Log₁₀</h3>
              <p className="text-gray-700">Integrated rate laws use ln (natural logarithm, base e), NOT log₁₀! Using log₁₀([A]) vs t gives wrong slope. Remember: ln = 2.303 × log₁₀.</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4 bg-yellow-50 p-3 rounded">
              <h3 className="font-semibold text-yellow-700 mb-1">Pro Tip: Half-Life Method</h3>
              <p className="text-gray-700">Quick diagnostic: If successive half-lives are constant → first-order. If t<sub>1/2</sub> increases → second-order. If t<sub>1/2</sub> proportional to [A]<sub>0</sub> → zero-order. This checks order without making plots!</p>
            </div>
          </div>
        </section>
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/kinetics-calculators/integrated-rate-law-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Integrated Rate Law Calculator</h3>
              <p className="text-sm text-gray-600">Calculate concentrations over time</p>
            </a>
            <a href="/kinetics-calculators/half-life-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Half-Life Calculator</h3>
              <p className="text-sm text-gray-600">Calculate decay half-life</p>
            </a>
            <a href="/chemistry-formulas/half-life-formula" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Half-Life Formula</h3>
              <p className="text-sm text-gray-600">t₁/₂ = 0.693/k for first-order</p>
            </a>
            <a href="/chemistry-formulas/rate-law" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Rate Law Formula</h3>
              <p className="text-sm text-gray-600">Rate expressions and orders</p>
            </a>
            <a href="/chemical-kinetics-calculators" className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">All Chemical Kinetics Calculators</h3>
              <p className="text-sm opacity-90">Explore all kinetics tools and calculators</p>
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
            "headline": "Integrated Rate Laws",
            "description": "Integrated Rate Laws on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/integrated-rate-laws",
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
                "name": "Integrated Rate Laws",
                "item": "https://chemsolved.com/chemistry-formulas/integrated-rate-laws"
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
