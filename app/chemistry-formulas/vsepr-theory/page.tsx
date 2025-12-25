import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'VSEPR Theory | ChemCalc',
  description: 'Predict molecular geometry using Valence Shell Electron Pair Repulsion theory.',
  keywords: 'VSEPR theory, molecular geometry, electron pairs, bond angles, Lewis structure',
}

export default function VSEPRTheoryPage() {
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
            <li className="text-gray-900">VSEPR Theory</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">VSEPR Theory</h1>
          <p className="text-lg opacity-90">Predict 3D molecular shapes from electron pairs</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Core Principle</h2>
          <div className="bg-cyan-50 border-l-4 border-cyan-500 p-4 mb-4">
            <p className="text-lg font-semibold text-cyan-700">Electron pairs repel to maximize distance</p>
            <p className="text-gray-700 mt-2">Regions of electron density (bonding + lone pairs) arrange themselves to minimize repulsion</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Geometries by Electron Groups</h2>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-semibold text-cyan-700">2 groups → Linear (180°)</p>
                <p>Example: CO₂, BeCl₂</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-semibold text-cyan-700">3 groups → Trigonal planar (120°)</p>
                <p>Example: BF₃, NO₃⁻</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-semibold text-cyan-700">4 groups → Tetrahedral (109.5°)</p>
                <p>Example: CH₄, NH₄⁺</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-semibold text-cyan-700">5 groups → Trigonal bipyramidal</p>
                <p>Example: PCl₅ (90°, 120°, 180°)</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-semibold text-cyan-700">6 groups → Octahedral (90°, 180°)</p>
                <p>Example: SF₆</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example: H₂O</h2>
          <div className="space-y-2 text-gray-700">
            <p>Central atom O: 2 bonding pairs (to H) + 2 lone pairs = 4 electron groups</p>
            <p>Electron geometry: Tetrahedral</p>
            <p>Molecular geometry: <strong>Bent</strong> (only atoms counted)</p>
            <p>Bond angle: ~104.5° (compressed from 109.5° by lone pairs)</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Lone pairs repel more than bonding pairs → smaller bond angles</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Key Rules</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Multiple bonds count as ONE electron region</li>
            <li>Lone pairs occupy more space: LP-LP &gt; LP-BP &gt; BP-BP repulsion</li>
            <li>Molecular shape describes only atom positions, not lone pairs</li>
          </ul>
        </section>

        {/* Related Calculators */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/atomic-structure-calculators/lewis-structure-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Lewis Structure Calculator</h3>
              <p className="text-sm text-gray-600">Draw Lewis structures</p>
            </a>
            <a href="/atomic-structure-calculators/hybridization-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Hybridization Calculator</h3>
              <p className="text-sm text-gray-600">Determine orbital types</p>
            </a>
            <a href="/chemistry-formulas/hybridization" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Hybridization Rules</h3>
              <p className="text-sm text-gray-600">sp, sp², sp³ determination</p>
            </a>
            <a href="/atomic-structure-calculators" className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">All Atomic Structure Calculators</h3>
              <p className="text-sm opacity-90">Explore all molecular structure tools</p>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
