import type { Metadata } from 'next';
import DipoleMomentCalculator from '@/components/calculators/DipoleMomentCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: 'Dipole Moment Calculator | Molecular Polarity Tool',
  description:
    'Calculate molecular dipole moments from electronegativity differences, bond lengths, and bond dipoles. Predict molecular polarity and ionic character.',
  keywords: [
    'dipole moment calculator',
    'molecular polarity',
    'electronegativity difference',
    'bond polarity',
    'partial charge',
    'ionic character',
    'polar covalent bond',
    'debye unit',
    'chemistry polarity',
    'molecular dipole',
  ],
};

export default function DipoleMomentCalculatorPage() {  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 mb-4">
            Dipole Moment Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Calculate molecular dipole moments and predict bond polarity from electronegativity
          </p>
        </div>

        {/* Calculator Component */}
        <DipoleMomentCalculator />

        {/* Educational Content */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
            Dipole Moments and Molecular Polarity
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Dipole moments quantify the separation of positive and negative charge in polar bonds and molecules.
              Understanding dipole moments is essential for predicting intermolecular forces, solubility, and spectroscopic properties.
            </p>
          </div>
        </div>
      </div>      </div>
      <Footer />
    </>
  );
}