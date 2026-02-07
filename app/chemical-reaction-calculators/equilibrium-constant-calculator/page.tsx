import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EquilibriumConstantCalculator from '@/components/calculators/EquilibriumConstantCalculator';

export const metadata: Metadata = {
  title: 'Equilibrium Constant Calculator | Kc & Reaction Quotient Calculator',
  description: 'Calculate equilibrium constant (Kc) for chemical reactions. Determine equilibrium position from product and reactant concentrations for reversible reactions.',
  alternates: {
    canonical: 'https://chemsolved.com/chemical-reaction-calculators/equilibrium-constant-calculator',
  },
};

export default function EquilibriumConstantCalculatorPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-secondary-50 via-white to-tertiary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <nav className="flex items-center gap-2 text-sm animate-fade-in">
            <Link 
              href="/" 
              className="text-secondary-600 dark:text-secondary-400 hover:text-secondary-700 dark:hover:text-secondary-300 transition-colors"
            >
              Home
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link 
              href="/chemical-reaction-calculators" 
              className="text-secondary-600 dark:text-secondary-400 hover:text-secondary-700 dark:hover:text-secondary-300 transition-colors"
            >
              Chemical Reaction Calculators
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-500 dark:text-gray-400">Equilibrium Constant Calculator</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-6 mb-4 animate-fade-in">
            Equilibrium Constant Calculator
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in animation-delay-100">
            Calculate the equilibrium constant (K<sub>c</sub>) for chemical reactions and determine equilibrium position
          </p>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Calculator */}
              <EquilibriumConstantCalculator />

              {/* Educational Content */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 animate-slide-in-up animation-delay-200">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Understanding Equilibrium Constants
                </h2>
                
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    The equilibrium constant (K<sub>c</sub>) is a fundamental concept in chemistry that 
                    quantifies the ratio of products to reactants at equilibrium for a reversible 
                    reaction. It tells us which direction a reaction favors and how far it proceeds 
                    before reaching equilibrium.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    The Equilibrium Constant Expression
                  </h3>
                  
                  <div className="bg-gradient-to-r from-secondary-50 to-tertiary-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg mb-6">
                    <p className="text-center text-gray-900 dark:text-white mb-4">
                      For the general reaction:
                    </p>
                    <p className="text-center text-xl font-mono text-gray-900 dark:text-white mb-4">
                      aA + bB ⇌ cC + dD
                    </p>
                    <p className="text-center text-2xl font-mono text-gray-900 dark:text-white mb-2">
                      K<sub>c</sub> = ([C]<sup>c</sup> × [D]<sup>d</sup>) / ([A]<sup>a</sup> × [B]<sup>b</sup>)
                    </p>
                    <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                      Products over reactants, raised to stoichiometric coefficients
                    </p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="border-l-4 border-secondary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">K<sub>c</sub> = Equilibrium constant</p>
                      <p className="text-gray-600 dark:text-gray-400">Dimensionless or with concentration units depending on reaction</p>
                    </div>
                    
                    <div className="border-l-4 border-secondary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">[A], [B], [C], [D] = Molar concentrations</p>
                      <p className="text-gray-600 dark:text-gray-400">Equilibrium concentrations in mol/L (M)</p>
                    </div>

                    <div className="border-l-4 border-secondary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">a, b, c, d = Stoichiometric coefficients</p>
                      <p className="text-gray-600 dark:text-gray-400">Numbers in the balanced chemical equation</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Interpreting K Values
                  </h3>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white mb-2">K &gt;&gt; 1 (e.g., K = 10⁶)</p>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          • Equilibrium lies far to the right<br/>
                          • Products strongly favored<br/>
                          • Reaction goes nearly to completion<br/>
                          • Very little reactants remain
                        </p>
                      </div>
                      
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white mb-2">K ≈ 1 (e.g., 0.1 &lt; K &lt; 10)</p>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          • Equilibrium position is intermediate<br/>
                          • Significant amounts of both reactants and products<br/>
                          • Neither side is strongly favored
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white mb-2">K &lt;&lt; 1 (e.g., K = 10⁻⁶)</p>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          • Equilibrium lies far to the left<br/>
                          • Reactants strongly favored<br/>
                          • Very little reaction occurs<br/>
                          • Very little products form
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Practical Example
                  </h3>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">
                      Formation of Hydrogen Iodide
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      H₂(g) + I₂(g) ⇌ 2HI(g)
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      At equilibrium at 448°C:
                    </p>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li><strong>[H₂] =</strong> 0.0222 M</li>
                      <li><strong>[I₂] =</strong> 0.0222 M</li>
                      <li><strong>[HI] =</strong> 0.156 M</li>
                    </ul>
                    <p className="mt-4 text-gray-700 dark:text-gray-300">
                      K<sub>c</sub> = [HI]² / ([H₂] × [I₂])<br/>
                      K<sub>c</sub> = (0.156)² / (0.0222 × 0.0222)<br/>
                      K<sub>c</sub> = 0.0243 / 0.000493<br/>
                      K<sub>c</sub> = <strong>49.3</strong>
                    </p>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      Since K &gt; 1, the forward reaction is favored, and significant HI is formed at equilibrium.
                    </p>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Key Concepts
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        ⚖️ Dynamic Equilibrium
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Forward and reverse reactions occur at equal rates
                      </p>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        🌡️ Temperature Dependent
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        K changes with temperature but not with pressure or concentration changes
                      </p>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        🔄 Reaction Quotient (Q)
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Q has same form as K but uses non-equilibrium concentrations
                      </p>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        ⚗️ Le Chatelier&apos;s Principle
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        System shifts to counteract changes and restore equilibrium
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Relationship Between K and Q
                  </h3>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
                    <p className="font-semibold text-gray-900 dark:text-white mb-3">
                      Predicting Reaction Direction
                    </p>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li><strong>Q &lt; K:</strong> Reaction proceeds forward (→) to form more products</li>
                      <li><strong>Q = K:</strong> System is at equilibrium, no net change</li>
                      <li><strong>Q &gt; K:</strong> Reaction proceeds in reverse (←) to form more reactants</li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Applications
                  </h3>
                  
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-secondary-600 dark:text-secondary-400 mt-1">🏭</span>
                      <div>
                        <strong>Industrial Chemistry:</strong> Optimize reaction conditions for maximum product yield (Haber process, contact process)
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-secondary-600 dark:text-secondary-400 mt-1">🧪</span>
                      <div>
                        <strong>Analytical Chemistry:</strong> Predict solubility, precipitation, and complex formation
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-secondary-600 dark:text-secondary-400 mt-1">💊</span>
                      <div>
                        <strong>Biochemistry:</strong> Understand metabolic pathways and enzyme-substrate equilibria
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-secondary-600 dark:text-secondary-400 mt-1">🌊</span>
                      <div>
                        <strong>Environmental Science:</strong> Calculate CO₂ dissolution, acid-base equilibria in natural waters
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-secondary-600 dark:text-secondary-400 mt-1">🔬</span>
                      <div>
                        <strong>Research:</strong> Design experiments, predict reaction feasibility, calculate equilibrium compositions
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
                    <span className="text-2xl">⚖️</span>
                    Quick Reference
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Units:</p>
                      <p className="text-gray-600 dark:text-gray-400">Usually dimensionless or M<sup>n</sup></p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Formula:</p>
                      <p className="text-gray-600 dark:text-gray-400">K<sub>c</sub> = [products] / [reactants]</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Rule:</p>
                      <p className="text-gray-600 dark:text-gray-400">K &gt; 1: products favored<br/>K &lt; 1: reactants favored</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Level:</p>
                      <p className="text-gray-600 dark:text-gray-400">College Chemistry</p>
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
                        href="/electrochemistry-calculators/nernst-equation-calculator"
                        className="text-secondary-600 dark:text-secondary-400 hover:text-secondary-700 dark:hover:text-secondary-300 transition-colors"
                      >
                        Nernst Equation Calculator
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/concentration-and-solution-calculators/molarity-calculator"
                        className="text-secondary-600 dark:text-secondary-400 hover:text-secondary-700 dark:hover:text-secondary-300 transition-colors"
                      >
                        Molarity Calculator
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/atomic-structure-calculators/ph-calculator"
                        className="text-secondary-600 dark:text-secondary-400 hover:text-secondary-700 dark:hover:text-secondary-300 transition-colors"
                      >
                        pH Calculator
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
                          href="/chemistry-formulas/equilibrium-constant"
                          className="text-secondary-600 dark:text-secondary-400 hover:text-secondary-700 dark:hover:text-secondary-300 transition-colors"
                        >
                          Equilibrium Constant Formula
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="/chemistry-formulas/reaction-quotient"
                          className="text-secondary-600 dark:text-secondary-400 hover:text-secondary-700 dark:hover:text-secondary-300 transition-colors"
                        >
                          Reaction Quotient Formula
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <ul className="space-y-3 mt-6">
                    <li>
                      <Link 
                        href="/chemical-reaction-calculators"
                        className="text-secondary-600 dark:text-secondary-400 hover:text-secondary-700 dark:hover:text-secondary-300 transition-colors font-semibold"
                      >
                        All Chemical Reaction Calculators →
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
                      <span className="text-xl">🏭</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Industrial Processes</p>
                        <p className="text-gray-600 dark:text-gray-400">Optimize chemical production</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">🧪</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Analytical Chemistry</p>
                        <p className="text-gray-600 dark:text-gray-400">Predict reaction outcomes</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">💊</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Biochemistry</p>
                        <p className="text-gray-600 dark:text-gray-400">Metabolic equilibria</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">🌍</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Environmental Science</p>
                        <p className="text-gray-600 dark:text-gray-400">Natural chemical processes</p>
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
            "name": "Equilibrium Constant Calculator",
            "description": "Equilibrium Constant Calculator on ChemSolved",
            "url": "https://chemsolved.com/chemical-reaction-calculators/equilibrium-constant-calculator",
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
                "name": "Equilibrium Constant Calculator",
                "item": "https://chemsolved.com/chemical-reaction-calculators/equilibrium-constant-calculator"
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
