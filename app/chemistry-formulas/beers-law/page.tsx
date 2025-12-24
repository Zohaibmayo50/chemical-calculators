import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Beer\'s Law | A = εbc | Absorbance & Concentration Formula',
  description: 'Master Beer\'s Law (A = εbc) for spectroscopy and concentration analysis. Includes examples and spectrophotometry calculator links.',
  keywords: 'beers law, absorbance, spectrophotometry, concentration, molar absorptivity, lambert beer law',
};

export default function BeersLawPage() {
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
            <span className="text-gray-600 dark:text-gray-400">Beer's Law</span>
          </nav>

          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Beer's Law (Beer-Lambert Law)
          </h1>

          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            <strong>Beer's Law</strong> relates the absorbance of light to the concentration of a solution. 
            It's the foundation of spectrophotometry and analytical chemistry for determining unknown concentrations.
          </p>

          {/* Formula Block */}
          <div className="my-12 p-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">Beer's Law (Beer-Lambert Law)</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center">
              <p className="text-6xl font-bold text-gray-900 dark:text-white mb-2">
                A = εbc
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Absorbance = molar absorptivity × path length × concentration
              </p>
            </div>
          </div>

          {/* Variable Definitions */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Variable Definitions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-2">A = Absorbance</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> Dimensionless (no units)
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Amount of light absorbed by the sample
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  💡 Related to transmittance: A = -log(T) = -log(I/I₀)
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-2">ε = Molar Absorptivity</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> L/(mol·cm) or M⁻¹cm⁻¹
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  How strongly a substance absorbs light at a specific wavelength
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Also called: extinction coefficient, molar extinction coefficient
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-2">b = Path Length</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> cm (centimeters)
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Distance light travels through the sample
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  💡 Standard cuvettes are usually 1.00 cm
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-2">c = Concentration</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Units:</strong> M (mol/L) or mM
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Molar concentration of the absorbing species
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  This is what we usually solve for in Beer's Law!
                </p>
              </div>
            </div>
          </section>

          {/* Rearranged Forms */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Rearranged Forms</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-6">
                <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Find Absorbance (A):</h3>
                <p className="text-2xl font-bold text-blue-800 dark:text-blue-200">
                  A = εbc
                </p>
              </div>

              <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-6">
                <h3 className="font-bold text-purple-900 dark:text-purple-100 mb-3">Find Concentration (c):</h3>
                <p className="text-2xl font-bold text-purple-800 dark:text-purple-200">
                  c = A / (εb)
                </p>
                <p className="text-sm mt-2">Most common use!</p>
              </div>

              <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-6">
                <h3 className="font-bold text-green-900 dark:text-green-100 mb-3">Find Molar Absorptivity (ε):</h3>
                <p className="text-2xl font-bold text-green-800 dark:text-green-200">
                  ε = A / (bc)
                </p>
              </div>

              <div className="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-6">
                <h3 className="font-bold text-orange-900 dark:text-orange-100 mb-3">Find Path Length (b):</h3>
                <p className="text-2xl font-bold text-orange-800 dark:text-orange-200">
                  b = A / (εc)
                </p>
              </div>
            </div>
          </section>

          {/* Relationship to Transmittance */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Relationship to Transmittance</h2>
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-8">
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Transmittance (T):</h3>
                  <p className="text-2xl font-bold text-purple-600 mb-2">
                    T = I / I₀
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    I = intensity of transmitted light<br />
                    I₀ = intensity of incident light
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Absorbance from Transmittance:</h3>
                  <p className="text-2xl font-bold text-purple-600 mb-2">
                    A = -log(T)
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Or: A = log(I₀/I) = log(1/T)
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Percent Transmittance (%T):</h3>
                  <p className="text-2xl font-bold text-purple-600 mb-2">
                    A = 2 - log(%T)
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Example: 50% T → A = 2 - log(50) = 0.301
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Example */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Step-by-Step Example</h2>
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Problem: A solution in a 1.00 cm cuvette has absorbance A = 0.520 at 450 nm. 
                If ε = 1.30 × 10⁴ L/(mol·cm) at this wavelength, what is the concentration?
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-2">Given:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>A = 0.520</li>
                    <li>b = 1.00 cm</li>
                    <li>ε = 1.30 × 10⁴ L/(mol·cm)</li>
                    <li>Find: c (concentration)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 1: Write Beer's Law</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    A = εbc
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 2: Rearrange to solve for c</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    c = A / (εb)
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 3: Substitute values</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    c = 0.520 / [(1.30 × 10⁴ L/mol·cm)(1.00 cm)]
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Step 4: Calculate</h4>
                  <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    c = 0.520 / (1.30 × 10⁴)<br />
                    c = 4.00 × 10⁻⁵ M
                  </p>
                </div>

                <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg">
                  <p className="font-bold text-green-900 dark:text-green-100">
                    Answer: c = 4.00 × 10⁻⁵ M = 0.0400 mM = 40.0 μM
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Applications */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Applications of Beer's Law</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-6">
                <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-3">🧪 Analytical Chemistry</h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  Determine unknown concentrations by measuring absorbance (most common use)
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-6">
                <h3 className="font-bold text-green-900 dark:text-green-100 mb-3">🧬 Biochemistry</h3>
                <p className="text-green-800 dark:text-green-200 text-sm">
                  Measure protein, DNA, and enzyme concentrations using UV-Vis spectroscopy
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-6">
                <h3 className="font-bold text-purple-900 dark:text-purple-100 mb-3">🏥 Clinical Labs</h3>
                <p className="text-purple-800 dark:text-purple-200 text-sm">
                  Blood tests, drug concentrations, and diagnostic assays
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg p-6">
                <h3 className="font-bold text-orange-900 dark:text-orange-100 mb-3">🌊 Environmental Testing</h3>
                <p className="text-orange-800 dark:text-orange-200 text-sm">
                  Water quality analysis - detect pollutants and nutrients
                </p>
              </div>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Common Mistakes</h2>
            <div className="space-y-4">
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Forgetting path length b</h3>
                <p className="text-red-800 dark:text-red-200">
                  Even with standard 1.00 cm cuvettes, you must include b in calculations. c = A/ε is WRONG - it's c = A/(εb).
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Unit inconsistency</h3>
                <p className="text-red-800 dark:text-red-200">
                  If ε is in L/(mol·cm), then c must be in M and b in cm. Don't use mM or mm without converting units.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Using beyond linear range</h3>
                <p className="text-red-800 dark:text-red-200">
                  Beer's Law is linear only for A between ~0.1 and 1.0. Very high or very low absorbances are unreliable.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Wrong wavelength</h3>
                <p className="text-red-800 dark:text-red-200">
                  ε is wavelength-dependent! Use the wavelength where the substance absorbs maximally (λ<sub>max</sub>).
                </p>
              </div>
            </div>
          </section>

          {/* Related Calculators */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Related Calculators</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/analytical-calculators/beers-law-calculator" className="block p-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Beer's Law Calculator</h3>
                <p>Find c from A, ε, b instantly</p>
              </Link>

              <Link href="/analytical-calculators/spectrophotometry-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Spectrophotometry Calculator</h3>
                <p className="text-gray-600 dark:text-gray-400">Absorbance and transmittance</p>
              </Link>

              <Link href="/solution-calculators/dilution-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Dilution Calculator</h3>
                <p className="text-gray-600 dark:text-gray-400">Prepare solutions for Beer's Law</p>
              </Link>

              <Link href="/analytical-calculators/standard-curve-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Standard Curve</h3>
                <p className="text-gray-600 dark:text-gray-400">Calibration curves from Beer's Law</p>
              </Link>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What is Beer's Law used for?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  To determine the concentration of a colored or absorbing solution by measuring how much light it absorbs (A = εbc).
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What is a good absorbance range?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Between 0.1 and 1.0 for best accuracy. Above 1.5, very little light gets through. Below 0.05, signal is too weak.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Why is molar absorptivity important?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  ε tells you how strongly a compound absorbs light. High ε means you can detect very low concentrations. It's unique for each substance at each wavelength.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Can Beer's Law be used for mixtures?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Yes, if only one component absorbs at your chosen wavelength. For mixtures where multiple species absorb, absorbances are additive: A<sub>total</sub> = A₁ + A₂ + ...
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What causes deviations from Beer's Law?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  High concentrations, chemical reactions, stray light, fluorescence, or suspended particles can all cause non-linear A vs c plots.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-between">
              <Link href="/chemistry-formulas" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                ← Back to All Formulas
              </Link>
              <Link href="/chemistry-formulas/empirical-formula" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                Next: Empirical Formula →
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
