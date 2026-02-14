import { Metadata } from 'next';
import VanDerWaalsCalculator from '@/components/calculators/VanDerWaalsCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: "Van der Waals Calculator | Real Gas Equation | Non-Ideal Gases",
  description: "Calculate real gas behavior using Van der Waals equation. Account for molecular size and intermolecular forces in gas calculations.",
  keywords: ['van der waals', 'real gas', 'non-ideal gas', 'intermolecular forces', 'molecular volume', 'gas constants', 'high pressure'],
  alternates: {
    canonical: 'https://chemsolved.com/physical-chemistry-calculators/van-der-waals-calculator',
  },
};

export default function VanDerWaalsCalculatorPage() {  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Van der Waals Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Calculate real gas behavior accounting for molecular size and intermolecular attractions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <VanDerWaalsCalculator />
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Understanding Van der Waals Equation
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300">
                  The Van der Waals equation corrects the ideal gas law for real gas behavior by accounting
                  for molecular volume and intermolecular attractions.
                </p>
                <div className="my-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <p className="font-semibold text-blue-900 dark:text-blue-100">[P + a(n/V)²](V - nb) = nRT</p>
                  <ul className="text-sm mt-2 space-y-1 text-blue-800 dark:text-blue-200">
                    <li>a = attraction parameter (L²·atm/mol²)</li>
                    <li>b = volume parameter (L/mol)</li>
                    <li>Reduces to PV = nRT when a,b = 0</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                The Corrections
              </h3>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <div className="space-y-3">
                  <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
                    <p className="font-semibold text-green-900 dark:text-green-100 text-sm">Pressure Correction (a)</p>
                    <p className="text-xs text-green-800 dark:text-green-200 mt-1">
                      P<sub>real</sub> = P<sub>ideal</sub> - a(n/V)²<br/>
                      Attractions reduce pressure below ideal
                    </p>
                  </div>
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                    <p className="font-semibold text-blue-900 dark:text-blue-100 text-sm">Volume Correction (b)</p>
                    <p className="text-xs text-blue-800 dark:text-blue-200 mt-1">
                      V<sub>available</sub> = V - nb<br/>
                      Molecules occupy space, reducing free volume
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Where It&apos;s Used
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-tertiary-500 mr-2">•</span>
                  <span className="text-sm"><strong>High Pressure:</strong> Industrial gas storage and processing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tertiary-500 mr-2">•</span>
                  <span className="text-sm"><strong>Low Temperature:</strong> Liquefaction and cryogenics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tertiary-500 mr-2">•</span>
                  <span className="text-sm"><strong>Polar Gases:</strong> H₂O, NH₃ with strong IMFs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tertiary-500 mr-2">•</span>
                  <span className="text-sm"><strong>Large Molecules:</strong> CO₂, hydrocarbons</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Example Calculation
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg mb-4">
                <p className="font-semibold text-gray-900 dark:text-white mb-2">Problem:</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Calculate the pressure of 1.00 mol CO₂ in a 1.00 L container at 300 K using both ideal and Van der Waals equations.
                  For CO₂: a = 3.658 L²·atm/mol², b = 0.0429 L/mol
                </p>
              </div>

              <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <div>
                  <p className="font-semibold mb-1">Ideal Gas Law:</p>
                  <p className="font-mono bg-gray-50 dark:bg-gray-700 p-2 rounded">
                    P = nRT/V<br />
                    P = (1.00)(0.08206)(300)/1.00<br />
                    P = 24.62 atm
                  </p>
                </div>

                <div>
                  <p className="font-semibold mb-1">Van der Waals Equation:</p>
                  <p className="font-mono bg-gray-50 dark:bg-gray-700 p-2 rounded">
                    P = [nRT/(V-nb)] - a(n/V)²<br />
                    P = [(1.00)(0.08206)(300)/(1.00-0.0429)] - 3.658(1.00)²<br />
                    P = 24.62/0.9571 - 3.658<br />
                    P = 25.72 - 3.66 = 22.06 atm
                  </p>
                </div>

                <div className="p-3 bg-tertiary-50 dark:bg-tertiary-900/30 rounded-lg">
                  <p className="font-semibold text-tertiary-900 dark:text-tertiary-100">Result:</p>
                  <p className="text-tertiary-800 dark:text-tertiary-200">
                    Van der Waals pressure is 2.56 atm lower (10.4% difference) due to intermolecular attractions dominating over volume effects.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Van der Waals Constants
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-300 dark:border-gray-600">
                    <th className="text-left py-2 text-gray-900 dark:text-white">Gas</th>
                    <th className="text-center py-2 text-gray-900 dark:text-white">a</th>
                    <th className="text-center py-2 text-gray-900 dark:text-white">b</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 font-semibold">He</td>
                    <td className="text-center py-2">0.0346</td>
                    <td className="text-center py-2">0.0238</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 font-semibold">H₂</td>
                    <td className="text-center py-2">0.2452</td>
                    <td className="text-center py-2">0.0265</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 font-semibold">N₂</td>
                    <td className="text-center py-2">1.370</td>
                    <td className="text-center py-2">0.0387</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 font-semibold">O₂</td>
                    <td className="text-center py-2">1.382</td>
                    <td className="text-center py-2">0.0319</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 font-semibold">CO₂</td>
                    <td className="text-center py-2">3.658</td>
                    <td className="text-center py-2">0.0429</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 font-semibold">H₂O</td>
                    <td className="text-center py-2">5.537</td>
                    <td className="text-center py-2">0.0305</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 font-semibold">NH₃</td>
                    <td className="text-center py-2">4.225</td>
                    <td className="text-center py-2">0.0371</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 font-semibold">CH₄</td>
                    <td className="text-center py-2">2.303</td>
                    <td className="text-center py-2">0.0431</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                Units: a in L²·atm/mol², b in L/mol
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Interpreting Constants
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Constant &apos;a&apos; (Attraction):</h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">→</span>
                  <span>Measures strength of intermolecular forces</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">→</span>
                  <span>Larger a = stronger attractions (polar molecules, H-bonding)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">→</span>
                  <span>H₂O (5.537) &gt; CO₂ (3.658) &gt; He (0.0346)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">→</span>
                  <span>Reduces pressure below ideal value</span>
                </li>
              </ul>

              <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <p className="text-xs text-blue-800 dark:text-blue-200">
                  High &apos;a&apos; gases are easier to liquefy because molecules attract each other strongly.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Constant &apos;b&apos; (Volume):</h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">→</span>
                  <span>Represents volume excluded by molecules</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">→</span>
                  <span>Larger b = larger molecular size</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">→</span>
                  <span>CH₄ (0.0431) &gt; N₂ (0.0387) &gt; He (0.0238)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">→</span>
                  <span>Increases pressure above ideal value</span>
                </li>
              </ul>

              <div className="mt-3 p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
                <p className="text-xs text-green-800 dark:text-green-200">
                  &apos;b&apos; is approximately 4× the actual molecular volume (accounts for excluded volume in collisions).
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            When to Use Van der Waals vs Ideal Gas Law
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-4">
              <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3">Ideal Gas Law Works Well:</h3>
              <ul className="space-y-2 text-sm text-green-800 dark:text-green-200">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Low pressure (&lt; 10 atm)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>High temperature (&gt; 0°C)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Noble gases (He, Ne, Ar)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Small, nonpolar molecules</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Error &lt; 5% acceptable</span>
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/30 rounded-lg p-4">
              <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-3">Use Van der Waals When:</h3>
              <ul className="space-y-2 text-sm text-orange-800 dark:text-orange-200">
                <li className="flex items-start">
                  <span className="mr-2">⚠</span>
                  <span>High pressure (&gt; 10 atm)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">⚠</span>
                  <span>Low temperature (near boiling point)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">⚠</span>
                  <span>Polar gases (H₂O, NH₃, HCl)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">⚠</span>
                  <span>Large molecules (CO₂, hydrocarbons)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">⚠</span>
                  <span>Precision required</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-tertiary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Compressibility Factor
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg mb-3">
                  <p className="font-mono text-sm text-gray-900 dark:text-white">Z = PV/(nRT)</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                    Z = compressibility factor
                  </p>
                </div>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Z = 1: Ideal gas behavior</li>
                  <li>• Z &gt; 1: Repulsions dominate (high P)</li>
                  <li>• Z &lt; 1: Attractions dominate (low T)</li>
                  <li>• Van der Waals helps predict Z</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Typical Z Values:</h3>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-300 dark:border-gray-600">
                      <th className="text-left py-2 text-gray-900 dark:text-white">Condition</th>
                      <th className="text-center py-2 text-gray-900 dark:text-white">Z</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 dark:text-gray-300">
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2">Ideal gas</td>
                      <td className="text-center py-2">1.00</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2">H₂ at 200 atm</td>
                      <td className="text-center py-2">1.07</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2">N₂ at 50 atm</td>
                      <td className="text-center py-2">0.98</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2">CO₂ at 200 atm</td>
                      <td className="text-center py-2">0.75</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Related Calculators */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mt-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                🔗 Related Calculators
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/gas-calculators/ideal-gas-law-calculator"
                    className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                  >
                    <span>→</span>
                    <span>Ideal Gas Law Calculator</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/physical-chemistry-calculators/daltons-law-calculator"
                    className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                  >
                    <span>→</span>
                    <span>Dalton's Law Calculator</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/gas-calculators/gas-density-calculator"
                    className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                  >
                    <span>→</span>
                    <span>Gas Density Calculator</span>
                  </a>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  📐 Related Formulas
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="/chemistry-formulas/van-der-waals-equation"
                      className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                    >
                      <span>→</span>
                      <span>Van der Waals Equation</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/chemistry-formulas/ideal-gas-law"
                      className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                    >
                      <span>→</span>
                      <span>Ideal Gas Law Formula</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <a
                  href="/physical-chemistry-calculators"
                  className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
                >
                  All Physical Chemistry Calculators →
                </a>
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
            "name": "Van Der Waals Calculator",
            "description": "Van Der Waals Calculator on ChemSolved",
            "url": "https://chemsolved.com/physical-chemistry-calculators/van-der-waals-calculator",
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
                "name": "Van Der Waals Calculator",
                "item": "https://chemsolved.com/physical-chemistry-calculators/van-der-waals-calculator"
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