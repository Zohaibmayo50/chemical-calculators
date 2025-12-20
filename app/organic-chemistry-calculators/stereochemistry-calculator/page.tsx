import type { Metadata } from 'next';
import StereochemistryCalculator from '@/components/calculators/StereochemistryCalculator';

export const metadata: Metadata = {
  title: 'Stereochemistry Calculator | R/S Configuration & Chirality Tool',
  description:
    'Determine R/S configurations, calculate stereoisomers, analyze chirality, and explore E/Z isomerism with step-by-step guidance using Cahn-Ingold-Prelog rules.',
  keywords: [
    'stereochemistry calculator',
    'R S configuration',
    'chirality calculator',
    'enantiomers diastereomers',
    'E Z isomerism',
    'cahn ingold prelog',
    'chiral centers',
    'stereoisomers',
    'optical isomers',
    'organic chemistry stereochemistry',
  ],
};

export default function StereochemistryCalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 mb-4">
            Stereochemistry Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Determine R/S configurations, calculate stereoisomers, and analyze molecular chirality
          </p>
        </div>

        {/* Calculator Component */}
        <StereochemistryCalculator />

        {/* Educational Content */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
            Stereochemistry Fundamentals
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Stereochemistry studies the three-dimensional arrangement of atoms in molecules. Understanding stereoisomers,
              chiral centers, and absolute configuration is crucial in organic chemistry, biochemistry, and pharmaceutical sciences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
