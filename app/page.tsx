import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SearchBar from '@/components/SearchBar';
import ClusterSection from '@/components/ClusterSection';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import FormulasExplained from '@/components/FormulasExplained';
import EducationalLevels from '@/components/EducationalLevels';
import WhereUsed from '@/components/WhereUsed';
import WhyAccurate from '@/components/WhyAccurate';
import { calculatorCategories, getTotalCalculatorCount } from '@/data/calculators';
import { clusterPages } from '@/data/clusterPages';

export const metadata: Metadata = {
  title: 'Chemical Calculators | 100+ Chemistry Tools & Calculation Solvers',
  description: 'A complete collection of 100+ chemical calculators covering molarity, molality, stoichiometry, pH, thermodynamics, equilibrium, electrochemistry, organic chemistry, and biochemistry. Free, accurate chemistry calculation tools for students, researchers, and professionals.',
  alternates: {
    canonical: 'https://chemsolved.com',
  },
};

// Enable ISR with revalidation
export const revalidate = 3600; // Revalidate every hour

export default function HomePage() {
  const totalCalculators = getTotalCalculatorCount();

  return (
    <main className="min-h-screen">
      {/* Structured Data - Website Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Chemical Calculators",
            "url": "https://chemsolved.com",
            "description": "Comprehensive chemistry calculators for stoichiometry, molarity, pH, thermodynamics, and chemical calculations",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://chemsolved.com/?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />

      {/* Structured Data - Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Chemical Calculators",
            "url": "https://chemsolved.com",
            "description": "Provider of free chemistry calculation tools and educational resources",
            "founder": {
              "@type": "Person",
              "name": "Muhammad Zohaib",
              "jobTitle": "Chemist, Web Developer",
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Lahore Garrison University",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Lahore",
                  "addressCountry": "Pakistan"
                }
              },
              "hasCredential": {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "degree",
                "name": "Master's Degree in Chemistry"
              },
              "knowsAbout": ["Chemistry", "Chemical Calculations", "Computational Chemistry"]
            }
          })
        }}
      />

      {/* Header with Navigation */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* What Are Chemical Calculators - Entity Definition */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-primary-50 via-white to-primary-100 rounded-3xl p-8 sm:p-12 border-2 border-primary-200 shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              What Are Chemical Calculators?
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                <strong className="text-primary-700">Chemical calculators</strong> are specialized computational tools that apply 
                mathematical principles to chemical concepts, enabling precise quantitative analysis 
                of chemical systems. These calculators solve problems involving <strong className="text-primary-600">atomic structure</strong>, 
                <strong className="text-primary-600"> molecular composition</strong>, <strong className="text-primary-600">reaction stoichiometry</strong>, 
                <strong className="text-primary-600"> concentration</strong>, and <strong className="text-primary-600">energy changes</strong> in chemical processes.
              </p>
              <p className="text-lg">
                From determining <strong className="text-primary-600">molarity</strong> and <strong className="text-primary-600">molality</strong> of solutions 
                to calculating <strong className="text-primary-600">percent yield</strong>, <strong className="text-primary-600">equilibrium constants</strong>, 
                and <strong className="text-primary-600">thermodynamic properties</strong>, these tools provide accurate results 
                based on established chemical laws and principles. They serve chemistry students, 
                researchers, laboratory technicians, and educators performing quantitative chemical analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border-b-2 border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Search Chemistry Calculators
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Find the right calculator from our collection of {totalCalculators} tools
            </p>
          </div>
          <SearchBar />
        </div>
      </section>

      {/* Topical Calculator Pages Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-primary-50/30 to-accent-50/30 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 border-b-2 border-primary-200 dark:border-primary-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4">
              Explore Calculator Topics
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Dive deep into specialized chemistry topics with our comprehensive calculator pages. 
              Each page includes detailed formulas, explanations, and multiple calculators.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clusterPages.map((cluster, index) => (
              <Link
                key={cluster.slug}
                href={`/${cluster.slug}`}
                className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl border-2 border-primary-200 dark:border-primary-700 hover:border-primary-400 dark:hover:border-primary-500 transition-all duration-300 hover:scale-105 animate-zoom-in"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 dark:from-primary-600 dark:to-primary-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {cluster.h1}
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {cluster.metaDescription}
                </p>
                <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium text-sm group-hover:translate-x-2 transition-transform">
                  Explore Calculators
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Clusters Section */}
      <section id="calculators" className="scroll-mt-20">
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-100 via-primary-50 to-white border-b-2 border-primary-200">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Browse Chemistry Calculators by Topic
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive collection of <strong className="text-primary-700">chemical calculators</strong> organized 
              by topic areas. Each category contains specialized tools for precise chemical calculations, 
              from basic <strong className="text-primary-600">concentration</strong> and <strong className="text-primary-600">stoichiometry</strong> to advanced 
              <strong className="text-primary-600"> thermodynamics</strong> and <strong className="text-primary-600">electrochemistry</strong>.
            </p>
          </div>
        </div>

        {calculatorCategories
          .filter(category => category.id !== 'general-chemistry')
          .map((category, index) => (
            <ClusterSection key={category.id} category={category} index={index} />
          ))}
      </section>

      {/* How These Calculators Work Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-primary-50/30 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12 text-center">
            How Chemistry Calculators Work
          </h2>

          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-2xl border-2 border-primary-200 mb-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Fundamental Principles
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Chemistry calculators apply fundamental chemical laws and mathematical relationships 
                to solve quantitative problems. These tools incorporate established principles such as 
                the <strong className="text-primary-700">law of conservation of mass</strong>, <strong className="text-primary-700">ideal gas law</strong> (PV = nRT), 
                <strong className="text-primary-700"> stoichiometric ratios</strong> from balanced equations, and 
                <strong className="text-primary-700"> thermodynamic relationships</strong> (╬öG = ╬öH - T╬öS).
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Each calculator uses specific formulas relevant to its domain. For instance, 
                <strong className="text-primary-600"> molarity calculations</strong> use M = n/V (moles per liter), while 
                <strong className="text-primary-600"> pH calculations</strong> apply pH = -log[HΓü║] based on hydrogen ion concentration. 
                <strong className="text-primary-600"> Stoichiometry calculators</strong> determine mole ratios from balanced chemical 
                equations to predict product quantities and identify limiting reagents.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
                <h4 className="text-xl font-semibold text-primary-700 mb-3">
                  Concentration Calculations
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  <strong>Molarity</strong>, <strong>molality</strong>, and <strong>normality</strong> calculators 
                  determine solution concentrations using molar mass, volume, and mass relationships. 
                  The <strong>dilution calculator</strong> applies CΓéüVΓéü = CΓééVΓéé to find final concentrations 
                  after dilution.
                </p>
                <div className="bg-primary-50 p-3 rounded border-l-4 border-primary-500">
                  <code className="text-sm text-gray-800">
                    Molarity (M) = moles of solute / liters of solution
                  </code>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
                <h4 className="text-xl font-semibold text-primary-700 mb-3">
                  Reaction Stoichiometry
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  <strong>Stoichiometry calculators</strong> use balanced chemical equations to determine 
                  mole ratios between reactants and products. They calculate <strong>theoretical yield</strong>, 
                  identify <strong>limiting reagents</strong>, and compute <strong>percent yield</strong>.
                </p>
                <div className="bg-primary-50 p-3 rounded border-l-4 border-primary-500">
                  <code className="text-sm text-gray-800">
                    % Yield = (Actual Yield / Theoretical Yield) ├ù 100
                  </code>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
                <h4 className="text-xl font-semibold text-primary-700 mb-3">
                  Thermodynamics & Energy
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  <strong>Gibbs free energy</strong>, <strong>enthalpy</strong>, and <strong>entropy calculators</strong> 
                  determine reaction spontaneity and energy changes. These tools apply fundamental thermodynamic 
                  relationships to predict whether reactions proceed spontaneously.
                </p>
                <div className="bg-primary-50 p-3 rounded border-l-4 border-primary-500">
                  <code className="text-sm text-gray-800">
                    ╬öG = ╬öH - T╬öS (Gibbs Free Energy)
                  </code>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
                <h4 className="text-xl font-semibold text-primary-700 mb-3">
                  Acid-Base Chemistry
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  <strong>pH calculators</strong> determine hydrogen ion concentration and solution acidity. 
                  <strong> Henderson-Hasselbalch calculators</strong> compute buffer pH values, while 
                  <strong> pKa calculators</strong> determine acid dissociation constants.
                </p>
                <div className="bg-primary-50 p-3 rounded border-l-4 border-primary-500">
                  <code className="text-sm text-gray-800">
                    pH = pKa + log([AΓü╗]/[HA])
                  </code>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-primary-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Applications in Chemistry
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Laboratory Preparation:</strong> Calculate precise amounts of chemicals needed for solution preparation, ensuring accurate concentrations for experiments and analyses.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Reaction Planning:</strong> Determine limiting reagents, predict product yields, and optimize reactant ratios for chemical syntheses and industrial processes.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Quality Control:</strong> Verify product purity, calculate percent yields, and ensure manufacturing specifications meet required standards.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Educational Learning:</strong> Verify homework solutions, understand chemical relationships, and develop problem-solving skills in chemistry education.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Research Applications:</strong> Perform thermodynamic calculations, analyze equilibrium systems, and determine electrochemical properties for scientific investigations.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Concepts Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Essential Chemistry Concepts
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-lg border-2 border-primary-200">
              <h3 className="text-xl font-bold text-primary-700 mb-3">Stoichiometry</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                The quantitative study of reactants and products in chemical reactions. 
                <strong> Stoichiometry</strong> uses balanced equations and mole ratios to predict 
                product amounts, determine limiting reagents, and calculate reaction yields based on 
                the law of conservation of mass.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-lg border-2 border-primary-200">
              <h3 className="text-xl font-bold text-primary-700 mb-3">Concentration Units</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Solutions are characterized by various <strong>concentration units</strong>: 
                <strong> molarity</strong> (mol/L), <strong>molality</strong> (mol/kg), 
                <strong> normality</strong>, mass percent, and mole fraction. Each unit serves 
                specific applications in chemistry and affects how we calculate colligative properties.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-lg border-2 border-primary-200">
              <h3 className="text-xl font-bold text-primary-700 mb-3">Chemical Equilibrium</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>Chemical equilibrium</strong> occurs when forward and reverse reaction rates 
                equal. The <strong>equilibrium constant</strong> (K) quantifies this balance. 
                Understanding equilibrium is essential for acid-base chemistry, solubility, and 
                predicting reaction completion.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-lg border-2 border-primary-200">
              <h3 className="text-xl font-bold text-primary-700 mb-3">Thermodynamics</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>Chemical thermodynamics</strong> studies energy changes in reactions. 
                <strong> Enthalpy</strong> (╬öH), <strong>entropy</strong> (╬öS), and 
                <strong> Gibbs free energy</strong> (╬öG) determine whether reactions occur 
                spontaneously and how much energy they release or consume.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-lg border-2 border-primary-200">
              <h3 className="text-xl font-bold text-primary-700 mb-3">Acid-Base Chemistry</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>pH</strong> measures solution acidity on a logarithmic scale. 
                <strong> Buffer solutions</strong> resist pH changes using the 
                <strong> Henderson-Hasselbalch equation</strong>. Understanding acid-base 
                equilibria is crucial for biological systems and analytical chemistry.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-lg border-2 border-primary-200">
              <h3 className="text-xl font-bold text-primary-700 mb-3">Electrochemistry</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>Electrochemistry</strong> connects electrical and chemical energy. 
                The <strong>Nernst equation</strong> calculates cell potentials, while 
                <strong> Faraday&#39;s laws</strong> govern electrolysis. These principles enable 
                batteries, fuel cells, and corrosion prevention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chemistry Formulas Explained */}
      <FormulasExplained />

      {/* Educational Levels */}
      <EducationalLevels />

      {/* Where Chemistry Calculators Are Used */}
      <WhereUsed />

      {/* Why Our Calculators Are Accurate */}
      <WhyAccurate />

      {/* FAQ Section */}
      <div id="faq">
        <FAQ />
      </div>

      {/* Footer */}
      <Footer />

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
                "name": "Chemistry Calculators",
                "item": "https://chemsolved.com/#calculators"
              }
            ]
          })
        }}
      />

      {/* Structured Data - CollectionPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Chemical Calculators Collection",
            "description": "Comprehensive collection of chemistry calculators for stoichiometry, solutions, thermodynamics, and chemical calculations",
            "url": "https://chemsolved.com",
            "numberOfItems": totalCalculators,
            "about": {
              "@type": "Thing",
              "name": "Chemistry",
              "description": "The scientific study of matter, its properties, composition, structure, and the changes it undergoes during chemical reactions"
            }
          })
        }}
      />
    </main>
  );
}
