import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Heisenberg Uncertainty Principle',
  description: 'Master Heisenberg Uncertainty Principle (ΔxΔp ≥ h/4π). Understand fundamental limits on measuring position and momentum simultaneously in quantum mechanics.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/heisenberg-uncertainty',
  },
  keywords: 'Heisenberg uncertainty, quantum mechanics, position momentum',
}

export default function HeisenbergUncertaintyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <nav className="text-sm breadcrumbs mb-8">
          <ul className="flex space-x-2 text-gray-600">
            <li><a href="/" className="hover:text-blue-600">Home</a></li>
            <li><span className="mx-2">/</span></li>
            <li><a href="/chemistry-formulas" className="hover:text-blue-600">Chemistry Formulas</a></li>
            <li><span className="mx-2">/</span></li>
            <li className="text-gray-900">Heisenberg Uncertainty Principle</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Heisenberg Uncertainty Principle</h1>
          <p className="text-lg opacity-90">Fundamental limit on measurement precision</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Understanding the Uncertainty Principle</h2>
          <p className="text-gray-700 mb-4">
            The Heisenberg Uncertainty Principle, formulated by Werner Heisenberg in 1927, states that certain pairs of physical properties (conjugate variables) cannot both be known to arbitrary precision simultaneously. The most famous example involves position and momentum: the more precisely we know a particle's position, the less precisely we can know its momentum, and vice versa. This fundamental limit arises not from measurement imperfections but from the wave-particle duality inherent in quantum mechanics—a profound departure from classical physics.
          </p>
          <p className="text-gray-700 mb-4">
            The principle challenges our classical intuition that objects have definite positions and momenta at all times. In quantum mechanics, particles are described by wave functions that spread over space and momentum. Confining a particle to a smaller region (reducing Δx) requires a wave function with more frequency components (increasing Δp). The product of these uncertainties has a lower bound set by Planck's constant divided by 4π, establishing an inescapable trade-off between conjugate measurements.
          </p>
          <p className="text-gray-700 mb-4">
            The uncertainty principle has profound implications for chemistry and physics. It explains why electrons don't collapse into atomic nuclei—confining an electron to nuclear dimensions would give it enormous kinetic energy. It governs electron behavior in chemical bonds, sets limits on spectroscopic resolution, and underpins tunneling phenomena in radioactive decay and enzyme catalysis. The principle also applies to energy and time: short-lived excited states have inherently uncertain energies, explaining the natural broadening of spectral lines.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">The Formula</h2>
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-indigo-700">Δx · Δp ≥ h / (4π)</p>
            <p className="text-lg text-indigo-700 mt-2">or Δx · Δp ≥ ℏ / 2</p>
            <p className="text-lg text-indigo-700 mt-3">Also: ΔE · Δt ≥ ℏ / 2</p>
          </div>
          <p className="text-gray-700 mb-4">Fundamental limits on simultaneous precision of conjugate variable measurements.</p>
          
          <div className="mt-4 space-y-3">
            <div className="flex items-start">
              <span className="font-semibold text-gray-800 min-w-[120px]">Δx:</span>
              <span className="text-gray-700">Uncertainty (standard deviation) in position measurement (meters)</span>
            </div>
            <div className="flex items-start">
              <span className="font-semibold text-gray-800 min-w-[120px]">Δp:</span>
              <span className="text-gray-700">Uncertainty in momentum measurement (kg·m/s)</span>
            </div>
            <div className="flex items-start">
              <span className="font-semibold text-gray-800 min-w-[120px]">h:</span>
              <span className="text-gray-700">Planck constant = 6.626 × 10⁻³⁴ J·s</span>
            </div>
            <div className="flex items-start">
              <span className="font-semibold text-gray-800 min-w-[120px]">ℏ (h-bar):</span>
              <span className="text-gray-700">Reduced Planck constant = h/(2π) = 1.055 × 10⁻³⁴ J·s</span>
            </div>
            <div className="flex items-start">
              <span className="font-semibold text-gray-800 min-w-[120px]">ΔE:</span>
              <span className="text-gray-700">Uncertainty in energy (joules)</span>
            </div>
            <div className="flex items-start">
              <span className="font-semibold text-gray-800 min-w-[120px]">Δt:</span>
              <span className="text-gray-700">Uncertainty in time or lifetime of state (seconds)</span>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
            <h3 className="font-semibold text-blue-900 mb-2">Key Points:</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>This is a fundamental property of nature, not a limitation of measurement technology</li>
              <li>The inequality means the product of uncertainties has a minimum value</li>
              <li>For macroscopic objects, h is so small that uncertainties are negligible</li>
              <li>For electrons, atoms, and molecules, the effect is significant</li>
            </ul>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Step-by-Step Example</h2>
          <p className="text-gray-700 mb-3"><strong>Problem:</strong> An electron's position is known within Δx = 1.0 × 10⁻¹⁰ m (atomic scale). What is the minimum uncertainty in its velocity?</p>
          <p className="text-gray-700 mb-4"><strong>Given:</strong> Δx = 1.0 × 10⁻¹⁰ m, h = 6.626 × 10⁻³⁴ J·s, electron mass m<sub>e</sub> = 9.109 × 10⁻³¹ kg</p>
          
          <div className="bg-gray-50 p-4 rounded mb-4">
            <p className="font-semibold text-gray-800 mb-2">Step 1: Calculate Minimum Δp</p>
            <p className="text-gray-700">Δp ≥ h / (4πΔx) = (6.626 × 10⁻³⁴) / (4π × 1.0 × 10⁻¹⁰)</p>
            <p className="text-gray-700 mt-1">Δp ≥ (6.626 × 10⁻³⁴) / (1.257 × 10⁻⁹) = 5.27 × 10⁻²⁵ kg·m/s</p>
          </div>

          <div className="bg-gray-50 p-4 rounded mb-4">
            <p className="font-semibold text-gray-800 mb-2">Step 2: Relate Momentum to Velocity</p>
            <p className="text-gray-700">Since p = mv, we have Δp = mΔv</p>
            <p className="text-gray-700 mt-1">Therefore: Δv = Δp / m</p>
          </div>

          <div className="bg-gray-50 p-4 rounded mb-4">
            <p className="font-semibold text-gray-800 mb-2">Step 3: Calculate Δv</p>
            <p className="text-gray-700">Δv ≥ (5.27 × 10⁻²⁵) / (9.109 × 10⁻³¹)</p>
            <p className="text-gray-700 mt-1">Δv ≥ 5.8 × 10⁵ m/s = 580 km/s</p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: Δv ≥ 5.8 × 10⁵ m/s (580 km/s)</p>
            <p className="text-sm text-gray-600 mt-1">This enormous velocity uncertainty (~0.2% speed of light) illustrates why electrons in atoms cannot have well-defined orbits like planets.</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Key Applications</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Atomic Structure and Stability</h3>
            <p className="text-gray-700">
              The uncertainty principle explains why electrons don't collapse into the nucleus. Confining an electron to nuclear dimensions (~10⁻¹⁵ m) would require Δp so large that the kinetic energy would exceed the electrostatic attraction. Atoms are stable because electron confinement to atomic dimensions (~10⁻¹⁰ m) balances kinetic and potential energies at measurable sizes.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Spectral Line Broadening</h3>
            <p className="text-gray-700">
              Excited atomic states with short lifetimes (Δt) have uncertain energies (ΔE) according to ΔEΔt ≥ ℏ/2. This natural line broadening limits spectroscopic resolution. For example, an excited state lasting 10⁻⁸ s has ΔE ≈ 10⁻²⁶ J, corresponding to frequency uncertainty of about 10⁷ Hz.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">3. Quantum Tunneling</h3>
            <p className="text-gray-700">
              The uncertainty principle allows particles to penetrate energy barriers they classically couldn't surmount. Energy-time uncertainty means a particle can "borrow" energy for brief periods, enabling tunneling through barriers. This phenomenon is crucial in radioactive decay, scanning tunneling microscopy, and enzyme-catalyzed reactions.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">4. Chemical Bonding and Molecular Orbitals</h3>
            <p className="text-gray-700">
              Electrons in molecules are delocalized over multiple atoms because confining them to individual atoms would require excessive kinetic energy. Molecular orbital theory, which describes bonding, antibonding, and nonbonding orbitals, fundamentally relies on the uncertainty principle's predictions about electron distribution and energies.
            </p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Scale Comparison Table</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">System</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Δx (m)</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Minimum Δp (kg·m/s)</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Effect</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Baseball (0.15 kg)</td>
                  <td className="border border-gray-300 px-4 py-2">10⁻³ (1 mm)</td>
                  <td className="border border-gray-300 px-4 py-2">5 × 10⁻³²</td>
                  <td className="border border-gray-300 px-4 py-2">Negligible (Δv ~ 10⁻³¹ m/s)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Dust particle (10⁻¹² kg)</td>
                  <td className="border border-gray-300 px-4 py-2">10⁻⁶ (1 μm)</td>
                  <td className="border border-gray-300 px-4 py-2">5 × 10⁻²⁹</td>
                  <td className="border border-gray-300 px-4 py-2">Negligible</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Proton in nucleus</td>
                  <td className="border border-gray-300 px-4 py-2">10⁻¹⁵</td>
                  <td className="border border-gray-300 px-4 py-2">5 × 10⁻²⁰</td>
                  <td className="border border-gray-300 px-4 py-2">Significant (Δv ~ 10⁷ m/s)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Electron in atom</td>
                  <td className="border border-gray-300 px-4 py-2">10⁻¹⁰</td>
                  <td className="border border-gray-300 px-4 py-2">5 × 10⁻²⁵</td>
                  <td className="border border-gray-300 px-4 py-2">Dominant (Δv ~ 10⁶ m/s)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Electron in crystal</td>
                  <td className="border border-gray-300 px-4 py-2">10⁻⁸</td>
                  <td className="border border-gray-300 px-4 py-2">5 × 10⁻²⁷</td>
                  <td className="border border-gray-300 px-4 py-2">Observable delocalization</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Mistakes to Avoid</h2>
          <div className="space-y-4">
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="font-semibold text-red-900 mb-2">Mistake 1: Thinking It's About Measurement Disturbance</h3>
              <p className="text-gray-700">The uncertainty principle is NOT about disturbing a system during measurement. It's a fundamental property: particles don't have definite position and momentum simultaneously, regardless of observation.</p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="font-semibold text-red-900 mb-2">Mistake 2: Using h Instead of h/(4π)</h3>
              <p className="text-gray-700">The correct formula has h/(4π) or equivalently ℏ/2, where ℏ = h/(2π). Using just h overestimates the minimum uncertainty product by a factor of 2π.</p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="font-semibold text-red-900 mb-2">Mistake 3: Applying to Macroscopic Objects</h3>
              <p className="text-gray-700">For everyday objects, h is so small that quantum uncertainties are immeasurably tiny. The principle only matters for atomic and subatomic scales where masses are tiny and dimensions are small.</p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="font-semibold text-red-900 mb-2">Mistake 4: Confusing Standard Deviation with Total Range</h3>
              <p className="text-gray-700">Δx and Δp are standard deviations, not maximum ranges. The actual spread of measurements can be larger. The principle sets a minimum for the product of these standard deviations.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/quantum-and-atomic-structure-calculators/heisenberg-uncertainty-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Heisenberg Uncertainty Calculator</h3>
              <p className="text-sm text-gray-600">Calculate Δx and Δp limits</p>
            </a>
            <a href="/quantum-and-atomic-structure-calculators/de-broglie-wavelength-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">De Broglie Wavelength Calculator</h3>
              <p className="text-sm text-gray-600">Matter wave calculations</p>
            </a>
            <a href="/chemistry-formulas/de-broglie-wavelength" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">De Broglie Wavelength Formula</h3>
              <p className="text-sm text-gray-600">λ = h/p for matter waves</p>
            </a>
            <a href="/chemistry-formulas/planck-equation" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Planck Equation</h3>
              <p className="text-sm text-gray-600">E = hν photon energy</p>
            </a>
            <a href="/quantum-calculators/heisenberg-uncertainty-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Heisenberg Uncertainty Calculator</h3>
              <p className="text-sm text-gray-600">Automated Δx and Δp calculations</p>
            </a>
            <a href="/quantum-calculators" className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">All Quantum Calculators</h3>
              <p className="text-sm opacity-90">Explore all quantum mechanics tools</p>
            </a>
          </div>
        </section>
      
      {/* Structured Data - EducationalArticle */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": "Heisenberg Uncertainty",
            "description": "Heisenberg Uncertainty on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/heisenberg-uncertainty",
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
                "name": "Heisenberg Uncertainty",
                "item": "https://chemsolved.com/chemistry-formulas/heisenberg-uncertainty"
              }
            ]
          })
        }}
      />
      </main>
      <Footer />
    </div>
  )
}
