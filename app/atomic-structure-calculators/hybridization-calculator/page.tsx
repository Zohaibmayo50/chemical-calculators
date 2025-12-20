import React from 'react';
import HybridizationCalculator from '@/components/calculators/HybridizationCalculator';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hybridization Calculator - sp, sp2, sp3, sp3d, sp3d2',
  description: 'Determine orbital hybridization from molecular geometry or bonding pairs. Calculate sp, sp2, sp3, sp3d, and sp3d2 hybridization states with VSEPR theory.',
  keywords: ['hybridization', 'sp', 'sp2', 'sp3', 'orbital hybridization', 'VSEPR', 'molecular geometry', 'bonding', 'chemistry calculator'],
};

export default function HybridizationCalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-4">
            Hybridization Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Determine orbital hybridization from molecular geometry and bonding
          </p>
        </div>

        <HybridizationCalculator />

        {/* Educational Content */}
        <div className="mt-12 space-y-8 text-gray-800 dark:text-gray-200">
          {/* What is Hybridization */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              What is Hybridization?
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-4">
                <strong>Hybridization</strong> is the concept of mixing atomic orbitals into new hybrid orbitals 
                suitable for the pairing of electrons in chemical bonding. This theory explains the bonding, 
                molecular shapes, and properties of molecules.
              </p>
              <p className="leading-relaxed mb-4">
                When atoms bond, their atomic orbitals (s, p, d) mix to form hybrid orbitals that are identical 
                in shape and energy. The number and type of hybrid orbitals formed depends on the number of 
                electron groups around the central atom.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 mt-6">
                <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Key Concept:</p>
                <p className="text-blue-800 dark:text-blue-200">
                  The <strong>steric number</strong> (bonding pairs + lone pairs) determines the hybridization 
                  type. Steric number 2 = sp, 3 = sp², 4 = sp³, 5 = sp³d, 6 = sp³d².
                </p>
              </div>
            </div>
          </section>

          {/* Types of Hybridization */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Types of Hybridization
            </h2>
            <div className="space-y-6">
              {/* sp Hybridization */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">
                  sp Hybridization
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-blue-800 dark:text-blue-200">
                      <strong>Orbitals Mixed:</strong> 1 s + 1 p = 2 sp orbitals
                    </p>
                    <p className="text-blue-800 dark:text-blue-200">
                      <strong>Steric Number:</strong> 2
                    </p>
                    <p className="text-blue-800 dark:text-blue-200">
                      <strong>Geometry:</strong> Linear
                    </p>
                    <p className="text-blue-800 dark:text-blue-200">
                      <strong>Bond Angle:</strong> 180°
                    </p>
                    <p className="text-blue-800 dark:text-blue-200">
                      <strong>Unused p Orbitals:</strong> 2 (available for π bonds)
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded p-4">
                    <p className="font-semibold mb-2">Common Examples:</p>
                    <ul className="space-y-1 text-sm">
                      <li className="font-mono">• CO₂ (carbon dioxide)</li>
                      <li className="font-mono">• BeCl₂ (beryllium chloride)</li>
                      <li className="font-mono">• HCN (hydrogen cyanide)</li>
                      <li className="font-mono">• C₂H₂ (acetylene) - carbon atoms</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* sp2 Hybridization */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-4">
                  sp² Hybridization
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-green-800 dark:text-green-200">
                      <strong>Orbitals Mixed:</strong> 1 s + 2 p = 3 sp² orbitals
                    </p>
                    <p className="text-green-800 dark:text-green-200">
                      <strong>Steric Number:</strong> 3
                    </p>
                    <p className="text-green-800 dark:text-green-200">
                      <strong>Geometry:</strong> Trigonal Planar
                    </p>
                    <p className="text-green-800 dark:text-green-200">
                      <strong>Bond Angle:</strong> 120°
                    </p>
                    <p className="text-green-800 dark:text-green-200">
                      <strong>Unused p Orbitals:</strong> 1 (available for π bonds)
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded p-4">
                    <p className="font-semibold mb-2">Common Examples:</p>
                    <ul className="space-y-1 text-sm">
                      <li className="font-mono">• BF₃ (boron trifluoride)</li>
                      <li className="font-mono">• C₂H₄ (ethylene) - carbon atoms</li>
                      <li className="font-mono">• SO₃ (sulfur trioxide)</li>
                      <li className="font-mono">• NO₃⁻ (nitrate ion)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* sp3 Hybridization */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-4">
                  sp³ Hybridization
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-purple-800 dark:text-purple-200">
                      <strong>Orbitals Mixed:</strong> 1 s + 3 p = 4 sp³ orbitals
                    </p>
                    <p className="text-purple-800 dark:text-purple-200">
                      <strong>Steric Number:</strong> 4
                    </p>
                    <p className="text-purple-800 dark:text-purple-200">
                      <strong>Geometry:</strong> Tetrahedral
                    </p>
                    <p className="text-purple-800 dark:text-purple-200">
                      <strong>Bond Angle:</strong> 109.5°
                    </p>
                    <p className="text-purple-800 dark:text-purple-200">
                      <strong>Unused p Orbitals:</strong> 0 (only σ bonds)
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded p-4">
                    <p className="font-semibold mb-2">Common Examples:</p>
                    <ul className="space-y-1 text-sm">
                      <li className="font-mono">• CH₄ (methane) - 4 BP, 0 LP</li>
                      <li className="font-mono">• NH₃ (ammonia) - 3 BP, 1 LP</li>
                      <li className="font-mono">• H₂O (water) - 2 BP, 2 LP</li>
                      <li className="font-mono">• CCl₄ (carbon tetrachloride)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* sp3d Hybridization */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-orange-900 dark:text-orange-100 mb-4">
                  sp³d Hybridization
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-orange-800 dark:text-orange-200">
                      <strong>Orbitals Mixed:</strong> 1 s + 3 p + 1 d = 5 sp³d orbitals
                    </p>
                    <p className="text-orange-800 dark:text-orange-200">
                      <strong>Steric Number:</strong> 5
                    </p>
                    <p className="text-orange-800 dark:text-orange-200">
                      <strong>Geometry:</strong> Trigonal Bipyramidal
                    </p>
                    <p className="text-orange-800 dark:text-orange-200">
                      <strong>Bond Angles:</strong> 90°, 120°, 180°
                    </p>
                    <p className="text-orange-800 dark:text-orange-200">
                      <strong>Note:</strong> Requires 3rd period or higher (d orbitals)
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded p-4">
                    <p className="font-semibold mb-2">Common Examples:</p>
                    <ul className="space-y-1 text-sm">
                      <li className="font-mono">• PCl₅ (phosphorus pentachloride)</li>
                      <li className="font-mono">• SF₄ (sulfur tetrafluoride) - 1 LP</li>
                      <li className="font-mono">• ClF₃ (chlorine trifluoride) - 2 LP</li>
                      <li className="font-mono">• I₃⁻ (triiodide ion) - 3 LP</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* sp3d2 Hybridization */}
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-teal-900 dark:text-teal-100 mb-4">
                  sp³d² Hybridization
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-teal-800 dark:text-teal-200">
                      <strong>Orbitals Mixed:</strong> 1 s + 3 p + 2 d = 6 sp³d² orbitals
                    </p>
                    <p className="text-teal-800 dark:text-teal-200">
                      <strong>Steric Number:</strong> 6
                    </p>
                    <p className="text-teal-800 dark:text-teal-200">
                      <strong>Geometry:</strong> Octahedral
                    </p>
                    <p className="text-teal-800 dark:text-teal-200">
                      <strong>Bond Angles:</strong> 90°, 180°
                    </p>
                    <p className="text-teal-800 dark:text-teal-200">
                      <strong>Note:</strong> Requires 3rd period or higher (d orbitals)
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded p-4">
                    <p className="font-semibold mb-2">Common Examples:</p>
                    <ul className="space-y-1 text-sm">
                      <li className="font-mono">• SF₆ (sulfur hexafluoride)</li>
                      <li className="font-mono">• BrF₅ (bromine pentafluoride) - 1 LP</li>
                      <li className="font-mono">• XeF₄ (xenon tetrafluoride) - 2 LP</li>
                      <li className="font-mono">• [PtCl₄]²⁻ (square planar complex)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Worked Example */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Worked Example: Determining Hybridization of NH₃
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Problem:</h4>
                  <p>Determine the hybridization of the nitrogen atom in ammonia (NH₃).</p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">Solution:</h4>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-200 dark:border-gray-600 space-y-4">
                    <div>
                      <p className="font-semibold">Step 1: Determine the Lewis Structure</p>
                      <p>Nitrogen has 5 valence electrons, each hydrogen has 1.</p>
                      <p className="font-mono mt-1">N: 5 electrons | H: 3 × 1 = 3 electrons | Total = 8 electrons</p>
                      <p className="mt-2">Structure: N-H bonds (3 bonding pairs) + 1 lone pair on N</p>
                    </div>

                    <div>
                      <p className="font-semibold">Step 2: Count Electron Groups (Steric Number)</p>
                      <p>Bonding pairs: 3 (N-H bonds)</p>
                      <p>Lone pairs: 1 (on nitrogen)</p>
                      <p className="font-mono mt-1">Steric Number = 3 + 1 = 4</p>
                    </div>

                    <div>
                      <p className="font-semibold">Step 3: Determine Hybridization</p>
                      <p>Steric number of 4 corresponds to <strong>sp³ hybridization</strong></p>
                      <p className="mt-2">The nitrogen atom mixes 1 s orbital and 3 p orbitals to form 4 sp³ hybrid orbitals.</p>
                    </div>

                    <div>
                      <p className="font-semibold">Step 4: Determine Geometry</p>
                      <p><strong>Electron Geometry:</strong> Tetrahedral (4 electron groups)</p>
                      <p><strong>Molecular Geometry:</strong> Trigonal Pyramidal (3 atoms + 1 LP)</p>
                      <p><strong>Bond Angle:</strong> ~107° (less than 109.5° due to LP repulsion)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg border-l-4 border-green-500">
                  <p className="font-semibold text-green-900 dark:text-green-100">Answer:</p>
                  <p className="text-green-800 dark:text-green-200">
                    The nitrogen atom in NH₃ is <strong>sp³ hybridized</strong> with a trigonal pyramidal 
                    molecular geometry and bond angles of approximately 107°.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* VSEPR Theory Connection */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              VSEPR Theory & Hybridization
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="leading-relaxed mb-4">
                <strong>VSEPR (Valence Shell Electron Pair Repulsion)</strong> theory states that electron 
                pairs around a central atom arrange themselves to minimize repulsion. This arrangement determines 
                both the hybridization and molecular geometry.
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                  <thead className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
                    <tr>
                      <th className="p-3 text-left">Steric Number</th>
                      <th className="p-3 text-left">Hybridization</th>
                      <th className="p-3 text-left">Electron Geometry</th>
                      <th className="p-3 text-left">Bond Angle</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="p-3 font-semibold">2</td>
                      <td className="p-3 font-mono text-blue-600 dark:text-blue-400">sp</td>
                      <td className="p-3">Linear</td>
                      <td className="p-3">180°</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="p-3 font-semibold">3</td>
                      <td className="p-3 font-mono text-green-600 dark:text-green-400">sp²</td>
                      <td className="p-3">Trigonal Planar</td>
                      <td className="p-3">120°</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="p-3 font-semibold">4</td>
                      <td className="p-3 font-mono text-purple-600 dark:text-purple-400">sp³</td>
                      <td className="p-3">Tetrahedral</td>
                      <td className="p-3">109.5°</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="p-3 font-semibold">5</td>
                      <td className="p-3 font-mono text-orange-600 dark:text-orange-400">sp³d</td>
                      <td className="p-3">Trigonal Bipyramidal</td>
                      <td className="p-3">90°, 120°, 180°</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="p-3 font-semibold">6</td>
                      <td className="p-3 font-mono text-teal-600 dark:text-teal-400">sp³d²</td>
                      <td className="p-3">Octahedral</td>
                      <td className="p-3">90°, 180°</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border-l-4 border-yellow-500 mt-6">
                <p className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Important Note:</p>
                <p className="text-yellow-800 dark:text-yellow-200">
                  Lone pairs affect molecular geometry but NOT hybridization. For example, CH₄, NH₃, and H₂O 
                  all have sp³ hybridization (4 electron groups), but different molecular shapes: tetrahedral, 
                  trigonal pyramidal, and bent, respectively.
                </p>
              </div>
            </div>
          </section>

          {/* Applications */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Real-World Applications
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">
                  1. Organic Chemistry
                </h3>
                <p className="text-blue-800 dark:text-blue-200">
                  Understanding carbon hybridization (sp, sp², sp³) is crucial for predicting molecular shapes, 
                  reactivity, and properties of organic compounds. Different hybridization states explain why 
                  alkanes, alkenes, and alkynes have different geometries and reactivities.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-3">
                  2. Drug Design
                </h3>
                <p className="text-green-800 dark:text-green-200">
                  Pharmaceutical chemists use hybridization to design drugs that fit specific enzyme active sites. 
                  The 3D shape of molecules (determined by hybridization) affects how drugs bind to target proteins.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-3">
                  3. Materials Science
                </h3>
                <p className="text-purple-800 dark:text-purple-200">
                  Diamond (sp³ carbon) and graphite (sp² carbon) have dramatically different properties due to 
                  different hybridization. This knowledge helps design new materials with specific properties.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-900 dark:text-orange-100 mb-3">
                  4. Biochemistry
                </h3>
                <p className="text-orange-800 dark:text-orange-200">
                  Protein and DNA structures depend on the hybridization of atoms in amino acids and nucleotides. 
                  Understanding hybridization helps explain enzyme mechanisms and genetic coding.
                </p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-teal-900 dark:text-teal-100 mb-3">
                  5. Spectroscopy
                </h3>
                <p className="text-teal-800 dark:text-teal-200">
                  Hybridization affects molecular orbital energy levels, influencing UV-Vis and IR spectra. 
                  This allows chemists to identify unknown compounds and study molecular structure.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-yellow-900 dark:text-yellow-100 mb-3">
                  6. Coordination Chemistry
                </h3>
                <p className="text-yellow-800 dark:text-yellow-200">
                  Metal complexes use d²sp³ or sp³d² hybridization for octahedral geometry, crucial for 
                  catalysis, biological systems (hemoglobin), and industrial processes.
                </p>
              </div>
            </div>
          </section>

          {/* Problem-Solving Strategy */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Problem-Solving Strategy
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <div className="space-y-6">
                <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">
                    Step 1: Draw the Lewis Structure
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-blue-800 dark:text-blue-200">
                    <li>Count total valence electrons</li>
                    <li>Arrange atoms with central atom in middle</li>
                    <li>Draw bonds and distribute remaining electrons</li>
                    <li>Check for octet rule satisfaction</li>
                  </ul>
                </div>

                <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-3">
                    Step 2: Count Electron Groups (Steric Number)
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-green-800 dark:text-green-200">
                    <li>Count bonding pairs (single, double, triple bonds each count as 1)</li>
                    <li>Count lone pairs on the central atom</li>
                    <li>Add them together: Steric Number = BP + LP</li>
                  </ul>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-3">
                    Step 3: Determine Hybridization from Steric Number
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-purple-800 dark:text-purple-200">
                    <li>SN = 2 → sp</li>
                    <li>SN = 3 → sp²</li>
                    <li>SN = 4 → sp³</li>
                    <li>SN = 5 → sp³d</li>
                    <li>SN = 6 → sp³d²</li>
                  </ul>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500">
                  <h3 className="text-xl font-semibold text-orange-900 dark:text-orange-100 mb-3">
                    Step 4: Determine Molecular Geometry
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-orange-800 dark:text-orange-200">
                    <li>Use hybridization to find electron geometry</li>
                    <li>Account for lone pairs to find molecular geometry</li>
                    <li>Remember: LP-LP repulsion &gt; LP-BP &gt; BP-BP</li>
                    <li>Lone pairs reduce bond angles slightly</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Common Mistakes to Avoid
            </h2>
            <div className="space-y-4">
              <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
                  ❌ Counting Multiple Bonds as Multiple Groups
                </h3>
                <p className="text-red-800 dark:text-red-200 mb-2">
                  A double or triple bond counts as ONE electron group, not two or three.
                </p>
                <p className="text-sm text-red-700 dark:text-red-300">
                  <strong>Correct:</strong> CO₂ has 2 electron groups (2 double bonds), not 4
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
                  ❌ Confusing Electron Geometry with Molecular Geometry
                </h3>
                <p className="text-red-800 dark:text-red-200 mb-2">
                  Hybridization determines electron geometry. Lone pairs affect molecular shape.
                </p>
                <p className="text-sm text-red-700 dark:text-red-300">
                  <strong>Correct:</strong> H₂O is sp³ (electron geometry: tetrahedral) but bent (molecular geometry)
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
                  ❌ Forgetting d Orbitals for Period 3 and Higher
                </h3>
                <p className="text-red-800 dark:text-red-200 mb-2">
                  sp³d and sp³d² require d orbitals, only available from period 3 onward.
                </p>
                <p className="text-sm text-red-700 dark:text-red-300">
                  <strong>Correct:</strong> PCl₅ (P in period 3) can be sp³d, but NCl₅ doesn't exist (N in period 2)
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
                  ❌ Not Considering Lone Pairs on Central Atom
                </h3>
                <p className="text-red-800 dark:text-red-200 mb-2">
                  Lone pairs count toward the steric number and affect hybridization.
                </p>
                <p className="text-sm text-red-700 dark:text-red-300">
                  <strong>Correct:</strong> Include lone pairs when calculating steric number
                </p>
              </div>
            </div>
          </section>

          {/* Quick Reference */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Quick Reference Guide
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Hybridization Formula</h3>
                <div className="space-y-2 text-sm">
                  <p className="font-mono text-center text-xl py-3 bg-white dark:bg-gray-800 rounded">
                    SN = BP + LP
                  </p>
                  <p className="text-center">Steric Number determines hybridization</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-tertiary-50 to-primary-50 dark:from-tertiary-900/20 dark:to-primary-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Quick Lookup</h3>
                <div className="space-y-1 text-sm">
                  <p><strong>SN=2:</strong> sp, Linear, 180°</p>
                  <p><strong>SN=3:</strong> sp², Trigonal planar, 120°</p>
                  <p><strong>SN=4:</strong> sp³, Tetrahedral, 109.5°</p>
                  <p><strong>SN=5:</strong> sp³d, Trig. bipyramidal, 90°/120°/180°</p>
                  <p><strong>SN=6:</strong> sp³d², Octahedral, 90°/180°</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-secondary-50 to-tertiary-50 dark:from-secondary-900/20 dark:to-tertiary-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Orbital Mixing</h3>
                <div className="space-y-1 text-sm">
                  <p className="font-mono">sp = 1s + 1p (2 orbitals)</p>
                  <p className="font-mono">sp² = 1s + 2p (3 orbitals)</p>
                  <p className="font-mono">sp³ = 1s + 3p (4 orbitals)</p>
                  <p className="font-mono">sp³d = 1s + 3p + 1d (5 orbitals)</p>
                  <p className="font-mono">sp³d² = 1s + 3p + 2d (6 orbitals)</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-tertiary-50 dark:from-primary-900/20 dark:to-tertiary-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Memory Aids</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>2:</strong> "sp is simple" (linear)</p>
                  <p><strong>3:</strong> "sp² is a triangle" (trig. planar)</p>
                  <p><strong>4:</strong> "sp³ is a tetrahedron"</p>
                  <p><strong>5:</strong> "sp³d has 5 points"</p>
                  <p><strong>6:</strong> "sp³d² is a 6-sided die"</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
