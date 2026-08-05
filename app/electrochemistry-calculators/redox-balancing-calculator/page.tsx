import type { Metadata } from 'next';
import React from 'react';
import RedoxBalancingCalculator from '@/components/calculators/RedoxBalancingCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: 'Redox Balancing Calculator',
  description: 'Balance redox reactions using the half-reaction method in acidic, basic, or neutral solutions. Learn step-by-step how to balance oxidation-reduction equations.',
  keywords: 'redox balancing, half-reaction method, oxidation reduction, acidic basic solutions, electron transfer, redox equations, chemistry calculator',
  alternates: {
    canonical: 'https://chemsolved.com/electrochemistry-calculators/redox-balancing-calculator',
  },
};

export default function RedoxBalancingPage() {  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-tertiary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-block p-3 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-2xl mb-4">
              <svg className="w-16 h-16 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Redox Balancing Calculator
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Half-Reaction Method
            </p>
          </div>

          <RedoxBalancingCalculator />

          {/* Educational Content */}
          <div className="mt-12 prose prose-lg max-w-none dark:prose-invert">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Understanding Redox Reactions
              </h2>

              <div className="space-y-6 text-gray-700 dark:text-gray-300">
                
                <section>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    What is Redox Balancing?
                  </h3>
                  <p className="leading-relaxed mb-4">
                    A <strong>redox (reduction-oxidation) reaction</strong> involves the transfer of electrons between species.
                    One reactant loses electrons (<strong>oxidation</strong>) while another gains them (<strong>reduction</strong>).
                    Balancing these equations means finding whole-number coefficients so that both atoms and charge are conserved
                    on both sides.
                  </p>
                  <p className="leading-relaxed">
                    The most reliable technique is the <strong>half-reaction method</strong>: split the overall reaction into an
                    oxidation half-reaction and a reduction half-reaction, balance each separately (atoms, then charge), then
                    combine them so electrons cancel out completely.
                  </p>
                </section>

                <section className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Half-Reaction Method (Acidic Solution)
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-blue-500">
                      <p className="font-bold text-lg mb-2">Step 1: Split into Half-Reactions</p>
                      <p className="text-sm">Assign oxidation numbers and separate the species being oxidized from the species being reduced.</p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-purple-500">
                      <p className="font-bold text-lg mb-2">Step 2: Balance Atoms Other Than O and H</p>
                      <p className="text-sm">Balance every element except oxygen and hydrogen first.</p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-green-500">
                      <p className="font-bold text-lg mb-2">Step 3: Balance Oxygen with H₂O</p>
                      <p className="text-sm">Add H₂O to the side that needs oxygen.</p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-cyan-500">
                      <p className="font-bold text-lg mb-2">Step 4: Balance Hydrogen with H⁺</p>
                      <p className="text-sm">Add H⁺ ions to balance hydrogen atoms (acidic solution).</p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-orange-500">
                      <p className="font-bold text-lg mb-2">Step 5: Balance Charge with Electrons</p>
                      <p className="text-sm">Add e⁻ to the more positive side so the net charge matches on both sides of each half-reaction.</p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-pink-500">
                      <p className="font-bold text-lg mb-2">Step 6: Equalize and Add Electrons</p>
                      <p className="text-sm">Multiply each half-reaction so the number of electrons lost equals the number gained, then add the two half-reactions together and cancel electrons.</p>
                    </div>

                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded border-l-4 border-yellow-500">
                      <p className="font-bold text-lg mb-2">Basic Solution: One Extra Step</p>
                      <p className="text-sm">Balance as if acidic, then add OH⁻ to both sides to neutralize every H⁺ (forming H₂O), and simplify.</p>
                    </div>
                  </div>
                </section>

                <section className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Worked Example: Fe²⁺ + MnO₄⁻ in Acidic Solution
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold mb-2">Problem:</p>
                      <p>
                        Balance the reaction between iron(II) ions and permanganate ion in acidic solution:
                        Fe²⁺ + MnO₄⁻ → Fe³⁺ + Mn²⁺
                      </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded">
                      <p className="font-semibold mb-2">Step 1: Write the half-reactions</p>
                      <p className="font-mono text-sm">Oxidation: Fe²⁺ → Fe³⁺</p>
                      <p className="font-mono text-sm">Reduction: MnO₄⁻ → Mn²⁺</p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded">
                      <p className="font-semibold mb-2">Step 2: Balance O with H₂O, then H with H⁺</p>
                      <p className="font-mono text-sm">MnO₄⁻ → Mn²⁺ + 4H₂O</p>
                      <p className="font-mono text-sm">8H⁺ + MnO₄⁻ → Mn²⁺ + 4H₂O</p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded">
                      <p className="font-semibold mb-2">Step 3: Balance charge with electrons</p>
                      <p className="font-mono text-sm">Fe²⁺ → Fe³⁺ + e⁻</p>
                      <p className="font-mono text-sm">5e⁻ + 8H⁺ + MnO₄⁻ → Mn²⁺ + 4H₂O</p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded">
                      <p className="font-semibold mb-2">Step 4: Equalize electrons (×5 on oxidation) and add</p>
                      <p className="font-mono text-sm">5Fe²⁺ → 5Fe³⁺ + 5e⁻</p>
                      <p className="font-mono text-sm">5e⁻ + 8H⁺ + MnO₄⁻ → Mn²⁺ + 4H₂O</p>
                    </div>

                    <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded border-l-4 border-green-600">
                      <p className="font-semibold mb-1">Balanced Equation:</p>
                      <p className="font-mono text-sm">5Fe²⁺ + MnO₄⁻ + 8H⁺ → 5Fe³⁺ + Mn²⁺ + 4H₂O</p>
                      <p className="text-sm mt-2">Both atoms and charge (+17 on each side) are conserved.</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Common Mistakes
                  </h3>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-lg space-y-3">
                    <div className="space-y-2">
                      <div className="flex items-start gap-3">
                        <span className="text-xl">❌</span>
                        <div>
                          <p className="font-semibold text-sm">Balancing atoms but forgetting charge</p>
                          <p className="text-xs">A correctly atom-balanced equation can still have unequal net charge on each side.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-xl">❌</span>
                        <div>
                          <p className="font-semibold text-sm">Mixing up H⁺ and OH⁻</p>
                          <p className="text-xs">Use H⁺ for acidic solution; only convert to OH⁻/H₂O at the final step for basic solution.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-xl">❌</span>
                        <div>
                          <p className="font-semibold text-sm">Not equalizing electrons before adding half-reactions</p>
                          <p className="text-xs">The electrons lost in oxidation must exactly equal the electrons gained in reduction.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Quick Reference Guide
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-bold mb-2">Balancing Order (Acidic):</h4>
                      <ul className="space-y-1 text-xs">
                        <li>1. Split into half-reactions</li>
                        <li>2. Balance atoms except O, H</li>
                        <li>3. Balance O with H₂O</li>
                        <li>4. Balance H with H⁺</li>
                        <li>5. Balance charge with e⁻</li>
                        <li>6. Equalize e⁻ and combine</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Key Terms:</h4>
                      <ul className="space-y-1">
                        <li>Oxidation = loss of electrons</li>
                        <li>Reduction = gain of electrons</li>
                        <li>Oxidizing agent = gets reduced</li>
                        <li>Reducing agent = gets oxidized</li>
                      </ul>
                    </div>
                  </div>
                </section>

              </div>
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
                        href="/electrochemistry-calculators/oxidation-number-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Oxidation Number Calculator</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/electrochemistry-calculators/cell-potential-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Cell Potential Calculator</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/electrochemistry-calculators/electrolysis-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Electrolysis Calculator</span>
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
                          href="/chemistry-formulas/redox-balancing-formula"
                          className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                        >
                          <span>→</span>
                          <span>Redox Balancing Formula</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/chemistry-formulas/oxidation-number-formula"
                          className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                        >
                          <span>→</span>
                          <span>Oxidation Number Formula</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <a
                      href="/electrochemistry-calculators"
                      className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      All Electrochemistry Calculators →
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
            "name": "Redox Balancing Calculator",
            "description": "Redox Balancing Calculator on ChemSolved",
            "url": "https://chemsolved.com/electrochemistry-calculators/redox-balancing-calculator",
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
                "name": "Redox Balancing Calculator",
                "item": "https://chemsolved.com/electrochemistry-calculators/redox-balancing-calculator"
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
