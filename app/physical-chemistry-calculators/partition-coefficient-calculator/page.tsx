import type { Metadata } from 'next';
import PartitionCoefficientCalculator from '@/components/calculators/PartitionCoefficientCalculator';

export const metadata: Metadata = {
  title: 'Partition Coefficient Calculator | Log P & Log D for Drug Design',
  description:
    'Calculate partition coefficient (log P), distribution coefficient (log D), and extraction efficiency. Essential for drug design and lipophilicity analysis.',
  keywords: [
    'partition coefficient calculator',
    'log p calculator',
    'log d calculator',
    'distribution coefficient',
    'lipophilicity',
    'drug design',
    'extraction efficiency',
    'octanol water partition',
    'lipinski rule',
    'solvent extraction',
  ],
};

export default function PartitionCoefficientCalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 mb-4">
            Partition Coefficient Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Calculate log P, log D, and extraction efficiency for pharmaceutical and analytical applications
          </p>
        </div>

        <PartitionCoefficientCalculator />

        <div className="mt-16 space-y-12">
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              Understanding Partition Coefficients
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The partition coefficient (P) measures how a substance distributes between two immiscible solvents 
                at equilibrium, typically octanol and water. Log P is the base-10 logarithm of this ratio and is a 
                fundamental parameter in medicinal chemistry, environmental science, and analytical chemistry.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                The distribution coefficient (D) accounts for all species of the compound (ionized and unionized) 
                at a specific pH, making it more relevant for predicting behavior in biological systems. Understanding 
                both log P and log D is crucial for drug design, as they affect absorption, distribution, and excretion.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
