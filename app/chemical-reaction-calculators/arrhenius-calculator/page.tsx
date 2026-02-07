import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArrheniusCalculator from '@/components/calculators/ArrheniusCalculator';

export const metadata: Metadata = {
  title: 'Arrhenius Equation Calculator | Activation Energy | Temperature Effects',
  description: 'Calculate rate constants, activation energy, and temperature effects using the Arrhenius equation: k = A·e^(-Ea/RT). Essential for chemical kinetics.',
  alternates: {
    canonical: 'https://chemsolved.com/chemical-reaction-calculators/arrhenius-calculator',
  },
};

export default function ArrheniusCalculatorPage() {
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
            <span className="text-gray-500 dark:text-gray-400">Arrhenius Equation Calculator</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-6 mb-4 animate-fade-in">
            Arrhenius Equation Calculator
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in animation-delay-100">
            Calculate temperature effects on reaction rates and activation energy
          </p>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 space-y-8">
              <ArrheniusCalculator />

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 animate-slide-in-up animation-delay-200">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Understanding the Arrhenius Equation
                </h2>
                
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    The Arrhenius equation describes how the rate constant of a chemical reaction depends on 
                    temperature and activation energy. It&apos;s one of the most important equations in chemical 
                    kinetics for understanding and predicting reaction rates.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    The Equation
                  </h3>

                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
                    <div className="font-mono text-xl bg-white dark:bg-gray-600 p-4 rounded mb-3 text-center">
                      k = A·e<sup>-Ea/RT</sup>
                    </div>
                    <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                      <p><strong>k</strong> = rate constant (units vary with reaction order)</p>
                      <p><strong>A</strong> = frequency factor or pre-exponential factor (same units as k)</p>
                      <p><strong>Ea</strong> = activation energy (J/mol or kJ/mol)</p>
                      <p><strong>R</strong> = universal gas constant (8.314 J/(mol·K))</p>
                      <p><strong>T</strong> = absolute temperature (K)</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Linearized Form
                  </h3>

                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
                    <div className="font-mono bg-white dark:bg-gray-600 p-3 rounded mb-2">
                      ln(k) = ln(A) - Ea/RT
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Plotting ln(k) vs 1/T gives a straight line with slope = -Ea/R and y-intercept = ln(A)
                    </p>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Example: Temperature Effect on Rate Constant
                  </h3>

                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      <strong>Given:</strong>
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700 dark:text-gray-300 mb-4">
                      <li>A = 1.0 × 10<sup>13</sup> s<sup>-1</sup></li>
                      <li>Ea = 75 kJ/mol</li>
                      <li>T = 298 K (25°C)</li>
                    </ul>

                    <p className="text-gray-700 dark:text-gray-300 mb-3"><strong>Calculate k:</strong></p>
                    <div className="font-mono bg-white dark:bg-gray-600 p-3 rounded space-y-1 text-sm">
                      <p>k = (1.0 × 10<sup>13</sup>) × e<sup>-(75,000)/(8.314×298)</sup></p>
                      <p>k = (1.0 × 10<sup>13</sup>) × e<sup>-30.3</sup></p>
                      <p>k = (1.0 × 10<sup>13</sup>) × 8.54 × 10<sup>-14</sup></p>
                      <p className="text-tertiary-600 dark:text-tertiary-400 font-bold">k = 0.854 s<sup>-1</sup></p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Activation Energy Interpretation
                  </h3>

                  <div className="overflow-x-auto mb-6">
                    <table className="min-w-full border border-gray-300 dark:border-gray-600">
                      <thead className="bg-gray-100 dark:bg-gray-700">
                        <tr>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Ea Range (kJ/mol)</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Characteristic</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Examples</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        <tr><td className="border px-4 py-2">&lt; 20</td><td className="border px-4 py-2">Very fast reactions</td><td className="border px-4 py-2">Ion combinations</td></tr>
                        <tr className="bg-gray-50 dark:bg-gray-700/50"><td className="border px-4 py-2">20-50</td><td className="border px-4 py-2">Fast reactions</td><td className="border px-4 py-2">Many organic reactions</td></tr>
                        <tr><td className="border px-4 py-2">50-100</td><td className="border px-4 py-2">Moderate reactions</td><td className="border px-4 py-2">Esterification</td></tr>
                        <tr className="bg-gray-50 dark:bg-gray-700/50"><td className="border px-4 py-2">100-200</td><td className="border px-4 py-2">Slow reactions</td><td className="border px-4 py-2">Cracking reactions</td></tr>
                        <tr><td className="border px-4 py-2">&gt; 200</td><td className="border px-4 py-2">Very slow reactions</td><td className="border px-4 py-2">Bond breaking in stable molecules</td></tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Temperature Rule of Thumb
                  </h3>

                  <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg mb-6 border-l-4 border-yellow-500">
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>Common Approximation:</strong> For many reactions with Ea around 50-60 kJ/mol, 
                      the rate approximately doubles for every 10°C increase in temperature.
                    </p>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Applications
                  </h3>
                  
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🌡️</span>
                      <div>
                        <strong>Temperature Control:</strong> Predicting optimal reaction temperatures in industrial processes
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🔬</span>
                      <div>
                        <strong>Mechanism Studies:</strong> Determining activation energies to understand reaction pathways
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">💊</span>
                      <div>
                        <strong>Shelf Life:</strong> Predicting drug stability and food spoilage at different storage temperatures
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">⚡</span>
                      <div>
                        <strong>Catalysis:</strong> Evaluating catalyst effectiveness by measuring Ea reduction
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
                    <span className="text-2xl">📊</span>
                    Quick Reference
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">R constant:</p>
                      <p className="text-gray-600 dark:text-gray-400">8.314 J/(mol·K)</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Temperature:</p>
                      <p className="text-gray-600 dark:text-gray-400">Must be in Kelvin</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Higher Ea:</p>
                      <p className="text-gray-600 dark:text-gray-400">More temperature sensitive</p>
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
                      <Link href="/chemical-reaction-calculators/rate-law-calculator" className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors">
                        Rate Law Calculator
                      </Link>
                    </li>
                    <li>
                      <Link href="/thermodynamics-calculators/gibbs-free-energy-calculator" className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors">
                        Gibbs Free Energy
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
                        <Link href="/chemistry-formulas/arrhenius-equation" className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors">
                          Arrhenius Equation
                        </Link>
                      </li>
                      <li>
                        <Link href="/chemistry-formulas/rate-law" className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors">
                          Rate Law Formula
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
                      <span className="text-xl">🏭</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Industry</p>
                        <p className="text-gray-600 dark:text-gray-400">Process optimization</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">🔬</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Research</p>
                        <p className="text-gray-600 dark:text-gray-400">Mechanism studies</p>
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
            "name": "Arrhenius Calculator",
            "description": "Arrhenius Calculator on ChemSolved",
            "url": "https://chemsolved.com/chemical-reaction-calculators/arrhenius-calculator",
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
                "name": "Arrhenius Calculator",
                "item": "https://chemsolved.com/chemical-reaction-calculators/arrhenius-calculator"
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
