import type { Metadata } from 'next';
import CrystalFieldSplittingCalculator from '@/components/calculators/CrystalFieldSplittingCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: 'Crystal Field Splitting Energy Calculator | Chemistry Calculators',
  description:
    'Calculate crystal field splitting energy from wavelength, predict high spin vs low spin complexes, and explore d-orbital splitting in coordination compounds with step-by-step solutions.',
  keywords: [
    'crystal field theory',
    'CFT calculator',
    'splitting energy',
    'ligand field theory',
    'd-orbital splitting',
    'coordination chemistry',
    'high spin low spin',
    'transition metal complexes',
    'spectrochemical series',
    'octahedral tetrahedral',
  ],
};

export default function CrystalFieldSplittingCalculatorPage() {  return (
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
            Crystal Field Splitting Energy Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Calculate Δ from wavelength, predict spin states, and explore the color and magnetism of transition metal complexes
          </p>
        </div>

        {/* Calculator Component */}
        <CrystalFieldSplittingCalculator />

        {/* Educational Content */}
        <div className="mt-16 prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              What is Crystal Field Splitting Energy?
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Crystal Field Splitting Energy (Δ) is the energy difference between sets of d-orbitals in transition metal 
              complexes that results from the electrostatic interaction between the metal ion and surrounding ligands. This 
              phenomenon is fundamental to understanding the color, magnetism, and reactivity of coordination compounds.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 mb-6">
              <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">
                Key Concept: Crystal Field Theory (CFT)
              </h3>
              <p className="text-blue-800 dark:text-blue-200 mb-3">
                In an isolated transition metal ion, all five d-orbitals (d<sub>xy</sub>, d<sub>xz</sub>, d<sub>yz</sub>, 
                d<sub>x²-y²</sub>, d<sub>z²</sub>) have the same energy (they are degenerate). When ligands approach the 
                metal ion to form a complex, this degeneracy is "lifted" — the orbitals split into different energy levels 
                depending on their spatial orientation relative to the ligands.
              </p>
              <p className="text-blue-800 dark:text-blue-200">
                The energy gap between these split d-orbitals is the <strong>crystal field splitting energy</strong>, 
                denoted as Δ<sub>o</sub> (octahedral), Δ<sub>t</sub> (tetrahedral), or Δ<sub>sp</sub> (square planar).
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">
              d-Orbital Splitting Patterns
            </h3>

            <h4 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mt-6 mb-3">
              1. Octahedral Complexes (O<sub>h</sub>)
            </h4>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              In octahedral geometry (six ligands along ±x, ±y, ±z axes), the five d-orbitals split into two groups:
            </p>
            <ul className="list-disc pl-8 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
              <li>
                <strong>e<sub>g</sub> set</strong> (higher energy): d<sub>z²</sub> and d<sub>x²-y²</sub> orbitals point 
                directly toward ligands, experiencing greater repulsion → higher energy
              </li>
              <li>
                <strong>t<sub>2g</sub> set</strong> (lower energy): d<sub>xy</sub>, d<sub>xz</sub>, d<sub>yz</sub> orbitals 
                point between ligands, experiencing less repulsion → lower energy
              </li>
              <li>
                Energy difference: Δ<sub>o</sub> = E(e<sub>g</sub>) - E(t<sub>2g</sub>)
              </li>
              <li>
                Typical range: 100-400 kJ/mol (depending on metal and ligands)
              </li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mt-6 mb-3">
              2. Tetrahedral Complexes (T<sub>d</sub>)
            </h4>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              In tetrahedral geometry (four ligands at alternating corners of a cube), the splitting is inverted and smaller:
            </p>
            <ul className="list-disc pl-8 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
              <li>
                <strong>e set</strong> (lower energy): d<sub>z²</sub> and d<sub>x²-y²</sub>
              </li>
              <li>
                <strong>t<sub>2</sub> set</strong> (higher energy): d<sub>xy</sub>, d<sub>xz</sub>, d<sub>yz</sub>
              </li>
              <li>
                Magnitude: Δ<sub>t</sub> ≈ (4/9) × Δ<sub>o</sub> (tetrahedral splitting is always smaller)
              </li>
              <li>
                Almost always high spin due to small Δ<sub>t</sub>
              </li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mt-6 mb-3">
              3. Square Planar Complexes (D<sub>4h</sub>)
            </h4>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              In square planar geometry (common for d<sup>8</sup> ions like Pt²⁺, Pd²⁺, Ni²⁺):
            </p>
            <ul className="list-disc pl-8 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
              <li>
                Four distinct energy levels with very large splitting
              </li>
              <li>
                d<sub>x²-y²</sub> orbital is highest energy (points directly at ligands in xy-plane)
              </li>
              <li>
                Always low spin for d<sup>8</sup> configuration
              </li>
              <li>
                Common for strong field ligands and 2nd/3rd row transition metals
              </li>
            </ul>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-800 my-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Worked Example: [Ti(H₂O)₆]³⁺ Purple Complex
              </h3>
              
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <div>
                  <p className="font-semibold mb-2">Problem:</p>
                  <p>
                    The hexaaquatitanium(III) ion, [Ti(H₂O)₆]³⁺, appears purple in solution and absorbs green light 
                    at approximately 510 nm. Calculate the crystal field splitting energy Δ<sub>o</sub>.
                  </p>
                </div>

                <div>
                  <p className="font-semibold mb-2">Solution:</p>
                  <p className="mb-2">Step 1: Identify the given information</p>
                  <ul className="list-disc pl-8 space-y-1 mb-3">
                    <li>Geometry: Octahedral (six water ligands)</li>
                    <li>Wavelength absorbed: λ = 510 nm = 510 × 10⁻⁹ m</li>
                    <li>Ti³⁺ has one d-electron (d¹ configuration)</li>
                  </ul>

                  <p className="mb-2">Step 2: Use the relationship between energy and wavelength</p>
                  <p className="bg-white dark:bg-gray-800 p-3 rounded border border-gray-300 dark:border-gray-600 font-mono text-sm mb-3">
                    E = hc/λ
                  </p>
                  <p className="mb-3">where h = 6.626 × 10⁻³⁴ J·s, c = 2.998 × 10⁸ m/s</p>

                  <p className="mb-2">Step 3: Calculate energy per photon</p>
                  <p className="bg-white dark:bg-gray-800 p-3 rounded border border-gray-300 dark:border-gray-600 font-mono text-sm mb-3">
                    E = (6.626 × 10⁻³⁴ J·s)(2.998 × 10⁸ m/s) / (510 × 10⁻⁹ m)<br />
                    E = 3.894 × 10⁻¹⁹ J per photon
                  </p>

                  <p className="mb-2">Step 4: Convert to kJ/mol (multiply by Avogadro's number)</p>
                  <p className="bg-white dark:bg-gray-800 p-3 rounded border border-gray-300 dark:border-gray-600 font-mono text-sm mb-3">
                    Δ<sub>o</sub> = (3.894 × 10⁻¹⁹ J)(6.022 × 10²³ mol⁻¹) / 1000<br />
                    Δ<sub>o</sub> = 234.4 kJ/mol
                  </p>

                  <p className="mb-2">Step 5: Interpret the result</p>
                  <ul className="list-disc pl-8 space-y-1">
                    <li>The d¹ electron occupies the t<sub>2g</sub> orbital (ground state)</li>
                    <li>Absorbing 510 nm green light promotes it to the e<sub>g</sub> orbital</li>
                    <li>We see purple (complementary color to green)</li>
                    <li>Water is a weak field ligand → moderate Δ<sub>o</sub></li>
                  </ul>
                </div>

                <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-lg border border-purple-300 dark:border-purple-700 mt-4">
                  <p className="font-semibold text-purple-900 dark:text-purple-100">
                    Answer: Δ<sub>o</sub> = 234 kJ/mol
                  </p>
                  <p className="text-sm text-purple-800 dark:text-purple-200 mt-2">
                    This corresponds to the d-d transition: t<sub>2g</sub>¹ → e<sub>g</sub>¹
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">
              High Spin vs. Low Spin Complexes
            </h3>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              The magnitude of Δ determines how electrons are distributed among the d-orbitals, particularly for d⁴-d⁷ 
              configurations where a choice exists:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg">
                <thead className="bg-gray-100 dark:bg-gray-600">
                  <tr>
                    <th className="px-6 py-3 border-b border-gray-300 dark:border-gray-500 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                      Configuration
                    </th>
                    <th className="px-6 py-3 border-b border-gray-300 dark:border-gray-500 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                      Weak Field (Δ &lt; P)
                    </th>
                    <th className="px-6 py-3 border-b border-gray-300 dark:border-gray-500 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                      Strong Field (Δ &gt; P)
                    </th>
                    <th className="px-6 py-3 border-b border-gray-300 dark:border-gray-500 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                      Example Ions
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr className="border-b border-gray-200 dark:border-gray-600">
                    <td className="px-6 py-4">d⁴ (Oct)</td>
                    <td className="px-6 py-4">High Spin (t<sub>2g</sub>³e<sub>g</sub>¹)</td>
                    <td className="px-6 py-4">Low Spin (t<sub>2g</sub>⁴)</td>
                    <td className="px-6 py-4">Cr²⁺, Mn³⁺</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-600">
                    <td className="px-6 py-4">d⁵ (Oct)</td>
                    <td className="px-6 py-4">High Spin (t<sub>2g</sub>³e<sub>g</sub>²)</td>
                    <td className="px-6 py-4">Low Spin (t<sub>2g</sub>⁵)</td>
                    <td className="px-6 py-4">Fe³⁺, Mn²⁺</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-600">
                    <td className="px-6 py-4">d⁶ (Oct)</td>
                    <td className="px-6 py-4">High Spin (t<sub>2g</sub>⁴e<sub>g</sub>²)</td>
                    <td className="px-6 py-4">Low Spin (t<sub>2g</sub>⁶)</td>
                    <td className="px-6 py-4">Fe²⁺, Co³⁺</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">d⁷ (Oct)</td>
                    <td className="px-6 py-4">High Spin (t<sub>2g</sub>⁵e<sub>g</sub>²)</td>
                    <td className="px-6 py-4">Low Spin (t<sub>2g</sub>⁶e<sub>g</sub>¹)</td>
                    <td className="px-6 py-4">Co²⁺, Ni³⁺</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Where P is the pairing energy — the energy cost of placing two electrons in the same orbital:
            </p>
            <ul className="list-disc pl-8 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
              <li>
                <strong>High Spin (Δ &lt; P):</strong> Electrons prefer to occupy higher energy orbitals rather than pair up. 
                Maximum number of unpaired electrons. Weak field ligands (H₂O, F⁻, Cl⁻).
              </li>
              <li>
                <strong>Low Spin (Δ &gt; P):</strong> Electrons pair in lower energy orbitals before occupying higher ones. 
                Minimum number of unpaired electrons. Strong field ligands (CN⁻, CO, NO₂⁻, NH₃).
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">
              The Spectrochemical Series
            </h3>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Ligands can be arranged in order of increasing crystal field splitting strength:
            </p>

            <div className="bg-gradient-to-r from-red-50 via-yellow-50 via-green-50 to-blue-50 dark:from-red-900/20 dark:via-yellow-900/20 dark:via-green-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-gray-300 dark:border-gray-600 mb-6">
              <p className="text-center font-mono text-lg mb-3">
                I⁻ &lt; Br⁻ &lt; S²⁻ &lt; SCN⁻ &lt; Cl⁻ &lt; NO₃⁻ &lt; F⁻ &lt; OH⁻ &lt; H₂O &lt; NCS⁻ &lt; CH₃CN &lt; py &lt; NH₃ &lt; en &lt; bipy &lt; phen &lt; NO₂⁻ &lt; CN⁻ &lt; CO
              </p>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                Weak field ← increasing Δ → Strong field
              </p>
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold mb-2">Weak Field Ligands:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Halides (I⁻, Br⁻, Cl⁻)</li>
                    <li>Hydroxide (OH⁻)</li>
                    <li>Water (H₂O)</li>
                    <li>Small Δ → high spin</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Strong Field Ligands:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Cyanide (CN⁻)</li>
                    <li>Carbon monoxide (CO)</li>
                    <li>Chelating amines (en, bipy)</li>
                    <li>Large Δ → low spin</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">
              Color and Electronic Transitions
            </h3>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              The color of transition metal complexes arises from d-d transitions — electrons absorbing photons of specific 
              wavelengths to jump from lower to higher d-orbitals:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg">
                <thead className="bg-gray-100 dark:bg-gray-600">
                  <tr>
                    <th className="px-6 py-3 border-b border-gray-300 dark:border-gray-500 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                      Complex
                    </th>
                    <th className="px-6 py-3 border-b border-gray-300 dark:border-gray-500 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                      λ absorbed (nm)
                    </th>
                    <th className="px-6 py-3 border-b border-gray-300 dark:border-gray-500 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                      Color Absorbed
                    </th>
                    <th className="px-6 py-3 border-b border-gray-300 dark:border-gray-500 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                      Color Observed
                    </th>
                    <th className="px-6 py-3 border-b border-gray-300 dark:border-gray-500 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                      Δ (kJ/mol)
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr className="border-b border-gray-200 dark:border-gray-600">
                    <td className="px-6 py-4">[Ti(H₂O)₆]³⁺</td>
                    <td className="px-6 py-4">510</td>
                    <td className="px-6 py-4">Green</td>
                    <td className="px-6 py-4">Purple/Violet</td>
                    <td className="px-6 py-4">234</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-600">
                    <td className="px-6 py-4">[Cu(H₂O)₆]²⁺</td>
                    <td className="px-6 py-4">800</td>
                    <td className="px-6 py-4">Red</td>
                    <td className="px-6 py-4">Blue</td>
                    <td className="px-6 py-4">150</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-600">
                    <td className="px-6 py-4">[Ni(H₂O)₆]²⁺</td>
                    <td className="px-6 py-4">720</td>
                    <td className="px-6 py-4">Red</td>
                    <td className="px-6 py-4">Green</td>
                    <td className="px-6 py-4">166</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-600">
                    <td className="px-6 py-4">[Co(NH₃)₆]³⁺</td>
                    <td className="px-6 py-4">475</td>
                    <td className="px-6 py-4">Blue</td>
                    <td className="px-6 py-4">Yellow/Orange</td>
                    <td className="px-6 py-4">252</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">[Fe(CN)₆]³⁻</td>
                    <td className="px-6 py-4">420</td>
                    <td className="px-6 py-4">Violet</td>
                    <td className="px-6 py-4">Yellow</td>
                    <td className="px-6 py-4">285</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Important relationships:
            </p>
            <ul className="list-disc pl-8 text-gray-700 dark:text-gray-300 space-y-2 mb-6">
              <li>Larger Δ → higher energy → shorter wavelength absorbed → blue-shifted</li>
              <li>Smaller Δ → lower energy → longer wavelength absorbed → red-shifted</li>
              <li>The color we observe is the complementary color to what's absorbed</li>
              <li>Stronger field ligands → larger Δ → absorb higher energy (blue/violet region)</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">
              Applications of Crystal Field Theory
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
                  1. Colorimetric Analysis
                </h4>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  Determining metal ion concentrations by measuring absorbance of colored complexes. Used in environmental 
                  testing (heavy metals), clinical chemistry (Fe²⁺/Fe³⁺), and quality control. Beer-Lambert law relates 
                  concentration to absorbance at λ<sub>max</sub>.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                <h4 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-3">
                  2. Magnetic Properties
                </h4>
                <p className="text-purple-800 dark:text-purple-200 text-sm">
                  Predicting paramagnetism (unpaired electrons) vs diamagnetism (all paired). High spin complexes have more 
                  unpaired electrons → stronger magnetic moments. SQUID magnetometry measures magnetic susceptibility to 
                  determine electron configuration.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 p-6 rounded-xl border border-green-200 dark:border-green-700">
                <h4 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-3">
                  3. Catalysis Design
                </h4>
                <p className="text-green-800 dark:text-green-200 text-sm">
                  Engineering active sites in metalloenzymes and industrial catalysts. Controlling d-orbital energies affects 
                  substrate binding, electron transfer rates, and reaction pathways. Examples: cytochrome P450 (oxidation), 
                  Wilkinson's catalyst (hydrogenation).
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                <h4 className="text-lg font-semibold text-orange-900 dark:text-orange-100 mb-3">
                  4. Materials Science
                </h4>
                <p className="text-orange-800 dark:text-orange-200 text-sm">
                  Designing pigments, dyes, and optical materials. Prussian blue, ruby (Al₂O₃:Cr³⁺), and ceramic glazes rely 
                  on d-d transitions. Tuning λ absorbed by changing ligands or metal ions creates desired colors without 
                  organic chromophores.
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/30 dark:to-red-800/30 p-6 rounded-xl border border-red-200 dark:border-red-700">
                <h4 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-3">
                  5. Biochemistry and Medicine
                </h4>
                <p className="text-red-800 dark:text-red-200 text-sm">
                  Understanding hemoglobin (Fe²⁺), myoglobin, and electron transport proteins (cytochromes). Spin state 
                  changes upon O₂ binding affect function. MRI contrast agents (Gd³⁺ complexes) and anticancer drugs 
                  (cisplatin Pt²⁺) utilize coordination chemistry.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/30 dark:to-yellow-800/30 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700">
                <h4 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-3">
                  6. Spectroscopy
                </h4>
                <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                  UV-Vis spectroscopy identifies metal oxidation states and coordination environments. Electronic absorption 
                  spectra reveal Δ values. Combined with IR, EPR, and XAS techniques to fully characterize complex structure 
                  and bonding.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">
              How to Solve Crystal Field Splitting Problems
            </h3>

            <div className="bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20 p-6 rounded-xl border border-cyan-200 dark:border-cyan-800 mb-6">
              <ol className="list-decimal pl-6 space-y-4 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>Identify the geometry and metal ion</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                    <li>Count ligands to determine coordination number (CN)</li>
                    <li>Common geometries: CN=6 (octahedral), CN=4 (tetrahedral or square planar), CN=2 (linear)</li>
                    <li>Determine d-electron count from oxidation state</li>
                  </ul>
                </li>
                <li>
                  <strong>Determine the ligand field strength</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                    <li>Use spectrochemical series to classify ligands as weak or strong field</li>
                    <li>Strong field ligands: CN⁻, CO, NO₂⁻, en, bipy → large Δ → low spin</li>
                    <li>Weak field ligands: I⁻, Br⁻, Cl⁻, F⁻, H₂O → small Δ → high spin</li>
                  </ul>
                </li>
                <li>
                  <strong>Apply energy-wavelength relationships</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                    <li>E = hc/λ to convert wavelength to energy</li>
                    <li>Remember: h = 6.626 × 10⁻³⁴ J·s, c = 2.998 × 10⁸ m/s</li>
                    <li>Convert J to kJ/mol: multiply by (6.022 × 10²³)/1000</li>
                    <li>Use color wheel: complementary color is observed (not absorbed)</li>
                  </ul>
                </li>
                <li>
                  <strong>Predict electron configuration and properties</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                    <li>For d⁴-d⁷ octahedral: compare Δ to pairing energy P</li>
                    <li>Count unpaired electrons to determine magnetic moment</li>
                    <li>μ = √[n(n+2)] Bohr magnetons, where n = number of unpaired electrons</li>
                    <li>Tetrahedral complexes are almost always high spin (small Δ<sub>t</sub>)</li>
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
                  1. Confusing absorbed color with observed color
                </h4>
                <p className="text-red-800 dark:text-red-200 text-sm mb-2">
                  <strong>Wrong:</strong> "[Cu(H₂O)₆]²⁺ absorbs at 800 nm (red), so it looks red."
                </p>
                <p className="text-red-800 dark:text-red-200 text-sm">
                  <strong>Correct:</strong> "It absorbs red light, so we see the complementary color, which is blue."
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-5 rounded-r-lg">
                <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">
                  2. Forgetting that Δ<sub>t</sub> ≈ 4/9 Δ<sub>o</sub>
                </h4>
                <p className="text-red-800 dark:text-red-200 text-sm mb-2">
                  <strong>Wrong:</strong> "Both octahedral and tetrahedral [NiCl₄]²⁻ have the same Δ."
                </p>
                <p className="text-red-800 dark:text-red-200 text-sm">
                  <strong>Correct:</strong> "Tetrahedral splitting is inherently smaller. For the same ligands and metal, 
                  Δ<sub>t</sub> is only 4/9 of Δ<sub>o</sub>, making tetrahedral complexes almost always high spin."
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-5 rounded-r-lg">
                <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">
                  3. Misapplying spin state rules to all d-electron counts
                </h4>
                <p className="text-red-800 dark:text-red-200 text-sm mb-2">
                  <strong>Wrong:</strong> "d³ and d⁸ octahedral complexes can be either high spin or low spin."
                </p>
                <p className="text-red-800 dark:text-red-200 text-sm">
                  <strong>Correct:</strong> "Only d⁴, d⁵, d⁶, and d⁷ octahedral complexes have a choice between high and 
                  low spin. d³ is always high spin (t<sub>2g</sub>³), and d⁸ has only one arrangement (t<sub>2g</sub>⁶e<sub>g</sub>²)."
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-5 rounded-r-lg">
                <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">
                  4. Using incorrect units or conversion factors
                </h4>
                <p className="text-red-800 dark:text-red-200 text-sm mb-2">
                  <strong>Wrong:</strong> "λ = 500 nm → E = hc/λ = (6.626 × 10⁻³⁴)(3 × 10⁸)/500 = 3.975 × 10⁻²² J/mol"
                </p>
                <p className="text-red-800 dark:text-red-200 text-sm">
                  <strong>Correct:</strong> "Convert nm to m first (500 nm = 5 × 10⁻⁷ m), calculate energy per photon, 
                  then multiply by Avogadro's number to get kJ/mol: 239 kJ/mol."
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
                  <li>• Planck's constant: h = 6.626 × 10⁻³⁴ J·s</li>
                  <li>• Speed of light: c = 2.998 × 10⁸ m/s</li>
                  <li>• Avogadro's number: N<sub>A</sub> = 6.022 × 10²³</li>
                  <li>• eV to J: 1 eV = 1.602 × 10⁻¹⁹ J</li>
                  <li>• Tetrahedral ratio: Δ<sub>t</sub> = (4/9)Δ<sub>o</sub></li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 p-6 rounded-xl border border-pink-200 dark:border-pink-800">
                <h4 className="font-semibold text-pink-900 dark:text-pink-100 mb-3">Key Formulas</h4>
                <ul className="space-y-2 text-sm text-pink-800 dark:text-pink-200">
                  <li>• Energy: E = hc/λ</li>
                  <li>• Wavelength: λ = hc/E</li>
                  <li>• kJ/mol: E(J) × 6.022 × 10²³ / 1000</li>
                  <li>• Magnetic moment: μ = √[n(n+2)] BM</li>
                  <li>• CFSE(Oct): -0.4nΔ<sub>o</sub>(t<sub>2g</sub>) + 0.6nΔ<sub>o</sub>(e<sub>g</sub>)</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-6 rounded-xl border border-emerald-200 dark:border-emerald-800">
                <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-3">Wavelength-Color Guide</h4>
                <ul className="space-y-2 text-sm text-emerald-800 dark:text-emerald-200">
                  <li>• 400-450 nm: Violet → Yellow observed</li>
                  <li>• 450-495 nm: Blue → Orange observed</li>
                  <li>• 495-570 nm: Green → Red observed</li>
                  <li>• 570-590 nm: Yellow → Violet observed</li>
                  <li>• 590-620 nm: Orange → Blue observed</li>
                  <li>• 620-750 nm: Red → Green observed</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-800">
                <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-3">Quick Checks</h4>
                <ul className="space-y-2 text-sm text-amber-800 dark:text-amber-200">
                  <li>• Typical Δ<sub>o</sub>: 100-400 kJ/mol</li>
                  <li>• Strong field: Δ &gt; 200 kJ/mol (low spin)</li>
                  <li>• Weak field: Δ &lt; 150 kJ/mol (high spin)</li>
                  <li>• Tetrahedral: almost always high spin</li>
                  <li>• Square planar d⁸: always low spin</li>
                  <li>• Pairing energy P ≈ 200 kJ/mol</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
                Beyond Crystal Field Theory
              </h4>
              <p className="text-blue-800 dark:text-blue-200 text-sm mb-3">
                While CFT successfully explains colors and magnetism, it treats ligand-metal interactions as purely 
                electrostatic. <strong>Ligand Field Theory (LFT)</strong> incorporates molecular orbital theory, recognizing 
                that metal-ligand bonding involves orbital overlap (σ and π bonding).
              </p>
              <p className="text-blue-800 dark:text-blue-200 text-sm">
                LFT better explains the spectrochemical series (π-acceptor ligands like CO cause large Δ through 
                back-bonding) and provides a more accurate picture of covalency in metal complexes. For advanced applications, 
                consider using Angular Overlap Model (AOM) or computational methods (DFT).
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
                        href="/coordination-chemistry-calculators/ligand-field-stabilization-energy-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>LFSE Calculator</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/coordination-chemistry-calculators/coordination-number-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Coordination Number Calculator</span>
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
                    <a
                      href="/calculators"
                      className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      View All Calculators →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      </div>
      <Footer />
    </>
  );
}