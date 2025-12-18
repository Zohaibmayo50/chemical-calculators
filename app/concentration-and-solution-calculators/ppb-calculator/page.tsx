import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PPBCalculator from '@/components/calculators/PPBCalculator';

export const metadata: Metadata = {
  title: 'PPB Calculator | Parts Per Billion Concentration Calculator',
  description: 'Calculate parts per billion (ppb) concentration for trace analysis and environmental testing. Convert ppb to μg/L with step-by-step calculations.',
  keywords: ['ppb calculator', 'parts per billion', 'ppb to ug/L', 'trace analysis', 'ultratrace concentration', 'environmental testing'],
  alternates: {
    canonical: 'https://chemicalcalculators.com/concentration-and-solution-calculators/ppb-calculator',
  },
};

export default function PPBCalculatorPage() {
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
            <span className="text-gray-600 dark:text-gray-300">PPB Calculator</span>
          </nav>
        </div>

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Calculator (ABOVE THE FOLD) */}
            <div className="lg:col-span-2">
              {/* H1 Title */}
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-up">
                PPB Calculator
              </h1>

              {/* Calculator Tool - FIRST ELEMENT */}
              <div className="animate-slide-in-up" style={{ animationDelay: '100ms' }}>
                <PPBCalculator />
              </div>
      
      {/* What It Does Section */}
      <section className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">What This Calculator Does</h2>
        <div className="bg-white rounded-lg border border-slate-200 p-6">
          <p className="text-slate-700 mb-4">
            The <strong>PPB Calculator</strong> determines concentration in <strong>parts per billion (ppb)</strong>, 
            used for measuring ultra-trace amounts of substances. One ppb means one part of solute per billion parts 
            of solution - equivalent to 1 microgram per kilogram or, for dilute aqueous solutions, approximately 
            1 microgram per liter.
          </p>
          <p className="text-slate-700 mb-4">
            PPB is <strong>1000 times more sensitive than ppm</strong>, making it essential for detecting very low 
            concentrations where even ppm would be too coarse a measurement.
          </p>
          <p className="text-slate-700 mb-4">
            This calculator can solve for three different variables:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li><strong>PPB</strong> - Calculate parts per billion from known masses of solute and solution</li>
            <li><strong>Solute Mass</strong> - Find how much solute is in a solution of known ppb concentration</li>
            <li><strong>Solution Mass</strong> - Determine total solution needed for a given solute amount at target ppb</li>
          </ul>
          <p className="text-slate-700 mt-4">
            PPB is critical for:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li><strong>Environmental testing</strong> - Heavy metals (lead, arsenic, mercury), pesticides, toxic compounds</li>
            <li><strong>Drinking water safety</strong> - EPA maximum contaminant levels (MCLs) often in ppb</li>
            <li><strong>Pharmaceutical quality control</strong> - Impurity analysis, residual solvents, elemental impurities</li>
            <li><strong>Semiconductor manufacturing</strong> - Ultrapure water, chemical purity specifications</li>
            <li><strong>Food safety</strong> - Contaminant detection, mycotoxins, heavy metals</li>
            <li><strong>Forensic analysis</strong> - Trace evidence, drug testing, toxicology</li>
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
              ppb = (mass of solute / mass of solution) × 1,000,000,000
            </p>
            <p className="text-center text-sm text-slate-600">
              or equivalently: ppb = (mass_solute / mass_solution) × 10⁹
            </p>
          </div>
          
          <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">For Aqueous Solutions</h3>
          <div className="bg-white rounded-lg p-4 mb-4 border border-blue-200">
            <p className="text-slate-700 mb-2">
              For dilute aqueous solutions (density ≈ 1 g/mL):
            </p>
            <p className="text-center font-mono text-slate-800">
              1 ppb ≈ 1 μg/L (microgram per liter)
            </p>
            <p className="text-slate-600 text-sm mt-2">
              This approximation is excellent for very dilute solutions where density remains close to 1.000 g/mL
            </p>
          </div>

          <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Relationship to PPM</h3>
          <div className="bg-white rounded-lg p-4 mb-4 border border-blue-200">
            <p className="text-center font-mono text-slate-800 mb-2">
              1 ppb = 0.001 ppm
            </p>
            <p className="text-center font-mono text-slate-800">
              1000 ppb = 1 ppm
            </p>
            <p className="text-slate-600 text-sm mt-2">
              PPB is 1000× more sensitive than ppm for detecting trace contaminants
            </p>
          </div>

          <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Rearranged Forms</h3>
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <p className="font-semibold text-slate-900 mb-2">To Find Solute Mass:</p>
              <p className="font-mono text-slate-700">
                mass_solute = (ppb × mass_solution) / 1,000,000,000
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <p className="font-semibold text-slate-900 mb-2">To Find Solution Mass:</p>
              <p className="font-mono text-slate-700">
                mass_solution = (mass_solute × 1,000,000,000) / ppb
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Key Concepts</h3>
          <ul className="space-y-2 text-slate-700">
            <li><strong>Ultra-trace scale</strong> - PPB measures incredibly small concentrations</li>
            <li><strong>Scale reference</strong> - 1 ppb = 1 μg/kg = 1 ng/g = 0.000001 mg/g</li>
            <li><strong>Sensitivity</strong> - Can detect contaminants at levels harmless in ppm but toxic in ppb</li>
            <li><strong>Analytical challenge</strong> - Requires sophisticated instruments (ICP-MS, GC-MS, etc.)</li>
            <li><strong>Contamination risk</strong> - At ppb levels, sample handling becomes critical</li>
          </ul>
        </div>
      </section>

      {/* Step-by-Step Example */}
      <section className="mt-8 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Step-by-Step Example</h2>
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 p-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-3">Problem 1: Calculate PPB (Lead in Water)</h3>
          <p className="text-slate-700 mb-4">
            A water sample is analyzed and found to contain <strong>0.015 mg of lead</strong> in <strong>1 liter of water</strong>. 
            What is the lead concentration in ppb? Does it exceed the EPA action level of 15 ppb?
          </p>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 border border-green-200">
              <p className="font-semibold text-slate-900 mb-2">Step 1: Identify given values</p>
              <ul className="list-disc pl-6 space-y-1 text-slate-700">
                <li>Mass of solute (Pb) = 0.015 mg</li>
                <li>Volume of solution = 1 L</li>
                <li>For water: 1 L ≈ 1 kg = 1,000,000 mg</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4 border border-green-200">
              <p className="font-semibold text-slate-900 mb-2">Step 2: Convert to consistent units</p>
              <p className="text-slate-700 mb-2">
                Both values are already in mg, so no conversion needed:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-slate-700">
                <li>Solute mass = 0.015 mg</li>
                <li>Solution mass = 1,000,000 mg</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4 border border-green-200">
              <p className="font-semibold text-slate-900 mb-2">Step 3: Apply PPB formula</p>
              <p className="text-slate-700 mb-2">
                ppb = (mass_solute / mass_solution) × 1,000,000,000
              </p>
              <p className="text-slate-700 mb-2">
                ppb = (0.015 mg / 1,000,000 mg) × 1,000,000,000
              </p>
              <p className="text-slate-700 mb-2">
                ppb = (0.000000015) × 1,000,000,000 = <strong>15 ppb</strong>
              </p>
            </div>

            <div className="bg-green-100 rounded-lg p-4 border border-green-300">
              <p className="font-semibold text-slate-900 mb-2">Answer</p>
              <p className="text-slate-700">
                The lead concentration is exactly <strong>15 ppb</strong>, which equals the EPA action level. 
                This requires remediation action.
              </p>
              <p className="text-slate-600 text-sm mt-2">
                Alternative: 0.015 mg/L = 15 μg/L ≈ 15 ppb (direct conversion for aqueous solutions)
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-8">Problem 2: Calculate Solute Mass (Arsenic Standard)</h3>
          <p className="text-slate-700 mb-4">
            You need to prepare <strong>500 mL of a 10 ppb arsenic standard solution</strong> for calibrating your analytical instrument. 
            How many micrograms (μg) of arsenic are needed?
          </p>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 border border-green-200">
              <p className="font-semibold text-slate-900 mb-2">Step 1: Use the rearranged formula</p>
              <p className="text-slate-700">
                mass_solute = (ppb × mass_solution) / 1,000,000,000
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-green-200">
              <p className="font-semibold text-slate-900 mb-2">Step 2: Identify values and convert</p>
              <p className="text-slate-700 mb-2">
                PPB = 10
              </p>
              <p className="text-slate-700 mb-2">
                Volume = 500 mL = 0.5 L ≈ 0.5 kg = 500 g
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-green-200">
              <p className="font-semibold text-slate-900 mb-2">Step 3: Calculate</p>
              <p className="text-slate-700 mb-2">
                mass_solute = (10 × 500 g) / 1,000,000,000
              </p>
              <p className="text-slate-700 mb-2">
                mass_solute = 5000 / 1,000,000,000 = 0.000005 g = <strong>5 μg</strong>
              </p>
            </div>

            <div className="bg-green-100 rounded-lg p-4 border border-green-300">
              <p className="font-semibold text-slate-900 mb-2">Answer</p>
              <p className="text-slate-700">
                You need <strong>5 micrograms (μg) of arsenic</strong> dissolved in 500 mL of water to make a 10 ppb standard.
              </p>
              <p className="text-slate-600 text-sm mt-2">
                Quick method: 10 ppb = 10 μg/L, so for 0.5 L: 10 × 0.5 = 5 μg
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
              <h3 className="text-lg font-semibold text-red-900 mb-2">❌ Confusing ppb with ppm</h3>
              <p className="text-slate-700 mb-2">
                1 ppm = 1000 ppb, NOT the same! A 1 ppm solution is 1000× more concentrated than 1 ppb
              </p>
              <p className="text-slate-600 text-sm mt-2">
                Double-check which unit your measurement or specification uses
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-red-200">
              <h3 className="text-lg font-semibold text-red-900 mb-2">❌ Wrong power of 10</h3>
              <p className="text-slate-700 mb-2">
                PPB requires multiplication by 10⁹ (1 billion), not 10⁶ (million) or 10³ (thousand)
              </p>
              <p className="text-slate-600 text-sm mt-2">
                Remember: ppm = 10⁶, ppb = 10⁹, ppt = 10¹²
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-red-200">
              <h3 className="text-lg font-semibold text-red-900 mb-2">❌ Assuming μg/L = ppb for all solutions</h3>
              <p className="text-slate-700 mb-2">
                This only works for dilute aqueous solutions with density ≈ 1 g/mL
              </p>
              <p className="text-slate-600 text-sm mt-2">
                For other solvents or concentrated solutions, use the mass-based formula
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-red-200">
              <h3 className="text-lg font-semibold text-red-900 mb-2">❌ Sample contamination</h3>
              <p className="text-slate-700 mb-2">
                At ppb levels, contamination from containers, reagents, or air can significantly affect results
              </p>
              <p className="text-slate-600 text-sm mt-2">
                Use ultra-clean techniques, acid-washed glassware, and high-purity reagents
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-red-200">
              <h3 className="text-lg font-semibold text-red-900 mb-2">❌ Unit conversion errors</h3>
              <p className="text-slate-700 mb-2">
                Mixing up μg (microgram), ng (nanogram), mg (milligram) causes 1000× errors
              </p>
              <p className="text-slate-600 text-sm mt-2">
                1 mg = 1000 μg = 1,000,000 ng. Always double-check unit prefixes!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Section */}
      <section className="mt-8 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">PPB Conversions & Equivalents</h2>
        <div className="bg-purple-50 rounded-lg border border-purple-200 p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Concentration Unit Conversions</h3>
              <div className="bg-white rounded-lg p-4 border border-purple-200 space-y-2 text-slate-700">
                <p><strong>1 ppb =</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>0.001 ppm (parts per million)</li>
                  <li>0.0000001% (percent)</li>
                  <li>1 μg/L (for aqueous solutions)</li>
                  <li>1 μg/kg</li>
                  <li>1 ng/g (nanogram per gram)</li>
                  <li>0.000001 mg/L</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Mass-Volume Equivalents</h3>
              <div className="bg-white rounded-lg p-4 border border-purple-200 space-y-2 text-slate-700">
                <p><strong>For water (density ≈ 1 g/mL):</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>1 ppb = 1 μg/L = 1 ng/mL</li>
                  <li>10 ppb = 10 μg/L</li>
                  <li>100 ppb = 100 μg/L = 0.1 ppm</li>
                  <li>1000 ppb = 1000 μg/L = 1 ppm</li>
                  <li>1 ppb = 0.001 mg/L</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Scale Comparison</h3>
            <div className="bg-white rounded-lg p-4 border border-purple-200">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                <div className="text-slate-700">
                  <p className="font-semibold">1% =</p>
                  <p>10,000,000 ppb</p>
                </div>
                <div className="text-slate-700">
                  <p className="font-semibold">1 ppm =</p>
                  <p>1,000 ppb</p>
                </div>
                <div className="text-slate-700">
                  <p className="font-semibold">1 ppb =</p>
                  <p>1,000 ppt</p>
                </div>
                <div className="text-slate-700">
                  <p className="font-semibold">1 ppb =</p>
                  <p>1 μg/L (water)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Visualizing PPB</h3>
            <div className="bg-white rounded-lg p-4 border border-purple-200">
              <p className="text-slate-700 mb-2">1 ppb is equivalent to:</p>
              <ul className="list-disc pl-6 space-y-1 text-slate-700 text-sm">
                <li>1 second in 31.7 years</li>
                <li>1 inch in 15,783 miles</li>
                <li>1 cent in $10,000,000</li>
                <li>1 drop in a swimming pool (50,000 liters)</li>
                <li>1 pinch of salt in 10 tons of potato chips</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Analytical Methods Section */}
      <section className="mt-8 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Analytical Methods for PPB Detection</h2>
        <div className="bg-cyan-50 rounded-lg border border-cyan-200 p-6">
          <p className="text-slate-700 mb-4">
            Measuring concentrations at ppb levels requires sophisticated analytical techniques:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border border-cyan-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">ICP-MS</h3>
              <p className="text-slate-700 text-sm mb-2">
                <strong>Inductively Coupled Plasma Mass Spectrometry</strong>
              </p>
              <ul className="list-disc pl-6 space-y-1 text-slate-600 text-sm">
                <li>Detection: sub-ppb to ppt levels</li>
                <li>Best for: Metals and metalloids</li>
                <li>Range: Most elements in periodic table</li>
                <li>Precision: ±2-5% at ppb levels</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4 border border-cyan-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">GC-MS / LC-MS</h3>
              <p className="text-slate-700 text-sm mb-2">
                <strong>Gas/Liquid Chromatography Mass Spectrometry</strong>
              </p>
              <ul className="list-disc pl-6 space-y-1 text-slate-600 text-sm">
                <li>Detection: ppb to ppt levels</li>
                <li>Best for: Organic compounds, VOCs</li>
                <li>Range: Pesticides, drugs, pollutants</li>
                <li>Highly selective and sensitive</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4 border border-cyan-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">ICP-OES</h3>
              <p className="text-slate-700 text-sm mb-2">
                <strong>Inductively Coupled Plasma Optical Emission</strong>
              </p>
              <ul className="list-disc pl-6 space-y-1 text-slate-600 text-sm">
                <li>Detection: low ppb to ppm</li>
                <li>Best for: Major and trace metals</li>
                <li>Range: 70+ elements</li>
                <li>More economical than ICP-MS</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4 border border-cyan-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">AAS</h3>
              <p className="text-slate-700 text-sm mb-2">
                <strong>Atomic Absorption Spectroscopy</strong>
              </p>
              <ul className="list-disc pl-6 space-y-1 text-slate-600 text-sm">
                <li>Detection: ppb to ppm (GFAAS)</li>
                <li>Best for: Specific metal analysis</li>
                <li>Range: One element at a time</li>
                <li>Cost-effective for routine testing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="mt-8 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Why is ppb used instead of ppm for environmental testing?
            </h3>
            <p className="text-slate-700">
              Many environmental contaminants are toxic at extremely low concentrations that would be fractions of 1 ppm. 
              For example, EPA's lead action level is 15 ppb (0.015 ppm) - expressing this as 0.015 ppm is less intuitive 
              and increases risk of errors. PPB provides appropriate resolution for regulatory limits and health-based standards.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Is 10 ppb arsenic really dangerous?
            </h3>
            <p className="text-slate-700">
              Yes. The EPA maximum contaminant level for arsenic in drinking water is 10 ppb because long-term exposure 
              at this level increases cancer risk. Arsenic is highly toxic even at ppb concentrations. This demonstrates 
              why ppb measurements are critical - what seems like an infinitesimally small amount can have significant 
              health effects over time with chronic exposure.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              How accurate can ppb measurements be?
            </h3>
            <p className="text-slate-700">
              Modern instruments like ICP-MS can reliably measure at ppb levels with ±2-5% precision. However, accuracy 
              at ppb levels requires meticulous technique: ultra-pure reagents, acid-washed labware, contamination control, 
              proper calibration, and method validation. Blank samples must show no contamination. For regulatory compliance, 
              labs follow strict quality assurance/quality control (QA/QC) protocols.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              What&apos;s the difference between ppb and μg/L?
            </h3>
            <p className="text-slate-700">
              For dilute aqueous solutions (density ≈ 1 g/mL), 1 ppb ≈ 1 μg/L, and they're often used interchangeably. 
              Technically, ppb is mass/mass (dimensionless), while μg/L is mass/volume (has units). The approximation 
              breaks down for concentrated solutions or non-aqueous solvents where density differs significantly from water. 
              In practice, for water quality testing, they're effectively equivalent.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Can ppb be measured with simple test kits?
            </h3>
            <p className="text-slate-700">
              Most simple colorimetric test kits aren&apos;t sensitive enough for true ppb measurements - they typically detect 
              in the ppm range. Specialized ppb-level test strips exist for certain analytes (e.g., chlorine, some metals) 
              but are semi-quantitative. For accurate ppb measurements, laboratory analysis with instruments like ICP-MS, 
              GC-MS, or specialized electrodes is necessary.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              How do I prepare a ppb standard solution?
            </h3>
            <p className="text-slate-700">
              Direct ppb preparation is difficult due to weighing limitations. Instead, use serial dilution: (1) Prepare 
              a stock solution at higher concentration (e.g., 1000 ppm), (2) Dilute 1:1000 to get 1 ppm (1000 ppb), 
              (3) Further dilute to desired ppb level. Use volumetric flasks, ultra-pure water, and pipettes calibrated 
              for accuracy. Commercial certified reference materials (CRMs) are also available at ppb concentrations.
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
              <h3 className="text-lg font-semibold text-slate-900 mb-2">🌊 Water Quality</h3>
              <ul className="list-disc pl-6 space-y-1 text-slate-700 text-sm">
                <li>Lead: 15 ppb action level (EPA)</li>
                <li>Arsenic: 10 ppb MCL</li>
                <li>Mercury: 2 ppb MCL</li>
                <li>Cadmium: 5 ppb MCL</li>
                <li>Chromium: 100 ppb MCL</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4 border border-amber-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">💊 Pharmaceutical</h3>
              <ul className="list-disc pl-6 space-y-1 text-slate-700 text-sm">
                <li>Elemental impurities (ICH Q3D)</li>
                <li>Residual solvents: varies by class</li>
                <li>Drug substance impurities</li>
                <li>Leachables from containers</li>
                <li>Heavy metals: &lt;10 ppb typical</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4 border border-amber-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">🖥️ Semiconductor</h3>
              <ul className="list-disc pl-6 space-y-1 text-slate-700 text-sm">
                <li>Ultrapure water: &lt;1 ppb metals</li>
                <li>Chemical purity: sub-ppb specs</li>
                <li>Wafer cleaning solutions</li>
                <li>Etching and deposition chemicals</li>
                <li>Contamination control</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4 border border-amber-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">🍎 Food Safety</h3>
              <ul className="list-disc pl-6 space-y-1 text-slate-700 text-sm">
                <li>Pesticide residues: 1-100 ppb</li>
                <li>Heavy metals in foods</li>
                <li>Mycotoxins: aflatoxin ~10-20 ppb</li>
                <li>Veterinary drug residues</li>
                <li>Contaminant screening</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
