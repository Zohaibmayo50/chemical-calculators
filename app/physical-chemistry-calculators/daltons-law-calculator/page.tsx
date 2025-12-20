import { Metadata } from 'next';
import DaltonsLawCalculator from '@/components/calculators/DaltonsLawCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: "Dalton's Law Calculator | Partial Pressure | Gas Mixtures",
  description: "Calculate total and partial pressures in gas mixtures using Dalton's Law. Essential for gas calculations, atmospheric science, and scuba diving.",
  keywords: ['daltons law', 'partial pressure', 'gas mixtures', 'total pressure', 'mole fraction', 'ideal gas', 'atmospheric pressure', 'gas calculations'],
};

export default function DaltonsLawCalculatorPage() {  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Dalton&apos;s Law Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Calculate total and partial pressures in gas mixtures using Dalton&apos;s Law of Partial Pressures
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <DaltonsLawCalculator />
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Understanding Dalton&apos;s Law
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300">
                  Dalton&apos;s Law states that the total pressure of a gas mixture is equal to the sum
                  of the partial pressures of each individual gas component.
                </p>
                <div className="my-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <p className="font-semibold text-blue-900 dark:text-blue-100">P<sub>total</sub> = P₁ + P₂ + P₃ + ...</p>
                  <ul className="text-sm mt-2 space-y-1 text-blue-800 dark:text-blue-200">
                    <li>P<sub>total</sub> = total pressure of mixture</li>
                    <li>P₁, P₂, P₃ = partial pressures of each gas</li>
                    <li>Each gas behaves independently</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Partial Pressure
              </h3>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  The partial pressure is the pressure a gas would exert if it occupied the entire volume alone:
                </p>
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg mb-3">
                  <p className="font-mono text-sm">P<sub>i</sub> = χ<sub>i</sub> × P<sub>total</sub></p>
                  <p className="font-mono text-sm mt-2">χ<sub>i</sub> = n<sub>i</sub> / n<sub>total</sub></p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  The mole fraction (χ) equals the pressure fraction in an ideal gas mixture.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Where It&apos;s Used
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-tertiary-500 mr-2">•</span>
                  <span className="text-sm"><strong>Scuba Diving:</strong> Calculating nitrogen and oxygen partial pressures at depth</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tertiary-500 mr-2">•</span>
                  <span className="text-sm"><strong>Atmospheric Science:</strong> Analyzing air composition and weather patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tertiary-500 mr-2">•</span>
                  <span className="text-sm"><strong>Gas Storage:</strong> Managing compressed gas cylinders and tanks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tertiary-500 mr-2">•</span>
                  <span className="text-sm"><strong>Industrial Processes:</strong> Chemical reactions involving gas mixtures</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Example Calculation
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg mb-4">
                <p className="font-semibold text-gray-900 dark:text-white mb-2">Problem:</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  A gas mixture contains nitrogen at 0.70 atm, oxygen at 0.20 atm, and argon at 0.05 atm.
                  What is the total pressure?
                </p>
              </div>

              <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <div>
                  <p className="font-semibold mb-1">Step 1: List partial pressures</p>
                  <p className="font-mono bg-gray-50 dark:bg-gray-700 p-2 rounded">
                    P<sub>N₂</sub> = 0.70 atm<br />
                    P<sub>O₂</sub> = 0.20 atm<br />
                    P<sub>Ar</sub> = 0.05 atm
                  </p>
                </div>

                <div>
                  <p className="font-semibold mb-1">Step 2: Apply Dalton&apos;s Law</p>
                  <p className="font-mono bg-gray-50 dark:bg-gray-700 p-2 rounded">
                    P<sub>total</sub> = 0.70 + 0.20 + 0.05<br />
                    P<sub>total</sub> = 0.95 atm
                  </p>
                </div>

                <div>
                  <p className="font-semibold mb-1">Step 3: Calculate mole fractions</p>
                  <p className="font-mono bg-gray-50 dark:bg-gray-700 p-2 rounded">
                    χ<sub>N₂</sub> = 0.70 / 0.95 = 0.737 (73.7%)<br />
                    χ<sub>O₂</sub> = 0.20 / 0.95 = 0.211 (21.1%)<br />
                    χ<sub>Ar</sub> = 0.05 / 0.95 = 0.053 (5.3%)
                  </p>
                </div>

                <div className="p-3 bg-tertiary-50 dark:bg-tertiary-900/30 rounded-lg">
                  <p className="font-semibold text-tertiary-900 dark:text-tertiary-100">Result:</p>
                  <p className="text-tertiary-800 dark:text-tertiary-200">
                    Total pressure is 0.95 atm, with N₂ comprising 73.7% of the mixture.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Atmospheric Air Composition
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                At sea level (1.00 atm), dry air consists of:
              </p>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-300 dark:border-gray-600">
                    <th className="text-left py-2 text-gray-900 dark:text-white">Gas</th>
                    <th className="text-center py-2 text-gray-900 dark:text-white">Mole %</th>
                    <th className="text-center py-2 text-gray-900 dark:text-white">Partial Pressure</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 font-semibold">Nitrogen (N₂)</td>
                    <td className="text-center py-2">78.08%</td>
                    <td className="text-center py-2">0.7808 atm</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 font-semibold">Oxygen (O₂)</td>
                    <td className="text-center py-2">20.95%</td>
                    <td className="text-center py-2">0.2095 atm</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 font-semibold">Argon (Ar)</td>
                    <td className="text-center py-2">0.93%</td>
                    <td className="text-center py-2">0.0093 atm</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 font-semibold">Carbon Dioxide (CO₂)</td>
                    <td className="text-center py-2">0.04%</td>
                    <td className="text-center py-2">0.0004 atm</td>
                  </tr>
                </tbody>
              </table>

              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Note:</p>
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  Partial pressures change with altitude. At 10,000 ft (0.69 atm), oxygen partial pressure
                  drops to ~0.14 atm, causing altitude sickness in some people.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Scuba Diving Application
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Depth and Pressure</h3>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-300 dark:border-gray-600">
                      <th className="text-left py-2 text-gray-900 dark:text-white">Depth</th>
                      <th className="text-center py-2 text-gray-900 dark:text-white">P<sub>total</sub></th>
                      <th className="text-center py-2 text-gray-900 dark:text-white">P<sub>O₂</sub></th>
                      <th className="text-center py-2 text-gray-900 dark:text-white">P<sub>N₂</sub></th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 dark:text-gray-300">
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2">Surface</td>
                      <td className="text-center py-2">1.0 atm</td>
                      <td className="text-center py-2">0.21 atm</td>
                      <td className="text-center py-2">0.79 atm</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2">10 m (33 ft)</td>
                      <td className="text-center py-2">2.0 atm</td>
                      <td className="text-center py-2">0.42 atm</td>
                      <td className="text-center py-2">1.58 atm</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2">20 m (66 ft)</td>
                      <td className="text-center py-2">3.0 atm</td>
                      <td className="text-center py-2">0.63 atm</td>
                      <td className="text-center py-2">2.37 atm</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2">30 m (99 ft)</td>
                      <td className="text-center py-2">4.0 atm</td>
                      <td className="text-center py-2">0.84 atm</td>
                      <td className="text-center py-2">3.16 atm</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Safety Concerns</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-red-50 dark:bg-red-900/30 rounded-lg">
                    <p className="font-semibold text-red-900 dark:text-red-100 text-sm">Nitrogen Narcosis</p>
                    <p className="text-xs text-red-800 dark:text-red-200 mt-1">
                      High P<sub>N₂</sub> (&gt;3.2 atm) causes impaired judgment. Occurs below ~30 m.
                    </p>
                  </div>
                  <div className="p-3 bg-orange-50 dark:bg-orange-900/30 rounded-lg">
                    <p className="font-semibold text-orange-900 dark:text-orange-100 text-sm">Oxygen Toxicity</p>
                    <p className="text-xs text-orange-800 dark:text-orange-200 mt-1">
                      P<sub>O₂</sub> &gt; 1.4 atm can cause seizures. Limits depth for air diving to ~57 m.
                    </p>
                  </div>
                  <div className="p-3 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
                    <p className="font-semibold text-yellow-900 dark:text-yellow-100 text-sm">Decompression Sickness</p>
                    <p className="text-xs text-yellow-800 dark:text-yellow-200 mt-1">
                      Dissolved N₂ forms bubbles if pressure drops too quickly during ascent.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Gas Collection Over Water
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                When a gas is collected over water, the total pressure includes the vapor pressure of water:
              </p>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <p className="font-mono text-sm text-blue-900 dark:text-blue-100">
                  P<sub>total</sub> = P<sub>gas</sub> + P<sub>H₂O</sub>
                </p>
                <p className="font-mono text-sm text-blue-900 dark:text-blue-100 mt-2">
                  P<sub>gas</sub> = P<sub>total</sub> - P<sub>H₂O</sub>
                </p>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
                Must subtract water vapor pressure to get the actual pressure of the collected gas.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Water Vapor Pressure (P<sub>H₂O</sub>)
              </h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-300 dark:border-gray-600">
                    <th className="text-left py-2 text-gray-900 dark:text-white">Temperature (°C)</th>
                    <th className="text-center py-2 text-gray-900 dark:text-white">P<sub>H₂O</sub> (mmHg)</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2">15</td>
                    <td className="text-center py-2">12.8</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2">20</td>
                    <td className="text-center py-2">17.5</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2">25</td>
                    <td className="text-center py-2">23.8</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2">30</td>
                    <td className="text-center py-2">31.8</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-tertiary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Key Assumptions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Dalton&apos;s Law Applies When:</h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Gases behave ideally (PV = nRT)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>No chemical reactions between gases</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Temperature and volume are constant</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Gases are in the same container</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Limitations:</h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>High pressures (intermolecular forces become significant)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Very low temperatures (gases may condense)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Reactive gas mixtures (H₂ + O₂ can explode)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Gases with strong intermolecular attractions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>      </div>
      <Footer />
    </>
  );
}