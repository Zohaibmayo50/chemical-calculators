import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DegreeOfUnsaturationCalculator from '@/components/calculators/DegreeOfUnsaturationCalculator';

export const metadata: Metadata = {
  title: 'Degree of Unsaturation Calculator | DBE | Rings + Double Bonds Calculator',
  description: 'Calculate degree of unsaturation (DBE) from molecular formula. Determine the number of rings and double bonds in organic molecules using (2C+2+N-H-X)/2.',
};

export default function DegreeOfUnsaturationCalculatorPage() {
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
              href="/organic-chemistry-calculators" 
              className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors"
            >
              Organic Chemistry Calculators
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-500 dark:text-gray-400">Degree of Unsaturation Calculator</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-6 mb-4 animate-fade-in">
            Degree of Unsaturation Calculator
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in animation-delay-100">
            Calculate the number of rings and double bonds in organic molecules from molecular formula
          </p>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Calculator */}
              <DegreeOfUnsaturationCalculator />

              {/* Educational Content */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 animate-slide-in-up animation-delay-200">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Understanding Degree of Unsaturation
                </h2>
                
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    The degree of unsaturation (also called the index of hydrogen deficiency or double 
                    bond equivalents - DBE) is a crucial concept in organic chemistry that helps 
                    determine the number of rings and/or multiple bonds present in a molecule based 
                    solely on its molecular formula.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    The Degree of Unsaturation Formula
                  </h3>
                  
                  <div className="bg-gradient-to-r from-tertiary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg mb-6">
                    <p className="text-center text-2xl font-mono text-gray-900 dark:text-white mb-2">
                      DBE = (2C + 2 + N - H - X) / 2
                    </p>
                    <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                      Index of Hydrogen Deficiency
                    </p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="border-l-4 border-tertiary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">C = Number of carbon atoms</p>
                      <p className="text-gray-600 dark:text-gray-400">Count all carbon atoms in the molecular formula</p>
                    </div>
                    
                    <div className="border-l-4 border-tertiary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">H = Number of hydrogen atoms</p>
                      <p className="text-gray-600 dark:text-gray-400">Count all hydrogen atoms</p>
                    </div>

                    <div className="border-l-4 border-tertiary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">N = Number of nitrogen atoms</p>
                      <p className="text-gray-600 dark:text-gray-400">Nitrogen adds to unsaturation (trivalent)</p>
                    </div>

                    <div className="border-l-4 border-tertiary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">X = Number of halogens (F, Cl, Br, I)</p>
                      <p className="text-gray-600 dark:text-gray-400">Halogens substitute for hydrogen (monovalent)</p>
                    </div>

                    <div className="border-l-4 border-tertiary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">Note: Oxygen and sulfur are ignored</p>
                      <p className="text-gray-600 dark:text-gray-400">Divalent atoms don&apos;t affect the calculation</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    What Each DBE Unit Represents
                  </h3>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">🔷</span>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white">1 Ring = 1 DBE</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Cyclopropane, cyclohexane, etc.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">⚡</span>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white">1 Double Bond = 1 DBE</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">C=C, C=O, C=N, N=N</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-2xl">⚡⚡</span>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white">1 Triple Bond = 2 DBE</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">C≡C, C≡N</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Practical Examples
                  </h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <p className="font-semibold text-gray-900 dark:text-white mb-2">Benzene (C₆H₆)</p>
                      <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                        DBE = (2×6 + 2 + 0 - 6 - 0) / 2 = (12 + 2 - 6) / 2 = 8 / 2 = <strong>4</strong>
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Benzene has 1 ring + 3 double bonds = 4 DBE ✓
                      </p>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <p className="font-semibold text-gray-900 dark:text-white mb-2">Acetone (C₃H₆O)</p>
                      <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                        DBE = (2×3 + 2 + 0 - 6 - 0) / 2 = (6 + 2 - 6) / 2 = 2 / 2 = <strong>1</strong>
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Acetone has 1 C=O double bond = 1 DBE ✓ (Note: O is ignored)
                      </p>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <p className="font-semibold text-gray-900 dark:text-white mb-2">Cyclohexene (C₆H₁₀)</p>
                      <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                        DBE = (2×6 + 2 + 0 - 10 - 0) / 2 = (12 + 2 - 10) / 2 = 4 / 2 = <strong>2</strong>
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Cyclohexene has 1 ring + 1 double bond = 2 DBE ✓
                      </p>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <p className="font-semibold text-gray-900 dark:text-white mb-2">Propyne (C₃H₄)</p>
                      <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                        DBE = (2×3 + 2 + 0 - 4 - 0) / 2 = (6 + 2 - 4) / 2 = 4 / 2 = <strong>2</strong>
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Propyne has 1 triple bond = 2 DBE ✓
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Key Concepts
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        🔍 Structure Determination
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        DBE narrows down possible structures from molecular formula
                      </p>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        🧬 Spectroscopy Aid
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Combined with NMR/IR to deduce molecular structure
                      </p>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        ⚗️ Aromatic Rings
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        DBE = 4 often indicates benzene ring (but not always!)
                      </p>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        ✅ Formula Validation
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Negative or fractional DBE indicates an error in formula
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
                        <strong>Structure Elucidation:</strong> Determine possible structures from mass spectrometry data
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🧪</span>
                      <div>
                        <strong>Spectroscopy:</strong> Guide interpretation of NMR, IR, and UV-Vis spectra
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">💊</span>
                      <div>
                        <strong>Drug Discovery:</strong> Analyze unknown compounds and metabolites
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🌿</span>
                      <div>
                        <strong>Natural Products:</strong> Characterize compounds isolated from plants and organisms
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">📚</span>
                      <div>
                        <strong>Organic Chemistry Education:</strong> Problem-solving and structure drawing exercises
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">⚖️</span>
                      <div>
                        <strong>Quality Control:</strong> Verify molecular formulas in pharmaceutical and chemical industries
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
                      <p className="font-semibold text-gray-900 dark:text-white">Formula:</p>
                      <p className="text-gray-600 dark:text-gray-400">(2C + 2 + N - H - X) / 2</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Each DBE =</p>
                      <p className="text-gray-600 dark:text-gray-400">1 ring OR 1 double bond<br/>OR ½ triple bond</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Ignored:</p>
                      <p className="text-gray-600 dark:text-gray-400">O, S (divalent atoms)</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Common Value:</p>
                      <p className="text-gray-600 dark:text-gray-400">DBE = 4 often = benzene ring</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Level:</p>
                      <p className="text-gray-600 dark:text-gray-400">College Organic Chemistry</p>
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
                        href="/stoichiometry-calculators/empirical-formula-calculator"
                        className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors"
                      >
                        Empirical Formula Calculator
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/stoichiometry-calculators/stoichiometry-calculator"
                        className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors"
                      >
                        Stoichiometry Calculator
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
                      📐 Related Formulas
                    </h3>
                    <ul className="space-y-3">
                      <li>
                        <a
                          href="/chemistry-formulas/degree-of-unsaturation"
                          className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors flex items-center gap-2"
                        >
                          <span>→</span>
                          <span>Degree of Unsaturation Formula</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/chemistry-formulas/molecular-formula"
                          className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors flex items-center gap-2"
                        >
                          <span>→</span>
                          <span>Molecular Formula</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <Link 
                      href="/organic-chemistry-calculators"
                      className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors font-semibold"
                    >
                      All Organic Chemistry Calculators →
                    </Link>
                  </div>
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
                        <p className="font-semibold text-gray-900 dark:text-white">Analytical Chemistry</p>
                        <p className="text-gray-600 dark:text-gray-400">Structure determination</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">🧪</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Spectroscopy</p>
                        <p className="text-gray-600 dark:text-gray-400">NMR/IR interpretation aid</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">💊</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Pharmaceuticals</p>
                        <p className="text-gray-600 dark:text-gray-400">Compound identification</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">📚</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Education</p>
                        <p className="text-gray-600 dark:text-gray-400">Organic chemistry problems</p>
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
            "name": "Degree Unsaturation Calculator",
            "description": "Degree Unsaturation Calculator on ChemSolved",
            "url": "https://chemsolved.com/organic-chemistry-calculators/degree-unsaturation-calculator",
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
                "name": "Degree Unsaturation Calculator",
                "item": "https://chemsolved.com/organic-chemistry-calculators/degree-unsaturation-calculator"
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
