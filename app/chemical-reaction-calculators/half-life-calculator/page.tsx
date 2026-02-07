import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HalfLifeCalculator from '@/components/calculators/HalfLifeCalculator';

export const metadata: Metadata = {
  title: 'Half-Life Calculator | Reaction Kinetics | Zero, First, Second Order',
  description: 'Calculate half-life, concentration, or rate constant for zero, first, and second-order reactions. Essential for chemical kinetics and radioactive decay.',
  alternates: {
    canonical: 'https://chemsolved.com/chemical-reaction-calculators/half-life-calculator',
  },
};

export default function HalfLifeCalculatorPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-tertiary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <nav className="flex items-center gap-2 text-sm animate-fade-in">
            <Link 
              href="/" 
              className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors"
            >
              Home
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link 
              href="/chemical-reaction-calculators" 
              className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors"
            >
              Chemical Reaction Calculators
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-500 dark:text-gray-400">Half-Life Calculator</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-6 mb-4 animate-fade-in">
            Half-Life Calculator
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in animation-delay-100">
            Calculate half-life and concentration for zero, first, and second-order reactions
          </p>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Calculator */}
              <HalfLifeCalculator />

              {/* Educational Content */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 animate-slide-in-up animation-delay-200">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Understanding Half-Life in Chemical Kinetics
                </h2>
                
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    Half-life (t₁/₂) is the time required for the concentration of a reactant to decrease 
                    to exactly one-half of its initial value. It&apos;s a fundamental concept in chemical 
                    kinetics and is particularly important in radioactive decay, pharmacokinetics, and 
                    environmental chemistry.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Half-Life Formulas by Reaction Order
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Zero-Order Reactions</h4>
                      <div className="font-mono bg-white dark:bg-gray-600 p-3 rounded mb-2">
                        t₁/₂ = [A]₀ / (2k)
                      </div>
                      <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                        <li>• Half-life depends on initial concentration</li>
                        <li>• t₁/₂ decreases as reaction proceeds</li>
                        <li>• Example: Photochemical reactions at high intensity</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">First-Order Reactions</h4>
                      <div className="font-mono bg-white dark:bg-gray-600 p-3 rounded mb-2">
                        t₁/₂ = ln(2) / k = 0.693 / k
                      </div>
                      <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                        <li>• Half-life is constant (independent of concentration)</li>
                        <li>• Most common in nature (radioactive decay)</li>
                        <li>• Example: ¹⁴C decay, many drug eliminations</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg border-l-4 border-purple-500">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Second-Order Reactions</h4>
                      <div className="font-mono bg-white dark:bg-gray-600 p-3 rounded mb-2">
                        t₁/₂ = 1 / (k[A]₀)
                      </div>
                      <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                        <li>• Half-life depends on initial concentration</li>
                        <li>• t₁/₂ increases as reaction proceeds</li>
                        <li>• Example: Dimerization reactions, some decompositions</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Integrated Rate Laws
                  </h3>

                  <div className="overflow-x-auto mb-6">
                    <table className="min-w-full border border-gray-300 dark:border-gray-600">
                      <thead className="bg-gray-100 dark:bg-gray-700">
                        <tr>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Order</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Rate Law</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Integrated Form</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Linear Plot</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Zero</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono">=k</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono">[A]ₜ=[A]₀-kt</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">[A] vs t</td>
                        </tr>
                        <tr className="bg-gray-50 dark:bg-gray-700/50">
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">First</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono">Rate=k[A]</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono">ln[A]ₜ=ln[A]₀-kt</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">ln[A] vs t</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Second</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono">Rate=k[A]²</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono">1/[A]ₜ=1/[A]₀+kt</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">1/[A] vs t</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Practical Example: First-Order Radioactive Decay
                  </h3>

                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      <strong>Problem:</strong> Carbon-14 has a half-life of 5,730 years. If a fossil contains 
                      25% of the original ¹⁴C, how old is the fossil?
                    </p>

                    <div className="space-y-3 text-gray-700 dark:text-gray-300">
                      <p><strong>Given:</strong></p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>t₁/₂ = 5,730 years</li>
                        <li>[A]ₜ / [A]₀ = 0.25 (25% remaining)</li>
                      </ul>

                      <p className="mt-4"><strong>Solution:</strong></p>
                      <div className="font-mono bg-white dark:bg-gray-600 p-3 rounded space-y-1">
                        <p>First, find k: k = 0.693 / t₁/₂</p>
                        <p>k = 0.693 / 5,730 = 1.209 × 10⁻⁴ yr⁻¹</p>
                        <p className="mt-2">Then, use: ln([A]ₜ/[A]₀) = -kt</p>
                        <p>ln(0.25) = -1.209 × 10⁻⁴ × t</p>
                        <p>-1.386 = -1.209 × 10⁻⁴ × t</p>
                        <p className="text-tertiary-600 dark:text-tertiary-400 font-bold mt-2">t = 11,460 years</p>
                      </div>

                      <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                        This is exactly 2 half-lives (5,730 × 2 = 11,460 years). After 2 half-lives, 
                        25% remains (50% → 25%).
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Common Half-Lives
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Radioactive Isotopes
                      </h4>
                      <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                        <li>• ¹⁴C: 5,730 years</li>
                        <li>• ²³⁸U: 4.5 billion years</li>
                        <li>• ¹³¹I: 8 days (medical use)</li>
                        <li>• ²²²Rn: 3.8 days</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Pharmaceuticals
                      </h4>
                      <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                        <li>• Aspirin: 2-3 hours</li>
                        <li>• Caffeine: 4-6 hours</li>
                        <li>• Ibuprofen: 2 hours</li>
                        <li>• Penicillin: 0.5-1 hour</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Applications
                  </h3>
                  
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">⚛️</span>
                      <div>
                        <strong>Nuclear Chemistry:</strong> Radioactive dating, nuclear medicine, waste management
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">💊</span>
                      <div>
                        <strong>Pharmacology:</strong> Drug dosing schedules and elimination rates
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🌍</span>
                      <div>
                        <strong>Environmental Science:</strong> Pollutant degradation and atmospheric chemistry
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🧪</span>
                      <div>
                        <strong>Chemical Industry:</strong> Reaction optimization and shelf-life determination
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🏛️</span>
                      <div>
                        <strong>Archaeology:</strong> Carbon-14 dating of artifacts and fossils
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Quick Reference */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 animate-slide-in-up animation-delay-300">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="text-2xl">⏱️</span>
                    Quick Reference
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Zero Order:</p>
                      <p className="text-gray-600 dark:text-gray-400 font-mono">t₁/₂ = [A]₀/(2k)</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">First Order:</p>
                      <p className="text-gray-600 dark:text-gray-400 font-mono">t₁/₂ = 0.693/k</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Second Order:</p>
                      <p className="text-gray-600 dark:text-gray-400 font-mono">t₁/₂ = 1/(k[A]₀)</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Key Property:</p>
                      <p className="text-gray-600 dark:text-gray-400">Only 1st order has constant t₁/₂</p>
                    </div>
                  </div>
                </div>

                {/* Related Calculators */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 animate-slide-in-up animation-delay-400">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="text-2xl">🔗</span>
                    Related Calculators
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <Link 
                        href="/chemical-reaction-calculators/equilibrium-constant-calculator"
                        className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors"
                      >
                        Equilibrium Constant
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/concentration-and-solution-calculators/molarity-calculator"
                        className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors"
                      >
                        Molarity Calculator
                      </Link>
                    </li>
                  </ul>
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <span className="text-2xl">📐</span>
                      Related Formulas
                    </h3>
                    <ul className="space-y-3">
                      <li>
                        <Link 
                          href="/chemistry-formulas/half-life-formula"
                          className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors"
                        >
                          Half-Life Formula
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="/chemistry-formulas/radioactive-decay-formula"
                          className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors"
                        >
                          Radioactive Decay Formula
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <ul className="space-y-3 mt-6">
                    <li>
                      <Link 
                        href="/chemical-reaction-calculators"
                        className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors font-semibold"
                      >
                        All Chemical Reaction Calculators →
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Where It's Used */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 animate-slide-in-up animation-delay-500">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="text-2xl">🎯</span>
                    Where It&apos;s Used
                  </h3>
                  <ul className="space-y-4 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="text-xl">⚛️</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Nuclear Chemistry</p>
                        <p className="text-gray-600 dark:text-gray-400">Radioactive decay dating</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">💊</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Pharmacology</p>
                        <p className="text-gray-600 dark:text-gray-400">Drug elimination rates</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">🧪</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Chemical Kinetics</p>
                        <p className="text-gray-600 dark:text-gray-400">Reaction rate studies</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">🌍</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Environmental</p>
                        <p className="text-gray-600 dark:text-gray-400">Pollutant degradation</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      {/* Structured Data - SoftwareApplication */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Half Life Calculator",
            "description": "Half Life Calculator on ChemSolved",
            "url": "https://chemsolved.com/chemical-reaction-calculators/half-life-calculator",
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
      {/* Structured Data - BreadcrumbList */}
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
                "name": "Half Life Calculator",
                "item": "https://chemsolved.com/chemical-reaction-calculators/half-life-calculator"
              }
            ]
          })
        }}
      />
      </main>
      <Footer />
    </>
  );
}
