import { Metadata } from 'next';
import ColligativePropertiesCalculator from '@/components/calculators/ColligativePropertiesCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: "Colligative Properties Calculator | Freezing Point Depression | Boiling Point Elevation",
  description: "Calculate freezing point depression, boiling point elevation, and osmotic pressure. Essential for solution chemistry.",
  keywords: ['colligative properties', 'freezing point depression', 'boiling point elevation', 'osmotic pressure', 'van\'t Hoff factor', 'molality'],
};

export default function ColligativePropertiesCalculatorPage() {  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Colligative Properties Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Calculate freezing point depression, boiling point elevation, and osmotic pressure
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ColligativePropertiesCalculator />
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                What are Colligative Properties?
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300">
                  Colligative properties depend only on the <strong>number</strong> of solute particles, 
                  not their identity. They include:
                </p>
                <div className="mt-4 space-y-2">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                    <p className="font-semibold text-blue-900 dark:text-blue-100">Freezing Point Depression</p>
                    <p className="text-xs text-blue-800 dark:text-blue-200">ΔTf = i·Kf·m</p>
                  </div>
                  <div className="p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                    <p className="font-semibold text-purple-900 dark:text-purple-100">Boiling Point Elevation</p>
                    <p className="text-xs text-purple-800 dark:text-purple-200">ΔTb = i·Kb·m</p>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
                    <p className="font-semibold text-green-900 dark:text-green-100">Osmotic Pressure</p>
                    <p className="text-xs text-green-800 dark:text-green-200">π = i·M·R·T</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                van&apos;t Hoff Factor (i)
              </h3>
              <div className="prose dark:prose-invert max-w-none text-sm">
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Number of particles produced per formula unit:
                </p>
                <div className="space-y-2">
                  <div className="p-2 bg-gray-50 dark:bg-gray-700 rounded">
                    <p>• Non-electrolytes (sugar, urea): <strong>i = 1</strong></p>
                  </div>
                  <div className="p-2 bg-gray-50 dark:bg-gray-700 rounded">
                    <p>• NaCl, MgSO₄: <strong>i = 2</strong></p>
                  </div>
                  <div className="p-2 bg-gray-50 dark:bg-gray-700 rounded">
                    <p>• CaCl₂, Na₂SO₄: <strong>i = 3</strong></p>
                  </div>
                  <div className="p-2 bg-gray-50 dark:bg-gray-700 rounded">
                    <p>• AlCl₃: <strong>i = 4</strong></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Real-World Applications
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-tertiary-500 mr-2">•</span>
                  <span className="text-sm"><strong>De-icing:</strong> Salt lowers water&apos;s freezing point</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tertiary-500 mr-2">•</span>
                  <span className="text-sm"><strong>Antifreeze:</strong> Ethylene glycol in car radiators</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tertiary-500 mr-2">•</span>
                  <span className="text-sm"><strong>Cooking:</strong> Salting water affects boiling point</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tertiary-500 mr-2">•</span>
                  <span className="text-sm"><strong>Biology:</strong> Osmosis in cells and kidneys</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Example: Freezing Point Depression
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="font-semibold mb-2">Problem:</p>
                <p className="text-sm">
                  What is the freezing point of a solution made by dissolving 
                  58.5 g of NaCl (1.0 mol) in 1.0 kg of water?
                </p>
              </div>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <p className="font-semibold mb-2 text-blue-900 dark:text-blue-100">Solution:</p>
                <div className="text-sm space-y-2 text-blue-800 dark:text-blue-200">
                  <p>1. Molality: m = 1.0 mol / 1.0 kg = 1.0 m</p>
                  <p>2. van&apos;t Hoff factor for NaCl: i = 2 (Na⁺ + Cl⁻)</p>
                  <p>3. Kf for water = 1.86 °C·kg/mol</p>
                  <p>4. ΔTf = i·Kf·m = (2)(1.86)(1.0)</p>
                  <p>5. ΔTf = 3.72°C</p>
                  <p>6. New freezing point = 0°C - 3.72°C</p>
                </div>
              </div>

              <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
                <p className="text-sm font-semibold text-green-900 dark:text-green-100">
                  Freezing Point = -3.72°C
                </p>
                <p className="text-sm text-green-800 dark:text-green-200 mt-1">
                  This is why salt is used to melt ice on roads!
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Example: Boiling Point Elevation
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="font-semibold mb-2">Problem:</p>
                <p className="text-sm">
                  Calculate the boiling point of a solution containing 
                  0.5 mol of sugar (C₁₂H₂₂O₁₁) in 1.0 kg of water.
                </p>
              </div>
              
              <div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                <p className="font-semibold mb-2 text-purple-900 dark:text-purple-100">Solution:</p>
                <div className="text-sm space-y-2 text-purple-800 dark:text-purple-200">
                  <p>1. Molality: m = 0.5 mol / 1.0 kg = 0.5 m</p>
                  <p>2. van&apos;t Hoff factor for sugar: i = 1 (non-electrolyte)</p>
                  <p>3. Kb for water = 0.512 °C·kg/mol</p>
                  <p>4. ΔTb = i·Kb·m = (1)(0.512)(0.5)</p>
                  <p>5. ΔTb = 0.256°C</p>
                  <p>6. New boiling point = 100°C + 0.256°C</p>
                </div>
              </div>

              <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
                <p className="text-sm font-semibold text-green-900 dark:text-green-100">
                  Boiling Point = 100.256°C
                </p>
                <p className="text-sm text-green-800 dark:text-green-200 mt-1">
                  The effect is small but measurable in cooking
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Osmotic Pressure in Biology
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-red-50 dark:bg-red-900/30 rounded-lg">
                <h3 className="font-semibold text-red-900 dark:text-red-100 mb-2">Red Blood Cells</h3>
                <p className="text-sm text-red-800 dark:text-red-200">
                  <strong>Isotonic Solution (0.9% NaCl):</strong> Cell maintains shape
                  <br />
                  <strong>Hypotonic (pure water):</strong> Cell swells and bursts (hemolysis)
                  <br />
                  <strong>Hypertonic (high salt):</strong> Cell shrinks (crenation)
                </p>
              </div>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Plant Cells</h3>
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  Turgor pressure from osmosis keeps plants rigid. 
                  When water is scarce, cells lose water (plasmolysis) and the plant wilts.
                </p>
              </div>
            </div>

            <div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
              <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">Example Calculation:</h3>
              <div className="text-sm text-purple-800 dark:text-purple-200 space-y-2">
                <p>Osmotic pressure of 0.15 M glucose at 37°C (body temperature):</p>
                <p className="mt-2">π = i·M·R·T</p>
                <p>π = (1)(0.15 M)(0.0821 L·atm/(mol·K))(310 K)</p>
                <p>π = 3.82 atm</p>
                <p className="mt-2 font-semibold">
                  This significant pressure drives water movement across cell membranes!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Key Concepts & Relationships
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Molality vs Molarity:</h3>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• <strong>Molality (m):</strong> mol solute / kg solvent</li>
                <li>• <strong>Molarity (M):</strong> mol solute / L solution</li>
                <li>• Molality is temperature-independent</li>
                <li>• For dilute aqueous solutions, m ≈ M</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Electrolytes vs Non-electrolytes:</h3>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Non-electrolytes (sugar): Don&apos;t dissociate, i = 1</li>
                <li>• Strong electrolytes (NaCl): Fully dissociate</li>
                <li>• Weak electrolytes: Partially dissociate, i &lt; theoretical</li>
                <li>• Greater i = larger colligative effect</li>
              </ul>
            </div>
          </div>
        </div>
      </div>      </div>
      <Footer />
    </>
  );
}