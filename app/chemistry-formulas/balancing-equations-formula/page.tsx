import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Balancing Chemical Equations | Systematic Methods & Examples',
  description: 'Learn to balance chemical equations using inspection, algebraic, and redox methods. Master conservation of mass and atom counting.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/balancing-equations-formula',
  },
  keywords: ['balancing equations', 'chemical equations', 'conservation of mass', 'stoichiometric coefficients', 'atom balance', 'redox balancing']
};

export default function BalancingEquationsFormulaPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <nav className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <Link href="/">Home</Link>
            <span>→</span>
            <Link href="/chemistry-formulas">Chemistry Formulas</Link>
            <span>→</span>
            <span className="text-gray-900 dark:text-white font-medium">Balancing Equations</span>
          </nav>
        </div>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
            <h1 className="text-5xl font-bold mb-4 text-center">Balancing Chemical Equations</h1>
            <p className="text-xl text-center text-orange-100">
              Ensuring equal numbers of each atom on both sides of the equation
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-l-4 border-indigo-500">
            <h2 className="text-3xl font-bold mb-6">Law of Conservation of Mass</h2>
            
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/30 dark:to-amber-900/30 rounded-xl p-8">
              <div className="text-center mb-6">
                <div className="inline-block bg-white dark:bg-gray-700 rounded-lg p-6">
                  <p className="text-2xl font-bold text-orange-900 dark:text-orange-300 mb-4">
                    Atoms In = Atoms Out
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Total atoms of each element must be equal on both sides
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 font-mono text-center">
                <p className="text-xl text-gray-800 dark:text-gray-200">aA + bB → cC + dD</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">a, b, c, d are stoichiometric coefficients</p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Balancing Methods</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-orange-900 dark:text-orange-300 mb-4">Method 1: Inspection (Trial & Error)</h3>
                <ol className="space-y-3 text-gray-700 dark:text-gray-300 ml-6 list-decimal">
                  <li>Balance atoms that appear in only one reactant and one product first</li>
                  <li>Balance polyatomic ions as units (if they remain intact)</li>
                  <li>Balance H and O last (most common elements)</li>
                  <li>Use fractional coefficients if needed, then multiply all by LCD</li>
                  <li>Check: count atoms of each element on both sides</li>
                </ol>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-amber-900 dark:text-amber-300 mb-4">Method 2: Algebraic Method</h3>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>1. Assign variables to each coefficient</p>
                  <p>2. Write equations for each element</p>
                  <p>3. Set one coefficient = 1 (usually most complex molecule)</p>
                  <p>4. Solve system of equations</p>
                  <p>5. Convert to whole numbers if needed</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-yellow-900 dark:text-yellow-300 mb-4">Method 3: Half-Reaction (for Redox)</h3>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>1. Separate into oxidation and reduction half-reactions</p>
                  <p>2. Balance atoms except O and H</p>
                  <p>3. Balance O with H₂O, then H with H⁺</p>
                  <p>4. Balance charge with electrons</p>
                  <p>5. Multiply to equalize electrons, then combine</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Worked Examples</h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-orange-900 dark:text-orange-300 mb-4">Example 1: Combustion (Inspection)</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Unbalanced:</strong> <span className="font-mono">C₃H₈ + O₂ → CO₂ + H₂O</span></p>
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6"><strong>Step 1:</strong> Balance C: 3 C on left → 3 CO₂ on right</p>
                  <p className="ml-12 font-mono">C₃H₈ + O₂ → 3CO₂ + H₂O</p>
                  <p className="ml-6"><strong>Step 2:</strong> Balance H: 8 H on left → 4 H₂O on right</p>
                  <p className="ml-12 font-mono">C₃H₈ + O₂ → 3CO₂ + 4H₂O</p>
                  <p className="ml-6"><strong>Step 3:</strong> Balance O: 10 O on right → 5 O₂ on left</p>
                  <p className="ml-12 font-mono bg-green-50 dark:bg-green-900/20 p-3 rounded font-bold text-green-700 dark:text-green-400">
                    C₃H₈ + 5O₂ → 3CO₂ + 4H₂O ✓
                  </p>
                  <p className="ml-6 mt-2"><strong>Check:</strong> C: 3=3, H: 8=8, O: 10=10 ✓</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">Example 2: Double Replacement</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Unbalanced:</strong> <span className="font-mono">Al(OH)₃ + H₂SO₄ → Al₂(SO₄)₃ + H₂O</span></p>
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6"><strong>Step 1:</strong> Balance Al: 2 Al on right → 2 Al(OH)₃</p>
                  <p className="ml-12 font-mono">2Al(OH)₃ + H₂SO₄ → Al₂(SO₄)₃ + H₂O</p>
                  <p className="ml-6"><strong>Step 2:</strong> Balance SO₄: 3 SO₄ on right → 3 H₂SO₄</p>
                  <p className="ml-12 font-mono">2Al(OH)₃ + 3H₂SO₄ → Al₂(SO₄)₃ + H₂O</p>
                  <p className="ml-6"><strong>Step 3:</strong> Balance H₂O: 12 H on left → 6 H₂O</p>
                  <p className="ml-12 font-mono bg-green-50 dark:bg-green-900/20 p-3 rounded font-bold text-green-700 dark:text-green-400">
                    2Al(OH)₃ + 3H₂SO₄ → Al₂(SO₄)₃ + 6H₂O ✓
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-4">Example 3: Synthesis with Fractions</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Unbalanced:</strong> <span className="font-mono">N₂ + H₂ → NH₃</span></p>
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">N₂ + H₂ → 2NH₃ (balance N)</p>
                  <p className="ml-6">N₂ + 3H₂ → 2NH₃ (balance H: 6 H needed)</p>
                  <p className="ml-12 font-mono bg-green-50 dark:bg-green-900/20 p-3 rounded font-bold text-green-700 dark:text-green-400">
                    N₂ + 3H₂ → 2NH₃ ✓
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Common Mistakes</h2>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Changing Subscripts Instead of Coefficients</h3>
                  <p className="text-gray-700 dark:text-gray-300">Never change H₂O to H₃O - this changes the compound! Only add coefficients: 2H₂O</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Forgetting to Multiply Subscripts</h3>
                  <p className="text-gray-700 dark:text-gray-300">In 2Al₂(SO₄)₃: Al=4, S=6, O=24 (multiply inside and outside parentheses)</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Not Simplifying to Lowest Terms</h3>
                  <p className="text-gray-700 dark:text-gray-300">2H₂ + 2Cl₂ → 4HCl should be simplified to H₂ + Cl₂ → 2HCl</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4">
                <span className="text-2xl">💡</span>
                <div>
                  <h3 className="font-bold text-yellow-900 dark:text-yellow-300 mb-2">Balance Most Complex Molecule First</h3>
                  <p className="text-gray-700 dark:text-gray-300">Start with the molecule containing the most elements</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4">
                <span className="text-2xl">💡</span>
                <div>
                  <h3 className="font-bold text-yellow-900 dark:text-yellow-300 mb-2">Leave Diatomic Elements (O₂, H₂) for Last</h3>
                  <p className="text-gray-700 dark:text-gray-300">These are easier to balance after other atoms are set</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Related Tools</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/stoichiometry-calculators/balancing-equations-calculator" className="block p-6 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Equation Balancer</h3>
                <p className="text-orange-100">Automatically balance equations</p>
              </Link>
              <Link href="/chemistry-formulas/stoichiometry-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Stoichiometry</h3>
                <p className="text-gray-600 dark:text-gray-400">Use balanced equations</p>
              </Link>
              <Link href="/stoichiometry-calculators" className="block p-6 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">All Stoichiometry Calculators</h3>
                <p className="text-white/90">Explore all stoichiometry tools</p>
              </Link>
              <Link href="/electrochemistry-calculators/redox-balancing-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Redox Balancing</h3>
                <p className="text-gray-600 dark:text-gray-400">Half-reaction method</p>
              </Link>
            </div>
          </div>
        </section>
      
      {/* Structured Data - EducationalArticle */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": "Balancing Equations Formula",
            "description": "Balancing Equations Formula on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/balancing-equations-formula",
            "author": {
              "@type": "Person",
              "name": "Muhammad Zohaib",
              "jobTitle": "Chemist"
            },
            "publisher": {
              "@type": "EducationalOrganization",
              "name": "ChemSolved",
              "url": "https://chemsolved.com"
            },
            "educationalLevel": "University",
            "educationalUse": "Reference"
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
                "name": "Balancing Equations Formula",
                "item": "https://chemsolved.com/chemistry-formulas/balancing-equations-formula"
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
