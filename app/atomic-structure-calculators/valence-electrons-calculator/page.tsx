import { Metadata } from 'next';
import Link from 'next/link';
import ValenceElectronsCalculator from '@/components/calculators/ValenceElectronsCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Valence Electrons Calculator | Find Valence Electrons',
  description: 'Free valence electrons calculator to determine the number of outermost shell electrons for any element. Find valence electrons instantly.',
  keywords: 'valence electrons calculator, outer shell electrons, electron configuration, group number, periodic table',
  openGraph: {
    title: 'Valence Electrons Calculator - Free Online Chemistry Tool',
    description: 'Calculate valence electrons for any element. Free valence electrons calculator.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://chemsolved.com/atomic-structure-calculators/valence-electrons-calculator'
  }
};

export default function ValenceElectronsCalculatorPage() {
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
              <Link href="/atomic-structure-calculators" className="text-primary-600 dark:text-primary-400 hover:underline">
                Atomic Structure Calculators
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600 dark:text-gray-300">Valence Electrons Calculator</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Valence Electrons Calculator
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Determine the number of valence electrons for any element
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Calculator Component */}
              <section>
                <ValenceElectronsCalculator />
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
                  The valence electrons calculator determines the number of electrons in the outermost shell of an atom. Valence electrons are crucial for understanding chemical bonding, reactivity, and an element&apos;s position in the periodic table. For main group elements, the number of valence electrons equals the group number.
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
                  <p className="text-center text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Main Group Elements
                  </p>
                  <p className="text-center text-lg font-mono text-gray-700 dark:text-gray-300">
                    Valence Electrons = Group Number (for Groups 1, 2, 13-18)
                  </p>
                </div>

                {/* Group-specific rules */}
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                    <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Groups 1-2 (s-block)</p>
                    <p className="text-sm font-mono text-gray-900 dark:text-white">Valence = Group Number</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Group 1 = 1, Group 2 = 2</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                    <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Groups 13-18 (p-block)</p>
                    <p className="text-sm font-mono text-gray-900 dark:text-white">Valence = Group - 10</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Group 14 = 4, Group 17 = 7</p>
                  </div>
                </div>

                {/* Special Cases */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Special Cases:</h3>
                  <div className="grid gap-3">
                    <div className="flex items-start gap-3 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                      <span className="font-mono font-bold text-primary-600 dark:text-primary-400 min-w-[80px]">Group 18</span>
                      <span className="text-gray-700 dark:text-gray-300">= 8 valence electrons (except He: 2)</span>
                    </div>
                    <div className="flex items-start gap-3 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                      <span className="font-mono font-bold text-primary-600 dark:text-primary-400 min-w-[80px]">Transition</span>
                      <span className="text-gray-700 dark:text-gray-300">= Typically 2 (outer s electrons)</span>
                    </div>
                    <div className="flex items-start gap-3 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                      <span className="font-mono font-bold text-primary-600 dark:text-primary-400 min-w-[80px]">Lanthanides</span>
                      <span className="text-gray-700 dark:text-gray-300">= Typically 2-3</span>
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
                  Step-by-Step Example: Oxygen
                </h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Identify Element</p>
                      <p className="text-gray-700 dark:text-gray-300">Oxygen (O), Atomic Number 8</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Find Group Number</p>
                      <p className="text-gray-700 dark:text-gray-300">Oxygen is in Group 16 (VIA)</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Apply Rule</p>
                      <p className="text-gray-700 dark:text-gray-300">For Group 16: Valence = 16 - 10 = 6</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Verify with Configuration</p>
                      <p className="text-gray-700 dark:text-gray-300">O: 1s² 2s² 2p⁴ → 2 + 4 = 6 valence electrons ✓</p>
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
                    <p className="font-semibold text-red-900 dark:text-red-300 mb-1">Confusing group with period</p>
                    <p className="text-sm text-red-800 dark:text-red-400">Use vertical group number, not horizontal period</p>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
                    <p className="font-semibold text-red-900 dark:text-red-300 mb-1">Wrong for transition metals</p>
                    <p className="text-sm text-red-800 dark:text-red-400">Transition metals typically have 2, not their group number</p>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
                    <p className="font-semibold text-red-900 dark:text-red-300 mb-1">Counting all electrons</p>
                    <p className="text-sm text-red-800 dark:text-red-400">Only count outermost shell, not total electrons</p>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
                    <p className="font-semibold text-red-900 dark:text-red-300 mb-1">Forgetting helium exception</p>
                    <p className="text-sm text-red-800 dark:text-red-400">He has 2 valence electrons, not 8</p>
                  </div>
                </div>
              </section>

              {/* Related Calculators */}
              <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Related Calculators</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Link href="/atomic-structure-calculators/electron-configuration-calculator" className="block p-4 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl border-2 border-primary-200 dark:border-primary-700 hover:scale-105 transition-transform">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Electron Configuration</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Find complete electron configuration</p>
                  </Link>
                  <Link href="/atomic-structure-calculators/lewis-structure-calculator" className="block p-4 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl border-2 border-primary-200 dark:border-primary-700 hover:scale-105 transition-transform">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Lewis Structure</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Draw Lewis dot structures</p>
                  </Link>
                  <Link href="/atomic-structure-calculators/atomic-mass-calculator" className="block p-4 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl border-2 border-primary-200 dark:border-primary-700 hover:scale-105 transition-transform">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Atomic Mass</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Calculate average atomic mass</p>
                  </Link>
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
                      What are valence electrons?
                    </summary>
                    <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                      Valence electrons are the electrons in the outermost shell of an atom. They determine how an element bonds and reacts with other elements. Elements with the same number of valence electrons typically show similar chemical properties.
                    </p>
                  </details>
                  <details className="group">
                    <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      Why are valence electrons important?
                    </summary>
                    <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                      Valence electrons determine chemical reactivity, bonding capacity, and molecule formation. Elements gain, lose, or share valence electrons to achieve a stable electron configuration (usually 8 valence electrons - the octet rule).
                    </p>
                  </details>
                  <details className="group">
                    <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      How do I find valence electrons from electron configuration?
                    </summary>
                    <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                      Count electrons in the outermost shell (highest n value). For example, Na (1s² 2s² 2p⁶ 3s¹) has 1 valence electron in shell 3. O (1s² 2s² 2p⁴) has 6 valence electrons (2 + 4) in shell 2.
                    </p>
                  </details>
                  <details className="group">
                    <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      Do transition metals have valence electrons?
                    </summary>
                    <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                      Yes, transition metals typically have 1-2 valence electrons in their outermost s orbital. However, they can also use d electrons from the next-lower shell in bonding, which is why they show variable oxidation states.
                    </p>
                  </details>
                  <details className="group">
                    <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      What is the octet rule?
                    </summary>
                    <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                      The octet rule states that atoms tend to gain, lose, or share electrons to achieve 8 valence electrons (like noble gases). Exceptions include H (wants 2), He (has 2), and some transition metals and larger atoms.
                    </p>
                  </details>
                  <details className="group">
                    <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      Why do noble gases have 8 valence electrons?
                    </summary>
                    <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                      Noble gases (Group 18) have completely filled outer shells: He (2), Ne-Rn (8). This makes them extremely stable and unreactive. Other elements try to achieve this stable configuration through bonding.
                    </p>
                  </details>
                  <details className="group">
                    <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      Can an element have more than 8 valence electrons?
                    </summary>
                    <p className="mt-3 pl-4 text-gray-700 dark:text-gray-300">
                      Elements in period 3 and beyond can expand their octets and have more than 8 valence electrons using d orbitals. Examples: P in PCl₅ (10 electrons), S in SF₆ (12 electrons). Period 2 elements cannot exceed 8.
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
                      <p className="text-sm text-gray-600 dark:text-gray-400">Teaching chemical bonding fundamentals</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-2xl">🧪</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Bonding Theory</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Predicting ionic and covalent bonds</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-2xl">⚛️</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Lewis Structures</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Drawing molecular structures</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-2xl">🔬</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Reactivity</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Predicting chemical reactions</p>
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
              "name": "Valence Electrons Calculator",
              "description": "Valence Electrons Calculator on ChemSolved",
              "url": "https://chemsolved.com/atomic-structure-calculators/valence-electrons-calculator",
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
                  "name": "Valence Electrons Calculator",
                  "item": "https://chemsolved.com/atomic-structure-calculators/valence-electrons-calculator"
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
