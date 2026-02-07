import React from 'react';
import DeBroglieWavelengthCalculator from '@/components/calculators/DeBroglieWavelengthCalculator';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: 'de Broglie Wavelength Calculator - Matter Waves & Quantum Mechanics',
  description: 'Calculate de Broglie wavelength from momentum, mass, and velocity. Explore wave-particle duality and matter wave properties in quantum mechanics.',
  keywords: ['de Broglie wavelength', 'matter waves', 'wave-particle duality', 'quantum mechanics', 'momentum', 'chemistry calculator', 'physics'],
  alternates: {
    canonical: 'https://chemsolved.com/quantum-calculators/de-broglie-wavelength-calculator',
  },
};

export default function DeBroglieWavelengthCalculatorPage() {  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-4">
            de Broglie Wavelength Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Calculate matter wave properties and explore wave-particle duality
          </p>
        </div>

        <DeBroglieWavelengthCalculator />

        {/* Educational Content */}
        <div className="mt-12 space-y-8 text-gray-800 dark:text-gray-200">
          {/* What is de Broglie Wavelength */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              What is de Broglie Wavelength?
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-4">
                The <strong>de Broglie wavelength</strong> is the wavelength associated with a moving particle. 
                In 1924, Louis de Broglie proposed that all matter exhibits wave-like properties, just as light 
                exhibits both wave and particle properties.
              </p>
              <p className="leading-relaxed mb-4">
                This revolutionary idea extended Einstein's photon theory to all matter, suggesting that particles 
                like electrons, protons, and even macroscopic objects have an associated wavelength determined by 
                their momentum.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 mt-6">
                <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Key Concept - Wave-Particle Duality:</p>
                <p className="text-blue-800 dark:text-blue-200">
                  All matter has both <strong>particle</strong> and <strong>wave</strong> characteristics. For large objects, 
                  the wavelength is so small it's undetectable. For subatomic particles like electrons, the wavelength 
                  is significant enough to observe quantum effects like diffraction and interference.
                </p>
              </div>
            </div>
          </section>

          {/* de Broglie Equation */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              The de Broglie Equation
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="leading-relaxed mb-4">
                De Broglie derived his famous equation by combining Einstein's energy-mass relation with Planck's 
                quantum theory:
              </p>
              
              <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/30 dark:to-secondary-900/30 p-6 rounded-lg mb-6">
                <div className="text-center space-y-4">
                  <div>
                    <p className="font-mono text-3xl mb-2">λ = h / p</p>
                    <p className="text-sm">General form</p>
                  </div>
                  <div className="border-t-2 border-gray-300 dark:border-gray-600 pt-4">
                    <p className="font-mono text-3xl mb-2">λ = h / (m × v)</p>
                    <p className="text-sm">Expanded form (non-relativistic)</p>
                  </div>
                </div>
                
                <div className="mt-6 grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold mb-2">Where:</p>
                    <ul className="space-y-1">
                      <li>λ = de Broglie wavelength (m)</li>
                      <li>h = Planck's constant = 6.626 × 10⁻³⁴ J·s</li>
                      <li>p = momentum (kg·m/s)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">For momentum p = mv:</p>
                    <ul className="space-y-1">
                      <li>m = mass (kg)</li>
                      <li>v = velocity (m/s)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border-l-4 border-yellow-500">
                <p className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Important Note:</p>
                <p className="text-yellow-800 dark:text-yellow-200">
                  The de Broglie equation is valid for all particles, but the wavelength is only observable when it's 
                  comparable to the size of the object or aperture it encounters. For macroscopic objects, λ is so small 
                  (typically &lt; 10⁻³⁰ m) that wave properties are undetectable.
                </p>
              </div>
            </div>
          </section>

          {/* Worked Example */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Worked Example: Electron Wavelength
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Problem:</h4>
                  <p>
                    Calculate the de Broglie wavelength of an electron moving at 1.0 × 10⁶ m/s.
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    (Electron mass = 9.109 × 10⁻³¹ kg)
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">Solution:</h4>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-200 dark:border-gray-600 space-y-4">
                    <div>
                      <p className="font-semibold">Step 1: Identify Given Information</p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>m = 9.109 × 10⁻³¹ kg</li>
                        <li>v = 1.0 × 10⁶ m/s</li>
                        <li>h = 6.626 × 10⁻³⁴ J·s</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-semibold">Step 2: Calculate Momentum</p>
                      <p className="font-mono text-sm">p = m × v</p>
                      <p className="font-mono text-sm mt-1">
                        = (9.109 × 10⁻³¹ kg) × (1.0 × 10⁶ m/s)
                      </p>
                      <p className="font-mono text-sm font-bold">
                        = 9.109 × 10⁻²⁵ kg·m/s
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold">Step 3: Apply de Broglie Equation</p>
                      <p className="font-mono text-sm">λ = h / p</p>
                      <p className="font-mono text-sm mt-1">
                        = (6.626 × 10⁻³⁴ J·s) / (9.109 × 10⁻²⁵ kg·m/s)
                      </p>
                      <p className="font-mono text-sm font-bold">
                        = 7.27 × 10⁻¹⁰ m
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold">Step 4: Convert to More Convenient Units</p>
                      <p className="font-mono text-sm">
                        λ = 7.27 × 10⁻¹⁰ m = 0.727 nm = 7.27 Å
                      </p>
                      <p className="text-sm mt-2">
                        (1 nm = 10⁻⁹ m, 1 Å = 10⁻¹⁰ m)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg border-l-4 border-green-500">
                  <p className="font-semibold text-green-900 dark:text-green-100">Answer:</p>
                  <p className="text-green-800 dark:text-green-200">
                    The de Broglie wavelength is <strong>7.27 × 10⁻¹⁰ m (0.727 nm)</strong>. This is comparable to 
                    the size of atoms (~1 Å) and X-ray wavelengths, which is why electrons can be diffracted by crystal 
                    lattices in electron diffraction experiments. This wavelength is the reason electron microscopes 
                    can achieve much higher resolution than optical microscopes.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Comparison: Microscopic vs Macroscopic */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Microscopic vs. Macroscopic Objects
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                The de Broglie wavelength varies dramatically depending on the mass and velocity of the object:
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                  <thead className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
                    <tr>
                      <th className="p-3 text-left">Object</th>
                      <th className="p-3 text-left">Mass (kg)</th>
                      <th className="p-3 text-left">Velocity (m/s)</th>
                      <th className="p-3 text-left">Wavelength (m)</th>
                      <th className="p-3 text-left">Observable?</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 bg-green-50 dark:bg-green-900/30">
                      <td className="p-3 font-semibold">Electron (slow)</td>
                      <td className="p-3 font-mono text-sm">9.11 × 10⁻³¹</td>
                      <td className="p-3 font-mono text-sm">10⁶</td>
                      <td className="p-3 font-mono text-sm">7.3 × 10⁻¹⁰</td>
                      <td className="p-3 text-green-600 font-bold">Yes ✓</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 bg-green-50 dark:bg-green-900/30">
                      <td className="p-3 font-semibold">Electron (fast)</td>
                      <td className="p-3 font-mono text-sm">9.11 × 10⁻³¹</td>
                      <td className="p-3 font-mono text-sm">10⁷</td>
                      <td className="p-3 font-mono text-sm">7.3 × 10⁻¹¹</td>
                      <td className="p-3 text-green-600 font-bold">Yes ✓</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 bg-green-50 dark:bg-green-900/30">
                      <td className="p-3 font-semibold">Proton (thermal)</td>
                      <td className="p-3 font-mono text-sm">1.67 × 10⁻²⁷</td>
                      <td className="p-3 font-mono text-sm">10⁴</td>
                      <td className="p-3 font-mono text-sm">4.0 × 10⁻¹¹</td>
                      <td className="p-3 text-green-600 font-bold">Yes ✓</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 bg-yellow-50 dark:bg-yellow-900/30">
                      <td className="p-3 font-semibold">Neutron (slow)</td>
                      <td className="p-3 font-mono text-sm">1.67 × 10⁻²⁷</td>
                      <td className="p-3 font-mono text-sm">2.2 × 10³</td>
                      <td className="p-3 font-mono text-sm">1.8 × 10⁻¹⁰</td>
                      <td className="p-3 text-yellow-600 font-bold">Yes ✓</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 bg-red-50 dark:bg-red-900/30">
                      <td className="p-3 font-semibold">Dust particle</td>
                      <td className="p-3 font-mono text-sm">10⁻⁹</td>
                      <td className="p-3 font-mono text-sm">0.01</td>
                      <td className="p-3 font-mono text-sm">6.6 × 10⁻²³</td>
                      <td className="p-3 text-red-600 font-bold">No ✗</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 bg-red-50 dark:bg-red-900/30">
                      <td className="p-3 font-semibold">Baseball</td>
                      <td className="p-3 font-mono text-sm">0.145</td>
                      <td className="p-3 font-mono text-sm">40</td>
                      <td className="p-3 font-mono text-sm">1.1 × 10⁻³⁴</td>
                      <td className="p-3 text-red-600 font-bold">No ✗</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 bg-red-50 dark:bg-red-900/30">
                      <td className="p-3 font-semibold">Car</td>
                      <td className="p-3 font-mono text-sm">1000</td>
                      <td className="p-3 font-mono text-sm">25</td>
                      <td className="p-3 font-mono text-sm">2.7 × 10⁻³⁸</td>
                      <td className="p-3 text-red-600 font-bold">No ✗</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3">Key Observations:</h3>
                <div className="space-y-2 text-blue-800 dark:text-blue-200">
                  <p>
                    <strong>1. Subatomic Particles:</strong> Wavelengths are in the range of 10⁻¹⁰ to 10⁻¹¹ m (angstroms), 
                    comparable to atomic dimensions. Wave properties are easily observable through diffraction experiments.
                  </p>
                  <p>
                    <strong>2. Macroscopic Objects:</strong> Wavelengths are incredibly small (&lt; 10⁻³⁰ m), far smaller 
                    than any possible aperture or obstacle. Wave properties are completely negligible.
                  </p>
                  <p>
                    <strong>3. General Trend:</strong> λ decreases as mass or velocity increases. This is why quantum 
                    effects are only noticeable for very light, slow-moving particles.
                  </p>
                </div>
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
                  1. Electron Microscopy
                </h3>
                <p className="text-blue-800 dark:text-blue-200">
                  Electron microscopes use the wave nature of electrons to achieve resolutions much higher than optical 
                  microscopes. With wavelengths ~0.1 Å, they can image individual atoms and molecules, crucial for 
                  materials science, biology, and nanotechnology.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-3">
                  2. Neutron Diffraction
                </h3>
                <p className="text-green-800 dark:text-green-200">
                  Slow neutrons have wavelengths comparable to atomic spacings in crystals. Neutron diffraction is used 
                  to determine crystal structures, study magnetic materials, and investigate biological molecules. Unlike 
                  X-rays, neutrons can locate hydrogen atoms easily.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-3">
                  3. Quantum Tunneling
                </h3>
                <p className="text-purple-800 dark:text-purple-200">
                  The wave nature of particles allows quantum tunneling, where particles pass through energy barriers. 
                  This enables scanning tunneling microscopes (STM), nuclear fusion in stars, and modern electronics 
                  like flash memory and tunnel diodes.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-900 dark:text-orange-100 mb-3">
                  4. Atomic Structure
                </h3>
                <p className="text-orange-800 dark:text-orange-200">
                  De Broglie's hypothesis led to the development of quantum mechanics and the wave equation 
                  (Schrödinger equation). Understanding electron wavelengths explains atomic orbitals, chemical bonding, 
                  and the periodic table.
                </p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-teal-900 dark:text-teal-100 mb-3">
                  5. Semiconductor Technology
                </h3>
                <p className="text-teal-800 dark:text-teal-200">
                  In nanoscale transistors and quantum dots, electron wavelengths become comparable to device dimensions. 
                  Wave effects determine conductivity, energy levels, and optical properties, enabling modern computing 
                  and optoelectronics.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-yellow-900 dark:text-yellow-100 mb-3">
                  6. Particle Accelerators
                </h3>
                <p className="text-yellow-800 dark:text-yellow-200">
                  High-energy particle physics relies on de Broglie wavelength calculations. To probe smaller distances 
                  (study quarks, etc.), particles must be accelerated to very high energies to achieve shorter wavelengths, 
                  as demonstrated at facilities like the Large Hadron Collider.
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
                    Step 1: Identify Given Information
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-blue-800 dark:text-blue-200">
                    <li>Determine what's given: mass, velocity, momentum, or wavelength</li>
                    <li>Identify the particle type (electron, proton, etc.)</li>
                    <li>Check units and convert if necessary to SI units</li>
                    <li>Use scientific notation for very small/large values</li>
                  </ul>
                </div>

                <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-3">
                    Step 2: Calculate Momentum (if needed)
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-green-800 dark:text-green-200">
                    <li>If velocity is given: p = m × v</li>
                    <li>If kinetic energy is given: p = √(2mKE) for non-relativistic particles</li>
                    <li>Keep all significant figures during calculation</li>
                  </ul>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-3">
                    Step 3: Apply de Broglie Equation
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-purple-800 dark:text-purple-200">
                    <li>Use λ = h/p where h = 6.626 × 10⁻³⁴ J·s</li>
                    <li>Or λ = h/(mv) if using mass and velocity directly</li>
                    <li>For reverse calculation: p = h/λ or v = h/(mλ)</li>
                  </ul>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500">
                  <h3 className="text-xl font-semibold text-orange-900 dark:text-orange-100 mb-3">
                    Step 4: Express Answer with Proper Units
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-orange-800 dark:text-orange-200">
                    <li>Wavelength typically in meters (m), nanometers (nm), or angstroms (Å)</li>
                    <li>Use scientific notation for very small values</li>
                    <li>Report to appropriate significant figures (usually 3-4)</li>
                    <li>Compare to relevant scales (atomic size, etc.) for context</li>
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
                  ❌ Using Incorrect Value for Planck's Constant
                </h3>
                <p className="text-red-800 dark:text-red-200 mb-2">
                  h = 6.626 × 10⁻³⁴ J·s, not 6.63 × 10⁻³⁴ eV·s or other units without conversion.
                </p>
                <p className="text-sm text-red-700 dark:text-red-300">
                  <strong>Correct:</strong> Always use h = 6.626 × 10⁻³⁴ J·s in SI calculations
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
                  ❌ Forgetting to Calculate Momentum First
                </h3>
                <p className="text-red-800 dark:text-red-200 mb-2">
                  When given mass and velocity, must calculate p = mv before using λ = h/p.
                </p>
                <p className="text-sm text-red-700 dark:text-red-300">
                  <strong>Correct:</strong> Use λ = h/(mv) or calculate p first, then λ = h/p
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
                  ❌ Unit Conversion Errors
                </h3>
                <p className="text-red-800 dark:text-red-200 mb-2">
                  Mass must be in kg, velocity in m/s. Converting grams to kg or km/h to m/s incorrectly is common.
                </p>
                <p className="text-sm text-red-700 dark:text-red-300">
                  <strong>Correct:</strong> 1 g = 10⁻³ kg, 1 km/h = 1/3.6 m/s, always use SI units
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
                  ❌ Confusing with Photon Wavelength
                </h3>
                <p className="text-red-800 dark:text-red-200 mb-2">
                  For photons: λ = c/f or E = hf. For matter: λ = h/p. Don't mix these equations.
                </p>
                <p className="text-sm text-red-700 dark:text-red-300">
                  <strong>Correct:</strong> De Broglie equation applies to matter particles with mass, not massless photons
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
                  <p>h = 6.626 × 10⁻³⁴ J·s</p>
                  <p>m<sub>e</sub> = 9.109 × 10⁻³¹ kg</p>
                  <p>m<sub>p</sub> = 1.673 × 10⁻²⁷ kg</p>
                  <p>m<sub>n</sub> = 1.675 × 10⁻²⁷ kg</p>
                  <p>c = 2.998 × 10⁸ m/s</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-tertiary-50 to-primary-50 dark:from-tertiary-900/20 dark:to-primary-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Key Formulas</h3>
                <div className="space-y-2 text-sm font-mono">
                  <p>λ = h / p</p>
                  <p>λ = h / (m × v)</p>
                  <p>p = m × v</p>
                  <p>p = h / λ</p>
                  <p>KE = p² / (2m) = (1/2)mv²</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-secondary-50 to-tertiary-50 dark:from-secondary-900/20 dark:to-tertiary-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Unit Conversions</h3>
                <div className="space-y-2 text-sm">
                  <p>1 nm = 10⁻⁹ m</p>
                  <p>1 Å = 10⁻¹⁰ m</p>
                  <p>1 eV = 1.602 × 10⁻¹⁹ J</p>
                  <p>1 pm = 10⁻¹² m</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-tertiary-50 dark:from-primary-900/20 dark:to-tertiary-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Typical Wavelengths</h3>
                <div className="space-y-2 text-sm">
                  <p>Electron (thermal): ~1-10 Å</p>
                  <p>Electron (fast): ~0.1 Å</p>
                  <p>Proton (slow): ~0.1-1 Å</p>
                  <p>Neutron (thermal): ~1-2 Å</p>
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
                        href="/atomic-structure-calculators/wavelength-energy-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Wavelength Energy Calculator</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/quantum-calculators/heisenberg-uncertainty-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Heisenberg Uncertainty Calculator</span>
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
                          href="/chemistry-formulas/de-broglie-wavelength"
                          className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                        >
                          <span>→</span>
                          <span>De Broglie Wavelength Formula</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/chemistry-formulas/wavelength-energy-relationship"
                          className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                        >
                          <span>→</span>
                          <span>Wavelength Energy Relationship</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <a
                      href="/quantum-calculators"
                      className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      All Quantum Calculators →
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
            "name": "De Broglie Wavelength Calculator",
            "description": "De Broglie Wavelength Calculator on ChemSolved",
            "url": "https://chemsolved.com/quantum-calculators/de-broglie-wavelength-calculator",
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
                "name": "De Broglie Wavelength Calculator",
                "item": "https://chemsolved.com/quantum-calculators/de-broglie-wavelength-calculator"
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