import CrudeProteinCalculator from '@/components/calculators/CrudeProteinCalculator';
import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Crude Protein Calculator | Kjeldahl Method | Nitrogen to Protein Conversion',
  description: 'Calculate crude protein content from nitrogen percentage using the Kjeldahl method. Convert nitrogen to protein with specific factors for different food types.',
  keywords: 'crude protein calculator, Kjeldahl method, nitrogen to protein, protein analysis, food analysis, feed analysis, protein content, nitrogen factor, agricultural chemistry',
  alternates: {
    canonical: 'https://chemsolved.com/organic-chemistry-calculators/crude-protein-calculator',
  },
};

export default function CrudeProteinPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm animate-fade-in">
          <Link 
            href="/" 
            className="text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
          >
            Home
          </Link>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <Link 
            href="/organic-chemistry-calculators" 
            className="text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
          >
            Organic Chemistry Calculators
          </Link>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-gray-500 dark:text-gray-400">Crude Protein Calculator</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-6 mb-4 animate-fade-in">
          Crude Protein Calculator
        </h1>

        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in animation-delay-100">
          Calculate crude protein content from nitrogen percentage using the Kjeldahl method
        </p>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Calculator Section */}
          <div className="lg:col-span-2 space-y-8">
            <CrudeProteinCalculator />

            {/* Educational Content */}
            <div className="space-y-6">
              {/* What is Crude Protein */}
              <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                  What is Crude Protein?
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Crude protein is an estimate of the <strong>total protein content</strong> in food, feed, or 
                  biological samples based on total nitrogen analysis. The term "crude" indicates that the method 
                  measures all nitrogen-containing compounds, not just true proteins, including amino acids, nucleic 
                  acids, and other nitrogenous compounds.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  The <strong>Kjeldahl method</strong>, developed in 1883, remains the official method for protein 
                  analysis in food and feed industries worldwide. It's based on the assumption that proteins contain 
                  approximately 16% nitrogen, leading to the standard conversion factor of 6.25 (100/16 = 6.25).
                </p>
              </section>

              {/* Kjeldahl Method */}
              <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                  The Kjeldahl Method
                </h2>

                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-800">
                    <h3 className="font-bold text-lg text-amber-800 dark:text-amber-300 mb-3">
                      Step 1: Digestion
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      Sample is heated with concentrated H₂SO₄ and catalyst (CuSO₄ or Se) at 300-400°C:
                    </p>
                    <p className="font-mono text-sm bg-white dark:bg-gray-800 p-3 rounded">
                      Organic-N + H₂SO₄ → (NH₄)₂SO₄ + CO₂ + H₂O
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      All organic nitrogen is converted to ammonium sulfate
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                    <h3 className="font-bold text-lg text-blue-800 dark:text-blue-300 mb-3">
                      Step 2: Distillation
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      Add excess NaOH to make solution alkaline and distill released ammonia:
                    </p>
                    <p className="font-mono text-sm bg-white dark:bg-gray-800 p-3 rounded">
                      (NH₄)₂SO₄ + 2NaOH → 2NH₃ + Na₂SO₄ + 2H₂O
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      Ammonia is captured in boric acid or standard acid solution
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                    <h3 className="font-bold text-lg text-green-800 dark:text-green-300 mb-3">
                      Step 3: Titration
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      Titrate with standard acid (if using boric acid) or back-titrate with standard base:
                    </p>
                    <p className="font-mono text-sm bg-white dark:bg-gray-800 p-3 rounded">
                      NH₃ + H⁺ → NH₄⁺
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      Calculate nitrogen content from titration volume
                    </p>
                  </div>
                </div>
              </section>

              {/* Conversion Factors */}
              <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                  Conversion Factors by Food Type
                </h2>

                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Different foods have different nitrogen contents in their proteins. Using specific conversion 
                  factors improves accuracy:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-700">
                        <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Food Type</th>
                        <th className="border border-gray-300 dark:border-gray-600 p-3 text-center">Factor</th>
                        <th className="border border-gray-300 dark:border-gray-600 p-3 text-center">%N in Protein</th>
                        <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Reason</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700 dark:text-gray-300">
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">General Foods</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">6.25</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">16.0%</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">Average protein composition</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-700/50">
                        <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">Wheat/Flour</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">5.70</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">17.5%</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">High glutenin and gliadin content</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">Milk/Dairy</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">6.38</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">15.7%</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">Casein and whey proteins</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-700/50">
                        <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">Rice</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">5.95</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">16.8%</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">Oryzenin composition</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">Soy Products</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">5.71</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">17.5%</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">Glycinin and conglycinin</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-700/50">
                        <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">Meat/Fish</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">6.25</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">16.0%</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">Muscle proteins (actin, myosin)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">Gelatin</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">5.55</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">18.0%</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">High glycine content (collagen)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Note:</strong> The factor 6.25 (100/16) assumes 16% nitrogen in protein. Different 
                    proteins have different amino acid compositions, leading to different nitrogen contents. Using 
                    specific factors improves accuracy for protein quantification.
                  </p>
                </div>
              </section>

              {/* Practical Example */}
              <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                  Practical Example: Wheat Flour Analysis
                </h2>

                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-800">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    <strong>Problem:</strong> A wheat flour sample is analyzed by the Kjeldahl method and found 
                    to contain 2.28% nitrogen. Calculate the crude protein content using the appropriate conversion 
                    factor.
                  </p>

                  <div className="space-y-4 mt-6">
                    <div>
                      <p className="font-semibold mb-2">Step 1: Identify the appropriate factor</p>
                      <p className="text-gray-700 dark:text-gray-300">
                        For wheat and flour products, the conversion factor is <strong>5.70</strong> (not the 
                        general 6.25)
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold mb-2">Step 2: Apply the formula</p>
                      <p className="font-mono text-sm">Crude Protein (%) = Nitrogen (%) × Conversion Factor</p>
                      <p className="font-mono text-sm">Crude Protein (%) = 2.28 × 5.70</p>
                    </div>

                    <div className="mt-6 p-4 bg-green-100 dark:bg-green-900/30 rounded-lg border-2 border-green-500">
                      <p className="text-xl font-bold text-green-800 dark:text-green-300 text-center">
                        Crude Protein = 13.0%
                      </p>
                      <p className="text-sm text-center text-gray-700 dark:text-gray-300 mt-2">
                        This is typical for all-purpose wheat flour
                      </p>
                    </div>

                    <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <p className="text-sm font-semibold mb-2">Comparison:</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        • Using factor 5.70 (correct): 2.28 × 5.70 = <strong>13.0%</strong><br/>
                        • Using factor 6.25 (general): 2.28 × 6.25 = <strong>14.3%</strong><br/>
                        • Difference: 1.3% (10% relative error!)
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Applications */}
              <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                  Applications
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                    <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">
                      🌾 Food Industry
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Quality control, nutritional labeling, product specification verification, and regulatory 
                      compliance in food manufacturing.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
                    <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2">
                      🐄 Animal Feed Analysis
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Determine protein content in feed formulations, ensure nutritional adequacy, and optimize 
                      feed costs in agriculture.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">
                      📊 Nutritional Research
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Study protein content in novel foods, develop dietary recommendations, and assess nutritional 
                      value of food products.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                    <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2">
                      🔬 Agricultural Testing
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Soil analysis, crop quality assessment, fertilizer optimization, and agricultural product 
                      evaluation.
                    </p>
                  </div>
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
                  Common Factors
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded">
                    <span>General</span>
                    <span className="font-bold">6.25</span>
                  </div>
                  <div className="flex justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded">
                    <span>Wheat</span>
                    <span className="font-bold">5.70</span>
                  </div>
                  <div className="flex justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded">
                    <span>Milk</span>
                    <span className="font-bold">6.38</span>
                  </div>
                  <div className="flex justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded">
                    <span>Rice</span>
                    <span className="font-bold">5.95</span>
                  </div>
                  <div className="flex justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded">
                    <span>Soy</span>
                    <span className="font-bold">5.71</span>
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
                    href="/organic-chemistry-calculators/chemical-oxygen-demand-calculator"
                    className="block p-3 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg hover:shadow-md transition-shadow border border-blue-200 dark:border-blue-800"
                  >
                    <p className="font-semibold text-blue-800 dark:text-blue-300 text-sm">
                      COD Analysis
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Water quality</p>
                  </Link>
                  <Link
                    href="/stoichiometry-calculators/percent-composition-calculator"
                    className="block p-3 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-lg hover:shadow-md transition-shadow border border-purple-200 dark:border-purple-800"
                  >
                    <p className="font-semibold text-purple-800 dark:text-purple-300 text-sm">
                      Percent Composition
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Element percentages</p>
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
                    <span className="text-amber-500 mt-1">•</span>
                    <span>Food testing laboratories</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span>Animal nutrition labs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span>Agricultural research</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span>Quality control departments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span>Regulatory compliance</span>
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
            "name": "Crude Protein Calculator",
            "description": "Calculate crude protein content from nitrogen percentage using the Kjeldahl method with specific conversion factors.",
            "url": "https://chemsolved.com/organic-chemistry-calculators/crude-protein-calculator",
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
                "name": "Crude Protein Calculator",
                "item": "https://chemsolved.com/organic-chemistry-calculators/crude-protein-calculator"
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
