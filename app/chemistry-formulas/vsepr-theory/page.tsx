import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'VSEPR Theory',
  description: 'Predict molecular geometry using Valence Shell Electron Pair Repulsion theory.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/vsepr-theory',
  },
  keywords: 'VSEPR theory, molecular geometry, electron pairs, bond angles, Lewis structure',
}

export default function VSEPRTheoryPage() {
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
            <li className="text-gray-900">VSEPR Theory</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">VSEPR Theory</h1>
          <p className="text-lg opacity-90">Predict 3D molecular shapes from electron pairs</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Understanding VSEPR Theory</h2>
          <p className="text-gray-700 mb-4">
            Valence Shell Electron Pair Repulsion (VSEPR) theory is a fundamental model in chemistry developed by Ronald Gillespie and Ronald Nyholm in 1957. This theory provides a systematic method for predicting the three-dimensional shapes of molecules based on the electrostatic repulsion between electron pairs in the valence shell of the central atom. The underlying principle is elegantly simple: electron pairs, whether bonding or non-bonding, repel each other and will arrange themselves to be as far apart as possible, minimizing electron-electron repulsion and creating the most stable molecular geometry.
          </p>
          <p className="text-gray-700 mb-4">
            The power of VSEPR theory lies in its ability to predict molecular geometry using only Lewis structures as a starting point. By counting the number of electron groups around a central atom—including both bonding pairs (single, double, or triple bonds count as one group) and lone pairs—chemists can accurately predict bond angles and molecular shapes. This theory is essential for understanding molecular polarity, reactivity, and physical properties such as boiling point and solubility.
          </p>
          <p className="text-gray-700">
            While VSEPR theory is highly successful for main group elements, it has limitations with transition metals and molecules with delocalized electrons. Despite these limitations, VSEPR remains one of the most widely taught and applied theories in introductory and advanced chemistry courses, providing students with an intuitive framework for visualizing molecular architecture.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Core Principle</h2>
          <div className="bg-cyan-50 border-l-4 border-cyan-500 p-4 mb-4">
            <p className="text-lg font-semibold text-cyan-700">Electron pairs repel to maximize distance</p>
            <p className="text-gray-700 mt-2">Regions of electron density (bonding + lone pairs) arrange themselves to minimize repulsion</p>
          </div>
          <div className="mt-4 space-y-3 text-gray-700">
            <p><strong>Key Rule:</strong> Multiple bonds (double or triple) count as a single electron group for geometry determination.</p>
            <p><strong>Electron vs Molecular Geometry:</strong> Electron geometry considers all electron groups (bonding + lone pairs), while molecular geometry describes only the positions of atoms.</p>
            <p><strong>Repulsion Hierarchy:</strong> Lone pair-lone pair repulsion &gt; lone pair-bonding pair repulsion &gt; bonding pair-bonding pair repulsion. This hierarchy explains why bond angles decrease when lone pairs are present.</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Geometries by Electron Groups</h2>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-semibold text-cyan-700">2 groups → Linear (180°)</p>
                <p>Example: CO₂, BeCl₂</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-semibold text-cyan-700">3 groups → Trigonal planar (120°)</p>
                <p>Example: BF₃, NO₃⁻</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-semibold text-cyan-700">4 groups → Tetrahedral (109.5°)</p>
                <p>Example: CH₄, NH₄⁺</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-semibold text-cyan-700">5 groups → Trigonal bipyramidal</p>
                <p>Example: PCl₅ (90°, 120°, 180°)</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-semibold text-cyan-700">6 groups → Octahedral (90°, 180°)</p>
                <p>Example: SF₆</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Detailed Example: Water (H₂O)</h2>
          <div className="space-y-3 text-gray-700">
            <p><strong>Step 1:</strong> Draw the Lewis structure for H₂O. Oxygen is the central atom with 6 valence electrons, each hydrogen contributes 1 electron.</p>
            <p><strong>Step 2:</strong> Count electron groups around oxygen: 2 bonding pairs (O-H bonds) + 2 lone pairs = 4 electron groups total.</p>
            <p><strong>Step 3:</strong> Determine electron geometry based on 4 groups: <strong>Tetrahedral</strong> arrangement (electron groups maximize distance at 109.5°).</p>
            <p><strong>Step 4:</strong> Determine molecular geometry by considering only atom positions: <strong>Bent</strong> shape (lone pairs are invisible in molecular geometry).</p>
            <p><strong>Step 5:</strong> Adjust bond angle: Ideal tetrahedral angle is 109.5°, but lone pairs compress bonding pairs, resulting in actual H-O-H angle of ~104.5°.</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Key Insight: Lone pairs repel more strongly than bonding pairs, causing bond angle compression from 109.5° to 104.5°</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Important Principles</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-cyan-700 mb-2">1. Counting Electron Groups</h3>
              <p className="text-gray-700">Single, double, and triple bonds all count as one electron group. For example, CO₂ has two double bonds but only 2 electron groups around carbon, resulting in a linear geometry (180°). The key is counting regions of electron density, not individual electrons.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-cyan-700 mb-2">2. Lone Pair Effects</h3>
              <p className="text-gray-700">Lone pairs occupy more space than bonding pairs because they are attracted to only one nucleus instead of two. This causes systematic deviations in bond angles. For example, NH₃ has a bond angle of 107° (compressed from 109.5°), while H₂O has 104.5° (compressed even more by two lone pairs).</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-cyan-700 mb-2">3. Equatorial vs Axial Positions</h3>
              <p className="text-gray-700">In trigonal bipyramidal geometry (5 electron groups), equatorial positions (120° apart) are more spacious than axial positions (90° from equatorial). Lone pairs preferentially occupy equatorial positions to minimize repulsion. For example, SF₄ has one lone pair in the equatorial position, creating a seesaw shape.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-cyan-700 mb-2">4. Molecular Polarity Connection</h3>
              <p className="text-gray-700">VSEPR geometry directly determines molecular polarity. Symmetrical geometries (linear, trigonal planar, tetrahedral, octahedral) often result in nonpolar molecules if all peripheral atoms are identical. Asymmetrical geometries (bent, trigonal pyramidal, seesaw) typically produce polar molecules due to unequal charge distribution.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Real-World Applications</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-cyan-50 p-4 rounded-lg">
              <h3 className="font-semibold text-cyan-800 mb-2">Drug Design</h3>
              <p className="text-gray-700">Pharmaceutical chemists use VSEPR theory to predict molecular shapes of drug candidates. The three-dimensional structure determines how a drug fits into receptor sites in the body. For example, the bent shape of morphine molecules allows them to bind specifically to opioid receptors in the brain.</p>
            </div>
            <div className="bg-cyan-50 p-4 rounded-lg">
              <h3 className="font-semibold text-cyan-800 mb-2">Environmental Chemistry</h3>
              <p className="text-gray-700">Understanding the bent shape of water molecules explains water's unique properties—high boiling point, surface tension, and ability to dissolve ionic compounds. The bent geometry creates a dipole moment, making water an excellent solvent for life-sustaining biochemical reactions.</p>
            </div>
            <div className="bg-cyan-50 p-4 rounded-lg">
              <h3 className="font-semibold text-cyan-800 mb-2">Materials Science</h3>
              <p className="text-gray-700">VSEPR predictions guide the design of polymers and nanomaterials. The tetrahedral geometry around silicon atoms in silicones determines their flexibility and thermal stability, making them ideal for high-temperature sealants and medical implants.</p>
            </div>
            <div className="bg-cyan-50 p-4 rounded-lg">
              <h3 className="font-semibold text-cyan-800 mb-2">Atmospheric Chemistry</h3>
              <p className="text-gray-700">The bent shape of ozone (O₃) and its asymmetric electron distribution make it an effective UV absorber in the stratosphere. Linear molecules like CO₂ have different vibrational modes that contribute to greenhouse gas effects, demonstrating how geometry influences environmental impact.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Mistakes to Avoid</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-3 rounded">
              <h3 className="font-semibold text-red-700 mb-1">Confusing Electron Geometry with Molecular Geometry</h3>
              <p className="text-gray-700">Remember: electron geometry includes lone pairs, molecular geometry does not. For NH₃, the electron geometry is tetrahedral, but the molecular geometry is trigonal pyramidal.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-3 rounded">
              <h3 className="font-semibold text-red-700 mb-1">Counting Multiple Bonds Incorrectly</h3>
              <p className="text-gray-700">A common error is counting double or triple bonds as 2 or 3 electron groups. Remember: any bond (single, double, or triple) counts as exactly one electron group for VSEPR purposes.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-3 rounded">
              <h3 className="font-semibold text-red-700 mb-1">Ignoring Lone Pair Compression</h3>
              <p className="text-gray-700">Don't assume all bond angles match the ideal geometry. Lone pairs compress bond angles. For example, CH₄ has perfect 109.5° angles, but NH₃ has 107° and H₂O has 104.5° due to lone pair repulsion.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-3 rounded">
              <h3 className="font-semibold text-red-700 mb-1">Forgetting to Check the Central Atom</h3>
              <p className="text-gray-700">VSEPR applies to the central atom of a molecule or polyatomic ion. For molecules with multiple central atoms, you must analyze each central atom separately. In ethanol (C₂H₅OH), both carbon atoms and the oxygen atom serve as central atoms.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Geometry Comparison Table</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-cyan-100">
                  <th className="border border-cyan-300 p-3 text-left">Electron Groups</th>
                  <th className="border border-cyan-300 p-3 text-left">Lone Pairs</th>
                  <th className="border border-cyan-300 p-3 text-left">Molecular Geometry</th>
                  <th className="border border-cyan-300 p-3 text-left">Bond Angles</th>
                  <th className="border border-cyan-300 p-3 text-left">Example</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3">2</td>
                  <td className="border border-gray-300 p-3">0</td>
                  <td className="border border-gray-300 p-3">Linear</td>
                  <td className="border border-gray-300 p-3">180°</td>
                  <td className="border border-gray-300 p-3">CO₂, BeCl₂</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3">3</td>
                  <td className="border border-gray-300 p-3">0</td>
                  <td className="border border-gray-300 p-3">Trigonal Planar</td>
                  <td className="border border-gray-300 p-3">120°</td>
                  <td className="border border-gray-300 p-3">BF₃, SO₃</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3">3</td>
                  <td className="border border-gray-300 p-3">1</td>
                  <td className="border border-gray-300 p-3">Bent</td>
                  <td className="border border-gray-300 p-3">&lt;120°</td>
                  <td className="border border-gray-300 p-3">SO₂, O₃</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3">4</td>
                  <td className="border border-gray-300 p-3">0</td>
                  <td className="border border-gray-300 p-3">Tetrahedral</td>
                  <td className="border border-gray-300 p-3">109.5°</td>
                  <td className="border border-gray-300 p-3">CH₄, NH₄⁺</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3">4</td>
                  <td className="border border-gray-300 p-3">1</td>
                  <td className="border border-gray-300 p-3">Trigonal Pyramidal</td>
                  <td className="border border-gray-300 p-3">~107°</td>
                  <td className="border border-gray-300 p-3">NH₃, PCl₃</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3">4</td>
                  <td className="border border-gray-300 p-3">2</td>
                  <td className="border border-gray-300 p-3">Bent</td>
                  <td className="border border-gray-300 p-3">~104.5°</td>
                  <td className="border border-gray-300 p-3">H₂O, H₂S</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3">5</td>
                  <td className="border border-gray-300 p-3">0</td>
                  <td className="border border-gray-300 p-3">Trigonal Bipyramidal</td>
                  <td className="border border-gray-300 p-3">90°, 120°, 180°</td>
                  <td className="border border-gray-300 p-3">PCl₅</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3">5</td>
                  <td className="border border-gray-300 p-3">1</td>
                  <td className="border border-gray-300 p-3">Seesaw</td>
                  <td className="border border-gray-300 p-3">&lt;120°, &lt;90°</td>
                  <td className="border border-gray-300 p-3">SF₄</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3">6</td>
                  <td className="border border-gray-300 p-3">0</td>
                  <td className="border border-gray-300 p-3">Octahedral</td>
                  <td className="border border-gray-300 p-3">90°, 180°</td>
                  <td className="border border-gray-300 p-3">SF₆</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3">6</td>
                  <td className="border border-gray-300 p-3">1</td>
                  <td className="border border-gray-300 p-3">Square Pyramidal</td>
                  <td className="border border-gray-300 p-3">&lt;90°</td>
                  <td className="border border-gray-300 p-3">BrF₅</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Related Calculators */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/atomic-structure-calculators/lewis-structure-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Lewis Structure Calculator</h3>
              <p className="text-sm text-gray-600">Draw Lewis structures</p>
            </a>
            <a href="/atomic-structure-calculators/hybridization-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Hybridization Calculator</h3>
              <p className="text-sm text-gray-600">Determine orbital types</p>
            </a>
            <a href="/chemistry-formulas/hybridization" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Hybridization Rules</h3>
              <p className="text-sm text-gray-600">sp, sp², sp³ determination</p>
            </a>
            <a href="/atomic-structure-calculators" className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">All Atomic Structure Calculators</h3>
              <p className="text-sm opacity-90">Explore all molecular structure tools</p>
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
            "headline": "Vsepr Theory",
            "description": "Vsepr Theory on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/vsepr-theory",
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
                "name": "Vsepr Theory",
                "item": "https://chemsolved.com/chemistry-formulas/vsepr-theory"
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
