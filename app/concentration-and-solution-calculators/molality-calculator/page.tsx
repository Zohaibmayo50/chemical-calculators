import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MolalityCalculator from '@/components/calculators/MolalityCalculator';

export const metadata: Metadata = {
  title: 'Molality Calculator | Calculate Solution Concentration (m)',
  description: 'Free molality calculator to determine solution concentration from moles and solvent mass. Calculate m = n/kg with instant results.',
  keywords: 'molality calculator, solution concentration, molality formula, mol/kg calculator, solvent mass',
  alternates: {
    canonical: 'https://chemicalcalculators.com/concentration-and-solution-calculators/molality-calculator',
  },
};

export default function MolalityCalculatorPage() {
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
            <Link href="/concentration-and-solution-calculators" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
              Concentration & Solution Calculators
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-600 dark:text-gray-300">Molality Calculator</span>
          </nav>
        </div>

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Calculator (ABOVE THE FOLD) */}
            <div className="lg:col-span-2">
              {/* H1 Title */}
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-up">
                Molality Calculator
              </h1>

              {/* Calculator Tool - FIRST ELEMENT */}
              <div className="animate-slide-in-up" style={{ animationDelay: '100ms' }}>
                <MolalityCalculator />
              </div>

              {/* What This Calculator Does */}
              <section className="mt-12 animate-fade-in" style={{ animationDelay: '200ms' }}>
                <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  What This Calculator Does
                </h2>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    This molality calculator determines the <strong>concentration of a solution</strong> by dividing the number of moles of solute by the mass of solvent in kilograms. Unlike molarity, molality (m) is temperature-independent because it&#39;s based on mass rather than volume.
                  </p>
                </div>
              </section>

              {/* Formula Section */}
              <section className="mt-12 animate-fade-in" style={{ animationDelay: '300ms' }}>
                <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Molality Formula
                </h2>
                <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8 shadow-lg border-2 border-primary-200 dark:border-primary-700">
                  <div className="text-center mb-6">
                    <div className="font-mono text-3xl sm:text-4xl font-bold text-primary-700 dark:text-primary-400 mb-4">
                      m = n / kg<sub>solvent</sub>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Primary Formula</p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center border border-gray-200 dark:border-gray-600">
                      <p className="font-mono text-lg font-bold text-gray-900 dark:text-white">m</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Molality (mol/kg)</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center border border-gray-200 dark:border-gray-600">
                      <p className="font-mono text-lg font-bold text-gray-900 dark:text-white">n</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Moles (mol)</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center border border-gray-200 dark:border-gray-600">
                      <p className="font-mono text-lg font-bold text-gray-900 dark:text-white">kg</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Solvent Mass (kg)</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                      <p className="font-mono text-lg font-semibold text-gray-800 dark:text-gray-200">
                        n = m × kg
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Calculate moles from molality</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                      <p className="font-mono text-lg font-semibold text-gray-800 dark:text-gray-200">
                        kg = n / m
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Calculate solvent mass from moles and molality</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Step-by-Step Example */}
              <section className="mt-12 animate-fade-in" style={{ animationDelay: '400ms' }}>
                <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Step-by-Step Example
                </h2>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    <strong>Problem:</strong> Calculate the molality of a solution containing 3.0 moles of glucose dissolved in 2.5 kg of water.
                  </p>
                  <ol className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                      <span><strong>Identify the values:</strong> n = 3.0 mol, kg = 2.5 kg</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                      <span><strong>Apply the formula:</strong> m = n / kg = 3.0 / 2.5</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                      <span><strong>Calculate:</strong> m = 1.2 mol/kg</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                      <span><strong>Result:</strong> The solution has a molality of 1.2 m</span>
                    </li>
                  </ol>
                </div>
              </section>

              {/* Common Mistakes */}
              <section className="mt-12 animate-fade-in" style={{ animationDelay: '500ms' }}>
                <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Common Mistakes to Avoid
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-5 border-l-4 border-red-500">
                    <div className="flex gap-3">
                      <svg className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white mb-1">Using Solution Mass Instead of Solvent Mass</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Molality uses only the solvent mass, not total solution mass</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-5 border-l-4 border-red-500">
                    <div className="flex gap-3">
                      <svg className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white mb-1">Confusing Molality with Molarity</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Molality uses kg of solvent; molarity uses liters of solution</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-5 border-l-4 border-red-500">
                    <div className="flex gap-3">
                      <svg className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white mb-1">Not Converting Grams to Kilograms</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Always divide grams by 1000 to get kilograms</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-5 border-l-4 border-red-500">
                    <div className="flex gap-3">
                      <svg className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white mb-1">Using Grams Instead of Moles</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Convert mass to moles first using molar mass</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column - Supporting Content */}
            <div className="lg:col-span-1">
              {/* Where Molality Is Used */}
              <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 sticky top-8 animate-fade-in" style={{ animationDelay: '600ms' }}>
                <h2 className="font-heading text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Where Molality Is Used
                </h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Education</h3>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 ml-10">
                      Taught in physical chemistry for colligative properties and thermodynamics
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Laboratory</h3>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 ml-10">
                      Colligative property experiments like boiling point elevation and freezing point depression
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Industry</h3>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 ml-10">
                      Temperature-sensitive applications where concentration must remain constant
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Research</h3>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 ml-10">
                      Physical chemistry research involving solution thermodynamics and phase equilibria
                    </p>
                  </div>
                </div>
              </section>

              {/* Related Calculators */}
              <section className="mt-6 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 shadow-lg border border-primary-200 dark:border-primary-700 animate-fade-in" style={{ animationDelay: '700ms' }}>
                <h2 className="font-heading text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Related Calculators
                </h2>
                <div className="space-y-3">
                  <Link href="/concentration-and-solution-calculators/molarity-calculator" className="block p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary-400 dark:hover:border-primary-500 hover:shadow-md transition-all group">
                    <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      Molarity Calculator
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Calculate molar concentration in mol/L</p>
                  </Link>
                  <Link href="/concentration-and-solution-calculators/dilution-calculator" className="block p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary-400 dark:hover:border-primary-500 hover:shadow-md transition-all group">
                    <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      Dilution Calculator
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Calculate dilution using M₁V₁ = M₂V₂</p>
                  </Link>
                  <Link href="/concentration-and-solution-calculators/normality-calculator" className="block p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary-400 dark:hover:border-primary-500 hover:shadow-md transition-all group">
                    <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      Normality Calculator
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Calculate equivalent concentration</p>
                  </Link>
                  <Link href="/concentration-and-solution-calculators" className="block p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg border-2 border-primary-300 dark:border-primary-600 hover:border-primary-500 dark:hover:border-primary-400 hover:shadow-md transition-all group">
                    <p className="font-semibold text-primary-700 dark:text-primary-400 group-hover:text-primary-800 dark:group-hover:text-primary-300 transition-colors">
                      All Concentration Calculators →
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>

          {/* FAQs Section - Full Width */}
          <section className="mt-12 animate-fade-in" style={{ animationDelay: '800ms' }}>
            <h2 className="font-heading text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">
                  What is molality in chemistry?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  Molality (m) is a measure of concentration defined as moles of solute per kilogram of solvent. Unlike molarity, it&#39;s temperature-independent since it&#39;s based on mass, not volume.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">
                  How is molality different from molarity?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  Molality uses kilograms of solvent (m = mol/kg) and doesn&#39;t change with temperature. Molarity uses liters of solution (M = mol/L) and varies with temperature as liquids expand/contract.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">
                  Why use molality instead of molarity?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  Molality is preferred when temperature changes are involved (colligative properties, thermodynamics) because mass doesn&#39;t change with temperature, ensuring constant concentration values.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">
                  Can molality be calculated from molarity?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  Yes, but you need solution density: m = (M × 1000) / (1000d - MM), where d is density (g/mL) and M is molar mass of solute. The conversion requires additional data.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">
                  What are colligative properties?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  Colligative properties (boiling point elevation, freezing point depression, osmotic pressure, vapor pressure lowering) depend on the number of solute particles. Molality is used in their calculations.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">
                  How do you prepare a solution with specific molality?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  Calculate required moles (n = m × kg), convert to grams using molar mass, weigh both solute and solvent separately, then dissolve the solute in the measured solvent mass.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">
                  Can molality be negative?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  No, molality cannot be negative. Both moles of solute and mass of solvent must be positive values. A molality of zero means pure solvent with no solute.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">
                  What is a 1 m solution?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  A 1 m (one molal) solution contains exactly 1 mole of solute dissolved in 1 kilogram of solvent. For example, 1 m glucose has 180.16g glucose per 1000g of water.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
