import SolutionPreparationCalculator from '@/components/calculators/SolutionPreparationCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solution Preparation Calculator | ChemCalc - Calculate Mass, Volume, Molarity',
  description: 'Calculate the mass of solute needed to prepare solutions of specific molarity and volume. Essential tool for laboratory solution preparation and chemistry experiments.',
  keywords: ['solution preparation', 'molarity calculator', 'mass calculation', 'solution preparation chemistry', 'laboratory solutions', 'stock solution', 'solution making'],
  alternates: {
    canonical: 'https://chemsolved.com/concentration-and-solution-calculators/solution-preparation-calculator',
  },
};

export default function SolutionPreparationPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <nav className="flex items-center gap-2 text-sm mb-6 animate-fade-in">
            <Link href="/" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
              Chemistry Calculators
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/concentration-and-solution-calculators" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
              Concentration & Solution Calculators
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-600 dark:text-gray-300">Solution Preparation Calculator</span>
          </nav>
        </div>

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Calculator (ABOVE THE FOLD) */}
            <div className="lg:col-span-2">
              {/* H1 Title */}
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-up">
                Solution Preparation Calculator
              </h1>

              {/* Calculator Tool - FIRST ELEMENT */}
              <div className="animate-slide-in-up" style={{ animationDelay: '100ms' }}>
                <SolutionPreparationCalculator />
              </div>

          {/* Educational Content */}
          <div className="space-y-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mt-8">
            {/* What It Does Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                What This Calculator Does
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                This solution preparation calculator helps you determine the quantities needed to prepare solutions with precise concentrations. It solves three types of problems:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li><strong>Mass Needed:</strong> How many grams of solute to weigh out for a desired molarity and volume</li>
                <li><strong>Volume Needed:</strong> What final volume to dilute to when you have a known mass of solute</li>
                <li><strong>Molarity:</strong> What concentration results from dissolving a known mass in a specific volume</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                All calculations use the fundamental molarity relationship: <strong>M = n/V = mass/(MM × V)</strong>, where M is molarity (mol/L), mass is in grams, MM is molar mass (g/mol), and V is volume (L).
              </p>
            </section>

            {/* Formula & Method */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Formula & Calculation Method
              </h2>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Core Formula</h3>
                <div className="text-center text-2xl font-bold text-primary-600 dark:text-primary-400 mb-4">
                  mass = M × V × MM
                </div>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Where:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>mass = mass of solute in grams (g)</li>
                    <li>M = molarity in moles per liter (mol/L or M)</li>
                    <li>V = volume of solution in liters (L)</li>
                    <li>MM = molar mass of solute in grams per mole (g/mol)</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Rearranged Forms:
                  </h3>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p><strong>Volume from mass:</strong> V = mass / (M × MM)</p>
                    <p><strong>Molarity from mass:</strong> M = mass / (V × MM)</p>
                    <p><strong>Molar mass (if needed):</strong> MM = mass / (M × V)</p>
                  </div>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                  <h3 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">💡 Unit Conversion Tips</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                    <li>Always convert volumes to liters: 1 L = 1000 mL</li>
                    <li>Molarity can be written as M, mol/L, or molar</li>
                    <li>Mass must be in grams, not milligrams</li>
                    <li>For millimolar (mM) solutions: 1 mM = 0.001 M</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Step-by-Step Examples */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Step-by-Step Examples
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-primary-600 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Example 1: Prepare 500 mL of 1.0 M NaCl
                  </h3>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p><strong>Given:</strong></p>
                    <ul className="list-disc list-inside ml-4">
                      <li>Desired molarity: M = 1.0 mol/L</li>
                      <li>Desired volume: V = 500 mL = 0.500 L</li>
                      <li>NaCl molar mass: MM = 58.44 g/mol</li>
                    </ul>
                    <p><strong>Find:</strong> Mass of NaCl needed</p>
                    <p><strong>Calculation:</strong></p>
                    <p>mass = M × V × MM</p>
                    <p>mass = 1.0 mol/L × 0.500 L × 58.44 g/mol</p>
                    <p>mass = 29.22 g</p>
                    <p className="mt-2"><strong>Procedure:</strong> Weigh 29.22 g of NaCl, dissolve in ~400 mL water, then dilute to exactly 500 mL in a volumetric flask.</p>
                  </div>
                </div>

                <div className="border-l-4 border-primary-600 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Example 2: Prepare 50 mM Tris buffer (100 mL)
                  </h3>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p><strong>Given:</strong></p>
                    <ul className="list-disc list-inside ml-4">
                      <li>Desired molarity: 50 mM = 0.050 M</li>
                      <li>Desired volume: V = 100 mL = 0.100 L</li>
                      <li>Tris (C₄H₁₁NO₃) molar mass: MM = 121.14 g/mol</li>
                    </ul>
                    <p><strong>Find:</strong> Mass of Tris needed</p>
                    <p><strong>Calculation:</strong></p>
                    <p>mass = M × V × MM</p>
                    <p>mass = 0.050 mol/L × 0.100 L × 121.14 g/mol</p>
                    <p>mass = 0.6057 g = 605.7 mg</p>
                    <p className="mt-2"><strong>Procedure:</strong> Weigh 0.606 g (or 606 mg) of Tris, dissolve in ~80 mL water, adjust pH to 7.4 with HCl, then dilute to 100 mL.</p>
                  </div>
                </div>

                <div className="border-l-4 border-primary-600 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Example 3: You have 10.0 g glucose - what volume for 0.5 M?
                  </h3>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p><strong>Given:</strong></p>
                    <ul className="list-disc list-inside ml-4">
                      <li>Available mass: 10.0 g</li>
                      <li>Desired molarity: M = 0.5 mol/L</li>
                      <li>Glucose (C₆H₁₂O₆) molar mass: MM = 180.16 g/mol</li>
                    </ul>
                    <p><strong>Find:</strong> Final volume needed</p>
                    <p><strong>Calculation:</strong></p>
                    <p>V = mass / (M × MM)</p>
                    <p>V = 10.0 g / (0.5 mol/L × 180.16 g/mol)</p>
                    <p>V = 10.0 / 90.08 = 0.111 L = 111 mL</p>
                    <p className="mt-2"><strong>Procedure:</strong> Dissolve 10.0 g glucose in water and dilute to exactly 111 mL (or use 110 mL for convenience).</p>
                  </div>
                </div>

                <div className="border-l-4 border-primary-600 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Example 4: What molarity from 5.0 g KCl in 250 mL?
                  </h3>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p><strong>Given:</strong></p>
                    <ul className="list-disc list-inside ml-4">
                      <li>Mass dissolved: 5.0 g</li>
                      <li>Final volume: V = 250 mL = 0.250 L</li>
                      <li>KCl molar mass: MM = 74.55 g/mol</li>
                    </ul>
                    <p><strong>Find:</strong> Resulting molarity</p>
                    <p><strong>Calculation:</strong></p>
                    <p>M = mass / (V × MM)</p>
                    <p>M = 5.0 g / (0.250 L × 74.55 g/mol)</p>
                    <p>M = 5.0 / 18.64 = 0.268 M</p>
                    <p className="mt-2"><strong>Result:</strong> The solution has a concentration of 0.27 M (or 270 mM) KCl.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Common Mistakes */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Common Mistakes to Avoid
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <h3 className="font-semibold text-red-900 dark:text-red-300 mb-2">❌ Forgetting to convert mL to L</h3>
                  <p>The formula requires volume in liters. If you use mL directly, your answer will be 1000× too small. Always convert: V(L) = V(mL) / 1000.</p>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <h3 className="font-semibold text-red-900 dark:text-red-300 mb-2">❌ Using formula weight instead of molar mass</h3>
                  <p>For ionic compounds, make sure you&apos;re using the formula weight of the entire compound (e.g., NaCl = 58.44 g/mol, not just Na = 22.99 g/mol).</p>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <h3 className="font-semibold text-red-900 dark:text-red-300 mb-2">❌ Diluting to the wrong volume</h3>
                  <p>Don&apos;t add V liters of water - dilute TO V liters total. Dissolve solute in less than the final volume, then add water to reach exactly V.</p>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <h3 className="font-semibold text-red-900 dark:text-red-300 mb-2">❌ Not accounting for water of hydration</h3>
                  <p>Hydrated salts like CaCl₂·2H₂O have extra water molecules. Use the full hydrated molar mass (147.01 g/mol), not the anhydrous mass (110.98 g/mol).</p>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <h3 className="font-semibold text-red-900 dark:text-red-300 mb-2">❌ Ignoring significant figures</h3>
                  <p>Your final answer can&apos;t be more precise than your least precise measurement. If you measure 5.0 g (2 sig figs), don&apos;t report molarity as 0.268374 M - use 0.27 M.</p>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <h3 className="font-semibold text-red-900 dark:text-red-300 mb-2">❌ Using wrong glassware</h3>
                  <p>Volumetric flasks are calibrated for precise volumes. Beakers and Erlenmeyer flasks have volume markings but are NOT accurate enough for preparing standard solutions.</p>
                </div>
              </div>
            </section>

            {/* Laboratory Procedures */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Standard Laboratory Procedures
              </h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Preparing a Solution from Solid Solute
                  </h3>
                  <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300">
                    <li><strong>Calculate mass:</strong> Use the calculator to determine mass needed</li>
                    <li><strong>Weigh accurately:</strong> Tare the balance, use weighing paper or boat, record exact mass</li>
                    <li><strong>Transfer quantitatively:</strong> Add solute to volumetric flask, rinse weighing vessel into flask</li>
                    <li><strong>Dissolve partially:</strong> Add ~75% of final volume, swirl or stir until fully dissolved</li>
                    <li><strong>Cool to room temperature:</strong> If dissolution is exothermic (e.g., NaOH, H₂SO₄), wait to cool</li>
                    <li><strong>Dilute to mark:</strong> Add water dropwise near the final volume using a dropper for precision</li>
                    <li><strong>Mix thoroughly:</strong> Invert and shake the stoppered flask 10-15 times</li>
                    <li><strong>Label clearly:</strong> Include chemical name, concentration, date, and your initials</li>
                  </ol>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Tips for Accuracy & Safety
                  </h3>
                  <div className="space-y-3 text-gray-700 dark:text-gray-300">
                    <div>
                      <p className="font-semibold">✓ Use analytical balance</p>
                      <p className="text-sm ml-4">For precise solutions, weigh to 0.0001 g (4 decimal places)</p>
                    </div>
                    <div>
                      <p className="font-semibold">✓ Select appropriate volumetric flask</p>
                      <p className="text-sm ml-4">Class A flasks have ±0.1% tolerance; don&apos;t overfill past calibration line</p>
                    </div>
                    <div>
                      <p className="font-semibold">✓ Dissolve before diluting</p>
                      <p className="text-sm ml-4">Ensure complete dissolution in partial volume before final dilution</p>
                    </div>
                    <div>
                      <p className="font-semibold">✓ Temperature matters</p>
                      <p className="text-sm ml-4">Volumetric glassware is calibrated at 20°C; allow hot solutions to cool</p>
                    </div>
                    <div>
                      <p className="font-semibold">✓ Safety first</p>
                      <p className="text-sm ml-4">Wear PPE (goggles, gloves, lab coat); add acid to water, never reverse</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQs */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Can I prepare solutions by volume instead of mass?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    For liquids, yes - but you need density to convert. For example, concentrated HCl is 37% w/w with density 1.19 g/mL. To make 1 L of 1 M HCl, you&apos;d use a dilution calculation (M₁V₁ = M₂V₂) rather than weighing.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    What if I don&apos;t have the exact size volumetric flask?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    You can scale proportionally. If you need 500 mL but only have a 1 L flask, either make 1 L (double the mass) or use a graduated cylinder for less precise work. For critical applications, use the correct volumetric glassware.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    How do I prepare very dilute solutions (like 1 μM)?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Make a concentrated stock solution (e.g., 1 mM = 0.001 M), then dilute serially. For 1 μM, dilute 1 mM stock 1:1000 (e.g., 1 mL stock + 999 mL water). This avoids weighing extremely small masses.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Do I need to adjust for purity?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Yes, if purity is not 100%. For 95% pure chemical, weigh (100/95) × calculated mass. Most reagent-grade chemicals are &gt;99% pure, but check the bottle label for assay percentage.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Can I prepare buffers with this calculator?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    This calculator finds mass of individual components. For buffers, calculate each component separately (e.g., sodium phosphate monobasic and dibasic for PBS), then combine and adjust pH. Henderson-Hasselbalch equation may be needed for pH calculations.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    How long do prepared solutions last?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Depends on the chemical and storage. Stable salts like NaCl last months if clean. Buffers typically last 1-3 months at 4°C. Solutions with biological materials (like BSA) should be made fresh or frozen in aliquots. Always check for precipitation or contamination.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    What&apos;s the difference between solution preparation and dilution?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Solution preparation starts with solid solute + solvent. Dilution starts with concentrated solution + more solvent. This calculator is for preparation from solids. For dilution, use the dilution calculator (M₁V₁ = M₂V₂).
                  </p>
                </div>
              </div>
            </section>

            {/* Applications */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Real-World Applications
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="border-l-4 border-primary-600 pl-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Analytical Chemistry</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Prepare standard solutions for calibration curves in spectroscopy, chromatography, and titrations. For example, 1000 ppm stock standards for ICP-OES analysis or 0.1 M NaOH for acid-base titrations.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary-600 pl-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Biochemistry & Molecular Biology</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Make buffers for enzyme assays, DNA/RNA extraction, and protein purification. Common preparations include 1 M Tris-HCl (pH 7.4), 0.5 M EDTA, and 10× TAE buffer for gel electrophoresis.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary-600 pl-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Cell Culture</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Prepare media supplements and treatment solutions. Calculate concentrations for antibiotics (e.g., 100 μg/mL ampicillin), growth factors, and experimental compounds at precise molarity.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border-l-4 border-primary-600 pl-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Quality Control</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Prepare test solutions and reagents for product quality testing in pharmaceuticals, food, and environmental labs. Ensure reproducibility by following standardized preparation procedures.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary-600 pl-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Education & Teaching Labs</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Demonstrate stoichiometry and solution chemistry concepts. Students learn proper technique for weighing, dissolving, and diluting while understanding the mathematical relationships.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary-600 pl-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Industrial Chemistry</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Scale calculations for batch preparation in manufacturing. Convert lab-scale recipes (mL, mg) to production scale (L, kg) while maintaining precise molarity for process control.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Troubleshooting */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Troubleshooting Common Issues
              </h2>
              <div className="space-y-4">
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                  <h3 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Solute won&apos;t dissolve completely</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm ml-4">
                    <li>Heat gently (if thermally stable) - many salts dissolve better warm</li>
                    <li>Use magnetic stirrer or sonicator for faster dissolution</li>
                    <li>Check solubility limits - you may have exceeded saturation</li>
                    <li>Ensure chemical is the correct form (anhydrous vs. hydrated)</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                  <h3 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Solution is cloudy or has precipitate</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm ml-4">
                    <li>Check if chemical has decomposed (old stock) - use fresh reagent</li>
                    <li>Water quality issues - use deionized or distilled water</li>
                    <li>pH may cause precipitation - adjust pH if needed</li>
                    <li>Temperature change may reduce solubility - warm solution</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                  <h3 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Can&apos;t weigh the calculated mass accurately</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm ml-4">
                    <li>For very small masses (&lt;10 mg), make a stock solution and dilute</li>
                    <li>For very large masses, prepare smaller volume or lower concentration</li>
                    <li>Use weighing by difference for hygroscopic chemicals</li>
                    <li>Consider making 10× stock and diluting 1:10 for final use</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Key Information */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 animate-fade-in">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Quick Reference</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-primary-600 dark:text-primary-400 mt-1">▸</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Units</p>
                        <p className="text-gray-600 dark:text-gray-400">M, g, L, g/mol</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary-600 dark:text-primary-400 mt-1">▸</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Formula</p>
                        <p className="text-gray-600 dark:text-gray-400">mass = M × V × MM</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary-600 dark:text-primary-400 mt-1">▸</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Applications</p>
                        <p className="text-gray-600 dark:text-gray-400">Lab solution prep</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary-600 dark:text-primary-400 mt-1">▸</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Level</p>
                        <p className="text-gray-600 dark:text-gray-400">High school chemistry</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Related Calculators */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 animate-fade-in" style={{ animationDelay: '100ms' }}>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Related Calculators</h3>
                  <div className="space-y-2">
                    <Link href="/concentration-and-solution-calculators/molarity-calculator" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                      <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">Molarity Calculator</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Calculate molar concentration</p>
                    </Link>
                    <Link href="/concentration-and-solution-calculators/dilution-calculator" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                      <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">Dilution Calculator</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Dilute solutions</p>
                    </Link>
                    <Link href="/concentration-and-solution-calculators/concentration-converter" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                      <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">Concentration Converter</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Convert between units</p>
                    </Link>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Related Formulas</h3>
                    <div className="space-y-2">
                      <Link href="/chemistry-formulas/solution-preparation-formula" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                        <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">Solution Preparation Formula</p>
                      </Link>
                      <Link href="/chemistry-formulas/molarity-formula" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                        <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">Molarity Formula</p>
                      </Link>
                      <Link href="/chemistry-formulas/dilution-formula" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                        <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">Dilution Formula</p>
                      </Link>
                    </div>
                  </div>
                  <div className="space-y-2 mt-4">
                    <Link href="/concentration-and-solution-calculators" className="block p-3 rounded-lg bg-primary-50 dark:bg-primary-900/20 hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors group">
                      <p className="font-semibold text-primary-700 dark:text-primary-300">View All Concentration Calculators →</p>
                    </Link>
                  </div>
                </div>

                {/* Where It's Used */}
                <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 shadow-lg border border-primary-200 dark:border-primary-700 animate-fade-in" style={{ animationDelay: '200ms' }}>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Where It&apos;s Used</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🧪</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Laboratory</p>
                        <p className="text-gray-600 dark:text-gray-400">Solution preparation</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🔬</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Research</p>
                        <p className="text-gray-600 dark:text-gray-400">Chemical analysis</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🏥</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Medical</p>
                        <p className="text-gray-600 dark:text-gray-400">Drug formulations</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🏭</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Industry</p>
                        <p className="text-gray-600 dark:text-gray-400">Process solutions</p>
                      </div>
                    </div>
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
            "name": "Solution Preparation Calculator",
            "description": "Solution Preparation Calculator on ChemSolved",
            "url": "https://chemsolved.com/concentration-and-solution-calculators/solution-preparation-calculator",
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
                "name": "Solution Preparation Calculator",
                "item": "https://chemsolved.com/concentration-and-solution-calculators/solution-preparation-calculator"
              }
            ]
          })
        }}
      />
      </main>
      <Footer />
    </>
  );
}
