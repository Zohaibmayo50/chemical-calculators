import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Graham\'s Law of Effusion | Rate₁/Rate₂ = √(M₂/M₁)',
  description: 'Master Graham\'s Law relating gas effusion rates to molar mass. Includes examples and gas calculator links.',
  keywords: 'Grahams law, effusion, diffusion, molar mass, gas velocity, kinetic molecular theory',
};

export default function GrahamsLawPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="mb-8 text-sm">
            <Link href="/" className="text-primary-600 dark:text-primary-400 hover:underline">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/chemistry-formulas" className="text-primary-600 dark:text-primary-400 hover:underline">Chemistry Formulas</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600 dark:text-gray-400">Graham's Law</span>
          </nav>

          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Graham's Law of Effusion
          </h1>

          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            <strong>Graham's Law</strong> states that the rate of gas effusion (or diffusion) is inversely proportional 
            to the square root of molar mass. Lighter gases move faster than heavier gases.
          </p>

          {/* Formula Block */}
          <div className="my-12 p-8 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">Graham's Law</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center">
              <p className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Rate₁ / Rate₂ = √(M₂/M₁)
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
                Or equivalently:
              </p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">
                Rate₁ / Rate₂ = √(MM₂/MM₁)
              </p>
            </div>
          </div>

          {/* Variable Definitions */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Variable Definitions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-teal-600 dark:text-teal-400 mb-2">Rate = Effusion/Diffusion Rate</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> mol/s, mL/s, or any volume/time
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  How fast gas passes through opening or spreads
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  💡 Can also be velocity (m/s) or average speed
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-teal-600 dark:text-teal-400 mb-2">M or MM = Molar Mass</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> g/mol
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Molecular weight of the gas
                </p>
                <p className="text-red-600 dark:text-red-400 text-sm mt-2">
                  ⚠️ Notice: heavier gas (M₂) goes in numerator, making ratio less than 1
                </p>
              </div>
            </div>
          </section>

          {/* Key Concepts */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Key Concepts</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-6">
                <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-3">🎈 Effusion</h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm mb-2">
                  Gas escaping through a tiny hole into vacuum
                </p>
                <p className="text-xs text-blue-700 dark:text-blue-300">
                  Example: Helium balloon deflating
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-6">
                <h3 className="font-bold text-green-900 dark:text-green-100 mb-3">🌫️ Diffusion</h3>
                <p className="text-green-800 dark:text-green-200 text-sm mb-2">
                  Gas spreading through space or another gas
                </p>
                <p className="text-xs text-green-700 dark:text-green-300">
                  Example: Perfume smell spreading across room
                </p>
              </div>
            </div>

            <div className="mt-6 bg-purple-50 dark:bg-purple-900/30 rounded-lg p-6">
              <h3 className="font-bold text-purple-900 dark:text-purple-100 mb-3">⚡ The Inverse Relationship</h3>
              <ul className="space-y-2 text-purple-800 dark:text-purple-200">
                <li>• <strong>Lighter gas (lower M)</strong> → faster rate</li>
                <li>• <strong>Heavier gas (higher M)</strong> → slower rate</li>
                <li>• Rate ∝ 1/√M (inverse square root relationship)</li>
                <li>• If M increases 4×, rate decreases 2× (√4 = 2)</li>
              </ul>
            </div>
          </section>

          {/* Example */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Step-by-Step Example</h2>
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Problem: Compare effusion rates of He (4 g/mol) and O₂ (32 g/mol). How many times faster does He effuse?
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-2">Given:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>M(He) = 4 g/mol</li>
                    <li>M(O₂) = 32 g/mol</li>
                    <li>Find: Rate(He) / Rate(O₂)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 1: Write Graham's Law</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    Rate(He) / Rate(O₂) = √[M(O₂) / M(He)]
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Note: Heavier gas (O₂) goes in numerator
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 2: Substitute values</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    Rate(He) / Rate(O₂) = √(32/4) = √8
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 3: Calculate</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    √8 = 2.83
                  </p>
                </div>

                <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg">
                  <p className="font-bold text-green-900 dark:text-green-100">
                    Answer: He effuses 2.83 times faster than O₂
                  </p>
                  <p className="text-sm mt-2">
                    Makes sense! He is 8× lighter, so it moves √8 ≈ 2.83× faster.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Rearranged Forms */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Rearranged Forms</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-6">
                <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Find unknown molar mass:</h3>
                <p className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-2">
                  M₂ = M₁ × (Rate₁/Rate₂)²
                </p>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Square both sides and solve
                </p>
              </div>

              <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-6">
                <h3 className="font-bold text-purple-900 dark:text-purple-100 mb-3">Find rate ratio:</h3>
                <p className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-2">
                  Rate₁/Rate₂ = √(M₂/M₁)
                </p>
                <p className="text-sm text-purple-700 dark:text-purple-300">
                  Standard form
                </p>
              </div>

              <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-6">
                <h3 className="font-bold text-green-900 dark:text-green-100 mb-3">Using time instead:</h3>
                <p className="text-xl font-bold text-green-800 dark:text-green-200 mb-2">
                  t₁/t₂ = √(M₁/M₂)
                </p>
                <p className="text-sm text-green-700 dark:text-green-300">
                  Time ratio is inverted (slower = more time)
                </p>
              </div>

              <div className="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-6">
                <h3 className="font-bold text-orange-900 dark:text-orange-100 mb-3">For velocities:</h3>
                <p className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-2">
                  v₁/v₂ = √(M₂/M₁)
                </p>
                <p className="text-sm text-orange-700 dark:text-orange-300">
                  Same relationship as rates
                </p>
              </div>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Common Mistakes</h2>
            <div className="space-y-4">
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Putting lighter gas in numerator</h3>
                <p className="text-red-800 dark:text-red-200">
                  It's √(M₂/M₁) with HEAVIER molar mass in numerator. Getting this backwards gives upside-down answer!
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Forgetting the square root</h3>
                <p className="text-red-800 dark:text-red-200">
                  It's √(M₂/M₁), NOT just M₂/M₁. The square root is critical!
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Using atomic mass for molecules</h3>
                <p className="text-red-800 dark:text-red-200">
                  For O₂, use 32 g/mol (molecular), not 16 g/mol (atomic). For H₂, use 2 g/mol, not 1 g/mol.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Confusing with Dalton's Law</h3>
                <p className="text-red-800 dark:text-red-200">
                  Graham's Law is about SPEED (how fast), Dalton's is about PRESSURE (how much). Different concepts!
                </p>
              </div>
            </div>
          </section>

          {/* Related Calculators */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Related Calculators</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/gas-laws-calculators/grahams-law-calculator" className="block p-6 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Graham's Law Calculator</h3>
                <p>Calculate effusion rates instantly</p>
              </Link>

              <Link href="/gas-laws-calculators/gas-diffusion-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Gas Diffusion Calculator</h3>
                <p className="text-gray-600 dark:text-gray-400">Calculate diffusion rates</p>
              </Link>

              <Link href="/gas-laws-calculators/molar-mass-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Molar Mass Calculator</h3>
                <p className="text-gray-600 dark:text-gray-400">Find MM from formula</p>
              </Link>

              <Link href="/gas-laws-calculators/kinetic-molecular-theory-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">KMT Calculator</h3>
                <p className="text-gray-600 dark:text-gray-400">Molecular velocities</p>
              </Link>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What is Graham's Law?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Rate₁/Rate₂ = √(M₂/M₁). The rate of gas effusion or diffusion is inversely proportional to the square root of molar mass. Lighter gases move faster.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What's the difference between effusion and diffusion?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Effusion is gas escaping through a tiny hole into vacuum. Diffusion is gas spreading through space or another gas. Graham's Law applies to both.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Why does molar mass affect rate?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  From kinetic molecular theory: lighter molecules move faster at the same temperature because KE = ½mv². Same energy with less mass means higher velocity.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Why is there a square root?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Comes from kinetic energy equation: v ∝ √(T/M). Velocity is proportional to square root of temperature divided by mass.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Can I use this for liquids?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  No, Graham's Law is for ideal gases only. Liquids have strong intermolecular forces that dominate diffusion behavior.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-between">
              <Link href="/chemistry-formulas" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                ← Back to All Formulas
              </Link>
              <Link href="/chemistry-formulas/half-life-formula" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                Next: Half-Life Formula →
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
