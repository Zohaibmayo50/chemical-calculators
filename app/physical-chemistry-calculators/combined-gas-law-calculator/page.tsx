import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CombinedGasLawCalculator from '@/components/calculators/CombinedGasLawCalculator';

export const metadata: Metadata = {
  title: 'Combined Gas Law Calculator | P₁V₁/T₁ = P₂V₂/T₂ Calculator',
  description: 'Calculate pressure, volume, or temperature changes for a fixed amount of gas using the combined gas law. Solve for any variable in P₁V₁/T₁ = P₂V₂/T₂.',
};

export default function CombinedGasLawCalculatorPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-accent-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <nav className="flex items-center gap-2 text-sm animate-fade-in">
            <Link 
              href="/" 
              className="text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 transition-colors"
            >
              Home
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link 
              href="/physical-chemistry-calculators" 
              className="text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 transition-colors"
            >
              Physical Chemistry Calculators
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-500 dark:text-gray-400">Combined Gas Law Calculator</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-6 mb-4 animate-fade-in">
            Combined Gas Law Calculator
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in animation-delay-100">
            Calculate pressure, volume, or temperature changes using P₁V₁/T₁ = P₂V₂/T₂
          </p>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Calculator */}
              <CombinedGasLawCalculator />

              {/* Educational Content */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 animate-slide-in-up animation-delay-200">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Understanding the Combined Gas Law
                </h2>
                
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    The combined gas law merges Boyle&apos;s law, Charles&apos;s law, and Gay-Lussac&apos;s law 
                    into one comprehensive equation. It describes how pressure, volume, and temperature 
                    of a fixed amount of gas relate to each other when conditions change. This law is 
                    essential for predicting gas behavior in real-world situations.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    The Combined Gas Law Equation
                  </h3>
                  
                  <div className="bg-gradient-to-r from-accent-50 to-primary-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg mb-6">
                    <p className="text-center text-2xl font-mono text-gray-900 dark:text-white mb-2">
                      P₁V₁/T₁ = P₂V₂/T₂
                    </p>
                    <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                      For a fixed amount of gas (constant n)
                    </p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="border-l-4 border-accent-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">P₁, P₂ = Initial and final pressure (atm, kPa, mmHg)</p>
                      <p className="text-gray-600 dark:text-gray-400">Must use the same units for both</p>
                    </div>
                    
                    <div className="border-l-4 border-accent-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">V₁, V₂ = Initial and final volume (L, mL, m³)</p>
                      <p className="text-gray-600 dark:text-gray-400">Must use the same units for both</p>
                    </div>

                    <div className="border-l-4 border-accent-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">T₁, T₂ = Initial and final temperature (K)</p>
                      <p className="text-gray-600 dark:text-gray-400">MUST be in Kelvin: K = °C + 273.15</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Component Gas Laws
                  </h3>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <p className="font-semibold text-gray-900 dark:text-white mb-2">Boyle&apos;s Law (Constant T)</p>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          P₁V₁ = P₂V₂<br/>
                          Pressure and volume are inversely proportional at constant temperature
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-green-500 pl-4">
                        <p className="font-semibold text-gray-900 dark:text-white mb-2">Charles&apos;s Law (Constant P)</p>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          V₁/T₁ = V₂/T₂<br/>
                          Volume and temperature are directly proportional at constant pressure
                        </p>
                      </div>

                      <div className="border-l-4 border-purple-500 pl-4">
                        <p className="font-semibold text-gray-900 dark:text-white mb-2">Gay-Lussac&apos;s Law (Constant V)</p>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          P₁/T₁ = P₂/T₂<br/>
                          Pressure and temperature are directly proportional at constant volume
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Practical Example
                  </h3>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">
                      Heating a Gas in a Container
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      A gas occupies 2.0 L at 1.0 atm and 273 K. If the temperature increases to 546 K 
                      and the volume decreases to 1.0 L, what is the new pressure?
                    </p>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li><strong>P₁ =</strong> 1.0 atm</li>
                      <li><strong>V₁ =</strong> 2.0 L</li>
                      <li><strong>T₁ =</strong> 273 K</li>
                      <li><strong>V₂ =</strong> 1.0 L</li>
                      <li><strong>T₂ =</strong> 546 K</li>
                      <li><strong>P₂ =</strong> ?</li>
                    </ul>
                    <p className="mt-4 text-gray-700 dark:text-gray-300">
                      P₂ = (P₁ × V₁ × T₂) / (T₁ × V₂)<br/>
                      P₂ = (1.0 × 2.0 × 546) / (273 × 1.0)<br/>
                      P₂ = 1092 / 273<br/>
                      P₂ = <strong>4.0 atm</strong>
                    </p>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      The pressure quadrupled because the temperature doubled (increasing pressure) and 
                      the volume halved (also increasing pressure).
                    </p>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Key Concepts
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        ⚗️ Fixed Amount of Gas
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Number of moles (n) must remain constant
                      </p>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        🌡️ Use Kelvin
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Temperature MUST be in absolute scale (Kelvin)
                      </p>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        📊 Proportional Relationships
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        P ∝ T (at constant V), V ∝ T (at constant P), P ∝ 1/V (at constant T)
                      </p>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        🔄 Rearrangeable
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Can solve for any of the six variables
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Common Applications
                  </h3>
                  
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-accent-600 dark:text-accent-400 mt-1">🎈</span>
                      <div>
                        <strong>Weather Balloons:</strong> Calculate altitude changes as temperature and pressure vary
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent-600 dark:text-accent-400 mt-1">🚗</span>
                      <div>
                        <strong>Tire Pressure:</strong> Predict pressure changes with temperature (hot vs. cold weather)
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent-600 dark:text-accent-400 mt-1">🔥</span>
                      <div>
                        <strong>Combustion Engines:</strong> Calculate gas expansion in cylinders during heating
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent-600 dark:text-accent-400 mt-1">🏔️</span>
                      <div>
                        <strong>Altitude Effects:</strong> Understand how chips bags expand at high elevation
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent-600 dark:text-accent-400 mt-1">🧪</span>
                      <div>
                        <strong>Laboratory Work:</strong> Correct gas volumes to standard temperature and pressure (STP)
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent-600 dark:text-accent-400 mt-1">🏭</span>
                      <div>
                        <strong>Industrial Processes:</strong> Design gas storage and transfer systems
                      </div>
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Important Notes
                  </h3>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-500 p-4 mb-6">
                    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                      <li>• Temperature MUST be in Kelvin (not °C or °F)</li>
                      <li>• Units for P, V can be anything, but must be consistent (P₁ and P₂ same units, V₁ and V₂ same units)</li>
                      <li>• The amount of gas (moles) must remain constant</li>
                      <li>• For real gases, deviations occur at high pressure or low temperature</li>
                      <li>• This law combines into the ideal gas law: PV = nRT when n is not constant</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Quick Reference */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 animate-slide-in-up animation-delay-300">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="text-2xl">⚗️</span>
                    Quick Reference
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Units:</p>
                      <p className="text-gray-600 dark:text-gray-400">atm, L, K (or kPa, mL, K)</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Formula:</p>
                      <p className="text-gray-600 dark:text-gray-400">P₁V₁/T₁ = P₂V₂/T₂</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Constraint:</p>
                      <p className="text-gray-600 dark:text-gray-400">Fixed amount of gas (n = constant)</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Temperature:</p>
                      <p className="text-gray-600 dark:text-gray-400">MUST use Kelvin</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Level:</p>
                      <p className="text-gray-600 dark:text-gray-400">High School & College</p>
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
                        href="/physical-chemistry-calculators/ideal-gas-law-calculator"
                        className="text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 transition-colors"
                      >
                        Ideal Gas Law (PV=nRT)
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/physical-chemistry-calculators/osmotic-pressure-calculator"
                        className="text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 transition-colors"
                      >
                        Osmotic Pressure
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/thermodynamics-calculators/boiling-point-elevation-calculator"
                        className="text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 transition-colors"
                      >
                        Boiling Point Elevation
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
                          href="/chemistry-formulas/combined-gas-law-formula"
                          className="text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 transition-colors"
                        >
                          Combined Gas Law Formula
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="/chemistry-formulas/ideal-gas-law-formula"
                          className="text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 transition-colors"
                        >
                          Ideal Gas Law Formula
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <ul className="space-y-3 mt-6">
                    <li>
                      <Link 
                        href="/physical-chemistry-calculators"
                        className="text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 transition-colors font-semibold"
                      >
                        All Physical Chemistry Calculators →
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
                      <span className="text-xl">🎈</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Weather Balloons</p>
                        <p className="text-gray-600 dark:text-gray-400">Altitude predictions</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">🚗</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Automotive</p>
                        <p className="text-gray-600 dark:text-gray-400">Tire pressure changes</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">🧪</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Laboratory</p>
                        <p className="text-gray-600 dark:text-gray-400">STP corrections</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">🏭</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Industry</p>
                        <p className="text-gray-600 dark:text-gray-400">Gas storage systems</p>
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
