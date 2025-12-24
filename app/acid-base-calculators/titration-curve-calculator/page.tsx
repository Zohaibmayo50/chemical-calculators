import type { Metadata } from 'next';
import TitrationCurveCalculator from '@/components/calculators/TitrationCurveCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: 'Titration Curve Calculator | pH Analysis & Equivalence Points',
  description:
    'Calculate pH at any titration point, determine equivalence volumes, analyze buffer regions, and explore strong/weak acid-base titrations with Henderson-Hasselbalch equation.',
  keywords: [
    'titration curve calculator',
    'pH titration',
    'equivalence point',
    'buffer region',
    'henderson hasselbalch',
    'weak acid titration',
    'strong acid base',
    'half equivalence point',
    'acid base chemistry',
    'titration analysis',
  ],
};

export default function TitrationCurveCalculatorPage() {  return (
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
            Titration Curve Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Analyze acid-base titrations, calculate pH, and determine equivalence points
          </p>
        </div>

        {/* Calculator Component */}
        <TitrationCurveCalculator />

        {/* Educational Content */}
        <div className="mt-16 space-y-12">
          {/* What is a Titration Curve */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              What is a Titration Curve?
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                A titration curve is a graphical representation of pH (y-axis) versus volume of titrant added (x-axis) 
                during an acid-base titration. It provides crucial information about the equivalence point, buffer regions, 
                and the nature of the acid-base reaction.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                The shape of the titration curve depends on the strength of the acid and base being titrated. Strong 
                acid-strong base titrations show sharp pH changes at the equivalence point, while weak acid or weak base 
                titrations exhibit buffer regions and less dramatic pH transitions.
              </p>
            </div>
          </section>

          {/* Types of Titration Curves */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              Types of Titration Curves
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 dark:bg-gray-700 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  1. Strong Acid - Strong Base Titration
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Example: HCl titrated with NaOH
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li><strong>Initial pH:</strong> Very low (typically 1-2 for 0.1 M acid)</li>
                  <li><strong>Before equivalence:</strong> Gradual pH increase, excess H⁺ present</li>
                  <li><strong>At equivalence:</strong> pH = 7.0 (neutral solution of salt and water)</li>
                  <li><strong>After equivalence:</strong> Rapid pH increase, excess OH⁻ present</li>
                  <li><strong>pH jump:</strong> Very large (typically pH 3-11 near equivalence point)</li>
                  <li><strong>Buffer region:</strong> None - no buffering capacity</li>
                </ul>
                <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded">
                  <p className="font-mono text-sm text-gray-700 dark:text-gray-300">
                    pH calculation before equivalence: pH = -log[H⁺]<br/>
                    where [H⁺] = (C_a × V_a - C_b × V_b) / (V_a + V_b)
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-6 py-4 bg-green-50 dark:bg-gray-700 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  2. Weak Acid - Strong Base Titration
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Example: CH₃COOH (acetic acid) titrated with NaOH
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li><strong>Initial pH:</strong> Higher than strong acid (typically 2.5-3.5 for 0.1 M)</li>
                  <li><strong>Before equivalence:</strong> Buffer region with gradual pH increase</li>
                  <li><strong>Half-equivalence point:</strong> pH = pKa (maximum buffer capacity)</li>
                  <li><strong>At equivalence:</strong> pH &gt; 7 (basic due to conjugate base hydrolysis)</li>
                  <li><strong>After equivalence:</strong> pH dominated by excess strong base</li>
                  <li><strong>Buffer region:</strong> Present from start to near equivalence</li>
                </ul>
                <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded">
                  <p className="font-mono text-sm text-gray-700 dark:text-gray-300">
                    Henderson-Hasselbalch equation (buffer region):<br/>
                    pH = pKa + log([A⁻]/[HA])<br/>
                    At half-equivalence: pH = pKa
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-6 py-4 bg-purple-50 dark:bg-gray-700 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  3. Weak Base - Strong Acid Titration
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Example: NH₃ (ammonia) titrated with HCl
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li><strong>Initial pH:</strong> Basic (typically 10.5-11.5 for 0.1 M)</li>
                  <li><strong>Before equivalence:</strong> Buffer region with gradual pH decrease</li>
                  <li><strong>Half-equivalence point:</strong> pOH = pKb (or pH = 14 - pKb)</li>
                  <li><strong>At equivalence:</strong> pH &lt; 7 (acidic due to conjugate acid hydrolysis)</li>
                  <li><strong>After equivalence:</strong> pH dominated by excess strong acid</li>
                  <li><strong>Buffer region:</strong> Present from start to near equivalence</li>
                </ul>
                <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded">
                  <p className="font-mono text-sm text-gray-700 dark:text-gray-300">
                    Buffer region equation:<br/>
                    pOH = pKb + log([BH⁺]/[B])<br/>
                    pH = 14 - pOH
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Key Regions of a Titration Curve */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              Key Regions of a Titration Curve
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-600 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  Initial Point
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  pH determined solely by the analyte (acid or base being titrated). For weak acids/bases, 
                  use equilibrium calculations. For strong acids/bases, pH = -log[H⁺] or pH = 14 + log[OH⁻].
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-700 dark:to-gray-600 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  Buffer Region
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Present only in weak acid/base titrations. Both the weak acid/base and its conjugate form 
                  are present, creating a buffer solution that resists pH changes. Use Henderson-Hasselbalch equation.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-gray-700 dark:to-gray-600 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  Half-Equivalence Point
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Occurs when exactly half the titrant needed to reach equivalence has been added. For weak acid 
                  titrations: pH = pKa. For weak base titrations: pOH = pKb. This is the point of maximum buffer capacity.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-red-50 to-red-100 dark:from-gray-700 dark:to-gray-600 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  Equivalence Point
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Moles of acid equal moles of base. pH depends on the salt formed: pH = 7 for strong-strong, 
                  pH &gt; 7 for weak acid-strong base, pH &lt; 7 for weak base-strong acid. This is where the 
                  largest pH change occurs per drop of titrant.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-gray-700 dark:to-gray-600 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  Beyond Equivalence
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  pH determined by excess titrant (strong base or strong acid). The solution is no longer buffered, 
                  and pH is calculated from the concentration of excess OH⁻ or H⁺.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-gray-700 dark:to-gray-600 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  Endpoint vs Equivalence
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  The endpoint (indicator color change) should match the equivalence point (stoichiometric point). 
                  Indicator selection depends on the pH at equivalence: phenolphthalein for weak acid titrations, 
                  methyl orange for weak base titrations.
                </p>
              </div>
            </div>
          </section>

          {/* Worked Example */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              Worked Example: Weak Acid Titration
            </h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                Problem
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Calculate the pH when 25.0 mL of 0.100 M NaOH is added to 50.0 mL of 0.100 M acetic acid 
                (CH₃COOH, Ka = 1.8 × 10⁻⁵, pKa = 4.74).
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h4 className="font-bold text-gray-800 dark:text-white mb-3">Step 1: Determine the Region</h4>
                <p className="text-gray-700 dark:text-gray-300 font-mono text-sm mb-2">
                  Equivalence volume = (C_acid × V_acid) / C_base = (0.100 × 50.0) / 0.100 = 50.0 mL
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Since 25.0 mL is exactly half of 50.0 mL, we are at the half-equivalence point.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h4 className="font-bold text-gray-800 dark:text-white mb-3">Step 2: Apply Henderson-Hasselbalch</h4>
                <p className="text-gray-700 dark:text-gray-300 font-mono text-sm mb-2">
                  Moles CH₃COOH initially = 0.100 M × 0.0500 L = 0.00500 mol<br/>
                  Moles NaOH added = 0.100 M × 0.0250 L = 0.00250 mol<br/>
                  <br/>
                  After reaction:<br/>
                  Moles CH₃COOH remaining = 0.00500 - 0.00250 = 0.00250 mol<br/>
                  Moles CH₃COO⁻ formed = 0.00250 mol
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  At half-equivalence, [HA] = [A⁻], so the log term equals zero.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h4 className="font-bold text-gray-800 dark:text-white mb-3">Step 3: Calculate pH</h4>
                <p className="text-gray-700 dark:text-gray-300 font-mono text-sm mb-2">
                  pH = pKa + log([CH₃COO⁻]/[CH₃COOH])<br/>
                  pH = 4.74 + log(1)<br/>
                  pH = 4.74 + 0<br/>
                  <strong>pH = 4.74</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  This confirms the principle that at half-equivalence, pH = pKa for weak acid titrations.
                </p>
              </div>
            </div>
          </section>

          {/* Applications */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              Applications of Titration Curves
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-600 rounded-lg">
                <div className="text-3xl mb-3">🧪</div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  Analytical Chemistry
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Determine unknown concentrations through standardization, analyze mixtures of acids or bases, 
                  and validate purity of chemical samples. Titration is a fundamental quantitative technique 
                  in analytical laboratories.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-700 dark:to-gray-600 rounded-lg">
                <div className="text-3xl mb-3">🔬</div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  Buffer Preparation
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Design buffer solutions by identifying the buffer region on titration curves. Determine the 
                  optimal ratio of weak acid to conjugate base for desired pH and buffer capacity. Critical for 
                  biochemical applications.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-gray-700 dark:to-gray-600 rounded-lg">
                <div className="text-3xl mb-3">💊</div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  Pharmaceutical Analysis
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Determine active ingredient concentrations in drugs, analyze formulation stability, and verify 
                  drug purity. Titration curves help optimize drug delivery systems and ensure product quality.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-gray-700 dark:to-gray-600 rounded-lg">
                <div className="text-3xl mb-3">🌊</div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  Environmental Monitoring
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Measure water acidity/alkalinity, analyze soil pH profiles, and monitor industrial waste streams. 
                  Titration provides accurate pH data for environmental compliance and ecosystem health assessment.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-red-50 to-red-100 dark:from-gray-700 dark:to-gray-600 rounded-lg">
                <div className="text-3xl mb-3">🍷</div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  Food Chemistry
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Determine acidity in beverages, vinegar strength, citric acid content in fruits, and dairy 
                  product quality. Titration ensures food safety standards and quality control in production.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-gray-700 dark:to-gray-600 rounded-lg">
                <div className="text-3xl mb-3">📚</div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  Education & Research
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Demonstrate acid-base equilibrium principles, teach pH calculations, and explore indicator 
                  selection. Titration curves are essential pedagogical tools for understanding chemical equilibria.
                </p>
              </div>
            </div>
          </section>

          {/* Problem-Solving Strategy */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              Problem-Solving Strategy
            </h2>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                    Identify the Titration Type
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Determine if you have strong acid-strong base, weak acid-strong base, or weak base-strong acid. 
                    This dictates which equations to use and what pH to expect at equivalence.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                    Calculate Equivalence Volume
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Use stoichiometry: V_eq = (C_analyte × V_analyte) / C_titrant. This is the reference point 
                    for determining which region of the curve you're in.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                    Determine Current Region
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Compare volume added to equivalence volume: before (excess analyte), at (stoichiometric), 
                    or after (excess titrant). Each region uses different calculation methods.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                    Apply Appropriate Equation
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Buffer region: Henderson-Hasselbalch. Before/after equivalence: excess H⁺ or OH⁻ calculation. 
                    At equivalence: hydrolysis of conjugate acid/base (weak) or neutral (strong-strong).
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              Common Mistakes to Avoid
            </h2>
            
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-6 py-4 bg-red-50 dark:bg-gray-700 rounded-r-lg">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                  ❌ Assuming Equivalence Point pH = 7
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Only true for strong acid-strong base titrations. Weak acid titrations have pH &gt; 7 at 
                  equivalence (basic conjugate base). Weak base titrations have pH &lt; 7 (acidic conjugate acid).
                </p>
                <p className="text-green-700 dark:text-green-400 font-semibold">
                  ✓ Always consider the salt formed at equivalence and whether it hydrolyzes.
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-6 py-4 bg-red-50 dark:bg-gray-700 rounded-r-lg">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                  ❌ Forgetting to Update Total Volume
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Concentrations change as titrant is added because the total volume increases. Always use 
                  V_total = V_initial + V_added when calculating concentrations.
                </p>
                <p className="text-green-700 dark:text-green-400 font-semibold">
                  ✓ Account for dilution: [H⁺] or [OH⁻] = moles / (V_a + V_b).
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-6 py-4 bg-red-50 dark:bg-gray-700 rounded-r-lg">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                  ❌ Using Wrong Equation for Buffer Region
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Henderson-Hasselbalch only applies when both weak acid and conjugate base (or weak base and 
                  conjugate acid) are present in significant amounts.
                </p>
                <p className="text-green-700 dark:text-green-400 font-semibold">
                  ✓ Use H-H equation only in the buffer region (between start and near equivalence).
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-6 py-4 bg-red-50 dark:bg-gray-700 rounded-r-lg">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                  ❌ Confusing Half-Equivalence with Equivalence
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Half-equivalence (V = V_eq/2) is where pH = pKa for weak acids. Equivalence (V = V_eq) is where 
                  moles acid = moles base. These are different points with different pH values.
                </p>
                <p className="text-green-700 dark:text-green-400 font-semibold">
                  ✓ Half-equivalence: maximum buffer capacity, pH = pKa. Equivalence: all acid converted to conjugate base.
                </p>
              </div>
            </div>
          </section>

          {/* Quick Reference */}
          <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 text-white">
            <h2 className="text-3xl font-bold mb-6">Quick Reference Guide</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <h3 className="font-bold mb-2 text-xl">Strong Acid-Strong Base</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Equivalence pH = 7.0</li>
                  <li>• Large pH jump at equivalence</li>
                  <li>• No buffer region</li>
                  <li>• Indicators: wide range works</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <h3 className="font-bold mb-2 text-xl">Weak Acid-Strong Base</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Equivalence pH &gt; 7</li>
                  <li>• Buffer region present</li>
                  <li>• pH = pKa at half-equivalence</li>
                  <li>• Indicators: phenolphthalein</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <h3 className="font-bold mb-2 text-xl">Weak Base-Strong Acid</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Equivalence pH &lt; 7</li>
                  <li>• Buffer region present</li>
                  <li>• pOH = pKb at half-equivalence</li>
                  <li>• Indicators: methyl orange</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <h3 className="font-bold mb-2 text-xl">Key Equations</h3>
                <ul className="space-y-1 text-sm font-mono">
                  <li>• V_eq = C_a×V_a / C_b</li>
                  <li>• pH = pKa + log([A⁻]/[HA])</li>
                  <li>• pH + pOH = 14</li>
                  <li>• Ka × Kb = 1.0×10⁻¹⁴</li>
                </ul>
              </div>
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
                        href="/acid-base-calculators/titration-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Titration Calculator</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/acid-base-calculators/buffer-solution-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Buffer Solution Calculator</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/acid-base-calculators/buffer-capacity-calculator"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Buffer Capacity Calculator</span>
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