import RadioactiveDecayCalculator from '@/components/calculators/RadioactiveDecayCalculator';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: 'Radioactive Decay Calculator - Half-Life & Nuclear Kinetics | ChemCalc',
  description: 'Calculate radioactive decay, half-life, and decay constants using N = N₀e^(-λt). Includes common isotopes, carbon dating, and nuclear chemistry applications.',
  keywords: 'radioactive decay calculator, half-life, nuclear chemistry, decay constant, carbon dating, isotopes, first-order kinetics, nuclear decay',
};

export default function RadioactiveDecayCalculatorPage() {  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-block p-3 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-2xl mb-4">
              <svg className="w-16 h-16 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Radioactive Decay Calculator
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Nuclear Chemistry & First-Order Kinetics
            </p>
          </div>

          <RadioactiveDecayCalculator />

          {/* Educational Content */}
          <div className="mt-12 prose prose-lg max-w-none dark:prose-invert">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Understanding Radioactive Decay
              </h2>

              <div className="space-y-6 text-gray-700 dark:text-gray-300">
                
                <section>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    What is Radioactive Decay?
                  </h3>
                  <p className="leading-relaxed mb-4">
                    Radioactive decay is the spontaneous transformation of an unstable atomic nucleus into a more stable configuration, 
                    accompanied by the emission of radiation (alpha particles, beta particles, or gamma rays). This process is 
                    <strong> random for individual atoms</strong> but follows <strong>predictable statistical patterns</strong> for 
                    large populations of atoms.
                  </p>
                  <p className="leading-relaxed">
                    Unlike chemical reactions, radioactive decay is <strong>not affected by external conditions</strong> such as temperature, 
                    pressure, or chemical environment. The decay rate is an intrinsic property of each radioactive isotope and is 
                    characterized by its <strong>half-life</strong> or <strong>decay constant</strong>.
                  </p>
                </section>

                <section className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    The Decay Equations
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-blue-500">
                      <p className="font-bold text-lg mb-2">Exponential Decay Equation:</p>
                      <p className="text-3xl font-mono mb-3">N(t) = N₀e<sup>-λt</sup></p>
                      <ul className="space-y-1 text-sm">
                        <li><strong>N(t)</strong> = amount remaining at time t</li>
                        <li><strong>N₀</strong> = initial amount at t = 0</li>
                        <li><strong>λ</strong> (lambda) = decay constant (probability of decay per unit time)</li>
                        <li><strong>t</strong> = time elapsed</li>
                        <li><strong>e</strong> = Euler's number ≈ 2.71828</li>
                      </ul>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-purple-500">
                      <p className="font-bold text-lg mb-2">Half-Life Relationship:</p>
                      <p className="text-3xl font-mono mb-3">t<sub>½</sub> = ln(2)/λ = 0.693/λ</p>
                      <ul className="space-y-1 text-sm">
                        <li><strong>t<sub>½</sub></strong> = half-life (time for 50% decay)</li>
                        <li><strong>ln(2)</strong> ≈ 0.693147</li>
                        <li>Half-life is constant for each isotope</li>
                      </ul>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-green-500">
                      <p className="font-bold text-lg mb-2">Alternative Form (using half-life):</p>
                      <p className="text-3xl font-mono mb-3">N(t) = N₀(½)<sup>t/t½</sup></p>
                      <p className="text-sm">This form makes it easy to see that after each half-life, half the sample remains.</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Understanding Half-Life
                  </h3>
                  <p className="leading-relaxed mb-4">
                    The <strong>half-life (t<sub>½</sub>)</strong> is the time required for half of the radioactive nuclei in a sample 
                    to decay. It is the most commonly used measure of decay rate because it's intuitive and constant regardless of the 
                    amount of material.
                  </p>
                  
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-5 rounded-lg mb-4">
                    <h4 className="font-bold mb-3">Decay Progress by Half-Lives:</h4>
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                      <div className="bg-white dark:bg-gray-800 p-3 rounded">
                        <strong>0 half-lives (t = 0):</strong> 100% remains
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-3 rounded">
                        <strong>1 half-life:</strong> 50% remains
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-3 rounded">
                        <strong>2 half-lives:</strong> 25% remains
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-3 rounded">
                        <strong>3 half-lives:</strong> 12.5% remains
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-3 rounded">
                        <strong>4 half-lives:</strong> 6.25% remains
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-3 rounded">
                        <strong>10 half-lives:</strong> 0.098% remains
                      </div>
                    </div>
                    <p className="mt-3 text-xs bg-blue-100 dark:bg-blue-900/30 p-2 rounded">
                      <strong>General formula:</strong> After n half-lives, (½)<sup>n</sup> = (1/2<sup>n</sup>) of the original sample remains.
                    </p>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg">
                      <thead>
                        <tr className="bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30">
                          <th className="px-4 py-3 text-left font-semibold border-b">Isotope</th>
                          <th className="px-4 py-3 text-left font-semibold border-b">Half-Life</th>
                          <th className="px-4 py-3 text-left font-semibold border-b">Primary Application</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="px-4 py-3 border-b"><strong>Carbon-14 (¹⁴C)</strong></td>
                          <td className="px-4 py-3 border-b">5,730 years</td>
                          <td className="px-4 py-3 border-b">Archaeological dating (up to ~50,000 years)</td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="px-4 py-3 border-b"><strong>Uranium-238 (²³⁸U)</strong></td>
                          <td className="px-4 py-3 border-b">4.47 billion years</td>
                          <td className="px-4 py-3 border-b">Geological dating, nuclear fuel</td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="px-4 py-3 border-b"><strong>Uranium-235 (²³⁵U)</strong></td>
                          <td className="px-4 py-3 border-b">704 million years</td>
                          <td className="px-4 py-3 border-b">Nuclear reactors, weapons</td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="px-4 py-3 border-b"><strong>Plutonium-239 (²³⁹Pu)</strong></td>
                          <td className="px-4 py-3 border-b">24,110 years</td>
                          <td className="px-4 py-3 border-b">Nuclear weapons, reactor fuel</td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="px-4 py-3 border-b"><strong>Radium-226 (²²⁶Ra)</strong></td>
                          <td className="px-4 py-3 border-b">1,600 years</td>
                          <td className="px-4 py-3 border-b">Historical medical treatments</td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="px-4 py-3 border-b"><strong>Cobalt-60 (⁶⁰Co)</strong></td>
                          <td className="px-4 py-3 border-b">5.27 years</td>
                          <td className="px-4 py-3 border-b">Radiotherapy, food irradiation</td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="px-4 py-3 border-b"><strong>Iodine-131 (¹³¹I)</strong></td>
                          <td className="px-4 py-3 border-b">8.02 days</td>
                          <td className="px-4 py-3 border-b">Thyroid treatment, medical imaging</td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="px-4 py-3 border-b"><strong>Technetium-99m (⁹⁹ᵐTc)</strong></td>
                          <td className="px-4 py-3 border-b">6.01 hours</td>
                          <td className="px-4 py-3 border-b">Medical diagnostic imaging</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Worked Example: Carbon-14 Dating
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold mb-2">Problem:</p>
                      <p>
                        An ancient wooden artifact contains 25% of the ¹⁴C found in living wood. How old is the artifact? 
                        (t<sub>½</sub> of ¹⁴C = 5,730 years)
                      </p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 p-4 rounded">
                      <p className="font-semibold mb-2">Step 1: Identify known values</p>
                      <p className="font-mono text-sm">N(t) = 25% of N₀ = 0.25N₀</p>
                      <p className="font-mono text-sm">t<sub>½</sub> = 5,730 years</p>
                      <p className="font-mono text-sm">Find: t = ?</p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 p-4 rounded">
                      <p className="font-semibold mb-2">Step 2: Calculate decay constant</p>
                      <p className="font-mono text-sm">λ = ln(2) / t<sub>½</sub> = 0.693147 / 5,730 years</p>
                      <p className="font-mono text-sm">λ = 1.21 × 10⁻⁴ year⁻¹</p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 p-4 rounded">
                      <p className="font-semibold mb-2">Step 3: Use decay equation</p>
                      <p className="font-mono text-sm">N(t) = N₀e<sup>-λt</sup></p>
                      <p className="font-mono text-sm">0.25N₀ = N₀e<sup>-λt</sup></p>
                      <p className="font-mono text-sm">0.25 = e<sup>-λt</sup></p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 p-4 rounded">
                      <p className="font-semibold mb-2">Step 4: Take natural logarithm of both sides</p>
                      <p className="font-mono text-sm">ln(0.25) = -λt</p>
                      <p className="font-mono text-sm">-1.386 = -(1.21 × 10⁻⁴)t</p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 p-4 rounded">
                      <p className="font-semibold mb-2">Step 5: Solve for t</p>
                      <p className="font-mono text-sm">t = 1.386 / (1.21 × 10⁻⁴ year⁻¹)</p>
                      <p className="font-mono text-sm">t = 11,460 years</p>
                    </div>
                    
                    <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded border-l-4 border-green-600">
                      <p className="font-semibold mb-2">Alternative Approach (using half-lives):</p>
                      <p className="text-sm mb-2">25% = (1/2)² means 2 half-lives have passed</p>
                      <p className="font-mono text-sm">t = 2 × 5,730 years = 11,460 years ✓</p>
                    </div>
                    
                    <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded border-l-4 border-green-600">
                      <p className="font-semibold mb-1">Answer:</p>
                      <p>The artifact is approximately <strong>11,460 years old</strong> (±100 years depending on measurement precision).</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    First-Order Kinetics
                  </h3>
                  <p className="leading-relaxed mb-4">
                    Radioactive decay is a classic example of <strong>first-order kinetics</strong>, meaning the decay rate is 
                    proportional to the amount of radioactive material present:
                  </p>
                  
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-5 rounded-lg space-y-3">
                    <div>
                      <p className="font-bold mb-2">Rate Law:</p>
                      <p className="font-mono text-lg">Rate = -dN/dt = λN</p>
                      <p className="text-sm mt-2">The negative sign indicates decrease in amount over time.</p>
                    </div>
                    
                    <div className="border-t border-gray-300 dark:border-gray-600 pt-3">
                      <p className="font-bold mb-2">Characteristics of First-Order Decay:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm ml-3">
                        <li>Constant half-life (independent of initial amount)</li>
                        <li>Exponential decrease over time</li>
                        <li>Plot of ln(N) vs. t gives a straight line with slope -λ</li>
                        <li>Time for 90% decay = 3.32 half-lives</li>
                        <li>Time for 99% decay = 6.64 half-lives</li>
                        <li>Theoretically never reaches exactly zero</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Applications of Radioactive Decay
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg">
                      <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                        <span className="text-2xl">📅</span>
                        Radiometric Dating
                      </h4>
                      <p className="text-sm mb-2">
                        <strong>Carbon-14:</strong> Dating organic materials up to ~50,000 years old (archaeology, paleontology)
                      </p>
                      <p className="text-sm">
                        <strong>Uranium-lead:</strong> Dating rocks and minerals billions of years old (geology, Earth's age)
                      </p>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg">
                      <h4 className="font-bold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                        <span className="text-2xl">🏥</span>
                        Medical Applications
                      </h4>
                      <p className="text-sm mb-2">
                        <strong>Diagnostic imaging:</strong> ⁹⁹ᵐTc for organ scans, PET scans using ¹⁸F
                      </p>
                      <p className="text-sm">
                        <strong>Cancer treatment:</strong> ⁶⁰Co radiotherapy, ¹³¹I for thyroid cancer
                      </p>
                    </div>
                    
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg">
                      <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2 flex items-center gap-2">
                        <span className="text-2xl">⚡</span>
                        Energy Production
                      </h4>
                      <p className="text-sm mb-2">
                        <strong>Nuclear power:</strong> Controlled fission of ²³⁵U generates electricity
                      </p>
                      <p className="text-sm">
                        <strong>RTGs:</strong> Plutonium-238 decay powers spacecraft (Voyager, Curiosity rover)
                      </p>
                    </div>
                    
                    <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg">
                      <h4 className="font-bold text-red-900 dark:text-red-100 mb-2 flex items-center gap-2">
                        <span className="text-2xl">🍎</span>
                        Food & Agriculture
                      </h4>
                      <p className="text-sm mb-2">
                        <strong>Food irradiation:</strong> ⁶⁰Co gamma rays kill bacteria, extend shelf life
                      </p>
                      <p className="text-sm">
                        <strong>Crop mutation:</strong> Controlled radiation creates new plant varieties
                      </p>
                    </div>
                    
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-lg">
                      <h4 className="font-bold text-yellow-900 dark:text-yellow-100 mb-2 flex items-center gap-2">
                        <span className="text-2xl">🔬</span>
                        Scientific Research
                      </h4>
                      <p className="text-sm mb-2">
                        <strong>Tracers:</strong> Radioactive isotopes track chemical pathways in organisms
                      </p>
                      <p className="text-sm">
                        <strong>Autoradiography:</strong> Visualize distribution of radioactive molecules
                      </p>
                    </div>
                    
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-lg">
                      <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-2 flex items-center gap-2">
                        <span className="text-2xl">🏭</span>
                        Industrial Uses
                      </h4>
                      <p className="text-sm mb-2">
                        <strong>Thickness gauging:</strong> Beta radiation measures paper, metal thickness
                      </p>
                      <p className="text-sm">
                        <strong>Smoke detectors:</strong> Americium-241 ionizes air to detect smoke
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Types of Radioactive Decay
                  </h3>
                  <div className="space-y-3">
                    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-l-4 border-red-500">
                      <h4 className="font-bold mb-2">Alpha Decay (α)</h4>
                      <p className="text-sm mb-2">
                        Emission of helium nucleus (²He⁴): <span className="font-mono">A → A-4 + α</span>
                      </p>
                      <p className="text-sm">
                        <strong>Example:</strong> ²³⁸U → ²³⁴Th + α | <strong>Properties:</strong> Low penetration, stopped by paper
                      </p>
                    </div>
                    
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-bold mb-2">Beta Decay (β⁻ and β⁺)</h4>
                      <p className="text-sm mb-2">
                        <strong>β⁻:</strong> Neutron → proton + electron + antineutrino
                      </p>
                      <p className="text-sm">
                        <strong>Example:</strong> ¹⁴C → ¹⁴N + β⁻ | <strong>Properties:</strong> Moderate penetration, stopped by aluminum
                      </p>
                    </div>
                    
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border-l-4 border-purple-500">
                      <h4 className="font-bold mb-2">Gamma Decay (γ)</h4>
                      <p className="text-sm mb-2">
                        Emission of high-energy photon (no change in atomic number or mass)
                      </p>
                      <p className="text-sm">
                        <strong>Example:</strong> ⁹⁹ᵐTc → ⁹⁹Tc + γ | <strong>Properties:</strong> High penetration, needs lead shielding
                      </p>
                    </div>
                  </div>
                </section>

                <section className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Nuclear Waste & Safety Considerations
                  </h3>
                  <div className="space-y-3">
                    <p className="leading-relaxed">
                      Understanding decay rates is crucial for nuclear waste management. Long-lived isotopes like ²³⁹Pu (t<sub>½</sub> = 
                      24,110 years) remain hazardous for hundreds of thousands of years:
                    </p>
                    
                    <div className="bg-white dark:bg-gray-800 p-4 rounded">
                      <p className="font-semibold mb-2">Safe Storage Requirements:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm ml-3">
                        <li><strong>10 half-lives:</strong> Reduces to ~0.1% of original activity (considered "safe")</li>
                        <li>For ²³⁹Pu: 10 × 24,110 = 241,100 years of isolation needed</li>
                        <li>For ¹³¹I: 10 × 8 days = 80 days (short-term storage)</li>
                        <li>Geological repositories designed for million-year stability</li>
                      </ul>
                    </div>
                    
                    <div className="bg-yellow-100 dark:bg-yellow-900/30 p-4 rounded border-l-4 border-yellow-600">
                      <p className="text-sm">
                        <strong>Important:</strong> Even "depleted" nuclear waste contains multiple isotopes with varying half-lives, 
                        requiring long-term monitoring and containment. The decay chain of uranium includes radium, radon, and other 
                        hazardous isotopes.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Problem-Solving Strategy
                  </h3>
                  <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 p-5 rounded-lg space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-xl font-bold text-primary-600">1.</span>
                      <div>
                        <p className="font-semibold">Identify given values</p>
                        <p className="text-sm">List N₀, N(t), t, t<sub>½</sub>, or λ as provided in the problem.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-xl font-bold text-primary-600">2.</span>
                      <div>
                        <p className="font-semibold">Convert all units consistently</p>
                        <p className="text-sm">Ensure time units match (all years, or all seconds, etc.).</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-xl font-bold text-primary-600">3.</span>
                      <div>
                        <p className="font-semibold">Calculate λ if needed</p>
                        <p className="text-sm">If only t<sub>½</sub> is given, calculate λ = ln(2)/t<sub>½</sub>.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-xl font-bold text-primary-600">4.</span>
                      <div>
                        <p className="font-semibold">Choose the appropriate equation</p>
                        <p className="text-sm">Use N(t) = N₀e<sup>-λt</sup> or N(t) = N₀(½)<sup>t/t½</sup> depending on what's easier.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-xl font-bold text-primary-600">5.</span>
                      <div>
                        <p className="font-semibold">Solve algebraically</p>
                        <p className="text-sm">Use logarithms when solving for time: t = -ln(N/N₀)/λ.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-xl font-bold text-primary-600">6.</span>
                      <div>
                        <p className="font-semibold">Check reasonableness</p>
                        <p className="text-sm">Does the answer make physical sense? Is it positive? Does the fraction remaining make sense?</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Common Mistakes to Avoid
                  </h3>
                  <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-xl">❌</span>
                      <div>
                        <p className="font-semibold">Using inconsistent time units</p>
                        <p className="text-sm">If t<sub>½</sub> is in years, time must also be in years.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-xl">❌</span>
                      <div>
                        <p className="font-semibold">Confusing N(t) with N₀</p>
                        <p className="text-sm">N(t) is the remaining amount; N₀ is the initial amount.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-xl">❌</span>
                      <div>
                        <p className="font-semibold">Forgetting the negative sign</p>
                        <p className="text-sm">The exponent in e<sup>-λt</sup> must be negative for decay.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-xl">❌</span>
                      <div>
                        <p className="font-semibold">Using log instead of ln</p>
                        <p className="text-sm">The natural logarithm (ln) must be used with exponential equations.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-xl">❌</span>
                      <div>
                        <p className="font-semibold">Assuming linear decay</p>
                        <p className="text-sm">Radioactive decay is exponential, not linear. After 2 half-lives, 25% remains (not 0%).</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Quick Reference Guide
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-bold mb-2">Key Equations:</h4>
                      <ul className="space-y-1 font-mono text-xs">
                        <li>N(t) = N₀e<sup>-λt</sup></li>
                        <li>N(t) = N₀(½)<sup>t/t½</sup></li>
                        <li>λ = ln(2)/t<sub>½</sub></li>
                        <li>t = -ln(N/N₀)/λ</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Key Concepts:</h4>
                      <ul className="space-y-1">
                        <li>Half-life is constant for each isotope</li>
                        <li>After n half-lives: (½)<sup>n</sup> remains</li>
                        <li>First-order kinetics (rate ∝ amount)</li>
                        <li>ln(2) ≈ 0.693147</li>
                      </ul>
                    </div>
                  </div>
                </section>

              </div>
            </div>
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
                        href="/nuclear-calculators/nuclear-binding-energy-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Nuclear Binding Energy Calculator</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/kinetics-calculators/integrated-rate-law-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Integrated Rate Law Calculator</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/kinetics-calculators/reaction-order-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Reaction Order Calculator</span>
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