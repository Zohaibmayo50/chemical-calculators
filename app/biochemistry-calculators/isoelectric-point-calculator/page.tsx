import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import IsoelectricPointCalculator from '@/components/calculators/IsoelectricPointCalculator';

export const metadata: Metadata = {
  title: 'Isoelectric Point Calculator | pI Calculator for Amino Acids',
  description: 'Calculate the isoelectric point (pI) of amino acids and proteins from pKa values. Determine pH where net charge is zero for electrophoresis and purification.',
};

export default function IsoelectricPointCalculatorPage() {
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
            <span className="text-gray-500 dark:text-gray-400">Isoelectric Point Calculator</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-6 mb-4 animate-fade-in">
            Isoelectric Point Calculator
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in animation-delay-100">
            Calculate the isoelectric point (pI) of amino acids and proteins
          </p>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Calculator */}
              <IsoelectricPointCalculator />

              {/* Educational Content */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 animate-slide-in-up animation-delay-200">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Understanding Isoelectric Point
                </h2>
                
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    The isoelectric point (pI) is the pH at which a molecule carries no net electrical charge. 
                    For amino acids and proteins, the pI is critical for understanding their behavior in solution, 
                    solubility, and separation by electrophoresis or ion-exchange chromatography.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    The pI Calculation
                  </h3>
                  
                  <div className="bg-gradient-to-r from-tertiary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg mb-6">
                    <p className="text-center text-2xl font-mono text-gray-900 dark:text-white mb-2">
                      pI = (pK<sub>a1</sub> + pK<sub>a2</sub>) / 2
                    </p>
                    <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                      Average of relevant pKa values
                    </p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="border-l-4 border-tertiary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">Neutral Amino Acids</p>
                      <p className="text-gray-600 dark:text-gray-400">pI = (pKa<sub>COOH</sub> + pKa<sub>NH3+</sub>) / 2</p>
                    </div>
                    
                    <div className="border-l-4 border-tertiary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">Acidic Amino Acids (Asp, Glu)</p>
                      <p className="text-gray-600 dark:text-gray-400">pI = (pKa<sub>COOH</sub> + pKa<sub>R-COOH</sub>) / 2</p>
                    </div>

                    <div className="border-l-4 border-tertiary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">Basic Amino Acids (Lys, Arg, His)</p>
                      <p className="text-gray-600 dark:text-gray-400">pI = (pKa<sub>NH3+</sub> + pKa<sub>R-NH</sub>) / 2</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Key Concepts
                  </h3>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Charge States</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• pH &lt; pI: Molecule is positively charged (cation)</li>
                      <li>• pH = pI: Molecule has zero net charge (zwitterion)</li>
                      <li>• pH &gt; pI: Molecule is negatively charged (anion)</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Protein Solubility</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Proteins are least soluble at their pI because they lack repulsive electrostatic forces. 
                      This property is used for isoelectric precipitation and focusing.
                    </p>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Applications
                  </h3>
                  
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">⚡</span>
                      <div>
                        <strong>Electrophoresis:</strong> Separating proteins by charge in isoelectric focusing (IEF) and 2D gels
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🔬</span>
                      <div>
                        <strong>Chromatography:</strong> Ion-exchange chromatography for protein purification
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">💧</span>
                      <div>
                        <strong>Precipitation:</strong> Isoelectric precipitation for protein purification and crystallization
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🧪</span>
                      <div>
                        <strong>Buffer Selection:</strong> Choosing pH for optimal protein stability and solubility
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">💊</span>
                      <div>
                        <strong>Drug Formulation:</strong> Designing stable pharmaceutical formulations
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🧬</span>
                      <div>
                        <strong>Protein Analysis:</strong> Identifying proteins based on charge properties
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
                    <span className="text-2xl">⚡</span>
                    Quick Reference
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Formula:</p>
                      <p className="text-gray-600 dark:text-gray-400">pI = (pKa<sub>1</sub> + pKa<sub>2</sub>) / 2</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">At pI:</p>
                      <p className="text-gray-600 dark:text-gray-400">Net charge = 0</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">pH &lt; pI:</p>
                      <p className="text-gray-600 dark:text-gray-400">Positive charge</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">pH &gt; pI:</p>
                      <p className="text-gray-600 dark:text-gray-400">Negative charge</p>
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
                        href="/atomic-structure-calculators/henderson-hasselbalch-calculator"
                        className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors"
                      >
                        Henderson-Hasselbalch Calculator
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
                          href="/chemistry-formulas/ph-formula"
                          className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors"
                        >
                          pH Formula
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
                      <span className="text-xl">⚡</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Electrophoresis</p>
                        <p className="text-gray-600 dark:text-gray-400">Isoelectric focusing</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">🔬</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Protein Purification</p>
                        <p className="text-gray-600 dark:text-gray-400">Ion-exchange chromatography</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">💊</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Drug Development</p>
                        <p className="text-gray-600 dark:text-gray-400">Protein formulation</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">🧬</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Proteomics</p>
                        <p className="text-gray-600 dark:text-gray-400">2D gel electrophoresis</p>
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
            "name": "Isoelectric Point Calculator",
            "description": "Isoelectric Point Calculator on ChemSolved",
            "url": "https://chemsolved.com/biochemistry-calculators/isoelectric-point-calculator",
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
                "name": "Isoelectric Point Calculator",
                "item": "https://chemsolved.com/biochemistry-calculators/isoelectric-point-calculator"
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
