import { Metadata } from 'next';
import Link from 'next/link';
import StoichiometryCalculator from '@/components/calculators/StoichiometryCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: 'Stoichiometry Calculator | Mole Ratios & Chemical Reaction Calculations',
  description: 'Free stoichiometry calculator to determine mole ratios, reactant amounts, and product quantities in chemical reactions. Calculate based on balanced equations.',
  keywords: 'stoichiometry calculator, mole ratio calculator, chemical reaction calculator, reactant calculator, product calculator',
  openGraph: {
    title: 'Stoichiometry Calculator - Free Online Chemistry Tool',
    description: 'Calculate mole ratios and quantities in chemical reactions. Determine reactant and product amounts based on balanced equations.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://chemicalcalculators.com/stoichiometry-calculators/stoichiometry-calculator'
  }
};

export default function StoichiometryCalculatorPage() {  return (
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
            <span className="text-gray-600 dark:text-gray-300">Stoichiometry Calculator</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Stoichiometry Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Calculate mole ratios and quantities in chemical reactions based on balanced equations
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Calculator Component - FIRST */}
            <section>
              <StoichiometryCalculator />
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
                The stoichiometry calculator uses balanced chemical equations to determine quantitative relationships between reactants and products. It calculates mole ratios, converts between mass and moles, identifies limiting reagents, and predicts product amounts based on the law of conservation of mass and definite proportions.
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
                  n = m / M
                </p>
                <p className="text-center text-gray-600 dark:text-gray-400">
                  moles = mass (g) / molar mass (g/mol)
                </p>
              </div>

              {/* Key Formulas */}
              <div className="space-y-4 mb-6">
                <h3 className="font-semibold text-gray-900 dark:text-white">Key Stoichiometry Relationships:</h3>
                <div className="grid gap-3">
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                    <p className="font-semibold text-primary-600 dark:text-primary-400 mb-1">Mole-Mass Relationship</p>
                    <p className="text-gray-700 dark:text-gray-300">n = m/M where n = moles, m = mass, M = molar mass</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                    <p className="font-semibold text-primary-600 dark:text-primary-400 mb-1">Mole Ratio</p>
                    <p className="text-gray-700 dark:text-gray-300">Use coefficients from balanced equation: aA + bB → cC + dD</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                    <p className="font-semibold text-primary-600 dark:text-primary-400 mb-1">Product Calculation</p>
                    <p className="text-gray-700 dark:text-gray-300">moles_product = moles_reactant × (coefficient_product / coefficient_reactant)</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                    <p className="font-semibold text-primary-600 dark:text-primary-400 mb-1">Mass of Product</p>
                    <p className="text-gray-700 dark:text-gray-300">mass_product = moles_product × molar_mass_product</p>
                  </div>
                </div>
              </div>

              {/* Example Equation */}
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <p className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-2">Example Reaction:</p>
                <p className="font-mono text-blue-800 dark:text-blue-400">2H₂ + O₂ → 2H₂O</p>
                <p className="text-xs text-blue-700 dark:text-blue-400 mt-2">If 4 g H₂ reacts: 4 g ÷ 2 g/mol = 2 mol H₂ → produces 2 mol H₂O = 36 g H₂O</p>
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
                    <p className="font-semibold text-gray-900 dark:text-white">Write Balanced Equation</p>
                    <p className="text-gray-700 dark:text-gray-300">N₂ + 3H₂ → 2NH₃</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Given: 28 g N₂. How much NH₃ forms?</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Convert Mass to Moles</p>
                    <p className="text-gray-700 dark:text-gray-300">Molar mass N₂ = 28 g/mol</p>
                    <p className="text-gray-700 dark:text-gray-300">moles N₂ = 28 g / 28 g/mol = 1.0 mol</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Apply Mole Ratio</p>
                    <p className="text-gray-700 dark:text-gray-300">From equation: 1 mol N₂ produces 2 mol NH₃</p>
                    <p className="text-gray-700 dark:text-gray-300">moles NH₃ = 1.0 mol N₂ × (2 mol NH₃ / 1 mol N₂) = 2.0 mol NH₃</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Convert Moles to Mass</p>
                    <p className="text-gray-700 dark:text-gray-300">Molar mass NH₃ = 17 g/mol</p>
                    <p className="text-gray-700 dark:text-gray-300">mass NH₃ = 2.0 mol × 17 g/mol = 34 g NH₃</p>
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
                  <p className="font-semibold text-red-900 dark:text-red-300 mb-1">Unbalanced equations</p>
                  <p className="text-sm text-red-800 dark:text-red-400">Always verify the equation is balanced before calculations</p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <p className="font-semibold text-red-900 dark:text-red-300 mb-1">Skipping mole conversions</p>
                  <p className="text-sm text-red-800 dark:text-red-400">Must convert between mass and moles using molar mass</p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <p className="font-semibold text-red-900 dark:text-red-300 mb-1">Wrong mole ratios</p>
                  <p className="text-sm text-red-800 dark:text-red-400">Use coefficients from balanced equation, not subscripts</p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <p className="font-semibold text-red-900 dark:text-red-300 mb-1">Incorrect molar mass</p>
                  <p className="text-sm text-red-800 dark:text-red-400">Calculate molar mass carefully from periodic table</p>
                </div>
              </div>
            </section>

            {/* Related Calculators */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Related Calculators</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link href="/stoichiometry-calculators/limiting-reagent-calculator" className="block p-4 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl border-2 border-primary-200 dark:border-primary-700 hover:scale-105 transition-transform">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">Limiting Reagent Calculator</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Identify the limiting reactant</p>
                </Link>
                <Link href="/stoichiometry-calculators/percent-yield-calculator" className="block p-4 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl border-2 border-primary-200 dark:border-primary-700 hover:scale-105 transition-transform">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">Percent Yield Calculator</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Calculate reaction efficiency</p>
                </Link>
                <Link href="/stoichiometry-calculators/theoretical-yield-calculator" className="block p-4 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl border-2 border-primary-200 dark:border-primary-700 hover:scale-105 transition-transform">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">Theoretical Yield Calculator</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Calculate maximum product formation</p>
                </Link>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Related Formulas</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Link href="/chemistry-formulas/stoichiometry-formula" className="block p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Stoichiometry Formula</h3>
                  </Link>
                  <Link href="/chemistry-formulas/stoichiometry-formula" className="block p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Mole Ratio Formula</h3>
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
                    What is stoichiometry?
                  </summary>
                  <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                    Stoichiometry is the branch of chemistry that deals with the quantitative relationships between reactants and products in chemical reactions. It&apos;s based on the law of conservation of mass and allows us to predict how much product forms from given reactants.
                  </p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    Why do we need to convert to moles in stoichiometry?
                  </summary>
                  <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                    Moles represent the number of particles (atoms, molecules) and are directly related to the coefficients in balanced equations. Chemical reactions occur by particle collisions, not by mass, so we must work in moles to apply mole ratios correctly.
                  </p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    How do I calculate molar mass?
                  </summary>
                  <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                    Add up the atomic masses of all atoms in the formula. For H₂O: (2 × 1.008) + 16.00 = 18.016 g/mol. Use the periodic table for atomic masses and multiply by the subscript for each element.
                  </p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    What&apos;s the difference between coefficients and subscripts?
                  </summary>
                  <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                    Coefficients (numbers before formulas like 2H₂O) indicate the number of molecules/moles and are used in stoichiometry calculations. Subscripts (numbers within formulas like H₂O) show the number of atoms within one molecule and are used to calculate molar mass.
                  </p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    Can I use stoichiometry for unbalanced equations?
                  </summary>
                  <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                    No, the equation must be balanced first. Unbalanced equations don&apos;t conserve mass and give incorrect mole ratios. Always balance your equation before performing any stoichiometric calculations.
                  </p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    What if I have multiple reactants?
                  </summary>
                  <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                    You need to identify the limiting reagent first - the reactant that produces the least amount of product. Use that reactant&apos;s amount to calculate product formation, as it will be consumed first and stop the reaction.
                  </p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    How accurate are stoichiometry calculations?
                  </summary>
                  <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                    Stoichiometry gives theoretical yields assuming 100% reaction completion and perfect conditions. Real reactions have lower percent yields due to side reactions, incomplete reactions, or losses during product recovery.
                  </p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    Where is stoichiometry used in real life?
                  </summary>
                  <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                    Stoichiometry is essential in pharmaceutical manufacturing (drug synthesis), industrial chemistry (fertilizers, plastics), environmental science (pollution control), food chemistry (baking ratios), and any field requiring precise chemical quantities.
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
                    <p className="text-sm text-gray-600 dark:text-gray-400">Core chemistry curriculum and problem-solving</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl">🧪</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Laboratory</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Precise reagent preparation and analysis</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl">🏭</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Industry</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Chemical manufacturing and process optimization</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl">🔬</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Research</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Synthesis planning and yield prediction</p>
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