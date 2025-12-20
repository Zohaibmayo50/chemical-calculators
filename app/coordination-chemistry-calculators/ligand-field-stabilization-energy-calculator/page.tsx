import type { Metadata } from 'next';
import LFSECalculator from '@/components/calculators/LFSECalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: 'Ligand Field Stabilization Energy Calculator | Crystal Field Theory',
  description:
    'Calculate LFSE for transition metal complexes in octahedral and tetrahedral geometries. Analyze d-orbital splitting, high spin vs low spin configurations.',
  keywords: [
    'LFSE calculator',
    'ligand field stabilization energy',
    'crystal field theory',
    'd orbital splitting',
    'octahedral complex',
    'tetrahedral complex',
    'high spin low spin',
    'transition metal',
    'coordination chemistry',
    'spectrochemical series',
  ],
};

export default function LFSECalculatorPage() {  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 mb-4">
            Ligand Field Stabilization Energy Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Calculate crystal field stabilization energy for transition metal complexes
          </p>
        </div>

        <LFSECalculator />

        <div className="mt-16 space-y-12">
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              Understanding Ligand Field Stabilization Energy
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Ligand Field Stabilization Energy (LFSE) quantifies the energetic stabilization of a transition metal complex 
                due to d-orbital splitting in a ligand field. In crystal field theory, ligands approach the metal ion and 
                cause the five degenerate d-orbitals to split into groups of different energies. The magnitude of this 
                splitting and the resulting electronic configuration determine the LFSE and many properties of the complex.
              </p>
            </div>
          </section>
        </div>
      </div>      </div>
      <Footer />
    </>
  );
}