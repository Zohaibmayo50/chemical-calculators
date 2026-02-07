import type { Metadata } from 'next';
import ActivityCoefficientCalculator from '@/components/calculators/ActivityCoefficientCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: 'Activity Coefficient Calculator | Chemistry Calculators',
  description:
    'Calculate activity coefficients using Debye-Hückel equation, ionic strength, and explore non-ideal solution behavior with step-by-step solutions.',
  keywords: [
    'activity coefficient',
    'debye huckel',
    'ionic strength',
    'non ideal solution',
    'activity',
    'electrolyte solution',
    'thermodynamics',
    'physical chemistry',
    'ionic interactions',
    'solution chemistry',
  ],
  alternates: {
    canonical: 'https://chemsolved.com/physical-chemistry-calculators/activity-coefficient-calculator',
  },
};

export default function ActivityCoefficientCalculatorPage() {  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 mb-4">
            Activity Coefficient Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Calculate activity coefficients, ionic strength, and explore non-ideal behavior in electrolyte solutions
          </p>
        </div>

        {/* Calculator Component */}
        <ActivityCoefficientCalculator />

        {/* Educational Content */}
        <div className="mt-16 prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              What are Activity Coefficients?
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Activity coefficients quantify the deviation of real solutions from ideal behavior. In ideal solutions, 
              particles don't interact with each other, and concentration alone determines thermodynamic properties. 
              Real ionic solutions, however, exhibit significant ion-ion interactions (Coulombic attractions and repulsions) 
              that cause the "effective concentration" — called <strong>activity</strong> — to differ from the analytical 
              concentration.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 mb-6">
              <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">
                Core Concepts
              </h3>
              <div className="text-blue-800 dark:text-blue-200 space-y-3">
                <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-300 dark:border-blue-700">
                  <p className="font-semibold mb-2">Activity:</p>
                  <p className="font-mono text-lg mb-2">a = γ × c</p>
                  <p className="text-sm">
                    Where a is activity (effective concentration), γ is the activity coefficient, and c is molar concentration
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-300 dark:border-blue-700">
                  <p className="font-semibold mb-2">Ionic Strength:</p>
                  <p className="font-mono text-lg mb-2">I = ½ Σ c<sub>i</sub>z<sub>i</sub>²</p>
                  <p className="text-sm">
                    Sum over all ions i, where c<sub>i</sub> is concentration and z<sub>i</sub> is charge number
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-300 dark:border-blue-700">
                  <p className="font-semibold mb-2">Debye-Hückel Limiting Law:</p>
                  <p className="font-mono text-lg mb-2">log γ<sub>±</sub> = -A|z<sub>+</sub>z<sub>-</sub>|√I</p>
                  <p className="text-sm">
                    Valid for I &lt; 0.01 M. A ≈ 0.509 (mol/kg)⁻¹/² at 25°C in water
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-300 dark:border-blue-700">
                  <p className="font-semibold mb-2">Extended Debye-Hückel:</p>
                  <p className="font-mono text-lg mb-2">log γ = -Az²√I / (1 + Bå√I)</p>
                  <p className="text-sm">
                    Includes ion size å (in Å). Valid for I up to ~0.1 M. B ≈ 0.328 (mol/kg)⁻¹/² Å⁻¹ at 25°C
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">
              Understanding Activity and Concentration
            </h3>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                📐 Related Formulas
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/chemistry-formulas/activity-coefficient"
                    className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                  >
                    <span>→</span>
                    <span>Activity Coefficient Formula</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/chemistry-formulas/activity-coefficient"
                    className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                  >
                    <span>→</span>
                    <span>Debye-Hückel Formula</span>
                  </a>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <a
                  href="/physical-chemistry-calculators"
                  className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
                >
                  All Physical Chemistry Calculators →
                </a>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">
              Understanding Activity and Concentration
            </h3>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              The distinction between activity and concentration is crucial for accurate thermodynamic calculations:
            </p>

            <ul className="list-disc pl-8 text-gray-700 dark:text-gray-300 space-y-2 mb-6">
              <li>
                <strong>Concentration (c or [X]):</strong> The analytical or stoichiometric concentration — what you actually 
                dissolve. Measured directly in mol/L or molality.
              </li>
              <li>
                <strong>Activity (a):</strong> The "effective concentration" that determines thermodynamic behavior (equilibrium 
                constants, electrode potentials, osmotic pressure). Accounts for ion-ion and ion-solvent interactions.
              </li>
              <li>
                <strong>Activity Coefficient (γ):</strong> The correction factor relating the two: a = γc. For neutral species 
                in dilute solutions, γ ≈ 1. For ions, γ can deviate significantly from unity.
              </li>
              <li>
                <strong>Ideal vs Non-Ideal:</strong> Ideal solutions have γ = 1 (activity equals concentration). Real ionic 
                solutions are highly non-ideal, with γ typically &lt; 1 due to ionic atmosphere effects.
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">
              Ionic Strength: The Key Parameter
            </h3>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Ionic strength (I) is a measure of the total concentration of ions in solution, weighted by their charges:
            </p>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800 mb-6">
              <p className="text-center font-mono text-lg mb-3">
                I = ½ Σ c<sub>i</sub>z<sub>i</sub>²
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm text-center mb-4">
                Sum includes all ions in solution
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Examples:</p>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>• 0.1 M NaCl: I = 0.1 M</li>
                    <li>• 0.1 M CaCl₂: I = 0.3 M</li>
                    <li>• 0.1 M MgSO₄: I = 0.4 M</li>
                    <li>• 0.1 M AlCl₃: I = 0.6 M</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Why z² matters:</p>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Doubly charged ions (z = 2) contribute 4× per mole</li>
                    <li>• Triply charged ions (z = 3) contribute 9× per mole</li>
                    <li>• Multivalent electrolytes create high I even at low c</li>
                    <li>• Higher I → stronger ionic interactions</li>
                  </ul>
                </div>
              </div>
            </div>

            <h4 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mt-6 mb-3">
              Calculating Ionic Strength for Common Electrolytes
            </h4>

            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg">
                <thead className="bg-gray-100 dark:bg-gray-600">
                  <tr>
                    <th className="px-6 py-3 border-b border-gray-300 dark:border-gray-500 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                      Electrolyte
                    </th>
                    <th className="px-6 py-3 border-b border-gray-300 dark:border-gray-500 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                      Dissociation
                    </th>
                    <th className="px-6 py-3 border-b border-gray-300 dark:border-gray-500 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                      I / c
                    </th>
                    <th className="px-6 py-3 border-b border-gray-300 dark:border-gray-500 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                      Example (c = 0.01 M)
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr className="border-b border-gray-200 dark:border-gray-600">
                    <td className="px-6 py-4">NaCl (1:1)</td>
                    <td className="px-6 py-4">Na⁺ + Cl⁻</td>
                    <td className="px-6 py-4">I = c</td>
                    <td className="px-6 py-4">I = 0.01 M</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-600">
                    <td className="px-6 py-4">CaCl₂ (2:1)</td>
                    <td className="px-6 py-4">Ca²⁺ + 2Cl⁻</td>
                    <td className="px-6 py-4">I = 3c</td>
                    <td className="px-6 py-4">I = 0.03 M</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-600">
                    <td className="px-6 py-4">MgSO₄ (2:2)</td>
                    <td className="px-6 py-4">Mg²⁺ + SO₄²⁻</td>
                    <td className="px-6 py-4">I = 4c</td>
                    <td className="px-6 py-4">I = 0.04 M</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-600">
                    <td className="px-6 py-4">AlCl₃ (3:1)</td>
                    <td className="px-6 py-4">Al³⁺ + 3Cl⁻</td>
                    <td className="px-6 py-4">I = 6c</td>
                    <td className="px-6 py-4">I = 0.06 M</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">K₃Fe(CN)₆ (3:3)</td>
                    <td className="px-6 py-4">3K⁺ + Fe(CN)₆³⁻</td>
                    <td className="px-6 py-4">I = 6c</td>
                    <td className="px-6 py-4">I = 0.06 M</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-800 my-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Worked Example: Activity Coefficient in 0.01 M NaCl
              </h3>
              
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <div>
                  <p className="font-semibold mb-2">Problem:</p>
                  <p>
                    Calculate the mean ionic activity coefficient (γ<sub>±</sub>) for a 0.01 M NaCl solution at 25°C using 
                    the Debye-Hückel limiting law.
                  </p>
                </div>

                <div>
                  <p className="font-semibold mb-2">Solution:</p>
                  <p className="mb-2">Step 1: Calculate ionic strength</p>
                  <p className="mb-2">For NaCl → Na⁺ + Cl⁻:</p>
                  <p className="bg-white dark:bg-gray-800 p-3 rounded border border-gray-300 dark:border-gray-600 font-mono text-sm mb-3">
                    I = ½[c(Na⁺) × 1² + c(Cl⁻) × 1²]<br />
                    I = ½[0.01 × 1 + 0.01 × 1]<br />
                    I = 0.01 M
                  </p>

                  <p className="mb-2">Step 2: Apply Debye-Hückel limiting law</p>
                  <p className="bg-white dark:bg-gray-800 p-3 rounded border border-gray-300 dark:border-gray-600 font-mono text-sm mb-3">
                    log γ<sub>±</sub> = -A|z<sub>+</sub>z<sub>-</sub>|√I
                  </p>
                  <p className="mb-3">At 25°C, A = 0.509 (mol/kg)⁻¹/². For NaCl, z<sub>+</sub> = +1, z<sub>-</sub> = -1</p>

                  <p className="mb-2">Step 3: Substitute values</p>
                  <p className="bg-white dark:bg-gray-800 p-3 rounded border border-gray-300 dark:border-gray-600 font-mono text-sm mb-3">
                    log γ<sub>±</sub> = -0.509 × |1 × (-1)| × √0.01<br />
                    log γ<sub>±</sub> = -0.509 × 1 × 0.1<br />
                    log γ<sub>±</sub> = -0.0509
                  </p>

                  <p className="mb-2">Step 4: Calculate γ<sub>±</sub></p>
                  <p className="bg-white dark:bg-gray-800 p-3 rounded border border-gray-300 dark:border-gray-600 font-mono text-sm mb-3">
                    γ<sub>±</sub> = 10⁻⁰·⁰⁵⁰⁹<br />
                    γ<sub>±</sub> = 0.889
                  </p>

                  <p className="mb-2">Step 5: Interpret the result</p>
                  <ul className="list-disc pl-8 space-y-1">
                    <li>Activity coefficient is less than 1 (γ &lt; 1), indicating non-ideal behavior</li>
                    <li>Activities: a(Na⁺) = a(Cl⁻) = 0.889 × 0.01 = 0.00889 M</li>
                    <li>Effective concentrations are about 11% lower than analytical concentrations</li>
                    <li>This deviation arises from ionic atmosphere stabilization (attractive ion-ion interactions)</li>
                  </ul>
                </div>

                <div className="bg-orange-100 dark:bg-orange-900/30 p-4 rounded-lg border border-orange-300 dark:border-orange-700 mt-4">
                  <p className="font-semibold text-orange-900 dark:text-orange-100">
                    Answer: γ<sub>±</sub> = 0.889 for 0.01 M NaCl
                  </p>
                  <p className="text-sm text-orange-800 dark:text-orange-200 mt-2">
                    Experimental value: γ<sub>±</sub> ≈ 0.902 (Debye-Hückel slightly underestimates at this concentration)
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">
              The Debye-Hückel Theory
            </h3>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Debye-Hückel theory explains activity coefficients by modeling the <strong>ionic atmosphere</strong> — the 
              time-averaged distribution of ions surrounding each central ion:
            </p>

            <h4 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mt-6 mb-3">
              Key Assumptions
            </h4>
            <ul className="list-disc pl-8 text-gray-700 dark:text-gray-300 space-y-2 mb-6">
              <li>
                <strong>Point charges:</strong> Ions are treated as charged spheres with radius å (ion size parameter)
              </li>
              <li>
                <strong>Coulombic interactions:</strong> Only electrostatic forces considered (no chemical bonding or ion pairing)
              </li>
              <li>
                <strong>Dilute solutions:</strong> Activity of solvent (water) is unity; concentration and molality are approximately equal
              </li>
              <li>
                <strong>Complete dissociation:</strong> Strong electrolytes are fully ionized
              </li>
              <li>
                <strong>Continuous solvent:</strong> Water is a dielectric continuum with ε<sub>r</sub> ≈ 78 at 25°C
              </li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mt-6 mb-3">
              Ionic Atmosphere Concept
            </h4>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Around each positive ion, negative ions are statistically more likely to be nearby (and vice versa). This creates 
              an "atmosphere" of oppositely charged ions that:
            </p>
            <ul className="list-disc pl-8 text-gray-700 dark:text-gray-300 space-y-2 mb-6">
              <li>
                <strong>Lowers free energy:</strong> The atmosphere stabilizes the central ion, reducing its effective energy 
                and thus its activity (γ &lt; 1)
              </li>
              <li>
                <strong>Depends on ionic strength:</strong> Higher I → more ions → stronger atmosphere → lower γ
              </li>
              <li>
                <strong>Charge dependence:</strong> Highly charged ions (z = 2, 3) create stronger atmospheres and have much 
                smaller γ values
              </li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mt-6 mb-3">
              Limiting Law vs Extended Equation
            </h4>

            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg">
                <thead className="bg-gray-100 dark:bg-gray-600">
                  <tr>
                    <th className="px-6 py-3 border-b border-gray-300 dark:border-gray-500 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                      Feature
                    </th>
                    <th className="px-6 py-3 border-b border-gray-300 dark:border-gray-500 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                      Limiting Law
                    </th>
                    <th className="px-6 py-3 border-b border-gray-300 dark:border-gray-500 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                      Extended Equation
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr className="border-b border-gray-200 dark:border-gray-600">
                    <td className="px-6 py-4">Equation</td>
                    <td className="px-6 py-4">log γ = -Az²√I</td>
                    <td className="px-6 py-4">log γ = -Az²√I / (1 + Bå√I)</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-600">
                    <td className="px-6 py-4">Valid range</td>
                    <td className="px-6 py-4">I &lt; 0.01 M</td>
                    <td className="px-6 py-4">I &lt; 0.1 M (sometimes up to 0.2 M)</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-600">
                    <td className="px-6 py-4">Parameters</td>
                    <td className="px-6 py-4">A only (temperature dependent)</td>
                    <td className="px-6 py-4">A, B (temp dependent), å (ion size)</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-600">
                    <td className="px-6 py-4">Accuracy</td>
                    <td className="px-6 py-4">Good for very dilute solutions</td>
                    <td className="px-6 py-4">Better at moderate concentrations</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Typical å values</td>
                    <td className="px-6 py-4">N/A</td>
                    <td className="px-6 py-4">3-9 Å (e.g., H⁺: 9, K⁺: 3, SO₄²⁻: 4)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">
              Applications of Activity Coefficients
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
                  1. Electrochemistry (Nernst Equation)
                </h4>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  Electrode potentials depend on activities, not concentrations: E = E° - (RT/nF)ln(a). Neglecting γ can 
                  lead to errors of 10-30 mV in dilute solutions, more in concentrated ones. Critical for accurate pH 
                  measurement, ion-selective electrodes, and battery voltage calculations.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                <h4 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-3">
                  2. Equilibrium Calculations
                </h4>
                <p className="text-purple-800 dark:text-purple-200 text-sm">
                  Thermodynamic equilibrium constants (K°) use activities: K° = Π a<sub>i</sub>. Converting to concentrations 
                  requires activity coefficients. Essential for accurate solubility products, complex formation constants, 
                  and speciation calculations in seawater, biological fluids, and industrial processes.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 p-6 rounded-xl border border-green-200 dark:border-green-700">
                <h4 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-3">
                  3. Geochemistry and Environmental Science
                </h4>
                <p className="text-green-800 dark:text-green-200 text-sm">
                  Natural waters (seawater I ≈ 0.7 M, groundwater I ≈ 0.001-0.1 M) require activity corrections for mineral 
                  solubility, metal speciation, and carbonate equilibria. PHREEQC and other speciation models use extended 
                  Debye-Hückel or Pitzer equations for high ionic strength.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                <h4 className="text-lg font-semibold text-orange-900 dark:text-orange-100 mb-3">
                  4. Biochemistry and Medicine
                </h4>
                <p className="text-orange-800 dark:text-orange-200 text-sm">
                  Biological fluids (blood I ≈ 0.16 M, intracellular I ≈ 0.15 M) have significant ionic strength. Enzyme 
                  kinetics (Michaelis-Menten), protein-ligand binding, and drug solubility all depend on activities. Neglecting 
                  γ can lead to 10-20% errors in K<sub>d</sub> or IC₅₀ values.
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/30 dark:to-red-800/30 p-6 rounded-xl border border-red-200 dark:border-red-700">
                <h4 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-3">
                  5. Industrial Processes
                </h4>
                <p className="text-red-800 dark:text-red-200 text-sm">
                  Crystallization, precipitation, and ion exchange depend on activities. Calculating supersaturation ratios, 
                  predicting scale formation in boilers/pipelines, and optimizing separation processes require accurate 
                  activity coefficients. Salt effects in organic reactions also involve ionic strength.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/30 dark:to-yellow-800/30 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700">
                <h4 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-3">
                  6. Analytical Chemistry
                </h4>
                <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                  pH buffers, complexometric titrations (EDTA), and solubility-based separations all require activity 
                  corrections. The Davies equation (extension of Debye-Hückel) is commonly used for I up to 0.5 M. Ionic 
                  strength adjusters (ISA) maintain constant I to simplify calibrations.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">
              How to Solve Activity Coefficient Problems
            </h3>

            <div className="bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20 p-6 rounded-xl border border-cyan-200 dark:border-cyan-800 mb-6">
              <ol className="list-decimal pl-6 space-y-4 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>Calculate ionic strength (I)</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                    <li>Identify all ions and their concentrations</li>
                    <li>Apply I = ½Σc<sub>i</sub>z<sub>i</sub>²</li>
                    <li>For single electrolyte: use shortcut formulas (e.g., I = 3c for CaCl₂)</li>
                    <li>For mixtures: sum contributions from all species</li>
                  </ul>
                </li>
                <li>
                  <strong>Choose appropriate equation</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                    <li>I &lt; 0.01 M: Use limiting law (log γ = -Az²√I)</li>
                    <li>0.01 M &lt; I &lt; 0.1 M: Use extended D-H (include ion size å)</li>
                    <li>I &gt; 0.1 M: Use Davies equation or empirical data</li>
                    <li>Very high I: Consider Pitzer equations or empirical correlations</li>
                  </ul>
                </li>
                <li>
                  <strong>Apply temperature correction if needed</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                    <li>A and B vary with temperature: A ∝ (εT)⁻³/², B ∝ (εT)⁻¹/²</li>
                    <li>At 25°C: A = 0.509, B = 0.328</li>
                    <li>Approximate scaling: A(T) ≈ A(25°C) × √(T/298.15)</li>
                  </ul>
                </li>
                <li>
                  <strong>Calculate activity and interpret</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                    <li>a = γc for use in thermodynamic equations</li>
                    <li>γ &lt; 1: attractive interactions dominate (normal for electrolytes)</li>
                    <li>γ &gt; 1: repulsive interactions (rare, high concentrations)</li>
                    <li>Compare calculated γ with experimental values when available</li>
                  </ul>
                </li>
              </ol>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">
              Common Mistakes to Avoid
            </h3>

            <div className="space-y-4">
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-5 rounded-r-lg">
                <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">
                  1. Forgetting the ½ factor in ionic strength
                </h4>
                <p className="text-red-800 dark:text-red-200 text-sm mb-2">
                  <strong>Wrong:</strong> "For 0.1 M NaCl: I = 0.1 × 1² + 0.1 × 1² = 0.2 M"
                </p>
                <p className="text-red-800 dark:text-red-200 text-sm">
                  <strong>Correct:</strong> "I = ½[0.1 × 1² + 0.1 × 1²] = ½ × 0.2 = 0.1 M"
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-5 rounded-r-lg">
                <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">
                  2. Using charge instead of charge number
                </h4>
                <p className="text-red-800 dark:text-red-200 text-sm mb-2">
                  <strong>Wrong:</strong> "For SO₄²⁻: z = -2e = -3.2 × 10⁻¹⁹ C"
                </p>
                <p className="text-red-800 dark:text-red-200 text-sm">
                  <strong>Correct:</strong> "z is the charge number, a dimensionless integer. For SO₄²⁻: z = -2 (or use |z| = 2 in formulas)"
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-5 rounded-r-lg">
                <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">
                  3. Applying limiting law outside valid range
                </h4>
                <p className="text-red-800 dark:text-red-200 text-sm mb-2">
                  <strong>Wrong:</strong> "Using log γ = -Az²√I for 0.5 M NaCl"
                </p>
                <p className="text-red-800 dark:text-red-200 text-sm">
                  <strong>Correct:</strong> "Limiting law fails above I ≈ 0.01 M. For 0.5 M, use extended equation or empirical 
                  data (experimental γ<sub>±</sub> ≈ 0.66 for NaCl at this concentration)."
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-5 rounded-r-lg">
                <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">
                  4. Confusing single-ion and mean ionic activity coefficients
                </h4>
                <p className="text-red-800 dark:text-red-200 text-sm mb-2">
                  <strong>Wrong:</strong> "γ(Na⁺) and γ(Cl⁻) are independent and can be measured separately."
                </p>
                <p className="text-red-800 dark:text-red-200 text-sm">
                  <strong>Correct:</strong> "Single-ion activity coefficients cannot be measured individually. We measure 
                  γ<sub>±</sub> = [γ(+)^ν₊ γ(-)^ν₋]^(1/(ν₊+ν₋)). For symmetric electrolytes (z₊ = |z₋|), Debye-Hückel 
                  gives identical γ values for both ions."
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">
              Quick Reference Guide
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-800">
                <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-3">Key Constants (25°C, H₂O)</h4>
                <ul className="space-y-2 text-sm text-indigo-800 dark:text-indigo-200">
                  <li>• A = 0.509 (mol/kg)⁻¹/²</li>
                  <li>• B = 0.328 (mol/kg)⁻¹/² Å⁻¹</li>
                  <li>• Dielectric constant: ε<sub>r</sub> = 78.4</li>
                  <li>• RT/F = 25.69 mV (Nernst)</li>
                  <li>• ln 10 ≈ 2.303</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 p-6 rounded-xl border border-pink-200 dark:border-pink-800">
                <h4 className="font-semibold text-pink-900 dark:text-pink-100 mb-3">Key Formulas</h4>
                <ul className="space-y-2 text-sm text-pink-800 dark:text-pink-200">
                  <li>• Ionic strength: I = ½Σc<sub>i</sub>z<sub>i</sub>²</li>
                  <li>• Activity: a = γc</li>
                  <li>• Limiting law: log γ = -Az²√I</li>
                  <li>• Extended: log γ = -Az²√I/(1+Bå√I)</li>
                  <li>• Mean ionic: γ<sub>±</sub> = (γ₊^ν₊ γ₋^ν₋)^(1/ν)</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-6 rounded-xl border border-emerald-200 dark:border-emerald-800">
                <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-3">Typical γ Values (0.01 M)</h4>
                <ul className="space-y-2 text-sm text-emerald-800 dark:text-emerald-200">
                  <li>• 1:1 electrolyte (NaCl): ~0.90</li>
                  <li>• 2:1 electrolyte (CaCl₂): ~0.73</li>
                  <li>• 2:2 electrolyte (MgSO₄): ~0.58</li>
                  <li>• 3:1 electrolyte (LaCl₃): ~0.54</li>
                  <li>• Higher charges → lower γ</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-800">
                <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-3">Validity Ranges</h4>
                <ul className="space-y-2 text-sm text-amber-800 dark:text-amber-200">
                  <li>• Limiting law: I &lt; 0.01 M</li>
                  <li>• Extended D-H: I &lt; 0.1 M</li>
                  <li>• Davies equation: I &lt; 0.5 M</li>
                  <li>• Seawater (I~0.7 M): Pitzer/specific ion</li>
                  <li>• Concentrated brines: empirical data</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
                Beyond Debye-Hückel: Advanced Models
              </h4>
              <p className="text-blue-800 dark:text-blue-200 text-sm mb-3">
                For ionic strengths above 0.1 M or mixed electrolytes, more sophisticated models are needed:
              </p>
              <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                <li>
                  <strong>Davies Equation:</strong> log γ = -Az²[√I/(1+√I) - 0.3I]. Simple extension valid to I ≈ 0.5 M, 
                  widely used in geochemistry.
                </li>
                <li>
                  <strong>Pitzer Equations:</strong> Virial expansion with ion-specific interaction parameters. Accurate 
                  to very high concentrations (&gt;6 M). Standard in seawater chemistry and brine processing.
                </li>
                <li>
                  <strong>Specific Ion Interaction Theory (SIT):</strong> Uses binary interaction coefficients. Good for 
                  moderate I (up to 3-4 M), fewer parameters than Pitzer.
                </li>
                <li>
                  <strong>Mean Spherical Approximation (MSA):</strong> More rigorous statistical mechanics approach. 
                  Computationally intensive but theoretically sound.
                </li>
              </ul>
            </div>
          </div>
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
                      href="/solution-calculators/osmotic-pressure-calculator"
                      className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                    >
                      <span>→</span>
                      <span>Osmotic Pressure Calculator</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/concentration-and-solution-calculators/molarity-calculator"
                      className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                    >
                      <span>→</span>
                      <span>Molarity Calculator</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/solution-calculators/colligative-properties-calculator"
                      className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                    >
                      <span>→</span>
                      <span>Colligative Properties</span>
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
      {/* Structured Data - SoftwareApplication */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Activity Coefficient Calculator",
            "description": "Activity Coefficient Calculator on ChemSolved",
            "url": "https://chemsolved.com/physical-chemistry-calculators/activity-coefficient-calculator",
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
                "name": "Activity Coefficient Calculator",
                "item": "https://chemsolved.com/physical-chemistry-calculators/activity-coefficient-calculator"
              }
            ]
          })
        }}
      />

      </div>
      <Footer />
    </>
  );
}