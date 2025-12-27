import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MolarityCalculator from '@/components/calculators/MolarityCalculator';

export const metadata: Metadata = {
  title: 'Molarity Calculator | Calculate Molar Concentration (M)',
  description: 'Free molarity calculator to determine molar concentration from moles and volume. Calculate M = n/V with instant results for chemistry solutions.',
  keywords: 'molarity calculator, molar concentration, molarity formula, mol/L calculator, solution concentration',
  alternates: {
    canonical: 'https://chemsolved.com/concentration-and-solution-calculators/molarity-calculator',
  },
};

export default function MolarityCalculatorPage() {
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
            <span className="text-gray-600 dark:text-gray-300">Molarity Calculator</span>
          </nav>
        </div>

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Calculator (ABOVE THE FOLD) */}
            <div className="lg:col-span-2">
              {/* H1 Title */}
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-up">
                Molarity Calculator
              </h1>

              {/* Calculator Tool - FIRST ELEMENT */}
              <div className="animate-slide-in-up" style={{ animationDelay: '100ms' }}>
                <MolarityCalculator />
              </div>

              {/* What This Calculator Does */}
              <section className="mt-12 animate-fade-in" style={{ animationDelay: '200ms' }}>
                <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  What This Calculator Does
                </h2>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    This molarity calculator determines the <strong>molar concentration</strong> of a solution by dividing the number of moles of solute by the volume of solution in liters. Molarity (M) is one of the most common units for expressing solution concentration in chemistry.
                  </p>
                </div>
              </section>

              {/* Formula Section */}
              <section className="mt-12 animate-fade-in" style={{ animationDelay: '300ms' }}>
                <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Molarity Formula
                </h2>
                <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8 shadow-lg border-2 border-primary-200 dark:border-primary-700">
                  <div className="text-center mb-6">
                    <div className="font-mono text-3xl sm:text-4xl font-bold text-primary-700 dark:text-primary-400 mb-4">
                      M = n / V
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Primary Formula</p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center border border-gray-200 dark:border-gray-600">
                      <p className="font-mono text-lg font-bold text-gray-900 dark:text-white">M</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Molarity (mol/L)</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center border border-gray-200 dark:border-gray-600">
                      <p className="font-mono text-lg font-bold text-gray-900 dark:text-white">n</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Moles (mol)</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center border border-gray-200 dark:border-gray-600">
                      <p className="font-mono text-lg font-bold text-gray-900 dark:text-white">V</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Volume (L)</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                      <p className="font-mono text-lg font-semibold text-gray-800 dark:text-gray-200">
                        n = M × V
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Calculate moles from molarity</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                      <p className="font-mono text-lg font-semibold text-gray-800 dark:text-gray-200">
                        V = n / M
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Calculate volume from moles and molarity</p>
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
                    <strong>Problem:</strong> Calculate the molarity of a solution containing 2.5 moles of NaCl dissolved in 0.5 liters of water.
                  </p>
                  <ol className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                      <span><strong>Identify the values:</strong> n = 2.5 mol, V = 0.5 L</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                      <span><strong>Apply the formula:</strong> M = n / V = 2.5 / 0.5</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                      <span><strong>Calculate:</strong> M = 5.0 mol/L</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                      <span><strong>Result:</strong> The solution has a molarity of 5.0 M</span>
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
                        <p className="font-semibold text-gray-900 dark:text-white mb-1">Volume Not in Liters</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Always convert mL to L by dividing by 1000</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-5 border-l-4 border-red-500">
                    <div className="flex gap-3">
                      <svg className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white mb-1">Confusing Molarity with Molality</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Molarity uses volume (L), molality uses solvent mass (kg)</p>
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
                  <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-5 border-l-4 border-red-500">
                    <div className="flex gap-3">
                      <svg className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white mb-1">Temperature Dependency</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Molarity changes with temperature as volume expands/contracts</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column - Supporting Content */}
            <div className="lg:col-span-1">
              {/* Where Molarity Is Used */}
              <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 sticky top-8 animate-fade-in" style={{ animationDelay: '600ms' }}>
                <h2 className="font-heading text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Where Molarity Is Used
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
                      Standard unit taught in chemistry courses for solution preparation and stoichiometry problems
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
                      Preparing reagent solutions, titrations, and analytical chemistry procedures
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
                      Pharmaceuticals, chemical manufacturing, and quality control processes
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
                      Biochemistry experiments, reaction kinetics, and solution chemistry studies
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
                  <Link href="/concentration-and-solution-calculators/molality-calculator" className="block p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary-400 dark:hover:border-primary-500 hover:shadow-md transition-all group">
                    <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      Molality Calculator
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Calculate solution concentration in mol/kg</p>
                  </Link>
                  <Link href="/concentration-and-solution-calculators/dilution-calculator" className="block p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary-400 dark:hover:border-primary-500 hover:shadow-md transition-all group">
                    <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      Dilution Calculator
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Calculate dilution using M₁V₁ = M₂V₂</p>
                  </Link>
                  <Link href="/stoichiometry-calculators/molar-mass-calculator" className="block p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary-400 dark:hover:border-primary-500 hover:shadow-md transition-all group">
                    <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      Molar Mass Calculator
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Convert between grams and moles</p>
                  </Link>
                </div>
                <div className="mt-4 pt-4 border-t border-primary-200 dark:border-primary-700">
                  <h3 className="font-heading text-lg font-semibold text-gray-900 dark:text-white mb-3">Related Formulas</h3>
                  <div className="space-y-2">
                    <Link href="/chemistry-formulas/molarity-formula" className="block p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary-400 dark:hover:border-primary-500 hover:shadow-md transition-all group">
                      <p className="font-semibold text-sm text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        Molarity Formula (M = n/V)
                      </p>
                    </Link>
                    <Link href="/molarity-vs-molality" className="block p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary-400 dark:hover:border-primary-500 hover:shadow-md transition-all group">
                      <p className="font-semibold text-sm text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        Molarity vs Molality Comparison
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="mt-4">
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
                  What is molarity in chemistry?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  Molarity (M) is a measure of concentration defined as the number of moles of solute per liter of solution. It&#39;s expressed as mol/L or M and is temperature-dependent since volume changes with temperature.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">
                  How do you calculate molarity from grams?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  First convert grams to moles by dividing by the molar mass (g/mol), then divide moles by volume in liters: M = (mass in g / molar mass) / volume in L.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">
                  What&#39;s the difference between molarity and molality?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  Molarity (M) uses liters of solution and changes with temperature, while molality (m) uses kilograms of solvent and is temperature-independent. Molarity is more common in lab work.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">
                  Why must volume be in liters for molarity?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  Molarity is defined as mol/L by convention. If using mL, divide by 1000 to convert to liters before calculating. This standardization ensures consistent concentration units across chemistry.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">
                  Can molarity be negative?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  No, molarity cannot be negative. Both moles and volume must be positive values. A molarity of zero means no solute is present in the solution.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">
                  How does temperature affect molarity?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  As temperature increases, liquids expand, increasing volume and decreasing molarity. This is why molality is preferred for temperature-sensitive applications, as it doesn&#39;t depend on volume.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">
                  What is a 1 M solution?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  A 1 M (one molar) solution contains exactly 1 mole of solute dissolved in enough solvent to make 1 liter of total solution. For example, 1 M NaCl has 58.44g NaCl per liter.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">
                  How do you prepare a solution of specific molarity?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  Calculate required moles (n = M × V), convert to grams using molar mass, weigh the solute, then add solvent to reach the desired final volume in a volumetric flask.
                </p>
              </div>
            </div>
          </section>
        </div>
      
      {/* Structured Data - SoftwareApplication */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Molarity Calculator",
            "description": "Molarity Calculator on ChemSolved",
            "url": "https://chemsolved.com/concentration-and-solution-calculators/molarity-calculator",
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
                "name": "Molarity Calculator",
                "item": "https://chemsolved.com/concentration-and-solution-calculators/molarity-calculator"
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
