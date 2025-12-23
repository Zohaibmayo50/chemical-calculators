import ReactionOrderCalculator from '@/components/calculators/ReactionOrderCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata = {
  title: 'Reaction Order Calculator | Chemistry Calculators',
  description: 'Calculate rate constants, reaction times, and concentrations for zero, first, and second order reactions. Determine half-life and analyze kinetics.',
  keywords: 'reaction order, chemical kinetics, rate constant, half-life, integrated rate law, zero order, first order, second order',
};

export default function ReactionOrderCalculatorPage() {  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-tertiary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Reaction Order Calculator
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Analyze chemical kinetics for zero, first, and second order reactions
          </p>
        </div>

        <ReactionOrderCalculator />

        {/* Educational Content */}
        <div className="mt-12 space-y-8">
          {/* What is Reaction Order? */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              What is Reaction Order?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Reaction order</strong> describes how the rate of a chemical reaction depends on the concentration 
              of reactants. It is determined experimentally and reveals the mechanism by which reactions occur.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">General Rate Law:</h3>
              <p className="text-blue-800 dark:text-blue-200 font-mono text-lg mb-2">
                Rate = k[A]ⁿ
              </p>
              <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                <li>• <strong>k</strong> = rate constant</li>
                <li>• <strong>[A]</strong> = concentration of reactant A</li>
                <li>• <strong>n</strong> = reaction order (0, 1, 2, or fractional)</li>
              </ul>
            </div>
          </section>

          {/* Types of Reaction Orders */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Types of Reaction Orders
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Zero Order (n = 0)
                </h3>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg space-y-2">
                  <p className="text-sm text-gray-800 dark:text-gray-200">
                    <strong>Rate Law:</strong> <span className="font-mono">Rate = k</span>
                  </p>
                  <p className="text-sm text-gray-800 dark:text-gray-200">
                    <strong>Integrated Law:</strong> <span className="font-mono">[A]ₜ = [A]₀ - kt</span>
                  </p>
                  <p className="text-sm text-gray-800 dark:text-gray-200">
                    <strong>Half-Life:</strong> <span className="font-mono">t₁/₂ = [A]₀/(2k)</span> (depends on initial concentration)
                  </p>
                  <p className="text-sm text-gray-800 dark:text-gray-200">
                    <strong>Linear Plot:</strong> [A] vs time gives straight line
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                    Rate is <strong>independent</strong> of concentration. Often occurs when reaction occurs 
                    on a saturated catalyst surface or with enzyme saturation.
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    Example: Decomposition of N₂O on platinum surface
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  First Order (n = 1)
                </h3>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg space-y-2">
                  <p className="text-sm text-gray-800 dark:text-gray-200">
                    <strong>Rate Law:</strong> <span className="font-mono">Rate = k[A]</span>
                  </p>
                  <p className="text-sm text-gray-800 dark:text-gray-200">
                    <strong>Integrated Law:</strong> <span className="font-mono">ln[A]ₜ = ln[A]₀ - kt</span>
                  </p>
                  <p className="text-sm text-gray-800 dark:text-gray-200">
                    <strong>Half-Life:</strong> <span className="font-mono">t₁/₂ = ln(2)/k ≈ 0.693/k</span> (constant, independent of concentration)
                  </p>
                  <p className="text-sm text-gray-800 dark:text-gray-200">
                    <strong>Linear Plot:</strong> ln[A] vs time gives straight line with slope = -k
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                    Rate is <strong>directly proportional</strong> to concentration. Most common reaction order.
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    Examples: Radioactive decay, sucrose hydrolysis, N₂O₅ decomposition
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Second Order (n = 2)
                </h3>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg space-y-2">
                  <p className="text-sm text-gray-800 dark:text-gray-200">
                    <strong>Rate Law:</strong> <span className="font-mono">Rate = k[A]²</span>
                  </p>
                  <p className="text-sm text-gray-800 dark:text-gray-200">
                    <strong>Integrated Law:</strong> <span className="font-mono">1/[A]ₜ = 1/[A]₀ + kt</span>
                  </p>
                  <p className="text-sm text-gray-800 dark:text-gray-200">
                    <strong>Half-Life:</strong> <span className="font-mono">t₁/₂ = 1/(k[A]₀)</span> (inversely proportional to initial concentration)
                  </p>
                  <p className="text-sm text-gray-800 dark:text-gray-200">
                    <strong>Linear Plot:</strong> 1/[A] vs time gives straight line with slope = k
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                    Rate is proportional to <strong>concentration squared</strong>. Common in gas phase reactions.
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    Examples: NO₂ decomposition (2NO₂ → 2NO + O₂), many dimerization reactions
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Determining Reaction Order */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              How to Determine Reaction Order
            </h2>
            
            <div className="space-y-4">
              <div className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">
                  Method 1: Graphical Analysis
                </h3>
                <p className="text-sm text-indigo-800 dark:text-indigo-200">
                  Plot concentration data in different forms:
                </p>
                <ul className="text-sm text-indigo-700 dark:text-indigo-300 space-y-1 mt-2">
                  <li>• If [A] vs t is linear → Zero order</li>
                  <li>• If ln[A] vs t is linear → First order</li>
                  <li>• If 1/[A] vs t is linear → Second order</li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                  Method 2: Half-Life Analysis
                </h3>
                <p className="text-sm text-green-800 dark:text-green-200">
                  Measure half-lives at different initial concentrations:
                </p>
                <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 mt-2">
                  <li>• If t₁/₂ increases with decreasing [A]₀ → Zero order</li>
                  <li>• If t₁/₂ is constant → First order</li>
                  <li>• If t₁/₂ increases with decreasing [A]₀ → Second order</li>
                </ul>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">
                  Method 3: Initial Rates Method
                </h3>
                <p className="text-sm text-purple-800 dark:text-purple-200">
                  Compare initial rates at different initial concentrations:
                </p>
                <p className="text-sm text-purple-700 dark:text-purple-300 mt-2 font-mono">
                  If [A]₀ doubles and rate doubles → First order
                  <br />
                  If [A]₀ doubles and rate quadruples → Second order
                </p>
              </div>
            </div>
          </section>

          {/* Example Problem */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Example Problem
            </h2>
            <div className="border-l-4 border-tertiary-500 pl-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                First-Order Radioactive Decay
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Problem:</strong> Carbon-14 has a half-life of 5730 years. If a sample initially contains 
                100 g of ¹⁴C, how much remains after 10,000 years?
              </p>

              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg space-y-2">
                <p className="text-sm text-gray-800 dark:text-gray-200 font-semibold">Solution:</p>
                
                <p className="font-mono text-sm text-gray-700 dark:text-gray-300">
                  Step 1: Calculate k from half-life
                  <br />
                  k = ln(2)/t₁/₂ = 0.693/5730 = 1.21×10⁻⁴ year⁻¹
                </p>

                <p className="font-mono text-sm text-gray-700 dark:text-gray-300">
                  Step 2: Use integrated first-order law
                  <br />
                  ln[A]ₜ = ln[A]₀ - kt
                  <br />
                  ln[A]ₜ = ln(100) - (1.21×10⁻⁴)(10000)
                  <br />
                  ln[A]ₜ = 4.605 - 1.21 = 3.395
                  <br />
                  [A]ₜ = e³·³⁹⁵ = 29.8 g
                </p>

                <p className="font-semibold text-tertiary-600 dark:text-tertiary-400">
                  Answer: 29.8 g of ¹⁴C remains after 10,000 years
                </p>

                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  This represents approximately 1.75 half-lives (10000/5730 ≈ 1.75)
                </p>
              </div>
            </div>
          </section>

          {/* Applications */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Real-World Applications
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">⚛️ Nuclear Chemistry</h3>
                <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                  <li>• Radioactive decay (first-order)</li>
                  <li>• Carbon dating and age determination</li>
                  <li>• Nuclear medicine dosing</li>
                  <li>• Reactor kinetics</li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">💊 Pharmacology</h3>
                <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                  <li>• Drug elimination kinetics</li>
                  <li>• Dosing schedules</li>
                  <li>• Therapeutic window maintenance</li>
                  <li>• First-pass metabolism</li>
                </ul>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">🏭 Industrial Chemistry</h3>
                <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-1">
                  <li>• Reactor design and optimization</li>
                  <li>• Catalyst performance evaluation</li>
                  <li>• Production rate calculations</li>
                  <li>• Quality control</li>
                </ul>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">🌍 Environmental Science</h3>
                <ul className="text-sm text-yellow-800 dark:text-yellow-200 space-y-1">
                  <li>• Pollutant degradation rates</li>
                  <li>• Ozone depletion kinetics</li>
                  <li>• Biodegradation of contaminants</li>
                  <li>• Atmospheric chemistry models</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Rate Constant and Temperature */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Temperature Dependence: Arrhenius Equation
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The rate constant k varies with temperature according to the <strong>Arrhenius equation</strong>:
            </p>
            <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg">
              <p className="text-orange-800 dark:text-orange-200 font-mono text-lg mb-2">
                k = A·e^(-Ea/RT)
              </p>
              <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                <li>• <strong>A</strong> = pre-exponential factor (frequency factor)</li>
                <li>• <strong>Ea</strong> = activation energy</li>
                <li>• <strong>R</strong> = gas constant (8.314 J/(mol·K))</li>
                <li>• <strong>T</strong> = temperature (K)</li>
              </ul>
              <p className="text-sm text-orange-800 dark:text-orange-200 mt-3">
                Higher temperatures increase k, making reactions faster. A rule of thumb: 
                reaction rate doubles for every 10°C temperature increase.
              </p>
            </div>
          </section>
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
                        href="/kinetics-calculators/integrated-rate-law-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Integrated Rate Law Calculator</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/kinetics-calculators/collision-theory-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Collision Theory Calculator</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/chemical-reaction-calculators/radioactive-decay-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Radioactive Decay Calculator</span>
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