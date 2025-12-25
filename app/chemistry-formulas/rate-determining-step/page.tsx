import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Rate Determining Step | ChemCalc',
  description: 'Understand how the slowest step controls overall reaction rate in multi-step mechanisms.',
  keywords: 'rate determining step, reaction mechanism, slowest step, kinetics, elementary steps',
}

export default function RateDeterminingStepPage() {
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
            <li className="text-gray-900">Rate Determining Step</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Rate Determining Step</h1>
          <p className="text-lg opacity-90">The slowest step controls the overall rate</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Core Concept</h2>
          <div className="bg-rose-50 border-l-4 border-rose-500 p-4 mb-4">
            <p className="text-lg font-semibold text-rose-700">Overall reaction rate = rate of slowest elementary step</p>
            <p className="text-gray-700 mt-2">Like a bottleneck: can't go faster than the narrowest point</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example Mechanism</h2>
          <div className="bg-gray-50 p-4 rounded mb-3">
            <p className="font-semibold text-gray-800">Overall: 2NO₂ + F₂ → 2NO₂F</p>
          </div>
          <div className="space-y-3 text-gray-700">
            <div className="bg-rose-50 p-3 rounded">
              <p className="font-semibold">Step 1 (slow): NO₂ + F₂ → NO₂F + F</p>
              <p className="text-sm">Rate₁ = k₁[NO₂][F₂]</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="font-semibold">Step 2 (fast): NO₂ + F → NO₂F</p>
              <p className="text-sm">Rate₂ = k₂[NO₂][F]</p>
            </div>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Overall rate law: Rate = k₁[NO₂][F₂]</p>
            <p className="text-gray-700 mt-1">Determined by slow step only</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Identifying Rate-Determining Step</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Has highest activation energy (E<sub>a</sub>)</li>
            <li>Slowest elementary step in mechanism</li>
            <li>Determines rate law for overall reaction</li>
            <li>Species in slow step appear in rate law</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Key Points</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>If slow step is first: rate law uses reactants directly</li>
            <li>If slow step is later: may need pre-equilibrium approximation for intermediates</li>
            <li>Fast steps after slow step don't affect rate law</li>
            <li>Sum of elementary steps = overall balanced equation</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  )
}
