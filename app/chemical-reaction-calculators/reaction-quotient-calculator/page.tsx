import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReactionQuotientCalculator from '@/components/calculators/ReactionQuotientCalculator';

export const metadata: Metadata = {
  title: 'Reaction Quotient Calculator | Q vs K | Equilibrium Direction',
  description: 'Calculate reaction quotient (Q) and compare to equilibrium constant (K) to determine reaction direction. Essential for chemical equilibrium predictions.',
};

export default function ReactionQuotientCalculatorPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-tertiary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <nav className="flex items-center gap-2 text-sm animate-fade-in">
            <Link href="/" className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors">
              Home
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/chemical-reaction-calculators" className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors">
              Chemical Reaction Calculators
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-500 dark:text-gray-400">Reaction Quotient Calculator</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-6 mb-4 animate-fade-in">
            Reaction Quotient Calculator
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in animation-delay-100">
            Determine reaction direction by comparing Q to equilibrium constant K
          </p>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 space-y-8">
              <ReactionQuotientCalculator />

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 animate-slide-in-up animation-delay-200">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Understanding Reaction Quotient
                </h2>
                
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    The reaction quotient (Q) is calculated the same way as the equilibrium constant (K), 
                    but uses the current concentrations rather than equilibrium concentrations. Comparing 
                    Q to K tells us which direction a reaction will proceed to reach equilibrium.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    The Reaction Quotient
                  </h3>

                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      For the general reaction: aA + bB ⇌ cC + dD
                    </p>
                    <div className="font-mono text-xl bg-white dark:bg-gray-600 p-4 rounded mb-3 text-center">
                      Q = [C]<sup>c</sup>[D]<sup>d</sup> / [A]<sup>a</sup>[B]<sup>b</sup>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Where [A], [B], [C], [D] are the current molar concentrations, 
                      and a, b, c, d are stoichiometric coefficients
                    </p>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Predicting Reaction Direction
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Q &lt; K</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        The ratio of products to reactants is too small. The reaction will proceed 
                        <strong> forward (→)</strong> to produce more products until Q = K.
                      </p>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Q = K</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        The system is <strong>at equilibrium</strong>. No net change will occur, 
                        though forward and reverse reactions continue at equal rates.
                      </p>
                    </div>

                    <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Q &gt; K</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        The ratio of products to reactants is too large. The reaction will proceed 
                        <strong> reverse (←)</strong> to produce more reactants until Q = K.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Example: N₂O₄ ⇌ 2NO₂
                  </h3>

                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      <strong>Given:</strong> K = 4.7 × 10<sup>-3</sup> at 25°C
                    </p>

                    <p className="text-gray-700 dark:text-gray-300 mb-3"><strong>Scenario 1:</strong> [N₂O₄] = 0.0500 M, [NO₂] = 0.0100 M</p>
                    <div className="font-mono bg-white dark:bg-gray-600 p-3 rounded mb-4 text-sm">
                      <p>Q = [NO₂]² / [N₂O₄]</p>
                      <p>Q = (0.0100)² / (0.0500)</p>
                      <p>Q = 0.0001 / 0.0500 = 2.0 × 10<sup>-3</sup></p>
                      <p className="text-blue-600 dark:text-blue-400 font-bold mt-2">Q &lt; K → Reaction goes forward</p>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-3"><strong>Scenario 2:</strong> [N₂O₄] = 0.0200 M, [NO₂] = 0.0300 M</p>
                    <div className="font-mono bg-white dark:bg-gray-600 p-3 rounded text-sm">
                      <p>Q = (0.0300)² / (0.0200)</p>
                      <p>Q = 0.0009 / 0.0200 = 4.5 × 10<sup>-2</sup></p>
                      <p className="text-orange-600 dark:text-orange-400 font-bold mt-2">Q &gt; K → Reaction goes reverse</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Important Considerations
                  </h3>

                  <div className="overflow-x-auto mb-6">
                    <table className="min-w-full border border-gray-300 dark:border-gray-600">
                      <thead className="bg-gray-100 dark:bg-gray-700">
                        <tr>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Species Type</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Included in Q?</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Notes</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        <tr><td className="border px-4 py-2">Aqueous ions/molecules</td><td className="border px-4 py-2">Yes</td><td className="border px-4 py-2">Use molarity (M)</td></tr>
                        <tr className="bg-gray-50 dark:bg-gray-700/50"><td className="border px-4 py-2">Gases</td><td className="border px-4 py-2">Yes</td><td className="border px-4 py-2">Use M or partial pressure</td></tr>
                        <tr><td className="border px-4 py-2">Pure solids</td><td className="border px-4 py-2">No</td><td className="border px-4 py-2">Activity = 1</td></tr>
                        <tr className="bg-gray-50 dark:bg-gray-700/50"><td className="border px-4 py-2">Pure liquids</td><td className="border px-4 py-2">No</td><td className="border px-4 py-2">Activity = 1</td></tr>
                        <tr><td className="border px-4 py-2">Solvent (if dilute)</td><td className="border px-4 py-2">No</td><td className="border px-4 py-2">Nearly constant</td></tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Applications
                  </h3>
                  
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">⚖️</span>
                      <div>
                        <strong>Predicting Shifts:</strong> Determine which way a reaction will proceed under current conditions
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🏭</span>
                      <div>
                        <strong>Process Control:</strong> Optimize industrial reactions by monitoring Q relative to K
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🧪</span>
                      <div>
                        <strong>Lab Planning:</strong> Design experiments to drive reactions toward desired products
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🌊</span>
                      <div>
                        <strong>Environmental Chemistry:</strong> Predict precipitation and dissolution in natural waters
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 animate-slide-in-up animation-delay-300">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="text-2xl">⚖️</span>
                    Quick Reference
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Q &lt; K:</p>
                      <p className="text-gray-600 dark:text-gray-400">Forward reaction (→)</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Q = K:</p>
                      <p className="text-gray-600 dark:text-gray-400">At equilibrium</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Q &gt; K:</p>
                      <p className="text-gray-600 dark:text-gray-400">Reverse reaction (←)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 animate-slide-in-up animation-delay-400">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="text-2xl">🔗</span>
                    Related Calculators
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/chemical-reaction-calculators/equilibrium-constant-calculator" className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors">
                        Equilibrium Constant
                      </Link>
                    </li>
                    <li>
                      <Link href="/thermodynamics-calculators/gibbs-free-energy-calculator" className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors">
                        Gibbs Free Energy
                      </Link>
                    </li>
                    <li>
                      <Link href="/chemical-reaction-calculators/rate-law-calculator" className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors">
                        Rate Law Calculator
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors font-semibold">
                        View All Calculators →
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 animate-slide-in-up animation-delay-500">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="text-2xl">🎯</span>
                    Where It&apos;s Used
                  </h3>
                  <ul className="space-y-4 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="text-xl">🏭</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Industry</p>
                        <p className="text-gray-600 dark:text-gray-400">Process optimization</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">🧪</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Research</p>
                        <p className="text-gray-600 dark:text-gray-400">Reaction prediction</p>
                      </div>
                    </li>
                  </ul>
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
