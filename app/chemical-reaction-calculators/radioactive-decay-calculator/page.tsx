import RadioactiveDecayCalculator from '@/components/calculators/RadioactiveDecayCalculator';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: 'Radioactive Decay Calculator - Half-Life & Nuclear Kinetics | ChemCalc',
  description: 'Calculate radioactive decay, half-life, and decay constants using N = N₀e^(-λt). Includes common isotopes, carbon dating, and nuclear chemistry applications.',
  keywords: 'radioactive decay calculator, half-life, nuclear chemistry, decay constant, carbon dating, isotopes, first-order kinetics, nuclear decay',
};

export default function RadioactiveDecayCalculatorPage() {  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-block p-3 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-2xl mb-4">
              <svg className="w-16 h-16 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Radioactive Decay Calculator
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Half-Life & Nuclear Kinetics
            </p>
          </div>

          <RadioactiveDecayCalculator />

          {/* Educational Content */}
          <div className="mt-12 prose prose-lg max-w-none dark:prose-invert">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Understanding the Bohr Model of the Hydrogen Atom
              </h2>

              <div className="space-y-6 text-gray-700 dark:text-gray-300">
                
                <section>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    What is the Bohr Model?
                  </h3>
                  <p className="leading-relaxed mb-4">
                    The <strong>Bohr model</strong>, proposed by Niels Bohr in 1913, was a revolutionary quantum mechanical model 
                    of the hydrogen atom. It introduced the concept of <strong>quantized energy levels</strong>, explaining why 
                    atoms emit light at specific wavelengths rather than a continuous spectrum.
                  </p>
                  <p className="leading-relaxed">
                    While the Bohr model has been superseded by more accurate quantum mechanical models (Schrödinger equation), 
                    it remains incredibly useful for understanding atomic structure and calculating the hydrogen spectrum. It 
                    successfully explains the <strong>Rydberg formula</strong> and predicts the correct wavelengths for hydrogen's 
                    spectral lines.
                  </p>
                </section>

                <section className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Key Equations
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-blue-500">
                      <p className="font-bold text-lg mb-2">Energy of Level n:</p>
                      <p className="text-3xl font-mono mb-3">E<sub>n</sub> = -13.6 eV / n²</p>
                      <ul className="space-y-1 text-sm">
                        <li><strong>E<sub>n</sub></strong> = energy of electron in level n (eV or Joules)</li>
                        <li><strong>n</strong> = principal quantum number (1, 2, 3, ...)</li>
                        <li><strong>-13.6 eV</strong> = ground state energy of hydrogen</li>
                        <li>Negative values indicate bound states (electron is trapped)</li>
                      </ul>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-purple-500">
                      <p className="font-bold text-lg mb-2">Energy of Transition:</p>
                      <p className="text-3xl font-mono mb-3">ΔE = E<sub>n₂</sub> - E<sub>n₁</sub> = hf = hc/λ</p>
                      <ul className="space-y-1 text-sm">
                        <li><strong>ΔE</strong> = energy difference between levels</li>
                        <li><strong>n₂</strong> = upper (initial) level, <strong>n₁</strong> = lower (final) level</li>
                        <li>For emission: ΔE is released as a photon</li>
                        <li>For absorption: ΔE must be provided to promote electron</li>
                      </ul>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-green-500">
                      <p className="font-bold text-lg mb-2">Rydberg Equation:</p>
                      <p className="text-3xl font-mono mb-3">1/λ = R<sub>H</sub> (1/n₁² - 1/n₂²)</p>
                      <ul className="space-y-1 text-sm">
                        <li><strong>λ</strong> = wavelength of emitted/absorbed light</li>
                        <li><strong>R<sub>H</sub></strong> = Rydberg constant = 1.097 × 10⁷ m⁻¹</li>
                        <li><strong>n₁</strong> = lower level, <strong>n₂</strong> = upper level (n₂ &gt; n₁)</li>
                        <li>Directly relates energy levels to spectral lines</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Energy Level Diagram
                  </h3>
                  <p className="leading-relaxed mb-4">
                    The energy levels of hydrogen get closer together as n increases, asymptotically approaching zero energy 
                    (ionization) at n = ∞. The largest energy gap is between n = 1 and n = 2.
                  </p>
                  
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-5 rounded-lg">
                    <div className="space-y-2 font-mono text-sm">
                      <div className="flex justify-between items-center border-b border-gray-400 pb-1">
                        <span>n = ∞</span>
                        <span className="font-bold">E = 0 eV (ionization)</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-300 dark:border-gray-600 pb-1">
                        <span>n = 5</span>
                        <span>E = -0.544 eV</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-300 dark:border-gray-600 pb-1">
                        <span>n = 4</span>
                        <span>E = -0.850 eV</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-300 dark:border-gray-600 pb-1">
                        <span>n = 3</span>
                        <span>E = -1.511 eV</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-300 dark:border-gray-600 pb-1">
                        <span>n = 2</span>
                        <span>E = -3.400 eV</span>
                      </div>
                      <div className="flex justify-between items-center border-b-2 border-gray-500 pb-2">
                        <span className="font-bold">n = 1 (ground state)</span>
                        <span className="font-bold">E = -13.6 eV</span>
                      </div>
                    </div>
                    <p className="text-xs mt-3 text-gray-600 dark:text-gray-400">
                      Energy increases (becomes less negative) as n increases. Ground state (n=1) is most stable.
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Hydrogen Spectral Series
                  </h3>
                  <p className="leading-relaxed mb-4">
                    When electrons transition between energy levels, they emit or absorb photons. Each series is named after 
                    its discoverer and corresponds to transitions ending at a particular n₁ level:
                  </p>
                  
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg">
                      <thead>
                        <tr className="bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30">
                          <th className="px-4 py-3 text-left font-semibold border-b">Series</th>
                          <th className="px-4 py-3 text-left font-semibold border-b">n₁</th>
                          <th className="px-4 py-3 text-left font-semibold border-b">n₂ Range</th>
                          <th className="px-4 py-3 text-left font-semibold border-b">Region</th>
                          <th className="px-4 py-3 text-left font-semibold border-b">λ Range</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="px-4 py-3 border-b font-semibold">Lyman</td>
                          <td className="px-4 py-3 border-b">1</td>
                          <td className="px-4 py-3 border-b">2, 3, 4, ...</td>
                          <td className="px-4 py-3 border-b">Ultraviolet</td>
                          <td className="px-4 py-3 border-b">91-122 nm</td>
                        </tr>
                        <tr className="bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30">
                          <td className="px-4 py-3 border-b font-semibold">Balmer</td>
                          <td className="px-4 py-3 border-b">2</td>
                          <td className="px-4 py-3 border-b">3, 4, 5, ...</td>
                          <td className="px-4 py-3 border-b"><strong>Visible</strong></td>
                          <td className="px-4 py-3 border-b">365-656 nm</td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="px-4 py-3 border-b font-semibold">Paschen</td>
                          <td className="px-4 py-3 border-b">3</td>
                          <td className="px-4 py-3 border-b">4, 5, 6, ...</td>
                          <td className="px-4 py-3 border-b">Infrared</td>
                          <td className="px-4 py-3 border-b">820-1875 nm</td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="px-4 py-3 border-b font-semibold">Brackett</td>
                          <td className="px-4 py-3 border-b">4</td>
                          <td className="px-4 py-3 border-b">5, 6, 7, ...</td>
                          <td className="px-4 py-3 border-b">Infrared</td>
                          <td className="px-4 py-3 border-b">1.46-4.05 μm</td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="px-4 py-3 border-b font-semibold">Pfund</td>
                          <td className="px-4 py-3 border-b">5</td>
                          <td className="px-4 py-3 border-b">6, 7, 8, ...</td>
                          <td className="px-4 py-3 border-b">Infrared</td>
                          <td className="px-4 py-3 border-b">2.28-7.46 μm</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                    <p className="text-sm">
                      <strong>Balmer Series:</strong> The only series visible to the human eye! These transitions (n → 2) 
                      produce the characteristic red, blue-green, blue-violet, and violet lines of hydrogen's spectrum. 
                      The Hα line (n=3→2) at 656 nm is prominently red.
                    </p>
                  </div>
                </section>

                <section className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Worked Example: Balmer Alpha (Hα)
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold mb-2">Problem:</p>
                      <p>
                        Calculate the wavelength of light emitted when an electron in hydrogen transitions from n = 3 to n = 2 
                        (the Balmer alpha or Hα line).
                      </p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 p-4 rounded">
                      <p className="font-semibold mb-2">Step 1: Calculate energy of each level</p>
                      <p className="font-mono text-sm">E₂ = -13.6 eV / 2² = -13.6 / 4 = -3.40 eV</p>
                      <p className="font-mono text-sm">E₃ = -13.6 eV / 3² = -13.6 / 9 = -1.51 eV</p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 p-4 rounded">
                      <p className="font-semibold mb-2">Step 2: Calculate energy difference</p>
                      <p className="font-mono text-sm">ΔE = E₃ - E₂ = -1.51 - (-3.40) = 1.89 eV</p>
                      <p className="text-xs mt-2">Convert to Joules: 1.89 eV × 1.602×10⁻¹⁹ J/eV = 3.03×10⁻¹⁹ J</p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 p-4 rounded">
                      <p className="font-semibold mb-2">Step 3: Calculate wavelength using E = hc/λ</p>
                      <p className="font-mono text-sm">λ = hc / ΔE</p>
                      <p className="font-mono text-sm">λ = (6.626×10⁻³⁴ J·s)(2.998×10⁸ m/s) / (3.03×10⁻¹⁹ J)</p>
                      <p className="font-mono text-sm">λ = 6.56 × 10⁻⁷ m = 656 nm</p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded">
                      <p className="font-semibold mb-2">Alternative: Use Rydberg equation</p>
                      <p className="font-mono text-sm">1/λ = R<sub>H</sub> (1/n₁² - 1/n₂²)</p>
                      <p className="font-mono text-sm">1/λ = 1.097×10⁷ (1/4 - 1/9) = 1.097×10⁷ (0.1389)</p>
                      <p className="font-mono text-sm">1/λ = 1.524×10⁶ m⁻¹</p>
                      <p className="font-mono text-sm">λ = 656 nm ✓</p>
                    </div>
                    
                    <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded border-l-4 border-green-600">
                      <p className="font-semibold mb-1">Answer:</p>
                      <p>The Hα line has a wavelength of <strong>656 nm</strong>, which appears as <strong>red light</strong> 
                      in the visible spectrum. This is one of the most prominent lines in hydrogen's emission spectrum and is 
                      used extensively in astronomy.</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Applications of the Bohr Model
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg">
                      <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                        <span className="text-2xl">🌌</span>
                        Astronomy
                      </h4>
                      <p className="text-sm">
                        Hydrogen spectral lines (especially Hα) are used to study stars, nebulae, and galaxies. Redshift/blueshift 
                        of these lines reveals the velocity and distance of celestial objects.
                      </p>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg">
                      <h4 className="font-bold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                        <span className="text-2xl">🔬</span>
                        Spectroscopy
                      </h4>
                      <p className="text-sm">
                        Emission and absorption spectroscopy identify elements in unknown samples. Each element has a unique 
                        spectral fingerprint based on its electronic structure.
                      </p>
                    </div>
                    
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg">
                      <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2 flex items-center gap-2">
                        <span className="text-2xl">⚛️</span>
                        Quantum Mechanics
                      </h4>
                      <p className="text-sm">
                        The Bohr model introduced quantization of energy, laying the groundwork for modern quantum mechanics. 
                        It demonstrated that classical physics fails at the atomic scale.
                      </p>
                    </div>
                    
                    <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg">
                      <h4 className="font-bold text-red-900 dark:text-red-100 mb-2 flex items-center gap-2">
                        <span className="text-2xl">💡</span>
                        Plasma Physics
                      </h4>
                      <p className="text-sm">
                        Understanding hydrogen spectra is crucial for fusion research and plasma diagnostics. The Balmer lines 
                        are monitored in fusion reactors to measure plasma conditions.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Limitations of the Bohr Model
                  </h3>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-lg space-y-3">
                    <p className="leading-relaxed">
                      While successful for hydrogen, the Bohr model has significant limitations:
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-3">
                        <span className="text-xl">❌</span>
                        <div>
                          <p className="font-semibold text-sm">Only works for hydrogen-like ions</p>
                          <p className="text-xs">Cannot accurately predict spectra of multi-electron atoms</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-xl">❌</span>
                        <div>
                          <p className="font-semibold text-sm">Doesn't explain fine structure</p>
                          <p className="text-xs">Cannot account for splitting of spectral lines in magnetic fields (Zeeman effect)</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-xl">❌</span>
                        <div>
                          <p className="font-semibold text-sm">Violates Heisenberg uncertainty principle</p>
                          <p className="text-xs">Assumes precise knowledge of both position and momentum</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-xl">❌</span>
                        <div>
                          <p className="font-semibold text-sm">No explanation for chemical bonding</p>
                          <p className="text-xs">Cannot predict molecular structures or bond formation</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 bg-white dark:bg-gray-800 p-3 rounded">
                      <p className="text-sm">
                        <strong>Modern Replacement:</strong> The Schrödinger equation and quantum mechanical orbital theory 
                        provide a more complete and accurate description of atomic structure, though the Bohr model remains 
                        pedagogically valuable.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Historical Significance
                  </h3>
                  <div className="space-y-3">
                    <div className="border-l-4 border-primary-500 pl-4">
                      <p className="font-bold mb-1">1885: Johann Balmer</p>
                      <p className="text-sm">
                        Empirically discovered the formula for hydrogen's visible spectral lines (Balmer series), 
                        not knowing the underlying physics.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-secondary-500 pl-4">
                      <p className="font-bold mb-1">1888: Johannes Rydberg</p>
                      <p className="text-sm">
                        Generalized Balmer's formula to the Rydberg equation, covering all spectral series. Introduced 
                        the Rydberg constant.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-tertiary-500 pl-4">
                      <p className="font-bold mb-1">1913: Niels Bohr</p>
                      <p className="text-sm">
                        Developed quantum model explaining WHY the Rydberg equation works. Introduced quantized angular 
                        momentum and stationary states. Won 1922 Nobel Prize.
                      </p>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4">
                      <p className="font-bold mb-1">1926: Erwin Schrödinger</p>
                      <p className="text-sm">
                        Formulated wave equation that completely describes atomic structure, superseding Bohr's model 
                        while confirming its main results for hydrogen.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Quick Reference Guide
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-bold mb-2">Key Equations:</h4>
                      <ul className="space-y-1 font-mono text-xs">
                        <li>E<sub>n</sub> = -13.6 eV / n²</li>
                        <li>ΔE = E<sub>upper</sub> - E<sub>lower</sub></li>
                        <li>1/λ = R<sub>H</sub>(1/n₁² - 1/n₂²)</li>
                        <li>R<sub>H</sub> = 1.097×10⁷ m⁻¹</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Famous Lines:</h4>
                      <ul className="space-y-1">
                        <li>Hα (n=3→2): 656 nm (red)</li>
                        <li>Hβ (n=4→2): 486 nm (blue-green)</li>
                        <li>Hγ (n=5→2): 434 nm (violet)</li>
                        <li>Lyman α (n=2→1): 121 nm (UV)</li>
                      </ul>
                    </div>
                  </div>
                </section>

              </div>
            </div>
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
                        href="/atomic-structure-calculators/wavelength-energy-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Wavelength Energy Calculator</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/atomic-structure-calculators/electron-configuration-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Electron Configuration</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/quantum-calculators/quantum-numbers-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Quantum Numbers Calculator</span>
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
                          href="/chemistry-formulas/radioactive-decay-formula"
                          className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                        >
                          <span>→</span>
                          <span>Radioactive Decay Formula</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/chemistry-formulas/half-life-formula"
                          className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                        >
                          <span>→</span>
                          <span>Half-Life Formula</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <a
                      href="/chemical-reaction-calculators"
                      className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      All Chemical Reaction Calculators →
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
            "name": "Radioactive Decay Calculator",
            "description": "Radioactive Decay Calculator on ChemSolved",
            "url": "https://chemsolved.com/chemical-reaction-calculators/radioactive-decay-calculator",
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
                "name": "Radioactive Decay Calculator",
                "item": "https://chemsolved.com/chemical-reaction-calculators/radioactive-decay-calculator"
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