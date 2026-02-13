import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Gas Density Formula',
  description: 'Compute density using ρ = (P M) / (R T).',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/gas-density-formula',
  },
  keywords: 'gas density, ideal gas, molar mass, pressure, temperature',
}

export default function GasDensityFormulaPage() {
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
            <li className="text-gray-900">Gas Density Formula</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Gas Density Formula</h1>
          <p className="text-lg opacity-90">Ideal gas relation for mass per volume</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Understanding Gas Density</h2>
          <p className="text-gray-700 mb-4">
            The gas density formula ρ = (PM)/(RT) is a powerful rearrangement of the ideal gas law that directly relates a gas's density to its pressure, temperature, and molar mass. Unlike solids and liquids whose densities are relatively constant, gas density varies dramatically with temperature and pressure—doubling the pressure doubles the density, while doubling the absolute temperature halves the density. This relationship is fundamental to meteorology (air density affects weather patterns), aerospace engineering (lift calculations), industrial gas separation, and scuba diving (compressed air cylinders).
          </p>
          <p className="text-gray-700 mb-4">
            Deriving the formula from PV = nRT is straightforward: express n (moles) as m/M (mass over molar mass), substitute into the ideal gas law to get PV = (m/M)RT, then rearrange to P = (m/V)(RT/M). Since density ρ = m/V, we get ρ = PM/(RT). This elegant result shows that gas density is directly proportional to pressure and molar mass but inversely proportional to temperature. Heavier gases like CO₂ (M = 44 g/mol) are denser than lighter gases like He (M = 4 g/mol) at the same temperature and pressure, explaining why helium balloons rise while CO₂ "sinks."
          </p>
          <p className="text-gray-700">
            Practical applications abound: calculating mass flow rates in pipelines, designing ventilation systems for safety (heavier-than-air gases like propane settle in low areas), understanding atmospheric buoyancy, optimizing gas storage and transport, and analyzing gas mixtures. The formula also helps identify unknown gases by measuring density under known conditions and calculating molar mass. Real gases deviate from ideal behavior at high pressures or low temperatures, requiring corrections like the van der Waals equation, but the ideal gas density formula provides excellent approximations under typical laboratory and industrial conditions.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Formula</h2>
          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-orange-700">ρ = (P × M) / (R × T)</p>
          </div>
          <p className="text-gray-700">ρ: density, P: pressure, M: molar mass, R: gas constant, T: absolute temperature.</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example</h2>
          <p className="text-gray-700 mb-3"><strong>Given:</strong> CO₂, M = 44.01 g/mol, P = 1.00 atm, T = 298 K, R = 0.082057 L·atm·mol⁻¹·K⁻¹.</p>
          <div className="space-y-2 text-gray-700">
            <p>ρ = (1.00 × 44.01) / (0.082057 × 298) g/L</p>
            <p>ρ ≈ 44.01 / 24.45 ≈ 1.80 g/L</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: ≈ 1.80 g/L</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Key Applications &amp; Concepts</h2>
          <div className="space-y-4">
            <div className="bg-orange-50 p-4 rounded">
              <h3 className="font-semibold text-orange-900 mb-2">Relative Gas Density</h3>
              <p className="text-gray-700">Compare gas density to air (M<sub>air</sub> ≈ 29 g/mol). Gases with M &gt; 29 sink, gases with M &lt; 29 rise. Important for safety and ventilation design.</p>
            </div>

            <div className="bg-orange-50 p-4 rounded">
              <h3 className="font-semibold text-orange-900 mb-2">Temperature &amp; Altitude Effects</h3>
              <p className="text-gray-700">Higher altitude = lower pressure = lower air density. Hot air is less dense than cold air at same pressure. Explains hot air balloons and weather patterns.</p>
            </div>

            <div className="bg-orange-50 p-4 rounded">
              <h3 className="font-semibold text-orange-900 mb-2">Identifying Unknown Gases</h3>
              <p className="text-gray-700">Measure ρ, P, and T experimentally, then calculate M = ρRT/P. Compare to known molar masses to identify the gas.</p>
            </div>

            <div className="bg-orange-50 p-4 rounded">
              <h3 className="font-semibold text-orange-900 mb-2">Real vs Ideal Gases</h3>
              <p className="text-gray-700">Formula works best for ideal gases at low P and high T. At high P or low T, use van der Waals or other real gas equations.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Mistakes</h2>
          <div className="space-y-3">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Using Celsius instead of Kelvin</h3>
              <p className="text-gray-700">ALWAYS use absolute temperature (Kelvin) in gas law calculations. Convert: K = °C + 273.15</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Inconsistent units</h3>
              <p className="text-gray-700">Ensure pressure units match R. Use R = 0.08206 L·atm·mol⁻¹·K⁻¹ with P in atm, or R = 8.314 J·mol⁻¹·K⁻¹ with P in Pa.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Applying to liquids or solids</h3>
              <p className="text-gray-700">This formula is only for gases. Liquid and solid densities don't follow ideal gas law relationships.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Notes</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Works best for ideal gases; real gases may deviate at high P/low T.</li>
            <li>Use consistent units; convert M to kg/mol if you want SI density in kg/m³.</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/gas-laws-calculators/gas-density-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Gas Density Calculator</h3>
              <p className="text-sm text-gray-600">Calculate gas density</p>
            </a>
            <a href="/gas-laws-calculators/ideal-gas-law-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Ideal Gas Law Calculator</h3>
              <p className="text-sm text-gray-600">Calculate PV = nRT</p>
            </a>
            <a href="/gas-laws-calculators" className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">All Gas Laws Calculators</h3>
              <p className="text-sm opacity-90">Explore all gas law tools</p>
            </a>
            <a href="/chemistry-formulas/ideal-gas-law" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Ideal Gas Law</h3>
              <p className="text-sm text-gray-600">PV = nRT formula</p>
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
            "headline": "Gas Density Formula",
            "description": "Gas Density Formula on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/gas-density-formula",
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
                "name": "Gas Density Formula",
                "item": "https://chemsolved.com/chemistry-formulas/gas-density-formula"
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
