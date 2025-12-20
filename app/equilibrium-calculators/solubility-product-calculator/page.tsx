import { Metadata } from 'next';
import SolubilityProductCalculator from '@/components/calculators/SolubilityProductCalculator';

export const metadata: Metadata = {
  title: "Solubility Product Calculator | Ksp | Precipitation",
  description: "Calculate solubility product constant (Ksp), reaction quotient (Qsp), and predict precipitation. Essential for equilibrium chemistry.",
  keywords: ['solubility product', 'Ksp', 'Qsp', 'precipitation', 'molar solubility', 'equilibrium', 'ionic compounds'],
};

export default function SolubilityProductCalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Solubility Product Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Calculate Ksp, predict precipitation, and determine molar solubility
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <SolubilityProductCalculator />
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Understanding Ksp
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300">
                  The solubility product constant (Ksp) describes the equilibrium between 
                  a solid ionic compound and its dissolved ions in a saturated solution.
                </p>
                <div className="my-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <p className="font-semibold text-blue-900 dark:text-blue-100">General Form:</p>
                  <p className="text-sm mt-2 text-blue-800 dark:text-blue-200">
                    M<sub>m</sub>A<sub>n</sub>(s) ⇌ mM<sup>+</sup>(aq) + nA<sup>-</sup>(aq)
                    <br />
                    Ksp = [M<sup>+</sup>]<sup>m</sup>[A<sup>-</sup>]<sup>n</sup>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Precipitation Rules
              </h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-red-50 dark:bg-red-900/30 rounded-lg">
                  <p className="font-semibold text-red-900 dark:text-red-100">Qsp &gt; Ksp</p>
                  <p className="text-xs text-red-800 dark:text-red-200">Supersaturated → Precipitate forms</p>
                </div>
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
                  <p className="font-semibold text-yellow-900 dark:text-yellow-100">Qsp = Ksp</p>
                  <p className="text-xs text-yellow-800 dark:text-yellow-200">Saturated → At equilibrium</p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
                  <p className="font-semibold text-green-900 dark:text-green-100">Qsp &lt; Ksp</p>
                  <p className="text-xs text-green-800 dark:text-green-200">Unsaturated → No precipitation</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Applications
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-tertiary-500 mr-2">•</span>
                  <span className="text-sm"><strong>Qualitative Analysis:</strong> Selective precipitation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tertiary-500 mr-2">•</span>
                  <span className="text-sm"><strong>Water Treatment:</strong> Remove heavy metals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tertiary-500 mr-2">•</span>
                  <span className="text-sm"><strong>Geochemistry:</strong> Mineral formation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tertiary-500 mr-2">•</span>
                  <span className="text-sm"><strong>Medicine:</strong> Kidney stone prevention</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Example: AgCl Precipitation
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="font-semibold mb-2">Problem:</p>
                <p className="text-sm">
                  Will AgCl precipitate if 100 mL of 0.001 M AgNO₃ is mixed with 
                  100 mL of 0.001 M NaCl? (Ksp of AgCl = 1.8×10⁻¹⁰)
                </p>
              </div>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <p className="font-semibold mb-2 text-blue-900 dark:text-blue-100">Solution:</p>
                <div className="text-sm space-y-2 text-blue-800 dark:text-blue-200">
                  <p>1. After mixing, volume = 200 mL</p>
                  <p>2. [Ag⁺] = (0.001 M)(100 mL)/(200 mL) = 5×10⁻⁴ M</p>
                  <p>3. [Cl⁻] = (0.001 M)(100 mL)/(200 mL) = 5×10⁻⁴ M</p>
                  <p>4. Qsp = [Ag⁺][Cl⁻] = (5×10⁻⁴)(5×10⁻⁴)</p>
                  <p>5. Qsp = 2.5×10⁻⁷</p>
                </div>
              </div>

              <div className="p-3 bg-red-50 dark:bg-red-900/30 rounded-lg">
                <p className="text-sm font-semibold text-red-900 dark:text-red-100">
                  Qsp (2.5×10⁻⁷) &gt; Ksp (1.8×10⁻¹⁰)
                </p>
                <p className="text-sm text-red-800 dark:text-red-200 mt-1">
                  ✓ Yes, AgCl will precipitate
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Example: Molar Solubility
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="font-semibold mb-2">Problem:</p>
                <p className="text-sm">
                  Calculate the molar solubility of PbI₂ in pure water. 
                  (Ksp = 7.1×10⁻⁹)
                </p>
              </div>
              
              <div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                <p className="font-semibold mb-2 text-purple-900 dark:text-purple-100">Solution:</p>
                <div className="text-sm space-y-2 text-purple-800 dark:text-purple-200">
                  <p>PbI₂(s) ⇌ Pb²⁺(aq) + 2I⁻(aq)</p>
                  <p>If s = molar solubility:</p>
                  <p>[Pb²⁺] = s, [I⁻] = 2s</p>
                  <p>Ksp = [Pb²⁺][I⁻]² = (s)(2s)² = 4s³</p>
                  <p>7.1×10⁻⁹ = 4s³</p>
                  <p>s³ = 1.775×10⁻⁹</p>
                  <p>s = 1.21×10⁻³ M</p>
                </div>
              </div>

              <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
                <p className="text-sm font-semibold text-green-900 dark:text-green-100">
                  Molar solubility = 1.21×10⁻³ M
                </p>
                <p className="text-sm text-green-800 dark:text-green-200 mt-1">
                  Or 1.21 millimoles per liter
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Common Ksp Values at 25°C
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                  <th className="text-left py-3 text-gray-900 dark:text-white">Compound</th>
                  <th className="text-center py-3 text-gray-900 dark:text-white">Formula</th>
                  <th className="text-center py-3 text-gray-900 dark:text-white">Ksp</th>
                  <th className="text-left py-3 text-gray-900 dark:text-white">Solubility</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 dark:text-gray-300">
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3">Silver chloride</td>
                  <td className="text-center py-3">AgCl</td>
                  <td className="text-center py-3">1.8×10⁻¹⁰</td>
                  <td className="py-3">Very low</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3">Barium sulfate</td>
                  <td className="text-center py-3">BaSO₄</td>
                  <td className="text-center py-3">1.1×10⁻¹⁰</td>
                  <td className="py-3">Very low</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3">Calcium carbonate</td>
                  <td className="text-center py-3">CaCO₃</td>
                  <td className="text-center py-3">3.4×10⁻⁹</td>
                  <td className="py-3">Low</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3">Lead(II) iodide</td>
                  <td className="text-center py-3">PbI₂</td>
                  <td className="text-center py-3">7.1×10⁻⁹</td>
                  <td className="py-3">Low</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3">Silver chromate</td>
                  <td className="text-center py-3">Ag₂CrO₄</td>
                  <td className="text-center py-3">1.1×10⁻¹²</td>
                  <td className="py-3">Very low</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3">Iron(III) hydroxide</td>
                  <td className="text-center py-3">Fe(OH)₃</td>
                  <td className="text-center py-3">2.8×10⁻³⁹</td>
                  <td className="py-3">Extremely low</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3">Calcium phosphate</td>
                  <td className="text-center py-3">Ca₃(PO₄)₂</td>
                  <td className="text-center py-3">2.1×10⁻³³</td>
                  <td className="py-3">Extremely low</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Common Ion Effect
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Concept:</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Adding a common ion (an ion already present in the equilibrium) 
                <strong> decreases the solubility</strong> of a sparingly soluble salt.
              </p>
              <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/30 rounded">
                <p className="text-xs text-blue-800 dark:text-blue-200">
                  Example: AgCl is less soluble in 0.1 M NaCl than in pure water 
                  because of the added Cl⁻ ions.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Le Chatelier&apos;s Principle:</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq)
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Adding Cl⁻ shifts equilibrium left, reducing [Ag⁺] and thus the solubility of AgCl.
              </p>
              <div className="mt-3 p-3 bg-purple-50 dark:bg-purple-900/30 rounded">
                <p className="text-xs text-purple-800 dark:text-purple-200">
                  This principle is used in qualitative analysis to selectively precipitate ions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
