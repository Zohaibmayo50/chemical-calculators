import type { Metadata } from 'next';
import MolecularOrbitalCalculator from '@/components/calculators/MolecularOrbitalCalculator';

export const metadata: Metadata = {
  title: 'Molecular Orbital Theory Calculator | Bond Order & Magnetism',
  description:
    'Calculate bond order, predict magnetic properties, and determine MO electron configurations for diatomic molecules using molecular orbital theory.',
  keywords: [
    'molecular orbital theory',
    'MO theory',
    'bond order calculator',
    'paramagnetic diamagnetic',
    'molecular orbital diagram',
    'bonding antibonding',
    'diatomic molecules',
    'electron configuration MO',
    'quantum chemistry',
    'chemical bonding',
  ],
};

export default function MolecularOrbitalCalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 mb-4">
            Molecular Orbital Theory Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Calculate bond order, predict magnetic properties, and explore MO diagrams for diatomic molecules
          </p>
        </div>

        {/* Calculator Component */}
        <MolecularOrbitalCalculator />

        {/* Educational Content - keeping it concise for now */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
            Molecular Orbital Theory Fundamentals
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Molecular Orbital (MO) Theory explains chemical bonding by combining atomic orbitals to form molecular orbitals
              that extend across the entire molecule. This calculator helps determine bond order, predict magnetic properties,
              and understand the stability of diatomic molecules.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
