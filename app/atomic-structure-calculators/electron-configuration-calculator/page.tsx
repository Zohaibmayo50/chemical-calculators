import React from 'react';
import ElectronConfigurationCalculator from '@/components/calculators/ElectronConfigurationCalculator';

export const metadata = {
  title: 'Electron Configuration Calculator | ChemCalc',
  description: 'Determine electron configurations for any element using the Aufbau principle. Get full configurations, noble gas notation, and orbital diagrams.',
  keywords: 'electron configuration, Aufbau principle, orbital diagram, noble gas notation, atomic structure, quantum mechanics, chemistry calculator',
};

export default function ElectronConfigurationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-tertiary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Electron Configuration Calculator
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Generate electron configurations, noble gas notation, and orbital diagrams for any element 
              using the Aufbau principle and Hund's rule.
            </p>
          </div>

          {/* Calculator Component */}
          <ElectronConfigurationCalculator />

          {/* Educational Content */}
          <div className="mt-12 prose prose-lg dark:prose-invert max-w-none">
            {/* What are Electron Configurations */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                What are Electron Configurations?
              </h2>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg mb-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  An <strong>electron configuration</strong> describes how electrons are distributed among 
                  atomic orbitals in an atom. It follows specific principles that govern how electrons fill 
                  available orbitals, determining an element's chemical properties and position in the periodic table.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                      Aufbau Principle
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Electrons fill orbitals from lowest to highest energy: 1s → 2s → 2p → 3s → 3p → 4s → 3d...
                    </p>
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border-l-4 border-purple-500">
                    <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">
                      Pauli Exclusion
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Each orbital holds maximum 2 electrons with opposite spins (↑↓).
                    </p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                      Hund's Rule
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Electrons occupy degenerate orbitals singly before pairing up (all spins parallel first).
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4">
                  <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
                    Notation Format
                  </h4>
                  <div className="font-mono text-lg text-gray-800 dark:text-gray-200 mb-2">
                    1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <p><strong>Number (1, 2, 3...):</strong> Principal energy level (shell)</p>
                    <p><strong>Letter (s, p, d, f):</strong> Orbital type (sublevel)</p>
                    <p><strong>Superscript (², ⁶, ¹⁰):</strong> Number of electrons in that orbital</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Orbital Filling Order */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Orbital Filling Order (Aufbau Diagram)
              </h2>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg mb-6">
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Electrons fill orbitals in order of increasing energy. The "diagonal rule" or Aufbau diagram 
                  helps visualize this sequence:
                </p>

                <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg font-mono text-center space-y-2">
                  <div className="text-lg">1s</div>
                  <div className="text-lg">2s 2p</div>
                  <div className="text-lg">3s 3p 3d</div>
                  <div className="text-lg">4s 4p 4d 4f</div>
                  <div className="text-lg">5s 5p 5d 5f</div>
                  <div className="text-lg">6s 6p 6d</div>
                  <div className="text-lg">7s 7p</div>
                </div>

                <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                    Complete Filling Order:
                  </h4>
                  <p className="font-mono text-sm text-gray-700 dark:text-gray-300">
                    1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p → 5s → 4d → 5p → 6s → 4f → 5d → 6p → 7s → 5f → 6d → 7p
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                    Notice: 4s fills before 3d, 5s before 4d, 6s before 4f and 5d!
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
                  <div className="text-center mb-2">
                    <span className="text-3xl font-bold text-blue-500">s</span>
                  </div>
                  <div className="text-sm text-gray-700 dark:text-gray-300 text-center">
                    <p className="font-semibold">s orbitals</p>
                    <p>1 orbital</p>
                    <p className="font-mono">Max: 2e⁻</p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
                  <div className="text-center mb-2">
                    <span className="text-3xl font-bold text-green-500">p</span>
                  </div>
                  <div className="text-sm text-gray-700 dark:text-gray-300 text-center">
                    <p className="font-semibold">p orbitals</p>
                    <p>3 orbitals</p>
                    <p className="font-mono">Max: 6e⁻</p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
                  <div className="text-center mb-2">
                    <span className="text-3xl font-bold text-purple-500">d</span>
                  </div>
                  <div className="text-sm text-gray-700 dark:text-gray-300 text-center">
                    <p className="font-semibold">d orbitals</p>
                    <p>5 orbitals</p>
                    <p className="font-mono">Max: 10e⁻</p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
                  <div className="text-center mb-2">
                    <span className="text-3xl font-bold text-red-500">f</span>
                  </div>
                  <div className="text-sm text-gray-700 dark:text-gray-300 text-center">
                    <p className="font-semibold">f orbitals</p>
                    <p>7 orbitals</p>
                    <p className="font-mono">Max: 14e⁻</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Worked Examples */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Worked Examples
              </h2>

              <div className="space-y-6">
                {/* Example 1: Carbon */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Example 1: Carbon (C, Z = 6)
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        <strong>Step 1:</strong> Carbon has 6 electrons to distribute
                      </p>
                      <div className="bg-gray-100 dark:bg-gray-900 p-3 rounded font-mono text-sm">
                        Filling order: 1s → 2s → 2p
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        <strong>Step 2:</strong> Fill orbitals following Aufbau principle
                      </p>
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded space-y-1 font-mono text-sm">
                        <div>1s: 2 electrons → 1s²</div>
                        <div>2s: 2 electrons → 2s²</div>
                        <div>2p: 2 electrons → 2p²</div>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        <strong>Result:</strong>
                      </p>
                      <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded font-mono text-lg font-bold">
                        1s² 2s² 2p²
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                        Or in noble gas notation: [He] 2s² 2p²
                      </p>
                    </div>
                  </div>
                </div>

                {/* Example 2: Iron */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Example 2: Iron (Fe, Z = 26)
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        Iron has 26 electrons. Following the Aufbau order:
                      </p>
                      <div className="bg-gray-100 dark:bg-gray-900 p-3 rounded font-mono text-sm space-y-1">
                        <div>1s² (2e⁻) → Total: 2</div>
                        <div>2s² (2e⁻) → Total: 4</div>
                        <div>2p⁶ (6e⁻) → Total: 10</div>
                        <div>3s² (2e⁻) → Total: 12</div>
                        <div>3p⁶ (6e⁻) → Total: 18</div>
                        <div>4s² (2e⁻) → Total: 20</div>
                        <div>3d⁶ (6e⁻) → Total: 26 ✓</div>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        <strong>Full configuration:</strong>
                      </p>
                      <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded font-mono text-base font-bold">
                        1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        <strong>Noble gas notation:</strong>
                      </p>
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded font-mono text-base font-bold">
                        [Ar] 4s² 3d⁶
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                        [Ar] represents 1s² 2s² 2p⁶ 3s² 3p⁶ (18 electrons)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Common Exceptions */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Common Exceptions to Aufbau Principle
              </h2>

              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Some elements have unexpected configurations because <strong>half-filled and fully-filled 
                d orbitals are more stable</strong> than predicted by the Aufbau principle alone.
              </p>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gradient-to-r from-primary-500 to-secondary-500">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase">
                          Element
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase">
                          Expected
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase">
                          Actual
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase">
                          Reason
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="font-semibold text-gray-900 dark:text-white">Cr (24)</span>
                        </td>
                        <td className="px-6 py-4 font-mono text-sm text-gray-700 dark:text-gray-300">
                          [Ar] 4s² 3d⁴
                        </td>
                        <td className="px-6 py-4 font-mono text-sm font-semibold text-green-600 dark:text-green-400">
                          [Ar] 4s¹ 3d⁵
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                          Half-filled d orbital stability
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-700/50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="font-semibold text-gray-900 dark:text-white">Cu (29)</span>
                        </td>
                        <td className="px-6 py-4 font-mono text-sm text-gray-700 dark:text-gray-300">
                          [Ar] 4s² 3d⁹
                        </td>
                        <td className="px-6 py-4 font-mono text-sm font-semibold text-green-600 dark:text-green-400">
                          [Ar] 4s¹ 3d¹⁰
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                          Fully-filled d orbital stability
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="font-semibold text-gray-900 dark:text-white">Ag (47)</span>
                        </td>
                        <td className="px-6 py-4 font-mono text-sm text-gray-700 dark:text-gray-300">
                          [Kr] 5s² 4d⁹
                        </td>
                        <td className="px-6 py-4 font-mono text-sm font-semibold text-green-600 dark:text-green-400">
                          [Kr] 5s¹ 4d¹⁰
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                          Fully-filled d orbital stability
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-700/50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="font-semibold text-gray-900 dark:text-white">Au (79)</span>
                        </td>
                        <td className="px-6 py-4 font-mono text-sm text-gray-700 dark:text-gray-300">
                          [Xe] 6s² 4f¹⁴ 5d⁹
                        </td>
                        <td className="px-6 py-4 font-mono text-sm font-semibold text-green-600 dark:text-green-400">
                          [Xe] 6s¹ 4f¹⁴ 5d¹⁰
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                          Fully-filled d orbital stability
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-6 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4">
                <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">
                  Why These Exceptions Occur
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Half-filled (d⁵) and fully-filled (d¹⁰) d subshells provide extra stability due to:
                  <br/>• <strong>Symmetry:</strong> Evenly distributed electron density
                  <br/>• <strong>Exchange Energy:</strong> Electrons with parallel spins have lower energy
                  <br/>• <strong>Minimized Repulsion:</strong> Balanced electron-electron interactions
                </p>
              </div>
            </section>

            {/* Applications */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Applications of Electron Configurations
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="text-4xl mb-3">🔬</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Chemical Bonding
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Valence electrons (outermost electrons) determine how atoms bond. Elements in the 
                    same group have similar configurations, explaining periodic trends in reactivity.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="text-4xl mb-3">🌈</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Spectroscopy
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Electrons transition between energy levels, absorbing or emitting specific wavelengths 
                    of light. This creates unique spectral "fingerprints" for element identification.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="text-4xl mb-3">🧲</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Magnetism
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Unpaired electrons create magnetic moments. Knowing the electron configuration helps 
                    predict whether a substance is paramagnetic (attracted to magnets) or diamagnetic (repelled).
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="text-4xl mb-3">⚛️</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Ion Formation
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Atoms lose or gain electrons to achieve stable noble gas configurations. Understanding 
                    configurations predicts ionic charges (e.g., Na → Na⁺, Cl → Cl⁻).
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="text-4xl mb-3">📊</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Periodic Table Organization
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    The periodic table's structure directly reflects electron configurations. Groups share 
                    the same valence configuration, explaining similar chemical properties.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="text-4xl mb-3">💎</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Material Properties
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Electronic structure determines conductivity, color, hardness, and other material 
                    properties. Transition metals with d electrons show unique catalytic behavior.
                  </p>
                </div>
              </div>
            </section>

            {/* Quick Reference */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Quick Reference Guide
              </h2>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Three Key Principles
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <span className="text-blue-500 font-bold">1.</span>
                        <span className="text-gray-700 dark:text-gray-300">
                          <strong>Aufbau:</strong> Fill lowest energy orbitals first
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-purple-500 font-bold">2.</span>
                        <span className="text-gray-700 dark:text-gray-300">
                          <strong>Pauli:</strong> Max 2 electrons per orbital (opposite spins)
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-500 font-bold">3.</span>
                        <span className="text-gray-700 dark:text-gray-300">
                          <strong>Hund:</strong> Fill orbitals singly before pairing
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Orbital Capacities
                    </h4>
                    <div className="space-y-1 font-mono text-sm bg-gray-100 dark:bg-gray-900 p-4 rounded">
                      <div>s: 1 orbital → 2 electrons max</div>
                      <div>p: 3 orbitals → 6 electrons max</div>
                      <div>d: 5 orbitals → 10 electrons max</div>
                      <div>f: 7 orbitals → 14 electrons max</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
