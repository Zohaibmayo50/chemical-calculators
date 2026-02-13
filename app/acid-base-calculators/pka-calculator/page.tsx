import { Metadata } from 'next';
import Link from 'next/link';
import PkaCalculator from '@/components/calculators/PkaCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'pKa Calculator | Calculate Acid Dissociation Constant',
  description: 'Free pKa calculator to convert between Ka and pKa values. Calculate acid dissociation constant and determine acid strength instantly.',
  keywords: 'pKa calculator, Ka calculator, acid dissociation constant, acid strength, pKa to Ka, Ka to pKa',
  openGraph: {
    title: 'pKa Calculator - Free Online Chemistry Tool',
    description: 'Calculate pKa from Ka and vice versa. Determine acid strength with our free pKa calculator.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://chemsolved.com/acid-base-calculators/pka-calculator'
  }
};

export default function PkaCalculatorPage() {
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
              <span className="text-gray-600 dark:text-gray-300">pKa Calculator</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              pKa Calculator
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Calculate acid dissociation constant (Ka) from pKa and vice versa
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Calculator Component */}
              <section>
                <PkaCalculator />
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
                  The pKa calculator converts between the acid dissociation constant (Ka) and its logarithmic form (pKa). It helps determine acid strength: lower pKa values indicate stronger acids. The calculator provides instant conversion in both directions and indicates the relative acid strength.
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
                  <p className="text-center text-2xl font-mono font-bold text-gray-900 dark:text-white mb-3">
                    pKa = -log₁₀(Ka)
                  </p>
                  <p className="text-center text-lg font-mono text-gray-700 dark:text-gray-300">
                    Ka = 10⁻ᵖᴷᵃ
                  </p>
                </div>

                {/* Ka Definition */}
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 mb-6 border border-gray-200 dark:border-gray-600">
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Ka (Acid Dissociation Constant)</p>
                  <p className="text-lg font-mono font-bold text-gray-900 dark:text-white">Ka = [H⁺][A⁻] / [HA]</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">For the reaction: HA ⇌ H⁺ + A⁻</p>
                </div>

                {/* Variables */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Variables:</h3>
                  <div className="grid gap-3">
                    <div className="flex items-start gap-3 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                      <span className="font-mono font-bold text-primary-600 dark:text-primary-400 min-w-[60px]">Ka</span>
                      <span className="text-gray-700 dark:text-gray-300">= Acid dissociation constant (unitless)</span>
                    </div>
                    <div className="flex items-start gap-3 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                      <span className="font-mono font-bold text-primary-600 dark:text-primary-400 min-w-[60px]">pKa</span>
                      <span className="text-gray-700 dark:text-gray-300">= Negative logarithm of Ka (unitless)</span>
                    </div>
                    <div className="flex items-start gap-3 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                      <span className="font-mono font-bold text-primary-600 dark:text-primary-400 min-w-[60px]">[HA]</span>
                      <span className="text-gray-700 dark:text-gray-300">= Concentration of undissociated acid (M)</span>
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
                      <p className="text-gray-700 dark:text-gray-300">Ka of acetic acid = 1.8 × 10⁻⁵</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Apply Formula</p>
                      <p className="text-gray-700 dark:text-gray-300">pKa = -log₁₀(1.8 × 10⁻⁵)</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Calculate pKa</p>
                      <p className="text-gray-700 dark:text-gray-300">pKa = -(-4.74) = 4.74</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Result</p>
                      <p className="text-gray-700 dark:text-gray-300">pKa = 4.74 (Weak acid)</p>
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
                    <p className="font-semibold text-red-900 dark:text-red-300 mb-1">Confusing Ka with pKa</p>
                    <p className="text-sm text-red-800 dark:text-red-400">Lower pKa = stronger acid, higher Ka = stronger acid</p>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
                    <p className="font-semibold text-red-900 dark:text-red-300 mb-1">Wrong logarithm base</p>
                    <p className="text-sm text-red-800 dark:text-red-400">Use log₁₀, not natural logarithm (ln)</p>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
                    <p className="font-semibold text-red-900 dark:text-red-300 mb-1">Forgetting the negative sign</p>
                    <p className="text-sm text-red-800 dark:text-red-400">pKa = -log(Ka), not log(Ka)</p>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
                    <p className="font-semibold text-red-900 dark:text-red-300 mb-1">Misinterpreting strength</p>
                    <p className="text-sm text-red-800 dark:text-red-400">pKa 2 is stronger acid than pKa 5</p>
                  </div>
                </div>
              </section>

              {/* Related Calculators */}
              <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Related Calculators</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Link href="/atomic-structure-calculators/ph-calculator" className="block p-4 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl border-2 border-primary-200 dark:border-primary-700 hover:scale-105 transition-transform">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">pH Calculator</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Calculate pH from H⁺ concentration</p>
                  </Link>
                  <Link href="/atomic-structure-calculators/henderson-hasselbalch-calculator" className="block p-4 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl border-2 border-primary-200 dark:border-primary-700 hover:scale-105 transition-transform">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Henderson-Hasselbalch</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Calculate buffer pH using pKa</p>
                  </Link>
                  <Link href="/acid-base-calculators/titration-calculator" className="block p-4 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl border-2 border-primary-200 dark:border-primary-700 hover:scale-105 transition-transform">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Titration Calculator</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Calculate pH during titrations</p>
                  </Link>
                </div>
              </section>

              {/* FAQs */}
              <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <details className="group">
                    <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      What is pKa and why is it important?
                    </summary>
                    <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                      pKa is the negative logarithm of the acid dissociation constant (Ka). It&apos;s crucial in chemistry because it indicates acid strength on a manageable scale. Lower pKa values (0-2) indicate strong acids, while higher values (4-14) indicate weak acids.
                    </p>
                  </details>
                  <details className="group">
                    <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      How does pKa relate to acid strength?
                    </summary>
                    <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                      Lower pKa = stronger acid. For example, HCl (pKa ≈ -7) is much stronger than acetic acid (pKa = 4.76). This inverse relationship exists because pKa = -log(Ka), and stronger acids have larger Ka values.
                    </p>
                  </details>
                  <details className="group">
                    <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      What is the difference between Ka and pKa?
                    </summary>
                    <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                      Ka is the actual acid dissociation constant (often very small numbers like 1.8 × 10⁻⁵), while pKa is the negative logarithm of Ka (manageable numbers like 4.76). They contain the same information in different forms.
                    </p>
                  </details>
                  <details className="group">
                    <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      What are typical pKa values for common acids?
                    </summary>
                    <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                      HCl: -7, H₂SO₄: -3, Acetic acid: 4.76, Carbonic acid: 6.35, Ammonia (NH₄⁺): 9.25, Water (H₃O⁺): 15.7. Strong acids have negative pKa values, weak acids have positive pKa values between 2-7.
                    </p>
                  </details>
                  <details className="group">
                    <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      How is pKa used in buffer calculations?
                    </summary>
                    <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                      The Henderson-Hasselbalch equation uses pKa to calculate buffer pH: pH = pKa + log([A⁻]/[HA]). Buffers work best when pH ≈ pKa (within ±1 pH unit), making pKa essential for buffer design.
                    </p>
                  </details>
                  <details className="group">
                    <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      Can pKa be negative?
                    </summary>
                    <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                      Yes, very strong acids have negative pKa values. For example, HCl has pKa ≈ -7, and H₂SO₄ has pKa ≈ -3. Negative pKa indicates Ka &gt; 1, meaning the acid dissociates almost completely.
                    </p>
                  </details>
                  <details className="group">
                    <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      What is the relationship between pKa and pKb?
                    </summary>
                    <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                      For conjugate acid-base pairs, pKa + pKb = 14 at 25°C. This means if you know the pKa of an acid, you can calculate the pKb of its conjugate base, and vice versa.
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
                    <span className="text-2xl">💊</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Pharmaceuticals</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Drug design and absorption predictions</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-2xl">🧪</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Laboratory</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Buffer preparation and pH control</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-2xl">🔬</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Biochemistry</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Protein and enzyme studies</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-2xl">🎓</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Education</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Acid-base chemistry courses</p>
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
              "name": "pKa Calculator",
              "description": "pKa Calculator on ChemSolved",
              "url": "https://chemsolved.com/acid-base-calculators/pka-calculator",
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
                  "name": "pKa Calculator",
                  "item": "https://chemsolved.com/acid-base-calculators/pka-calculator"
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
