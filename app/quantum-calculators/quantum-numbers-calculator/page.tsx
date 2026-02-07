import type { Metadata } from 'next';
import QuantumNumbersCalculator from '@/components/calculators/QuantumNumbersCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: 'Quantum Numbers Calculator | Electron Configuration & Orbitals',
  description:
    'Validate quantum number sets, determine electron configurations, analyze orbital shapes and degeneracy using Pauli exclusion and Aufbau principles.',
  keywords: [
    'quantum numbers calculator',
    'electron configuration',
    'orbital shapes',
    'pauli exclusion principle',
    'aufbau principle',
    'azimuthal quantum number',
    'magnetic quantum number',
    'spin quantum number',
    'orbital degeneracy',
    'quantum mechanics',
  ],
  alternates: {
    canonical: 'https://chemsolved.com/quantum-calculators/quantum-numbers-calculator',
  },
};

export default function QuantumNumbersCalculatorPage() {  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 mb-4">
            Quantum Numbers Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Validate quantum number sets and explore electron configurations
          </p>
        </div>

        <QuantumNumbersCalculator />

        <div className="mt-16 space-y-12">
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              What are Quantum Numbers?
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Quantum numbers are a set of four numbers that describe the unique quantum state of an electron in an atom. 
                They arise from solutions to the Schrödinger equation and define the electron's energy, orbital shape, 
                spatial orientation, and spin. Understanding quantum numbers is fundamental to electron configuration, 
                chemical bonding, and predicting atomic properties.
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
                        href="/atomic-structure-calculators/electron-configuration-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Electron Configuration Calculator</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/atomic-structure-calculators/bohr-model-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Bohr Model Calculator</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/quantum-calculators/heisenberg-uncertainty-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Heisenberg Uncertainty Calculator</span>
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
                          href="/chemistry-formulas/quantum-numbers"
                          className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                        >
                          <span>→</span>
                          <span>Quantum Numbers</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/chemistry-formulas/electron-configuration"
                          className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                        >
                          <span>→</span>
                          <span>Electron Configuration</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <a
                      href="/quantum-calculators"
                      className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      All Quantum Calculators →
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
            "name": "Quantum Numbers Calculator",
            "description": "Quantum Numbers Calculator on ChemSolved",
            "url": "https://chemsolved.com/quantum-calculators/quantum-numbers-calculator",
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
                "name": "Quantum Numbers Calculator",
                "item": "https://chemsolved.com/quantum-calculators/quantum-numbers-calculator"
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