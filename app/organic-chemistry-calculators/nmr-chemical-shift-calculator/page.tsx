import type { Metadata } from 'next';
import NMRChemicalShiftCalculator from '@/components/calculators/NMRChemicalShiftCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: 'NMR Chemical Shift Calculator | ¹H and ¹³C NMR Prediction',
  description:
    'Predict NMR chemical shifts for ¹H and ¹³C NMR spectroscopy. Analyze functional groups, multiplicity, and chemical environment effects.',
  keywords: [
    'nmr chemical shift calculator',
    'proton nmr calculator',
    'carbon 13 nmr',
    'h nmr prediction',
    'c nmr prediction',
    'chemical shift',
    'nmr spectroscopy',
    'multiplicity',
    'functional group analysis',
    'nmr interpretation',
  ],
};

export default function NMRChemicalShiftCalculatorPage() {  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 mb-4">
            NMR Chemical Shift Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Predict ¹H and ¹³C NMR chemical shifts for structure elucidation
          </p>
        </div>

        <NMRChemicalShiftCalculator />

        <div className="mt-16 space-y-12">
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              Understanding NMR Chemical Shifts
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Nuclear Magnetic Resonance (NMR) chemical shift is the resonant frequency of a nucleus relative to a 
                standard (usually tetramethylsilane, TMS). Chemical shifts provide crucial information about the electronic 
                environment of nuclei, enabling structure determination and functional group identification.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                ¹H NMR chemical shifts typically range from 0-13 ppm, while ¹³C NMR shifts span 0-220 ppm. Deshielding 
                effects from electronegative atoms, π-bonds, and aromatic rings cause downfield shifts (higher ppm values). 
                Understanding these patterns is essential for organic structure elucidation and compound characterization.
              </p>
            </div>
          </section>
        </div>
      </div>      </div>
      <Footer />
    </>
  );
}