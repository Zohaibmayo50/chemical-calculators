import type { Metadata } from 'next';
import HeisenbergUncertaintyCalculator from '@/components/calculators/HeisenbergUncertaintyCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: 'Heisenberg Uncertainty Principle Calculator | Chemistry Calculators',
  description:
    'Calculate position-momentum and energy-time uncertainties using the Heisenberg uncertainty principle. Explore quantum mechanical limits with step-by-step solutions.',
  keywords: [
    'heisenberg uncertainty',
    'uncertainty principle',
    'quantum mechanics',
    'position momentum uncertainty',
    'energy time uncertainty',
    'wave particle duality',
    'quantum limits',
    'planck constant',
    'quantum chemistry',
    'wavefunction',
  ],
};

export default function HeisenbergUncertaintyCalculatorPage() {  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 mb-4">
            Heisenberg Uncertainty Principle Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore the fundamental quantum limits on simultaneous measurement of complementary observables
          </p>
        </div>

        {/* Calculator Component */}
        <HeisenbergUncertaintyCalculator />

        {/* Educational Content */}
        <div className="mt-16 prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              What is the Heisenberg Uncertainty Principle?
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              The Heisenberg Uncertainty Principle is a fundamental concept in quantum mechanics that states certain pairs 
              of physical properties (called complementary variables or canonically conjugate variables) cannot both be 
              known to arbitrary precision at the same time. The more precisely one property is measured, the less precisely 
              the other can be known. This is not a statement about measurement limitations — it's a fundamental property 
              of quantum systems.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 mb-6">
              <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">
                The Core Equations
              </h3>
              <div className="text-blue-800 dark:text-blue-200 space-y-3">
                <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-300 dark:border-blue-700">
                  <p className="font-semibold mb-2">Position-Momentum Uncertainty:</p>
                  <p className="font-mono text-lg">Δx · Δp ≥ ℏ/2</p>
                  <p className="text-sm mt-2">
                    Where Δx is the position uncertainty, Δp is the momentum uncertainty, and ℏ = h/(2π) ≈ 1.055 × 10⁻³⁴ J·s
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-300 dark:border-blue-700">
                  <p className="font-semibold mb-2">Energy-Time Uncertainty:</p>
                  <p className="font-mono text-lg">ΔE · Δt ≥ ℏ/2</p>
                  <p className="text-sm mt-2">
                    Where ΔE is the energy uncertainty and Δt is the time uncertainty (or lifetime for excited states)
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">
              Understanding the Principle
            </h3>

            <h4 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mt-6 mb-3">
              What the Uncertainty Principle Is NOT
            </h4>
            <ul className="list-disc pl-8 text-gray-700 dark:text-gray-300 space-y-2 mb-6">
              <li>
                <strong>Not about measurement disturbance:</strong> A common misconception is that measuring position 
                "disturbs" the momentum. While measurement does affect quantum systems, the uncertainty principle is more 
                fundamental — particles don't have definite values for both properties simultaneously, regardless of measurement.
              </li>
              <li>
                <strong>Not a technological limitation:</strong> The uncertainty doesn't arise from imperfect instruments. 
                Even with perfect measurement devices, you cannot violate ΔxΔp ≥ ℏ/2.
              </li>
              <li>
                <strong>Not about knowledge or information:</strong> It's not that we don't know both values; rather, 
                the system itself doesn't possess definite values for both conjugate observables at once.
              </li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mt-6 mb-3">
              The Wave-Particle Connection
            </h4>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              The uncertainty principle is intimately connected to wave-particle duality:
            </p>
            <ul className="list-disc pl-8 text-gray-700 dark:text-gray-300 space-y-2 mb-6">
              <li>
                <strong>Well-defined momentum</strong> (small Δp) corresponds to a definite wavelength: λ = h/p. A wave 
                with a single wavelength is a pure sine wave extending infinitely in space → infinite position uncertainty (Δx → ∞).
              </li>
              <li>
                <strong>Well-defined position</strong> (small Δx) requires a localized wave packet, which is a superposition 
                of many wavelengths (Fourier theorem) → broad momentum distribution (large Δp).
              </li>
              <li>
                This mathematical relationship between position space and momentum space (related by Fourier transform) 
                is the root cause of the uncertainty principle.
              </li>
            </ul>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800 my-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Worked Example: Electron in an Atom
              </h3>
              
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <div>
                  <p className="font-semibold mb-2">Problem:</p>
                  <p>
                    An electron is confined to a region of space approximately 0.1 nm in diameter (atomic scale). 
                    What is the minimum uncertainty in its momentum? What is the corresponding velocity uncertainty?
                  </p>
                </div>

                <div>
                  <p className="font-semibold mb-2">Solution:</p>
                  <p className="mb-2">Step 1: Identify the given information</p>
                  <ul className="list-disc pl-8 space-y-1 mb-3">
                    <li>Position uncertainty: Δx ≈ 0.1 nm = 1.0 × 10⁻¹⁰ m</li>
                    <li>Electron mass: m<sub>e</sub> = 9.109 × 10⁻³¹ kg</li>
                    <li>Reduced Planck constant: ℏ = 1.055 × 10⁻³⁴ J·s</li>
                  </ul>

                  <p className="mb-2">Step 2: Apply the position-momentum uncertainty relation</p>
                  <p className="bg-white dark:bg-gray-800 p-3 rounded border border-gray-300 dark:border-gray-600 font-mono text-sm mb-3">
                    Δx · Δp ≥ ℏ/2<br />
                    Δp ≥ ℏ/(2Δx)
                  </p>

                  <p className="mb-2">Step 3: Calculate minimum momentum uncertainty</p>
                  <p className="bg-white dark:bg-gray-800 p-3 rounded border border-gray-300 dark:border-gray-600 font-mono text-sm mb-3">
                    Δp ≥ (1.055 × 10⁻³⁴ J·s) / (2 × 1.0 × 10⁻¹⁰ m)<br />
                    Δp ≥ 5.28 × 10⁻²⁵ kg·m/s
                  </p>

                  <p className="mb-2">Step 4: Calculate velocity uncertainty</p>
                  <p className="bg-white dark:bg-gray-800 p-3 rounded border border-gray-300 dark:border-gray-600 font-mono text-sm mb-3">
                    Δv = Δp / m<sub>e</sub><br />
                    Δv ≥ (5.28 × 10⁻²⁵ kg·m/s) / (9.109 × 10⁻³¹ kg)<br />
                    Δv ≥ 5.8 × 10⁵ m/s
                  </p>

                  <p className="mb-2">Step 5: Interpret the result</p>
                  <ul className="list-disc pl-8 space-y-1">
                    <li>The velocity uncertainty is about 0.2% the speed of light!</li>
                    <li>This huge uncertainty explains why electrons can't "fall into" the nucleus — confining them 
                        to nuclear dimensions would give enormous kinetic energies</li>
                    <li>This is why classical orbits don't exist for electrons in atoms</li>
                    <li>The ground state of hydrogen reflects this minimum uncertainty state</li>
                  </ul>
                </div>

                <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-lg border border-purple-300 dark:border-purple-700 mt-4">
                  <p className="font-semibold text-purple-900 dark:text-purple-100">
                    Answer: Δp ≥ 5.28 × 10⁻²⁵ kg·m/s, Δv ≥ 5.8 × 10⁵ m/s
                  </p>
                  <p className="text-sm text-purple-800 dark:text-purple-200 mt-2">
                    The electron's velocity cannot be known to better than about 600 km/s when localized to atomic dimensions!
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">
              The Energy-Time Uncertainty Relation
            </h3>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              The energy-time uncertainty relation has a slightly different interpretation than position-momentum:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg">
                <thead className="bg-gray-100 dark:bg-gray-600">
                  <tr>
                    <th className="px-6 py-3 border-b border-gray-300 dark:border-gray-500 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                      Interpretation
                    </th>
                    <th className="px-6 py-3 border-b border-gray-300 dark:border-gray-500 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                      Meaning
                    </th>
                    <th className="px-6 py-3 border-b border-gray-300 dark:border-gray-500 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                      Example
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr className="border-b border-gray-200 dark:border-gray-600">
                    <td className="px-6 py-4">Spectral Line Width</td>
                    <td className="px-6 py-4">
                      Excited states with lifetime Δt have energy spread ΔE ≥ ℏ/(2Δt), leading to natural line broadening
                    </td>
                    <td className="px-6 py-4">
                      Hydrogen 2p state: τ ≈ 10⁻⁸ s → ΔE ≈ 5 × 10⁻²⁷ J (line width ~10⁻⁷ eV)
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-600">
                    <td className="px-6 py-4">Virtual Particles</td>
                    <td className="px-6 py-4">
                      Energy conservation can be "violated" by ΔE for time Δt ≤ ℏ/(2ΔE), allowing virtual particle creation
                    </td>
                    <td className="px-6 py-4">
                      Virtual photons mediate electromagnetic force over timescales ~10⁻²¹ s
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-600">
                    <td className="px-6 py-4">Tunneling Time</td>
                    <td className="px-6 py-4">
                      Particles tunneling through barriers borrow energy ΔE for time Δt consistent with uncertainty
                    </td>
                    <td className="px-6 py-4">
                      Alpha decay: barrier penetration time ~10⁻²¹ s with energy uncertainty ~1 MeV
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Measurement Duration</td>
                    <td className="px-6 py-4">
                      To measure energy to precision ΔE requires measurement time Δt ≥ ℏ/(2ΔE)
                    </td>
                    <td className="px-6 py-4">
                      1 eV precision requires at least Δt ≥ 3 × 10⁻¹⁶ s measurement
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">
              Quantum vs Classical: Comparing Scales
            </h3>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              The uncertainty principle matters only when ΔxΔp approaches ℏ/2 ≈ 5 × 10⁻³⁵ J·s. Let's compare different scales:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg">
                <thead className="bg-gray-100 dark:bg-gray-600">
                  <tr>
                    <th className="px-6 py-3 border-b border-gray-300 dark:border-gray-500 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                      Object
                    </th>
                    <th className="px-6 py-3 border-b border-gray-300 dark:border-gray-500 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                      Δx
                    </th>
                    <th className="px-6 py-3 border-b border-gray-300 dark:border-gray-500 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                      Minimum Δp
                    </th>
                    <th className="px-6 py-3 border-b border-gray-300 dark:border-gray-500 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                      ΔxΔp / (ℏ/2)
                    </th>
                    <th className="px-6 py-3 border-b border-gray-300 dark:border-gray-500 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                      Observable?
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr className="border-b border-gray-200 dark:border-gray-600">
                    <td className="px-6 py-4">Electron in atom</td>
                    <td className="px-6 py-4">10⁻¹⁰ m</td>
                    <td className="px-6 py-4">5 × 10⁻²⁵ kg·m/s</td>
                    <td className="px-6 py-4">~1</td>
                    <td className="px-6 py-4 font-semibold text-green-600 dark:text-green-400">YES - Critical</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-600">
                    <td className="px-6 py-4">Photon (visible)</td>
                    <td className="px-6 py-4">5 × 10⁻⁷ m</td>
                    <td className="px-6 py-4">1 × 10⁻²⁸ kg·m/s</td>
                    <td className="px-6 py-4">~1</td>
                    <td className="px-6 py-4 font-semibold text-green-600 dark:text-green-400">YES - Observable</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-600">
                    <td className="px-6 py-4">Dust particle (1 μm)</td>
                    <td className="px-6 py-4">10⁻⁶ m</td>
                    <td className="px-6 py-4">5 × 10⁻²⁹ kg·m/s</td>
                    <td className="px-6 py-4">~1</td>
                    <td className="px-6 py-4 font-semibold text-yellow-600 dark:text-yellow-400">Borderline</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-600">
                    <td className="px-6 py-4">Baseball (7 cm)</td>
                    <td className="px-6 py-4">0.07 m</td>
                    <td className="px-6 py-4">8 × 10⁻³⁴ kg·m/s</td>
                    <td className="px-6 py-4">~1</td>
                    <td className="px-6 py-4 font-semibold text-red-600 dark:text-red-400">NO - Negligible</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Human (1 m)</td>
                    <td className="px-6 py-4">1 m</td>
                    <td className="px-6 py-4">5 × 10⁻³⁵ kg·m/s</td>
                    <td className="px-6 py-4">~1</td>
                    <td className="px-6 py-4 font-semibold text-red-600 dark:text-red-400">NO - Impossible to observe</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              For macroscopic objects, ΔxΔp is so close to the minimum ℏ/2 that quantum effects are completely negligible. 
              For atomic and subatomic particles, the uncertainty principle dominates their behavior.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">
              Applications of the Uncertainty Principle
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
                  1. Atomic Stability
                </h4>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  Explains why electrons don't collapse into the nucleus. Confining an electron to nuclear dimensions 
                  (~10⁻¹⁵ m) would require Δp ~ 10⁻¹⁹ kg·m/s, giving kinetic energy ~100 MeV — far exceeding electrostatic 
                  attraction. The ground state orbital size (~10⁻¹⁰ m) minimizes total energy (kinetic + potential).
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                <h4 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-3">
                  2. Spectroscopy and Line Widths
                </h4>
                <p className="text-purple-800 dark:text-purple-200 text-sm">
                  Natural line broadening arises from ΔE·Δt ≥ ℏ/2. Excited states with finite lifetimes don't have perfectly 
                  defined energies, leading to Lorentzian spectral line shapes. Shorter lifetimes → broader lines. Used to 
                  measure excited state lifetimes from observed line widths.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 p-6 rounded-xl border border-green-200 dark:border-green-700">
                <h4 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-3">
                  3. Tunneling Phenomena
                </h4>
                <p className="text-green-800 dark:text-green-200 text-sm">
                  Quantum tunneling through classically forbidden barriers (alpha decay, ammonia inversion, scanning 
                  tunneling microscopy) relies on energy-time uncertainty. Particles "borrow" energy ΔE to overcome barriers, 
                  repaying it within Δt ≤ ℏ/(2ΔE). Essential for nuclear fusion in stars and modern electronics.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                <h4 className="text-lg font-semibold text-orange-900 dark:text-orange-100 mb-3">
                  4. Zero-Point Energy
                </h4>
                <p className="text-orange-800 dark:text-orange-200 text-sm">
                  Even at absolute zero, quantum systems retain "zero-point energy" because perfect rest (Δx = 0, Δp = 0) 
                  would violate the uncertainty principle. Explains why helium doesn't freeze at atmospheric pressure and 
                  why molecules vibrate even at 0 K. Estimated ~10²⁰ J/m³ vacuum energy density.
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/30 dark:to-red-800/30 p-6 rounded-xl border border-red-200 dark:border-red-700">
                <h4 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-3">
                  5. Particle Physics
                </h4>
                <p className="text-red-800 dark:text-red-200 text-sm">
                  Virtual particles mediating fundamental forces (photons for EM, gluons for strong force, W/Z bosons for 
                  weak force) exist for times Δt ~ ℏ/(2mc²). Determines force range: massless photons (Δt → ∞) give infinite 
                  range, massive W/Z bosons give short-range weak interaction (~10⁻¹⁸ m).
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/30 dark:to-yellow-800/30 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700">
                <h4 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-3">
                  6. Quantum Technologies
                </h4>
                <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                  Quantum computing uses superposition states that are fundamentally uncertain until measured. Quantum 
                  cryptography (BB84 protocol) exploits the fact that measuring one observable (position) disturbs its 
                  conjugate (momentum), making eavesdropping detectable. Quantum sensing approaches Heisenberg limit.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">
              How to Solve Uncertainty Principle Problems
            </h3>

            <div className="bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20 p-6 rounded-xl border border-cyan-200 dark:border-cyan-800 mb-6">
              <ol className="list-decimal pl-6 space-y-4 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>Identify the conjugate pair</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                    <li>Position (x) and momentum (p): use Δx·Δp ≥ ℏ/2</li>
                    <li>Energy (E) and time (t): use ΔE·Δt ≥ ℏ/2</li>
                    <li>Angular position (θ) and angular momentum (L): use Δθ·ΔL ≥ ℏ/2</li>
                  </ul>
                </li>
                <li>
                  <strong>Determine what's given and what to find</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                    <li>If given Δx, find minimum Δp using Δp = ℏ/(2Δx)</li>
                    <li>If given Δt (lifetime), find ΔE (line width) using ΔE = ℏ/(2Δt)</li>
                    <li>For velocity: Δv = Δp/m (need mass)</li>
                  </ul>
                </li>
                <li>
                  <strong>Use appropriate units and constants</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                    <li>ℏ = 1.055 × 10⁻³⁴ J·s (SI units)</li>
                    <li>Convert nm to m, eV to J as needed</li>
                    <li>Energy: 1 eV = 1.602 × 10⁻¹⁹ J</li>
                    <li>Remember ℏ/2 appears in inequalities, not ℏ</li>
                  </ul>
                </li>
                <li>
                  <strong>Interpret the physical meaning</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                    <li>Compare ΔxΔp to ℏ/2: close to minimum means quantum effects dominate</li>
                    <li>Large uncertainties at atomic scale are normal, not errors</li>
                    <li>For macroscopic objects, uncertainties are negligibly small</li>
                    <li>Connect to observables: line widths, tunneling rates, orbital sizes</li>
                  </ul>
                </li>
              </ol>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">
              Common Mistakes to Avoid
            </h3>

            <div className="space-y-4">
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-5 rounded-r-lg">
                <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">
                  1. Using h instead of ℏ in the inequality
                </h4>
                <p className="text-red-800 dark:text-red-200 text-sm mb-2">
                  <strong>Wrong:</strong> "Δx·Δp ≥ h/2 = 3.31 × 10⁻³⁴ J·s"
                </p>
                <p className="text-red-800 dark:text-red-200 text-sm">
                  <strong>Correct:</strong> "Δx·Δp ≥ ℏ/2 = 5.27 × 10⁻³⁵ J·s, where ℏ = h/(2π)"
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-5 rounded-r-lg">
                <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">
                  2. Thinking uncertainty means "measurement error"
                </h4>
                <p className="text-red-800 dark:text-red-200 text-sm mb-2">
                  <strong>Wrong:</strong> "If we build a better instrument, we can violate the uncertainty principle."
                </p>
                <p className="text-red-800 dark:text-red-200 text-sm">
                  <strong>Correct:</strong> "The uncertainty principle is fundamental — it's a property of quantum wavefunctions, 
                  not measurement precision. Even perfect instruments cannot violate ΔxΔp ≥ ℏ/2."
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-5 rounded-r-lg">
                <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">
                  3. Misinterpreting the energy-time relation
                </h4>
                <p className="text-red-800 dark:text-red-200 text-sm mb-2">
                  <strong>Wrong:</strong> "Time is uncertain, so we don't know when events happen."
                </p>
                <p className="text-red-800 dark:text-red-200 text-sm">
                  <strong>Correct:</strong> "Δt represents the timescale over which the system's energy is measured or the 
                  lifetime of a state. For stationary states (infinite lifetime), energy is perfectly defined. For decaying 
                  states, ΔE = ℏ/(2τ) gives natural line width."
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-5 rounded-r-lg">
                <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">
                  4. Applying it to macroscopic objects incorrectly
                </h4>
                <p className="text-red-800 dark:text-red-200 text-sm mb-2">
                  <strong>Wrong:</strong> "A baseball has huge momentum uncertainty because Δx is large."
                </p>
                <p className="text-red-800 dark:text-red-200 text-sm">
                  <strong>Correct:</strong> "For a baseball with Δx = 1 cm, Δp ≥ ℏ/(2Δx) = 5 × 10⁻³³ kg·m/s. For a 
                  0.145 kg baseball at 40 m/s (p = 5.8 kg·m/s), this relative uncertainty is 10⁻³³ — utterly negligible. 
                  Quantum effects are completely unobservable."
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">
              Quick Reference Guide
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-800">
                <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-3">Key Constants</h4>
                <ul className="space-y-2 text-sm text-indigo-800 dark:text-indigo-200">
                  <li>• Reduced Planck: ℏ = 1.055 × 10⁻³⁴ J·s</li>
                  <li>• Planck constant: h = 6.626 × 10⁻³⁴ J·s</li>
                  <li>• Relation: ℏ = h/(2π)</li>
                  <li>• Minimum product: ℏ/2 = 5.27 × 10⁻³⁵ J·s</li>
                  <li>• eV to J: 1 eV = 1.602 × 10⁻¹⁹ J</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 p-6 rounded-xl border border-pink-200 dark:border-pink-800">
                <h4 className="font-semibold text-pink-900 dark:text-pink-100 mb-3">Key Formulas</h4>
                <ul className="space-y-2 text-sm text-pink-800 dark:text-pink-200">
                  <li>• Position-momentum: Δx·Δp ≥ ℏ/2</li>
                  <li>• Energy-time: ΔE·Δt ≥ ℏ/2</li>
                  <li>• Velocity: Δv = Δp/m</li>
                  <li>• Line width: ΔE = ℏ/(2τ)</li>
                  <li>• Zero-point: E₀ = ℏω/2</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-6 rounded-xl border border-emerald-200 dark:border-emerald-800">
                <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-3">Typical Values</h4>
                <ul className="space-y-2 text-sm text-emerald-800 dark:text-emerald-200">
                  <li>• Atomic Δx: ~10⁻¹⁰ m (1 Å)</li>
                  <li>• Electron Δp: ~10⁻²⁴ kg·m/s</li>
                  <li>• Excited state τ: 10⁻⁸ to 10⁻⁹ s</li>
                  <li>• Natural line width: ~10⁻⁷ eV</li>
                  <li>• Virtual photon Δt: ~10⁻²¹ s</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-800">
                <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-3">Quick Checks</h4>
                <ul className="space-y-2 text-sm text-amber-800 dark:text-amber-200">
                  <li>• If Δx ~ 10⁻¹⁰ m → Δp ~ 10⁻²⁴ kg·m/s</li>
                  <li>• If τ ~ 10⁻⁸ s → ΔE ~ 10⁻²⁷ J ~ 10⁻⁸ eV</li>
                  <li>• Macroscopic: ΔxΔp ≫ ℏ/2 (negligible)</li>
                  <li>• Atomic: ΔxΔp ~ ℏ/2 (critical)</li>
                  <li>• Product units: J·s (action)</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
                Philosophical Implications
              </h4>
              <p className="text-blue-800 dark:text-blue-200 text-sm mb-3">
                The Heisenberg uncertainty principle represents a profound departure from classical determinism. In classical 
                physics, perfect knowledge of initial conditions allows prediction of all future states. Quantum mechanics 
                denies this possibility: not due to practical limitations, but because nature itself doesn't determine precise 
                values for conjugate observables simultaneously.
              </p>
              <p className="text-blue-800 dark:text-blue-200 text-sm">
                This isn't ignorance — it's indeterminacy. The electron doesn't "have" a definite position and momentum that 
                we merely fail to measure. Rather, these properties don't exist with arbitrary precision until measured. This 
                challenges notions of physical reality and causality, leading to interpretational debates (Copenhagen, many-worlds, 
                pilot-wave) that continue today. Yet the mathematical formalism (via non-commuting operators [x̂,p̂] = iℏ) is 
                unambiguous and experimentally confirmed to extraordinary precision.
              </p>
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
                        href="/quantum-calculators/de-broglie-wavelength-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>De Broglie Wavelength Calculator</span>
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
                    <li>
                      <a
                        href="/atomic-structure-calculators/wavelength-energy-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Wavelength Energy Calculator</span>
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
                          href="/chemistry-formulas/heisenberg-uncertainty"
                          className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                        >
                          <span>→</span>
                          <span>Heisenberg Uncertainty Principle</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/chemistry-formulas/de-broglie-wavelength"
                          className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                        >
                          <span>→</span>
                          <span>De Broglie Wavelength Formula</span>
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
            "name": "Heisenberg Uncertainty Calculator",
            "description": "Heisenberg Uncertainty Calculator on ChemSolved",
            "url": "https://chemsolved.com/quantum-calculators/heisenberg-uncertainty-calculator",
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
                "name": "Heisenberg Uncertainty Calculator",
                "item": "https://chemsolved.com/quantum-calculators/heisenberg-uncertainty-calculator"
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