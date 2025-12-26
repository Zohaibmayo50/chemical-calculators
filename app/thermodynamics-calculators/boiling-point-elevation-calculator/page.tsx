import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BoilingPointElevationCalculator from '@/components/calculators/BoilingPointElevationCalculator';

export const metadata: Metadata = {
  title: 'Boiling Point Elevation Calculator | Calculate ΔTb from Molality',
  description: 'Calculate boiling point elevation (ΔTb) using molality and Kb constant. Free online calculator for colligative properties in chemistry.',
  keywords: ['boiling point elevation', 'colligative properties', 'molality', 'Kb constant', 'ebullioscopic constant', 'solution chemistry'],
  alternates: {
    canonical: 'https://chemicalcalculators.com/thermodynamics-calculators/boiling-point-elevation-calculator',
  },
};

export default function BoilingPointElevationCalculatorPage() {
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
            <span className="text-gray-600 dark:text-gray-300">Boiling Point Elevation Calculator</span>
          </nav>
        </div>

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Calculator */}
            <div className="lg:col-span-2">
              {/* H1 Title */}
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-up">
                Boiling Point Elevation Calculator
              </h1>

              {/* Calculator Tool */}
              <div className="animate-slide-in-up" style={{ animationDelay: '100ms' }}>
                <BoilingPointElevationCalculator />
              </div>

          {/* Educational Content */}
          <div className="space-y-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mt-8">
            {/* What It Does Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                What This Calculator Does
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The <strong>Boiling Point Elevation Calculator</strong> determines how much a solvent's boiling point increases when a non-volatile solute is dissolved in it. This is one of the four colligative properties of solutions, meaning it depends only on the concentration of solute particles, not their identity.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                When you add salt to water, sugar to water, or any non-volatile solute to a solvent, the boiling point rises. This calculator uses the formula <strong>ΔTb = Kb × m × i</strong> to calculate this elevation, where:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li><strong>ΔTb</strong> - Boiling point elevation (temperature increase in °C or K)</li>
                <li><strong>Kb</strong> - Ebullioscopic constant (specific to each solvent)</li>
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
                  ΔTb = Kb × m × i
                </div>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Where:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>ΔTb = Boiling point elevation (°C)</li>
                    <li>Kb = Ebullioscopic constant (°C·kg/mol)</li>
                    <li>m = Molality (mol/kg)</li>
                    <li>i = Van't Hoff factor (dimensionless)</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Common Kb Values:
                  </h3>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p><strong>Water:</strong> 0.512 °C·kg/mol</p>
                    <p><strong>Benzene:</strong> 2.53 °C·kg/mol</p>
                    <p><strong>Ethanol:</strong> 1.22 °C·kg/mol</p>
                    <p><strong>Chloroform:</strong> 3.63 °C·kg/mol</p>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Van't Hoff Factor (i):
                  </h3>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p><strong>Non-electrolytes (sugar, urea):</strong> i = 1</p>
                    <p><strong>NaCl:</strong> i ≈ 2 (Na⁺ + Cl⁻)</p>
                    <p><strong>CaCl₂:</strong> i ≈ 3 (Ca²⁺ + 2Cl⁻)</p>
                    <p><strong>Al₂(SO₄)₃:</strong> i ≈ 5 (2Al³⁺ + 3SO₄²⁻)</p>
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
                  Problem: What is the boiling point of a solution made by dissolving 58.5 g of NaCl in 1.00 kg of water?
                </h3>
                
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <div className="border-l-4 border-primary-600 pl-4">
                    <p className="font-semibold mb-2">Step 1: Calculate molality</p>
                    <p>Molar mass of NaCl = 58.5 g/mol</p>
                    <p>Moles = 58.5 g ÷ 58.5 g/mol = 1.00 mol</p>
                    <p>m = 1.00 mol ÷ 1.00 kg = 1.00 m</p>
                  </div>

                  <div className="border-l-4 border-primary-600 pl-4">
                    <p className="font-semibold mb-2">Step 2: Identify constants</p>
                    <p>Kb (water) = 0.512 °C·kg/mol</p>
                    <p>i (NaCl) = 2 (dissociates into Na⁺ and Cl⁻)</p>
                  </div>

                  <div className="border-l-4 border-primary-600 pl-4">
                    <p className="font-semibold mb-2">Step 3: Calculate ΔTb</p>
                    <p>ΔTb = 0.512 × 1.00 × 2 = 1.024 °C</p>
                  </div>

                  <div className="border-l-4 border-primary-600 pl-4">
                    <p className="font-semibold mb-2">Step 4: Find new boiling point</p>
                    <p>Normal BP of water = 100.0 °C</p>
                    <p>New BP = 100.0 + 1.024 = 101.024 °C</p>
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
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">🍳 Cooking</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Adding salt to water increases boiling point, cooking pasta slightly faster. At high altitudes, lower atmospheric pressure decreases boiling point.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">🚗 Automotive</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Antifreeze solutions raise the boiling point of engine coolant, preventing overheating in summer while lowering freezing point in winter.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">🔬 Laboratory</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Determine molecular mass of unknown substances by measuring boiling point elevation. Used in physical chemistry experiments.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">🏭 Industry</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Process control in chemical manufacturing. Desalination plants use boiling point differences for water purification.
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
                        <p className="text-gray-600 dark:text-gray-400">ΔTb = Kb × m × i</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary-600 dark:text-primary-400 mt-1">▸</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Applications</p>
                        <p className="text-gray-600 dark:text-gray-400">Cooking, automotive</p>
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
                    <Link href="/thermodynamics-calculators/freezing-point-depression-calculator" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                      <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">Freezing Point Depression</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Calculate ΔTf</p>
                    </Link>
                    <Link href="/concentration-and-solution-calculators/molality-calculator" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                      <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">Molality Calculator</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Calculate molal concentration</p>
                    </Link>
                    <Link href="/physical-chemistry-calculators/ideal-gas-law-calculator" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                      <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">Ideal Gas Law</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">PV = nRT calculations</p>
                    </Link>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Related Formulas</h3>
                    <div className="space-y-2">
                      <Link href="/chemistry-formulas/boiling-point-elevation" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                        <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">Boiling Point Elevation Formula</p>
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
                      <span className="text-2xl">🍳</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Culinary</p>
                        <p className="text-gray-600 dark:text-gray-400">Salt water cooking</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🚗</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Automotive</p>
                        <p className="text-gray-600 dark:text-gray-400">Engine coolant</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🔬</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Research</p>
                        <p className="text-gray-600 dark:text-gray-400">Molecular mass determination</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🏭</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Industry</p>
                        <p className="text-gray-600 dark:text-gray-400">Process control</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
