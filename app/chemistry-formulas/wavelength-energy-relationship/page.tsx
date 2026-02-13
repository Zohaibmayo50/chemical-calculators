import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Wavelength-Energy Relationship | E = hc/λ Photon Energy',
  description: 'Calculate photon energy from wavelength using E = hc/λ. Understand the inverse relationship between wavelength and energy in electromagnetic radiation.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/wavelength-energy-relationship',
  },
  keywords: ['wavelength energy relationship', 'photon energy', 'planck constant', 'speed of light', 'electromagnetic spectrum', 'E=hc/lambda']
};

export default function WavelengthEnergyPage() {
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
            <span className="text-gray-900 dark:text-white font-medium">Wavelength-Energy Relationship</span>
          </nav>
        </div>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
            <h1 className="text-5xl font-bold mb-4 text-center">Wavelength-Energy Relationship</h1>
            <p className="text-xl text-center text-cyan-100">
              Photon energy is inversely proportional to wavelength: shorter wavelength = higher energy
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Understanding the Wavelength-Energy Relationship</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The wavelength-energy relationship, expressed as E = hc/λ, is one of the most fundamental equations in physical chemistry and quantum mechanics. First derived from Max Planck's quantum theory (1900) and Albert Einstein's photon concept (1905), this equation reveals that electromagnetic radiation exhibits both wave and particle properties—the wave-particle duality central to quantum physics. The inverse relationship between wavelength and energy explains why X-rays (short wavelength) are dangerous while radio waves (long wavelength) are harmless, and why blue light carries more energy than red light.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This relationship is not merely theoretical—it forms the basis of countless technologies and scientific techniques. Spectroscopy relies on measuring wavelengths to determine molecular structure and composition. Solar cells convert short-wavelength photons into electricity more efficiently. Medical imaging uses high-energy gamma rays for precision diagnostics. Understanding E = hc/λ allows chemists to predict reaction outcomes, physicists to study atomic structure, and engineers to design optical devices from lasers to fiber optics.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              The equation combines three fundamental constants: Planck's constant (h = 6.626 × 10⁻³⁴ J·s) quantifies the "quantum" of action, the speed of light (c = 3.00 × 10⁸ m/s) sets the universal speed limit, and wavelength (λ) describes the spatial periodicity of the wave. Together, they create an inverse relationship: halving the wavelength doubles the photon energy. This simple yet profound equation bridges classical wave mechanics and quantum particle theory, making it indispensable across all branches of physical science.
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-l-4 border-indigo-500">
            <h2 className="text-3xl font-bold mb-6">Energy Formula</h2>
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/30 dark:to-blue-900/30 rounded-xl p-8 mb-6">
              <div className="text-center">
                <div className="inline-block bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg">
                  <p className="text-4xl font-mono font-bold text-cyan-900 dark:text-cyan-300 mb-4">E = hc / λ</p>
                  <p className="text-xl font-mono text-blue-700 dark:text-blue-400">or equivalently: E = hν</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">(since c = νλ, frequency ν = c/λ)</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-cyan-50 dark:bg-cyan-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-cyan-900 dark:text-cyan-300 mb-2">E (Joules or eV)</h3>
                <p className="text-gray-700 dark:text-gray-300">Energy per photon. 1 eV = 1.602 × 10⁻¹⁹ J</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-blue-900 dark:text-blue-300 mb-2">h = 6.626 × 10⁻³⁴ J·s</h3>
                <p className="text-gray-700 dark:text-gray-300">Planck's constant (fundamental quantum of action)</p>
              </div>
              <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-indigo-900 dark:text-indigo-300 mb-2">c = 3.00 × 10⁸ m/s</h3>
                <p className="text-gray-700 dark:text-gray-300">Speed of light in vacuum</p>
              </div>
            </div>
            
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-purple-900 dark:text-purple-300 mb-3">Useful Constant: hc</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">hc = (6.626 × 10⁻³⁴)(3.00 × 10⁸) = 1.988 × 10⁻²⁵ J·m</p>
              <p className="text-gray-700 dark:text-gray-300">In convenient units for wavelength in nanometers:</p>
              <p className="text-lg font-semibold text-purple-700 dark:text-purple-400 mt-2">E (eV) = 1240 eV·nm / λ (nm)</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">This shortcut formula simplifies calculations dramatically!</p>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Detailed Example Calculations</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-cyan-900 dark:text-cyan-300 mb-4">Example 1: Visible Green Light (550 nm)</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p className="font-semibold">Given: λ = 550 nm = 550 × 10⁻⁹ m</p>
                  <p className="ml-4"><strong>Step 1:</strong> Use E = hc/λ with SI units</p>
                  <p className="ml-4">E = (6.626 × 10⁻³⁴ J·s)(3.00 × 10⁸ m/s) / (550 × 10⁻⁹ m)</p>
                  <p className="ml-4">E = (1.988 × 10⁻²⁵ J·m) / (550 × 10⁻⁹ m)</p>
                  <p className="ml-4">E = <strong>3.61 × 10⁻¹⁹ J per photon</strong></p>
                  <p className="ml-4 mt-2"><strong>Step 2:</strong> Convert to electron volts (eV)</p>
                  <p className="ml-4">E = (3.61 × 10⁻¹⁹ J) / (1.602 × 10⁻¹⁹ J/eV) = <strong>2.25 eV</strong></p>
                  <p className="ml-4 mt-2"><strong>Alternative:</strong> Using shortcut formula</p>
                  <p className="ml-4">E (eV) = 1240 eV·nm / 550 nm = <strong>2.25 eV</strong> ✓</p>
                </div>
                <div className="bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-600 rounded p-4 mt-4">
                  <p className="font-semibold text-green-800 dark:text-green-300">Interpretation: Each green photon carries 2.25 eV of energy. A 1-watt green laser emits about 2.8 × 10¹⁸ photons per second!</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-4">Example 2: X-ray Radiation (1.0 nm)</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p className="font-semibold">Given: λ = 1.0 nm = 1.0 × 10⁻⁹ m</p>
                  <p className="ml-4">Using shortcut: E = 1240 eV·nm / 1.0 nm = <strong>1240 eV = 1.24 keV</strong></p>
                  <p className="ml-4">In joules: E = (1240 eV)(1.602 × 10⁻¹⁹ J/eV) = <strong>1.99 × 10⁻¹⁶ J</strong></p>
                  <p className="ml-4 mt-2"><strong>Comparison:</strong> Compared to green light (550 nm):</p>
                  <p className="ml-4">Energy ratio = 1240 eV / 2.25 eV = <strong>551× more energetic!</strong></p>
                </div>
                <div className="bg-orange-100 dark:bg-orange-900/30 border border-orange-400 dark:border-orange-600 rounded p-4 mt-4">
                  <p className="font-semibold text-orange-800 dark:text-orange-300">Safety Note: X-rays are 500+ times more energetic than visible light, which is why they can ionize atoms and damage biological tissue. Wavelength inversely determines danger!</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-900 dark:text-red-300 mb-4">Example 3: UV Light at 254 nm (Germicidal Lamp)</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p className="font-semibold">Given: λ = 254 nm (UV-C sterilization wavelength)</p>
                  <p className="ml-4">E = 1240 eV·nm / 254 nm = <strong>4.88 eV per photon</strong></p>
                  <p className="ml-4">E = 4.88 × 1.602 × 10⁻¹⁹ J = <strong>7.82 × 10⁻¹⁹ J per photon</strong></p>
                  <p className="ml-4 mt-2"><strong>Why 254 nm kills microbes:</strong></p>
                  <p className="ml-4">• DNA absorption peak is near 260 nm</p>
                  <p className="ml-4">• 4.88 eV exceeds bond energy of thymine dimers (~3-4 eV)</p>
                  <p className="ml-4">• Photons break DNA bonds, preventing replication</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Electromagnetic Spectrum &amp; Energy Ranges</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-indigo-100 dark:bg-indigo-900/30">
                    <th className="border border-indigo-300 dark:border-indigo-700 p-3 text-left">Region</th>
                    <th className="border border-indigo-300 dark:border-indigo-700 p-3 text-left">Wavelength Range</th>
                    <th className="border border-indigo-300 dark:border-indigo-700 p-3 text-left">Energy per Photon</th>
                    <th className="border border-indigo-300 dark:border-indigo-700 p-3 text-left">Applications</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="border border-gray-300 dark:border-gray-600 p-3"><strong>Gamma Rays</strong></td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">&lt; 0.01 nm</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">&gt; 124 keV</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Cancer therapy, sterilization</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="border border-gray-300 dark:border-gray-600 p-3"><strong>X-rays</strong></td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">0.01 - 10 nm</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">124 eV - 124 keV</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Medical imaging, crystallography</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="border border-gray-300 dark:border-gray-600 p-3"><strong>Ultraviolet</strong></td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">10 - 400 nm</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">3.1 - 124 eV</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Sunburn, vitamin D synthesis, sterilization</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="border border-gray-300 dark:border-gray-600 p-3"><strong>Visible Light</strong></td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">400 - 700 nm</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">1.77 - 3.1 eV</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Vision, photosynthesis, photography</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="border border-gray-300 dark:border-gray-600 p-3"><strong>Infrared</strong></td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">700 nm - 1 mm</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">0.00124 - 1.77 eV</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Heat sensing, remote controls, spectroscopy</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="border border-gray-300 dark:border-gray-600 p-3"><strong>Microwave</strong></td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">1 mm - 1 m</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">1.24 × 10⁻⁶ - 0.00124 eV</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Cooking, radar, telecommunications</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="border border-gray-300 dark:border-gray-600 p-3"><strong>Radio Waves</strong></td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">&gt; 1 m</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">&lt; 1.24 × 10⁻⁶ eV</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Broadcasting, MRI, astronomy</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded p-4">
              <p className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Key Pattern:</p>
              <p className="text-gray-700 dark:text-gray-300">As wavelength decreases by a factor of 10, photon energy increases by a factor of 10. This inverse relationship spans 16 orders of magnitude across the electromagnetic spectrum!</p>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Real-World Applications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-cyan-50 dark:bg-cyan-900/20 rounded-xl p-5">
                <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-3">Photovoltaic Solar Cells</h3>
                <p className="text-gray-700 dark:text-gray-300">Silicon solar cells have a band gap of 1.1 eV, requiring photon wavelengths shorter than ~1130 nm for electron excitation. Blue light (2.5-3 eV) generates more electricity per photon than red light (1.8-2 eV), but there are more red photons in sunlight, balancing efficiency across the visible spectrum.</p>
              </div>
              <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-5">
                <h3 className="text-lg font-bold text-indigo-800 dark:text-indigo-300 mb-3">Infrared Spectroscopy</h3>
                <p className="text-gray-700 dark:text-gray-300">Molecular vibrations absorb IR photons with energies matching bond stretching/bending modes. C-H stretches absorb near 3000 cm⁻¹ (3.3 μm, 0.37 eV), while C=O stretches absorb near 1700 cm⁻¹ (5.9 μm, 0.21 eV). Lower energy = longer wavelength IR radiation reveals molecular structure.</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-5">
                <h3 className="text-lg font-bold text-purple-800 dark:text-purple-300 mb-3">Photosynthesis</h3>
                <p className="text-gray-700 dark:text-gray-300">Chlorophyll absorbs red (680 nm, 1.82 eV) and blue light (430 nm, 2.88 eV) but reflects green light, making plants appear green. The absorbed photon energy drives the conversion of CO₂ and H₂O into glucose, storing chemical energy from sunlight.</p>
              </div>
              <div className="bg-pink-50 dark:bg-pink-900/20 rounded-xl p-5">
                <h3 className="text-lg font-bold text-pink-800 dark:text-pink-300 mb-3">Laser Technology</h3>
                <p className="text-gray-700 dark:text-gray-300">Different laser wavelengths serve distinct purposes: CO₂ lasers (10.6 μm, 0.117 eV) cut materials, Nd:YAG (1064 nm, 1.17 eV) weld metals, ruby lasers (694 nm, 1.79 eV) remove tattoos, and excimer lasers (193 nm, 6.4 eV) perform eye surgery. Wavelength precision is essential for each application.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Common Mistakes &amp; Important Tips</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4 bg-red-50 dark:bg-red-900/20 p-3 rounded">
                <h3 className="font-semibold text-red-700 dark:text-red-400 mb-1">Unit Mismatch Errors</h3>
                <p className="text-gray-700 dark:text-gray-300">If λ is in nanometers, convert to meters before using E = hc/λ with SI units. Or use the shortcut E (eV) = 1240 eV·nm / λ (nm) to avoid conversion errors entirely!</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4 bg-red-50 dark:bg-red-900/20 p-3 rounded">
                <h3 className="font-semibold text-red-700 dark:text-red-400 mb-1">Reversing the Inverse Relationship</h3>
                <p className="text-gray-700 dark:text-gray-300">Longer wavelength = lower energy, NOT higher! UV (short λ) is dangerous; infrared (long λ) is safe. Remember: E ∝ 1/λ.</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4 bg-red-50 dark:bg-red-900/20 p-3 rounded">
                <h3 className="font-semibold text-red-700 dark:text-red-400 mb-1">Forgetting Per-Photon Context</h3>
                <p className="text-gray-700 dark:text-gray-300">E = hc/λ gives energy per single photon. To find total power, multiply by photon flux (photons/second). A 1-watt laser emits about 10¹⁸ photons/sec for visible wavelengths.</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4 bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded">
                <h3 className="font-semibold text-yellow-700 dark:text-yellow-400 mb-1">Pro Tip: Memorize 1240 eV·nm</h3>
                <p className="text-gray-700 dark:text-gray-300">The hc product equals 1240 eV·nm, making wavelength-to-energy conversions instant. For λ = 400 nm (violet): E = 1240/400 = 3.1 eV. No calculator needed for quick estimates!</p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Related Tools</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/atomic-structure-calculators/wavelength-energy-calculator" className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-blue-900 mb-2">Wavelength-Energy Calculator</h3>
                <p className="text-sm text-gray-600">Calculate photon properties</p>
              </Link>
              <Link href="/atomic-structure-calculators/bohr-model-calculator" className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-blue-900 mb-2">Bohr Model Calculator</h3>
                <p className="text-sm text-gray-600">Atomic transitions</p>
              </Link>
              <Link href="/chemistry-formulas/planck-equation" className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-green-900 mb-2">Planck Equation</h3>
                <p className="text-sm text-gray-600">E = hν formula</p>
              </Link>
              <Link href="/chemistry-formulas/rydberg-equation" className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-green-900 mb-2">Rydberg Equation</h3>
                <p className="text-sm text-gray-600">Hydrogen spectral lines</p>
              </Link>
              <Link href="/atomic-structure-calculators" className="p-6 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-semibold mb-2">All Quantum & Atomic Structure Calculators</h3>
                <p className="text-sm opacity-90">Explore all quantum and atomic tools</p>
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
            "headline": "Wavelength Energy Relationship",
            "description": "Wavelength Energy Relationship on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/wavelength-energy-relationship",
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
                "name": "Wavelength Energy Relationship",
                "item": "https://chemsolved.com/chemistry-formulas/wavelength-energy-relationship"
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
