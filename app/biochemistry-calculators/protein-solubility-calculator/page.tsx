import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProteinSolubilityCalculator from '@/components/calculators/ProteinSolubilityCalculator';

export const metadata: Metadata = {
  title: 'Protein Solubility Calculator | Predict Protein Precipitation',
  description: 'Predict protein solubility based on pH, temperature, salt concentration, and isoelectric point. Optimize buffer conditions to prevent precipitation.',
  keywords: 'protein solubility calculator, protein precipitation, buffer optimization, isoelectric point, protein aggregation, pH solubility',
  alternates: {
    canonical: 'https://chemsolved.com/biochemistry-calculators/protein-solubility-calculator',
  },
};

export default function ProteinSolubilityCalculatorPage() {
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
            <span className="text-gray-500 dark:text-gray-400">Protein Solubility Calculator</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-6 mb-4 animate-fade-in">
            Protein Solubility Calculator
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in animation-delay-100">
            Optimize buffer conditions to prevent protein precipitation
          </p>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Calculator */}
              <ProteinSolubilityCalculator />

              {/* Educational Content */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 animate-slide-in-up animation-delay-200">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Understanding Protein Solubility
                </h2>
                
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    Protein solubility depends on several factors including pH relative to the isoelectric point (pI), 
                    salt concentration, temperature, and buffer composition. Optimizing these conditions is crucial 
                    for protein storage, formulation, and preventing aggregation during purification.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Key Solubility Factors
                  </h3>
                  
                  <div className="bg-gradient-to-r from-tertiary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg mb-6">
                    <p className="text-center text-lg font-mono text-gray-900 dark:text-white mb-2">
                      Minimum Solubility at pH ≈ pI
                    </p>
                    <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                      Proteins precipitate most readily at their isoelectric point
                    </p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="border-l-4 border-tertiary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">pH vs pI Difference</p>
                      <p className="text-gray-600 dark:text-gray-400">Greater distance from pI increases net charge and solubility</p>
                    </div>
                    
                    <div className="border-l-4 border-tertiary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">Salt Concentration</p>
                      <p className="text-gray-600 dark:text-gray-400">Low salt: salting-in effect; high salt: salting-out effect</p>
                    </div>

                    <div className="border-l-4 border-tertiary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">Temperature Effects</p>
                      <p className="text-gray-600 dark:text-gray-400">Higher temperatures can increase solubility but may cause denaturation</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Optimization Strategies
                  </h3>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Buffer Selection</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Choose a pH at least 1-2 units away from the pI. For acidic proteins (pI &lt; 7), use pH 7-9. 
                      For basic proteins (pI &gt; 7), use pH 5-6. This ensures adequate net charge for electrostatic repulsion.
                    </p>
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Salt Considerations</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• Use 50-150 mM salt for most proteins (salting-in)</li>
                      <li>• Avoid very low ionic strength (&lt;10 mM)</li>
                      <li>• High salt (&gt;500 mM) can cause precipitation</li>
                      <li>• NaCl is standard; phosphate buffers also contribute ions</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Preventing Precipitation</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• Add glycerol (10-50%) to stabilize proteins</li>
                      <li>• Use detergents (0.01-0.1%) for hydrophobic proteins</li>
                      <li>• Keep temperature at 4°C for long-term storage</li>
                      <li>• Avoid freeze-thaw cycles</li>
                      <li>• Filter or centrifuge aggregates before use</li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Applications
                  </h3>
                  
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🧪</span>
                      <div>
                        <strong>Protein Storage:</strong> Optimizing buffer conditions for long-term stability
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">💊</span>
                      <div>
                        <strong>Drug Formulation:</strong> Developing stable therapeutic protein formulations
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">💎</span>
                      <div>
                        <strong>Protein Crystallization:</strong> Finding conditions that promote crystal formation
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🔬</span>
                      <div>
                        <strong>Purification:</strong> Preventing aggregation during chromatography steps
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🏭</span>
                      <div>
                        <strong>Biomanufacturing:</strong> Optimizing production and storage of recombinant proteins
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🧬</span>
                      <div>
                        <strong>Structural Biology:</strong> Preparing samples for NMR, X-ray, or cryo-EM studies
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
                      <p className="font-semibold text-gray-900 dark:text-white">Critical Factor:</p>
                      <p className="text-gray-600 dark:text-gray-400">pH distance from pI</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Optimal pH:</p>
                      <p className="text-gray-600 dark:text-gray-400">±1-2 units from pI</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Salt Range:</p>
                      <p className="text-gray-600 dark:text-gray-400">50-150 mM NaCl</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Storage Temp:</p>
                      <p className="text-gray-600 dark:text-gray-400">4°C or -80°C</p>
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
                        href="/atomic-structure-calculators/ph-calculator"
                        className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors"
                      >
                        pH Calculator
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/acid-base-calculators/buffer-solution-calculator"
                        className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors"
                      >
                        Buffer Solution Calculator
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
                  </ul>
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <span className="text-2xl">📐</span>
                      Related Formulas
                    </h3>
                    <ul className="space-y-3">
                      <li>
                        <Link 
                          href="/chemistry-formulas/henderson-hasselbalch-equation"
                          className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors"
                        >
                          Henderson-Hasselbalch Equation
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="/chemistry-formulas/ionic-strength-formula"
                          className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors"
                        >
                          Ionic Strength Formula
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
                        <p className="text-gray-600 dark:text-gray-400">Protein purification</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">💊</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Pharma Industry</p>
                        <p className="text-gray-600 dark:text-gray-400">Antibody formulation</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">💎</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Structural Biology</p>
                        <p className="text-gray-600 dark:text-gray-400">Crystallography</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">🏭</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Biotechnology</p>
                        <p className="text-gray-600 dark:text-gray-400">Biomanufacturing</p>
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
            "name": "Protein Solubility Calculator",
            "description": "Protein Solubility Calculator on ChemSolved",
            "url": "https://chemsolved.com/biochemistry-calculators/protein-solubility-calculator",
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
                "name": "Protein Solubility Calculator",
                "item": "https://chemsolved.com/biochemistry-calculators/protein-solubility-calculator"
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
