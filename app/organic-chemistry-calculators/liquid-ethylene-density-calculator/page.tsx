import LiquidEthyleneDensityCalculator from '@/components/calculators/LiquidEthyleneDensityCalculator';
import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Liquid Ethylene Density Calculator | C₂H₄ Density at Temperature',
  description: 'Calculate density of liquid ethylene (C₂H₄) at different temperatures and pressures. Essential for cryogenic applications and polymer production.',
  keywords: 'ethylene density calculator, liquid ethylene, C2H4 density, cryogenic liquids, ethylene properties, polymer production, petrochemical calculations',
  alternates: {
    canonical: 'https://chemsolved.com/organic-chemistry-calculators/liquid-ethylene-density-calculator',
  },
};

export default function LiquidEthyleneDensityPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm animate-fade-in">
          <Link 
            href="/" 
            className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
          >
            Home
          </Link>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <Link 
            href="/organic-chemistry-calculators" 
            className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
          >
            Organic Chemistry Calculators
          </Link>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-gray-500 dark:text-gray-400">Liquid Ethylene Density</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-6 mb-4 animate-fade-in">
          Liquid Ethylene Density Calculator
        </h1>

        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in animation-delay-100">
          Calculate density of liquid ethylene (C₂H₄) at different temperatures
        </p>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Calculator Section */}
          <div className="lg:col-span-2 space-y-8">
            <LiquidEthyleneDensityCalculator />

            {/* Educational Content */}
            <div className="space-y-6">
              {/* What is Liquid Ethylene */}
              <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                  Liquid Ethylene Properties
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  <strong>Ethylene (C₂H₄)</strong> is the simplest alkene and one of the most important industrial 
                  chemicals. In its liquid form, ethylene exists at cryogenic temperatures below -103.7°C (boiling 
                  point at 1 atm). Understanding its density is crucial for storage, transport, and use in polyethylene 
                  production.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Liquid ethylene is extensively used in the petrochemical industry, with global production exceeding 
                  200 million tonnes annually. It's the primary feedstock for polyethylene plastics, which account 
                  for about 30% of all plastics production worldwide.
                </p>
              </section>

              {/* Physical Properties */}
              <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                  Physical Properties of Ethylene
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-4 rounded-xl border border-cyan-200 dark:border-cyan-800">
                    <p className="font-semibold text-cyan-800 dark:text-cyan-300 mb-2">Molecular Formula</p>
                    <p className="text-2xl font-bold text-gray-800 dark:text-white">C₂H₄</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">H₂C=CH₂ (double bond)</p>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
                    <p className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Molar Mass</p>
                    <p className="text-2xl font-bold text-gray-800 dark:text-white">28.05 g/mol</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">C: 24.02, H: 4.03</p>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-xl border border-purple-200 dark:border-purple-800">
                    <p className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Boiling Point</p>
                    <p className="text-2xl font-bold text-gray-800 dark:text-white">-103.7°C</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">169.5 K at 1 atm</p>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-xl border border-green-200 dark:border-green-800">
                    <p className="font-semibold text-green-800 dark:text-green-300 mb-2">Melting Point</p>
                    <p className="text-2xl font-bold text-gray-800 dark:text-white">-169.2°C</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">103.9 K</p>
                  </div>

                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 p-4 rounded-xl border border-orange-200 dark:border-orange-800">
                    <p className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Critical Temperature</p>
                    <p className="text-2xl font-bold text-gray-800 dark:text-white">9.2°C</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">282.3 K</p>
                  </div>

                  <div className="bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 p-4 rounded-xl border border-red-200 dark:border-red-800">
                    <p className="font-semibold text-red-800 dark:text-red-300 mb-2">Critical Pressure</p>
                    <p className="text-2xl font-bold text-gray-800 dark:text-white">50.4 bar</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">5.04 MPa</p>
                  </div>
                </div>
              </section>

              {/* Density Calculation Method */}
              <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                  Density Calculation Method
                </h2>

                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-cyan-200 dark:border-cyan-800 mb-6">
                  <p className="font-bold text-lg mb-3">Modified Rackett Equation:</p>
                  <p className="font-mono text-lg mb-4">
                    ρ = ρ₀ × [1 + α(T - T₀)] × [1 + β(P - P₀)]
                  </p>
                  <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <p><strong>ρ</strong> = Density at temperature T and pressure P (kg/m³)</p>
                    <p><strong>ρ₀</strong> = Reference density at T₀ = 566 kg/m³ at -169°C</p>
                    <p><strong>α</strong> = Thermal expansion coefficient = -0.0045 K⁻¹</p>
                    <p><strong>β</strong> = Isothermal compressibility = 0.0001 bar⁻¹</p>
                    <p><strong>T₀</strong> = Reference temperature = -169°C (near triple point)</p>
                    <p><strong>P₀</strong> = Reference pressure = 1.013 bar (1 atm)</p>
                  </div>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">⚠️ Important Notes:</p>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Valid range: -169°C to -100°C (liquid phase only)</li>
                    <li>• Above -103.7°C: Ethylene is gaseous at 1 atm</li>
                    <li>• Below -169.2°C: Ethylene is solid</li>
                    <li>• Pressure corrections are small for liquids (~0.01%/bar)</li>
                  </ul>
                </div>
              </section>

              {/* Applications */}
              <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                  Industrial Applications
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">
                      🏭 Polyethylene Production
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Primary feedstock for HDPE, LDPE, and LLDPE plastics. Density calculations are critical for 
                      reactor design and process optimization.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                    <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">
                      ❄️ Cryogenic Storage
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Design of storage tanks, transfer systems, and safety equipment requires accurate density 
                      data at operating temperatures.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                    <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2">
                      🚢 Transport & Logistics
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Calculate cargo volumes, shipping weights, and optimize transport economics for LNG carriers 
                      and cryogenic tankers.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                    <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-2">
                      🔬 Process Engineering
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Design heat exchangers, pumps, and piping systems. Accurate density is essential for 
                      pressure drop calculations and equipment sizing.
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
                  Density at Key Temps
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg">
                    <p className="font-semibold text-cyan-800 dark:text-cyan-300">At -169°C</p>
                    <p className="text-gray-600 dark:text-gray-400">~566 kg/m³</p>
                  </div>
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <p className="font-semibold text-blue-800 dark:text-blue-300">At -140°C</p>
                    <p className="text-gray-600 dark:text-gray-400">~490 kg/m³</p>
                  </div>
                  <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                    <p className="font-semibold text-indigo-800 dark:text-indigo-300">At -104°C</p>
                    <p className="text-gray-600 dark:text-gray-400">~430 kg/m³</p>
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
                    href="/organic-chemistry-calculators/degree-unsaturation-calculator"
                    className="block p-3 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-lg hover:shadow-md transition-shadow border border-purple-200 dark:border-purple-800"
                  >
                    <p className="font-semibold text-purple-800 dark:text-purple-300 text-sm">
                      Degree of Unsaturation
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Calculate DBE</p>
                  </Link>
                  <Link
                    href="/stoichiometry-calculators/combustion-calculator"
                    className="block p-3 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-lg hover:shadow-md transition-shadow border border-red-200 dark:border-red-800"
                  >
                    <p className="font-semibold text-red-800 dark:text-red-300 text-sm">
                      Combustion Reactions
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Balance equations</p>
                  </Link>
                  <Link
                    href="/stoichiometry-calculators/ideal-gas-law-calculator"
                    className="block p-3 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg hover:shadow-md transition-shadow border border-green-200 dark:border-green-800"
                  >
                    <p className="font-semibold text-green-800 dark:text-green-300 text-sm">
                      Ideal Gas Law
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">PV = nRT</p>
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
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>Petrochemical plants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>Polymer manufacturing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>Cryogenic engineering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>Process design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>Safety engineering</span>
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
            "name": "Liquid Ethylene Density Calculator",
            "description": "Calculate density of liquid ethylene at different temperatures and pressures for industrial applications.",
            "url": "https://chemsolved.com/organic-chemistry-calculators/liquid-ethylene-density-calculator",
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
                "name": "Liquid Ethylene Density",
                "item": "https://chemsolved.com/organic-chemistry-calculators/liquid-ethylene-density-calculator"
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
