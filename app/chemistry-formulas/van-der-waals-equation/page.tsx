import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Van der Waals Equation Calculator & Formula',
  description: 'Learn the Van der Waals equation for real gases (P + a/V²)(V - b) = RT with step-by-step calculations and examples. Understand gas deviations.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/van-der-waals-equation',
  },
  keywords: 'van der waals equation, real gas equation, gas deviation, chemistry calculator, non-ideal gas, gas law formula, chemistry help',
}

export default function VanDerWaalsEquation() {
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
            <li className="text-gray-900">Van der Waals Equation</li>
          </ul>
        </nav>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-4">Van der Waals Equation</h1>
          <p className="text-xl opacity-90">Equation of state for real gases accounting for molecular size and intermolecular forces</p>
        </div>

        {/* Formula Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">The Van der Waals Equation</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-700 mb-2">(P + a/V²)(V - b) = RT</div>
              <p className="text-gray-700">For one mole of gas</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Variables:</h3>
              <ul className="space-y-2">
                <li><strong>P</strong> = Pressure (atm)</li>
                <li><strong>V</strong> = Molar volume (L/mol)</li>
                <li><strong>R</strong> = Gas constant (0.08206 L·atm/mol·K)</li>
                <li><strong>T</strong> = Temperature (K)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Constants:</h3>
              <ul className="space-y-2">
                <li><strong>a</strong> = Intermolecular attraction constant</li>
                <li><strong>b</strong> = Molecular volume constant</li>
                <li>Both are substance-specific</li>
                <li>Found in reference tables</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Concepts */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Understanding the Corrections</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Pressure Correction (a/V²):</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Accounts for intermolecular attractions</li>
                <li>• Reduces effective pressure on container walls</li>
                <li>• Larger 'a' = stronger intermolecular forces</li>
                <li>• More significant at high density (low V)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Volume Correction (b):</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Accounts for finite molecular size</li>
                <li>• Reduces available space for gas movement</li>
                <li>• Larger 'b' = larger molecular volume</li>
                <li>• More significant at high pressure (low V)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Van der Waals Constants */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Van der Waals Constants</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 p-3 text-left">Gas</th>
                  <th className="border border-gray-300 p-3 text-center">a (L²·atm/mol²)</th>
                  <th className="border border-gray-300 p-3 text-center">b (L/mol)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3">Helium (He)</td>
                  <td className="border border-gray-300 p-3 text-center">0.03412</td>
                  <td className="border border-gray-300 p-3 text-center">0.02370</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">Nitrogen (N₂)</td>
                  <td className="border border-gray-300 p-3 text-center">1.390</td>
                  <td className="border border-gray-300 p-3 text-center">0.03913</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Carbon dioxide (CO₂)</td>
                  <td className="border border-gray-300 p-3 text-center">3.640</td>
                  <td className="border border-gray-300 p-3 text-center">0.04267</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">Water (H₂O)</td>
                  <td className="border border-gray-300 p-3 text-center">5.536</td>
                  <td className="border border-gray-300 p-3 text-center">0.03049</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Step-by-Step Example */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Step-by-Step Example</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded p-4 mb-6">
            <p className="font-semibold">Problem:</p>
            <p>Calculate the pressure of 2.0 mol of CO₂ gas in a 1.0 L container at 300 K using the Van der Waals equation.</p>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">Step 1: Identify known values</h3>
              <ul className="ml-4 space-y-1">
                <li>n = 2.0 mol</li>
                <li>V = 1.0 L</li>
                <li>T = 300 K</li>
                <li>For CO₂: a = 3.640 L²·atm/mol², b = 0.04267 L/mol</li>
                <li>R = 0.08206 L·atm/mol·K</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Step 2: Calculate molar volume</h3>
              <div className="bg-gray-50 p-3 rounded">
                <p>V_molar = V_total/n = 1.0 L / 2.0 mol = 0.50 L/mol</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Step 3: Apply Van der Waals equation</h3>
              <div className="bg-gray-50 p-3 rounded">
                <p>(P + a/V²)(V - b) = RT</p>
                <p>P = RT/(V - b) - a/V²</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Step 4: Substitute values</h3>
              <div className="bg-gray-50 p-3 rounded space-y-2">
                <p>P = (0.08206 × 300)/(0.50 - 0.04267) - 3.640/(0.50)²</p>
                <p>P = 24.618/0.45733 - 3.640/0.25</p>
                <p>P = 53.84 - 14.56</p>
                <p>P = 39.28 atm</p>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded p-4">
              <p className="font-semibold">Answer:</p>
              <p>The pressure is 39.3 atm (vs. 49.2 atm predicted by ideal gas law)</p>
            </div>
          </div>
        </div>

        {/* Common Mistakes */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Mistakes to Avoid</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-red-700">Molar Volume</h3>
                <p className="text-gray-700">Use molar volume (V/n), not total volume, in the equation</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-red-700">Constants</h3>
                <p className="text-gray-700">Use correct Van der Waals constants for the specific gas</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-red-700">Temperature Units</h3>
                <p className="text-gray-700">Always convert temperature to Kelvin</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-red-700">Algebra Complexity</h3>
                <p className="text-gray-700">Be careful with order of operations when solving for P, V, or T</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Calculators */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <a href="/chemistry-formulas/ideal-gas-law" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <h3 className="font-semibold text-blue-600 mb-2">Ideal Gas Law</h3>
              <p className="text-sm text-gray-600">PV = nRT calculations</p>
            </a>
            <a href="/chemistry-formulas/combined-gas-law" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <h3 className="font-semibold text-blue-600 mb-2">Combined Gas Law</h3>
              <p className="text-sm text-gray-600">P₁V₁/T₁ = P₂V₂/T₂ calculations</p>
            </a>
            <a href="/physical-chemistry-calculators" className="block p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">All Physical Chemistry Calculators</h3>
              <p className="text-sm opacity-90">Explore all gas law tools</p>
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">When should I use Van der Waals instead of ideal gas law?</h3>
              <p className="text-gray-700">Use Van der Waals at high pressures, low temperatures, or when high accuracy is needed. Real gas behavior deviates most under these conditions.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">How are Van der Waals constants determined?</h3>
              <p className="text-gray-700">They're determined experimentally by fitting the equation to real gas data, often derived from critical temperature and pressure values.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Why do both corrections matter?</h3>
              <p className="text-gray-700">The 'a' term becomes significant when molecules are close (high density), while the 'b' term matters when available space is limited (high pressure).</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Can I use this for gas mixtures?</h3>
              <p className="text-gray-700">Yes, but you need mixing rules to determine effective 'a' and 'b' values for the mixture, which can be quite complex.</p>
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
            "headline": "Van Der Waals Equation",
            "description": "Van Der Waals Equation on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/van-der-waals-equation",
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
                "name": "Van Der Waals Equation",
                "item": "https://chemsolved.com/chemistry-formulas/van-der-waals-equation"
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