import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CalibrationCurveCalculator from '@/components/calculators/CalibrationCurveCalculator';

export const metadata: Metadata = {
  title: 'Calibration Curve Calculator | Linear Regression for Standards',
  description: 'Calculate calibration curves using linear regression. Generate slope, intercept, R² correlation, and determine unknown concentrations from measured responses.',
  keywords: 'calibration curve calculator, linear regression, R squared, standard curve, Beer\'s law, spectrophotometry, HPLC calibration',
  alternates: {
    canonical: 'https://chemsolved.com/biochemistry-calculators/calibration-curve-calculator',
  },
};

export default function CalibrationCurveCalculatorPage() {
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
              href="/biochemistry-calculators" 
              className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors"
            >
              Biochemistry Calculators
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-500 dark:text-gray-400">Calibration Curve Calculator</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-6 mb-4 animate-fade-in">
            Calibration Curve Calculator
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in animation-delay-100">
            Calculate calibration curves using linear regression for analytical chemistry
          </p>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Calculator */}
              <CalibrationCurveCalculator />

              {/* Educational Content */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 animate-slide-in-up animation-delay-200">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Understanding Calibration Curves
                </h2>
                
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    A calibration curve is a method used in analytical chemistry to determine the 
                    concentration of an unknown substance by comparing it to a set of standard samples 
                    with known concentrations. Linear regression establishes the relationship between 
                    concentration and instrument response.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    The Linear Regression Equation
                  </h3>
                  
                  <div className="bg-gradient-to-r from-tertiary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg mb-6">
                    <p className="text-center text-2xl font-mono text-gray-900 dark:text-white mb-2">
                      y = mx + b
                    </p>
                    <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                      Linear calibration curve equation
                    </p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="border-l-4 border-tertiary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">y = Response</p>
                      <p className="text-gray-600 dark:text-gray-400">Measured signal (absorbance, peak area, fluorescence)</p>
                    </div>
                    
                    <div className="border-l-4 border-tertiary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">x = Concentration</p>
                      <p className="text-gray-600 dark:text-gray-400">Known standard concentrations</p>
                    </div>

                    <div className="border-l-4 border-tertiary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">m = Slope</p>
                      <p className="text-gray-600 dark:text-gray-400">Sensitivity of the method</p>
                    </div>

                    <div className="border-l-4 border-tertiary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">b = Y-intercept</p>
                      <p className="text-gray-600 dark:text-gray-400">Baseline signal at zero concentration</p>
                    </div>

                    <div className="border-l-4 border-tertiary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">R² = Correlation coefficient</p>
                      <p className="text-gray-600 dark:text-gray-400">Goodness of fit (1.0 = perfect correlation)</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Key Concepts
                  </h3>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Linear Range</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      The concentration range over which the response is proportional to concentration. 
                      Operating within this range ensures accuracy.
                    </p>
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">R² Value Interpretation</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• R² &gt; 0.995: Excellent linearity</li>
                      <li>• R² = 0.98-0.995: Good linearity</li>
                      <li>• R² &lt; 0.98: Poor linearity, check standards</li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Applications
                  </h3>
                  
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">📊</span>
                      <div>
                        <strong>Spectrophotometry:</strong> Determining protein, DNA, or chemical concentrations via UV-Vis absorbance
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🧪</span>
                      <div>
                        <strong>HPLC/GC:</strong> Quantifying analytes based on peak area or height in chromatography
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🔬</span>
                      <div>
                        <strong>ELISA:</strong> Measuring protein concentrations in immunoassays
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🌡️</span>
                      <div>
                        <strong>Clinical Chemistry:</strong> Analyzing blood glucose, cholesterol, enzymes in diagnostic labs
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🏭</span>
                      <div>
                        <strong>Quality Control:</strong> Verifying product concentrations in pharmaceutical and food industries
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🌊</span>
                      <div>
                        <strong>Environmental Testing:</strong> Measuring pollutant levels in water and soil samples
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
                      <p className="text-gray-600 dark:text-gray-400">y = mx + b</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Good R²:</p>
                      <p className="text-gray-600 dark:text-gray-400">&gt; 0.995</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Min Standards:</p>
                      <p className="text-gray-600 dark:text-gray-400">3-5 points recommended</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Applications:</p>
                      <p className="text-gray-600 dark:text-gray-400">Spectroscopy, HPLC, ELISA</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Level:</p>
                      <p className="text-gray-600 dark:text-gray-400">College Analytical Chemistry</p>
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
                        href="/physical-chemistry-calculators/beers-law-calculator"
                        className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors"
                      >
                        Beer&apos;s Law Calculator
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
                          Beer&apos;s Law
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="/chemistry-formulas/molarity-formula"
                          className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors"
                        >
                          Molarity Formula
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <ul className="space-y-3 mt-6">
                    <li>
                      <Link 
                        href="/biochemistry-calculators"
                        className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors font-semibold"
                      >
                        All Biochemistry Calculators →
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
                      <span className="text-xl">🏥</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Clinical Labs</p>
                        <p className="text-gray-600 dark:text-gray-400">Diagnostic assays</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">🔬</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Research Labs</p>
                        <p className="text-gray-600 dark:text-gray-400">Protein/DNA quantification</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">💊</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Pharmaceutical QC</p>
                        <p className="text-gray-600 dark:text-gray-400">Drug concentration testing</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">🌊</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Environmental</p>
                        <p className="text-gray-600 dark:text-gray-400">Water quality analysis</p>
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
            "name": "Calibration Curve Calculator",
            "description": "Calibration Curve Calculator on ChemSolved",
            "url": "https://chemsolved.com/biochemistry-calculators/calibration-curve-calculator",
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
                "name": "Calibration Curve Calculator",
                "item": "https://chemsolved.com/biochemistry-calculators/calibration-curve-calculator"
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
