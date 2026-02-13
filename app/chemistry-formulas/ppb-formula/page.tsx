import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'PPB Formula',
  description: 'Parts per billion: ppb = (mass of solute / mass of solution) × 10^9.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/ppb-formula',
  },
  keywords: 'ppb, parts per billion, concentration, solution',
}

export default function PpbFormulaPage() {
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
            <li className="text-gray-900">PPB Formula</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">PPB Formula</h1>
          <p className="text-lg opacity-90">Ultra-low concentration measurement</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Understanding Parts Per Billion (PPB)</h2>
          <p className="text-gray-700 mb-4">
            Parts per billion (ppb) is an ultra-trace concentration unit representing one part of solute per one billion parts of solution. This unit is 1000 times more sensitive than parts per million (ppm), making it essential for measuring extremely low concentrations of toxic substances, trace metals, pesticide residues, and pharmaceutical impurities. Environmental agencies, pharmaceutical manufacturers, and food safety regulators rely on ppb measurements to ensure safety standards for substances that can cause harm even at incredibly small concentrations.
          </p>
          <p className="text-gray-700 mb-4">
            The ppb unit provides a practical way to express nanogram-per-milliliter or microgram-per-liter concentrations without dealing with cumbersome scientific notation. For aqueous solutions with density near 1 g/mL, 1 ppb equals approximately 1 μg/L (microgram per liter) or 1 ng/mL (nanogram per milliliter). This equivalence simplifies calculations in water quality testing, where most natural waters have densities very close to pure water.
          </p>
          <p className="text-gray-700 mb-4">
            Understanding ppb is critical in modern analytical chemistry, where advanced instrumentation like ICP-MS (Inductively Coupled Plasma Mass Spectrometry) and GC-MS (Gas Chromatography-Mass Spectrometry) can detect substances at part-per-trillion levels. Regulatory limits for many contaminants are set in ppb: arsenic in drinking water (10 ppb maximum), mercury in fish (100-500 ppb limit), and lead in children's products (90 ppb limit in the EU). These stringent standards reflect our improved understanding of toxicology and enhanced analytical capabilities.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">The Formula</h2>
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-indigo-700">ppb = (mass_solute / mass_solution) × 10⁹</p>
          </div>
          <p className="text-gray-700 mb-4">Calculate ultra-trace concentrations for environmental, pharmaceutical, and toxicological applications.</p>
          
          <div className="mt-4 space-y-3">
            <div className="flex items-start">
              <span className="font-semibold text-gray-800 min-w-[140px]">mass_solute:</span>
              <span className="text-gray-700">Mass of dissolved substance (typically in micrograms, μg)</span>
            </div>
            <div className="flex items-start">
              <span className="font-semibold text-gray-800 min-w-[140px]">mass_solution:</span>
              <span className="text-gray-700">Total mass of solution including solute (typically in grams or kilograms)</span>
            </div>
            <div className="flex items-start">
              <span className="font-semibold text-gray-800 min-w-[140px]">ppb:</span>
              <span className="text-gray-700">Parts per billion (dimensionless ratio)</span>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
            <h3 className="font-semibold text-blue-900 mb-2">Common Equivalents (for aqueous solutions, ρ ≈ 1 g/mL):</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>1 ppb ≈ 1 μg/L (microgram per liter)</li>
              <li>1 ppb ≈ 1 ng/mL (nanogram per milliliter)</li>
              <li>1 ppb = 0.001 ppm (parts per million)</li>
              <li>1000 ppb = 1 ppm</li>
            </ul>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Step-by-Step Example</h2>
          <p className="text-gray-700 mb-3"><strong>Problem:</strong> Calculate the arsenic concentration in drinking water sample</p>
          <p className="text-gray-700 mb-4"><strong>Given:</strong> 3.0 μg of arsenic dissolved in 1.5 L of water. Assume water density = 1.00 g/mL.</p>
          
          <div className="bg-gray-50 p-4 rounded mb-4">
            <p className="font-semibold text-gray-800 mb-2">Step 1: Convert Solution Volume to Mass</p>
            <p className="text-gray-700">Volume = 1.5 L = 1500 mL</p>
            <p className="text-gray-700">Mass = 1500 mL × 1.00 g/mL = 1500 g</p>
          </div>

          <div className="bg-gray-50 p-4 rounded mb-4">
            <p className="font-semibold text-gray-800 mb-2">Step 2: Convert Solute to Grams</p>
            <p className="text-gray-700">Mass of arsenic = 3.0 μg = 3.0 × 10⁻⁶ g</p>
          </div>

          <div className="bg-gray-50 p-4 rounded mb-4">
            <p className="font-semibold text-gray-800 mb-2">Step 3: Apply PPB Formula</p>
            <p className="text-gray-700">ppb = (mass_solute / mass_solution) × 10⁹</p>
            <p className="text-gray-700">ppb = (3.0 × 10⁻⁶ g / 1500 g) × 10⁹</p>
            <p className="text-gray-700">ppb = 2.0 × 10⁻⁹ × 10⁹ = 2.0 ppb</p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: 2.0 ppb arsenic</p>
            <p className="text-sm text-gray-600 mt-1">This is below the EPA maximum contaminant level of 10 ppb for arsenic in drinking water.</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Key Applications</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Environmental Monitoring</h3>
            <p className="text-gray-700">
              Regulatory agencies use ppb measurements to monitor toxic metals (arsenic, mercury, lead) in drinking water, pesticide residues in groundwater, and air pollutants. Even at ppb levels, many substances can bioaccumulate in food chains, making accurate detection essential for public health protection.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Pharmaceutical Quality Control</h3>
            <p className="text-gray-700">
              Drug manufacturers must ensure that impurities, residual solvents, and degradation products remain below ppb-level limits specified by pharmacopeias. ICH guidelines set strict limits for elemental impurities and genotoxic impurities, often in the low ppb range, requiring sophisticated analytical methods.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">3. Food Safety Testing</h3>
            <p className="text-gray-700">
              Food safety laboratories measure pesticide residues, mycotoxins, and heavy metals in ppb to ensure products meet international standards. For example, aflatoxin B1, a potent carcinogen, has maximum limits of 2-5 ppb in various food products depending on the country.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">4. Clinical and Forensic Toxicology</h3>
            <p className="text-gray-700">
              Medical laboratories detect drugs of abuse, therapeutic drug monitoring, and poisoning cases often require ppb-level sensitivity. Blood lead levels in children are monitored at ppb concentrations, as even low exposures can affect cognitive development.
            </p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Regulatory Limits Comparison</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">Substance</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Matrix</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Regulatory Limit (ppb)</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Agency</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Arsenic</td>
                  <td className="border border-gray-300 px-4 py-2">Drinking water</td>
                  <td className="border border-gray-300 px-4 py-2">10</td>
                  <td className="border border-gray-300 px-4 py-2">US EPA</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Lead</td>
                  <td className="border border-gray-300 px-4 py-2">Drinking water</td>
                  <td className="border border-gray-300 px-4 py-2">15</td>
                  <td className="border border-gray-300 px-4 py-2">US EPA</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Mercury</td>
                  <td className="border border-gray-300 px-4 py-2">Drinking water</td>
                  <td className="border border-gray-300 px-4 py-2">2</td>
                  <td className="border border-gray-300 px-4 py-2">US EPA</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Glyphosate</td>
                  <td className="border border-gray-300 px-4 py-2">Drinking water</td>
                  <td className="border border-gray-300 px-4 py-2">700</td>
                  <td className="border border-gray-300 px-4 py-2">US EPA</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Mercury</td>
                  <td className="border border-gray-300 px-4 py-2">Fish tissue</td>
                  <td className="border border-gray-300 px-4 py-2">300-500</td>
                  <td className="border border-gray-300 px-4 py-2">FDA</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Mistakes to Avoid</h2>
          <div className="space-y-4">
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="font-semibold text-red-900 mb-2">Mistake 1: Unit Conversion Errors</h3>
              <p className="text-gray-700">Always convert all masses to consistent units before calculation. Mixing micrograms, milligrams, and grams without proper conversion leads to errors by factors of 1000. Double-check your conversions: 1 μg = 10⁻⁶ g.</p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="font-semibold text-red-900 mb-2">Mistake 2: Incorrect Density Assumptions</h3>
              <p className="text-gray-700">The simplification ppb ≈ μg/L only works when density is near 1 g/mL. For seawater (ρ ≈ 1.025 g/mL), organic solvents, or concentrated solutions, you must measure or look up actual density values.</p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="font-semibold text-red-900 mb-2">Mistake 3: Confusing PPB with PPM</h3>
              <p className="text-gray-700">Remember: 1 ppm = 1000 ppb. A concentration of 5 ppb is NOT the same as 5 ppm—it's 1000 times smaller! Always verify which unit is being used in regulations and analysis reports.</p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="font-semibold text-red-900 mb-2">Mistake 4: Gas vs. Liquid PPB</h3>
              <p className="text-gray-700">For gases, ppb often refers to volume ratio (ppbv), while for liquids it typically refers to mass ratio (ppbm or ppbw). Always clarify which type is being used to avoid confusion and miscalculation.</p>
            </div>
          </div>
        </section>
      
      {/* Structured Data - EducationalArticle */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": "Ppb Formula",
            "description": "Ppb Formula on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/ppb-formula",
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
                "name": "Ppb Formula",
                "item": "https://chemsolved.com/chemistry-formulas/ppb-formula"
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
