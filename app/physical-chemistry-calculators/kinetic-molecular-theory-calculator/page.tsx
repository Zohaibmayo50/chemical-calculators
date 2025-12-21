import { Metadata } from 'next';
import KineticMolecularTheoryCalculator from '@/components/calculators/KineticMolecularTheoryCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: "Kinetic Molecular Theory Calculator | RMS Velocity | Molecular Speed",
  description: "Calculate root-mean-square velocity and molecular kinetic energy. Essential for understanding gas behavior and molecular motion.",
  keywords: ['kinetic molecular theory', 'rms velocity', 'molecular speed', 'kinetic energy', 'gas molecules', 'temperature', 'KMT'],
};

export default function KineticMolecularTheoryCalculatorPage() {  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Kinetic Molecular Theory Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Calculate molecular velocities and kinetic energies using kinetic molecular theory
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <KineticMolecularTheoryCalculator />
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Understanding KMT
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300">
                  Kinetic Molecular Theory explains gas behavior at the molecular level, relating
                  temperature to the average kinetic energy of gas molecules.
                </p>
                <div className="my-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <p className="font-semibold text-blue-900 dark:text-blue-100">v<sub>rms</sub> = √(3RT/M)</p>
                  <ul className="text-sm mt-2 space-y-1 text-blue-800 dark:text-blue-200">
                    <li>R = 8.314 J/(mol·K)</li>
                    <li>T = temperature (K)</li>
                    <li>M = molar mass (kg/mol)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Types of Molecular Speeds
              </h3>
              <div className="prose dark:prose-invert max-w-none text-sm">
                <div className="space-y-2">
                  <div className="p-2 bg-gray-50 dark:bg-gray-700 rounded">
                    <p className="font-semibold">Most Probable: v<sub>p</sub> = √(2RT/M)</p>
                  </div>
                  <div className="p-2 bg-gray-50 dark:bg-gray-700 rounded">
                    <p className="font-semibold">Average: v<sub>avg</sub> = √(8RT/πM)</p>
                  </div>
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded">
                    <p className="font-semibold">RMS: v<sub>rms</sub> = √(3RT/M)</p>
                  </div>
                </div>
                <p className="text-xs mt-2 text-gray-600 dark:text-gray-400">
                  v<sub>rms</sub> &gt; v<sub>avg</sub> &gt; v<sub>p</sub>
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
                  <span className="text-sm"><strong>Gas Behavior:</strong> Understanding pressure and temperature</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tertiary-500 mr-2">•</span>
                  <span className="text-sm"><strong>Diffusion:</strong> Predicting gas mixing rates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tertiary-500 mr-2">•</span>
                  <span className="text-sm"><strong>Reaction Rates:</strong> Collision theory</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tertiary-500 mr-2">•</span>
                  <span className="text-sm"><strong>Atmospheric Science:</strong> Molecular escape velocities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Molecular Speeds at 25°C (298 K)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                  <th className="text-left py-3 text-gray-900 dark:text-white">Gas</th>
                  <th className="text-center py-3 text-gray-900 dark:text-white">M (g/mol)</th>
                  <th className="text-center py-3 text-gray-900 dark:text-white">v<sub>rms</sub> (m/s)</th>
                  <th className="text-center py-3 text-gray-900 dark:text-white">v<sub>rms</sub> (km/h)</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 dark:text-gray-300">
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 font-semibold">H₂</td>
                  <td className="text-center py-3">2.02</td>
                  <td className="text-center py-3">1927</td>
                  <td className="text-center py-3">6937</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 font-semibold">He</td>
                  <td className="text-center py-3">4.00</td>
                  <td className="text-center py-3">1363</td>
                  <td className="text-center py-3">4907</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 font-semibold">H₂O (steam)</td>
                  <td className="text-center py-3">18.02</td>
                  <td className="text-center py-3">643</td>
                  <td className="text-center py-3">2315</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 font-semibold">N₂</td>
                  <td className="text-center py-3">28.01</td>
                  <td className="text-center py-3">515</td>
                  <td className="text-center py-3">1854</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 font-semibold">O₂</td>
                  <td className="text-center py-3">32.00</td>
                  <td className="text-center py-3">482</td>
                  <td className="text-center py-3">1735</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 font-semibold">Ar</td>
                  <td className="text-center py-3">39.95</td>
                  <td className="text-center py-3">431</td>
                  <td className="text-center py-3">1552</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 font-semibold">CO₂</td>
                  <td className="text-center py-3">44.01</td>
                  <td className="text-center py-3">411</td>
                  <td className="text-center py-3">1480</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
            Note: These are extremely fast speeds! Faster than the speed of sound (~343 m/s at 20°C).
          </p>
        </div>

        <div className="mt-8 bg-gradient-to-r from-tertiary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Five Postulates of Kinetic Molecular Theory
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">1. Particle Size</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Gas molecules are point masses with negligible volume compared to container volume.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">2. Motion</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Molecules are in constant, random, straight-line motion.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">3. Collisions</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Collisions are perfectly elastic (no energy lost).
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">4. No Forces</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  No attractive or repulsive forces between molecules (except during collisions).
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">5. Temperature</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Average kinetic energy is directly proportional to absolute temperature: KE = (3/2)k<sub>B</sub>T
                </p>
              </div>
            </div>
            {/* Related Calculators */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mt-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                🔗 Related Calculators
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/physical-chemistry-calculators/grahams-law-calculator"
                    className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                  >
                    <span>→</span>
                    <span>Graham's Law Calculator</span>
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
                    href="/gas-calculators/gas-density-calculator"
                    className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                  >
                    <span>→</span>
                    <span>Gas Density Calculator</span>
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
            </div>          </div>
        </div>
      </div>      </div>
      <Footer />
    </>
  );
}