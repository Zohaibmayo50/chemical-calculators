import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VaporPressureCalculator from '@/components/calculators/VaporPressureCalculator';

export const metadata: Metadata = {
  title: 'Vapor Pressure Calculator | Clausius-Clapeyron Equation | Phase Equilibrium',
  description: 'Calculate vapor pressure at different temperatures using the Clausius-Clapeyron equation. Determine heat of vaporization and predict boiling points.',
};

export default function VaporPressureCalculatorPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-tertiary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <nav className="flex items-center gap-2 text-sm animate-fade-in">
            <Link href="/" className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors">
              Home
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/physical-chemistry-calculators" className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors">
              Physical Chemistry Calculators
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-500 dark:text-gray-400">Vapor Pressure Calculator</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-6 mb-4 animate-fade-in">
            Vapor Pressure Calculator
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in animation-delay-100">
            Calculate vapor pressure using the Clausius-Clapeyron equation
          </p>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 space-y-8">
              <VaporPressureCalculator />

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 animate-slide-in-up animation-delay-200">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Understanding Vapor Pressure
                </h2>
                
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    Vapor pressure is the pressure exerted by a vapor in equilibrium with its liquid or solid phase. 
                    The Clausius-Clapeyron equation relates vapor pressure to temperature, providing a powerful tool 
                    for predicting phase behavior and understanding intermolecular forces.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    The Clausius-Clapeyron Equation
                  </h3>

                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
                    <div className="font-mono text-lg bg-white dark:bg-gray-600 p-4 rounded mb-3 text-center">
                      ln(P₂/P₁) = -(ΔHvap/R)(1/T₂ - 1/T₁)
                    </div>
                    <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                      <p><strong>P₁, P₂</strong> = vapor pressures at temperatures T₁ and T₂</p>
                      <p><strong>ΔHvap</strong> = enthalpy (heat) of vaporization (J/mol or kJ/mol)</p>
                      <p><strong>R</strong> = universal gas constant (8.314 J/(mol·K))</p>
                      <p><strong>T₁, T₂</strong> = absolute temperatures (K)</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Example: Water Vapor Pressure
                  </h3>

                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      <strong>Problem:</strong> Calculate the vapor pressure of water at 90°C, given:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700 dark:text-gray-300 mb-4">
                      <li>P₁ = 1.00 atm at T₁ = 373 K (100°C)</li>
                      <li>ΔHvap = 40.7 kJ/mol</li>
                      <li>T₂ = 363 K (90°C)</li>
                    </ul>

                    <p className="text-gray-700 dark:text-gray-300 mb-3"><strong>Solution:</strong></p>
                    <div className="font-mono bg-white dark:bg-gray-600 p-3 rounded space-y-1 text-sm">
                      <p>ln(P₂/1.00) = -(40,700/8.314)(1/363 - 1/373)</p>
                      <p>ln(P₂) = -(4,895)(0.002755 - 0.002681)</p>
                      <p>ln(P₂) = -(4,895)(0.000074)</p>
                      <p>ln(P₂) = -0.362</p>
                      <p>P₂ = e^(-0.362)</p>
                      <p className="text-tertiary-600 dark:text-tertiary-400 font-bold">P₂ = 0.696 atm</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Heat of Vaporization Values
                  </h3>

                  <div className="overflow-x-auto mb-6">
                    <table className="min-w-full border border-gray-300 dark:border-gray-600">
                      <thead className="bg-gray-100 dark:bg-gray-700">
                        <tr>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Substance</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">ΔHvap (kJ/mol)</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Boiling Point</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        <tr><td className="border px-4 py-2">Water</td><td className="border px-4 py-2">40.7</td><td className="border px-4 py-2">100°C</td></tr>
                        <tr className="bg-gray-50 dark:bg-gray-700/50"><td className="border px-4 py-2">Ethanol</td><td className="border px-4 py-2">38.6</td><td className="border px-4 py-2">78°C</td></tr>
                        <tr><td className="border px-4 py-2">Methanol</td><td className="border px-4 py-2">35.2</td><td className="border px-4 py-2">65°C</td></tr>
                        <tr className="bg-gray-50 dark:bg-gray-700/50"><td className="border px-4 py-2">Benzene</td><td className="border px-4 py-2">30.7</td><td className="border px-4 py-2">80°C</td></tr>
                        <tr><td className="border px-4 py-2">Acetone</td><td className="border px-4 py-2">29.1</td><td className="border px-4 py-2">56°C</td></tr>
                        <tr className="bg-gray-50 dark:bg-gray-700/50"><td className="border px-4 py-2">Diethyl Ether</td><td className="border px-4 py-2">26.5</td><td className="border px-4 py-2">35°C</td></tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Key Relationships
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Temperature Effect</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Vapor pressure increases exponentially with temperature. Higher T means more molecules 
                        have enough energy to escape the liquid phase.
                      </p>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">ΔHvap Significance</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Higher ΔHvap indicates stronger intermolecular forces. Water has high ΔHvap due 
                        to extensive hydrogen bonding.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Applications
                  </h3>
                  
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🌡️</span>
                      <div>
                        <strong>Boiling Point Prediction:</strong> Determine boiling point at different pressures (e.g., high altitude cooking)
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🏭</span>
                      <div>
                        <strong>Distillation:</strong> Design and optimize separation processes based on vapor pressure differences
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">💧</span>
                      <div>
                        <strong>Evaporation Rates:</strong> Predict how quickly liquids will evaporate at various temperatures
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">☁️</span>
                      <div>
                        <strong>Weather Prediction:</strong> Understanding humidity and cloud formation
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 animate-slide-in-up animation-delay-300">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="text-2xl">💨</span>
                    Quick Reference
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">R constant:</p>
                      <p className="text-gray-600 dark:text-gray-400">8.314 J/(mol·K)</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Boiling occurs:</p>
                      <p className="text-gray-600 dark:text-gray-400">When P = atmospheric pressure</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Higher ΔHvap:</p>
                      <p className="text-gray-600 dark:text-gray-400">Stronger intermolecular forces</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 animate-slide-in-up animation-delay-400">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="text-2xl">🔗</span>
                    Related Calculators
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/physical-chemistry-calculators/boiling-point-elevation-calculator" className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors">
                        Boiling Point Elevation
                      </Link>
                    </li>
                    <li>
                      <Link href="/thermodynamics-calculators/enthalpy-reaction-calculator" className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors">
                        Enthalpy Calculator
                      </Link>
                    </li>
                    <li>
                      <Link href="/physical-chemistry-calculators/ideal-gas-law-calculator" className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors">
                        Ideal Gas Law
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors font-semibold">
                        View All Calculators →
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 animate-slide-in-up animation-delay-500">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="text-2xl">🎯</span>
                    Where It&apos;s Used
                  </h3>
                  <ul className="space-y-4 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="text-xl">🏭</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Distillation</p>
                        <p className="text-gray-600 dark:text-gray-400">Separation processes</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">🌡️</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Climate</p>
                        <p className="text-gray-600 dark:text-gray-400">Weather prediction</p>
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
