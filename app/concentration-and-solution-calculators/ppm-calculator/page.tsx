import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PPMCalculator from '@/components/calculators/PPMCalculator';

export const metadata: Metadata = {
  title: 'PPM Calculator | Parts Per Million Concentration Calculator',
  description: 'Calculate parts per million (ppm) concentration for water quality, air quality, and trace analysis. Free online calculator with mg/L conversion and examples.',
  keywords: ['ppm calculator', 'parts per million', 'ppm to mg/L', 'water quality', 'trace concentration', 'dilute solutions'],
  alternates: {
    canonical: 'https://chemicalcalculators.com/concentration-and-solution-calculators/ppm-calculator',
  },
};

export default function PPMCalculatorPage() {
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
            <span className="text-gray-600 dark:text-gray-300">PPM Calculator</span>
          </nav>
        </div>

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Calculator (ABOVE THE FOLD) */}
            <div className="lg:col-span-2">
              {/* H1 Title */}
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-up">
                PPM Calculator
              </h1>

              {/* Calculator Tool - FIRST ELEMENT */}
              <div className="animate-slide-in-up" style={{ animationDelay: '100ms' }}>
                <PPMCalculator />
              </div>
      
      {/* What It Does Section */}
      <section className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">What This Calculator Does</h2>
        <div className="bg-white rounded-lg border border-slate-200 p-6">
          <p className="text-slate-700 mb-4">
            The <strong>PPM Calculator</strong> determines concentration in <strong>parts per million (ppm)</strong>, 
            a unit commonly used for measuring very dilute solutions and trace amounts of substances. One ppm means 
            one part of solute per million parts of solution - equivalent to 1 milligram per kilogram or, for dilute 
            aqueous solutions, approximately 1 milligram per liter.
          </p>
          <p className="text-slate-700 mb-4">
            This calculator can solve for three different variables:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li><strong>PPM</strong> - Calculate parts per million from known masses of solute and solution</li>
            <li><strong>Solute Mass</strong> - Find how much solute is in a solution of known ppm and volume/mass</li>
            <li><strong>Solution Mass</strong> - Determine total solution needed for a given solute amount at target ppm</li>
          </ul>
          <p className="text-slate-700 mt-4">
            PPM is essential for:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li><strong>Water quality testing</strong> - TDS, chlorine, hardness, contaminants</li>
            <li><strong>Air quality monitoring</strong> - CO₂, CO, VOCs, pollutants</li>
            <li><strong>Environmental analysis</strong> - Soil nutrients, pesticides, heavy metals</li>
            <li><strong>Industrial processes</strong> - Trace additives, impurity specifications</li>
            <li><strong>Food & beverage</strong> - Preservatives, minerals, contaminants</li>
            <li><strong>Pharmaceutical QC</strong> - Trace impurities, residual solvents</li>
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
              ppm = (mass of solute / mass of solution) × 1,000,000
            </p>
            <p className="text-center text-sm text-slate-600">
              or equivalently: ppm = (mass_solute / mass_solution) × 10⁶
            </p>
          </div>
          
          <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">For Aqueous Solutions</h3>
          <div className="bg-white rounded-lg p-4 mb-4 border border-blue-200">
            <p className="text-slate-700 mb-2">
              For dilute aqueous solutions (density ≈ 1 g/mL):
            </p>
            <p className="text-center font-mono text-slate-800">
              1 ppm ≈ 1 mg/L
            </p>
            <p className="text-slate-600 text-sm mt-2">
              This approximation is excellent for concentrations below 1000 ppm where density remains close to 1.000 g/mL
            </p>
          </div>

          <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Rearranged Forms</h3>
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <p className="font-semibold text-slate-900 mb-2">To Find Solute Mass:</p>
              <p className="font-mono text-slate-700">
                mass_solute = (ppm × mass_solution) / 1,000,000
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <p className="font-semibold text-slate-900 mb-2">To Find Solution Mass:</p>
              <p className="font-mono text-slate-700">
                mass_solution = (mass_solute × 1,000,000) / ppm
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Key Concepts</h3>
          <ul className="space-y-2 text-slate-700">
            <li><strong>PPM is dimensionless</strong> - It&apos;s a ratio, though often expressed with units like mg/L</li>
            <li><strong>Scale reference</strong> - 1 ppm = 0.0001% = 1 mg/kg = 1 μg/g</li>
            <li><strong>Very dilute concentrations</strong> - Used when percent concentration would be too small</li>
            <li><strong>Temperature-independent</strong> - Mass ratios don&apos;t change with temperature</li>
            <li><strong>Units must match</strong> - Solute and solution masses must be in the same units</li>
          </ul>
        </div>
      </section>

      {/* Step-by-Step Example */}
      <section className="mt-8 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Step-by-Step Example</h2>
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 p-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-3">Problem 1: Calculate PPM</h3>
          <p className="text-slate-700 mb-4">
            A water sample contains <strong>15 mg of chlorine</strong> in <strong>5 liters of water</strong>. 
            What is the chlorine concentration in ppm?
          </p>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 border border-green-200">
              <p className="font-semibold text-slate-900 mb-2">Step 1: Identify given values</p>
              <ul className="list-disc pl-6 space-y-1 text-slate-700">
                <li>Mass of solute (Cl₂) = 15 mg</li>
                <li>Volume of solution = 5 L</li>
                <li>For dilute aqueous solutions: 1 L ≈ 1 kg</li>
                <li>So mass of solution ≈ 5 kg = 5000 g</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4 border border-green-200">
              <p className="font-semibold text-slate-900 mb-2">Step 2: Convert units to match</p>
              <p className="text-slate-700 mb-2">
                We need both masses in the same unit. Convert 15 mg to grams:
              </p>
              <p className="text-slate-700">
                15 mg = 0.015 g
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-green-200">
              <p className="font-semibold text-slate-900 mb-2">Step 3: Apply PPM formula</p>
              <p className="text-slate-700 mb-2">
                ppm = (mass_solute / mass_solution) × 1,000,000
              </p>
              <p className="text-slate-700 mb-2">
                ppm = (0.015 g / 5000 g) × 1,000,000
              </p>
              <p className="text-slate-700 mb-2">
                ppm = (0.000003) × 1,000,000 = <strong>3 ppm</strong>
              </p>
            </div>

            <div className="bg-green-100 rounded-lg p-4 border border-green-300">
              <p className="font-semibold text-slate-900 mb-2">Answer</p>
              <p className="text-slate-700">
                The chlorine concentration is <strong>3 ppm</strong>, which is within the safe range for pool water (1-3 ppm).
              </p>
              <p className="text-slate-600 text-sm mt-2">
                Alternative: Since 15 mg in 5 L = 3 mg/L, and for dilute aqueous solutions 1 mg/L ≈ 1 ppm, we get 3 ppm directly.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-8">Problem 2: Calculate Solute Mass</h3>
          <p className="text-slate-700 mb-4">
            How many grams of sodium fluoride (NaF) are needed to make <strong>1000 liters of water</strong> with 
            a fluoride concentration of <strong>1 ppm</strong> (typical water fluoridation level)?
          </p>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 border border-green-200">
              <p className="font-semibold text-slate-900 mb-2">Step 1: Use the rearranged formula</p>
              <p className="text-slate-700">
                mass_solute = (ppm × mass_solution) / 1,000,000
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-green-200">
              <p className="font-semibold text-slate-900 mb-2">Step 2: Convert and calculate</p>
              <p className="text-slate-700 mb-2">
                1000 L of water ≈ 1000 kg = 1,000,000 g
              </p>
              <p className="text-slate-700 mb-2">
                mass_solute = (1 × 1,000,000 g) / 1,000,000 = <strong>1 g</strong>
              </p>
            </div>

            <div className="bg-green-100 rounded-lg p-4 border border-green-300">
              <p className="font-semibold text-slate-900 mb-2">Answer</p>
              <p className="text-slate-700">
                You need <strong>1 gram of NaF per 1000 liters</strong> to achieve 1 ppm fluoride concentration.
              </p>
              <p className="text-slate-600 text-sm mt-2">
                Quick rule: For water, x ppm = x mg/L = x g/m³ = x kg/1000 m³
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
              <h3 className="text-lg font-semibold text-red-900 mb-2">❌ Confusing ppm with ppb or percent</h3>
              <p className="text-slate-700 mb-2">
                1% = 10,000 ppm, 1 ppm = 1000 ppb, 1 ppb = 0.001 ppm
              </p>
              <p className="text-slate-600 text-sm mt-2">
                PPM is much more dilute than percent - don&apos;t mix them up!
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-red-200">
              <h3 className="text-lg font-semibold text-red-900 mb-2">❌ Mismatched units</h3>
              <p className="text-slate-700 mb-2">
                Using mg for solute and kg for solution without conversion gives wrong results
              </p>
              <p className="text-slate-600 text-sm mt-2">
                Always convert to the same mass unit before calculating
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-red-200">
              <h3 className="text-lg font-semibold text-red-900 mb-2">❌ Assuming mg/L = ppm for all solutions</h3>
              <p className="text-slate-700 mb-2">
                The mg/L ≈ ppm approximation only works for dilute aqueous solutions (density ≈ 1 g/mL)
              </p>
              <p className="text-slate-600 text-sm mt-2">
                For concentrated solutions or non-aqueous solvents, use the mass-based formula
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-red-200">
              <h3 className="text-lg font-semibold text-red-900 mb-2">❌ Using solution volume instead of mass</h3>
              <p className="text-slate-700 mb-2">
                PPM is mass/mass. If you have volume, you must know density to convert to mass
              </p>
              <p className="text-slate-600 text-sm mt-2">
                Exception: For water near room temperature, 1 L ≈ 1 kg is acceptable
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-red-200">
              <h3 className="text-lg font-semibold text-red-900 mb-2">❌ Forgetting to multiply by 1,000,000</h3>
              <p className="text-slate-700 mb-2">
                The ratio must be multiplied by 10⁶ to get parts per million
              </p>
              <p className="text-slate-600 text-sm mt-2">
                (5/1,000,000) = 0.000005, not 5 ppm. You need (5/1,000,000) × 1,000,000 = 5 ppm
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Section */}
      <section className="mt-8 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">PPM Conversions & Equivalents</h2>
        <div className="bg-purple-50 rounded-lg border border-purple-200 p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Concentration Unit Conversions</h3>
              <div className="bg-white rounded-lg p-4 border border-purple-200 space-y-2 text-slate-700">
                <p><strong>1 ppm =</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>0.0001% (percent)</li>
                  <li>1000 ppb (parts per billion)</li>
                  <li>1 mg/L (for aqueous solutions)</li>
                  <li>1 mg/kg</li>
                  <li>1 μg/g (microgram per gram)</li>
                  <li>0.001 g/L</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Mass-Volume Equivalents</h3>
              <div className="bg-white rounded-lg p-4 border border-purple-200 space-y-2 text-slate-700">
                <p><strong>For water (density ≈ 1 g/mL):</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>1 ppm = 1 mg/L</li>
                  <li>1 ppm = 1 g/m³</li>
                  <li>1 ppm = 1 kg/1000 m³</li>
                  <li>10 ppm = 10 mg/L</li>
                  <li>100 ppm = 100 mg/L = 0.1 g/L</li>
                  <li>1000 ppm = 1 g/L = 0.1%</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Quick Reference Scale</h3>
            <div className="bg-white rounded-lg p-4 border border-purple-200">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                <div className="text-slate-700">
                  <p className="font-semibold">1% =</p>
                  <p>10,000 ppm</p>
                </div>
                <div className="text-slate-700">
                  <p className="font-semibold">0.1% =</p>
                  <p>1,000 ppm</p>
                </div>
                <div className="text-slate-700">
                  <p className="font-semibold">0.01% =</p>
                  <p>100 ppm</p>
                </div>
                <div className="text-slate-700">
                  <p className="font-semibold">0.001% =</p>
                  <p>10 ppm</p>
                </div>
              </div>
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
              What does ppm actually mean in practical terms?
            </h3>
            <p className="text-slate-700">
              PPM means "parts per million" - one unit of solute for every million units of solution. 
              Think of it like this: 1 ppm is equivalent to 1 second in 11.6 days, 1 inch in 16 miles, 
              or 1 cent in $10,000. For water, it&apos;s roughly one drop in 50 liters. It&apos;s used for very small concentrations 
              where expressing them as percentages would result in inconveniently small decimal numbers.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              When should I use ppm versus molarity?
            </h3>
            <p className="text-slate-700">
              Use <strong>ppm</strong> for trace concentrations, quality control, environmental monitoring, and when exact molecular 
              composition isn&apos;t critical. Use <strong>molarity</strong> for chemical reactions, stoichiometric calculations, 
              and when you need to know the number of molecules or moles. PPM is mass-based and temperature-independent; 
              molarity is mole-based and temperature-dependent (volume changes with temperature).
            </p>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Why is 1 ppm approximately equal to 1 mg/L for water?
            </h3>
            <p className="text-slate-700">
              This works because water has a density very close to 1 g/mL (or 1 kg/L). So 1 liter of water weighs about 
              1000 grams. If you have 1 mg of solute in 1 L of solution: ppm = (1 mg / 1000 g) × 10⁶ = (0.001 g / 1000 g) × 10⁶ = 1 ppm. 
              This approximation breaks down for concentrated solutions or solvents with different densities.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              What&apos;s the difference between ppm (mass) and ppmv (volume)?
            </h3>
            <p className="text-slate-700">
              <strong>ppm</strong> (or ppm<sub>w</sub>) refers to parts per million by mass or weight: (mass_solute / mass_solution) × 10⁶. 
              <strong>ppmv</strong> refers to parts per million by volume: (volume_solute / volume_solution) × 10⁶, commonly used for gases. 
              They're different! For gases, 1 ppmv means 1 mL of gas per 1 m³ of air. Always check which type is being used.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              How accurate does ppm need to be in different applications?
            </h3>
            <p className="text-slate-700">
              Accuracy requirements vary widely: <strong>Drinking water regulations</strong> - very strict (e.g., lead limit: 15 ppb), 
              <strong>Pool chemistry</strong> - moderate (±0.5 ppm acceptable for chlorine), <strong>Industrial processes</strong> - depends on spec 
              (trace metals often &lt;1 ppm), <strong>Environmental monitoring</strong> - stringent for toxins, <strong>Agriculture</strong> - 
              less critical for fertilizers (±10-20% often acceptable). Always check relevant standards or specifications.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Can I add ppm values directly when mixing solutions?
            </h3>
            <p className="text-slate-700">
              No! PPM values can&apos;t be added directly. You must calculate the total mass of solute from each solution, 
              add those masses, then divide by the total solution mass. Example: mixing 1 L of 100 ppm solution with 1 L of 
              200 ppm solution gives approximately 150 ppm (assuming equal densities), not 300 ppm. Use: 
              ppm_final = (mass₁ × ppm₁ + mass₂ × ppm₂) / (mass₁ + mass₂).
            </p>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              What instruments measure ppm concentration?
            </h3>
            <p className="text-slate-700">
              Common instruments include: <strong>TDS meters</strong> (total dissolved solids in water), 
              <strong>Spectrophotometers</strong> (UV-Vis absorption), <strong>Ion-selective electrodes</strong> (specific ions), 
              <strong>Gas chromatography</strong> (GC for trace organics), <strong>ICP-MS</strong> (inductively coupled plasma mass spec for metals), 
              <strong>Conductivity meters</strong> (indirect measurement), <strong>Colorimetric test kits</strong> (semi-quantitative), 
              and <strong>Titration</strong> (classical wet chemistry method).
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
              <h3 className="text-lg font-semibold text-slate-900 mb-2">💧 Water Treatment</h3>
              <ul className="list-disc pl-6 space-y-1 text-slate-700 text-sm">
                <li>Chlorination: 1-3 ppm free chlorine</li>
                <li>Fluoridation: 0.7-1.2 ppm F⁻</li>
                <li>Hardness: 120-180 ppm CaCO₃</li>
                <li>TDS monitoring: &lt;500 ppm ideal</li>
                <li>Contaminant limits: varies by substance</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4 border border-amber-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">🌱 Agriculture</h3>
              <ul className="list-disc pl-6 space-y-1 text-slate-700 text-sm">
                <li>Soil nitrogen: 20-40 ppm</li>
                <li>Phosphorus: 25-50 ppm</li>
                <li>Potassium: 100-250 ppm</li>
                <li>Micronutrients: 0.1-50 ppm</li>
                <li>Pesticide residues: regulated limits</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4 border border-amber-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">🏭 Industrial QC</h3>
              <ul className="list-disc pl-6 space-y-1 text-slate-700 text-sm">
                <li>Metal impurities: &lt;10 ppm spec</li>
                <li>Boiler water: &lt;1 ppm TDS</li>
                <li>Coolant additives: 500-3000 ppm</li>
                <li>Trace contaminants: &lt;1 ppm</li>
                <li>Product specifications</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4 border border-amber-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">🌍 Environmental</h3>
              <ul className="list-disc pl-6 space-y-1 text-slate-700 text-sm">
                <li>Air quality: CO, CO₂, O₃, VOCs</li>
                <li>Groundwater contamination</li>
                <li>Heavy metals in soil/water</li>
                <li>Pollution monitoring</li>
                <li>Regulatory compliance</li>
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
                        <p className="text-gray-600 dark:text-gray-400">ppm, mg/L, μg/mL</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary-600 dark:text-primary-400 mt-1">▸</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Formula</p>
                        <p className="text-gray-600 dark:text-gray-400">ppm = (mass solute/mass solution) × 10⁶</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary-600 dark:text-primary-400 mt-1">▸</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Applications</p>
                        <p className="text-gray-600 dark:text-gray-400">Water quality, air analysis</p>
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
                    <Link href="/concentration-and-solution-calculators/concentration-converter" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                      <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">Concentration Converter</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Convert between units</p>
                    </Link>
                    <Link href="/concentration-and-solution-calculators/ppb-calculator" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                      <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">PPB Calculator</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Calculate parts per billion</p>
                    </Link>
                    <Link href="/concentration-and-solution-calculators/mass-percent-calculator" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                      <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">Mass Percent Calculator</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Calculate mass percentage</p>
                    </Link>
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
                      <span className="text-2xl">💧</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Water Quality</p>
                        <p className="text-gray-600 dark:text-gray-400">Contaminant testing</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🌬️</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Air Quality</p>
                        <p className="text-gray-600 dark:text-gray-400">Pollutant monitoring</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🏭</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Industry</p>
                        <p className="text-gray-600 dark:text-gray-400">Quality control</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🔬</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Research</p>
                        <p className="text-gray-600 dark:text-gray-400">Trace analysis</p>
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
