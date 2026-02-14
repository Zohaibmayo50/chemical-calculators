import type { Metadata } from 'next';
import DipoleMomentCalculator from '@/components/calculators/DipoleMomentCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: 'Dipole Moment Calculator | Molecular Polarity Tool',
  description:
    'Calculate molecular dipole moments from electronegativity differences, bond lengths, and bond dipoles. Predict molecular polarity and ionic character.',
  keywords: [
    'dipole moment calculator',
    'molecular polarity',
    'electronegativity difference',
    'bond polarity',
    'partial charge',
    'ionic character',
    'polar covalent bond',
    'debye unit',
    'chemistry polarity',
    'molecular dipole',
  ],
  alternates: {
    canonical: 'https://chemsolved.com/physical-chemistry-calculators/dipole-moment-calculator',
  },
};

export default function DipoleMomentCalculatorPage() {  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 mb-4">
            Dipole Moment Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Calculate molecular dipole moments and predict bond polarity from electronegativity
          </p>
        </div>

        {/* Calculator Component */}
        <DipoleMomentCalculator />

        {/* Educational Content */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
            Dipole Moments and Molecular Polarity
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Dipole moments quantify the separation of positive and negative charge in polar bonds and molecules.
              Understanding dipole moments is essential for predicting intermolecular forces, solubility, and spectroscopic properties.
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
                      href="/atomic-structure-calculators/formal-charge-calculator"
                      className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                    >
                      <span>→</span>
                      <span>Formal Charge Calculator</span>
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
                  <li>
                    <a
                      href="/atomic-structure-calculators/hybridization-calculator"
                      className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                    >
                      <span>→</span>
                      <span>Hybridization Calculator</span>
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
                        href="/chemistry-formulas/dipole-moment-formula"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Dipole Moment Formula</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/chemistry-formulas/dipole-moment-formula"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Electronegativity Formula</span>
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
      </div>
      {/* Structured Data - SoftwareApplication */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Dipole Moment Calculator",
            "description": "Dipole Moment Calculator on ChemSolved",
            "url": "https://chemsolved.com/physical-chemistry-calculators/dipole-moment-calculator",
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
                "name": "Dipole Moment Calculator",
                "item": "https://chemsolved.com/physical-chemistry-calculators/dipole-moment-calculator"
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