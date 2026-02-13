import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Lattice Energy Formula',
  description: 'Calculate ionic solid stability using Born-Haber cycle and lattice energy.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/lattice-energy',
  },
  keywords: 'lattice energy, Born-Haber cycle, ionic compounds, crystal energy',
}

export default function LatticeEnergyPage() {
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
            <li className="text-gray-900">Lattice Energy</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Lattice Energy</h1>
          <p className="text-lg opacity-90">Energy to separate ionic solid into gaseous ions</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Understanding Lattice Energy</h2>
          <p className="text-gray-700 mb-4">
            Lattice energy is the energy required to completely separate one mole of an ionic solid into gaseous ions, or conversely, the energy released when gaseous ions combine to form one mole of ionic solid. It's a measure of the strength of ionic bonds and the stability of ionic crystals. Higher lattice energies indicate stronger ionic bonding and more stable compounds.
          </p>
          <p className="text-gray-700 mb-4">
            The concept was developed through theoretical work by Max Born and Fritz Haber in the early 20th century. The Born-Haber cycle, named after them, uses Hess's law to calculate lattice energy indirectly from measurable thermochemical quantities. Direct measurement is impossible because we cannot physically separate ionic solids into gaseous ions in a single step.
          </p>
          <p className="text-gray-700">
            Lattice energy depends primarily on ionic charges and ionic radii following Coulomb's law. Compounds with highly charged ions (like Mg²⁺O²⁻) and small ionic radii have much higher lattice energies than those with singly charged larger ions (like Cs⁺I⁻). This explains periodic trends in melting points, solubility, and hardness of ionic compounds.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Born-Haber Cycle</h2>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-4">
            <p className="text-center text-xl font-bold text-purple-700 mb-3">ΔH<sub>f</sub> = ΔH<sub>sub</sub> + ΔH<sub>ion</sub> + ΔH<sub>diss</sub> + ΔH<sub>EA</sub> + U</p>
            <p className="text-center text-sm text-gray-600">Rearranged to solve for lattice energy U</p>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li><strong>U</strong> = lattice energy (target quantity)</li>
            <li><strong>ΔH<sub>f</sub></strong> = standard enthalpy of formation (measured)</li>
            <li><strong>ΔH<sub>sub</sub></strong> = sublimation enthalpy of metal</li>
            <li><strong>ΔH<sub>ion</sub></strong> = ionization energy(ies) of metal</li>
            <li><strong>ΔH<sub>diss</sub></strong> = bond dissociation energy of nonmetal</li>
            <li><strong>ΔH<sub>EA</sub></strong> = electron affinity of nonmetal</li>
          </ul>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
            <p className="font-semibold text-blue-800 mb-2">Thermochemical Cycle Steps:</p>
            <p className="text-gray-700 text-sm">1. Sublimate solid metal to gas | 2. Ionize metal atoms | 3. Dissociate nonmetal molecules | 4. Add electrons to nonmetal | 5. Form ionic lattice (releases U)</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Coulombic Estimation (Born-Landé Equation)</h2>
          <div className="bg-purple-50 p-4 rounded mb-3">
            <p className="text-center text-lg font-semibold text-purple-700 mb-2">U = (N<sub>A</sub> M z⁺ z⁻ e²) / (4π ε₀ r₀) × (1 - 1/n)</p>
            <p className="text-center text-sm text-gray-600">Simplified: U ∝ (Q₊ × Q₋) / r</p>
          </div>
          <div className="text-gray-700 space-y-2">
            <p><strong>Key Relationships:</strong></p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Lattice energy increases with higher ionic charges (z⁺, z⁻)</li>
              <li>Lattice energy increases with smaller ionic radii (r₀)</li>
              <li>Madelung constant (M) accounts for crystal structure geometry</li>
              <li>Born exponent (n) relates to electron compressibility</li>
            </ul>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Detailed Example: NaCl</h2>
          <p className="text-gray-700 mb-3">Calculate lattice energy using Born-Haber cycle with experimental thermodynamic data:</p>
          <div className="space-y-2 text-gray-700 bg-gray-50 p-4 rounded">
            <p><strong>Step 1: Gather data (all per mole)</strong></p>
            <p>ΔH<sub>f</sub>(NaCl, s) = -411 kJ/mol</p>
            <p>ΔH<sub>sub</sub>(Na, s → g) = +108 kJ/mol</p>
            <p>IE₁(Na, g → Na⁺) = +496 kJ/mol</p>
            <p>½ ΔH<sub>diss</sub>(Cl₂, g → 2Cl) = +122 kJ/mol</p>
            <p>EA(Cl, g → Cl⁻) = -349 kJ/mol</p>
            
            <p className="mt-3"><strong>Step 2: Apply Hess's Law</strong></p>
            <p>ΔH<sub>f</sub> = ΔH<sub>sub</sub> + IE + ½ΔH<sub>diss</sub> + EA + U</p>
            
            <p className="mt-3"><strong>Step 3: Solve for U</strong></p>
            <p>U = ΔH<sub>f</sub> - (ΔH<sub>sub</sub> + IE + ½ΔH<sub>diss</sub> + EA)</p>
            <p>U = -411 - (108 + 496 + 122 - 349)</p>
            <p>U = -411 - 377 = -788 kJ/mol</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: U ≈ -788 kJ/mol</p>
            <p className="text-sm text-gray-600 mt-2">Negative sign indicates energy released when lattice forms (exothermic). Some texts report as +788 kJ/mol for lattice dissociation.</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Factors Affecting Lattice Energy</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 p-4 rounded">
              <h3 className="font-semibold text-red-900 mb-2">Ionic Charge</h3>
              <p className="text-gray-700 text-sm">Higher charges produce much larger lattice energies. MgO (Mg²⁺, O²⁻) has U ≈ -3850 kJ/mol vs NaCl (Na⁺, Cl⁻) at -788 kJ/mol — nearly 5× greater!</p>
            </div>
            <div className="bg-blue-50 p-4 rounded">
              <h3 className="font-semibold text-blue-900 mb-2">Ionic Size</h3>
              <p className="text-gray-700 text-sm">Smaller ions pack closer together, increasing electrostatic attraction. LiF (small ions) has -1037 kJ/mol while CsI (large ions) has only -600 kJ/mol.</p>
            </div>
            <div className="bg-green-50 p-4 rounded">
              <h3 className="font-semibold text-green-900 mb-2">Crystal Structure</h3>
              <p className="text-gray-700 text-sm">Different arrangements (NaCl-type, CsCl-type, fluorite) have different Madelung constants affecting lattice energy by 5-10%.</p>
            </div>
            <div className="bg-purple-50 p-4 rounded">
              <h3 className="font-semibold text-purple-900 mb-2">Polarization Effects</h3>
              <p className="text-gray-700 text-sm">Covalent character (ion polarization) in compounds like AgI reduces lattice energy compared to purely ionic model predictions.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Comparative Lattice Energies</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-gray-700">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left">Compound</th>
                  <th className="px-4 py-2 text-left">Ion Charges</th>
                  <th className="px-4 py-2 text-left">Lattice Energy (kJ/mol)</th>
                  <th className="px-4 py-2 text-left">Melting Point (°C)</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="px-4 py-2">LiF</td>
                  <td className="px-4 py-2">+1, -1</td>
                  <td className="px-4 py-2">-1037</td>
                  <td className="px-4 py-2">842</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">NaCl</td>
                  <td className="px-4 py-2">+1, -1</td>
                  <td className="px-4 py-2">-788</td>
                  <td className="px-4 py-2">801</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">MgO</td>
                  <td className="px-4 py-2">+2, -2</td>
                  <td className="px-4 py-2">-3850</td>
                  <td className="px-4 py-2">2852</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">CaO</td>
                  <td className="px-4 py-2">+2, -2</td>
                  <td className="px-4 py-2">-3520</td>
                  <td className="px-4 py-2">2613</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">CsI</td>
                  <td className="px-4 py-2">+1, -1</td>
                  <td className="px-4 py-2">-600</td>
                  <td className="px-4 py-2">621</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-3">Notice: Higher lattice energy correlates with higher melting point.</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Applications and Implications</h2>
          <div className="space-y-3 text-gray-700">
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-gray-800 mb-2">Melting and Boiling Points</h3>
              <p>Higher lattice energies require more thermal energy to overcome ionic attractions, resulting in higher melting and boiling points.</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-gray-800 mb-2">Solubility in Water</h3>
              <p>Solubility depends on competition between lattice energy and hydration energy. High lattice energy reduces solubility unless hydration energy is also very high.</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-gray-800 mb-2">Hardness of Solids</h3>
              <p>Ionic compounds with high lattice energies (like corundum Al₂O₃) are extremely hard materials.</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-gray-800 mb-2">Predicting Compound Formation</h3>
              <p>Lattice energy calculations help predict whether ionic compound formation is thermodynamically favorable.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Important Notes</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li><strong>Sign Convention:</strong> Some sources define U as energy required to break lattice (+), others as energy released forming it (-). Check context.</li>
            <li><strong>Magnitude Matters:</strong> Regardless of sign convention, larger |U| means more stable ionic compound.</li>
            <li><strong>MgO vs NaCl:</strong> MgO has much higher lattice energy due to +2/-2 charges producing 4× stronger Coulombic attraction.</li>
            <li><strong>Periodic Trends:</strong> Within a group, lattice energy decreases down (larger ions). Across period, generally increases (smaller ions, higher charge).</li>
            <li><strong>Cannot Measure Directly:</strong> Born-Haber cycle is essential because lattice energy cannot be measured experimentally in a single step.</li>
            <li><strong>Theoretical Models:</strong> Born-Landé and Kapustinskii equations provide theoretical estimates agreeing well with Born-Haber cycle results.</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/thermodynamics-calculators/lattice-energy-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Lattice Energy Calculator</h3>
              <p className="text-sm text-gray-600">Calculate lattice energy</p>
            </a>
            <a href="/thermodynamics-calculators/enthalpy-reaction-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Enthalpy Reaction Calculator</h3>
              <p className="text-sm text-gray-600">Calculate reaction enthalpy</p>
            </a>
            <a href="/thermodynamics-calculators" className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">All Thermodynamics Calculators</h3>
              <p className="text-sm opacity-90">Explore all thermodynamics tools</p>
            </a>
            <a href="/chemistry-formulas/hess-law" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Hess's Law</h3>
              <p className="text-sm text-gray-600">Born-Haber cycle calculations</p>
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
            "headline": "Lattice Energy",
            "description": "Lattice Energy on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/lattice-energy",
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
                "name": "Lattice Energy",
                "item": "https://chemsolved.com/chemistry-formulas/lattice-energy"
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
