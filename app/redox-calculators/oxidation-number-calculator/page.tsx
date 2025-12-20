import OxidationNumberCalculator from '@/components/calculators/OxidationNumberCalculator';

export const metadata = {
  title: 'Oxidation Number Calculator | Chemistry Calculators',
  description: 'Calculate oxidation numbers (oxidation states) for elements in chemical compounds and ions. Understand redox chemistry and electron transfer.',
  keywords: 'oxidation number, oxidation state, redox calculator, electron transfer, chemistry calculator, valence state',
};

export default function OxidationNumberCalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-tertiary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Oxidation Number Calculator
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Determine oxidation states for elements in compounds and understand redox chemistry
          </p>
        </div>

        <OxidationNumberCalculator />

        {/* Educational Content */}
        <div className="mt-12 space-y-8">
          {/* What is Oxidation Number? */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              What is an Oxidation Number?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              An <strong>oxidation number</strong> (or oxidation state) is a number assigned to an element in a 
              chemical compound that represents the number of electrons lost or gained by an atom of that element. 
              It helps track electron transfer in redox (reduction-oxidation) reactions.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Key Concepts:</h3>
              <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                <li>• <strong>Positive oxidation number:</strong> Element has lost electrons (oxidized)</li>
                <li>• <strong>Negative oxidation number:</strong> Element has gained electrons (reduced)</li>
                <li>• <strong>Zero oxidation number:</strong> Free element or no net electron change</li>
                <li>• <strong>Sum rule:</strong> Sum of oxidation numbers = overall charge of molecule/ion</li>
              </ul>
            </div>
          </section>

          {/* Rules for Assigning Oxidation Numbers */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Rules for Assigning Oxidation Numbers
            </h2>
            
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Rule 1: Free Elements
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  The oxidation number of any free (uncombined) element is <strong>0</strong>.
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Examples: O₂, H₂, N₂, Fe, Cu, S₈ → all have oxidation number 0
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Rule 2: Monatomic Ions
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  The oxidation number of a monatomic ion equals its <strong>charge</strong>.
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Examples: Na⁺ = +1, Cl⁻ = -1, Ca²⁺ = +2, O²⁻ = -2, Al³⁺ = +3
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Rule 3: Hydrogen
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Hydrogen is usually <strong>+1</strong>, except in metal hydrides where it is <strong>-1</strong>.
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    H₂O: H = +1 | HCl: H = +1 | NaH: H = -1 | LiH: H = -1
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Rule 4: Oxygen
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Oxygen is usually <strong>-2</strong>, except in peroxides (-1) and when bonded to fluorine (+2).
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    H₂O: O = -2 | CO₂: O = -2 | H₂O₂: O = -1 | OF₂: O = +2
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Rule 5: Alkali Metals
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Group 1 elements (Li, Na, K, Rb, Cs) are always <strong>+1</strong> in compounds.
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    NaCl: Na = +1 | KBr: K = +1 | Li₂O: Li = +1
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Rule 6: Alkaline Earth Metals
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Group 2 elements (Be, Mg, Ca, Sr, Ba) are always <strong>+2</strong> in compounds.
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    MgCl₂: Mg = +2 | CaO: Ca = +2 | BaSO₄: Ba = +2
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-pink-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Rule 7: Halogens
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Halogens (F, Cl, Br, I) are usually <strong>-1</strong> in binary compounds.
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    HCl: Cl = -1 | NaBr: Br = -1 | But in ClO₃⁻: Cl = +5 (not binary)
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Rule 8: Sum Rule
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  The sum of oxidation numbers must equal:
                </p>
                <ul className="text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
                  <li><strong>0</strong> for neutral molecules</li>
                  <li><strong>The charge</strong> for polyatomic ions</li>
                </ul>
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded mt-2">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    H₂SO₄: (+1)×2 + S + (-2)×4 = 0 → S = +6
                    <br />
                    SO₄²⁻: S + (-2)×4 = -2 → S = +6
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
                  Example 1: Sulfuric Acid (H₂SO₄)
                </h3>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg space-y-2">
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    <strong>Given:</strong> H₂SO₄ is a neutral molecule (charge = 0)
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    <strong>Known:</strong> H = +1, O = -2
                  </p>
                  <p className="font-mono text-sm text-gray-800 dark:text-gray-200">
                    2(+1) + S + 4(-2) = 0
                    <br />
                    2 + S - 8 = 0
                    <br />
                    S = +6
                  </p>
                  <p className="font-semibold text-tertiary-600 dark:text-tertiary-400">
                    Answer: S has oxidation number +6
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-secondary-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Example 2: Dichromate Ion (Cr₂O₇²⁻)
                </h3>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg space-y-2">
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    <strong>Given:</strong> Cr₂O₇²⁻ has charge = -2
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    <strong>Known:</strong> O = -2
                  </p>
                  <p className="font-mono text-sm text-gray-800 dark:text-gray-200">
                    2(Cr) + 7(-2) = -2
                    <br />
                    2Cr - 14 = -2
                    <br />
                    2Cr = +12
                    <br />
                    Cr = +6
                  </p>
                  <p className="font-semibold text-secondary-600 dark:text-secondary-400">
                    Answer: Cr has oxidation number +6
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-primary-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Example 3: Ammonia (NH₃)
                </h3>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg space-y-2">
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    <strong>Given:</strong> NH₃ is neutral (charge = 0)
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    <strong>Known:</strong> H = +1
                  </p>
                  <p className="font-mono text-sm text-gray-800 dark:text-gray-200">
                    N + 3(+1) = 0
                    <br />
                    N + 3 = 0
                    <br />
                    N = -3
                  </p>
                  <p className="font-semibold text-primary-600 dark:text-primary-400">
                    Answer: N has oxidation number -3
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Redox Reactions */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Oxidation Numbers in Redox Reactions
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Oxidation numbers are essential for identifying and balancing <strong>redox reactions</strong> 
              (reduction-oxidation reactions), where electrons are transferred between species.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-red-900 dark:text-red-100 mb-2">
                  🔺 Oxidation
                </h3>
                <ul className="text-sm text-red-800 dark:text-red-200 space-y-1">
                  <li>• <strong>Increase</strong> in oxidation number</li>
                  <li>• <strong>Loss</strong> of electrons</li>
                  <li>• Element becomes more <strong>positive</strong></li>
                  <li>• Example: Fe²⁺ → Fe³⁺ (+2 to +3)</li>
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  🔻 Reduction
                </h3>
                <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                  <li>• <strong>Decrease</strong> in oxidation number</li>
                  <li>• <strong>Gain</strong> of electrons</li>
                  <li>• Element becomes more <strong>negative</strong></li>
                  <li>• Example: Cu²⁺ → Cu (+ 2 to 0)</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">
                Complete Redox Reaction Example:
              </h3>
              <p className="font-mono text-sm text-purple-800 dark:text-purple-200 mb-2">
                Zn + Cu²⁺ → Zn²⁺ + Cu
              </p>
              <div className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                <p>• <strong>Oxidation:</strong> Zn (0) → Zn²⁺ (+2) — loses 2e⁻</p>
                <p>• <strong>Reduction:</strong> Cu²⁺ (+2) → Cu (0) — gains 2e⁻</p>
                <p className="mt-2">Zinc is <strong>oxidized</strong> (reducing agent)</p>
                <p>Copper is <strong>reduced</strong> (oxidizing agent)</p>
              </div>
            </div>
          </section>

          {/* Applications */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Applications of Oxidation Numbers
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">⚡ Electrochemistry</h3>
                <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                  <li>• Battery reactions (Zn/Cu cells)</li>
                  <li>• Electrolysis processes</li>
                  <li>• Corrosion mechanisms</li>
                  <li>• Fuel cells</li>
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">🔬 Analytical Chemistry</h3>
                <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                  <li>• Redox titrations</li>
                  <li>• Identifying oxidizing/reducing agents</li>
                  <li>• Balancing complex equations</li>
                  <li>• Chemical analysis</li>
                </ul>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">🏭 Industrial Chemistry</h3>
                <ul className="text-sm text-yellow-800 dark:text-yellow-200 space-y-1">
                  <li>• Metal extraction and refining</li>
                  <li>• Bleaching processes</li>
                  <li>• Water treatment</li>
                  <li>• Manufacturing chemicals</li>
                </ul>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">🌱 Biological Systems</h3>
                <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-1">
                  <li>• Cellular respiration</li>
                  <li>• Photosynthesis</li>
                  <li>• Enzyme reactions</li>
                  <li>• Metabolic pathways</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Common Oxidation States Table */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Common Oxidation States of Elements
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th className="px-4 py-2 text-left text-gray-900 dark:text-white">Element</th>
                    <th className="px-4 py-2 text-left text-gray-900 dark:text-white">Common States</th>
                    <th className="px-4 py-2 text-left text-gray-900 dark:text-white">Examples</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="px-4 py-2">Nitrogen (N)</td>
                    <td className="px-4 py-2">-3, +3, +5</td>
                    <td className="px-4 py-2">NH₃ (-3), HNO₂ (+3), HNO₃ (+5)</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="px-4 py-2">Sulfur (S)</td>
                    <td className="px-4 py-2">-2, +4, +6</td>
                    <td className="px-4 py-2">H₂S (-2), SO₂ (+4), H₂SO₄ (+6)</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="px-4 py-2">Chlorine (Cl)</td>
                    <td className="px-4 py-2">-1, +1, +3, +5, +7</td>
                    <td className="px-4 py-2">HCl (-1), ClO₃⁻ (+5), ClO₄⁻ (+7)</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="px-4 py-2">Iron (Fe)</td>
                    <td className="px-4 py-2">+2, +3</td>
                    <td className="px-4 py-2">FeCl₂ (+2), Fe₂O₃ (+3)</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="px-4 py-2">Manganese (Mn)</td>
                    <td className="px-4 py-2">+2, +4, +7</td>
                    <td className="px-4 py-2">MnCl₂ (+2), MnO₂ (+4), KMnO₄ (+7)</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="px-4 py-2">Chromium (Cr)</td>
                    <td className="px-4 py-2">+3, +6</td>
                    <td className="px-4 py-2">Cr₂O₃ (+3), K₂Cr₂O₇ (+6)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
