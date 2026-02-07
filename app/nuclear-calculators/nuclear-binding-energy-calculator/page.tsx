import React from 'react';
import NuclearBindingEnergyCalculator from '@/components/calculators/NuclearBindingEnergyCalculator';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: 'Nuclear Binding Energy Calculator - Mass Defect & E=mc²',
  description: 'Calculate nuclear binding energy from mass defect, determine binding energy per nucleon, and explore nuclear stability using Einstein\'s mass-energy equivalence.',
  keywords: ['nuclear binding energy', 'mass defect', 'E=mc²', 'binding energy per nucleon', 'nuclear stability', 'chemistry calculator', 'nuclear physics'],
  alternates: {
    canonical: 'https://chemsolved.com/nuclear-calculators/nuclear-binding-energy-calculator',
  },
};

export default function NuclearBindingEnergyCalculatorPage() {  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-4">
            Nuclear Binding Energy Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Calculate binding energy from mass defect and explore nuclear stability
          </p>
        </div>

        <NuclearBindingEnergyCalculator />

        {/* Educational Content */}
        <div className="mt-12 space-y-8 text-gray-800 dark:text-gray-200">
          {/* What is Nuclear Binding Energy */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              What is Nuclear Binding Energy?
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-4">
                <strong>Nuclear binding energy</strong> is the energy required to disassemble a nucleus into its individual 
                protons and neutrons. It represents the "glue" that holds the nucleus together, overcoming the electrostatic 
                repulsion between positively charged protons.
              </p>
              <p className="leading-relaxed mb-4">
                The binding energy arises from the <strong>strong nuclear force</strong>, one of the four fundamental forces 
                of nature. This force is much stronger than the electromagnetic force at very short distances (within the nucleus), 
                allowing nucleons to bind together despite proton-proton repulsion.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 mt-6">
                <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Key Concept:</p>
                <p className="text-blue-800 dark:text-blue-200">
                  The mass of a nucleus is always <strong>less than</strong> the sum of the masses of its individual nucleons. 
                  This "missing mass" is called the <strong>mass defect</strong>, and it has been converted to binding energy 
                  according to Einstein's famous equation: <strong>E = mc²</strong>.
                </p>
              </div>
            </div>
          </section>

          {/* Mass Defect and E=mc² */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Mass Defect and E = mc²
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="leading-relaxed mb-4">
                The <strong>mass defect (Δm)</strong> is the difference between the theoretical mass of separated nucleons 
                and the actual mass of the nucleus:
              </p>
              
              <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/30 dark:to-secondary-900/30 p-6 rounded-lg mb-6">
                <p className="font-mono text-xl mb-4">Δm = (Z × m<sub>p</sub> + N × m<sub>n</sub>) - m<sub>nucleus</sub></p>
                <div className="text-sm space-y-1">
                  <p>Where:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Z = number of protons (atomic number)</li>
                    <li>N = number of neutrons (A - Z)</li>
                    <li>m<sub>p</sub> = mass of proton = 1.007276 amu</li>
                    <li>m<sub>n</sub> = mass of neutron = 1.008665 amu</li>
                    <li>m<sub>nucleus</sub> = actual mass of nucleus</li>
                    <li>A = mass number (total nucleons)</li>
                  </ul>
                </div>
              </div>

              <p className="leading-relaxed mb-4">
                The binding energy is calculated using Einstein's mass-energy equivalence:
              </p>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg mb-6">
                <p className="font-mono text-2xl text-center mb-4">BE = Δm × c²</p>
                <p className="text-center text-sm">In nuclear physics units:</p>
                <p className="font-mono text-xl text-center mt-2">BE (MeV) = Δm (amu) × 931.494 MeV/amu</p>
                <p className="text-xs text-center mt-3">
                  The conversion factor 931.494 MeV/amu comes from c² = (2.998 × 10⁸ m/s)²
                </p>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border-l-4 border-yellow-500">
                <p className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Important Note:</p>
                <p className="text-yellow-800 dark:text-yellow-200">
                  The mass defect is always positive because energy is released when nucleons combine to form a nucleus. 
                  This released energy corresponds to the binding energy, and the system becomes more stable (lower energy state).
                </p>
              </div>
            </div>
          </section>

          {/* Worked Example */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Worked Example: Helium-4
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Problem:</h4>
                  <p>
                    Calculate the binding energy of a helium-4 nucleus (⁴He). The atomic mass of ⁴He is 4.002603 amu.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">Solution:</h4>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-200 dark:border-gray-600 space-y-4">
                    <div>
                      <p className="font-semibold">Step 1: Identify the Components</p>
                      <p>⁴He has:</p>
                      <ul className="list-disc list-inside ml-4">
                        <li>Atomic number (Z) = 2 protons</li>
                        <li>Mass number (A) = 4 nucleons</li>
                        <li>Neutrons (N) = A - Z = 4 - 2 = 2 neutrons</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-semibold">Step 2: Calculate Theoretical Mass</p>
                      <p className="font-mono text-sm">
                        Theoretical mass = (Z × m<sub>p</sub>) + (N × m<sub>n</sub>)
                      </p>
                      <p className="font-mono text-sm mt-1">
                        = (2 × 1.007276 amu) + (2 × 1.008665 amu)
                      </p>
                      <p className="font-mono text-sm">
                        = 2.014552 + 2.017330
                      </p>
                      <p className="font-mono text-sm font-bold">
                        = 4.031882 amu
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold">Step 3: Calculate Mass Defect</p>
                      <p className="font-mono text-sm">
                        Δm = Theoretical mass - Actual mass
                      </p>
                      <p className="font-mono text-sm mt-1">
                        = 4.031882 amu - 4.002603 amu
                      </p>
                      <p className="font-mono text-sm font-bold">
                        = 0.030279 amu
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold">Step 4: Calculate Binding Energy</p>
                      <p className="font-mono text-sm">
                        BE = Δm × 931.494 MeV/amu
                      </p>
                      <p className="font-mono text-sm mt-1">
                        = 0.030279 × 931.494
                      </p>
                      <p className="font-mono text-sm font-bold">
                        = 28.20 MeV
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold">Step 5: Calculate Binding Energy per Nucleon</p>
                      <p className="font-mono text-sm">
                        BE/nucleon = Total BE / A
                      </p>
                      <p className="font-mono text-sm mt-1">
                        = 28.20 MeV / 4
                      </p>
                      <p className="font-mono text-sm font-bold">
                        = 7.05 MeV/nucleon
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg border-l-4 border-green-500">
                  <p className="font-semibold text-green-900 dark:text-green-100">Answer:</p>
                  <p className="text-green-800 dark:text-green-200">
                    The binding energy of ⁴He is <strong>28.20 MeV</strong>, or <strong>7.05 MeV per nucleon</strong>. 
                    This means you would need 28.20 MeV of energy to completely disassemble a helium-4 nucleus into 
                    2 separate protons and 2 separate neutrons.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Binding Energy per Nucleon */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Binding Energy per Nucleon and Nuclear Stability
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-4">
                The <strong>binding energy per nucleon (BE/A)</strong> is a measure of nuclear stability. 
                The higher the binding energy per nucleon, the more stable the nucleus.
              </p>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3">
                  Key Trends in BE/A:
                </h3>
                <div className="space-y-3 text-blue-800 dark:text-blue-200">
                  <div className="flex items-start">
                    <span className="font-bold text-2xl mr-3">1.</span>
                    <div>
                      <p className="font-semibold">Light Nuclei (A &lt; 20):</p>
                      <p className="text-sm">BE/A increases rapidly with mass number. Very light nuclei are relatively unstable.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="font-bold text-2xl mr-3">2.</span>
                    <div>
                      <p className="font-semibold">Medium Nuclei (20 &lt; A &lt; 60):</p>
                      <p className="text-sm">
                        Peak stability occurs around <strong>⁵⁶Fe (Iron-56)</strong> with BE/A ≈ 8.79 MeV/nucleon. 
                        This is the most stable nucleus in nature.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="font-bold text-2xl mr-3">3.</span>
                    <div>
                      <p className="font-semibold">Heavy Nuclei (A &gt; 60):</p>
                      <p className="text-sm">
                        BE/A gradually decreases. Heavy nuclei are less stable due to increased electrostatic repulsion 
                        between protons.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto mb-6">
                <table className="w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                  <thead className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
                    <tr>
                      <th className="p-3 text-left">Nuclide</th>
                      <th className="p-3 text-left">Z</th>
                      <th className="p-3 text-left">A</th>
                      <th className="p-3 text-left">BE/nucleon (MeV)</th>
                      <th className="p-3 text-left">Stability</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="p-3 font-mono">²H (Deuterium)</td>
                      <td className="p-3">1</td>
                      <td className="p-3">2</td>
                      <td className="p-3">1.112</td>
                      <td className="p-3 text-red-600">Low</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="p-3 font-mono">⁴He</td>
                      <td className="p-3">2</td>
                      <td className="p-3">4</td>
                      <td className="p-3">7.074</td>
                      <td className="p-3 text-yellow-600">Moderate</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="p-3 font-mono">¹²C</td>
                      <td className="p-3">6</td>
                      <td className="p-3">12</td>
                      <td className="p-3">7.680</td>
                      <td className="p-3 text-yellow-600">Moderate</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="p-3 font-mono">¹⁶O</td>
                      <td className="p-3">8</td>
                      <td className="p-3">16</td>
                      <td className="p-3">7.976</td>
                      <td className="p-3 text-green-600">High</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 bg-green-100 dark:bg-green-900/30">
                      <td className="p-3 font-mono font-bold">⁵⁶Fe (Iron-56)</td>
                      <td className="p-3 font-bold">26</td>
                      <td className="p-3 font-bold">56</td>
                      <td className="p-3 font-bold">8.790</td>
                      <td className="p-3 text-green-600 font-bold">Maximum</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="p-3 font-mono">²³⁵U</td>
                      <td className="p-3">92</td>
                      <td className="p-3">235</td>
                      <td className="p-3">7.591</td>
                      <td className="p-3 text-orange-600">Moderate-Low</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="p-3 font-mono">²³⁸U</td>
                      <td className="p-3">92</td>
                      <td className="p-3">238</td>
                      <td className="p-3">7.570</td>
                      <td className="p-3 text-orange-600">Moderate-Low</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500">
                <p className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Why Iron-56 is Most Stable:</p>
                <p className="text-purple-800 dark:text-purple-200">
                  ⁵⁶Fe has the optimal balance between the strong nuclear force (which binds nucleons) and electrostatic 
                  repulsion (which pushes protons apart). Elements lighter than iron can release energy through <strong>fusion</strong> 
                  (combining to form heavier elements), while elements heavier than iron can release energy through <strong>fission</strong> 
                  (splitting into lighter elements). This is why stars fuse elements up to iron, but not beyond.
                </p>
              </div>
            </div>
          </section>

          {/* Nuclear Reactions */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Binding Energy and Nuclear Reactions
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-lg border-2 border-orange-500">
                  <h3 className="text-xl font-semibold text-orange-900 dark:text-orange-100 mb-3">
                    Nuclear Fusion
                  </h3>
                  <p className="text-orange-800 dark:text-orange-200 mb-3">
                    Combining light nuclei to form heavier nuclei releases energy because the product has higher BE/A.
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded font-mono text-sm">
                    <p>Example: Deuterium fusion</p>
                    <p className="mt-2">²H + ²H → ⁴He + energy</p>
                    <p className="text-xs mt-2">
                      Initial BE/A: 1.112 MeV<br/>
                      Final BE/A: 7.074 MeV<br/>
                      Energy released ≈ 24 MeV
                    </p>
                  </div>
                  <p className="text-sm text-orange-700 dark:text-orange-300 mt-3">
                    This powers the sun and hydrogen bombs.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg border-2 border-blue-500">
                  <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">
                    Nuclear Fission
                  </h3>
                  <p className="text-blue-800 dark:text-blue-200 mb-3">
                    Splitting heavy nuclei into lighter nuclei releases energy because products have higher BE/A.
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded font-mono text-sm">
                    <p>Example: Uranium-235 fission</p>
                    <p className="mt-2">²³⁵U + n → ⁹⁰Sr + ¹⁴³Xe + 3n + energy</p>
                    <p className="text-xs mt-2">
                      Initial BE/A: 7.591 MeV<br/>
                      Final BE/A: ~8.5 MeV (avg)<br/>
                      Energy released ≈ 200 MeV
                    </p>
                  </div>
                  <p className="text-sm text-blue-700 dark:text-blue-300 mt-3">
                    This powers nuclear reactors and atomic bombs.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border-l-4 border-yellow-500">
                <p className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Energy Calculation:</p>
                <p className="text-yellow-800 dark:text-yellow-200">
                  For any nuclear reaction, the energy released (Q-value) equals the difference in total binding energies:
                  <span className="block font-mono mt-2">Q = BE<sub>products</sub> - BE<sub>reactants</sub></span>
                  If Q &gt; 0, energy is released (exothermic). If Q &lt; 0, energy must be supplied (endothermic).
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
                  1. Nuclear Power Generation
                </h3>
                <p className="text-blue-800 dark:text-blue-200">
                  Nuclear reactors use fission of ²³⁵U or ²³⁹Pu to generate electricity. Understanding binding energy 
                  helps optimize fuel efficiency and predict energy output from fission reactions.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-3">
                  2. Stellar Nucleosynthesis
                </h3>
                <p className="text-green-800 dark:text-green-200">
                  Stars generate energy through fusion reactions. Binding energy calculations explain why stars can fuse 
                  elements up to iron, but heavier elements require supernova conditions to form.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-3">
                  3. Medical Applications
                </h3>
                <p className="text-purple-800 dark:text-purple-200">
                  Radioisotopes for medical imaging and treatment are selected based on their binding energies and decay 
                  modes. PET scans use positron emission from unstable nuclei with specific BE characteristics.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-900 dark:text-orange-100 mb-3">
                  4. Nuclear Weapons
                </h3>
                <p className="text-orange-800 dark:text-orange-200">
                  Both fission bombs (atomic bombs) and fusion bombs (hydrogen bombs) exploit binding energy differences. 
                  The massive energy release comes from conversion of mass defect to energy.
                </p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-teal-900 dark:text-teal-100 mb-3">
                  5. Radioactive Dating
                </h3>
                <p className="text-teal-800 dark:text-teal-200">
                  Understanding nuclear stability helps explain radioactive decay. Carbon-14 dating, uranium-lead dating, 
                  and other techniques rely on known decay rates of unstable nuclei with lower binding energies.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-yellow-900 dark:text-yellow-100 mb-3">
                  6. Fusion Energy Research
                </h3>
                <p className="text-yellow-800 dark:text-yellow-200">
                  Projects like ITER aim to harness fusion energy for clean power generation. Binding energy calculations 
                  are crucial for determining optimal fuel combinations and predicting energy yields.
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
                    Step 1: Identify Nuclear Composition
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-blue-800 dark:text-blue-200">
                    <li>Determine atomic number (Z) = number of protons</li>
                    <li>Determine mass number (A) = total nucleons</li>
                    <li>Calculate neutrons: N = A - Z</li>
                    <li>Find the actual atomic mass (from periodic table or given)</li>
                  </ul>
                </div>

                <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-3">
                    Step 2: Calculate Theoretical Mass
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-green-800 dark:text-green-200">
                    <li>Proton mass: m<sub>p</sub> = 1.007276 amu</li>
                    <li>Neutron mass: m<sub>n</sub> = 1.008665 amu</li>
                    <li>Theoretical mass = (Z × 1.007276) + (N × 1.008665) amu</li>
                  </ul>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-3">
                    Step 3: Calculate Mass Defect
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-purple-800 dark:text-purple-200">
                    <li>Δm = Theoretical mass - Actual mass</li>
                    <li>This should always be positive</li>
                    <li>Keep at least 6 decimal places for accuracy</li>
                  </ul>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500">
                  <h3 className="text-xl font-semibold text-orange-900 dark:text-orange-100 mb-3">
                    Step 4: Calculate Binding Energy
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-orange-800 dark:text-orange-200">
                    <li>BE = Δm × 931.494 MeV/amu</li>
                    <li>For BE per nucleon: divide by mass number A</li>
                    <li>Report answer in MeV with appropriate significant figures</li>
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
                  ❌ Using Atomic Mass Instead of Nuclear Mass
                </h3>
                <p className="text-red-800 dark:text-red-200 mb-2">
                  Atomic mass includes electrons. For precise calculations, use nuclear mass (atomic mass - electron mass).
                </p>
                <p className="text-sm text-red-700 dark:text-red-300">
                  <strong>Correction:</strong> For most problems, atomic mass is sufficient, but be aware of the difference 
                  in high-precision calculations.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
                  ❌ Forgetting to Calculate Neutrons
                </h3>
                <p className="text-red-800 dark:text-red-200 mb-2">
                  Students often forget that N = A - Z, not just Z.
                </p>
                <p className="text-sm text-red-700 dark:text-red-300">
                  <strong>Correct:</strong> Always calculate N = A - Z before finding theoretical mass
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
                  ❌ Wrong Sign for Mass Defect
                </h3>
                <p className="text-red-800 dark:text-red-200 mb-2">
                  Mass defect should be positive: Δm = (separated mass) - (nucleus mass).
                </p>
                <p className="text-sm text-red-700 dark:text-red-300">
                  <strong>Correct:</strong> If you get negative Δm, you've subtracted in the wrong order
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
                  ❌ Using Wrong Conversion Factor
                </h3>
                <p className="text-red-800 dark:text-red-200 mb-2">
                  The conversion from amu to MeV is 931.494, not 931.5 or other approximations in precise work.
                </p>
                <p className="text-sm text-red-700 dark:text-red-300">
                  <strong>Correct:</strong> Use 931.494 MeV/amu for accurate results
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
                <h3 className="text-lg font-semibold mb-4">Key Constants</h3>
                <div className="space-y-2 text-sm font-mono">
                  <p>m<sub>p</sub> = 1.007276 amu</p>
                  <p>m<sub>n</sub> = 1.008665 amu</p>
                  <p>m<sub>e</sub> = 0.000549 amu</p>
                  <p>1 amu = 931.494 MeV/c²</p>
                  <p>1 amu = 1.66054 × 10⁻²⁷ kg</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-tertiary-50 to-primary-50 dark:from-tertiary-900/20 dark:to-primary-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Key Formulas</h3>
                <div className="space-y-2 text-sm font-mono">
                  <p>N = A - Z</p>
                  <p>Δm = (Zm<sub>p</sub> + Nm<sub>n</sub>) - m<sub>nucleus</sub></p>
                  <p>BE = Δm × 931.494 MeV</p>
                  <p>BE/nucleon = BE / A</p>
                  <p>Q = BE<sub>products</sub> - BE<sub>reactants</sub></p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-secondary-50 to-tertiary-50 dark:from-secondary-900/20 dark:to-tertiary-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Stability Rules</h3>
                <div className="space-y-2 text-sm">
                  <p>• Higher BE/A = more stable</p>
                  <p>• Maximum stability: ⁵⁶Fe (~8.79 MeV/nucleon)</p>
                  <p>• Light nuclei: gain stability by fusion</p>
                  <p>• Heavy nuclei: gain stability by fission</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-tertiary-50 dark:from-primary-900/20 dark:to-tertiary-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Typical BE/A Values</h3>
                <div className="space-y-2 text-sm font-mono">
                  <p>²H: 1.11 MeV</p>
                  <p>⁴He: 7.07 MeV</p>
                  <p>¹²C: 7.68 MeV</p>
                  <p>⁵⁶Fe: 8.79 MeV (max)</p>
                  <p>²³⁸U: 7.57 MeV</p>
                </div>
              </div>
            </div>
          </section>
        </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    🔗 Related Calculators
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="/chemical-reaction-calculators/radioactive-decay-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Radioactive Decay Calculator</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/atomic-structure-calculators/wavelength-energy-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Wavelength Energy Calculator</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/concentration-calculators/molar-mass-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Molar Mass Calculator</span>
                      </a>
                    </li>
                  </ul>
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      📐 Related Formulas
                    </h3>
                    <ul className="space-y-3">
                      <li>
                        <a
                          href="/chemistry-formulas/nuclear-binding-energy"
                          className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                        >
                          <span>→</span>
                          <span>Nuclear Binding Energy Formula</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/chemistry-formulas/nuclear-chemistry-formula"
                          className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                        >
                          <span>→</span>
                          <span>Nuclear Chemistry Formula</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <a
                      href="/nuclear-calculators"
                      className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      All Nuclear Calculators →
                    </a>
                  </div>
                </div>
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
            "name": "Nuclear Binding Energy Calculator",
            "description": "Nuclear Binding Energy Calculator on ChemSolved",
            "url": "https://chemsolved.com/nuclear-calculators/nuclear-binding-energy-calculator",
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
                "name": "Nuclear Binding Energy Calculator",
                "item": "https://chemsolved.com/nuclear-calculators/nuclear-binding-energy-calculator"
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