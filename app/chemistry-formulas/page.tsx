import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Chemistry Formulas Library | Essential Equations & Definitions',
  description: 'Complete library of chemistry formulas with clear explanations, variable definitions, and step-by-step examples. From molarity to thermodynamics.',
  keywords: 'chemistry formulas, chemical equations, molarity formula, ideal gas law, stoichiometry formulas, thermodynamics equations',
};

export default function ChemistryFormulasPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Chemistry Formulas Library
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Master essential chemistry formulas with clear explanations, variable definitions, and practical examples. 
              Each formula links to interactive calculators for hands-on practice.
            </p>
          </div>

          {/* Solution & Concentration Formulas */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 border-b-2 border-primary-500 pb-2">
              Solution & Concentration Formulas
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/chemistry-formulas/molarity-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2">Molarity Formula</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">M = n / V</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Calculate molar concentration of solutions</p>
              </Link>

              <Link href="/chemistry-formulas/molality-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2">Molality Formula</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">m = n / kg<sub>solvent</sub></p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Calculate molal concentration</p>
              </Link>

              <Link href="/chemistry-formulas/normality-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2">Normality Formula</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">N = M × n</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Calculate equivalent concentration</p>
              </Link>

              <Link href="/chemistry-formulas/dilution-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2">Dilution Formula</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">M<sub>1</sub>V<sub>1</sub> = M<sub>2</sub>V<sub>2</sub></p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Calculate dilution concentrations</p>
              </Link>

              <Link href="/chemistry-formulas/mass-percent-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2">Mass Percent Formula</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">% = (m<sub>solute</sub> / m<sub>solution</sub>) × 100</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Calculate mass percentage</p>
              </Link>

              <Link href="/chemistry-formulas/mole-fraction-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2">Mole Fraction Formula</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">χ = n<sub>i</sub> / n<sub>total</sub></p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Calculate mole fraction in mixtures</p>
              </Link>
            </div>
          </section>

          {/* Stoichiometry Formulas */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 border-b-2 border-secondary-500 pb-2">
              Stoichiometry Formulas
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/chemistry-formulas/molecular-weight-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-secondary-600 dark:text-secondary-400 mb-2">Molecular Weight Formula</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">MW = Σ(atomic masses)</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Calculate molar mass of compounds</p>
              </Link>

              <Link href="/chemistry-formulas/percent-yield-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-secondary-600 dark:text-secondary-400 mb-2">Percent Yield Formula</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">% Yield = (Actual / Theoretical) × 100</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Calculate reaction efficiency</p>
              </Link>

              <Link href="/chemistry-formulas/empirical-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-secondary-600 dark:text-secondary-400 mb-2">Empirical Formula</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Simplest whole number ratio</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Determine simplest formula</p>
              </Link>

              <Link href="/chemistry-formulas/limiting-reactant-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-secondary-600 dark:text-secondary-400 mb-2">Limiting Reactant</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Compare mole ratios</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Find limiting reagent</p>
              </Link>
            </div>
          </section>

          {/* Gas Law Formulas */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 border-b-2 border-blue-500 pb-2">
              Gas Law Formulas
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/chemistry-formulas/ideal-gas-law" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">Ideal Gas Law</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">PV = nRT</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Relate pressure, volume, and temperature</p>
              </Link>

              <Link href="/chemistry-formulas/combined-gas-law" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">Combined Gas Law</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">P<sub>1</sub>V<sub>1</sub>/T<sub>1</sub> = P<sub>2</sub>V<sub>2</sub>/T<sub>2</sub></p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Gas behavior under changing conditions</p>
              </Link>

              <Link href="/chemistry-formulas/daltons-law" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">Dalton's Law</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">P<sub>total</sub> = P<sub>1</sub> + P<sub>2</sub> + ...</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Calculate partial pressures</p>
              </Link>

              <Link href="/chemistry-formulas/grahams-law" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">Graham's Law</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">r<sub>1</sub>/r<sub>2</sub> = √(M<sub>2</sub>/M<sub>1</sub>)</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Gas effusion and diffusion rates</p>
              </Link>
            </div>
          </section>

          {/* Thermodynamics Formulas */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 border-b-2 border-red-500 pb-2">
              Thermodynamics Formulas
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/chemistry-formulas/gibbs-free-energy" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">Gibbs Free Energy</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">ΔG = ΔH - TΔS</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Predict reaction spontaneity</p>
              </Link>

              <Link href="/chemistry-formulas/enthalpy-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">Enthalpy Formula</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">ΔH = Σ(products) - Σ(reactants)</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Calculate heat changes</p>
              </Link>

              <Link href="/chemistry-formulas/entropy-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">Entropy Formula</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">ΔS = Σ(products) - Σ(reactants)</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Measure disorder changes</p>
              </Link>

              <Link href="/chemistry-formulas/specific-heat-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">Specific Heat Formula</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">q = mcΔT</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Calculate heat absorbed or released</p>
              </Link>
            </div>
          </section>

          {/* Acid-Base Formulas */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 border-b-2 border-green-500 pb-2">
              Acid-Base Formulas
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/chemistry-formulas/ph-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-2">pH Formula</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">pH = -log[H⁺]</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Measure solution acidity</p>
              </Link>

              <Link href="/chemistry-formulas/henderson-hasselbalch-equation" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-2">Henderson-Hasselbalch Equation</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">pH = pKa + log([A⁻]/[HA])</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Calculate buffer pH</p>
              </Link>

              <Link href="/chemistry-formulas/buffer-capacity-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-2">Buffer Capacity</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">β = Δn / ΔpH</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Measure buffer resistance</p>
              </Link>
            </div>
          </section>

          {/* Kinetics Formulas */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 border-b-2 border-purple-500 pb-2">
              Chemical Kinetics Formulas
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/chemistry-formulas/arrhenius-equation" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-2">Arrhenius Equation</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">k = Ae<sup>-Ea/RT</sup></p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Temperature effect on rate constants</p>
              </Link>

              <Link href="/chemistry-formulas/rate-law-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-2">Rate Law</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Rate = k[A]<sup>m</sup>[B]<sup>n</sup></p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Reaction rate dependence</p>
              </Link>

              <Link href="/chemistry-formulas/half-life-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-2">Half-Life Formula</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">t<sub>1/2</sub> = 0.693/k (1st order)</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Calculate reaction half-life</p>
              </Link>
            </div>
          </section>

          {/* Electrochemistry Formulas */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 border-b-2 border-yellow-500 pb-2">
              Electrochemistry Formulas
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/chemistry-formulas/nernst-equation" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">Nernst Equation</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">E = E° - (RT/nF)lnQ</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Cell potential under non-standard conditions</p>
              </Link>

              <Link href="/chemistry-formulas/cell-potential-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">Cell Potential</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">E°<sub>cell</sub> = E°<sub>cathode</sub> - E°<sub>anode</sub></p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Calculate galvanic cell voltage</p>
              </Link>
            </div>
          </section>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Practice?</h2>
            <p className="text-lg mb-6">
              Use our interactive calculators to apply these formulas and solve chemistry problems
            </p>
            <Link href="/" className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Explore All Calculators
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
