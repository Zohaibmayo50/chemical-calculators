import ChemicalEquationBalancer from '@/components/calculators/ChemicalEquationBalancer';

export const metadata = {
  title: 'Chemical Equation Balancer - ChemCalc',
  description: 'Automatically balance chemical equations using the law of conservation of mass. Balance complex reactions with step-by-step verification.',
  keywords: 'equation balancing, chemical equations, stoichiometry, conservation of mass, coefficients, balancing calculator',
};

export default function ChemicalEquationBalancerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Chemical Equation Balancer
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Automatically balance chemical equations using the law of conservation of mass with instant verification
            </p>
          </div>

          <div className="mb-12">
            <ChemicalEquationBalancer />
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              Understanding Chemical Equation Balancing
            </h2>
            
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Balancing chemical equations is a fundamental skill in chemistry that ensures the law of conservation of mass is obeyed. This law states that matter cannot be created or destroyed in a chemical reaction—the number of atoms of each element must be the same on both sides of the equation. A balanced equation shows the correct stoichiometric relationships between reactants and products, which is essential for quantitative calculations in chemistry.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">
                The Law of Conservation of Mass
              </h3>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Antoine Lavoisier established the law of conservation of mass in the late 18th century through careful experiments. In chemical reactions, atoms are rearranged but never created or destroyed. Therefore, the total mass of reactants must equal the total mass of products. This principle is the foundation of stoichiometry and requires that all chemical equations be properly balanced.
              </p>

              <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  What Balancing Means
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  A balanced equation has the same number of atoms of each element on both the reactant side and the product side. We achieve this by placing coefficients (whole numbers) in front of chemical formulas. These coefficients represent the number of molecules or moles of each substance involved in the reaction.
                </p>
                <p className="text-gray-700 dark:text-gray-300 font-semibold">
                  Important: We can only change coefficients, never the subscripts within chemical formulas, as changing subscripts would change the identity of the substance.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">
                Step-by-Step Balancing Method
              </h3>

              <ol className="list-decimal list-inside space-y-4 text-gray-700 dark:text-gray-300 mb-6">
                <li className="pl-4">
                  <strong className="text-gray-800 dark:text-white">Write the unbalanced equation:</strong> Start with the correct chemical formulas for all reactants and products. For example: Fe + O₂ → Fe₂O₃
                </li>
                <li className="pl-4">
                  <strong className="text-gray-800 dark:text-white">Count atoms of each element:</strong> Make a list showing how many atoms of each element appear on each side of the equation.
                </li>
                <li className="pl-4">
                  <strong className="text-gray-800 dark:text-white">Balance the most complex molecule first:</strong> Start with the compound that contains the most atoms or appears in the fewest formulas.
                </li>
                <li className="pl-4">
                  <strong className="text-gray-800 dark:text-white">Balance other elements:</strong> Work through the remaining elements one at a time. Leave hydrogen and oxygen for last if they appear in multiple compounds.
                </li>
                <li className="pl-4">
                  <strong className="text-gray-800 dark:text-white">Use fractions if necessary:</strong> Sometimes you need fractional coefficients temporarily. Multiply all coefficients by the denominator at the end to get whole numbers.
                </li>
                <li className="pl-4">
                  <strong className="text-gray-800 dark:text-white">Verify and simplify:</strong> Check that all elements are balanced and reduce coefficients to the smallest possible whole numbers.
                </li>
              </ol>

              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">
                Detailed Examples
              </h3>

              <div className="grid md:grid-cols-1 gap-6 mb-6">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                    Example 1: Formation of Water
                  </h4>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                    <p><strong>Unbalanced:</strong> H₂ + O₂ → H₂O</p>
                    <p><strong>Count atoms:</strong></p>
                    <ul className="list-disc list-inside ml-4">
                      <li>Left: H = 2, O = 2</li>
                      <li>Right: H = 2, O = 1</li>
                    </ul>
                    <p><strong>Balance oxygen:</strong> H₂ + O₂ → 2H₂O</p>
                    <ul className="list-disc list-inside ml-4">
                      <li>Now: Left: H = 2, O = 2 | Right: H = 4, O = 2</li>
                    </ul>
                    <p><strong>Balance hydrogen:</strong> 2H₂ + O₂ → 2H₂O</p>
                    <p className="text-green-600 dark:text-green-400 font-bold mt-2">
                      <strong>Balanced:</strong> 2H₂ + O₂ → 2H₂O ✓
                    </p>
                    <p className="text-xs mt-2">Left: H = 4, O = 2 | Right: H = 4, O = 2</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                    Example 2: Combustion of Propane
                  </h4>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                    <p><strong>Unbalanced:</strong> C₃H₈ + O₂ → CO₂ + H₂O</p>
                    <p><strong>Balance carbon:</strong> C₃H₈ + O₂ → 3CO₂ + H₂O</p>
                    <p><strong>Balance hydrogen:</strong> C₃H₈ + O₂ → 3CO₂ + 4H₂O</p>
                    <ul className="list-disc list-inside ml-4">
                      <li>Right side has: (3×2) + (4×1) = 10 oxygen atoms</li>
                    </ul>
                    <p><strong>Balance oxygen:</strong> C₃H₈ + 5O₂ → 3CO₂ + 4H₂O</p>
                    <p className="text-blue-600 dark:text-blue-400 font-bold mt-2">
                      <strong>Balanced:</strong> C₃H₈ + 5O₂ → 3CO₂ + 4H₂O ✓
                    </p>
                    <p className="text-xs mt-2">C: 3=3, H: 8=8, O: 10=10</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                    Example 3: Formation of Rust
                  </h4>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                    <p><strong>Unbalanced:</strong> Fe + O₂ → Fe₂O₃</p>
                    <p><strong>Balance iron:</strong> 2Fe + O₂ → Fe₂O₃</p>
                    <p><strong>Balance oxygen using fraction:</strong> 2Fe + (3/2)O₂ → Fe₂O₃</p>
                    <p><strong>Clear fraction (multiply by 2):</strong> 4Fe + 3O₂ → 2Fe₂O₃</p>
                    <p className="text-purple-600 dark:text-purple-400 font-bold mt-2">
                      <strong>Balanced:</strong> 4Fe + 3O₂ → 2Fe₂O₃ ✓
                    </p>
                    <p className="text-xs mt-2">Fe: 4=4, O: 6=6</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                    Example 4: Synthesis of Ammonia (Haber Process)
                  </h4>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                    <p><strong>Unbalanced:</strong> N₂ + H₂ → NH₃</p>
                    <p><strong>Balance nitrogen:</strong> N₂ + H₂ → 2NH₃</p>
                    <ul className="list-disc list-inside ml-4">
                      <li>Right side now has 6 hydrogen atoms (2×3)</li>
                    </ul>
                    <p><strong>Balance hydrogen:</strong> N₂ + 3H₂ → 2NH₃</p>
                    <p className="text-orange-600 dark:text-orange-400 font-bold mt-2">
                      <strong>Balanced:</strong> N₂ + 3H₂ → 2NH₃ ✓
                    </p>
                    <p className="text-xs mt-2">N: 2=2, H: 6=6</p>
                    <p className="text-xs mt-1 italic">This reaction is the basis for industrial ammonia production.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">
                Common Balancing Strategies
              </h3>

              <div className="bg-yellow-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  The Inspection Method
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Also called "trial and error," this is the most common method for simple equations. You systematically adjust coefficients while checking that all elements remain balanced. This method works well for equations with only a few compounds.
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <li><strong>✓ Best for:</strong> Simple equations with 2-4 compounds</li>
                  <li><strong>✓ Strategy:</strong> Start with the most complex molecule</li>
                  <li><strong>✓ Tip:</strong> Balance polyatomic ions as a unit when they appear unchanged on both sides</li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  The Algebraic Method
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  For complex equations, you can set up a system of algebraic equations based on the conservation of each element. Assign variables (a, b, c, d...) to each coefficient, write equations for element conservation, and solve the system.
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Example: For aFe + bO₂ → cFe₂O₃
                </p>
                <ul className="list-disc list-inside ml-4 text-sm text-gray-700 dark:text-gray-300">
                  <li>Fe: a = 2c</li>
                  <li>O: 2b = 3c</li>
                  <li>Set c = 2, then a = 4, b = 3</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">
                Special Cases and Tips
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                    Polyatomic Ions
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                    When polyatomic ions (like SO₄²⁻, NO₃⁻, or PO₄³⁻) appear unchanged on both sides, treat them as single units instead of balancing individual elements.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    <strong>Example:</strong> AgNO₃ + NaCl → AgCl + NaNO₃
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    NO₃ appears unchanged, so balance it as a unit (already balanced 1:1)
                  </p>
                </div>

                <div className="bg-purple-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                    Combustion Reactions
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                    For hydrocarbon combustion, always balance in this order:
                  </p>
                  <ol className="list-decimal list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>Carbon atoms (from CO₂)</li>
                    <li>Hydrogen atoms (from H₂O)</li>
                    <li>Oxygen atoms (from O₂)</li>
                  </ol>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">
                    This order minimizes the need for adjustments.
                  </p>
                </div>

                <div className="bg-red-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                    Redox Reactions
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                    For complex redox reactions, use the half-reaction method:
                  </p>
                  <ol className="list-decimal list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>Split into oxidation and reduction half-reactions</li>
                    <li>Balance atoms (except O and H)</li>
                    <li>Balance O by adding H₂O</li>
                    <li>Balance H by adding H⁺ (or OH⁻ in base)</li>
                    <li>Balance charge with electrons</li>
                    <li>Combine half-reactions</li>
                  </ol>
                </div>

                <div className="bg-green-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                    Fractional Coefficients
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                    It's acceptable to use fractions temporarily during balancing, but the final answer must have whole numbers.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    <strong>Example:</strong> C₃H₈ + (5/2)O₂ → 3CO₂ + 4H₂O
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Multiply by 2: C₃H₈ + 5O₂ → 3CO₂ + 4H₂O
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">
                Common Mistakes to Avoid
              </h3>

              <div className="bg-red-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li><strong>❌ Changing Subscripts:</strong> Never alter the subscripts in chemical formulas. H₂O must remain H₂O; you can't change it to H₄O₂ to balance hydrogen.</li>
                  <li><strong>❌ Forgetting to Multiply:</strong> When balancing, remember that coefficients multiply everything in the formula. 2Fe₂O₃ means 4 Fe atoms and 6 O atoms.</li>
                  <li><strong>❌ Not Simplifying:</strong> Always reduce coefficients to the smallest whole numbers. While 4H₂ + 2O₂ → 4H₂O is balanced, the correct answer is 2H₂ + O₂ → 2H₂O.</li>
                  <li><strong>❌ Balancing One Element at a Time Without Checking:</strong> After balancing one element, always recheck others because changes can affect previously balanced elements.</li>
                  <li><strong>❌ Using Decimal Coefficients:</strong> While fractions are temporarily acceptable, never leave decimals (like 1.5). Convert to fractions, then to whole numbers.</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">
                Why Balancing Matters
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                <strong>Stoichiometric Calculations:</strong> Balanced equations are essential for calculating quantities in chemical reactions. The coefficients tell us the molar ratios needed to determine how much product forms from given reactants or how much reactant is needed to produce a desired amount of product.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                <strong>Industrial Chemistry:</strong> In manufacturing, balanced equations are used to calculate material requirements, predict yields, and optimize processes. An unbalanced equation would lead to incorrect calculations and costly errors in production.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                <strong>Environmental Science:</strong> Balanced equations help us understand and calculate pollutant formation, greenhouse gas emissions, and the effectiveness of scrubbing and catalytic conversion processes.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                <strong>Understanding Reactions:</strong> The coefficients in balanced equations reveal the fundamental particle-level behavior of reactions. They show us exactly how molecules interact and transform, providing insight into reaction mechanisms and kinetics.
              </p>

              <div className="bg-indigo-50 dark:bg-gray-700 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  Practice Makes Perfect
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Balancing equations is a skill that improves with practice. Start with simple equations and gradually work up to more complex ones. Use the examples provided in this calculator to practice, and always verify your answers by counting atoms on both sides.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Remember: Every correctly balanced equation honors Lavoisier's law of conservation of mass, one of the fundamental principles of chemistry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
