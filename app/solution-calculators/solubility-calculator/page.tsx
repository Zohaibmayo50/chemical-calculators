import React from 'react';
import SolubilityCalculator from '@/components/calculators/SolubilityCalculator';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solubility Calculator - Ksp & Molar Solubility',
  description: 'Calculate molar solubility from Ksp, determine solubility product constants, and explore common ion effects. Predict precipitation and dissolution.',
  keywords: ['solubility', 'Ksp', 'solubility product', 'molar solubility', 'common ion effect', 'precipitation', 'chemistry calculator', 'equilibrium'],
};

export default function SolubilityCalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-4">
            Solubility Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Calculate molar solubility from Ksp and explore common ion effects
          </p>
        </div>

        <SolubilityCalculator />

        {/* Educational Content */}
        <div className="mt-12 space-y-8 text-gray-800 dark:text-gray-200">
          {/* What is Solubility */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              What is Solubility?
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-4">
                <strong>Solubility</strong> is the maximum amount of a solute that can dissolve in a given amount 
                of solvent at a specific temperature. For ionic compounds, solubility is often expressed as molar 
                solubility (moles per liter).
              </p>
              <p className="leading-relaxed mb-4">
                The <strong>solubility product constant (Ksp)</strong> is the equilibrium constant for the dissolution 
                of a sparingly soluble ionic compound. It helps predict whether a precipitate will form and calculate 
                the solubility of ionic compounds.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 mt-6">
                <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Key Concept:</p>
                <p className="text-blue-800 dark:text-blue-200">
                  For a sparingly soluble salt A<sub>a</sub>B<sub>b</sub>, the solubility product is: 
                  <strong> Ksp = [A]<sup>a</sup> × [B]<sup>b</sup></strong>, where [A] and [B] are the molar 
                  concentrations of the ions at equilibrium.
                </p>
              </div>
            </div>
          </section>

          {/* Understanding Ksp */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Understanding Ksp (Solubility Product Constant)
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="leading-relaxed mb-4">
                The Ksp expression is written for the dissolution equilibrium of a sparingly soluble salt:
              </p>
              
              <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/30 dark:to-secondary-900/30 p-6 rounded-lg mb-6 space-y-4">
                <div>
                  <p className="font-semibold mb-2">General Form:</p>
                  <p className="font-mono text-lg">A<sub>a</sub>B<sub>b</sub>(s) ⇌ aA<sup>n+</sup>(aq) + bB<sup>m-</sup>(aq)</p>
                  <p className="font-mono text-xl mt-3">Ksp = [A<sup>n+</sup>]<sup>a</sup> × [B<sup>m-</sup>]<sup>b</sup></p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Example 1: AgCl</h4>
                  <p className="font-mono text-sm">AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq)</p>
                  <p className="font-mono text-sm mt-2">Ksp = [Ag⁺][Cl⁻]</p>
                  <p className="text-sm mt-2">Ksp = 1.77 × 10<sup>-10</sup></p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Example 2: PbCl₂</h4>
                  <p className="font-mono text-sm">PbCl₂(s) ⇌ Pb²⁺(aq) + 2Cl⁻(aq)</p>
                  <p className="font-mono text-sm mt-2">Ksp = [Pb²⁺][Cl⁻]²</p>
                  <p className="text-sm mt-2">Ksp = 1.17 × 10<sup>-5</sup></p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Example 3: Ag₂CrO₄</h4>
                  <p className="font-mono text-sm">Ag₂CrO₄(s) ⇌ 2Ag⁺(aq) + CrO₄²⁻(aq)</p>
                  <p className="font-mono text-sm mt-2">Ksp = [Ag⁺]²[CrO₄²⁻]</p>
                  <p className="text-sm mt-2">Ksp = 1.12 × 10<sup>-12</sup></p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Example 4: Ca₃(PO₄)₂</h4>
                  <p className="font-mono text-sm">Ca₃(PO₄)₂(s) ⇌ 3Ca²⁺(aq) + 2PO₄³⁻(aq)</p>
                  <p className="font-mono text-sm mt-2">Ksp = [Ca²⁺]³[PO₄³⁻]²</p>
                  <p className="text-sm mt-2">Ksp = 2.07 × 10<sup>-33</sup></p>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border-l-4 border-yellow-500">
                <p className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Important Note:</p>
                <p className="text-yellow-800 dark:text-yellow-200">
                  The solid compound does NOT appear in the Ksp expression because its activity is considered to be 1 
                  (pure solid). Only aqueous ions are included.
                </p>
              </div>
            </div>
          </section>

          {/* Calculating Molar Solubility */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Calculating Molar Solubility from Ksp
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Problem:</h4>
                  <p>Calculate the molar solubility of silver chloride (AgCl) in pure water. Ksp = 1.77 × 10<sup>-10</sup></p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">Solution:</h4>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-200 dark:border-gray-600 space-y-4">
                    <div>
                      <p className="font-semibold">Step 1: Write the Dissolution Equation</p>
                      <p className="font-mono">AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq)</p>
                    </div>

                    <div>
                      <p className="font-semibold">Step 2: Write the Ksp Expression</p>
                      <p className="font-mono">Ksp = [Ag⁺][Cl⁻] = 1.77 × 10⁻¹⁰</p>
                    </div>

                    <div>
                      <p className="font-semibold">Step 3: Set Up ICE Table</p>
                      <p>Let s = molar solubility of AgCl</p>
                      <p className="font-mono mt-1">Initial: [Ag⁺] = 0, [Cl⁻] = 0</p>
                      <p className="font-mono">Change: [Ag⁺] = +s, [Cl⁻] = +s</p>
                      <p className="font-mono">Equilibrium: [Ag⁺] = s, [Cl⁻] = s</p>
                    </div>

                    <div>
                      <p className="font-semibold">Step 4: Substitute into Ksp Expression</p>
                      <p className="font-mono">Ksp = s × s = s²</p>
                      <p className="font-mono">1.77 × 10⁻¹⁰ = s²</p>
                    </div>

                    <div>
                      <p className="font-semibold">Step 5: Solve for s</p>
                      <p className="font-mono">s = √(1.77 × 10⁻¹⁰)</p>
                      <p className="font-mono font-bold">s = 1.33 × 10⁻⁵ M</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg border-l-4 border-green-500">
                  <p className="font-semibold text-green-900 dark:text-green-100">Answer:</p>
                  <p className="text-green-800 dark:text-green-200">
                    The molar solubility of AgCl in pure water is <strong>1.33 × 10<sup>-5</sup> M</strong>. 
                    This means that at equilibrium, [Ag⁺] = [Cl⁻] = 1.33 × 10<sup>-5</sup> M.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Common Ion Effect */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Common Ion Effect
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-4">
                The <strong>common ion effect</strong> is the decrease in solubility of an ionic compound when a 
                common ion (an ion that's already present in the solution) is added.
              </p>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-3">
                  Example: AgCl in NaCl Solution
                </h3>
                <div className="text-purple-800 dark:text-purple-200 space-y-3">
                  <p className="font-semibold">Scenario:</p>
                  <p>What is the solubility of AgCl in 0.10 M NaCl solution?</p>
                  
                  <p className="font-semibold mt-4">Solution:</p>
                  <p className="font-mono text-sm">AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq)</p>
                  <p className="font-mono text-sm">Ksp = [Ag⁺][Cl⁻] = 1.77 × 10⁻¹⁰</p>
                  
                  <div className="bg-white dark:bg-gray-800 p-3 rounded mt-2 space-y-1">
                    <p>Initial [Cl⁻] from NaCl = 0.10 M</p>
                    <p>Let s = solubility of AgCl</p>
                    <p className="font-mono">[Ag⁺] = s</p>
                    <p className="font-mono">[Cl⁻] = 0.10 + s ≈ 0.10 M (s is very small)</p>
                    <p className="font-mono mt-2">Ksp = s × 0.10 = 1.77 × 10⁻¹⁰</p>
                    <p className="font-mono font-bold">s = 1.77 × 10⁻⁹ M</p>
                  </div>
                  
                  <p className="font-semibold mt-4">Result:</p>
                  <p>Solubility in 0.10 M NaCl: 1.77 × 10⁻⁹ M</p>
                  <p>Solubility in pure water: 1.33 × 10⁻⁵ M</p>
                  <p className="font-bold">Solubility decreased by a factor of ~7,500!</p>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Le Châtelier's Principle:</p>
                <p className="text-blue-800 dark:text-blue-200">
                  Adding a common ion shifts the equilibrium to the left (toward the solid), decreasing solubility. 
                  This is an application of Le Châtelier's principle: the system responds to the stress (added ions) 
                  by shifting to reduce that stress.
                </p>
              </div>
            </div>
          </section>

          {/* Predicting Precipitation */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Predicting Precipitation (Q vs Ksp)
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="leading-relaxed mb-4">
                The <strong>reaction quotient (Q)</strong> helps predict whether a precipitate will form when solutions are mixed.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-2 border-red-500">
                  <h4 className="font-bold text-red-900 dark:text-red-100 text-xl mb-2">Q &gt; Ksp</h4>
                  <p className="text-red-800 dark:text-red-200">
                    <strong>Precipitation occurs</strong><br/>
                    Solution is supersaturated. The system will shift left, forming a precipitate until Q = Ksp.
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-2 border-green-500">
                  <h4 className="font-bold text-green-900 dark:text-green-100 text-xl mb-2">Q = Ksp</h4>
                  <p className="text-green-800 dark:text-green-200">
                    <strong>At equilibrium</strong><br/>
                    Solution is saturated. No net change occurs. System is at equilibrium.
                  </p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-2 border-blue-500">
                  <h4 className="font-bold text-blue-900 dark:text-blue-100 text-xl mb-2">Q &lt; Ksp</h4>
                  <p className="text-blue-800 dark:text-blue-200">
                    <strong>No precipitation</strong><br/>
                    Solution is unsaturated. More solid can dissolve if present. No precipitate forms.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-3">Example Problem:</h4>
                <p className="mb-3">
                  Will a precipitate form if 50.0 mL of 0.0020 M AgNO₃ is mixed with 50.0 mL of 0.0015 M NaCl? 
                  (Ksp of AgCl = 1.77 × 10<sup>-10</sup>)
                </p>

                <div className="bg-white dark:bg-gray-800 p-4 rounded space-y-3">
                  <p className="font-semibold">Step 1: Calculate diluted concentrations</p>
                  <p>[Ag⁺] = (0.0020 M × 50.0 mL) / 100.0 mL = 0.0010 M</p>
                  <p>[Cl⁻] = (0.0015 M × 50.0 mL) / 100.0 mL = 0.00075 M</p>

                  <p className="font-semibold mt-3">Step 2: Calculate Q</p>
                  <p>Q = [Ag⁺][Cl⁻] = (0.0010)(0.00075) = 7.5 × 10<sup>-7</sup></p>

                  <p className="font-semibold mt-3">Step 3: Compare Q to Ksp</p>
                  <p>Q = 7.5 × 10<sup>-7</sup></p>
                  <p>Ksp = 1.77 × 10<sup>-10</sup></p>
                  <p className="font-bold text-red-600 dark:text-red-400">Q &gt; Ksp</p>

                  <p className="font-semibold mt-3">Conclusion:</p>
                  <p className="text-red-600 dark:text-red-400">
                    Since Q &gt; Ksp, <strong>precipitation of AgCl will occur</strong>.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Applications */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Real-World Applications
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">
                  1. Water Treatment
                </h3>
                <p className="text-blue-800 dark:text-blue-200">
                  Water softening uses precipitation to remove Ca²⁺ and Mg²⁺ ions by adding carbonate or phosphate. 
                  Understanding Ksp helps optimize the amount of reagent needed to precipitate hardness ions.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-3">
                  2. Qualitative Analysis
                </h3>
                <p className="text-green-800 dark:text-green-200">
                  In analytical chemistry, selective precipitation is used to separate and identify metal ions. 
                  Different Ksp values allow chemists to precipitate one ion while keeping others in solution.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-3">
                  3. Kidney Stones
                </h3>
                <p className="text-purple-800 dark:text-purple-200">
                  Kidney stones are often calcium oxalate (CaC₂O₄) or calcium phosphate. Understanding solubility 
                  helps develop treatments to prevent stone formation and dissolve existing stones.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-900 dark:text-orange-100 mb-3">
                  4. Dental Health
                </h3>
                <p className="text-orange-800 dark:text-orange-200">
                  Tooth enamel is hydroxyapatite [Ca₅(PO₄)₃OH]. Fluoride treatment works by forming fluorapatite, 
                  which has lower solubility, making teeth more resistant to acid dissolution (cavities).
                </p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-teal-900 dark:text-teal-100 mb-3">
                  5. Photography
                </h3>
                <p className="text-teal-800 dark:text-teal-200">
                  Silver halides (AgBr, AgCl) are light-sensitive and used in photographic film. Their low 
                  solubility keeps them stable until light exposure triggers chemical changes.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-yellow-900 dark:text-yellow-100 mb-3">
                  6. Environmental Remediation
                </h3>
                <p className="text-yellow-800 dark:text-yellow-200">
                  Heavy metal contamination can be treated by precipitation. Adding sulfide ions can precipitate 
                  toxic metals like Pb²⁺, Cd²⁺, and Hg²⁺ as insoluble sulfides for removal.
                </p>
              </div>
            </div>
          </section>

          {/* Ksp Table */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Common Ksp Values at 25°C
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                <thead className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
                  <tr>
                    <th className="p-3 text-left">Compound</th>
                    <th className="p-3 text-left">Formula</th>
                    <th className="p-3 text-left">Ksp</th>
                    <th className="p-3 text-left">Dissolution Equation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="p-3">Silver chloride</td>
                    <td className="p-3 font-mono">AgCl</td>
                    <td className="p-3 font-mono">1.77 × 10⁻¹⁰</td>
                    <td className="p-3 font-mono text-sm">Ag⁺ + Cl⁻</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="p-3">Silver bromide</td>
                    <td className="p-3 font-mono">AgBr</td>
                    <td className="p-3 font-mono">5.38 × 10⁻¹³</td>
                    <td className="p-3 font-mono text-sm">Ag⁺ + Br⁻</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="p-3">Barium sulfate</td>
                    <td className="p-3 font-mono">BaSO₄</td>
                    <td className="p-3 font-mono">1.08 × 10⁻¹⁰</td>
                    <td className="p-3 font-mono text-sm">Ba²⁺ + SO₄²⁻</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="p-3">Calcium carbonate</td>
                    <td className="p-3 font-mono">CaCO₃</td>
                    <td className="p-3 font-mono">3.36 × 10⁻⁹</td>
                    <td className="p-3 font-mono text-sm">Ca²⁺ + CO₃²⁻</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="p-3">Calcium fluoride</td>
                    <td className="p-3 font-mono">CaF₂</td>
                    <td className="p-3 font-mono">3.45 × 10⁻¹¹</td>
                    <td className="p-3 font-mono text-sm">Ca²⁺ + 2F⁻</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="p-3">Lead(II) chloride</td>
                    <td className="p-3 font-mono">PbCl₂</td>
                    <td className="p-3 font-mono">1.17 × 10⁻⁵</td>
                    <td className="p-3 font-mono text-sm">Pb²⁺ + 2Cl⁻</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="p-3">Magnesium hydroxide</td>
                    <td className="p-3 font-mono">Mg(OH)₂</td>
                    <td className="p-3 font-mono">5.61 × 10⁻¹²</td>
                    <td className="p-3 font-mono text-sm">Mg²⁺ + 2OH⁻</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="p-3">Iron(III) hydroxide</td>
                    <td className="p-3 font-mono">Fe(OH)₃</td>
                    <td className="p-3 font-mono">2.79 × 10⁻³⁹</td>
                    <td className="p-3 font-mono text-sm">Fe³⁺ + 3OH⁻</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Problem-Solving Strategy */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Problem-Solving Strategy
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <div className="space-y-6">
                <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">
                    Step 1: Write the Dissolution Equilibrium
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-blue-800 dark:text-blue-200">
                    <li>Balance the equation for the dissolving solid</li>
                    <li>Include all ions with proper charges</li>
                    <li>Note the stoichiometric coefficients</li>
                  </ul>
                </div>

                <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-3">
                    Step 2: Write the Ksp Expression
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-green-800 dark:text-green-200">
                    <li>Include only aqueous ions (not the solid)</li>
                    <li>Raise each concentration to the power of its coefficient</li>
                    <li>Multiply the concentration terms together</li>
                  </ul>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-3">
                    Step 3: Set Up ICE Table or Expression
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-purple-800 dark:text-purple-200">
                    <li>Define s as the molar solubility</li>
                    <li>Express ion concentrations in terms of s</li>
                    <li>Account for common ions if present</li>
                  </ul>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500">
                  <h3 className="text-xl font-semibold text-orange-900 dark:text-orange-100 mb-3">
                    Step 4: Solve for Solubility
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-orange-800 dark:text-orange-200">
                    <li>Substitute into Ksp expression</li>
                    <li>Solve algebraically for s</li>
                    <li>Check approximations if made (5% rule)</li>
                    <li>Report answer with proper significant figures</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Common Mistakes to Avoid
            </h2>
            <div className="space-y-4">
              <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
                  ❌ Including the Solid in Ksp Expression
                </h3>
                <p className="text-red-800 dark:text-red-200 mb-2">
                  The solid compound does not appear in the Ksp expression.
                </p>
                <p className="text-sm text-red-700 dark:text-red-300">
                  <strong>Correct:</strong> For AgCl, Ksp = [Ag⁺][Cl⁻], NOT Ksp = [AgCl][Ag⁺][Cl⁻]
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
                  ❌ Forgetting to Raise Concentrations to Powers
                </h3>
                <p className="text-red-800 dark:text-red-200 mb-2">
                  Stoichiometric coefficients become exponents in the Ksp expression.
                </p>
                <p className="text-sm text-red-700 dark:text-red-300">
                  <strong>Correct:</strong> For PbCl₂, Ksp = [Pb²⁺][Cl⁻]², NOT [Pb²⁺][Cl⁻]
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
                  ❌ Ignoring Common Ion Effect
                </h3>
                <p className="text-red-800 dark:text-red-200 mb-2">
                  Common ions dramatically reduce solubility. Don't assume pure water conditions.
                </p>
                <p className="text-sm text-red-700 dark:text-red-300">
                  <strong>Correct:</strong> Account for initial ion concentrations from other sources
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
                  ❌ Comparing Ksp Values for Different Stoichiometries
                </h3>
                <p className="text-red-800 dark:text-red-200 mb-2">
                  Can't directly compare Ksp values for compounds with different formulas to determine relative solubility.
                </p>
                <p className="text-sm text-red-700 dark:text-red-300">
                  <strong>Correct:</strong> Calculate and compare molar solubilities, not Ksp values
                </p>
              </div>
            </div>
          </section>

          {/* Quick Reference */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Quick Reference Guide
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">General Formulas</h3>
                <div className="space-y-2 text-sm">
                  <p className="font-mono">For AB: s = √Ksp</p>
                  <p className="font-mono">For AB₂: s = ∛(Ksp/4)</p>
                  <p className="font-mono">For A₂B: s = ∛(Ksp/4)</p>
                  <p className="font-mono">For AB₃: s = ⁴√(Ksp/27)</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-tertiary-50 to-primary-50 dark:from-tertiary-900/20 dark:to-primary-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Q vs Ksp</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>Q &gt; Ksp:</strong> Precipitation occurs</p>
                  <p><strong>Q = Ksp:</strong> At equilibrium</p>
                  <p><strong>Q &lt; Ksp:</strong> No precipitation</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-secondary-50 to-tertiary-50 dark:from-secondary-900/20 dark:to-tertiary-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Common Ion Effect</h3>
                <div className="space-y-2 text-sm">
                  <p>Adding common ion → decreases solubility</p>
                  <p>Equilibrium shifts toward solid</p>
                  <p>Le Châtelier's principle applies</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-tertiary-50 dark:from-primary-900/20 dark:to-tertiary-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Solubility Trends</h3>
                <div className="space-y-2 text-sm">
                  <p>Lower Ksp = less soluble</p>
                  <p>Higher Ksp = more soluble</p>
                  <p>(Only for same stoichiometry!)</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
