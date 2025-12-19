import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NernstEquationCalculator from '@/components/calculators/NernstEquationCalculator';

export const metadata: Metadata = {
  title: 'Nernst Equation Calculator | Cell Potential Under Non-Standard Conditions',
  description: 'Calculate electrochemical cell potential under non-standard conditions using the Nernst equation. Determine E, E°, Q, temperature, and electron transfer effects.',
};

export default function NernstEquationCalculatorPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-secondary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
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
              href="/electrochemistry-calculators" 
              className="text-secondary-600 dark:text-secondary-400 hover:text-secondary-700 dark:hover:text-secondary-300 transition-colors"
            >
              Electrochemistry Calculators
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-500 dark:text-gray-400">Nernst Equation Calculator</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-6 mb-4 animate-fade-in">
            Nernst Equation Calculator
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in animation-delay-100">
            Calculate electrochemical cell potential under non-standard conditions using the Nernst equation
          </p>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Calculator */}
              <NernstEquationCalculator />

              {/* Educational Content */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 animate-slide-in-up animation-delay-200">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Understanding the Nernst Equation
                </h2>
                
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    The Nernst equation is fundamental in electrochemistry, allowing us to calculate the 
                    cell potential under non-standard conditions. It relates the cell potential to the 
                    standard electrode potential, temperature, and activities (or concentrations) of the 
                    chemical species involved in the reaction.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    The Nernst Equation Formula
                  </h3>
                  
                  <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg mb-6">
                    <p className="text-center text-2xl font-mono text-gray-900 dark:text-white mb-2">
                      E = E° - (RT/nF) × ln(Q)
                    </p>
                    <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                      At 25°C (298.15 K): E = E° - (0.0592/n) × log(Q)
                    </p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="border-l-4 border-primary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">E = Cell potential (V)</p>
                      <p className="text-gray-600 dark:text-gray-400">The actual voltage of the cell under given conditions</p>
                    </div>
                    
                    <div className="border-l-4 border-primary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">E° = Standard cell potential (V)</p>
                      <p className="text-gray-600 dark:text-gray-400">The voltage when all species are at standard state (1 M, 1 atm, 25°C)</p>
                    </div>

                    <div className="border-l-4 border-primary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">R = Gas constant = 8.314 J/(mol·K)</p>
                      <p className="text-gray-600 dark:text-gray-400">Universal gas constant</p>
                    </div>

                    <div className="border-l-4 border-primary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">T = Temperature (K)</p>
                      <p className="text-gray-600 dark:text-gray-400">Usually 298.15 K (25°C) for standard laboratory conditions</p>
                    </div>

                    <div className="border-l-4 border-primary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">n = Electrons transferred</p>
                      <p className="text-gray-600 dark:text-gray-400">Number of moles of electrons exchanged in the balanced redox reaction</p>
                    </div>

                    <div className="border-l-4 border-primary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">F = Faraday constant = 96,485 C/mol</p>
                      <p className="text-gray-600 dark:text-gray-400">Charge per mole of electrons</p>
                    </div>

                    <div className="border-l-4 border-primary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">Q = Reaction quotient</p>
                      <p className="text-gray-600 dark:text-gray-400">Q = [products] / [reactants]</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Practical Example
                  </h3>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">
                      Copper-Zinc Daniell Cell
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)
                    </p>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li><strong>E° =</strong> 1.10 V</li>
                      <li><strong>n =</strong> 2 electrons</li>
                      <li><strong>T =</strong> 298.15 K</li>
                      <li><strong>[Cu²⁺] =</strong> 0.01 M</li>
                      <li><strong>[Zn²⁺] =</strong> 1.0 M</li>
                      <li><strong>Q =</strong> [Zn²⁺]/[Cu²⁺] = 1.0/0.01 = 100</li>
                    </ul>
                    <p className="mt-4 text-gray-700 dark:text-gray-300">
                      E = 1.10 - (8.314 × 298.15)/(2 × 96485) × ln(100)<br/>
                      E = 1.10 - 0.0296 × 4.605<br/>
                      E = 1.10 - 0.136 = <strong>0.964 V</strong>
                    </p>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Key Concepts
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        📊 Concentration Effects
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Higher product concentration or lower reactant concentration decreases cell potential
                      </p>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        🌡️ Temperature Dependence
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Higher temperature increases the magnitude of the concentration correction term
                      </p>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        ⚡ Standard Potential
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        E° is characteristic of each redox couple and found in tables
                      </p>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        ⚖️ Equilibrium
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        At equilibrium, E = 0 and Q = K (equilibrium constant)
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Applications
                  </h3>
                  
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-primary-600 dark:text-primary-400 mt-1">🔋</span>
                      <div>
                        <strong>Battery Design:</strong> Predict battery voltage under various charge states and conditions
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-600 dark:text-primary-400 mt-1">🧪</span>
                      <div>
                        <strong>pH Measurement:</strong> pH electrodes use the Nernst equation to convert voltage to pH
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-600 dark:text-primary-400 mt-1">⚗️</span>
                      <div>
                        <strong>Corrosion Science:</strong> Calculate corrosion potential in different environments
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-600 dark:text-primary-400 mt-1">🔬</span>
                      <div>
                        <strong>Analytical Chemistry:</strong> Determine ion concentrations using potentiometry
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-600 dark:text-primary-400 mt-1">💊</span>
                      <div>
                        <strong>Biochemistry:</strong> Understand redox processes in cellular respiration and metabolism
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
                    <span className="text-2xl">⚡</span>
                    Quick Reference
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Units:</p>
                      <p className="text-gray-600 dark:text-gray-400">V (volts), K (kelvin)</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Formula:</p>
                      <p className="text-gray-600 dark:text-gray-400">E = E° - (RT/nF) × ln(Q)</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Constants:</p>
                      <p className="text-gray-600 dark:text-gray-400">R = 8.314 J/(mol·K)<br/>F = 96485 C/mol</p>
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
                        href="/electrochemistry-calculators"
                        className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                      >
                        Cell Potential Calculator
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/concentration-and-solution-calculators/molarity-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                      >
                        Molarity Calculator
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/physical-chemistry-calculators/ideal-gas-law-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                      >
                        Ideal Gas Law Calculator
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/"
                        className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors font-semibold"
                      >
                        View All Calculators →
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
                      <span className="text-xl">🔋</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Battery Technology</p>
                        <p className="text-gray-600 dark:text-gray-400">Battery voltage prediction</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">🧪</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Analytical Chemistry</p>
                        <p className="text-gray-600 dark:text-gray-400">Potentiometric measurements</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">⚗️</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Corrosion Studies</p>
                        <p className="text-gray-600 dark:text-gray-400">Corrosion potential analysis</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">💊</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Biochemistry</p>
                        <p className="text-gray-600 dark:text-gray-400">Cellular redox processes</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
