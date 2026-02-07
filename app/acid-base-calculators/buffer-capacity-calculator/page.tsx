import type { Metadata } from 'next';
import BufferCapacityCalculator from '@/components/calculators/BufferCapacityCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: 'Buffer Capacity Calculator | pH Resistance & Buffer Design',
  description:
    'Calculate buffer capacity, predict pH changes from added acid/base, design optimal buffer solutions using Henderson-Hasselbalch equation.',
  keywords: [
    'buffer capacity calculator',
    'henderson hasselbalch',
    'buffer solution',
    'pH buffer',
    'weak acid buffer',
    'conjugate base',
    'buffer design',
    'pH resistance',
    'buffer range',
    'phosphate buffer',
  ],
  alternates: {
    canonical: 'https://chemsolved.com/acid-base-calculators/buffer-capacity-calculator',
  },
};

export default function BufferCapacityCalculatorPage() {  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 mb-4">
            Buffer Capacity Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Calculate buffer capacity and design optimal pH buffer solutions
          </p>
        </div>

        <BufferCapacityCalculator />

        <div className="mt-16 space-y-12">
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              Understanding Buffer Capacity
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Buffer capacity (β) quantifies a buffer solution's ability to resist pH changes when acids or bases are added. 
                It represents the amount of strong acid or base (in moles) that must be added to 1 liter of buffer to change 
                the pH by 1 unit. Buffers are most effective when pH equals pKa and within the range pKa ± 1.
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
                        href="/acid-base-calculators/buffer-solution-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Buffer Solution Calculator</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/acid-base-calculators/titration-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Titration Calculator</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/acid-base-calculators/titration-curve-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Titration Curve Calculator</span>
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
                          href="/chemistry-formulas/buffer-capacity-formula"
                          className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                        >
                          <span>→</span>
                          <span>Buffer Capacity Formula</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/chemistry-formulas/buffer-solution-formula"
                          className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                        >
                          <span>→</span>
                          <span>Buffer Solution Formula</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <a
                      href="/acid-base-calculators"
                      className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      All Acid-Base Calculators →
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
            "name": "Buffer Capacity Calculator",
            "description": "Buffer Capacity Calculator on ChemSolved",
            "url": "https://chemsolved.com/acid-base-calculators/buffer-capacity-calculator",
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
                "name": "Buffer Capacity Calculator",
                "item": "https://chemsolved.com/acid-base-calculators/buffer-capacity-calculator"
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