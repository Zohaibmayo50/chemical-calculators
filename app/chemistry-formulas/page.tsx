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
                <p className="text-gray-600 dark:text-gray-400 text-sm">N = equivalents / L</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Equivalents-based concentration</p>
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

              <Link href="/chemistry-formulas/density-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2">Density Formula</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">ρ = m / V</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Relate mass and volume of substances</p>
              </Link>

              <Link href="/chemistry-formulas/ppm-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2">PPM Formula</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">ppm = (m<sub>solute</sub>/m<sub>solution</sub>) × 10<sup>6</sup></p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Parts per million concentration</p>
              </Link>

              <Link href="/chemistry-formulas/ppb-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2">PPB Formula</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">ppb = (m<sub>solute</sub>/m<sub>solution</sub>) × 10<sup>9</sup></p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Parts per billion concentration</p>
              </Link>

              <Link href="/chemistry-formulas/solubility-product-constant-ksp" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2">Solubility Product (Ksp)</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Ksp = Π[ion]<sup>coeff</sup></p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Equilibrium solubility of salts</p>
              </Link>
            </div>
          </section>

          {/* Colligative Properties */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 border-b-2 border-blue-500 pb-2">
              Colligative Properties
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/chemistry-formulas/freezing-point-depression" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">Freezing Point Depression</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">ΔTf = i Kf m</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Predict freezing point lowering</p>
              </Link>

              <Link href="/chemistry-formulas/boiling-point-elevation" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">Boiling Point Elevation</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">ΔTb = i Kb m</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Predict boiling point increase</p>
              </Link>

              <Link href="/chemistry-formulas/osmotic-pressure" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">Osmotic Pressure</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Π = i M R T</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Pressure across membranes</p>
              </Link>

              <Link href="/chemistry-formulas/raoults-law" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">Raoult's Law</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Psolution = Xsolvent P°solvent</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Vapor pressure of solutions</p>
              </Link>
            </div>
          </section>

          {/* Stoichiometry Formulas */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 border-b-2 border-secondary-500 pb-2">
              Stoichiometry Formulas
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

              <Link href="/chemistry-formulas/limiting-reactant" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-secondary-600 dark:text-secondary-400 mb-2">Limiting Reactant</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Compare mole ratios</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Find limiting reagent</p>
              </Link>

              <Link href="/chemistry-formulas/molecular-weight-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-secondary-600 dark:text-secondary-400 mb-2">Molecular Weight</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">MW = sum atomic masses</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Calculate molar mass</p>
              </Link>
              <Link href="/chemistry-formulas/molecular-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-secondary-600 dark:text-secondary-400 mb-2">Molecular Formula</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Molecular = Empirical × factor</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Get formula from empirical + MW</p>
              </Link>
              <Link href="/chemistry-formulas/percent-composition-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-secondary-600 dark:text-secondary-400 mb-2">Percent Composition</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">% element = (mass element / mass compound) × 100</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Elemental makeup by mass</p>
              </Link>
              <Link href="/chemistry-formulas/theoretical-yield-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-secondary-600 dark:text-secondary-400 mb-2">Theoretical Yield</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Max product from stoichiometry</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Calculate maximum product</p>
              </Link>
              <Link href="/chemistry-formulas/degree-of-unsaturation" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-secondary-600 dark:text-secondary-400 mb-2">Degree of Unsaturation</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">DU = (2C + 2 + N - H - X) / 2</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Count rings + double bonds</p>
              </Link>
              <Link href="/chemistry-formulas/combustion-analysis" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-secondary-600 dark:text-secondary-400 mb-2">Combustion Analysis</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Find formula from CO₂ and H₂O</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Empirical formula determination</p>
              </Link>
              <Link href="/chemistry-formulas/percent-error-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-secondary-600 dark:text-secondary-400 mb-2">Percent Error Formula</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">% Error = |Exp - Theo| / Theo × 100</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Measure experimental accuracy</p>
              </Link>            </div>
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
              <Link href="/chemistry-formulas/boyles-law" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">Boyle's Law</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">P ∝ 1/V (constant T)</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Pressure-volume relationship</p>
              </Link>
              <Link href="/chemistry-formulas/charles-law" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">Charles's Law</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">V ∝ T (constant P)</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Volume-temperature relationship</p>
              </Link>
              <Link href="/chemistry-formulas/gay-lussacs-law" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">Gay-Lussac's Law</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">P ∝ T (constant V)</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Pressure-temperature relationship</p>
              </Link>
              <Link href="/chemistry-formulas/van-der-waals-equation" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">Van der Waals Equation</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">(P + a(n/V)^2)(V - nb) = nRT</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Real gas corrections</p>
              </Link>

              <Link href="/chemistry-formulas/gas-density-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">Gas Density</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">ρ = (P M) / (R T)</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Density via ideal gas relation</p>
              </Link>

              <Link href="/chemistry-formulas/rms-speed" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">Root Mean Square Speed</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">v<sub>rms</sub> = √(3RT/M)</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Molecular speed in gases</p>
              </Link>

              <Link href="/chemistry-formulas/molar-volume-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">Molar Volume Formula</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">V<sub>m</sub> = 22.4 L/mol at STP</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Volume of one mole of gas</p>
              </Link>

              <Link href="/chemistry-formulas/avogadros-law" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">Avogadro's Law</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">V / n = constant</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Volume-mole relationship</p>
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

              <Link href="/chemistry-formulas/specific-heat-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">Specific Heat Formula</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">q = mcΔT</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Calculate heat absorbed or released</p>
              </Link>

              <Link href="/chemistry-formulas/vant-hoff-equation" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">Van't Hoff Equation</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">ln(K2/K1) = -(ΔH/R)(1/T2 - 1/T1)</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Temperature dependence of K</p>
              </Link>

              <Link href="/chemistry-formulas/clausius-clapeyron-equation" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">Clausius-Clapeyron Equation</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">ln(P2/P1) = (ΔH/R)(1/T1 - 1/T2)</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Vapor pressure vs temperature</p>
              </Link>

              <Link href="/chemistry-formulas/enthalpy-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">Enthalpy Formula</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">ΔH = Σ(products) - Σ(reactants)</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Reaction heat from DeltaHf</p>
              </Link>

              <Link href="/chemistry-formulas/entropy-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">Entropy Formula</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">ΔS = Σ(products) - Σ(reactants)</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Disorder change from S° data</p>
              </Link>

              <Link href="/chemistry-formulas/bond-enthalpy-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">Bond Enthalpy</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">ΔH = Σ(broken) - Σ(formed)</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Estimate ΔH from bond energies</p>
              </Link>

              <Link href="/chemistry-formulas/hess-law" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">Hess's Law</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">ΔH<sub>total</sub> = ΔH₁ + ΔH₂ + ...</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Sum intermediate steps</p>
              </Link>

              <Link href="/chemistry-formulas/lattice-energy" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">Lattice Energy</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Born-Haber cycle</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Ionic solid stability</p>
              </Link>
              <Link href="/chemistry-formulas/calorimetry-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">Calorimetry Formula</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">q = m c ΔT</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Heat transfer in chemical processes</p>
              </Link>            </div>
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
                <p className="text-gray-700 dark:text-gray-300 mt-2">How much acid/base a buffer resists</p>
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

              <Link href="/chemistry-formulas/rate-law" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-2">Rate Law</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Rate = k[A]<sup>m</sup>[B]<sup>n</sup></p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Reaction rate dependence</p>
              </Link>

              <Link href="/chemistry-formulas/half-life-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-2">Half-Life Formula</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">t<sub>1/2</sub> = 0.693/k (1st order)</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Calculate reaction half-life</p>
              </Link>

              <Link href="/chemistry-formulas/radioactive-decay-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-2">Radioactive Decay</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">N = N₀ e<sup>−λt</sup>; λ = ln2/t<sub>1/2</sub></p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Remaining quantity vs time</p>
              </Link>

              <Link href="/chemistry-formulas/integrated-rate-laws" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-2">Integrated Rate Laws</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">0th, 1st, 2nd order kinetics</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Concentration vs time</p>
              </Link>

              <Link href="/chemistry-formulas/michaelis-menten-equation" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-2">Michaelis-Menten Equation</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">v = (V<sub>max</sub>[S]) / (K<sub>m</sub> + [S])</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Enzyme kinetics</p>
              </Link>

              <Link href="/chemistry-formulas/equilibrium-constant" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-2">Equilibrium Constant (K)</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">K = [products] / [reactants]</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Chemical equilibrium</p>
              </Link>

              <Link href="/chemistry-formulas/reaction-quotient" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-2">Reaction Quotient (Q)</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Compare Q to K</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Predict reaction direction</p>
              </Link>

              <Link href="/chemistry-formulas/collision-theory" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-2">Collision Theory</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Rate = Z × f × p</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Molecular basis of reaction rates</p>
              </Link>

              <Link href="/chemistry-formulas/rate-determining-step" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-2">Rate Determining Step</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Slowest step controls rate</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Reaction mechanism bottleneck</p>
              </Link>

              <Link href="/chemistry-formulas/le-chateliers-principle" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-2">Le Chatelier's Principle</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Equilibrium shift from stress</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Response to concentration, P, T</p>
              </Link>

              <Link href="/chemistry-formulas/common-ion-effect" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-2">Common Ion Effect</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Solubility suppression</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Shared ion reduces solubility</p>
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

              <Link href="/chemistry-formulas/daltons-law" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">Dalton's Law</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">P<sub>total</sub> = P<sub>1</sub> + P<sub>2</sub> + ...</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Partial pressures in mixtures</p>
              </Link>

              <Link href="/chemistry-formulas/cell-potential-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">Cell Potential</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">E°cell = E°cathode - E°anode</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Voltage from half-reactions</p>
              </Link>

              <Link href="/chemistry-formulas/faradays-law" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">Faraday's Law</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">m = (Q M) / (n F)</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Mass deposited from charge</p>
              </Link>

              <Link href="/chemistry-formulas/oxidation-number-rules" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">Oxidation Number Rules</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Assign oxidation states</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Systematic rules for redox chemistry</p>
              </Link>
            </div>
          </section>

          {/* Physical Chemistry Formulas */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 border-b-2 border-pink-500 pb-2">
              Physical Chemistry Formulas
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/chemistry-formulas/beers-law" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-pink-600 dark:text-pink-400 mb-2">Beer's Law</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">A = εℓC</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Absorbance, path length, concentration</p>
              </Link>

              <Link href="/chemistry-formulas/de-broglie-wavelength" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-pink-600 dark:text-pink-400 mb-2">De Broglie Wavelength</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">λ = h / p</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Matter wave wavelength</p>
              </Link>

              <Link href="/chemistry-formulas/heisenberg-uncertainty" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-pink-600 dark:text-pink-400 mb-2">Heisenberg Uncertainty</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Δx Δp ≥ ℏ / 2</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Position-momentum limit</p>
              </Link>

              <Link href="/chemistry-formulas/formal-charge-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-pink-600 dark:text-pink-400 mb-2">Formal Charge Formula</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">FC = V - N - B/2</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Charge distribution in molecules</p>
              </Link>

              <Link href="/chemistry-formulas/electron-configuration" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-pink-600 dark:text-pink-400 mb-2">Electron Configuration</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Aufbau, Pauli, Hund's rule</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Orbital filling principles</p>
              </Link>

              <Link href="/chemistry-formulas/hybridization" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-pink-600 dark:text-pink-400 mb-2">Hybridization Rules</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">sp, sp², sp³ orbitals</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Determine hybrid orbital types</p>
              </Link>

              <Link href="/chemistry-formulas/bohr-model" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-pink-600 dark:text-pink-400 mb-2">Bohr Model Formula</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">E<sub>n</sub> = -13.6 Z² / n²</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Energy levels in hydrogen-like atoms</p>
              </Link>

              <Link href="/chemistry-formulas/crystal-field-theory" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-pink-600 dark:text-pink-400 mb-2">Crystal Field Theory</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">d-orbital splitting, Δ</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Coordination complex stability</p>
              </Link>
              <Link href="/chemistry-formulas/vsepr-theory" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-pink-600 dark:text-pink-400 mb-2">VSEPR Theory</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Electron pair repulsion</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Predict molecular geometry</p>
              </Link>

              <Link href="/chemistry-formulas/ionic-strength-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-pink-600 dark:text-pink-400 mb-2">Ionic Strength Formula</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">I = 1/2 Σ c<sub>i</sub> z<sub>i</sub>²</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Total ion concentration measure</p>
              </Link>
              <Link href="/chemistry-formulas/vsepr-theory" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-pink-600 dark:text-pink-400 mb-2">VSEPR Theory</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Electron pair repulsion</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Predict molecular geometry</p>
              </Link>

              <Link href="/chemistry-formulas/ionic-strength-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-pink-600 dark:text-pink-400 mb-2">Ionic Strength Formula</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">I = 1/2 Σ c<sub>i</sub> z<sub>i</sub>²</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Total ion concentration measure</p>
              </Link>

              <Link href="/chemistry-formulas/dipole-moment-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-pink-600 dark:text-pink-400 mb-2">Dipole Moment</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">μ = q × d</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Molecular polarity</p>
              </Link>

              <Link href="/chemistry-formulas/partition-coefficient" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-pink-600 dark:text-pink-400 mb-2">Partition Coefficient</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">K<sub>p</sub> = [organic] / [aqueous]</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Distribution between solvents</p>
              </Link>

              <Link href="/chemistry-formulas/activity-coefficient" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-pink-600 dark:text-pink-400 mb-2">Activity Coefficient</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">a = γ × [C]</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Non-ideal solution correction</p>
              </Link>

              <Link href="/chemistry-formulas/nuclear-binding-energy" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-pink-600 dark:text-pink-400 mb-2">Nuclear Binding Energy</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">E = Δm c²</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Nuclear stability from mass defect</p>
              </Link>

              <Link href="/chemistry-formulas/rydberg-equation" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-pink-600 dark:text-pink-400 mb-2">Rydberg Equation</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">1/λ = R<sub>H</sub>(1/n₁² - 1/n₂²)</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Hydrogen spectral lines</p>
              </Link>

              <Link href="/chemistry-formulas/planck-equation" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-pink-600 dark:text-pink-400 mb-2">Planck Equation</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">E = h ν</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Photon energy and frequency</p>
              </Link>

              <Link href="/chemistry-formulas/braggs-law" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-pink-600 dark:text-pink-400 mb-2">Bragg's Law</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">nλ = 2d sinθ</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">X-ray diffraction</p>
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
