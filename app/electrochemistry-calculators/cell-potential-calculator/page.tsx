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
                <a href="/electrochemistry-calculators/oxidation-number-calculator" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors">
                  <div className="font-semibold text-gray-900 dark:text-white">Oxidation Numbers</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Determine oxidation states</div>
                </a>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">ðŸ“ Related Formulas</h3>
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
                All Electrochemistry Calculators â†’
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
                EÂ°_cell = EÂ°_cathode - EÂ°_anode
              </p>
              <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                <li>â€¢ <strong>EÂ°_cell</strong> = standard cell potential (V, volts)</li>
                <li>â€¢ <strong>EÂ°_cathode</strong> = standard reduction potential at cathode (V)</li>
                <li>â€¢ <strong>EÂ°_anode</strong> = standard reduction potential at anode (V)</li>
                <li>â€¢ Standard conditions: 25Â°C, 1 M concentrations, 1 atm pressure</li>
              </ul>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Nernst Equation (Non-Standard):</h3>
              <p className="text-purple-800 dark:text-purple-200 font-mono text-lg mb-2">
                E_cell = EÂ°_cell - (RT/nF)ln(Q)
              </p>
              <p className="text-purple-800 dark:text-purple-200 font-mono text-sm">
                At 298 K: E = EÂ° - (0.0592/n)log(Q)
              </p>
              <ul className="text-sm text-purple-800 dark:text-purple-200 mt-2 space-y-1">
                <li>â€¢ <strong>R</strong> = 8.314 J/(molÂ·K) (gas constant)</li>
                <li>â€¢ <strong>T</strong> = temperature (K)</li>
                <li>â€¢ <strong>n</strong> = moles of electrons transferred</li>
                <li>â€¢ <strong>F</strong> = 96,485 C/mol (Faraday constant)</li>
                <li>â€¢ <strong>Q</strong> = reaction quotient = [products]/[reactants]</li>
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
                  âŠ• Cathode (Positive Electrode)
                </h3>
                <ul className="text-sm text-green-800 dark:text-green-200 space-y-2">
                  <li>â€¢ <strong>Process:</strong> Reduction (gain of electrons)</li>
                  <li>â€¢ <strong>Charge:</strong> Positive in galvanic cells</li>
                  <li>â€¢ <strong>Electron flow:</strong> INTO the cathode</li>
                  <li>â€¢ <strong>Half-reaction:</strong> Mâº + eâ» â†’ M</li>
                  <li>â€¢ <strong>Potential:</strong> Higher EÂ° value</li>
                  <li>â€¢ <strong>Example:</strong> CuÂ²âº + 2eâ» â†’ Cu (EÂ° = +0.34 V)</li>
                </ul>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-red-900 dark:text-red-100 mb-2 text-xl">
                  âŠ– Anode (Negative Electrode)
                </h3>
                <ul className="text-sm text-red-800 dark:text-red-200 space-y-2">
                  <li>â€¢ <strong>Process:</strong> Oxidation (loss of electrons)</li>
                  <li>â€¢ <strong>Charge:</strong> Negative in galvanic cells</li>
                  <li>â€¢ <strong>Electron flow:</strong> OUT OF the anode</li>
                  <li>â€¢ <strong>Half-reaction:</strong> M â†’ Mâº + eâ»</li>
                  <li>â€¢ <strong>Potential:</strong> Lower EÂ° value</li>
                  <li>â€¢ <strong>Example:</strong> Zn â†’ ZnÂ²âº + 2eâ» (EÂ° = -0.76 V)</li>
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
                    <th className="p-2 text-right">EÂ° (V)</th>
                    <th className="p-2 text-left">Category</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                  <tr>
                    <td className="p-2 font-mono text-xs">Fâ‚‚ + 2eâ» â†’ 2Fâ»</td>
                    <td className="p-2 text-right font-bold text-green-600">+2.87</td>
                    <td className="p-2 text-xs">Strong oxidizer</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono text-xs">AuÂ³âº + 3eâ» â†’ Au</td>
                    <td className="p-2 text-right font-bold text-green-600">+1.50</td>
                    <td className="p-2 text-xs">Noble metal</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono text-xs">Clâ‚‚ + 2eâ» â†’ 2Clâ»</td>
                    <td className="p-2 text-right font-bold text-green-600">+1.36</td>
                    <td className="p-2 text-xs">Halogen</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono text-xs">Brâ‚‚ + 2eâ» â†’ 2Brâ»</td>
                    <td className="p-2 text-right font-bold">+1.07</td>
                    <td className="p-2 text-xs">Halogen</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono text-xs">Agâº + eâ» â†’ Ag</td>
                    <td className="p-2 text-right font-bold">+0.80</td>
                    <td className="p-2 text-xs">Noble metal</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono text-xs">CuÂ²âº + 2eâ» â†’ Cu</td>
                    <td className="p-2 text-right font-bold">+0.34</td>
                    <td className="p-2 text-xs">Transition metal</td>
                  </tr>
                  <tr className="bg-blue-50 dark:bg-blue-900/20">
                    <td className="p-2 font-mono text-xs font-bold">2Hâº + 2eâ» â†’ Hâ‚‚</td>
                    <td className="p-2 text-right font-bold text-blue-600">0.00</td>
                    <td className="p-2 text-xs font-bold">Reference (SHE)</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono text-xs">PbÂ²âº + 2eâ» â†’ Pb</td>
                    <td className="p-2 text-right font-bold">-0.13</td>
                    <td className="p-2 text-xs">Active metal</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono text-xs">NiÂ²âº + 2eâ» â†’ Ni</td>
                    <td className="p-2 text-right font-bold">-0.26</td>
                    <td className="p-2 text-xs">Transition metal</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono text-xs">FeÂ²âº + 2eâ» â†’ Fe</td>
                    <td className="p-2 text-right font-bold">-0.45</td>
                    <td className="p-2 text-xs">Transition metal</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono text-xs">ZnÂ²âº + 2eâ» â†’ Zn</td>
                    <td className="p-2 text-right font-bold text-red-600">-0.76</td>
                    <td className="p-2 text-xs">Active metal</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono text-xs">AlÂ³âº + 3eâ» â†’ Al</td>
                    <td className="p-2 text-right font-bold text-red-600">-1.66</td>
                    <td className="p-2 text-xs">Reactive metal</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono text-xs">Naâº + eâ» â†’ Na</td>
                    <td className="p-2 text-right font-bold text-red-600">-2.71</td>
                    <td className="p-2 text-xs">Alkali metal</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono text-xs">Liâº + eâ» â†’ Li</td>
                    <td className="p-2 text-right font-bold text-red-600">-3.04</td>
                    <td className="p-2 text-xs">Strong reducer</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded">
                <p className="text-sm text-green-800 dark:text-green-200">
                  <strong>Positive EÂ°:</strong> Strong oxidizing agents (good at gaining electrons). 
                  Prefer to be reduced.
                </p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/30 p-3 rounded">
                <p className="text-sm text-red-800 dark:text-red-200">
                  <strong>Negative EÂ°:</strong> Strong reducing agents (good at losing electrons). 
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
                    <strong>Step 1:</strong> Identify the half-reactions and their EÂ° values
                  </p>
                  <div className="text-sm text-gray-700 dark:text-gray-300 font-mono bg-white dark:bg-gray-800 p-3 rounded space-y-1">
                    <p>CuÂ²âº + 2eâ» â†’ Cu, EÂ° = +0.34 V</p>
                    <p>ZnÂ²âº + 2eâ» â†’ Zn, EÂ° = -0.76 V</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    <strong>Step 2:</strong> Determine which is cathode (higher EÂ°) and anode (lower EÂ°)
                  </p>
                  <div className="text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 p-3 rounded">
                    <p>Cathode (reduction): CuÂ²âº + 2eâ» â†’ Cu (EÂ° = +0.34 V)</p>
                    <p>Anode (oxidation): Zn â†’ ZnÂ²âº + 2eâ» (EÂ° = -0.76 V)</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    <strong>Step 3:</strong> Calculate EÂ°_cell
                  </p>
                  <div className="text-sm text-gray-700 dark:text-gray-300 font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    <p>EÂ°_cell = EÂ°_cathode - EÂ°_anode</p>
                    <p>EÂ°_cell = (+0.34 V) - (-0.76 V)</p>
                    <p className="text-tertiary-600 dark:text-tertiary-400 font-bold">
                      EÂ°_cell = +1.10 V
                    </p>
                  </div>
                </div>

                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded">
                  <p className="text-sm text-green-800 dark:text-green-200">
                    <strong>Interpretation:</strong> Positive EÂ°_cell (+1.10 V) means the reaction is 
                    spontaneous. This cell will produce electricity! The Daniell cell is one of the 
                    first practical batteries.
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    <strong>Overall Cell Reaction:</strong>
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 font-mono bg-white dark:bg-gray-800 p-3 rounded">
                    Zn(s) + CuÂ²âº(aq) â†’ ZnÂ²âº(aq) + Cu(s)
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
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">ðŸ”‹ Batteries</h3>
                <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                  <li>â€¢ Alkaline batteries (Zn-MnOâ‚‚)</li>
                  <li>â€¢ Lithium-ion batteries (Li-CoOâ‚‚)</li>
                  <li>â€¢ Lead-acid car batteries (Pb-PbOâ‚‚)</li>
                  <li>â€¢ Silver oxide watch batteries (Zn-Agâ‚‚O)</li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">âš¡ Fuel Cells</h3>
                <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                  <li>â€¢ Hydrogen fuel cells (Hâ‚‚-Oâ‚‚)</li>
                  <li>â€¢ Electric vehicle power</li>
                  <li>â€¢ Spacecraft energy systems</li>
                  <li>â€¢ Backup power generation</li>
                </ul>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">ðŸ­ Industrial</h3>
                <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-1">
                  <li>â€¢ Electroplating (coating metals)</li>
                  <li>â€¢ Corrosion protection (sacrificial anodes)</li>
                  <li>â€¢ Chlorine production (chlor-alkali process)</li>
                  <li>â€¢ Aluminum refining (Hall-HÃ©roult process)</li>
                </ul>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">ðŸ§ª Analytical</h3>
                <ul className="text-sm text-orange-800 dark:text-orange-200 space-y-1">
                  <li>â€¢ pH meters (glass electrodes)</li>
                  <li>â€¢ Ion-selective electrodes</li>
                  <li>â€¢ Glucose sensors (diabetic monitoring)</li>
                  <li>â€¢ Oxygen sensors (medical, automotive)</li>
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
                Î”GÂ° = -nFEÂ°_cell
              </p>
              <ul className="text-sm text-indigo-800 dark:text-indigo-200 space-y-1">
                <li>â€¢ <strong>Î”GÂ°</strong> = standard Gibbs free energy change (J or kJ)</li>
                <li>â€¢ <strong>n</strong> = moles of electrons transferred</li>
                <li>â€¢ <strong>F</strong> = 96,485 C/mol (Faraday constant)</li>
                <li>â€¢ <strong>EÂ°_cell</strong> = standard cell potential (V)</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded">
                <p className="font-semibold text-green-900 dark:text-green-100 mb-1">
                  EÂ°_cell &gt; 0
                </p>
                <p className="text-xs text-green-800 dark:text-green-200">
                  Î”GÂ° &lt; 0: Spontaneous (galvanic cell produces voltage)
                </p>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/30 p-3 rounded">
                <p className="font-semibold text-yellow-900 dark:text-yellow-100 mb-1">
                  EÂ°_cell = 0
                </p>
                <p className="text-xs text-yellow-800 dark:text-yellow-200">
                  Î”GÂ° = 0: At equilibrium (no net reaction)
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 p-3 rounded">
                <p className="font-semibold text-red-900 dark:text-red-100 mb-1">
                  EÂ°_cell &lt; 0
                </p>
                <p className="text-xs text-red-800 dark:text-red-200">
                  Î”GÂ° &gt; 0: Non-spontaneous (needs external voltage - electrolytic cell)
                </p>
              </div>
            </div>

            <div className="mt-4 bg-teal-50 dark:bg-teal-900/30 p-4 rounded-lg">
              <p className="text-sm text-teal-800 dark:text-teal-200">
                <strong>Example:</strong> For the Daniell cell (EÂ° = 1.10 V, n = 2):<br />
                Î”GÂ° = -2 Ã— 96,485 Ã— 1.10 = -212,267 J = -212.3 kJ/mol<br />
                Large negative Î”GÂ° confirms highly spontaneous reaction!
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
              temperatures other than 25Â°C, and pressures other than 1 atm.
            </p>

            <div className="space-y-4">
              <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">
                  General Form:
                </h3>
                <p className="text-purple-800 dark:text-purple-200 font-mono text-lg mb-2">
                  E_cell = EÂ°_cell - (RT/nF)ln(Q)
                </p>
                <p className="text-sm text-purple-800 dark:text-purple-200">
                  Where Q is the reaction quotient: Q = [products]^coeff / [reactants]^coeff
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  Simplified Form at 298 K (25Â°C):
                </h3>
                <p className="text-blue-800 dark:text-blue-200 font-mono text-lg mb-2">
                  E = EÂ° - (0.0592/n)log(Q)
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
                  <li>â€¢ As products accumulate (Q increases), cell potential decreases</li>
                  <li>â€¢ When Q = 1 (standard conditions), E = EÂ°</li>
                  <li>â€¢ At equilibrium, E = 0 and Q = K_eq</li>
                  <li>â€¢ Can calculate equilibrium constant: EÂ° = (0.0592/n)log(K)</li>
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
                  âš ï¸ EÂ° Values are for Reduction
                </h3>
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                  All standard potentials in tables are reduction potentials. Even for the anode 
                  (where oxidation occurs), use the tabulated reduction potential in the formula 
                  EÂ°_cell = EÂ°_cathode - EÂ°_anode. Don't flip the sign of the anode potential!
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-red-900 dark:text-red-100 mb-2">
                  ðŸ”„ Don't Multiply EÂ° by Coefficients
                </h3>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Unlike Î”G or Î”H, cell potential is an intensive property. Even if you multiply 
                  the half-reaction by 2, the EÂ° value stays the same. It's a potential difference, 
                  not a total amount.
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  ðŸ“Š Standard Conditions
                </h3>
                <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                  <li>â€¢ Temperature: 25Â°C (298 K)</li>
                  <li>â€¢ Concentration: 1 M for all aqueous species</li>
                  <li>â€¢ Pressure: 1 atm for gases</li>
                  <li>â€¢ Activity: Pure solids and liquids have activity = 1</li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                  ðŸ”‹ Battery Lifetime
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