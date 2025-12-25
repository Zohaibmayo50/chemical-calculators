import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: "Bragg's Law | ChemCalc",
  description: 'X-ray diffraction: nλ = 2d sinθ for crystal structure determination.',
  keywords: 'Bragg law, X-ray diffraction, crystal structure, lattice spacing',
}

export default function BraggsLawPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <nav className="text-sm breadcrumbs mb-8">
          <ul className="flex space-x-2 text-gray-600">
            <li><a href="/" className="hover:text-blue-600">Home</a></li>
            <li><span className="mx-2">/</span></li>
            <li><a href="/chemistry-formulas" className="hover:text-blue-600">Chemistry Formulas</a></li>
            <li><span className="mx-2">/</span></li>
            <li className="text-gray-900">Bragg's Law</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Bragg's Law</h1>
          <p className="text-lg opacity-90">X-ray diffraction from crystal planes</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Formula</h2>
          <div className="bg-teal-50 border-l-4 border-teal-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-teal-700">n λ = 2 d sin θ</p>
          </div>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
            <li><strong>n</strong> = order of diffraction (1, 2, 3...)</li>
            <li><strong>λ</strong> = X-ray wavelength (m)</li>
            <li><strong>d</strong> = spacing between crystal planes (m)</li>
            <li><strong>θ</strong> = angle of incidence</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example</h2>
          <p className="text-gray-700 mb-3"><strong>Given:</strong> λ = 1.54 Å (Cu Kα), θ = 15°, n = 1.</p>
          <div className="space-y-2 text-gray-700">
            <p>d = n λ / (2 sin θ)</p>
            <p>d = (1 × 1.54 Å) / (2 × sin 15°)</p>
            <p>d ≈ 1.54 / (2 × 0.2588) ≈ 2.98 Å</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: d ≈ 2.98 Å</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Applications</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Determine crystal structure and lattice parameters.</li>
            <li>Identify compounds via powder diffraction patterns.</li>
            <li>Constructive interference occurs when path difference = nλ.</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  )
}
