import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Nuclear Chemistry Formula | Radioactivity, Decay & Binding Energy',
  description: 'Nuclear reactions, radioactive decay, half-life, mass defect, binding energy, and nuclear equations.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/nuclear-chemistry-formula',
  },
  keywords: ['nuclear chemistry', 'radioactivity', 'half-life', 'binding energy', 'mass defect', 'nuclear decay']
};

export default function NuclearChemistryFormulaPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <nav className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <Link href="/">Home</Link>
            <span>â†’</span>
            <Link href="/chemistry-formulas">Chemistry Formulas</Link>
            <span>â†’</span>
            <span className="text-gray-900 dark:text-white font-medium">Nuclear Chemistry</span>
          </nav>
        </div>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 rounded-3xl p-12 text-white shadow-2xl">
            <h1 className="text-5xl font-bold mb-4 text-center">Nuclear Chemistry</h1>
            <p className="text-xl text-center text-emerald-100">
              Radioactivity, Decay, and Nuclear Reactions
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-l-4 border-emerald-500">
            <h2 className="text-3xl font-bold mb-6">Types of Radioactive Decay</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/30 dark:to-orange-900/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-900 dark:text-red-300 mb-3">Alpha (Î±) Decay</h3>
                <div className="bg-white dark:bg-gray-700 rounded p-4 my-3 font-mono text-center">
                  <p className="text-lg">â‚‚â‚ƒâ‚ˆU â†’ â‚‚â‚ƒâ‚„Th + â‚„HeÂ²âº (Î± particle)</p>
                </div>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Particle:</strong> Helium nucleus (â‚‚â´He or â‚‚â´Î±)</p>
                  <p><strong>Mass number:</strong> decreases by 4</p>
                  <p><strong>Atomic number:</strong> decreases by 2</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-3">Beta (Î²â») Decay</h3>
                <div className="bg-white dark:bg-gray-700 rounded p-4 my-3 font-mono text-center">
                  <p className="text-lg">â‚â‚„C â†’ â‚â‚„N + â‚€eâ» (Î²â» particle)</p>
                </div>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Particle:</strong> Electron (â‚‹â‚â°e or â‚‹â‚â°Î²)</p>
                  <p><strong>Mass number:</strong> unchanged</p>
                  <p><strong>Atomic number:</strong> increases by 1</p>
                  <p className="text-sm">n â†’ pâº + eâ» + Î½Ì„<sub>e</sub> (antineutrino)</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-3">Beta (Î²âº) Decay (Positron Emission)</h3>
                <div className="bg-white dark:bg-gray-700 rounded p-4 my-3 font-mono text-center">
                  <p className="text-lg">â‚‚â‚‚Na â†’ â‚‚â‚‚Ne + â‚€eâº (Î²âº particle)</p>
                </div>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Particle:</strong> Positron (â‚Šâ‚â°e or â‚Šâ‚â°Î²)</p>
                  <p><strong>Mass number:</strong> unchanged</p>
                  <p><strong>Atomic number:</strong> decreases by 1</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-3">Gamma (Î³) Radiation</h3>
                <div className="bg-white dark:bg-gray-700 rounded p-4 my-3 font-mono text-center">
                  <p className="text-lg">â‚†â‚€Co* â†’ â‚†â‚€Co + Î³</p>
                </div>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Particle:</strong> High-energy photon (â‚€â°Î³)</p>
                  <p><strong>Mass number:</strong> unchanged</p>
                  <p><strong>Atomic number:</strong> unchanged</p>
                  <p className="text-sm">Often accompanies other decay types</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Radioactive Decay Kinetics</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-300 mb-4">First-Order Decay Law</h3>
                <div className="bg-white dark:bg-gray-700 rounded p-6 my-4">
                  <p className="text-3xl font-bold text-center mb-4">N(t) = Nâ‚€ e<sup>-Î»t</sup></p>
                  <p className="text-center text-gray-600 dark:text-gray-400 mt-4">or</p>
                  <p className="text-3xl font-bold text-center mt-4">ln(N/Nâ‚€) = -Î»t</p>
                </div>
                
                <div className="space-y-2 text-gray-700 dark:text-gray-300 mt-4">
                  <p><strong>N(t)</strong> = number of nuclei at time t</p>
                  <p><strong>Nâ‚€</strong> = initial number of nuclei</p>
                  <p><strong>Î»</strong> = decay constant (sâ»Â¹)</p>
                  <p><strong>t</strong> = time elapsed</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-amber-900 dark:text-amber-300 mb-4">Half-Life (t<sub>1/2</sub>)</h3>
                <div className="bg-white dark:bg-gray-700 rounded p-6 my-4">
                  <p className="text-3xl font-bold text-center mb-4">t<sub>1/2</sub> = ln(2) / Î» = 0.693 / Î»</p>
                  <p className="text-center text-gray-600 dark:text-gray-400 mt-4">Also:</p>
                  <p className="text-2xl font-bold text-center mt-4">N(t) = Nâ‚€ (1/2)<sup>t/tâ‚/â‚‚</sup></p>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  <strong>Definition:</strong> Time required for half of the radioactive nuclei to decay
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">Activity (A)</h3>
                <div className="bg-white dark:bg-gray-700 rounded p-6 my-4">
                  <p className="text-3xl font-bold text-center mb-4">A = Î»N = Aâ‚€ e<sup>-Î»t</sup></p>
                </div>
                
                <div className="space-y-2 text-gray-700 dark:text-gray-300 mt-4">
                  <p><strong>Activity:</strong> Rate of decay (decays per second)</p>
                  <p><strong>Units:</strong></p>
                  <p className="ml-6">â€¢ Becquerel (Bq) = 1 decay/s</p>
                  <p className="ml-6">â€¢ Curie (Ci) = 3.7 Ã— 10Â¹â° Bq</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Mass-Energy Equivalence</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-4">Einstein's Equation</h3>
                <div className="bg-white dark:bg-gray-700 rounded p-6 my-4">
                  <p className="text-4xl font-bold text-center">E = mcÂ²</p>
                </div>
                
                <div className="space-y-2 text-gray-700 dark:text-gray-300 mt-4">
                  <p><strong>E</strong> = energy (J)</p>
                  <p><strong>m</strong> = mass (kg)</p>
                  <p><strong>c</strong> = speed of light = 3.00 Ã— 10â¸ m/s</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-4">Mass Defect (Î”m)</h3>
                <div className="bg-white dark:bg-gray-700 rounded p-6 my-4">
                  <p className="text-2xl font-bold text-center mb-4">Î”m = (Î£m<sub>reactants</sub> - Î£m<sub>products</sub>)</p>
                  <p className="text-center text-gray-600 dark:text-gray-400 mt-4">For nucleus:</p>
                  <p className="text-2xl font-bold text-center mt-4">Î”m = [Zm<sub>p</sub> + Nm<sub>n</sub>] - m<sub>nucleus</sub></p>
                </div>
                
                <div className="space-y-2 text-gray-700 dark:text-gray-300 mt-4">
                  <p><strong>Z</strong> = number of protons</p>
                  <p><strong>N</strong> = number of neutrons</p>
                  <p><strong>m<sub>p</sub></strong> = 1.00728 u (proton mass)</p>
                  <p><strong>m<sub>n</sub></strong> = 1.00867 u (neutron mass)</p>
                  <p><strong>1 u</strong> = 1.66054 Ã— 10â»Â²â· kg = 931.5 MeV/cÂ²</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-900 dark:text-red-300 mb-4">Binding Energy (BE)</h3>
                <div className="bg-white dark:bg-gray-700 rounded p-6 my-4">
                  <p className="text-3xl font-bold text-center mb-4">BE = Î”m Ã— cÂ²</p>
                  <p className="text-center text-gray-600 dark:text-gray-400 mt-4">In MeV:</p>
                  <p className="text-2xl font-bold text-center mt-4">BE (MeV) = Î”m (u) Ã— 931.5</p>
                </div>
                
                <div className="space-y-2 text-gray-700 dark:text-gray-300 mt-4">
                  <p><strong>Binding energy:</strong> Energy required to disassemble nucleus into separate nucleons</p>
                  <p><strong>Higher BE/nucleon:</strong> More stable nucleus</p>
                  <p><strong>Peak stability:</strong> Iron-56 (âµâ¶Fe) at ~8.8 MeV/nucleon</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">Binding Energy Per Nucleon</h3>
                <div className="bg-white dark:bg-gray-700 rounded p-6 my-4">
                  <p className="text-2xl font-bold text-center">BE/nucleon = BE / A</p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  <strong>A</strong> = mass number (total nucleons)
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Worked Examples</h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">Example 1: Half-Life Calculation</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> Â¹â´C has t<sub>1/2</sub> = 5,730 years. How much of a 100 g sample remains after 17,190 years?</p>
                  
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">Number of half-lives: n = t / t<sub>1/2</sub></p>
                  <p className="ml-6">n = 17,190 / 5,730 = 3.00 half-lives</p>
                  <p className="ml-6 mt-2">N(t) = Nâ‚€ Ã— (1/2)<sup>n</sup></p>
                  <p className="ml-6">N(t) = 100 g Ã— (1/2)Â³</p>
                  <p className="ml-6">N(t) = 100 g Ã— (1/8)</p>
                  
                  <p className="ml-6 font-bold text-green-600 text-xl mt-4">N(t) = 12.5 g remains</p>
                  <p className="ml-6 text-sm mt-2">87.5 g has decayed to Â¹â´N</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-4">Example 2: Binding Energy Calculation</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> Calculate the binding energy of â´He (mass = 4.00260 u).</p>
                  
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">â´He has 2 protons, 2 neutrons</p>
                  <p className="ml-6 mt-2">Mass of separated nucleons:</p>
                  <p className="ml-6">2 Ã— 1.00728 u + 2 Ã— 1.00867 u = 4.03190 u</p>
                  
                  <p className="ml-6 mt-2">Mass defect:</p>
                  <p className="ml-6">Î”m = 4.03190 - 4.00260 = 0.02930 u</p>
                  
                  <p className="ml-6 mt-2">Binding energy:</p>
                  <p className="ml-6">BE = 0.02930 u Ã— 931.5 MeV/u</p>
                  
                  <p className="ml-6 font-bold text-green-600 text-xl mt-4">BE = 27.3 MeV</p>
                  <p className="ml-6 mt-2">BE/nucleon = 27.3 / 4 = 6.83 MeV/nucleon</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-4">Example 3: Decay Constant</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> Â¹Â³Â¹I has t<sub>1/2</sub> = 8.0 days. Calculate Î» and the fraction remaining after 24 days.</p>
                  
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">Î» = 0.693 / t<sub>1/2</sub></p>
                  <p className="ml-6">Î» = 0.693 / 8.0 days = 0.0866 dayâ»Â¹</p>
                  
                  <p className="ml-6 mt-4">Fraction remaining:</p>
                  <p className="ml-6">N/Nâ‚€ = e<sup>-Î»t</sup> = e<sup>-0.0866Ã—24</sup></p>
                  <p className="ml-6">N/Nâ‚€ = e<sup>-2.08</sup> = 0.125</p>
                  
                  <p className="ml-6 font-bold text-green-600 text-xl mt-4">12.5% remains (1/8 of original)</p>
                  <p className="ml-6 text-sm mt-2">This is 3 half-lives: (1/2)Â³ = 1/8 âœ“</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Common Half-Lives</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900/50 dark:to-green-900/50">
                    <th className="p-3 text-left font-bold">Isotope</th>
                    <th className="p-3 text-left font-bold">Decay Mode</th>
                    <th className="p-3 text-left font-bold">Half-Life</th>
                    <th className="p-3 text-left font-bold">Use/Note</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="p-3 font-mono">Â¹â´C</td>
                    <td className="p-3">Î²â»</td>
                    <td className="p-3">5,730 years</td>
                    <td className="p-3">Carbon dating</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="p-3 font-mono">Â²Â³â¸U</td>
                    <td className="p-3">Î±</td>
                    <td className="p-3">4.5 Ã— 10â¹ years</td>
                    <td className="p-3">Geological dating</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono">Â¹Â³Â¹I</td>
                    <td className="p-3">Î²â»</td>
                    <td className="p-3">8.0 days</td>
                    <td className="p-3">Medical imaging</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="p-3 font-mono">â¹â¹áµTc</td>
                    <td className="p-3">Î³</td>
                    <td className="p-3">6.0 hours</td>
                    <td className="p-3">Medical imaging</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono">Â²Â²â¶Ra</td>
                    <td className="p-3">Î±</td>
                    <td className="p-3">1,600 years</td>
                    <td className="p-3">Historical radium</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="p-3 font-mono">Â³H (tritium)</td>
                    <td className="p-3">Î²â»</td>
                    <td className="p-3">12.3 years</td>
                    <td className="p-3">Exit signs, tracers</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Common Mistakes</h2>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">âš ï¸</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Confusing Mass Number and Atomic Number Changes</h3>
                  <p className="text-gray-700 dark:text-gray-300">Alpha: A-4, Z-2; Betaâ»: A same, Z+1; Betaâº: A same, Z-1</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">âš ï¸</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Wrong Unit Conversions</h3>
                  <p className="text-gray-700 dark:text-gray-300">1 u = 931.5 MeV/cÂ², not just 931.5 MeV!</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">âš ï¸</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Mass Defect Sign</h3>
                  <p className="text-gray-700 dark:text-gray-300">For stable nuclei, mass defect is POSITIVE (products lighter than reactants)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Related Tools</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/chemistry-formulas/nuclear-binding-energy" className="block p-6 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Nuclear Binding Energy Calculator</h3>
                <p className="text-emerald-100">Mass defect and E = Î”mcÂ²</p>
              </Link>
              <Link href="/chemistry-formulas/nuclear-binding-energy" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Nuclear Binding Energy</h3>
                <p className="text-gray-600 dark:text-gray-400">Binding energy formula</p>
              </Link>
              <Link href="/chemistry-formulas/half-life-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Half-Life Formula</h3>
                <p className="text-gray-600 dark:text-gray-400">Radioactive decay</p>
              </Link>
              <Link href="/chemistry-formulas/nuclear-chemistry-formula" className="block p-6 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">All Nuclear Calculators</h3>
                <p className="text-gray-100">Explore all nuclear chemistry tools</p>
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
            "headline": "Nuclear Chemistry Formula",
            "description": "Nuclear Chemistry Formula on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/nuclear-chemistry-formula",
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
                "name": "Nuclear Chemistry Formula",
                "item": "https://chemsolved.com/chemistry-formulas/nuclear-chemistry-formula"
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
