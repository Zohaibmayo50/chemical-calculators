import { Metadata } from 'next';
import EntropyCalculator from '@/components/calculators/EntropyCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: "Entropy Calculator | ΔS° | Reaction Spontaneity",
  description: "Calculate entropy change (ΔS°) for chemical reactions. Essential for thermodynamics, spontaneity predictions, and Gibbs free energy calculations.",
  keywords: ['entropy', 'entropy change', 'delta s', 'thermodynamics', 'spontaneity', 'disorder', 'second law', 'standard entropy'],
};

export default function EntropyCalculatorPage() {  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Entropy Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Calculate entropy change (ΔS°) for chemical reactions and understand disorder in thermodynamic processes
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <EntropyCalculator />
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Understanding Entropy
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300">
                  Entropy (S) is a measure of disorder or randomness in a system. The Second Law of Thermodynamics
                  states that the entropy of the universe always increases in spontaneous processes.
                </p>
                <div className="my-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <p className="font-semibold text-blue-900 dark:text-blue-100">ΔS° = Σ(S°<sub>products</sub>) - Σ(S°<sub>reactants</sub>)</p>
                  <ul className="text-sm mt-2 space-y-1 text-blue-800 dark:text-blue-200">
                    <li>S° = standard molar entropy</li>
                    <li>Units: J/(mol·K)</li>
                    <li>Measured at 25°C, 1 atm</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Entropy Trends
              </h3>
              <div className="prose dark:prose-invert max-w-none">
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">↑</span>
                    <span>Gas &gt; Liquid &gt; Solid</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">↑</span>
                    <span>Higher temperature = higher entropy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">↑</span>
                    <span>More moles of gas = higher entropy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">↑</span>
                    <span>Larger, more complex molecules = higher entropy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">↑</span>
                    <span>Dissolved solutes = higher entropy</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Where It&apos;s Used
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-tertiary-500 mr-2">•</span>
                  <span className="text-sm"><strong>Gibbs Free Energy:</strong> ΔG = ΔH - TΔS determines spontaneity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tertiary-500 mr-2">•</span>
                  <span className="text-sm"><strong>Equilibrium:</strong> Understanding reaction direction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tertiary-500 mr-2">•</span>
                  <span className="text-sm"><strong>Phase Changes:</strong> Melting, boiling, sublimation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tertiary-500 mr-2">•</span>
                  <span className="text-sm"><strong>Chemical Engineering:</strong> Process optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Example Calculation
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg mb-4">
                <p className="font-semibold text-gray-900 dark:text-white mb-2">Problem:</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Calculate ΔS° for: 2H₂(g) + O₂(g) → 2H₂O(l)
                </p>
              </div>

              <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <div>
                  <p className="font-semibold mb-1">Step 1: Find S° values</p>
                  <p className="font-mono bg-gray-50 dark:bg-gray-700 p-2 rounded">
                    S°[H₂(g)] = 130.7 J/(mol·K)<br />
                    S°[O₂(g)] = 205.2 J/(mol·K)<br />
                    S°[H₂O(l)] = 69.9 J/(mol·K)
                  </p>
                </div>

                <div>
                  <p className="font-semibold mb-1">Step 2: Calculate products sum</p>
                  <p className="font-mono bg-gray-50 dark:bg-gray-700 p-2 rounded">
                    Σ(S°<sub>products</sub>) = 2 × 69.9<br />
                    = 139.8 J/(mol·K)
                  </p>
                </div>

                <div>
                  <p className="font-semibold mb-1">Step 3: Calculate reactants sum</p>
                  <p className="font-mono bg-gray-50 dark:bg-gray-700 p-2 rounded">
                    Σ(S°<sub>reactants</sub>) = 2(130.7) + 1(205.2)<br />
                    = 261.4 + 205.2 = 466.6 J/(mol·K)
                  </p>
                </div>

                <div>
                  <p className="font-semibold mb-1">Step 4: Calculate ΔS°</p>
                  <p className="font-mono bg-gray-50 dark:bg-gray-700 p-2 rounded">
                    ΔS° = 139.8 - 466.6<br />
                    = -326.8 J/(mol·K)
                  </p>
                </div>

                <div className="p-3 bg-tertiary-50 dark:bg-tertiary-900/30 rounded-lg">
                  <p className="font-semibold text-tertiary-900 dark:text-tertiary-100">Result:</p>
                  <p className="text-tertiary-800 dark:text-tertiary-200">
                    ΔS° is negative because 3 moles of gas form 2 moles of liquid (decreased disorder).
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Predicting ΔS° Sign
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-300 dark:border-gray-600">
                    <th className="text-left py-2 text-gray-900 dark:text-white">Change</th>
                    <th className="text-center py-2 text-gray-900 dark:text-white">ΔS° Sign</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2">Gas moles increase</td>
                    <td className="text-center py-2"><span className="text-green-600 dark:text-green-400 font-bold">+</span></td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2">Gas moles decrease</td>
                    <td className="text-center py-2"><span className="text-red-600 dark:text-red-400 font-bold">-</span></td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2">Solid → Liquid → Gas</td>
                    <td className="text-center py-2"><span className="text-green-600 dark:text-green-400 font-bold">+</span></td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2">Gas → Liquid → Solid</td>
                    <td className="text-center py-2"><span className="text-red-600 dark:text-red-400 font-bold">-</span></td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2">Dissolving (usually)</td>
                    <td className="text-center py-2"><span className="text-green-600 dark:text-green-400 font-bold">+</span></td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2">Simple → Complex molecules</td>
                    <td className="text-center py-2"><span className="text-green-600 dark:text-green-400 font-bold">+</span></td>
                  </tr>
                </tbody>
              </table>

              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Quick Rule:</p>
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  If Δn<sub>gas</sub> &gt; 0 (more gas moles produced), ΔS° is usually positive.
                  If Δn<sub>gas</sub> &lt; 0 (fewer gas moles produced), ΔS° is usually negative.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Standard Molar Entropy Values (S° at 25°C, 1 atm)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                  <th className="text-left py-3 text-gray-900 dark:text-white">Substance</th>
                  <th className="text-center py-3 text-gray-900 dark:text-white">Phase</th>
                  <th className="text-center py-3 text-gray-900 dark:text-white">S° [J/(mol·K)]</th>
                  <th className="text-left py-3 text-gray-900 dark:text-white">Note</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 dark:text-gray-300">
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 font-semibold">H₂</td>
                  <td className="text-center py-3">gas</td>
                  <td className="text-center py-3">130.7</td>
                  <td className="py-3 text-xs">Diatomic gas</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 font-semibold">O₂</td>
                  <td className="text-center py-3">gas</td>
                  <td className="text-center py-3">205.2</td>
                  <td className="py-3 text-xs">Diatomic gas</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 font-semibold">N₂</td>
                  <td className="text-center py-3">gas</td>
                  <td className="text-center py-3">191.6</td>
                  <td className="py-3 text-xs">Diatomic gas</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 font-semibold">CO₂</td>
                  <td className="text-center py-3">gas</td>
                  <td className="text-center py-3">213.8</td>
                  <td className="py-3 text-xs">Linear molecule</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 font-semibold">H₂O</td>
                  <td className="text-center py-3">liquid</td>
                  <td className="text-center py-3">69.9</td>
                  <td className="py-3 text-xs">Liquid water</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 font-semibold">H₂O</td>
                  <td className="text-center py-3">gas</td>
                  <td className="text-center py-3">188.8</td>
                  <td className="py-3 text-xs">Steam</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 font-semibold">NH₃</td>
                  <td className="text-center py-3">gas</td>
                  <td className="text-center py-3">192.8</td>
                  <td className="py-3 text-xs">Ammonia</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 font-semibold">CH₄</td>
                  <td className="text-center py-3">gas</td>
                  <td className="text-center py-3">186.3</td>
                  <td className="py-3 text-xs">Methane</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 font-semibold">C(graphite)</td>
                  <td className="text-center py-3">solid</td>
                  <td className="text-center py-3">5.7</td>
                  <td className="py-3 text-xs">Very ordered solid</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 font-semibold">NaCl</td>
                  <td className="text-center py-3">solid</td>
                  <td className="text-center py-3">72.1</td>
                  <td className="py-3 text-xs">Ionic solid</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-tertiary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Entropy and Spontaneity
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Second Law of Thermodynamics:</h3>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-4">
                <p className="font-mono text-sm text-gray-900 dark:text-white">ΔS<sub>universe</sub> = ΔS<sub>system</sub> + ΔS<sub>surroundings</sub></p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                  For spontaneous processes: ΔS<sub>universe</sub> &gt; 0
                </p>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Universe entropy always increases</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>System entropy can decrease if surroundings entropy increases more</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Gibbs Free Energy Connection:</h3>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-4">
                <p className="font-mono text-sm text-gray-900 dark:text-white">ΔG = ΔH - TΔS</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                  Spontaneous when ΔG &lt; 0
                </p>
              </div>
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-gray-300 dark:border-gray-600">
                    <th className="text-left py-1 text-gray-900 dark:text-white">ΔH</th>
                    <th className="text-left py-1 text-gray-900 dark:text-white">ΔS</th>
                    <th className="text-left py-1 text-gray-900 dark:text-white">Spontaneous?</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-1">-</td>
                    <td className="py-1">+</td>
                    <td className="py-1">Always</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-1">+</td>
                    <td className="py-1">-</td>
                    <td className="py-1">Never</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-1">-</td>
                    <td className="py-1">-</td>
                    <td className="py-1">Low T only</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-1">+</td>
                    <td className="py-1">+</td>
                    <td className="py-1">High T only</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Related Calculators */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mt-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              🔗 Related Calculators
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/thermodynamics-calculators/bond-energy-calculator"
                  className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                >
                  <span>→</span>
                  <span>Bond Energy Calculator</span>
                </a>
              </li>
              <li>
                <a
                  href="/thermodynamics-calculators/hess-law-calculator"
                  className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                >
                  <span>→</span>
                  <span>Hess's Law Calculator</span>
                </a>
              </li>
              <li>
                <a
                  href="/thermodynamics-calculators/calorimetry-calculator"
                  className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                >
                  <span>→</span>
                  <span>Calorimetry Calculator</span>
                </a>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                📐 Related Formulas
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/chemistry-formulas/entropy-formula"
                    className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                  >
                    <span>→</span>
                    <span>Entropy Formula</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/chemistry-formulas/gibbs-free-energy"
                    className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                  >
                    <span>→</span>
                    <span>Gibbs Free Energy Formula</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <a
                href="/thermodynamics-calculators"
                className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
              >
                All Thermodynamics Calculators →
              </a>
            </div>
          </div>
        </div>
      </div>      </div>
      <Footer />
    </>
  );
}