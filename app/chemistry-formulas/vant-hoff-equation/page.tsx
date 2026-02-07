import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: "Van't Hoff Equation Calculator & Formula",
  description: "Learn the Van't Hoff equation for equilibrium constants vs temperature with step-by-step examples and practice questions.",
  keywords: "vant hoff equation, equilibrium constant temperature, delta h, van't hoff plot, chemistry calculator",
}

export default function VantHoffEquation() {
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
            <li className="text-gray-900">Van't Hoff Equation</li>
          </ul>
        </nav>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-4">Van't Hoff Equation</h1>
          <p className="text-xl opacity-90">Relating equilibrium constants to temperature changes</p>
        </div>

        {/* Formula Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">The Van't Hoff Equation</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <div className="text-center space-y-1">
              <div className="text-2xl font-bold text-blue-700">ln(K2/K1) = -(ΔH/R)(1/T2 - 1/T1)</div>
              <div className="text-sm text-gray-700">T in Kelvin, R = 8.314 J/mol·K</div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="font-semibold mb-2">Variables</h3>
              <ul className="space-y-2 text-gray-700">
                <li>K1, K2 = equilibrium constants at T1, T2</li>
                <li>T1, T2 = absolute temperatures (K)</li>
                <li>ΔH = enthalpy change (J/mol)</li>
                <li>R = gas constant (8.314 J/mol·K)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">When to Use</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Estimate K at a new temperature</li>
                <li>Predict temperature dependence of equilibria</li>
                <li>Derive ΔH from slope of lnK vs 1/T</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Step-by-Step Example */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Step-by-Step Example</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded p-4 mb-6">
            <p className="font-semibold">Problem:</p>
            <p>K1 = 2.5 at 298 K. ΔH = -50.0 kJ/mol. Find K2 at 320 K.</p>
          </div>
          <div className="space-y-4 text-gray-800">
            <div>
              <h3 className="font-semibold">1) Convert units</h3>
              <p>ΔH = -50.0 kJ/mol = -50,000 J/mol</p>
            </div>
            <div>
              <h3 className="font-semibold">2) Apply Van't Hoff</h3>
              <div className="bg-gray-50 p-3 rounded">
                <p>ln(K2/2.5) = -(-50,000/8.314)(1/320 - 1/298)</p>
                <p>ln(K2/2.5) = 6013 × (-0.000231)</p>
                <p>ln(K2/2.5) = -1.39</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold">3) Solve for K2</h3>
              <div className="bg-gray-50 p-3 rounded">
                <p>K2/2.5 = e^-1.39 = 0.25</p>
                <p>K2 = 0.63</p>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded p-4">
              <p className="font-semibold">Answer:</p>
              <p>K at 320 K is 0.63 (equilibrium shifts toward reactants as temperature rises for exothermic reaction).</p>
            </div>
          </div>
        </div>

        {/* Common Mistakes */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Mistakes to Avoid</h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-red-700">Using Celsius</h3>
                <p>Always convert temperatures to Kelvin.</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-red-700">Sign of ΔH</h3>
                <p>Keep track of the sign; exothermic is negative.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-red-700">Unit mismatch</h3>
                <p>Use ΔH in J/mol if R is 8.314 J/mol·K.</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-red-700">T ordering</h3>
                <p>Use (1/T2 - 1/T1) exactly as written; reversing flips the sign.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Calculators */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <a href="/chemistry-formulas/gibbs-free-energy" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <h3 className="font-semibold text-blue-600 mb-2">Gibbs Free Energy</h3>
              <p className="text-sm text-gray-600">ΔG = ΔH - TΔS</p>
            </a>
            <a href="/chemistry-formulas/arrhenius-equation" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <h3 className="font-semibold text-blue-600 mb-2">Arrhenius Equation</h3>
              <p className="text-sm text-gray-600">Temperature-rate relationships</p>
            </a>
            <a href="/thermodynamics-calculators" className="block p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">All Thermodynamics Calculators</h3>
              <p className="text-sm opacity-90">Explore all thermodynamics tools</p>
            </a>
            <a href="/physical-chemistry-calculators" className="block p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">All Physical Chemistry Calculators</h3>
              <p className="text-sm opacity-90">Explore all physical chemistry tools</p>
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Frequently Asked Questions</h2>
          <div className="space-y-4 text-gray-800">
            <div>
              <h3 className="font-semibold text-lg">When is the Van't Hoff equation most accurate?</h3>
              <p>Over moderate temperature ranges where ΔH is roughly constant.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Can I use log base 10?</h3>
              <p>Yes, but change R to 1.987 cal/mol·K and convert the logarithm consistently.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">How do I find ΔH from data?</h3>
              <p>Plot ln K versus 1/T; slope = -ΔH/R.</p>
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
            "headline": "Vant Hoff Equation",
            "description": "Vant Hoff Equation on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/vant-hoff-equation",
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
                "name": "Vant Hoff Equation",
                "item": "https://chemsolved.com/chemistry-formulas/vant-hoff-equation"
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
