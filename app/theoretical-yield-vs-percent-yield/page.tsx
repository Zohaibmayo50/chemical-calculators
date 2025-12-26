import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ComparisonTable from '@/components/ComparisonTable';

export const metadata: Metadata = {
  title: 'Theoretical Yield vs Percent Yield: Key Differences & Calculations | Chemistry Guide',
  description: 'Understand the difference between theoretical yield (calculated maximum) and percent yield (actual efficiency). Learn formulas, calculations, and practical applications.',
  alternates: {
    canonical: 'https://chemicalcalculators.com/theoretical-yield-vs-percent-yield',
  },
  keywords: ['theoretical yield vs percent yield', 'actual yield', 'reaction efficiency', 'stoichiometry', 'yield calculations', 'chemistry calculations']
};

export default function TheoreticalYieldVsPercentYieldPage() {
  const comparisonRows = [
    {
      aspect: 'Definition',
      entity1: 'Maximum amount of product possible from stoichiometry',
      entity2: 'Ratio of actual yield to theoretical yield × 100%'
    },
    {
      aspect: 'Formula',
      entity1: 'Calculated from balanced equation and limiting reactant',
      entity2: '(actual yield / theoretical yield) × 100%'
    },
    {
      aspect: 'Units',
      entity1: 'Mass units (g, kg, etc.) or moles',
      entity2: 'Percentage (%)'
    },
    {
      aspect: 'Nature',
      entity1: 'Theoretical/calculated value',
      entity2: 'Measured/experimental efficiency'
    },
    {
      aspect: 'Value Range',
      entity1: 'Absolute amount based on stoichiometry',
      entity2: '0% to 100% (rarely exceeds 100%)'
    },
    {
      aspect: 'Typical Use',
      entity1: 'Predicting maximum product formation',
      entity2: 'Evaluating reaction efficiency and losses'
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Breadcrumb */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <nav className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <Link href="/" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Home
            </Link>
            <span>→</span>
            <span className="text-gray-900 dark:text-white font-medium">Theoretical Yield vs Percent Yield</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
            <h1 className="text-5xl font-bold mb-6 text-center">Theoretical Yield vs Percent Yield</h1>
            <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Learn the crucial difference between the maximum possible product (theoretical yield) and the actual efficiency achieved (percent yield) in chemical reactions.
            </p>
          </div>
        </section>

        {/* Quick Summary Table */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Quick Comparison</h2>
          <ComparisonTable 
            entity1Name="Theoretical Yield"
            entity2Name="Percent Yield"
            rows={comparisonRows}
          />
        </section>

        {/* What Is Theoretical Yield? */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">What Is Theoretical Yield?</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-primary-600 dark:text-primary-400">Theoretical yield</strong> is the maximum amount of product that can be formed in a chemical reaction, calculated from stoichiometry and the balanced chemical equation. It assumes 100% reaction efficiency with no losses.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Theoretical yield is calculated by:
            </p>
            <ol className="list-decimal list-inside text-lg text-gray-700 dark:text-gray-300 mb-6 space-y-2 ml-4">
              <li>Identifying the limiting reactant</li>
              <li>Converting limiting reactant to moles</li>
              <li>Using stoichiometric ratios from the balanced equation</li>
              <li>Converting product moles to desired units (grams, etc.)</li>
            </ol>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/stoichiometry-calculators/theoretical-yield-calculator"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-md"
              >
                Theoretical Yield Calculator
              </Link>
              <Link 
                href="/chemistry-formulas/theoretical-yield-formula"
                className="inline-flex items-center px-6 py-3 bg-secondary-600 text-white font-semibold rounded-lg hover:bg-secondary-700 transition-colors shadow-md"
              >
                Theoretical Yield Formula
              </Link>
            </div>
          </div>
        </section>

        {/* What Is Percent Yield? */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">What Is Percent Yield?</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-primary-600 dark:text-primary-400">Percent yield</strong> measures the efficiency of a chemical reaction by comparing the actual amount of product obtained (actual yield) to the theoretical maximum. It's expressed as a percentage.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              The formula is: <strong>Percent Yield = (Actual Yield / Theoretical Yield) × 100%</strong>
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              For example: If the theoretical yield is 50 g but you only obtain 40 g of product, the percent yield is (40 / 50) × 100% = 80%.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/stoichiometry-calculators/percent-yield-calculator"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-md"
              >
                Percent Yield Calculator
              </Link>
              <Link 
                href="/chemistry-formulas/percent-yield-formula"
                className="inline-flex items-center px-6 py-3 bg-secondary-600 text-white font-semibold rounded-lg hover:bg-secondary-700 transition-colors shadow-md"
              >
                Percent Yield Formula
              </Link>
            </div>
          </div>
        </section>

        {/* Key Differences Explained */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Key Differences Explained</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-primary-600 pl-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Calculation vs Measurement</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>Theoretical yield</strong> is calculated from stoichiometry before the experiment. <strong>Percent yield</strong> is determined after the experiment by measuring the actual product obtained and comparing it to the theoretical maximum.
                </p>
              </div>

              <div className="border-l-4 border-secondary-600 pl-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Ideal vs Real</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Theoretical yield represents an <strong>ideal scenario</strong> with perfect conditions and no losses. Percent yield reflects <strong>real-world efficiency</strong> including all losses, side reactions, and imperfections.
                </p>
              </div>

              <div className="border-l-4 border-indigo-600 pl-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Units and Expression</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Theoretical yield is expressed in <strong>mass or mole units</strong> (grams, kilograms, moles). Percent yield is a <strong>dimensionless percentage</strong> that indicates efficiency.
                </p>
              </div>

              <div className="border-l-4 border-purple-600 pl-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Relationship with Actual Yield</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Actual yield (what you measure) is always ≤ theoretical yield (what's possible). Percent yield = (actual / theoretical) × 100%, so it shows what percentage of the maximum was achieved.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* When to Use Each */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">When to Use Each</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-primary-700 dark:text-primary-300 mb-4">Use Theoretical Yield When:</h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span>Planning experiments and ordering reagents</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span>Predicting maximum product formation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span>Calculating expected outcomes before reaction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span>Determining cost-effectiveness of reactions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span>Comparing different synthetic routes</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-secondary-700 dark:text-secondary-300 mb-4">Use Percent Yield When:</h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-secondary-600 mr-2">✓</span>
                    <span>Evaluating reaction efficiency after completion</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-600 mr-2">✓</span>
                    <span>Comparing different experimental conditions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-600 mr-2">✓</span>
                    <span>Identifying sources of product loss</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-600 mr-2">✓</span>
                    <span>Assessing quality of laboratory technique</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-600 mr-2">✓</span>
                    <span>Reporting experimental results</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Common Confusions */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Common Confusions</h2>
            
            <div className="space-y-6">
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-red-800 dark:text-red-300 mb-2">❌ Mistake: Confusing Actual Yield with Theoretical Yield</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Actual yield</strong> is what you measure in the lab. <strong>Theoretical yield</strong> is what stoichiometry predicts. They're rarely equal. Percent yield compares the two.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-red-800 dark:text-red-300 mb-2">❌ Mistake: Expecting 100% Yield</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Real reactions rarely achieve 100% yield due to side reactions, incomplete reactions, product losses during purification, and measurement errors. 70-95% is often considered good.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-red-800 dark:text-red-300 mb-2">❌ Mistake: Using Excess Reactant for Theoretical Yield</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Always base theoretical yield calculations on the <strong>limiting reactant</strong>, not the excess reactant. The limiting reactant determines the maximum product possible.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-red-800 dark:text-red-300 mb-2">❌ Mistake: Percent Yield Over 100%</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  If percent yield exceeds 100%, there's an error—likely impure product, incorrect theoretical yield calculation, or measurement error. Product cannot exceed the theoretical maximum.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Calculators */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Related Calculators</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link 
                href="/stoichiometry-calculators/theoretical-yield-calculator"
                className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow border-2 border-primary-200 dark:border-primary-800 hover:border-primary-400"
              >
                <h3 className="text-xl font-bold text-primary-700 dark:text-primary-300 mb-2">Theoretical Yield Calculator</h3>
                <p className="text-gray-600 dark:text-gray-400">Calculate maximum possible product</p>
              </Link>
              
              <Link 
                href="/stoichiometry-calculators/percent-yield-calculator"
                className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow border-2 border-secondary-200 dark:border-secondary-800 hover:border-secondary-400"
              >
                <h3 className="text-xl font-bold text-secondary-700 dark:text-secondary-300 mb-2">Percent Yield Calculator</h3>
                <p className="text-gray-600 dark:text-gray-400">Calculate reaction efficiency</p>
              </Link>

              <Link 
                href="/stoichiometry-calculators/limiting-reactant-calculator"
                className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow border-2 border-indigo-200 dark:border-indigo-800 hover:border-indigo-400"
              >
                <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-300 mb-2">Limiting Reactant Calculator</h3>
                <p className="text-gray-600 dark:text-gray-400">Find which reactant limits product formation</p>
              </Link>

              <Link 
                href="/stoichiometry-calculators"
                className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow border-2 border-purple-200 dark:border-purple-800 hover:border-purple-400"
              >
                <h3 className="text-xl font-bold text-purple-700 dark:text-purple-300 mb-2">All Stoichiometry Calculators</h3>
                <p className="text-gray-600 dark:text-gray-400">Explore all reaction calculation tools</p>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">What is the difference between theoretical yield and percent yield?</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Theoretical yield is the calculated maximum product amount from stoichiometry. Percent yield is the efficiency ratio comparing actual product obtained to theoretical maximum, expressed as a percentage.
                </p>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Can percent yield be over 100%?</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  No, percent yield should not exceed 100%. Values over 100% indicate errors such as impure product, incorrect calculations, or measurement mistakes. The actual yield cannot exceed the theoretical maximum.
                </p>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Why is percent yield important?</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Percent yield measures reaction efficiency, helps identify problems in procedure or technique, allows comparison of different methods, and is crucial for industrial cost-effectiveness and optimization.
                </p>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">How do you calculate theoretical yield?</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Find the limiting reactant, convert it to moles, use stoichiometry from the balanced equation to find product moles, then convert to grams using the product's molar mass.
                </p>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">What is a good percent yield?</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  This depends on the reaction. For simple reactions, 80-95% is good. Complex synthesis may have 50-70%. Industrial processes aim for maximum yield for cost-efficiency. Below 70% often indicates problems worth investigating.
                </p>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">What causes low percent yield?</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Common causes: incomplete reactions, side reactions, product losses during purification or transfer, measurement errors, impure reactants, non-optimal reaction conditions (temperature, time, etc.).
                </p>
              </div>

              <div className="pb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Is theoretical yield always higher than actual yield?</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Yes, theoretical yield should always be equal to or greater than actual yield. It represents the maximum possible under perfect conditions. If actual exceeds theoretical, there's a calculation or measurement error.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
