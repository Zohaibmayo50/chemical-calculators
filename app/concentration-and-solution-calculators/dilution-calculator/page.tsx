import { Metadata } from 'next';
import Link from 'next/link';
import DilutionCalculator from '@/components/calculators/DilutionCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: 'Dilution Calculator | Calculate M₁V₁ = M₂V₂ for Solution Preparation',
  description: 'Free dilution calculator using M₁V₁ = M₂V₂ formula. Calculate final volume or concentration for solution dilution in chemistry labs and experiments.',
  keywords: 'dilution calculator, M1V1=M2V2, solution dilution, concentration calculator, lab preparation, serial dilution',
  openGraph: {
    title: 'Dilution Calculator - Free M₁V₁ = M₂V₂ Tool',
    description: 'Calculate solution dilution instantly with M₁V₁ = M₂V₂ formula. Free chemistry calculator for lab preparation.',
    type: 'website',
  },
  alternates: {
    canonical: '/concentration-and-solution-calculators/dilution-calculator'
  }
};

export default function DilutionCalculatorPage() {  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Breadcrumb Navigation */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-primary-600 dark:text-primary-400 hover:underline">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/concentration-and-solution-calculators" className="text-primary-600 dark:text-primary-400 hover:underline">
              Concentration & Solution Calculators
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600 dark:text-gray-300">Dilution Calculator</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Dilution Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Calculate final volume or concentration using the M₁V₁ = M₂V₂ formula for solution dilution
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Calculator Component - FIRST */}
            <section>
              <DilutionCalculator />
            </section>

            {/* What It Does */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400">
                  ℹ️
                </span>
                What It Does
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                The dilution calculator uses the M₁V₁ = M₂V₂ equation to determine either the final volume needed or final concentration achieved when diluting a solution. It&apos;s essential for preparing solutions with specific concentrations in chemistry labs by adding solvent to stock solutions.
              </p>
            </section>

            {/* Formula Section */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-accent-100 dark:bg-accent-900 rounded-lg flex items-center justify-center text-accent-600 dark:text-accent-400">
                  📐
                </span>
                Formula
              </h2>
              
              {/* Main Formula */}
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl p-6 mb-6 border-2 border-primary-200 dark:border-primary-700">
                <p className="text-center text-3xl font-mono font-bold text-gray-900 dark:text-white">
                  M₁V₁ = M₂V₂
                </p>
              </div>

              {/* Formula Rearrangements */}
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Find Final Volume (V₂)</p>
                  <p className="text-lg font-mono font-bold text-gray-900 dark:text-white">V₂ = (M₁ × V₁) / M₂</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Find Final Concentration (M₂)</p>
                  <p className="text-lg font-mono font-bold text-gray-900 dark:text-white">M₂ = (M₁ × V₁) / V₂</p>
                </div>
              </div>

              {/* Variables */}
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900 dark:text-white">Variables:</h3>
                <div className="grid gap-3">
                  <div className="flex items-start gap-3 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                    <span className="font-mono font-bold text-primary-600 dark:text-primary-400 min-w-[60px]">M₁</span>
                    <span className="text-gray-700 dark:text-gray-300">= Initial concentration (mol/L or M)</span>
                  </div>
                  <div className="flex items-start gap-3 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                    <span className="font-mono font-bold text-primary-600 dark:text-primary-400 min-w-[60px]">V₁</span>
                    <span className="text-gray-700 dark:text-gray-300">= Initial volume (mL or L)</span>
                  </div>
                  <div className="flex items-start gap-3 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                    <span className="font-mono font-bold text-primary-600 dark:text-primary-400 min-w-[60px]">M₂</span>
                    <span className="text-gray-700 dark:text-gray-300">= Final concentration (mol/L or M)</span>
                  </div>
                  <div className="flex items-start gap-3 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                    <span className="font-mono font-bold text-primary-600 dark:text-primary-400 min-w-[60px]">V₂</span>
                    <span className="text-gray-700 dark:text-gray-300">= Final volume (same unit as V₁)</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <p className="text-sm text-blue-900 dark:text-blue-300">
                  <span className="font-semibold">Key Principle:</span> The number of moles of solute remains constant during dilution (only solvent is added).
                </p>
              </div>
            </section>

            {/* Step-by-Step Example */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400">
                  📝
                </span>
                Step-by-Step Example
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Given Information</p>
                    <p className="text-gray-700 dark:text-gray-300">M₁ = 5.0 M, V₁ = 10 mL, M₂ = 1.0 M</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Find: Final volume (V₂)</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Apply Formula</p>
                    <p className="text-gray-700 dark:text-gray-300">V₂ = (M₁ × V₁) / M₂</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Substitute Values</p>
                    <p className="text-gray-700 dark:text-gray-300">V₂ = (5.0 M × 10 mL) / 1.0 M</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Result</p>
                    <p className="text-gray-700 dark:text-gray-300">V₂ = 50 mL</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Add 40 mL of solvent to 10 mL of 5.0 M solution</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Common Mistakes */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center text-red-600 dark:text-red-400">
                  ⚠️
                </span>
                Common Mistakes
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <p className="font-semibold text-red-900 dark:text-red-300 mb-1">Inconsistent volume units</p>
                  <p className="text-sm text-red-800 dark:text-red-400">V₁ and V₂ must use the same unit (both mL or both L)</p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <p className="font-semibold text-red-900 dark:text-red-300 mb-1">Confusing final volume with added volume</p>
                  <p className="text-sm text-red-800 dark:text-red-400">V₂ is total final volume, not volume of solvent added</p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <p className="font-semibold text-red-900 dark:text-red-300 mb-1">Making M₂ &gt; M₁</p>
                  <p className="text-sm text-red-800 dark:text-red-400">Dilution always decreases concentration (M₂ &lt; M₁)</p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <p className="font-semibold text-red-900 dark:text-red-300 mb-1">Using mass instead of concentration</p>
                  <p className="text-sm text-red-800 dark:text-red-400">Use molar concentration (M), not grams or percent</p>
                </div>
              </div>
            </section>

            {/* Related Calculators */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Related Calculators</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link href="/concentration-and-solution-calculators/molarity-calculator" className="block p-4 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl border-2 border-primary-200 dark:border-primary-700 hover:scale-105 transition-transform">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">Molarity Calculator</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Calculate molar concentration (M = n/V)</p>
                </Link>
                <Link href="/concentration-and-solution-calculators/molality-calculator" className="block p-4 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl border-2 border-primary-200 dark:border-primary-700 hover:scale-105 transition-transform">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">Molality Calculator</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Calculate molality (m = n/kg solvent)</p>
                </Link>
                <Link href="/concentration-and-solution-calculators/normality-calculator" className="block p-4 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl border-2 border-primary-200 dark:border-primary-700 hover:scale-105 transition-transform">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">Normality Calculator</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Calculate equivalent concentration</p>
                </Link>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Related Formulas</h3>
                <div className="space-y-3">
                  <Link href="/chemistry-formulas/dilution-formula" className="block p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary-400 dark:hover:border-primary-500 transition-all">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Dilution Formula (M₁V₁ = M₂V₂)</h4>
                  </Link>
                  <Link href="/chemistry-formulas/molarity-formula" className="block p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary-400 dark:hover:border-primary-500 transition-all">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Molarity Formula</h4>
                  </Link>
                </div>
              </div>
              <div className="mt-6">
                <Link href="/concentration-and-solution-calculators" className="block p-4 bg-gray-100 dark:bg-gray-700 rounded-xl border-2 border-gray-300 dark:border-gray-600 hover:scale-105 transition-transform">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">All Concentration Calculators →</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">View complete collection</p>
                </Link>
              </div>
            </section>

            {/* FAQs */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    What is dilution in chemistry?
                  </summary>
                  <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                    Dilution is the process of decreasing the concentration of a solution by adding more solvent. The amount of solute remains constant, but the total volume increases, resulting in lower concentration.
                  </p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    Why does M₁V₁ = M₂V₂ work?
                  </summary>
                  <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                    This equation works because the number of moles of solute remains constant during dilution. Since M = n/V, then n = M × V. Before dilution: n = M₁V₁. After dilution: n = M₂V₂. Since n is constant, M₁V₁ = M₂V₂.
                  </p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    Can I use different units for V₁ and V₂?
                  </summary>
                  <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                    No, V₁ and V₂ must be in the same units (both mL or both L). However, you don&apos;t need to convert to liters - as long as both volumes use the same unit, the equation works correctly.
                  </p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    What is serial dilution?
                  </summary>
                  <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                    Serial dilution is the stepwise dilution of a solution, where each dilution uses the previous dilution as the stock solution. It&apos;s used to create very dilute solutions or a range of concentrations for experiments.
                  </p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    How do I physically prepare a dilution?
                  </summary>
                  <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                    1) Calculate V₂ (final volume needed). 2) Measure V₁ (initial volume) of stock solution into a volumetric flask. 3) Add solvent until the total volume reaches V₂. 4) Mix thoroughly. Always add acid to water, never water to acid for safety.
                  </p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    What if I know V₁, M₁, and V₂ but not M₂?
                  </summary>
                  <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                    Use the rearranged formula: M₂ = (M₁ × V₁) / V₂. This tells you the final concentration after diluting V₁ of M₁ solution to a final volume of V₂.
                  </p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    Does this formula work for all types of solutions?
                  </summary>
                  <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                    Yes, M₁V₁ = M₂V₂ works for any solution where concentration is expressed as molarity (M). It also works with other concentration units (%, ppm, etc.) as long as you use the same unit for C₁ and C₂.
                  </p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    What are common dilution ratios?
                  </summary>
                  <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                    Common ratios include 1:10 (10-fold dilution), 1:100 (100-fold), 1:1000 (1000-fold). A 1:10 dilution means 1 part stock solution + 9 parts solvent = 10 parts total (M₂ = M₁/10).
                  </p>
                </details>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Where It's Used */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Where It&apos;s Used</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="text-2xl">🎓</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Education</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Chemistry lab courses and solution preparation</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl">🧪</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Laboratory</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Preparing working solutions from stock solutions</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl">🏭</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Industry</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Quality control, pharmaceuticals, manufacturing</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl">🔬</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Research</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Biochemistry, molecular biology, analytical chemistry</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      </div>
      <Footer />
    </>
  );
}