import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Bohr Model Formula',
  description: 'Calculate energy levels (E = -13.6Z²/n²) and orbital radius for hydrogen-like atoms. Master Bohr model, quantum numbers, and atomic spectral line predictions.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/bohr-model',
  },
  keywords: 'Bohr model, hydrogen atom, energy levels, atomic radius, quantum',
}

export default function BohrModelPage() {
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
            <li className="text-gray-900">Bohr Model Formula</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Bohr Model Formula</h1>
          <p className="text-lg opacity-90">Quantized energy levels in hydrogen-like atoms</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Understanding the Bohr Model</h2>
          <p className="text-gray-700 mb-4">
            In 1913, Danish physicist Niels Bohr revolutionized atomic theory by proposing a quantized model of the hydrogen atom that successfully explained the discrete emission spectra observed in laboratory experiments. Bohr's model introduced the radical concept that electrons orbit the nucleus only at specific allowed energy levels, rather than at any arbitrary distance. This groundbreaking work earned him the Nobel Prize in Physics in 1922 and laid the foundation for modern quantum mechanics.
          </p>
          <p className="text-gray-700 mb-4">
            The Bohr model elegantly combines classical mechanics with quantum postulates to predict electron energies and orbital radii in hydrogen-like atoms (atoms with a single electron, such as H, He⁺, Li²⁺). The model's greatest success was explaining the Rydberg formula for hydrogen spectral lines and calculating the Rydberg constant from first principles. While later replaced by the more complete quantum mechanical model using wave functions, the Bohr model remains invaluable for understanding atomic structure and electronic transitions, particularly in introductory chemistry and physics courses.
          </p>
          <p className="text-gray-700">
            The model's key insight—that angular momentum is quantized as L = nℏ where ℏ is the reduced Planck constant—leads directly to discrete energy levels and orbital radii. Although the Bohr model fails for multi-electron atoms and doesn't account for electron spin or wave properties, it provides accurate predictions for hydrogen-like systems and offers an intuitive framework for visualizing atomic transitions, photon emission, and absorption processes.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Energy Levels Formula</h2>
          <div className="bg-teal-50 border-l-4 border-teal-500 p-4 mb-4 text-center">
            <p className="text-3xl font-bold text-teal-700 mb-2">E<sub>n</sub> = -13.6 eV × Z² / n²</p>
            <p className="text-sm text-gray-600">Energy of electron in level n (hydrogen-like atoms)</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700 mb-4">
            <div className="bg-teal-50 p-3 rounded">
              <p><strong>E<sub>n</sub></strong> = energy of level n (eV or J)</p>
            </div>
            <div className="bg-teal-50 p-3 rounded">
              <p><strong>Z</strong> = atomic number (1 for H, 2 for He⁺)</p>
            </div>
            <div className="bg-teal-50 p-3 rounded">
              <p><strong>n</strong> = principal quantum number (1, 2, 3...)</p>
            </div>
            <div className="bg-teal-50 p-3 rounded">
              <p><strong>13.6 eV</strong> = Rydberg energy constant</p>
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded p-4">
            <p className="font-semibold text-blue-800 mb-2">Key Points:</p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Negative sign indicates electron is bound to nucleus (energy required to remove)</li>
              <li>Energy increases (becomes less negative) as n increases</li>
              <li>Ground state (n = 1) has lowest energy: E₁ = -13.6 Z² eV</li>
              <li>As n → ∞, E → 0 (electron escapes, ionization)</li>
              <li>Higher Z (more protons) increases binding energy proportionally to Z²</li>
            </ul>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Orbital Radius Formula</h2>
          <div className="bg-teal-50 border-l-4 border-teal-500 p-4 mb-4 text-center">
            <p className="text-2xl font-semibold text-teal-700 mb-2">r<sub>n</sub> = a₀ n² / Z</p>
            <p className="text-gray-700">where a₀ = 0.529 Å = 5.29 × 10⁻¹¹ m (Bohr radius)</p>
          </div>
          <p className="text-gray-700 mb-3">The orbital radius increases with the square of the principal quantum number (n²), meaning higher energy levels are exponentially farther from the nucleus. For hydrogen (Z = 1), the electron in n = 2 orbits at 4 times the Bohr radius, while n = 3 orbits at 9 times the Bohr radius. This quantization explains why electrons don't spiral into the nucleus—they can only exist at specific discrete distances.</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Detailed Example 1: Hydrogen First Excited State (n = 2)</h2>
          <p className="text-gray-700 mb-3"><strong>Problem:</strong> Calculate the energy and orbital radius for a hydrogen atom electron in the n = 2 state.</p>
          <div className="bg-gray-50 p-4 rounded mb-3">
            <p className="font-semibold text-gray-800 mb-2">Step 1: Calculate Energy</p>
            <div className="space-y-2 text-gray-700 ml-4">
              <p>Given: Z = 1 (hydrogen), n = 2</p>
              <p>E₂ = -13.6 eV × (1)² / (2)²</p>
              <p>E₂ = -13.6 eV / 4</p>
              <p>E₂ = <strong>-3.4 eV</strong></p>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded mb-3">
            <p className="font-semibold text-gray-800 mb-2">Step 2: Calculate Orbital Radius</p>
            <div className="space-y-2 text-gray-700 ml-4">
              <p>r₂ = 0.529 Å × (2)² / (1)</p>
              <p>r₂ = 0.529 Å × 4</p>
              <p>r₂ = <strong>2.116 Å</strong></p>
            </div>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4">
            <p className="font-semibold text-green-800">Answer: E₂ = -3.4 eV, r₂ = 2.12 Å</p>
            <p className="text-gray-700 mt-2">The n = 2 level has 1/4 the binding energy and 4 times the radius of the ground state.</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Detailed Example 2: He⁺ Ion Ground State</h2>
          <p className="text-gray-700 mb-3"><strong>Problem:</strong> Calculate the ground state energy and radius for a He⁺ ion (one electron, Z = 2).</p>
          <div className="bg-gray-50 p-4 rounded mb-3">
            <div className="space-y-2 text-gray-700">
              <p><strong>Energy:</strong> E₁ = -13.6 eV × (2)² / (1)² = -13.6 × 4 = <strong>-54.4 eV</strong></p>
              <p><strong>Radius:</strong> r₁ = 0.529 Å × (1)² / (2) = <strong>0.265 Å</strong></p>
            </div>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4">
            <p className="font-semibold text-green-800">Interpretation:</p>
            <p className="text-gray-700">He⁺ has 4 times stronger binding energy than H due to doubled nuclear charge (Z² effect). The orbital is half the size, pulling the electron closer to the nucleus.</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Electronic Transitions &amp; Photon Energy</h2>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-4">
            <p className="text-2xl font-semibold text-purple-700 mb-2">ΔE = E<sub>final</sub> - E<sub>initial</sub></p>
            <p className="text-xl text-purple-700">ΔE = -13.6 Z² eV × (1/n<sub>f</sub>² - 1/n<sub>i</sub>²)</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-red-50 p-4 rounded border-l-4 border-red-500">
              <p className="font-semibold text-red-700 mb-2">Emission (n<sub>f</sub> &lt; n<sub>i</sub>)</p>
              <p className="text-gray-700">Electron drops to lower level, photon emitted. ΔE is negative (energy released), photon energy E<sub>photon</sub> = |ΔE| = hν = hc/λ.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
              <p className="font-semibold text-blue-700 mb-2">Absorption (n<sub>f</sub> &gt; n<sub>i</sub>)</p>
              <p className="text-gray-700">Electron jumps to higher level, photon absorbed. ΔE is positive, matching the energy of the absorbed photon.</p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded mb-3">
            <p className="font-semibold text-gray-800 mb-3">Example: Balmer Series Transition (n = 3 → n = 2) in Hydrogen</p>
            <div className="space-y-2 text-gray-700 ml-4">
              <p>ΔE = -13.6 eV × [(1/2²) - (1/3²)]</p>
              <p>ΔE = -13.6 eV × [(1/4) - (1/9)]</p>
              <p>ΔE = -13.6 eV × [(9 - 4)/36] = -13.6 × (5/36)</p>
              <p>ΔE = <strong>-1.89 eV</strong> (negative = emission)</p>
              <p>Photon energy: E<sub>photon</sub> = 1.89 eV</p>
              <p>Wavelength: λ = hc/E = (1240 eV·nm) / 1.89 eV = <strong>656 nm (red light)</strong></p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Key Applications &amp; Concepts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-teal-700 mb-2">1. Spectroscopy &amp; Emission Lines</h3>
              <p className="text-gray-700">The Bohr model explains hydrogen's discrete spectral lines (Lyman, Balmer, Paschen series). Each series corresponds to transitions ending at a specific n level: Lyman (n → 1, UV), Balmer (n → 2, visible), Paschen (n → 3, IR).</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-teal-700 mb-2">2. Ionization Energy</h3>
              <p className="text-gray-700">The energy required to remove an electron (ionization) equals |E<sub>n</sub>|. For hydrogen ground state: 13.6 eV. For He⁺: 54.4 eV. This Z² dependence explains periodic trends in ionization energy.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-teal-700 mb-2">3. Astrophysics &amp; Stellar Spectra</h3>
              <p className="text-gray-700">Astronomers use Bohr model calculations to identify elements in distant stars by analyzing absorption and emission lines. The presence of hydrogen Balmer lines indicates stellar temperatures around 10,000 K.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-teal-700 mb-2">4. Quantum Number Foundation</h3>
              <p className="text-gray-700">The principal quantum number n in Bohr's model became the primary quantum number in modern quantum mechanics, describing electron shells (K, L, M shells for n = 1, 2, 3).</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Mistakes &amp; Tips</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-3 rounded">
              <h3 className="font-semibold text-red-700 mb-1">Forgetting the Negative Sign</h3>
              <p className="text-gray-700">Energy levels are negative because they represent bound states. E = 0 means the electron is free (ionized). More negative = more stable/bound.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-3 rounded">
              <h3 className="font-semibold text-red-700 mb-1">Applying to Multi-Electron Atoms</h3>
              <p className="text-gray-700">Bohr model only works accurately for hydrogen-like atoms (one electron). For helium, lithium, etc., electron-electron repulsion requires quantum mechanical treatment.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-3 rounded">
              <h3 className="font-semibold text-red-700 mb-1">Confusing Emission vs Absorption</h3>
              <p className="text-gray-700">Emission: electron drops (n<sub>i</sub> &gt; n<sub>f</sub>), ΔE negative, photon emitted. Absorption: electron rises (n<sub>i</sub> &lt; n<sub>f</sub>), ΔE positive, photon absorbed.</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4 bg-yellow-50 p-3 rounded">
              <h3 className="font-semibold text-yellow-700 mb-1">Pro Tip: Energy Conversion</h3>
              <p className="text-gray-700">Remember: 1 eV = 1.602 × 10⁻¹⁹ J. For photon wavelength: λ (nm) = 1240 eV·nm / E (eV). This shortcut saves time in spectroscopy problems.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/quantum-and-atomic-structure-calculators/bohr-model-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Bohr Model Calculator</h3>
              <p className="text-sm text-gray-600">Calculate energy levels and transitions</p>
            </a>
            <a href="/quantum-and-atomic-structure-calculators/wavelength-energy-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Wavelength-Energy Calculator</h3>
              <p className="text-sm text-gray-600">Convert between wavelength and energy</p>
            </a>
            <a href="/chemistry-formulas/rydberg-equation" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Rydberg Equation</h3>
              <p className="text-sm text-gray-600">Hydrogen spectral lines</p>
            </a>
            <a href="/chemistry-formulas/planck-equation" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Planck Equation</h3>
              <p className="text-sm text-gray-600">E = hν photon energy</p>
            </a>
            <a href="/quantum-and-atomic-structure-calculators" className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">All Quantum & Atomic Structure Calculators</h3>
              <p className="text-sm opacity-90">Explore all quantum and atomic tools</p>
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
            "headline": "Bohr Model",
            "description": "Bohr Model on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/bohr-model",
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
                "name": "Bohr Model",
                "item": "https://chemsolved.com/chemistry-formulas/bohr-model"
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
