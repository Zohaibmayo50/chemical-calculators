import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PercentYieldCalculator from '@/components/calculators/PercentYieldCalculator';
import ReviewedByNotice from '@/components/ReviewedByNotice';

export const metadata: Metadata = {
  title: 'Percent Yield Calculator | Calculate Reaction Efficiency',
  description: 'Free percent yield calculator to determine reaction efficiency from actual and theoretical yields. Calculate % yield = (actual/theoretical) × 100 instantly.',
  keywords: 'percent yield calculator, reaction efficiency, actual yield, theoretical yield, stoichiometry calculator',
  alternates: {
    canonical: 'https://chemsolved.com/stoichiometry-calculators/percent-yield-calculator',
  },
};

export default function PercentYieldCalculatorPage() {
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
            <Link href="/stoichiometry-calculators" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
              Stoichiometry Calculators
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-600 dark:text-gray-300">Percent Yield Calculator</span>
          </nav>
        </div>

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Calculator (ABOVE THE FOLD) */}
            <div className="lg:col-span-2">
              {/* H1 Title */}
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-up">
                Percent Yield Calculator
              </h1>

              {/* Calculator Tool - FIRST ELEMENT */}
              <div className="animate-slide-in-up" style={{ animationDelay: '100ms' }}>
                <PercentYieldCalculator />
              </div>

              {/* What This Calculator Does */}
              <section className="mt-12 animate-fade-in" style={{ animationDelay: '200ms' }}>
                <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  What This Calculator Does
                </h2>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    This percent yield calculator determines the <strong>efficiency of a chemical reaction</strong> by comparing the actual amount of product obtained to the maximum theoretical amount possible. Percent yield is a key metric in chemistry for evaluating reaction performance and optimization.
                  </p>
                </div>
              </section>

              {/* Formula Section */}
              <section className="mt-12 animate-fade-in" style={{ animationDelay: '300ms' }}>
                <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Percent Yield Formula
                </h2>
                <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8 shadow-lg border-2 border-primary-200 dark:border-primary-700">
                  <div className="text-center mb-6">
                    <div className="font-mono text-2xl sm:text-3xl font-bold text-primary-700 dark:text-primary-400 mb-4">
                      % Yield = (Actual Yield / Theoretical Yield) × 100
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Primary Formula</p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center border border-gray-200 dark:border-gray-600">
                      <p className="font-mono text-lg font-bold text-gray-900 dark:text-white">% Yield</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Percent (%)</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center border border-gray-200 dark:border-gray-600">
                      <p className="font-mono text-lg font-bold text-gray-900 dark:text-white">Actual</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Obtained (g, mol)</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center border border-gray-200 dark:border-gray-600">
                      <p className="font-mono text-lg font-bold text-gray-900 dark:text-white">Theoretical</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Calculated (g, mol)</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                      <p className="font-mono text-lg font-semibold text-gray-800 dark:text-gray-200">
                        Actual = (% Yield × Theoretical) / 100
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Calculate actual yield from percent</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                      <p className="font-mono text-lg font-semibold text-gray-800 dark:text-gray-200">
                        Theoretical = (Actual × 100) / % Yield
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Calculate theoretical yield from percent</p>
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
                    <strong>Problem:</strong> A reaction should theoretically produce 50.0 g of product, but only 42.5 g was actually obtained. Calculate the percent yield.
                  </p>
                  <ol className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                      <span><strong>Identify the values:</strong> Actual = 42.5 g, Theoretical = 50.0 g</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                      <span><strong>Apply the formula:</strong> % Yield = (42.5 / 50.0) × 100</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                      <span><strong>Calculate:</strong> % Yield = 0.85 × 100 = 85%</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                      <span><strong>Result:</strong> The reaction achieved 85% yield (good efficiency)</span>
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
                        <p className="font-semibold text-gray-900 dark:text-white mb-1">Reversing Actual and Theoretical</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Always divide actual by theoretical, not the reverse</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-5 border-l-4 border-red-500">
                    <div className="flex gap-3">
                      <svg className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white mb-1">Using Inconsistent Units</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Both yields must use the same units (grams or moles)</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-5 border-l-4 border-red-500">
                    <div className="flex gap-3">
                      <svg className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white mb-1">Forgetting to Multiply by 100</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300">The result must be multiplied by 100 to get percentage</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-5 border-l-4 border-red-500">
                    <div className="flex gap-3">
                      <svg className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white mb-1">Incorrect Theoretical Calculation</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Theoretical yield must be calculated from stoichiometry and limiting reagent</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column - Supporting Content */}
            <div className="lg:col-span-1">
              {/* Where Percent Yield Is Used */}
              <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 sticky top-8 animate-fade-in" style={{ animationDelay: '600ms' }}>
                <h2 className="font-heading text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Where Percent Yield Is Used
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
                      Essential concept in chemistry courses for evaluating reaction efficiency and laboratory technique
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
                      Standard metric for assessing synthesis experiments and reaction optimization
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
                      Critical for pharmaceutical manufacturing, chemical production, and process cost analysis
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
                      Quantifying reaction performance in synthetic chemistry and method development
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
                  <Link href="/stoichiometry-calculators/limiting-reagent-calculator" className="block p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary-400 dark:hover:border-primary-500 hover:shadow-md transition-all group">
                    <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      Limiting Reagent Calculator
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Determine which reactant limits product formation</p>
                  </Link>
                  <Link href="/stoichiometry-calculators/theoretical-yield-calculator" className="block p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary-400 dark:hover:border-primary-500 hover:shadow-md transition-all group">
                    <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      Theoretical Yield Calculator
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Calculate maximum possible product from stoichiometry</p>
                  </Link>
                  <Link href="/stoichiometry-calculators/empirical-formula-calculator" className="block p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary-400 dark:hover:border-primary-500 hover:shadow-md transition-all group">
                    <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      Empirical Formula Calculator
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Determine empirical formula from percent composition</p>
                  </Link>
                </div>
                <div className="mt-6 pt-6 border-t border-primary-200 dark:border-primary-700">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Related Formulas</h3>
                  <div className="space-y-3">
                    <Link href="/chemistry-formulas/percent-yield-formula" className="block p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary-400 dark:hover:border-primary-500 hover:shadow-md transition-all group">
                      <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        Percent Yield Formula
                      </p>
                    </Link>
                    <Link href="/chemistry-formulas/theoretical-yield-formula" className="block p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary-400 dark:hover:border-primary-500 hover:shadow-md transition-all group">
                      <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        Theoretical Yield Formula
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-primary-200 dark:border-primary-700">
                  <Link href="/theoretical-yield-vs-percent-yield" className="block p-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:shadow-xl transition-all">
                    <p className="font-bold mb-1">📊 Theoretical Yield vs Percent Yield</p>
                    <p className="text-sm text-purple-100">Compare theoretical and percent yield concepts</p>
                  </Link>
                </div>
                <div className="space-y-3 mt-4">
                  <Link href="/stoichiometry-calculators" className="block p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg border-2 border-primary-300 dark:border-primary-600 hover:border-primary-500 dark:hover:border-primary-400 hover:shadow-md transition-all group">
                    <p className="font-semibold text-primary-700 dark:text-primary-400 group-hover:text-primary-800 dark:group-hover:text-primary-300 transition-colors">
                      All Stoichiometry Calculators →
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
                  What is percent yield in chemistry?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  Percent yield measures reaction efficiency by comparing actual product obtained to the maximum theoretical amount possible. It&#39;s expressed as a percentage, with 100% being a perfect reaction.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">
                  Can percent yield exceed 100%?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  No, percent yield should never exceed 100%. If it does, there&#39;s an error—likely impurities in the product, incomplete drying, incorrect theoretical calculation, or measurement mistakes.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">
                  What is a good percent yield?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  In research labs, 70-90% is considered good, and above 90% is excellent. Industrial processes aim for higher yields (&gt;95%) for economic reasons. Yields vary depending on reaction complexity.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">
                  Why is percent yield less than 100%?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  Common reasons include incomplete reactions, side reactions, product loss during purification, measurement errors, and reversible equilibrium reactions that don&#39;t go to completion.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">
                  How do you calculate theoretical yield?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  Use stoichiometry: identify the limiting reagent, use mole ratios from the balanced equation to find moles of product, then convert to grams using molar mass. This is your theoretical yield.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">
                  Does temperature affect percent yield?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  Yes indirectly. Temperature doesn&#39;t change the theoretical yield calculation, but it affects reaction rate, equilibrium position, and side reactions—all of which impact actual yield and thus percent yield.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">
                  What units are used for percent yield?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  Percent yield is unitless (expressed as %). Both actual and theoretical yields must use the same units (grams, moles, or any consistent unit) before calculating the percentage.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">
                  How can you improve percent yield?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  Optimize reaction conditions (temperature, pressure, catalyst), minimize side reactions, improve purification techniques, ensure complete mixing, use excess of cheaper reagents, and reduce product loss during transfers.
                </p>
              </div>
            </div>
          </section>

          {/* Reviewed By Notice */}
          <ReviewedByNotice />
        </div>
      
      {/* Structured Data - SoftwareApplication */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Percent Yield Calculator",
            "description": "Percent Yield Calculator on ChemSolved",
            "url": "https://chemsolved.com/stoichiometry-calculators/percent-yield-calculator",
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
                "name": "Percent Yield Calculator",
                "item": "https://chemsolved.com/stoichiometry-calculators/percent-yield-calculator"
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
