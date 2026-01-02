import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EnzymeActivityCalculator from '@/components/calculators/EnzymeActivityCalculator';

export const metadata: Metadata = {
  title: 'Enzyme Activity Calculator | Specific Activity Calculator',
  description: 'Calculate enzyme activity and specific activity from product formation. Determine enzyme purity and characterize enzyme kinetics for biochemical assays.',
};

export default function EnzymeActivityCalculatorPage() {
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
            <span className="text-gray-500 dark:text-gray-400">Enzyme Activity Calculator</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-6 mb-4 animate-fade-in">
            Enzyme Activity Calculator
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in animation-delay-100">
            Measure enzyme activity and specific activity for biochemical assays
          </p>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Calculator */}
              <EnzymeActivityCalculator />

              {/* Educational Content */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 animate-slide-in-up animation-delay-200">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Understanding Enzyme Activity
                </h2>
                
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    Enzyme activity quantifies the rate at which an enzyme catalyzes a reaction. 
                    Specific activity (activity per mg of protein) is a key measure of enzyme purity 
                    and is essential for characterizing purified enzymes and monitoring purification progress.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Activity Definitions
                  </h3>
                  
                  <div className="bg-gradient-to-r from-tertiary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg mb-6">
                    <p className="text-center text-lg font-mono text-gray-900 dark:text-white mb-2">
                      Specific Activity = Units / mg protein
                    </p>
                    <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                      1 Unit = 1 µmol product/min
                    </p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="border-l-4 border-tertiary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">Total Activity (Units)</p>
                      <p className="text-gray-600 dark:text-gray-400">Amount of product formed per unit time (µmol/min)</p>
                    </div>
                    
                    <div className="border-l-4 border-tertiary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">Specific Activity (Units/mg)</p>
                      <p className="text-gray-600 dark:text-gray-400">Activity normalized to protein amount - indicates enzyme purity</p>
                    </div>

                    <div className="border-l-4 border-tertiary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">Activity per Volume (Units/mL)</p>
                      <p className="text-gray-600 dark:text-gray-400">Concentration-based activity for stock solutions</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Key Concepts
                  </h3>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Enzyme Purity</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Specific activity increases during purification as contaminant proteins are removed. 
                      Pure enzymes have maximum specific activity, while crude extracts have low specific activity.
                    </p>
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Assay Conditions</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• Measure initial velocity (linear phase)</li>
                      <li>• Use saturating substrate concentrations</li>
                      <li>• Control temperature and pH</li>
                      <li>• Include appropriate controls</li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Applications
                  </h3>
                  
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🔬</span>
                      <div>
                        <strong>Enzyme Purification:</strong> Monitoring purification progress and calculating yield
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🏥</span>
                      <div>
                        <strong>Clinical Diagnostics:</strong> Measuring enzyme levels in blood for disease detection
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">💊</span>
                      <div>
                        <strong>Drug Screening:</strong> Testing enzyme inhibitors in pharmaceutical development
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🏭</span>
                      <div>
                        <strong>Industrial Enzymes:</strong> Quality control for commercial enzyme preparations
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🧬</span>
                      <div>
                        <strong>Protein Engineering:</strong> Comparing wild-type and mutant enzyme activities
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🌱</span>
                      <div>
                        <strong>Food Science:</strong> Analyzing enzyme activity in fermentation and food processing
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
                    <span className="text-2xl">🧬</span>
                    Quick Reference
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Unit Definition:</p>
                      <p className="text-gray-600 dark:text-gray-400">1 Unit = 1 µmol/min</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Specific Activity:</p>
                      <p className="text-gray-600 dark:text-gray-400">Units/mg protein</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Purity Indicator:</p>
                      <p className="text-gray-600 dark:text-gray-400">↑ Specific Activity = ↑ Purity</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Applications:</p>
                      <p className="text-gray-600 dark:text-gray-400">Purification, diagnostics, QC</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Level:</p>
                      <p className="text-gray-600 dark:text-gray-400">College Biochemistry</p>
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
                        href="/biochemistry-calculators/michaelis-menten-calculator"
                        className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors"
                      >
                        Michaelis-Menten Calculator
                      </Link>
                    </li>
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
                  </ul>
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <span className="text-2xl">📐</span>
                      Related Formulas
                    </h3>
                    <ul className="space-y-3">
                      <li>
                        <Link 
                          href="/chemistry-formulas/michaelis-menten-equation"
                          className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors"
                        >
                          Michaelis-Menten Equation
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="/chemistry-formulas/reaction-rate-formula"
                          className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors"
                        >
                          Reaction Rate Formula
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
                      <span className="text-xl">🔬</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Research Labs</p>
                        <p className="text-gray-600 dark:text-gray-400">Enzyme purification</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">🏥</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Clinical Labs</p>
                        <p className="text-gray-600 dark:text-gray-400">Diagnostic enzyme assays</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">💊</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Pharma Industry</p>
                        <p className="text-gray-600 dark:text-gray-400">Drug development</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">🏭</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Biotechnology</p>
                        <p className="text-gray-600 dark:text-gray-400">Industrial enzyme production</p>
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
            "name": "Enzyme Activity Calculator",
            "description": "Enzyme Activity Calculator on ChemSolved",
            "url": "https://chemsolved.com/biochemistry-calculators/enzyme-activity-calculator",
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
                "name": "Enzyme Activity Calculator",
                "item": "https://chemsolved.com/biochemistry-calculators/enzyme-activity-calculator"
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
