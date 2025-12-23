import { Metadata } from 'next';
import LimitingReactantCalculator from '@/components/calculators/LimitingReactantCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: "Limiting Reactant Calculator | Excess Reactant | Stoichiometry",
  description: "Determine the limiting reactant and calculate theoretical yield. Essential for stoichiometry and chemical reactions.",
  keywords: ['limiting reactant', 'excess reactant', 'theoretical yield', 'stoichiometry', 'chemical reactions', 'balanced equation'],
};

export default function LimitingReactantCalculatorPage() {  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Limiting Reactant Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Determine which reactant limits the reaction and calculate theoretical yield
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <LimitingReactantCalculator />
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                What is a Limiting Reactant?
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300">
                  The limiting reactant is the substance that is completely consumed first 
                  in a chemical reaction, determining the maximum amount of product that can form.
                </p>
                <div className="my-4 p-4 bg-red-50 dark:bg-red-900/30 rounded-lg">
                  <p className="font-semibold text-red-900 dark:text-red-100">Key Concept:</p>
                  <p className="text-sm mt-2 text-red-800 dark:text-red-200">
                    Think of it like making sandwiches: if you have 10 slices of bread and 3 slices 
                    of cheese, cheese is limiting (you can only make 3 sandwiches, with bread left over).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Solution Steps
              </h3>
              <div className="prose dark:prose-invert max-w-none text-sm">
                <div className="space-y-2">
                  <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <p className="font-semibold">1. Balance the Equation</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Ensure stoichiometric coefficients are correct
                    </p>
                  </div>
                  <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <p className="font-semibold">2. Calculate Product from Each</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Determine moles of product from each reactant
                    </p>
                  </div>
                  <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <p className="font-semibold">3. Identify Limiting Reactant</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      The one producing less product
                    </p>
                  </div>
                  <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <p className="font-semibold">4. Calculate Theoretical Yield</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Based on limiting reactant only
                    </p>
                  </div>
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
                  <span className="text-sm"><strong>Industrial:</strong> Optimize reactant usage and costs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tertiary-500 mr-2">•</span>
                  <span className="text-sm"><strong>Lab:</strong> Plan experiments and predict yields</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tertiary-500 mr-2">•</span>
                  <span className="text-sm"><strong>Pharmacy:</strong> Drug synthesis and formulation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tertiary-500 mr-2">•</span>
                  <span className="text-sm"><strong>Environmental:</strong> Pollution control reactions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Example: Water Formation
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="font-semibold mb-2">Problem:</p>
                <p className="text-sm">
                  Reaction: 2H₂ + O₂ → 2H₂O<br />
                  Given: 3.0 mol H₂ and 1.0 mol O₂<br />
                  Find: Limiting reactant and theoretical yield
                </p>
              </div>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <p className="font-semibold mb-2 text-blue-900 dark:text-blue-100">Solution:</p>
                <div className="text-sm space-y-2 text-blue-800 dark:text-blue-200">
                  <p><strong>From H₂:</strong></p>
                  <p>3.0 mol H₂ × (2 mol H₂O / 2 mol H₂) = 3.0 mol H₂O</p>
                  
                  <p className="mt-2"><strong>From O₂:</strong></p>
                  <p>1.0 mol O₂ × (2 mol H₂O / 1 mol O₂) = 2.0 mol H₂O</p>
                  
                  <p className="mt-2 font-semibold">O₂ produces less → O₂ is limiting</p>
                </div>
              </div>

              <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
                <p className="text-sm font-semibold text-green-900 dark:text-green-100 mb-1">Results:</p>
                <p className="text-sm text-green-800 dark:text-green-200">
                  • Limiting reactant: O₂<br />
                  • Theoretical yield: 2.0 mol H₂O<br />
                  • Excess H₂: 3.0 - 2.0 = 1.0 mol remaining
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Example: Ammonia Synthesis
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="font-semibold mb-2">Problem:</p>
                <p className="text-sm">
                  Reaction: N₂ + 3H₂ → 2NH₃<br />
                  Given: 2.0 mol N₂ and 5.0 mol H₂<br />
                  Find: Limiting reactant and theoretical yield
                </p>
              </div>
              
              <div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                <p className="font-semibold mb-2 text-purple-900 dark:text-purple-100">Solution:</p>
                <div className="text-sm space-y-2 text-purple-800 dark:text-purple-200">
                  <p><strong>From N₂:</strong></p>
                  <p>2.0 mol N₂ × (2 mol NH₃ / 1 mol N₂) = 4.0 mol NH₃</p>
                  
                  <p className="mt-2"><strong>From H₂:</strong></p>
                  <p>5.0 mol H₂ × (2 mol NH₃ / 3 mol H₂) = 3.33 mol NH₃</p>
                  
                  <p className="mt-2 font-semibold">H₂ produces less → H₂ is limiting</p>
                </div>
              </div>

              <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
                <p className="text-sm font-semibold text-green-900 dark:text-green-100 mb-1">Results:</p>
                <p className="text-sm text-green-800 dark:text-green-200">
                  • Limiting reactant: H₂<br />
                  • Theoretical yield: 3.33 mol NH₃<br />
                  • Excess N₂: 2.0 - 1.67 = 0.33 mol remaining
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                🔗 Related Calculators
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/gas-calculators/gas-stoichiometry-calculator"
                    className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                  >
                    <span>→</span>
                    <span>Gas Stoichiometry Calculator</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/concentration-calculators/molarity-calculator"
                    className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                  >
                    <span>→</span>
                    <span>Molarity Calculator</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/concentration-calculators/molar-mass-calculator"
                    className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                  >
                    <span>→</span>
                    <span>Molar Mass Calculator</span>
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
            </div>          </div>
        </div>

        <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Common Stoichiometry Ratios
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                  <th className="text-left py-3 text-gray-900 dark:text-white">Reaction</th>
                  <th className="text-center py-3 text-gray-900 dark:text-white">Balanced Equation</th>
                  <th className="text-left py-3 text-gray-900 dark:text-white">Stoichiometric Ratio</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 dark:text-gray-300">
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3">Water Formation</td>
                  <td className="text-center py-3">2H₂ + O₂ → 2H₂O</td>
                  <td className="py-3">2 mol H₂ : 1 mol O₂ : 2 mol H₂O</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3">Ammonia Synthesis</td>
                  <td className="text-center py-3">N₂ + 3H₂ → 2NH₃</td>
                  <td className="py-3">1 mol N₂ : 3 mol H₂ : 2 mol NH₃</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3">Combustion of Methane</td>
                  <td className="text-center py-3">CH₄ + 2O₂ → CO₂ + 2H₂O</td>
                  <td className="py-3">1 mol CH₄ : 2 mol O₂</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3">Iron Oxide Reduction</td>
                  <td className="text-center py-3">Fe₂O₃ + 3CO → 2Fe + 3CO₂</td>
                  <td className="py-3">1 mol Fe₂O₃ : 3 mol CO : 2 mol Fe</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-yellow-50 to-red-50 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Tips for Identifying Limiting Reactants
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Method 1: Product Approach</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Calculate how much product each reactant can produce. The reactant that produces 
                  the <strong>least product</strong> is limiting.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Method 2: Ratio Approach</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Divide moles available by stoichiometric coefficient for each reactant. 
                  The <strong>smallest ratio</strong> indicates the limiting reactant.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Common Mistakes to Avoid:</h3>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                <li>✗ Comparing moles without considering coefficients</li>
                <li>✗ Assuming the reactant with fewer moles is limiting</li>
                <li>✗ Forgetting to use a balanced equation</li>
                <li>✗ Using mass instead of moles</li>
                <li>✓ Always check stoichiometric ratios</li>
                <li>✓ Convert all quantities to moles first</li>
              </ul>
            </div>
          </div>
        </div>
      </div>      </div>
      <Footer />
    </>
  );
}