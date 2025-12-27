import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FreezingPointDepressionCalculator from '@/components/calculators/FreezingPointDepressionCalculator';

export const metadata: Metadata = {
  title: 'Freezing Point Depression Calculator | Calculate ΔTf from Molality',
  description: 'Calculate freezing point depression (ΔTf) using molality and Kf constant. Free online calculator for colligative properties and antifreeze solutions.',
  keywords: ['freezing point depression', 'colligative properties', 'molality', 'Kf constant', 'cryoscopic constant', 'antifreeze', 'solution chemistry'],
  alternates: {
    canonical: 'https://chemsolved.com/thermodynamics-calculators/freezing-point-depression-calculator',
  },
};

export default function FreezingPointDepressionCalculatorPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <nav className="flex items-center gap-2 text-sm mb-6 animate-fade-in">
            <Link href="/" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
              Chemistry Calculators
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/thermodynamics-calculators" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
              Thermodynamics Calculators
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-600 dark:text-gray-300">Freezing Point Depression Calculator</span>
          </nav>
        </div>

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Calculator */}
            <div className="lg:col-span-2">
              {/* H1 Title */}
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-up">
                Freezing Point Depression Calculator
              </h1>

              {/* Calculator Tool */}
              <div className="animate-slide-in-up" style={{ animationDelay: '100ms' }}>
                <FreezingPointDepressionCalculator />
              </div>

          {/* Educational Content */}
          <div className="space-y-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mt-8">
            {/* What It Does Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                What This Calculator Does
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The <strong>Freezing Point Depression Calculator</strong> calculates how much a solvent's freezing point decreases when a solute is dissolved in it. This is a colligative property, meaning it depends on the number of dissolved particles, not their chemical identity.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                When you add antifreeze to water, salt to ice, or any solute to a solvent, the freezing point drops. This calculator uses the formula <strong>ΔTf = Kf × m × i</strong> to calculate this depression, where:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li><strong>ΔTf</strong> - Freezing point depression (temperature decrease in °C or K)</li>
                <li><strong>Kf</strong> - Cryoscopic constant (specific to each solvent)</li>
                <li><strong>m</strong> - Molality of the solution (mol solute/kg solvent)</li>
                <li><strong>i</strong> - Van't Hoff factor (number of particles per formula unit)</li>
              </ul>
            </section>

            {/* Formula & Method */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Formula & Calculation Method
              </h2>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Core Formula</h3>
                <div className="text-center text-2xl font-bold text-primary-600 dark:text-primary-400 mb-4">
                  ΔTf = Kf × m × i
                </div>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Where:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>ΔTf = Freezing point depression (°C)</li>
                    <li>Kf = Cryoscopic constant (°C·kg/mol)</li>
                    <li>m = Molality (mol/kg)</li>
                    <li>i = Van't Hoff factor (dimensionless)</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Common Kf Values:
                  </h3>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p><strong>Water:</strong> 1.86 °C·kg/mol</p>
                    <p><strong>Benzene:</strong> 5.12 °C·kg/mol</p>
                    <p><strong>Cyclohexane:</strong> 20.0 °C·kg/mol</p>
                    <p><strong>Acetic acid:</strong> 3.90 °C·kg/mol</p>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Van't Hoff Factor (i):
                  </h3>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p><strong>Non-electrolytes (sugar, ethylene glycol):</strong> i = 1</p>
                    <p><strong>NaCl:</strong> i ≈ 2 (Na⁺ + Cl⁻)</p>
                    <p><strong>MgCl₂:</strong> i ≈ 3 (Mg²⁺ + 2Cl⁻)</p>
                    <p><strong>CaCl₂:</strong> i ≈ 3 (Ca²⁺ + 2Cl⁻)</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Step-by-Step Example */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Step-by-Step Example
              </h2>
              
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Problem: What is the freezing point of a solution made by dissolving 62 g of ethylene glycol (C₂H₆O₂) in 250 g of water?
                </h3>
                
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <div className="border-l-4 border-primary-600 pl-4">
                    <p className="font-semibold mb-2">Step 1: Calculate molality</p>
                    <p>Molar mass of C₂H₆O₂ = 62 g/mol</p>
                    <p>Moles = 62 g ÷ 62 g/mol = 1.00 mol</p>
                    <p>m = 1.00 mol ÷ 0.250 kg = 4.00 m</p>
                  </div>

                  <div className="border-l-4 border-primary-600 pl-4">
                    <p className="font-semibold mb-2">Step 2: Identify constants</p>
                    <p>Kf (water) = 1.86 °C·kg/mol</p>
                    <p>i (ethylene glycol) = 1 (non-electrolyte)</p>
                  </div>

                  <div className="border-l-4 border-primary-600 pl-4">
                    <p className="font-semibold mb-2">Step 3: Calculate ΔTf</p>
                    <p>ΔTf = 1.86 × 4.00 × 1 = 7.44 °C</p>
                  </div>

                  <div className="border-l-4 border-primary-600 pl-4">
                    <p className="font-semibold mb-2">Step 4: Find new freezing point</p>
                    <p>Normal FP of water = 0.0 °C</p>
                    <p>New FP = 0.0 - 7.44 = -7.44 °C</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Applications */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Real-World Applications
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">🚗 Antifreeze</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Ethylene glycol in car radiators prevents coolant from freezing in winter. A 50/50 mixture provides protection down to -37°C (-34°F).
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">🧂 De-icing</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Salt (NaCl, CaCl₂) on roads melts ice by lowering freezing point. CaCl₂ is more effective because it produces 3 ions and works at lower temperatures.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">🍦 Ice Cream</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Salt added to ice in hand-cranked ice cream makers lowers temperature below 0°C, allowing cream mixture to freeze properly.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">🔬 Research</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Determine molecular mass of unknown compounds. Cryoscopy is used in physical chemistry laboratories for molecular mass determination.
                  </p>
                </div>
              </div>
            </section>
          </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Key Information */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 animate-fade-in">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Quick Reference</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-primary-600 dark:text-primary-400 mt-1">▸</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Units</p>
                        <p className="text-gray-600 dark:text-gray-400">°C, mol/kg</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary-600 dark:text-primary-400 mt-1">▸</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Formula</p>
                        <p className="text-gray-600 dark:text-gray-400">ΔTf = Kf × m × i</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary-600 dark:text-primary-400 mt-1">▸</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Applications</p>
                        <p className="text-gray-600 dark:text-gray-400">Antifreeze, de-icing</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary-600 dark:text-primary-400 mt-1">▸</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Level</p>
                        <p className="text-gray-600 dark:text-gray-400">College chemistry</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Related Calculators */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 animate-fade-in" style={{ animationDelay: '100ms' }}>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Related Calculators</h3>
                  <div className="space-y-2">
                    <Link href="/thermodynamics-calculators/boiling-point-elevation-calculator" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                      <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">Boiling Point Elevation</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Calculate ΔTb</p>
                    </Link>
                    <Link href="/concentration-and-solution-calculators/molality-calculator" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                      <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">Molality Calculator</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Calculate molal concentration</p>
                    </Link>
                    <Link href="/concentration-and-solution-calculators/solution-preparation-calculator" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                      <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">Solution Preparation</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Prepare solutions</p>
                    </Link>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Related Formulas</h3>
                    <div className="space-y-2">
                      <Link href="/chemistry-formulas/freezing-point-depression" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                        <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">Freezing Point Depression Formula</p>
                      </Link>
                      <Link href="/chemistry-formulas/colligative-properties-formula" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                        <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">Colligative Properties Formula</p>
                      </Link>
                    </div>
                  </div>
                  <div className="space-y-2 mt-4">
                    <Link href="/thermodynamics-calculators" className="block p-3 rounded-lg bg-primary-50 dark:bg-primary-900/20 hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors group">
                      <p className="font-semibold text-primary-700 dark:text-primary-300">View All Thermodynamics Calculators →</p>
                    </Link>
                  </div>
                </div>

                {/* Where It's Used */}
                <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 shadow-lg border border-primary-200 dark:border-primary-700 animate-fade-in" style={{ animationDelay: '200ms' }}>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Where It&apos;s Used</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🚗</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Automotive</p>
                        <p className="text-gray-600 dark:text-gray-400">Engine antifreeze</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🧂</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Winter Roads</p>
                        <p className="text-gray-600 dark:text-gray-400">De-icing salt</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🍦</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Food Industry</p>
                        <p className="text-gray-600 dark:text-gray-400">Ice cream making</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🔬</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Research</p>
                        <p className="text-gray-600 dark:text-gray-400">Molecular mass</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      {/* Structured Data - SoftwareApplication */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Freezing Point Depression Calculator",
            "description": "Freezing Point Depression Calculator on ChemSolved",
            "url": "https://chemsolved.com/thermodynamics-calculators/freezing-point-depression-calculator",
            "applicationCategory": "EducationalApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "publisher": {
              "@type": "EducationalOrganization",
              "name": "ChemSolved",
              "url": "https://chemsolved.com"
            }
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
                "name": "Freezing Point Depression Calculator",
                "item": "https://chemsolved.com/thermodynamics-calculators/freezing-point-depression-calculator"
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
