import CellPotentialCalculator from '@/components/calculators/CellPotentialCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata = {
  title: 'Electrochemical Cell Potential Calculator | Chemistry Calculators',
  description: 'Calculate standard and non-standard cell potentials for galvanic and electrolytic cells. Apply the Nernst equation for concentration effects.',
  keywords: 'cell potential, galvanic cell, voltaic cell, Nernst equation, electrochemistry, reduction potential, oxidation',
  alternates: {
    canonical: 'https://chemsolved.com/electrochemistry-calculators/cell-potential-calculator',
  },
};

export default function CellPotentialCalculatorPage() {  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-tertiary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Electrochemical Cell Potential Calculator
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Calculate voltage for galvanic cells and apply the Nernst equation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CellPotentialCalculator />
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Related Calculators</h3>
              <div className="space-y-3">
                <a href="/electrochemistry-calculators/nernst-equation-calculator" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors">
                  <div className="font-semibold text-gray-900 dark:text-white">Nernst Equation</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Calculate cell potential under non-standard conditions</div>
                </a>
                <a href="/electrochemistry-calculators/electrolysis-calculator" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors">
                  <div className="font-semibold text-gray-900 dark:text-white">Electrolysis</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Calculate mass deposited in electrolysis</div>
                </a>
                <a href="/redox-calculators/oxidation-number-calculator" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors">
                  <div className="font-semibold text-gray-900 dark:text-white">Oxidation Numbers</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Determine oxidation states</div>
                </a>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">📐 Related Formulas</h3>
                <div className="space-y-3">
                  <a href="/chemistry-formulas/cell-potential-formula" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors">
                    <div className="font-semibold text-gray-900 dark:text-white">Cell Potential Formula</div>
                  </a>
                  <a href="/chemistry-formulas/nernst-equation" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors">
                    <div className="font-semibold text-gray-900 dark:text-white">Nernst Equation</div>
                  </a>
                </div>
              </div>
              <a href="/electrochemistry-calculators" className="block mt-4 text-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium">
                All Electrochemistry Calculators →
              </a>
            </div>
          </div>
        </div>

        {/* Educational Content */}
        <div className="mt-12 space-y-8">
          {/* What is Cell Potential? */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              What is Cell Potential?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Cell potential</strong> (also called electromotive force or EMF) is the voltage 
              difference between two half-cells in an electrochemical cell. It measures the driving force 
              for the electron transfer reaction.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mb-4">
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Standard Cell Potential Formula:</h3>
              <p className="text-blue-800 dark:text-blue-200 font-mono text-xl mb-3">
                E°_cell = E°_cathode - E°_anode
              </p>
              <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                <li>• <strong>E°_cell</strong> = standard cell potential (V, volts)</li>
                <li>• <strong>E°_cathode</strong> = standard reduction potential at cathode (V)</li>
                <li>• <strong>E°_anode</strong> = standard reduction potential at anode (V)</li>
                <li>• Standard conditions: 25°C, 1 M concentrations, 1 atm pressure</li>
              </ul>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Nernst Equation (Non-Standard):</h3>
              <p className="text-purple-800 dark:text-purple-200 font-mono text-lg mb-2">
                E_cell = E°_cell - (RT/nF)ln(Q)
              </p>
              <p className="text-purple-800 dark:text-purple-200 font-mono text-sm">
                At 298 K: E = E° - (0.0592/n)log(Q)
              </p>
              <ul className="text-sm text-purple-800 dark:text-purple-200 mt-2 space-y-1">
                <li>• <strong>R</strong> = 8.314 J/(mol·K) (gas constant)</li>
                <li>• <strong>T</strong> = temperature (K)</li>
                <li>• <strong>n</strong> = moles of electrons transferred</li>
                <li>• <strong>F</strong> = 96,485 C/mol (Faraday constant)</li>
                <li>• <strong>Q</strong> = reaction quotient = [products]/[reactants]</li>
              </ul>
            </div>
          </section>

          {/* Cathode vs Anode */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Cathode vs. Anode: Key Differences
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-xl">
                  ⊕ Cathode (Positive Electrode)
                </h3>
                <ul className="text-sm text-green-800 dark:text-green-200 space-y-2">
                  <li>• <strong>Process:</strong> Reduction (gain of electrons)</li>
                  <li>• <strong>Charge:</strong> Positive in galvanic cells</li>
                  <li>• <strong>Electron flow:</strong> INTO the cathode</li>
                  <li>• <strong>Half-reaction:</strong> M⁺ + e⁻ → M</li>
                  <li>• <strong>Potential:</strong> Higher E° value</li>
                  <li>• <strong>Example:</strong> Cu²⁺ + 2e⁻ → Cu (E° = +0.34 V)</li>
                </ul>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-red-900 dark:text-red-100 mb-2 text-xl">
                  ⊖ Anode (Negative Electrode)
                </h3>
                <ul className="text-sm text-red-800 dark:text-red-200 space-y-2">
                  <li>• <strong>Process:</strong> Oxidation (loss of electrons)</li>
                  <li>• <strong>Charge:</strong> Negative in galvanic cells</li>
                  <li>• <strong>Electron flow:</strong> OUT OF the anode</li>
                  <li>• <strong>Half-reaction:</strong> M → M⁺ + e⁻</li>
                  <li>• <strong>Potential:</strong> Lower E° value</li>
                  <li>• <strong>Example:</strong> Zn → Zn²⁺ + 2e⁻ (E° = -0.76 V)</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                <strong>Memory Aid:</strong> "Red Cat" and "An Ox" - <strong>Red</strong>uction at 
                <strong>Cat</strong>hode, <strong>An</strong>ode for <strong>Ox</strong>idation
              </p>
            </div>
          </section>

          {/* Standard Reduction Potentials */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Standard Reduction Potentials Table
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              These values are measured relative to the Standard Hydrogen Electrode (SHE), which is 
              defined as 0.00 V.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th className="p-2 text-left">Half-Reaction (Reduction)</th>
                    <th className="p-2 text-right">E° (V)</th>
                    <th className="p-2 text-left">Category</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                  <tr>
                    <td className="p-2 font-mono text-xs">F₂ + 2e⁻ → 2F⁻</td>
                    <td className="p-2 text-right font-bold text-green-600">+2.87</td>
                    <td className="p-2 text-xs">Strong oxidizer</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono text-xs">Au³⁺ + 3e⁻ → Au</td>
                    <td className="p-2 text-right font-bold text-green-600">+1.50</td>
                    <td className="p-2 text-xs">Noble metal</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono text-xs">Cl₂ + 2e⁻ → 2Cl⁻</td>
                    <td className="p-2 text-right font-bold text-green-600">+1.36</td>
                    <td className="p-2 text-xs">Halogen</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono text-xs">Br₂ + 2e⁻ → 2Br⁻</td>
                    <td className="p-2 text-right font-bold">+1.07</td>
                    <td className="p-2 text-xs">Halogen</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono text-xs">Ag⁺ + e⁻ → Ag</td>
                    <td className="p-2 text-right font-bold">+0.80</td>
                    <td className="p-2 text-xs">Noble metal</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono text-xs">Cu²⁺ + 2e⁻ → Cu</td>
                    <td className="p-2 text-right font-bold">+0.34</td>
                    <td className="p-2 text-xs">Transition metal</td>
                  </tr>
                  <tr className="bg-blue-50 dark:bg-blue-900/20">
                    <td className="p-2 font-mono text-xs font-bold">2H⁺ + 2e⁻ → H₂</td>
                    <td className="p-2 text-right font-bold text-blue-600">0.00</td>
                    <td className="p-2 text-xs font-bold">Reference (SHE)</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono text-xs">Pb²⁺ + 2e⁻ → Pb</td>
                    <td className="p-2 text-right font-bold">-0.13</td>
                    <td className="p-2 text-xs">Active metal</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono text-xs">Ni²⁺ + 2e⁻ → Ni</td>
                    <td className="p-2 text-right font-bold">-0.26</td>
                    <td className="p-2 text-xs">Transition metal</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono text-xs">Fe²⁺ + 2e⁻ → Fe</td>
                    <td className="p-2 text-right font-bold">-0.45</td>
                    <td className="p-2 text-xs">Transition metal</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono text-xs">Zn²⁺ + 2e⁻ → Zn</td>
                    <td className="p-2 text-right font-bold text-red-600">-0.76</td>
                    <td className="p-2 text-xs">Active metal</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono text-xs">Al³⁺ + 3e⁻ → Al</td>
                    <td className="p-2 text-right font-bold text-red-600">-1.66</td>
                    <td className="p-2 text-xs">Reactive metal</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono text-xs">Na⁺ + e⁻ → Na</td>
                    <td className="p-2 text-right font-bold text-red-600">-2.71</td>
                    <td className="p-2 text-xs">Alkali metal</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono text-xs">Li⁺ + e⁻ → Li</td>
                    <td className="p-2 text-right font-bold text-red-600">-3.04</td>
                    <td className="p-2 text-xs">Strong reducer</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded">
                <p className="text-sm text-green-800 dark:text-green-200">
                  <strong>Positive E°:</strong> Strong oxidizing agents (good at gaining electrons). 
                  Prefer to be reduced.
                </p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/30 p-3 rounded">
                <p className="text-sm text-red-800 dark:text-red-200">
                  <strong>Negative E°:</strong> Strong reducing agents (good at losing electrons). 
                  Prefer to be oxidized.
                </p>
              </div>
            </div>
          </section>

          {/* Worked Example */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Worked Example: Daniell Cell (Zn-Cu)
            </h2>

            <div className="space-y-4">
              <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
                  Problem:
                </h3>
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                  Calculate the standard cell potential for a galvanic cell with zinc and copper electrodes.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg space-y-3">
                <h3 className="font-semibold text-gray-900 dark:text-white">Solution:</h3>
                
                <div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    <strong>Step 1:</strong> Identify the half-reactions and their E° values
                  </p>
                  <div className="text-sm text-gray-700 dark:text-gray-300 font-mono bg-white dark:bg-gray-800 p-3 rounded space-y-1">
                    <p>Cu²⁺ + 2e⁻ → Cu, E° = +0.34 V</p>
                    <p>Zn²⁺ + 2e⁻ → Zn, E° = -0.76 V</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    <strong>Step 2:</strong> Determine which is cathode (higher E°) and anode (lower E°)
                  </p>
                  <div className="text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 p-3 rounded">
                    <p>Cathode (reduction): Cu²⁺ + 2e⁻ → Cu (E° = +0.34 V)</p>
                    <p>Anode (oxidation): Zn → Zn²⁺ + 2e⁻ (E° = -0.76 V)</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    <strong>Step 3:</strong> Calculate E°_cell
                  </p>
                  <div className="text-sm text-gray-700 dark:text-gray-300 font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    <p>E°_cell = E°_cathode - E°_anode</p>
                    <p>E°_cell = (+0.34 V) - (-0.76 V)</p>
                    <p className="text-tertiary-600 dark:text-tertiary-400 font-bold">
                      E°_cell = +1.10 V
                    </p>
                  </div>
                </div>

                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded">
                  <p className="text-sm text-green-800 dark:text-green-200">
                    <strong>Interpretation:</strong> Positive E°_cell (+1.10 V) means the reaction is 
                    spontaneous. This cell will produce electricity! The Daniell cell is one of the 
                    first practical batteries.
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    <strong>Overall Cell Reaction:</strong>
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)
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
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">🔋 Batteries</h3>
                <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                  <li>• Alkaline batteries (Zn-MnO₂)</li>
                  <li>• Lithium-ion batteries (Li-CoO₂)</li>
                  <li>• Lead-acid car batteries (Pb-PbO₂)</li>
                  <li>• Silver oxide watch batteries (Zn-Ag₂O)</li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">⚡ Fuel Cells</h3>
                <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                  <li>• Hydrogen fuel cells (H₂-O₂)</li>
                  <li>• Electric vehicle power</li>
                  <li>• Spacecraft energy systems</li>
                  <li>• Backup power generation</li>
                </ul>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">🏭 Industrial</h3>
                <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-1">
                  <li>• Electroplating (coating metals)</li>
                  <li>• Corrosion protection (sacrificial anodes)</li>
                  <li>• Chlorine production (chlor-alkali process)</li>
                  <li>• Aluminum refining (Hall-Héroult process)</li>
                </ul>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">🧪 Analytical</h3>
                <ul className="text-sm text-orange-800 dark:text-orange-200 space-y-1">
                  <li>• pH meters (glass electrodes)</li>
                  <li>• Ion-selective electrodes</li>
                  <li>• Glucose sensors (diabetic monitoring)</li>
                  <li>• Oxygen sensors (medical, automotive)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Spontaneity and Gibbs Free Energy */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Relationship to Gibbs Free Energy
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Cell potential is directly related to the thermodynamic spontaneity of a reaction through 
              Gibbs free energy.
            </p>

            <div className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg mb-4">
              <h3 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">
                Gibbs Free Energy Equation:
              </h3>
              <p className="text-indigo-800 dark:text-indigo-200 font-mono text-xl mb-3">
                ΔG° = -nFE°_cell
              </p>
              <ul className="text-sm text-indigo-800 dark:text-indigo-200 space-y-1">
                <li>• <strong>ΔG°</strong> = standard Gibbs free energy change (J or kJ)</li>
                <li>• <strong>n</strong> = moles of electrons transferred</li>
                <li>• <strong>F</strong> = 96,485 C/mol (Faraday constant)</li>
                <li>• <strong>E°_cell</strong> = standard cell potential (V)</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded">
                <p className="font-semibold text-green-900 dark:text-green-100 mb-1">
                  E°_cell &gt; 0
                </p>
                <p className="text-xs text-green-800 dark:text-green-200">
                  ΔG° &lt; 0: Spontaneous (galvanic cell produces voltage)
                </p>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/30 p-3 rounded">
                <p className="font-semibold text-yellow-900 dark:text-yellow-100 mb-1">
                  E°_cell = 0
                </p>
                <p className="text-xs text-yellow-800 dark:text-yellow-200">
                  ΔG° = 0: At equilibrium (no net reaction)
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 p-3 rounded">
                <p className="font-semibold text-red-900 dark:text-red-100 mb-1">
                  E°_cell &lt; 0
                </p>
                <p className="text-xs text-red-800 dark:text-red-200">
                  ΔG° &gt; 0: Non-spontaneous (needs external voltage - electrolytic cell)
                </p>
              </div>
            </div>

            <div className="mt-4 bg-teal-50 dark:bg-teal-900/30 p-4 rounded-lg">
              <p className="text-sm text-teal-800 dark:text-teal-200">
                <strong>Example:</strong> For the Daniell cell (E° = 1.10 V, n = 2):<br />
                ΔG° = -2 × 96,485 × 1.10 = -212,267 J = -212.3 kJ/mol<br />
                Large negative ΔG° confirms highly spontaneous reaction!
              </p>
            </div>
          </section>

          {/* Nernst Equation Applications */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Nernst Equation: Non-Standard Conditions
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The Nernst equation adjusts the cell potential for concentrations different from 1 M, 
              temperatures other than 25°C, and pressures other than 1 atm.
            </p>

            <div className="space-y-4">
              <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">
                  General Form:
                </h3>
                <p className="text-purple-800 dark:text-purple-200 font-mono text-lg mb-2">
                  E_cell = E°_cell - (RT/nF)ln(Q)
                </p>
                <p className="text-sm text-purple-800 dark:text-purple-200">
                  Where Q is the reaction quotient: Q = [products]^coeff / [reactants]^coeff
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  Simplified Form at 298 K (25°C):
                </h3>
                <p className="text-blue-800 dark:text-blue-200 font-mono text-lg mb-2">
                  E = E° - (0.0592/n)log(Q)
                </p>
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  Most commonly used in chemistry courses. Uses log base 10.
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                  Key Insights:
                </h3>
                <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                  <li>• As products accumulate (Q increases), cell potential decreases</li>
                  <li>• When Q = 1 (standard conditions), E = E°</li>
                  <li>• At equilibrium, E = 0 and Q = K_eq</li>
                  <li>• Can calculate equilibrium constant: E° = (0.0592/n)log(K)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Important Notes */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Important Considerations
            </h2>

            <div className="space-y-4">
              <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
                  ⚠️ E° Values are for Reduction
                </h3>
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                  All standard potentials in tables are reduction potentials. Even for the anode 
                  (where oxidation occurs), use the tabulated reduction potential in the formula 
                  E°_cell = E°_cathode - E°_anode. Don't flip the sign of the anode potential!
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-red-900 dark:text-red-100 mb-2">
                  🔄 Don't Multiply E° by Coefficients
                </h3>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Unlike ΔG or ΔH, cell potential is an intensive property. Even if you multiply 
                  the half-reaction by 2, the E° value stays the same. It's a potential difference, 
                  not a total amount.
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  📊 Standard Conditions
                </h3>
                <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                  <li>• Temperature: 25°C (298 K)</li>
                  <li>• Concentration: 1 M for all aqueous species</li>
                  <li>• Pressure: 1 atm for gases</li>
                  <li>• Activity: Pure solids and liquids have activity = 1</li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                  🔋 Battery Lifetime
                </h3>
                <p className="text-sm text-green-800 dark:text-green-200">
                  As a battery discharges, reactant concentrations decrease and product concentrations 
                  increase. By the Nernst equation, this lowers the cell potential until E = 0 at 
                  equilibrium (dead battery).
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* Structured Data - SoftwareApplication */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Cell Potential Calculator",
            "description": "Cell Potential Calculator on ChemSolved",
            "url": "https://chemsolved.com/electrochemistry-calculators/cell-potential-calculator",
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
                "name": "Cell Potential Calculator",
                "item": "https://chemsolved.com/electrochemistry-calculators/cell-potential-calculator"
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