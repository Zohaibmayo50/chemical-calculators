import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Reaction Order Formula | Determine Order from Experimental Data',
  description: 'Determine reaction order using method of initial rates, integrated rate laws, and half-life data. Calculate overall and individual orders.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/reaction-order-formula',
  },
  keywords: ['reaction order', 'method of initial rates', 'zero order', 'first order', 'second order', 'rate law', 'kinetics']
};

export default function ReactionOrderFormulaPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <nav className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <Link href="/">Home</Link>
            <span>â†’</span>
            <Link href="/chemistry-formulas">Chemistry Formulas</Link>
            <span>â†’</span>
            <span className="text-gray-900 dark:text-white font-medium">Reaction Order</span>
          </nav>
        </div>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white shadow-2xl">
            <h1 className="text-5xl font-bold mb-4 text-center">Reaction Order Formula</h1>
            <p className="text-xl text-center text-indigo-100">
              Determine how concentration affects reaction rate through experimental methods
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-l-4 border-indigo-500">
            <h2 className="text-3xl font-bold mb-6">Rate Law & Order</h2>
            
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-xl p-8">
              <div className="bg-white dark:bg-gray-700 rounded-lg p-8 text-center">
                <p className="text-4xl font-mono font-bold text-indigo-900 dark:text-indigo-300 mb-4">
                  Rate = k[A]<sup>m</sup>[B]<sup>n</sup>
                </p>
                <div className="text-lg text-gray-700 dark:text-gray-300 space-y-2 mt-6">
                  <p><strong>m</strong> = order with respect to A</p>
                  <p><strong>n</strong> = order with respect to B</p>
                  <p><strong>m + n</strong> = overall reaction order</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                    Orders are determined EXPERIMENTALLY, not from stoichiometry!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Method 1: Method of Initial Rates</h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">Procedure</h3>
              <ol className="space-y-3 text-gray-700 dark:text-gray-300 list-decimal ml-6">
                <li>Measure initial rate for different initial concentrations</li>
                <li>Compare trials where only ONE reactant concentration changes</li>
                <li>Calculate ratio: Rateâ‚‚/Rateâ‚ = ([A]â‚‚/[A]â‚)<sup>m</sup></li>
                <li>Solve for m (order with respect to A)</li>
                <li>Repeat for other reactants</li>
              </ol>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-bold text-indigo-900 dark:text-indigo-300 mb-4">Order Determination</h3>
              <table className="w-full text-sm">
                <thead className="bg-indigo-100 dark:bg-indigo-900/30">
                  <tr>
                    <th className="p-3 text-left">If [A] doubles and...</th>
                    <th className="p-3 text-left">Then order m =</th>
                    <th className="p-3 text-left">Math</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr className="border-t">
                    <td className="p-3">Rate stays same</td>
                    <td className="p-3 font-bold">0 (zero order)</td>
                    <td className="p-3 font-mono">2<sup>0</sup> = 1</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">Rate doubles</td>
                    <td className="p-3 font-bold">1 (first order)</td>
                    <td className="p-3 font-mono">2<sup>1</sup> = 2</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">Rate quadruples</td>
                    <td className="p-3 font-bold">2 (second order)</td>
                    <td className="p-3 font-mono">2<sup>2</sup> = 4</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">Rate increases 8Ã—</td>
                    <td className="p-3 font-bold">3 (third order)</td>
                    <td className="p-3 font-mono">2<sup>3</sup> = 8</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Method 2: Graphical Analysis</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-blue-900 dark:text-blue-300 mb-3 text-center">Zero Order</h3>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2"><strong>Linear plot:</strong></p>
                  <p className="font-mono text-center text-lg mb-4">[A] vs t</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Slope = -k</p>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-900 dark:text-green-300 mb-3 text-center">First Order</h3>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2"><strong>Linear plot:</strong></p>
                  <p className="font-mono text-center text-lg mb-4">ln[A] vs t</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Slope = -k</p>
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-purple-900 dark:text-purple-300 mb-3 text-center">Second Order</h3>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2"><strong>Linear plot:</strong></p>
                  <p className="font-mono text-center text-lg mb-4">1/[A] vs t</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Slope = k</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Worked Examples</h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-300 mb-4">Example 1: Method of Initial Rates</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Reaction:</strong> 2NO(g) + Oâ‚‚(g) â†’ 2NOâ‚‚(g)</p>
                  <table className="w-full mt-4 text-sm bg-white dark:bg-gray-700 rounded-lg overflow-hidden">
                    <thead className="bg-indigo-100 dark:bg-indigo-900/30">
                      <tr>
                        <th className="p-2">Trial</th>
                        <th className="p-2">[NO]â‚€ (M)</th>
                        <th className="p-2">[Oâ‚‚]â‚€ (M)</th>
                        <th className="p-2">Initial Rate (M/s)</th>
                      </tr>
                    </thead>
                    <tbody className="font-mono">
                      <tr className="border-t"><td className="p-2">1</td><td className="p-2">0.010</td><td className="p-2">0.010</td><td className="p-2">2.5Ã—10â»âµ</td></tr>
                      <tr className="border-t"><td className="p-2">2</td><td className="p-2">0.020</td><td className="p-2">0.010</td><td className="p-2">1.0Ã—10â»â´</td></tr>
                      <tr className="border-t"><td className="p-2">3</td><td className="p-2">0.010</td><td className="p-2">0.020</td><td className="p-2">5.0Ã—10â»âµ</td></tr>
                    </tbody>
                  </table>
                  
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6"><strong>Find order with respect to NO (compare trials 1 & 2):</strong></p>
                  <p className="ml-12">Rateâ‚‚/Rateâ‚ = (1.0Ã—10â»â´)/(2.5Ã—10â»âµ) = 4</p>
                  <p className="ml-12">[NO]â‚‚/[NO]â‚ = 0.020/0.010 = 2</p>
                  <p className="ml-12">4 = 2<sup>m</sup> â†’ m = 2</p>
                  <p className="ml-6 font-bold text-green-600">Order with respect to NO = 2</p>
                  
                  <p className="ml-6 mt-4"><strong>Find order with respect to Oâ‚‚ (compare trials 1 & 3):</strong></p>
                  <p className="ml-12">Rateâ‚ƒ/Rateâ‚ = (5.0Ã—10â»âµ)/(2.5Ã—10â»âµ) = 2</p>
                  <p className="ml-12">[Oâ‚‚]â‚ƒ/[Oâ‚‚]â‚ = 0.020/0.010 = 2</p>
                  <p className="ml-12">2 = 2<sup>n</sup> â†’ n = 1</p>
                  <p className="ml-6 font-bold text-green-600">Order with respect to Oâ‚‚ = 1</p>
                  
                  <p className="ml-6 mt-4"><strong>Overall:</strong></p>
                  <p className="ml-12 font-bold text-blue-600 text-xl">Rate = k[NO]Â²[Oâ‚‚]</p>
                  <p className="ml-12">Overall order = 2 + 1 = 3 (third order)</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">Example 2: Calculate Rate Constant</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> Using data from Example 1, calculate k.</p>
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">Rate = k[NO]Â²[Oâ‚‚]</p>
                  <p className="ml-6">Using Trial 1:</p>
                  <p className="ml-12">2.5Ã—10â»âµ = k(0.010)Â²(0.010)</p>
                  <p className="ml-12">2.5Ã—10â»âµ = k(1.0Ã—10â»â¶)</p>
                  <p className="ml-12">k = 2.5Ã—10â»âµ / 1.0Ã—10â»â¶</p>
                  <p className="ml-6 font-bold text-green-600 text-xl mt-4">k = 25 Mâ»Â²sâ»Â¹</p>
                  <p className="ml-6 text-sm text-blue-600 mt-2">Units: Mâ»Â²sâ»Â¹ for third order (overall order 3)</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-4">Example 3: Fractional Orders</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> When [A] triples, rate increases by factor of 5.2. Find order.</p>
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">Rateâ‚‚/Rateâ‚ = ([A]â‚‚/[A]â‚)<sup>m</sup></p>
                  <p className="ml-6">5.2 = 3<sup>m</sup></p>
                  <p className="ml-6">log(5.2) = m Ã— log(3)</p>
                  <p className="ml-6">0.716 = m Ã— 0.477</p>
                  <p className="ml-6">m = 0.716 / 0.477</p>
                  <p className="ml-6 font-bold text-green-600 text-xl mt-4">m = 1.5 (order = 3/2)</p>
                  <p className="ml-6 text-sm text-blue-600 mt-2">Fractional orders are possible! Often indicates complex mechanisms.</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-emerald-900 dark:text-emerald-300 mb-4">Example 4: Half-Life Method</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> For decomposition of A, t<sub>1/2</sub> is constant = 15.0 min. What is the order?</p>
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">Compare half-life behavior:</p>
                  <ul className="ml-12 space-y-2 list-disc">
                    <li>Zero order: t<sub>1/2</sub> âˆ [A]â‚€ (decreases with [A])</li>
                    <li>First order: t<sub>1/2</sub> = constant âœ“</li>
                    <li>Second order: t<sub>1/2</sub> âˆ 1/[A]â‚€ (increases as [A] decreases)</li>
                  </ul>
                  <p className="ml-6 font-bold text-green-600 text-xl mt-4">First order reaction</p>
                  <p className="ml-6 mt-2">k = 0.693/t<sub>1/2</sub> = 0.693/15.0 = 0.0462 minâ»Â¹</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Common Mistakes</h2>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">âš ï¸</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Using Stoichiometric Coefficients</h3>
                  <p className="text-gray-700 dark:text-gray-300">Order â‰  coefficient! For 2NO + Oâ‚‚ â†’ products, rate â‰  k[NO]Â²[Oâ‚‚]. Must determine experimentally!</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">âš ï¸</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Comparing Wrong Trials</h3>
                  <p className="text-gray-700 dark:text-gray-300">Only compare trials where ONE concentration changes and others stay constant!</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">âš ï¸</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Ignoring Units of k</h3>
                  <p className="text-gray-700 dark:text-gray-300">Units depend on overall order: 0th (M/s), 1st (sâ»Â¹), 2nd (Mâ»Â¹sâ»Â¹), 3rd (Mâ»Â²sâ»Â¹)</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4">
                <span className="text-2xl">ðŸ’¡</span>
                <div>
                  <h3 className="font-bold text-yellow-900 dark:text-yellow-300 mb-2">Negative Orders Possible</h3>
                  <p className="text-gray-700 dark:text-gray-300">If rate decreases when [A] increases, order can be negative! Example: inhibition.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Related Tools</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/chemistry-formulas/reaction-order-formula" className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-blue-900 mb-2">Reaction Order Calculator</h3>
                <p className="text-sm text-gray-600">Automated order determination</p>
              </Link>
              <Link href="/chemical-reaction-calculators/rate-law-calculator" className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-blue-900 mb-2">Rate Law Calculator</h3>
                <p className="text-sm text-gray-600">Calculate rates and orders</p>
              </Link>
              <Link href="/chemistry-formulas/rate-law" className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-green-900 mb-2">Rate Law Formula</h3>
                <p className="text-sm text-gray-600">Rate expressions</p>
              </Link>
              <Link href="/chemistry-formulas/integrated-rate-law-formula" className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-green-900 mb-2">Integrated Rate Laws</h3>
                <p className="text-sm text-gray-600">Concentration vs time</p>
              </Link>
              <Link href="/chemistry-formulas/arrhenius-equation" className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-green-900 mb-2">Arrhenius Equation</h3>
                <p className="text-sm text-gray-600">Temperature effects on k</p>
              </Link>
              <Link href="/chemical-reaction-calculators" className="p-6 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-semibold mb-2">All Chemical Kinetics Calculators</h3>
                <p className="text-sm opacity-90">Explore all kinetics tools and calculators</p>
              </Link>
            </div>
          </div>
        </section>
      
      {/* Structured Data - EducationalArticle */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": "Reaction Order Formula",
            "description": "Reaction Order Formula on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/reaction-order-formula",
            "author": {
              "@type": "Person",
              "name": "Muhammad Zohaib",
              "jobTitle": "Chemist"
            },
            "publisher": {
              "@type": "EducationalOrganization",
              "name": "ChemSolved",
              "url": "https://chemsolved.com"
            },
            "educationalLevel": "University",
            "educationalUse": "Reference"
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
                "name": "Reaction Order Formula",
                "item": "https://chemsolved.com/chemistry-formulas/reaction-order-formula"
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
