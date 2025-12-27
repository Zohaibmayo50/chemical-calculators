import type { Metadata } from 'next';
import LFSECalculator from '@/components/calculators/LFSECalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: 'Ligand Field Stabilization Energy Calculator | Crystal Field Theory',
  description:
    'Calculate LFSE for transition metal complexes in octahedral and tetrahedral geometries. Analyze d-orbital splitting, high spin vs low spin configurations.',
  keywords: [
    'LFSE calculator',
    'ligand field stabilization energy',
    'crystal field theory',
    'd orbital splitting',
    'octahedral complex',
    'tetrahedral complex',
    'high spin low spin',
    'transition metal',
    'coordination chemistry',
    'spectrochemical series',
  ],
};

export default function LFSECalculatorPage() {  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 mb-4">
            Ligand Field Stabilization Energy Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Calculate crystal field stabilization energy for transition metal complexes
          </p>
        </div>

        <LFSECalculator />

        <div className="mt-16 space-y-12">
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              Understanding Ligand Field Stabilization Energy
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Ligand Field Stabilization Energy (LFSE) quantifies the energetic stabilization of a transition metal complex 
                due to d-orbital splitting in a ligand field. In crystal field theory, ligands approach the metal ion and 
                cause the five degenerate d-orbitals to split into groups of different energies. The magnitude of this 
                splitting and the resulting electronic configuration determine the LFSE and many properties of the complex.
              </p>
            </div>
          </section>
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
                        href="/coordination-chemistry-calculators/crystal-field-splitting-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Crystal Field Splitting Calculator</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/coordination-chemistry-calculators/coordination-number-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Coordination Number Calculator</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/atomic-structure-calculators/electron-configuration-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Electron Configuration Calculator</span>
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
                          href="/chemistry-formulas/crystal-field-theory"
                          className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                        >
                          <span>→</span>
                          <span>Crystal Field Theory</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/chemistry-formulas/coordination-chemistry-formula"
                          className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                        >
                          <span>→</span>
                          <span>Coordination Chemistry Formula</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <a
                      href="/coordination-chemistry-calculators"
                      className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      All Coordination Chemistry Calculators →
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
            "name": "Ligand Field Stabilization Energy Calculator",
            "description": "Ligand Field Stabilization Energy Calculator on ChemSolved",
            "url": "https://chemsolved.com/coordination-chemistry-calculators/ligand-field-stabilization-energy-calculator",
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
                "name": "Ligand Field Stabilization Energy Calculator",
                "item": "https://chemsolved.com/coordination-chemistry-calculators/ligand-field-stabilization-energy-calculator"
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