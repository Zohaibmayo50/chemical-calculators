import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Solubility Formula | Ksp & Solution Equilibrium',
  description: 'Calculate solubility using solubility product constant (Ksp). Understand dissolution equilibrium and molar solubility.',
  keywords: ['solubility', 'Ksp', 'solubility product', 'molar solubility', 'dissolution', 'precipitation', 'common ion effect']
};

export default function SolubilityFormulaPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <nav className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <Link href="/">Home</Link>
            <span>→</span>
            <Link href="/chemistry-formulas">Chemistry Formulas</Link>
            <span>→</span>
            <span className="text-gray-900 dark:text-white font-medium">Solubility</span>
          </nav>
        </div>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
            <h1 className="text-5xl font-bold mb-4 text-center">Solubility Formula</h1>
            <p className="text-xl text-center text-blue-100">
              Quantifying dissolution equilibrium and maximum concentration in solution
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-l-4 border-blue-500">
            <h2 className="text-3xl font-bold mb-6">Solubility Product Constant (Ksp)</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl p-8">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">General Equilibrium</h3>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6">
                  <p className="text-2xl font-mono font-bold text-blue-900 dark:text-blue-300 text-center mb-4">
                    AₓBᵧ(s) ⇌ xA⁺(aq) + yB⁻(aq)
                  </p>
                  <p className="text-xl font-mono text-center text-gray-700 dark:text-gray-300">
                    Ksp = [A⁺]ˣ[B⁻]ʸ
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-xl p-8">
                <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-300 mb-4">Molar Solubility (s)</h3>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center">
                  <p className="text-gray-700 dark:text-gray-300 mb-2">Maximum moles that dissolve per liter</p>
                  <p className="text-lg font-mono text-indigo-900 dark:text-indigo-300">s = moles dissolved / L solution</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Common Ksp Expressions</h2>
            
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-blue-900 dark:text-blue-300 mb-3">AB Type (1:1)</h3>
                <p className="font-mono text-gray-700 dark:text-gray-300 mb-2">AgCl ⇌ Ag⁺ + Cl⁻</p>
                <p className="font-mono text-blue-900 dark:text-blue-300">Ksp = [Ag⁺][Cl⁻] = s²</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">s = √Ksp</p>
              </div>

              <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-indigo-900 dark:text-indigo-300 mb-3">AB₂ Type (1:2)</h3>
                <p className="font-mono text-gray-700 dark:text-gray-300 mb-2">CaF₂ ⇌ Ca²⁺ + 2F⁻</p>
                <p className="font-mono text-indigo-900 dark:text-indigo-300">Ksp = [Ca²⁺][F⁻]² = s(2s)² = 4s³</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">s = ∛(Ksp/4)</p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-purple-900 dark:text-purple-300 mb-3">A₂B Type (2:1)</h3>
                <p className="font-mono text-gray-700 dark:text-gray-300 mb-2">Ag₂CrO₄ ⇌ 2Ag⁺ + CrO₄²⁻</p>
                <p className="font-mono text-purple-900 dark:text-purple-300">Ksp = [Ag⁺]²[CrO₄²⁻] = (2s)²s = 4s³</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">s = ∛(Ksp/4)</p>
              </div>

              <div className="bg-violet-50 dark:bg-violet-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-violet-900 dark:text-violet-300 mb-3">A₃B Type (3:1)</h3>
                <p className="font-mono text-gray-700 dark:text-gray-300 mb-2">Ca₃(PO₄)₂ ⇌ 3Ca²⁺ + 2PO₄³⁻</p>
                <p className="font-mono text-violet-900 dark:text-violet-300">Ksp = [Ca²⁺]³[PO₄³⁻]² = (3s)³(2s)² = 108s⁵</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">s = ⁵√(Ksp/108)</p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Worked Examples</h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">Example 1: Simple 1:1 Solubility</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> AgCl has Ksp = 1.8 × 10⁻¹⁰. Find molar solubility.</p>
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">AgCl ⇌ Ag⁺ + Cl⁻</p>
                  <p className="ml-6">Ksp = [Ag⁺][Cl⁻] = s × s = s²</p>
                  <p className="ml-6">1.8 × 10⁻¹⁰ = s²</p>
                  <p className="ml-6">s = √(1.8 × 10⁻¹⁰)</p>
                  <p className="ml-6 font-bold text-green-600">s = 1.3 × 10⁻⁵ M</p>
                  <p className="ml-6 text-sm text-blue-600 mt-2">(Very low solubility - AgCl is "insoluble")</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-4">Example 2: 1:2 Solubility (CaF₂)</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> CaF₂ has Ksp = 3.9 × 10⁻¹¹. Find molar solubility.</p>
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">CaF₂ ⇌ Ca²⁺ + 2F⁻</p>
                  <p className="ml-6">If s mol/L dissolves:</p>
                  <p className="ml-12">[Ca²⁺] = s, [F⁻] = 2s</p>
                  <p className="ml-6">Ksp = [Ca²⁺][F⁻]² = s(2s)² = 4s³</p>
                  <p className="ml-6">3.9 × 10⁻¹¹ = 4s³</p>
                  <p className="ml-6">s³ = 9.75 × 10⁻¹²</p>
                  <p className="ml-6 font-bold text-green-600">s = 2.1 × 10⁻⁴ M</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-cyan-900 dark:text-cyan-300 mb-4">Example 3: Common Ion Effect</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> Find solubility of AgCl in 0.10 M NaCl. Ksp(AgCl) = 1.8 × 10⁻¹⁰</p>
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">Initial [Cl⁻] = 0.10 M from NaCl</p>
                  <p className="ml-6">AgCl ⇌ Ag⁺ + Cl⁻</p>
                  <p className="ml-6">[Ag⁺] = s, [Cl⁻] = 0.10 + s ≈ 0.10 M (s very small)</p>
                  <p className="ml-6">Ksp = s(0.10)</p>
                  <p className="ml-6">1.8 × 10⁻¹⁰ = 0.10s</p>
                  <p className="ml-6 font-bold text-green-600">s = 1.8 × 10⁻⁹ M</p>
                  <p className="ml-6 text-sm text-red-600 mt-2">140× less soluble than in pure water!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Precipitation Prediction</h2>
            
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">Reaction Quotient (Q)</h3>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-4 font-mono text-center mb-4">
                  Q = [A⁺]ˣ[B⁻]ʸ
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <p className="text-gray-700 dark:text-gray-300"><strong>Q &lt; Ksp:</strong> Unsaturated - no precipitation</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">⚡</span>
                    <p className="text-gray-700 dark:text-gray-300"><strong>Q = Ksp:</strong> Saturated equilibrium</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">⚠</span>
                    <p className="text-gray-700 dark:text-gray-300"><strong>Q &gt; Ksp:</strong> Supersaturated - precipitation occurs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Common Mistakes</h2>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Wrong Ksp Expression</h3>
                  <p className="text-gray-700 dark:text-gray-300">For CaF₂: Ksp = s(2s)², NOT s³. Must account for stoichiometric coefficients!</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Ignoring Common Ion</h3>
                  <p className="text-gray-700 dark:text-gray-300">Solubility decreases in presence of common ion - use initial concentration</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4">
                <span className="text-2xl">💡</span>
                <div>
                  <h3 className="font-bold text-yellow-900 dark:text-yellow-300 mb-2">Ksp ≠ Solubility</h3>
                  <p className="text-gray-700 dark:text-gray-300">Ksp is equilibrium constant. Solubility (s) is calculated FROM Ksp.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4">
                <span className="text-2xl">💡</span>
                <div>
                  <h3 className="font-bold text-yellow-900 dark:text-yellow-300 mb-2">Temperature Dependence</h3>
                  <p className="text-gray-700 dark:text-gray-300">Ksp varies with temperature - values given are typically at 25°C</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Related Tools</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/physical-chemistry-calculators/solubility-calculator" className="block p-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Solubility Calculator</h3>
                <p className="text-blue-100">Calculate from Ksp</p>
              </Link>
              <Link href="/chemistry-formulas/solubility-product-constant-ksp" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Ksp Formula</h3>
                <p className="text-gray-600 dark:text-gray-400">Detailed Ksp explanation</p>
              </Link>
              <Link href="/electrochemistry-calculators/solubility-product-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Solubility Product</h3>
                <p className="text-gray-600 dark:text-gray-400">Ksp calculations</p>
              </Link>
              <Link href="/chemistry-formulas/common-ion-effect" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Common Ion Effect</h3>
                <p className="text-gray-600 dark:text-gray-400">Solubility in ionic solutions</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
