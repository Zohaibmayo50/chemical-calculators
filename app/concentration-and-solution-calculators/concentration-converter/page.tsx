import ConcentrationConverter from '@/components/calculators/ConcentrationConverter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Concentration Converter | ChemCalc - Convert M, m, %, ppm, ppb',
  description: 'Convert between different concentration units: molarity (M), molality (m), mass percent (%), parts per million (ppm), and parts per billion (ppb). Free chemistry concentration converter calculator.',
  keywords: ['concentration converter', 'molarity to ppm', 'molality to molarity', 'ppm to molarity', 'mass percent to molarity', 'ppb converter', 'chemistry unit converter', 'concentration units'],
};

export default function ConcentrationConverterPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-4 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-primary-600 dark:hover:text-primary-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/concentration-and-solution-calculators" className="hover:text-primary-600 dark:hover:text-primary-400">
              Concentration & Solution Calculators
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 dark:text-white">Concentration Converter</span>
          </nav>

          {/* Page Title */}
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Concentration Converter
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Convert between molarity (M), molality (m), mass percent (%), parts per million (ppm), and parts per billion (ppb). Essential for laboratory work, environmental analysis, and chemistry calculations.
          </p>

          {/* Calculator Component */}
          <div className="mb-12">
            <ConcentrationConverter />
          </div>

          {/* Educational Content */}
          <div className="space-y-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            {/* What It Does Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                What This Calculator Does
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                This concentration converter transforms values between five commonly used concentration units in chemistry. Each unit serves different purposes and is preferred in specific applications:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li><strong>Molarity (M):</strong> Moles of solute per liter of solution - standard for laboratory solutions and reaction stoichiometry</li>
                <li><strong>Molality (m):</strong> Moles of solute per kilogram of solvent - temperature-independent, used in colligative property calculations</li>
                <li><strong>Mass Percent (%):</strong> Mass of solute per 100 g of solution - common in industrial applications and commercial products</li>
                <li><strong>Parts Per Million (ppm):</strong> Parts solute per million parts solution - environmental regulations and trace analysis</li>
                <li><strong>Parts Per Billion (ppb):</strong> Parts solute per billion parts solution - ultra-trace environmental contaminants</li>
              </ul>
            </section>

            {/* Conversion Formulas */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Conversion Formulas & Methods
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Molarity ⇄ Molality
                  </h3>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p><strong>M to m:</strong> m = M / (ρ - M × MM / 1000)</p>
                    <p><strong>m to M:</strong> M = (m × ρ) / (1 + m × MM / 1000)</p>
                    <p className="text-sm mt-2">Where: ρ = solution density (g/mL), MM = molar mass (g/mol)</p>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Molarity ⇄ Mass Percent
                  </h3>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p><strong>M to %:</strong> % = (M × MM) / (ρ × 10)</p>
                    <p><strong>% to M:</strong> M = (% × ρ × 10) / MM</p>
                    <p className="text-sm mt-2">Density must be in g/mL for these formulas</p>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Molarity ⇄ ppm / ppb
                  </h3>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p><strong>M to ppm:</strong> ppm = (M × MM × 1000) / ρ</p>
                    <p><strong>ppm to M:</strong> M = (ppm × ρ) / (MM × 1000)</p>
                    <p><strong>M to ppb:</strong> ppb = (M × MM × 1,000,000) / ρ</p>
                    <p><strong>ppb to M:</strong> M = (ppb × ρ) / (MM × 1,000,000)</p>
                    <p className="text-sm mt-2">For dilute aqueous solutions (ρ ≈ 1 g/mL): 1 ppm ≈ 1 mg/L and 1 ppb ≈ 1 μg/L</p>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Direct Conversions (same scale)
                  </h3>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p><strong>% to ppm:</strong> ppm = % × 10,000</p>
                    <p><strong>ppm to ppb:</strong> ppb = ppm × 1,000</p>
                    <p><strong>% to ppb:</strong> ppb = % × 10,000,000</p>
                    <p className="text-sm mt-2">These conversions are direct multiplications (no density/molar mass needed)</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Example Conversions */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Step-by-Step Example Conversions
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-primary-600 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Example 1: Convert 1.0 M NaCl to mass percent
                  </h3>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p><strong>Given:</strong></p>
                    <ul className="list-disc list-inside ml-4">
                      <li>Molarity = 1.0 M</li>
                      <li>NaCl molar mass = 58.44 g/mol</li>
                      <li>Solution density ≈ 1.04 g/mL</li>
                    </ul>
                    <p><strong>Calculation:</strong></p>
                    <p>% = (M × MM) / (ρ × 10)</p>
                    <p>% = (1.0 × 58.44) / (1.04 × 10)</p>
                    <p>% = 58.44 / 10.4 = 5.62%</p>
                    <p className="mt-2"><strong>Result:</strong> 1.0 M NaCl = 5.62% w/v</p>
                  </div>
                </div>

                <div className="border-l-4 border-primary-600 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Example 2: Convert 10 ppm glucose to molarity
                  </h3>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p><strong>Given:</strong></p>
                    <ul className="list-disc list-inside ml-4">
                      <li>Concentration = 10 ppm</li>
                      <li>Glucose (C₆H₁₂O₆) molar mass = 180.16 g/mol</li>
                      <li>Aqueous solution density ≈ 1.0 g/mL</li>
                    </ul>
                    <p><strong>Calculation:</strong></p>
                    <p>M = (ppm × ρ) / (MM × 1000)</p>
                    <p>M = (10 × 1.0) / (180.16 × 1000)</p>
                    <p>M = 10 / 180,160 = 5.55 × 10⁻⁵ M</p>
                    <p className="mt-2"><strong>Result:</strong> 10 ppm glucose = 0.0000555 M or 55.5 μM</p>
                  </div>
                </div>

                <div className="border-l-4 border-primary-600 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Example 3: Convert 0.5 M H₂SO₄ to molality
                  </h3>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p><strong>Given:</strong></p>
                    <ul className="list-disc list-inside ml-4">
                      <li>Molarity = 0.5 M</li>
                      <li>H₂SO₄ molar mass = 98.08 g/mol</li>
                      <li>Solution density ≈ 1.03 g/mL</li>
                    </ul>
                    <p><strong>Calculation:</strong></p>
                    <p>m = M / (ρ - M × MM / 1000)</p>
                    <p>m = 0.5 / (1.03 - 0.5 × 98.08 / 1000)</p>
                    <p>m = 0.5 / (1.03 - 0.049)</p>
                    <p>m = 0.5 / 0.981 = 0.510 m</p>
                    <p className="mt-2"><strong>Result:</strong> 0.5 M H₂SO₄ = 0.510 mol/kg</p>
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
                  <h3 className="font-semibold text-red-900 dark:text-red-300 mb-2">❌ Assuming density = 1.0 g/mL for all solutions</h3>
                  <p>Concentrated solutions have significantly different densities (e.g., 6 M NaCl has ρ ≈ 1.21 g/mL). Always check density tables for accurate conversions.</p>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <h3 className="font-semibold text-red-900 dark:text-red-300 mb-2">❌ Confusing mass percent with volume percent</h3>
                  <p>Mass percent (w/w) is grams solute per 100 g solution. Volume percent (v/v) is mL solute per 100 mL solution. They are not interchangeable except for dilute aqueous solutions.</p>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <h3 className="font-semibold text-red-900 dark:text-red-300 mb-2">❌ Using molarity for temperature-dependent calculations</h3>
                  <p>Molarity changes with temperature because solution volume expands/contracts. For precise work at varying temperatures (e.g., boiling point elevation), use molality instead.</p>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <h3 className="font-semibold text-red-900 dark:text-red-300 mb-2">❌ Mixing up ppm and mg/L</h3>
                  <p>For aqueous solutions with ρ ≈ 1 g/mL, 1 ppm = 1 mg/L is a good approximation. However, for non-aqueous solutions or gas mixtures, ppm must be calculated differently (mass/mass or volume/volume).</p>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <h3 className="font-semibold text-red-900 dark:text-red-300 mb-2">❌ Forgetting to account for ionization in conversions</h3>
                  <p>When converting to molality for colligative property calculations, remember that ionic compounds dissociate (e.g., NaCl → Na⁺ + Cl⁻ gives i = 2 particles per formula unit).</p>
                </div>
              </div>
            </section>

            {/* When to Use Each Unit */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                When to Use Each Concentration Unit
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Molarity (M)</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                    <li>Preparing standard laboratory solutions</li>
                    <li>Stoichiometric calculations in reactions</li>
                    <li>Titrations and volumetric analysis</li>
                    <li>When volume measurements are more convenient than mass</li>
                  </ul>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                  <h3 className="font-semibold text-green-900 dark:text-green-300 mb-2">Molality (m)</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                    <li>Colligative property calculations (freezing point depression, boiling point elevation)</li>
                    <li>High-precision work across temperature ranges</li>
                    <li>When solution volume changes significantly</li>
                    <li>Thermodynamic studies</li>
                  </ul>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                  <h3 className="font-semibold text-purple-900 dark:text-purple-300 mb-2">Mass Percent (%)</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                    <li>Commercial product labels (e.g., 70% isopropyl alcohol)</li>
                    <li>Industrial process control</li>
                    <li>Food and beverage industry</li>
                    <li>When molar mass is unknown or not relevant</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                  <h3 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">ppm / ppb</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                    <li>Environmental regulations (EPA drinking water standards)</li>
                    <li>Trace contaminant analysis</li>
                    <li>Air quality monitoring</li>
                    <li>Quality control in pharmaceuticals and food</li>
                  </ul>
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
                    Why do I need density and molar mass for some conversions but not others?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Conversions between units on the same scale (%, ppm, ppb) only require multiplication because they all express mass ratios. However, converting to/from molarity or molality requires density (to convert between mass and volume) and molar mass (to convert between mass and moles).
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    What density should I use if I don&apos;t have exact data?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    For dilute aqueous solutions (&lt;1% solute), using 1.0 g/mL is reasonable. For more concentrated solutions, consult CRC Handbook, Perry&apos;s Chemical Engineers&apos; Handbook, or online databases. Density can vary significantly (e.g., 98% H₂SO₄ has ρ = 1.84 g/mL).
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Can I convert between molarity and molality without knowing density?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    No, density is essential for this conversion because you need to relate the mass of solvent (used in molality) to the volume of solution (used in molarity). For dilute aqueous solutions, the difference is small, but for concentrated solutions it becomes significant.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Is ppm always equivalent to mg/L?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Only for aqueous solutions with density ≈ 1 g/mL. The true definition of ppm is mass solute / mass solution × 10⁶. For water (ρ = 1 g/mL = 1 kg/L), 1 ppm = 1 mg/L works. For other solvents or concentrated solutions, this approximation fails.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    How precise do my conversions need to be?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    It depends on your application. Analytical chemistry often requires 4-5 significant figures. Environmental monitoring typically uses 2-3 significant figures. For teaching or rough estimates, 2 significant figures are usually sufficient. Always match precision to the least precise measurement in your calculation.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Why do molarity and molality have similar symbols (M and m)?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    This is unfortunately confusing but standard notation. Molarity uses capital M (sometimes mol/L), while molality uses lowercase m (or mol/kg). Always clarify which you mean in reports and calculations, especially when both units are used.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Can I use these conversions for gas concentrations?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Gas concentrations use different definitions. For gases, ppm typically means volume/volume (ppmv), not mass/mass. Converting gas concentrations requires ideal gas law and different formulas. This calculator is designed for liquid solutions.
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
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Environmental Chemistry</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      EPA drinking water standards are given in ppm/ppb, but laboratory analysis often uses molarity. Convert between units to ensure compliance with regulations (e.g., lead limit 15 ppb = 7.2 × 10⁻⁸ M).
                    </p>
                  </div>

                  <div className="border-l-4 border-primary-600 pl-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Pharmaceutical Formulations</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Drug concentrations may be specified as % w/v for manufacturing but need to be converted to molarity for pharmacokinetic modeling and receptor binding studies.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary-600 pl-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Food Science</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Salt content in food is often given as mass percent, but calculating osmotic pressure or water activity requires molality. Convert concentrations for accurate quality control.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border-l-4 border-primary-600 pl-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Biochemistry Research</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Buffer preparation often uses molarity (e.g., 50 mM Tris-HCl), but published protocols may list mass percent. Convert to ensure reproducibility across laboratories.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary-600 pl-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Industrial Chemistry</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Commercial acids are sold by mass percent (e.g., 37% HCl), but reaction stoichiometry requires molarity. Convert to calculate exact volumes needed for industrial processes.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary-600 pl-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Analytical Chemistry</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      ICP-MS reports trace metals in ppb, but method validation requires standard curves in molarity. Convert instrument readings to concentration units needed for calibration.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
