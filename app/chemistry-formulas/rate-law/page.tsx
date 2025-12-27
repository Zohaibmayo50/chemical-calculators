import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Rate Law Calculator & Formula | ChemCalc',
  description: 'Learn rate law formulas, reaction orders, and rate constants with step-by-step calculations and examples. Master chemical kinetics.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/rate-law',
  },
  keywords: 'rate law, chemical kinetics, reaction rate, rate constant, reaction order, chemistry calculator, chemistry help',
}

export default function RateLaw() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb Navigation */}
        <nav className="text-sm breadcrumbs mb-8">
          <ul className="flex space-x-2 text-gray-600">
            <li><a href="/" className="hover:text-blue-600">Home</a></li>
            <li><span className="mx-2">/</span></li>
            <li><a href="/chemistry-formulas" className="hover:text-blue-600">Chemistry Formulas</a></li>
            <li><span className="mx-2">/</span></li>
            <li className="text-gray-900">Rate Law</li>
          </ul>
        </nav>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-4">Rate Law</h1>
          <p className="text-xl opacity-90">Understanding the relationship between reaction rates and reactant concentrations</p>
        </div>

        {/* Formula Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">General Rate Law Formula</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-700 mb-2">Rate = k[A]^m[B]^n</div>
              <p className="text-gray-700">For reaction: aA + bB → products</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Variables:</h3>
              <ul className="space-y-2">
                <li><strong>Rate</strong> = Reaction rate (M/s)</li>
                <li><strong>k</strong> = Rate constant</li>
                <li><strong>[A], [B]</strong> = Concentrations (M)</li>
                <li><strong>m, n</strong> = Reaction orders</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Key Points:</h3>
              <ul className="space-y-2">
                <li>• Rate law must be determined experimentally</li>
                <li>• Orders (m, n) are NOT equal to coefficients (a, b)</li>
                <li>• Overall order = m + n</li>
                <li>• k depends on temperature</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Reaction Orders */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Understanding Reaction Orders</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Zero Order (m = 0):</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Rate = k</li>
                <li>• Rate independent of [A]</li>
                <li>• Linear decrease in concentration</li>
                <li>• Common in enzyme reactions at saturation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">First Order (m = 1):</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Rate = k[A]</li>
                <li>• Rate proportional to [A]</li>
                <li>• Exponential decrease</li>
                <li>• Half-life is constant</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Second Order (m = 2):</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Rate = k[A]²</li>
                <li>• Rate proportional to [A]²</li>
                <li>• 1/[A] vs time is linear</li>
                <li>• Half-life depends on concentration</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Step-by-Step Example */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Determining Rate Law: Step-by-Step Example</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded p-4 mb-6">
            <p className="font-semibold">Problem:</p>
            <p>For the reaction 2A + B → C, determine the rate law from the following data:</p>
            <table className="w-full mt-3 border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2">Experiment</th>
                  <th className="border border-gray-300 p-2">[A] (M)</th>
                  <th className="border border-gray-300 p-2">[B] (M)</th>
                  <th className="border border-gray-300 p-2">Initial Rate (M/s)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2 text-center">1</td>
                  <td className="border border-gray-300 p-2 text-center">0.10</td>
                  <td className="border border-gray-300 p-2 text-center">0.10</td>
                  <td className="border border-gray-300 p-2 text-center">2.0 × 10⁻⁴</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 text-center">2</td>
                  <td className="border border-gray-300 p-2 text-center">0.20</td>
                  <td className="border border-gray-300 p-2 text-center">0.10</td>
                  <td className="border border-gray-300 p-2 text-center">8.0 × 10⁻⁴</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 text-center">3</td>
                  <td className="border border-gray-300 p-2 text-center">0.10</td>
                  <td className="border border-gray-300 p-2 text-center">0.20</td>
                  <td className="border border-gray-300 p-2 text-center">4.0 × 10⁻⁴</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">Step 1: Find order with respect to A</h3>
              <div className="bg-gray-50 p-3 rounded">
                <p>Compare Experiments 1 and 2 (B constant):</p>
                <p>Rate₂/Rate₁ = (8.0 × 10⁻⁴)/(2.0 × 10⁻⁴) = 4</p>
                <p>[A]₂/[A]₁ = 0.20/0.10 = 2</p>
                <p>4 = 2^m → m = 2 (second order in A)</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Step 2: Find order with respect to B</h3>
              <div className="bg-gray-50 p-3 rounded">
                <p>Compare Experiments 1 and 3 (A constant):</p>
                <p>Rate₃/Rate₁ = (4.0 × 10⁻⁴)/(2.0 × 10⁻⁴) = 2</p>
                <p>[B]₃/[B]₁ = 0.20/0.10 = 2</p>
                <p>2 = 2^n → n = 1 (first order in B)</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Step 3: Write the rate law</h3>
              <div className="bg-gray-50 p-3 rounded">
                <p>Rate = k[A]²[B]¹</p>
                <p>Overall order = 2 + 1 = 3</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Step 4: Calculate rate constant</h3>
              <div className="bg-gray-50 p-3 rounded">
                <p>Using Experiment 1:</p>
                <p>2.0 × 10⁻⁴ = k(0.10)²(0.10)</p>
                <p>k = (2.0 × 10⁻⁴)/(1.0 × 10⁻³) = 0.20 M⁻²s⁻¹</p>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded p-4">
              <p className="font-semibold">Answer:</p>
              <p>Rate = 0.20[A]²[B] M⁻²s⁻¹</p>
            </div>
          </div>
        </div>

        {/* Integrated Rate Laws */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Integrated Rate Laws</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 p-3">Order</th>
                  <th className="border border-gray-300 p-3">Differential Rate Law</th>
                  <th className="border border-gray-300 p-3">Integrated Rate Law</th>
                  <th className="border border-gray-300 p-3">Linear Plot</th>
                  <th className="border border-gray-300 p-3">Half-Life</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 text-center font-semibold">0</td>
                  <td className="border border-gray-300 p-3">Rate = k</td>
                  <td className="border border-gray-300 p-3">[A] = [A]₀ - kt</td>
                  <td className="border border-gray-300 p-3">[A] vs t</td>
                  <td className="border border-gray-300 p-3">t₁/₂ = [A]₀/(2k)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 text-center font-semibold">1</td>
                  <td className="border border-gray-300 p-3">Rate = k[A]</td>
                  <td className="border border-gray-300 p-3">ln[A] = ln[A]₀ - kt</td>
                  <td className="border border-gray-300 p-3">ln[A] vs t</td>
                  <td className="border border-gray-300 p-3">t₁/₂ = 0.693/k</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 text-center font-semibold">2</td>
                  <td className="border border-gray-300 p-3">Rate = k[A]²</td>
                  <td className="border border-gray-300 p-3">1/[A] = 1/[A]₀ + kt</td>
                  <td className="border border-gray-300 p-3">1/[A] vs t</td>
                  <td className="border border-gray-300 p-3">t₁/₂ = 1/(k[A]₀)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Common Mistakes */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Mistakes to Avoid</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-red-700">Stoichiometric Coefficients</h3>
                <p className="text-gray-700">Reaction orders ≠ stoichiometric coefficients. Orders must be determined experimentally.</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-red-700">Rate vs. Rate Constant</h3>
                <p className="text-gray-700">Rate changes with concentration; rate constant k only changes with temperature.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-red-700">Units of Rate Constant</h3>
                <p className="text-gray-700">Units depend on overall order: M^(1-n)s^(-1) where n = overall order.</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-red-700">Initial Rates Method</h3>
                <p className="text-gray-700">Change only one concentration at a time when comparing experiments.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Calculators */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/kinetics-calculators/rate-law-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Rate Law Calculator</h3>
              <p className="text-sm text-gray-600">Calculate reaction rates and orders</p>
            </a>
            <a href="/kinetics-calculators/reaction-rate-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Reaction Rate Calculator</h3>
              <p className="text-sm text-gray-600">Calculate reaction rates</p>
            </a>
            <a href="/chemistry-formulas/arrhenius-equation" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Arrhenius Equation</h3>
              <p className="text-sm text-gray-600">Temperature-rate relationships</p>
            </a>
            <a href="/chemistry-formulas/integrated-rate-laws" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Integrated Rate Laws</h3>
              <p className="text-sm text-gray-600">Zero, first, and second-order kinetics</p>
            </a>
            <a href="/chemistry-formulas/reaction-order-formula" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Reaction Order Formula</h3>
              <p className="text-sm text-gray-600">Determine reaction orders</p>
            </a>
            <a href="/chemical-kinetics-calculators" className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">All Chemical Kinetics Calculators</h3>
              <p className="text-sm opacity-90">Explore all kinetics tools and calculators</p>
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">Why can't I use stoichiometric coefficients as orders?</h3>
              <p className="text-gray-700">The rate law describes the mechanism, not just the overall stoichiometry. Elementary steps may differ from the overall reaction.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">How do I determine the rate law experimentally?</h3>
              <p className="text-gray-700">Use the initial rates method: measure initial rates while varying one reactant concentration at a time, keeping others constant.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Can reaction orders be fractions or negative?</h3>
              <p className="text-gray-700">Yes! Fractional orders suggest complex mechanisms, while negative orders indicate inhibition by that species.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">How does temperature affect the rate law?</h3>
              <p className="text-gray-700">Temperature doesn't change the orders but dramatically affects the rate constant k, typically doubling every 10°C increase.</p>
            </div>
          </div>
        </div>
      
      {/* Structured Data - EducationalArticle */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": "Rate Law",
            "description": "Rate Law on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/rate-law",
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
                "name": "Rate Law",
                "item": "https://chemsolved.com/chemistry-formulas/rate-law"
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