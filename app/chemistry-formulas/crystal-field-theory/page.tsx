import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Crystal Field Theory',
  description: 'Understand d-orbital splitting and stability of coordination complexes.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/crystal-field-theory',
  },
  keywords: 'crystal field theory, d orbital splitting, coordination chemistry, ligand field',
}

export default function CrystalFieldTheoryPage() {
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
            <li className="text-gray-900">Crystal Field Theory</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Crystal Field Theory</h1>
          <p className="text-lg opacity-90">d-Orbital splitting in coordination complexes</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Understanding Crystal Field Theory</h2>
          <p className="text-gray-700 mb-4">
            Crystal Field Theory (CFT), developed by Hans Bethe in 1929 and refined by John Hasbrouck van Vleck, is a fundamental model explaining the electronic structure, bonding, and properties of transition metal coordination complexes. CFT treats metal-ligand interactions as purely electrostatic, viewing ligands as point negative charges that interact with the d electrons of the central metal ion. While this simplification ignores covalent bonding aspects (addressed by Ligand Field Theory and Molecular Orbital Theory), CFT successfully explains many experimental observations including complex colors, magnetic properties, and thermodynamic stabilities.
          </p>
          <p className="text-gray-700 mb-4">
            The theory's central premise is that ligands create an electric field that breaks the degeneracy of the five d orbitals, which are equivalent in energy for an isolated metal ion. In an octahedral complex, ligands approach along the x, y, and z axes, causing d orbitals pointing directly toward ligands (d<sub>zÂ²</sub> and d<sub>xÂ²-yÂ²</sub>, collectively called e<sub>g</sub>) to experience greater repulsion and rise in energy. Meanwhile, d orbitals pointing between the axes (d<sub>xy</sub>, d<sub>xz</sub>, and d<sub>yz</sub>, collectively called t<sub>2g</sub>) experience less repulsion and decrease in energy. This splitting pattern is reversed in tetrahedral geometry where ligands approach along body diagonals rather than axes.
          </p>
          <p className="text-gray-700">
            The magnitude of crystal field splitting energy (Î”) determines whether complexes are high-spin or low-spin, directly affecting magnetic properties and reactivity. CFT successfully predicts spectroscopic propertiesâ€”the beautiful colors of transition metal complexes arise from d-d electronic transitions corresponding to Î” energy. Practical applications span analytical chemistry (colorimetric analysis), materials science (magnetic materials, pigments), and bioinorganic chemistry (understanding metalloproteins like hemoglobin and cytochromes).
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Octahedral Crystal Field Splitting</h2>
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 mb-4">
            <p className="text-lg font-semibold text-indigo-700">Î”<sub>o</sub> (or 10Dq) = octahedral crystal field splitting energy</p>
            <p className="text-gray-700 mt-2">e<sub>g</sub> orbitals (d<sub>zÂ²</sub>, d<sub>xÂ²-yÂ²</sub>) â†’ +0.6Î”<sub>o</sub> destabilization (2 orbitals)</p>
            <p className="text-gray-700">t<sub>2g</sub> orbitals (d<sub>xy</sub>, d<sub>xz</sub>, d<sub>yz</sub>) â†’ -0.4Î”<sub>o</sub> stabilization (3 orbitals)</p>
          </div>
          <p className="text-gray-700 mb-3">
            In an octahedral field, six ligands approach along the Â±x, Â±y, and Â±z axes. The d<sub>zÂ²</sub> orbital has lobes along the z-axis, and d<sub>xÂ²-yÂ²</sub> has lobes along x and y axesâ€”both point directly at approaching ligands, experiencing maximum electrostatic repulsion. The t<sub>2g</sub> orbitals (d<sub>xy</sub>, d<sub>xz</sub>, d<sub>yz</sub>) have lobes pointing between the axes, experiencing less repulsion.
          </p>
          <div className="bg-gray-50 p-4 rounded">
            <p className="font-semibold text-indigo-700 mb-2">Energy Relationships:</p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Total stabilization from t<sub>2g</sub>: 3 Ã— (-0.4Î”<sub>o</sub>) = -1.2Î”<sub>o</sub></li>
              <li>Total destabilization from e<sub>g</sub>: 2 Ã— (+0.6Î”<sub>o</sub>) = +1.2Î”<sub>o</sub></li>
              <li>Net energy change = 0 (barycenter principle maintained)</li>
              <li>Typical Î”<sub>o</sub> values: 10,000-25,000 cmâ»Â¹ (120-300 kJ/mol)</li>
            </ul>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Key Concepts in Crystal Field Theory</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">1. Tetrahedral Crystal Field Splitting</h3>
              <div className="bg-indigo-50 p-4 rounded mb-2">
                <p className="text-lg font-semibold text-indigo-700">Î”<sub>t</sub> â‰ˆ (4/9) Î”<sub>o</sub></p>
                <p className="text-gray-700 mt-2">Inverted order: e orbitals lower energy, t<sub>2</sub> orbitals higher energy</p>
              </div>
              <p className="text-gray-700">
                In tetrahedral complexes, only four ligands approach along body diagonal directions (not along axes). This geometry produces weaker splitting than octahedral for two reasons: fewer ligands (4 vs 6) and ligands don't point directly at any d orbitals. The splitting pattern inverts because d<sub>xy</sub>, d<sub>xz</sub>, d<sub>yz</sub> orbitals now point more toward ligands than d<sub>zÂ²</sub> and d<sub>xÂ²-yÂ²</sub>. Tetrahedral complexes are almost always high-spin because Î”<sub>t</sub> is too small to overcome pairing energy.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">2. The Spectrochemical Series</h3>
              <p className="text-gray-700 mb-3">Ligands ranked by crystal field splitting strength (weak field â†’ strong field):</p>
              <div className="bg-gray-50 p-4 rounded text-center mb-3">
                <p className="font-semibold text-gray-800">Iâ» &lt; Brâ» &lt; SCNâ» &lt; Clâ» &lt; Fâ» &lt; OHâ» &lt; Hâ‚‚O &lt; NCSâ» &lt; NHâ‚ƒ &lt; en &lt; bipy &lt; phen &lt; NOâ‚‚â» &lt; CNâ» &lt; CO</p>
              </div>
              <p className="text-gray-700">
                The spectrochemical series is determined experimentally and reflects both Ïƒ-bonding and Ï€-bonding interactions. Weak field ligands (halides) produce small Î” favoring high-spin configurations. Strong field ligands (CNâ», CO) produce large Î” favoring low-spin configurations. Ï€-donor ligands (halides, OHâ») decrease Î”, while Ï€-acceptor ligands (CO, CNâ») increase Î” through back-bonding that stabilizes t<sub>2g</sub> orbitals further.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">3. Square Planar Geometry</h3>
              <p className="text-gray-700">
                Square planar complexes form from octahedral geometry by removing two trans ligands (typically along z-axis). This dramatically stabilizes d<sub>xy</sub> orbital (lowest energy), followed by d<sub>xz</sub> and d<sub>yz</sub>, then d<sub>zÂ²</sub>, with d<sub>xÂ²-yÂ²</sub> highest in energy. Large splitting makes d<sup>8</sup> metal ions (NiÂ²âº, PdÂ²âº, PtÂ²âº, AuÂ³âº) prefer square planar geometry with strong field ligands, producing diamagnetic low-spin complexes.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">4. Factors Affecting Crystal Field Splitting</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li><strong>Metal oxidation state:</strong> Higher oxidation states â†’ larger Î” (smaller, more polarizing metal ion)</li>
                <li><strong>Metal identity:</strong> 4d and 5d metals â†’ larger Î” than 3d metals (more diffuse d orbitals, better overlap)</li>
                <li><strong>Ligand field strength:</strong> Strong field ligands â†’ larger Î” (spectrochemical series)</li>
                <li><strong>Geometry:</strong> Î”<sub>square planar</sub> &gt; Î”<sub>octahedral</sub> &gt; Î”<sub>tetrahedral</sub></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">High-Spin vs Low-Spin Configurations</h2>
          <div className="space-y-4">
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4">
              <p className="font-semibold text-indigo-800 mb-2">Critical Energy Relationship:</p>
              <p className="text-gray-700">If Î” &lt; Pairing Energy (P): electrons occupy all five d orbitals singly before pairing â†’ <strong>high-spin</strong></p>
              <p className="text-gray-700 mt-1">If Î” &gt; Pairing Energy (P): electrons pair in lower energy orbitals first â†’ <strong>low-spin</strong></p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded">
                <h3 className="font-semibold text-indigo-700 mb-2">High-Spin (Weak Field)</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li><strong>Example:</strong> [Fe(Hâ‚‚O)â‚†]Â³âº with weak field Hâ‚‚O ligands</li>
                  <li>FeÂ³âº has dâµ configuration</li>
                  <li>Electron configuration: t<sub>2g</sub>Â³ e<sub>g</sub>Â² (all unpaired)</li>
                  <li><strong>5 unpaired electrons</strong> â†’ paramagnetic</li>
                  <li>Pale violet color</li>
                  <li>Small Î”<sub>o</sub> â‰ˆ 13,700 cmâ»Â¹</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded">
                <h3 className="font-semibold text-indigo-700 mb-2">Low-Spin (Strong Field)</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li><strong>Example:</strong> [Fe(CN)â‚†]Â³â» with strong field CNâ» ligands</li>
                  <li>FeÂ³âº has dâµ configuration</li>
                  <li>Electron configuration: t<sub>2g</sub>âµ e<sub>g</sub>â° (maximum pairing)</li>
                  <li><strong>1 unpaired electron</strong> â†’ weakly paramagnetic</li>
                  <li>Deep yellow color</li>
                  <li>Large Î”<sub>o</sub> â‰ˆ 35,000 cmâ»Â¹</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded p-4">
              <p className="font-semibold text-yellow-800 mb-2">Important Notes:</p>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>High-spin/low-spin possibilities exist only for dâ´-dâ· octahedral complexes</li>
                <li>dÂ¹-dÂ³ have only one possible configuration (not enough electrons to fill t<sub>2g</sub>)</li>
                <li>dâ¸-dÂ¹â° have only one configuration (too many electrons; pairing unavoidable)</li>
                <li>Tetrahedral complexes are almost always high-spin (Î”<sub>t</sub> too small)</li>
                <li>3d metals more likely high-spin; 4d and 5d metals favor low-spin (larger Î”)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Crystal Field Stabilization Energy (CFSE)</h2>
          <p className="text-gray-700 mb-4">
            CFSE quantifies the stabilization energy gained when d electrons occupy orbitals in a crystal field compared to a hypothetical spherical field. This energy difference explains trends in hydration enthalpies, lattice energies, and ionic radii across the transition series.
          </p>
          
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 mb-4">
            <p className="text-lg font-semibold text-indigo-700">Octahedral CFSE Formula:</p>
            <p className="text-gray-700 mt-2">CFSE = [(number in t<sub>2g</sub>) Ã— (-0.4Î”<sub>o</sub>)] + [(number in e<sub>g</sub>) Ã— (+0.6Î”<sub>o</sub>)] + (pairing energy if low-spin)</p>
          </div>
          
          <div className="space-y-3">
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-semibold text-indigo-700 mb-2">Example 1: TiÂ³âº (dÂ¹) in octahedral field</p>
              <p className="text-gray-700">Configuration: t<sub>2g</sub>Â¹ e<sub>g</sub>â°</p>
              <p className="text-gray-700">CFSE = (1 Ã— -0.4Î”<sub>o</sub>) + (0 Ã— 0.6Î”<sub>o</sub>) = <strong>-0.4Î”<sub>o</sub></strong></p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-semibold text-indigo-700 mb-2">Example 2: FeÂ³âº (dâµ) high-spin octahedral</p>
              <p className="text-gray-700">Configuration: t<sub>2g</sub>Â³ e<sub>g</sub>Â²</p>
              <p className="text-gray-700">CFSE = (3 Ã— -0.4Î”<sub>o</sub>) + (2 Ã— 0.6Î”<sub>o</sub>) = -1.2Î”<sub>o</sub> + 1.2Î”<sub>o</sub> = <strong>0</strong></p>
              <p className="text-gray-600 text-sm mt-1">High-spin dâµ has zero CFSE</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-semibold text-indigo-700 mb-2">Example 3: FeÂ³âº (dâµ) low-spin octahedral</p>
              <p className="text-gray-700">Configuration: t<sub>2g</sub>âµ e<sub>g</sub>â°</p>
              <p className="text-gray-700">CFSE = (5 Ã— -0.4Î”<sub>o</sub>) + (0 Ã— 0.6Î”<sub>o</sub>) + 2P = <strong>-2.0Î”<sub>o</sub> + 2P</strong></p>
              <p className="text-gray-600 text-sm mt-1">Includes pairing energy cost for two paired electrons</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-semibold text-indigo-700 mb-2">Example 4: NiÂ²âº (dâ¸) octahedral</p>
              <p className="text-gray-700">Configuration: t<sub>2g</sub>â¶ e<sub>g</sub>Â²</p>
              <p className="text-gray-700">CFSE = (6 Ã— -0.4Î”<sub>o</sub>) + (2 Ã— 0.6Î”<sub>o</sub>) = -2.4Î”<sub>o</sub> + 1.2Î”<sub>o</sub> = <strong>-1.2Î”<sub>o</sub></strong></p>
              <p className="text-gray-600 text-sm mt-1">Plus 3P for three pairs (relative to high-spin dâ¸ in tetrahedral)</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Real-World Applications</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
              <h3 className="font-semibold text-indigo-800 mb-2">Colors and Pigments</h3>
              <p className="text-gray-700">Crystal field splitting explains the vibrant colors of transition metal complexes. Prussian blue Feâ‚„[Fe(CN)â‚†]â‚ƒ, chromium oxide Crâ‚‚Oâ‚ƒ (green), and cobalt blue CoAlâ‚‚Oâ‚„ are pigments whose colors arise from d-d transitions corresponding to specific Î” values. Artists and ceramicists exploit these properties in paints, glazes, and dyes.</p>
            </div>
            
            <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
              <h3 className="font-semibold text-indigo-800 mb-2">Magnetic Materials</h3>
              <p className="text-gray-700">High-spin complexes with multiple unpaired electrons exhibit strong paramagnetism used in MRI contrast agents (GdÂ³âº complexes). Low-spin FeÂ²âº in hemoglobin (diamagnetic when oxygenated) versus high-spin deoxyhemoglobin (paramagnetic) allows BOLD fMRI imaging to track brain oxygen levels.</p>
            </div>
            
            <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
              <h3 className="font-semibold text-indigo-800 mb-2">Catalysis</h3>
              <p className="text-gray-700">Crystal field effects influence catalytic activity. Square planar PtÂ²âº and PdÂ²âº complexes catalyze cross-coupling reactions (Suzuki, Heck, Negishi) essential for pharmaceutical synthesis. The empty d<sub>xÂ²-yÂ²</sub> orbital facilitates oxidative addition, while filled d orbitals enable reductive elimination through back-bonding.</p>
            </div>
            
            <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
              <h3 className="font-semibold text-indigo-800 mb-2">Bioinorganic Chemistry</h3>
              <p className="text-gray-700">Understanding CFT is crucial for metalloproteins. Cytochrome P450 enzymes use low-spin FeÂ³âº/FeÂ²âº cycling for drug metabolism. Blue copper proteins exploit unique square planar CuÂ²âº geometry for electron transfer. Zinc fingers use tetrahedral ZnÂ²âº (dÂ¹â°, no CFSE) for structural roles without redox activity.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Mistakes to Avoid</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-3 rounded">
              <h3 className="font-semibold text-red-700 mb-1">Confusing Octahedral and Tetrahedral Splitting Patterns</h3>
              <p className="text-gray-700">Remember: octahedral has e<sub>g</sub> higher, t<sub>2g</sub> lower; tetrahedral reverses this to e lower, t<sub>2</sub> higher. Don't use the same orbital labelsâ€”tetrahedral uses e and t<sub>2</sub>, not e<sub>g</sub> and t<sub>2g</sub>. The subscript g (gerade) only applies to centrosymmetric geometries like octahedral.</p>
            </div>
            
            <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-3 rounded">
              <h3 className="font-semibold text-red-700 mb-1">Incorrect CFSE Calculations</h3>
              <p className="text-gray-700">When calculating CFSE, remember to use -0.4Î”<sub>o</sub> for each t<sub>2g</sub> electron and +0.6Î”<sub>o</sub> for each e<sub>g</sub> electron. Don't forget to subtract the barycenter (average energy). For low-spin complexes, include pairing energy penalties. Also verify: total stabilization equals total destabilization in the absence of electrons.</p>
            </div>
            
            <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-3 rounded">
              <h3 className="font-semibold text-red-700 mb-1">Assuming All Octahedral Complexes Show High-Spin/Low-Spin Behavior</h3>
              <p className="text-gray-700">Only dâ´, dâµ, dâ¶, and dâ· octahedral complexes can be high-spin or low-spin depending on ligand field strength. dÂ¹, dÂ², dÂ³ have insufficient electrons to fill t<sub>2g</sub>, so only one configuration exists. dâ¸, dâ¹, dÂ¹â° must have paired electrons in e<sub>g</sub>, giving only one ground state configuration.</p>
            </div>
            
            <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-3 rounded">
              <h3 className="font-semibold text-red-700 mb-1">Treating CFT as a Complete Bonding Model</h3>
              <p className="text-gray-700">Crystal Field Theory treats bonding as purely ionic/electrostatic, ignoring covalency. While useful for qualitative predictions, CFT cannot explain the spectrochemical series order (why CO and CNâ» are strong field) or properties requiring orbital overlap. For more accuracy, use Ligand Field Theory or Molecular Orbital Theory that incorporate covalent bonding.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/chemistry-formulas/crystal-field-theory" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Crystal Field Splitting Calculator</h3>
              <p className="text-sm text-gray-600">Calculate Î”o and electron configurations</p>
            </a>
            <a href="/chemistry-formulas/crystal-field-theory" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">LFSE Calculator</h3>
              <p className="text-sm text-gray-600">Ligand field stabilization energy</p>
            </a>
            <a href="/chemistry-formulas/coordination-chemistry-formula" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Coordination Chemistry Formula</h3>
              <p className="text-sm text-gray-600">Complex ions and ligands</p>
            </a>
            <a href="/chemistry-formulas/coordination-chemistry-formula" className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">All Coordination Chemistry Calculators</h3>
              <p className="text-sm opacity-90">Explore all coordination chemistry tools</p>
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
            "headline": "Crystal Field Theory",
            "description": "Crystal Field Theory on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/crystal-field-theory",
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
                "name": "Crystal Field Theory",
                "item": "https://chemsolved.com/chemistry-formulas/crystal-field-theory"
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
