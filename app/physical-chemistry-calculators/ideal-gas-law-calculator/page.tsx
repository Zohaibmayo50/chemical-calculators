import IdealGasLawCalculator from '@/components/calculators/IdealGasLawCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ideal Gas Law Calculator (PV=nRT) | ChemCalc - Calculate P, V, n, T',
  description: 'Calculate pressure, volume, moles, or temperature using the Ideal Gas Law equation PV=nRT. Free online calculator with multiple R constants for chemistry and physics.',
  keywords: ['ideal gas law calculator', 'PV=nRT', 'gas law calculator', 'pressure volume temperature', 'moles calculator', 'gas constant R', 'chemistry calculator'],
};

export default function IdealGasLawCalculatorPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <nav className="flex items-center gap-2 text-sm mb-6 animate-fade-in">
            <Link href="/" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
              Chemistry Calculators
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/physical-chemistry-calculators" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
              Physical Chemistry Calculators
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-600 dark:text-gray-300">Ideal Gas Law Calculator</span>
          </nav>
        </div>

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Calculator (ABOVE THE FOLD) */}
            <div className="lg:col-span-2">
              {/* H1 Title */}
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-up">
                Ideal Gas Law Calculator
              </h1>

              {/* Calculator Tool - FIRST ELEMENT */}
              <div className="animate-slide-in-up" style={{ animationDelay: '100ms' }}>
                <IdealGasLawCalculator />
              </div>

          {/* Educational Content */}
          <div className="space-y-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mt-8">
            {/* What It Does Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                What This Calculator Does
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The Ideal Gas Law calculator solves for any one variable (P, V, n, or T) when the other three are known. This fundamental equation describes the behavior of ideal gases and provides excellent approximations for real gases under most conditions.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The calculator supports multiple gas constants (R) to match your unit preferences, automatically adjusting calculations for atmospheres, pascals, kilopascals, or millimeters of mercury.
              </p>
            </section>

            {/* Formula & Derivation */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                The Ideal Gas Law Equation
              </h2>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
                <div className="text-center text-3xl font-bold text-primary-600 dark:text-primary-400 mb-4">
                  PV = nRT
                </div>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Where:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li><strong>P</strong> = Pressure (atm, kPa, mmHg, or Pa)</li>
                    <li><strong>V</strong> = Volume (liters)</li>
                    <li><strong>n</strong> = Number of moles (mol)</li>
                    <li><strong>R</strong> = Universal gas constant</li>
                    <li><strong>T</strong> = Absolute temperature (Kelvin)</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Rearranged Forms:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">Solve for Pressure:</p>
                    <p className="text-gray-700 dark:text-gray-300">P = nRT / V</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">Solve for Volume:</p>
                    <p className="text-gray-700 dark:text-gray-300">V = nRT / P</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">Solve for Moles:</p>
                    <p className="text-gray-700 dark:text-gray-300">n = PV / RT</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">Solve for Temperature:</p>
                    <p className="text-gray-700 dark:text-gray-300">T = PV / nR</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">💡 Important: Temperature Must Be in Kelvin</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Always convert Celsius to Kelvin: <strong>K = °C + 273.15</strong><br />
                  Common temperatures: 0°C = 273.15 K, 25°C = 298.15 K, 100°C = 373.15 K
                </p>
              </div>
            </section>

            {/* Gas Constants */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Gas Constant (R) Values
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The gas constant R has different numerical values depending on the units used. Choose the R value that matches your pressure and volume units:
              </p>
              <div className="space-y-3">
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <p className="font-bold text-gray-900 dark:text-white">R = 0.0821 L·atm/(mol·K)</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">Most common for chemistry problems with pressure in atmospheres and volume in liters</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <p className="font-bold text-gray-900 dark:text-white">R = 8.314 J/(mol·K)</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">SI units - useful for thermodynamics and energy calculations (1 J = 1 Pa·L)</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <p className="font-bold text-gray-900 dark:text-white">R = 8.314 L·kPa/(mol·K)</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">For pressure in kilopascals (1 atm = 101.325 kPa)</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <p className="font-bold text-gray-900 dark:text-white">R = 62.36 L·mmHg/(mol·K)</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">For pressure in millimeters of mercury (1 atm = 760 mmHg)</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <p className="font-bold text-gray-900 dark:text-white">R = 1.987 cal/(mol·K)</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">For energy calculations in calories</p>
                </div>
              </div>
            </section>

            {/* Example Problems */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Step-by-Step Example Problems
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-primary-600 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Example 1: Calculate pressure of 2.0 mol gas at 25°C in 10 L
                  </h3>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p><strong>Given:</strong></p>
                    <ul className="list-disc list-inside ml-4">
                      <li>n = 2.0 mol</li>
                      <li>T = 25°C = 298.15 K</li>
                      <li>V = 10 L</li>
                      <li>R = 0.0821 L·atm/(mol·K)</li>
                    </ul>
                    <p><strong>Find:</strong> Pressure (P)</p>
                    <p><strong>Solution:</strong></p>
                    <p>P = nRT / V</p>
                    <p>P = (2.0 mol × 0.0821 L·atm/(mol·K) × 298.15 K) / 10 L</p>
                    <p>P = 48.94 L·atm / 10 L</p>
                    <p>P = 4.89 atm</p>
                  </div>
                </div>

                <div className="border-l-4 border-primary-600 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Example 2: What volume does 1 mol of gas occupy at STP?
                  </h3>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p><strong>Given (STP):</strong></p>
                    <ul className="list-disc list-inside ml-4">
                      <li>n = 1.0 mol</li>
                      <li>T = 273.15 K (0°C)</li>
                      <li>P = 1.0 atm</li>
                      <li>R = 0.0821 L·atm/(mol·K)</li>
                    </ul>
                    <p><strong>Find:</strong> Volume (V)</p>
                    <p><strong>Solution:</strong></p>
                    <p>V = nRT / P</p>
                    <p>V = (1.0 mol × 0.0821 L·atm/(mol·K) × 273.15 K) / 1.0 atm</p>
                    <p>V = 22.41 L</p>
                    <p className="mt-2"><strong>Result:</strong> At STP, 1 mole of ideal gas occupies 22.4 L (molar volume)</p>
                  </div>
                </div>

                <div className="border-l-4 border-primary-600 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Example 3: How many moles in 5.0 L at 2.0 atm and 300 K?
                  </h3>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p><strong>Given:</strong></p>
                    <ul className="list-disc list-inside ml-4">
                      <li>P = 2.0 atm</li>
                      <li>V = 5.0 L</li>
                      <li>T = 300 K</li>
                      <li>R = 0.0821 L·atm/(mol·K)</li>
                    </ul>
                    <p><strong>Find:</strong> Moles (n)</p>
                    <p><strong>Solution:</strong></p>
                    <p>n = PV / RT</p>
                    <p>n = (2.0 atm × 5.0 L) / (0.0821 L·atm/(mol·K) × 300 K)</p>
                    <p>n = 10.0 atm·L / 24.63 L·atm/mol</p>
                    <p>n = 0.406 mol</p>
                  </div>
                </div>

                <div className="border-l-4 border-primary-600 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Example 4: At what temperature does 0.5 mol occupy 12 L at 1 atm?
                  </h3>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p><strong>Given:</strong></p>
                    <ul className="list-disc list-inside ml-4">
                      <li>n = 0.5 mol</li>
                      <li>V = 12 L</li>
                      <li>P = 1.0 atm</li>
                      <li>R = 0.0821 L·atm/(mol·K)</li>
                    </ul>
                    <p><strong>Find:</strong> Temperature (T)</p>
                    <p><strong>Solution:</strong></p>
                    <p>T = PV / nR</p>
                    <p>T = (1.0 atm × 12 L) / (0.5 mol × 0.0821 L·atm/(mol·K))</p>
                    <p>T = 12 atm·L / 0.04105 L·atm/K</p>
                    <p>T = 292.3 K = 19.2°C</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Common Mistakes */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Common Mistakes to Avoid
              </h2>
              <div className="space-y-4">
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <h3 className="font-semibold text-red-900 dark:text-red-300 mb-2">❌ Using Celsius instead of Kelvin</h3>
                  <p className="text-gray-700 dark:text-gray-300">Temperature MUST be in Kelvin. Always add 273.15 to convert from °C. Using °C will give completely wrong answers.</p>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <h3 className="font-semibold text-red-900 dark:text-red-300 mb-2">❌ Mismatching R constant with pressure units</h3>
                  <p className="text-gray-700 dark:text-gray-300">If pressure is in kPa, use R = 8.314 L·kPa/(mol·K), not 0.0821. Always verify your units match your R value.</p>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <h3 className="font-semibold text-red-900 dark:text-red-300 mb-2">❌ Converting mL to L incorrectly</h3>
                  <p className="text-gray-700 dark:text-gray-300">Volume must be in liters. Divide mL by 1000: 500 mL = 0.5 L, not 5 L.</p>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <h3 className="font-semibold text-red-900 dark:text-red-300 mb-2">❌ Using mass instead of moles</h3>
                  <p className="text-gray-700 dark:text-gray-300">The equation requires moles (n), not mass. Convert grams to moles using: n = mass / molar mass.</p>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <h3 className="font-semibold text-red-900 dark:text-red-300 mb-2">❌ Assuming all gases are ideal</h3>
                  <p className="text-gray-700 dark:text-gray-300">Real gases deviate at high pressures (&gt;10 atm) or low temperatures (near liquefaction). Use van der Waals equation for accurate results in extreme conditions.</p>
                </div>
              </div>
            </section>

            {/* When Does Ideal Gas Law Apply */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                When Does the Ideal Gas Law Apply?
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                  <h3 className="font-semibold text-green-900 dark:text-green-300 mb-2">✅ Good Approximation When:</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                    <li>Low pressure (&lt; 5 atm)</li>
                    <li>High temperature (&gt; 0°C)</li>
                    <li>Small, non-polar molecules (He, H₂, N₂, O₂)</li>
                    <li>Dilute gases</li>
                    <li>No strong intermolecular forces</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                  <h3 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">⚠️ Poor Approximation When:</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                    <li>High pressure (&gt; 10 atm)</li>
                    <li>Low temperature (near boiling point)</li>
                    <li>Polar molecules (H₂O, NH₃)</li>
                    <li>Large molecules (hydrocarbons)</li>
                    <li>Strong hydrogen bonding or dipole interactions</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* FAQs */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Why must temperature be in Kelvin and not Celsius?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    The Ideal Gas Law is derived from kinetic theory where temperature represents average kinetic energy. Kelvin is an absolute scale starting from absolute zero (no molecular motion). Using Celsius would give negative temperatures and nonsensical results since volume and pressure cannot be negative.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    What is the difference between STP and standard conditions?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    STP (Standard Temperature and Pressure) changed in 1982. Old STP: 0°C, 1 atm (22.4 L/mol). Current IUPAC STP: 0°C, 1 bar = 100 kPa (22.7 L/mol). Standard conditions for thermodynamics: 25°C, 1 atm or 1 bar (24.5 L/mol). Always clarify which standard you&apos;re using.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Can I use this calculator for gas mixtures?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Yes! For gas mixtures, use the total moles (n = n₁ + n₂ + n₃ + ...) to find total pressure. For partial pressures, use Dalton&apos;s Law: Pᵢ = χᵢ × P_total, where χᵢ is the mole fraction of gas i.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    How do I convert between different pressure units?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Common conversions: 1 atm = 101.325 kPa = 101,325 Pa = 760 mmHg = 760 torr = 14.7 psi = 1.01325 bar. Either convert all pressures to one unit, or use the appropriate R constant for your pressure unit.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    What causes real gases to deviate from ideal behavior?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Two main factors: (1) Molecular volume - real gas molecules occupy space, reducing available volume. (2) Intermolecular forces - attractions between molecules reduce pressure compared to ideal predictions. The van der Waals equation corrects for both effects.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    How do I find the density of a gas using PV=nRT?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Density = mass/volume. Since n = mass/MM, substitute into PV=nRT to get: density = (P × MM) / (RT). This shows density is proportional to pressure and molar mass, inversely proportional to temperature.
                  </p>
                </div>
              </div>
            </section>

            {/* Applications */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Real-World Applications
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="border-l-4 border-primary-600 pl-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Scuba Diving</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Calculate how much air is compressed in dive tanks (typical: 3000 psi ≈ 200 atm). Understand how pressure increases with depth affect gas consumption and decompression requirements.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary-600 pl-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Weather Balloons</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Predict balloon expansion as atmospheric pressure decreases with altitude. Design balloons to withstand pressure changes from sea level (1 atm) to stratosphere (0.01 atm).
                    </p>
                  </div>

                  <div className="border-l-4 border-primary-600 pl-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Chemical Reactors</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Calculate optimal conditions for gas-phase reactions. Determine pressure vessels sizes needed for industrial synthesis of ammonia (Haber process), sulfuric acid (contact process).
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border-l-4 border-primary-600 pl-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Automotive Engineering</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Calculate tire pressure changes with temperature. Design fuel injection systems accounting for air density variations. Predict airbag inflation rates based on gas generator output.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary-600 pl-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Respiratory Therapy</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Calculate oxygen tank capacity for medical use. Determine appropriate flow rates for ventilators. Design portable oxygen concentrators for patients with respiratory conditions.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary-600 pl-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Food Packaging</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Modified atmosphere packaging (MAP) uses CO₂ and N₂ to extend shelf life. Calculate gas mixtures needed for different products. Predict pressure changes during shipping and storage.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Key Information */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 animate-fade-in">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Quick Reference</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-primary-600 dark:text-primary-400 mt-1">▸</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Units</p>
                        <p className="text-gray-600 dark:text-gray-400">atm, L, mol, K</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary-600 dark:text-primary-400 mt-1">▸</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Formula</p>
                        <p className="text-gray-600 dark:text-gray-400">PV = nRT</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary-600 dark:text-primary-400 mt-1">▸</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Applications</p>
                        <p className="text-gray-600 dark:text-gray-400">Gas behavior, engineering</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary-600 dark:text-primary-400 mt-1">▸</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Level</p>
                        <p className="text-gray-600 dark:text-gray-400">High school chemistry</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Related Calculators */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 animate-fade-in" style={{ animationDelay: '100ms' }}>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Related Calculators</h3>
                  <div className="space-y-2">
                    <Link href="/concentration-and-solution-calculators/molarity-calculator" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                      <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">Molarity Calculator</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Calculate molar concentration</p>
                    </Link>
                    <Link href="/stoichiometry-calculators/stoichiometry-calculator" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                      <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">Stoichiometry Calculator</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Balance equations</p>
                    </Link>
                    <Link href="/concentration-and-solution-calculators/solution-preparation-calculator" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                      <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">Solution Preparation</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Prepare lab solutions</p>
                    </Link>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Related Formulas</h3>
                    <div className="space-y-2">
                      <Link href="/chemistry-formulas/ideal-gas-law" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                        <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">Ideal Gas Law Formula</p>
                      </Link>
                      <Link href="/chemistry-formulas/combined-gas-law" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                        <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">Combined Gas Law Formula</p>
                      </Link>
                    </div>
                  </div>
                  <div className="space-y-2 mt-4">
                    <Link href="/physical-chemistry-calculators" className="block p-3 rounded-lg bg-primary-50 dark:bg-primary-900/20 hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors group">
                      <p className="font-semibold text-primary-700 dark:text-primary-300">View All Physical Chemistry Calculators →</p>
                    </Link>
                  </div>
                </div>

                {/* Where It's Used */}
                <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 shadow-lg border border-primary-200 dark:border-primary-700 animate-fade-in" style={{ animationDelay: '200ms' }}>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Where It&apos;s Used</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🎈</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Engineering</p>
                        <p className="text-gray-600 dark:text-gray-400">HVAC, compression</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🔬</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Laboratory</p>
                        <p className="text-gray-600 dark:text-gray-400">Gas calculations</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🏥</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Medical</p>
                        <p className="text-gray-600 dark:text-gray-400">Respiratory therapy</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🏭</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Industry</p>
                        <p className="text-gray-600 dark:text-gray-400">Process control</p>
                      </div>
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
            "name": "Ideal Gas Law Calculator",
            "description": "Ideal Gas Law Calculator on ChemSolved",
            "url": "https://chemsolved.com/physical-chemistry-calculators/ideal-gas-law-calculator",
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
                "name": "Ideal Gas Law Calculator",
                "item": "https://chemsolved.com/physical-chemistry-calculators/ideal-gas-law-calculator"
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
