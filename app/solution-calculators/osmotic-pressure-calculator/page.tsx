import OsmoticPressureCalculator from '@/components/calculators/OsmoticPressureCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata = {
  title: 'Osmotic Pressure Calculator | Chemistry Calculators',
  description: 'Calculate osmotic pressure using the Van\'t Hoff equation. Understand colligative properties and solution behavior.',
  keywords: 'osmotic pressure, Van\'t Hoff equation, colligative properties, solutions, molarity, semipermeable membrane',
};

export default function OsmoticPressureCalculatorPage() {  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-tertiary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Osmotic Pressure Calculator
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Calculate osmotic pressure and understand colligative properties of solutions
          </p>
        </div>

        <OsmoticPressureCalculator />

        {/* Educational Content */}
        <div className="mt-12 space-y-8">
          {/* What is Osmotic Pressure? */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              What is Osmotic Pressure?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Osmotic pressure (π)</strong> is the minimum pressure required to prevent the flow of 
              solvent molecules through a semipermeable membrane from a dilute solution into a more concentrated 
              solution. It is one of the four main colligative properties of solutions.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mb-4">
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Van't Hoff Equation:</h3>
              <p className="text-blue-800 dark:text-blue-200 font-mono text-xl mb-3">
                π = iMRT
              </p>
              <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                <li>• <strong>π</strong> = osmotic pressure (atm)</li>
                <li>• <strong>i</strong> = Van't Hoff factor (number of particles)</li>
                <li>• <strong>M</strong> = molarity (mol/L)</li>
                <li>• <strong>R</strong> = gas constant = 0.08206 L·atm/(mol·K)</li>
                <li>• <strong>T</strong> = absolute temperature (K)</li>
              </ul>
            </div>
            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
              <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">Key Points:</h3>
              <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                <li>✓ Osmotic pressure is directly proportional to concentration</li>
                <li>✓ Higher temperature increases osmotic pressure</li>
                <li>✓ Electrolytes produce more particles (higher i value)</li>
                <li>✓ Colligative property - depends on number of particles, not identity</li>
              </ul>
            </div>
          </section>

          {/* Van't Hoff Factor */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Understanding the Van't Hoff Factor (i)
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The Van't Hoff factor represents the number of particles (ions or molecules) that a compound 
              produces when dissolved in solution.
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Non-Electrolytes (i = 1)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Compounds that do not dissociate in solution.
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Examples: glucose (C₆H₁₂O₆), sucrose (C₁₂H₂₂O₁₁), ethanol (C₂H₅OH)
                    <br />
                    C₆H₁₂O₆(s) → C₆H₁₂O₆(aq) [1 particle]
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Strong Electrolytes (i = number of ions)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Ionic compounds that completely dissociate.
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    • NaCl: Na⁺ + Cl⁻ → <strong>i = 2</strong>
                    <br />
                    • CaCl₂: Ca²⁺ + 2Cl⁻ → <strong>i = 3</strong>
                    <br />
                    • Al₂(SO₄)₃: 2Al³⁺ + 3SO₄²⁻ → <strong>i = 5</strong>
                    <br />
                    • K₃PO₄: 3K⁺ + PO₄³⁻ → <strong>i = 4</strong>
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Weak Electrolytes (i ≈ 1 to theoretical maximum)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Partially dissociate, actual i depends on degree of ionization.
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Acetic acid (CH₃COOH): Only ~1% ionized
                    <br />
                    Theoretical i = 2, but actual i ≈ 1.01 in dilute solution
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Example Calculations */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Example Calculations
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-tertiary-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Example 1: Glucose Solution
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Problem:</strong> Calculate the osmotic pressure of a 0.15 M glucose solution at 37°C 
                  (body temperature).
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg space-y-2">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Given:</strong>
                  </p>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 ml-4">
                    <li>• i = 1 (glucose is a non-electrolyte)</li>
                    <li>• M = 0.15 mol/L</li>
                    <li>• R = 0.08206 L·atm/(mol·K)</li>
                    <li>• T = 37°C + 273 = 310 K</li>
                  </ul>
                  <p className="font-mono text-sm text-gray-800 dark:text-gray-200 mt-3">
                    π = iMRT
                    <br />
                    π = (1)(0.15)(0.08206)(310)
                    <br />
                    π = 3.82 atm
                  </p>
                  <p className="text-sm text-tertiary-600 dark:text-tertiary-400 font-semibold mt-2">
                    This is close to normal blood osmotic pressure!
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-secondary-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Example 2: Sodium Chloride Solution
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Problem:</strong> What molarity of NaCl solution gives the same osmotic pressure as 
                  0.15 M glucose at 310 K?
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg space-y-2">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Given:</strong> π = 3.82 atm, i = 2 (NaCl → Na⁺ + Cl⁻), T = 310 K
                  </p>
                  <p className="font-mono text-sm text-gray-800 dark:text-gray-200 mt-3">
                    M = π/(iRT)
                    <br />
                    M = 3.82/(2 × 0.08206 × 310)
                    <br />
                    M = 0.075 M
                  </p>
                  <p className="text-sm text-secondary-600 dark:text-secondary-400 font-semibold mt-2">
                    Only half the molarity needed because NaCl produces twice as many particles!
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Example 3: Reverse Osmosis
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Problem:</strong> Seawater has approximately 0.6 M NaCl. What pressure is needed for 
                  reverse osmosis desalination at 25°C?
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg space-y-2">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Given:</strong> i = 2, M = 0.6 mol/L, T = 298 K
                  </p>
                  <p className="font-mono text-sm text-gray-800 dark:text-gray-200 mt-3">
                    π = iMRT
                    <br />
                    π = (2)(0.6)(0.08206)(298)
                    <br />
                    π = 29.3 atm ≈ 30 bar
                  </p>
                  <p className="text-sm text-green-600 dark:text-green-400 font-semibold mt-2">
                    Reverse osmosis plants must apply &gt;30 atm to push water through membranes!
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Applications */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Real-World Applications
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-red-900 dark:text-red-100 mb-2">🏥 Medical Applications</h3>
                <ul className="text-sm text-red-800 dark:text-red-200 space-y-1">
                  <li>• <strong>IV Solutions:</strong> Must be isotonic (~0.9% NaCl) to match blood osmotic pressure (7.7 atm)</li>
                  <li>• <strong>Kidney Dialysis:</strong> Controls solute concentration using osmosis</li>
                  <li>• <strong>Cell Biology:</strong> Understanding cell swelling/shrinking in different solutions</li>
                  <li>• <strong>Drug Delivery:</strong> Osmotic pumps for controlled release</li>
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">💧 Water Purification</h3>
                <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                  <li>• <strong>Reverse Osmosis:</strong> Desalination plants use high pressure to overcome osmotic pressure</li>
                  <li>• <strong>Water Treatment:</strong> Removes dissolved ions and contaminants</li>
                  <li>• <strong>Portable Filters:</strong> Emergency water purification systems</li>
                  <li>• <strong>Wastewater Treatment:</strong> Concentration and purification</li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">🌱 Biology & Agriculture</h3>
                <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                  <li>• <strong>Plant Cells:</strong> Turgor pressure from osmosis keeps plants rigid</li>
                  <li>• <strong>Food Preservation:</strong> Salting/sugaring dehydrates bacteria through osmosis</li>
                  <li>• <strong>Soil Science:</strong> Water uptake by plant roots</li>
                  <li>• <strong>Irrigation:</strong> Soil salinity effects on crop growth</li>
                </ul>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">🔬 Research & Industry</h3>
                <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-1">
                  <li>• <strong>Molecular Weight:</strong> Determining molar mass of polymers and proteins</li>
                  <li>• <strong>Concentration:</strong> Concentrating protein solutions in labs</li>
                  <li>• <strong>Food Industry:</strong> Juice concentration, maple syrup production</li>
                  <li>• <strong>Pharmaceuticals:</strong> Drug formulation and stability testing</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Colligative Properties */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Osmotic Pressure as a Colligative Property
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Osmotic pressure is one of four main <strong>colligative properties</strong> - properties that 
              depend on the number of solute particles, not their identity.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">
                  1. Vapor Pressure Lowering
                </h3>
                <p className="text-sm text-indigo-800 dark:text-indigo-200">
                  Adding solute decreases vapor pressure of solvent (Raoult's Law)
                </p>
              </div>

              <div className="bg-teal-50 dark:bg-teal-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-teal-900 dark:text-teal-100 mb-2">
                  2. Boiling Point Elevation
                </h3>
                <p className="text-sm text-teal-800 dark:text-teal-200">
                  Solutions boil at higher temperature than pure solvent (ΔTb = Kbm)
                </p>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
                  3. Freezing Point Depression
                </h3>
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                  Solutions freeze at lower temperature (ΔTf = Kfm) - salt on icy roads!
                </p>
              </div>

              <div className="bg-pink-50 dark:bg-pink-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-pink-900 dark:text-pink-100 mb-2">
                  4. Osmotic Pressure
                </h3>
                <p className="text-sm text-pink-800 dark:text-pink-200">
                  Pressure needed to prevent solvent flow through membrane (π = iMRT)
                </p>
              </div>
            </div>

            <div className="mt-4 bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                <strong>Why Colligative Properties Matter:</strong> They all result from the same fundamental 
                principle - adding solute particles disrupts the solvent's normal behavior. The number of 
                particles (not their type) determines the magnitude of the effect.
              </p>
            </div>
          </section>

          {/* Important Concepts */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Important Concepts & Terms
            </h2>

            <div className="space-y-4">
              <div className="bg-teal-50 dark:bg-teal-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-teal-900 dark:text-teal-100 mb-2">
                  🔄 Osmosis
                </h3>
                <p className="text-sm text-teal-800 dark:text-teal-200">
                  The spontaneous flow of solvent molecules through a semipermeable membrane from a region 
                  of lower solute concentration to higher solute concentration. Osmosis continues until 
                  equilibrium or until osmotic pressure is reached.
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">
                  📊 Tonicity (Biological Solutions)
                </h3>
                <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-1">
                  <li>• <strong>Isotonic:</strong> Same osmotic pressure as cell interior (0.9% NaCl) - no net water flow</li>
                  <li>• <strong>Hypotonic:</strong> Lower osmotic pressure - water flows into cells (swelling)</li>
                  <li>• <strong>Hypertonic:</strong> Higher osmotic pressure - water flows out of cells (shrinking)</li>
                </ul>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">
                  🧪 Semipermeable Membrane
                </h3>
                <p className="text-sm text-orange-800 dark:text-orange-200">
                  A barrier that allows solvent molecules (like water) to pass through but blocks solute 
                  particles. Examples: cell membranes, dialysis tubing, reverse osmosis membranes. 
                  Selectivity based on size, charge, or other properties.
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                  ⚡ Reverse Osmosis
                </h3>
                <p className="text-sm text-green-800 dark:text-green-200">
                  Applying pressure greater than osmotic pressure forces solvent to flow from high 
                  concentration to low concentration (opposite of natural osmosis). Used in desalination 
                  and water purification. Requires energy input to overcome natural osmotic pressure.
                </p>
              </div>
            </div>
          </section>

          {/* Practical Tips */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Calculation Tips & Common Mistakes
            </h2>

            <div className="space-y-4">
              <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-red-900 dark:text-red-100 mb-2">
                  ⚠️ Temperature Units
                </h3>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Always use Kelvin (K), never Celsius. Convert: K = °C + 273.15
                  <br />
                  Common: 25°C = 298 K (room temp), 37°C = 310 K (body temp), 0°C = 273 K
                </p>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
                  ⚠️ Van't Hoff Factor
                </h3>
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                  Don't forget i! Non-electrolytes: i = 1. Count all ions for electrolytes: 
                  NaCl (i=2), MgCl₂ (i=3), Al₂(SO₄)₃ (i=5). Weak electrolytes have i between 1 
                  and theoretical maximum.
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  💡 Unit Conversions
                </h3>
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  Pressure: 1 atm = 101.325 kPa = 760 mmHg = 14.7 psi
                  <br />
                  R constant varies: 0.08206 L·atm/(mol·K) or 8.314 J/(mol·K) - use correct one!
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                  ✓ Quick Checks
                </h3>
                <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                  <li>• Higher concentration → higher osmotic pressure</li>
                  <li>• Higher temperature → higher osmotic pressure</li>
                  <li>• Electrolytes give higher π than non-electrolytes at same molarity</li>
                  <li>• Blood osmotic pressure ≈ 7.7 atm at 37°C</li>
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
                        href="/solution-calculators/colligative-properties-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Colligative Properties Calculator</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/physical-chemistry-calculators/raoults-law-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Raoult's Law Calculator</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/physical-chemistry-calculators/activity-coefficient-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Activity Coefficient Calculator</span>
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