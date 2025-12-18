import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NormalityCalculator from '@/components/calculators/NormalityCalculator';

export const metadata: Metadata = {
  title: 'Normality Calculator | Calculate Equivalent Concentration (N)',
  description: 'Free normality calculator to determine equivalent concentration from molarity and equivalents. Calculate N = M × n for acid-base reactions.',
  keywords: 'normality calculator, equivalent concentration, N calculator, acid-base normality, equivalent weight',
  alternates: {
    canonical: 'https://chemicalcalculators.com/concentration-and-solution-calculators/normality-calculator',
  },
};

export default function NormalityCalculatorPage() {
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
            <span className="text-gray-600 dark:text-gray-300">Normality Calculator</span>
          </nav>
        </div>

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Calculator (ABOVE THE FOLD) */}
            <div className="lg:col-span-2">
              {/* H1 Title */}
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-up">
                Normality Calculator
              </h1>

              {/* Calculator Tool - FIRST ELEMENT */}
              <div className="animate-slide-in-up" style={{ animationDelay: '100ms' }}>
                <NormalityCalculator />
              </div>

              {/* What This Calculator Does */}
              <section className="mt-12 animate-fade-in" style={{ animationDelay: '200ms' }}>
                <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  What This Calculator Does
                </h2>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    This normality calculator determines the <strong>equivalent concentration</strong> of a solution by multiplying molarity by the number of equivalents. Normality (N) is particularly useful in acid-base chemistry and redox reactions where the number of reactive units (H⁺, OH⁻, or electrons) matters.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    The calculator works both ways: calculate normality from molarity, or calculate molarity from normality when you know the number of equivalents per mole.
                  </p>
                </div>
              </section>

              {/* Formula Section */}
              <section className="mt-12 animate-fade-in" style={{ animationDelay: '300ms' }}>
                <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Normality Formula
                </h2>
                <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8 shadow-lg border-2 border-primary-200 dark:border-primary-700">
                  <div className="text-center mb-6">
                    <div className="font-mono text-3xl sm:text-4xl font-bold text-primary-700 dark:text-primary-400 mb-4">
                      N = M × n
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Primary Formula</p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center border border-gray-200 dark:border-gray-600">
                      <p className="font-mono text-lg font-bold text-gray-900 dark:text-white">N</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Normality (eq/L)</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center border border-gray-200 dark:border-gray-600">
                      <p className="font-mono text-lg font-bold text-gray-900 dark:text-white">M</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Molarity (mol/L)</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center border border-gray-200 dark:border-gray-600">
                      <p className="font-mono text-lg font-bold text-gray-900 dark:text-white">n</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Equivalents/mole</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                      <p className="font-mono text-lg font-semibold text-gray-800 dark:text-gray-200">
                        M = N / n
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Calculate molarity from normality</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                      <p className="font-mono text-lg font-semibold text-gray-800 dark:text-gray-200">
                        n = N / M
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Calculate equivalents per mole</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* How to Determine Equivalents */}
              <section className="mt-12 animate-fade-in" style={{ animationDelay: '400ms' }}>
                <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  How to Determine Equivalents
                </h2>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">For Acids:</h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-2">Count the number of ionizable H⁺ ions</p>
                      <div className="grid md:grid-cols-2 gap-3 text-sm">
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                          <p className="font-mono text-blue-800 dark:text-blue-300">HCl → H⁺ + Cl⁻</p>
                          <p className="text-gray-600 dark:text-gray-400 mt-1">1 equivalent (monoprotic)</p>
                        </div>
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                          <p className="font-mono text-blue-800 dark:text-blue-300">H₂SO₄ → 2H⁺ + SO₄²⁻</p>
                          <p className="text-gray-600 dark:text-gray-400 mt-1">2 equivalents (diprotic)</p>
                        </div>
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                          <p className="font-mono text-blue-800 dark:text-blue-300">H₃PO₄ → 3H⁺ + PO₄³⁻</p>
                          <p className="text-gray-600 dark:text-gray-400 mt-1">3 equivalents (triprotic)</p>
                        </div>
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                          <p className="font-mono text-blue-800 dark:text-blue-300">CH₃COOH → H⁺ + CH₃COO⁻</p>
                          <p className="text-gray-600 dark:text-gray-400 mt-1">1 equivalent (weak acid)</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">For Bases:</h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-2">Count the number of ionizable OH⁻ ions</p>
                      <div className="grid md:grid-cols-2 gap-3 text-sm">
                        <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                          <p className="font-mono text-green-800 dark:text-green-300">NaOH → Na⁺ + OH⁻</p>
                          <p className="text-gray-600 dark:text-gray-400 mt-1">1 equivalent</p>
                        </div>
                        <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                          <p className="font-mono text-green-800 dark:text-green-300">Ca(OH)₂ → Ca²⁺ + 2OH⁻</p>
                          <p className="text-gray-600 dark:text-gray-400 mt-1">2 equivalents</p>
                        </div>
                        <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                          <p className="font-mono text-green-800 dark:text-green-300">Al(OH)₃ → Al³⁺ + 3OH⁻</p>
                          <p className="text-gray-600 dark:text-gray-400 mt-1">3 equivalents</p>
                        </div>
                        <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                          <p className="font-mono text-green-800 dark:text-green-300">NH₃ + H₂O → NH₄⁺ + OH⁻</p>
                          <p className="text-gray-600 dark:text-gray-400 mt-1">1 equivalent (weak base)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Step-by-Step Example */}
              <section className="mt-12 animate-fade-in" style={{ animationDelay: '500ms' }}>
                <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Step-by-Step Example
                </h2>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-start gap-4 mb-4">
                        <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Problem Setup</h3>
                          <p className="text-gray-700 dark:text-gray-300">Calculate the normality of a 0.5 M H₂SO₄ solution.</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-start gap-4 mb-4">
                        <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Identify Equivalents</h3>
                          <p className="text-gray-700 dark:text-gray-300 mb-2">H₂SO₄ is a diprotic acid (releases 2 H⁺ ions)</p>
                          <p className="text-gray-700 dark:text-gray-300">Therefore, n = 2 equivalents/mole</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-start gap-4 mb-4">
                        <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Apply Formula</h3>
                          <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg font-mono text-gray-800 dark:text-gray-200">
                            N = M × n<br />
                            N = 0.5 M × 2 eq/mol<br />
                            N = 1.0 N
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-start gap-4">
                        <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">✓</span>
                        <div>
                          <h3 className="font-semibold text-green-900 dark:text-green-300 mb-2">Result</h3>
                          <p className="text-gray-700 dark:text-gray-300">A 0.5 M H₂SO₄ solution has a normality of <strong>1.0 N</strong></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Common Mistakes */}
              <section className="mt-12 animate-fade-in" style={{ animationDelay: '600ms' }}>
                <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Common Mistakes to Avoid
                </h2>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
                      <p className="font-semibold text-red-900 dark:text-red-300 mb-1">Using wrong equivalents</p>
                      <p className="text-sm text-red-800 dark:text-red-400">Always count H⁺ or OH⁻ ions, not total atoms</p>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
                      <p className="font-semibold text-red-900 dark:text-red-300 mb-1">Confusing N with M</p>
                      <p className="text-sm text-red-800 dark:text-red-400">Normality and molarity are different for polyprotic acids</p>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
                      <p className="font-semibold text-red-900 dark:text-red-300 mb-1">Ignoring reaction context</p>
                      <p className="text-sm text-red-800 dark:text-red-400">H₃PO₄ can have 1, 2, or 3 equivalents depending on reaction</p>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
                      <p className="font-semibold text-red-900 dark:text-red-300 mb-1">Wrong unit conversion</p>
                      <p className="text-sm text-red-800 dark:text-red-400">Normality is eq/L, not eq/mL</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQs */}
              <section className="mt-12 animate-fade-in" style={{ animationDelay: '700ms' }}>
                <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Frequently Asked Questions
                </h2>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="space-y-4">
                    <details className="group">
                      <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        What is normality in chemistry?
                      </summary>
                      <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                        Normality (N) is a measure of concentration equal to the gram equivalent weight per liter of solution. It accounts for the number of reactive units (H⁺, OH⁻, electrons) that participate in a chemical reaction. For a 1 M solution of HCl (1 H⁺), N = 1, but for 1 M H₂SO₄ (2 H⁺), N = 2.
                      </p>
                    </details>
                    <details className="group">
                      <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        When should I use normality instead of molarity?
                      </summary>
                      <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                        Normality is particularly useful in acid-base titrations, redox reactions, and precipitation reactions where the number of equivalents matters. It simplifies stoichiometric calculations because 1 equivalent of acid always neutralizes 1 equivalent of base, regardless of their molecular formulas.
                      </p>
                    </details>
                    <details className="group">
                      <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        How do I convert between normality and molarity?
                      </summary>
                      <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                        Use N = M × n, where n is the number of equivalents per mole. For HCl: N = M (since n = 1). For H₂SO₄: N = 2M (since n = 2). To convert back, use M = N / n.
                      </p>
                    </details>
                    <details className="group">
                      <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        Can weak acids and bases have normality?
                      </summary>
                      <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                        Yes, weak acids like acetic acid (CH₃COOH) and weak bases like ammonia (NH₃) can have normality. The number of equivalents is determined by the number of ionizable H⁺ or OH⁻ ions, not by the strength of the acid or base. For CH₃COOH, n = 1, so N = M.
                      </p>
                    </details>
                    <details className="group">
                      <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        Is normality still used in modern chemistry?
                      </summary>
                      <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                        While molarity is more commonly used in modern chemistry, normality remains useful in analytical chemistry, particularly for titrations. It&apos;s still taught in chemistry courses and used in some laboratory procedures, though it&apos;s gradually being replaced by molarity and other SI units.
                      </p>
                    </details>
                    <details className="group">
                      <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        How does normality work for redox reactions?
                      </summary>
                      <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                        In redox reactions, the number of equivalents equals the number of electrons transferred. For KMnO₄ reducing from Mn⁷⁺ to Mn²⁺, it gains 5 electrons, so n = 5. A 0.1 M KMnO₄ solution would be 0.5 N in this reaction.
                      </p>
                    </details>
                  </div>
                </div>
              </section>
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
                        <p className="text-gray-600 dark:text-gray-400">N (eq/L) or equivalents per liter</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary-600 dark:text-primary-400 mt-1">▸</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Formula</p>
                        <p className="text-gray-600 dark:text-gray-400">N = M × equivalents</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary-600 dark:text-primary-400 mt-1">▸</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Applications</p>
                        <p className="text-gray-600 dark:text-gray-400">Titrations, acid-base reactions, redox</p>
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
                    <Link href="/concentration-and-solution-calculators/molarity-calculator" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                      <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">Molarity Calculator</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Calculate molar concentration</p>
                    </Link>
                    <Link href="/concentration-and-solution-calculators/molality-calculator" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                      <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">Molality Calculator</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Calculate molal concentration</p>
                    </Link>
                    <Link href="/concentration-and-solution-calculators/dilution-calculator" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                      <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">Dilution Calculator</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Calculate dilution ratios</p>
                    </Link>
                    <Link href="/concentration-and-solution-calculators" className="block p-3 rounded-lg bg-primary-50 dark:bg-primary-900/20 hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors group">
                      <p className="font-semibold text-primary-700 dark:text-primary-300">View All Concentration Calculators →</p>
                    </Link>
                  </div>
                </div>

                {/* Where It's Used */}
                <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 shadow-lg border border-primary-200 dark:border-primary-700 animate-fade-in" style={{ animationDelay: '200ms' }}>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Where It&apos;s Used</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🎓</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Education</p>
                        <p className="text-gray-600 dark:text-gray-400">Analytical chemistry courses</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🧪</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Laboratory</p>
                        <p className="text-gray-600 dark:text-gray-400">Titration experiments</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🏥</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Medical</p>
                        <p className="text-gray-600 dark:text-gray-400">Clinical chemistry tests</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🏭</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Industry</p>
                        <p className="text-gray-600 dark:text-gray-400">Quality control analysis</p>
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
