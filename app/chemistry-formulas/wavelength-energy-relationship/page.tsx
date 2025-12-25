import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Wavelength-Energy Relationship | E = hc/λ Photon Energy',
  description: 'Calculate photon energy from wavelength using E = hc/λ. Understand the inverse relationship between wavelength and energy in electromagnetic radiation.',
  keywords: ['wavelength energy relationship', 'photon energy', 'planck constant', 'speed of light', 'electromagnetic spectrum', 'E=hc/lambda']
};

export default function WavelengthEnergyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <nav className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <Link href="/">Home</Link>
            <span>→</span>
            <Link href="/chemistry-formulas">Chemistry Formulas</Link>
            <span>→</span>
            <span className="text-gray-900 dark:text-white font-medium">Wavelength-Energy Relationship</span>
          </nav>
        </div>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-600 rounded-3xl p-12 text-white shadow-2xl">
            <h1 className="text-5xl font-bold mb-4 text-center">Wavelength-Energy Relationship</h1>
            <p className="text-xl text-center text-cyan-100">
              Photon energy is inversely proportional to wavelength: shorter wavelength = higher energy
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-l-4 border-cyan-500">
            <h2 className="text-3xl font-bold mb-6">Energy Formula</h2>
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/30 dark:to-blue-900/30 rounded-xl p-8 mb-6">
              <div className="text-center">
                <div className="inline-block bg-white dark:bg-gray-700 rounded-lg p-6">
                  <p className="text-4xl font-mono font-bold text-cyan-900 dark:text-cyan-300 mb-4">E = hc / λ</p>
                  <p className="text-xl font-mono text-blue-700 dark:text-blue-400">E = hν</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-cyan-50 dark:bg-cyan-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-cyan-900 dark:text-cyan-300 mb-2">E (Joules)</h3>
                <p className="text-gray-700 dark:text-gray-300">Energy per photon</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-blue-900 dark:text-blue-300 mb-2">h = 6.626 × 10⁻³⁴ J·s</h3>
                <p className="text-gray-700 dark:text-gray-300">Planck's constant</p>
              </div>
              <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-indigo-900 dark:text-indigo-300 mb-2">c = 3.00 × 10⁸ m/s</h3>
                <p className="text-gray-700 dark:text-gray-300">Speed of light</p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Example Calculations</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-cyan-900 dark:text-cyan-300 mb-4">Example: Visible Light (550 nm)</h3>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>λ = 550 nm = 550 × 10⁻⁹ m</p>
                  <p>E = (6.626 × 10⁻³⁴)(3.00 × 10⁸) / (550 × 10⁻⁹)</p>
                  <p>E = 3.61 × 10⁻¹⁹ J per photon</p>
                  <p className="font-bold text-green-600">Green light photon energy</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-4">Example: X-ray (1.0 nm)</h3>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>λ = 1.0 nm = 1.0 × 10⁻⁹ m</p>
                  <p>E = hc/λ = 1.99 × 10⁻¹⁶ J</p>
                  <p className="font-bold text-orange-600">550× more energetic than green light!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Related Tools</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/atomic-structure-calculators/wavelength-energy-calculator" className="block p-6 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Wavelength-Energy Calculator</h3>
                <p className="text-cyan-100">Calculate photon properties</p>
              </Link>
              <Link href="/chemistry-formulas/planck-equation" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Planck Equation</h3>
                <p className="text-gray-600 dark:text-gray-400">E = hν formula</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
