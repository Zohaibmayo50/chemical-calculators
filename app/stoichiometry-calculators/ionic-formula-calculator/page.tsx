import { Metadata } from 'next';
import Link from 'next/link';
import IonicFormulaCalculator from '@/components/calculators/IonicFormulaCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Ionic Formula Calculator | Predict Ionic Compound Formulas',
  description: 'Free ionic formula calculator to predict chemical formulas from cation and anion charges. Calculate ionic compound formulas instantly.',
  keywords: 'ionic formula calculator, ionic compound, cation anion, chemical formula, cross multiply charges',
  openGraph: {
    title: 'Ionic Formula Calculator - Free Online Chemistry Tool',
    description: 'Predict ionic compound formulas from ion charges. Free ionic formula calculator.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://chemsolved.com/stoichiometry-calculators/ionic-formula-calculator'
  }
};

export default function IonicFormulaCalculatorPage() {
  return (
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
              <Link href="/stoichiometry-calculators" className="text-primary-600 dark:text-primary-400 hover:underline">
                Stoichiometry Calculators
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600 dark:text-gray-300">Ionic Formula Calculator</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Ionic Formula Calculator
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Predict ionic compound chemical formulas from cation and anion charges
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Calculator Component */}
              <section>
                <IonicFormulaCalculator />
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
                  The ionic formula calculator predicts the chemical formula of an ionic compound by combining cations and anions in ratios that result in a neutral compound. It uses the cross-multiply method: the charge of the cation becomes the subscript of the anion, and vice versa, then simplifies to lowest terms.
                </p>
              </section>

              {/* Formula Section */}
              <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-accent-100 dark:bg-accent-900 rounded-lg flex items-center justify-center text-accent-600 dark:text-accent-400">
                    📐
                  </span>
                  Method
                </h2>
                
                {/* Main Rule */}
                <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl p-6 mb-6 border-2 border-primary-200 dark:border-primary-700">
                  <p className="text-center text-2xl font-mono font-bold text-gray-900 dark:text-white mb-2">
                    Total Positive Charge + Total Negative Charge = 0
                  </p>
                  <p className="text-center text-lg font-mono text-gray-700 dark:text-gray-300">
                    (cation charge × cation count) + (anion charge × anion count) = 0
                  </p>
                </div>

                {/* Cross-Multiply Method */}
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 mb-6 border border-gray-200 dark:border-gray-600">
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Cross-Multiply Method</p>
                  <p className="text-lg font-mono font-bold text-gray-900 dark:text-white mb-2">M<sup>m+</sup> + X<sup>n-</sup> → M<sub>n</sub>X<sub>m</sub></p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Then reduce to lowest terms by dividing by GCD</p>
                </div>

                {/* Step-by-Step */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Steps:</h3>
                  <div className="grid gap-3">
                    <div className="flex items-start gap-3 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                      <span className="font-mono font-bold text-primary-600 dark:text-primary-400 min-w-[30px]">1.</span>
                      <span className="text-gray-700 dark:text-gray-300">Write cation and anion with charges</span>
                    </div>
                    <div className="flex items-start gap-3 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                      <span className="font-mono font-bold text-primary-600 dark:text-primary-400 min-w-[30px]">2.</span>
                      <span className="text-gray-700 dark:text-gray-300">Cross-multiply: cation charge → anion subscript</span>
                    </div>
                    <div className="flex items-start gap-3 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                      <span className="font-mono font-bold text-primary-600 dark:text-primary-400 min-w-[30px]">3.</span>
                      <span className="text-gray-700 dark:text-gray-300">Simplify by dividing by greatest common divisor</span>
                    </div>
                    <div className="flex items-start gap-3 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                      <span className="font-mono font-bold text-primary-600 dark:text-primary-400 min-w-[30px]">4.</span>
                      <span className="text-gray-700 dark:text-gray-300">Use parentheses for polyatomic ions if subscript &gt; 1</span>
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
                  Step-by-Step Example: Calcium Chloride
                </h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Identify Ions</p>
                      <p className="text-gray-700 dark:text-gray-300">Ca²⁺ (cation) and Cl⁻ (anion)</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Cross-Multiply Charges</p>
                      <p className="text-gray-700 dark:text-gray-300">Cation charge (2) → anion subscript: Cl₂</p>
                      <p className="text-gray-700 dark:text-gray-300">Anion charge (1) → cation subscript: Ca₁</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Simplify (if needed)</p>
                      <p className="text-gray-700 dark:text-gray-300">Ca₁Cl₂ → CaCl₂ (1 is omitted)</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Verify Neutrality</p>
                      <p className="text-gray-700 dark:text-gray-300">(1 × +2) + (2 × -1) = +2 - 2 = 0 ✓</p>
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
                    <p className="font-semibold text-red-900 dark:text-red-300 mb-1">Not simplifying subscripts</p>
                    <p className="text-sm text-red-800 dark:text-red-400">Ca₂O₂ should be simplified to CaO</p>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
                    <p className="font-semibold text-red-900 dark:text-red-300 mb-1">Wrong parentheses placement</p>
                    <p className="text-sm text-red-800 dark:text-red-400">Ca(OH)₂, not CaOH₂ or Ca(OH₂)</p>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
                    <p className="font-semibold text-red-900 dark:text-red-300 mb-1">Forgetting 1:1 ratios</p>
                    <p className="text-sm text-red-800 dark:text-red-400">When charges equal, subscripts are 1 (NaCl)</p>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
                    <p className="font-semibold text-red-900 dark:text-red-300 mb-1">Reversing cation/anion</p>
                    <p className="text-sm text-red-800 dark:text-red-400">Always write cation first, then anion</p>
                  </div>
                </div>
              </section>

              {/* Related Calculators */}
              <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Related Calculators</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Link href="/stoichiometry-calculators/molecular-weight-calculator" className="block p-4 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl border-2 border-primary-200 dark:border-primary-700 hover:scale-105 transition-transform">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Molecular Weight</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Calculate molecular mass</p>
                  </Link>
                  <Link href="/stoichiometry-calculators/stoichiometry-calculator" className="block p-4 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl border-2 border-primary-200 dark:border-primary-700 hover:scale-105 transition-transform">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Stoichiometry</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Balance chemical equations</p>
                  </Link>
                  <Link href="/redox-calculators/oxidation-state-calculator" className="block p-4 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl border-2 border-primary-200 dark:border-primary-700 hover:scale-105 transition-transform">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Oxidation State</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Find oxidation numbers</p>
                  </Link>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <Link href="/stoichiometry-calculators" className="block p-4 bg-gray-100 dark:bg-gray-700 rounded-xl border-2 border-gray-300 dark:border-gray-600 hover:scale-105 transition-transform">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">All Stoichiometry Calculators →</h3>
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
                      What is an ionic compound?
                    </summary>
                    <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                      An ionic compound is formed when a metal transfers electrons to a nonmetal, creating cations (+) and anions (-) held together by electrostatic attraction. Examples: NaCl (table salt), CaO (lime), MgSO₄ (Epsom salt).
                    </p>
                  </details>
                  <details className="group">
                    <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      How do I know the charges of ions?
                    </summary>
                    <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                      Main group elements: Group 1 = +1, Group 2 = +2, Group 13 = +3, Group 15 = -3, Group 16 = -2, Group 17 = -1. Transition metals have variable charges (shown in Roman numerals: Fe²⁺ = iron(II), Fe³⁺ = iron(III)). Learn common polyatomic ions.
                    </p>
                  </details>
                  <details className="group">
                    <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      Why do we use the cross-multiply method?
                    </summary>
                    <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                      The cross-multiply method ensures the compound is electrically neutral (total positive charge = total negative charge). By making the charge of one ion the subscript of the other, we balance the charges. Example: Al³⁺ + O²⁻ → Al₂O₃ (2×3 = 3×2 = 6).
                    </p>
                  </details>
                  <details className="group">
                    <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      What are polyatomic ions?
                    </summary>
                    <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                      Polyatomic ions are groups of atoms that act as a single ion with a charge. Common examples: NH₄⁺ (ammonium), OH⁻ (hydroxide), NO₃⁻ (nitrate), SO₄²⁻ (sulfate), CO₃²⁻ (carbonate), PO₄³⁻ (phosphate). Use parentheses when subscript &gt; 1: Ca(OH)₂, not CaOH₂.
                    </p>
                  </details>
                  <details className="group">
                    <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      How do I name ionic compounds?
                    </summary>
                    <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                      Name the cation first (metal name), then the anion (nonmetal root + &quot;-ide&quot; or polyatomic ion name). Examples: NaCl = sodium chloride, MgO = magnesium oxide, CaSO₄ = calcium sulfate. For transition metals, include charge in Roman numerals: FeCl₃ = iron(III) chloride.
                    </p>
                  </details>
                  <details className="group">
                    <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      When should I simplify subscripts?
                    </summary>
                    <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                      Always simplify subscripts to lowest whole number ratio by dividing by the greatest common divisor (GCD). Examples: Ca₂O₂ → CaO (÷2), Mg₂S₂ → MgS (÷2), Al₃O₃ → AlO (÷3). Exception: Don&apos;t simplify within polyatomic ions like SO₄²⁻.
                    </p>
                  </details>
                  <details className="group">
                    <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      What is a formula unit vs. molecule?
                    </summary>
                    <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                      Ionic compounds don&apos;t form discrete molecules; they form crystal lattices. We use &quot;formula unit&quot; to describe the simplest ratio of ions. Example: One formula unit of NaCl contains 1 Na⁺ and 1 Cl⁻, but in the crystal, each ion is surrounded by multiple oppositely charged ions.
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
                      <p className="text-sm text-gray-600 dark:text-gray-400">Teaching ionic bonding fundamentals</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-2xl">📝</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Chemical Formulas</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Writing and predicting formulas</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-2xl">🧪</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Nomenclature</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Naming compounds correctly</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-2xl">🔬</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Lab Work</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Preparing ionic compounds</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Ionic Formula Calculator",
              "description": "Ionic Formula Calculator on ChemSolved",
              "url": "https://chemsolved.com/stoichiometry-calculators/ionic-formula-calculator",
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
                  "name": "Ionic Formula Calculator",
                  "item": "https://chemsolved.com/stoichiometry-calculators/ionic-formula-calculator"
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
