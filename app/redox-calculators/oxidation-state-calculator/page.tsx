import { Metadata } from 'next';
import Link from 'next/link';
import OxidationStateCalculator from '@/components/calculators/OxidationStateCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Oxidation State Calculator | Calculate Oxidation Numbers',
  description: 'Free oxidation state calculator to determine oxidation numbers for elements in compounds. Apply oxidation state rules instantly.',
  keywords: 'oxidation state calculator, oxidation number, redox reactions, oxidation rules',
  openGraph: {
    title: 'Oxidation State Calculator - Free Online Chemistry Tool',
    description: 'Calculate oxidation states for any compound. Free oxidation state calculator.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://chemsolved.com/redox-calculators/oxidation-state-calculator'
  }
};

export default function OxidationStateCalculatorPage() {
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
              <Link href="/redox-calculators" className="text-primary-600 dark:text-primary-400 hover:underline">
                Redox Calculators
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600 dark:text-gray-300">Oxidation State Calculator</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Oxidation State Calculator
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Determine oxidation numbers for elements in chemical compounds
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Calculator Component */}
              <section>
                <OxidationStateCalculator />
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
                  The oxidation state calculator determines the oxidation number for each element in a chemical compound by applying oxidation state rules. It uses known oxidation states of common elements and the principle that oxidation states must sum to the total charge to solve for unknown oxidation numbers.
                </p>
              </section>

              {/* Formula Section */}
              <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-accent-100 dark:bg-accent-900 rounded-lg flex items-center justify-center text-accent-600 dark:text-accent-400">
                    📐
                  </span>
                  Rules
                </h2>
                
                {/* Main Rule */}
                <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl p-6 mb-6 border-2 border-primary-200 dark:border-primary-700">
                  <p className="text-center text-2xl font-mono font-bold text-gray-900 dark:text-white">
                    Σ(oxidation numbers) = total charge
                  </p>
                </div>

                {/* Common Rules */}
                <div className="space-y-3 mb-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Common Rules:</h3>
                  <div className="grid gap-3">
                    <div className="flex items-start gap-3 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                      <span className="font-mono font-bold text-primary-600 dark:text-primary-400 min-w-[100px]">Free elements</span>
                      <span className="text-gray-700 dark:text-gray-300">= 0 (e.g., O₂, Fe, Na)</span>
                    </div>
                    <div className="flex items-start gap-3 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                      <span className="font-mono font-bold text-primary-600 dark:text-primary-400 min-w-[100px]">Monatomic ions</span>
                      <span className="text-gray-700 dark:text-gray-300">= charge (e.g., Na⁺ = +1, Cl⁻ = -1)</span>
                    </div>
                    <div className="flex items-start gap-3 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                      <span className="font-mono font-bold text-primary-600 dark:text-primary-400 min-w-[100px]">Hydrogen</span>
                      <span className="text-gray-700 dark:text-gray-300">= +1 (except metal hydrides: -1)</span>
                    </div>
                    <div className="flex items-start gap-3 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                      <span className="font-mono font-bold text-primary-600 dark:text-primary-400 min-w-[100px]">Oxygen</span>
                      <span className="text-gray-700 dark:text-gray-300">= -2 (except peroxides: -1, F₂O: +2)</span>
                    </div>
                    <div className="flex items-start gap-3 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                      <span className="font-mono font-bold text-primary-600 dark:text-primary-400 min-w-[100px]">Group 1</span>
                      <span className="text-gray-700 dark:text-gray-300">= +1 (Li, Na, K, etc.)</span>
                    </div>
                    <div className="flex items-start gap-3 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                      <span className="font-mono font-bold text-primary-600 dark:text-primary-400 min-w-[100px]">Group 2</span>
                      <span className="text-gray-700 dark:text-gray-300">= +2 (Mg, Ca, Ba, etc.)</span>
                    </div>
                    <div className="flex items-start gap-3 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                      <span className="font-mono font-bold text-primary-600 dark:text-primary-400 min-w-[100px]">Fluorine</span>
                      <span className="text-gray-700 dark:text-gray-300">= -1 (always)</span>
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
                  Step-by-Step Example: H₂SO₄
                </h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Identify Known States</p>
                      <p className="text-gray-700 dark:text-gray-300">H = +1, O = -2 (by rules)</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Set Up Equation</p>
                      <p className="text-gray-700 dark:text-gray-300">2(+1) + S + 4(-2) = 0 (neutral compound)</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Solve for S</p>
                      <p className="text-gray-700 dark:text-gray-300">2 + S - 8 = 0 → S = +6</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Result</p>
                      <p className="text-gray-700 dark:text-gray-300">H₂SO₄: H = +1, S = +6, O = -2</p>
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
                    <p className="font-semibold text-red-900 dark:text-red-300 mb-1">Confusing with formal charge</p>
                    <p className="text-sm text-red-800 dark:text-red-400">Oxidation state ≠ formal charge or actual charge</p>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
                    <p className="font-semibold text-red-900 dark:text-red-300 mb-1">Forgetting peroxide exception</p>
                    <p className="text-sm text-red-800 dark:text-red-400">O in H₂O₂ is -1, not -2</p>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
                    <p className="font-semibold text-red-900 dark:text-red-300 mb-1">Wrong sum for ions</p>
                    <p className="text-sm text-red-800 dark:text-red-400">Polyatomic ions sum to ion charge, not 0</p>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
                    <p className="font-semibold text-red-900 dark:text-red-300 mb-1">Ignoring subscripts</p>
                    <p className="text-sm text-red-800 dark:text-red-400">Must multiply oxidation state by subscript</p>
                  </div>
                </div>
              </section>

              {/* Related Calculators */}
              <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Related Calculators</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Link href="/redox-calculators/redox-balancing-calculator" className="block p-4 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl border-2 border-primary-200 dark:border-primary-700 hover:scale-105 transition-transform">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Redox Balancing</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Balance redox equations</p>
                  </Link>
                  <Link href="/redox-calculators/oxidation-number-calculator" className="block p-4 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl border-2 border-primary-200 dark:border-primary-700 hover:scale-105 transition-transform">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Oxidation Number</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Find oxidation numbers</p>
                  </Link>
                  <Link href="/atomic-structure-calculators/ph-calculator" className="block p-4 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl border-2 border-primary-200 dark:border-primary-700 hover:scale-105 transition-transform">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">pH Calculator</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Calculate pH values</p>
                  </Link>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <Link href="/redox-calculators" className="block p-4 bg-gray-100 dark:bg-gray-700 rounded-xl border-2 border-gray-300 dark:border-gray-600 hover:scale-105 transition-transform">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">All Redox Calculators →</h3>
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
                      What is an oxidation state?
                    </summary>
                    <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                      Oxidation state (oxidation number) is the hypothetical charge an atom would have if all bonds were completely ionic. It&apos;s a bookkeeping method to track electron transfer in redox reactions. For example, in H₂O, H has oxidation state +1 and O has -2.
                    </p>
                  </details>
                  <details className="group">
                    <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      How do I determine oxidation states?
                    </summary>
                    <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                      Apply rules in order: (1) Free elements = 0, (2) Monatomic ions = charge, (3) H = +1 (usually), (4) O = -2 (usually), (5) Group 1 = +1, (6) Group 2 = +2, (7) F = -1 always. Then solve algebraically so the sum equals total charge.
                    </p>
                  </details>
                  <details className="group">
                    <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      What&apos;s the difference between oxidation state and charge?
                    </summary>
                    <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                      Charge is the actual electrical charge on an ion (e.g., Na⁺ has +1 charge). Oxidation state is a formalism for covalent compounds assuming all electrons go to the more electronegative atom. In ionic compounds they&apos;re equal, but in covalent compounds they differ.
                    </p>
                  </details>
                  <details className="group">
                    <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      Can oxidation states be fractional?
                    </summary>
                    <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                      Yes, average oxidation states can be fractional in compounds where the same element exists in multiple oxidation states. For example, Fe₃O₄ contains Fe²⁺ and Fe³⁺, giving an average of +8/3. However, individual atoms have whole number states.
                    </p>
                  </details>
                  <details className="group">
                    <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      What is oxidation and reduction?
                    </summary>
                    <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                      Oxidation is loss of electrons (increase in oxidation state). Reduction is gain of electrons (decrease in oxidation state). Mnemonic: OIL RIG (Oxidation Is Loss, Reduction Is Gain) or LEO GER (Loss of Electrons = Oxidation, Gain of Electrons = Reduction).
                    </p>
                  </details>
                  <details className="group">
                    <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      Why is oxygen -2 in most compounds?
                    </summary>
                    <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                      Oxygen is highly electronegative (second only to fluorine) and readily gains 2 electrons to achieve a stable octet. Exceptions: peroxides (O₂²⁻, oxidation state -1), superoxides (O₂⁻, -1/2), and when bonded to fluorine (OF₂, +2).
                    </p>
                  </details>
                  <details className="group">
                    <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      What are the maximum and minimum oxidation states?
                    </summary>
                    <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                      For main group elements, maximum oxidation state typically equals group number (e.g., S in Group 16 can reach +6). Minimum is often (group number - 8) for nonmetals (e.g., S can be -2). Transition metals can have variable oxidation states.
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
                    <span className="text-2xl">⚡</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Redox Reactions</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Identifying oxidizing and reducing agents</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-2xl">⚖️</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Equation Balancing</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Balancing redox equations</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-2xl">🔋</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Electrochemistry</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Battery and fuel cell reactions</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-2xl">🧪</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Analytical Chemistry</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Titrations and analysis</p>
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
              "name": "Oxidation State Calculator",
              "description": "Oxidation State Calculator on ChemSolved",
              "url": "https://chemsolved.com/redox-calculators/oxidation-state-calculator",
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
                  "name": "Oxidation State Calculator",
                  "item": "https://chemsolved.com/redox-calculators/oxidation-state-calculator"
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
