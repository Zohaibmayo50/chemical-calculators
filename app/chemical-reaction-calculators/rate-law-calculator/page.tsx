import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RateLawCalculator from '@/components/calculators/RateLawCalculator';

export const metadata: Metadata = {
  title: 'Rate Law Calculator | Chemical Kinetics | Reaction Order Calculator',
  description: 'Determine reaction orders, rate constants, and reaction rates using the rate law equation: Rate = k[A]^m[B]^n. Essential for chemical kinetics studies.',
};

export default function RateLawCalculatorPage() {
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
            <span className="text-gray-500 dark:text-gray-400">Rate Law Calculator</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-6 mb-4 animate-fade-in">
            Rate Law Calculator
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in animation-delay-100">
            Determine reaction orders and rate constants from experimental data
          </p>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 space-y-8">
              <RateLawCalculator />

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 animate-slide-in-up animation-delay-200">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Understanding Rate Laws
                </h2>
                
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    The rate law (rate equation) expresses the relationship between the rate of a chemical reaction 
                    and the concentrations of reactants. It&apos;s determined experimentally and reveals the reaction mechanism.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    General Rate Law Form
                  </h3>
                  
                  <div className="bg-gradient-to-r from-tertiary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg mb-6">
                    <p className="text-center text-2xl font-mono text-gray-900 dark:text-white mb-2">
                      Rate = k[A]<sup>m</sup>[B]<sup>n</sup>
                    </p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="border-l-4 border-tertiary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">k = Rate Constant</p>
                      <p className="text-gray-600 dark:text-gray-400">Temperature-dependent constant (increases with temperature)</p>
                    </div>
                    <div className="border-l-4 border-tertiary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">m, n = Reaction Orders</p>
                      <p className="text-gray-600 dark:text-gray-400">Must be determined experimentally (not necessarily stoichiometric coefficients)</p>
                    </div>
                    <div className="border-l-4 border-tertiary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">Overall Order = m + n</p>
                      <p className="text-gray-600 dark:text-gray-400">Sum of individual orders</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Method of Initial Rates
                  </h3>

                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      <strong>Example:</strong> Determine the rate law for: 2NO(g) + O₂(g) → 2NO₂(g)
                    </p>

                    <table className="min-w-full border border-gray-300 dark:border-gray-600 mb-4">
                      <thead className="bg-gray-100 dark:bg-gray-600">
                        <tr>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Exp</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">[NO] (M)</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">[O₂] (M)</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Rate (M/s)</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">1</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">0.10</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">0.10</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">2.5 × 10⁻⁵</td>
                        </tr>
                        <tr className="bg-gray-50 dark:bg-gray-700/50">
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">2</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">0.20</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">0.10</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">1.0 × 10⁻⁴</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">0.10</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">0.20</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">5.0 × 10⁻⁵</td>
                        </tr>
                      </tbody>
                    </table>

                    <div className="space-y-3 text-gray-700 dark:text-gray-300">
                      <p><strong>Step 1:</strong> Compare Exp 1 and 2 ([O₂] constant):</p>
                      <div className="font-mono bg-white dark:bg-gray-600 p-3 rounded">
                        Rate₂/Rate₁ = (1.0×10⁻⁴)/(2.5×10⁻⁵) = 4<br />
                        [NO]₂/[NO]₁ = 0.20/0.10 = 2<br />
                        4 = 2<sup>m</sup> → m = 2
                      </div>

                      <p className="mt-3"><strong>Step 2:</strong> Compare Exp 1 and 3 ([NO] constant):</p>
                      <div className="font-mono bg-white dark:bg-gray-600 p-3 rounded">
                        Rate₃/Rate₁ = (5.0×10⁻⁵)/(2.5×10⁻⁵) = 2<br />
                        [O₂]₃/[O₂]₁ = 0.20/0.10 = 2<br />
                        2 = 2<sup>n</sup> → n = 1
                      </div>

                      <p className="mt-3 text-tertiary-600 dark:text-tertiary-400 font-bold">
                        Rate Law: Rate = k[NO]²[O₂]
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Rate Constant Units
                  </h3>

                  <div className="overflow-x-auto mb-6">
                    <table className="min-w-full border border-gray-300 dark:border-gray-600">
                      <thead className="bg-gray-100 dark:bg-gray-700">
                        <tr>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Overall Order</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Units of k</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Example</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">0</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono">M/s or mol/(L·s)</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Photocatalysis</td>
                        </tr>
                        <tr className="bg-gray-50 dark:bg-gray-700/50">
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">1</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono">s⁻¹ or 1/time</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Radioactive decay</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">2</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono">M⁻¹s⁻¹ or L/(mol·s)</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Bimolecular reactions</td>
                        </tr>
                        <tr className="bg-gray-50 dark:bg-gray-700/50">
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono">M⁻²s⁻¹ or L²/(mol²·s)</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Termolecular reactions</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Applications
                  </h3>
                  
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🔬</span>
                      <div>
                        <strong>Reaction Mechanism:</strong> Determining elementary steps and rate-determining step
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🏭</span>
                      <div>
                        <strong>Industrial Optimization:</strong> Designing reactors and controlling reaction conditions
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">💊</span>
                      <div>
                        <strong>Drug Development:</strong> Understanding drug metabolism and stability
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🌍</span>
                      <div>
                        <strong>Environmental Chemistry:</strong> Pollutant degradation and atmospheric reactions
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
                    <span className="text-2xl">⚡</span>
                    Quick Reference
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Formula:</p>
                      <p className="text-gray-600 dark:text-gray-400">Rate = k[A]<sup>m</sup>[B]<sup>n</sup></p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Determine Order:</p>
                      <p className="text-gray-600 dark:text-gray-400">Method of initial rates</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Key Point:</p>
                      <p className="text-gray-600 dark:text-gray-400">Orders ≠ stoichiometric coefficients</p>
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
                      <Link href="/chemical-reaction-calculators/half-life-calculator" className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors">
                        Half-Life Calculator
                      </Link>
                    </li>
                    <li>
                      <Link href="/chemical-reaction-calculators/equilibrium-constant-calculator" className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors">
                        Equilibrium Constant
                      </Link>
                    </li>
                  </ul>
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <span className="text-2xl">📐</span>
                      Related Formulas
                    </h3>
                    <ul className="space-y-3">
                      <li>
                        <Link href="/chemistry-formulas/rate-law" className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors">
                          Rate Law Formula
                        </Link>
                      </li>
                      <li>
                        <Link href="/chemistry-formulas/integrated-rate-laws" className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors">
                          Integrated Rate Laws
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <ul className="space-y-3 mt-6">
                    <li>
                      <Link href="/chemical-reaction-calculators" className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors font-semibold">
                        All Chemical Reaction Calculators →
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
                      <span className="text-xl">🧪</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Chemical Kinetics</p>
                        <p className="text-gray-600 dark:text-gray-400">Reaction mechanism studies</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">🏭</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Industrial</p>
                        <p className="text-gray-600 dark:text-gray-400">Reactor design</p>
                      </div>
                    </li>
                  </ul>
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
            "name": "Rate Law Calculator",
            "description": "Rate Law Calculator on ChemSolved",
            "url": "https://chemsolved.com/chemical-reaction-calculators/rate-law-calculator",
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
                "name": "Rate Law Calculator",
                "item": "https://chemsolved.com/chemical-reaction-calculators/rate-law-calculator"
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
