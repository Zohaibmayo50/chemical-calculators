import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MoleFractionCalculator from '@/components/calculators/MoleFractionCalculator';

export const metadata: Metadata = {
  title: 'Mole Fraction Calculator | Calculate Composition in Mixtures',
  description: 'Calculate mole fraction of components in mixtures and solutions. Free online calculator with chi (χ) calculations for chemistry and chemical engineering.',
  keywords: ['mole fraction calculator', 'chi calculator', 'mixture composition', 'solution chemistry', 'vapor pressure', 'Raoults law'],
  alternates: {
    canonical: 'https://chemicalcalculators.com/concentration-and-solution-calculators/mole-fraction-calculator',
  },
};

export default function MoleFractionCalculatorPage() {
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
            <span className="text-gray-600 dark:text-gray-300">Mole Fraction Calculator</span>
          </nav>
        </div>

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Calculator (ABOVE THE FOLD) */}
            <div className="lg:col-span-2">
              {/* H1 Title */}
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-up">
                Mole Fraction Calculator
              </h1>

              {/* Calculator Tool - FIRST ELEMENT */}
              <div className="animate-slide-in-up" style={{ animationDelay: '100ms' }}>
                <MoleFractionCalculator />
              </div>
      
      {/* What It Does Section */}
      <section className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">What This Calculator Does</h2>
        <div className="bg-white rounded-lg border border-slate-200 p-6">
          <p className="text-slate-700 mb-4">
            The <strong>Mole Fraction Calculator</strong> determines the <strong>mole fraction (χ, pronounced &quot;chi&quot;)</strong> 
            of each component in a mixture or solution. The mole fraction represents the ratio of moles of one component 
            to the total moles of all components, expressed as a dimensionless number between 0 and 1.
          </p>
          <p className="text-slate-700 mb-4">
            Key characteristics of mole fraction:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li><strong>Dimensionless</strong> - No units, just a pure ratio</li>
            <li><strong>Range: 0 to 1</strong> - Where 0 means component is absent, 1 means pure component</li>
            <li><strong>Sum equals 1</strong> - Σχᵢ = 1 for all components in the mixture</li>
            <li><strong>Temperature-independent</strong> - Unlike molarity, doesn&apos;t change with temperature</li>
            <li><strong>Pressure-independent</strong> - Especially useful for gas mixtures</li>
          </ul>
          <p className="text-slate-700 mt-4">
            Mole fraction is essential for:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li><strong>Vapor pressure calculations</strong> - Raoult's law and ideal solution behavior</li>
            <li><strong>Phase equilibria</strong> - Distillation, liquid-liquid extraction</li>
            <li><strong>Chemical thermodynamics</strong> - Activity, fugacity, chemical potential</li>
            <li><strong>Gas mixtures</strong> - Partial pressure calculations (Dalton's law)</li>
            <li><strong>Colligative properties</strong> - Boiling point elevation, freezing point depression</li>
            <li><strong>Chemical engineering</strong> - Process design, separation operations</li>
          </ul>
        </div>
      </section>

      {/* Formula & Method Section */}
      <section className="mt-8 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Formula & Calculation Method</h2>
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 p-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-3">Basic Formula</h3>
          <div className="bg-white rounded-lg p-4 mb-4 border border-blue-200">
            <p className="text-center text-lg font-mono text-slate-800 mb-2">
              χₐ = nₐ / (n₁ + n₂ + n₃ + ... + nₙ)
            </p>
            <p className="text-center text-sm text-slate-600 mb-2">
              or more concisely:
            </p>
            <p className="text-center text-lg font-mono text-slate-800">
              χₐ = nₐ / Σnᵢ
            </p>
          </div>
          
          <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Where:</h3>
          <div className="bg-white rounded-lg p-4 mb-4 border border-blue-200">
            <ul className="space-y-2 text-slate-700">
              <li><strong>χₐ</strong> = mole fraction of component A</li>
              <li><strong>nₐ</strong> = number of moles of component A</li>
              <li><strong>Σnᵢ</strong> = sum of moles of all components in the mixture</li>
              <li><strong>n_total</strong> = n₁ + n₂ + n₃ + ... (total moles)</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Key Relationship</h3>
          <div className="bg-white rounded-lg p-4 mb-4 border border-blue-200">
            <p className="text-center font-mono text-slate-800 text-lg mb-2">
              Σχᵢ = χ₁ + χ₂ + χ₃ + ... + χₙ = 1
            </p>
            <p className="text-slate-600 text-sm text-center">
              The sum of all mole fractions in a mixture always equals exactly 1
            </p>
          </div>

          <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Conversion from Mass to Moles</h3>
          <div className="bg-white rounded-lg p-4 border border-blue-200">
            <p className="text-slate-700 mb-2">
              If you have masses instead of moles, first convert:
            </p>
            <p className="font-mono text-slate-800 text-center">
              nᵢ = massᵢ / Molar_Massᵢ
            </p>
            <p className="text-slate-600 text-sm mt-2">
              Then calculate mole fractions using the converted mole values
            </p>
          </div>

          <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Key Concepts</h3>
          <ul className="space-y-2 text-slate-700">
            <li><strong>Mole fraction × 100 = mole percent</strong> - Often expressed as percentage</li>
            <li><strong>Independent of amount</strong> - Intensive property (doesn&apos;t depend on system size)</li>
            <li><strong>Ideal for gas mixtures</strong> - Directly relates to partial pressure</li>
            <li><strong>No volume assumptions</strong> - Unlike molarity, doesn&apos;t require knowing solution volume</li>
            <li><strong>Symmetrical</strong> - Treats solvent and solute equally</li>
          </ul>
        </div>
      </section>

      {/* Step-by-Step Example */}
      <section className="mt-8 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Step-by-Step Example</h2>
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 p-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-3">Problem 1: Gas Mixture</h3>
          <p className="text-slate-700 mb-4">
            A gas cylinder contains <strong>2.5 moles of N₂</strong>, <strong>1.5 moles of O₂</strong>, and 
            <strong>0.5 moles of Ar</strong>. Calculate the mole fraction of each gas.
          </p>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 border border-green-200">
              <p className="font-semibold text-slate-900 mb-2">Step 1: Identify given values</p>
              <ul className="list-disc pl-6 space-y-1 text-slate-700">
                <li>n(N₂) = 2.5 mol</li>
                <li>n(O₂) = 1.5 mol</li>
                <li>n(Ar) = 0.5 mol</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4 border border-green-200">
              <p className="font-semibold text-slate-900 mb-2">Step 2: Calculate total moles</p>
              <p className="text-slate-700 mb-2">
                n_total = n(N₂) + n(O₂) + n(Ar)
              </p>
              <p className="text-slate-700">
                n_total = 2.5 + 1.5 + 0.5 = <strong>4.5 mol</strong>
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-green-200">
              <p className="font-semibold text-slate-900 mb-2">Step 3: Calculate each mole fraction</p>
              <div className="space-y-2 text-slate-700">
                <p>χ(N₂) = 2.5 / 4.5 = <strong>0.556</strong> (55.6%)</p>
                <p>χ(O₂) = 1.5 / 4.5 = <strong>0.333</strong> (33.3%)</p>
                <p>χ(Ar) = 0.5 / 4.5 = <strong>0.111</strong> (11.1%)</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-green-200">
              <p className="font-semibold text-slate-900 mb-2">Step 4: Verify sum equals 1</p>
              <p className="text-slate-700 mb-2">
                Σχ = 0.556 + 0.333 + 0.111 = <strong>1.000</strong> ✓
              </p>
            </div>

            <div className="bg-green-100 rounded-lg p-4 border border-green-300">
              <p className="font-semibold text-slate-900 mb-2">Answer</p>
              <p className="text-slate-700">
                <strong>χ(N₂) = 0.556</strong>, <strong>χ(O₂) = 0.333</strong>, <strong>χ(Ar) = 0.111</strong>
              </p>
              <p className="text-slate-600 text-sm mt-2">
                For ideal gases, these mole fractions also represent the volume fractions and can be used with 
                Dalton's law to find partial pressures: Pᵢ = χᵢ × P_total
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-8">Problem 2: Solution from Masses</h3>
          <p className="text-slate-700 mb-4">
            A solution is prepared by dissolving <strong>58.5 g of NaCl</strong> (MM = 58.5 g/mol) in 
            <strong>180 g of water</strong> (MM = 18.0 g/mol). Calculate the mole fraction of NaCl.
          </p>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 border border-green-200">
              <p className="font-semibold text-slate-900 mb-2">Step 1: Convert masses to moles</p>
              <p className="text-slate-700 mb-2">
                n(NaCl) = 58.5 g / 58.5 g/mol = <strong>1.00 mol</strong>
              </p>
              <p className="text-slate-700">
                n(H₂O) = 180 g / 18.0 g/mol = <strong>10.0 mol</strong>
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-green-200">
              <p className="font-semibold text-slate-900 mb-2">Step 2: Calculate total moles</p>
              <p className="text-slate-700">
                n_total = 1.00 + 10.0 = <strong>11.0 mol</strong>
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-green-200">
              <p className="font-semibold text-slate-900 mb-2">Step 3: Calculate mole fractions</p>
              <p className="text-slate-700 mb-2">
                χ(NaCl) = 1.00 / 11.0 = <strong>0.0909</strong> (9.09%)
              </p>
              <p className="text-slate-700">
                χ(H₂O) = 10.0 / 11.0 = <strong>0.909</strong> (90.9%)
              </p>
            </div>

            <div className="bg-green-100 rounded-lg p-4 border border-green-300">
              <p className="font-semibold text-slate-900 mb-2">Answer</p>
              <p className="text-slate-700">
                The mole fraction of NaCl is <strong>0.0909</strong>, and the mole fraction of water is <strong>0.909</strong>.
              </p>
              <p className="text-slate-600 text-sm mt-2">
                This is approximately a saturated NaCl solution at room temperature. Note that most of the molecules 
                in the solution are still water (&gt;90%), even though it&apos;s a concentrated salt solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications with Laws */}
      <section className="mt-8 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Applications in Chemistry Laws</h2>
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200 p-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-3">Raoult's Law (Vapor Pressure)</h3>
          <div className="bg-white rounded-lg p-4 mb-4 border border-purple-200">
            <p className="text-slate-700 mb-2">
              The vapor pressure of a component in an ideal solution is:
            </p>
            <p className="font-mono text-slate-800 text-center mb-2">
              Pᵢ = χᵢ × P°ᵢ
            </p>
            <p className="text-slate-600 text-sm">
              where P°ᵢ is the vapor pressure of pure component i. Total vapor pressure: P_total = Σ(χᵢ × P°ᵢ)
            </p>
          </div>

          <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Dalton's Law (Partial Pressures)</h3>
          <div className="bg-white rounded-lg p-4 mb-4 border border-purple-200">
            <p className="text-slate-700 mb-2">
              For gas mixtures, the partial pressure of each gas is:
            </p>
            <p className="font-mono text-slate-800 text-center mb-2">
              Pᵢ = χᵢ × P_total
            </p>
            <p className="text-slate-600 text-sm">
              The mole fraction equals the pressure fraction for ideal gases
            </p>
          </div>

          <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Colligative Properties</h3>
          <div className="bg-white rounded-lg p-4 mb-4 border border-purple-200">
            <p className="text-slate-700 mb-2">
              <strong>Freezing Point Depression:</strong>
            </p>
            <p className="font-mono text-slate-800 text-center mb-3">
              ΔTf = Kf × m × i ≈ Kf × (χ_solute / M_solvent)
            </p>
            <p className="text-slate-700 mb-2">
              <strong>Boiling Point Elevation:</strong>
            </p>
            <p className="font-mono text-slate-800 text-center">
              ΔTb = Kb × m × i
            </p>
          </div>

          <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Henry's Law (Gas Solubility)</h3>
          <div className="bg-white rounded-lg p-4 border border-purple-200">
            <p className="text-slate-700 mb-2">
              For gases dissolved in liquids:
            </p>
            <p className="font-mono text-slate-800 text-center mb-2">
              P_gas = KH × χ_gas
            </p>
            <p className="text-slate-600 text-sm">
              where KH is Henry's constant. Used for dissolved gases like CO₂ in water or O₂ in blood
            </p>
          </div>
        </div>
      </section>

      {/* Common Mistakes Section */}
      <section className="mt-8 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Common Mistakes to Avoid</h2>
        <div className="bg-red-50 rounded-lg border border-red-200 p-6">
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 border border-red-200">
              <h3 className="text-lg font-semibold text-red-900 mb-2">❌ Forgetting to include all components</h3>
              <p className="text-slate-700 mb-2">
                When calculating total moles, you must include ALL components, including the solvent
              </p>
              <p className="text-slate-600 text-sm mt-2">
                Don&apos;t forget the water when calculating mole fraction of solute in aqueous solution!
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-red-200">
              <h3 className="text-lg font-semibold text-red-900 mb-2">❌ Using masses instead of moles</h3>
              <p className="text-slate-700 mb-2">
                Mole fraction requires MOLES, not grams. Always convert masses using molar mass
              </p>
              <p className="text-slate-600 text-sm mt-2">
                50g of NaCl and 50g of H₂O do NOT have equal mole fractions!
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-red-200">
              <h3 className="text-lg font-semibold text-red-900 mb-2">❌ Confusing mole fraction with mass fraction</h3>
              <p className="text-slate-700 mb-2">
                Mole fraction = moles/moles. Mass fraction = mass/mass. They're different!
              </p>
              <p className="text-slate-600 text-sm mt-2">
                A 50:50 mass mixture doesn&apos;t mean 0.5 mole fraction unless molar masses are equal
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-red-200">
              <h3 className="text-lg font-semibold text-red-900 mb-2">❌ Expecting sum ≠ 1</h3>
              <p className="text-slate-700 mb-2">
                If your mole fractions don&apos;t sum to 1.000, you made an error in calculation
              </p>
              <p className="text-slate-600 text-sm mt-2">
                This is a built-in check - use it to verify your work!
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-red-200">
              <h3 className="text-lg font-semibold text-red-900 mb-2">❌ Assuming mole fraction = volume fraction (liquids)</h3>
              <p className="text-slate-700 mb-2">
                For liquids, mole fraction ≠ volume fraction due to different molar volumes
              </p>
              <p className="text-slate-600 text-sm mt-2">
                For ideal gases, they're equal. For liquids, they're usually different
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conversions Section */}
      <section className="mt-8 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Converting Between Concentration Units</h2>
        <div className="bg-cyan-50 rounded-lg border border-cyan-200 p-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-3">Mole Fraction ↔ Molality</h3>
          <div className="bg-white rounded-lg p-4 mb-4 border border-cyan-200">
            <p className="text-slate-700 mb-2">
              For a binary solution (solute + solvent):
            </p>
            <p className="font-mono text-slate-800 text-center text-sm mb-2">
              m = (χ_solute × 1000) / (χ_solvent × MM_solvent)
            </p>
            <p className="text-slate-600 text-sm">
              where m = molality (mol/kg), MM = molar mass of solvent (g/mol)
            </p>
          </div>

          <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Mole Fraction ↔ Molarity</h3>
          <div className="bg-white rounded-lg p-4 mb-4 border border-cyan-200">
            <p className="text-slate-700 mb-2">
              Requires knowing solution density (ρ):
            </p>
            <p className="font-mono text-slate-800 text-center text-sm mb-2">
              M = (χ_solute × ρ × 1000) / ((χ_solute × MM_solute) + (χ_solvent × MM_solvent))
            </p>
            <p className="text-slate-600 text-sm">
              More complex because molarity depends on solution volume
            </p>
          </div>

          <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Mole Fraction ↔ Mass Percent</h3>
          <div className="bg-white rounded-lg p-4 border border-cyan-200">
            <p className="text-slate-700 mb-2">
              To convert mole fraction to mass percent:
            </p>
            <p className="font-mono text-slate-800 text-center text-sm mb-2">
              Mass % = (χᵢ × MMᵢ / Σ(χⱼ × MMⱼ)) × 100
            </p>
            <p className="text-slate-600 text-sm">
              Requires knowing molar masses of all components
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
              Why use mole fraction instead of molarity or molality?
            </h3>
            <p className="text-slate-700">
              Mole fraction is <strong>temperature-independent</strong> (unlike molarity) and <strong>pressure-independent</strong>, 
              making it ideal for thermodynamic calculations. It treats all components symmetrically (no special "solvent" vs "solute"). 
              It&apos;s essential for vapor-liquid equilibrium, partial pressure calculations, and activity coefficients. For non-aqueous 
              solutions and gas mixtures, mole fraction is often the most natural concentration unit.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Can mole fraction be greater than 1?
            </h3>
            <p className="text-slate-700">
              No, never. Mole fraction is always between 0 and 1. A value of 0 means the component is absent. A value of 1 means 
              the mixture is pure in that component (no other components present). If you calculate χ &gt; 1, you&apos;ve made an error - 
              possibly used the number of moles of one component instead of the total moles in the denominator.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              How is mole fraction used in Raoult's Law?
            </h3>
            <p className="text-slate-700">
              Raoult's Law states that the partial vapor pressure of each component in an ideal solution equals its mole fraction 
              times its pure vapor pressure: <strong>Pᵢ = χᵢ × P°ᵢ</strong>. This is fundamental in distillation. For example, 
              if ethanol has χ = 0.5 in a water-ethanol solution, and P°(ethanol) = 44 mmHg at 20°C, then the partial pressure 
              of ethanol vapor is 0.5 × 44 = 22 mmHg.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              What&apos;s the difference between mole fraction and mole percent?
            </h3>
            <p className="text-slate-700">
              <strong>Mole fraction</strong> is a decimal between 0 and 1. <strong>Mole percent</strong> is mole fraction × 100, 
              expressed as a percentage. For example, χ = 0.21 is the same as 21 mole percent. Air contains O₂ with 
              χ = 0.2095 or 20.95 mole%. They convey the same information, just different scales. In equations, always use 
              mole fraction (the decimal form).
            </p>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              How do I handle ionic compounds when calculating mole fraction?
            </h3>
            <p className="text-slate-700">
              For most purposes, use the moles of the ionic compound as a whole (e.g., 1 mole of NaCl, not separate Na⁺ and Cl⁻). 
              However, for colligative properties, you may need to account for dissociation using the van't Hoff factor (i). 
              For example, NaCl dissociates into 2 particles, so its effective mole fraction for colligative properties is doubled. 
              The context of your calculation determines which approach to use.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              What&apos;s an &quot;effective mole fraction&quot; in non-ideal solutions?
            </h3>
            <p className="text-slate-700">
              Real solutions deviate from ideal behavior. The <strong>activity</strong> (aᵢ) replaces mole fraction in 
              thermodynamic equations: aᵢ = γᵢ × χᵢ, where γᵢ is the activity coefficient. For ideal solutions, γ = 1 and 
              activity equals mole fraction. For non-ideal solutions (strong interactions between molecules), γ ≠ 1. This is 
              advanced thermodynamics - for most introductory work, assume ideal behavior.
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
              <h3 className="text-lg font-semibold text-slate-900 mb-2">🏭 Chemical Engineering</h3>
              <ul className="list-disc pl-6 space-y-1 text-slate-700 text-sm">
                <li>Distillation column design</li>
                <li>Vapor-liquid equilibrium (VLE)</li>
                <li>Separation process calculations</li>
                <li>Process stream analysis</li>
                <li>Reaction mixture composition</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4 border border-amber-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">🌡️ Thermodynamics</h3>
              <ul className="list-disc pl-6 space-y-1 text-slate-700 text-sm">
                <li>Chemical potential calculations</li>
                <li>Gibbs free energy of mixing</li>
                <li>Activity and fugacity</li>
                <li>Phase diagrams</li>
                <li>Equilibrium constant expressions</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4 border border-amber-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">💨 Gas Mixtures</h3>
              <ul className="list-disc pl-6 space-y-1 text-slate-700 text-sm">
                <li>Air composition (N₂, O₂, Ar, CO₂)</li>
                <li>Natural gas analysis</li>
                <li>Breathing gas mixtures (diving)</li>
                <li>Partial pressure calculations</li>
                <li>Industrial gas production</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4 border border-amber-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">🍷 Solutions</h3>
              <ul className="list-disc pl-6 space-y-1 text-slate-700 text-sm">
                <li>Ethanol-water mixtures (spirits)</li>
                <li>Colligative properties</li>
                <li>Antifreeze solutions</li>
                <li>Electrolyte solutions</li>
                <li>Polymer solutions</li>
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
                        <p className="text-gray-600 dark:text-gray-400">χ (dimensionless)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary-600 dark:text-primary-400 mt-1">▸</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Formula</p>
                        <p className="text-gray-600 dark:text-gray-400">χ₁ = n₁/(n₁ + n₂ + ...)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary-600 dark:text-primary-400 mt-1">▸</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Applications</p>
                        <p className="text-gray-600 dark:text-gray-400">Gas mixtures, solutions</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary-600 dark:text-primary-400 mt-1">▸</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Level</p>
                        <p className="text-gray-600 dark:text-gray-400">College chemistry</p>
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
                    <Link href="/concentration-and-solution-calculators/molality-calculator" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                      <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">Molality Calculator</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Calculate molal concentration</p>
                    </Link>
                    <Link href="/concentration-and-solution-calculators/concentration-converter" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                      <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">Concentration Converter</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Convert between units</p>
                    </Link>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Related Formulas</h3>
                    <div className="space-y-2">
                      <Link href="/chemistry-formulas/mole-fraction-formula" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                        <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">Mole Fraction Formula</p>
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
                      <span className="text-2xl">🧪</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Chemical Engineering</p>
                        <p className="text-gray-600 dark:text-gray-400">Process calculations</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">💨</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Gas Mixtures</p>
                        <p className="text-gray-600 dark:text-gray-400">Air composition</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🍷</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Solutions</p>
                        <p className="text-gray-600 dark:text-gray-400">Colligative properties</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🏭</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Industry</p>
                        <p className="text-gray-600 dark:text-gray-400">Mixture analysis</p>
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
