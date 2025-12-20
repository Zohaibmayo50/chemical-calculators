import type { Metadata } from 'next';
import BufferCapacityCalculator from '@/components/calculators/BufferCapacityCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: 'Buffer Capacity Calculator | pH Resistance & Buffer Design',
  description:
    'Calculate buffer capacity, predict pH changes from added acid/base, design optimal buffer solutions using Henderson-Hasselbalch equation.',
  keywords: [
    'buffer capacity calculator',
    'henderson hasselbalch',
    'buffer solution',
    'pH buffer',
    'weak acid buffer',
    'conjugate base',
    'buffer design',
    'pH resistance',
    'buffer range',
    'phosphate buffer',
  ],
};

export default function BufferCapacityCalculatorPage() {  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 mb-4">
            Buffer Capacity Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Calculate buffer capacity and design optimal pH buffer solutions
          </p>
        </div>

        <BufferCapacityCalculator />

        <div className="mt-16 space-y-12">
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              Understanding Buffer Capacity
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Buffer capacity (β) quantifies a buffer solution's ability to resist pH changes when acids or bases are added. 
                It represents the amount of strong acid or base (in moles) that must be added to 1 liter of buffer to change 
                the pH by 1 unit. Buffers are most effective when pH equals pKa and within the range pKa ± 1.
              </p>
            </div>
          </section>
        </div>
      </div>      </div>
      <Footer />
    </>
  );
}