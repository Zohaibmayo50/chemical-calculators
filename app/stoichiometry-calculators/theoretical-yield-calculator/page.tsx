import { Metadata } from 'next';
import Link from 'next/link';
import TheoreticalYieldCalculator from '@/components/calculators/TheoreticalYieldCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: 'Theoretical Yield Calculator | Calculate Maximum Product Formation',
  description: 'Free theoretical yield calculator to determine the maximum amount of product possible from a chemical reaction. Calculate yield in moles and grams using stoichiometry.',
  keywords: 'theoretical yield calculator, maximum yield, stoichiometry calculator, product formation, chemical reactions',
  openGraph: {
    title: 'Theoretical Yield Calculator - Calculate Maximum Product',
    description: 'Calculate theoretical yield in moles and grams for any chemical reaction instantly.',
    type: 'website',
  },
  alternates: {
    canonical: '/stoichiometry-calculators/theoretical-yield-calculator'
  }
};

export default function TheoreticalYieldCalculatorPage() {  return (
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
            <span className="text-gray-600 dark:text-gray-300">Theoretical Yield Calculator</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Theoretical Yield Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Calculate the maximum amount of product that can form from a chemical reaction
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Calculator Component - FIRST */}
            <section>
              <TheoreticalYieldCalculator />
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
                The theoretical yield calculator determines the maximum amount of product that can form in a chemical reaction under perfect conditions. It uses stoichiometry to convert moles of limiting reagent to moles and mass of product, assuming 100% conversion with no side reactions or losses.
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
              
              {/* Main Formula - Moles */}
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl p-6 mb-4 border-2 border-primary-200 dark:border-primary-700">
                <p className="text-center text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Moles of Product</p>
                <p className="text-center text-2xl font-mono font-bold text-gray-900 dark:text-white">
                  n<sub>product</sub> = (n<sub>limiting</sub> / a) × b
                </p>
              </div>

              {/* Secondary Formula - Mass */}
              <div className="bg-gradient-to-br from-accent-50 to-primary-50 dark:from-accent-900/30 dark:to-primary-900/30 rounded-xl p-6 mb-6 border-2 border-accent-200 dark:border-accent-700">
                <p className="text-center text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Mass of Product</p>
                <p className="text-center text-2xl font-mono font-bold text-gray-900 dark:text-white">
                  mass = n<sub>product</sub> × M<sub>product</sub>
                </p>
              </div>

              {/* Variables */}
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900 dark:text-white">Variables:</h3>
                <div className="grid gap-3">
                  <div className="flex items-start gap-3 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                    <span className="font-mono font-bold text-primary-600 dark:text-primary-400 min-w-[100px]">n<sub>product</sub></span>
                    <span className="text-gray-700 dark:text-gray-300">= Moles of product formed (mol)</span>
                  </div>
                  <div className="flex items-start gap-3 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                    <span className="font-mono font-bold text-primary-600 dark:text-primary-400 min-w-[100px]">n<sub>limiting</sub></span>
                    <span className="text-gray-700 dark:text-gray-300">= Moles of limiting reagent (mol)</span>
                  </div>
                  <div className="flex items-start gap-3 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                    <span className="font-mono font-bold text-primary-600 dark:text-primary-400 min-w-[100px]">a</span>
                    <span className="text-gray-700 dark:text-gray-300">= Stoichiometric coefficient of limiting reagent</span>
                  </div>
                  <div className="flex items-start gap-3 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                    <span className="font-mono font-bold text-primary-600 dark:text-primary-400 min-w-[100px]">b</span>
                    <span className="text-gray-700 dark:text-gray-300">= Stoichiometric coefficient of product</span>
                  </div>
                  <div className="flex items-start gap-3 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                    <span className="font-mono font-bold text-primary-600 dark:text-primary-400 min-w-[100px]">M<sub>product</sub></span>
                    <span className="text-gray-700 dark:text-gray-300">= Molar mass of product (g/mol)</span>
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
                Step-by-Step Example
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Given Reaction</p>
                    <p className="text-gray-700 dark:text-gray-300">2H₂ + O₂ → 2H₂O</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Limiting reagent: 3.0 mol H₂</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Identify Coefficients</p>
                    <p className="text-gray-700 dark:text-gray-300">H₂ coefficient (a) = 2</p>
                    <p className="text-gray-700 dark:text-gray-300">H₂O coefficient (b) = 2</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Calculate Moles of Product</p>
                    <p className="text-gray-700 dark:text-gray-300">n<sub>H₂O</sub> = (3.0 mol / 2) × 2 = 3.0 mol</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Convert to Mass</p>
                    <p className="text-gray-700 dark:text-gray-300">mass = 3.0 mol × 18.015 g/mol = 54.045 g H₂O</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Theoretical yield: 54.045 grams</p>
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
                  <p className="font-semibold text-red-900 dark:text-red-300 mb-1">Using excess reagent instead</p>
                  <p className="text-sm text-red-800 dark:text-red-400">Always base calculations on limiting reagent</p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <p className="font-semibold text-red-900 dark:text-red-300 mb-1">Ignoring stoichiometric ratios</p>
                  <p className="text-sm text-red-800 dark:text-red-400">Must account for coefficients in balanced equation</p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <p className="font-semibold text-red-900 dark:text-red-300 mb-1">Wrong molar mass</p>
                  <p className="text-sm text-red-800 dark:text-red-400">Use correct molecular formula and atomic masses</p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <p className="font-semibold text-red-900 dark:text-red-300 mb-1">Confusing with actual yield</p>
                  <p className="text-sm text-red-800 dark:text-red-400">Theoretical is maximum; actual is what you get</p>
                </div>
              </div>
            </section>

            {/* Related Calculators */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Related Calculators</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link href="/stoichiometry-calculators/limiting-reagent-calculator" className="block p-4 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl border-2 border-primary-200 dark:border-primary-700 hover:scale-105 transition-transform">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">Limiting Reagent Calculator</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Find which reactant limits the reaction</p>
                </Link>
                <Link href="/stoichiometry-calculators/percent-yield-calculator" className="block p-4 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl border-2 border-primary-200 dark:border-primary-700 hover:scale-105 transition-transform">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">Percent Yield Calculator</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Calculate reaction efficiency</p>
                </Link>
                <Link href="/stoichiometry-calculators/molar-mass-calculator" className="block p-4 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl border-2 border-primary-200 dark:border-primary-700 hover:scale-105 transition-transform">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">Molar Mass Calculator</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Calculate molecular weight from formula</p>
                </Link>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Related Formulas</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Link href="/chemistry-formulas/theoretical-yield-formula" className="block p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Theoretical Yield Formula</h3>
                  </Link>
                  <Link href="/chemistry-formulas/stoichiometry-formula" className="block p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Stoichiometry Formula</h3>
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
                    What is theoretical yield?
                  </summary>
                  <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                    Theoretical yield is the maximum amount of product that can be produced from a given amount of reactants, assuming perfect conditions: 100% conversion, no side reactions, and no losses during purification or transfer.
                  </p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    Why is theoretical yield always higher than actual yield?
                  </summary>
                  <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                    Real reactions rarely achieve 100% efficiency due to incomplete reactions, side reactions forming unwanted products, reversible reactions reaching equilibrium, and physical losses during product isolation and purification.
                  </p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    Do I need to identify the limiting reagent first?
                  </summary>
                  <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                    Yes, theoretical yield is always calculated from the limiting reagent (the reactant that is completely consumed first). If you have multiple reactants, determine which is limiting before calculating theoretical yield.
                  </p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    How do I find the molar mass of the product?
                  </summary>
                  <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                    Sum the atomic masses of all atoms in the molecular formula using the periodic table. For example, H₂O = 2(1.008) + 15.999 = 18.015 g/mol. Use atomic masses to at least 3 decimal places for accuracy.
                  </p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    What if multiple products form?
                  </summary>
                  <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                    Calculate theoretical yield for each product separately using its stoichiometric coefficient from the balanced equation. Each product will have its own theoretical yield based on the limiting reagent.
                  </p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    Can theoretical yield exceed 100%?
                  </summary>
                  <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                    No, theoretical yield represents 100% conversion (the maximum possible). If your actual yield exceeds theoretical yield, there&apos;s an error in your calculations or measurements, possibly contamination or incomplete drying.
                  </p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    How is theoretical yield used in industry?
                  </summary>
                  <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                    Industries use theoretical yield for process planning, cost estimation, and efficiency monitoring. Comparing actual to theoretical yield (percent yield) helps optimize reactions and identify process improvements.
                  </p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    What is a typical percent yield in organic chemistry?
                  </summary>
                  <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                    Percent yields vary widely: simple reactions may achieve 70-95%, while complex multi-step syntheses often yield 30-60%. Yields above 90% are excellent, while below 50% may indicate the need for optimization.
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
                    <p className="text-sm text-gray-600 dark:text-gray-400">Stoichiometry problems and lab reports</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl">🧪</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Laboratory</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Experiment planning and yield assessment</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl">🏭</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Industry</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Production forecasting and process optimization</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl">🔬</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Research</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Synthetic method development and comparison</p>
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