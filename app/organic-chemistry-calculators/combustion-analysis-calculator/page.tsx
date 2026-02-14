import CombustionAnalysisCalculator from '@/components/calculators/CombustionAnalysisCalculator';
import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Combustion Analysis Calculator | Empirical Formula from Combustion Data',
  description: 'Calculate elemental composition and empirical formula from combustion analysis data. Determine percentages of C, H, N, O from CO₂, H₂O, and N₂ masses produced.',
  keywords: 'combustion analysis calculator, empirical formula calculator, elemental analysis, organic compound analysis, CO2 H2O combustion, CHN analysis, molecular formula determination',
  alternates: {
    canonical: 'https://chemsolved.com/organic-chemistry-calculators/combustion-analysis-calculator',
  },
};

export default function CombustionAnalysisPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm animate-fade-in">
          <Link 
            href="/" 
            className="text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors"
          >
            Home
          </Link>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <Link 
            href="/organic-chemistry-calculators" 
            className="text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors"
          >
            Organic Chemistry Calculators
          </Link>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-gray-500 dark:text-gray-400">Combustion Analysis</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-6 mb-4 animate-fade-in">
          Combustion Analysis Calculator
        </h1>

        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in animation-delay-100">
          Determine elemental composition and empirical formula from combustion data
        </p>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Calculator Section */}
          <div className="lg:col-span-2 space-y-8">
            <CombustionAnalysisCalculator />

            {/* Educational Content */}
            <div className="space-y-6">
              {/* What is Combustion Analysis */}
              <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                  What is Combustion Analysis?
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Combustion analysis is a <strong>classical analytical technique</strong> used to determine the 
                  elemental composition of organic compounds. The method involves burning a known mass of the 
                  compound in excess oxygen and measuring the masses of combustion products (CO₂, H₂O, and 
                  sometimes N₂).
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  This powerful technique allows chemists to calculate the <strong>empirical formula</strong> of 
                  unknown organic compounds, which is essential for structure determination in organic chemistry, 
                  pharmaceutical analysis, and materials science.
                </p>
              </section>

              {/* How It Works */}
              <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                  How Combustion Analysis Works
                </h2>

                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800">
                    <h3 className="font-bold text-lg text-orange-800 dark:text-orange-300 mb-3">
                      Step 1: Combustion Reaction
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      The organic compound is burned completely in excess O₂:
                    </p>
                    <p className="font-mono text-sm bg-white dark:bg-gray-800 p-3 rounded">
                      C<sub>x</sub>H<sub>y</sub>O<sub>z</sub>N<sub>w</sub> + O₂ → CO₂ + H₂O + N₂
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                    <h3 className="font-bold text-lg text-blue-800 dark:text-blue-300 mb-3">
                      Step 2: Product Collection
                    </h3>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• <strong>CO₂</strong> is absorbed by NaOH or Mg(ClO₄)₂ and weighed</li>
                      <li>• <strong>H₂O</strong> is absorbed by anhydrous CaCl₂ or Mg(ClO₄)₂ and weighed</li>
                      <li>• <strong>N₂</strong> (if present) is collected and measured separately</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                    <h3 className="font-bold text-lg text-green-800 dark:text-green-300 mb-3">
                      Step 3: Calculate Element Masses
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                      <li>• <strong>Carbon:</strong> mass C = (12.01/44.01) × mass CO₂</li>
                      <li>• <strong>Hydrogen:</strong> mass H = (2.016/18.015) × mass H₂O</li>
                      <li>• <strong>Nitrogen:</strong> mass N = mass N₂ (if measured)</li>
                      <li>• <strong>Oxygen:</strong> mass O = mass sample - mass C - mass H - mass N</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Formula Derivations */}
              <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                  Formula Derivations
                </h2>

                <div className="space-y-6">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                    <h3 className="font-bold text-lg mb-3">Carbon Percentage Calculation</h3>
                    <div className="space-y-2 font-mono text-sm">
                      <p>mass of C = (12.01 g/mol / 44.01 g/mol) × mass of CO₂</p>
                      <p>mass of C = 0.2729 × mass of CO₂</p>
                      <p className="mt-3 text-blue-700 dark:text-blue-300">
                        %C = (mass of C / mass of sample) × 100
                      </p>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
                      Molar mass ratio: 12.01 g C per 44.01 g CO₂
                    </p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                    <h3 className="font-bold text-lg mb-3">Hydrogen Percentage Calculation</h3>
                    <div className="space-y-2 font-mono text-sm">
                      <p>mass of H = (2.016 g/mol / 18.015 g/mol) × mass of H₂O</p>
                      <p>mass of H = 0.1119 × mass of H₂O</p>
                      <p className="mt-3 text-green-700 dark:text-green-300">
                        %H = (mass of H / mass of sample) × 100
                      </p>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
                      Molar mass ratio: 2.016 g H per 18.015 g H₂O
                    </p>
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
                    <h3 className="font-bold text-lg mb-3">Oxygen by Difference</h3>
                    <div className="space-y-2 font-mono text-sm">
                      <p>mass of O = mass sample - mass C - mass H - mass N</p>
                      <p className="mt-3 text-purple-700 dark:text-purple-300">
                        %O = (mass of O / mass of sample) × 100
                      </p>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
                      Oxygen is calculated by difference since it's not directly measured
                    </p>
                  </div>
                </div>
              </section>

              {/* Detailed Examples */}
              <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                  Detailed Example: Glucose Analysis
                </h2>

                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-800">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    <strong>Problem:</strong> A 1.50 mg sample of an unknown carbohydrate produces 2.20 mg CO₂ 
                    and 0.90 mg H₂O upon complete combustion. No nitrogen is detected. Determine the empirical formula.
                  </p>

                  <div className="space-y-4 mt-6">
                    <div>
                      <p className="font-semibold mb-2">Step 1: Calculate mass of carbon</p>
                      <p className="font-mono text-sm">mass C = (12.01/44.01) × 2.20 mg = 0.600 mg</p>
                      <p className="font-mono text-sm">%C = (0.600/1.50) × 100 = 40.0%</p>
                    </div>

                    <div>
                      <p className="font-semibold mb-2">Step 2: Calculate mass of hydrogen</p>
                      <p className="font-mono text-sm">mass H = (2.016/18.015) × 0.90 mg = 0.101 mg</p>
                      <p className="font-mono text-sm">%H = (0.101/1.50) × 100 = 6.7%</p>
                    </div>

                    <div>
                      <p className="font-semibold mb-2">Step 3: Calculate mass of oxygen (by difference)</p>
                      <p className="font-mono text-sm">mass O = 1.50 - 0.600 - 0.101 = 0.799 mg</p>
                      <p className="font-mono text-sm">%O = (0.799/1.50) × 100 = 53.3%</p>
                    </div>

                    <div>
                      <p className="font-semibold mb-2">Step 4: Convert to moles</p>
                      <p className="font-mono text-sm">moles C = 0.600 mg / 12.01 mg/mmol = 0.0500 mmol</p>
                      <p className="font-mono text-sm">moles H = 0.101 mg / 1.008 mg/mmol = 0.100 mmol</p>
                      <p className="font-mono text-sm">moles O = 0.799 mg / 16.00 mg/mmol = 0.0499 mmol</p>
                    </div>

                    <div>
                      <p className="font-semibold mb-2">Step 5: Find mole ratios (divide by smallest)</p>
                      <p className="font-mono text-sm">C: 0.0500/0.0499 ≈ 1</p>
                      <p className="font-mono text-sm">H: 0.100/0.0499 ≈ 2</p>
                      <p className="font-mono text-sm">O: 0.0499/0.0499 ≈ 1</p>
                    </div>

                    <div className="mt-6 p-4 bg-green-100 dark:bg-green-900/30 rounded-lg border-2 border-green-500">
                      <p className="text-xl font-bold text-green-800 dark:text-green-300 text-center">
                        Empirical Formula: CH₂O
                      </p>
                      <p className="text-sm text-center text-gray-700 dark:text-gray-300 mt-2">
                        (This is the empirical formula of glucose and other simple sugars)
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Applications */}
              <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                  Applications in Chemistry
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                    <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2">
                      🔬 Organic Structure Determination
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Identify unknown organic compounds, verify synthesis products, and confirm molecular structures 
                      in research laboratories.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">
                      💊 Pharmaceutical Quality Control
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Verify drug purity, confirm active ingredient composition, and ensure batch-to-batch 
                      consistency in pharmaceutical manufacturing.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                    <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">
                      🧪 Polymer Analysis
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Characterize polymer composition, determine monomer ratios, and analyze degradation products 
                      in materials science.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                    <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-2">
                      📚 Educational Chemistry
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Teach stoichiometry, empirical formula determination, and quantitative analysis techniques 
                      in undergraduate chemistry courses.
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
                  Quick Reference
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <p className="font-semibold text-orange-800 dark:text-orange-300">Carbon from CO₂</p>
                    <p className="text-xs font-mono text-gray-600 dark:text-gray-400">m<sub>C</sub> = 0.2729 × m<sub>CO₂</sub></p>
                  </div>
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <p className="font-semibold text-blue-800 dark:text-blue-300">Hydrogen from H₂O</p>
                    <p className="text-xs font-mono text-gray-600 dark:text-gray-400">m<sub>H</sub> = 0.1119 × m<sub>H₂O</sub></p>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <p className="font-semibold text-green-800 dark:text-green-300">Oxygen by Difference</p>
                    <p className="text-xs font-mono text-gray-600 dark:text-gray-400">m<sub>O</sub> = m<sub>sample</sub> - m<sub>C</sub> - m<sub>H</sub> - m<sub>N</sub></p>
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
                    href="/stoichiometry-calculators/empirical-formula-calculator"
                    className="block p-3 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-lg hover:shadow-md transition-shadow border border-purple-200 dark:border-purple-800"
                  >
                    <p className="font-semibold text-purple-800 dark:text-purple-300 text-sm">
                      Empirical Formula
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">From percentages</p>
                  </Link>
                  <Link
                    href="/stoichiometry-calculators/molecular-formula-calculator"
                    className="block p-3 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg hover:shadow-md transition-shadow border border-blue-200 dark:border-blue-800"
                  >
                    <p className="font-semibold text-blue-800 dark:text-blue-300 text-sm">
                      Molecular Formula
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">From empirical formula</p>
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
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Organic chemistry laboratories</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Pharmaceutical R&D</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Quality control labs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>University chemistry courses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Materials characterization</span>
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
            "name": "Combustion Analysis Calculator",
            "description": "Calculate elemental composition and empirical formula from combustion analysis data of organic compounds.",
            "url": "https://chemsolved.com/organic-chemistry-calculators/combustion-analysis-calculator",
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
                "name": "Combustion Analysis",
                "item": "https://chemsolved.com/organic-chemistry-calculators/combustion-analysis-calculator"
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
