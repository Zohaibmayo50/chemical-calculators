import FormalChargeCalculator from '@/components/calculators/FormalChargeCalculator';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: 'Formal Charge Calculator - Lewis Structures & Resonance | ChemCalc',
  description: 'Calculate formal charge using FC = V - N - B/2 for Lewis structures and resonance forms. Includes common atoms, molecules, and stability guidelines.',
  keywords: 'formal charge calculator, Lewis structures, resonance, electron distribution, molecular structure, valence electrons, chemistry calculator',
};

export default function FormalChargeCalculatorPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-block p-3 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-2xl mb-4">
              <svg className="w-16 h-16 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Formal Charge Calculator
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Lewis Structures & Electron Distribution
            </p>
          </div>

          <FormalChargeCalculator />

          {/* Educational Content */}
          <div className="mt-12 prose prose-lg max-w-none dark:prose-invert">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Understanding Formal Charge
              </h2>

              <div className="space-y-6 text-gray-700 dark:text-gray-300">
                
                <section>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    What is Formal Charge?
                  </h3>
                  <p className="leading-relaxed mb-4">
                    <strong>Formal charge</strong> is a theoretical concept used to determine the distribution of electrons in a molecule 
                    or polyatomic ion. It represents the charge an atom would have if all bonding electrons were shared equally between 
                    atoms, regardless of electronegativity differences.
                  </p>
                  <p className="leading-relaxed">
                    While formal charge doesn't represent the actual charge on an atom (that's partial charge), it's a powerful tool for:
                    evaluating Lewis structures, predicting molecular reactivity, and determining the most stable resonance forms. The best 
                    Lewis structures typically have <strong>minimal formal charges</strong> with negative charges on more electronegative atoms.
                  </p>
                </section>

                <section className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    The Formal Charge Equation
                  </h3>
                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border-l-4 border-blue-500">
                    <p className="font-bold text-xl mb-3">FC = V - N - B/2</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-3">
                        <strong className="min-w-[80px]">FC:</strong>
                        <span>Formal charge on the atom</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <strong className="min-w-[80px]">V:</strong>
                        <span>Number of valence electrons in the neutral, free atom (from periodic table)</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <strong className="min-w-[80px]">N:</strong>
                        <span>Number of non-bonding electrons (lone pairs × 2)</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <strong className="min-w-[80px]">B:</strong>
                        <span>Total number of bonding electrons (single bond = 2, double = 4, triple = 6)</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 bg-blue-100 dark:bg-blue-900/30 p-4 rounded">
                    <p className="text-sm">
                      <strong>Alternative form:</strong> FC = V - (lone pair electrons) - (number of bonds)
                    </p>
                    <p className="text-xs mt-1">
                      This version counts bonds instead of bonding electrons, which some find more intuitive.
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Valence Electrons by Group
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg">
                      <thead>
                        <tr className="bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30">
                          <th className="px-4 py-3 text-left font-semibold border-b">Group</th>
                          <th className="px-4 py-3 text-left font-semibold border-b">Valence e⁻</th>
                          <th className="px-4 py-3 text-left font-semibold border-b">Examples</th>
                          <th className="px-4 py-3 text-left font-semibold border-b">Typical Bonds</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="px-4 py-3 border-b font-semibold">1</td>
                          <td className="px-4 py-3 border-b">1</td>
                          <td className="px-4 py-3 border-b">H, Li, Na</td>
                          <td className="px-4 py-3 border-b">1 single bond</td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="px-4 py-3 border-b font-semibold">14 (4A)</td>
                          <td className="px-4 py-3 border-b">4</td>
                          <td className="px-4 py-3 border-b">C, Si</td>
                          <td className="px-4 py-3 border-b">4 bonds (various types)</td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="px-4 py-3 border-b font-semibold">15 (5A)</td>
                          <td className="px-4 py-3 border-b">5</td>
                          <td className="px-4 py-3 border-b">N, P</td>
                          <td className="px-4 py-3 border-b">3 bonds + 1 lone pair</td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="px-4 py-3 border-b font-semibold">16 (6A)</td>
                          <td className="px-4 py-3 border-b">6</td>
                          <td className="px-4 py-3 border-b">O, S</td>
                          <td className="px-4 py-3 border-b">2 bonds + 2 lone pairs</td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="px-4 py-3 border-b font-semibold">17 (7A)</td>
                          <td className="px-4 py-3 border-b">7</td>
                          <td className="px-4 py-3 border-b">F, Cl, Br, I</td>
                          <td className="px-4 py-3 border-b">1 bond + 3 lone pairs</td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="px-4 py-3 border-b font-semibold">18 (8A)</td>
                          <td className="px-4 py-3 border-b">8</td>
                          <td className="px-4 py-3 border-b">Ne, Ar, Kr</td>
                          <td className="px-4 py-3 border-b">0 bonds (noble gases)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Worked Example: Water (H₂O)
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded">
                      <p className="font-semibold mb-2">Lewis Structure:</p>
                      <pre className="text-sm font-mono bg-gray-50 dark:bg-gray-900 p-3 rounded">
{`      H
       \\
    H - O:
       :`}
                      </pre>
                      <p className="text-xs mt-2">Oxygen has 2 bonds and 2 lone pairs (4 non-bonding electrons)</p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded">
                      <p className="font-semibold mb-3">For Oxygen atom:</p>
                      <div className="space-y-2 text-sm font-mono">
                        <div className="flex justify-between">
                          <span>V (valence electrons):</span>
                          <strong>6</strong>
                        </div>
                        <div className="flex justify-between">
                          <span>N (non-bonding electrons):</span>
                          <strong>4</strong>
                        </div>
                        <div className="flex justify-between">
                          <span>B (bonding electrons):</span>
                          <strong>4</strong>
                        </div>
                        <div className="border-t border-gray-300 dark:border-gray-600 pt-2 mt-2">
                          <div className="flex justify-between font-bold">
                            <span>FC = V - N - B/2:</span>
                            <span>6 - 4 - 4/2 = 0</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded">
                      <p className="font-semibold mb-3">For each Hydrogen atom:</p>
                      <div className="space-y-2 text-sm font-mono">
                        <div className="flex justify-between">
                          <span>V (valence electrons):</span>
                          <strong>1</strong>
                        </div>
                        <div className="flex justify-between">
                          <span>N (non-bonding electrons):</span>
                          <strong>0</strong>
                        </div>
                        <div className="flex justify-between">
                          <span>B (bonding electrons):</span>
                          <strong>2</strong>
                        </div>
                        <div className="border-t border-gray-300 dark:border-gray-600 pt-2 mt-2">
                          <div className="flex justify-between font-bold">
                            <span>FC = V - N - B/2:</span>
                            <span>1 - 0 - 2/2 = 0</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded border-l-4 border-green-600">
                      <p className="font-semibold mb-2">Conclusion:</p>
                      <p className="text-sm">
                        All atoms in H₂O have formal charge = 0. This indicates a stable Lewis structure with proper 
                        electron distribution. The sum of formal charges (0 + 0 + 0 = 0) equals the molecular charge, 
                        which must always be true.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Worked Example: Ammonium Ion (NH₄⁺)
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded">
                      <p className="font-semibold mb-2">Lewis Structure:</p>
                      <pre className="text-sm font-mono bg-gray-50 dark:bg-gray-900 p-3 rounded">
{`       H
       |
   H - N⁺- H
       |
       H`}
                      </pre>
                      <p className="text-xs mt-2">Nitrogen has 4 single bonds, no lone pairs</p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded">
                      <p className="font-semibold mb-3">For Nitrogen atom:</p>
                      <div className="space-y-2 text-sm font-mono">
                        <div className="flex justify-between">
                          <span>V (valence electrons):</span>
                          <strong>5</strong>
                        </div>
                        <div className="flex justify-between">
                          <span>N (non-bonding electrons):</span>
                          <strong>0</strong>
                        </div>
                        <div className="flex justify-between">
                          <span>B (bonding electrons):</span>
                          <strong>8</strong>
                        </div>
                        <div className="border-t border-gray-300 dark:border-gray-600 pt-2 mt-2">
                          <div className="flex justify-between font-bold text-blue-600 dark:text-blue-400">
                            <span>FC = V - N - B/2:</span>
                            <span>5 - 0 - 8/2 = +1</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded border-l-4 border-blue-600">
                      <p className="font-semibold mb-2">Interpretation:</p>
                      <p className="text-sm">
                        Nitrogen has formal charge +1, which accounts for the positive charge on the ion. Each hydrogen 
                        has FC = 0. The sum of formal charges (+1 + 0 + 0 + 0 + 0 = +1) equals the ion charge ✓
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Resonance Structures and Formal Charge
                  </h3>
                  <p className="leading-relaxed mb-4">
                    When multiple valid Lewis structures exist (resonance structures), formal charge helps determine which 
                    structures contribute most to the actual electron distribution:
                  </p>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg space-y-3">
                    <h4 className="font-bold text-purple-900 dark:text-purple-100">Rules for Best Resonance Structures:</h4>
                    <div className="space-y-3">
                      <div className="bg-white dark:bg-gray-800 p-3 rounded flex items-start gap-3">
                        <span className="text-2xl">1️⃣</span>
                        <div>
                          <p className="font-semibold text-sm">Minimize formal charges</p>
                          <p className="text-xs">Structures with all atoms having FC = 0 are most stable</p>
                        </div>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-800 p-3 rounded flex items-start gap-3">
                        <span className="text-2xl">2️⃣</span>
                        <div>
                          <p className="font-semibold text-sm">Minimize separation of charges</p>
                          <p className="text-xs">Structures with fewer charged atoms are better</p>
                        </div>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-800 p-3 rounded flex items-start gap-3">
                        <span className="text-2xl">3️⃣</span>
                        <div>
                          <p className="font-semibold text-sm">Place negative charges on electronegative atoms</p>
                          <p className="text-xs">O, N, F can better stabilize negative charges than C or H</p>
                        </div>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-800 p-3 rounded flex items-start gap-3">
                        <span className="text-2xl">4️⃣</span>
                        <div>
                          <p className="font-semibold text-sm">Avoid adjacent like charges</p>
                          <p className="text-xs">Don't place positive and positive (or negative and negative) charges on adjacent atoms</p>
                        </div>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-800 p-3 rounded flex items-start gap-3">
                        <span className="text-2xl">5️⃣</span>
                        <div>
                          <p className="font-semibold text-sm">Obey the octet rule when possible</p>
                          <p className="text-xs">Second-row elements (C, N, O, F) prefer 8 electrons</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Common Molecules and Their Formal Charges
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-sm">
                      <thead>
                        <tr className="bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30">
                          <th className="px-4 py-3 text-left font-semibold border-b">Molecule/Ion</th>
                          <th className="px-4 py-3 text-left font-semibold border-b">Atom</th>
                          <th className="px-4 py-3 text-center font-semibold border-b">V</th>
                          <th className="px-4 py-3 text-center font-semibold border-b">N</th>
                          <th className="px-4 py-3 text-center font-semibold border-b">B</th>
                          <th className="px-4 py-3 text-center font-semibold border-b">FC</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="px-4 py-3 border-b font-semibold">CO₂</td>
                          <td className="px-4 py-3 border-b">C (central)</td>
                          <td className="px-4 py-3 border-b text-center">4</td>
                          <td className="px-4 py-3 border-b text-center">0</td>
                          <td className="px-4 py-3 border-b text-center">8</td>
                          <td className="px-4 py-3 border-b text-center font-bold text-green-600">0</td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="px-4 py-3 border-b font-semibold">NH₃</td>
                          <td className="px-4 py-3 border-b">N</td>
                          <td className="px-4 py-3 border-b text-center">5</td>
                          <td className="px-4 py-3 border-b text-center">2</td>
                          <td className="px-4 py-3 border-b text-center">6</td>
                          <td className="px-4 py-3 border-b text-center font-bold text-green-600">0</td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="px-4 py-3 border-b font-semibold">H₂O</td>
                          <td className="px-4 py-3 border-b">O</td>
                          <td className="px-4 py-3 border-b text-center">6</td>
                          <td className="px-4 py-3 border-b text-center">4</td>
                          <td className="px-4 py-3 border-b text-center">4</td>
                          <td className="px-4 py-3 border-b text-center font-bold text-green-600">0</td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="px-4 py-3 border-b font-semibold">NH₄⁺</td>
                          <td className="px-4 py-3 border-b">N</td>
                          <td className="px-4 py-3 border-b text-center">5</td>
                          <td className="px-4 py-3 border-b text-center">0</td>
                          <td className="px-4 py-3 border-b text-center">8</td>
                          <td className="px-4 py-3 border-b text-center font-bold text-blue-600">+1</td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="px-4 py-3 border-b font-semibold">OH⁻</td>
                          <td className="px-4 py-3 border-b">O</td>
                          <td className="px-4 py-3 border-b text-center">6</td>
                          <td className="px-4 py-3 border-b text-center">6</td>
                          <td className="px-4 py-3 border-b text-center">2</td>
                          <td className="px-4 py-3 border-b text-center font-bold text-red-600">-1</td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="px-4 py-3 border-b font-semibold">CO₃²⁻</td>
                          <td className="px-4 py-3 border-b">C (central)</td>
                          <td className="px-4 py-3 border-b text-center">4</td>
                          <td className="px-4 py-3 border-b text-center">0</td>
                          <td className="px-4 py-3 border-b text-center">8</td>
                          <td className="px-4 py-3 border-b text-center font-bold text-green-600">0</td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="px-4 py-3 border-b font-semibold">CO₃²⁻</td>
                          <td className="px-4 py-3 border-b">O (single bond)</td>
                          <td className="px-4 py-3 border-b text-center">6</td>
                          <td className="px-4 py-3 border-b text-center">6</td>
                          <td className="px-4 py-3 border-b text-center">2</td>
                          <td className="px-4 py-3 border-b text-center font-bold text-red-600">-1</td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="px-4 py-3 border-b font-semibold">NO₃⁻</td>
                          <td className="px-4 py-3 border-b">N (central)</td>
                          <td className="px-4 py-3 border-b text-center">5</td>
                          <td className="px-4 py-3 border-b text-center">0</td>
                          <td className="px-4 py-3 border-b text-center">8</td>
                          <td className="px-4 py-3 border-b text-center font-bold text-blue-600">+1</td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="px-4 py-3 border-b font-semibold">CN⁻</td>
                          <td className="px-4 py-3 border-b">C</td>
                          <td className="px-4 py-3 border-b text-center">4</td>
                          <td className="px-4 py-3 border-b text-center">2</td>
                          <td className="px-4 py-3 border-b text-center">6</td>
                          <td className="px-4 py-3 border-b text-center font-bold text-red-600">-1</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Formal Charge vs. Oxidation State
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg">
                      <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Formal Charge</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Assumes equal sharing of bonding electrons</li>
                        <li>• Used for Lewis structures</li>
                        <li>• Helps identify best resonance forms</li>
                        <li>• Not the actual charge on atom</li>
                        <li>• Formula: V - N - B/2</li>
                      </ul>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg">
                      <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">Oxidation State</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Assumes complete electron transfer</li>
                        <li>• Used for redox reactions</li>
                        <li>• Helps balance equations</li>
                        <li>• Hypothetical ionic charge</li>
                        <li>• Based on electronegativity</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded border-l-4 border-yellow-600">
                    <p className="text-sm">
                      <strong>Example in H₂O:</strong> Oxygen has FC = 0 (equal sharing) but oxidation state = -2 
                      (assumes O takes both electrons from each H-O bond due to higher electronegativity).
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Tips for Calculating Formal Charge
                  </h3>
                  <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 p-5 rounded-lg space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-xl">✓</span>
                      <div>
                        <p className="font-semibold">Draw the Lewis structure first</p>
                        <p className="text-sm">You need to know the bonding pattern before calculating formal charges.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-xl">✓</span>
                      <div>
                        <p className="font-semibold">Count carefully</p>
                        <p className="text-sm">Lone pair = 2 electrons, single bond = 2, double = 4, triple = 6.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-xl">✓</span>
                      <div>
                        <p className="font-semibold">Check your work</p>
                        <p className="text-sm">Sum of formal charges must equal the overall molecular/ionic charge.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-xl">✓</span>
                      <div>
                        <p className="font-semibold">Look up valence electrons</p>
                        <p className="text-sm">Use the periodic table group number for main group elements.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-xl">✓</span>
                      <div>
                        <p className="font-semibold">Consider electronegativity</p>
                        <p className="text-sm">Negative formal charges should ideally be on more electronegative atoms.</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Quick Reference Guide
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-bold mb-2">Formula:</h4>
                      <div className="font-mono text-sm bg-white dark:bg-gray-800 p-3 rounded">
                        FC = V - N - B/2
                      </div>
                      <div className="mt-2 space-y-1">
                        <div>V = valence e⁻</div>
                        <div>N = lone pair e⁻</div>
                        <div>B = bonding e⁻</div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Key Rules:</h4>
                      <ul className="space-y-1">
                        <li>• Minimize formal charges</li>
                        <li>• Sum FC = molecular charge</li>
                        <li>• -ve on electronegative atoms</li>
                        <li>• Avoid adjacent like charges</li>
                      </ul>
                    </div>
                  </div>
                </section>

              </div>
            </div>
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
                        href="/atomic-structure-calculators/lewis-structure-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Lewis Structure Calculator</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/atomic-structure-calculators/hybridization-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Hybridization Calculator</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/physical-chemistry-calculators\dipole-moment-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Dipole Moment Calculator</span>
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