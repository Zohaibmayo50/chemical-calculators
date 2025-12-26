import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Molecular Orbital Theory | MO Diagrams & Bond Order',
  description: 'Understand molecular orbital theory, MO diagrams, bond order calculation, and electron configuration in molecules using LCAO method.',
  alternates: {
    canonical: 'https://chemicalcalculators.com/chemistry-formulas/molecular-orbital-theory',
  },
  keywords: ['molecular orbital theory', 'MO diagram', 'bond order', 'LCAO', 'bonding orbital', 'antibonding orbital', 'sigma pi orbitals']
};

export default function MolecularOrbitalTheoryPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Breadcrumb */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <nav className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <Link href="/" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Home
            </Link>
            <span>→</span>
            <Link href="/chemistry-formulas" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Chemistry Formulas
            </Link>
            <span>→</span>
            <span className="text-gray-900 dark:text-white font-medium">Molecular Orbital Theory</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white shadow-2xl">
            <h1 className="text-5xl font-bold mb-4 text-center">Molecular Orbital Theory</h1>
            <p className="text-xl text-center text-indigo-100 max-w-3xl mx-auto leading-relaxed">
              Describes bonding in molecules using linear combinations of atomic orbitals (LCAO) to form molecular orbitals
            </p>
          </div>
        </section>

        {/* Bond Order Formula */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-l-4 border-indigo-500">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Bond Order Formula</h2>
            
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-xl p-8 mb-6">
              <div className="text-center">
                <div className="inline-block bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg">
                  <p className="text-3xl font-mono font-bold text-indigo-900 dark:text-indigo-300">
                    Bond Order = (n<sub>b</sub> - n<sub>a</sub>) / 2
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-blue-900 dark:text-blue-300 mb-2">n<sub>b</sub> = Bonding Electrons</h3>
                <p className="text-gray-700 dark:text-gray-300">Number of electrons in bonding molecular orbitals</p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-purple-900 dark:text-purple-300 mb-2">n<sub>a</sub> = Antibonding Electrons</h3>
                <p className="text-gray-700 dark:text-gray-300">Number of electrons in antibonding orbitals (marked with *)</p>
              </div>
            </div>
          </div>
        </section>

        {/* MO Theory Principles */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Key Principles</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-300 mb-3">1. Orbital Combination</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Atomic orbitals combine to form molecular orbitals: same number of MOs as AOs
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-3">2. Bonding Orbitals (σ, π)</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Lower energy than atomic orbitals; constructive interference; electron density between nuclei
                </p>
              </div>

              <div className="bg-gradient-to-r from-pink-50 to-red-50 dark:from-pink-900/20 dark:to-red-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-pink-900 dark:text-pink-300 mb-3">3. Antibonding Orbitals (σ*, π*)</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Higher energy; destructive interference; node between nuclei; destabilizes molecule
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-3">4. Aufbau Principle</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Fill lowest energy MOs first; Hund's rule applies; Pauli exclusion principle
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MO Energy Order */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">MO Energy Level Order</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">For O₂, F₂, Ne₂</h3>
                <div className="space-y-2 font-mono text-sm">
                  <p>σ(2s) &lt; σ*(2s) &lt;</p>
                  <p>σ(2p) &lt; π(2p) &lt;</p>
                  <p>π*(2p) &lt; σ*(2p)</p>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-4">For B₂, C₂, N₂</h3>
                <div className="space-y-2 font-mono text-sm">
                  <p>σ(2s) &lt; σ*(2s) &lt;</p>
                  <p>π(2p) &lt; σ(2p) &lt;</p>
                  <p>π*(2p) &lt; σ*(2p)</p>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">Note: π and σ(2p) order switches</p>
              </div>
            </div>
          </div>
        </section>

        {/* Examples */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Worked Examples</h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">Example 1: O₂ Molecule</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Total electrons:</strong> 8 + 8 = 16</p>
                  <p><strong>Configuration:</strong></p>
                  <p className="ml-6 font-mono text-sm">σ(2s)² σ*(2s)² σ(2p)² π(2p)⁴ π*(2p)²</p>
                  
                  <p className="mt-4"><strong>Bond Order Calculation:</strong></p>
                  <p className="ml-6">Bonding electrons (n<sub>b</sub>) = 2+2+4 = 8</p>
                  <p className="ml-6">Antibonding electrons (n<sub>a</sub>) = 2+2 = 4</p>
                  <p className="ml-6">Bond Order = (8-4)/2 = 2</p>
                  
                  <p className="mt-4 font-bold text-green-600">Result: Double bond, paramagnetic (2 unpaired e⁻)</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-4">Example 2: N₂ Molecule</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Total electrons:</strong> 7 + 7 = 14</p>
                  <p><strong>Configuration:</strong></p>
                  <p className="ml-6 font-mono text-sm">σ(2s)² σ*(2s)² π(2p)⁴ σ(2p)²</p>
                  
                  <p className="mt-4"><strong>Bond Order:</strong></p>
                  <p className="ml-6">n<sub>b</sub> = 2+4+2 = 8</p>
                  <p className="ml-6">n<sub>a</sub> = 2</p>
                  <p className="ml-6">Bond Order = (8-2)/2 = 3</p>
                  
                  <p className="mt-4 font-bold text-green-600">Result: Triple bond, diamagnetic, very stable</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-orange-900 dark:text-orange-300 mb-4">Example 3: He₂ (Does not exist)</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Total electrons:</strong> 2 + 2 = 4</p>
                  <p><strong>Configuration:</strong> σ(1s)² σ*(1s)²</p>
                  
                  <p className="mt-4"><strong>Bond Order:</strong></p>
                  <p className="ml-6">Bond Order = (2-2)/2 = 0</p>
                  
                  <p className="mt-4 font-bold text-red-600">Result: No bond formation; He₂ does not exist</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bond Order Interpretation */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Bond Order Interpretation</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-indigo-100 dark:bg-indigo-900/30">
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Bond Order</th>
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Bond Type</th>
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Stability</th>
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Example</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono">0</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">No bond</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Unstable</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">He₂</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700/50">
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono">0.5</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Weak bond</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Marginally stable</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">He₂⁺</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono">1</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Single bond</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Moderate</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">H₂, F₂</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700/50">
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono">2</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Double bond</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Strong</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">O₂</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono">3</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Triple bond</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Very strong</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">N₂</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Note:</strong> Higher bond order → shorter bond length and higher bond energy
              </p>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Common Mistakes</h2>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Wrong MO Energy Order</h3>
                  <p className="text-gray-700 dark:text-gray-300">Remember π(2p) and σ(2p) switch order for B₂, C₂, N₂</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Forgetting Antibonding Electrons</h3>
                  <p className="text-gray-700 dark:text-gray-300">Must subtract antibonding electrons when calculating bond order</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Ignoring Hund's Rule</h3>
                  <p className="text-gray-700 dark:text-gray-300">Fill degenerate π orbitals singly before pairing (affects paramagnetism)</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4">
                <span className="text-2xl">💡</span>
                <div>
                  <h3 className="font-bold text-yellow-900 dark:text-yellow-300 mb-2">Paramagnetic vs Diamagnetic</h3>
                  <p className="text-gray-700 dark:text-gray-300">Unpaired electrons → paramagnetic; all paired → diamagnetic</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Related Tools</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/quantum-and-atomic-structure-calculators/molecular-orbital-calculator" className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-blue-900 mb-2">MO Calculator</h3>
                <p className="text-sm text-gray-600">Generate MO diagrams and bond orders</p>
              </Link>

              <Link href="/quantum-and-atomic-structure-calculators/electron-configuration-calculator" className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-blue-900 mb-2">Electron Configuration Calculator</h3>
                <p className="text-sm text-gray-600">Atomic electron arrangements</p>
              </Link>

              <Link href="/chemistry-formulas/lewis-structure" className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-green-900 mb-2">Lewis Structures</h3>
                <p className="text-sm text-gray-600">Alternative bonding theory</p>
              </Link>

              <Link href="/chemistry-formulas/hybridization" className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-green-900 mb-2">Hybridization</h3>
                <p className="text-sm text-gray-600">Atomic orbital mixing</p>
              </Link>

              <Link href="/chemistry-formulas/electron-configuration" className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-green-900 mb-2">Electron Configuration</h3>
                <p className="text-sm text-gray-600">Aufbau and orbital filling</p>
              </Link>

              <Link href="/quantum-and-atomic-structure-calculators" className="p-6 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-semibold mb-2">All Quantum & Atomic Structure Calculators</h3>
                <p className="text-sm opacity-90">Explore all quantum and atomic tools</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
