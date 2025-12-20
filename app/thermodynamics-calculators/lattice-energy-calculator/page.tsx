import type { Metadata } from 'next';
import LatticeEnergyCalculator from '@/components/calculators/LatticeEnergyCalculator';

export const metadata: Metadata = {
  title: 'Lattice Energy Calculator | Born-Haber Cycle & Kapustinskii Equation',
  description:
    'Calculate lattice energy using Kapustinskii equation, Born-Landé equation, and Born-Haber cycle. Analyze ionic compound stability and crystal structures.',
  keywords: [
    'lattice energy calculator',
    'born haber cycle',
    'kapustinskii equation',
    'born lande equation',
    'ionic compound',
    'madelung constant',
    'crystal structure',
    'ionic radius',
    'electrostatic energy',
    'formation enthalpy',
  ],
};

export default function LatticeEnergyCalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 mb-4">
            Lattice Energy Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Calculate lattice energy for ionic compounds using multiple methods
          </p>
        </div>

        <LatticeEnergyCalculator />

        <div className="mt-16 space-y-12">
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              Understanding Lattice Energy
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Lattice energy is the energy required to completely separate one mole of an ionic solid into gaseous 
                ions, or equivalently, the energy released when gaseous ions combine to form one mole of ionic solid. 
                It's a crucial measure of the strength of ionic bonding and determines many properties of ionic compounds 
                including melting point, hardness, and solubility.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Three main methods calculate lattice energy: the Kapustinskii equation (empirical, quick), 
                the Born-Landé equation (theoretical, requires Madelung constant), and the Born-Haber cycle 
                (experimental, uses thermodynamic data). Each provides insights into the energetics of ionic bonding.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
