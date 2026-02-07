import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BeersLawCalculator from '@/components/calculators/BeersLawCalculator';

export const metadata: Metadata = {
  title: 'Beer\'s Law Calculator | Beer-Lambert Law | Absorbance Calculator',
  description: 'Calculate concentration, absorbance, molar absorptivity, or path length using Beer\'s Law: A = εbc. Essential for spectroscopy and analytical chemistry.',
  alternates: {
    canonical: 'https://chemsolved.com/physical-chemistry-calculators/beers-law-calculator',
  },
};

export default function BeersLawCalculatorPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-tertiary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <nav className="flex items-center gap-2 text-sm animate-fade-in">
            <Link 
              href="/" 
              className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors"
            >
              Home
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link 
              href="/physical-chemistry-calculators" 
              className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors"
            >
              Physical Chemistry Calculators
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-500 dark:text-gray-400">Beer&apos;s Law Calculator</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-6 mb-4 animate-fade-in">
            Beer&apos;s Law Calculator
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in animation-delay-100">
            Calculate concentration from absorbance using the Beer-Lambert Law
          </p>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Calculator */}
              <BeersLawCalculator />

              {/* Educational Content */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 animate-slide-in-up animation-delay-200">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Understanding Beer&apos;s Law
                </h2>
                
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    Beer&apos;s Law (also known as the Beer-Lambert Law or Beer-Lambert-Bouguer Law) is a 
                    fundamental principle in spectroscopy that establishes a linear relationship between 
                    the absorbance of light by a solution and the concentration of the absorbing species. 
                    It&apos;s one of the most important equations in analytical chemistry.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    The Beer-Lambert Law Equation
                  </h3>
                  
                  <div className="bg-gradient-to-r from-tertiary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg mb-6">
                    <p className="text-center text-2xl font-mono text-gray-900 dark:text-white mb-2">
                      A = εbc
                    </p>
                    <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                      Absorbance as a Function of Concentration
                    </p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="border-l-4 border-tertiary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">A = Absorbance</p>
                      <p className="text-gray-600 dark:text-gray-400">
                        Unitless measure of light absorption (also called optical density)
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-tertiary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">ε = Molar Absorptivity</p>
                      <p className="text-gray-600 dark:text-gray-400">
                        Constant for a given substance at specific wavelength (L/(mol·cm) or M⁻¹cm⁻¹)
                      </p>
                    </div>

                    <div className="border-l-4 border-tertiary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">b = Path Length</p>
                      <p className="text-gray-600 dark:text-gray-400">
                        Distance light travels through sample (usually 1.0 cm in standard cuvettes)
                      </p>
                    </div>

                    <div className="border-l-4 border-tertiary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">c = Concentration</p>
                      <p className="text-gray-600 dark:text-gray-400">
                        Molar concentration of absorbing species (mol/L or M)
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Relationship with Transmittance
                  </h3>

                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      Absorbance and transmittance are inversely related:
                    </p>
                    
                    <div className="space-y-3 font-mono text-center">
                      <p>T = I / I₀</p>
                      <p>A = -log₁₀(T) = log₁₀(I₀ / I)</p>
                      <p>%T = T × 100</p>
                    </div>

                    <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                      <p className="mb-2">Where:</p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>T = Transmittance (fraction of light passing through)</li>
                        <li>I₀ = Incident light intensity</li>
                        <li>I = Transmitted light intensity</li>
                        <li>%T = Percent transmittance</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Optimal Absorbance Range
                  </h3>

                  <div className="overflow-x-auto mb-6">
                    <table className="min-w-full border border-gray-300 dark:border-gray-600">
                      <thead className="bg-gray-100 dark:bg-gray-700">
                        <tr>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Absorbance Range</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">%Transmittance</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Accuracy</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Recommendation</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        <tr className="bg-yellow-50 dark:bg-yellow-900/20">
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">0 - 0.1</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">100% - 79%</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Poor</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Too dilute - concentrate sample</td>
                        </tr>
                        <tr className="bg-green-50 dark:bg-green-900/20">
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-semibold">0.1 - 1.0</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">79% - 10%</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-semibold">Excellent</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Optimal range ✓</td>
                        </tr>
                        <tr className="bg-orange-50 dark:bg-orange-900/20">
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">1.0 - 2.0</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">10% - 1%</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Good</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Acceptable - some deviation</td>
                        </tr>
                        <tr className="bg-red-50 dark:bg-red-900/20">
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">&gt; 2.0</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">&lt; 1%</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Poor</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Too concentrated - dilute sample</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Practical Example: Protein Concentration
                  </h3>

                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      <strong>Problem:</strong> A protein solution shows an absorbance of 0.450 at 280 nm. 
                      The molar absorptivity of the protein at 280 nm is 43,824 L/(mol·cm). Using a standard 
                      1.0 cm cuvette, what is the protein concentration?
                    </p>

                    <div className="space-y-3 text-gray-700 dark:text-gray-300">
                      <p><strong>Given:</strong></p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>A = 0.450 (within optimal range ✓)</li>
                        <li>ε = 43,824 L/(mol·cm)</li>
                        <li>b = 1.0 cm</li>
                      </ul>

                      <p className="mt-4"><strong>Solution:</strong></p>
                      <div className="font-mono bg-white dark:bg-gray-600 p-3 rounded">
                        c = A / (εb)<br />
                        c = 0.450 / (43,824 × 1.0)<br />
                        c = 1.027 × 10⁻⁵ M<br />
                        <span className="text-tertiary-600 dark:text-tertiary-400 font-bold">c = 10.27 μM</span>
                      </div>

                      <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                        The transmittance is: T = 10^(-0.450) = 35.5% (65% of light absorbed)
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Typical Molar Absorptivity Values
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Biological Molecules
                      </h4>
                      <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                        <li>• DNA (260 nm): ~6,600 M⁻¹cm⁻¹</li>
                        <li>• Proteins (280 nm): 5,000-100,000 M⁻¹cm⁻¹</li>
                        <li>• NADH (340 nm): 6,220 M⁻¹cm⁻¹</li>
                        <li>• Chlorophyll a (428 nm): 112,000 M⁻¹cm⁻¹</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Common Dyes
                      </h4>
                      <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                        <li>• Methylene Blue (664 nm): 95,000 M⁻¹cm⁻¹</li>
                        <li>• Crystal Violet (590 nm): 87,000 M⁻¹cm⁻¹</li>
                        <li>• p-Nitrophenol (400 nm): 18,000 M⁻¹cm⁻¹</li>
                        <li>• Bromothymol Blue (616 nm): 13,000 M⁻¹cm⁻¹</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Limitations of Beer&apos;s Law
                  </h3>

                  <div className="space-y-3 mb-6">
                    <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg border-l-4 border-yellow-500">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        ⚠️ High Concentrations
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        At high concentrations (&gt;0.01 M), molecular interactions cause deviations from linearity
                      </p>
                    </div>

                    <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg border-l-4 border-yellow-500">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        ⚠️ Chemical Changes
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Dissociation, association, or pH-dependent equilibria can affect absorbance
                      </p>
                    </div>

                    <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg border-l-4 border-yellow-500">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        ⚠️ Polychromatic Light
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Beer&apos;s Law assumes monochromatic light; broad wavelength ranges reduce accuracy
                      </p>
                    </div>

                    <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg border-l-4 border-yellow-500">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        ⚠️ Scattering
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Particulates or turbidity cause light scattering, leading to apparent higher absorbance
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Applications
                  </h3>
                  
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🔬</span>
                      <div>
                        <strong>Analytical Chemistry:</strong> Quantitative analysis of chemical species in solution
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🧬</span>
                      <div>
                        <strong>Biochemistry:</strong> Protein and nucleic acid concentration determination
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🌊</span>
                      <div>
                        <strong>Environmental Science:</strong> Water quality testing and pollutant monitoring
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">💊</span>
                      <div>
                        <strong>Pharmaceutical Industry:</strong> Drug concentration analysis and quality control
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🍷</span>
                      <div>
                        <strong>Food Science:</strong> Color intensity and additive concentration measurement
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🩺</span>
                      <div>
                        <strong>Clinical Chemistry:</strong> Medical diagnostics and blood analysis
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Quick Reference */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 animate-slide-in-up animation-delay-300">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="text-2xl">📊</span>
                    Quick Reference
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Formula:</p>
                      <p className="text-gray-600 dark:text-gray-400">A = εbc</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Optimal A:</p>
                      <p className="text-gray-600 dark:text-gray-400">0.1 - 1.0 (best accuracy)</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Standard Path:</p>
                      <p className="text-gray-600 dark:text-gray-400">1.0 cm cuvette</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Transmittance:</p>
                      <p className="text-gray-600 dark:text-gray-400">T = 10^(-A)</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Level:</p>
                      <p className="text-gray-600 dark:text-gray-400">General Chemistry / Analytical</p>
                    </div>
                  </div>
                </div>

                {/* Related Calculators */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 animate-slide-in-up animation-delay-400">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="text-2xl">🔗</span>
                    Related Calculators
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <Link 
                        href="/concentration-and-solution-calculators/molarity-calculator"
                        className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors"
                      >
                        Molarity Calculator
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/concentration-and-solution-calculators/dilution-calculator"
                        className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors"
                      >
                        Dilution Calculator
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/concentration-and-solution-calculators/concentration-converter"
                        className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors"
                      >
                        Concentration Converter
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
                        <Link 
                          href="/chemistry-formulas/beers-law"
                          className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors"
                        >
                          Beer-Lambert Law Formula
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="/chemistry-formulas/beers-law"
                          className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors"
                        >
                          Absorbance Formula
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <ul className="space-y-3 mt-6">
                    <li>
                      <Link 
                        href="/physical-chemistry-calculators"
                        className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors font-semibold"
                      >
                        All Physical Chemistry Calculators →
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Where It's Used */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 animate-slide-in-up animation-delay-500">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="text-2xl">🎯</span>
                    Where It&apos;s Used
                  </h3>
                  <ul className="space-y-4 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="text-xl">🔬</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Spectroscopy</p>
                        <p className="text-gray-600 dark:text-gray-400">UV-Vis concentration analysis</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">🧬</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Biochemistry</p>
                        <p className="text-gray-600 dark:text-gray-400">Protein/DNA quantification</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">💊</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Pharmaceuticals</p>
                        <p className="text-gray-600 dark:text-gray-400">Drug quality control</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">🌊</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Environmental</p>
                        <p className="text-gray-600 dark:text-gray-400">Water quality testing</p>
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
            "name": "Beers Law Calculator",
            "description": "Beers Law Calculator on ChemSolved",
            "url": "https://chemsolved.com/physical-chemistry-calculators/beers-law-calculator",
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
                "name": "Beers Law Calculator",
                "item": "https://chemsolved.com/physical-chemistry-calculators/beers-law-calculator"
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
