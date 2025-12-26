import type { Metadata } from 'next';
import PartitionCoefficientCalculator from '@/components/calculators/PartitionCoefficientCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


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

export default function PartitionCoefficientCalculatorPage() {  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
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
                      href="/solution-calculators/solubility-calculator"
                      className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                    >
                      <span>→</span>
                      <span>Solubility Calculator</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/physical-chemistry-calculators/activity-coefficient-calculator"
                      className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                    >
                      <span>→</span>
                      <span>Activity Coefficient</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/solution-calculators/osmotic-pressure-calculator"
                      className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                    >
                      <span>→</span>
                      <span>Osmotic Pressure Calculator</span>
                    </a>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    📐 Related Formulas
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="/chemistry-formulas/partition-coefficient-formula"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Partition Coefficient Formula</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/chemistry-formulas/distribution-coefficient-formula"
                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        <span>Distribution Coefficient Formula</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <a
                    href="/physical-chemistry-calculators"
                    className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    All Physical Chemistry Calculators →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}