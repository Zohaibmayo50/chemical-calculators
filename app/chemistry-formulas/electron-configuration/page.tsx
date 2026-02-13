import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Electron Configuration Rules',
  description: 'Aufbau principle, Pauli exclusion, and Hund\'s rule for electron arrangement.',
  keywords: 'electron configuration, Aufbau principle, Pauli exclusion, Hund rule, orbital filling',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/electron-configuration',
  },
}

export default function ElectronConfigurationPage() {
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
            <li className="text-gray-900">Electron Configuration Rules</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Electron Configuration Rules</h1>
          <p className="text-lg opacity-90">Principles for filling atomic orbitals</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Understanding Electron Configuration</h2>
          <p className="text-gray-700 mb-4">
            Electron configuration describes the distribution of electrons among atomic orbitals in an atom. It's fundamental to understanding chemical bonding, periodic properties, magnetic behavior, and spectroscopic characteristics. The arrangement of electrons determines how atoms interact with light and form bonds with other atoms, making it central to all of chemistry.
          </p>
          <p className="text-gray-700 mb-4">
            Developed from quantum mechanics in the early 20th century, electron configuration follows specific rules derived from the physics of atomic orbitals. Niels Bohr's model introduced energy levels, while later quantum mechanical treatments by Schrödinger, Heis enberg, and Pauli provided the mathematical foundation for modern orbital theory and the principles governing electron arrangement.
          </p>
          <p className="text-gray-700">
            The electron configuration notation uses numbers (principal quantum number n) and letters (orbital type: s, p, d, f) with superscripts showing electron count. For example, 1s² 2s² 2p⁶ represents neon's configuration with completely filled first and second shells, explaining its chemical inertness as a noble gas.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Three Fundamental Principles</h2>
          <div className="space-y-4 text-gray-700">
            <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
              <h3 className="font-bold text-blue-700 mb-2">1. Aufbau Principle</h3>
              <p className="mb-2">Fill orbitals from lowest to highest energy: 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, 5s, 4d, 5p, 6s, 4f, 5d, 6p...</p>
              <p className="text-sm">The n+l rule predicts ordering: lower (n+l) fills first; if tied, lower n fills first. Example: 4s (n+l=4) before 3d (n+l=5).</p>
            </div>
            <div className="bg-green-50 p-4 rounded border-l-4 border-green-500">
              <h3 className="font-bold text-green-700 mb-2">2. Pauli Exclusion Principle</h3>
              <p className="mb-2">No two electrons can have identical quantum numbers. Maximum 2 electrons per orbital with opposite spins (↑↓).</p>
              <p className="text-sm">Wolfgang Pauli's 1925 principle explains orbital capacity limits and why matter has volume.</p>
            </div>
            <div className="bg-purple-50 p-4 rounded border-l-4 border-purple-500">
              <h3 className="font-bold text-purple-700 mb-2">3. Hund's Rule</h3>
              <p className="mb-2">Fill degenerate orbitals singly with parallel spins before pairing. Minimizes electron-electron repulsion.</p>
              <p className="text-sm">Example: p³ is ↑ ↑ ↑ (all singly occupied) not ↑↓ ↑ (one paired).</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Detailed Example: Oxygen (Z = 8)</h2>
          <div className="space-y-3 text-gray-700 bg-gray-50 p-4 rounded">
            <p><strong>Step 1:</strong> Total electrons = 8</p>
            <p><strong>Step 2:</strong> Fill by Aufbau: 1s(2), 2s(2), 2p(4)</p>
            <p><strong>Step 3:</strong> Apply Hund's to 2p⁴: ↑↓ ↑ ↑</p>
            <p><strong>Configuration:</strong> 1s² 2s² 2p⁴</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: 1s² 2s² 2p⁴</p>
            <p className="text-sm text-gray -600 mt-2">Oxygen has 2 unpaired electrons (paramagnetic)</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Orbital Capacity</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-gray-700">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left">Subshell</th>
                  <th className="px-4 py-2 text-left"># Orbitals</th>
                  <th className="px-4 py-2 text-left">Max Electrons</th>
                  <th className="px-4 py-2 text-left">Shape</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="px-4 py-2">s</td>
                  <td className="px-4 py-2">1</td>
                  <td className="px-4 py-2">2</td>
                  <td className="px-4 py-2">Spherical</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">p</td>
                  <td className="px-4 py-2">3</td>
                  <td className="px-4 py-2">6</td>
                  <td className="px-4 py-2">Dumbbell</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">d</td>
                  <td className="px-4 py-2">5</td>
                  <td className="px-4 py-2">10</td>
                  <td className="px-4 py-2">Complex</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">f</td>
                  <td className="px-4 py-2">7</td>
                  <td className="px-4 py-2">14</td>
                  <td className="px-4 py-2">Very complex</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Notable Exceptions</h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div className="bg-orange-50 p-4 rounded">
              <h3 className="font-semibold text-orange-900 mb-2">Chromium (Cr, Z=24)</h3>
              <p><strong>Expected:</strong> [Ar] 4s² 3d⁴</p>
              <p><strong>Actual:</strong> [Ar] 4s¹ 3d⁵</p>
              <p className="text-sm mt-2">Half-filled d⁵ provides extra stability</p>
            </div>
            <div className="bg-orange-50 p-4 rounded">
              <h3 className="font-semibold text-orange-900 mb-2">Copper (Cu, Z=29)</h3>
              <p><strong>Expected:</strong> [Ar] 4s² 3d⁹</p>
              <p><strong>Actual:</strong> [Ar] 4s¹ 3d¹⁰</p>
              <p className="text-sm mt-2">Fully filled d¹⁰ more stable</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/quantum-and-atomic-structure-calculators/electron-configuration-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Electron Configuration Calculator</h3>
              <p className="text-sm text-gray-600">Generate configurations for any element</p>
            </a>
            <a href="/quantum-and-atomic-structure-calculators/quantum-numbers-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Quantum Numbers Calculator</h3>
              <p className="text-sm text-gray-600">Validate quantum number sets</p>
            </a>
            <a href="/chemistry-formulas/quantum-numbers" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Quantum Numbers</h3>
              <p className="text-sm text-gray-600">n, l, m<sub>l</sub>, m<sub>s</sub> explained</p>
            </a>
            <a href="/chemistry-formulas/bohr-model" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Bohr Model</h3>
              <p className="text-sm text-gray-600">Energy levels and shells</p>
            </a>
            <a href="/quantum-and-atomic-structure-calculators" className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">All Quantum & Atomic Structure Calculators</h3>
              <p className="text-sm opacity-90">Explore all quantum and atomic tools</p>
            </a>
          </div>
        </section>
      
      {/* Structured Data - EducationalArticle */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": "Electron Configuration",
            "description": "Electron Configuration on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/electron-configuration",
            "author": {
              "@type": "Person",
              "name": "Muhammad Zohaib",
              "jobTitle": "Chemist"
            },
            "publisher": {
              "@type": "EducationalOrganization",
              "name": "ChemSolved",
              "url": "https://chemsolved.com"
            },
            "educationalLevel": "University",
            "educationalUse": "Reference"
          })
        }}
      />
      {/* Structured Data - BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://chemsolved.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Electron Configuration",
                "item": "https://chemsolved.com/chemistry-formulas/electron-configuration"
              }
            ]
          })
        }}
      />
      </main>
      <Footer />
    </div>
  )
}
