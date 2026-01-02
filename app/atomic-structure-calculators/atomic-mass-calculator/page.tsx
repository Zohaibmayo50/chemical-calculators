import { Metadata } from 'next';
import Link from 'next/link';
import AtomicMassCalculator from '@/components/calculators/AtomicMassCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Atomic Mass Calculator | Calculate Average Atomic Mass',
  description: 'Free atomic mass calculator to determine average atomic mass from isotopic masses and abundances. Calculate weighted average for chemistry.',
  keywords: 'atomic mass calculator, average atomic mass, isotopic mass, isotope abundance, weighted average',
  openGraph: {
    title: 'Atomic Mass Calculator - Free Online Chemistry Tool',
    description: 'Calculate average atomic mass from isotope data. Free atomic mass calculator.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://chemsolved.com/atomic-structure-calculators/atomic-mass-calculator'
  }
};

export default function AtomicMassCalculatorPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        {/* Breadcrumb Navigation */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-primary-600 dark:text-primary-400 hover:underline">
                Home
              </Link>
              <span className="text-gray-400">/</span>
              <Link href="/atomic-structure-calculators" className="text-primary-600 dark:text-primary-400 hover:underline">
                Atomic Structure Calculators
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600 dark:text-gray-300">Atomic Mass Calculator</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Atomic Mass Calculator
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Calculate average atomic mass from isotope masses and abundances
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Calculator Component */}
              <section>
                <AtomicMassCalculator />
              </section>

              {/* What It Does */}
              <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400">
                    ℹ️
                  </span>
                  What It Does
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  The atomic mass calculator determines the average atomic mass of an element by calculating the weighted average of all its naturally occurring isotopes. Each isotope&apos;s contribution is weighted by its natural abundance percentage, providing the value found on the periodic table.
                </p>
              </section>

              {/* Formula Section */}
              <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-accent-100 dark:bg-accent-900 rounded-lg flex items-center justify-center text-accent-600 dark:text-accent-400">
                    📐
                  </span>
                  Formula
                </h2>
                
                {/* Main Formula */}
                <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl p-6 mb-6 border-2 border-primary-200 dark:border-primary-700">
                  <p className="text-center text-2xl font-mono font-bold text-gray-900 dark:text-white">
                    Average Atomic Mass = Σ(abundanceᵢ × massᵢ) / 100
                  </p>
                </div>

                {/* Alternative Forms */}
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                    <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Expanded Form</p>
                    <p className="text-sm font-mono text-gray-900 dark:text-white">M = (m₁×a₁ + m₂×a₂ + ...) / 100</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                    <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Fractional Form</p>
                    <p className="text-sm font-mono text-gray-900 dark:text-white">M = m₁×f₁ + m₂×f₂ + ...</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">(where f = fraction, not %)</p>
                  </div>
                </div>

                {/* Variables */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Variables:</h3>
                  <div className="grid gap-3">
                    <div className="flex items-start gap-3 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                      <span className="font-mono font-bold text-primary-600 dark:text-primary-400 min-w-[60px]">M</span>
                      <span className="text-gray-700 dark:text-gray-300">= Average atomic mass (amu)</span>
                    </div>
                    <div className="flex items-start gap-3 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                      <span className="font-mono font-bold text-primary-600 dark:text-primary-400 min-w-[60px]">mᵢ</span>
                      <span className="text-gray-700 dark:text-gray-300">= Mass of isotope i (amu)</span>
                    </div>
                    <div className="flex items-start gap-3 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                      <span className="font-mono font-bold text-primary-600 dark:text-primary-400 min-w-[60px]">aᵢ</span>
                      <span className="text-gray-700 dark:text-gray-300">= Abundance of isotope i (%)</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Step-by-Step Example */}
              <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400">
                    📝
                  </span>
                  Step-by-Step Example: Carbon
                </h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Given Information</p>
                      <p className="text-gray-700 dark:text-gray-300">¹²C: 98.93% at 12.000000 amu</p>
                      <p className="text-gray-700 dark:text-gray-300">¹³C: 1.07% at 13.003355 amu</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Apply Formula</p>
                      <p className="text-gray-700 dark:text-gray-300">M = (98.93 × 12.000000 + 1.07 × 13.003355) / 100</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Calculate</p>
                      <p className="text-gray-700 dark:text-gray-300">M = (1187.16 + 13.914) / 100 = 1201.074 / 100</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Result</p>
                      <p className="text-gray-700 dark:text-gray-300">Average atomic mass = 12.01074 amu ≈ 12.011 amu</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Common Mistakes */}
              <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center text-red-600 dark:text-red-400">
                    ⚠️
                  </span>
                  Common Mistakes
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
                    <p className="font-semibold text-red-900 dark:text-red-300 mb-1">Forgetting to divide by 100</p>
                    <p className="text-sm text-red-800 dark:text-red-400">Abundances are percentages, not decimals</p>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
                    <p className="font-semibold text-red-900 dark:text-red-300 mb-1">Using simple average</p>
                    <p className="text-sm text-red-800 dark:text-red-400">Must weight by abundance, not just average masses</p>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
                    <p className="font-semibold text-red-900 dark:text-red-300 mb-1">Abundances don&apos;t sum to 100%</p>
                    <p className="text-sm text-red-800 dark:text-red-400">Check that all abundances add up to 100%</p>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
                    <p className="font-semibold text-red-900 dark:text-red-300 mb-1">Rounding too early</p>
                    <p className="text-sm text-red-800 dark:text-red-400">Keep full precision until final answer</p>
                  </div>
                </div>
              </section>

              {/* Related Calculators */}
              <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Related Calculators</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Link href="/stoichiometry-calculators/molecular-weight-calculator" className="block p-4 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl border-2 border-primary-200 dark:border-primary-700 hover:scale-105 transition-transform">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Molecular Weight</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Calculate molecular mass of compounds</p>
                  </Link>
                  <Link href="/atomic-structure-calculators/electron-configuration-calculator" className="block p-4 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl border-2 border-primary-200 dark:border-primary-700 hover:scale-105 transition-transform">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Electron Configuration</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Find electron configuration</p>
                  </Link>
                  <Link href="/atomic-structure-calculators/valence-electrons-calculator" className="block p-4 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl border-2 border-primary-200 dark:border-primary-700 hover:scale-105 transition-transform">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Valence Electrons</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Determine valence electrons</p>
                  </Link>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <Link href="/atomic-structure-calculators" className="block p-4 bg-gray-100 dark:bg-gray-700 rounded-xl border-2 border-gray-300 dark:border-gray-600 hover:scale-105 transition-transform">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">All Atomic Structure Calculators →</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">View complete collection</p>
                  </Link>
                </div>
              </section>

              {/* FAQs */}
              <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <details className="group">
                    <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      What is average atomic mass?
                    </summary>
                    <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                      Average atomic mass is the weighted average of the masses of all naturally occurring isotopes of an element. It accounts for both the mass and relative abundance of each isotope, giving the value shown on the periodic table.
                    </p>
                  </details>
                  <details className="group">
                    <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      Why isn&apos;t atomic mass a whole number?
                    </summary>
                    <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                      Atomic mass isn&apos;t a whole number because it&apos;s a weighted average of isotopes with different masses. For example, chlorine has Cl-35 (75.76%) and Cl-37 (24.24%), giving an average of 35.45 amu, not 35 or 37.
                    </p>
                  </details>
                  <details className="group">
                    <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      What&apos;s the difference between atomic mass and mass number?
                    </summary>
                    <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                      Mass number is the total protons + neutrons in a specific isotope (always whole number). Atomic mass is the weighted average of all isotopes (usually decimal). Example: Carbon-12 has mass number 12, but carbon&apos;s atomic mass is 12.011 amu.
                    </p>
                  </details>
                  <details className="group">
                    <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      How do I find isotope data?
                    </summary>
                    <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                      Isotope masses and abundances are available in chemistry reference books, the NIST database, or your chemistry textbook. Most elements have 2-3 naturally occurring isotopes, though some have more.
                    </p>
                  </details>
                  <details className="group">
                    <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      What if abundances are given as decimals?
                    </summary>
                    <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                      If abundances are given as decimals (0.9893 instead of 98.93%), don&apos;t divide by 100 in the formula. Just use M = Σ(abundanceᵢ × massᵢ) directly with the decimal values.
                    </p>
                  </details>
                  <details className="group">
                    <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      Can I use this for radioactive elements?
                    </summary>
                    <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                      For radioactive elements with no stable isotopes (like technetium or promethium), the periodic table shows the mass number of the most stable isotope in brackets, not an average atomic mass.
                    </p>
                  </details>
                  <details className="group">
                    <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      Why is the unit &quot;amu&quot;?
                    </summary>
                    <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                      amu stands for &quot;atomic mass unit,&quot; defined as 1/12 the mass of a carbon-12 atom. It&apos;s also called &quot;u&quot; (unified atomic mass unit) or &quot;Da&quot; (dalton). 1 amu ≈ 1.66054 × 10⁻²⁷ kg.
                    </p>
                  </details>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Where It's Used */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Where It&apos;s Used</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <span className="text-2xl">🎓</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Education</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Teaching isotopes and atomic structure</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-2xl">🔬</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Mass Spectrometry</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Analyzing isotope ratios</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-2xl">⚛️</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Nuclear Chemistry</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Isotope abundance calculations</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-2xl">📊</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Geochemistry</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Dating samples with isotope ratios</p>
                    </div>
                  </div>
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
              "name": "Atomic Mass Calculator",
              "description": "Atomic Mass Calculator on ChemSolved",
              "url": "https://chemsolved.com/atomic-structure-calculators/atomic-mass-calculator",
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
                  "name": "Atomic Mass Calculator",
                  "item": "https://chemsolved.com/atomic-structure-calculators/atomic-mass-calculator"
                }
              ]
            })
          }}
        />
      </div>
      <Footer />
    </>
  );
}
