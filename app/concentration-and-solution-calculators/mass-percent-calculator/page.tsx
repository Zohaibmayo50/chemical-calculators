import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MassPercentCalculator from '@/components/calculators/MassPercentCalculator';

export const metadata: Metadata = {
  title: 'Mass Percent Calculator | Calculate Solution Concentration',
  description: 'Calculate mass percent (weight/weight %) of solute in solution. Free online calculator with step-by-step calculations for chemistry solutions and concentrations.',
  keywords: ['mass percent calculator', 'weight percent', 'concentration calculator', 'solution chemistry', 'w/w percent', 'mass fraction'],
  alternates: {
    canonical: 'https://chemicalcalculators.com/concentration-and-solution-calculators/mass-percent-calculator',
  },
};

export default function MassPercentCalculatorPage() {
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
            <span className="text-gray-600 dark:text-gray-300">Mass Percent Calculator</span>
          </nav>
        </div>

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Calculator (ABOVE THE FOLD) */}
            <div className="lg:col-span-2">
              {/* H1 Title */}
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-up">
                Mass Percent Calculator
              </h1>

              {/* Calculator Tool - FIRST ELEMENT */}
              <div className="animate-slide-in-up" style={{ animationDelay: '100ms' }}>
                <MassPercentCalculator />
              </div>
      
      {/* What It Does Section */}
      <section className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">What This Calculator Does</h2>
        <div className="bg-white rounded-lg border border-slate-200 p-6">
          <p className="text-slate-700 mb-4">
            The <strong>Mass Percent Calculator</strong> determines the concentration of a solution expressed as the percentage 
            of solute mass relative to total solution mass. Also known as <strong>weight/weight percent (w/w%)</strong> or 
            <strong>mass fraction</strong>, this is one of the most common ways to express solution concentration in chemistry, 
            biology, and industrial applications.
          </p>
          <p className="text-slate-700 mb-4">
            This calculator can solve for three different variables:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li><strong>Mass Percent</strong> - Calculate what percentage of the solution is solute</li>
            <li><strong>Solute Mass</strong> - Find how much solute is needed to make a solution of a given concentration</li>
            <li><strong>Solution Mass</strong> - Determine the total mass of solution containing a certain amount of solute</li>
          </ul>
          <p className="text-slate-700 mt-4">
            Mass percent is particularly useful for:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>Commercial products (e.g., 3% hydrogen peroxide, 0.9% saline solution)</li>
            <li>Food chemistry (e.g., 5% acetic acid in vinegar, 10% sugar solution)</li>
            <li>Industrial processes where exact molar quantities aren&apos;t critical</li>
            <li>Quality control in manufacturing</li>
            <li>Pharmaceutical preparations</li>
          </ul>
        </div>
      </section>

      {/* Formula & Method Section */}
      <section className="mt-8 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Formula & Calculation Method</h2>
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 p-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-3">Basic Formula</h3>
          <div className="bg-white rounded-lg p-4 mb-4 border border-blue-200">
            <p className="text-center text-lg font-mono text-slate-800">
              Mass % = (mass of solute / mass of solution) × 100
            </p>
          </div>
          
          <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Important Relationships</h3>
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <p className="font-semibold text-slate-900 mb-2">Mass of Solution:</p>
              <p className="font-mono text-slate-700">
                mass_solution = mass_solute + mass_solvent
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <p className="font-semibold text-slate-900 mb-2">Rearranged to Find Solute Mass:</p>
              <p className="font-mono text-slate-700">
                mass_solute = (Mass % / 100) × mass_solution
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <p className="font-semibold text-slate-900 mb-2">Rearranged to Find Solution Mass:</p>
              <p className="font-mono text-slate-700">
                mass_solution = (mass_solute × 100) / Mass %
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Key Concepts</h3>
          <ul className="space-y-2 text-slate-700">
            <li><strong>Mass percent is dimensionless</strong> - It&apos;s a ratio expressed as a percentage</li>
            <li><strong>All masses must be in the same units</strong> - grams, kg, mg, etc.</li>
            <li><strong>Temperature independent</strong> - Unlike molarity, mass percent doesn&apos;t change with temperature</li>
            <li><strong>Range: 0% to 100%</strong> - 0% = pure solvent, 100% = pure solute</li>
            <li><strong>Additive for similar solutions</strong> - Can calculate concentration when mixing solutions</li>
          </ul>
        </div>
      </section>

      {/* Step-by-Step Example */}
      <section className="mt-8 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Step-by-Step Example</h2>
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 p-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-3">Problem</h3>
          <p className="text-slate-700 mb-4">
            You dissolve <strong>25 grams of sodium chloride (NaCl)</strong> in <strong>475 grams of water</strong>. 
            What is the mass percent of NaCl in the solution?
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Solution</h3>
          
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 border border-green-200">
              <p className="font-semibold text-slate-900 mb-2">Step 1: Identify the given values</p>
              <ul className="list-disc pl-6 space-y-1 text-slate-700">
                <li>Mass of solute (NaCl) = 25 g</li>
                <li>Mass of solvent (H₂O) = 475 g</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4 border border-green-200">
              <p className="font-semibold text-slate-900 mb-2">Step 2: Calculate total solution mass</p>
              <p className="text-slate-700 mb-2">
                Mass of solution = mass of solute + mass of solvent
              </p>
              <p className="text-slate-700 mb-2">
                Mass of solution = 25 g + 475 g = <strong>500 g</strong>
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-green-200">
              <p className="font-semibold text-slate-900 mb-2">Step 3: Apply the mass percent formula</p>
              <p className="text-slate-700 mb-2">
                Mass % = (mass of solute / mass of solution) × 100
              </p>
              <p className="text-slate-700 mb-2">
                Mass % = (25 g / 500 g) × 100
              </p>
              <p className="text-slate-700 mb-2">
                Mass % = 0.05 × 100 = <strong>5%</strong>
              </p>
            </div>

            <div className="bg-green-100 rounded-lg p-4 border border-green-300">
              <p className="font-semibold text-slate-900 mb-2">Answer</p>
              <p className="text-slate-700">
                The mass percent of NaCl in the solution is <strong>5% (w/w)</strong>.
              </p>
              <p className="text-slate-600 text-sm mt-2">
                This is similar to the concentration of saline solution used in medical applications (0.9% NaCl is physiological saline).
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Example 2: Finding Solute Mass</h3>
          <p className="text-slate-700 mb-4">
            How much sugar (C₁₂H₂₂O₁₁) is needed to make <strong>250 g of a 15% sugar solution</strong>?
          </p>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 border border-green-200">
              <p className="font-semibold text-slate-900 mb-2">Step 1: Use the rearranged formula</p>
              <p className="text-slate-700">
                mass_solute = (Mass % / 100) × mass_solution
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-green-200">
              <p className="font-semibold text-slate-900 mb-2">Step 2: Plug in values</p>
              <p className="text-slate-700 mb-2">
                mass_solute = (15 / 100) × 250 g
              </p>
              <p className="text-slate-700 mb-2">
                mass_solute = 0.15 × 250 g = <strong>37.5 g</strong>
              </p>
            </div>

            <div className="bg-green-100 rounded-lg p-4 border border-green-300">
              <p className="font-semibold text-slate-900 mb-2">Answer</p>
              <p className="text-slate-700">
                You need <strong>37.5 g of sugar</strong> dissolved in <strong>212.5 g of water</strong> (250 g - 37.5 g) 
                to make 250 g of 15% sugar solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes Section */}
      <section className="mt-8 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Common Mistakes to Avoid</h2>
        <div className="bg-red-50 rounded-lg border border-red-200 p-6">
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 border border-red-200">
              <h3 className="text-lg font-semibold text-red-900 mb-2">❌ Using solvent mass instead of solution mass</h3>
              <p className="text-slate-700 mb-2">
                <strong>Wrong:</strong> Mass % = (25 g / 475 g) × 100 = 5.26%
              </p>
              <p className="text-slate-700">
                <strong>Right:</strong> Mass % = (25 g / 500 g) × 100 = 5.00%
              </p>
              <p className="text-slate-600 text-sm mt-2">
                Remember: solution mass = solute mass + solvent mass
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-red-200">
              <h3 className="text-lg font-semibold text-red-900 mb-2">❌ Mixing up units</h3>
              <p className="text-slate-700 mb-2">
                Using grams for solute and kg for solution gives incorrect results.
              </p>
              <p className="text-slate-600 text-sm mt-2">
                Always convert all masses to the same unit before calculating
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-red-200">
              <h3 className="text-lg font-semibold text-red-900 mb-2">❌ Confusing with volume percent</h3>
              <p className="text-slate-700 mb-2">
                Mass percent uses masses, not volumes. "5% w/w" is different from "5% v/v"
              </p>
              <p className="text-slate-600 text-sm mt-2">
                Be clear about which type of percent you're working with
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-red-200">
              <h3 className="text-lg font-semibold text-red-900 mb-2">❌ Forgetting to multiply by 100</h3>
              <p className="text-slate-700 mb-2">
                The fraction must be multiplied by 100 to get a percentage
              </p>
              <p className="text-slate-600 text-sm mt-2">
                (25/500) = 0.05, not 5%. You need (25/500) × 100 = 5%
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-red-200">
              <h3 className="text-lg font-semibold text-red-900 mb-2">❌ Assuming volume is additive</h3>
              <p className="text-slate-700 mb-2">
                When mixing solutions, masses are additive but volumes may not be
              </p>
              <p className="text-slate-600 text-sm mt-2">
                For volume-based calculations, account for volume contraction/expansion
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Tips Section */}
      <section className="mt-8 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Converting Between Concentration Units</h2>
        <div className="bg-purple-50 rounded-lg border border-purple-200 p-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-3">Mass % to Molarity</h3>
          <div className="bg-white rounded-lg p-4 mb-4 border border-purple-200">
            <p className="text-slate-700 mb-2">
              To convert mass percent to molarity, you also need:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-slate-700">
              <li>Molar mass of solute (g/mol)</li>
              <li>Density of solution (g/mL or g/L)</li>
            </ul>
            <p className="text-slate-700 mt-3 font-mono text-sm">
              Molarity = (Mass % × density × 10) / Molar Mass
            </p>
            <p className="text-slate-600 text-sm mt-2">
              (if density is in g/mL and you want molarity in mol/L)
            </p>
          </div>

          <h3 className="text-xl font-semibold text-slate-900 mb-3">Mass % to PPM</h3>
          <div className="bg-white rounded-lg p-4 mb-4 border border-purple-200">
            <p className="text-slate-700 mb-2">
              For dilute aqueous solutions:
            </p>
            <p className="font-mono text-slate-700">
              ppm = Mass % × 10,000
            </p>
            <p className="text-slate-600 text-sm mt-2">
              Example: 0.5% = 5,000 ppm
            </p>
          </div>

          <h3 className="text-xl font-semibold text-slate-900 mb-3">Mass % to Mass Fraction</h3>
          <div className="bg-white rounded-lg p-4 border border-purple-200">
            <p className="font-mono text-slate-700 mb-2">
              Mass fraction = Mass % / 100
            </p>
            <p className="text-slate-600 text-sm">
              Example: 25% = 0.25 mass fraction
            </p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="mt-8 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              What&apos;s the difference between mass percent and volume percent?
            </h3>
            <p className="text-slate-700">
              <strong>Mass percent (w/w%)</strong> uses masses: (mass_solute/mass_solution) × 100. 
              <strong>Volume percent (v/v%)</strong> uses volumes: (volume_solute/volume_solution) × 100. 
              <strong>Weight/volume percent (w/v%)</strong> uses mass of solute and volume of solution: (mass_solute/volume_solution) × 100. 
              Always check which type is specified - they give different values!
            </p>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              How do I prepare a solution from mass percent?
            </h3>
            <p className="text-slate-700">
              To make a solution of known mass percent: (1) Decide the total mass of solution you need, 
              (2) Calculate solute mass = (Mass % / 100) × total_mass, (3) Calculate solvent mass = total_mass - solute_mass, 
              (4) Weigh the solute, (5) Add the calculated mass of solvent, (6) Mix thoroughly.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Why is mass percent preferred in some applications?
            </h3>
            <p className="text-slate-700">
              Mass percent is temperature-independent (unlike molarity, which changes with temperature because volume changes). 
              It&apos;s easier to measure masses than volumes accurately, especially for viscous liquids or when precision is critical. 
              It doesn&apos;t require knowing the molar mass of the solute. It&apos;s intuitive for labeling commercial products.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Can mass percent be greater than 100%?
            </h3>
            <p className="text-slate-700">
              No, mass percent cannot exceed 100%. A value of 100% would mean the solution is pure solute (no solvent at all). 
              Values between 0% and 100% indicate the relative amount of solute in the mixture. If you calculate a value over 100%, 
              check your math - you likely used solvent mass instead of solution mass in the denominator.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              What does "concentrated" mean in terms of mass percent?
            </h3>
            <p className="text-slate-700">
              "Concentrated" is relative, but for common chemicals: <strong>Concentrated HCl</strong> is ~37% w/w, 
              <strong>Concentrated H₂SO₄</strong> is ~98% w/w, <strong>Concentrated NH₃</strong> is ~28-30% w/w, 
              <strong>Household bleach</strong> is ~5-6% NaOCl, <strong>Hydrogen peroxide</strong> (commercial) is 3%, 30%, or 90% depending on grade.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              How do I mix two solutions of different mass percents?
            </h3>
            <p className="text-slate-700">
              Use the formula: <strong>mass_final × %_final = (mass₁ × %₁) + (mass₂ × %₂)</strong>. 
              The total mass of solute is conserved. Calculate the solute mass in each solution, add them, 
              then divide by the total solution mass to get the final concentration. This assumes ideal mixing 
              (which is usually close enough for most applications).
            </p>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              What&apos;s the relationship between mass percent and density?
            </h3>
            <p className="text-slate-700">
              Mass percent and density are independent but related properties. Knowing both allows you to convert to molarity. 
              Solutions with higher solute mass percent often (but not always) have higher densities than pure solvent. 
              For example, concentrated sugar solutions are denser than water, while concentrated ethanol solutions are less dense. 
              Density tables are useful for converting between different concentration units.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Is mass percent the same as percentage by weight?
            </h3>
            <p className="text-slate-700">
              Yes! "Mass percent," "weight percent," "percent by weight," "percent by mass," and "w/w%" all mean the same thing. 
              Although technically mass and weight are different (weight depends on gravity), in chemistry these terms are used 
              interchangeably because we're comparing ratios, and the gravitational factor cancels out.
            </p>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="mt-8 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Real-World Applications</h2>
        <div className="bg-amber-50 rounded-lg border border-amber-200 p-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border border-amber-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">🏥 Medicine & Healthcare</h3>
              <ul className="list-disc pl-6 space-y-1 text-slate-700">
                <li>0.9% saline (physiological saline)</li>
                <li>3% hydrogen peroxide (antiseptic)</li>
                <li>5% dextrose solution (IV fluids)</li>
                <li>Topical ointments and creams</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4 border border-amber-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">🍽️ Food Industry</h3>
              <ul className="list-disc pl-6 space-y-1 text-slate-700">
                <li>5% acetic acid in vinegar</li>
                <li>Sugar content in beverages</li>
                <li>Salt concentration in brines</li>
                <li>Alcohol content in spirits</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4 border border-amber-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">🏭 Manufacturing</h3>
              <ul className="list-disc pl-6 space-y-1 text-slate-700">
                <li>Concentration of cleaning solutions</li>
                <li>Acid/base strength in industrial processes</li>
                <li>Additive concentrations in materials</li>
                <li>Quality control testing</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4 border border-amber-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">🔬 Laboratory</h3>
              <ul className="list-disc pl-6 space-y-1 text-slate-700">
                <li>Reagent preparation</li>
                <li>Stock solution preparation</li>
                <li>Sample analysis reporting</li>
                <li>Buffer solution preparation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
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
                        <p className="text-gray-600 dark:text-gray-400">%, w/w%</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary-600 dark:text-primary-400 mt-1">▸</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Formula</p>
                        <p className="text-gray-600 dark:text-gray-400">(solute mass/solution mass) × 100</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary-600 dark:text-primary-400 mt-1">▸</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Applications</p>
                        <p className="text-gray-600 dark:text-gray-400">Food, pharma, industry</p>
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
                    <Link href="/concentration-and-solution-calculators/concentration-converter" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                      <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">Concentration Converter</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Convert between units</p>
                    </Link>
                    <Link href="/concentration-and-solution-calculators/molarity-calculator" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                      <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">Molarity Calculator</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Calculate molar concentration</p>
                    </Link>
                    <Link href="/concentration-and-solution-calculators/ppm-calculator" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                      <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">PPM Calculator</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Calculate parts per million</p>
                    </Link>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Related Formulas</h3>
                    <div className="space-y-2">
                      <Link href="/chemistry-formulas/mass-percent-formula" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                        <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">Mass Percent Formula</p>
                      </Link>
                      <Link href="/mass-percent-vs-mole-fraction" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                        <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">Mass Percent vs Mole Fraction</p>
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
                      <span className="text-2xl">🍎</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Food Industry</p>
                        <p className="text-gray-600 dark:text-gray-400">Product labeling</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">💊</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Pharmaceutical</p>
                        <p className="text-gray-600 dark:text-gray-400">Drug formulations</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🏭</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Manufacturing</p>
                        <p className="text-gray-600 dark:text-gray-400">Quality control</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🧪</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Laboratory</p>
                        <p className="text-gray-600 dark:text-gray-400">Solution preparation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
