import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OsmoticPressureCalculator from '@/components/calculators/OsmoticPressureCalculator';

export const metadata: Metadata = {
  title: 'Osmotic Pressure Calculator | Colligative Property Calculator',
  description: 'Calculate osmotic pressure of solutions using π = iMRT. Determine osmotic pressure from molarity, temperature, and van\'t Hoff factor for colligative property analysis.',
};

export default function OsmoticPressureCalculatorPage() {
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
            <span className="text-gray-500 dark:text-gray-400">Osmotic Pressure Calculator</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-6 mb-4 animate-fade-in">
            Osmotic Pressure Calculator
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in animation-delay-100">
            Calculate osmotic pressure of solutions using the colligative property formula π = iMRT
          </p>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Calculator */}
              <OsmoticPressureCalculator />

              {/* Educational Content */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 animate-slide-in-up animation-delay-200">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Understanding Osmotic Pressure
                </h2>
                
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    Osmotic pressure is a colligative property that depends on the concentration of 
                    solute particles in a solution, not on their identity. It&apos;s the pressure required 
                    to prevent the flow of solvent molecules through a semipermeable membrane from a 
                    region of lower solute concentration to one of higher solute concentration.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    The Osmotic Pressure Formula
                  </h3>
                  
                  <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg mb-6">
                    <p className="text-center text-2xl font-mono text-gray-900 dark:text-white mb-2">
                      π = iMRT
                    </p>
                    <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                      Van&apos;t Hoff equation for osmotic pressure
                    </p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="border-l-4 border-primary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">π = Osmotic pressure (atm)</p>
                      <p className="text-gray-600 dark:text-gray-400">The pressure required to stop osmosis</p>
                    </div>
                    
                    <div className="border-l-4 border-primary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">i = Van&apos;t Hoff factor</p>
                      <p className="text-gray-600 dark:text-gray-400">Number of particles per formula unit (1 for non-electrolytes, 2 for NaCl, 3 for CaCl₂)</p>
                    </div>

                    <div className="border-l-4 border-primary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">M = Molarity (mol/L)</p>
                      <p className="text-gray-600 dark:text-gray-400">Molar concentration of the solute</p>
                    </div>

                    <div className="border-l-4 border-primary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">R = Gas constant = 0.08206 L·atm/(mol·K)</p>
                      <p className="text-gray-600 dark:text-gray-400">Universal gas constant</p>
                    </div>

                    <div className="border-l-4 border-primary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">T = Temperature (K)</p>
                      <p className="text-gray-600 dark:text-gray-400">Absolute temperature (°C + 273.15)</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Common Van&apos;t Hoff Factors
                  </h3>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white mb-2">Non-electrolytes</p>
                        <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                          <li>• Glucose: i = 1</li>
                          <li>• Sucrose: i = 1</li>
                          <li>• Urea: i = 1</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white mb-2">Electrolytes</p>
                        <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                          <li>• NaCl: i ≈ 2</li>
                          <li>• CaCl₂: i ≈ 3</li>
                          <li>• Al₂(SO₄)₃: i ≈ 5</li>
                        </ul>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-4">
                      Note: Actual i values may be slightly lower due to ion pairing in solution
                    </p>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Practical Example
                  </h3>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">
                      0.1 M Glucose Solution at 25°C
                    </p>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li><strong>M =</strong> 0.1 mol/L</li>
                      <li><strong>i =</strong> 1 (non-electrolyte)</li>
                      <li><strong>T =</strong> 298.15 K</li>
                      <li><strong>R =</strong> 0.08206 L·atm/(mol·K)</li>
                    </ul>
                    <p className="mt-4 text-gray-700 dark:text-gray-300">
                      π = 1 × 0.1 × 0.08206 × 298.15<br/>
                      π = <strong>2.447 atm</strong>
                    </p>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      This is approximately 247.9 kPa or 1859 mmHg
                    </p>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Key Concepts
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        🧬 Colligative Property
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Depends only on particle count, not particle type
                      </p>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        💧 Semipermeable Membrane
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Allows solvent but not solute molecules to pass
                      </p>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        ⚖️ Equilibrium
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Osmotic pressure balances concentration gradient
                      </p>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        🌡️ Temperature Effect
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Higher temperature increases osmotic pressure
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Applications
                  </h3>
                  
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-primary-600 dark:text-primary-400 mt-1">🧬</span>
                      <div>
                        <strong>Biological Systems:</strong> Cell membranes maintain osmotic balance; red blood cells in different solutions
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-600 dark:text-primary-400 mt-1">💧</span>
                      <div>
                        <strong>Water Purification:</strong> Reverse osmosis for desalination and water treatment
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-600 dark:text-primary-400 mt-1">💊</span>
                      <div>
                        <strong>Medical Applications:</strong> IV fluid formulation, dialysis, drug delivery
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-600 dark:text-primary-400 mt-1">🔬</span>
                      <div>
                        <strong>Molecular Weight Determination:</strong> Calculate molar mass of large molecules like proteins and polymers
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-600 dark:text-primary-400 mt-1">🌱</span>
                      <div>
                        <strong>Plant Biology:</strong> Water uptake by roots, turgor pressure in cells
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-600 dark:text-primary-400 mt-1">🍬</span>
                      <div>
                        <strong>Food Industry:</strong> Preserving foods with high sugar/salt concentrations
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
                    <span className="text-2xl">💧</span>
                    Quick Reference
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Units:</p>
                      <p className="text-gray-600 dark:text-gray-400">atm, kPa, mmHg</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Formula:</p>
                      <p className="text-gray-600 dark:text-gray-400">π = iMRT</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Constant:</p>
                      <p className="text-gray-600 dark:text-gray-400">R = 0.08206 L·atm/(mol·K)</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Property:</p>
                      <p className="text-gray-600 dark:text-gray-400">Colligative (particle-dependent)</p>
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
                        href="/thermodynamics-calculators/boiling-point-elevation-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                      >
                        Boiling Point Elevation
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/thermodynamics-calculators/freezing-point-depression-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                      >
                        Freezing Point Depression
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
                      <span className="text-xl">🧬</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Cell Biology</p>
                        <p className="text-gray-600 dark:text-gray-400">Osmotic balance in cells</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">💧</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Water Treatment</p>
                        <p className="text-gray-600 dark:text-gray-400">Reverse osmosis systems</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">💊</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Medicine</p>
                        <p className="text-gray-600 dark:text-gray-400">IV solutions and dialysis</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">🔬</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Research</p>
                        <p className="text-gray-600 dark:text-gray-400">Molecular weight determination</p>
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
