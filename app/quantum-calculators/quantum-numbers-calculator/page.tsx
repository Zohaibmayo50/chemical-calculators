import type { Metadata } from 'next';
import QuantumNumbersCalculator from '@/components/calculators/QuantumNumbersCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: 'Quantum Numbers Calculator | Electron Configuration & Orbitals',
  description:
    'Validate quantum number sets, determine electron configurations, analyze orbital shapes and degeneracy using Pauli exclusion and Aufbau principles.',
  keywords: [
    'quantum numbers calculator',
    'electron configuration',
    'orbital shapes',
    'pauli exclusion principle',
    'aufbau principle',
    'azimuthal quantum number',
    'magnetic quantum number',
    'spin quantum number',
    'orbital degeneracy',
    'quantum mechanics',
  ],
};

export default function QuantumNumbersCalculatorPage() {  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 mb-4">
            Quantum Numbers Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Validate quantum number sets and explore electron configurations
          </p>
        </div>

        <QuantumNumbersCalculator />

        <div className="mt-16 space-y-12">
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              What are Quantum Numbers?
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Quantum numbers are a set of four numbers that describe the unique quantum state of an electron in an atom. 
                They arise from solutions to the Schrödinger equation and define the electron's energy, orbital shape, 
                spatial orientation, and spin. Understanding quantum numbers is fundamental to electron configuration, 
                chemical bonding, and predicting atomic properties.
              </p>
            </div>
          </section>
        </div>
      </div>      </div>
      <Footer />
    </>
  );
}