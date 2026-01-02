import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ResuspensionCalculator from '@/components/calculators/ResuspensionCalculator';

export const metadata: Metadata = {
  title: 'Resuspension Calculator | Reconstitute Proteins and Compounds',
  description: 'Calculate volume needed to resuspend lyophilized proteins, DNA, or compounds to desired concentration. Includes molarity conversion and protocol steps.',
};

export default function ResuspensionCalculatorPage() {
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
            <span className="text-gray-500 dark:text-gray-400">Resuspension Calculator</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-6 mb-4 animate-fade-in">
            Resuspension Calculator
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in animation-delay-100">
            Calculate volumes for reconstituting lyophilized samples
          </p>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Calculator */}
              <ResuspensionCalculator />

              {/* Educational Content */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 animate-slide-in-up animation-delay-200">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Understanding Resuspension Calculations
                </h2>
                
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    Resuspension (reconstitution) is the process of dissolving lyophilized (freeze-dried) materials 
                    to a specific concentration. Accurate calculation of the required volume is essential for 
                    preparing stock solutions of proteins, antibodies, enzymes, DNA, and small molecules.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Basic Resuspension Formula
                  </h3>
                  
                  <div className="bg-gradient-to-r from-tertiary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg mb-6">
                    <p className="text-center text-lg font-mono text-gray-900 dark:text-white mb-2">
                      Volume (mL) = Mass (mg) / Desired Concentration (mg/mL)
                    </p>
                    <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                      For molarity: Volume (mL) = (Mass (mg) / MW (g/mol)) / Desired Molarity (mM)
                    </p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="border-l-4 border-tertiary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">Mass-Based Concentration (mg/mL)</p>
                      <p className="text-gray-600 dark:text-gray-400">Used for proteins, antibodies, and most biomolecules</p>
                    </div>
                    
                    <div className="border-l-4 border-tertiary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">Molar Concentration (mM or µM)</p>
                      <p className="text-gray-600 dark:text-gray-400">Used for small molecules and when stoichiometry matters</p>
                    </div>

                    <div className="border-l-4 border-tertiary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">Unit Concentration (U/mL)</p>
                      <p className="text-gray-600 dark:text-gray-400">Used for enzymes based on activity rather than mass</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Reconstitution Best Practices
                  </h3>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Solvent Selection</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• <strong>Water:</strong> Sterile, deionized water for general use</li>
                      <li>• <strong>PBS:</strong> Physiological pH (7.4) for proteins</li>
                      <li>• <strong>Buffer:</strong> Match protein&apos;s optimal pH</li>
                      <li>• <strong>DMSO:</strong> For hydrophobic small molecules</li>
                      <li>• <strong>Ethanol:</strong> Alternative organic solvent for compounds</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Reconstitution Protocol</h4>
                    <ol className="space-y-2 text-gray-700 dark:text-gray-300 list-decimal list-inside">
                      <li>Spin vial briefly to collect material at bottom</li>
                      <li>Add calculated volume of solvent slowly down the side</li>
                      <li>Let stand 2-5 minutes to hydrate</li>
                      <li>Gently swirl or pipette (avoid vigorous vortexing)</li>
                      <li>Ensure complete dissolution before use</li>
                      <li>Aliquot if needed to avoid freeze-thaw cycles</li>
                    </ol>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Stock Solution Tips</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• Make concentrated stocks (10-100×) for convenience</li>
                      <li>• Label with name, concentration, date, and initials</li>
                      <li>• Store at appropriate temperature (-20°C or -80°C for proteins)</li>
                      <li>• Add glycerol (10-50%) for protein stability</li>
                      <li>• Record lot numbers for reproducibility</li>
                      <li>• Consider making aliquots to minimize contamination</li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Common Calculations
                  </h3>

                  <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Example Scenarios</h4>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                      <li>
                        <strong>Antibody (1 mg vial → 1 mg/mL):</strong>
                        <br />Add 1.0 mL PBS or sterile water
                      </li>
                      <li>
                        <strong>Protein (5 mg → 10 mg/mL):</strong>
                        <br />Add 0.5 mL buffer (5 mg ÷ 10 mg/mL)
                      </li>
                      <li>
                        <strong>Small molecule (10 mg, MW 300 → 100 mM):</strong>
                        <br />Add 0.333 mL DMSO [(10/300) ÷ 0.1]
                      </li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Applications
                  </h3>
                  
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🧪</span>
                      <div>
                        <strong>Protein Reconstitution:</strong> Preparing enzymes, antibodies, and recombinant proteins
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">💉</span>
                      <div>
                        <strong>Antibody Preparation:</strong> Reconstituting antibodies for Western blots and assays
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🔬</span>
                      <div>
                        <strong>Enzyme Stock Solutions:</strong> Making working stocks of restriction enzymes and polymerases
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🧬</span>
                      <div>
                        <strong>DNA/RNA Resuspension:</strong> Dissolving lyophilized oligonucleotides and primers
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">💊</span>
                      <div>
                        <strong>Drug Compounds:</strong> Preparing small molecule stocks for screening assays
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🎯</span>
                      <div>
                        <strong>Standards Preparation:</strong> Making calibration standards for analytical methods
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
                      <p className="font-semibold text-gray-900 dark:text-white">Basic Formula:</p>
                      <p className="text-gray-600 dark:text-gray-400">V = mass / concentration</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Common Units:</p>
                      <p className="text-gray-600 dark:text-gray-400">mg/mL, mM, µM, U/mL</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Typical Stocks:</p>
                      <p className="text-gray-600 dark:text-gray-400">1-10 mg/mL proteins</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Storage:</p>
                      <p className="text-gray-600 dark:text-gray-400">-20°C or -80°C</p>
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
                        href="/stoichiometry-calculators/mass-to-moles-calculator"
                        className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors"
                      >
                        Mass to Moles Calculator
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
                          href="/chemistry-formulas/molarity-formula"
                          className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors"
                        >
                          Molarity Formula
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="/chemistry-formulas/dilution-formula"
                          className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors"
                        >
                          Dilution Formula
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
                        <p className="text-gray-600 dark:text-gray-400">Daily stock preparation</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">🧬</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Molecular Biology</p>
                        <p className="text-gray-600 dark:text-gray-400">Enzyme and oligo prep</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">💊</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Pharma Industry</p>
                        <p className="text-gray-600 dark:text-gray-400">Compound screening</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">🏥</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Clinical Labs</p>
                        <p className="text-gray-600 dark:text-gray-400">Reagent preparation</p>
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
            "name": "Resuspension Calculator",
            "description": "Resuspension Calculator on ChemSolved",
            "url": "https://chemsolved.com/biochemistry-calculators/resuspension-calculator",
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
                "name": "Resuspension Calculator",
                "item": "https://chemsolved.com/biochemistry-calculators/resuspension-calculator"
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
