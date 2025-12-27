import ArrheniusEquationCalculator from '@/components/calculators/ArrheniusEquationCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata = {
  title: 'Arrhenius Equation Calculator | Chemistry Calculators',
  description: 'Calculate rate constants, activation energy, and temperature effects using the Arrhenius equation. Understand temperature dependence of reaction rates.',
  keywords: 'Arrhenius equation, activation energy, rate constant, temperature effect, chemical kinetics, reaction rate',
};

export default function ArrheniusEquationCalculatorPage() {  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-tertiary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Arrhenius Equation Calculator
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Calculate rate constants and understand temperature effects on reaction rates
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ArrheniusEquationCalculator />
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Related Calculators</h3>
              <div className="space-y-3">
                <a href="/kinetics-calculators/reaction-rate-calculator" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors">
                  <div className="font-semibold text-gray-900 dark:text-white">Reaction Rate</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Calculate average and instantaneous rates</div>
                </a>
                <a href="/kinetics-calculators/integrated-rate-law-calculator" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors">
                  <div className="font-semibold text-gray-900 dark:text-white">Integrated Rate Laws</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Calculate concentrations over time</div>
                </a>
                <a href="/chemical-reaction-calculators/half-life-calculator" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors">
                  <div className="font-semibold text-gray-900 dark:text-white">Half-Life</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Calculate reaction half-life</div>
                </a>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">📐 Related Formulas</h3>
                <div className="space-y-3">
                  <a href="/chemistry-formulas/arrhenius-equation" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors">
                    <div className="font-semibold text-gray-900 dark:text-white">Arrhenius Equation</div>
                  </a>
                  <a href="/chemistry-formulas/rate-law" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors">
                    <div className="font-semibold text-gray-900 dark:text-white">Rate Law Formula</div>
                  </a>
                </div>
              </div>
              <a href="/kinetics-calculators" className="block mt-4 text-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium">
                All Kinetics Calculators →
              </a>
            </div>
          </div>
        </div>

        {/* Educational Content */}
        <div className="mt-12 space-y-8">
          {/* What is the Arrhenius Equation? */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              What is the Arrhenius Equation?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The <strong>Arrhenius equation</strong> describes how the rate constant (k) of a chemical reaction 
              depends on temperature and activation energy. It was proposed by Swedish chemist Svante Arrhenius in 1889.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">The Equation:</h3>
              <p className="text-blue-800 dark:text-blue-200 font-mono text-xl mb-3">
                k = A · e^(-Ea/RT)
              </p>
              <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                <li>• <strong>k</strong> = rate constant (units depend on reaction order)</li>
                <li>• <strong>A</strong> = pre-exponential factor or frequency factor (same units as k)</li>
                <li>• <strong>Ea</strong> = activation energy (J/mol or kJ/mol)</li>
                <li>• <strong>R</strong> = universal gas constant = 8.314 J/(mol·K)</li>
                <li>• <strong>T</strong> = absolute temperature (Kelvin)</li>
                <li>• <strong>e</strong> = Euler's number ≈ 2.71828</li>
              </ul>
            </div>
          </section>

          {/* Understanding Each Term */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Understanding Each Component
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Rate Constant (k)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  The proportionality constant in the rate law that relates reaction rate to reactant concentrations.
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    • Larger k → faster reaction
                    <br />
                    • Increases exponentially with temperature
                    <br />
                    • Units: s⁻¹ (first order), M⁻¹s⁻¹ (second order), etc.
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Activation Energy (Ea)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  The minimum energy required for reactants to form products. Energy barrier to overcome.
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    • Higher Ea → slower reaction (harder to activate)
                    <br />
                    • Lower Ea → faster reaction (easier to activate)
                    <br />
                    • Catalysts lower Ea without being consumed
                    <br />
                    • Typical range: 50-250 kJ/mol for most reactions
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Pre-Exponential Factor (A)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Also called the frequency factor. Related to collision frequency and orientation.
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    • Represents frequency of collisions with proper orientation
                    <br />
                    • Generally between 10⁸ and 10¹⁴ for most reactions
                    <br />
                    • Weakly temperature-dependent (often treated as constant)
                    <br />
                    • Higher A → more frequent successful collisions
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Temperature (T)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Absolute temperature in Kelvin. Must be positive and affects k exponentially.
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    • Must use Kelvin: K = °C + 273.15
                    <br />
                    • Higher T → more molecules with E ≥ Ea
                    <br />
                    • Rule of thumb: k doubles every 10°C increase
                    <br />
                    • Exponential relationship with k
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Forms of the Equation */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Different Forms of the Arrhenius Equation
            </h2>

            <div className="space-y-6">
              <div className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">
                  1. Exponential Form
                </h3>
                <p className="font-mono text-lg text-indigo-800 dark:text-indigo-200 mb-2">
                  k = A·e^(-Ea/RT)
                </p>
                <p className="text-sm text-indigo-700 dark:text-indigo-300">
                  Most common form. Directly calculates k from Ea, A, and T.
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                  2. Logarithmic Form
                </h3>
                <p className="font-mono text-lg text-green-800 dark:text-green-200 mb-2">
                  ln(k) = ln(A) - Ea/(RT)
                </p>
                <p className="text-sm text-green-700 dark:text-green-300 mb-2">
                  Linear form: y = mx + b
                </p>
                <p className="text-sm text-green-700 dark:text-green-300">
                  Plot ln(k) vs 1/T gives straight line with slope = -Ea/R and intercept = ln(A)
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">
                  3. Two-Point Form
                </h3>
                <p className="font-mono text-lg text-purple-800 dark:text-purple-200 mb-2">
                  ln(k₂/k₁) = -(Ea/R)·(1/T₂ - 1/T₁)
                </p>
                <p className="text-sm text-purple-700 dark:text-purple-300">
                  Useful when you know k at two different temperatures. Eliminates need to know A.
                </p>
              </div>
            </div>
          </section>

          {/* Example Problems */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Example Problems
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-tertiary-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Example 1: Calculate Rate Constant
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Problem:</strong> A reaction has Ea = 100 kJ/mol and A = 1.0 × 10¹³ s⁻¹. 
                  What is k at 500 K?
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg space-y-2">
                  <p className="font-mono text-sm text-gray-800 dark:text-gray-200">
                    k = A·e^(-Ea/RT)
                  </p>
                  <p className="font-mono text-sm text-gray-800 dark:text-gray-200">
                    k = (1.0×10¹³)·e^(-100,000/(8.314×500))
                  </p>
                  <p className="font-mono text-sm text-gray-800 dark:text-gray-200">
                    k = (1.0×10¹³)·e^(-24.06)
                  </p>
                  <p className="font-mono text-sm text-gray-800 dark:text-gray-200">
                    k = (1.0×10¹³)·(3.42×10⁻¹¹)
                  </p>
                  <p className="font-semibold text-tertiary-600 dark:text-tertiary-400">
                    k ≈ 342 s⁻¹
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-secondary-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Example 2: Temperature Effect (Two-Point)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Problem:</strong> k = 0.001 s⁻¹ at 298 K. If Ea = 75 kJ/mol, what is k at 323 K?
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg space-y-2">
                  <p className="font-mono text-sm text-gray-800 dark:text-gray-200">
                    ln(k₂/k₁) = -(Ea/R)·(1/T₂ - 1/T₁)
                  </p>
                  <p className="font-mono text-sm text-gray-800 dark:text-gray-200">
                    ln(k₂/0.001) = -(75,000/8.314)·(1/323 - 1/298)
                  </p>
                  <p className="font-mono text-sm text-gray-800 dark:text-gray-200">
                    ln(k₂/0.001) = -9022·(-0.000260)
                  </p>
                  <p className="font-mono text-sm text-gray-800 dark:text-gray-200">
                    ln(k₂/0.001) = 2.346
                  </p>
                  <p className="font-mono text-sm text-gray-800 dark:text-gray-200">
                    k₂/0.001 = 10.44
                  </p>
                  <p className="font-semibold text-secondary-600 dark:text-secondary-400">
                    k₂ ≈ 0.0104 s⁻¹ (about 10× faster!)
                  </p>
                </div>
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
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">🔬 Chemical Engineering</h3>
                <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                  <li>• Reactor temperature optimization</li>
                  <li>• Process rate predictions</li>
                  <li>• Catalyst effectiveness studies</li>
                  <li>• Shelf life predictions</li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">🍕 Food Science</h3>
                <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                  <li>• Food spoilage rate calculations</li>
                  <li>• Cooking time optimization</li>
                  <li>• Storage temperature effects</li>
                  <li>• Enzyme activity in food processing</li>
                </ul>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">💊 Pharmaceuticals</h3>
                <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-1">
                  <li>• Drug degradation rates</li>
                  <li>• Expiration date determination</li>
                  <li>• Reaction kinetics in synthesis</li>
                  <li>• Storage condition optimization</li>
                </ul>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">🌍 Environmental Science</h3>
                <ul className="text-sm text-yellow-800 dark:text-yellow-200 space-y-1">
                  <li>• Pollutant degradation modeling</li>
                  <li>• Atmospheric chemistry</li>
                  <li>• Soil reaction kinetics</li>
                  <li>• Climate change chemistry</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Graphical Analysis */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Graphical Analysis: Arrhenius Plot
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              An <strong>Arrhenius plot</strong> is a graph of ln(k) vs 1/T. The logarithmic form of the 
              Arrhenius equation produces a straight line.
            </p>
            <div className="bg-teal-50 dark:bg-teal-900/30 p-4 rounded-lg">
              <h3 className="font-semibold text-teal-900 dark:text-teal-100 mb-2">Linear Form:</h3>
              <p className="font-mono text-teal-800 dark:text-teal-200 mb-3">
                ln(k) = -Ea/R · (1/T) + ln(A)
              </p>
              <p className="font-mono text-teal-800 dark:text-teal-200 mb-3">
                y = m·x + b
              </p>
              <ul className="text-sm text-teal-700 dark:text-teal-300 space-y-1">
                <li>• <strong>x-axis:</strong> 1/T (in K⁻¹)</li>
                <li>• <strong>y-axis:</strong> ln(k)</li>
                <li>• <strong>Slope (m):</strong> -Ea/R → can solve for Ea</li>
                <li>• <strong>Intercept (b):</strong> ln(A) → can solve for A</li>
                <li>• <strong>Straight line:</strong> confirms Arrhenius behavior</li>
              </ul>
            </div>
          </section>

          {/* Important Notes */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Important Considerations
            </h2>
            <div className="space-y-4">
              <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">
                  ⚠️ Temperature Units
                </h3>
                <p className="text-sm text-orange-800 dark:text-orange-200">
                  Always use Kelvin for temperature in the Arrhenius equation. Using Celsius or Fahrenheit 
                  will give incorrect results. Convert: K = °C + 273.15
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-red-900 dark:text-red-100 mb-2">
                  🔥 Temperature Range Limitations
                </h3>
                <p className="text-sm text-red-800 dark:text-red-200">
                  The Arrhenius equation works best over moderate temperature ranges. At extreme temperatures, 
                  A and Ea may change, and the equation becomes less accurate. Physical state changes 
                  (melting, boiling) also affect applicability.
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  📊 Experimental Determination
                </h3>
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  To experimentally determine Ea and A, measure k at several different temperatures, 
                  plot ln(k) vs 1/T, and calculate slope and intercept. Need at least 3-4 data points 
                  for reliable results.
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">
                  ⚗️ Catalysis
                </h3>
                <p className="text-sm text-purple-800 dark:text-purple-200">
                  Catalysts increase reaction rate by lowering Ea (not by changing A or T). 
                  This is why enzymes and industrial catalysts are so important - they make reactions 
                  feasible at lower temperatures.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* Structured Data - SoftwareApplication */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Arrhenius Equation Calculator",
            "description": "Arrhenius Equation Calculator on ChemSolved",
            "url": "https://chemsolved.com/kinetics-calculators/arrhenius-equation-calculator",
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
                "name": "Arrhenius Equation Calculator",
                "item": "https://chemsolved.com/kinetics-calculators/arrhenius-equation-calculator"
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