import MolecularFormulaCalculator from '@/components/calculators/MolecularFormulaCalculator';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Molecular Formula Calculator',
  description: 'Calculate molecular formulas from empirical formulas and molecular weights. Determine the actual number of atoms in molecules with step-by-step calculations.',
  keywords: 'molecular formula, empirical formula, molecular weight, chemistry calculator, stoichiometry, formula determination',
};

export default function MolecularFormulaCalculatorPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Molecular Formula Calculator
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Determine molecular formulas from empirical formulas and molecular weights using precise stoichiometric calculations
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <MolecularFormulaCalculator />
            </div>

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Related Calculators
                </h2>
                <div className="space-y-3">
                  <a href="/stoichiometry-calculators/empirical-formula-calculator" className="block p-3 bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/50 rounded-lg transition-colors">
                    <h3 className="font-semibold text-blue-900 dark:text-blue-100">Empirical Formula</h3>
                    <p className="text-sm text-blue-700 dark:text-blue-300">Find simplest ratio</p>
                  </a>
                  <a href="/stoichiometry-calculators/molecular-weight-calculator" className="block p-3 bg-green-50 dark:bg-green-900/30 hover:bg-green-100 dark:hover:bg-green-900/50 rounded-lg transition-colors">
                    <h3 className="font-semibold text-green-900 dark:text-green-100">Molecular Weight</h3>
                    <p className="text-sm text-green-700 dark:text-green-300">Calculate molar mass</p>
                  </a>
                  <a href="/stoichiometry-calculators/percent-composition-calculator" className="block p-3 bg-purple-50 dark:bg-purple-900/30 hover:bg-purple-100 dark:hover:bg-purple-900/50 rounded-lg transition-colors">
                    <h3 className="font-semibold text-purple-900 dark:text-purple-100">Percent Composition</h3>
                    <p className="text-sm text-purple-700 dark:text-purple-300">Mass percent analysis</p>
                  </a>
                  <a href="/stoichiometry-calculators/stoichiometry-calculator" className="block p-3 bg-orange-50 dark:bg-orange-900/30 hover:bg-orange-100 dark:hover:bg-orange-900/50 rounded-lg transition-colors">
                    <h3 className="font-semibold text-orange-900 dark:text-orange-100">Stoichiometry</h3>
                    <p className="text-sm text-orange-700 dark:text-orange-300">Reaction calculations</p>
                  </a>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Related Formulas</h3>
                  <div className="space-y-3">
                    <a href="/chemistry-formulas/molecular-formula" className="block p-3 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors">
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100">Molecular Formula</h3>
                    </a>
                    <a href="/chemistry-formulas/empirical-formula" className="block p-3 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors">
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100">Empirical Formula</h3>
                    </a>
                  </div>
                </div>
                <div className="mt-4">
                  <a href="/stoichiometry-calculators" className="block p-3 bg-primary-50 dark:bg-primary-900/20 hover:bg-primary-100 dark:hover:bg-primary-900/30 rounded-lg transition-colors">
                    <p className="font-semibold text-primary-700 dark:text-primary-300">All Stoichiometry Calculators →</p>
                  </a>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Quick Reference
                </h3>
                <div className="prose dark:prose-invert max-w-none text-sm">
                  <div className="space-y-2">
                    <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <p className="font-semibold">n = MW / EFM</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        Multiplier from molecular weight
                      </p>
                    </div>
                    <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <p className="font-semibold">Molecular = Empirical × n</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        Apply multiplier to formula
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              Understanding Molecular Formulas
            </h2>
            
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                The molecular formula represents the actual number of atoms of each element present in one molecule of a compound. Unlike the empirical formula, which shows only the simplest whole-number ratio of atoms, the molecular formula provides the exact composition of a molecule. This distinction is crucial in chemistry because compounds with different molecular formulas (but the same empirical formula) have entirely different properties.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">
                Empirical vs. Molecular Formulas
              </h3>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The empirical formula shows the simplest ratio of elements in a compound. For example, glucose has the empirical formula CH₂O, indicating that for every carbon atom, there are two hydrogen atoms and one oxygen atom. However, the molecular formula of glucose is C₆H₁₂O₆, showing that a single glucose molecule contains six carbon atoms, twelve hydrogen atoms, and six oxygen atoms.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                The relationship between empirical and molecular formulas is expressed mathematically as: Molecular Formula = (Empirical Formula) × n, where n is a whole number multiplier. This multiplier can be calculated by dividing the molecular weight by the empirical formula mass: n = Molecular Weight / Empirical Formula Mass.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">
                Calculation Method
              </h3>

              <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  Step-by-Step Process
                </h4>
                <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300">
                  <li><strong>Calculate Empirical Formula Mass:</strong> Sum the atomic masses of all atoms in the empirical formula</li>
                  <li><strong>Divide Molecular Weight by Empirical Mass:</strong> n = MW / EFM</li>
                  <li><strong>Round to Nearest Whole Number:</strong> The multiplier n must be a whole number</li>
                  <li><strong>Multiply Empirical Formula by n:</strong> Each subscript in the empirical formula is multiplied by n</li>
                  <li><strong>Write the Molecular Formula:</strong> Present the final formula with proper subscripts</li>
                </ol>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">
                Common Examples
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Glucose</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                    <strong>Empirical Formula:</strong> CH₂O
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                    <strong>Empirical Mass:</strong> 30.03 g/mol
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                    <strong>Molecular Weight:</strong> 180.16 g/mol
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                    <strong>Multiplier:</strong> n = 180.16 / 30.03 = 6
                  </p>
                  <p className="text-blue-600 dark:text-blue-400 font-bold text-sm">
                    <strong>Molecular Formula:</strong> C₆H₁₂O₆
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Benzene</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                    <strong>Empirical Formula:</strong> CH
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                    <strong>Empirical Mass:</strong> 13.02 g/mol
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                    <strong>Molecular Weight:</strong> 78.11 g/mol
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                    <strong>Multiplier:</strong> n = 78.11 / 13.02 = 6
                  </p>
                  <p className="text-purple-600 dark:text-purple-400 font-bold text-sm">
                    <strong>Molecular Formula:</strong> C₆H₆
                  </p>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Acetic Acid</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                    <strong>Empirical Formula:</strong> CH₂O
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                    <strong>Empirical Mass:</strong> 30.03 g/mol
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                    <strong>Molecular Weight:</strong> 60.05 g/mol
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                    <strong>Multiplier:</strong> n = 60.05 / 30.03 = 2
                  </p>
                  <p className="text-orange-600 dark:text-orange-400 font-bold text-sm">
                    <strong>Molecular Formula:</strong> C₂H₄O₂
                  </p>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Ethylene</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                    <strong>Empirical Formula:</strong> CH₂
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                    <strong>Empirical Mass:</strong> 14.03 g/mol
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                    <strong>Molecular Weight:</strong> 28.05 g/mol
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                    <strong>Multiplier:</strong> n = 28.05 / 14.03 = 2
                  </p>
                  <p className="text-red-600 dark:text-red-400 font-bold text-sm">
                    <strong>Molecular Formula:</strong> C₂H₄
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">
                Special Cases and Considerations
              </h3>

              <div className="bg-yellow-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  When n = 1
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Some compounds have molecular formulas identical to their empirical formulas. For example, water (H₂O), formaldehyde (CH₂O), and carbon dioxide (CO₂) all have n = 1. In these cases, the empirical and molecular formulas are the same because the simplest ratio already represents the actual molecular composition.
                </p>
                
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 mt-4">
                  Isomers
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Different compounds can have the same molecular formula but different structures. These are called isomers. For instance, both glucose and fructose have the molecular formula C₆H₁₂O₆, but they have different structural arrangements and therefore different properties. The molecular formula alone doesn't tell us about the structure or connectivity of atoms.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">
                Applications in Chemistry
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                <strong>Analytical Chemistry:</strong> When analyzing unknown compounds using techniques like mass spectrometry, chemists first determine the molecular weight. Combined with elemental analysis that provides the empirical formula, they can calculate the molecular formula, which is a crucial step in identifying the compound.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                <strong>Organic Synthesis:</strong> In organic chemistry, knowing the molecular formula helps predict possible structures and plan synthesis routes. The molecular formula provides essential information about the degree of unsaturation and possible functional groups present in organic molecules.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                <strong>Biochemistry:</strong> Molecular formulas are essential for understanding biological molecules. Carbohydrates often have molecular formulas that are multiples of CH₂O, proteins have complex formulas based on their amino acid composition, and nucleic acids have specific formulas that reflect their nucleotide building blocks.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">
                Experimental Determination
              </h3>

              <div className="bg-green-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  To experimentally determine a molecular formula, chemists typically follow these steps:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li><strong>Elemental Analysis:</strong> Determine the mass percentage of each element in the compound through combustion analysis or other techniques</li>
                  <li><strong>Calculate Empirical Formula:</strong> Convert mass percentages to mole ratios and find the simplest whole-number ratio</li>
                  <li><strong>Measure Molecular Weight:</strong> Use mass spectrometry, freezing point depression, or other methods to determine the molecular weight</li>
                  <li><strong>Calculate n:</strong> Divide molecular weight by empirical formula mass</li>
                  <li><strong>Determine Molecular Formula:</strong> Multiply the empirical formula by n</li>
                </ol>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">
                Common Mistakes to Avoid
              </h3>

              <div className="bg-red-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li><strong>❌ Not Rounding n Properly:</strong> The multiplier n must be a whole number. If you get 1.98 or 2.02, round to 2. Values should be very close to whole numbers; if they're not, check your calculations.</li>
                  <li><strong>❌ Confusing Empirical and Molecular Formulas:</strong> Remember that the empirical formula is the simplest ratio, while the molecular formula is the actual composition.</li>
                  <li><strong>❌ Using Incorrect Atomic Masses:</strong> Always use accurate atomic masses from the periodic table for precise calculations.</li>
                  <li><strong>❌ Forgetting to Multiply All Subscripts:</strong> When calculating the molecular formula, you must multiply every subscript in the empirical formula by n, not just some of them.</li>
                  <li><strong>❌ Ignoring Significant Figures:</strong> Molecular weight measurements have limited precision, so your final answer should reflect appropriate significant figures.</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">
                Advanced Topics
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                <strong>Polymers:</strong> For polymers, the concept of molecular formula becomes more complex. Polymers are large molecules made of repeating units, and their molecular weights can vary. Instead of a single molecular formula, polymers are often described by their repeating unit and average molecular weight or degree of polymerization.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                <strong>Non-stoichiometric Compounds:</strong> Some compounds, particularly certain metal oxides and semiconductors, don't have exact whole-number ratios of atoms. These non-stoichiometric compounds require special consideration and may be represented with variable compositions (e.g., Fe₀.₉₅O).
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                <strong>Hydrates:</strong> When dealing with hydrated compounds, the molecular formula includes water molecules. For example, copper(II) sulfate pentahydrate has the molecular formula CuSO₄·5H₂O. The water molecules are part of the crystal structure and must be considered in molecular weight calculations.
              </p>

              <div className="bg-purple-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  Key Formula Summary
                </h4>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Multiplier:</strong> n = Molecular Weight ÷ Empirical Formula Mass</p>
                  <p><strong>Molecular Formula:</strong> (Empirical Formula) × n</p>
                  <p><strong>Verification:</strong> Calculate molecular weight from molecular formula and compare to experimental value</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Structured Data - SoftwareApplication */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Molecular Formula Calculator",
            "description": "Molecular Formula Calculator on ChemSolved",
            "url": "https://chemsolved.com/stoichiometry-calculators/molecular-formula-calculator",
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
                "name": "Molecular Formula Calculator",
                "item": "https://chemsolved.com/stoichiometry-calculators/molecular-formula-calculator"
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
