import { Metadata } from 'next';
import Link from 'next/link';
import EmpiricalFormulaCalculator from '@/components/calculators/EmpiricalFormulaCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: 'Empirical Formula Calculator | Determine Simplest Formula from Composition',
  description: 'Free empirical formula calculator to find the simplest whole-number ratio of atoms from percent composition or mass data. Essential for chemistry stoichiometry.',
  keywords: 'empirical formula calculator, percent composition, simplest formula, stoichiometry, molecular formula',
  openGraph: {
    title: 'Empirical Formula Calculator - Find Simplest Formula',
    description: 'Calculate empirical formula from percent composition or mass data instantly.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://chemsolved.com/stoichiometry-calculators/empirical-formula-calculator'
  }
};

export default function EmpiricalFormulaCalculatorPage() {  return (
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
            <Link href="/stoichiometry-calculators" className="text-primary-600 dark:text-primary-400 hover:underline">
              Stoichiometry Calculators
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600 dark:text-gray-300">Empirical Formula Calculator</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Empirical Formula Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Determine the simplest whole-number ratio of atoms from percent composition or mass data
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Calculator Component - FIRST */}
            <section>
              <EmpiricalFormulaCalculator />
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
                The empirical formula calculator determines the simplest whole-number ratio of atoms in a compound from percent composition or mass data. It converts masses to moles, finds the smallest mole ratio, and reduces to the simplest integer subscripts to give the empirical formula.
              </p>
            </section>

            {/* Formula Section */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-accent-100 dark:bg-accent-900 rounded-lg flex items-center justify-center text-accent-600 dark:text-accent-400">
                  📐
                </span>
                Method
              </h2>
              
              {/* Step-by-step method */}
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl p-4 border-2 border-primary-200 dark:border-primary-700">
                  <p className="font-semibold text-primary-700 dark:text-primary-400 mb-2">Step 1: Convert to Moles</p>
                  <p className="font-mono text-gray-900 dark:text-white">moles = mass / atomic mass</p>
                </div>
                
                <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl p-4 border-2 border-primary-200 dark:border-primary-700">
                  <p className="font-semibold text-primary-700 dark:text-primary-400 mb-2">Step 2: Find Smallest Moles</p>
                  <p className="text-gray-700 dark:text-gray-300">Identify the element with the fewest moles</p>
                </div>

                <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl p-4 border-2 border-primary-200 dark:border-primary-700">
                  <p className="font-semibold text-primary-700 dark:text-primary-400 mb-2">Step 3: Calculate Ratios</p>
                  <p className="font-mono text-gray-900 dark:text-white">ratio = moles of element / smallest moles</p>
                </div>

                <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl p-4 border-2 border-primary-200 dark:border-primary-700">
                  <p className="font-semibold text-primary-700 dark:text-primary-400 mb-2">Step 4: Convert to Whole Numbers</p>
                  <p className="text-gray-700 dark:text-gray-300">Round ratios or multiply by 2, 3, etc. to get integers</p>
                </div>
              </div>
            </section>

            {/* Step-by-Step Example */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400">
                  📝
                </span>
                Step-by-Step Example
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Given Composition</p>
                    <p className="text-gray-700 dark:text-gray-300">40.0% C, 6.7% H, 53.3% O</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Assume 100g sample: 40.0g C, 6.7g H, 53.3g O</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Convert to Moles</p>
                    <p className="text-gray-700 dark:text-gray-300">C: 40.0g / 12.01 g/mol = 3.33 mol</p>
                    <p className="text-gray-700 dark:text-gray-300">H: 6.7g / 1.008 g/mol = 6.65 mol</p>
                    <p className="text-gray-700 dark:text-gray-300">O: 53.3g / 16.00 g/mol = 3.33 mol</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Divide by Smallest (3.33)</p>
                    <p className="text-gray-700 dark:text-gray-300">C: 3.33 / 3.33 = 1</p>
                    <p className="text-gray-700 dark:text-gray-300">H: 6.65 / 3.33 = 2</p>
                    <p className="text-gray-700 dark:text-gray-300">O: 3.33 / 3.33 = 1</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Result</p>
                    <p className="text-gray-700 dark:text-gray-300">Empirical Formula: <span className="font-bold text-primary-600 dark:text-primary-400 font-mono text-xl">CH₂O</span></p>
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
                  <p className="font-semibold text-red-900 dark:text-red-300 mb-1">Using incorrect atomic masses</p>
                  <p className="text-sm text-red-800 dark:text-red-400">Always use accurate atomic masses from periodic table</p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <p className="font-semibold text-red-900 dark:text-red-300 mb-1">Rounding too early</p>
                  <p className="text-sm text-red-800 dark:text-red-400">Keep extra decimals until final step to avoid errors</p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <p className="font-semibold text-red-900 dark:text-red-300 mb-1">Not recognizing fractions</p>
                  <p className="text-sm text-red-800 dark:text-red-400">1.5 → multiply by 2, 1.33 → multiply by 3</p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <p className="font-semibold text-red-900 dark:text-red-300 mb-1">Confusing empirical and molecular</p>
                  <p className="text-sm text-red-800 dark:text-red-400">Empirical is simplest ratio, molecular is actual formula</p>
                </div>
              </div>
            </section>

            {/* Related Calculators */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Related Calculators</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link href="/stoichiometry-calculators/molecular-formula-calculator" className="block p-4 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl border-2 border-primary-200 dark:border-primary-700 hover:scale-105 transition-transform">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">Molecular Formula Calculator</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Find actual molecular formula from empirical</p>
                </Link>
                <Link href="/stoichiometry-calculators/percent-composition-calculator" className="block p-4 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl border-2 border-primary-200 dark:border-primary-700 hover:scale-105 transition-transform">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">Percent Composition Calculator</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Calculate % by mass of each element</p>
                </Link>
                <Link href="/stoichiometry-calculators/molar-mass-calculator" className="block p-4 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl border-2 border-primary-200 dark:border-primary-700 hover:scale-105 transition-transform">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">Molar Mass Calculator</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Calculate molecular weight</p>
                </Link>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Related Formulas</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Link href="/chemistry-formulas/empirical-formula" className="block p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Empirical Formula</h3>
                  </Link>
                  <Link href="/chemistry-formulas/percent-composition-formula" className="block p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Percent Composition Formula</h3>
                  </Link>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <Link href="/stoichiometry-calculators" className="block p-4 bg-gray-100 dark:bg-gray-700 rounded-xl border-2 border-gray-300 dark:border-gray-600 hover:scale-105 transition-transform">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">All Stoichiometry Calculators →</h3>
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
                    What is an empirical formula?
                  </summary>
                  <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                    An empirical formula shows the simplest whole-number ratio of atoms in a compound. For example, glucose (C₆H₁₂O₆) has the empirical formula CH₂O because the ratio 6:12:6 simplifies to 1:2:1.
                  </p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    What&apos;s the difference between empirical and molecular formulas?
                  </summary>
                  <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                    The empirical formula is the simplest ratio, while the molecular formula is the actual number of atoms. For example, ethene (C₂H₄) and benzene (C₆H₆) both have the empirical formula CH, but different molecular formulas.
                  </p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    Can I use percentages instead of masses?
                  </summary>
                  <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                    Yes! Percent composition works the same way. Just assume a 100g sample, so 40% becomes 40g, 6.7% becomes 6.7g, etc. Then proceed with the normal calculation.
                  </p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    What if my ratios are 1.5 or 1.33?
                  </summary>
                  <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                    Multiply all ratios to get whole numbers: 1.5 → multiply by 2 (gives 3:2), 1.33 → multiply by 3 (gives 4:3), 1.25 → multiply by 4 (gives 5:4). The calculator does this automatically.
                  </p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    How do I find the molecular formula from empirical?
                  </summary>
                  <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                    Divide the molecular mass by the empirical formula mass to get a multiplier (n). Then multiply all subscripts in the empirical formula by n. Example: if CH₂O has molecular mass 180 g/mol, n = 180/30 = 6, so molecular formula is C₆H₁₂O₆.
                  </p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    Why assume 100g for percent composition?
                  </summary>
                  <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                    Assuming 100g makes the math simple because percentages directly convert to grams. 40% becomes 40g, which is easier to work with. The ratios remain the same regardless of sample size.
                  </p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    Can two compounds have the same empirical formula?
                  </summary>
                  <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                    Yes! Many compounds share empirical formulas. CH is shared by ethene (C₂H₄), benzene (C₆H₆), and acetylene (C₂H₂). CH₂O is shared by formaldehyde (CH₂O), glucose (C₆H₁₂O₆), and acetic acid (C₂H₄O₂).
                  </p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    What if I don&apos;t have all element percentages?
                  </summary>
                  <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                    If you know some percentages, subtract from 100% to find the missing element. For example, if you have 40% C and 6.7% H, then O = 100% - 40% - 6.7% = 53.3%. This assumes the compound only contains those elements.
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
                    <p className="text-sm text-gray-600 dark:text-gray-400">General chemistry and stoichiometry courses</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl">🧪</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Laboratory</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Determining unknown compound formulas</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl">🏭</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Industry</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Quality control and material analysis</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl">🔬</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Research</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Characterizing new compounds and synthesis products</p>
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
            "name": "Empirical Formula Calculator",
            "description": "Empirical Formula Calculator on ChemSolved",
            "url": "https://chemsolved.com/stoichiometry-calculators/empirical-formula-calculator",
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
                "name": "Empirical Formula Calculator",
                "item": "https://chemsolved.com/stoichiometry-calculators/empirical-formula-calculator"
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