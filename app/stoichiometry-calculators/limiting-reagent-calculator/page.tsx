import { Metadata } from 'next';
import Link from 'next/link';
import LimitingReagentCalculator from '@/components/calculators/LimitingReagentCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: 'Limiting Reagent Calculator | Identify Limiting Reactant in Chemical Reactions',
  description: 'Free limiting reagent calculator to determine which reactant limits product formation. Calculate limiting reactant and excess reagent amounts for stoichiometry problems.',
  keywords: 'limiting reagent calculator, limiting reactant, stoichiometry calculator, excess reagent, chemical reactions',
  openGraph: {
    title: 'Limiting Reagent Calculator - Find Limiting Reactant',
    description: 'Determine limiting reagent and calculate excess amounts for chemical reactions instantly.',
    type: 'website',
  },
  alternates: {
    canonical: '/stoichiometry-calculators/limiting-reagent-calculator'
  }
};

export default function LimitingReagentCalculatorPage() {  return (
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
            <span className="text-gray-600 dark:text-gray-300">Limiting Reagent Calculator</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Limiting Reagent Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Identify which reactant limits product formation and calculate excess reagent amounts
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Calculator Component - FIRST */}
            <section>
              <LimitingReagentCalculator />
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
                The limiting reagent calculator determines which reactant in a chemical reaction will be completely consumed first, thereby limiting the amount of product that can be formed. It compares the mole ratios of available reactants to their stoichiometric coefficients and calculates how much excess reagent remains unreacted.
              </p>
            </section>

            {/* Formula Section */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-accent-100 dark:bg-accent-900 rounded-lg flex items-center justify-center text-accent-600 dark:text-accent-400">
                  📐
                </span>
                Formula & Method
              </h2>
              
              {/* Main Concept */}
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl p-6 mb-6 border-2 border-primary-200 dark:border-primary-700">
                <p className="text-center text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Compare: moles available / stoichiometric coefficient
                </p>
                <p className="text-center text-gray-600 dark:text-gray-400">
                  Smallest ratio = Limiting Reagent
                </p>
              </div>

              {/* Step-by-Step Method */}
              <div className="space-y-4 mb-6">
                <h3 className="font-semibold text-gray-900 dark:text-white">Determination Steps:</h3>
                <div className="grid gap-3">
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                    <p className="font-semibold text-primary-600 dark:text-primary-400 mb-1">Step 1</p>
                    <p className="text-gray-700 dark:text-gray-300">Write the balanced chemical equation</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                    <p className="font-semibold text-primary-600 dark:text-primary-400 mb-1">Step 2</p>
                    <p className="text-gray-700 dark:text-gray-300">Divide available moles by stoichiometric coefficient for each reactant</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                    <p className="font-semibold text-primary-600 dark:text-primary-400 mb-1">Step 3</p>
                    <p className="text-gray-700 dark:text-gray-300">The reactant with the smallest ratio is the limiting reagent</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                    <p className="font-semibold text-primary-600 dark:text-primary-400 mb-1">Step 4</p>
                    <p className="text-gray-700 dark:text-gray-300">Calculate excess using: Excess = Initial moles - Moles consumed</p>
                  </div>
                </div>
              </div>

              {/* Example Equation */}
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <p className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-2">Example Reaction:</p>
                <p className="font-mono text-blue-800 dark:text-blue-400">2H₂ + O₂ → 2H₂O</p>
                <p className="text-xs text-blue-700 dark:text-blue-400 mt-2">If you have 3 mol H₂ and 2 mol O₂: H₂ ratio = 3/2 = 1.5, O₂ ratio = 2/1 = 2.0 → H₂ is limiting</p>
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
                    <p className="font-semibold text-gray-900 dark:text-white">Given Reaction</p>
                    <p className="text-gray-700 dark:text-gray-300">2H₂ + O₂ → 2H₂O</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Available: 3.0 mol H₂ and 5.0 mol O₂</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Calculate Ratios</p>
                    <p className="text-gray-700 dark:text-gray-300">H₂: 3.0 mol / 2 = 1.5</p>
                    <p className="text-gray-700 dark:text-gray-300">O₂: 5.0 mol / 1 = 5.0</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Identify Limiting Reagent</p>
                    <p className="text-gray-700 dark:text-gray-300">1.5 &lt; 5.0, so H₂ is the limiting reagent</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Calculate Excess O₂</p>
                    <p className="text-gray-700 dark:text-gray-300">O₂ needed = (3.0 mol H₂ / 2) × 1 = 1.5 mol</p>
                    <p className="text-gray-700 dark:text-gray-300">Excess O₂ = 5.0 - 1.5 = 3.5 mol remaining</p>
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
                  <p className="font-semibold text-red-900 dark:text-red-300 mb-1">Using unbalanced equations</p>
                  <p className="text-sm text-red-800 dark:text-red-400">Always balance the equation before calculations</p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <p className="font-semibold text-red-900 dark:text-red-300 mb-1">Comparing moles directly</p>
                  <p className="text-sm text-red-800 dark:text-red-400">Must divide by stoichiometric coefficients first</p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <p className="font-semibold text-red-900 dark:text-red-300 mb-1">Forgetting unit conversions</p>
                  <p className="text-sm text-red-800 dark:text-red-400">Convert grams to moles before calculating</p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <p className="font-semibold text-red-900 dark:text-red-300 mb-1">Choosing largest ratio</p>
                  <p className="text-sm text-red-800 dark:text-red-400">Smallest ratio is limiting, not largest</p>
                </div>
              </div>
            </section>

            {/* Related Calculators */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Related Calculators</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link href="/stoichiometry-calculators/percent-yield-calculator" className="block p-4 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl border-2 border-primary-200 dark:border-primary-700 hover:scale-105 transition-transform">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">Percent Yield Calculator</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Calculate reaction efficiency</p>
                </Link>
                <Link href="/stoichiometry-calculators/theoretical-yield-calculator" className="block p-4 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl border-2 border-primary-200 dark:border-primary-700 hover:scale-105 transition-transform">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">Theoretical Yield Calculator</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Calculate maximum product formation</p>
                </Link>
                <Link href="/stoichiometry-calculators/empirical-formula-calculator" className="block p-4 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl border-2 border-primary-200 dark:border-primary-700 hover:scale-105 transition-transform">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">Empirical Formula Calculator</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Determine empirical formula from composition</p>
                </Link>
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
                    What is a limiting reagent?
                  </summary>
                  <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                    A limiting reagent (or limiting reactant) is the reactant in a chemical reaction that is completely consumed first, thereby limiting the amount of product that can be formed. Once it&apos;s used up, the reaction stops even if other reactants remain.
                  </p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    Why is identifying the limiting reagent important?
                  </summary>
                  <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                    The limiting reagent determines the theoretical yield (maximum amount of product possible). It&apos;s crucial for industrial processes to optimize costs, minimize waste, and predict production quantities accurately.
                  </p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    What is an excess reagent?
                  </summary>
                  <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                    An excess reagent is any reactant that remains after the limiting reagent is completely consumed and the reaction stops. It&apos;s present in greater quantity than needed for complete reaction with the limiting reagent.
                  </p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    Can a reaction have no limiting reagent?
                  </summary>
                  <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                    Yes, if reactants are present in exact stoichiometric proportions (according to the balanced equation), all reactants are consumed simultaneously with no excess. This is rare in practice.
                  </p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    How do I convert grams to moles for this calculation?
                  </summary>
                  <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                    Use the formula: moles = mass (g) / molar mass (g/mol). First calculate the molar mass from the periodic table, then divide the given mass by the molar mass to get moles.
                  </p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    What if the equation has more than 2 reactants?
                  </summary>
                  <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                    The same principle applies: calculate the moles/coefficient ratio for each reactant. The one with the smallest ratio is the limiting reagent, regardless of how many reactants are present.
                  </p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    How does limiting reagent affect theoretical yield?
                  </summary>
                  <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                    The theoretical yield is always calculated based on the limiting reagent, not any excess reagents. Use the moles of limiting reagent and stoichiometry to determine the maximum product formation.
                  </p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    Why do chemists use excess reagents in labs?
                  </summary>
                  <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                    Using one reagent in excess ensures the other reagent reacts completely, maximizing product yield. It&apos;s especially useful when one reactant is expensive or hard to obtain - you use the other in excess.
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
                    <p className="text-sm text-gray-600 dark:text-gray-400">Stoichiometry courses and lab calculations</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl">🧪</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Laboratory</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Planning experiments and predicting yields</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl">🏭</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Industry</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Manufacturing optimization and cost control</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl">🔬</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Research</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Synthetic chemistry and process development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      </div>
      <Footer />
    </>
  );
}