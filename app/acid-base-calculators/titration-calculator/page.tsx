import TitrationCalculator from '@/components/calculators/TitrationCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata = {
  title: 'Titration Calculator | Chemistry Calculators',
  description: 'Calculate pH at various points during acid-base titrations. Determine equivalence points, initial pH, and select appropriate indicators.',
  keywords: 'titration calculator, acid-base titration, pH calculation, equivalence point, indicator selection, chemistry calculator',
  alternates: {
    canonical: 'https://chemsolved.com/acid-base-calculators/titration-calculator',
  },
};

export default function TitrationCalculatorPage() {  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-tertiary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Titration Calculator
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Analyze acid-base titrations and calculate pH at any point in the titration curve
          </p>
        </div>

        <TitrationCalculator />

        {/* Educational Content */}
        <div className="mt-12 space-y-8">
          {/* What is Titration? */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              What is Acid-Base Titration?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Titration</strong> is a quantitative analytical technique used to determine the concentration of an 
              unknown acid or base solution by reacting it with a solution of known concentration (the titrant). 
              The point at which stoichiometrically equivalent amounts of acid and base have reacted is called 
              the <strong>equivalence point</strong>.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Key Concepts:</h3>
              <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                <li>â€¢ <strong>Titrant:</strong> Solution of known concentration added from burette</li>
                <li>â€¢ <strong>Analyte:</strong> Solution of unknown concentration in the flask</li>
                <li>â€¢ <strong>Equivalence Point:</strong> When moles of acid = moles of base</li>
                <li>â€¢ <strong>Endpoint:</strong> When indicator changes color (should match equivalence point)</li>
                <li>â€¢ <strong>Titration Curve:</strong> Graph of pH vs volume of titrant added</li>
              </ul>
            </div>
          </section>

          {/* Types of Titrations */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Types of Acid-Base Titrations
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  1. Strong Acid - Strong Base
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Example: HCl + NaOH â†’ NaCl + Hâ‚‚O
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <p className="text-sm text-gray-800 dark:text-gray-200 mb-2">
                    <strong>Characteristics:</strong>
                  </p>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>â€¢ Initial pH: Very low (&lt; 2)</li>
                    <li>â€¢ Equivalence point pH: 7.0 (neutral)</li>
                    <li>â€¢ Sharp, vertical pH jump at equivalence</li>
                    <li>â€¢ Indicator: Bromothymol blue, phenolphthalein</li>
                  </ul>
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  2. Weak Acid - Strong Base
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Example: CHâ‚ƒCOOH + NaOH â†’ CHâ‚ƒCOONa + Hâ‚‚O
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <p className="text-sm text-gray-800 dark:text-gray-200 mb-2">
                    <strong>Characteristics:</strong>
                  </p>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>â€¢ Initial pH: Higher than strong acid (3-6)</li>
                    <li>â€¢ Equivalence point pH: &gt; 7 (basic, typically 8-10)</li>
                    <li>â€¢ Buffer region before equivalence (pH â‰ˆ pKa at halfway point)</li>
                    <li>â€¢ Less sharp pH jump</li>
                    <li>â€¢ Indicator: Phenolphthalein (pKa â‰ˆ 9.3)</li>
                  </ul>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  3. Strong Acid - Weak Base
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Example: HCl + NHâ‚ƒ â†’ NHâ‚„Cl
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <p className="text-sm text-gray-800 dark:text-gray-200 mb-2">
                    <strong>Characteristics:</strong>
                  </p>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>â€¢ Initial pH: High (9-11)</li>
                    <li>â€¢ Equivalence point pH: &lt; 7 (acidic, typically 4-6)</li>
                    <li>â€¢ Buffer region before equivalence</li>
                    <li>â€¢ Less sharp pH jump</li>
                    <li>â€¢ Indicator: Methyl orange (pKa â‰ˆ 3.7)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Calculations */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Titration Calculations
            </h2>

            <div className="space-y-6">
              <div className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">
                  Finding Equivalence Point Volume:
                </h3>
                <p className="text-indigo-800 dark:text-indigo-200 font-mono text-lg mb-2">
                  Mâ‚Vâ‚ = Mâ‚‚Vâ‚‚
                </p>
                <p className="text-sm text-indigo-700 dark:text-indigo-300">
                  For monoprotic acids and bases: Moles of acid = Moles of base
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                  pH Before Equivalence Point:
                </h3>
                <p className="text-sm text-green-800 dark:text-green-200 mb-2">
                  <strong>Strong Acid-Strong Base:</strong>
                </p>
                <p className="text-green-700 dark:text-green-300 font-mono mb-2">
                  pH = -log[Hâº] where [Hâº] = (moles acid - moles base) / total volume
                </p>
                <p className="text-sm text-green-800 dark:text-green-200 mb-2">
                  <strong>Weak Acid-Strong Base (buffer region):</strong>
                </p>
                <p className="text-green-700 dark:text-green-300 font-mono">
                  pH = pKa + log([Aâ»]/[HA]) (Henderson-Hasselbalch)
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">
                  pH at Equivalence Point:
                </h3>
                <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-2">
                  <li>â€¢ <strong>Strong-Strong:</strong> pH = 7.0 (neutral salt solution)</li>
                  <li>â€¢ <strong>Weak Acid-Strong Base:</strong> pH &gt; 7 (conjugate base hydrolyzes)</li>
                  <li>â€¢ <strong>Strong Acid-Weak Base:</strong> pH &lt; 7 (conjugate acid dissociates)</li>
                </ul>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">
                  pH After Equivalence Point:
                </h3>
                <p className="text-sm text-orange-800 dark:text-orange-200">
                  Determined by excess titrant (strong base or strong acid)
                </p>
                <p className="text-orange-700 dark:text-orange-300 font-mono mt-2">
                  pH = 14 - pOH where pOH = -log[OHâ»] (excess base)
                </p>
              </div>
            </div>
          </section>

          {/* Indicators */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Acid-Base Indicators
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Indicators are weak acids or bases that change color over a specific pH range. 
              Choose an indicator whose transition range includes the pH at the equivalence point.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th className="px-4 py-2 text-left text-gray-900 dark:text-white">Indicator</th>
                    <th className="px-4 py-2 text-left text-gray-900 dark:text-white">pH Range</th>
                    <th className="px-4 py-2 text-left text-gray-900 dark:text-white">Color Change</th>
                    <th className="px-4 py-2 text-left text-gray-900 dark:text-white">Best For</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="px-4 py-2">Methyl orange</td>
                    <td className="px-4 py-2">3.1 - 4.4</td>
                    <td className="px-4 py-2">Red â†’ Yellow</td>
                    <td className="px-4 py-2">Strong acid - Weak base</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="px-4 py-2">Methyl red</td>
                    <td className="px-4 py-2">4.4 - 6.2</td>
                    <td className="px-4 py-2">Red â†’ Yellow</td>
                    <td className="px-4 py-2">Strong acid - Weak base</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="px-4 py-2">Bromothymol blue</td>
                    <td className="px-4 py-2">6.0 - 7.6</td>
                    <td className="px-4 py-2">Yellow â†’ Blue</td>
                    <td className="px-4 py-2">Strong acid - Strong base</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="px-4 py-2">Phenolphthalein</td>
                    <td className="px-4 py-2">8.3 - 10.0</td>
                    <td className="px-4 py-2">Colorless â†’ Pink</td>
                    <td className="px-4 py-2">Weak acid - Strong base</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="px-4 py-2">Thymol blue</td>
                    <td className="px-4 py-2">8.0 - 9.6</td>
                    <td className="px-4 py-2">Yellow â†’ Blue</td>
                    <td className="px-4 py-2">Weak acid - Strong base</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Example Problem */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Example Problem
            </h2>
            <div className="border-l-4 border-tertiary-500 pl-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Titration of Acetic Acid with Sodium Hydroxide
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Problem:</strong> 25.0 mL of 0.100 M acetic acid (CHâ‚ƒCOOH, Ka = 1.8 Ã— 10â»âµ) is titrated 
                with 0.100 M NaOH. Calculate:
              </p>
              <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li>Initial pH</li>
                <li>Volume of NaOH needed to reach equivalence point</li>
                <li>pH at equivalence point</li>
                <li>pH at half-equivalence point</li>
              </ol>

              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg space-y-4">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white mb-1">Solution:</p>
                  
                  <p className="text-sm text-gray-800 dark:text-gray-200 font-semibold mt-3 mb-1">1. Initial pH:</p>
                  <p className="font-mono text-sm text-gray-700 dark:text-gray-300">
                    [Hâº] = âˆš(Ka Ã— Ca) = âˆš(1.8Ã—10â»âµ Ã— 0.100) = 1.34Ã—10â»Â³ M
                    <br />
                    pH = -log(1.34Ã—10â»Â³) = 2.87
                  </p>

                  <p className="text-sm text-gray-800 dark:text-gray-200 font-semibold mt-3 mb-1">2. Volume at Equivalence:</p>
                  <p className="font-mono text-sm text-gray-700 dark:text-gray-300">
                    Mâ‚Vâ‚ = Mâ‚‚Vâ‚‚
                    <br />
                    Veq = (0.100 Ã— 25.0) / 0.100 = 25.0 mL
                  </p>

                  <p className="text-sm text-gray-800 dark:text-gray-200 font-semibold mt-3 mb-1">3. pH at Equivalence:</p>
                  <p className="font-mono text-sm text-gray-700 dark:text-gray-300">
                    Only CHâ‚ƒCOOâ» present; Kb = Kw/Ka = 10â»Â¹â´/(1.8Ã—10â»âµ) = 5.56Ã—10â»Â¹â°
                    <br />
                    [CHâ‚ƒCOOâ»] = 0.0025 mol / 0.050 L = 0.050 M
                    <br />
                    [OHâ»] = âˆš(Kb Ã— C) = âˆš(5.56Ã—10â»Â¹â° Ã— 0.050) = 5.27Ã—10â»â¶ M
                    <br />
                    pOH = 5.28, pH = 14 - 5.28 = 8.72
                  </p>

                  <p className="text-sm text-gray-800 dark:text-gray-200 font-semibold mt-3 mb-1">4. pH at Half-Equivalence (12.5 mL):</p>
                  <p className="font-mono text-sm text-gray-700 dark:text-gray-300">
                    pH = pKa = -log(1.8Ã—10â»âµ) = 4.74
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-300 dark:border-gray-600">
                  <p className="font-semibold text-tertiary-600 dark:text-tertiary-400">
                    Answers: Initial pH = 2.87, Veq = 25.0 mL, pH at equivalence = 8.72, pH at half-equivalence = 4.74
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Best indicator: Phenolphthalein (transition at pH 8.3-10.0)
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Applications */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Applications of Titration
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">ðŸ”¬ Analytical Chemistry</h3>
                <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                  <li>â€¢ Determining unknown acid/base concentrations</li>
                  <li>â€¢ Quality control in pharmaceuticals</li>
                  <li>â€¢ Water hardness analysis</li>
                  <li>â€¢ Standardizing solutions</li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">ðŸ· Food Industry</h3>
                <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                  <li>â€¢ Measuring acidity in wine and beer</li>
                  <li>â€¢ Determining citric acid content in fruits</li>
                  <li>â€¢ Quality control of dairy products</li>
                  <li>â€¢ Vinegar acetic acid content</li>
                </ul>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">âš•ï¸ Medicine</h3>
                <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-1">
                  <li>â€¢ Drug purity testing</li>
                  <li>â€¢ Blood pH measurements</li>
                  <li>â€¢ Pharmaceutical formulation</li>
                  <li>â€¢ Vitamin C content determination</li>
                </ul>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">ðŸŒ± Environmental</h3>
                <ul className="text-sm text-yellow-800 dark:text-yellow-200 space-y-1">
                  <li>â€¢ Soil pH analysis</li>
                  <li>â€¢ Water quality testing</li>
                  <li>â€¢ Acid rain monitoring</li>
                  <li>â€¢ Industrial waste analysis</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    ðŸ”— Related Calculators
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="/acid-base-calculators/titration-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>â†’</span>
                        <span>Titration Curve Calculator</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/acid-base-calculators/pka-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>â†’</span>
                        <span>Buffer Solution Calculator</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/acid-base-calculators/pka-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>â†’</span>
                        <span>Buffer Capacity Calculator</span>
                      </a>
                    </li>
                  </ul>
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      ðŸ“ Related Formulas
                    </h3>
                    <ul className="space-y-3">
                      <li>
                        <a
                          href="/chemistry-formulas/titration-formula"
                          className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                        >
                          <span>â†’</span>
                          <span>Titration Formula</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/chemistry-formulas/acid-dissociation-constant-formula"
                          className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                        >
                          <span>â†’</span>
                          <span>Acid Dissociation Constant (Ka)</span>
                        </a>
                      </li>
                    </ul>
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
            "name": "Titration Calculator",
            "description": "Titration Calculator on ChemSolved",
            "url": "https://chemsolved.com/acid-base-calculators/titration-calculator",
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
                "name": "Titration Calculator",
                "item": "https://chemsolved.com/acid-base-calculators/titration-calculator"
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