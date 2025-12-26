import { Metadata } from 'next';
import Link from 'next/link';
import PhCalculator from '@/components/calculators/PhCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: 'pH Calculator | Calculate pH from H⁺ Concentration',
  description: 'Free pH calculator to determine acidity or basicity from hydrogen ion concentration. Instantly calculate pH, pOH, and visualize on pH scale for chemistry calculations.',
  keywords: 'pH calculator, pOH calculator, hydrogen ion concentration, acidity calculator, basicity calculator, pH scale',
  openGraph: {
    title: 'pH Calculator - Free Online Chemistry Tool',
    description: 'Calculate pH from H⁺ concentration instantly. Determine acidity or basicity with our free pH calculator.',
    type: 'website',
  },
  alternates: {
    canonical: '/atomic-structure-calculators/ph-calculator'
  }
};

export default function PhCalculatorPage() {  return (
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
            <Link href="/atomic-structure-calculators" className="text-primary-600 dark:text-primary-400 hover:underline">
              Atomic Structure Calculators
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600 dark:text-gray-300">pH Calculator</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            pH Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Calculate pH from hydrogen ion concentration and visualize acidity or basicity on the pH scale
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Calculator Component - FIRST */}
            <section>
              <PhCalculator />
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
                The pH calculator determines the acidity or basicity of a solution by calculating the negative logarithm of hydrogen ion concentration. It provides pH value, corresponding pOH value, and visual representation on the pH scale from 0 (strongly acidic) to 14 (strongly basic).
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
                <p className="text-center text-2xl font-mono font-bold text-gray-900 dark:text-white">
                  pH = -log₁₀[H⁺]
                </p>
              </div>

              {/* Formula Rearrangements */}
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Find H⁺ from pH</p>
                  <p className="text-lg font-mono font-bold text-gray-900 dark:text-white">[H⁺] = 10⁻ᵖᴴ</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Relationship with pOH</p>
                  <p className="text-lg font-mono font-bold text-gray-900 dark:text-white">pH + pOH = 14</p>
                </div>
              </div>

              {/* Variables */}
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900 dark:text-white">Variables:</h3>
                <div className="grid gap-3">
                  <div className="flex items-start gap-3 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                    <span className="font-mono font-bold text-primary-600 dark:text-primary-400 min-w-[60px]">pH</span>
                    <span className="text-gray-700 dark:text-gray-300">= Measure of acidity/basicity (unitless)</span>
                  </div>
                  <div className="flex items-start gap-3 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                    <span className="font-mono font-bold text-primary-600 dark:text-primary-400 min-w-[60px]">[H⁺]</span>
                    <span className="text-gray-700 dark:text-gray-300">= Hydrogen ion concentration (mol/L or M)</span>
                  </div>
                  <div className="flex items-start gap-3 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                    <span className="font-mono font-bold text-primary-600 dark:text-primary-400 min-w-[60px]">pOH</span>
                    <span className="text-gray-700 dark:text-gray-300">= Measure of hydroxide ion concentration (unitless)</span>
                  </div>
                </div>
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
                    <p className="text-gray-700 dark:text-gray-300">[H⁺] = 1.0 × 10⁻⁵ M</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Apply Formula</p>
                    <p className="text-gray-700 dark:text-gray-300">pH = -log₁₀(1.0 × 10⁻⁵)</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Calculate pH</p>
                    <p className="text-gray-700 dark:text-gray-300">pH = -(-5) = 5.00</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Result</p>
                    <p className="text-gray-700 dark:text-gray-300">pH = 5.00 (Acidic solution)</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">pOH = 14 - 5 = 9.00</p>
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
                  <p className="font-semibold text-red-900 dark:text-red-300 mb-1">Forgetting the negative sign</p>
                  <p className="text-sm text-red-800 dark:text-red-400">pH = -log[H⁺], not log[H⁺]</p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <p className="font-semibold text-red-900 dark:text-red-300 mb-1">Using natural logarithm</p>
                  <p className="text-sm text-red-800 dark:text-red-400">Use log₁₀ (base 10), not ln (natural log)</p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <p className="font-semibold text-red-900 dark:text-red-300 mb-1">Confusing [H⁺] with pH</p>
                  <p className="text-sm text-red-800 dark:text-red-400">Higher pH = lower [H⁺] (inverse relationship)</p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <p className="font-semibold text-red-900 dark:text-red-300 mb-1">Wrong concentration units</p>
                  <p className="text-sm text-red-800 dark:text-red-400">Must use mol/L (M), not g/L or mmol/L</p>
                </div>
              </div>
            </section>

            {/* Related Calculators */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Related Calculators</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link href="/chemical-reaction-calculators/buffer-calculator" className="block p-4 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl border-2 border-primary-200 dark:border-primary-700 hover:scale-105 transition-transform">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">Buffer Calculator</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Calculate buffer solution pH and capacity</p>
                </Link>
                <Link href="/chemical-reaction-calculators/pka-calculator" className="block p-4 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl border-2 border-primary-200 dark:border-primary-700 hover:scale-105 transition-transform">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">pKa Calculator</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Calculate acid dissociation constant</p>
                </Link>
                <Link href="/concentration-and-solution-calculators/dilution-calculator" className="block p-4 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl border-2 border-primary-200 dark:border-primary-700 hover:scale-105 transition-transform">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">Dilution Calculator</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Calculate solution dilution (M₁V₁ = M₂V₂)</p>
                </Link>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Related Formulas</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Link href="/chemistry-formulas/ph-formula" className="block p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">pH Formula</h3>
                  </Link>
                  <Link href="/chemistry-formulas/ph-formula" className="block p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">pOH Formula</h3>
                  </Link>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <Link href="/atomic-structure-calculators" className="block p-4 bg-gray-100 dark:bg-gray-700 rounded-xl border-2 border-gray-300 dark:border-gray-600 hover:scale-105 transition-transform">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">All Atomic Structure Calculators →</h3>
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
                    What is pH and why is it important?
                  </summary>
                  <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                    pH is a measure of acidity or basicity on a scale from 0-14. It&apos;s crucial in chemistry, biology, and environmental science because it affects chemical reactions, enzyme activity, and organism survival.
                  </p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    What does pH 7 mean?
                  </summary>
                  <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                    pH 7 is neutral, meaning equal concentrations of H⁺ and OH⁻ ions ([H⁺] = 1.0 × 10⁻⁷ M). Pure water at 25°C has pH 7. pH &lt; 7 is acidic, pH &gt; 7 is basic.
                  </p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    How is pH measured in the lab?
                  </summary>
                  <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                    pH is measured using pH meters (electronic), pH paper (color-change strips), or pH indicators (chemicals that change color at specific pH ranges). pH meters are most accurate.
                  </p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    Can pH be negative or above 14?
                  </summary>
                  <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                    Yes, for extremely concentrated acids or bases. For example, 10 M HCl has pH ≈ -1. However, the 0-14 scale covers most common aqueous solutions.
                  </p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    What is the relationship between pH and pOH?
                  </summary>
                  <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                    pH + pOH = 14 at 25°C. pOH measures hydroxide ion concentration (pOH = -log[OH⁻]). Knowing one allows you to calculate the other.
                  </p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    Why is the pH scale logarithmic?
                  </summary>
                  <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                    The logarithmic scale compresses the wide range of H⁺ concentrations (10⁰ to 10⁻¹⁴ M) into a manageable 0-14 scale. Each pH unit represents a 10-fold difference in acidity.
                  </p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    How does temperature affect pH?
                  </summary>
                  <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                    Temperature affects pH because water&apos;s autoionization constant (Kw) changes with temperature. At higher temperatures, neutral pH is slightly below 7; at lower temperatures, slightly above 7.
                  </p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    What are some common pH values?
                  </summary>
                  <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                    Stomach acid: pH 1-2, Lemon juice: pH 2, Vinegar: pH 3, Coffee: pH 5, Pure water: pH 7, Blood: pH 7.4, Baking soda: pH 9, Ammonia: pH 11, Bleach: pH 13.
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
                    <p className="text-sm text-gray-600 dark:text-gray-400">Acid-base chemistry courses and lab experiments</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl">🧪</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Laboratory</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Quality control and solution preparation</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl">🏭</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Industry</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Water treatment, food processing, pharmaceuticals</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl">🌍</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Environmental</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Monitoring soil, water bodies, and ecosystems</p>
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