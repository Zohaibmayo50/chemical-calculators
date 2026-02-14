import ChemicalOxygenDemandCalculator from '@/components/calculators/ChemicalOxygenDemandCalculator';
import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Chemical Oxygen Demand (COD) Calculator | Water Quality Analysis',
  description: 'Calculate COD levels in water samples using titration data. Measure organic pollution, assess water quality, and determine treatment requirements for wastewater analysis.',
  keywords: 'chemical oxygen demand calculator, COD calculator, water quality, organic pollution, wastewater analysis, titration, water treatment, environmental chemistry, pollution measurement',
  alternates: {
    canonical: 'https://chemsolved.com/organic-chemistry-calculators/chemical-oxygen-demand-calculator',
  },
};

export default function ChemicalOxygenDemandPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <ol className="flex flex-wrap items-center gap-2 text-gray-600 dark:text-gray-400">
            <li><Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link></li>
            <li>/</li>
            <li><Link href="/organic-chemistry-calculators" className="hover:text-blue-600 dark:hover:text-blue-400">Organic Chemistry Calculators</Link></li>
            <li>/</li>
            <li className="text-blue-600 dark:text-blue-400 font-semibold">COD Calculator</li>
          </ol>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-6 mb-4">
          Chemical Oxygen Demand (COD) Calculator
        </h1>

        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Calculate COD levels in water samples for water quality analysis and wastewater treatment
        </p>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Calculator Section */}
          <div className="lg:col-span-2 space-y-8">
            <ChemicalOxygenDemandCalculator />

            {/* Educational Content */}
            <div className="space-y-6">
              {/* What is COD */}
              <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                  What is Chemical Oxygen Demand (COD)?
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Chemical Oxygen Demand (COD) is a critical water quality parameter that measures the amount of 
                  oxygen required to chemically oxidize organic and inorganic matter in water. It's a key indicator 
                  of <strong>organic pollution</strong> and is widely used in wastewater treatment, environmental 
                  monitoring, and industrial discharge analysis.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Unlike BOD (Biological Oxygen Demand), which measures biodegradable organics only, COD measures 
                  both biodegradable and non-biodegradable organic matter, providing a more comprehensive assessment 
                  of water contamination.
                </p>
              </section>

              {/* Formula Section */}
              <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                  COD Calculation Formula
                </h2>
                
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-xl mb-6">
                  <p className="font-bold text-lg mb-2">Primary Formula:</p>
                  <p className="text-xl font-mono mb-4">
                    COD (mg/L) = [(V<sub>blank</sub> - V<sub>sample</sub>) × M × 8000] / V<sub>sample</sub>
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-4">Where:</p>
                  <ul className="space-y-2 mt-2 text-gray-700 dark:text-gray-300">
                    <li><strong>V<sub>blank</sub></strong> = Volume of titrant for blank (mL)</li>
                    <li><strong>V<sub>sample</sub></strong> = Volume of titrant for sample (mL)</li>
                    <li><strong>M</strong> = Molarity of oxidizing agent (typically K₂Cr₂O₇)</li>
                    <li><strong>8000</strong> = Conversion factor (1000 mg/g × 8 g O₂/mole)</li>
                    <li><strong>V<sub>sample</sub></strong> = Volume of sample analyzed (mL)</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">⚗️ Standard Method:</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    The dichromate reflux method is the most common COD test. It uses potassium dichromate (K₂Cr₂O₇) 
                    as the oxidizing agent in acidic conditions at high temperature. Excess dichromate is titrated 
                    with ferrous ammonium sulfate (FAS).
                  </p>
                </div>
              </section>

              {/* Practical Examples */}
              <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                  Practical Examples
                </h2>

                <div className="space-y-6">
                  {/* Example 1 */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-300 mb-3">
                      Example 1: Municipal Wastewater
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      <strong>Given:</strong><br/>
                      • Sample volume = 25 mL<br/>
                      • Blank titration = 10.5 mL<br/>
                      • Sample titration = 8.2 mL<br/>
                      • FAS molarity = 0.025 M
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      <strong>Calculation:</strong><br/>
                      COD = [(10.5 - 8.2) × 0.025 × 8000] / 25<br/>
                      COD = [2.3 × 0.025 × 8000] / 25<br/>
                      COD = 460 / 25 = <strong>18.4 mg/L</strong>
                    </p>
                    <p className="text-sm text-blue-700 dark:text-blue-300 font-semibold">
                      ✓ This indicates clean water with minimal organic pollution
                    </p>
                  </div>

                  {/* Example 2 */}
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800">
                    <h3 className="text-xl font-bold text-orange-800 dark:text-orange-300 mb-3">
                      Example 2: Industrial Effluent
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      <strong>Given:</strong><br/>
                      • Sample volume = 10 mL<br/>
                      • Blank titration = 12.0 mL<br/>
                      • Sample titration = 3.5 mL<br/>
                      • FAS molarity = 0.025 M
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      <strong>Calculation:</strong><br/>
                      COD = [(12.0 - 3.5) × 0.025 × 8000] / 10<br/>
                      COD = [8.5 × 0.025 × 8000] / 10<br/>
                      COD = 1700 / 10 = <strong>170 mg/L</strong>
                    </p>
                    <p className="text-sm text-orange-700 dark:text-orange-300 font-semibold">
                      ⚠️ High pollution level - treatment required before discharge
                    </p>
                  </div>
                </div>
              </section>

              {/* Applications */}
              <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                  Applications of COD Analysis
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                    <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">
                      🏭 Wastewater Treatment
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Monitor treatment efficiency, ensure regulatory compliance, and optimize process control in 
                      municipal and industrial wastewater facilities.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">
                      🌊 Water Quality Monitoring
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Assess surface water and groundwater quality, detect pollution sources, and evaluate 
                      environmental impacts of industrial activities.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                    <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2">
                      📊 Regulatory Compliance
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Meet EPA discharge limits, verify treatment effectiveness, and document environmental 
                      performance for permits and audits.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
                    <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2">
                      🔬 Process Optimization
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Determine optimal treatment conditions, evaluate new processes, and troubleshoot operational 
                      issues in water treatment systems.
                    </p>
                  </div>
                </div>
              </section>

              {/* COD vs BOD */}
              <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                  COD vs BOD: Understanding the Difference
                </h2>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-700">
                        <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Parameter</th>
                        <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">COD</th>
                        <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">BOD</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700 dark:text-gray-300">
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">Test Duration</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">2-3 hours</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">5 days (BOD₅)</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-700/50">
                        <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">Method</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">Chemical oxidation</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">Biological oxidation</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">Measures</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">All oxidizable matter</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">Biodegradable organics only</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-700/50">
                        <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">Typical Value</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">Higher than BOD</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">Lower than COD</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">Advantages</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">Fast, reproducible</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">Environmental relevance</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Typical COD/BOD Ratio:</strong> For municipal wastewater, the COD/BOD ratio is usually 
                    1.5-2.5. A higher ratio indicates more non-biodegradable organic matter.
                  </p>
                </div>
              </section>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Quick Reference */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                  Quick Reference
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <p className="font-semibold text-blue-800 dark:text-blue-300">Clean Water</p>
                    <p className="text-gray-600 dark:text-gray-400">&lt; 20 mg/L COD</p>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <p className="font-semibold text-green-800 dark:text-green-300">Good Quality</p>
                    <p className="text-gray-600 dark:text-gray-400">20-40 mg/L COD</p>
                  </div>
                  <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                    <p className="font-semibold text-yellow-800 dark:text-yellow-300">Moderate</p>
                    <p className="text-gray-600 dark:text-gray-400">40-80 mg/L COD</p>
                  </div>
                  <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <p className="font-semibold text-orange-800 dark:text-orange-300">High Pollution</p>
                    <p className="text-gray-600 dark:text-gray-400">80-200 mg/L COD</p>
                  </div>
                  <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                    <p className="font-semibold text-red-800 dark:text-red-300">Severe</p>
                    <p className="text-gray-600 dark:text-gray-400">&gt; 200 mg/L COD</p>
                  </div>
                </div>
              </div>

              {/* Related Calculators */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                  Related Calculators
                </h3>
                <div className="space-y-3">
                  <Link
                    href="/organic-chemistry-calculators/combustion-analysis-calculator"
                    className="block p-3 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg hover:shadow-md transition-shadow border border-orange-200 dark:border-orange-800"
                  >
                    <p className="font-semibold text-orange-800 dark:text-orange-300 text-sm">
                      Combustion Analysis
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Elemental composition</p>
                  </Link>
                  <Link
                    href="/organic-chemistry-calculators/crude-protein-calculator"
                    className="block p-3 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-lg hover:shadow-md transition-shadow border border-amber-200 dark:border-amber-800"
                  >
                    <p className="font-semibold text-amber-800 dark:text-amber-300 text-sm">
                      Crude Protein
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Kjeldahl method</p>
                  </Link>
                  <Link
                    href="/stoichiometry-calculators/combustion-calculator"
                    className="block p-3 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-lg hover:shadow-md transition-shadow border border-red-200 dark:border-red-800"
                  >
                    <p className="font-semibold text-red-800 dark:text-red-300 text-sm">
                      Combustion Reactions
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Balance equations</p>
                  </Link>
                </div>
              </div>

              {/* Where It's Used */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                  Where It's Used
                </h3>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Environmental laboratories</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Wastewater treatment plants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Industrial discharge monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Water quality research</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Regulatory compliance testing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Chemical Oxygen Demand (COD) Calculator",
            "description": "Calculate COD levels in water samples using titration data for water quality analysis and pollution assessment.",
            "url": "https://chemsolved.com/organic-chemistry-calculators/chemical-oxygen-demand-calculator",
            "applicationCategory": "EducationalApplication",
            "operatingSystem": "All",
            "permissions": "browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "creator": {
              "@type": "Organization",
              "name": "ChemSolved"
            }
          })
        }}
      />
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
                "name": "Organic Chemistry Calculators",
                "item": "https://chemsolved.com/organic-chemistry-calculators"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "COD Calculator",
                "item": "https://chemsolved.com/organic-chemistry-calculators/chemical-oxygen-demand-calculator"
              }
            ]
          })
        }}
      />
      </main>
      <Footer />
    </>
  );
}
