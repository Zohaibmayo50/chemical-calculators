import WavelengthEnergyCalculator from '@/components/calculators/WavelengthEnergyCalculator';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wavelength Energy Calculator - Photon Energy & Frequency | ChemCalc',
  description: 'Calculate photon energy, wavelength, and frequency using E = hf. Includes electromagnetic spectrum regions, quantum mechanics calculations, and spectroscopy applications.',
  keywords: 'wavelength calculator, photon energy, frequency calculator, electromagnetic spectrum, quantum mechanics, spectroscopy, E = hf, Planck constant',
};

export default function WavelengthEnergyCalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-block p-3 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-2xl mb-4">
              <svg className="w-16 h-16 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Wavelength & Energy Calculator
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Quantum Mechanics & Electromagnetic Radiation
            </p>
          </div>

          <WavelengthEnergyCalculator />

          {/* Educational Content */}
          <div className="mt-12 prose prose-lg max-w-none dark:prose-invert">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Understanding Photon Energy and Wavelength
              </h2>

              <div className="space-y-6 text-gray-700 dark:text-gray-300">
                
                <section>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    What is Photon Energy?
                  </h3>
                  <p className="leading-relaxed mb-4">
                    Light exhibits both wave and particle properties (wave-particle duality). When behaving as a particle, light consists of 
                    discrete packets of energy called <strong>photons</strong>. Each photon carries a specific amount of energy determined 
                    by its frequency or wavelength. This fundamental relationship was discovered by Max Planck and Albert Einstein in the 
                    early 20th century, launching the field of quantum mechanics.
                  </p>
                  <p className="leading-relaxed">
                    The energy of a photon is <strong>directly proportional to its frequency</strong> and <strong>inversely proportional 
                    to its wavelength</strong>. This means that high-frequency radiation (like UV or X-rays) carries much more energy 
                    per photon than low-frequency radiation (like infrared or radio waves).
                  </p>
                </section>

                <section className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Fundamental Equations
                  </h3>
                  <div className="space-y-4 font-mono text-sm bg-white dark:bg-gray-800 p-4 rounded">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <p className="font-bold text-lg mb-2">Planck-Einstein Relation:</p>
                      <p className="text-2xl mb-2">E = hf</p>
                      <ul className="font-sans text-sm space-y-1">
                        <li><strong>E</strong> = energy of photon (J)</li>
                        <li><strong>h</strong> = Planck's constant = 6.626 × 10⁻³⁴ J·s</li>
                        <li><strong>f</strong> = frequency (Hz)</li>
                      </ul>
                    </div>
                    
                    <div className="border-l-4 border-purple-500 pl-4">
                      <p className="font-bold text-lg mb-2">Wave Equation:</p>
                      <p className="text-2xl mb-2">c = λf</p>
                      <ul className="font-sans text-sm space-y-1">
                        <li><strong>c</strong> = speed of light = 2.998 × 10⁸ m/s</li>
                        <li><strong>λ</strong> (lambda) = wavelength (m)</li>
                        <li><strong>f</strong> = frequency (Hz)</li>
                      </ul>
                    </div>
                    
                    <div className="border-l-4 border-green-500 pl-4">
                      <p className="font-bold text-lg mb-2">Combined Equation:</p>
                      <p className="text-2xl mb-2">E = hc/λ</p>
                      <p className="font-sans text-sm">
                        Energy is inversely proportional to wavelength
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    The Electromagnetic Spectrum
                  </h3>
                  <p className="leading-relaxed mb-4">
                    The electromagnetic (EM) spectrum encompasses all types of electromagnetic radiation, from gamma rays to radio waves. 
                    All EM radiation travels at the speed of light in vacuum, but different types have different wavelengths, frequencies, 
                    and energies.
                  </p>
                  
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg">
                      <thead>
                        <tr className="bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30">
                          <th className="px-4 py-3 text-left font-semibold border-b border-gray-300 dark:border-gray-700">Type</th>
                          <th className="px-4 py-3 text-left font-semibold border-b border-gray-300 dark:border-gray-700">Wavelength</th>
                          <th className="px-4 py-3 text-left font-semibold border-b border-gray-300 dark:border-gray-700">Frequency</th>
                          <th className="px-4 py-3 text-left font-semibold border-b border-gray-300 dark:border-gray-700">Energy</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700"><strong>Gamma Rays</strong></td>
                          <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">&lt; 10 pm</td>
                          <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">&gt; 30 EHz</td>
                          <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">&gt; 124 keV</td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700"><strong>X-Rays</strong></td>
                          <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">10 pm - 10 nm</td>
                          <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">30 PHz - 30 EHz</td>
                          <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">124 eV - 124 keV</td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700"><strong>Ultraviolet</strong></td>
                          <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">10 - 400 nm</td>
                          <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">750 THz - 30 PHz</td>
                          <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">3.1 - 124 eV</td>
                        </tr>
                        <tr className="bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30">
                          <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700"><strong>Visible Light</strong></td>
                          <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">380 - 750 nm</td>
                          <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">400 - 790 THz</td>
                          <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">1.65 - 3.26 eV</td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700"><strong>Infrared</strong></td>
                          <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">750 nm - 1 mm</td>
                          <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">300 GHz - 400 THz</td>
                          <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">1.24 meV - 1.65 eV</td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700"><strong>Microwave</strong></td>
                          <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">1 mm - 1 m</td>
                          <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">300 MHz - 300 GHz</td>
                          <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">1.24 μeV - 1.24 meV</td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700"><strong>Radio Waves</strong></td>
                          <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">&gt; 1 m</td>
                          <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">&lt; 300 MHz</td>
                          <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">&lt; 1.24 μeV</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Visible Light Spectrum
                  </h3>
                  <p className="leading-relaxed mb-4">
                    The narrow band of electromagnetic radiation visible to the human eye ranges from approximately 380 nm (violet) 
                    to 750 nm (red). Each color corresponds to a specific wavelength range:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 p-4 rounded-lg border-l-4 border-purple-600">
                      <h4 className="font-bold mb-1">Violet</h4>
                      <p className="text-sm">380-450 nm | ~680-790 THz | ~2.75-3.26 eV</p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 p-4 rounded-lg border-l-4 border-blue-600">
                      <h4 className="font-bold mb-1">Blue</h4>
                      <p className="text-sm">450-495 nm | ~606-680 THz | ~2.50-2.75 eV</p>
                    </div>
                    <div className="bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 p-4 rounded-lg border-l-4 border-green-600">
                      <h4 className="font-bold mb-1">Green</h4>
                      <p className="text-sm">495-570 nm | ~526-606 THz | ~2.17-2.50 eV</p>
                    </div>
                    <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 dark:from-yellow-900/30 dark:to-yellow-800/30 p-4 rounded-lg border-l-4 border-yellow-600">
                      <h4 className="font-bold mb-1">Yellow</h4>
                      <p className="text-sm">570-590 nm | ~508-526 THz | ~2.10-2.17 eV</p>
                    </div>
                    <div className="bg-gradient-to-r from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30 p-4 rounded-lg border-l-4 border-orange-600">
                      <h4 className="font-bold mb-1">Orange</h4>
                      <p className="text-sm">590-620 nm | ~484-508 THz | ~2.00-2.10 eV</p>
                    </div>
                    <div className="bg-gradient-to-r from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/30 p-4 rounded-lg border-l-4 border-red-600">
                      <h4 className="font-bold mb-1">Red</h4>
                      <p className="text-sm">620-750 nm | ~400-484 THz | ~1.65-2.00 eV</p>
                    </div>
                  </div>
                </section>

                <section className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Worked Example: Green Light Energy
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold mb-2">Problem:</p>
                      <p>Calculate the energy of a photon of green light with wavelength 520 nm.</p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 p-4 rounded">
                      <p className="font-semibold mb-2">Step 1: Convert wavelength to meters</p>
                      <p className="font-mono">λ = 520 nm = 520 × 10⁻⁹ m = 5.20 × 10⁻⁷ m</p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 p-4 rounded">
                      <p className="font-semibold mb-2">Step 2: Calculate frequency</p>
                      <p className="font-mono">f = c/λ = (2.998 × 10⁸ m/s) / (5.20 × 10⁻⁷ m)</p>
                      <p className="font-mono">f = 5.77 × 10¹⁴ Hz = 577 THz</p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 p-4 rounded">
                      <p className="font-semibold mb-2">Step 3: Calculate energy</p>
                      <p className="font-mono">E = hf = (6.626 × 10⁻³⁴ J·s) × (5.77 × 10¹⁴ Hz)</p>
                      <p className="font-mono">E = 3.82 × 10⁻¹⁹ J</p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 p-4 rounded">
                      <p className="font-semibold mb-2">Step 4: Convert to eV (optional)</p>
                      <p className="font-mono">E = (3.82 × 10⁻¹⁹ J) / (1.602 × 10⁻¹⁹ J/eV)</p>
                      <p className="font-mono">E = 2.39 eV</p>
                    </div>
                    
                    <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded border-l-4 border-green-600">
                      <p className="font-semibold mb-1">Answer:</p>
                      <p>A 520 nm green photon has energy of <strong>3.82 × 10⁻¹⁹ J</strong> or <strong>2.39 eV</strong></p>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Applications of Photon Energy Calculations
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg">
                      <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                        <span className="text-2xl">🔬</span>
                        Spectroscopy
                      </h4>
                      <p className="text-sm">
                        UV-Vis, IR, and NMR spectroscopy use photon energies to identify molecular structures. Different 
                        wavelengths interact with specific molecular transitions, providing structural information.
                      </p>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg">
                      <h4 className="font-bold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                        <span className="text-2xl">☀️</span>
                        Solar Energy
                      </h4>
                      <p className="text-sm">
                        Solar cells convert photon energy to electricity. The band gap of semiconductor materials determines 
                        which wavelengths can be absorbed and converted to electrical energy.
                      </p>
                    </div>
                    
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg">
                      <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2 flex items-center gap-2">
                        <span className="text-2xl">🧬</span>
                        Photochemistry
                      </h4>
                      <p className="text-sm">
                        Chemical reactions driven by light (photosynthesis, vision, photography) require specific photon 
                        energies to break or form bonds. UV light has enough energy to damage DNA.
                      </p>
                    </div>
                    
                    <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg">
                      <h4 className="font-bold text-red-900 dark:text-red-100 mb-2 flex items-center gap-2">
                        <span className="text-2xl">🏥</span>
                        Medical Imaging
                      </h4>
                      <p className="text-sm">
                        X-rays have high enough energy to penetrate tissue, enabling medical imaging. Different tissues 
                        absorb X-rays differently, creating contrast in radiographs.
                      </p>
                    </div>
                    
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-lg">
                      <h4 className="font-bold text-yellow-900 dark:text-yellow-100 mb-2 flex items-center gap-2">
                        <span className="text-2xl">💡</span>
                        LED Technology
                      </h4>
                      <p className="text-sm">
                        LEDs emit photons when electrons drop from higher to lower energy levels. The band gap determines 
                        the color (wavelength) of light emitted.
                      </p>
                    </div>
                    
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-lg">
                      <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-2 flex items-center gap-2">
                        <span className="text-2xl">🌌</span>
                        Astronomy
                      </h4>
                      <p className="text-sm">
                        Analyzing starlight wavelengths reveals composition, temperature, and motion of celestial objects. 
                        Redshift/blueshift calculations depend on wavelength measurements.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Energy Units Explained
                  </h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                      <h4 className="font-bold mb-2">Joules (J)</h4>
                      <p className="text-sm">
                        The SI unit of energy. For individual photons, energies are typically 10⁻¹⁸ to 10⁻²⁰ J, which is why 
                        we often use other units.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                      <h4 className="font-bold mb-2">Electron Volts (eV)</h4>
                      <p className="text-sm">
                        The energy gained by an electron accelerated through 1 volt. More convenient for atomic-scale energies.
                        <br/><strong>1 eV = 1.602 × 10⁻¹⁹ J</strong>
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                      <h4 className="font-bold mb-2">kilojoules per mole (kJ/mol)</h4>
                      <p className="text-sm">
                        Used when considering Avogadro's number of photons (a mole). Useful for comparing to bond energies 
                        and chemical reaction energies.
                        <br/><strong>1 kJ/mol = 1.036 × 10⁻²⁰ J per photon</strong>
                      </p>
                    </div>
                  </div>
                </section>

                <section className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Why Does Wavelength Affect Energy?
                  </h3>
                  <div className="space-y-3">
                    <p className="leading-relaxed">
                      The inverse relationship between wavelength and energy (E = hc/λ) has profound implications:
                    </p>
                    
                    <div className="bg-white dark:bg-gray-800 p-4 rounded space-y-2">
                      <p className="font-semibold">Short Wavelength → High Energy:</p>
                      <ul className="list-disc list-inside space-y-1 ml-3 text-sm">
                        <li>Gamma rays and X-rays can ionize atoms and damage biological molecules</li>
                        <li>UV light causes sunburn and can initiate chemical reactions</li>
                        <li>Blue light has more energy than red light</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 p-4 rounded space-y-2">
                      <p className="font-semibold">Long Wavelength → Low Energy:</p>
                      <ul className="list-disc list-inside space-y-1 ml-3 text-sm">
                        <li>Infrared radiation is felt as heat but doesn't cause chemical reactions</li>
                        <li>Microwaves heat food by rotating water molecules, not breaking bonds</li>
                        <li>Radio waves pass through most materials harmlessly</li>
                      </ul>
                    </div>
                    
                    <div className="bg-yellow-100 dark:bg-yellow-900/30 p-4 rounded border-l-4 border-yellow-600">
                      <p className="text-sm">
                        <strong>Safety Note:</strong> This is why UV protection is important but you don't need radio wave 
                        protection. Higher energy photons can break chemical bonds in DNA and proteins, while lower energy 
                        photons cannot.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Historical Context
                  </h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary-500 pl-4">
                      <p className="font-bold mb-1">Max Planck (1900)</p>
                      <p className="text-sm">
                        Introduced the concept that energy is quantized in discrete packets (quanta) to explain blackbody 
                        radiation. This was the birth of quantum theory. He proposed E = hf, where h became known as 
                        Planck's constant.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-secondary-500 pl-4">
                      <p className="font-bold mb-1">Albert Einstein (1905)</p>
                      <p className="text-sm">
                        Used Planck's idea to explain the photoelectric effect, showing that light behaves as particles 
                        (photons) with energy E = hf. This work won Einstein the Nobel Prize in Physics (1921).
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-tertiary-500 pl-4">
                      <p className="font-bold mb-1">Louis de Broglie (1924)</p>
                      <p className="text-sm">
                        Extended wave-particle duality to matter, proposing that particles also have wave properties. 
                        This completed the quantum revolution and led to modern quantum mechanics.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Common Calculation Scenarios
                  </h3>
                  <div className="space-y-3">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
                      <p className="font-semibold mb-2">1. Determining if light can break a bond</p>
                      <p className="text-sm">
                        Calculate photon energy and compare to bond energy. If E<sub>photon</sub> ≥ E<sub>bond</sub>, 
                        the photon can break the bond. Example: C-C bond (~350 kJ/mol) requires UV light or higher energy.
                      </p>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
                      <p className="font-semibold mb-2">2. Finding absorption wavelength</p>
                      <p className="text-sm">
                        If you know an electronic transition energy (e.g., 2.5 eV), calculate λ = hc/E to find the 
                        wavelength that will be absorbed. This is the basis of UV-Vis spectroscopy.
                      </p>
                    </div>
                    
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded">
                      <p className="font-semibold mb-2">3. LED color prediction</p>
                      <p className="text-sm">
                        Given a semiconductor band gap (in eV), calculate the wavelength of emitted light. Example: 
                        GaN has a band gap of ~2.9 eV, corresponding to blue light (~430 nm).
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
                      <h4 className="font-bold mb-2">Key Constants:</h4>
                      <ul className="space-y-1 font-mono text-xs">
                        <li>h = 6.626 × 10⁻³⁴ J·s</li>
                        <li>c = 2.998 × 10⁸ m/s</li>
                        <li>1 eV = 1.602 × 10⁻¹⁹ J</li>
                        <li>1 nm = 10⁻⁹ m</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Key Relationships:</h4>
                      <ul className="space-y-1">
                        <li>Higher frequency = Higher energy</li>
                        <li>Shorter wavelength = Higher energy</li>
                        <li>Energy and wavelength are inversely proportional</li>
                        <li>All EM radiation travels at c in vacuum</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Tips for Calculations
                  </h3>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-lg space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-xl">✓</span>
                      <div>
                        <p className="font-semibold">Unit Consistency</p>
                        <p className="text-sm">Always convert wavelength to meters, frequency to Hz, and energy to Joules before using the equations.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-xl">✓</span>
                      <div>
                        <p className="font-semibold">Scientific Notation</p>
                        <p className="text-sm">Use scientific notation for very large or small numbers. Photon energies are typically 10⁻¹⁹ to 10⁻²⁰ J.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-xl">✓</span>
                      <div>
                        <p className="font-semibold">Double-Check Signs</p>
                        <p className="text-sm">All values (E, f, λ) should be positive. Negative values indicate an error.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-xl">✓</span>
                      <div>
                        <p className="font-semibold">Verify Region</p>
                        <p className="text-sm">After calculating, check that your wavelength matches the expected EM spectrum region.</p>
                      </div>
                    </div>
                  </div>
                </section>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
