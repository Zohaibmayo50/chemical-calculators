import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HendersonHassalbalchCalculator from '@/components/calculators/HendersonHassalbalchCalculator';

export const metadata: Metadata = {
  title: 'Henderson-Hasselbalch Calculator | Buffer pH Calculator | pKa Calculator',
  description: 'Calculate buffer solution pH using the Henderson-Hasselbalch equation: pH = pKa + log([A⁻]/[HA]). Essential for acid-base chemistry and biochemistry.',
};

export default function HendersonHassalbalchCalculatorPage() {
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
              href="/atomic-structure-calculators" 
              className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors"
            >
              Atomic Structure Calculators
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-500 dark:text-gray-400">Henderson-Hasselbalch Calculator</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-6 mb-4 animate-fade-in">
            Henderson-Hasselbalch Calculator
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in animation-delay-100">
            Calculate buffer solution pH and understand acid-base equilibria
          </p>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Calculator */}
              <HendersonHassalbalchCalculator />

              {/* Educational Content */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 animate-slide-in-up animation-delay-200">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Understanding the Henderson-Hasselbalch Equation
                </h2>
                
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    The Henderson-Hasselbalch equation is a fundamental relationship in acid-base chemistry 
                    that relates the pH of a buffer solution to the pKa of the weak acid and the ratio of 
                    conjugate base to weak acid concentrations. It&apos;s one of the most important equations 
                    in chemistry and biochemistry.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    The Henderson-Hasselbalch Equation
                  </h3>
                  
                  <div className="bg-gradient-to-r from-tertiary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg mb-6">
                    <p className="text-center text-2xl font-mono text-gray-900 dark:text-white mb-2">
                      pH = pKa + log([A⁻]/[HA])
                    </p>
                    <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                      Buffer Solution pH Calculation
                    </p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="border-l-4 border-tertiary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">pH</p>
                      <p className="text-gray-600 dark:text-gray-400">Measure of acidity/basicity (−log[H⁺])</p>
                    </div>
                    
                    <div className="border-l-4 border-tertiary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">pKa</p>
                      <p className="text-gray-600 dark:text-gray-400">Acid dissociation constant (−log Ka), characteristic of each weak acid</p>
                    </div>

                    <div className="border-l-4 border-tertiary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">[A⁻]</p>
                      <p className="text-gray-600 dark:text-gray-400">Concentration of conjugate base (deprotonated form)</p>
                    </div>

                    <div className="border-l-4 border-tertiary-500 pl-4">
                      <p className="font-semibold text-gray-900 dark:text-white">[HA]</p>
                      <p className="text-gray-600 dark:text-gray-400">Concentration of weak acid (protonated form)</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Derivation from Ka Expression
                  </h3>

                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      Starting with the acid dissociation equilibrium:
                    </p>
                    <p className="font-mono text-center text-lg mb-3">HA ⇌ H⁺ + A⁻</p>
                    
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      The equilibrium constant Ka:
                    </p>
                    <p className="font-mono text-center text-lg mb-3">Ka = [H⁺][A⁻] / [HA]</p>

                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      Rearranging for [H⁺]:
                    </p>
                    <p className="font-mono text-center text-lg mb-3">[H⁺] = Ka × [HA] / [A⁻]</p>

                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      Taking −log of both sides:
                    </p>
                    <p className="font-mono text-center text-lg mb-3">−log[H⁺] = −log(Ka) − log([HA]/[A⁻])</p>

                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      Since pH = −log[H⁺] and pKa = −log(Ka):
                    </p>
                    <p className="font-mono text-center text-lg text-tertiary-600 dark:text-tertiary-400 font-bold">
                      pH = pKa + log([A⁻]/[HA]) ✓
                    </p>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Key Relationships
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg border-2 border-green-500">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        When pH = pKa
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        [A⁻] = [HA]
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Equal amounts of acid and conjugate base. Optimal buffer capacity.
                      </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border-2 border-blue-500">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        When pH &gt; pKa
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        [A⁻] &gt; [HA]
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        More conjugate base present. Solution is more basic.
                      </p>
                    </div>

                    <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg border-2 border-yellow-500">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        When pH &lt; pKa
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        [HA] &gt; [A⁻]
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        More weak acid present. Solution is more acidic.
                      </p>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg border-2 border-purple-500">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Buffer Range
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        pH = pKa ± 1
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Effective buffering region. Resists pH changes.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Practical Example: Acetate Buffer
                  </h3>

                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      <strong>Problem:</strong> What is the pH of a buffer containing 0.10 M acetic acid 
                      (CH₃COOH, pKa = 4.76) and 0.15 M sodium acetate (CH₃COO⁻Na⁺)?
                    </p>

                    <div className="space-y-3 text-gray-700 dark:text-gray-300">
                      <p><strong>Given:</strong></p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>pKa = 4.76</li>
                        <li>[HA] = [CH₃COOH] = 0.10 M</li>
                        <li>[A⁻] = [CH₃COO⁻] = 0.15 M</li>
                      </ul>

                      <p className="mt-4"><strong>Solution:</strong></p>
                      <div className="font-mono bg-white dark:bg-gray-600 p-3 rounded">
                        pH = pKa + log([A⁻]/[HA])<br />
                        pH = 4.76 + log(0.15/0.10)<br />
                        pH = 4.76 + log(1.5)<br />
                        pH = 4.76 + 0.18<br />
                        <span className="text-tertiary-600 dark:text-tertiary-400 font-bold">pH = 4.94</span>
                      </div>

                      <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                        Since pH &gt; pKa, the solution contains more conjugate base than acid, 
                        making it slightly more basic than a 1:1 buffer would be.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Common Buffer Systems
                  </h3>

                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300 dark:border-gray-600">
                      <thead className="bg-gray-100 dark:bg-gray-700">
                        <tr>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Buffer</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">pKa</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">pH Range</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Use</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Acetate</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4.76</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.8 - 5.8</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Biochemistry</td>
                        </tr>
                        <tr className="bg-gray-50 dark:bg-gray-700/50">
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Phosphate</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">7.21</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">6.2 - 8.2</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Physiological pH</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Tris</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">8.06</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">7.0 - 9.0</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Molecular biology</td>
                        </tr>
                        <tr className="bg-gray-50 dark:bg-gray-700/50">
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Carbonate</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">10.33</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">9.3 - 11.3</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Basic solutions</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Bicarbonate</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">6.35</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">5.4 - 7.4</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Blood pH regulation</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    Applications
                  </h3>
                  
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🧬</span>
                      <div>
                        <strong>Biochemistry:</strong> Maintain optimal pH for enzyme activity and protein stability
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🩺</span>
                      <div>
                        <strong>Physiology:</strong> Blood pH regulation through bicarbonate-carbonic acid buffer system
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">⚗️</span>
                      <div>
                        <strong>Analytical Chemistry:</strong> pH control for titrations, extractions, and chromatography
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">💊</span>
                      <div>
                        <strong>Pharmaceuticals:</strong> Drug formulation and stability at specific pH values
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🧪</span>
                      <div>
                        <strong>Chemical Synthesis:</strong> Control reaction conditions and product selectivity
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-tertiary-600 dark:text-tertiary-400 mt-1">🌊</span>
                      <div>
                        <strong>Environmental Science:</strong> Monitor and control water pH in ecosystems
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
                    <span className="text-2xl">📊</span>
                    Quick Reference
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Equation:</p>
                      <p className="text-gray-600 dark:text-gray-400">pH = pKa + log([A⁻]/[HA])</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Optimal Buffer:</p>
                      <p className="text-gray-600 dark:text-gray-400">pH = pKa ± 1 unit</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Best Capacity:</p>
                      <p className="text-gray-600 dark:text-gray-400">When [A⁻] = [HA]</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Common pKa:</p>
                      <p className="text-gray-600 dark:text-gray-400">Acetate: 4.76, Phosphate: 7.21</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Level:</p>
                      <p className="text-gray-600 dark:text-gray-400">College General Chemistry</p>
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
                        href="/concentration-and-solution-calculators/ph-and-poh-calculator"
                        className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors"
                      >
                        pH and pOH Calculator
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
                    <li>
                      <Link 
                        href="/concentration-and-solution-calculators/dilution-calculator"
                        className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors"
                      >
                        Dilution Calculator
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
                          href="/chemistry-formulas/henderson-hasselbalch-equation"
                          className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors"
                        >
                          Henderson-Hasselbalch Formula
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="/chemistry-formulas/ph-formula"
                          className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors"
                        >
                          pH Formula
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <ul className="space-y-3 mt-6">
                    <li>
                      <Link 
                        href="/atomic-structure-calculators"
                        className="text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-colors font-semibold"
                      >
                        All Atomic Structure Calculators →
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
                      <span className="text-xl">🧬</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Biochemistry</p>
                        <p className="text-gray-600 dark:text-gray-400">Enzyme activity optimization</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">🩺</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Medicine</p>
                        <p className="text-gray-600 dark:text-gray-400">Blood pH regulation</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">💊</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Pharmacology</p>
                        <p className="text-gray-600 dark:text-gray-400">Drug formulation</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">⚗️</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Analytical Chem</p>
                        <p className="text-gray-600 dark:text-gray-400">pH-controlled reactions</p>
                      </div>
                    </li>
                  </ul>
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
