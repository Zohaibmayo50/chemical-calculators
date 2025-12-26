import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Arrhenius Equation | k = Ae^(-Ea/RT) | Reaction Rate & Temperature',
  description: 'Master the Arrhenius equation relating reaction rate constant to temperature and activation energy. Includes examples and calculator links.',
  alternates: {
    canonical: 'https://chemicalcalculators.com/chemistry-formulas/arrhenius-equation',
  },
  keywords: 'Arrhenius equation, activation energy, rate constant, reaction kinetics, temperature dependence',
};

export default function ArrheniusEquationPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <nav className="mb-8 text-sm">
            <Link href="/" className="text-primary-600 dark:text-primary-400 hover:underline">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/chemistry-formulas" className="text-primary-600 dark:text-primary-400 hover:underline">Chemistry Formulas</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600 dark:text-gray-400">Arrhenius Equation</span>
          </nav>

          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Arrhenius Equation
          </h1>

          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            The <strong>Arrhenius equation</strong> shows how reaction rate depends on temperature. It relates the 
            rate constant (k) to activation energy (Ea) and temperature (T), explaining why reactions speed up when heated.
          </p>

          {/* Formula Block */}
          <div className="my-12 p-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">The Arrhenius Equation</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center">
              <p className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
                k = Ae<sup>-Ea/RT</sup>
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
                Linearized form (more common for calculations):
              </p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">
                ln k = ln A - Ea/RT
              </p>
            </div>
          </div>

          {/* Variable Definitions */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Variable Definitions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-2">k = Rate Constant</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> Vary by reaction order (e.g., s⁻¹, M⁻¹s⁻¹)
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Reaction rate constant at temperature T
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-2">A = Frequency Factor (Pre-exponential)</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> Same as k
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Meaning:</strong> Collision frequency and orientation factor
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                  💡 Represents maximum possible rate constant (if Ea = 0)
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-2">Ea = Activation Energy</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> J/mol or kJ/mol
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Minimum energy needed for reaction to occur
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                  Higher Ea = slower reaction, more temperature-sensitive
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-2">R = Gas Constant</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Value:</strong> 8.314 J/(mol·K)
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-2">T = Temperature</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> Kelvin (K) — MUST use Kelvin!
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Conversion:</strong> K = °C + 273.15
                </p>
              </div>
            </div>
          </section>

          {/* Two-Point Form */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Two-Point Form (Most Practical)</h2>
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-8">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                When you have rate constants at two different temperatures, use this form to find Ea:
              </p>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center">
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  ln(k₂/k₁) = (Ea/R) × (1/T₁ - 1/T₂)
                </p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                This eliminates the unknown A, making it easier to calculate Ea from experimental data.
              </p>
            </div>
          </section>

          {/* Example */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Step-by-Step Example</h2>
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Problem: A reaction has k = 0.025 s⁻¹ at 300 K and k = 0.100 s⁻¹ at 350 K. Calculate Ea.
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-2">Given:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>k₁ = 0.025 s⁻¹ at T₁ = 300 K</li>
                    <li>k₂ = 0.100 s⁻¹ at T₂ = 350 K</li>
                    <li>R = 8.314 J/(mol·K)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 1: Use two-point form</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    ln(k₂/k₁) = (Ea/R) × (1/T₁ - 1/T₂)
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 2: Calculate ln(k₂/k₁)</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    ln(0.100/0.025) = ln(4) = 1.386
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 3: Calculate (1/T₁ - 1/T₂)</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    1/300 - 1/350 = 0.003333 - 0.002857 = 0.000476 K⁻¹
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 4: Solve for Ea</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded text-sm">
                    1.386 = (Ea / 8.314) × 0.000476<br />
                    Ea = 1.386 / 0.000476 × 8.314<br />
                    Ea = 24,200 J/mol = 24.2 kJ/mol
                  </p>
                </div>

                <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg">
                  <p className="font-bold text-green-900 dark:text-green-100">
                    Answer: Ea = 24.2 kJ/mol
                  </p>
                  <p className="text-sm mt-2">k quadruples when T increases 50 K, indicating moderate activation energy.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Temperature Effect */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">How Temperature Affects Rate</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-6">
                <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-3">🔥 Higher Temperature</h3>
                <ul className="space-y-2 text-blue-800 dark:text-blue-200">
                  <li>• Larger k (faster reaction)</li>
                  <li>• More molecules exceed Ea</li>
                  <li>• e^(-Ea/RT) closer to 1</li>
                  <li>• Rule of thumb: k doubles every 10°C</li>
                </ul>
              </div>

              <div className="bg-cyan-50 dark:bg-cyan-900/30 rounded-lg p-6">
                <h3 className="font-bold text-cyan-900 dark:text-cyan-100 mb-3">❄️ Lower Temperature</h3>
                <ul className="space-y-2 text-cyan-800 dark:text-cyan-200">
                  <li>• Smaller k (slower reaction)</li>
                  <li>• Fewer molecules exceed Ea</li>
                  <li>• e^(-Ea/RT) closer to 0</li>
                  <li>• Reactions "freeze" at low T</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Common Mistakes</h2>
            <div className="space-y-4">
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Using Celsius instead of Kelvin</h3>
                <p className="text-red-800 dark:text-red-200">
                  Temperature MUST be in Kelvin. Using °C gives completely wrong results. Always add 273.15.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Unit mismatch for Ea and R</h3>
                <p className="text-red-800 dark:text-red-200">
                  If Ea is in kJ/mol, convert to J/mol OR use R = 0.008314 kJ/(mol·K). Units must match!
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Wrong sign in two-point form</h3>
                <p className="text-red-800 dark:text-red-200">
                  It's (1/T₁ - 1/T₂), NOT (1/T₂ - 1/T₁). Order matters! Choose T₁ as lower temperature.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Using log instead of ln</h3>
                <p className="text-red-800 dark:text-red-200">
                  Arrhenius equation uses natural log (ln), NOT log₁₀. Check your calculator mode!
                </p>
              </div>
            </div>
          </section>

          {/* Related Calculators */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Related Calculators</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/kinetics-calculators/arrhenius-equation-calculator" className="block p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-blue-900 mb-2">Arrhenius Equation Calculator</h3>
                <p className="text-sm text-gray-600">Calculate k, Ea, or T instantly</p>
              </Link>

              <Link href="/kinetics-calculators/rate-constant-calculator" className="block p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-blue-900 mb-2">Rate Constant Calculator</h3>
                <p className="text-sm text-gray-600">Calculate k at different T</p>
              </Link>

              <Link href="/kinetics-calculators/reaction-rate-calculator" className="block p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-blue-900 mb-2">Reaction Rate Calculator</h3>
                <p className="text-sm text-gray-600">Calculate reaction rates</p>
              </Link>

              <Link href="/chemistry-formulas/collision-theory" className="block p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-green-900 mb-2">Collision Theory</h3>
                <p className="text-sm text-gray-600">Molecular basis of reaction rates</p>
              </Link>

              <Link href="/chemistry-formulas/rate-law" className="block p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-green-900 mb-2">Rate Law Formula</h3>
                <p className="text-sm text-gray-600">Rate expressions and orders</p>
              </Link>

              <Link href="/chemical-kinetics-calculators" className="block p-6 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-semibold mb-2">All Chemical Kinetics Calculators</h3>
                <p className="text-sm opacity-90">Explore all kinetics tools and calculators</p>
              </Link>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What is the Arrhenius equation?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  k = Ae^(-Ea/RT). It describes how reaction rate constant (k) depends on temperature (T) and activation energy (Ea).
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What does activation energy (Ea) mean?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Ea is the minimum energy molecules need to react. Higher Ea means fewer molecules can react, making the reaction slower.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Why do reactions speed up with temperature?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Higher temperature gives more molecules enough energy to overcome Ea. The fraction e^(-Ea/RT) increases exponentially.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">How to find Ea experimentally?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Measure k at multiple temperatures, plot ln(k) vs 1/T. The slope equals -Ea/R, giving Ea.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What is the frequency factor A?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  A represents collision frequency and proper molecular orientation. It's the rate constant if Ea = 0 (no energy barrier).
                </p>
              </div>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-between">
              <Link href="/chemistry-formulas" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                ← Back to All Formulas
              </Link>
              <Link href="/chemistry-formulas/rate-law-formula" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                Next: Rate Law →
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
