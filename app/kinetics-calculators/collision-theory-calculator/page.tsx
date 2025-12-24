import type { Metadata } from 'next';
import CollisionTheoryCalculator from '@/components/calculators/CollisionTheoryCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: 'Collision Theory Calculator | Molecular Collisions & Reaction Rates',
  description:
    'Calculate collision frequency, determine rate constants from activation energy, analyze temperature effects on reaction rates using collision theory and Arrhenius equation.',
  keywords: [
    'collision theory calculator',
    'collision frequency',
    'activation energy',
    'arrhenius equation',
    'rate constant temperature',
    'steric factor',
    'molecular collisions',
    'reaction kinetics',
    'chemical kinetics',
    'temperature dependence',
  ],
};

export default function CollisionTheoryCalculatorPage() {  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 mb-4">
            Collision Theory Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Calculate molecular collisions, reaction rates, and temperature effects
          </p>
        </div>

        {/* Calculator Component */}
        <CollisionTheoryCalculator />

        {/* Educational Content */}
        <div className="mt-16 space-y-12">
          {/* Introduction */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              What is Collision Theory?
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Collision theory is a fundamental model in chemical kinetics that explains how chemical reactions occur 
                and why reaction rates vary. According to this theory, for a reaction to occur, reactant molecules must 
                collide with sufficient energy (at least equal to the activation energy) and with proper orientation.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Not all collisions result in reactions. Only a fraction of collisions have enough energy and the correct 
                molecular orientation to break existing bonds and form new ones. The rate constant k depends on collision 
                frequency, activation energy, and the steric factor (orientation requirement).
              </p>
            </div>
          </section>

          {/* Key Concepts */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              Key Concepts
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 dark:bg-gray-700 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  Collision Frequency (Z)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  The number of collisions between molecules per unit volume per unit time.
                </p>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg font-mono text-sm">
                  <p className="text-gray-700 dark:text-gray-300">
                    Z = σ × v̄ × n² / √2
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    where σ = collision cross-section (πd²)<br/>
                    v̄ = mean molecular speed = √(8kT/πm)<br/>
                    n = number density (molecules/m³)
                  </p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  Collision frequency increases with temperature (higher speeds) and concentration (more molecules). 
                  Typical values are on the order of 10²⁸-10³⁴ collisions/(m³·s) for gases at standard conditions.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6 py-4 bg-green-50 dark:bg-gray-700 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  Activation Energy (Ea)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  The minimum kinetic energy that colliding molecules must possess for a reaction to occur.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Represents the energy barrier to reaction</li>
                  <li>Determines the fraction of successful collisions: e^(-Ea/RT)</li>
                  <li>Higher Ea → slower reaction at given temperature</li>
                  <li>Typical range: 50-250 kJ/mol for most reactions</li>
                  <li>Can be determined from Arrhenius plot: ln k vs 1/T</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  At room temperature (298 K), only about e^(-Ea/RT) fraction of molecules have energy ≥ Ea. For Ea = 50 kJ/mol, 
                  this is approximately 10^(-9) or one in a billion collisions!
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6 py-4 bg-purple-50 dark:bg-gray-700 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  Steric Factor (p)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  The fraction of collisions with proper molecular orientation for reaction to occur.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Dimensionless value: 0 &lt; p ≤ 1</li>
                  <li>p ≈ 1 for simple atoms (e.g., H + H)</li>
                  <li>p &lt;&lt; 1 for complex molecules (e.g., p ≈ 10^(-6) for some reactions)</li>
                  <li>Accounts for geometric constraints</li>
                  <li>Explains why some reactions with low Ea are still slow</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  Example: NO + O₃ → NO₂ + O₂ has p ≈ 0.8 (favorable), while H₂ + I₂ → 2HI has p ≈ 0.16 (unfavorable orientation requirement).
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-6 py-4 bg-yellow-50 dark:bg-gray-700 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  Rate Constant (k)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Combines all factors affecting reaction rate into a single temperature-dependent constant.
                </p>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg font-mono text-sm mb-3">
                  <p className="text-gray-700 dark:text-gray-300">
                    Collision Theory: k = p × Z × e^(-Ea/RT)<br/>
                    Arrhenius Form: k = A × e^(-Ea/RT)
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    where A = pre-exponential factor (≈ p × Z)<br/>
                    R = gas constant = 8.314 J/(mol·K)<br/>
                    T = absolute temperature (K)
                  </p>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  The exponential term e^(-Ea/RT) is the Boltzmann factor representing the fraction of molecules 
                  with sufficient energy for reaction.
                </p>
              </div>
            </div>
          </section>

          {/* Temperature Dependence */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              Temperature Dependence of Reaction Rates
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-600 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  Arrhenius Equation
                </h3>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg font-mono text-sm mb-3">
                  k = A × e^(-Ea/RT)
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Shows exponential increase in rate constant with temperature. A 10 K temperature rise typically 
                  doubles or triples reaction rate (rough rule of thumb).
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-700 dark:to-gray-600 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  Two-Point Form
                </h3>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg font-mono text-sm mb-3">
                  ln(k₂/k₁) = (Ea/R) × (1/T₁ - 1/T₂)
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Used to calculate k at new temperature or determine Ea from rate constants at two temperatures.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                Why Temperature Affects Rate
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white mb-2">1. Increased Collision Frequency</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Higher T → faster molecular speeds → more collisions per second. However, this effect is 
                    relatively minor (Z ∝ √T).
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white mb-2">2. More Energetic Collisions</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Higher T → greater fraction of molecules with E ≥ Ea. This is the dominant effect, as 
                    e^(-Ea/RT) changes exponentially with T.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Worked Example */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              Worked Example: H₂ + I₂ Reaction
            </h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                Problem
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                For the reaction H₂(g) + I₂(g) → 2HI(g) at 700 K:<br/>
                • Activation energy Ea = 165 kJ/mol<br/>
                • Pre-exponential factor A = 1.0 × 10¹¹ L/(mol·s)<br/>
                • Steric factor p = 0.16<br/>
                <br/>
                Calculate the rate constant k and the fraction of molecules with sufficient energy for reaction.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h4 className="font-bold text-gray-800 dark:text-white mb-3">Step 1: Convert Units</h4>
                <p className="text-gray-700 dark:text-gray-300 font-mono text-sm">
                  Ea = 165 kJ/mol = 165,000 J/mol<br/>
                  R = 8.314 J/(mol·K)<br/>
                  T = 700 K
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h4 className="font-bold text-gray-800 dark:text-white mb-3">Step 2: Calculate Boltzmann Factor</h4>
                <p className="text-gray-700 dark:text-gray-300 font-mono text-sm">
                  -Ea/RT = -165,000 / (8.314 × 700)<br/>
                  -Ea/RT = -165,000 / 5,820<br/>
                  -Ea/RT = -28.35<br/>
                  <br/>
                  e^(-Ea/RT) = e^(-28.35) = 4.78 × 10^(-13)
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  This means only about 4.78 × 10^(-11)% of collisions have sufficient energy!
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h4 className="font-bold text-gray-800 dark:text-white mb-3">Step 3: Calculate Rate Constant</h4>
                <p className="text-gray-700 dark:text-gray-300 font-mono text-sm">
                  k = A × e^(-Ea/RT)<br/>
                  k = (1.0 × 10¹¹) × (4.78 × 10^(-13))<br/>
                  <strong>k = 4.78 × 10^(-2) L/(mol·s) = 0.0478 L/(mol·s)</strong>
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h4 className="font-bold text-gray-800 dark:text-white mb-3">Step 4: Interpretation</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  The low steric factor (p = 0.16) indicates that only about 16% of energetically sufficient 
                  collisions have the correct orientation. Combined with the Boltzmann factor, this makes the 
                  overall reaction relatively slow despite high temperature. The reaction requires proper alignment 
                  of H₂ and I₂ molecules for H-I bond formation.
                </p>
              </div>
            </div>
          </section>

          {/* Applications */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              Applications of Collision Theory
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-600 rounded-lg">
                <div className="text-3xl mb-3">🔥</div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  Combustion Engineering
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Design combustion systems by predicting ignition temperatures and flame speeds. Optimize fuel-air 
                  mixtures for engines and furnaces. Calculate minimum ignition energy for safety assessments.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-700 dark:to-gray-600 rounded-lg">
                <div className="text-3xl mb-3">⚗️</div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  Catalyst Development
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Understand how catalysts work by lowering activation energy. Evaluate catalyst effectiveness 
                  by measuring changes in Ea. Design more efficient industrial catalytic processes.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-gray-700 dark:to-gray-600 rounded-lg">
                <div className="text-3xl mb-3">❄️</div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  Food Preservation
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Calculate shelf life at different storage temperatures. Predict spoilage rates using Arrhenius 
                  kinetics. Optimize refrigeration and freezing strategies to minimize deterioration reactions.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-gray-700 dark:to-gray-600 rounded-lg">
                <div className="text-3xl mb-3">🌍</div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  Atmospheric Chemistry
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Model ozone depletion and formation reactions. Predict pollutant lifetimes in the atmosphere. 
                  Understand temperature-dependent reactions in climate modeling and air quality forecasting.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-red-50 to-red-100 dark:from-gray-700 dark:to-gray-600 rounded-lg">
                <div className="text-3xl mb-3">💊</div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  Pharmaceutical Stability
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Predict drug degradation rates and expiration dates. Determine optimal storage conditions. 
                  Accelerated stability testing using elevated temperatures and Arrhenius extrapolation.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-gray-700 dark:to-gray-600 rounded-lg">
                <div className="text-3xl mb-3">🏭</div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  Industrial Process Optimization
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Determine optimal reaction temperatures balancing rate and selectivity. Design reactor systems 
                  with appropriate heating/cooling. Minimize energy costs while maximizing production efficiency.
                </p>
              </div>
            </div>
          </section>

          {/* Problem-Solving Strategy */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              Problem-Solving Strategy
            </h2>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                    Identify Given Information
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Determine what's provided: Ea, T, A, p, molecular properties (diameter, mass, concentration). 
                    Note units carefully - convert kJ to J, °C to K, etc.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                    Choose Appropriate Equation
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Collision frequency: Z = σ × v̄ × n² / √2. Rate constant: k = A × e^(-Ea/RT). Temperature 
                    comparison: ln(k₂/k₁) = (Ea/R)(1/T₁ - 1/T₂).
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                    Perform Calculations Step-by-Step
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Calculate intermediate values first (collision cross-section, mean speed, -Ea/RT). Use scientific 
                    notation for very large or small numbers. Check that units cancel properly.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                    Interpret Results Physically
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Does the answer make sense? Higher T should give higher k. Larger Ea should give smaller k. 
                    Collision frequencies should be very large numbers (~10²⁸-10³⁴).
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              Common Mistakes to Avoid
            </h2>
            
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-6 py-4 bg-red-50 dark:bg-gray-700 rounded-r-lg">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                  ❌ Using kJ/mol instead of J/mol in Arrhenius Equation
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  R = 8.314 J/(mol·K), so Ea must be in J/mol. Using kJ/mol gives drastically wrong results.
                </p>
                <p className="text-green-700 dark:text-green-400 font-semibold">
                  ✓ Always convert: 1 kJ/mol = 1000 J/mol.
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-6 py-4 bg-red-50 dark:bg-gray-700 rounded-r-lg">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                  ❌ Forgetting Absolute Temperature
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Temperature must be in Kelvin for Arrhenius equation. Using °C gives completely wrong exponential.
                </p>
                <p className="text-green-700 dark:text-green-400 font-semibold">
                  ✓ Convert: T(K) = T(°C) + 273.15.
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-6 py-4 bg-red-50 dark:bg-gray-700 rounded-r-lg">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                  ❌ Confusing Steric Factor with Probability
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  p is not the same as e^(-Ea/RT). Steric factor accounts for orientation; Boltzmann factor 
                  accounts for energy. Both reduce successful collisions.
                </p>
                <p className="text-green-700 dark:text-green-400 font-semibold">
                  ✓ Overall success rate = p × e^(-Ea/RT).
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-6 py-4 bg-red-50 dark:bg-gray-700 rounded-r-lg">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                  ❌ Misunderstanding Temperature Effect Magnitude
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  The collision frequency Z increases only as √T (minor effect), but the Boltzmann factor 
                  e^(-Ea/RT) changes exponentially (dominant effect).
                </p>
                <p className="text-green-700 dark:text-green-400 font-semibold">
                  ✓ Temperature primarily affects k through the exponential term, not collision frequency.
                </p>
              </div>
            </div>
          </section>

          {/* Quick Reference */}
          <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 text-white">
            <h2 className="text-3xl font-bold mb-6">Quick Reference Guide</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <h3 className="font-bold mb-2 text-xl">Key Equations</h3>
                <ul className="space-y-1 text-sm font-mono">
                  <li>k = A × e^(-Ea/RT)</li>
                  <li>ln(k₂/k₁) = (Ea/R)(1/T₁-1/T₂)</li>
                  <li>Z = σ × v̄ × n²/√2</li>
                  <li>v̄ = √(8kT/πm)</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <h3 className="font-bold mb-2 text-xl">Constants</h3>
                <ul className="space-y-1 text-sm">
                  <li>R = 8.314 J/(mol·K)</li>
                  <li>k_B = 1.381×10⁻²³ J/K</li>
                  <li>N_A = 6.022×10²³ mol⁻¹</li>
                  <li>1 kJ/mol = 1000 J/mol</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <h3 className="font-bold mb-2 text-xl">Typical Values</h3>
                <ul className="space-y-1 text-sm">
                  <li>Ea: 50-250 kJ/mol</li>
                  <li>p: 10⁻⁶ to 1</li>
                  <li>A: 10⁸ to 10¹⁴ (varies)</li>
                  <li>Z: 10²⁸-10³⁴ m⁻³s⁻¹</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <h3 className="font-bold mb-2 text-xl">Rules of Thumb</h3>
                <ul className="space-y-1 text-sm">
                  <li>+10 K → k doubles/triples</li>
                  <li>High Ea → slow reaction</li>
                  <li>Low p → orientation critical</li>
                  <li>Higher T → exponentially faster</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    🔗 Related Calculators
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="/kinetics-calculators/integrated-rate-law-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Integrated Rate Law Calculator</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/kinetics-calculators/reaction-order-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Reaction Order Calculator</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/physical-chemistry-calculators/kinetic-molecular-theory-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Kinetic Molecular Theory Calculator</span>
                      </a>
                    </li>
                  </ul>
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <a
                      href="/calculators"
                      className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      View All Calculators →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      </div>
      <Footer />
    </>
  );
}