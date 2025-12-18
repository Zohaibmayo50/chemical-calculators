import { Metadata } from 'next';
import Link from 'next/link';
import StoichiometryCalculator from '@/components/calculators/StoichiometryCalculator';

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
    canonical: '/stoichiometry-calculators/stoichiometry-calculator'
  }
};

export default function StoichiometryCalculatorPage() {
  return (
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
          {/* Calculator Component */}
          <div className="lg:col-span-2">
            <StoichiometryCalculator />
          </div>

          {/* Information Panel */}
          <div className="space-y-6">
            {/* Quick Facts */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Stoichiometry Basics</h3>
              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <p><strong>Mole Ratio:</strong> The ratio of moles of reactants and products in a balanced chemical equation.</p>
                <p><strong>Limiting Reagent:</strong> The reactant that determines the maximum amount of product formed.</p>
                <p><strong>Theoretical Yield:</strong> The maximum amount of product that can be formed from given reactants.</p>
                <p><strong>Percent Yield:</strong> The ratio of actual yield to theoretical yield, expressed as a percentage.</p>
              </div>
            </div>

            {/* Formula Reference */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Key Formulas</h3>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="text-sm font-mono text-gray-800 dark:text-gray-200">n = m/M</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">moles = mass ÷ molar mass</div>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="text-sm font-mono text-gray-800 dark:text-gray-200">M₁V₁ = M₂V₂</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">dilution principle</div>
                </div>
              </div>
            </div>

            {/* Related Calculators */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Related Calculators</h3>
              <div className="space-y-2">
                <Link href="/stoichiometry-calculators/limiting-reagent-calculator" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <div className="font-medium text-gray-900 dark:text-white">Limiting Reagent Calculator</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Find the limiting reactant</div>
                </Link>
                <Link href="/stoichiometry-calculators/theoretical-yield-calculator" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <div className="font-medium text-gray-900 dark:text-white">Theoretical Yield Calculator</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Calculate maximum product amount</div>
                </Link>
                <Link href="/stoichiometry-calculators/percent-yield-calculator" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <div className="font-medium text-gray-900 dark:text-white">Percent Yield Calculator</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Determine reaction efficiency</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}