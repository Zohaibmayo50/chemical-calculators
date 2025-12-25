import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Hybridization Rules | ChemCalc',
  description: 'Determine sp, sp², sp³, and other hybrid orbitals from molecular geometry.',
  keywords: 'hybridization, sp, sp2, sp3, VSEPR, molecular geometry',
}

export default function HybridizationPage() {
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
            <li className="text-gray-900">Hybridization Rules</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Hybridization Rules</h1>
          <p className="text-lg opacity-90">Determine hybrid orbital types</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Steric Number Method</h2>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
            <p className="text-lg font-semibold text-green-700">Steric Number = (bonding pairs) + (lone pairs)</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-semibold">SN = 2 → sp (linear)</p>
              <p>Example: CO₂, BeCl₂</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-semibold">SN = 3 → sp² (trigonal planar)</p>
              <p>Example: BF₃, CH₂=CH₂</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-semibold">SN = 4 → sp³ (tetrahedral)</p>
              <p>Example: CH₄, NH₃, H₂O</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-semibold">SN = 5 → sp³d (trigonal bipyramidal)</p>
              <p>Example: PCl₅</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-semibold">SN = 6 → sp³d² (octahedral)</p>
              <p>Example: SF₆</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example: NH₃</h2>
          <div className="space-y-2 text-gray-700">
            <p>N has 3 bonding pairs (to H) + 1 lone pair</p>
            <p>Steric number = 3 + 1 = 4</p>
            <p>Hybridization: sp³</p>
            <p>Molecular geometry: trigonal pyramidal (lone pair affects shape)</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: sp³ hybridization</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Quick Tips</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Multiple bonds (double, triple) count as ONE bonding region.</li>
            <li>Lone pairs on central atom count toward steric number.</li>
            <li>Hybridization = electron geometry; molecular geometry considers lone pairs.</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  )
}
