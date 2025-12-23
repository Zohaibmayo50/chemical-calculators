import { Metadata } from 'next';
import BufferSolutionCalculator from '@/components/calculators/BufferSolutionCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: "Buffer Solution Calculator | Henderson-Hasselbalch | pH Buffer",
  description: "Calculate buffer pH using the Henderson-Hasselbalch equation. Essential for biochemistry, analytical chemistry, and pH control.",
  keywords: ['buffer solution', 'Henderson-Hasselbalch', 'pH buffer', 'pKa', 'conjugate base', 'weak acid', 'buffer capacity'],
};

export default function BufferSolutionCalculatorPage() {  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Buffer Solution Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Calculate buffer pH and composition using the Henderson-Hasselbalch equation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <BufferSolutionCalculator />
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Understanding Buffers
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300">
                  Buffer solutions resist pH changes when small amounts of acid or base are added.
                  They consist of a weak acid and its conjugate base (or weak base and its conjugate acid).
                </p>
                <div className="my-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <p className="font-semibold text-blue-900 dark:text-blue-100">Henderson-Hasselbalch:</p>
                  <p className="text-blue-800 dark:text-blue-200 mt-2">pH = pKa + log([A⁻]/[HA])</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Buffer Capacity
              </h3>
              <div className="prose dark:prose-invert max-w-none text-sm">
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Buffer capacity is maximized when:
                </p>
                <div className="space-y-2">
                  <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
                    <p className="font-semibold text-green-900 dark:text-green-100">pH = pKa</p>
                    <p className="text-xs text-green-800 dark:text-green-200">[A⁻] = [HA] (ratio = 1)</p>
                  </div>
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                    <p className="font-semibold text-blue-900 dark:text-blue-100">Effective Range</p>
                    <p className="text-xs text-blue-800 dark:text-blue-200">pKa ± 1 (ratio 0.1-10)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Applications
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-tertiary-500 mr-2">•</span>
                  <span className="text-sm"><strong>Biochemistry:</strong> Maintain enzyme activity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tertiary-500 mr-2">•</span>
                  <span className="text-sm"><strong>Blood pH:</strong> Carbonate/bicarbonate buffer</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tertiary-500 mr-2">•</span>
                  <span className="text-sm"><strong>Analytical:</strong> pH control in titrations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tertiary-500 mr-2">•</span>
                  <span className="text-sm"><strong>Industry:</strong> Fermentation, pharmaceuticals</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                🔗 Related Calculators
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/acid-base-calculators/buffer-capacity-calculator"
                    className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                  >
                    <span>→</span>
                    <span>Buffer Capacity Calculator</span>
                  </a>
                </li>
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
                    href="/acid-base-calculators/titration-curve-calculator"
                    className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                  >
                    <span>→</span>
                    <span>Titration Curve Calculator</span>
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

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Example: Acetate Buffer
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="font-semibold mb-2">Problem:</p>
                <p className="text-sm">
                  What is the pH of a buffer containing 0.10 M acetic acid (pKa = 4.76) 
                  and 0.15 M sodium acetate?
                </p>
              </div>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <p className="font-semibold mb-2 text-blue-900 dark:text-blue-100">Solution:</p>
                <div className="text-sm space-y-2 text-blue-800 dark:text-blue-200">
                  <p>1. Identify: [A⁻] = 0.15 M, [HA] = 0.10 M</p>
                  <p>2. Calculate ratio: [A⁻]/[HA] = 0.15/0.10 = 1.5</p>
                  <p>3. Apply equation: pH = 4.76 + log(1.5)</p>
                  <p>4. pH = 4.76 + 0.176 = <strong>4.94</strong></p>
                </div>
              </div>

              <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
                <p className="text-sm text-green-800 dark:text-green-200">
                  ✓ This is within the effective buffer range (pKa ± 1)
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Biological Buffer Systems
            </h2>
            <div className="space-y-3">
              <div className="p-4 bg-red-50 dark:bg-red-900/30 rounded-lg">
                <h3 className="font-semibold text-red-900 dark:text-red-100 mb-1">Blood pH: 7.35-7.45</h3>
                <p className="text-sm text-red-800 dark:text-red-200">
                  <strong>Carbonic Acid/Bicarbonate</strong><br />
                  H₂CO₃/HCO₃⁻ (pKa = 6.35)<br />
                  Ratio ~20:1 to achieve pH 7.4
                </p>
              </div>

              <div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-1">Intracellular pH: ~7.2</h3>
                <p className="text-sm text-purple-800 dark:text-purple-200">
                  <strong>Phosphate Buffer</strong><br />
                  H₂PO₄⁻/HPO₄²⁻ (pKa = 7.20)<br />
                  Ideal for cytoplasmic pH control
                </p>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">Lab Buffers</h3>
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <strong>Tris Buffer (pH 7-9)</strong><br />
                  pKa = 8.06 at 25°C<br />
                  Common in molecular biology
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Buffer Selection Guide
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                  <th className="text-left py-3 text-gray-900 dark:text-white">Desired pH Range</th>
                  <th className="text-left py-3 text-gray-900 dark:text-white">Buffer System</th>
                  <th className="text-center py-3 text-gray-900 dark:text-white">pKa</th>
                  <th className="text-left py-3 text-gray-900 dark:text-white">Application</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 dark:text-gray-300">
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3">1.0 - 3.2</td>
                  <td className="py-3">Phosphate (H₃PO₄/H₂PO₄⁻)</td>
                  <td className="text-center py-3">2.15</td>
                  <td className="py-3">Acidic conditions</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3">3.8 - 5.8</td>
                  <td className="py-3">Acetic acid/Acetate</td>
                  <td className="text-center py-3">4.76</td>
                  <td className="py-3">Mild acidic pH</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3">5.4 - 7.4</td>
                  <td className="py-3">Carbonic acid/Bicarbonate</td>
                  <td className="text-center py-3">6.35</td>
                  <td className="py-3">Blood, physiological</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3">6.2 - 8.2</td>
                  <td className="py-3">Phosphate (H₂PO₄⁻/HPO₄²⁻)</td>
                  <td className="text-center py-3">7.20</td>
                  <td className="py-3">Biological systems</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3">7.0 - 9.0</td>
                  <td className="py-3">Tris</td>
                  <td className="text-center py-3">8.06</td>
                  <td className="py-3">Molecular biology</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3">8.2 - 10.2</td>
                  <td className="py-3">Ammonium/Ammonia</td>
                  <td className="text-center py-3">9.25</td>
                  <td className="py-3">Basic pH control</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>      </div>
      <Footer />
    </>
  );
}