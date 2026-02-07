import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MichaelisMentenCalculator from '@/components/calculators/MichaelisMentenCalculator';

export const metadata: Metadata = {
  title: 'Michaelis-Menten Calculator | Enzyme Kinetics Calculator',
  description: 'Calculate enzyme reaction velocity using the Michaelis-Menten equation. Determine v, Vmax, Km, and substrate concentration for enzyme kinetics analysis.',
  alternates: {
    canonical: 'https://chemsolved.com/biochemistry-calculators/michaelis-menten-calculator',
  },
};

export default function MichaelisMentenCalculatorPage() {
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
            <span className="text-gray-500 dark:text-gray-400">Michaelis-Menten Calculator</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-6 mb-4 animate-fade-in">
            Michaelis-Menten Calculator
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in animation-delay-100">
            Calculate enzyme reaction velocity using the Michaelis-Menten equation for enzyme kinetics
          </p>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Calculator */}
              <MichaelisMentenCalculator />

              {/* Educational Content */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 animate-slide-in-up animation-delay-200">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Understanding Michaelis-Menten Kinetics
                </h2>
                
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    The Michaelis-Menten equation is fundamental to enzyme kinetics, describing how 
                    the rate of an enzyme-catalyzed reaction depends on substrate concentration. 
                    It provides crucial parameters that characterize enzyme efficiency and affinity 
                    for substrates.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    The Michaelis-Menten Equation
                  </h3>
                  
                  <div className="bg-gradient-to-r from-tertiary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg mb-6">
                    <p className="text-center text-2xl font-mono text-gray-900 dark:text-white mb-2">
                      v = (V<sub>max</sub> × [S]) / (K<sub>m</sub> + [S])
                    </p>
                    <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                      Enzyme reaction velocity equation
                    </p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="border-l-4 border-tertiary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">v = Reaction velocity</p>
                      <p className="text-gray-600 dark:text-gray-400">The rate at which product is formed (units: M/s, µM/min, etc.)</p>
                    </div>
                    
                    <div className="border-l-4 border-tertiary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">V<sub>max</sub> = Maximum velocity</p>
                      <p className="text-gray-600 dark:text-gray-400">The maximum rate when enzyme is saturated with substrate</p>
                    </div>

                    <div className="border-l-4 border-tertiary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">[S] = Substrate concentration</p>
                      <p className="text-gray-600 dark:text-gray-400">The concentration of the substrate (units: M, mM, µM)</p>
                    </div>

                    <div className="border-l-4 border-tertiary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">K<sub>m</sub> = Michaelis constant</p>
                      <p className="text-gray-600 dark:text-gray-400">The substrate concentration at which v = ½V<sub>max</sub> (same units as [S])</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Understanding K<sub>m</sub>
                  </h3>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      The Michaelis constant (K<sub>m</sub>) is a key parameter that indicates:
                    </p>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li><strong>Low K<sub>m</sub> (e.g., 10 µM):</strong> High enzyme-substrate affinity, enzyme binds substrate tightly</li>
                      <li><strong>High K<sub>m</sub> (e.g., 10 mM):</strong> Low enzyme-substrate affinity, weak binding</li>
                      <li><strong>Practical meaning:</strong> K<sub>m</sub> represents the substrate concentration needed to reach half-maximum velocity</li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Practical Example
                  </h3>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">
                      Hexokinase Enzyme
                    </p>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li><strong>V<sub>max</sub> =</strong> 100 µM/min</li>
                      <li><strong>K<sub>m</sub> =</strong> 0.1 mM (100 µM)</li>
                      <li><strong>[Glucose] =</strong> 0.2 mM (200 µM)</li>
                    </ul>
                    <p className="mt-4 text-gray-700 dark:text-gray-300">
                      v = (100 × 200) / (100 + 200)<br/>
                      v = 20,000 / 300<br/>
                      v = <strong>66.67 µM/min</strong>
                    </p>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      This is 66.67% of V<sub>max</sub>, showing the enzyme is working efficiently at this substrate concentration
                    </p>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Key Concepts
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        🧬 Enzyme-Substrate Complex
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        E + S ⇌ ES → E + P (Formation of ES complex is key)
                      </p>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        📊 Saturation Kinetics
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        At high [S], all enzyme active sites are occupied
                      </p>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        ⚡ Catalytic Efficiency
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        k<sub>cat</sub>/K<sub>m</sub> ratio measures enzyme efficiency
                      </p>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        🎯 Steady State
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        [ES] remains constant during the reaction
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Experimental Determination
                  </h3>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
                    <p className="font-semibold text-gray-900 dark:text-white mb-3">
                      Lineweaver-Burk Plot
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      A double reciprocal plot (1/v vs 1/[S]) linearizes the Michaelis-Menten equation:
                    </p>
                    <p className="text-center font-mono text-gray-900 dark:text-white mb-3">
                      1/v = (K<sub>m</sub>/V<sub>max</sub>) × (1/[S]) + 1/V<sub>max</sub>
                    </p>
                    <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      <li>• y-intercept = 1/V<sub>max</sub></li>
                      <li>• x-intercept = -1/K<sub>m</sub></li>
                      <li>• slope = K<sub>m</sub>/V<sub>max</sub></li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Applications
                  </h3>
                  
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">💊</span>
                      <div>
                        <strong>Drug Development:</strong> Understanding enzyme inhibition for designing pharmaceuticals
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🧬</span>
                      <div>
                        <strong>Metabolic Studies:</strong> Analyzing metabolic pathways and enzyme deficiencies
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🔬</span>
                      <div>
                        <strong>Diagnostic Assays:</strong> Clinical enzyme assays for disease detection
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🏭</span>
                      <div>
                        <strong>Industrial Biotechnology:</strong> Optimizing enzyme-based production processes
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🧪</span>
                      <div>
                        <strong>Research:</strong> Characterizing new enzymes and understanding catalytic mechanisms
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🌱</span>
                      <div>
                        <strong>Agriculture:</strong> Studying plant enzymes for crop improvement
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
                      <p className="font-semibold text-gray-900 dark:text-white">Units:</p>
                      <p className="text-gray-600 dark:text-gray-400">M/s, µM/min, mM/s</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Formula:</p>
                      <p className="text-gray-600 dark:text-gray-400">v = (V<sub>max</sub> × [S]) / (K<sub>m</sub> + [S])</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">At K<sub>m</sub>:</p>
                      <p className="text-gray-600 dark:text-gray-400">v = ½V<sub>max</sub></p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Applications:</p>
                      <p className="text-gray-600 dark:text-gray-400">Enzyme kinetics, drug design</p>
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
                        href="/biochemistry-calculators"
                        className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors"
                      >
                        Protein Molecular Weight
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
                    <li>
                      <Link 
                        href="/concentration-and-solution-calculators/dilution-calculator"
                        className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors"
                      >
                        Dilution Calculator
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
                          href="/chemistry-formulas/michaelis-menten-equation"
                          className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors"
                        >
                          Michaelis-Menten Equation
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="/chemistry-formulas/reaction-rate-formula"
                          className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors"
                        >
                          Reaction Rate Formula
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
                      <span className="text-xl">💊</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Pharmaceutical Industry</p>
                        <p className="text-gray-600 dark:text-gray-400">Drug design and testing</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">🏥</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Clinical Diagnostics</p>
                        <p className="text-gray-600 dark:text-gray-400">Enzyme activity assays</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">🔬</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Research</p>
                        <p className="text-gray-600 dark:text-gray-400">Enzyme characterization</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">🏭</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Biotechnology</p>
                        <p className="text-gray-600 dark:text-gray-400">Industrial enzyme optimization</p>
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
            "name": "Michaelis Menten Calculator",
            "description": "Michaelis Menten Calculator on ChemSolved",
            "url": "https://chemsolved.com/biochemistry-calculators/michaelis-menten-calculator",
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
                "name": "Michaelis Menten Calculator",
                "item": "https://chemsolved.com/biochemistry-calculators/michaelis-menten-calculator"
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
