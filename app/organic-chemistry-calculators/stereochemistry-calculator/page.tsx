import type { Metadata } from 'next';
import StereochemistryCalculator from '@/components/calculators/StereochemistryCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: 'Stereochemistry Calculator | R/S Configuration & Chirality Tool',
  description:
    'Determine R/S configurations, calculate stereoisomers, analyze chirality, and explore E/Z isomerism with step-by-step guidance using Cahn-Ingold-Prelog rules.',
  keywords: [
    'stereochemistry calculator',
    'R S configuration',
    'chirality calculator',
    'enantiomers diastereomers',
    'E Z isomerism',
    'cahn ingold prelog',
    'chiral centers',
    'stereoisomers',
    'optical isomers',
    'organic chemistry stereochemistry',
  ],
};

export default function StereochemistryCalculatorPage() {  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 mb-4">
            Stereochemistry Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Determine R/S configurations, calculate stereoisomers, and analyze molecular chirality
          </p>
        </div>

        {/* Calculator Component */}
        <StereochemistryCalculator />

        {/* Educational Content */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
            Stereochemistry Fundamentals
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Stereochemistry studies the three-dimensional arrangement of atoms in molecules. Understanding stereoisomers,
              chiral centers, and absolute configuration is crucial in organic chemistry, biochemistry, and pharmaceutical sciences.
            </p>
          </div>
        </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    🔗 Related Calculators
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="/organic-chemistry-calculators/nmr-chemical-shift-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>NMR Chemical Shift Calculator</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/organic-chemistry-calculators/degree-unsaturation-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Degree of Unsaturation Calculator</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/atomic-structure-calculators/lewis-structure-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Lewis Structure Calculator</span>
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
                          href="/chemistry-formulas/stereochemistry-formula"
                          className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                        >
                          <span>→</span>
                          <span>Stereochemistry Formula</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/chemistry-formulas/vsepr-theory-formula"
                          className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                        >
                          <span>→</span>
                          <span>Molecular Geometry Formula</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <a
                      href="/organic-chemistry-calculators"
                      className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      All Organic Chemistry Calculators →
                    </a>
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
            "name": "Stereochemistry Calculator",
            "description": "Stereochemistry Calculator on ChemSolved",
            "url": "https://chemsolved.com/organic-chemistry-calculators/stereochemistry-calculator",
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
                "name": "Stereochemistry Calculator",
                "item": "https://chemsolved.com/organic-chemistry-calculators/stereochemistry-calculator"
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