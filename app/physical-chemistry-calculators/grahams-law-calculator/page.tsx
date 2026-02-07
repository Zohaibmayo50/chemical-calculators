import { Metadata } from 'next';
import GrahamsLawCalculator from '@/components/calculators/GrahamsLawCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: "Graham's Law Calculator | Gas Diffusion | Effusion Rates",
  description: "Calculate diffusion and effusion rates using Graham's Law. Essential for gas separation, molecular velocity calculations, and isotope separation.",
  keywords: ['grahams law', 'diffusion', 'effusion', 'gas rates', 'molar mass', 'molecular velocity', 'gas separation', 'kinetic theory'],
  alternates: {
    canonical: 'https://chemsolved.com/physical-chemistry-calculators/grahams-law-calculator',
  },
};

export default function GrahamsLawCalculatorPage() {  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Graham&apos;s Law Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Calculate gas diffusion and effusion rates based on molar mass using Graham&apos;s Law
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <GrahamsLawCalculator />
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Understanding Graham&apos;s Law
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300">
                  Graham&apos;s Law states that the rate of diffusion or effusion of a gas is inversely
                  proportional to the square root of its molar mass.
                </p>
                <div className="my-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <p className="font-semibold text-blue-900 dark:text-blue-100">rate₁/rate₂ = √(M₂/M₁)</p>
                  <ul className="text-sm mt-2 space-y-1 text-blue-800 dark:text-blue-200">
                    <li>rate = diffusion or effusion rate</li>
                    <li>M = molar mass (g/mol)</li>
                    <li>Lighter gases move faster</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Diffusion vs Effusion
              </h3>
              <div className="prose dark:prose-invert max-w-none">
                <div className="space-y-3">
                  <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
                    <p className="font-semibold text-green-900 dark:text-green-100 text-sm">Diffusion</p>
                    <p className="text-xs text-green-800 dark:text-green-200 mt-1">
                      Movement of gas molecules through another gas or medium
                    </p>
                  </div>
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                    <p className="font-semibold text-blue-900 dark:text-blue-100 text-sm">Effusion</p>
                    <p className="text-xs text-blue-800 dark:text-blue-200 mt-1">
                      Escape of gas molecules through a tiny hole into a vacuum
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
                  <span className="text-sm"><strong>Isotope Separation:</strong> Enriching uranium-235 from uranium-238</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tertiary-500 mr-2">•</span>
                  <span className="text-sm"><strong>Gas Leaks:</strong> Detecting helium leaks in vacuum systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tertiary-500 mr-2">•</span>
                  <span className="text-sm"><strong>Atmospheric Science:</strong> Understanding gas mixing in air</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tertiary-500 mr-2">•</span>
                  <span className="text-sm"><strong>Medical:</strong> Anesthetic gas delivery and ventilation</span>
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
            <div className="prose dark:prose-invert max-w-none">
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg mb-4">
                <p className="font-semibold text-gray-900 dark:text-white mb-2">Problem:</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  If helium (He, M = 4.00 g/mol) effuses at a rate of 10.0 mL/min, how fast will oxygen (O₂, M = 32.00 g/mol) effuse?
                </p>
              </div>

              <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <div>
                  <p className="font-semibold mb-1">Step 1: Identify values</p>
                  <p className="font-mono bg-gray-50 dark:bg-gray-700 p-2 rounded">
                    rate<sub>He</sub> = 10.0 mL/min<br />
                    M<sub>He</sub> = 4.00 g/mol<br />
                    M<sub>O₂</sub> = 32.00 g/mol
                  </p>
                </div>

                <div>
                  <p className="font-semibold mb-1">Step 2: Apply Graham&apos;s Law</p>
                  <p className="font-mono bg-gray-50 dark:bg-gray-700 p-2 rounded">
                    rate<sub>He</sub>/rate<sub>O₂</sub> = √(M<sub>O₂</sub>/M<sub>He</sub>)
                  </p>
                </div>

                <div>
                  <p className="font-semibold mb-1">Step 3: Calculate</p>
                  <p className="font-mono bg-gray-50 dark:bg-gray-700 p-2 rounded">
                    10.0/rate<sub>O₂</sub> = √(32.00/4.00)<br />
                    10.0/rate<sub>O₂</sub> = √8 = 2.828<br />
                    rate<sub>O₂</sub> = 10.0/2.828 = 3.54 mL/min
                  </p>
                </div>

                <div className="p-3 bg-tertiary-50 dark:bg-tertiary-900/30 rounded-lg">
                  <p className="font-semibold text-tertiary-900 dark:text-tertiary-100">Result:</p>
                  <p className="text-tertiary-800 dark:text-tertiary-200">
                    Helium effuses 2.83 times faster than oxygen because it&apos;s much lighter.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Relative Rates of Common Gases
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                Relative to oxygen (O₂ = 1.00):
              </p>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-300 dark:border-gray-600">
                    <th className="text-left py-2 text-gray-900 dark:text-white">Gas</th>
                    <th className="text-center py-2 text-gray-900 dark:text-white">M (g/mol)</th>
                    <th className="text-center py-2 text-gray-900 dark:text-white">Relative Rate</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 font-semibold">H₂</td>
                    <td className="text-center py-2">2.02</td>
                    <td className="text-center py-2 text-green-600 dark:text-green-400">3.98×</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 font-semibold">He</td>
                    <td className="text-center py-2">4.00</td>
                    <td className="text-center py-2 text-green-600 dark:text-green-400">2.83×</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 font-semibold">CH₄</td>
                    <td className="text-center py-2">16.04</td>
                    <td className="text-center py-2 text-green-600 dark:text-green-400">1.41×</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 font-semibold">N₂</td>
                    <td className="text-center py-2">28.01</td>
                    <td className="text-center py-2">1.07×</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 font-semibold">O₂</td>
                    <td className="text-center py-2">32.00</td>
                    <td className="text-center py-2 font-bold">1.00×</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 font-semibold">CO₂</td>
                    <td className="text-center py-2">44.01</td>
                    <td className="text-center py-2 text-orange-600 dark:text-orange-400">0.85×</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 font-semibold">Cl₂</td>
                    <td className="text-center py-2">70.90</td>
                    <td className="text-center py-2 text-orange-600 dark:text-orange-400">0.67×</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Uranium Enrichment Application
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="prose dark:prose-invert max-w-none">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">The Process:</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Graham&apos;s Law is used to separate uranium-235 from uranium-238 for nuclear fuel:
              </p>
              <div className="space-y-2 text-sm">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <p className="font-mono text-blue-900 dark:text-blue-100">
                    UF₆ (²³⁵U): M = 349.03 g/mol
                  </p>
                  <p className="font-mono text-blue-900 dark:text-blue-100">
                    UF₆ (²³⁸U): M = 352.04 g/mol
                  </p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <p className="font-semibold text-gray-900 dark:text-white mb-1">Rate Ratio:</p>
                  <p className="font-mono text-sm text-gray-700 dark:text-gray-300">
                    rate₂₃₅/rate₂₃₈ = √(352.04/349.03) = 1.0043
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                    ²³⁵UF₆ effuses only 0.43% faster! Requires thousands of stages.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Practical Considerations:</h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">⚠</span>
                  <span>Requires gaseous uranium hexafluoride (UF₆)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">⚠</span>
                  <span>Thousands of effusion stages needed for enrichment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">⚠</span>
                  <span>Very small mass difference (3 amu out of ~352)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">⚠</span>
                  <span>Energy-intensive industrial process</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Centrifuges now more common than gaseous diffusion</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Kinetic Molecular Theory Connection
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Root-Mean-Square Velocity:</h3>
                <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg mb-3">
                  <p className="font-mono text-sm text-blue-900 dark:text-blue-100">
                    v<sub>rms</sub> = √(3RT/M)
                  </p>
                  <p className="text-xs text-blue-800 dark:text-blue-200 mt-2">
                    R = 8.314 J/(mol·K), T = temperature (K), M = molar mass (kg/mol)
                  </p>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Graham&apos;s Law comes from the fact that rate ∝ velocity ∝ 1/√M
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Average Velocities (25°C):</h3>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-300 dark:border-gray-600">
                      <th className="text-left py-2 text-gray-900 dark:text-white">Gas</th>
                      <th className="text-center py-2 text-gray-900 dark:text-white">v<sub>rms</sub> (m/s)</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 dark:text-gray-300">
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2">H₂</td>
                      <td className="text-center py-2">1927</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2">He</td>
                      <td className="text-center py-2">1363</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2">N₂</td>
                      <td className="text-center py-2">515</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2">O₂</td>
                      <td className="text-center py-2">482</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-tertiary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Key Assumptions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Graham&apos;s Law Applies When:</h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Gases behave ideally</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Same temperature for both gases</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Same pressure conditions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Effusion through very small holes (molecular flow)</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Limitations:</h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Large holes (viscous flow dominates)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Very high pressures (non-ideal behavior)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Liquids (Graham&apos;s Law is for gases only)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Chemical reactions during diffusion</span>
                </li>
              </ul>
            </div>

            {/* Related Calculators */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mt-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                🔗 Related Calculators
              </h3>
              <ul className="space-y-3">
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
                    href="/physical-chemistry-calculators/kinetic-molecular-theory-calculator"
                    className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                  >
                    <span>→</span>
                    <span>Kinetic Molecular Theory</span>
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
                      href="/chemistry-formulas/grahams-law"
                      className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                    >
                      <span>→</span>
                      <span>Graham's Law Formula</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/chemistry-formulas/grahams-law"
                      className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                    >
                      <span>→</span>
                      <span>Diffusion Formula</span>
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
            "name": "Grahams Law Calculator",
            "description": "Grahams Law Calculator on ChemSolved",
            "url": "https://chemsolved.com/physical-chemistry-calculators/grahams-law-calculator",
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
                "name": "Grahams Law Calculator",
                "item": "https://chemsolved.com/physical-chemistry-calculators/grahams-law-calculator"
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